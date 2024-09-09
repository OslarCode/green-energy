// src/components/Testimonials.tsx
"use client";
import React from "react";

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 bg-green-500 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
            <p className="mb-4">
              "Switching to renewable energy has significantly reduced our
              carbon footprint and energy costs. The team's expertise and
              support throughout the process were invaluable."
            </p>
            <p className="font-semibold">- John Doe, CEO of Green Corp</p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
            <p className="mb-4">
              "The solar panel installation was smooth and professional. We're
              now generating more power than we consume, and it feels great to
              be energy independent!"
            </p>
            <p className="font-semibold">- Jane Smith, Homeowner</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
