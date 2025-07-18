import React from "react";

const Contacts = () => {
    return (
        <div>
            <main className="flex flex-col justify-between items-center bg-gray-800 p-5 md:p-20">
                <h1 className="text-4xl font-bold mb-4 mt-5 text-[#fff]">
                    Contact Us
                </h1>
                <p className="text-xl mb-15 text-[#fff]">
                    Get in touch with our customs brokerage experts
                </p>
                <div className="grid md:grid-cols-2 items-center gap-5 w-full max-w-6xl">

                    <div className="bg-[var(--bg-color)] p-8 rounded-2xl shadow-lg flex flex-col h-full">
                        <h1 className="text-2xl font-semibold mb-4 text-[var(--text-color)]">Contact Information</h1>
                        <p className="mb-2 text-[var(--text-color)]">
                            2442 Park Avenue, Torres Bldg.
                            Pasay City
                        </p>
                        <p className="mb-2 text-[var(--text-color)]">
                            0945-621-2735
                        </p>
                        <p className="mb-2 text-[var(--text-color)]">
                            digotradersincorporated3@gmail.com
                        </p>
                    </div>

                    <div className="bg-[var(--bg-color)] p-8 rounded-2xl shadow-lg flex flex-col h-full">
                        <h1 className="text-2xl font-semibold mb-4 text-[var(--text-color)]">Send us a Message</h1>
                        <div className="grid md:grid-cols-2 gap-5 items-center">
                            <div>
                                <label htmlFor="">First Name</label>
                                <input type="text" placeholder="Your first name" className="w-full border border-gray-300 rounded-md px-4 py-2"/>
                            </div>

                            <div>
                                <label htmlFor="">Last Name</label>
                                <input type="text" placeholder="Your last name" className="w-full border border-gray-300 rounded-md px-4 py-2" />
                            </div>

                            <div className="md:col-span-2">
                                <label htmlFor="">Email</label>
                                <input type="email" className="w-full border border-gray-300 rounded-md px-4 py-2"/>
                            </div>

                            <div className="md:col-span-2">
                                <label htmlFor="">Subject</label>
                                <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2" />
                            </div>

                            <div className="md:col-span-2">
                               <label htmlFor="">Message</label>
                                <textarea id="message" name="message" rows="5" placeholder="Enter your message here" className="w-full border border-gray-300 rounded-md px-4 py-2"></textarea>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default Contacts;
