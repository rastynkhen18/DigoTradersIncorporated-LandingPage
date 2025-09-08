import React from "react";

import SeafreightImage1 from "../../assets/images/seafreight-img1.png";
import SeafreightImage2 from "../../assets/images/seafreight-img2.png";
import FadeInOnView from "../../components/FadeInOnView";
import FclImage1 from "../../assets/images/servicesFcl-img.png";
import FclImage2 from "../../assets/images/servicesFcl-img2.png";
import ReadyToShip from "../../components/ReadyToShip";
import { Package, ShieldCheck, Timer } from "lucide-react";

const Seafreight = () => {
	return (
		// 	<div>
		// 		<main className="flex flex-col justify-start items-start text-left p-6 gap-6 max-w-3xl">
		// 			<h1
		// 				className="text-xl md:xl font-bold text-[var(--white-color)] p-3 rounded-lg w-full"
		// 				style={{
		// 					background: "linear-gradient(to left, var(--primary-color), var(--primary-accent))",
		// 				}}
		// 			>
		// 				Import/Export Sea Freight Consolidation
		// 			</h1>

		// 			<FadeInOnView>
		// 				<p className="text:base md:text-base">We combine small shipments into one container to help you save on cost — ideal for growing businesses and importers with light cargo.</p>
		// 			</FadeInOnView>

		// 			<FadeInOnView>
		// 				<img src={SeafreightImage1} alt="Sea Freight Consolidation Example" className="w-full" />
		// 			</FadeInOnView>

		// 			<FadeInOnView>
		// 				<h1 className="text-xl md:xl font-bold text-[var(--secondary-color)]">What is Sea Freight Consolidation?</h1>
		// 			</FadeInOnView>

		// 			<FadeInOnView>
		// 				<p className="text:base md:text-base">
		// 					Sea freight consolidation is a logistics service where shipments from multiple customers are combined into one container — also known as Less than Container Load (LCL). Instead of paying
		// 					for an entire container, you only pay for the space you need. This allows importers and exporters to ship internationally by sea without the high costs of Full Container Load (FCL)
		// 					shipping.
		// 				</p>
		// 			</FadeInOnView>

		// 			<div className="aspect-video w-full ">
		// 				<iframe src="https://www.youtube.com/embed/1Zla30BpI_k?si=ruMzYks4YtcGh5ij" title="FCL vs LCL" frameBorder="0" allowFullScreen className="w-full h-full rounded-2xl"></iframe>
		// 			</div>

		// 			<FadeInOnView>
		// 				<h1 className="text-xl md:xl font-bold text-[var(--secondary-color)]">FCL vs LCL Shipment: Cost Calculation & Break‑Even</h1>
		// 			</FadeInOnView>

		// 			<FadeInOnView>
		// 				<p className="text:base md:text-base">
		// 					<strong>Why it’s useful:</strong> Excellent explanation of the cost comparison between Full Container Load (FCL) and Less than Container Load (LCL). Walks through volume-based pricing and
		// 					when LCL makes sense.
		// 				</p>
		// 			</FadeInOnView>

		// 			<FadeInOnView>
		// 				<h1 className="text-xl md:xl font-bold text-[var(--secondary-color)]">Who Is This For?</h1>
		// 			</FadeInOnView>

		// 			<FadeInOnView>
		// 				<p className="text:base md:tex-base">
		// 					Our consolidation service is best suited for:
		// 					<ul className="list-none list-inside mt-2">
		// 						<li>✅ Small to Medium Enterprises (SMEs) who don’t ship large volumes</li>
		// 						<li>✅ Online sellers and resellers</li>
		// 						<li>✅ Startups exploring international trade</li>
		// 						<li>✅ Occasional importers with light or mixed cargo</li>
		// 					</ul>
		// 				</p>
		// 			</FadeInOnView>

		// 			<FadeInOnView>
		// 				<img src={SeafreightImage2} alt="Seafreight Process" className="w-full  rounded-2xl" />
		// 			</FadeInOnView>

		// 			<FadeInOnView>
		// 				<h1 className="text-xl md:xl font-bold text-[var(--secondary-color)]">How It Works?</h1>
		// 			</FadeInOnView>

		// 			<FadeInOnView>
		// 				<p className="text:base md:text-base">
		// 					We handle the entire process from pickup to port:
		// 					<ul className="list-decimal list-inside mt-2">
		// 						<li>Cargo Collection – We receive your goods from your supplier or warehouse.</li>
		// 						<li>Cargo Consolidation – We pack your items together with other shipments in a shared container.</li>
		// 						<li>Documentation & Labeling – Each shipment is labeled, documented, and assigned for customs processing.</li>
		// 						<li>Departure Scheduling – Your consolidated container is scheduled on the next available vessel.</li>
		// 						<li>Customs Clearance & Deconsolidation – Upon arrival, we clear the cargo, separate shipments, and deliver to you.</li>
		// 					</ul>
		// 				</p>
		// 			</FadeInOnView>

		// 			<FadeInOnView>
		// 				<h1 className="text-xl md:xl text-center md:4xl font-bold text-[var(--primary-color)]">Why Choose Consolidation?</h1>
		// 			</FadeInOnView>

		// 			<FadeInOnView>
		// 				<div className="w-full rounded-xl">
		// 					<thead>
		// 						<tr>
		// 							<th className="bg-[var(--primary-color)] text-[var(--white-color)] text-center text-[20px] p-2">Benefits</th>
		// 							<th className="bg-[var(--secondary-color)] text-[var(--white-color)] text-center text-[20px] p-2">Description</th>
		// 						</tr>
		// 					</thead>
		// 					<tbody className="bg-[var(--slight-gray-color)] p-5 rounded-lg">
		// 						<tr>
		// 							<td className="font-bold p-5">✅ Lower Shipping Cost</td>
		// 							<td>Share container space and pay only for what you use.</td>
		// 						</tr>
		// 						<tr>
		// 							<td className="font-bold p-5">✅ No Need for Full Container</td>
		// 							<td>Ideal for 1-12 CBM (cubic meters) of cargo.</td>
		// 						</tr>
		// 						<tr>
		// 							<td className="font-bold p-5">✅ Flexible Scheduling</td>
		// 							<td>We offer weekly sailings to major destinations.</td>
		// 						</tr>
		// 						<tr>
		// 							<td className="font-bold p-5">✅ Door-to-Door Option</td>
		// 							<td>Combine with land transport for ther final delivery.</td>
		// 						</tr>
		// 						<tr>
		// 							<td className="font-bold p-5">✅ Handled Paperwork</td>
		// 							<td>We take care of documents and customs clearance.</td>
		// 						</tr>
		// 					</tbody>
		// 				</div>
		// 			</FadeInOnView>

		// 			<FadeInOnView>
		// 				<h1 className="text-xl md:xl font-bold text-[var(--secondary-color)]">🌍 Available Routes</h1>
		// 			</FadeInOnView>

		// 			<FadeInOnView>
		// 				<p className="text:base md:text-base">
		// 					We consolidate shipments to and from major ports in the philippines such as:
		// 					<ul className="list-disc list-inside mt-2">
		// 						<li>MANILA INTERNATIONAL CONTAINER PORT (M.I.C.P.)</li>
		// 						<li>PORT OF MANILA SOUTH HARBOR</li>
		// 						<li>PORT OF SUBIC</li>
		// 						<li>PORT OF CEBU</li>
		// 						<li>PORT OF CAGAYAN DE ORO</li>
		// 						<li>PORT OF DAVAO</li>
		// 					</ul>
		// 					Need a specific port? Contact us for a custom quote.
		// 				</p>
		// 			</FadeInOnView>

		// 			<FadeInOnView>
		// 				<h1 className="text-xl md:xl font-bold text-[var(--secondary-color)]">📂 Documents We Handle</h1>
		// 			</FadeInOnView>

		// 			<FadeInOnView>
		// 				<p className="text:base md:text-base">
		// 					We assist in preparing and filing all necessary documents for LCL shipments:
		// 					<ul className="list-disc list-inside mt-2">
		// 						<li>Commercial Invoice</li>
		// 						<li>Packing List</li>
		// 						<li>Bill of Lading (House/ Master)</li>
		// 						<li>Import/Export Permits</li>
		// 						<li>Certificate of Origin (if needed)</li>
		// 					</ul>
		// 				</p>
		// 			</FadeInOnView>

		// 			<FadeInOnView>
		// 				<ReadyToShip />
		// 			</FadeInOnView>
		// 		</main>
		// 	</div>

		<div>
			<main className="flex flex-col justify-start items-start text-left w-full max-w-3xl p-6 gap-6">
				<h1
					className="text-xl md:xl font-bold text-[var(--white-color)] p-3 rounded-lg w-full"
					style={{
						background: "linear-gradient(to left, var(--primary-color), var(--primary-accent))",
					}}
				>
					International FCL & LCL Shipment
				</h1>

				<FadeInOnView>
					<h1 className="text-xl font-bold md:xl">Flexible Container Solutions for Your Global Cargo Needs</h1>
				</FadeInOnView>

				<FadeInOnView>
					<p className="text-sm md:text-base text-justify">
						Whether you’re shipping a few pallets or filling an entire container, we provide tailored solutions through Full Container Load (FCL) or Less than Container Load (LCL) — helping you save
						time and money on international shipments.
					</p>
				</FadeInOnView>

				<FadeInOnView>
					<img src={FclImage1} alt="FclImage1" className="w-full max-w-4xl mx-auto" />
				</FadeInOnView>

				<section>
					<FadeInOnView>
						<button
							className="text-[var(--white-color)] w-full rounded-xl font-bold mb-2 px-2 py-2"
							style={{
								background: "linear-gradient(to right, var(--primary-color), var(--primary-accent))",
							}}
						>
							What We Offer
						</button>
					</FadeInOnView>

					<div
						className="p-5 rounded-lg "
						style={{
							background: "linear-gradient(to top, var(--secondary-color), var(--secondary-accent))",
						}}
					>
						{" "}
						<FadeInOnView>
							<h1 className="text-xl font-bold md:4xl text-[var(--primary-color)] mb-5">FCL (Full Container Load)</h1>
						</FadeInOnView>
						<FadeInOnView>
							<h2 className="font-bold text-[var(--white-color)] mb-2">What is FCL? </h2>
						</FadeInOnView>
						<FadeInOnView>
							<p className="md:text:base text-sm text-[var(--white-color)] mb-2 text-justify">
								FCL stands for Full Container Load, a shipping method where one shipper uses the entire container space for their cargo — even if the container isn’t completely full.
							</p>
						</FadeInOnView>
						<FadeInOnView>
							<img src={FclImage2} alt="FclImage2" className="w-full max-w-4xl mx-auto mb-2" />
						</FadeInOnView>
						<FadeInOnView>
							<p className="md:text-base text-sm  text-[var(--white-color)] mb-2 text-justify">
								In FCL shipping, the entire container (e.g., 20ft or 40ft) is booked by a single shipper, regardless of whether they use all the space or not. This method ensures that the container
								contains only your goods, not shared with others, providing greater control, security, and efficiency.
							</p>
						</FadeInOnView>
						<FadeInOnView>
							<div className="flex flex-col items-center text-center bg-[var(--white-color)] rounded-lg p-3">
								<h1 className="text-xl font-semibold mb-6 text-[var(--primary-color)]">Perfect When You're Shipping:</h1>

								<div className="flex flex-row gap-8">
									<div className="flex flex-col items-center gap-2">
										<div className="bg-[var(--primary-color)] p-3 rounded-full">
											<Package size={24} className="text-white" />
										</div>
										<p className="text-base font-bold">Bulk Shipments</p>
									</div>

									<div className="flex flex-col items-center gap-2">
										<div className="bg-[var(--primary-color)] p-3 rounded-full">
											<ShieldCheck size={24} className="text-white" />
										</div>
										<p className="text-base font-bold">Fragile or sensitive cargo</p>
									</div>

									<div className="flex flex-col items-center gap-2">
										<div className="bg-[var(--primary-color)] p-3 rounded-full">
											<Timer size={24} className="text-white" />
										</div>
										<p className="text-base font-bold">Urgent timelines</p>
									</div>
								</div>
							</div>
						</FadeInOnView>
						<FadeInOnView>
							<div className="flex justify-center items-start flex-col mt-3 text-base text-[var(--white-color)]">
								<p className="md:text-base text-sm ">✅ Your cargo only</p>
								<p className="md:text-base text-sm ">✅ No sharing space</p>
								<p className="md:text-base text-sm ">✅ Better control and security</p>
								<p className="md:text-base text-sm ">✅ Fixed shipping schedule</p>
							</div>
						</FadeInOnView>
					</div>

					<div
						className="p-5 rounded-lg mt-2"
						style={{
							background: "linear-gradient(to top, var(--secondary-color), var(--secondary-accent))",
						}}
					>
						<FadeInOnView>
							<h1 className="text-xl font-bold md:xl text-[var(--primary-color)]">LCL (Less than Container Load)</h1>
						</FadeInOnView>

						<FadeInOnView>
							<h2 className="font-bold text-[var(--white-color)] mb-3">What is LCL? </h2>
						</FadeInOnView>

						<FadeInOnView>
							<p className="md:text-base text-sm text-[var(--white-color)] mb-2 text-justify">
								LCL stands for Less than Container Load, a shipping method where multiple shippers share space in a single container. Each shipper only pays for the space their cargo uses — making it
								ideal for smaller shipments that don't need a full container.
							</p>
						</FadeInOnView>

						<FadeInOnView>
							<img src={FclImage2} alt="FclImage2" className="w-full max-w-4xl mx-auto mb-2 text-justify" />
						</FadeInOnView>

						<FadeInOnView>
							<p className="md:text-base text-sm  text-[var(--white-color)] mb-2 text-justify">
								LCL allows businesses or individuals to ship goods internationally without booking an entire container. It's designed for shipments that are too small for Full Container Load (FCL) but
								still require reliable, international transport.
							</p>
						</FadeInOnView>

						<FadeInOnView>
							<div className="flex flex-col items-center text-center bg-[var(--white-color)] rounded-lg p-3 mb-2">
								<h1 className="text-xl font-semibold mb-6 text-[var(--primary-color)]">Perfect When You're Shipping:</h1>

								<div className="flex flex-row gap-8">
									<div className="flex flex-col items-center gap-2">
										<div className="bg-[var(--primary-color)] p-3 rounded-full">
											<Package size={24} className="text-white" />
										</div>
										<p className="text:base md:text-base font-bold">Small volumes</p>
									</div>

									<div className="flex flex-col items-center gap-2">
										<div className="bg-[var(--primary-color)] p-3 rounded-full">
											<ShieldCheck size={24} className="text-white" />
										</div>
										<p className="text:base md:text-base font-bold">Not Fragile</p>
									</div>

									<div className="flex flex-col items-center gap-2">
										<div className="bg-[var(--primary-color)] p-3 rounded-full">
											<Timer size={24} className="text-white" />
										</div>
										<p className="text:base md:text-base font-bold">Low shipping costs</p>
									</div>
								</div>
							</div>
						</FadeInOnView>

						<FadeInOnView>
							<div className="flex justify-center items-start flex-col text:base md:text-base mt-3 text-[var(--white-color)]">
								<p>✅ Pay only for the space you use</p>
								<p>✅ Regular shipping schedules</p>
								<p>✅ Ideal for growing businesses</p>
							</div>
						</FadeInOnView>
					</div>
				</section>
				<FadeInOnView>
					<ReadyToShip />
				</FadeInOnView>
			</main>
		</div>
	);
};

export default Seafreight;
