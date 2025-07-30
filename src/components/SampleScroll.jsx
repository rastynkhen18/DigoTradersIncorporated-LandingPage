import React from "react";

const SampleScroll = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 fixed w-full top-0 z-50 shadow-md">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-xl font-bold">Digo Traders Inc.</h1>
          <div className="space-x-4">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#contacts" className="hover:underline">Contact</a>
          </div>
        </nav>
      </header>

      {/* Main */}
      <main className="flex-grow pt-20">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-white p-8">
          <div className="text-center max-w-3xl">
            <h2 className="text-4xl font-bold mb-4">Welcome to Digo Traders Inc.</h2>
            <p className="text-lg text-gray-700">
              Your trusted partner in global trading solutions. We specialize in import and export, logistics, and supply chain management.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center bg-gray-50 p-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-700">
              Digo Traders Incorporated was founded to revolutionize the trading industry in the Philippines. Our team brings decades of experience in logistics, international trade, and market distribution, serving both local and global clients with dedication and professionalism.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="min-h-screen flex items-center bg-white p-8">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-6">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-100 p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2">Import & Export</h3>
                <p className="text-gray-600">
                  We handle all aspects of international trade, ensuring compliance with regulations and timely shipments.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2">Logistics Management</h3>
                <p className="text-gray-600">
                  Efficient and cost-effective solutions for your transportation and distribution needs.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2">Warehouse Solutions</h3>
                <p className="text-gray-600">
                  Secure and scalable storage, packing, and inventory management tailored to your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacts" className="min-h-screen flex items-center bg-gray-50 p-8">
          <div className="w-full max-w-md mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-6">Have questions or inquiries? We'd love to hear from you.</p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded h-32"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        © 2025 Digo Traders Incorporated. All rights reserved.
      </footer>
    </div>
  );
};

export default SampleScroll;
