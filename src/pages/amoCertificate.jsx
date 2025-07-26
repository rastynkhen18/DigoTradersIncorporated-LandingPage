import React from 'react'
import AmoCertificateRenewalImage from '../assets/images/servicesRenewal.png';
import LetsRenewAmoCertificate from '../components/LetsRenewAmoCertificate';

const amoCertificate = () => {
    return (
        <div>
            <main className="flex flex-col justify-start items-start text-left w-full max-w-3xl p-6 gap-6">
                <h1 className="text-3xl md:4xl font-bold text-[var(--white-color)] p-3 rounded-lg w-full" style={{
                    background: 'linear-gradient(to left, var(--primary-color), var(--primary-accent))'
                }}>Renewal of AMO Certificate</h1>
                <h1 className='text-3xl font-bold md:4xl'>Keep Your Customs License Active & Compliant</h1>
                <p className='text:base md:text-lg'>The Accredited Managing Officer (AMO) Certificate is a key requirement for businesses engaged in importation or customs brokerage in the Philippines. Regular renewal is essential to avoid penalties, disruptions, or revocation of accreditation.</p>

                <img src={AmoCertificateRenewalImage} alt="AmoCertificateRenewalImage" className="w-full max-w-4xl mx-auto rounded-2xl" />

                <div className='p-5 rounded-2xl' style={{
                    background: 'linear-gradient(to top, var(--secondary-color), var(--secondary-accent), black)'
                }}>
                    <h2 className="text-4xl font-bold mt-6 text-[var(--primary-color)]">What We Do</h2>

                    <p className='text-base md:text-lg text-[var(--white-color)]'>We assist clients in renewing their AMO certificates smoothly and on time by handling all document preparation, submission, and coordination with regulatory bodies.</p>

                    <h2 className="text-4xl font-bold mt-6 text-[var(--primary-color)]">Our AMO Renewal Services Include:</h2>



                    <div className="mt-4 space-y-4">
                        <div>
                            <h3 className="text-3xl font-bold text-[var(--white-color)]">1. Review of AMO Requirements</h3>
                            <p className='text-base md:text-lg text-[var(--white-color)]'>We verify all required documents such as BOC forms, valid IDs, proof of appointment, etc.</p>
                        </div>

                        <div>
                            <h3 className="text-3xl  font-bold text-[var(--white-color)]">2. Document Preparation & Filing</h3>
                            <p className='text-base md:text-lg text-[var(--white-color)]'>We handle the proper formatting, notarization, and submission of your renewal documents to the Bureau of Customs.</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-[var(--white-color)]">3. Follow-Up & Coordination</h3>
                            <p className='text-base md:text-lg text-[var(--white-color)]'>We track the progress of your application and ensure it gets processed within the required timeline.</p>
                        </div>

                        <div>
                            <h3 className="text-3xl  font-bold text-[var(--white-color)]">4. Consultation for Updates & Compliance</h3>
                            <p className='text-base md:text-lg text-[var(--white-color)]'>We advise on any changes in the AMO renewal process, including new rules, deadlines, or forms.</p>
                        </div>

                        <div>
                            <h3 className="text-3xl  font-bold text-[var(--white-color)]">5. Shipment Review & Cost Audit</h3>
                            <p className='text-base md:text-lg text-[var(--white-color)]'>Already working with another forwarder? We can audit your current or past shipments to identify overcharges, miscalculations, or missed savings.</p>
                        </div>

                    </div>
                </div>



                <div className="flex justify-center items-start flex-col mt-3 p-5 rounded-2xl" style={{
                    background: 'linear-gradient(to left, var(--primary-color), var(--primary-accent))'
                }}>
                    <h1 className='text-3xl font-bold text-[var(--white-color)]'>When Should You Renew?</h1>
                    <p className='text:base md:text-lg text-[var(--white-color)]'>The AMO Certificate must typically be renewed annually or as required by the BOC (Bureau of Customs) guidelines.</p>
                    <p className='text:base md:text-lg text-orange-700 font-bold'>We help you avoid last-minute rush and penalties by notifying you ahead of time.</p>
                </div>


                <div className="flex justify-center items-start flex-col mt-3">
                    <h1 className='text-3xl font-bold text-[var(--primary-color)]'>Why It Matters</h1>
                    <p className='text:base md:text-lg'>A single mistakes in HS classification or duty estimate can:</p>
                    <ul className="list-disc pl-6 text-base md:text-lg">
                        <li>Delay your cargo.</li>
                        <li>Trigger audits or penalties.</li>
                        <li>Inflate your logistics budget by thousands.</li>
                    </ul>

                    <p className='text:base md:text-lg'>We help you ship smarter, pay fair, and stay legal.</p>
                </div>

                < LetsRenewAmoCertificate />
            </main>
        </div>
    )
}

export default amoCertificate