import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ServicesBackgroundImage from '../assets/images/services-bg.png';
import Sidebar from '../components/ServicesSidebar';
import Seafreight from './seafreight';
import Airfreight from './airfreight';
import Landfreight from './landfreight';
import CustomBrokerage from './custombrokerage';
import FclLcl from './fcl_lcl';
import DomesticTransferServices from './domesticTransferServices';
import FreightTariffConsultation from './freightTariffConsultation';
import AmoCertificate from './amoCertificate';
import ImportLicense from './importLicense';

const ServicesLayoutPage = () => {
  return (
    <div>
      <section
        className="relative flex justify-center items-center flex-col h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${ServicesBackgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-5xl text-[var(--primary-color)] py-4 font-bold">
            SERVICES
          </h1>
          <p className="text-base md:text-lg text-[var(--white-color)]">
            Trusted logistics solutions tailored to meet industry standards and business demands.
          </p>
        </div>
      </section>

      <main className="flex min-h-screen gap-5">
        <Sidebar />
        <div>
          <Routes>
            <Route path="seafreight" element={<Seafreight />} />
            <Route path="airfreight" element={<Airfreight />} />
            <Route path="landfreight" element={<Landfreight />} />
            <Route path="custombrokerage" element={<CustomBrokerage />} />
            <Route path="fcl_lcl" element={<FclLcl />} />
            <Route path="domestic-transfer-services" element={<DomesticTransferServices />} />
            <Route path="freight-&-tariff-consultation" element={<FreightTariffConsultation />} />
            <Route path="amo-certificate" element={<AmoCertificate />} />
            <Route path="import-license" element={<ImportLicense />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default ServicesLayoutPage;
