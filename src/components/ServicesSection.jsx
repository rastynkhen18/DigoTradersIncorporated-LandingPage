import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import AirFreightbg from "../assets/images/airfreight-bg.png";
import SeaFreightbg from "../assets/images/seafreight-bg.png";
import LandFreightbg from "../assets/images/landfreight-bg.png";
import { Truck, Plane, Anchor, ChevronRight } from "lucide-react";
import FadeInOnView from "../components/FadeInOnView";

const services = [
	{
		title: "Air Freight",
		description: "Fast, secure delivery for urgent or high-value cargo.",
		details: "Includes: Express shipping, cargo insurance, airway bills, customs assistance.",
		bgImage: AirFreightbg,
		icon: <Plane size={34} />,
	},
	{
		title: "Sea Freight",
		description: "Affordable global shipping for large or bulk goods.",
		details: "Includes: FCL/LCL, port-to-port service, customs clearance, document processing.",
		bgImage: SeaFreightbg,
		icon: <Anchor size={34} />,
	},
	// {
	// 	title: "Land Freight",
	// 	description: "Nationwide delivery with flexible scheduling.",
	// 	details: "Includes: Door-to-door transport, cross-border logistics, trucking, waybill & permits.",
	// 	bgImage: LandFreightbg,
	// 	icon: <Truck size={34} />,
	// },
	{
		title: "Trucking Services",
		description: "Nationwide delivery",
		details: "We provide reliable transport for containers, equipment, and delivered safely, on time, and cost-efficiently.",
		bgImage: LandFreightbg,
		icon: <Truck size={34} />,
	},
];

const ServicesSection = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const touchStartX = useRef(null);
	const touchEndX = useRef(null);

	// Auto-play for mobile slider
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
		}, 6000);

		return () => clearInterval(interval);
	}, []);

	const handleTouchStart = (e) => {
		touchStartX.current = e.targetTouches[0].clientX;
	};

	const handleTouchMove = (e) => {
		touchEndX.current = e.targetTouches[0].clientX;
	};

	const handleTouchEnd = () => {
		if (!touchStartX.current || !touchEndX.current) return;

		const distance = touchStartX.current - touchEndX.current;

		if (Math.abs(distance) > 50) {
			if (distance > 0 && activeIndex < services.length - 1) {
				setActiveIndex(activeIndex + 1); // Swipe left
			} else if (distance < 0 && activeIndex > 0) {
				setActiveIndex(activeIndex - 1); // Swipe right
			}
		}

		touchStartX.current = null;
		touchEndX.current = null;
	};

	return (
		<section>
			<div
				className="bg-[var(--secondary-accent)] flex justify-center items-center flex-col py-10"
				style={{
					background: "linear-gradient(to top, var(--secondary-color), var(--secondary-accent), black)",
				}}
			>
				<FadeInOnView>
					<h1 className="text-[var(--primary-color)] text-2xl md:text-3xl font-bold">OUR SERVICES</h1>
				</FadeInOnView>

				<FadeInOnView delay={0.1}>
					<p className="text-[var(--white-color)] text-sm md:text-base text-center max-w-xl my-3 mx-15 ">
						We Offer End-To-End Logistics Solutions Tailored To Your Shipping Needs, Whether By Air, Sea Or Land.
					</p>
				</FadeInOnView>

				<FadeInOnView delay={0.2}>
					{/* Mobile View with Dots and Swipe */}
					<div className="w-full px-4 md:hidden">
						<div className="w-full">
							<div
								className="relative h-[500px] bg-[var(--secondary-accent)] bg-cover bg-center text-[var(--white-color)] rounded-xl overflow-hidden"
								style={{ backgroundImage: `url(${services[activeIndex].bgImage})` }}
								onTouchStart={handleTouchStart}
								onTouchMove={handleTouchMove}
								onTouchEnd={handleTouchEnd}
							>
								<div
									className="absolute bottom-0 left-0 w-full h-72 z-0"
									style={{
										background: "linear-gradient(to top, var(--secondary-accent), var(--secondary-accent), transparent)",
									}}
								/>
								<div className="relative z-10 flex flex-col justify-end p-4 h-full">
									<div className="flex flex-col gap-1 p-4 rounded-md">
										{services[activeIndex].icon}
										<h1 className="text-2xl font-bold">{services[activeIndex].title}</h1>
										<h3 className="text-lg md:text-lg font-medium md:leading-6 leading-6 pb-3">{services[activeIndex].description}</h3>
										<p className="text-xs md:text-sm text-slate-300">{services[activeIndex].details}</p>
										<div className="flex justify-center items-center gap-4 mt-4">
											<Link to="/services" reloadDocument>
												<button className="text-sm md:text-sm bg-[var(--primary-color)] pl-4 pr-3 py-2 rounded-xl text-[var(--secondary-color)] flex items-center cursor-pointer">
													Learn More <ChevronRight size={18} />
												</button>
											</Link>
											<Link to="/contact" reloadDocument>
												<button className="text-sm md:text-sm bg-transparent px-4 py-2 rounded-xl text-[var(--white-color)] border border-[var(--white-color)] cursor-pointer">Talk to Expert</button>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Dots for Navigation */}
						<div className="flex justify-center gap-2 mt-4 cursor-pointer">
							{services.map((_, index) => (
								<button
									key={index}
									onClick={() => setActiveIndex(index)}
									className={`h-2 w-2 rounded-full ${activeIndex === index ? "bg-[var(--primary-color)] scale-110" : "bg-[var(--white-color)] opacity-50"} transition-all duration-300`}
								/>
							))}
						</div>
					</div>
				</FadeInOnView>

				<FadeInOnView>
					{/* Desktop View */}
					<div className="hidden md:flex justify-center items-center flex-wrap gap-7 px-4">
						{services.map((service, index) => (
							<div key={index} className="flex flex-col">
								<div className="relative h-[500px] w-[375px] bg-cover bg-center text-[var(--white-color)] rounded-xl overflow-hidden" style={{ backgroundImage: `url(${service.bgImage})` }}>
									<div
										className="absolute bottom-0 left-0 w-full h-72 z-0"
										style={{
											background: "linear-gradient(to top, var(--secondary-accent), var(--secondary-accent), transparent)",
										}}
									/>
									<div className="relative z-10 flex flex-col justify-end p-4 h-full">
										<div className="flex flex-col gap-1 p-4 rounded-md">
											{service.icon}
											<h1 className="text-2xl font-bold">{service.title}</h1>
											<h3 className="text-lg font-medium">{service.description}</h3>
											<p className="text-sm">{service.details}</p>
											<div className="flex gap-4 mt-4">
												<Link to="/services" reloadDocument>
													<button className="bg-[var(--primary-color)] px-4 py-2 rounded-xl text-[var(--secondary-color)] flex items-center gap-2 cursor-pointer">
														Learn More <ChevronRight size={18} />
													</button>
												</Link>
												<Link to="/contact" reloadDocument>
													<button className="bg-transparent px-4 py-2 rounded-xl text-[var(--white-color)] border border-[var(--white-color)] cursor-pointer">Talk to Expert</button>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</FadeInOnView>
			</div>
		</section>
	);
};

export default ServicesSection;
