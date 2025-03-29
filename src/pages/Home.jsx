import React from "react";
import { FaTruck, FaMapMarkerAlt, FaChartLine } from "react-icons/fa";
import gpsImg from "../assets/gps.png";
import mapImg from "../assets/map.png";
import truckImg from "../assets/truck1.png";
import logisticsImg from "../assets/logistic.png";

export default function BharatLoadsLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-pink-200 to-blue-300 text-gray-900 overflow-x-hidden">
      <header className="bg-gradient-to-r from-blue-600 to-pink-500 text-white py-6 px-6 md:px-10 flex flex-col items-center text-center shadow-xl">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide">BharatLoads</h1>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-full shadow-lg font-semibold hover:bg-gray-200 transition transform hover:scale-105 mt-4">Download App</button>
      </header>
      
      <section className="relative text-center py-12 px-4 md:py-16 md:px-6 rounded-b-3xl shadow-md flex flex-col items-center justify-center bg-gradient-to-r from-blue-200 via-pink-300 to-cyan-300">
        <div className="bg-white bg-opacity-80 p-6 md:p-10 rounded-lg max-w-3xl md:max-w-4xl text-center shadow-lg">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 drop-shadow-lg">Transforming Logistics with Technology</h2>
          <p className="mt-4 text-md md:text-lg text-gray-700">Seamlessly connecting transporters and truck owners with real-time updates and a transparent marketplace.</p>
        </div>
        <img src={truckImg} alt="Truck" className="mt-6 md:mt-8 w-full max-w-xs md:max-w-lg h-auto rounded-lg shadow-lg" />
      </section>
      
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-10 py-12 md:py-16 text-center">
        <div className="p-6 md:p-8 bg-white shadow-lg rounded-2xl flex flex-col items-center">
          <img src={mapImg} alt="Map" className="w-28 h-28 md:w-40 md:h-40 object-cover rounded-full mb-4 shadow-md" />
          <FaMapMarkerAlt className="text-pink-600 text-4xl md:text-5xl mb-4" />
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">Location Load Truck Matching</h3>
          <p className="text-gray-600 mt-3 text-sm md:text-base">Find the right loads and trucks instantly with our advanced matching system.</p>
        </div>
        <div className="p-6 md:p-8 bg-white shadow-lg rounded-2xl flex flex-col items-center">
          <img src={gpsImg} alt="GPS" className="w-28 h-28 md:w-40 md:h-40 object-cover rounded-full mb-4 shadow-md" />
          <FaTruck className="text-pink-600 text-4xl md:text-5xl mb-4" />
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">Real-Time Updates</h3>
          <p className="text-gray-600 mt-3 text-sm md:text-base">Stay ahead with live updates on available loads and trucks.</p>
        </div>
        <div className="p-6 md:p-8 bg-white shadow-lg rounded-2xl flex flex-col items-center">
          <img src={logisticsImg} alt="Logistics" className="w-28 h-28 md:w-40 md:h-40 object-cover rounded-full mb-4 shadow-md" />
          <FaChartLine className="text-pink-600 text-4xl md:text-5xl mb-4" />
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">Transparent Marketplace</h3>
          <p className="text-gray-600 mt-3 text-sm md:text-base">Get access to clear pricing, availability, and ratings for a fair deal.</p>
        </div>
      </section>
      
      <section className="text-center py-12 px-6 md:py-16 md:px-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">About BharatLoads</h2>
        <p className="mt-4 text-md md:text-lg text-gray-700">At BharatLoads, we are transforming India’s logistics by connecting transporters and truck owners through an innovative, map-based load-truck matching platform. Our mission is to enhance efficiency, transparency, and profitability in the logistics industry by using technology to streamline operations.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="p-6 md:p-8 bg-white shadow-lg rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
            <p className="text-gray-600 mt-3">We envision a future where technology connects transporters and truck owners seamlessly. We strive to create a platform that empowers both parties, driving collaboration, innovation, and growth.</p>
          </div>
          <div className="p-6 md:p-8 bg-white shadow-lg rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
            <p className="text-gray-600 mt-3">We are redefining transportation by providing an intuitive platform that connects truck owners and transporters more efficiently. By combining advanced technology with trust and transparency, we aim to reshape the logistics ecosystem, making transportation faster, more reliable, and profitable.</p>
          </div>
        </div>
      </section>
      
      <footer className="bg-gradient-to-r from-blue-900 to-pink-700 text-white text-center py-6 text-md md:text-lg font-medium">
        <p>Contact Us</p>
        <p>Jamshedpur, Jharkhand</p>
        <p>bharatloads@gmail.com | +91-9693736187</p>
        <div className="mt-4">
          
        </div>
        <p className="mt-4">Copyright © 2024 BharatLoads </p>
        <div className="mt-4">
          <p>Privacy Policy | Terms & Services</p>
        </div>
      </footer>
    </div>
  );
}