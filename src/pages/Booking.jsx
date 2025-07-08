"use client"

import { useState } from "react"
import { supabase } from '../supabaseClient';


const Booking = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    country: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState(null)

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async (e) => {
    console.log("click")
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    try {
      // Insert data into Supabase
      const { data, error } = await supabase
        .from("booking_info") // Make sure this table exists in your Supabase database
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            age: Number.parseInt(formData.age),
            gender: formData.gender,
            country: formData.country,
            created_at: new Date().toISOString(),
          },
        ])
        .select()

      if (error) {
        throw error
      }

      setMessage({ type: "success", text: "Booking information saved successfully!" })

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        age: "",
        gender: "",
        country: "",
      })

      console.log("Data inserted successfully:", data)
    } catch (error) {
      console.error("Error inserting data:", error)
      setMessage({
        type: "error",
        text: error.message || "Failed to save booking information. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mt-18">
      <main>
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl m-1">Book Your Mountain Adventure</h1>
          <p className="text-xl">Complete your booking in 4 simple steps</p>
        </div>

        <div className="flex justify-center items-center text-center flex-row gap-2 mt-3">
          <div>
            <div className="bg-[var(--primary-color)] rounded-full w-8 h-8 flex justify-center items-center text-center mx-10 font-bold text-white">
              1
            </div>
            <span>Personal Details</span>
          </div>
          <div>
            <div className="bg-gray-500 rounded-full w-8 h-8 flex justify-center items-center text-center mx-10 font-bold text-white">
              2
            </div>
            <span>Select Trips</span>
          </div>
          <div>
            <div className="bg-gray-500 rounded-full w-8 h-8 flex justify-center items-center text-center mx-10 font-bold text-white">
              3
            </div>
            <span>Payment</span>
          </div>
          <div>
            <div className="bg-gray-500 rounded-full w-8 h-8 flex justify-center items-center text-center mx-10 font-bold text-white">
              4
            </div>
            <span>Confirmation</span>
          </div>
        </div>

        <div className="p-4 space-y-6 max-w-xl mx-auto">
          <h1 className="text-xl font-bold">Personal Information</h1>

          {message && (
            <div
              className={`p-3 rounded-md ${
                message.type === "success"
                  ? "bg-green-100 text-green-700 border border-green-300"
                  : "bg-red-100 text-red-700 border border-red-300"
              }`}
            >
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <div className="relative">
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder=" "
                  required
                  className="peer placeholder-transparent border border-gray-300 rounded-md px-3 pt-5 pb-2 w-full focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                />
                <label
                  htmlFor="firstName"
                  className="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[var(--primary-color)]"
                >
                  First Name
                </label>
              </div>

              {/* Last Name */}
              <div className="relative">
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder=" "
                  required
                  className="peer placeholder-transparent border border-gray-300 rounded-md px-3 pt-5 pb-2 w-full focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                />
                <label
                  htmlFor="lastName"
                  className="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[var(--primary-color)]"
                >
                  Last Name
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder=" "
                  required
                  className="peer placeholder-transparent border border-gray-300 rounded-md px-3 pt-5 pb-2 w-full focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[var(--primary-color)]"
                >
                  Email Address
                </label>
              </div>

              {/* Phone */}
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder=" "
                  required
                  className="peer placeholder-transparent border border-gray-300 rounded-md px-3 pt-5 pb-2 w-full focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                />
                <label
                  htmlFor="phone"
                  className="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[var(--primary-color)]"
                >
                  Phone Number
                </label>
              </div>

              {/* Age */}
              <div className="relative">
                <input
                  type="number"
                  id="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  placeholder=" "
                  min="1"
                  max="120"
                  required
                  className="peer placeholder-transparent border border-gray-300 rounded-md px-3 pt-5 pb-2 w-full focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                />
                <label
                  htmlFor="age"
                  className="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[var(--primary-color)]"
                >
                  Age
                </label>
              </div>

              {/* Gender */}
              <div className="relative">
                <input
                  type="text"
                  id="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  placeholder=" "
                  required
                  className="peer placeholder-transparent border border-gray-300 rounded-md px-3 pt-5 pb-2 w-full focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                />
                <label
                  htmlFor="gender"
                  className="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[var(--primary-color)]"
                >
                  Gender
                </label>
              </div>

              {/* Country */}
              <div className="relative md:col-span-2">
                <input
                  type="text"
                  id="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  placeholder=" "
                  required
                  className="peer placeholder-transparent border border-gray-300 rounded-md px-3 pt-5 pb-2 w-full focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                />
                <label
                  htmlFor="country"
                  className="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[var(--primary-color)]"
                >
                  Country
                </label>
              </div>

              <button
       
                type="submit"
                disabled={isSubmitting}
                className="bg-[var(--primary-color)] rounded-lg p-3 cursor-pointer text-white font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed md:col-span-2"
              >
                {isSubmitting ? "Saving..." : "Next: Select Trip"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Booking
