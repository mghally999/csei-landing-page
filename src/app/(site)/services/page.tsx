"use client";

import React from "react";

const Services: React.FC = () => {
  const services = [
    {
      title: "General Checkup",
      description:
        "Comprehensive medical examination to ensure your well-being.",
    },
    {
      title: "Laboratory Services",
      description: "Advanced lab tests with quick and reliable results.",
    },
    {
      title: "Specialist Consultation",
      description:
        "Access to experienced medical specialists across departments.",
    },
    {
      title: "Emergency Services",
      description: "24/7 emergency care with expert medical staff.",
    },
    {
      title: "Radiology & Imaging",
      description:
        "Modern diagnostic imaging including X-ray, MRI, and ultrasound.",
    },
    {
      title: "Pharmacy",
      description: "On-site pharmacy with prescription fulfillment services.",
    },
  ];

  return (
    <section className="mb-20 px-4 py-12 bg-gray-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We provide a wide range of services tailored to ensure the best
          possible care for our patients.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
