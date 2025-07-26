import React from 'react';
import SeafreightImage1 from '../assets/images/seafreight-img1.png';
import SeafreightImage2 from '../assets/images/seafreight-img2.png';
import ReadyToShip from '../components/ReadyToShip';


const Seafreight = () => {
        return (
                <div>
                        <main className="flex flex-col justify-start items-start text-left p-6 gap-6 max-w-3xl">
                                <h1 className="text-xl md:xl font-bold text-[var(--white-color)] p-3 rounded-lg w-full" style={{
                                        background: 'linear-gradient(to left, var(--primary-color), var(--primary-accent))'
                                }}>Import/Export Sea Freight Consolidation</h1>
                                <p className='text:base md:text-base'>
                                        We combine small shipments into one container to help you save on cost — ideal for growing businesses and importers with light cargo.
                                </p>

                                <img src={SeafreightImage1} alt="Sea Freight Consolidation Example" className="w-full" />

                                <h1 className="text-xl md:xl font-bold text-[var(--secondary-color)]">What is Sea Freight Consolidation?</h1>
                                <p className='text:base md:text-base'>
                                        Sea freight consolidation is a logistics service where shipments from multiple customers are combined into one container — also known as Less than Container Load (LCL). Instead of paying for an entire container, you only pay for the space you need. This allows importers and exporters to ship internationally by sea without the high costs of Full Container Load (FCL) shipping.
                                </p>

                                <div className="aspect-video w-full ">
                                        <iframe
                                                src="https://www.youtube.com/embed/1Zla30BpI_k?si=ruMzYks4YtcGh5ij"
                                                title="FCL vs LCL"
                                                frameBorder="0"
                                                allowFullScreen
                                                className="w-full h-full rounded-2xl"
                                        ></iframe>
                                </div>

                                <h1 className="text-xl md:xl font-bold text-[var(--secondary-color)]">FCL vs LCL Shipment: Cost Calculation & Break‑Even</h1>
                                <p className='text:base md:text-base'>
                                        <strong>Why it’s useful:</strong> Excellent explanation of the cost comparison between Full Container Load (FCL) and Less than Container Load (LCL). Walks through volume-based pricing and when LCL makes sense.
                                </p>

                                <h1 className="text-xl md:xl font-bold text-[var(--secondary-color)]">Who Is This For?</h1>
                                <p className='text:base md:tex-base'>
                                        Our consolidation service is best suited for:
                                        <ul className="list-none list-inside mt-2">
                                                <li>✅ Small to Medium Enterprises (SMEs) who don’t ship large volumes</li>
                                                <li>✅ Online sellers and resellers</li>
                                                <li>✅ Startups exploring international trade</li>
                                                <li>✅ Occasional importers with light or mixed cargo</li>
                                        </ul>
                                </p>

                                <img src={SeafreightImage2} alt="Seafreight Process" className="w-full  rounded-2xl" />

                                <h1 className="text-xl md:xl font-bold text-[var(--secondary-color)]">How It Works?</h1>
                                <p className='text:base md:text-base'>
                                        We handle the entire process from pickup to port:
                                        <ul className="list-decimal list-inside mt-2">
                                                <li>Cargo Collection – We receive your goods from your supplier or warehouse.</li>
                                                <li>Cargo Consolidation – We pack your items together with other shipments in a shared container.</li>
                                                <li>Documentation & Labeling – Each shipment is labeled, documented, and assigned for customs processing.</li>
                                                <li>Departure Scheduling – Your consolidated container is scheduled on the next available vessel.</li>
                                                <li>Customs Clearance & Deconsolidation – Upon arrival, we clear the cargo, separate shipments, and deliver to you.</li>
                                        </ul>
                                </p>

                                <h1 className="text-xl md:xl text-center md:4xl font-bold text-[var(--primary-color)]">Why Choose Consolidation?</h1>
                                <table className="w-full rounded-2xl">
                                        <thead>
                                                <tr>
                                                        <th className="bg-[var(--primary-color)] text-[var(--white-color)] text-center text-[20px] p-2">Benefits</th>
                                                        <th className="bg-[var(--secondary-color)] text-[var(--white-color)] text-center text-[20px] p-2">Description</th>

                                                </tr>
                                        </thead>
                                        <tbody className='bg-[var(--gray-color)] p-5'>
                                                <tr>
                                                        <td className='font-bold p-5'>✅Lower Shipping Cost</td>
                                                        <td >Share container space and pay only for what you use.</td>
                                                </tr>
                                                <tr>
                                                        <td className='font-bold p-5'>✅No Need for Full Container</td>
                                                        <td >Ideal for 1-12 CBM (cubic meters) of cargo.</td>
                                                </tr>
                                                <tr>
                                                        <td className='font-bold p-5'>✅Flexible Scheduling</td>
                                                        <td >We offer weekly sailings to major destinations.</td>
                                                </tr>
                                                <tr>
                                                        <td className='font-bold p-5'>✅Door-to-Door Option</td>
                                                        <td >Combine with land transport for ther final delivery.</td>
                                                </tr>
                                                <tr>
                                                        <td className='font-bold p-5'>✅Handled Paperwork</td>
                                                        <td >We take care of documents and customs clearance.</td>
                                                </tr>
                                        </tbody>
                                </table>
                                <h1 className="text-xl md:xl font-bold text-[var(--secondary-color)]">🌍 Available Routes</h1>
                                <p className='text:base md:text-base'>
                                        We consolidate shipments to and from major ports such as:
                                        <ul className="list-disc list-inside mt-2">
                                                <li>Manila</li>
                                                <li>Cebu</li>
                                                <li>Singapore</li>
                                                <li>Hong Kong</li>
                                                <li>Los Angeles / Long Beach</li>
                                                <li>Dubai / Jebel Ali</li>
                                                <li>Shanghai / Ningbo</li>
                                        </ul>
                                        Need a specific port? Contact us for a custom quote.
                                </p>

                                <h1 className="text-xl md:xl font-bold text-[var(--secondary-color)]">📂 Documents We Handle</h1>
                                <p className='text:base md:text-base'>
                                        We assist in preparing and filing all necessary documents for LCL shipments:
                                        <ul className="list-disc list-inside mt-2">
                                                <li>Commercial Invoice</li>
                                                <li>Packing List</li>
                                                <li>Bill of Lading (House/ Master)</li>
                                                <li>Import/Export Permits</li>
                                                <li>Certificate of Origin (if needed)</li>
                                        </ul>
                                </p>
                                <ReadyToShip />
                        </main>
                </div>
        );
};

export default Seafreight;
