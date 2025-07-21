import React from 'react'
import HomePageBackground from '../assets/images/homepage-img.png';
import Airplane from '../assets/images/airplane-transparent.png';
import { Package, ShoppingCart, Truck, Factory, Building2 } from 'lucide-react';

const Home = () => {
    return (
        <>
            <main >
                {/* HomePage-1stSection */}
                <section className='h-screen flex flex-col'>
                    <div className="relative h-[60%]">
                        <img
                            src={HomePageBackground}
                            alt="HomePageBackground"
                            className="relative w-full h-[75vh] object-cover -z-2"
                        />

                        <div>
                            <img
                                src={Airplane}
                                alt="Airplane"
                                className='absolute top-0 left-10 w-[200px] h-auto object-cover -z-1'
                            />
                        </div>

                        <div className="absolute inset-0 flex justify-center items-center z-1">
                            <div className="relative flex flex-col text-left bg-[rgba(2,1,129,0.7)] rounded-2xl ">
                                <h1 className="text-[var(--white-color)] font-bold text-2xl px-2 pt-2 md:text-5xl md:px-5 md:pt-5">
                                    Go Beyond Borders with
                                    <mark className="bg-transparent text-[var(--primary-color)]"> Digo Traders</mark>
                                </h1>
                                <p className="text-[var(--white-color)] mt-4 mb-5 text-base px-2 md:text-lg md:max-w-xl md:px-5">
                                    From <mark className="bg-transparent text-[var(--primary-color)]">small packages to large cargo</mark> —
                                    Digo Traders ships by land, air and sea to support businesses of every size.
                                </p>
                                <div>
                                    <div className=" h-2 p-2 sm:p-3 sm:w-[400px] md:w-[500px] md:p-4 rounded-2xl bg-[linear-gradient(to_right,var(--secondary-color),var(--primary-accent))] text-[var(--white-color)] flex justify-end items-center">
                                        <Package size={20} className="relative left-2 sm:left-3" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Who we Serve */}
                    <div className='h-[40%] relative bg-[var(--primary-color)] w-full'>
                        <div className='absolute top-5 right-0 bg-[var(--white-color)] w-full p-2 flex justify-center items-center flex-col'>
                            <h1 className='text-[var(--primary-color)] font-bold mb-4 md:text-3xl'>Who We Serve?</h1>
                            <div className='grid md:grid-cols-5 gap-1 items-center text-[var(--gray-color)]'>
                                <div className='flex flex-row items-center gap-1 hover:text-[var(--primary-color)] transition cursor-pointer'>
                                    <Package size={34} />
                                    <p className='md:text-[24px]'>SMEs</p>
                                </div>
                                <div className='flex flex-row items-center gap-1 hover:text-[var(--primary-color)] transition cursor-pointer'>
                                    <ShoppingCart size={34} />
                                    <p className='md:text-[24px]'>E-COMMERCE</p>
                                </div>
                                <div className='flex flex-row items-center gap-1 hover:text-[var(--primary-color)] transition cursor-pointer'>
                                    <Truck size={34} />
                                    <p className='md:text-[24px]'>Distributors</p>
                                </div>
                                <div className='flex flex-row items-center gap-1 hover:text-[var(--primary-color)] transition cursor-pointer'>
                                    <Factory size={34} />
                                    <p className='md:text-[24px]'>Manufacturer</p>
                                </div>
                                <div className='flex flex-row items-center gap-1 hover:text-[var(--primary-color)] transition cursor-pointer'>
                                    <Building2 size={34} />
                                    <p className='md:text-[24px]'>Large Enterprises</p>
                                </div>
                            </div>
                            <p className='text-[var(--gray-color)] mt-4 md:text-sm'>Trusted by Small Business, E-Commerce Stores, and Corporation</p>
                        </div>
                    </div>
                </section>

                <section className='h-screen'>
                    <div className='bg-[var(--secondary-color)]'>
                        <h1 className='text-[var(--primary-color)]'>OUR SERVICES</h1>
                        <p>We Offer End-To-End Logistics Solutions Tailored To Your Shipping Needs, Whether By Sea, Land Or Air.</p>
                    </div>
                </section>

            </main>
        </>

    )
}

export default Home