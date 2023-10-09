"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import "./header.css";

import Logo from "app/logo.png";
import betting from "./betting.png";
import casino from "./casino.png";
import crypto from "./crypto.png";
import fintech from "./fintech.png";
import game from "./game.png";
import payment from "./payment.png";
import token from "./token.png";
import ecom from "./ecom.png";
import Ham from "@/Components/ham.jsx";
import X from "@/Components/x.jsx";

import { Lexend } from "next/font/google";
const lexend = Lexend({ subsets: ["latin"] });

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <main className="bg-transparent">
      <header className="lg:h-[8vh] h-[7vh] flex justify-center items-center fixed w-[100vw] z-[9999] nav-bg">
        <nav className="flex items-center justify-between w-[95%] md:w-[82%] ">
          <div id="logo" className="scale-[0.85] lg:scale-100 relative z-[100]">
            <Link href="/" className="flex items-center gap-2">
              {/* <img src="logo.png" alt="logo" className="h-[80%]" /> */}
              <Image src={Logo} alt="logo" width={50} />
              <p className="text-xl font-extrabold">Xettle</p>
            </Link>
          </div>
          <div id="links" className="flex items-center justify-between">
            <ul
              className={`nav-links fixed gap-[0.5vw] transition-all duration-500 block lg:static lg:inline-flex lg:h-auto lg:w-auto lg:max-w-none left-0 h-[100vh] w-[100%] max-w-[350px} overflow-y-auto lg:top-0 ${
                navbar ? "lgnav" : "top-[-110vh] "
              }`}
            >
              <li className="rounded-lg hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all text-[4rem] lg:text-[1rem]">
                <Link href="/" onClick={() => setNavbar(!navbar)}>
                  Home
                </Link>
              </li>
              <li className="rounded-lg lg:hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all text-[4rem] lg:text-[1rem]">
                <p className="cursor-pointer whitespace-nowrap">
                  Services &#8595;
                </p>
                <div className="static hidden transition-all opacity-0 dropdown ">
                  <div className="absolute lg:h-10 lg:w-[40rem] lg:translate-x-[-30%] transition-all"></div>

                  <div className={lexend.className}>
                    <div className=" bg-transparent relative transition-all shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] lg:absolute lg:min-w-[40rem] lg:min-h-[15rem] lg:translate-x-[-45%] lg:flex lg:justify-evenly lg:items-center lg:gap-10 lg:rounded-2xl lg:mt-10 lg:bg-white ">
                      <ul className="lg:w-[40%]">
                        <li className="flex items-center justify-start rounded-lg hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all my-3 text-[1rem]">
                          <Image
                            src={crypto}
                            alt="crypto"
                            width={45}
                            className="hidden lg:block"
                          />
                          <Link
                            href="/crypto-excng"
                            className="px-3"
                            onClick={() => setNavbar(!navbar)}
                          >
                            Crypto Exchange Development
                          </Link>
                        </li>
                        <li className="flex items-center justify-start rounded-lg hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all my-3 text-[1rem]">
                          <Image
                            src={fintech}
                            alt="fintech"
                            width={45}
                            className="hidden lg:block"
                          />
                          <Link
                            href="/fintech"
                            className="px-3"
                            onClick={() => setNavbar(!navbar)}
                          >
                            Fin-Tech Software
                          </Link>
                        </li>
                        <li className="flex items-center justify-start rounded-lg hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all my-3 text-[1rem]">
                          <Image
                            src={game}
                            alt="game"
                            width={45}
                            className="hidden lg:block"
                          />
                          <Link
                            href="/games"
                            className="px-3"
                            onClick={() => setNavbar(!navbar)}
                          >
                            Games of Skill And Chances
                          </Link>
                        </li>
                        <li className="flex items-center justify-start rounded-lg hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all my-3 text-[1rem]">
                          <Image
                            src={casino}
                            alt="casino"
                            width={45}
                            className="hidden lg:block"
                          />
                          <Link
                            href="/casino"
                            className="px-3"
                            onClick={() => setNavbar(!navbar)}
                          >
                            Crypto Casino Development
                          </Link>
                        </li>
                      </ul>
                      <ul className="lg:w-[40%]">
                        <li className="flex items-center justify-start rounded-lg hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all my-3 text-[1rem]">
                          <Image
                            src={betting}
                            alt="bettng"
                            width={45}
                            className="hidden lg:block"
                          />
                          <Link
                            href="/betting"
                            className="px-3"
                            onClick={() => setNavbar(!navbar)}
                          >
                            Sports / fantasy betting Softwares
                          </Link>
                        </li>
                        <li className="flex items-center justify-start rounded-lg hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all my-3 text-[1rem]">
                          <Image
                            src={token}
                            alt="token"
                            width={40}
                            className="hidden lg:block"
                          />
                          <Link
                            href="/crypto-token"
                            className="px-3"
                            onClick={() => setNavbar(!navbar)}
                          >
                            Crypto Project / Token development
                          </Link>
                        </li>
                        <li className="flex items-center justify-start rounded-lg hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all my-3 text-[1rem]">
                          <Image
                            src={ecom}
                            alt="ecom"
                            width={50}
                            className="hidden lg:block"
                          />
                          <Link
                            href="/ecom"
                            className="px-3"
                            onClick={() => setNavbar(!navbar)}
                          >
                            E-comm development
                          </Link>
                        </li>
                        <li className="flex items-center justify-start rounded-lg hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all my-3 text-[1rem]">
                          <Image
                            src={payment}
                            alt="payment"
                            width={45}
                            className="hidden lg:block"
                          />
                          <Link
                            href="/payment"
                            className="px-3"
                            onClick={() => setNavbar(!navbar)}
                          >
                            Payment Gateway
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="rounded-lg hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all text-[4rem] lg:text-[1rem]">
                <Link
                  href="/contact"
                  rel="preload"
                  onClick={() => setNavbar(!navbar)}
                >
                  Contact
                </Link>
              </li>
              <li className="rounded-lg hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all text-[4rem] lg:text-[1rem]">
                <Link
                  href="/about"
                  className=" whitespace-nowrap"
                  onClick={() => setNavbar(!navbar)}
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div id="cta" className="flex items-center">
            {/* <button className="w-32 h-10 bg-[#7EFE34] rounded-[0.5rem] scale-[0.85] lg:scale-100">
              Book a Demo
            </button> */}
            <Link
              href="/contact"
              className=" px-[0.7rem] py-[0.7rem] rounded-lg text-white mx-auto bg-[#7EFE34] "
            >
              Book a Demo
            </Link>
            <button
              onClick={() => setNavbar(!navbar)}
              id="menu-icon"
              className="relative inline-flex z-[1000]"
            >
              {navbar ? <X /> : <Ham />}
            </button>
          </div>
        </nav>
      </header>
    </main>
  );
};

export default Header;
