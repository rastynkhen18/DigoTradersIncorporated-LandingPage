import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ServicesBackgroundImage from '../assets/images/services-bg.png';
import Sidebar from '../components/ServicesSidebar';
import Seafreight from './seafreight';
import Airfreight from './airfreight';
import Landfreight from './landfreight';
import CustomBrokerage from './custombrokerage';
// import FclLcl from './fcl-lcl';
// import Domestic from './domestic';
// import Freight&TariffConsultation from './/freight-&-tariff-consulatation';
// import AmoCertificate from './amo-certificate';
// import ImportLicense from './import-license';

const ServicesLayoutPage = () => {
  return (
    <div>
      <section
        className="flex justify-center items-center h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${ServicesBackgroundImage})` }}
      >
        <h1 className="bg-[var(--primary-accent)] text-[var(--white-color)] text-4xl px-6 py-4 rounded-md font-bold">
          OUR SERVICES
        </h1>
      </section>

      <main className="flex min-h-screen px-35">
        <Sidebar />
        <div className="flex-1 p-6">
          <Routes>
            <Route path="seafreight" element={<Seafreight />} />
            <Route path="airfreight" element={<Airfreight />} />
            <Route path="landfreight" element={<Landfreight />} />
            <Route path="custombrokerage" element={<CustomBrokerage />} />
            {/* <Route path="fcl-lcl" element={<FclLcl />} /> */}
            {/* <Route path="domestic" element={<Domestic />} /> */}
            {/* <Route path="freight-&-tariff-consulatation" element={<Freight&TariffConsultation />} /> */}
            {/* <Route path="amo-certificate" element={<AmoCertificate />} /> */}
            {/* <Route path="import-license" element={<ImportLicense />} />  */}
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default ServicesLayoutPage;
