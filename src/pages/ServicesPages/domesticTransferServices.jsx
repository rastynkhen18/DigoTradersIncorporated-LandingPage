<<<<<<< HEAD
import React from 'react'
import DomesticTransferServicesImage from '../../assets/images/servicesDomesticTransferImg2.png';
import ReadyToShip from '../../components/ReadyToShip';



const domesticTransferServices = () => {
  return (
    <div>
      <main className="flex flex-col justify-start items-start text-left w-full max-w-3xl p-6 gap-6">
        <h1 className="text-xl md:xl font-bold text-[var(--white-color)] p-3 rounded-lg w-full" style={{
          background: 'linear-gradient(to left, var(--primary-color), var(--primary-accent))'
        }}>Domestic Transfer Services</h1>
        <h1 className='text-xl font-bold md:xl'>Fast, Secure, and Nationwide Cargo Movement Across the Philippines</h1>
        <p className='text:base md:text-base'>Whether you're moving goods from Manila to Cebu or from Davao to Pampanga, we make domestic cargo transfers simple, reliable, and efficient. From ports and warehouses to city streets and provincial highways — we connect the country for you.</p>

        <img src={DomesticTransferServicesImage} alt="DomesticTransferServicesImage" className="w-full max-w-4xl mx-auto rounded-2xl" />

        <div className='p-5 rounded-2xl' style={{
          background: 'linear-gradient(to top, var(--secondary-color), var(--secondary-accent), black)'
        }}>
          <h2 className="text-xl font-bold mt-6 text-[var(--primary-color)]">What We Offer</h2>

          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-[var(--white-color)]">1. City-to-City & Province-to-Province Transfers</h3>
              <p className='text-base md:text-base text-[var(--white-color)]'>Move goods seamlessly across Luzon, Visayas, and Mindanao — from urban hubs to remote municipalities.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[var(--white-color)]">2. Full Truckload (FTL) & Less Than Truckload (LTL)</h3>
              <p className='text-base md:text-base text-[var(--white-color)]'>Choose the delivery setup that fits your needs:
FTL for exclusive use of a truck
LTL to share space and reduce cost</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[var(--white-color)]">3. Door-to-Door Pickup & Delivery</h3>
              <p className='text-base md:text-base text-[var(--white-color)]'>No need to arrange separate transport — we handle pickup, transit, and delivery straight to your location.</p>
            </div>

            <div>
              <h3 className="text-xl  font-bold text-[var(--white-color)]">4. Port-to-Warehouse or Warehouse-to-Retailer</h3>
              <p className='text-base md:text-base text-[var(--white-color)]'>From ports to storage, factories to stores — we move your goods where they need to be, safely and on time.</p>
            </div>

<div>
              <h3 className="text-xl  font-bold text-[var(--white-color)]">5. Customized Handling</h3>
              <p className='text-base md:text-base text-[var(--white-color)]'>We accommodate fragile, oversized, or time-sensitive cargo with special instructions and protective measures.</p>
            </div>

          </div>
        </div>



        <div className="flex justify-center items-start flex-col mt-3">
          <h1 className='text-xl font-bold'>An Ideal Shipping Solution For:</h1>
          <p className='text:base md:text-base'>✅ E-commerce and retail shipments.</p>
          <p className='text:base md:text-base'>✅ Provincial distribution and resupply</p>
          <p className='text:base md:text-base'>✅ Inter-branch logistics and transfers</p>
          <p className='text:base md:text-base'>✅ Port release and regional delivery.</p>
          <p className='text:base md:text-base'>✅ Local manufacturing and raw material transport.</p>
        </div>

        <ReadyToShip />
      </main>
    </div >
  )
}

export default domesticTransferServices
=======
import React from "react";
import DomesticTransferServicesImage from "../../assets/images/servicesDomesticTransferImg2.png";
import ReadyToShip from "../../components/ReadyToShip";

const domesticTransferServices = () => {
	return (
		<div>
			<main className="flex flex-col justify-start items-start text-left w-full max-w-3xl p-6 gap-6">
				<h1
					className="text-xl md:xl font-bold text-[var(--white-color)] p-3 rounded-lg w-full"
					style={{
						background: "linear-gradient(to left, var(--primary-color), var(--primary-accent))",
					}}
				>
					Domestic Transport
				</h1>
				<h1 className="text-xl font-bold md:xl">Fast, Secure, and Nationwide Cargo Movement Across the Philippines</h1>
				<p className="text:base md:text-base">
					Whether you're moving goods between any ports in the Philippines, we make domestic cargo transfers simple, reliable, and efficient. From ports and warehouses to city streets and provincial
					highways — we connect the country for you.
				</p>

				<img src={DomesticTransferServicesImage} alt="DomesticTransferServicesImage" className="w-full max-w-4xl mx-auto rounded-2xl" />

				<div
					className="p-5 rounded-2xl"
					style={{
						background: "linear-gradient(to top, var(--secondary-color), var(--secondary-accent), black)",
					}}
				>
					<h2 className="text-xl font-bold mt-6 text-[var(--primary-color)]">What We Offer</h2>

					<div className="mt-4 space-y-4">
						<div>
							<h3 className="text-xl font-bold text-[var(--white-color)]">1. City-to-City & Province-to-Province Transfers</h3>
							<p className="text-sm md:text-base text-[var(--white-color)]">Move goods seamlessly across Luzon, Visayas, and Mindanao — from urban hubs to remote municipalities.</p>
						</div>

						<div>
							<h3 className="text-xl font-bold text-[var(--white-color)]">2. Full Truckload (FTL) & Less Than Truckload (LTL)</h3>
							<p className="text-sm md:text-base text-[var(--white-color)]">Choose the delivery setup that fits your needs: FTL for exclusive use of a truck LTL to share space and reduce cost</p>
						</div>

						<div>
							<h3 className="text-xl font-bold text-[var(--white-color)]">3. Door-to-Door Pickup & Delivery</h3>
							<p className="text-sm md:text-base text-[var(--white-color)]">No need to arrange separate transport — we handle pickup, transit, and delivery straight to your location.</p>
						</div>

						<div>
							<h3 className="text-xl  font-bold text-[var(--white-color)]">4. Port-to-Warehouse or Warehouse-to-Retailer</h3>
							<p className="text-sm md:text-base text-[var(--white-color)]">From ports to storage, factories to stores — we move your goods where they need to be, safely and on time.</p>
						</div>

						<div>
							<h3 className="text-xl  font-bold text-[var(--white-color)]">5. Customized Handling</h3>
							<p className="text-sm md:text-base text-[var(--white-color)]">We accommodate fragile, oversized, or time-sensitive cargo with special instructions and protective measures.</p>
						</div>
					</div>
				</div>

				<div className="flex justify-center items-start flex-col mt-3">
					<h1 className="text-xl font-bold">An Ideal Shipping Solution For:</h1>
					<p className="text:base md:text-base">✅ E-commerce and retail shipments.</p>
					<p className="text:base md:text-base">✅ Provincial distribution and resupply</p>
					<p className="text:base md:text-base">✅ Inter-branch logistics and transfers</p>
					<p className="text:base md:text-base">✅ Port release and regional delivery.</p>
					<p className="text:base md:text-base">✅ Local manufacturing and raw material transport.</p>
				</div>

				<ReadyToShip />
			</main>
		</div>
	);
};

export default domesticTransferServices;
>>>>>>> feature/description-changes
