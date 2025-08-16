import React from "react";
import { Routes, Route } from "react-router-dom";
import Header2 from "../components/Header2";
import ServicesBackgroundImage from "../assets/images/services-bg.png";
import Sidebar from "../components/ServicesSidebar";
import Seafreight from "../pages/ServicesPages/seafreight";
import Airfreight from "../pages/ServicesPages/airfreight";
import Landfreight from "../pages/ServicesPages/landfreight";
import CustomBrokerage from "../pages/ServicesPages/custombrokerage";
import FclLcl from "../pages/ServicesPages/fcl_lcl";
import DomesticTransferServices from "../pages/ServicesPages/domesticTransferServices";
import TruckingServices from "../pages/ServicesPages/truckingServices";
import AmoCertificate from "../pages/ServicesPages/amoCertificate";
import ImportLicense from "../pages/ServicesPages/importLicense";

const ServicesRoutes = () => {
	return (
		<div>
			<section className="relative flex justify-center items-center flex-col h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${ServicesBackgroundImage})` }}>
				<div className="absolute inset-0 bg-black opacity-70 z-0"></div>

				<div className="relative text-center px-6">
					<h1 className="text-4xl md:text-5xl text-[var(--primary-color)] py-4 font-bold">SERVICES</h1>
					<p className="text-base md:text-lg text-[var(--white-color)]">Trusted logistics solutions tailored to meet industry standards and business demands.</p>
				</div>
			</section>

			<main className="flex min-h-screen gap-5">
				<Header2 />
				<Sidebar />
				<div>
					<Routes>
						<Route path="seafreight" element={<Seafreight />} />
						<Route path="airfreight" element={<Airfreight />} />
						<Route path="landfreight" element={<Landfreight />} />
						<Route path="custombrokerage" element={<CustomBrokerage />} />
						<Route path="fcl_lcl" element={<FclLcl />} />
						<Route path="domestic-transfer-services" element={<DomesticTransferServices />} />
						<Route path="trucking-services" element={<TruckingServices />} />
						<Route path="amo-certificate" element={<AmoCertificate />} />
						<Route path="import-license" element={<ImportLicense />} />
					</Routes>
				</div>
			</main>
		</div>
	);
};

export default ServicesRoutes;
