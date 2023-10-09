import Image from "next/image";
import React from "react";
import Link from "next/link";

import { Lexend } from "next/font/google";
const lexend = Lexend({ subsets: ["latin"] });

import "./game.css";

import heroimg from "./gamehero.png";
import skill from "./gameskill.png";
import chances from "./gamechances.png";
import carrom from "./carrom.png";
import chess from "./chess.png";
import horse from "./horse.png";
import patti from "./patti.png";
import rummy from "./rummy.png";
import jack from "./jack.png";
import roulette from "./roulette.png";
import bingo from "./bingo.png";
import Gamelottie from "@/Components/gamelottie.jsx";

const page = () => {
  return (
    <main className="bg-[#f9fbff]">
      <section
        id="hero"
        className="relative bg-transparent min-h-[100vh] w-[100vw] pt-[20%] px-[3%] grid grid-cols-1 md:pt-[10%] lg:grid-cols-2 lg:place-content-center lg:pt-[5%] xl:px-[10%]"
      >
        {/* <div className="absolute h-[100%] w-[100%] z-[-1] blur-[65px] opacity-90 object-cover md:h-[100%] md:w-[100%]">
          <Herobg />
        </div> */}
        <div className="flex items-center">
          <div className={lexend.className}>
            <h1 className="text-[2.3rem] text-center lg:text-left lg:text-[3rem]">
              Games of{" "}
              <span className="whitespace-nowrap text-[#015EFE]">Skills</span>,{" "}
              And{" "}
              <span className="whitespace-nowrap text-[#015EFE]">Chances</span>.
            </h1>
            <p className="text-center text-[rgba(0,_0,_0,_0.70)] pt-3 lg:text-left lg:text-[1.1rem]">
              At Xettle, we are passionate about bringing innovative digital
              experiences to life. We specialize in developing web applications
              and mobile apps while also managing them seamlessly. Today, we
              invite you to explore a unique dimension of our expertise - Game
              Development.
            </p>
          </div>
        </div>
        <div>
          {/* <Image src={heroimg} width={1000} quality={100} /> */}

          <Gamelottie />
        </div>
      </section>
      <section
        id="description"
        className="min-h-[100vh] w-[100vw] px-[5%] pt-16 xl:px-[10%]"
      >
        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 md:grid-rows-[repeat(2,_minmax(35vh,1fr))]">
          <div className="relative item1">
            <h1 className="text-[2rem] font-medium">
              Games of <span className="text-[#015dfd]">Skills</span>
            </h1>
            <p className="py-3 opacity-75 lg:text-[1.1rem] xl:w-[90%]">
              Our skilled development team can help you create games that
              require strategic thinking, precision, and expertise. Whether it's
              classic board games like Chess, Carrom, or card games like Rummy
              and Teen Patti, we have the know-how to build engaging,
              skill-based gaming experiences. Want to develop a virtual Horse
              Racing simulation? We can do that too.
            </p>
          </div>
          <div className="relative p-[10%] xl:w-[35vw] item2">
            <Image src={skill} width={1000} alt="img" />
          </div>
          <div className="relative item3">
            <h1 className="text-[2rem] font-medium">
              Games of <span className="text-[#015dfd]">Chances</span>
            </h1>
            <p className="py-3 opacity-75 lg:text-[1.1rem] xl:w-[90%]">
              Our skilled development team can help you create games that
              require strategic thinking, precision, and expertise. Whether it's
              classic board games like Chess, Carrom, or card games like Rummy
              and Teen Patti, we have the know-how to build engaging,
              skill-based gaming experiences. Want to develop a virtual Horse
              Racing simulation? We can do that too.
            </p>
          </div>
          <div className="relative p-[10%] xl:w-[35vw] item4">
            <Image src={chances} width={1000} alt="img" />
          </div>
        </div>
      </section>
      <section
        id="games"
        className="min-h-[80vh] w-[100vw] px-[5%] pt-16 xl:px-[10%]"
      >
        <div className={lexend.className}>
          <h1 className="text-[2rem] font-medium text-center">
            <span className="text-[#015dfd]">Games</span> We Offer
          </h1>
        </div>
        <div>
          <h2 className="text-[1.5rem] font-medium text-center pt-6">
            Games of Skills
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <div>
              <div className="rounded-2xl w-28 h-28 bg-[#ffffff] p-4 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] flex items-start justify-center">
                <Image src={chess} width={200} alt="img" />
              </div>
              <p className="text-center text-[#373737]">Chess</p>
            </div>
            <div>
              <div className="rounded-2xl w-28 h-28 bg-[#ffffff] p-4 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] flex items-start justify-center">
                <Image src={carrom} width={200} alt="img" />
              </div>
              <p className="text-center text-[#373737]">Carrom</p>
            </div>
            <div>
              <div className="rounded-2xl w-28 h-28 bg-[#ffffff] p-4 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] flex items-start justify-center">
                <Image src={rummy} width={200} alt="img" />
              </div>
              <p className="text-center text-[#373737]">Rummy</p>
            </div>
            <div>
              <div className="rounded-2xl w-28 h-28 bg-[#ffffff] p-4 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] flex items-start justify-center">
                <Image src={patti} width={200} alt="img" />
              </div>
              <p className="text-center text-[#373737]">Teen Patti</p>
            </div>
            <div>
              <div className="rounded-2xl w-28 h-28 bg-[#ffffff] p-4 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] flex items-start justify-center">
                <Image src={horse} width={200} alt="img" />
              </div>
              <p className="text-center text-[#373737]">Horse Racing</p>
            </div>
          </div>
          <p className="text-right text-[0.8rem] font-medium text-[#373737] py-3 lg:pr-[10%] xl:pr-[20%]">
            and many more...
          </p>
        </div>
        <div>
          <h2 className="text-[1.5rem] font-medium text-center pt-6">
            Games of Chances
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <div>
              <div className="rounded-2xl w-28 h-28 bg-[#ffffff] p-4 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] flex items-start justify-center">
                <Image src={jack} width={200} alt="img" />
              </div>
              <p className="text-center text-[#373737]">Black Jack</p>
            </div>
            <div>
              <div className="rounded-2xl w-28 h-28 bg-[#ffffff] p-4 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] flex items-start justify-center">
                <Image src={roulette} width={200} alt="img" />
              </div>
              <p className="text-center text-[#373737]">Roulette</p>
            </div>
            <div>
              <div className="rounded-2xl w-28 h-28 bg-[#ffffff] p-4 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] flex items-start justify-center">
                <Image src={bingo} width={200} alt="img" />
              </div>
              <p className="text-center text-[#373737]">Bingo</p>
            </div>
          </div>
          <p className="text-right text-[0.8rem] font-medium text-[#373737] py-3 lg:pr-[20%] xl:pr-[30%]">
            and many more...
          </p>
        </div>
      </section>
      <section
        id="games"
        className="min-h-[30vh] w-[100vw] px-[5%] pt-16 xl:px-[10%]"
      >
        <h1 className="text-[2rem] font-medium text-center">
          Ready to Get Started?
        </h1>
        <p className="py-3 opacity-75 lg:text-[1.1rem] text-center">
          Explore the world of games of skill and chance with Xettle. Contact us
          today to turn your vision into reality.
        </p>
        <div className="text-center">
          <Link
            href="/contact"
            className=" px-[0.7rem] py-[0.7rem] rounded-lg text-white mt-8 mx-auto bg-[linear-gradient(71deg,_#3445e5_21.66%,_rgba(126,_254,_52,_0.92)_178.45%)"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
};

export default page;
