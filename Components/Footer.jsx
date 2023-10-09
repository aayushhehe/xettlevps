import React from "react";
import "./footer.css";

import f from "./f.png";
import i from "./i.png";
import li from "./li.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <main>
      <footer
        id="footer"
        class="relative min-h-[35vh] flex flex-col justify-between pt-4"
      >
        <div class="relative h-[55vh] md:h-[65%] w-[100%] flex flex-wrap justify-evenly items-center">
          <div class="md:h-[80%] h-[35%] w-[80%] md:w-[40%]">
            <p class="text-white text-[1.1rem] md:text-[1.5rem]">
              Subscribe to newsletter and stay in touch with the latest.
            </p>
            <form class="relative flex items-center mt-[7%]" action="">
              <div class="input-div md:w-[80%] w-[100%]">
                <input
                  type="email"
                  id="email-id"
                  name="email-id"
                  class="input__email"
                  placeholder="E-mail"
                  required=""
                />
                <button class="button">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 74 74"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="37"
                      cy="37"
                      r="35.5"
                      stroke="black"
                      stroke-width="3"
                    ></circle>
                    <path
                      d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                      fill="black"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <div class="relative md:h-[80%] h-[35%] w-[40%] md:w-[10%] text-white md:mt-0 mt-[-20%]">
            <div class="relative">
              <h2 class="font-bold text-[1.1rem] md:text-[1.5rem]">
                Quick Links
              </h2>
              <ul>
                <li>
                  <a href="/" class="m-0 leading-8 nav-item text-[0.679]">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    class="m-0 leading-8 nav-item text-[0.679]"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/about" class="m-0 leading-8 nav-item text-[0.679]">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    class="m-0 leading-8 nav-item text-[0.679]"
                  >
                    Book a Demo Now!
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:h-[80%] h-[35%] w-[20%] relative md:mt-0 mt-[-20%]">
            <ul class="left-[20%] relative flex flex-col gap-3">
              <li>
                <a href="#">
                  <Image src={f} width={25} alt="img" />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image src={i} width={25} alt="img" />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image src={li} width={25} alt="img" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-square-facebook text-[2.0rem] text-[#d8d8d8] transition-all hover:text-[#4867aa] hover:scale-125"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="relative bottom-0 w-[100%] bg-[#d9d9d9] flex flex-wrap gap-1 items-center justify-center text-[0.7rem] leading-10">
          © 2023, Xettle Technologies
        </div>
      </footer>
    </main>
  );
};
