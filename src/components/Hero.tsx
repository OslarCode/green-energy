// src/components/Hero.tsx
"use client";
import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <div className="bg-green-500 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Powering a Sustainable Future
        </h1>
        <p className="text-xl mb-8">
          Join us in revolutionizing the energy sector with innovative renewable
          solutions.
        </p>
        <Link
          href="/contact"
          className="bg-white text-green-500 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Hero;
