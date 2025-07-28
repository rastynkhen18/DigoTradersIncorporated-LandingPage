import React from 'react'
import { Link } from 'react-router-dom';
import Header2 from '../components/Header2';
import ServicesBackgroundImage from '../assets/images/services-bg.png';
import ServicesSeaFreight from '../assets/images/servicesSeaFreight.png'
import ServicesAirFreight from '../assets/images/servicesAirFreight.png'
import ServicesLandFreight from '../assets/images/servicesLandFreightImg1.png'
import ServicesCustomBrokerage from '../assets/images/servicesCustomBrokerageImg1.png'
import ServicesFCL from '../assets/images/servicesFCL.png'
import ServicesDomesticTransfer from '../assets/images/servicesDomesticTransfer.png'
import ServicesFreightConsultation from '../assets/images/servicesFreightConsultation.png'
import ServicesRenewal from '../assets/images/servicesRenewal.png'
import ServicesAccreditation from '../assets/images/servicesAccreditation.png'



const data = [
    {
        img: ServicesSeaFreight,
        alt: 'ServicesSeaFreight',
        title: 'Sea Freight',
        description: 'Save costs by combining small shipments into one container - ideal for light cargo.',
        button: 'Read More',
        link: 'seafreight',
    },
    {
        img: ServicesAirFreight,
        alt: 'ServicesAirFreight',
        title: 'Air Freight',
        description: 'For faster deliveries, We manage shipping goods via air cargo internationally.',
        button: 'Read More',
        link: 'airfreight',
    }, {
        img: ServicesLandFreight,
        alt: 'ServicesLandFreight',
        title: 'Land Freight',
        description: 'We provide trucking and delivery services from the port to your warehouse or business location.',
        button: 'Read More',
        link: 'landfreight',
    }, {
        img: ServicesCustomBrokerage,
        alt: 'ServicesCustomBrokerage',
        title: 'Custom Brokerage',
        description: 'Customs, documents, taxes - we handle it all when your goods cross borders.',
        button: 'Read More',
        link: 'custombrokerage',
    }, {
        img: ServicesFCL,
        alt: 'ServicesFCL',
        title: 'FCL/LCL',
        description: 'Ship your goods worldwide, whether full load or shared.',
        button: 'Read More',
        link: 'fcl_lcl',
    }, {
        img: ServicesDomesticTransfer,
        alt: 'ServicesDomesticTransfer',
        title: 'Domestic Transfer',
        description: 'Domestic transport across cities and provinces in the Philippines.',
        button: 'Read More',
        link: 'domestic-transfer-services',
    }, {
        img: ServicesFreightConsultation,
        alt: 'ServicesFreightConsultation',
        title: 'Freight & Tariff Consultation',
        description: 'We advise on shipping rates, customs duties, and taxes, helping clients save money and avoid penalties.',
        button: 'Read More',
        link: 'freight-&-tariff-consultation',
    }, {
        img: ServicesRenewal,
        alt: 'ServicesRenewal',
        title: 'Renewal of AMO Certificate',
        description: 'We assist with AMO Certificate renewal quickly and compliantly.',
        button: 'Read More',
        link: 'amo-certificate',
    }, {
        img: ServicesAccreditation,
        alt: 'ServicesAccreditation',
        title: 'Accreditation of Import License',
        description: 'If your business is new to importing, we help you get your import license and become registered with customs.',
        button: 'Read More',
        link: 'import-license',
    },
];

const Services = () => {
    return (
        <div>
            <main style={{
                background: 'linear-gradient(to top, var(--secondary-color), var(--primary-color))'
            }}>


                <section
                    className="relative flex justify-center items-center flex-col h-[300px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${ServicesBackgroundImage})` }}
                >
                    <div className="absolute inset-0 bg-black opacity-70 z-0" />

                    <Header2 />

                    <div className="relative text-center px-6 pt-16">
                        <h1 className="text-xl md:text-3xl text-[var(--primary-color)] py-1 font-bold">
                            SERVICES
                        </h1>
                        <p className="text-sm md:text-base text-[var(--white-color)]">
                            Trusted logistics solutions tailored to meet industry standards and business demands.
                        </p>
                    </div>
                </section>


                <section className='p-5 md:p-10 md:mx-20'>
                    <div className='flex justify-center items-center text-justify my-5'>
                        <p className="text-sm md:text-lg text-[var(--white-color)]">
                            At DIGO Traders Incorporated, we provide reliable logistics and customs solutions for businesses of all sizes. From land to sea and air, we ensure smooth, compliant, and cost-effective delivery every step of the way.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-2xl overflow-hidden flex flex-col h-full"
                                style={{
                                    background: 'linear-gradient(to bottom, var(--primary-accent), var(--primary-color))',
                                }}
                            >
                                {/* Image container with aspect ratio */}
                                <div className="aspect-[4/3] w-full">
                                    <img src={item.img} alt={item.alt} className="w-full h-full object-cover" />
                                </div>

                                {/* Content section */}
                                <div className="p-10 text-[var(--primary-color)] flex flex-col justify-between flex-1">
                                    <div>
                                        <h1 className="text-xl font-bold mb-2 text-[var(--white-color)]">{item.title}</h1>
                                        <p className="mb-4 text-[var(--white-color)]">{item.description}</p>
                                    </div>
                                    <Link
                                        to={item.link}
                                        className="inline-block bg-[var(--white-color)] text-[var(--primary-color)] px-4 py-2 w-full text-center font-bold rounded-full cursor-pointer mt-auto transition-all duration-300 ease-in-out hover:bg-[var(--secondary-color)] hover:text-[var(--white-color)]"
                                        reloadDocument
                                    >
                                        {item.button}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </main>
        </div>
    )
}

export default Services