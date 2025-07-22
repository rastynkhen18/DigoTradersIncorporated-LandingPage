import React from 'react'
import ServicesBackgroundImage from '../assets/images/services-bg.png'

const Services = () => {
    return (
        <div>
            <main>
                <section
                    className="flex justify-center items-center h-[400px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${ServicesBackgroundImage})` }}
                >
                    <h1 className="bg-[var(--primary-color)] text-[var(--white-color)] text-4xl px-6 py-4 rounded-md">
                        Our Services
                    </h1>
                </section>
            </main>
        </div>
    )
}

export default Services
