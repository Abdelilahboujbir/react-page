import Header from "../components/header";
import Footer from "../components/footer"
import React, { useState } from 'react';
import { Phone, Mail, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-16 px-4 pt-28">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-6 tracking-wide">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to find your dream property or need expert real estate advice? 
            We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-300">
            <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
              Get in Touch
            </h2>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="group">
                <a 
                  href="tel:+212645563387" 
                  className="flex items-center space-x-4 p-4 rounded-xl bg-gray-900/50 hover:bg-yellow-400/10 transition-all duration-300 group-hover:transform group-hover:scale-105"
                >
                  <div className="bg-yellow-400/20 p-3 rounded-full group-hover:bg-yellow-400/30 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium">Phone</p>
                    <p className="text-white text-lg font-semibold">+212 645 563 387</p>
                  </div>
                </a>
              </div>

              {/* Email */}
              <div className="group">
                <a 
                  href="mailto:contact@immobati.ma" 
                  className="flex items-center space-x-4 p-4 rounded-xl bg-gray-900/50 hover:bg-yellow-400/10 transition-all duration-300 group-hover:transform group-hover:scale-105"
                >
                  <div className="bg-yellow-400/20 p-3 rounded-full group-hover:bg-yellow-400/30 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium">Email</p>
                    <p className="text-white text-lg font-semibold">contact@immobati.ma</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-xl border border-yellow-400/20">
              <p className="text-gray-300 text-center italic">
                "Your trusted partner in Moroccan real estate. Let's turn your property dreams into reality."
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-300">
            <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
              Send Message
            </h2>

            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <div className="block text-gray-300 font-medium mb-2">
                  Full Name *
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <div className="block text-gray-300 font-medium mb-2">
                  Email Address *
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 outline-none"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Message Field */}
              <div>
                <div className="block text-gray-300 font-medium mb-2">
                  Message *
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 outline-none resize-none"
                  placeholder="Tell us about your property needs or any questions you have..."
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25 flex items-center justify-center space-x-2 group"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            <p className="text-gray-400 text-sm text-center mt-4">
              We'll get back to you within 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ContactPage;