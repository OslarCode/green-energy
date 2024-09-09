// src/components/Features.tsx
"use client";
import React from "react";

const Features: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Innovative Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Solar Energy Systems</h3>
            <p>
              High-efficiency solar panels and integrated energy management
              solutions for homes and businesses.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Wind Power Technology
            </h3>
            <p>
              Advanced wind turbines designed for maximum energy capture in
              various environmental conditions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Energy Storage Solutions
            </h3>
            <p>
              Cutting-edge battery systems to store excess energy and ensure a
              stable power supply.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
