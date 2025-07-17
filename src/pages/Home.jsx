import React from 'react'
import Header from '../components/Header';
import CustomButton from '../components/CustomButton';
import BlurredButton from '../components/BlurredButton';
import Background from '../assets/background.jpg';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <>
            <Header />
            <main className='relative mt-16 flex items-center justify-center min-h-screen'>
                <div className="absolute inset-0 bg-cover bg-center opacity-70 z-0" style={{ backgroundImage: `url(${Background})` }}></div>

                <div className='relative z-10 flex flex-col justify-center items-center text-center mb-10'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 [var(--text-color)]'>Welcome to The 49th Food & Spirits</h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 px-4 sm:px-8 md:px-20 lg:px-32 xl:px-64 text-center [var(--text-color)]">
                    Alaskan-Inspired Food & Spirits in Denver and Littleton, Colorado — where every plate tells a story.
                    </p>
                    <div className='flex gap-5'>
                       <Link to="/"><CustomButton>Order Now</CustomButton></Link>
                        <BlurredButton onClick={() => alert('Clicked!')}>Learn More </BlurredButton>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home