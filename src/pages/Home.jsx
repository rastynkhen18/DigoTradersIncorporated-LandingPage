import React from 'react'
import HomePageBackground from '../assets/images/homepage-img.png';
import Container1Image from '../assets/images/container1Image.png';
import Container2Image from '../assets/images/container2Image.png';
import DropDownFAQ from '../components/DropDownFAQ'
import ServicesSection from '../components/ServicesSection';
import Airplane from '../assets/images/airplane-transparent.png'
import { Package, ShoppingCart, Truck, Factory, Building2, ShieldCheck, Clock, FileText, Check } from 'lucide-react';
import { Phone, Mail, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser'; //Update





const Home = () => {

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
    <>
      <main >
        <section
          className="w-full h-[100vh] lg:h-[95vh] bg-cover bg-center flex flex-col justify-between"
          style={{ backgroundImage: `url(${HomePageBackground})` }}
        >
          {/* <div className="absolute inset-0 bg-black opacity-50 z-0"></div> */}


          {/* Airplane Image */}
          <img
            src={Airplane}
            alt="Airplane"
            className="absolute top-20 left-10 w-[200px] h-auto object-cover z-1"
          />

          {/* Blue Container Transparent */}
          <div className="flex 
           justify-center items-center flex-grow z-1 px-4"  >
            <div
              className=" flex flex-col text-left rounded-2xl "
              style={{ background: 'rgba(2, 1, 129, 0.7)' }}
            >
              <div className='p-6'>

                <h1 className="text-[var(--white-color)] font-bold text-4xl md:text-5xl">
                  Go Beyond Borders with
                  <mark className="bg-transparent text-[var(--primary-color)]"> Digo Traders</mark>
                </h1>
                <p className="text-[var(--white-color)] mt-4 mb-5 text-base md:text-lg md:max-w-xl">
                  From <mark className="bg-transparent text-[var(--primary-color)]">small packages to large cargo</mark> — Digo Traders ships by land, air and sea to support businesses of every size.
                </p>
              </div>

              <div className='w-full pr-[20%]'>
                <div className="h-10 w-full rounded-2xl bg-[linear-gradient(to_right,var(--secondary-color),var(--primary-accent))] flex justify-end items-center">
                  <Package size={30} className="text-[var(--white-color)] left-2 sm:left-3" />
                </div>
              </div>
            </div>
            {/* Gradient Effect*/}
          </div>

          {/* Who We Serve Section */}
          <div className="w-full">
            {/* Top Divider */}
            <div className="w-full h-[20px] bg-[var(--primary-color)]" />

            {/* Content */}
            <div className="w-full bg-[var(--white-color)] text-center flex flex-col items-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-color)] m-2">
                Who We Serve
              </h2>

              <div className="grid grid-cols-5 md:grid-cols-5 md:gap-6 text-[var(--gray-color)]">
                <div className="flex flex-col md:flex-row items-center gap-2 cursor-pointer hover:text-[var(--primary-color)] transition-colors">
                  <Package size={34} />
                  <p className="text-sm md:text-lg">SMEs</p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-2 cursor-pointer hover:text-[var(--primary-color)] transition-colors">
                  <ShoppingCart size={34} />
                  <p className="text-sm md:text-lg">E-Commerce</p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-2 cursor-pointer hover:text-[var(--primary-color)] transition-colors">
                  <Truck size={34} />
                  <p className="text-sm md:text-lg">Distributors</p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-2 cursor-pointer hover:text-[var(--primary-color)] transition-colors">
                  <Factory size={34} />
                  <p className="text-sm md:text-lg">Manufacturer</p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-2 cursor-pointer hover:text-[var(--primary-color)] transition-colors">
                  <Building2 size={34} />
                  <p className="text-sm md:text-lg">Large Enterprises</p>
                </div>
              </div>

              <p className="text-xs md:text-sm text-[var(--gray-color)] m-3">
                Trusted by Small Businesses, E-Commerce Stores, and Corporations
              </p>
            </div>

            {/* Bottom Divider */}
            <div className="w-full h-[20px] bg-[var(--primary-color)]" />
          </div>
        </section>


        {/* 2nd Section  Our Services*/}
        <ServicesSection />


        {/* 3rd Section */}
        <section>
          {/* Top divider bar */}
          <div className="bg-[var(--primary-color)] w-full h-[23px]"></div>

          {/* Content wrapper */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">

            {/* Text Content */}
            <div className='w-full md:w-1/2 p-5'>
              <h1 className="text-4xl md:text-5xl font-bold">
                Why Businesses Choose Us?
              </h1>

              {/* Card 1 */}
              <div className='py-5'>
                <h3 className="flex items-center text-xl font-semibold gap-2">
                  <ShieldCheck className="text-[var(--primary-color)] w-10 h-10" />
                  Safe & Secure Handling
                  <Check className="text-[var(--green-color)]  w-10 h-10" />
                </h3>
                <p className="text-base md:text-lg lg:text-xl">
                  No matter the size or type of shipment, your cargo is protected at every step. From packaging to transport, we follow strict safety protocols across land, sea, and air to ensure it arrives in perfect condition.
                </p>
              </div>

              {/* Card 2 */}
              <div className='py-5'>
                <h3 className="flex items-center text-xl font-semibold gap-2">
                  <Clock className="text-[var(--primary-color)] w-10 h-10" />
                  On-Time Delivery
                  <Check className="text-[var(--green-color)] w-10 h-10" />
                </h3>
                <p className="text-base md:text-lg lg:text-xl">
                  We value your time. Our logistics operations are built around efficiency and smart route planning – so your shipments reach their destination on schedule, whether locally or internationally.
                </p>
              </div>

              {/* Card 3 */}
              <div className='py-5'>
                <h3 className="flex items-center text-xl font-semibold gap-2">
                  <FileText className="text-[var(--primary-color)] w-10 h-10" />
                  Hassle-Free Documentation
                  <Check className="text-[var(--green-color)] w-10 h-10" />
                </h3>
                <p className="text-base md:text-lg lg:text-xl">
                  We take the burden of paperwork off your shoulders. From shipping documents to import/export permits, our team handles it all – making the logistics process smoother and faster for you.
                </p>
              </div>
            </div>

            {/* Image Content */}
            <div className='w-full h-full md:w-1/2'>
              <img src={Container1Image} alt="Shipping container" className="w-full h-auto md:rounded-tl-[65%] shadow-md" />
            </div>
          </div>
        </section>


        {/* 4th Section */}
        <section>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10" style={{
            background: 'linear-gradient(to top, var(--primary-accent), var(--primary-color))'
          }}>
            <div className='w-full md:w-1/2'>
              <img src={Container2Image} alt="Container2Image" className="w-full h-[650px] md:rounded-tr-[65%] shadow-md" />
            </div>

            <div className='w-full p-5 md:w-1/2 md:p-15'>
              <h1 className="text-[var(--white-color)] text-4xl md:text-5xl lg:text-6xl font-bold">📦 How It Works?</h1>
              <DropDownFAQ />
            </div>
          </div>
        </section>

        <section className='p-6' style={{
          background: 'linear-gradient(to top, var(--secondary-color), var(--secondary-accent), black)'
        }}>
          <h1 className="text-[var(--primary-color)] text-5xl font-bold mb-10 text-center">
            All Set to Ship? Let's Get Moving!
          </h1>

          <div className="max-w-7xl mx-auto flex flex-col justify-center items-center md:flex-row gap-10">
            {/* Left: Contact Form */}
            <div className="w-full md:w-1/2">
              <div className="p-6 bg-[var(--secondary-accent)] shadow-md rounded-lg border-4 border-[var(--primary-color)]">
                <p className="text-left text-[var(--gray-color)] mb-2 text-base md:text-lg">Have a question?</p>
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
      </main>
    </>

  )
}

export default Home