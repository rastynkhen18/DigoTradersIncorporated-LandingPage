import React from "react";
import Header2 from "../components/Header2";
import ServicesBackgroundImage from "../assets/images/services-bg.png";
import Logo from "../assets/DigoTradersIncLogo.svg";
import AboutImage from "../assets/images/aboutImg.png";
import { Truck, Plane, Anchor, Scale, MapPin, FileText } from "lucide-react";

const services = [
	{
		title: "Air Freight",
		description: "Fast Global Shipping.",
		icon: <Plane size={40} />,
	},
	{
		title: "Sea Freight",
		description: "Affordable bulk transport.",
		icon: <Anchor size={40} />,
	},
	{
		title: "Land Freight",
		description: "Nationwide delivery.",
		icon: <Truck size={40} />,
	},
	{
		title: "Compliance",
		description: "Clearance & legal docs.",
		icon: <Scale size={40} />,
	},
	{
		title: "Door-to-door",
		description: "Part to destination, handled.",
		icon: <MapPin size={40} />,
	},
	{
		title: "Licensing",
		description: "Permits, papers, done.",
		icon: <FileText size={40} />,
	},
];

const About = () => {
	return (
		<div>
			<section className="relative flex justify-center items-start flex-col h-[300px] bg-cover bg-center" style={{ backgroundImage: `url(${ServicesBackgroundImage})` }}>
				<div className="absolute inset-0 bg-black opacity-70 z-0" />

				<Header2 />

				<div className="relative text-start px-5 pt-16 md:ml-50">
					<h1 className="text-xl md:text-3xl text-[var(--primary-color)] py-1 font-bold">Digo Traders Incorporated</h1>
					<p className="text-sm md:text-base text-[var(--white-color)]">Trusted Logistics, Seamless Customs, Nationwide Delivery.</p>
				</div>
			</section>

			<section className="flex justify-center items-center">
				<div className="flex flex-col md:flex-row justify-center items-center gap-5 md:p-16 p-5 w-full max-w-[1024px]">
					<div className="w-full md:w-1/2">
						<img src={Logo} alt="Digo Traders Inc." className="w-40 h-auto mb-4" />
						<p className="text-sm md:text-base text-justify">
							DIGO Traders Incorporated is a Philippine-based logistics company committed to making import, export, and domestic shipping easier for businesses of all sizes. Whether you're
							transporting goods across borders or across cities, we handle every step with accuracy, speed, and transparency.
						</p>
					</div>

					<div className="w-full md:w-1/2 flex justify-center">
						<img src={AboutImage} alt="About" className="w-full" />
					</div>
				</div>
			</section>

			<section
				style={{
					background: "linear-gradient(to top, var(--secondary-color), var(--secondary-accent), black)",
				}}
				className="flex justify-center items-center"
			>
				<div className="flex flex-col md:flex-col justify-center items-center  p-5 w-full max-w-[1024px]">
					<h1 className="text-xl md:text-2xl text-[var(--primary-color)] font-semibold text-center p-5">We Specialize In:</h1>

					<div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 w-full">
						{services.map((service, index) => (
							<div
								key={index}
								className="w-full text-[var(--white-color)] rounded-2xl p-4 shadow-lg flex items-center gap-4 bg-gradient-to-r"
								style={{
									background: "linear-gradient(to bottom, var(--primary-accent), var(--primary-color))",
								}}
							>
								{service.icon}
								<div>
									<h1 className="text-base md:text-base font-semibold mb-1">{service.title}</h1>
									<p className="text-sm md:text-sm">{service.description}</p>
								</div>
							</div>
						))}
					</div>

					<div className="flex flex-col md:flex-row justify-center items-center md:p-16  w-full max-w-[1024px]">
						<div className="flex flex-col gap-5 w-full md:w-1/2 p-5">
							<h1 className="text-xl md:text-3xl font-bold text-[var(--primary-color)]">Mission</h1>
							<p className="text-sm md:text-sm text-[var(--white-color)] text-justify">
								Our mission is to source and deliver high-quality products from international markets efficiently, ethically, and cost-effectively, meeting the needs of our clients while fostering
								strong relationships with global suppliers.
							</p>
						</div>

						<div className="w-full md:w-1/2 mt-10 flex justify-center">
							<img src={AboutImage} alt="About" className="w-full" />
						</div>
					</div>
					<div className="flex flex-col-reverse md:flex-row justify-center items-center  md:p-16  w-full max-w-[1024px]">
						<div className="w-full md:w-1/2 mt-10 flex justify-center">
							<img src={AboutImage} alt="About" className="w-full" />
						</div>
						<div className="flex flex-col gap-5 w-full md:w-1/2 p-5">
							<h1 className="text-xl md:text-3xl font-bold text-[var(--primary-color)]">Vision</h1>
							<p className="text-sm md:text-sm text-[var(--white-color)] text-justify">
								Our vision is to be a trusted global leader in import and export, connecting markets and delivering value with integrity, efficiency, and innovation."
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="w-full">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1577.5234151597342!2d120.99474555901314!3d14.545067814876413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c95d7c9174a5%3A0xc24e91e84e95800c!2sTorres%20BuildingCFSI!5e0!3m2!1sen!2sph!4v1753098396660!5m2!1sen!2sph"
					width="100%"
					height="300"
					style={{ border: 0 }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</section>
		</div>
	);
};

export default About;
