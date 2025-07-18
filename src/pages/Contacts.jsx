import React from "react";
import emailjs from "emailjs-com";

const Contacts = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ndrtton",     // Replace with your actual Service ID
      "template_e37ju5a",    // Replace with your actual Template ID
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
