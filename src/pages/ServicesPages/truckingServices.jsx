import React from "react";
import FadeInOnView from "../../components/FadeInOnView";
import TruckingServicesImage from "../../assets/images/trucking.png";
import LetsTalkStrategy from "../../components/LetsTalkStrategy";

const freightTariffConsultation = () => {
	return (
		<div>
			<main className="flex flex-col justify-start items-start text-left w-full max-w-3xl p-6 gap-6">
				<h1
					className="text-xl md:xl font-bold text-[var(--white-color)] p-3 rounded-lg w-full"
					style={{
						background: "linear-gradient(to left, var(--primary-color), var(--primary-accent))",
					}}
				>
					Trucking Services
				</h1>

				<FadeInOnView>
					<h1 className="text-xl font-bold md:xl">Ship Smart. Save Big. Stay Compliant.</h1>
				</FadeInOnView>

				<FadeInOnView>
					<p className="text:sm md:text-base text-justify">
						At Digo Traders, we specialize in providing reliable, efficient, and cost-effective trucking solutions tailored to your logistics and transportation needs. Our diverse fleet is designed to
						handle a wide range of cargo, ensuring your goods are delivered safely, securely, and on time—every time.
					</p>
				</FadeInOnView>

				<img src={TruckingServicesImage} alt="TruckingServicesImage" className="w-full max-w-4xl mx-auto rounded-2xl" />

				<FadeInOnView>
					<div
						className="p-5 gap-10 rounded-2xl"
						style={{
							background: "linear-gradient(to top, var(--secondary-color), var(--secondary-accent), black)",
						}}
					>
						{" "}
						<FadeInOnView>
							<h2 className="text-xl font-bold mt-6 text-[var(--primary-color)]">Our Fleet & Services</h2>
						</FadeInOnView>
						<div className="mt-4 space-y-4">
							<FadeInOnView>
								<div className="space-y-2">
									<h3 className="text-xl font-bold text-[var(--white-color)]">1x40 Chassis</h3>
									<p className="text-sm md:text-base text-[var(--white-color)]">Designed for transporting standard 40-foot containers with maximum stability and efficiency.</p>
								</div>
							</FadeInOnView>

							<FadeInOnView>
								<div className="space-y-2">
									<h3 className="text-xl  font-bold text-[var(--white-color)]">1x20 Chassis</h3>
									<p className="text-sm md:text-base text-[var(--white-color)]">A flexible and cost-effective solution for hauling 20-foot containers.</p>
								</div>
							</FadeInOnView>

							<FadeInOnView>
								<div className="space-y-2">
									<h3 className="text-xl font-bold text-[var(--white-color)]">Lowbed Trailers</h3>
									<p className="text-sm md:text-base text-[var(--white-color)]">Specialized trailers built for heavy equipment, oversized loads, and construction machinery.</p>
								</div>
							</FadeInOnView>

							<FadeInOnView>
								<div className="space-y-2">
									<h3 className="text-xl font-bold text-[var(--white-color)]">Flatbed Truck</h3>
									<p className="text-sm md:text-base text-[var(--white-color)]">The ideal choice for oversized cargo such as steel, pipes, lumber, and industrial materials.</p>
								</div>
							</FadeInOnView>

							<FadeInOnView>
								<div className="space-y-2">
									<h3 className="text-xl font-bold text-[var(--white-color)]">Straight Chassis</h3>
									<p className="text-sm md:text-base text-[var(--white-color)]">A dependable option for container transport with secure and stable load handling.</p>
								</div>
							</FadeInOnView>
							<FadeInOnView>
								<div className="space-y-2">
									<h3 className="text-xl font-bold text-[var(--white-color)]">Tanker Truck</h3>
									<p className="text-sm md:text-base text-[var(--white-color)]">Safe and compliant transportation for liquid products, including water, fuel, and chemicals.</p>
								</div>
							</FadeInOnView>
							<FadeInOnView>
								<div className="space-y-2">
									<h3 className="text-xl font-bold text-[var(--white-color)]">Wingvan Truck</h3>
									<p className="text-sm md:text-base text-[var(--white-color)]">Fully covered cargo solution to protect weather-sensitive and high-value goods during transit.</p>
								</div>
							</FadeInOnView>
							<FadeInOnView>
								<div className="space-y-2">
									<h3 className="text-xl font-bold text-[var(--white-color)]">10-Wheeler Forward Truck</h3>
									<p className="text-sm md:text-base text-[var(--white-color)]">A heavy-duty truck built for bulk shipments and long-distance delivery requirements.</p>
								</div>
							</FadeInOnView>
							<FadeInOnView>
								<div className="space-y-2">
									<h3 className="text-xl font-bold text-[var(--white-color)]">6-Wheeler Forward Truck</h3>
									<p className="text-sm md:text-base text-[var(--white-color)]">Versatile mid-size transport for commercial goods and medium-volume deliveries.</p>
								</div>
							</FadeInOnView>
							<FadeInOnView>
								<div className="space-y-2">
									<h3 className="text-xl font-bold text-[var(--white-color)]">4-Wheeler Forward Truck</h3>
									<p className="text-sm md:text-base text-[var(--white-color)]">Compact and efficient, perfect for lighter loads and urban distribution.</p>
								</div>
							</FadeInOnView>
							<FadeInOnView>
								<div className="space-y-2">
									<h3 className="text-xl font-bold text-[var(--white-color)]">Boom Truck</h3>
									<p className="text-sm md:text-base text-[var(--white-color)]">Equipped with a hydraulic crane for lifting, loading, and transporting heavy equipment and materials.</p>
								</div>
							</FadeInOnView>
							<FadeInOnView>
								<div className="space-y-2">
									<h3 className="text-xl font-bold text-[var(--white-color)]">Elf Open Truck</h3>
									<p className="text-sm md:text-base text-[var(--white-color)]">Quick, reliable transport for small to medium-sized cargo, ensuring fast and flexible deliveries.</p>
								</div>
							</FadeInOnView>
						</div>
					</div>
				</FadeInOnView>

				<FadeInOnView>
					<div className="flex justify-center items-start flex-col mt-3 p-2 gap-3">
						<h1 className="text-xl font-bold text-[var(--primary-color)] ">Why Choose Us?</h1>
						<p className="text:base md:text-base">✅ Comprehensive fleet to suit every transport need</p>
						<p className="text:base md:text-base">✅ On-time, reliable, and safe delivery services</p>
						<p className="text:base md:text-base">✅ Professional drivers and experienced operators</p>
						<p className="text:base md:text-base">✅ Competitive and transparent pricing</p>
					</div>
				</FadeInOnView>

				{/* <FadeInOnView>
					<div className="flex justify-center items-start flex-col mt-3">
						<h1 className="text-xl font-bold text-[var(--primary-color)]">Why It Matters</h1>
						<p className="text:base md:text-base">A single mistakes in HS classification or duty estimate can:</p>
						<ul className="list-disc pl-6 text-base md:text-base">
							<li>Delay your cargo.</li>
							<li>Trigger audits or penalties.</li>
							<li>Inflate your logistics budget by thousands.</li>
						</ul>

						<p className="text:base md:text-base">We help you ship smarter, pay fair, and stay legal.</p>
					</div>
				</FadeInOnView> */}

				<FadeInOnView>
					<LetsTalkStrategy />
				</FadeInOnView>
			</main>
		</div>
	);
};

export default freightTariffConsultation;
