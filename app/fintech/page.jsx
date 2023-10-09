import Image from "next/image";
import React from "react";
import "./fintech.css";
// import hero from "./fintech-hero.png";
// import herom from "./fintech-herom.png";
import cross from "./cross.png";
import tick from "./tick.png";
import aeps from "./aeps.png";
import recharge from "./recharge.png";
import pan from "./pan.png";
import Contour from "@/Components/contour.jsx";
import cart from "./cart.png";
import Fintechlottie from "@/Components/fintechlottie.jsx";
import Link from "next/link";

const fintech = () => {
  return (
    <main className="bg-[#f9fbff]">
      <section
        id="hero"
        className="min-h-[90vh] w-[100vw] pt-[16%] px-[3%] flex flex-col items-center md:pt-[6%] md:px-[8%] pb-16"
      >
        <h1 className="text-[2.5rem] font-bold text-center">
          <span className="text-[#015dfd]">Fin-Tech</span> <br /> Softwares
        </h1>
        <div className="text-[#3c3d40]">
          <h3 className="text-center pt-[2rem] font-bold text-[1.2rem]">
            Unlock the Future of Finance with Fintech Software Solutions
          </h3>
        </div>
        {/* <Image
          src={hero}
          width={1000}
          className="mx-auto pt-[2rem] hidden md:block"
          quality={100}
        />
        <Image
          src={herom}
          width={1000}
          className="mx-auto pt-[2rem] block md:hidden"
          quality={100}
        /> */}
        <div className="w-[85vw] sm:w-[60vw] md:w-[40vw] xl:mt-[-10%] min-h-[20vh]">
          <Fintechlottie />
        </div>
        <div className="text-[#3c3d40]">
          <p className="pt-[2rem] text-center font-medium lg:px-[10%] xl:mt-[-6%]">
            At Xettle, we&apos;re passionate about driving innovation in the
            world of finance. Our cutting-edge fintech software solutions
            empower businesses and individuals alike to navigate the digital
            financial landscape with ease, efficiency, and security.
          </p>
        </div>

        <Link
          href="/contact"
          className=" px-[0.7rem] py-[0.7rem] rounded-lg text-white mt-8 mx-auto bg-[linear-gradient(71deg,_#3445e5_21.66%,_rgba(126,_254,_52,_0.92)_178.45%)"
        >
          Get Started
        </Link>
      </section>
      <section
        id="services"
        className="min-h-[100vh] w-[100vw] px-[5%] pt-4 lg:px-[8%] bg-transparent relative"
      >
        <div className="w-[100%] h-[100%] absolute z-[0] top-0 left-0 invert">
          <Contour />
        </div>
        {/* <div className="absolute h-[100%] w-[100%] z-[1] opacity-90">
          <Image src={contour} width={2800} className="transform translate-y-[-10%] translate-x-[-5%] absolute"/>
        </div> */}
        <h1 className="text-[2rem] font-medium">
          <span className="text-[#015dfd] relative z-[1]">Services</span>
        </h1>
        <div className="grid grid-cols-[1fr] gap-[1rem] pt-8 lg:grid-cols-5 xl:p-[5%]">
          <div className="rounded-2xl w-full h-fit backdrop-blur-sm py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] md:flex md:items-center md:justify-between lg:h-[100%] fitem1">
            <div className="md:w-[70%]">
              <h2 className="text-[1.5rem] font-medium ">AEPS</h2>
              <p className="text-0.92rem py-3 opacity-75">
                As an AEPS service provider, we offer a robust platform for
                secure Aadhaar Enabled Payment System (AEPS) transactions. Our
                services empower businesses to facilitate financial
                transactions, balance inquiries, and other banking services
                conveniently and efficiently. Join us to expand your service
                offerings and enhance financial inclusion.
              </p>
              <Link
                href="/contact"
                className=" px-[0.7rem] py-[0.7rem] rounded-lg text-white mt-8 mx-auto bg-[linear-gradient(71deg,_#3445e5_21.66%,_rgba(126,_254,_52,_0.92)_178.45%)"
              >
                Get Started
              </Link>
            </div>
            <Image
              src={aeps}
              width={150}
              className="hidden object-contain md:block "
              alt="img"
            />
          </div>
          <div className="rounded-2xl w-full h-fit backdrop-blur-sm py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] lg:h-[100%] fitem2">
            <h2 className="text-[1.5rem] font-medium">BBPS</h2>
            <p className="py-3 opacity-75 ">
              Our BBPS services streamline bill payments for individuals and
              businesses. We provide a comprehensive platform to process
              payments for various bills, including electricity, water, gas,
              telecom, and more. Partner with us to offer a convenient and
              centralized bill payment solution to your customers, making their
              lives easier and boosting your revenue streams.
            </p>
            <Link
              href="/contact"
              className=" px-[0.7rem] py-[0.7rem] rounded-lg text-white mt-8 mx-auto bg-[linear-gradient(71deg,_#3445e5_21.66%,_rgba(126,_254,_52,_0.92)_178.45%)"
            >
              Get Started
            </Link>
          </div>
          <div className="rounded-2xl w-full h-fit backdrop-blur-sm py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] md:flex md:items-center md:justify-between lg:h-[100%] fitem3">
            <div>
              <h2 className="text-[1.5rem] font-medium">DMT</h2>
              <p className="py-3 opacity-75 ">
                Our DMT services offer a secure and efficient way for
                individuals to transfer money within the country. We provide a
                user-friendly platform that allows customers to send and receive
                funds quickly, enabling financial transactions with ease and
                reliability. Join us to expand your financial service offerings
                and cater to the growing demand for domestic money transfers.
              </p>
              <Link
                href="/contact"
                className=" px-[0.7rem] py-[0.7rem] rounded-lg text-white mt-8 mx-auto bg-[linear-gradient(71deg,_#3445e5_21.66%,_rgba(126,_254,_52,_0.92)_178.45%)"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="rounded-2xl w-full h-fit backdrop-blur-sm py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] md:flex md:items-center md:justify-between lg:h-[100%] fitem4">
            <div className="md:w-[70%]">
              <h2 className="text-[1.5rem] font-medium">Recharge</h2>
              <p className="py-3 opacity-75 ">
                Our recharge services offer a hassle-free and convenient way for
                individuals to top up their mobile phones, DTH services, data
                plans, and more. We provide a user-friendly platform that allows
                customers to recharge prepaid services quickly and securely,
                ensuring they stay connected. Join us to expand your service
                offerings and cater to the ever-growing demand for mobile and
                DTH recharges.
              </p>
              <Link
                href="/contact"
                className=" px-[0.7rem] py-[0.7rem] rounded-lg text-white mt-8 mx-auto bg-[linear-gradient(71deg,_#3445e5_21.66%,_rgba(126,_254,_52,_0.92)_178.45%)"
              >
                Get Started
              </Link>
            </div>
            <Image
              src={recharge}
              width={150}
              className="hidden object-contain md:block"
              alt="img"
            />
          </div>
          <div className="rounded-2xl w-full h-fit backdrop-blur-sm py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] md:flex md:items-center md:justify-between lg:h-[100%] fitem5">
            <div className="md:w-[70%]">
              <h2 className="text-[1.5rem] font-medium">
                Aadhaar/ Pan Verification
              </h2>
              <p className="py-3 opacity-75 ">
                Our Aadhaar/PAN verification services provide a seamless and
                secure way to authenticate individuals and businesses. We offer
                a robust platform for instant Aadhaar and PAN card verification,
                ensuring compliance, reducing fraud, and enhancing trust in your
                financial transactions or business processes. Partner with us to
                access reliable verification solutions.
              </p>
              <Link
                href="/contact"
                className=" px-[0.7rem] py-[0.7rem] rounded-lg text-white mt-8 mx-auto bg-[linear-gradient(71deg,_#3445e5_21.66%,_rgba(126,_254,_52,_0.92)_178.45%)"
              >
                Get Started
              </Link>
            </div>
            <Image
              src={pan}
              width={130}
              className="hidden object-contain md:block"
              alt="img"
            />
          </div>
        </div>
      </section>
      <section
        id="packages"
        className="min-h-[100vh] w-[100vw] px-[5%] pt-16 md:px-[8%]"
      >
        <h1 className="text-[2rem] font-medium">
          <span className="text-[#015dfd]">Packages</span>
        </h1>
        <div id="b2b">
          <div>
            <h2 className="text-[1.5rem] font-medium pt-8">B2B</h2>
            <div className="grid grid-cols-1 gap-[1rem] pt-4 md:grid-cols-2">
              <div className="rounded-2xl w-full h-fit bg-[#F8FBFF] py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] m-auto">
                <h2 className="text-[1.5rem] font-medium text-center opacity-70 pb-3">
                  Standard
                </h2>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      AEPS
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      BBPS
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Account Opeaning
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Ofline Market Share
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      UPI Collection
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      PAN-UTI Software
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      NSDL Portal
                    </span>
                    <Image src={cross} width={30} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Domestic Money Transfer{" "}
                    </span>
                    <Image src={cross} width={30} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Hotel Booking Portal
                    </span>
                    <Image src={cross} width={30} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Bus Booking Portal
                    </span>
                    <Image src={cross} width={30} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Flight Booking Portal
                    </span>
                    <Image src={cross} width={30} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Account Opening
                    </span>
                    <Image src={cross} width={30} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Multi Recharge
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                </div>
              </div>
              <div className="rounded-2xl w-full h-fit bg-[#F8FBFF] py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] m-auto">
                <h2 className="text-[1.5rem] font-medium text-center text-[#F6A122] pb-3">
                  Premium
                </h2>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      AEPS
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      BBPS
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Account Opeaning
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Ofline Market Share
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      UPI Collection
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      PAN-UTI Software
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      NSDL Portal
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Domestic Money Transfer{" "}
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Hotel Booking Portal
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Bus Booking Portal
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Flight Booking Portal
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Account Opening
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Multi Recharge
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="Reseller">
          <div>
            <h2 className="text-[1.5rem] font-medium pt-8">Reseller</h2>
            <div className="grid grid-cols-1 gap-[1rem] pt-4 md:grid-cols-2">
              <div className="rounded-2xl w-full h-fit bg-[#F8FBFF] py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)]">
                <h2 className="text-[1.5rem] font-medium text-center opacity-70 pb-3">
                  Standard
                </h2>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      BBPC
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      EPS
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Account Opeaning
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Ofline Market Share
                    </span>
                    <Image src={cross} width={30} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      UPI Collection
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      PAN-UTI Software
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      NSDL Portal
                    </span>
                    <Image src={cross} width={30} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Domestic Money Transfer
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Hotel Booking Portal
                    </span>
                    <Image src={cross} width={30} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Bus Booking Portal
                    </span>
                    <Image src={cross} width={30} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Flight Booking Portal
                    </span>
                    <Image src={cross} width={30} alt="img" />
                  </div>
                  <hr />
                </div>
              </div>
              <div className="rounded-2xl w-full h-fit bg-[#F8FBFF] py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)]">
                <h2 className="text-[1.5rem] font-medium text-center text-[#F6A122] pb-3">
                  Premium
                </h2>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      BBPC
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      EPS
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Account Opeaning
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Ofline Market Share
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      UPI Collection
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      PAN-UTI Software
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      NSDL Portal
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Domestic Money Transfer
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Hotel Booking Portal
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Bus Booking Portal
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Flight Booking Portal
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="B2C" className="pb-16">
          <div>
            <h2 className="text-[1.5rem] font-medium pt-8">B2C</h2>
            <div className="grid grid-cols-1 gap-[1rem] pt-4 md:grid-cols-2">
              <div className="rounded-2xl w-full h-fit bg-[#F8FBFF] py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)]">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      BBPC
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Hotel Booking Portal
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Bus Booking Portal
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Flight Booking Portal
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Multi Recharge
                    </span>
                    <Image src={tick} width={35} alt="img" />
                  </div>
                  <hr />
                </div>
              </div>
              <div className="items-center justify-center hidden md:flex md:flex-row">
                <div className="items-center justify-center hidden md:flex md:flex-col pr-[10%]">
                  <button className="bg-[#015dfd] w-[8.5rem] h-[2.9rem] text-white mt-[2rem] rounded-lg">
                    Purchase Now
                  </button>
                  <button className="bg-[#202020] w-[8.5rem] h-[2.9rem] text-white mt-[2rem] rounded-lg">
                    Contact Sales
                  </button>
                </div>
                <Image src={cart} width={200} alt="img" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-evenly md:hidden">
            <Link
              href="/contact"
              className=" px-[0.7rem] py-[0.7rem] rounded-lg text-white mt-8 mx-auto bg-[#015dfd]"
            >
              Contact Sales
            </Link>

            <Link
              href="/contact"
              className=" px-[0.7rem] py-[0.7rem] rounded-lg text-white mt-8 mx-auto bg-[linear-gradient(71deg,_#3445e5_21.66%,_rgba(126,_254,_52,_0.92)_178.45%)"
            >
              Purchase Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default fintech;
