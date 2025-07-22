// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import useWeb3Forms from "@web3forms/react";

// export default function Contacts() {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors, isSubmitSuccessful, isSubmitting },
//   } = useForm({
//     mode: "onTouched",
//   });
  
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [message, setMessage] = useState("");

//   // Make sure this is defined in your .env file if you want to override the default
//   const apiKey = import.meta.env.VITE_PUBLIC_ACCESS_KEY || "a59c738a-946c-48ae-a2ec-fd59919ab020";

//   const { submit: onSubmit } = useWeb3Forms({
//     access_key: apiKey,
//     settings: {
//       from_name: "Digo Traders Incorporated",
//       subject: "New Contact Message from your Website",
//     },
//     onSuccess: (msg) => {
//       setIsSuccess(true);
//       setMessage(msg);
//       reset();
//     },
//     onError: (msg) => {
//       setIsSuccess(false);
//       setMessage(msg);
//     },
//   });

//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit)} className="my-10">
//         <input
//           type="checkbox"
//           className="hidden"
//           style={{ display: "none" }}
//           {...register("botcheck")}
//         />

//         <div className="mb-5">
//           <input
//             type="text"
//             placeholder="Full Name"
//             autoComplete="off"
//             className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-4 ${
//               errors.name
//                 ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
//                 : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
//             }`}
//             {...register("name", {
//               required: "Full name is required",
//               maxLength: 80,
//             })}
//           />
//           {errors.name && (
//             <div className="mt-1 text-red-600">
//               <small>{errors.name.message}</small>
//             </div>
//           )}
//         </div>

//         <div className="mb-5">
//           <label htmlFor="email_address" className="sr-only">
//             Email Address
//           </label>
//           <input
//             id="email_address"
//             type="email"
//             placeholder="Email Address"
//             autoComplete="off"
//             className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-4 ${
//               errors.email
//                 ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
//                 : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
//             }`}
//             {...register("email", {
//               required: "Enter your email",
//               pattern: {
//                 value: /^\S+@\S+$/i,
//                 message: "Please enter a valid email",
//               },
//             })}
//           />
//           {errors.email && (
//             <div className="mt-1 text-red-600">
//               <small>{errors.email.message}</small>
//             </div>
//           )}
//         </div>

//         <div className="mb-3">
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             autoComplete="off"
//             className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900 rounded-md outline-none h-36 focus:ring-4 ${
//               errors.message
//                 ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
//                 : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
//             }`}
//             {...register("message", {
//               required: "Enter your message",
//             })}
//           />
//           {errors.message && (
//             <div className="mt-1 text-red-600">
//               <small>{errors.message.message}</small>
//             </div>
//           )}
//         </div>

//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black"
//         >
//           {isSubmitting ? (
//             <svg
//               className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 strokeWidth="4"
//               ></circle>
//               <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//               ></path>
//             </svg>
//           ) : (
//             "Send Message"
//           )}
//         </button>
//       </form>

//       {isSubmitSuccessful && isSuccess && (
//         <div className="mt-3 text-sm text-center text-green-500">
//           {message || "Success. Message sent successfully."}
//         </div>
//       )}
//       {isSubmitSuccessful && !isSuccess && (
//         <div className="mt-3 text-sm text-center text-red-500">
//           {message || "Something went wrong. Please try again later."}
//         </div>
//       )}
//     </>
//   );
// }



// import React from "react";

// export default function Contacts() {
//   const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "a59c738a-946c-48ae-a2ec-fd59919ab020");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-5">
//       <form
//         onSubmit={onSubmit}
//         className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md"
//       >
//         <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
//           Contact Us
//         </h2>

//         <div className="mb-4">
//           <label htmlFor="name" className="block text-gray-700 mb-1">
//             Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-700 mb-1">
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-6">
//           <label htmlFor="message" className="block text-gray-700 mb-1">
//             Message
//           </label>
//           <textarea
//             name="message"
//             required
//             rows="4"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
//           ></textarea>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
//         >
//           Submit Form
//         </button>

//         {result && (
//           <span className="block mt-4 text-green-600 text-center font-medium">
//             {result}
//           </span>
//         )}
//       </form>
//     </div>
//   );
// }

import React from "react";
import emailjs from "emailjs-com";

const Contacts = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ndrtton",     // Replace with your actual Service ID
      "template_tkozg1d",    // Replace with your actual Template ID
      e.target,
      "3kmbeJRVPlVrrqylg"      // Replace with your actual Public Key
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
    <main className="bg-gray-800 p-5 md:p-20 text-white">
      <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
      <form onSubmit={sendEmail} className="bg-white text-black p-8 rounded-2xl shadow-lg max-w-2xl mx-auto space-y-4">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label>First Name</label>
            <input type="text" name="first_name" required className="w-full border border-gray-300 rounded-md px-4 py-2" />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" name="last_name" required className="w-full border border-gray-300 rounded-md px-4 py-2" />
          </div>
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" required className="w-full border border-gray-300 rounded-md px-4 py-2" />
        </div>
        <div>
          <label>Subject</label>
          <input type="text" name="subject" required className="w-full border border-gray-300 rounded-md px-4 py-2" />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" rows="5" required className="w-full border border-gray-300 rounded-md px-4 py-2"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md">
          Send Message
        </button>
      </form>
    </main>
  );
};

export default Contacts;
