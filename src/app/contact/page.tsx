// src/app/contact/page.tsx
import React from "react";
import ContactForm from "../../components/ContactForm";

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="mb-6">
        We'd love to hear from you! Whether you have a question about our
        services, want to partner with us, or just want to say hello, please
        don't hesitate to reach out.
      </p>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
