import React from 'react'
import HomePageBackground from '../assets/images/homepage-img.png';
import Airplane from '../assets/images/airplane-transparent.png';
import AirFreightbg from '../assets/images/airfreight-bg.png';
import SeaFreightbg from '../assets/images/seafreight-bg.png';
import LandFreightbg from '../assets/images/landfreight-bg.png';
import Container1Image from '../assets/images/container1Image.png';
import Container2Image from '../assets/images/container2Image.png';
import DropDownFAQ from '../components/DropDownFAQ'
import { Package, ShoppingCart, Truck, Factory, Building2, Plane, Anchor, ChevronRight, ShieldCheck, Clock, FileText, Check } from 'lucide-react';

const services = [
    {
        title: 'Air Freight',
        description: 'Fast, secure delivery for urgent or high-value cargo.',
        details: 'Includes: Express shipping, cargo insurance, airway bills, customs assistance.',
        bgImage: AirFreightbg,
        icon: <Plane size={34} />,
    },
    {
        title: 'Sea Freight',
        description: 'Affordable global shipping for large or bulk goods.',
        details: 'Includes: FCL/LCL, port-to-port service, customs clearance, document processing.',
        bgImage: SeaFreightbg,
        icon: <Anchor size={34} />,
    },
    {
        title: 'Land Freight',
        description: 'Nationwide delivery with flexible scheduling.',
        details: 'Includes: Door-to-door transport, cross-border logistics, trucking, waybill & permits.',
        bgImage: LandFreightbg,
        icon: <Truck size={34} />,
    },
];

const Home = () => {
    return (
        <>
            <main >
                <section>
                    <div>

                        {/* //Blue Container Transparent */}
                        <div className="absolute inset-0 flex justify-center items-center z-2">
                            <div className="relative flex flex-col text-left rounded-2xl w-[400px] md:w-[700px]" style={{
                                background: 'rgba(2, 1, 129, 0.7)'
                            }}
                            >
                                <h1 className="text-[var(--white-color)] font-bold text-4xl px-8 pt-5 md:text-5xl md:px-5 md:pt-5">
                                    Go Beyond Borders with
                                    <mark className="bg-transparent text-[var(--primary-color)]"> Digo Traders</mark>
                                </h1>
                                <p className="text-[var(--white-color)] mt-4 mb-5 text-base px-8 pt-5 md:text-lg md:max-w-xl md:px-5">
                                    From <mark className="bg-transparent text-[var(--primary-color)]">small packages to large cargo</mark> —
                                    Digo Traders ships by land, air and sea to support businesses of every size.
                                </p>

                                {/* //Gradient Effect */}
                                <div>
                                    <div className=" h-10 p-3 w-[380px] md:w-[500px] md:h-2 md:p-5 rounded-2xl bg-[linear-gradient(to_right,var(--secondary-color),var(--primary-accent))] text-[var(--white-color)] flex justify-end items-center">
                                        <Package size={30} className="relative left-2 sm:left-3" />
                                    </div>
                                </div>

                            </div>
                        </div>


                        {/* Background Image */}
                        <img
                            src={HomePageBackground}
                            alt="Homepage Background"
                            className="w-full h-[400px] object-cover"
                        />

                        {/* Who We Serve Section */}
                        <div>
                            {/* Top Divider */}
                            <div className="w-full h-[20px] bg-[var(--primary-color)]" />

                            {/* Content Area */}
                            <div className="w-full bg-[var(--white-color)] text-center flex flex-col items-center">
                                <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-color)] m-2">
                                    Who We Serve
                                </h2>

                                <div className="grid grid-cols-5 md:grid-cols-5 md:gap-6 text-[var(--gray-color)]">
                                    {/* SMEs */}
                                    <div className="flex flex-col md:flex-row items-center gap-2 cursor-pointer hover:text-[var(--primary-color)] transition-colors">
                                        <Package size={34} />
                                        <p className="text-sm md:text-lg">SMEs</p>
                                    </div>

                                    {/* E-Commerce */}
                                    <div className="flex flex-col md:flex-row items-center gap-2 cursor-pointer hover:text-[var(--primary-color)] transition-colors">
                                        <ShoppingCart size={34} />
                                        <p className="text-sm md:text-lg">E-Commerce</p>
                                    </div>

                                    {/* Distributors */}
                                    <div className="flex flex-col md:flex-row items-center gap-2 cursor-pointer hover:text-[var(--primary-color)] transition-colors">
                                        <Truck size={34} />
                                        <p className="text-sm md:text-lg">Distributors</p>
                                    </div>

                                    {/* Manufacturer */}
                                    <div className="flex flex-col md:flex-row items-center gap-2 cursor-pointer hover:text-[var(--primary-color)] transition-colors">
                                        <Factory size={34} />
                                        <p className="text-sm md:text-lg">Manufacturer</p>
                                    </div>

                                    {/* Large Enterprises */}
                                    <div className="flex flex-col md:flex-row items-center gap-2 cursor-pointer hover:text-[var(--primary-color)] transition-colors">
                                        <Building2 size={34} />
                                        <p className="text-sm md:text-lg">Large Enterprises</p>
                                    </div>
                                </div>

                                {/* Caption */}
                                <p className="text-xs md:text-sm text-[var(--gray-color)] m-3">
                                    Trusted by Small Businesses, E-Commerce Stores, and Corporations
                                </p>
                            </div>

                            {/* Bottom Divider */}
                            <div className="w-full h-[20px] bg-[var(--primary-color)]" />
                        </div>
                    </div>
                    {/* //Airplane Image */}
                    <img src={Airplane} alt="Airplane" className='absolute top-20 left-10 w-[200px] h-auto object-cover z-1' />
                </section>


                {/* <section className="relative w-full overflow-hidden"> */}
                    {/* Background Image as Top Half */}
                    {/* <div className="relative w-full h-[500px]">
                        <img
                            src={HomePageBackground}
                            alt="Homepage Background"
                            className="absolute inset-0 w-full h-full object-cover z-0"
                        /> */}

                        {/* Blue Transparent Container on Top of Background */}
                        {/* <div className="relative z-10 flex justify-center items-center h-full px-4">
                            <div className="flex flex-col text-left rounded-2xl w-full max-w-[700px] bg-[rgba(2,1,129,0.7)] p-5 md:p-8">
                                <h1 className="text-[var(--white-color)] font-bold text-4xl md:text-5xl">
                                    Go Beyond Borders with
                                    <mark className="bg-transparent text-[var(--primary-color)]"> Digo Traders</mark>
                                </h1>
                                <p className="text-[var(--white-color)] mt-4 text-base md:text-lg max-w-xl">
                                    From <mark className="bg-transparent text-[var(--primary-color)]">small packages to large cargo</mark> —
                                    Digo Traders ships by land, air and sea to support businesses of every size.
                                </p>

                                <div className="h-10 p-3 w-full max-w-[500px] mt-5 rounded-2xl bg-[linear-gradient(to_right,var(--secondary-color),var(--primary-accent))] text-[var(--white-color)] flex justify-end items-center">
                                    <Package size={30} />
                                </div>
                            </div>
                        </div> */}

                        {/* Airplane Image Positioned on Top */}
                        {/* <img
                            src={Airplane}
                            alt="Airplane"
                            className="absolute top-10 left-10 w-[200px] h-auto object-cover z-10"
                        />
                    </div> */}

                    {/* Who We Serve Section covers the bottom fully */}
                    {/* <div className="relative w-full bg-[var(--white-color)] z-20"> */}
                        {/* Top Divider */}
                        {/* <div className="w-full h-[23px] bg-[var(--primary-color)]" />

                        <div className="w-full text-center flex flex-col items-center py-10 px-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-color)] mb-4">
                                Who We Serve
                            </h2>

                            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-[var(--gray-color)]">
                                <div className="flex flex-col md:flex-row items-center gap-2 cursor-pointer hover:text-[var(--primary-color)] transition-colors">
                                    <Package size={34} />
                                    <p className="text-sm md:text-lg">SMEs</p>
                                </div>
                                <div className="flex flex-col md:flex-row items-center gap-2 cursor-pointer hover:text-[var(--primary-color)] transition-colors">
                                    <ShoppingCart size={34} />
                                    <p className="text-sm md:text-lg">E-Commerce</p>
                                </div>
                                <div className="flex flex-col md:flex-row items-center gap-2 cursor-pointer hover:text-[var(--primary-color)] transition-colors">
                                    <Truck size={34} />
                                    <p className="text-sm md:text-lg">Distributors</p>
                                </div>
                                <div className="flex flex-col md:flex-row items-center gap-2 cursor-pointer hover:text-[var(--primary-color)] transition-colors">
                                    <Factory size={34} />
                                    <p className="text-sm md:text-lg">Manufacturer</p>
                                </div>
                                <div className="flex flex-col md:flex-row items-center gap-2 cursor-pointer hover:text-[var(--primary-color)] transition-colors">
                                    <Building2 size={34} />
                                    <p className="text-sm md:text-lg">Large Enterprises</p>
                                </div>
                            </div>

                            <p className="text-xs md:text-sm text-[var(--gray-color)] mt-4">
                                Trusted by Small Businesses, E-Commerce Stores, and Corporations
                            </p>
                        </div> */}

                        {/* Bottom Divider */}
                        {/* <div className="w-full h-[23px] bg-[var(--primary-color)]" />
                    </div>
                </section> */}



                {/* 2nd Section  Our Services*/}
                <section style={{
                    background: 'linear-gradient(to top, var(--secondary-accent), var(--secondary-accent), transparent)',
                }}>
                    <div className="bg-[var(--secondary-accent)] flex justify-center items-center flex-col py-10">
                        <h1 className="text-[var(--primary-color)] text-4xl md:text-5xl lg:text-6xl font-semibold">
                            OUR SERVICES
                        </h1>
                        <p className="text-[var(--white-color)] text-base md:text-lg lg:text-xl text-center max-w-xl my-4">
                            We Offer End-To-End Logistics Solutions Tailored To Your Shipping Needs, Whether By Sea, Land Or Air.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                            {services.map((service, index) => (
                                <div key={index} className="flex flex-col">
                                    {/* Card with background image */}
                                    <div
                                        className="relative h-[500px] w-[350px] bg-cover bg-center text-[var(--white-color)] rounded-xl overflow-hidden "
                                        style={{ backgroundImage: `url(${service.bgImage})` }}
                                    >
                                        {/* Gradient overlay at bottom */}
                                        <div
                                            className="absolute bottom-0 left-0 w-full h-72 z-0"
                                            style={{
                                                background: 'linear-gradient(to top, var(--secondary-accent), var(--secondary-accent), transparent)',
                                            }}
                                        />


                                        <div className="relative z-10 flex flex-col justify-end p-4 h-full">
                                            <div className="flex flex-col gap-1 p-4 rounded-md">
                                                {service.icon}
                                                <h1 className="text-2xl font-bold">{service.title}</h1>
                                                <h3 className="text-lg font-medium">{service.description}</h3>
                                                <p className="text-sm">{service.details}</p>

                                                <div className="flex gap-4 mt-4">
                                                    <button className="bg-[var(--primary-color)] px-4 py-2 rounded-xl text-[var(--secondary-color)] flex items-center gap-2 cursor-pointer">
                                                        Learn More <ChevronRight size={18} />
                                                    </button>
                                                    <button className="bg-transparent px-4 py-2 rounded-xl text-[var(--white-color)] border border-[var(--white-color)] cursor-pointer">
                                                        Talk to Expert
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3rd Section */}
                <section>
                    {/* Top divider bar */}
                    <div className="bg-[var(--primary-color)] w-full h-[23px]"></div>

                    {/* Content wrapper */}
                    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">

                        {/* Text Content */}
                        <div className='w-full md:w-1/2 p-15'>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                                Why Businesses Choose Us?
                            </h1>

                            {/* Card 1 */}
                            <div className='py-5'>
                                <h3 className="flex items-center text-xl font-semibold gap-2">
                                    <ShieldCheck className="text-[var(--primary-color)] w-10 h-10" />
                                    Safe & Secure Handling
                                    <Check className="text-green-500 w-10 h-10" />
                                </h3>
                                <p className="text-base md:text-lg lg:text-xl">
                                    No matter the size or type of shipment, your cargo is protected at every step. From packaging to transport, we follow strict safety protocols across land, sea, and air to ensure it arrives in perfect condition.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className='py-5'>
                                <h3 className="flex items-center text-xl font-semibold gap-2">
                                    <Clock className="text-[var(--primary-color)] w-10 h-10" />
                                    On-Time Delivery
                                    <Check className="text-green-500 w-10 h-10" />
                                </h3>
                                <p className="text-base md:text-lg lg:text-xl">
                                    We value your time. Our logistics operations are built around efficiency and smart route planning – so your shipments reach their destination on schedule, whether locally or internationally.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className='py-5'>
                                <h3 className="flex items-center text-xl font-semibold gap-2">
                                    <FileText className="text-[var(--primary-color)] w-10 h-10" />
                                    Hassle-Free Documentation
                                    <Check className="text-green-600 w-10 h-10" />
                                </h3>
                                <p className="text-base md:text-lg lg:text-xl">
                                    We take the burden of paperwork off your shoulders. From shipping documents to import/export permits, our team handles it all – making the logistics process smoother and faster for you.
                                </p>
                            </div>
                        </div>

                        {/* Image Content */}
                        <div className='w-full md:w-1/2'>
                            <img src={Container1Image} alt="Shipping container" className="w-full h-auto md:rounded-tl-[65%] shadow-md" />
                        </div>

                    </div>
                </section>


                {/* 4th Section */}
                <section>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-[var(--primary-color)]">
                        <div className='w-full md:w-1/2'>
                            <img src={Container2Image} alt="Container2Image" className="w-full h-[650px] md:rounded-tr-[65%] shadow-md" />
                        </div>

                        <div className='w-full p-5 md:w-1/2 md:p-15'>
                            <h1 className="text-[var(--white-color)] text-4xl md:text-5xl lg:text-6xl font-bold">📦 How It Works?</h1>
                            <DropDownFAQ />
                        </div>
                    </div>
                </section>
            </main>
        </>

    )
}

export default Home