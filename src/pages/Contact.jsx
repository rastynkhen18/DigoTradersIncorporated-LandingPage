import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react';
import emailjs from "emailjs-com";


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
            <section className="py-12 px-4 " style={{
                background: 'linear-gradient(to top, var(--secondary-color), var(--secondary-accent), black)'
            }}>
                <h1 className="text-[var(--primary-color)] text-5xl font-bold mb-10 text-center">
                    All Set to Ship? Let's Get Moving!
                </h1>

                <div className="max-w-7xl mx-auto flex flex-col justify-center items-center md:flex-row gap-10">
                    {/* Left: Contact Form */}
                    <div className="w-full md:w-1/2">
                        <div className="p-6 bg-[var(--secondary-accent)] shadow-md rounded-lg border-4 border-[var(--primary-color)]">
                            <p className="text-left text-[var(--gray-color)] mb-2">Have a question?</p>
                            <h1 className="text-[var(--primary-color)] md:text-4xl font-bold mb-6 text-left">Send us a message.</h1>

                            <form onSubmit={sendEmail} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-[var(--white-color)] mb-1">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        name='name'
                                        className="w-full px-4 py-2 border border-[var(--gray-color)] rounded-md bg-[var(--white-color)] placeholder-[var(--gray-color)] focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[var(--white-color)] mb-1">Email</label>
                                    <input
                                        type="email"
                                        placeholder="support@digotraders.com"
                                        name='email'
                                        className="w-full px-4 py-2 border border-[var(--gray-color)] rounded-md bg-[var(--white-color)] placeholder-[var(--gray-color)] focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[var(--white-color)] mb-1">Subject</label>
                                    <input
                                        type="text"
                                        placeholder="Title"
                                        name='subject'
                                        className="w-full px-4 py-2 border border-[var(--gray-color)] rounded-md bg-[var(--white-color)] placeholder-[var(--gray-color)] focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[var(--white-color)] mb-1">Message</label>
                                    <textarea
                                        placeholder="Type here..."
                                        name='message'
                                        rows="4"
                                        className="w-full px-4 py-2 border border-[var(--gray-color)] rounded-md bg-[var(--white-color)] placeholder-[var(--gray-color)] focus:outline-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full text-[var(--white-color)] py-2 px-4 rounded-full transition cursor-pointer"
                                    style={{
                                        background: 'linear-gradient(to right, var(--primary-color), var(--primary-accent))'
                                    }}
                                >
                                    SEND NOW
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right: Contact Info & Map */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <p className="text-[var(--white-color)] text-base md:text-lg">
                            Whether you're ready to ship by land, sea, or air – or just have questions – we're here for you. Fill out the form to send us a quick message, or reach us directly via call, email, or visit. Our team is ready to assist you with everything from documents to deliveries.
                        </p>

                        <div className="space-y-4 text-[var(--white-color)]">
                            <div className="flex flex-col md:flex-row gap-2">

                                <div className="flex items-start gap-3">
                                    <Phone size={34} />
                                    <div>
                                        <h1 className="font-semibold">Phone Number</h1>
                                        <p className='text-[var(--primary-color)]'>0976-590-9243</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Phone size={34} />
                                    <div>
                                        <h1 className="font-semibold">Landline</h1>
                                        <p className='text-[var(--primary-color)]'>(02) 835 67892</p>
                                    </div>
                                </div>
                            </div>


                            <div className="flex items-start gap-3">
                                <Mail size={34} />
                                <div>
                                    <h1 className="font-semibold">Email Address</h1>
                                    <p className='text-[var(--primary-color)]'>support@digotraders.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <MapPin size={34} />
                                <div>
                                    <h1 className="font-semibold">Our Office</h1>
                                    <p className='text-[var(--primary-color)]'>2442 Park Avenue, Torres Bldg. Pasay City</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-md overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1577.5234151597342!2d120.99474555901314!3d14.545067814876413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c95d7c9174a5%3A0xc24e91e84e95800c!2sTorres%20BuildingCFSI!5e0!3m2!1sen!2sph!4v1753098396660!5m2!1sen!2sph"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact