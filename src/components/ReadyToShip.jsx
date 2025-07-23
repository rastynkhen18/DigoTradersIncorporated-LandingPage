import React from 'react'

const ReadyToShip = () => {
    return (
        <div>
            <section className="p-4 rounded-lg w-full mt-8 flex flex-col" style={{
                background: 'linear-gradient(to top, var(--primary-accent), var(--primary-color))'
            }}>
                <h1 className="text-4xl text-[var(--white-color)] font-bold">📦Ready to Ship Smarter?</h1>
                <p className='text-4xl text-[var(--white-color)]'>Send us a message and our logistics team will assist you within the hour.</p>
                <button className="mt-3 px-4 py-2 bg-[var(--white-color)] rounded-lg font-bold w-full">Request a Quote</button>
            </section>
        </div>
    )
}

export default ReadyToShip