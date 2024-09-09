// src/app/about/page.tsx
import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">
        About Our Renewable Energy Startup
      </h1>
      <p className="mb-4">
        We are a innovative startup dedicated to revolutionizing the energy
        sector through sustainable and renewable solutions. Our mission is to
        accelerate the global transition to clean energy, reducing carbon
        emissions and creating a more sustainable future for all.
      </p>
      <p className="mb-4">
        Founded in 2023, our team of experts combines years of experience in
        renewable energy technologies, environmental science, and business
        development. We're passionate about harnessing the power of solar, wind,
        and other renewable sources to provide reliable, affordable, and clean
        energy solutions.
      </p>
      <p>
        Join us in our journey to create a greener, more sustainable world.
        Together, we can make a difference!
      </p>
    </div>
  );
};

export default AboutPage;
