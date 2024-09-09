// src/app/contact/page.tsx
import React from "react";
import ContactForm from "../../components/ContactForm";

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="mb-6 text-center max-w-2xl">
        We'd love to hear from you! Whether you have a question about our
        services, want to partner with us, or just want to say hello, please
        don't hesitate to reach out.
      </p>
      <div className="w-full max-w-md">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
