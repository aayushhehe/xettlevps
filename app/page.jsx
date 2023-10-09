import React, { lazy } from "react";
import Link from "next/link";
import { Lexend } from "next/font/google";
const lexend = Lexend({ subsets: ["latin"] });
import Image from "next/image";

import "./landing.css";

import gateway from "./gateway.png";
import stop from "./stop.png";
import tailored from "./tailored.png";
import Contour from "@/Components/contour.jsx";
import Herolottie from "@/Components/herolottie.jsx";
import Herobg from "@/Components/herobg.jsx";

const page = () => {
  return (
    <main className="bg-[#f9fbff] relative z-[-9999]">
      <section
        id="hero"
        className="relative min-h-[100vh] w-[100vw] pt-[20%] px-[3%] grid grid-cols-1 md:pt-[10%] lg:grid-cols-2 lg:place-content-center lg:pt-[5%] xl:px-[10%]"
      >
        {/* <video
          className="absolute h-[100%] w-[100%] z-[-1] object-cover blur-[150px] opacity-90 md:opacity-70 md:h-[100%] md:w-[100%]"
          src="https://cdn.discordapp.com/attachments/928251442127601694/1159538074812960808/Untitled_online-video-cutter.com.mp4?ex=653162fc&is=651eedfc&hm=9bc91ed98ae28da3e3d0ecacc58fb23500c2ec395856b9524cadc6714a930679&"
          autoPlay
          muted
          loop
        ></video> */}
        <div className="absolute h-[100%] w-[100%] z-[-1] blur-[65px] opacity-90 object-cover md:h-[100%] md:w-[100%]">
          <Herobg />
        </div>
        <div className="flex items-center">
          <div className={lexend.className}>
            <h1 className="text-[2.3rem] text-center lg:text-left lg:text-[3rem]">
              Crafting Digital Excellence in{" "}
              <span className="whitespace-nowrap text-[#015EFE]">Crypto</span>,{" "}
              <span className="whitespace-nowrap text-[#015EFE]">Fin-Tech</span>
              , and <span className="whitespace-nowrap beyond">Beyond.</span>
            </h1>
            <p className="text-center text-[rgba(0,_0,_0,_0.70)] pt-3 lg:text-left lg:text-[1.1rem]">
              At Xettle, we are dedicated to revolutionizing the realms of
              finance and software development. With a team of seasoned experts
              and a commitment to innovation, we offer a comprehensive suite of
              services that cater to diverse needs across industries.
            </p>
            <div className="mt-8 text-center lg:text-left h-fit">
              <Link
                href="/contact"
                className="get-started px-[0.7rem] py-[0.7rem] rounded-lg text-white mt-8 mx-auto bg-[linear-gradient(71deg,_#3445e5_21.66%,_rgba(126,_254,_52,_0.92)_178.45%)"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Herolottie />
        </div>
      </section>
      <section
        id="usp"
        className="min-h-[100vh] w-[100vw] px-[5%] pt-16 xl:px-[10%]"
      >
        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 md:grid-rows-[repeat(3,_minmax(35vh,1fr))]">
          <div className="w-[90%] pt-[67.5%] relative flex justify-center items-center">
            <div className="h-[80%] w-[90%] absolute translate-y-[-55%] usp-card flex justify-center">
              <Image
                src={gateway}
                width={500}
                quality={100}
                className="translate-y-[-20%]"
                alt="img"
              />
            </div>
          </div>
          <div className="w-[90%] pt-[65%] relative flex justify-center items-center">
            <div className="h-[80%] w-[90%] absolute translate-y-[-60%] flex items-center">
              <div>
                <h2 className="text-[1.4rem] font-medium lg:text-[2rem]">
                  Simple and Easy Gateways
                </h2>
                <div className={lexend.className}>
                  <p className="py-3 opacity-75 lg:text-[1.1rem]">
                    Simple and easy payment gateways through Xettle ensure
                    hassle-free transactions. Securely accept payments online or
                    in-person, enhancing your business&apos;s financial
                    convenience and customer satisfaction.
                  </p>
                  <Link
                    href="/contact"
                    className="text-[#015EFE] text-[1.1rem]"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[90%] pt-[67.5%] relative flex justify-center items-center">
            <div className="h-[80%] w-[90%] absolute translate-y-[-55%] usp-card flex justify-center">
              <Image
                src={stop}
                width={500}
                quality={100}
                className="scale-90"
                alt="img"
              />
            </div>
          </div>
          <div className="w-[90%] pt-[65%] relative flex justify-center items-center">
            <div className="h-[80%] w-[90%] absolute translate-y-[-60%] flex items-center">
              <div>
                <h2 className="text-[1.4rem] font-medium lg:text-[2rem]">
                  One stop Solution
                </h2>
                <div className={lexend.className}>
                  <p className="py-3 opacity-75 lg:text-[1.1rem]">
                    At Xettle, we understand the importance of simplicity and
                    efficiency in today&apos;s fast-paced world. That&apos;s why
                    we offer a comprehensive "one-stop solution" designed to
                    streamline your financial and software development needs.
                  </p>
                  <Link
                    href="/contact"
                    className="text-[#015EFE] text-[1.1rem]"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[90%] pt-[67.5%] relative flex justify-center items-center">
            <div className="h-[80%] w-[90%] absolute translate-y-[-55%] usp-card flex justify-center">
              <Image
                src={tailored}
                width={500}
                quality={100}
                className="translate-y-[-20%] scale-90"
                alt="img"
              />
            </div>
          </div>
          <div className="w-[90%] pt-[65%] relative flex justify-center items-center">
            <div className="h-[80%] w-[90%] absolute translate-y-[-60%] flex items-center">
              <div>
                <h2 className="text-[1.4rem] font-medium lg:text-[2rem]">
                  Tailored according to your needs
                </h2>
                <div className={lexend.className}>
                  <p className="py-3 opacity-75 lg:text-[1.1rem]">
                    Our services are meticulously tailored to meet your unique
                    needs, ensuring a perfect fit for your business goals and
                    challenges.
                  </p>
                  <Link
                    href="/contact"
                    className="text-[#015EFE] text-[1.1rem]"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="dev"
        className="min-h-[50vh] w-[100vw] px-[5%] pt-16 xl:px-[10%] py-[10%] pb-[5%] mt-[7%] relative"
      >
        <div className="w-[100%] h-[100%] absolute z-[-1] top-0 left-0">
          <Contour />
        </div>
        <div className="grid grid-cols-1 text-white place-items-center md:grid-cols-2 md:grid-rows-1">
          <div>
            <h2 className="text-[2rem] font-bold text-center md:text-left">
              Dev Friendly Systems
            </h2>
            <p className="py-3 text-center opacity-75 md:text-left w-[90%] lg:text-[1.1rem] font-medium">
              Our development-friendly system is designed with programmers in
              mind, offering intuitive tools, clear documentation, and robust
              APIs, empowering developers to work efficiently and create
              outstanding solutions.
            </p>
          </div>
          <div className="w-[100%]">
            <div class="containerhome mx-auto mt-3 w-[90%] md:w-[40vw] lg:w-[30vw]">
              <div class="terminal_toolbar">
                <div class="butt">
                  <button class="btn btn-color"></button>
                  <button class="btn"></button>
                  <button class="btn"></button>
                </div>
                <p class="user">xettle@admin: ~</p>
                <div class="add_tab">+</div>
              </div>
              <div class="terminal_body">
                <div class="terminal_promt">
                  <span class="terminal_user">xettle@admin:</span>
                  <span class="terminal_location">~</span>
                  <span class="terminal_bling">$</span>
                  <span class="terminal_cursor"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="discover"
        className="min-h-[50vh] w-[100vw] px-[5%] py-16 xl:px-[10%] relative"
      >
        <div className="w-[100%] h-[100%] absolute z-[-1] top-0 left-0 blur-[65px]">
          <Herobg />
        </div>
        <div className="grid grid-cols-1 text-black place-items-center lg:grid-cols-2">
          <div>
            <h1 className="text-[2rem] font-bold">
              Discover<span className="text-[#015dfd]"> Xettle</span>
            </h1>
            <p className="py-3 opacity-75 w-[90%] lg:text-[1.1rem] font-medium">
              At Xettle, we are dedicated to revolutionizing the realms of
              finance and software development. With a team of seasoned experts
              and a commitment to innovation, we offer a comprehensive suite of
              services that cater to diverse needs across industries.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-[repeat(2,45vw)] grid-rows-[repeat(8,_minmax(0,_1fr))] gap-2 lg:grid-cols-[repeat(2,minmax(0,20vw))]">
              <div className="rounded-2xl w-auto h-auto bg-[#D7EAFF] p-6 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] flex items-start justify-center item1">
                <p className="text-center text-[1.7rem] font-bold my-auto text-black">
                  70+ <br />
                  <span className="font-medium text-[1.5rem]">
                    Satisfied Clients
                  </span>
                </p>
              </div>
              <div className="rounded-2xl w-auto h-auto bg-[#56695A] p-6 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] flex items-start justify-center item2">
                <p className="text-center text-[1.7rem] font-bold text-white my-auto">
                  50+ <br />
                  <span className="font-medium text-[1.5rem]">
                    Active Projects
                  </span>
                </p>
              </div>
              <div className="rounded-2xl w-auto h-auto bg-[#081121] p-6 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] flex items-start justify-center item3">
                <p className="text-center text-[1.7rem] font-medium text-white my-auto">
                  Expert Team
                </p>
              </div>
              <div className="rounded-2xl w-auto h-auto bg-[#113884] p-6 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] flex items-start justify-center item4">
                <p className="text-center text-[1.7rem] font-bold text-white my-auto">
                  95%+ <br />
                  <span className="font-medium text-[1.5rem]">
                    Clients Retention Rate
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
