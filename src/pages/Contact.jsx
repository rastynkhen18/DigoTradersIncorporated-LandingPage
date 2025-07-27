import React from 'react'
import ServicesBackgroundImage from '../assets/images/services-bg.png';
import ContactImage from '../assets/images/contactImg.png';
import emailjs from '@emailjs/browser';
import FacebookLogo from '../assets/images/Facebook_Logo_Secondary1.svg';
import InstagramLogo from '../assets/images/Instagram_Glyph_White1.svg';


const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_ndrtton",     // Service ID
            "template_tkozg1d",    // Template ID
            e.target,
            "3kmbeJRVPlVrrqylg"      //Public Key
        ).then(
            (result) => {
                alert("Message sent successfully!");
                e.target.reset();  // clear the form
            },
            (error) => {
                alert("Oops! Something went wrong.");
                console.error(error.text);
            }
        );
    };


    return (
        <div>

            <section
                className="relative flex justify-center items-center flex-col h-[400px] bg-cover bg-center"
                style={{ backgroundImage: `url(${ServicesBackgroundImage})` }}
            >
                <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

                <div className="relative text-center px-6">
                    <h1 className="text-4xl md:text-5xl text-[var(--primary-color)] py-4 font-bold">
                        Contact Us
                    </h1>
                    <p className="text-base md:text-lg text-[var(--white-color)]">
                       Whether you have a question about our services, need a quote, or want you to discuss your shipping requirments - our team is ready to assist you. 
                    </p>
                </div>
            </section>

            <section className="py-12 px-4 bg-[var(--accent-color)]" >

                <div className="max-w-7xl mx-auto flex flex-col justify-center items-center md:flex-row gap-10">
                    <div className="w-full md:w-1/2">
                        <div className="p-6 bg-[var(--white-color)] shadow-md rounded-2xl border-4 border-[var(--primary-color)]">
                            <p className="text-base md:text-lg text-left mb-2 font-bold">Have a question?</p>
                            <h1 className="text-[var(--primary-color)] md:text-4xl font-bold mb-6 text-left">Send us a Message.</h1>

                            <form onSubmit={sendEmail} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-[var(--white-color)] mb-1">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        name='name'
                                        className="w-full px-4 py-2 border border-[var(--gray-color)] rounded-md bg-[var(--gray-color)] placeholder-[var(--gray-accent)] focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[var(--white-color)] mb-1">Email</label>
                                    <input
                                        type="email"
                                        placeholder="e.g support@digotraders.com"
                                        name='email'
                                        className="w-full px-4 py-2 border border-[var(--gray-color)] rounded-md bg-[var(--gray-color)] placeholder-[var(--gray-accent)] focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[var(--white-color)] mb-1">Subject</label>
                                    <input
                                        type="text"
                                        placeholder="Title"
                                        name='subject'
                                        className="w-full px-4 py-2 border border-[var(--gray-color)] rounded-md bg-[var(--gray-color)] placeholder-[var(--gray-accent)] focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[var(--white-color)] mb-1">Message</label>
                                    <textarea
                                        placeholder="Type here..."
                                        name='message'
                                        rows="4"
                                        className="w-full px-4 py-2 border border-[var(--gray-color)] rounded-md bg-[var(--gray-color)] placeholder-[var(--gray-accent)] focus:outline-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-1/4 text-[var(--white-color)] py-2 px-4 rounded-full transition cursor-pointer"
                                    style={{
                                        background: 'linear-gradient(to right, var(--primary-color), var(--primary-accent))'
                                    }}
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 space-y-6 text-[var(--white-color)] ">
                        <div>
                            <img src={ContactImage} alt="ContactImage" className="w-full" />
                        </div>

                        <div className="bg-[var(--primary-color)] rounded-2xl p-6 space-y-6">
                            <div>
                                <h2 className="text-xl font-semibold mb-1">Our Office</h2>
                                <p>2442 Park Avenue, Torred Bldg. Pasay City</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-1">Contact</h2>
                                <p>Email: support@digotraders.com</p>
                                <p>Phone: +63 976-590-9243</p>
                                <p>Landline: (02) 835 67892</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-1">Stay Connected</h2>
                                <div className="flex gap-4 items-center">
                                        <img src={FacebookLogo} alt="Facebook" className="w-6 h-6" />
                                        <img src={InstagramLogo} alt="Instagram" className="w-6 h-6" />
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </section>

            <section className='w-full'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1577.5234151597342!2d120.99474555901314!3d14.545067814876413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c95d7c9174a5%3A0xc24e91e84e95800c!2sTorres%20BuildingCFSI!5e0!3m2!1sen!2sph!4v1753098396660!5m2!1sen!2sph"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </div>
    )
}

export default Contact