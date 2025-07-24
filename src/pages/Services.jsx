import React from 'react'
import { Link } from 'react-router-dom';
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
                    className="relative flex justify-center items-center flex-col h-[400px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${ServicesBackgroundImage})` }}
                >
                    <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

                    <div className="relative text-center px-6">
                        <h1 className="text-4xl md:text-5xl text-[var(--primary-color)] py-4 font-bold">
                            SERVICES
                        </h1>
                        <p className="text-base md:text-lg text-[var(--white-color)]">
                            Trusted logistics solutions tailored to meet industry standards and business demands.
                        </p>
                    </div>
                </section>

                <div className='flex justify-center items-center text-justify mt-15 mx-15 md:mx-35'>
                    <p className="text-base md:text-lg text-[var(--white-color)]">
                        At DIGO Traders Incorporated, we offer a full suite of logistics and customs solutions tailored to businesses of all sizes. Whether you're importing high-value goods, moving domestic cargo, or navigating complex customs procedures, our team delivers dependable service every step of the way. We care about your cargo as much as you do — ensuring smooth, compliant, and cost-effective delivery across land, sea, and air.
                    </p>
                </div>
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-16 md:mx-20">


                    {data.map((item, index) => (
                        <div key={index} className="rounded-2xl overflow-hidden" style={{
                            background: 'linear-gradient(to bottom, var(--primary-accent), var(--primary-color))'
                        }}>
                            <div>
                                <img src={item.img} alt={item.alt} className="w-full h-48 object-cover" />
                            </div>
                            <div className="p-4 text-[var(--primary-color)]">
                                <h1 className="text-xl font-bold mb-2 text-[var(--white-color)]">{item.title}</h1>
                                <p className="mb-4 text-[var(--white-color)]">{item.description}</p>
                                <Link
                                    to={item.link}
                                    className="inline-block bg-[var(--white-color)] text-[var(--primary-color)] px-4 py-2 w-full text-center font-bold rounded-full cursor-pointer"
                                >
                                    {item.button}
                                </Link>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    )
}

export default Services