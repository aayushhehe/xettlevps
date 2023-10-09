"use client";
import React from "react";
import Link from "next/link";
import "./crypto.css";
import exchange from "./exchange.png";
import liquidity from "./liquidity.png";
import rules from "./rules.png";
import Image from "next/image";
import innovation from "./innovation.png";
import staking from "./staking.png";
import Lottie from "@/Components/cryptolottie.jsx";
import ot from "./optionstrading.png";
import ft from "./futuretrading.png";
import Bg from "@/Components/blockbg.jsx";

import { Lexend } from "next/font/google";
const lexend = Lexend({ subsets: ["latin"] });

const page = () => {
  return (
    <main className="bg-[#ffffff] relative z-[-9999]">
      <div className="bg-[#FFFFFF]">
        <section
          id="hero"
          className="relative z-[2] bg-transparent min-h-[100vh] w-[100vw] pt-[20%] px-[3%] grid grid-cols-1 md:pt-[10%] lg:grid-cols-2 lg:place-content-center lg:pt-[5%] xl:px-[10%]"
        >
          {/* <div className="absolute h-[100%] w-[100%] z-[-1] blur-[65px] opacity-90 object-cover md:h-[100%] md:w-[100%]">
          <Herobg />
        </div> */}
          <div className="w-[100%] h-[100%] absolute z-[-1] blur-[15px] top-0 left-0">
            <Bg />
          </div>
          <div className="flex items-center">
            <div className={`${lexend.className}`}>
              <h1 className="text-[2.3rem] text-center lg:text-left lg:text-[3rem]">
                <span className="whitespace-nowrap text-[#015EFE]">
                  Crypto{" "}
                </span>
                Exchange Development.
              </h1>
              <p className="text-center text-[rgba(0,_0,_0,_0.70)] pt-3 lg:text-left lg:text-[1.1rem]">
                At Xettle, we are passionate about bringing innovative digital
                experiences to life. We specialize in developing web
                applications and mobile apps while also managing them
                seamlessly. Today, we invite you to explore a unique dimension
                of our expertise - Game Development.
              </p>
            </div>
          </div>
          <div>
            <Lottie />
          </div>
        </section>
        <div className="relative py-8 bg-transparent gradient-bg">
          {/* <div className="w-[100%] h-[100%] absolute top-0 left-0 z-[-1] gradient-bg"></div> */}
          <h2 className="md:text-[40px] text-[24px] font-medium space-x-2 flex items-center xl:w-[80%] w-[90%] mx-auto pb-8">
            <p className="text-[#fff]">Services</p>
            <p>Included</p>
          </h2>
          {/* mobile responsive cards start */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col card w-[90vw] mx-auto md:hidden bg-white rounded-2xl shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)]">
              <h2 className="font-medium text-[15px] p-5">
                Custom Exchange Solutions
              </h2>
              <div className="h-fit  mx-[22px] my-[20px] space-y-[37px]">
                <p className="text-[15px] font-medium opacity-75">
                  We design and develop cryptocurrency exchange platforms from
                  the ground up, ensuring scalability, performance, and
                  compliance with industry standards.
                </p>
              </div>
            </div>
            <div className="flex flex-col card w-[90vw] mx-auto md:hidden bg-white rounded-2xl shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)]">
              <h2 className="font-medium text-[15px] p-5">
                Safety and Security First
              </h2>
              <div className="h-fit  mx-[22px] my-[20px] space-y-[37px]">
                <p className="text-[15px] font-medium opacity-75">
                  Safeguard your users&apos; assets with top-notch security
                  features, including multi-layer authentication, cold storage,
                  and real-time monitoring against threats.
                </p>
              </div>
            </div>
            <div className="flex flex-col card w-[90vw] mx-auto md:hidden bg-white rounded-2xl shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)]">
              <h2 className="font-medium text-[15px] p-5">
                User-Friendly Interface
              </h2>

              <div className="h-fit  mx-[22px] my-[20px] space-y-[37px]">
                <p className="text-[15px] font-medium opacity-75">
                  Enhance user adoption with an intuitive, user-friendly
                  interface that makes trading and managing assets a seamless
                  experience.
                </p>
              </div>
            </div>
            <div className="flex flex-col card w-[90vw] mx-auto md:hidden bg-white rounded-2xl shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)]">
              <h2 className="font-medium text-[15px] p-5">
                Liquidity Management
              </h2>

              <div className="h-fit  mx-[22px] my-[20px] space-y-[37px]">
                <p className="text-[15px] font-medium opacity-75">
                  Ensure ample liquidity for your exchange by implementing
                  efficient trading algorithms and liquidity management
                  solutions.
                </p>
              </div>
            </div>
            <div className="flex flex-col card w-[90vw] mx-auto md:hidden bg-white rounded-2xl shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)]">
              <h2 className="font-medium text-[15px] p-5">
                Regulatory Compliance
              </h2>

              <div className="h-fit  mx-[22px] my-[20px] space-y-[37px]">
                <p className="text-[15px] font-medium opacity-75">
                  Stay on the right side of the law with compliance features
                  that help you navigate the evolving regulatory landscape.
                </p>
              </div>
            </div>
            <div className="flex flex-col card w-[90vw] mx-auto md:hidden bg-white rounded-2xl shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)]">
              <h2 className="font-medium text-[15px] p-5">
                24/7 Help and Support
              </h2>

              <div className="h-fit  mx-[22px] my-[20px] space-y-[37px]">
                <p className="text-[15px] font-medium opacity-75">
                  Our dedicated support team is here around the clock to assist
                  you and your users with any queries or issues.
                </p>
              </div>
            </div>
          </div>
          {/* mobile responsive card ends */}
          <div className="xl:w-[80%] w-[90%] mx-auto md:flex hidden justify-between mb-4">
            <div className="flex card lg:w-[69%] w-[49%] rounded-2xl shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] bg-white">
              <div className="h-[339px] xl:w-[50%] lg:w-[60%] mx-[22px] my-[20px] space-y-6 lg:space-y-[37px]">
                <h2 className="font-medium lg:text-2xl text-xl max-w-xs lg:max-w-[18rem]">
                  Custom Exchange Solutions
                </h2>
                <p className="text-xl font-medium opacity-75 ">
                  We design and develop cryptocurrency exchange platforms from
                  the ground up, ensuring scalability, performance, and
                  compliance with industry standards.
                </p>
              </div>
              <Image
                src={exchange}
                width="982"
                height="464"
                className="w-[40%] lg:flex hidden m-auto"
                alt="img"
              />
            </div>
            <div className="card lg:w-[30%] w-[49%] h-full rounded-2xl shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] bg-white">
              <div className="h-[339px] w-full mx-[22px] my-[20px] space-y-6 lg:space-y-[37px]">
                <h2 className="font-medium lg:text-2xl text-xl max-w-[14rem] lg:max-w-[16rem]">
                  Safety and Security First
                </h2>
                <p className="xl:max-w-[20rem] max-w-[18rem] text-xl font-medium opacity-75">
                  Safeguard your users&apos;s assets with top-notch security
                  features, including multi-layer authentication, cold storage,
                  and real-time monitoring against threats.
                </p>
              </div>
            </div>
          </div>
          <div className="xl:w-[80%] w-[90%] mx-auto md:flex flex-row-reverse hidden justify-between mb-4">
            <div className="flex card lg:w-[69%] w-[49%] rounded-2xl shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] bg-white">
              <div className="h-[339px] xl:w-[50%] lg:w-[60%] mx-[22px] my-[20px] space-y-6 lg:space-y-[37px]">
                <h2 className="font-medium lg:text-2xl text-xl max-w-xs lg:max-w-[18rem]">
                  User-Friendly Interface
                </h2>
                <p className="text-xl font-medium opacity-75">
                  Enhance user adoption with an intuitive, user-friendly
                  interface that makes trading and managing assets a seamless
                  experience.
                </p>
              </div>
              <Image
                src={liquidity}
                width="982"
                height="464"
                className="w-[40%] lg:flex hidden m-auto"
                alt="img"
              />
            </div>
            <div className="card lg:w-[30%] w-[49%] h-full rounded-2xl shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] bg-white">
              <div className="h-[339px] w-full mx-[22px] my-[20px] space-y-6 lg:space-y-[37px]">
                <h2 className="font-medium lg:text-2xl text-xl max-w-[14rem] lg:max-w-[16rem]">
                  Liquidity Management
                </h2>
                <p className="xl:max-w-[20rem] max-w-[18rem] text-xl font-medium opacity-75">
                  Ensure ample liquidity for your exchange by implementing
                  efficient trading algorithms and liquidity management
                  solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="xl:w-[80%] w-[90%] mx-auto md:flex hidden justify-between mb-4">
            <div className="flex card lg:w-[69%] w-[49%] rounded-2xl shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] bg-white">
              <div className="h-[339px] xl:w-[50%] lg:w-[60%] mx-[22px] my-[20px] space-y-6 lg:space-y-[37px]">
                <h2 className="font-medium lg:text-2xl text-xl max-w-xs lg:max-w-[18rem]">
                  Regulatory Compliance
                </h2>
                <p className="text-xl font-medium opacity-75">
                  Stay on the right side of the law with compliance features
                  that help you navigate the evolving regulatory landscape.
                </p>
              </div>
              <Image
                src={rules}
                width="982"
                height="464"
                className="w-[40%] lg:flex hidden m-auto"
                alt="img"
              />
            </div>
            <div className="card lg:w-[30%] w-[49%] h-full rounded-2xl shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] bg-white">
              <div className="h-[339px] w-full mx-[22px] my-[20px] space-y-6 lg:space-y-[37px]">
                <h2 className="font-medium lg:text-2xl text-xl max-w-[14rem] lg:max-w-[16rem]">
                  24/7 Help and Support
                </h2>
                <p className="xl:max-w-[20rem] max-w-[18rem] text-xl font-medium opacity-75">
                  Our dedicated support team is here around the clock to assist
                  you and your users with any queries or issues.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="specialisation">
          <h3>Features</h3>
          <div className="card_container">
            <div className="h-full card rounded-2xl w-full backdrop-blur-sm py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] md:flex md:items-center md:justify-between lg:h-[100%]">
              <div>
                <h2 className="text-[1.5rem] font-medium">Market Overview</h2>
                <p>
                  Our Market Overview: Get real-time data and insights for
                  informed cryptocurrency trading decisions.
                </p>
              </div>
            </div>
            <div className="h-full card rounded-2xl w-full backdrop-blur-sm py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] md:flex md:items-center md:justify-between lg:h-[100%]">
              <div>
                <h2 className="text-[1.5rem] font-medium">Spot Trading</h2>
                <p>
                  Our Spot Trading: Swift, transparent, and low-cost
                  cryptocurrency trading.
                </p>
              </div>
              <Image
                src={innovation}
                width={120}
                className="hidden object-contain md:block "
                alt="img"
              />
            </div>
            <div className="h-full card rounded-2xl w-full backdrop-blur-sm py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] md:flex md:items-center md:justify-between lg:h-[100%]">
              <div>
                <h2 className="text-[1.5rem] font-medium">Margin Trading</h2>
                <p>
                  Our Margin Trading: Leverage your capital for greater trading
                  potential with advanced risk management.
                </p>
              </div>
            </div>
          </div>
          <div className="card_container">
            <div className="h-full card rounded-2xl w-full backdrop-blur-sm py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] md:flex md:items-center md:justify-between lg:h-[100%]">
              <div>
                <h2 className="text-[1.5rem] font-medium">Futures Trading</h2>
                <p>
                  Our Futures Trading: Standardized contracts for hedging and
                  speculation.
                </p>
              </div>
              <Image
                src={ft}
                width={120}
                className="hidden object-contain md:block "
                alt="img"
              />
            </div>
            <div className="h-full card rounded-2xl w-full backdrop-blur-sm py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] md:flex md:items-center md:justify-between lg:h-[100%]">
              <div>
                <h2 className="text-[1.5rem] font-medium">P2P Trading</h2>
                <p>
                  Our P2P Platform: Secure and direct cryptocurrency
                  transactions with diverse payment options.
                </p>
              </div>
            </div>
            <div className="h-full card rounded-2xl w-full backdrop-blur-sm py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] md:flex md:items-center md:justify-between lg:h-[100%]">
              <div>
                <h2 className="text-[1.5rem] font-medium">Options Trading</h2>
                <p>
                  Our Options Trading: Flexible contracts for tailored
                  strategies and risk management.
                </p>
              </div>
              <Image
                src={ot}
                width={120}
                className="hidden object-contain md:block "
                alt="img"
              />
            </div>
          </div>
          <div className="card_container">
            <div className="h-full card rounded-2xl w-full backdrop-blur-sm py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] md:flex md:items-center md:justify-between lg:h-[100%]">
              <div>
                <h2 className="text-[1.5rem] font-medium">Launchpad</h2>
                <p>
                  Our Launchpad introduces new tokens, fostering diversity. We
                  generate revenue, prioritize regulatory compliance, and tackle
                  security challenges, ensuring a secure token launch
                  experience.
                </p>
              </div>
            </div>
            <div className="h-full card rounded-2xl w-full backdrop-blur-sm py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] md:flex md:items-center md:justify-between lg:h-[100%]">
              <div>
                <h2 className="text-[1.5rem] font-medium">Staking</h2>
                <p>
                  Our staking service enhances engagement, passive income, and
                  security, managing infrastructure and compliance for a
                  seamless experience.
                </p>
              </div>
              <Image
                src={staking}
                width={120}
                className="hidden object-contain md:block "
                alt="img"
              />
            </div>
            <div className="h-full card rounded-2xl w-full backdrop-blur-sm py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] md:flex md:items-center md:justify-between lg:h-[100%]">
              <div>
                <h2 className="text-[1.5rem] font-medium">Swap/OTC</h2>
                <p>
                  Our Swap/OTC Launchpad boosts liquidity, token variety, and
                  revenue. We ensure regulatory compliance while tackling
                  security and market volatility challenges.
                </p>
              </div>
            </div>
          </div>
          <p className="more">and more...</p>
        </section>
        <div className="pt-20 w-[80%] mx-auto">
          <h2 className="md:text-[50px] text-[38px] font-extralight pb-[20px] md:pb-[73px]">
            FAQs
          </h2>
          <div className="grid gap-6 md:grid-cols-3 md:gap-12">
            <div>
              <h2 className="md:text-3xl text-[20px] font-extralight">
                How Secure is the exchange?
              </h2>
              <p className="md:text-xxl text-[15px] font-extralight max-w-[26rem] py-3">
                Our cryptocurrency exchange platform is backed by
                top-of-the-line security measures, ensuring the complete safety
                and confidentiality of all transactions.
              </p>
            </div>
            <div>
              <h2 className="md:text-3xl text-[20px] font-extralight">
                Is your platform user-friendly?
              </h2>
              <p className="md:text-xxl text-[15px] font-extralight max-w-[26rem] py-3">
                Absolutely, our platform is designed with user experience in
                mind. Both beginners and experienced traders will find
                navigating our exchange platform a breeze.
              </p>
            </div>
            <div>
              <h2 className="md:text-3xl text-[20px] font-extralight lg:whitespace-nowrap">
                Can I customize my exchange?
              </h2>
              <p className="md:text-xxl text-[15px] font-extralight max-w-[26rem] py-3">
                Yes, we offer tailor-made solutions for various business
                requirements. Our team will work closely with you to create a
                customized exchange platform that fits your needs.
              </p>
            </div>
          </div>
        </div>
        <div className="md:pt-16 py-20 text-center flex flex-col justify-center items-center space-y-10 md:space-y-[31px]">
          <h2 className="md:text-[36px] text-[24px]">Contact Us</h2>
          <p className="md:text-[20px] text-[15px] font-base max-w-[18rem] md:max-w-2xl">
            Ready to elevate your crypto trading experience with our
            state-of-the-art buisness solutions? Contact us today and let&apos;s
            make it happen.
          </p>
          <Link
            href="/contact"
            className="w-[8.5rem] h-[2.9rem] items-center text-white mt-3 mx-auto rounded-lg bg-[linear-gradient(71deg,_#3445e5_21.66%,_rgba(126,_254,_52,_0.92)_178.45%)]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
};

export default page;
