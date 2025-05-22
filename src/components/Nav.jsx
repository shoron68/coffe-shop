import React, { useState } from 'react';
import Container from './Container';
import { Menu, X } from 'lucide-react'; // uses lucide icons (install if needed)

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-transparent">
      <div className="py-[30px] lg:mx-0 mx-[30px]">
        <Container>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <h2 className="text-[35px] font-Clicker font-normal text-white">Bean Scene</h2>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex gap-x-8">
              {['Home', 'Menu', 'About Us', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[14px] font-Playfair font-medium text-white hover:text-[#F9C06A] duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Auth buttons (desktop) */}
            <div className="hidden lg:flex gap-x-3">
              <a
                href="#"
                className="text-[16px] font-Playfair bg-[#F9C06A] text-black py-[10px] px-[20px] rounded-3xl hover:bg-[#f9c06ace] duration-300"
              >
                Sign Up
              </a>
              <a
                href="#"
                className="text-[16px] font-Playfair bg-[#F9C06A] text-black py-[10px] px-[20px] rounded-3xl hover:bg-[#f9c06ace] duration-300"
              >
                Sign In
              </a>
            </div>

            {/* Burger Icon (mobile) */}
            <div className="lg:hidden z-[10001]">
              <button onClick={toggleMenu}>
                {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
              </button>
            </div>
          </div>
        </Container>
      </div>

     
      <div
        className={`fixed top-0 left-0 w-[75%] h-full bg-[#1c1c1c] z-[10000] p-6 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="flex flex-col gap-6 mt-16">
          {['Home', 'Menu', 'About Us', 'Contact Us'].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-[18px] font-Playfair text-white hover:text-[#F9C06A] duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col gap-4">
          <a
            href="#"
            className="text-[16px] font-Playfair bg-[#F9C06A] text-black py-[10px] px-[20px] rounded-3xl text-center"
          >
            Sign Up
          </a>
          <a
            href="#"
            className="text-[16px] font-Playfair bg-[#F9C06A] text-black py-[10px] px-[20px] rounded-3xl text-center"
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
