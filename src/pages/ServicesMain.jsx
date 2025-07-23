import React from 'react'
import { Link } from 'react-router-dom';
import ServicesBackgroundImage from '../assets/images/services-bg.png';
import ServicesSeaFreight from '../assets/images/servicesSeaFreight.png'
import ServicesAirFreight from '../assets/images/servicesAirFreight.png'
import ServicesLandFreight from '../assets/images/servicesLandFreight.png'
import ServicesCustomBrokerage from '../assets/images/servicesCustomBrokerageImg1.png'
import ServicesFCL from '../assets/images/servicesFCL.png'
import ServicesDomesticTransfer from '../assets/images/servicesDomesticTransfer.png'
import ServicesFreightConsultation from '../assets/images/servicesFreightConsultation.png'
import ServicesRenewal from '../assets/images/servicesRenewal.png'
import ServicesAccreditation from '../assets/images/servicesAccreditation.png'



const data = [
    {
        img: {ServicesSeaFreight},
        alt: 'ServicesSeaFreight',
        title: 'Sea Freight',
        description: 'Save costs by combining small shipments into one container - ideal for light cargo.',
        button: 'Read More',
        link: '/learn-more',
    },
    {
        img: {ServicesAirFreight},
        alt: 'ServicesAirFreight',
        title: 'Air Freight',
        description: 'For faster deliveries, We manage shipping goods via air cargo internationally.',
        button: 'Read More',
        link: '/learn-more',
    }, {
        img: {ServicesLandFreight},
        alt: 'ServicesLandFreight',
        title: 'Land Freight',
        description: 'We provide trucking and delivery services from the port to your warehouse or business location.',
        button: 'Read More',
        link: '/learn-more',
    }, {
        img: {ServicesCustomBrokerage},
        alt: 'ServicesCustomBrokerage',
        title: 'Custom Brokerage',
        description: 'Customs, documents, taxes - we handle it all when your goods cross borders.',
        button: 'Read More',
        link: '/learn-more',
    }, {
        img: {ServicesFCL},
        alt: 'ServicesFCL',
        title: 'FCL/LCL',
        description: 'Ship your goods worldwide, whether full load or shared.',
        button: 'Read More',
        link: '/learn-more',
    }, {
        img: {ServicesDomesticTransfer},
        alt: 'ServicesDomesticTransfer',
        title: 'Domestic Transfer',
        description: 'Domestic transport across cities and provinces in the Philippines.',
        button: 'Read More',
        link: '/learn-more',
    }, {
        img: {ServicesFreightConsultation},
        alt: 'ServicesFreightConsultation',
        title: 'Freight & Tariff Consultation',
        description: 'We advise on shipping rates, customs duties, and taxes, helping clients save money and avoid penalties.',
        button: 'Read More',
        link: '/learn-more',
    }, {
        img: {ServicesRenewal},
        alt: 'ServicesRenewal',
        title: 'Renewal of AMO Certificate',
        description: 'We assist with AMO Certificate renewal quickly and compliantly.',
        button: 'Read More',
        link: '/learn-more',
    }, {
        img: {ServicesAccreditation},
        alt: 'ServicesAccreditation',
        title: 'Accreditation of Import License',
        description: 'If your business is new to importing, we help you get your import license and become registered with customs.',
        button: 'Read More',
        link: '/learn-more',
    },
];

const ServicesMain = () => {
    return (
        <div>
            <main style={{
                background: 'linear-gradient(to top, var(--secondary-color), var(--primary-color))'
            }}>


                <section
                    className="flex justify-center items-center h-[400px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${ServicesBackgroundImage})` }}
                >
                    <h1 className="bg-[var(--primary-accent)] text-[var(--white-color)] text-4xl px-6 py-4 rounded-md font-bold">
                        OUR SERVICES
                    </h1>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {data.map((item, index) => (
                        <div key={index} className="bg-[var(--primary-color)] rounded-lg overflow-hidden">
                            <div>
                                <img src={item.img} alt={item.alt} className="w-full h-48 object-cover" />
                            </div>
                            <div className="p-4 text-[var(--primary-color)]">
                                <h1 className="text-xl font-bold mb-2">{item.title}</h1>
                                <p className="mb-4">{item.description}</p>
                                <Link
                                    to={item.link}
                                    className="inline-block bg-[var(--white-color)] text-[var(--primary-color)] px-4 py-2 rounded cursor-pointer"
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

export default ServicesMain