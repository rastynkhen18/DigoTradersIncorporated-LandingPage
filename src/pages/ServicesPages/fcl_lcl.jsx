<<<<<<< HEAD
import React from 'react'
import FclImage1 from '../../assets/images/servicesFcl-img.png';
import FclImage2 from '../../assets/images/servicesFcl-img2.png';
import ReadyToShip from '../../components/ReadyToShip';
import { Package, ShieldCheck, Timer } from 'lucide-react';


const fcl_lcl = () => {
  return (
    <div>
      <main className="flex flex-col justify-start items-start text-left w-full max-w-3xl p-6 gap-6">
        <h1 className="text-xl md:xl font-bold text-[var(--white-color)] p-3 rounded-lg w-full" style={{
          background: 'linear-gradient(to left, var(--primary-color), var(--primary-accent))'
        }}>International FCL & LCL Shipping</h1>
        <h1 className='text-xl font-bold md:xl'>Flexible Container Solutions for Your Global Cargo Needs</h1>
        <p className='text:base md:text-base'>
          Whether you’re shipping a few pallets or filling an entire container, we provide tailored solutions through Full Container Load (FCL) or Less than Container Load (LCL) — helping you save time and money on international shipments.
        </p>

        <img src={FclImage1} alt="FclImage1" className="w-full max-w-4xl mx-auto" />


        <section className='bg-[var(--gray-color)] p-5 rounded-lg'>
          <button className='text-[var(--white-color)] w-full rounded-xl font-bold mb-2 px-2 py-2' style={{
            background: 'linear-gradient(to right, var(--primary-color), var(--primary-accent))'
          }}>What We Offer</button>
          <div className='p-5 rounded-lg' style={{
            background: 'linear-gradient(to top, var(--secondary-color), var(--secondary-accent))'
          }}>

            <h1 className='text-xl font-bold md:4xl text-[var(--primary-color)]'>FCL (Full Container Load)</h1>
            <h2 className='font-bold text-[var(--white-color)]'>What is FCL? </h2>
            <p className='text:base text-[var(--white-color)]'>FCL stands for Full Container Load, a shipping method where one shipper uses the entire container space for their cargo — even if the container isn’t completely full.</p>
            <img src={FclImage2} alt="FclImage2" className="w-full max-w-4xl mx-auto" />
            <p className='text:base md:text-base text-[var(--white-color)]'>In FCL shipping, the entire container (e.g., 20ft or 40ft) is booked by a single shipper, regardless of whether they use all the space or not. This method ensures that the container contains only your goods, not shared with others, providing greater control, security, and efficiency.</p>

            <div className='flex flex-col items-center text-center bg-[var(--white-color)] rounded-lg p-3'>
              <h1 className='text-xl font-semibold mb-6 text-[var(--primary-color)]'>Perfect When You're Shipping:</h1>

              <div className='flex flex-row gap-8'>
                <div className='flex flex-col items-center gap-2'>
                  <div className='bg-[var(--primary-color)] p-3 rounded-full'>
                    <Package size={24} className='text-white' />
                  </div>
                  <p className='text-base font-bold'>Bulk Shipments</p>
                </div>

                <div className='flex flex-col items-center gap-2'>
                  <div className='bg-[var(--primary-color)] p-3 rounded-full'>
                    <ShieldCheck size={24} className='text-white' />
                  </div>
                  <p className='text-base font-bold'>Fragile or sensitive cargo</p>
                </div>

                <div className='flex flex-col items-center gap-2'>
                  <div className='bg-[var(--primary-color)] p-3 rounded-full'>
                    <Timer size={24} className='text-white' />
                  </div>
                  <p className='text-base font-bold'>Urgent timelines</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-start flex-col mt-3 className='text-base text-[var(--white-color)]">
              <p>✅ Your cargo only</p>
              <p>✅ No sharing space</p>
              <p>✅ Better control and security</p>
              <p>✅ Fixed shipping schedule</p>
            </div>
          </div>
        

        
          <div className='p-5 rounded-lg mt-2' style={{
            background: 'linear-gradient(to top, var(--secondary-color), var(--secondary-accent))'
          }}>

            <h1 className='text-xl font-bold md:xl text-[var(--primary-color)]'>LCL (Less than Container Load)</h1>
            <h2 className='font-bold text-[var(--white-color)]'>What is LCL? </h2>
            <p className='text:base text-[var(--white-color)]'>LCL stands for Less than Container Load, a shipping method where multiple shippers share space in a single container. Each shipper only pays for the space their cargo uses — making it ideal for smaller shipments that don't need a full container.</p>
            <img src={FclImage2} alt="FclImage2" className="w-full max-w-4xl mx-auto" />
            <p className='text:base md:text-base text-[var(--white-color)]'>LCL allows businesses or individuals to ship goods internationally without booking an entire container. It's designed for shipments that are too small for Full Container Load (FCL) but still require reliable, international transport.</p>

            <div className='flex flex-col items-center text-center bg-[var(--white-color)] rounded-lg p-3'>
              <h1 className='text-xl font-semibold mb-6 text-[var(--primary-color)]'>Perfect When You're Shipping:</h1>

              <div className='flex flex-row gap-8'>
                <div className='flex flex-col items-center gap-2'>
                  <div className='bg-[var(--primary-color)] p-3 rounded-full'>
                    <Package size={24} className='text-white' />
                  </div>
                  <p className='text:base md:text-base font-bold'>Small volumes</p>
                </div>

                <div className='flex flex-col items-center gap-2'>
                  <div className='bg-[var(--primary-color)] p-3 rounded-full'>
                    <ShieldCheck size={24} className='text-white' />
                  </div>
                  <p className='text:base md:text-base font-bold'>Not Fragile</p>
                </div>

                <div className='flex flex-col items-center gap-2'>
                  <div className='bg-[var(--primary-color)] p-3 rounded-full'>
                    <Timer size={24} className='text-white' />
                  </div>
                  <p className='text:base md:text-base font-bold'>Low shipping costs</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-start flex-col text:base md:text-base mt-3 text-[var(--white-color)]">
              <p>✅ Pay only for the space you use</p>
              <p>✅ Regular shipping schedules</p>
              <p>✅ Ideal for growing businesses</p>
            </div>
          </div>
        </section>
        <ReadyToShip />
      </main>
    </div >
  )
}

export default fcl_lcl
=======
import React from "react";
import FclImage1 from "../../assets/images/servicesFcl-img.png";
import FclImage2 from "../../assets/images/servicesFcl-img2.png";
import ReadyToShip from "../../components/ReadyToShip";
import { Package, ShieldCheck, Timer } from "lucide-react";

const fcl_lcl = () => {
	return (
		<div>
			<main className="flex flex-col justify-start items-start text-left w-full max-w-3xl p-6 gap-6">
				<h1
					className="text-xl md:xl font-bold text-[var(--white-color)] p-3 rounded-lg w-full"
					style={{
						background: "linear-gradient(to left, var(--primary-color), var(--primary-accent))",
					}}
				>
					International FCL & LCL Shipping
				</h1>
				<h1 className="text-xl font-bold md:xl">Flexible Container Solutions for Your Global Cargo Needs</h1>
				<p className="text-sm md:text-base text-justify">
					Whether you’re shipping a few pallets or filling an entire container, we provide tailored solutions through Full Container Load (FCL) or Less than Container Load (LCL) — helping you save
					time and money on international shipments.
				</p>

				<img src={FclImage1} alt="FclImage1" className="w-full max-w-4xl mx-auto" />

				<section>
					<button
						className="text-[var(--white-color)] w-full rounded-xl font-bold mb-2 px-2 py-2"
						style={{
							background: "linear-gradient(to right, var(--primary-color), var(--primary-accent))",
						}}
					>
						What We Offer
					</button>
					<div
						className="p-5 rounded-lg "
						style={{
							background: "linear-gradient(to top, var(--secondary-color), var(--secondary-accent))",
						}}
					>
						<h1 className="text-xl font-bold md:4xl text-[var(--primary-color)] mb-5">FCL (Full Container Load)</h1>
						<h2 className="font-bold text-[var(--white-color)] mb-2">What is FCL? </h2>
						<p className="md:text:base text-sm text-[var(--white-color)] mb-2 text-justify">
							FCL stands for Full Container Load, a shipping method where one shipper uses the entire container space for their cargo — even if the container isn’t completely full.
						</p>
						<img src={FclImage2} alt="FclImage2" className="w-full max-w-4xl mx-auto mb-2" />
						<p className="md:text-base text-sm  text-[var(--white-color)] mb-2 text-justify">
							In FCL shipping, the entire container (e.g., 20ft or 40ft) is booked by a single shipper, regardless of whether they use all the space or not. This method ensures that the container
							contains only your goods, not shared with others, providing greater control, security, and efficiency.
						</p>

						<div className="flex flex-col items-center text-center bg-[var(--white-color)] rounded-lg p-3">
							<h1 className="text-xl font-semibold mb-6 text-[var(--primary-color)]">Perfect When You're Shipping:</h1>

							<div className="flex flex-row gap-8">
								<div className="flex flex-col items-center gap-2">
									<div className="bg-[var(--primary-color)] p-3 rounded-full">
										<Package size={24} className="text-white" />
									</div>
									<p className="text-base font-bold">Bulk Shipments</p>
								</div>

								<div className="flex flex-col items-center gap-2">
									<div className="bg-[var(--primary-color)] p-3 rounded-full">
										<ShieldCheck size={24} className="text-white" />
									</div>
									<p className="text-base font-bold">Fragile or sensitive cargo</p>
								</div>

								<div className="flex flex-col items-center gap-2">
									<div className="bg-[var(--primary-color)] p-3 rounded-full">
										<Timer size={24} className="text-white" />
									</div>
									<p className="text-base font-bold">Urgent timelines</p>
								</div>
							</div>
						</div>

						<div className="flex justify-center items-start flex-col mt-3 text-base text-[var(--white-color)]">
							<p className="md:text-base text-sm ">✅ Your cargo only</p>
							<p className="md:text-base text-sm ">✅ No sharing space</p>
							<p className="md:text-base text-sm ">✅ Better control and security</p>
							<p className="md:text-base text-sm ">✅ Fixed shipping schedule</p>
						</div>
					</div>

					<div
						className="p-5 rounded-lg mt-2"
						style={{
							background: "linear-gradient(to top, var(--secondary-color), var(--secondary-accent))",
						}}
					>
						<h1 className="text-xl font-bold md:xl text-[var(--primary-color)]">LCL (Less than Container Load)</h1>
						<h2 className="font-bold text-[var(--white-color)] mb-3">What is LCL? </h2>
						<p className="md:text-base text-sm text-[var(--white-color)] mb-2 text-justify">
							LCL stands for Less than Container Load, a shipping method where multiple shippers share space in a single container. Each shipper only pays for the space their cargo uses — making it
							ideal for smaller shipments that don't need a full container.
						</p>
						<img src={FclImage2} alt="FclImage2" className="w-full max-w-4xl mx-auto mb-2 text-justify" />
						<p className="md:text-base text-sm  text-[var(--white-color)] mb-2 text-justify">
							LCL allows businesses or individuals to ship goods internationally without booking an entire container. It's designed for shipments that are too small for Full Container Load (FCL) but
							still require reliable, international transport.
						</p>

						<div className="flex flex-col items-center text-center bg-[var(--white-color)] rounded-lg p-3 mb-2">
							<h1 className="text-xl font-semibold mb-6 text-[var(--primary-color)]">Perfect When You're Shipping:</h1>

							<div className="flex flex-row gap-8">
								<div className="flex flex-col items-center gap-2">
									<div className="bg-[var(--primary-color)] p-3 rounded-full">
										<Package size={24} className="text-white" />
									</div>
									<p className="text:base md:text-base font-bold">Small volumes</p>
								</div>

								<div className="flex flex-col items-center gap-2">
									<div className="bg-[var(--primary-color)] p-3 rounded-full">
										<ShieldCheck size={24} className="text-white" />
									</div>
									<p className="text:base md:text-base font-bold">Not Fragile</p>
								</div>

								<div className="flex flex-col items-center gap-2">
									<div className="bg-[var(--primary-color)] p-3 rounded-full">
										<Timer size={24} className="text-white" />
									</div>
									<p className="text:base md:text-base font-bold">Low shipping costs</p>
								</div>
							</div>
						</div>

						<div className="flex justify-center items-start flex-col text:base md:text-base mt-3 text-[var(--white-color)]">
							<p>✅ Pay only for the space you use</p>
							<p>✅ Regular shipping schedules</p>
							<p>✅ Ideal for growing businesses</p>
						</div>
					</div>
				</section>
				<ReadyToShip />
			</main>
		</div>
	);
};

export default fcl_lcl;
>>>>>>> feature/description-changes
