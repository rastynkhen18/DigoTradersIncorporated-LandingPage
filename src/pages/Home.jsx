import React from 'react'
import { useState, useEffect } from 'react';
import CustomButton from '../components/CustomButton';
import BlurredButton from '../components/BlurredButton';
// import Background from '../assets/DigoTradersIncorporated_bg.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import About from './About'
import Services from './Services';
import Contacts from './Contacts';
import Footer from '../components/Footer';

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640); // Tailwind's sm = 640px

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 640);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
}

const Home = () => {

    const isMobile = useIsMobile();

    const slideIn = {
        initial: isMobile ? { y: 50, opacity: 0 } : { x: -100, opacity: 0 },
        animate: { x: 0, y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
    };
    return (
        <>
            <main className='relative mt-3 flex items-center justify-center min-h-screen px-4 md:justify-start'>
                {/* Optional background */}
                {/* <div className="absolute inset-0 bg-cover bg-center opacity-70 z-0" style={{ backgroundImage: `url(${Background})` }}></div> */}

                <motion.div
                    variants={slideIn}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className='relative z-10 md:m-20 text-center md:text-left md:max-w-2xl'
                >
                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-black mb-3 text-[var(--text-color)]'>
                        Professional Customs Brokerage Services
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl mb-4 text-[var(--text-color)]">
                        Your trusted partner in international trade and customs clearance with over years of expertise
                    </p>
                    <div className='flex sm:flex-row gap-5 justify-center md:justify-start items-center'>
                        <Link to="/"><CustomButton>Get Started</CustomButton></Link>
                        <BlurredButton onClick={() => alert('Clicked!')}>Learn More</BlurredButton>
                    </div>
                </motion.div>
            </main>
            <About/>
            <Services/>
            <Contacts/>
            <Footer/>
        </>
    )
}

export default Home