import ContactForm from '@/components/ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/40 to-purple-100/40"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 tech-gradient-text">Let's Build Something Amazing</h2>
            <p className="text-gray-600 text-lg mb-8">Ready to discuss your next data engineering challenge?</p>
          </div>
          
          <ContactForm useEmailJS={true} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 