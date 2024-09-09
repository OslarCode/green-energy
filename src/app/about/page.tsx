// src/app/about/page.tsx
import React from "react";
import Image from "next/image";

const AboutPage: React.FC = () => {
  const partners = [
    { name: "Tesla", logo: "/images/tesla-svgrepo-com.svg" },
    { name: "SolarCity", logo: "/images/solar-panel-svgrepo-com.svg" },
    { name: "Vestas", logo: "/images/vestas-1.svg" },
    { name: "First Solar", logo: "/images/solar-energy-svgrepo-com.svg" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">
        About Our Renewable Energy Startup
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-4">
          At GreenPower Innovations, we are dedicated to revolutionizing the
          energy sector through sustainable and renewable solutions. Our mission
          is to accelerate the global transition to clean energy, reducing
          carbon emissions and creating a more sustainable future for all.
        </p>
        <p className="mb-4">
          Founded in 2020, our team of experts combines years of experience in
          renewable energy technologies, environmental science, and business
          development. We're passionate about harnessing the power of solar,
          wind, and other renewable sources to provide reliable, affordable, and
          clean energy solutions.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>
            Innovative Technology: We continuously invest in research and
            development to stay at the forefront of renewable energy technology.
          </li>
          <li>
            Customized Solutions: We understand that every client has unique
            needs, so we tailor our solutions to meet specific requirements and
            goals.
          </li>
          <li>
            Sustainability Focus: Beyond just providing renewable energy, we
            ensure our entire operation minimizes environmental impact.
          </li>
          <li>
            Community Engagement: We believe in educating and involving local
            communities in the transition to renewable energy.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Partners</h2>
        <p className="mb-4">
          We're proud to work with some of the most innovative companies in the
          renewable energy sector:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {partners.map((partner) => (
            <div key={partner.name} className="flex flex-col items-center">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={100}
                height={100}
              />
              <p className="mt-2">{partner.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
