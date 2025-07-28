import React from 'react'
import AccreditationOfImportLicenseImage from '../../assets/images/servicesAccreditation.png';
import LetsRenewAmoCertificate from '../../components/LetsRenewAmoCertificate';

const importLicense = () => {
    return (
        <div>
            <main className="flex flex-col justify-start items-start text-left w-full max-w-3xl p-6 gap-6">
                <h1 className="text-xl md:xl font-bold text-[var(--white-color)] p-3 rounded-lg w-full" style={{
                    background: 'linear-gradient(to left, var(--primary-color), var(--primary-accent))'
                }}>Accreditation of Import License</h1>
                <h1 className='text-xl font-bold md:4xl'>Start Importing Legally and Smoothly in the Philippines</h1>
                <p className='text:base md:text-base'>If you're planning to bring goods into the Philippines for business, getting accredited as an importer is mandatory. We help businesses—big or small—get their Import License and register with the Bureau of Customs (BOC) without the hassle.</p>

                <img src={AccreditationOfImportLicenseImage} alt="AccreditationOfImportLicenseImage" className="w-full max-w-4xl mx-auto rounded-2xl" />

                <h1 className='text-xl font-bold md:xl'>What Is Import License Accreditation?</h1>
                <p className='text:base md:text-base'>Import accreditation is the process of registering your company with the Bureau of Customs and other regulatory agencies like the Bureau of Internal Revenue (BIR) and Department of Trade and Industry (DTI) or SEC. This allows your business to legally import goods into the country.</p>


                <div className='p-5 rounded-2xl' style={{
                    background: 'linear-gradient(to top, var(--secondary-color), var(--secondary-accent), black)'
                }}>


                    <h2 className="text-xl font-bold mt-6 text-[var(--primary-color)]">Our Services Include:</h2>



                    <div className="mt-4 space-y-4">
                        <div>
                            <h3 className="text-xl font-bold text-[var(--white-color)]">1. Document Preparation</h3>
                            <p className='text-base md:text-base text-[var(--white-color)]'>We prepare and review all required forms and documents such as BIR registration, business permits,</p>
                        </div>

                        <div>
                            <h3 className="text-xl  font-bold text-[var(--white-color)]">2. Customs and BIR Accreditation</h3>
                            <p className='text-base md:text-base text-[var(--white-color)]'>We file your documents with the proper government agencies and guide you through BOC e2m (Electronic-to-Mobile)registration.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-[var(--white-color)]">3. Client Profile Registration System (CPRS) Setup</h3>
                            <p className='text-base md:text-base text-[var(--white-color)]'>We register your company on CPRS, which is required for processing import entries and customs clearance.</p>
                        </div>

                        <div>
                            <h3 className="text-xl  font-bold text-[var(--white-color)]">4. DTI or SEC Coordination</h3>
                            <p className='text-base md:text-base text-[var(--white-color)]'>Whether you're a sole proprietor or a corporation, we help coordinate requirements specific to your business type.</p>
                        </div>

                        <div>
                            <h3 className="text-xl  font-bold text-[var(--white-color)]">5. Step-by-step Guidance</h3>
                            <p className='text-base md:text-base text-[var(--white-color)]'>From eligibility to final approval, we guide you through the entire process.</p>
                        </div>
                        <div className="flex justify-center items-start flex-col mt-3 p-5 rounded-2xl" style={{
                            background: 'linear-gradient(to left, var(--primary-color), var(--primary-accent))'
                        }}>
                            <h1 className='text-xl font-bold text-[var(--white-color)]'>🕒 How Long Does It Take?</h1>
                            <p className='text:base md:text-base text-[var(--white-color)]'>With complete documents, import license accreditation can be done in 7–15 business days depending on agency response times. We help you move faster by ensuring everything is in order.</p>
                        </div>

                    </div>
                </div>


                <div className="flex justify-center items-start flex-col mt-3">
                    <h1 className='text-xl font-bold text-[var(--primary-color)]'>Who Needs This</h1>
                    <ul className="list-disc pl-6 text-base md:text-base">
                        <li>New importers entering the Philippines market.</li>
                        <li>E-commerce businesses sourcing products abroad.</li>
                        <li>Local distributors expanding into imports.</li>
                        <li>Startups wanting to access global suppliers</li>
                    </ul>
                </div>

                <div className="flex justify-center items-start flex-col bg-[var(--gray-color)] p-5 mt-3 w-full rounded-2xl">
                    <h1 className='text-xl font-bold text-[var(--primary-color)]'>Why Choose Us?</h1>
                    <ul className="list-disc pl-6 text-base md:text-base">
                        <p className='text:base md:text-base'>✅ End-to-end assistance.</p>
                        <p className='text:base md:text-base'>✅ Compliance with BOC, BIR, and DTI/SEC.</p>
                        <p className='text:base md:text-base'>✅ Avoid penalties and delays.</p>
                        <p className='text:base md:text-base'>✅ Fast and responsive support.</p>
                    </ul>
                </div>
                < LetsRenewAmoCertificate />
            </main>
        </div>
    )
}

export default importLicense