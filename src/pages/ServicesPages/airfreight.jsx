import React from 'react';
import ServicesAirFreightImg1 from '../../assets/images/servicesAirFreightImg1.png';
import ServicesAirFreightImg2 from '../../assets/images/servicesAirFreightImg2.png';
import ReadyToShip from '../../components/ReadyToShip';
import {
  Truck,
  Package,
  Plane,
  FileText,
  ShieldCheck,
  MapPin
} from 'lucide-react'

const iconStyle = "p-2 rounded-full bg-[var(--primary-color)] text-[var(--white-color)]"
const iconStyleGreen = "p-2 rounded-full bg-[var(--green-color)] text-[var(--white-color)]"


const Airfreight = () => {
  return (
    <div className="flex justify-start items-start">
      <main className="flex flex-col justify-start items-start text-left w-full max-w-3xl p-6 gap-6">
        <h1 className="text-xl md:xl font-bold text-[var(--white-color)] p-3 rounded-lg w-full" style={{
          background: 'linear-gradient(to left, var(--primary-color), var(--primary-accent))'
        }}>
          Air Freight
        </h1>

        <h2 className="text-xl md:xl font-bold">Fast Air Shipping - We Handle Everything For You</h2>
        <p className='text-base md:text-base'>
          Need your goods delivered quickly? We offer end-to-end international air freight services — managing every step so you don't have to.
        </p>

        <img src={ServicesAirFreightImg1} alt="Air Freight" className="w-full rounded-lg" />

        <div className='w-full rounded-2xl' style={{
          background: 'linear-gradient(to top, var(--secondary-color), var(--secondary-accent), black)'
        }}>

          <section className='flex flex-col md:flex-row m-5'>
            <div className="p-5">
              <h2 className="text-xl md:xl font-bold text-[var(--primary-color)]">How Our Air Freight Process Works</h2>
              <p className=' text-base md:text-base text-[var(--white-color)]'>
                From pickup to customs to delivery — we handle it all, so your cargo arrives on time and hassle-free.
              </p>
              <img src={ServicesAirFreightImg2} alt="Freight Process" className="w-full rounded-lg my-4" />
              <div className='flex justify-center items-center flex-col'>
                <p className="text-base font-medium text-[var(--primary-color)] text-center">Have Questions?</p>
                <button className="mt-2 px-4 py-2 bg-[var(--primary-color)] text-[var(--white-color)] rounded-full text-center font-bold">Talk to an Expert</button>
              </div>

            </div>

            <div className="bg-[var(--white-color)] flex flex-col gap-5 p-5 rounded-lg">
              {/* Steps with icon and label side-by-side */}
              {[
                { icon: <Truck size={30} />, label: "Cargo Pick-up" },
                { icon: <Package size={30} />, label: "Packaging & Labeling" },
                { icon: <Plane size={30} />, label: "Flight Booking" },
                { icon: <FileText size={30} />, label: "Documentation" },
                { icon: <ShieldCheck size={30} />, label: "Customs Clearance" },
                { icon: <MapPin size={30} />, label: "Delivery", isLast: true },
              ].map((step, index) => (
                <div key={index} className="relative flex items-center gap-5">
                  {/* Vertical line */}
                  {index < 5 && (
                    <div className="absolute left-6 top-[50%] translate-y-1/2 w-1 h-full bg-[var(--primary-color)] z-0"></div>
                  )}

                  {/* Icon */}
                  <div
                    className={`z-10 p-3 rounded-full ${step.isLast
                      ? "bg-[var(--green-color)]"
                      : "bg-[var(--primary-color)]"
                      } text-[var(--white-color)]`}
                  >
                    {step.icon}
                  </div>

                  {/* Label */}
                  <p className="text-base md:text-base font-bold pr-15">{step.label}</p>
                </div>
              ))}
            </div>
          </section>



          <div className='p-5 md:p-10'>
            <h2 className="text-xl md:xl font-bold mt-6 text-[var(--primary-color)]">STEP BY STEP PROCESS</h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-xl md:xl font-bold text-[var(--white-color)]">1. Cargo Pick-Up</h3>
                <p className='text-base md:text-base text-[var(--white-color)]'>We collect your goods from your supplier or warehouse, ensuring safe handling from the start.</p>
              </div>

              <div>
                <h3 className="text-xl md:xl  font-bold text-[var(--white-color)]">2. Packaging & Labeling</h3>
                <p className='text-base md:text-base text-[var(--white-color)]'>Items are packed and labeled professionally, ready for international air transport.</p>
              </div>

              <div>
                <h3 className="text-xl md:xl font-bold text-[var(--white-color)]">3. Flight Booking & Coordination</h3>
                <p className='text-base md:text-base text-[var(--white-color)]'>We secure and manage the next available flight to minimize delays.</p>
              </div>

              <div>
                <h3 className="text-xl md:xl font-bold text-[var(--white-color)]">4. Complete Documentation</h3>
                <p className='text-base md:text-base text-[var(--white-color)]'>Includes commercial invoices, airway bills, and customs forms — handled by us.</p>
              </div>

              <div>
                <h3 className="text-xl md:xl font-bold text-[var(--white-color)]">5. Customs Clearance</h3>
                <p className='text-base md:text-base text-[var(--white-color)]'>We ensure full compliance and manage all duties and taxes for import/export.</p>
              </div>

              <div>
                <h3 className="text-xl md:xl  font-bold text-[var(--white-color)]">6. Airport-to-Door Delivery</h3>
                <p className='text-base md:text-base text-[var(--white-color)]'>After arrival, we handle ground delivery to you or your client directly.</p>
              </div>
            </div>
          </div>


        </div>


        <section className="mt-8 w-full">
          <h2 className="text-xl md:xl font-bold w-full">An Ideal Shipping Solution For:</h2>
          <ul className="list-none text-base mt-2 font-semibold">
            <li>✅ Businesses with urgent international shipments</li>
            <li>✅ Light and high-value goods</li>
            <li>✅ E-commerce, electronics, and pharma cargo</li>
            <li>✅ Importers/Exporters who want zero hassle</li>
          </ul>
        </section>
        <ReadyToShip />
      </main>
    </div >
  );
};

export default Airfreight;
