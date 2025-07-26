import React from 'react'
import ServicesBackgroundImage from '../assets/images/services-bg.png';
import Logo from '../assets/DigoTradersIncLogo.svg';
import AboutImage from '../assets/images/aboutImg.png';
import {
    Truck,
    Plane,
    Anchor,
    Scale,
    MapPin,
    FileText,
} from 'lucide-react';


const About = () => {
    return (
        <div>
            <section
                className="relative flex justify-center items-start flex-col h-[400px] bg-cover bg-center"
                style={{ backgroundImage: `url(${ServicesBackgroundImage})` }}
            >
                <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

                <div className="relative text-start mx-8 md:ml-50">
                    <h1 className="text-4xl md:text-5xl text-[var(--primary-color)] py-4 font-bold">
                        Digo Traders Incorporated
                    </h1>
                    <p className="text-base md:text-lg text-[var(--white-color)]">
                        Trusted Logistics, Seamless Customs, Nationwide Delivery.
                    </p>
                </div>
            </section>


            <section className="flex flex-col md:flex-row justify-between items-center w-full gap-1 p-16">
                <div className="w-full md:w-1/2">
                    <img src={Logo} alt="Digo Traders Inc." className="w-40 h-auto mb-4" />
                    <p className="text-base md:text-base text-left font-semibold">
                        DIGO Traders Incorporated is a Philippine-based logistics company committed to making import, export, and domestic shipping easier for businesses of all sizes. Whether you're transporting goods across borders or across cities, we handle every step with accuracy, speed, and transparency.
                    </p>
                </div>

                <div className="w-full md:w-1/2 flex justify-center">
                    <img src={AboutImage} alt="About" className="w-full" />
                </div>
            </section>


            <section
                style={{
                    background: 'linear-gradient(to top, var(--secondary-color), var(--secondary-accent), black)',
                }}
                className="py-12 px-6"
            >
                <h1 className="text-4xl md:text-5xl text-[var(--white-color)] font-semibold mb-10 text-center">
                    We Specialize In:
                </h1>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="bg-[var(--primary-color)] text-[var(--white-color)] rounded-2xl p-6 shadow-lg flex items-start gap-4">
                        <Truck size={40} />
                        <div>
                            <h1 className="text-2xl font-semibold mb-1">Land Freight</h1>
                            <p>Nationwide delivery.</p>
                        </div>
                    </div>

                    <div className="bg-[var(--primary-color)] text-[var(--white-color)] rounded-2xl p-6 shadow-lg flex items-start gap-4">
                        <Plane size={40} />
                        <div>
                            <h1 className="text-2xl font-semibold mb-1">Air Freight</h1>
                            <p>Fast Global Shipping.</p>
                        </div>
                    </div>

                    <div className="bg-[var(--primary-color)] text-[var(--white-color)] rounded-2xl p-6 shadow-lg flex items-start gap-4">
                        <Anchor size={40} />
                        <div>
                            <h1 className="text-2xl font-semibold mb-1">Sea Freight</h1>
                            <p>Affordable bulk transport.</p>
                        </div>
                    </div>

                    <div className="bg-[var(--primary-color)] text-[var(--white-color)] rounded-2xl p-6 shadow-lg flex items-start gap-4">
                        <Scale size={40} />
                        <div>
                            <h1 className="text-2xl font-semibold mb-1">Compliance</h1>
                            <p>Clearance & legal docs.</p>
                        </div>
                    </div>

                    <div className="bg-[var(--primary-color)] text-[var(--white-color)] rounded-2xl p-6 shadow-lg flex items-start gap-4">
                        <MapPin size={40} />
                        <div>
                            <h1 className="text-2xl font-semibold mb-1">Door-to-door</h1>
                            <p>Part to destination, handled.</p>
                        </div>
                    </div>

                    <div className="bg-[var(--primary-color)] text-[var(--white-color)] rounded-2xl p-6 shadow-lg flex items-start gap-4">
                        <FileText size={40} />
                        <div>
                            <h1 className="text-2xl font-semibold mb-1">Licensing</h1>
                            <p>Permits, papers, done.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-full'>
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
    )
}

export default About