import React from 'react'
import Header from '../components/Header'
import Mountain_bg from '../assets/Mountain_bg.jpg'

const Home = () => {
    return (
        <>
            <Header />
            <main className='relative mt-16 flex items-center justify-center min-h-screen'>
                <div className="absolute inset-0 bg-cover bg-center opacity-70 z-0" style={{ backgroundImage: `url(${Mountain_bg})` }}></div>
                
                <div className='relative z-10 flex flex-col justify-center items-center text-center mb-10'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 [var(--text-color)]'>Welcome to Tatak Mountaineers</h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4 px-4 sm:px-8 md:px-20 lg:px-32 xl:px-64 text-center [var(--text-color)]">
                        Explore the great outdoors with us. Join hikes, meet fellow mountaineers, and experience nature like never before.
                    </p>
                    <div className='flex gap-5'>
                        <button className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl bg-[var(--primary-color)] hover:bg-[var(--hover-color)] px-6 py-2 rounded-lg cursor-pointer transition-all duration-300'>Get Started!</button>
                        <button className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl border-2 border-[var(--primary-color)] text-[var(--text-color)] px-6 py-2 rounded-lg cursor-pointer transition-all duration-300'>Learn More</button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home