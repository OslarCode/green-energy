// src/components/CtaSection.tsx
"use client";
import React from "react";
import Link from "next/link";

const CtaSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Go Green?</h2>
        <p className="mb-8 text-xl">
          Join the renewable energy revolution and start saving today!
        </p>
        <Link href="/contact" className="btn btn-primary">
          Get a Free Consultation
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
