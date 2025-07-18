import React from "react";

const Services = () => {
  return (
    <div>
      <main className="flex flex-col justify-center items-center bg-[var(--bg-color)] p-5 md:p-20">
        <h1 className="text-4xl font-bold mb-4 mt-5 text-[var(--text-color)]">Our Services</h1>
        <p className="text-xl mb-15 text-[var(--text-color)]">
          Comprehensive customs brokerage and trade faciliation services.
        </p>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
            <h1>Customs Clearance</h1>
            <p>
              Expert handling of all customs documentation and clearance
              procedures for imports and exports.
            </p>
          </div>
          <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
            <h1>Logistics Coordination</h1>
            <p>
              Seamless coordination of shipping and logistics operations for
              efficient cargo movement.
            </p>
          </div>
          <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
            <h1>Compliance Consulting</h1>
            <p>
              Professional guidance on trade regulations and compliance
              requirements.
            </p>
          </div>
          <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
            <h1>Duty & Tax Calculation</h1>
            <p>
              Accurate calculation and management of customs duties and taxes.
            </p>
          </div>
          <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
            <h1>International Trade</h1>
            <p>
              Comprehensive support for international trade operations and
              documentation.
            </p>
          </div>
          <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
            <h1>24/7 Support</h1>
            <p>
              Round-the-clock customer support for all your customs brokerage
              needs.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;
