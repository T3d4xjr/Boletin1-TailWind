"use client"
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <a href="/">Logo</a>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="/" className="text-white hover:text-blue-400">Inicio</a>
          <a href="/about" className="text-white hover:text-blue-400">Acerca de</a>
          <a href="/services" className="text-white hover:text-blue-400">Servicios</a>
        </div>

        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} mt-4`}>
        <a href="/" className="block text-white py-2 px-4 hover:bg-gray-700">Inicio</a>
        <a href="/about" className="block text-white py-2 px-4 hover:bg-gray-700">Acerca de</a>
        <a href="/services" className="block text-white py-2 px-4 hover:bg-gray-700">Servicios</a>
      </div>
    </div>
  );
}
