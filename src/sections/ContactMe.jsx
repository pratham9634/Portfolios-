import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#b356cd38] to-[#090A08] text-white p-6">
       <motion.h1 
       initial={{ opacity: 0, scale:0.5 }}
       whileInView={{ opacity: 1, scale:1 }}
       transition={{duration:0.5}}
        className="text-5xl font-bold mb-8 text-center underline">
          Contact Me</motion.h1>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        {/* ✅ Contact Info */}
        <motion.div 
          className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-300">Feel free to reach out for any collaboration or queries.</p>

          <div className="mt-6 space-y-4">
            <p className="flex items-center gap-3 text-lg">
              <FaEnvelope className="text-blue-400 hover:scale-110 transition-transform cursor-pointer" /> 
              Prathampetwal100@gmail.com
            </p>
            <p className="flex items-center gap-3 text-lg">
              <FaPhone className="text-green-400 hover:scale-110 transition-transform cursor-pointer" /> 
              +123 456 7890
            </p>
            <p className="flex items-center gap-3 text-lg">
              <FaMapMarkerAlt className="text-red-400 hover:scale-110 transition-transform cursor-pointer" /> 
              Dehradun, Uttarakhand, India
            </p>
          </div>
        </motion.div>  

        {/* ✅ Contact Form */}
        <motion.form 
          className="backdrop-blur-md p-8 rounded-2xl shadow-lg w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Send a Message</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-xl bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-300"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-xl bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-300"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-xl bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-300"
              required
            ></textarea>
            <motion.button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-500 hover:scale-105 text-white py-3 rounded-3xl text-lg font-semibold transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default ContactMe;
