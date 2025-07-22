import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ServicesBackgroundImage from '../assets/images/services-bg.png';
import Sidebar from '../components/Sidebar';
import Seafreight from './seafreight';
import Airfreight from './airfreight';
// import Landfreight from './landfreight';
// import Customs from './customs';
// import FclLcl from './fcl-lcl';
// import Domestic from './domestic';
// import AmoCertificate from './amo-certificate';
// import ImportLicense from './import-license';

const Services = () => {
  return (
    <div>
      <section
        className="flex justify-center items-center h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${ServicesBackgroundImage})` }}
      >
        <h1 className="bg-[var(--primary-accent)] text-[var(--white-color)] text-4xl px-6 py-4 rounded-md">
          Our Services
        </h1>
      </section>

      <main className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 p-6">
          <Routes>
            {/* Redirect default /services to /services/seafreight */}
            <Route path="/" element={<Navigate to="seafreight" replace />} />
            <Route path="seafreight" element={<Seafreight />} />
            <Route path="airfreight" element={<Airfreight />} />
            {/* <Route path="landfreight" element={<Landfreight />} />
            <Route path="customs" element={<Customs />} />
            <Route path="fcl-lcl" element={<FclLcl />} />
            <Route path="domestic" element={<Domestic />} />
            <Route path="amo-certificate" element={<AmoCertificate />} />
            <Route path="import-license" element={<ImportLicense />} /> */}
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default Services;
