import React from 'react';
import CustomBrokerageImg1 from '../assets/images/servicesCustomBrokerageImg1.png';
import CustomBrokerageImg2 from '../assets/images/servicesCustomBrokerageImg2.png';
import ReadyToShip from '../components/ReadyToShip';
import {
  FileText,
  ReceiptText,
  ShieldCheck,
  BadgeCheck,
  Timer
} from 'lucide-react'

const iconStyle = "p-2 rounded-full bg-[var(--primary-color)] text-[var(--white-color)]"
const iconStyleGreen = "p-2 rounded-full bg-[var(--green-color)] text-[var(--white-color)]"


const CustomBrokerage = () => {
  return (
    <div className="flex justify-start items-start">
      <main className="flex flex-col justify-start items-start text-left w-full max-w-3xl p-6 gap-6">
        <h1 className="text-xl md:text-xl font-bold text-[var(--white-color)] p-3 rounded-lg w-full" style={{
          background: 'linear-gradient(to left, var(--primary-color), var(--primary-accent))'
        }}>
          Custom Brokerage
        </h1>

        <h2 className="text-xl md:text-xl font-bold">Smooth Borders. Fast Clearance. Zero Hassle.</h2>
        <p className='text-base md:text-base'>
          When your goods cross international borders, the paperwork shouldn’t slow you down. Our expert Customs Brokerage team handles all import and export requirements — so you can focus on your business while we handle compliance. </p>

        <img src={CustomBrokerageImg1} alt="Air Freight" className="w-full rounded-lg" />

        <div className='w-full rounded-2xl' style={{
          background: 'linear-gradient(to top, var(--secondary-color), var(--secondary-accent), black)'
        }}>

          <section className='flex flex-col md:flex-row m-5'>
            <div className="p-5">
              <h2 className="text-xl md:text-xl font-bold text-[var(--primary-color)]">From Paperwork to Port — We Clear the Way for Your Cargo.</h2>
              <p className=' text-base md:text-base text-[var(--white-color)]'>
                Navigating customs can be complex, but we simplify it for you. Our expert team ensures your cargo meets all legal and regulatory requirements — so you avoid delays, penalties, or extra costs.              </p>
              <img src={CustomBrokerageImg2} alt="Freight Process" className="w-full rounded-lg my-4" />
              <div className='flex justify-center items-center flex-col'>
                <p className="text-base font-medium text-[var(--primary-color)] text-center">Have Questions?</p>
                <button className="mt-2 px-4 py-2 bg-[var(--primary-color)] text-[var(--white-color)] rounded-full text-center font-bold">Talk to an Expert</button>
              </div>

            </div>

            <div className="bg-[var(--white-color)] flex flex-col gap-5 pt-10 px-5 rounded-lg">
              {/* Steps with icon and label side-by-side */}
              {[
                { icon: <FileText size={30} />, label: "Complete Documentation" },
                { icon: <ReceiptText size={30} />, label: "Taxes, Duties & Fees" },
                { icon: <ShieldCheck size={30} />, label: "Customs Clearance" },
                { icon: <BadgeCheck size={30} />, label: "Regulatory Compliance" },
                { icon: <Timer size={30} />, label: "Faster Border Processing", isLast: true },
              ].map((step, index) => (
                <div key={index} className="relative flex items-center gap-5">
                  {/* Vertical line */}
                  {index < 4 && (
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



          <div className='p-5'>
            <h2 className="text-xl font-bold mt-6 text-[var(--primary-color)]">STEP BY STEP PROCESS</h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-xl font-bold text-[var(--white-color)]">1. Complete Documentation</h3>
                <p className='text-base md:text-base text-[var(--white-color)]'>We prepare all necessary import/export paperwork, permits, and customs declarations — fully compliant with Philippine and international regulations.</p>
              </div>

              <div>
                <h3 className="text-xl  font-bold text-[var(--white-color)]">2. Taxes, Duties & Fees</h3>
                <p className='text-base md:text-base text-[var(--white-color)]'>We compute and process tariffs, VAT, and other duties — ensuring there are no surprises upon arrival.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[var(--white-color)]">3. Customs Clearance</h3>
                <p className='text-base md:text-base text-[var(--white-color)]'>Our licensed brokers liaise directly with customs officials to get your cargo cleared fast and legally.</p>
              </div>

              <div>
                <h3 className="text-xl  font-bold text-[var(--white-color)]">4. Regulatory Compliance</h3>
                <p className='text-base md:text-base text-[var(--white-color)]'>We ensure your cargo meets all trade laws and government agency requirements (e.g., FDA, BOC, DA, DTI).</p>
              </div>
            </div>
          </div>


        </div>


        <section className="mt-8 w-full">
          <h1 className="text-xl font-bold w-full text-[var(--primary-color)]">Why It Matters</h1>
          <p>Without proper brokerage, your cargo can be delayed, penalized, or confiscated. We eliminate that risk by managing the entire clearance process - the smart way.</p>
          <h2>Want to Understand It Better?</h2>
          <p>Here are trusted explainer videos you can watch:</p>
        </section>

        <div className="aspect-video w-full max-w-4xl mx-auto">
          <iframe
            src=" https://youtu.be/4ZMJg98JOoI?si=UVf1V3jYt_PQdUpA"
            title="Customs Broker | Terms & Definitions"
            frameBorder="0"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>


        <ReadyToShip />
      </main>
    </div >
  );
};

export default CustomBrokerage;
