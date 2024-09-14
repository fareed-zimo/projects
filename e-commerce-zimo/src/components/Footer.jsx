import Link from "next/link";
import React from "react";
import XIcon from "@mui/icons-material/X";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-400">
      <div className="container mx-auto px-4 py-8 md:px-10">
        <div className="flex flex-col justify-center space-y-5">
          <div className="w-full md:w-auto flex justify-center mt-6">
            <div className="space-x-4">
              <Link href={"#"} passHref>
                <XIcon className="text-gray-600 hover:text-gray-900" />
              </Link>
              <Link href={"#"} passHref>
                <FacebookRoundedIcon className="text-gray-600 hover:text-gray-900" />
              </Link>
              <Link href={"#"} passHref>
                <InstagramIcon className="text-gray-600 hover:text-gray-900" />
              </Link>
              <Link href={"#"} passHref>
                <PinterestIcon className="text-gray-600 hover:text-gray-900" />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-auto flex justify-center mt-4 md:mt-0">
            <div className="space-x-4">
              <Link href={"/"} passHref>
                <span className="text-gray-600 hover:text-gray-900">Home</span>
              </Link>
              <Link href={"/about"} passHref>
                <span className="text-gray-600 hover:text-gray-900">
                  About Us
                </span>
              </Link>
              <Link href={"/contact"} passHref>
                <span className="text-gray-600 hover:text-gray-900">
                  Contact Us
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="bg-slate-400 justify-end w-full h-10">
          <p className="text-white flex justify-center mt-2">
            <span className="font-semibold">
              Copyright 2022; Created by Fareed
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
