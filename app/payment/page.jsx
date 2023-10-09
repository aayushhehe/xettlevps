import React from "react";
import Link from "next/link";
import Paymentlottie from "@/Components/paymentlottie.jsx";
import Paymentserverlottie from "@/Components/paymentserverlottie.jsx";
import cards from "./cards.png";
import upi from "./upi.png";
import net from "./net.png";
import Image from "next/image";

const Page = () => {
  return (
    <section className="w-[100vw] flex flex-col items-center bg-white text-black gap-8 sm:gap-16 min-h-[90vh] pt-[16%] px-[3%] md:pt-[3%] md:px-[8%] pb-16">
      <section className="text-center w-full sm:w-[60%] flex flex-col min-h-[95vh] justify-center">
        <h1 className="text-[2.5rem] font-bold text-center">
          <span className="text-[#015dfd]">Payment</span> <br /> Gateways
        </h1>
        <div className="self-center w-48 h-48 sm:w-[32rem] sm:h-[28rem]">
          {" "}
          <Paymentlottie />
        </div>
        <p className="pt-[2rem] text-center font-medium lg:px-[10%]">
          Welcome to the Payment Gateways at Xettle! We understand that the
          choice of payment gateways is a critical decision for any e-commerce
          business. This page provides an overview of the payment gateway
          options we offer to ensure secure and seamless transactions for your
          online store.
        </p>
        <Link
          href="/contact"
          className="get-started px-[0.7rem] py-[0.7rem] text-white mt-8 mx-auto"
        >
          Get Started
        </Link>
      </section>
      <section className="w-full sm:w-[85%] flex flex-col gap-8 relative items-center">
        <h1 className="text-[2rem] font-medium">
          Our{" "}
          <span className="text-[#015dfd] relative z-[1]">Payment Gateway</span>{" "}
          Solutions
        </h1>
        <div className="w-[100vw] relative top-0 flex flex-col gap-6">
          <div className="w-[85vw] md:w-[75vw] h-[5rem] md:h-[9rem] shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] py-3 px-3 rounded-2xl relative md:scale-75 scale-90">
            <div className="relative h-[100%] flex items-center justify-center">
              <Image src={cards} cover alt="img" />
            </div>
          </div>
          <div className="w-[85vw] md:w-[75vw] h-[5rem] md:h-[9rem] self-end shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] py-3 px-3 rounded-2xl md:relative scale-90 md:scale-75">
            <div className="relative h-[100%] flex items-center justify-center">
              <Image src={upi} cover alt="img" />
            </div>
          </div>
          <div className="w-[85vw] md:w-[75vw] h-[5rem] md:h-[9rem] shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] py-3 px-3 rounded-2xl relative md:scale-75 scale-90">
            <div className="relative h-[100%] flex items-center justify-center">
              <Image src={net} cover alt="img" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full sm:w-[85%]">
        <div className="flex flex-col w-full gap-6">
          <h1 className="text-[2rem] font-medium">
            A System Designed To Handel{" "}
            <span className="text-[#015dfd] relative z-[1]">End to End</span>{" "}
            Payments
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:place-content-center">
            <div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-gray-600">
                  Seamless Checkout and Global Card Saving
                </h3>
                <p className="py-3 pb-6 text-gray-500">
                  With Xettle, integration is a breeze. Our user-friendly
                  checkout system allows your customers to save their card
                  details securely, making it possible for them to pay
                  effortlessly across various businesses.
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-gray-600">
                  Empower Your Decision-Making with Our Powerful Dashboard
                </h3>
                <p className="py-3 pb-6 text-gray-500">
                  Gain valuable insights into your business with our powerful
                  dashboard. Access reports and detailed statistics on payments,
                  settlements, refunds, and more. Make informed decisions to
                  drive your business forward.
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-gray-600">
                  Designed with Developers in Mind
                </h3>
                <p className="py-3 pb-6 text-gray-500">
                  Xettle offers robust, clean, and developer-friendly APIs,
                  plugins, and libraries for all major programming languages and
                  platforms. Our tools enable you to concentrate on building
                  exceptional products while we handle the payment complexities.
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-gray-600">
                  Top-Notch Security for Your Peace of Mind
                </h3>
                <p className="py-3 pb-6 text-gray-500">
                  At Xettle, security is paramount. We are proud to be PCI DSS
                  Level 1 compliant, undergo frequent third-party audits, and
                  maintain a dedicated internal security team. Rest assured,
                  your data is always safeguarded with us.
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-gray-600">
                  Exceptional Customer Support
                </h3>
                <p className="py-3 pb-6 text-gray-500">
                  At Xettle, we pride ourselves on delivering exceptional
                  customer support. Our dedicated team is always ready to assist
                  you with any inquiries, technical support, or payment-related
                  issues.
                </p>
              </div>

              <Link
                href="/contact"
                className="get-started px-[0.7rem] py-[0.7rem] text-white mt-8 mx-auto"
              >
                Get Started
              </Link>
            </div>
            <div>
              <div className="my-auto">
                <Paymentserverlottie />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full sm:w-[85%] flex flex-col gap-8">
        <h1 className="text-2xl font-bold sm:text-3xl">
          Choosing the Right Payment Gateway
        </h1>

        <div className="flex flex-wrap justify-evenly w-full gap-8">
          <div className="w-full sm:w-[30vw] shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] rounded-2xl p-4 flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">Diverse Payment Methods</h1>

            <p className="text-lg">
              Choose a payment gateway that offers a wide array of payment
              options, including credit cards, mobile wallets, and net banking,
              to cater to a broad customer base.
            </p>
          </div>
          <div className="w-full sm:w-[30vw] shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] rounded-2xl p-4 flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">Robust Security</h1>

            <p className="text-lg">
              Prioritize a payment gateway with PCI DSS Level 1 compliance,
              stringent security measures, and frequent audits to safeguard
              sensitive customer data.
            </p>
          </div>
        </div>
      </section>
      <section className="min-h-[30vh] w-[100vw] px-[5%] pt-16 xl:px-[10%]">
        <h1 className="text-[2rem] font-medium text-center">
          Ready to Get Started?
        </h1>
        <p className="py-3 opacity-75 lg:text-[1.1rem] text-center">
          Enhance your website, with perfect Payment Gateway Suited to your
          needs.
        </p>
        <div className="text-center">
          <Link
            href="/contact"
            className="get-started px-[0.7rem] py-[0.7rem] text-white mt-8 mx-auto"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </section>
  );
};

export default Page;
