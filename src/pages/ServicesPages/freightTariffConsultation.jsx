import React from "react";
import FreightConsultationImage from "../../assets/images/servicesFreightConsultation.png";
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
					Freight & Tariff Consultation
				</h1>
				<h1 className="text-xl font-bold md:xl">Ship Smart. Save Big. Stay Compliant.</h1>
				<p className="text:sm md:text-base text-justify">
					Not sure what your cargo will cost to ship — or if you’re being charged too much? Unsure about taxes, duties, or customs tariffs? Our Freight & Tariff Consultation service helps
					you understand, plan, and optimize every peso of your shipping costs.
				</p>

				<img src={FreightConsultationImage} alt="FreightConsultationImage" className="w-full max-w-4xl mx-auto rounded-2xl" />

				<div
					className="p-5 rounded-2xl"
					style={{
						background: "linear-gradient(to top, var(--secondary-color), var(--secondary-accent), black)",
					}}
				>
					<h2 className="text-xl font-bold mt-6 text-[var(--primary-color)]">What We Do</h2>

					<div className="mt-4 space-y-4">
						<div className="space-y-2">
							<h3 className="text-xl font-bold text-[var(--white-color)]">1. Accurate Freight Rate Estimates</h3>
							<p className="text-sm md:text-base text-[var(--white-color)]">
								We provide detailed cost breakdowns for land, sea, and air freight — local and international — so you can compare options and avoid overpaying.
							</p>
						</div>

						<div className="space-y-2">
							<h3 className="text-xl  font-bold text-[var(--white-color)]">2. Duties & Taxes Assessment</h3>
							<p className="text-sm md:text-base text-[var(--white-color)]">
								We help you compute: Import/export duties Value Added Tax (VAT) Excise or special taxes Know what you'll pay before your goods arrive — no more surprise fees.
							</p>
						</div>

						<div className="space-y-2">
							<h3 className="text-xl font-bold text-[var(--white-color)]">3. HS Code Classification Guidance</h3>
							<p className="text-sm md:text-base text-[var(--white-color)]">
								We help classify your products using the Harmonized System (HS) for customs, so you get correct duties and avoid clearance issues.
							</p>
						</div>

						<div className="space-y-2">
							<h3 className="text-xl font-bold text-[var(--white-color)]">4. Customs Tariff Planning</h3>
							<p className="text-sm md:text-base text-[var(--white-color)]">
								We guide you through government-imposed tariff rates — and show you how to legally reduce them via free trade agreements, exemptions, or reclassification.
							</p>
						</div>

						<div className="space-y-2">
							<h3 className="text-xl font-bold text-[var(--white-color)]">5. Shipment Review & Cost Audit</h3>
							<p className="text-sm md:text-base text-[var(--white-color)]">
								Already working with another forwarder? We can audit your current or past shipments to identify overcharges, miscalculations, or missed savings.
							</p>
						</div>
					</div>
				</div>

				<div className="flex justify-center items-start flex-col mt-3">
					<h1 className="text-xl font-bold text-[var(--primary-color)]">Ideal For:</h1>
					<p className="text:base md:text-base">✅ First-time importers/exporters.</p>
					<p className="text:base md:text-base">✅ Businesses unsure of landed costs.</p>
					<p className="text:base md:text-base">✅ High-volume shippers looking to cut costs.</p>
					<p className="text:base md:text-base">✅ Companies switching suppliers or expanding.</p>
					<p className="text:base md:text-base">✅ Anyone importing sensitive or regulated goods.</p>
				</div>

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

				<LetsTalkStrategy />
			</main>
		</div>
	);
};

export default freightTariffConsultation;
