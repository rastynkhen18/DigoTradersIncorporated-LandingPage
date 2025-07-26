import React from 'react'
import { Link } from 'react-router-dom';

const LetsRenewAmoCertificate = () => {
  return (
    <div>
        <section className="p-6 rounded-2xl w-[500px] mt-8 flex flex-col" style={{
                background: 'linear-gradient(to top, var(--primary-accent), var(--primary-color))'
            }}>
                <h1 className="text-xl text-[var(--white-color)] font-bold">📞 Let's Renew Your AMO Certificate Today</h1>
                <p className='text-xl text-[var(--white-color)]'>Contact us now and stay compliant with customs regulations.</p>
                <Link to="/contact"><button className="mt-3 px-4 py-2 bg-[var(--white-color)] rounded-lg font-bold w-full cursor-pointer">Contact Us</button></Link>
            </section>
    </div>
  )
}

export default LetsRenewAmoCertificate