import React from 'react'
import { Link } from 'react-router-dom';

const ReadyToShip = () => {
    return (
        <div>
            <section className="p-6 rounded-2xl w-full mt-8 flex flex-col" style={{
                background: 'linear-gradient(to top, var(--primary-accent), var(--primary-color))'
            }}>
                <h1 className="text-2xl text-[var(--white-color)] font-bold">📦Ready to Ship Smarter?</h1>
                <p className='text-xl text-[var(--white-color)]'>Send us a message and our logistics team will assist you within the hour.</p>
                <Link to="/contact"><button className="mt-3 px-4 py-2 bg-[var(--white-color)] rounded-lg font-bold w-full cursor-pointer">Request a Quote</button></Link>
            </section>
        </div>
    )
}

export default ReadyToShip