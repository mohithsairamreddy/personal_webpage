import emailjs from '@emailjs/browser';
import { classifyMessageAdvanced } from './messageClassifier';

// EmailJS configuration - Loaded from environment variables for security
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Initialize EmailJS - this will be called when the module loads
try {
  emailjs.init(EMAILJS_PUBLIC_KEY);
  console.log('EmailJS initialized successfully');
} catch (error) {
  console.error('Failed to initialize EmailJS:', error);
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

export const sendEmail = async (formData: ContactFormData): Promise<EmailResponse> => {
  try {
    console.log('Attempting to send email with EmailJS...');
    
    // Classify message and extract clean category for subject
    const messageContent = formData.message || 'Hi! I visited your portfolio and would like to connect with you.';
    const classification = classifyMessageAdvanced(messageContent, formData.name);
    
    // Extract just the category suffix (e.g., "General Contact", "Job Inquiry", etc.)
    const categoryMatch = classification.subjectLine.match(/— (.+)$/);
    const classifiedSubject = categoryMatch ? categoryMatch[1] : 'General Contact';
    
    // Prepare template parameters with AI-classified subject
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: messageContent,
      smart_subject: `New Message from ${formData.name} — ${classifiedSubject}`,
    };

    console.log('Template params:', templateParams);

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('EmailJS response:', response);
    
    if (response.status === 200) {
      return {
        success: true,
        message: '✅ Message sent successfully! Mohith will receive your email and respond soon. Thank you for reaching out!'
      };
    } else {
      throw new Error(`EmailJS returned status: ${response.status}`);
    }
  } catch (error) {
    console.error('Email sending error:', error);
    
    // More detailed error handling for EmailJS specific errors
    if (error && typeof error === 'object' && 'status' in error) {
      const emailError = error as any;
      console.error('EmailJS Error Status:', emailError.status);
      console.error('EmailJS Error Text:', emailError.text);
      
      return {
        success: false,
        message: `EmailJS Error (${emailError.status}): ${emailError.text || 'Unknown error'}`
      };
    }
    
    if (error instanceof Error) {
      console.error('Error details:', error.message);
      return {
        success: false,
        message: `Failed to send message: ${error.message}`
      };
    }
    
    return {
      success: false,
      message: 'Failed to send message. Please try the email button above instead.'
    };
  }
};

// Fallback mailto function (original approach)
export const sendEmailViaMailto = (formData: ContactFormData): void => {
  const subject = `Portfolio Contact from ${formData.name}`;
  const body = `Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message || 'No message provided'}

---
This message was sent from your portfolio website contact form.`;
  
  const mailtoLink = `mailto:mohithsairamreddy@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(mailtoLink, '_blank');
};

// Validate email format
export const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Validate form data
export const validateContactForm = (formData: ContactFormData): { [key: string]: string } => {
  const errors: { [key: string]: string } = {};
  
  if (!formData.name.trim()) {
    errors.name = 'Name is required';
  }
  
  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email';
  }
  
  return errors;
}; 