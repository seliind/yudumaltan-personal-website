import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#f4f4f4]">
      <div className="mx-auto max-w-9xl py-10 px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center items-center space-x-1 md:order-2">
          <a href={"item.name"} className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">whatsapp</span>
            <a target="_blank" rel="noreferrer" href="https://wa.me/5468679530">
            <BsWhatsapp className="h-7 w-7" aria-hidden="true" />
            </a>
          </a>
          <Link to="/">
          <img src={logo} alt="" className="h-12 w-18"/>
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; 2023, All rights reserved.
          </p>
          <p className="text-xs leading-5 text-gray-500 text-center">
            By{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href={
                "https://bento.me/seliin"
              }
              className="text-[#A78B71] hover:underline"
            >
              Selin Demircioğlu
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
