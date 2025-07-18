import React from "react";
import Logo from "../assets/DigoTradersIncorporated_logo.png";
import DropdownFAQ from "../components/DropDownFAQ";

const About = () => {
  return (
    <div>
      <main className="flex flex-col justify-between items-center bg-gray-800 p-5 md:p-20">
        <h1 className="text-3xl text-center text-[#fff] sm:text-center md:text-4xl font-bold mt-5">
          About Digo Traders Incorporated
        </h1>
        <div className="grid md:grid-cols-2 gap-1 items-center mt-15">
          <div>
            {" "}
            <img
              src={Logo}
              alt="Digo Traders Incorporated Logo"
              className="w-64 h-64 mx-auto rounded-full shadow-lg  object-cover"
            />
          </div>

          <div>
            <h1 className="text-3xl font-black mb-2 text-center text-[#fff] md:text-start">
              Your Trusted Customs Broker
            </h1>
            <p className="mb-6 text-[#fff] sm:text-center md:text-justify md:mx-0 md:mr-35">
            Digo Traders Incorporated is a professional customs brokerage firm
              dedicated to facilitating smooth international trade operations.
              Under the leadership of Carlito Espinosa, our licensed customs
              broker, we provide comprehensive customs clearance services.
            </p>
          </div>
          <div className="flex justify-center items-center flex-col">
          <DropdownFAQ/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
