// src/app/page.tsx
import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import CtaSection from "../components/CtaSection";

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <CtaSection />
    </div>
  );
};

export default HomePage;
