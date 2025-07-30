

'use client';

import React, { useState } from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { navMenu } from '@/lib/menubar';
import Link from 'next/link';
import Image from 'next/image';


const Navbar = () => {
  const [open, setClose] = useState(false);

  return (
    <>
      <header className="w-full text-white bg-gray-900 shadow-lg">
        {/* Navbar Row */}
        {/* <----------------------------------------------> */}
        <div className="max-w-7xl mx-auto h-20 px-4 flex items-center justify-between  overflow-hidden text-white ">
          {/* Logo */}
          <div className="text-xl flex space-x-2 items-center">
            <span className="text-orange-600 font-extrabold">&lt;</span>
            <h1 className="flex text-white">
              <p className="font-extrabold">Mu</p>hammad
              <p className="font-extralight text-white">Af</p>zal
            </h1>
            <span className="text-orange-600 font-extrabold">/&gt;</span>
          </div>

          {/* Desktop Menu */}
        {/* <----------------------------------------------> */}

          <nav className="hidden md:block text-white">
            <ul className="flex gap-6 list-none text-white">
              {navMenu.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.link}
                    className="font-normal  hover:font-bold  hover:scale-105 transform transition-all duration-200"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Icons */}
        {/* <----------------------------------------------> */}

          <div className="hidden md:flex items-center gap-6">
            <button className="border outline-none rounded-lg shadow-md px-3 py-1 text-xl font-extralight hover:bg-gray-700">
              <Link href={"/contact"}>
                {/* <Contact/> */}
                Contact Us
                
                </Link>
            </button>
            <div className="flex gap-4 items-center">
              <Link href="https://github.com/Muhammad-Afzal557">
                <Image src="/9919.png" alt="GitHub" width={25} height={25} className="rounded-full" />
              </Link>
              <Link href="https://www.linkedin.com/in/muhammad-afzal-soomro-259717260">
                <Image src="/images-.png" alt="LinkedIn" width={25} height={25} className="rounded-full bg-white" />
              </Link>
              <Link href="https://wa.me/923253086449">
                <Image src="/images.jpeg" alt="WhatsApp" width={30} height={30} className="rounded-full" />
              </Link>
            </div>
          </div>

          {/* Hamburger Icon */}
        {/* <----------------------------------------------> */}

          <div className="md:hidden">
            {open ? (
              <IoMdClose onClick={() => setClose(false)} className="text-3xl cursor-pointer" />
            ) : (
              <IoMdMenu onClick={() => setClose(true)} className="text-4xl cursor-pointer" />
            )}
          </div>
        </div>

        {/* ✅ Mobile Dropdown Menu - OUTSIDE FLEX ROW */}
        {/* <----------------------------------------------> */}

        {open && (
          <div className="md:hidden w-full bg-gray-900 px-6 py-4 border-t shadow-md ">
            <ul className="flex flex-col gap-4">
              {navMenu.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.link}
                    onClick={() => setClose(false)}
                    className="text-white
                   text-base font-medium hover:text-blue-600 transition"
                  >
                    {item.title}

                    
                  </Link>
                </li>
              ))}
            </ul>
 <div className="flex flex-col gap-4 py-5">
                
              <button className="w-full border outline-none rounded-lg shadow-md px-3 py-2 text-lg font-extralight hover:bg-gray-700" >
                <Link href={"/contact"}>
                {/* <Contact/> */}
                Contact Us
                
                </Link>
              </button>

              <button  className='bg-gray-900 border w-full rounded-lg px-3 py-2 hover:bg-gray-700 flex gap-4 items-center justify-center shadow-lg flex-row-reverse'> 
                <Link href="https://wa.me/923253086449">
                  <Image src="/images.jpeg" alt="WhatsApp" width={30} height={30} className="rounded-full" />
                </Link>
                Chat on Whatsapp
              </button>
              <div className="flex gap-4 items-center justify-center">
                <Link href="https://github.com/Muhammad-Afzal557">
                  <Image src="/9919.png" alt="GitHub" width={25} height={25} className="rounded-full" />
                </Link>
                <Link href="https://www.linkedin.com/in/muhammad-afzal-soomro-259717260">
                  <Image src="/images-.png" alt="LinkedIn" width={25} height={25} className="rounded-full" />
                </Link>
                
              </div>
            </div>

          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;

