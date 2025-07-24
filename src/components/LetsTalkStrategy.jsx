import React from 'react'

const LetsTalkStrategy = () => {
  return (
    <div>
        <section className="p-4 rounded-2xl w-full mt-8 flex flex-col" style={{
                background: 'linear-gradient(to top, var(--primary-accent), var(--primary-color))'
            }}>
                <h1 className="text-4xl text-[var(--white-color)] font-bold">📞 Let's Talk Strategy</h1>
                <p className='text-4xl text-[var(--white-color)]'>Avoid costly mistakes. Maximize your logistics budget.</p>
                <button className="mt-3 px-4 py-2 bg-[var(--white-color)] rounded-lg font-bold w-full cursor-pointer">Request a Consultation</button>
            </section>
    </div>
  )
}

export default LetsTalkStrategy