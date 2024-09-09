// src/app/page.tsx
import React from "react";
import Hero from "../components/Hero";

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Solar Energy Solutions
            </h3>
            <p>
              Harness the power of the sun with our cutting-edge solar panel
              technology.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Wind Power Systems</h3>
            <p>
              Efficient and reliable wind turbines for both residential and
              commercial use.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Energy Storage Solutions
            </h3>
            <p>
              Advanced battery systems to store and manage your renewable
              energy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
