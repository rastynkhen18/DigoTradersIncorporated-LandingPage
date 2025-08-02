import React from 'react';
import Header from "../components/Header";
import HomePageBackground from "../assets/images/homepage-img.png";
import WhoWeServeSlideshow from "../components/WhoWeServe";
import Container1Image from "../assets/images/container1Image.png";
import Container2Image from "../assets/images/container2Image.png";
import DropDownFAQ from "../components/DropDownFAQ";
import ServicesSection from "../components/ServicesSection";
import Airplane from "../assets/images/airplane-transparent.png";
import { Package, ShoppingCart, Truck, Factory, Building2, ShieldCheck, Clock, FileText, Check } from "lucide-react";
import { Phone, Mail, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import FadeInOnView from "../components/FadeInOnView";

const Home = () => {
	const sendEmail = (e) => {
		e.preventDefault();
		
		emailjs.sendForm("service_ndrtton", "template_tkozg1d", e.target, "3kmbeJRVPlVrrqylg").then(
			(result) => {
				alert("Message sent successfully!");
				e.target.reset();
			},
			(error) => {
				alert("Oops! Something went wrong.");
				console.error(error.text);
			}
		);
	};

	return (
		<>
			<main>
				<section className="w-full h-[80vh] md:h-[80vh] bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: `url(${HomePageBackground})` }}>
					<Header />

					{/* Airplane Image */}
					<img src={Airplane} alt="Airplane" className="absolute top-20 left-10 w-[200px] h-auto object-cover z-1" />

					{/* Blue Container Transparent */}
					<div
						className="flex 
           justify-center items-center flex-grow z-1 px-4  mt-15"
					>
						<div className=" flex flex-col text-left rounded-2xl " style={{ background: "rgba(2, 1, 129, 0.7)" }}>
							<div className="p-6 ">
								<h1 className="text-[var(--white-color)] font-bold text-2xl md:text-4xl max-w-[850]">
									Go Beyond Borders with
									<mark className="bg-transparent text-[var(--primary-color)]"> Digo Traders</mark>
								</h1>
								<p className="text-[var(--white-color)]  text-sm md:text-base md:max-w-xl text-justify pt-4">
									From <mark className="bg-transparent text-[var(--primary-color)]">small packages to large cargo</mark> — Digo Traders ships by Air, Sea and Land to support businesses of every size.
								</p>
							</div>

							<div className="w-full pr-[20%]">
								<div className="h-10 w-full rounded-full bg-[linear-gradient(to_right,var(--secondary-color),var(--primary-accent))] flex justify-end items-center px-3">
									<Package size={30} className="text-[var(--white-color)] left-2 sm:left-3" />
								</div>
							</div>
						</div>
						{/* Gradient Effect*/}
					</div>

					{/* Who We Serve Section */}
					<div className="w-full">
						{/* Top Divider */}
						<div
							className="w-full h-[14px]"
							style={{
								background: "linear-gradient(to left, var(--primary-accent), var(--primary-color))",
							}}
						/>

						{/* Content */}
						<WhoWeServeSlideshow />
						

						{/* Bottom Divider */}
						<div
							className="w-full h-[14px]"
							style={{
								background: "linear-gradient(to left, var(--primary-accent), var(--primary-color))",
							}}
						/>
					</div>
				</section>

				{/* 2nd Section  Our Services*/}
				<ServicesSection />

				{/* Top divider bar */}
				<div
					className="w-full h-[23px]"
					style={{
						background: "linear-gradient(to left, var(--primary-accent), var(--primary-color))",
					}}
				/>

				<section>

					{/* Content wrapper */}
					<div className="flex flex-col-reverse md:flex-row items-center justify-between md:h-[100vh]">

						{/* Text Content */}
						<div className="flex flex-col gap-5 md:gap-5 w-full p-10 md:w-1/2">
							<FadeInOnView>
								<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-left">Why Businesses Choose Us?</h1>
							</FadeInOnView>


							{/* Card 1 */}
							<div>
								<FadeInOnView>
									<h3 className="flex items-center text-xl font-semibold gap-2">
										<ShieldCheck className="text-[var(--primary-color)] w-10 h-10" />
										Safe & Secure Handling
										<Check className="text-[var(--green-color)]  w-10 h-10" />
									</h3>
								</FadeInOnView>

								<FadeInOnView>
									<p className="text-sm md:text-base lg:text-lg">
										No matter the size or type of shipment, your cargo is protected at every step. From packaging to transport, we follow strict safety protocols across land, sea, and air to ensure it
										arrives in perfect condition.
									</p>
								</FadeInOnView>

							</div>

							{/* Card 2 */}
							<div>
								<FadeInOnView>
									<h3 className="flex items-center text-xl font-semibold gap-2">
										<Clock className="text-[var(--primary-color)] w-10 h-10" />
										On-Time Delivery
										<Check className="text-[var(--green-color)] w-10 h-10" />
									</h3>
								</FadeInOnView>

								<FadeInOnView>
									<p className="text-sm md:text-base lg:text-lg">
										We value your time. Our logistics operations are built around efficiency and smart route planning – so your shipments reach their destination on schedule, whether locally or
										internationally.
									</p>
								</FadeInOnView>

							</div>


							{/* Card 3 */}
							<div>
								<FadeInOnView>
									<h3 className="flex items-center text-xl font-semibold gap-2">
										<FileText className="text-[var(--primary-color)] w-10 h-10" />
										Hassle-Free Documentation
										<Check className="text-[var(--green-color)] w-10 h-10" />
									</h3>
								</FadeInOnView>

								<FadeInOnView>
									<p className="text-sm md:text-base lg:text-lg">
										We take the burden of paperwork off your shoulders. From shipping documents to import/export permits, our team handles it all – making the logistics process smoother and faster for
										you.
									</p>
								</FadeInOnView>
							</div>
						</div>

						{/* Image Content */}
						<div className="w-full md:w-1/2 h-[300px] md:h-full overflow-hidden">
							<img src={Container1Image} alt="Shipping container" className="w-full h-full object-cover md:rounded-tl-[65%] shadow-md" />
						</div>
					</div>

				</section>

				{/* 4th Section */}
				<section>
					<div
						className="flex flex-col md:flex-row w-full md:max-h-[800px]"
						style={{
							background: "linear-gradient(to top, var(--primary-accent), var(--primary-color))",
						}}
					>
						<div className="flex flex-col md:flex-row w-full   ">
							{/* ✅ Text Section - Appears first on all views */}
							<div className="order-1 md:order-2 flex flex-col gap-4 w-full md:w-1/2 justify-center px-4 py-6">
								<FadeInOnView>
									<h1 className="text-[var(--white-color)] text-4xl md:text-3xl font-bold">📦 How It Works?</h1>
								</FadeInOnView>

								<FadeInOnView delay={0.1}>
									<DropDownFAQ />
								</FadeInOnView>
							</div>

							{/* ✅ Image Section - Less priority */}
							<div className="order-2 flex  md:order-1 w-full md:w-1/2 md:rounded-tr-[70%] aspect-video md:aspect-auto overflow-hidden">
								<img src={Container2Image} alt="Container2Image" className="w-full  object-cover " />
							</div>
						</div>
					</div>
				</section>

				<section
					className="flex justify-center items-center"
					style={{
						background: "linear-gradient(to top, var(--secondary-color), var(--secondary-accent), black)",
					}}
				>
					<div className=" flex flex-col p-10 items-center ">
						<FadeInOnView>
							<h1 className="text-[var(--primary-color)] text-xl md:text-3xl font-bold  text-center pb-5 ">All Set to Ship? Let's Get Moving!</h1>
						</FadeInOnView>

						<FadeInOnView delay={0.2}>
							<div className="max-w-[1024px] flex flex-col  md:flex-row justify-center gap-5">


								{/* Left: Contact Form */}

								<div className=" flex flex-col max-w-[450px] justify-center md:w-1/2 p-6 bg-[var(--secondary-accent)] shadow-md rounded-lg border-2 border-[var(--primary-color)]">
									<div>
										<p className="text-left text-[var(--gray-color)] text-sm md:text-lg">Have a question?</p>
										<h1 className="text-[var(--primary-color)] md:text-2xl text-xl font-bold mb-6 text-left">Send us a message</h1>
									</div>
									<form onSubmit={sendEmail} className="flex flex-col justify-between ">
										<div className="mt-2">
											<label className=" text-sm md:text-sm font-normal text-[var(--white-color)] mb-1">Name</label>
											<input
												type="text"
												placeholder="e.g John Doe"
												name="name"
												required
												className="w-full p-2 md:placeholder:text-xs placeholder:text-xs text-xs md:text-xs border border-[var(--gray-color)] rounded-md bg-[var(--white-color)] placeholder-[var(--gray-color)] focus:outline"
											/>
										</div>

										<div className="mt-2">
											<label className=" text-sm md:text-sm font-normal text-[var(--white-color)] mb-1">Email</label>
											<input
												type="email"
												placeholder="e.g your-email@gmail.com"
												name="email"
												required
												className="w-full p-2 md:placeholder:text-xs placeholder:text-xs text-xs md:text-xs border border-[var(--gray-color)] rounded-md bg-[var(--white-color)] placeholder-[var(--gray-color)] focus:outline"
											/>
										</div>

										<div className="mt-2">
											<label className="text-sm md:text-sm font-normal text-[var(--white-color)] mb-1">Subject</label>
											<input
												type="text"
												placeholder="Title"
												name="subject"
												required
												className="w-full p-2 md:placeholder:text-xs placeholder:text-xs text-xs md:text-xs border border-[var(--gray-color)] rounded-md bg-[var(--white-color)] placeholder-[var(--gray-color)] focus:outline"
											/>
										</div>

										<div className="mt-2">
											<label className="block text-sm md:text-sm font-normal text-[var(--white-color)] mb-1">Message</label>
											<textarea
												placeholder="Type here..."
												name="message"
												rows="4"
												required
												className="w-full p-2 md:placeholder:text-xs placeholder:text-xs text-xs md:text-xs border border-[var(--gray-color)] rounded-md bg-[var(--white-color)] placeholder-[var(--gray-color)] focus:outline"
											></textarea>
										</div>

										<button
											type="submit"
											className="mt-5 w-full text-[var(--white-color)] placeholder:text-sm text-sm font-bold py-2 px-4 rounded-full transition cursor-pointer"
											style={{
												background: "linear-gradient(to right, var(--primary-color), var(--primary-accent))",
											}}
										>
											Send Now
										</button>
									</form>
								</div>


								{/* Right: Contact Info & Map */}
								<div className="w-full md:w-1/2 max-w-[450px] h-full  ">
									<div className="flex flex-col  h-full justify-between ">
										<p className="text-[var(--white-color)] text-justify md:text-sm leading-5 font-light text-sm">
											Whether you're ready to ship by land, sea, or air – or just have questions – we're here for you. Fill out the form to send us a quick message, or reach us directly via call, email,
											or visit. Our team is ready to assist you with everything from documents to deliveries.
										</p>
										<div className="text-[var(--white-color)] w-full py-5  ">
											<div className="md:flex-col flex flex-row w-full gap-3">
												<div className="flex items-center gap-3">
													<Phone size={24} />
													<div>
														<h1 className="font-semibold text-sm leading-3">Phone Number</h1>
														<p className="text-[var(--primary-color)] text-sm">0976-590-9243</p>
													</div>
												</div>

												<div className="flex flex-row items-center gap-3">
													<Phone size={24} />
													<div>
														<h1 className="font-semibold text-sm leading-3">Landline</h1>
														<p className="text-[var(--primary-color)] text-sm">(02) 835 67892</p>
													</div>
												</div>
											</div>

											<div className=" flex flex-row items-center mt-3 gap-3">
												<Mail size={24} />
												<div>
													<h1 className="font-semibol text-sm leading-3">Email Address</h1>
													<p className="text-[var(--primary-color)] text-sm">support@digotraders.com</p>
												</div>
											</div>

											<div className="flex flex-row items-center mt-3 gap-3">
												<MapPin size={24} />
												<div>
													<h1 className="font-semibold text-sm leading-3">Our Office</h1>
													<p className="text-[var(--primary-color)] text-sm">2442 Park Avenue, Torres Bldg. Pasay City</p>
												</div>
											</div>
										</div>

										<div className="rounded-md overflow-hidden shadow-lg aspect-video">
											<iframe
												src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1577.5234151597342!2d120.99474555901314!3d14.545067814876413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c95d7c9174a5%3A0xc24e91e84e95800c!2sTorres%20BuildingCFSI!5e0!3m2!1sen!2sph!4v1753098396660!5m2!1sen!2sph"
												width="100%"
												height="300"
												style={{ border: 0 }}
												allowFullScreen=""
												loading="lazy"
												referrerPolicy="no-referrer-when-downgrade"
											></iframe>
										</div>
									</div>
								</div>
							</div>
						</FadeInOnView>
					</div>
				</section>
			</main >
		</>
	);
};

export default Home;
