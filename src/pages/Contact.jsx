import React from "react";
import Header2 from "../components/Header2";
import ServicesBackgroundImage from "../assets/images/services-bg.png";
import ContactImage from "../assets/images/contactImg.png";
import emailjs from "@emailjs/browser";
import FacebookLogo from "../assets/images/Facebook_Logo_Secondary1.svg";
import InstagramLogo from "../assets/images/Instagram_Glyph_White1.svg";
import FadeInOnView from "../components/FadeInOnView";
import { FaWhatsapp, FaViber } from "react-icons/fa";

const Contact = () => {
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, e.target, import.meta.env.VITE_EMAILJS_PUBLIC_KEY).then(
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

	const openAppWithFallback = (appUrl, fallbackUrl, timeout = 1000) => {
		const start = Date.now();
		// Try opening the app
		window.location.href = appUrl;

		// After 1s, if still visible, go to fallback
		setTimeout(() => {
			const elapsed = Date.now() - start;
			if (document.visibilityState === "visible" && elapsed < timeout + 500) {
				window.open(fallbackUrl, "_blank");
			}
		}, timeout);
	};

	const phoneNumber = "09856318468";
	const viberUrl = `viber://add?number=639856318468`;
	const viberDownload = "https://www.viber.com/download/";

	return (
		<div>
			<section className="relative flex justify-center items-center flex-col h-[300px] bg-cover bg-center" style={{ backgroundImage: `url(${ServicesBackgroundImage})` }}>
				<div className="absolute inset-0 bg-black opacity-70 z-0" />

				<Header2 />

				<div className="relative text-center px-6 pt-16">
					<h1 className="text-xl md:text-3xl text-[var(--primary-color)] py-1 font-bold">Contact Us</h1>

					<p className="text-sm md:text-base text-[var(--white-color)]">
						Whether you have a question about our services, need a quote, or want you to discuss your shipping requirments - our team is ready to assist you.
					</p>
				</div>
			</section>

			<section className=" w-full flex justify-center items-center p-5">
				<FadeInOnView>
					<div className="max-w-[1024]  h-full flex flex-col   md:flex-row gap-5">
						{/* Left: Form */}
						<div className="w-full h-full  ">
							<div className="py-7 px-5  bg-[var(--white-color)] shadow-md rounded-xl border-2 border-[var(--primary-color)]">
								<p className="text-sm md:text-base text-left mb-2 font-bold">Have a question?</p>
								<h1 className="text-[var(--primary-color)] md:text-xl font-bold mb-6 text-left">Send us a Message.</h1>

								<form onSubmit={sendEmail}>
									<div>
										<label className="block text-sm font-medium text-slate-600 mb-2">Name</label>
										<input
											type="text"
											placeholder="username"
											name="name"
											required
											className="w-full p-2 text-sm border border-[var(--gray-color)] rounded-md bg-[#e2e2e2] placeholder-[var(--gray-accent)] placeholder:text-sm focus:outline-none mb-2"
										/>
									</div>

									<div>
										<label className="block text-sm font-medium  text-slate-600  mb-2">Email</label>
										<input
											type="email"
											placeholder="email address"
											name="email"
											required
											className="w-full p-2 text-sm border border-[var(--gray-color)] rounded-md bg-[#e2e2e2] placeholder-[var(--gray-accent)] placeholder:text-sm focus:outline-none mb-2"
										/>
									</div>

									<div>
										<label className="block text-sm font-medium text-slate-600 mb-2">Subject</label>
										<input
											type="text"
											placeholder="Title"
											name="subject"
											required
											className="w-full p-2 text-sm border border-[var(--gray-color)] rounded-md bg-[#e2e2e2] placeholder-[var(--gray-accent)] placeholder:text-sm focus:outline-none mb-2"
										/>
									</div>

									<div>
										<label className="block text-sm font-medium text-slate-600 mb-2">Message</label>
										<textarea
											placeholder="Type here..."
											name="message"
											rows="4"
											required
											className="w-full p-2 text-sm border border-[var(--gray-color)] rounded-md bg-[#e2e2e2] placeholder-[var(--gray-accent)] placeholder:text-sm focus:outline-none mb-2"
										></textarea>
									</div>

									<button
										type="submit"
										className="w-full text-[var(--white-color)] py-2 px-4 rounded-full transition cursor-pointer"
										style={{
											background: "linear-gradient(to right, var(--primary-color), var(--primary-accent))",
										}}
									>
										Submit
									</button>
								</form>
							</div>
						</div>

						{/* Right: Contact Info */}
						<div className="w-full h-auto flex justify-between text-[var(--white-color)] flex-col  gap-5">
							<div>
								<img src={ContactImage} alt="ContactImage" className="w-full aspect-video" />
							</div>

							<div
								className="flex h-full flex-col justify-between rounded-xl p-6"
								style={{
									background: "linear-gradient(to right, var(--primary-color), var(--primary-accent))",
								}}
							>
								<div>
									<h2 className="text-xl font-semibold mb-1">Our Office</h2>
									<p className="text-sm">2442 Park Avenue, Torred Bldg. Pasay City</p>
								</div>

								<div>
									<h2 className="text-xl font-semibold mb-1">Contact</h2>
									<p className="text-sm">Email: support@digotraders.com</p>
									<p className="text-sm">Phone: +63 985-631-8468</p>
									<p className="text-sm">Landline: (02) 835 67892</p>

									<div className="flex-col space-y-2 mt-2 items-center">
										{/* WhatsApp */}
										<div className="flex flex-row items-center space-x-2">
											<a href="https://wa.me/639856318468" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:scale-110 transition-transform">
												<FaWhatsapp size={36} />
											</a>
											<a href="https://wa.me/639856318468" target="_blank" rel="noopener noreferrer" className=" hover:underline">
												0985-631-8468
											</a>
										</div>

										<button onClick={() => openAppWithFallback(viberUrl, viberDownload)} className="flex-col">
											<div className="flex-row flex space-x-3">
												<FaViber size={32} />
												<div className=" hover:underline">0985-631-8468</div>
											</div>
										</button>
									</div>
								</div>

								<div>
									<h2 className="text-xl font-semibold mb-1">Stay Connected</h2>
									<div className="flex gap-1 items-center cursor-pointer">
										<a href="https://www.facebook.com/profile.php?id=61577367794634" target="_blank" rel="noreferrer">
											<img src={FacebookLogo} alt="Facebook" className="w-6 h-6" />
										</a>
										<a href="">
											<img src={InstagramLogo} alt="Instagram" className="w-6 h-6" />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</FadeInOnView>
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

export default Contact;
