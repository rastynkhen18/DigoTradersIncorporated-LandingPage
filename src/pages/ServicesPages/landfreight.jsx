import React from "react";
import ServicesLandFreightImg1 from "../../assets/images/servicesLandFreightImg1.png";
import ServicesLandFreightImg2 from "../../assets/images/servicesLandFreightImg2.png";
import ReadyToShip from "../../components/ReadyToShip";
import { Warehouse, Navigation, Boxes, DoorOpen, FileText, MapPin } from "lucide-react";

const iconStyle = "p-2 rounded-full bg-[var(--primary-color)] text-[var(--white-color)]";
const iconStyleGreen = "p-2 rounded-full bg-[var(--green-color)] text-[var(--white-color)]";

const Landfreight = () => {
	return (
		<div className="flex justify-start items-start">
			<main className="flex flex-col justify-start items-start text-left w-full max-w-3xl p-6 gap-6">
				<h1
					className="text-xl md:xl font-bold text-[var(--white-color)] p-3 rounded-lg w-full"
					style={{
						background: "linear-gradient(to left, var(--primary-color), var(--primary-accent))",
					}}
				>
					Land Freight
				</h1>

				<h2 className="text-xl md:xl font-bold">Reliable Domestic Transportation Across the Philippines</h2>
				<p className="text-sm md:text-base text-justify">
					We offer dependable land freight solutions to move your goods safely and efficiently — from city to city, province to province, or directly from port to warehouse. Whether it's full
					truckload (FTL) or less-than-truckload (LTL), we’ve got you covered.{" "}
				</p>

				<img src={ServicesLandFreightImg1} alt="Air Freight" className="w-full rounded-2xl" />

				<div
					className="w-full rounded-2xl"
					style={{
						background: "linear-gradient(to top, var(--secondary-color), var(--secondary-accent), black)",
					}}
				>
					<section className="flex flex-col md:flex-row m-5">
						<div className="flex flex-col  md:p-5 p-2">
							<h2 className="text-xl md:xl font-bold text-[var(--primary-color)]">How Our Land Freight Process Works</h2>
							<p className=" text-sm md:text-base text-[var(--white-color)] ">From pickup to customs to delivery — we handle it all, so your cargo arrives on time and hassle-free.</p>
							<img src={ServicesLandFreightImg2} alt="Freight Process" className="w-full rounded-2xl my-4 aspect-video" />
							<div className="flex-1 justify-center items-center  p-3">
								<div className=" flex h-full flex-col  justify-center items-center">
									<p className="flex text-base font-medium text-[var(--primary-color)] ">Have Questions?</p>
									<button className=" flex mt-2 px-4 py-2 bg-[var(--primary-color)] text-[var(--white-color)] rounded-full text-center font-bold">Talk to an Expert</button>
								</div>
							</div>
						</div>

						<div className="bg-[var(--white-color)] flex flex-col gap-5 p-5 rounded-lg">
							{/* Steps with icon and label side-by-side */}
							{[
								{ icon: <Warehouse size={30} />, label: "Port-to-Warehouse Delivery" },
								{ icon: <Navigation size={30} />, label: "City-to-City & Provincial Transport" },
								{ icon: <Boxes size={30} />, label: "Full Truckload (FTL) or Partial Loads (LTL)" },
								{ icon: <DoorOpen size={30} />, label: "Door-to-Door Cargo Movement" },
								{ icon: <FileText size={30} />, label: "Documentation & Compliance" },
								{ icon: <MapPin size={30} />, label: "Delivery", isLast: true },
							].map((step, index) => (
								<div key={index} className="relative flex items-center gap-5">
									{/* Vertical line */}
									{index < 5 && <div className="absolute left-6 top-[30%] translate-y-1/2 w-1 h-full bg-[var(--primary-color)] z-0"></div>}

									{/* Icon */}
									<div className={`z-10 p-3 rounded-full ${step.isLast ? "bg-[var(--green-color)]" : "bg-[var(--primary-color)]"} text-[var(--white-color)]`}>{step.icon}</div>

									{/* Label */}
									<p className="text-base md:text-base font-bold pr-15">{step.label}</p>
								</div>
							))}
						</div>
					</section>

					<div className="p-5">
						<h2 className="text-xl md:xl font-bold mt-6 text-[var(--primary-color)]">STEP BY STEP PROCESS</h2>

						<div className="mt-4 space-y-5">
							<div>
								<h3 className="text-xl md:xl font-bold text-[var(--white-color)]">1. Port-to-Warehouse Delivery</h3>
								<p className="text-sm text-justify md:text-base text-[var(--white-color)]">
									We collect your goods from your supplier or warehouse Our team arranges pick-up at your location, ensuring safe handling from the start.
								</p>
							</div>

							<div>
								<h3 className="text-xl md:xl font-bold text-[var(--white-color)]">2. City-to-City & Provincial Transport</h3>
								<p className="text-sm text-justify md:text-base text-[var(--white-color)]">We connect major cities and remote provinces with consistent service.</p>
							</div>

							<div>
								<h3 className="text-xl md:xl font-bold text-[var(--white-color)]">3. Full Truckload (FTL) or Partial Loads (LTL)</h3>
								<p className="text-sm text-justify md:text-base text-[var(--white-color)]">Choose what fits your volume — shared or dedicated trucks.</p>
							</div>

							<div>
								<h3 className="text-xl  font-bold text-[var(--white-color)]">4. Door-to-Door Cargo Movement</h3>
								<p className="text-sm text-justify md:text-base text-[var(--white-color)]">Direct pick-up and drop-off with real-time coordination.</p>
							</div>

							<div>
								<h3 className="text-xl font-bold text-[var(--white-color)]">5. Documentation & Compliance</h3>
								<p className="text-sm text-justify md:text-base text-[var(--white-color)]">We take care of transport permits, waybills, and cargo labeling.</p>
							</div>

							<div>
								<h3 className="text-xl  font-bold text-[var(--white-color)]">6. Delivery</h3>
								<p className="text-sm text-justify md:text-base text-[var(--white-color)]">
									We deliver your shipment to its final destination Once your goods arrive, we handle ground delivery directly to you or your client.
								</p>
							</div>
						</div>
					</div>
				</div>

				<section className="mt-8 w-full">
					<h2 className="text-xl font-bold w-full">An Ideal Shipping Solution For:</h2>
					<ul className="list-none text-base mt-2 font-semibold">
						<li>✅ Businesses needing reliable regional cargo services</li>
						<li>✅ Retailers and distributors moving goods nationwide</li>
						<li>✅ Importers transferring goods from port to provinces</li>
						<li>✅ E-commerce brands shipping across the country</li>
					</ul>
				</section>
				<ReadyToShip />
			</main>
		</div>
	);
};

export default Landfreight;
