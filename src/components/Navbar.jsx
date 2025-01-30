"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [resp, setResp] = useState(false);
  const [navbar, setNavbar] = useState(false);
  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <nav
      className={
        `${navbar ? " bg-white" : "bg-white text-black"}` +
        "border-gray-200  bg-white shadow-lg dark:border-gray-700 shadow-gray-800 sticky top-0 z-50"
      }
    >
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-3">
        <div className="flex items-center">
          <div className="flex flex-col"></div>
          <Link href="/" className="flex items-center flex-col w-fit">
            <Image
              src="/sallu_logo.png"
              alt="logo"
              className="h-[60px] w-[350px]"
              height="60"
              width="350"
            />
            {/* <span className="self-center  md:text-3xl sm:text-2xl text-xl font-semibold whitespace-nowrap dark:text-white text-green-600">SALLU AIR SERVICE</span><span className="self-end text-xs md:text-base">Govt. Approved Travel Agency</span> */}
          </Link>
        </div>
        <button
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm hover:text-white transition duration-500 rounded-lg md:hidden hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200  "
          aria-controls="navbar-multi-level"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {!resp ? (
            <svg
              className="w-6 h-6"
              onClick={() => setResp(!resp)}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          ) : (
            <FaTimes className="w-6 h-6" onClick={() => setResp(!resp)} />
          )}
        </button>
        <div
          className={`md:block w-full md:w-auto ${resp ? "block" : "hidden"}`}
          id="navbar-multi-level transition-all duration-400 delay-300"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 text-center rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  transition-all duration-400 delay-300">
            <Link href="/">
              <li className="p-2 md:p-0 hover:bg-gray-900 hover:rounded hover:text-white md:hover:text-xl md:hover:bg-transparent md:hover:text-blue-600 text-lg duration-500">
                Home
              </li>
            </Link>
            <Link href="/jobs">
              <li className="p-2 md:p-0 hover:bg-gray-900 hover:rounded hover:text-white md:hover:text-xl md:hover:bg-transparent md:hover:text-blue-600 text-lg duration-500">
                Jobs
              </li>
            </Link>

            {/* <li className="group w-full">
              <button className="w-full text-center items-center justify-center outline-none focus:outline-none  px-3 py-1 rounded-sm flex p-2 md:p-0 hover:bg-gray-900 hover:rounded hover:text-white md:hover:text-black md:hover:bg-transparent text-lg duration-500">
               

                <li className="p-2 md:p-0 hover:bg-gray-900 hover:rounded hover:text-white  md:hover:text-xl md:hover:bg-transparent md:hover:text-blue-600 text-lg duration-500 relative">
                  About
                </li>
                <span>
                  <svg
                    className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul
                className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-500 delay-300 ease-in-out origin-top"
              >
                <Link href="/about">
                  <li className="p-2 md:p-2 hover:bg-gray-900 hover:rounded hover:text-white  text-lg duration-500">
                    About Us
                  </li>
                </Link>
                <Link href="/about/certificates">
                  <li className="p-2 md:p-2 hover:bg-gray-900 hover:rounded hover:text-white  text-lg duration-500">
                    Certificates
                  </li>
                </Link>
                <Link href="/about/missionvission">
                  <li className="p-2 md:p-2 hover:bg-gray-900 hover:rounded hover:text-white  text-lg duration-500">
                    Mission Vission
                  </li>
                </Link>
                <Link href="/about/management">
                  <li className="p-2 md:p-2 hover:bg-gray-900 hover:rounded hover:text-white text-lg duration-500">
                    Management Team
                  </li>
                </Link>
                <Link href="/about/mdmessage">
                  <li className="p-2 md:p-2 hover:bg-gray-900 hover:rounded hover:text-white text-lg duration-500">
                    Managing Directors Message
                  </li>
                </Link>
              </ul>
            </li> */}
            <Link href="/about/mdmessage">
              <li className="p-2 md:p-0 hover:bg-gray-900 hover:rounded hover:text-white md:hover:text-xl md:hover:bg-transparent md:hover:text-blue-600 text-lg duration-500">
                About Us
              </li>
            </Link>
            <Link href="/services">
              <li className="p-2 md:p-0 hover:bg-gray-900 hover:rounded hover:text-white md:hover:text-xl md:hover:bg-transparent md:hover:text-blue-600 text-lg duration-500">
                Services
              </li>
            </Link>

            <Link href="/gallery">
              <li className="p-2 md:p-0 hover:bg-gray-900 hover:rounded hover:text-white md:hover:text-xl md:hover:bg-transparent md:hover:text-blue-600  text-lg duration-500">
                Gallery
              </li>
            </Link>

            <Link href="/portfolio">
              <li className="p-2 md:p-0 hover:bg-gray-900 hover:rounded hover:text-white md:hover:text-xl md:hover:bg-transparent md:hover:text-blue-600 text-lg duration-500">
                Portfolio
              </li>
            </Link>

            <Link href="/contact">
              <li className="p-2 md:p-0 hover:bg-gray-900 hover:rounded hover:text-white md:hover:text-xl md:hover:bg-transparent md:hover:text-blue-600  text-lg duration-500">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
