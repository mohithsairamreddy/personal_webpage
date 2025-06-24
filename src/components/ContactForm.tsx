import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { sendEmail, sendEmailViaMailto, ContactFormData, validateContactForm } from '@/services/emailService';

interface ContactFormProps {
  useEmailJS?: boolean; // Toggle between EmailJS and mailto
}

const ContactForm: React.FC<ContactFormProps> = ({ useEmailJS = false }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateContactForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      if (useEmailJS) {
        // Use EmailJS service
        const response = await sendEmail(formData);
        
        if (response.success) {
          setSubmitStatus('success');
          setStatusMessage(response.message);
          setFormData({ name: '', email: '', message: '' });
        } else {
          setSubmitStatus('error');
          setStatusMessage(response.message);
        }
      } else {
        // Use mailto fallback
        sendEmailViaMailto(formData);
        setSubmitStatus('success');
        setStatusMessage('Email client opened successfully!');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
      
      // Auto-hide status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="flex items-center gap-2 p-3 mb-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
          <CheckCircle className="w-4 h-4" />
          <span className="text-sm">{statusMessage}</span>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="flex items-center gap-2 p-3 mb-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          <AlertCircle className="w-4 h-4" />
          <span className="text-sm">{statusMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            type="text"
            name="name"
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleInputChange}
            className={`h-12 rounded-xl border-2 ${errors.name ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'}`}
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-2">{errors.name}</p>
          )}
        </div>

        <div>
          <Input
            type="email"
            name="email"
            placeholder="Your Email *"
            value={formData.email}
            onChange={handleInputChange}
            className={`h-12 rounded-xl border-2 ${errors.email ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'}`}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-2">{errors.email}</p>
          )}
        </div>

        <Textarea
          name="message"
          placeholder="Questions, Ideas, or Opportunities? Type it here...."
          value={formData.message}
          onChange={handleInputChange}
          rows={5}
          className="rounded-xl border-2 border-gray-200 focus:border-blue-500"
          disabled={isSubmitting}
        />

        <Button 
          type="submit" 
          className="w-full tech-gradient text-white h-12 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-3 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Mail className="mr-3 h-5 w-5" />
              Send Message
            </>
          )}
        </Button>
      </form>

      <div className="text-center">
        <p className="text-sm text-gray-500">
          {useEmailJS ? 'Messages sent via EmailJS' : 'Opens your default email client'}
        </p>
      </div>
    </div>
  );
};

export default ContactForm; 