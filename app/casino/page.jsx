import Image from "next/image";
import React from "react";
import Link from "next/link";
import "./casino.css";

// import banner from "./banner.png";
import Contour from "@/Components/contour.jsx";
import Casinolottie from "@/Components/casinolottie.jsx";

const page = () => {
  return (
    <main className="bg-[#ffffff] relative z-[-9999]">
      <section className="home">
        <div className="home_description">
          <h1 className="heading">
            <span className="whitespace-nowrap text-[#015EFE]">
              Crypto Casino
            </span>{" "}
            Development
          </h1>
          <p>
            Welcome to the future of gambling with Crypto Casino. We are your
            gateway to the exciting world of cryptocurrency-powered casinos.
            With our expertise, you can tap into this booming industry and
            create a cutting-edge crypto casino that redefines the gaming
            experience.
          </p>
        </div>
        <div className="home_image">
          {/* <Image src={banner} width={1000} /> */}
          <Casinolottie />
        </div>
      </section>

      {/* <!-- services and card collection here  --> */}
      <section className="relative services">
        <div className="w-[100%] h-[100%] absolute z-[-1] top-0 left-0 blur-[1px]">
          <Contour />
        </div>

        <div className="card_collection">
          <div className="card">
            <h3>Custom Crypto Casino Development</h3>
            <p>
              We specialize in crafting custom crypto casino solutions that
              cater to your unique vision. Whether you want to launch a Bitcoin
              casino, Ethereum-based gaming platform, or any other crypto casino
              idea, we have the knowledge and skills to make it happen.
            </p>
          </div>
          <div className="card">
            <h3>Blockchain Integration</h3>
            <p>
              Harness the power of blockchain technology to ensure fairness,
              transparency, and security for your casino. We seamlessly
              integrate blockchain into your gaming platform, providing players
              with provably fair games and transparent transactions.
            </p>
          </div>
          <div className="card">
            <h3>Cryptocurrency Payment Solutions</h3>
            <p>
              Offer a seamless payment experience for your players with
              cryptocurrency payment gateways. We enable hassle-free deposits
              and withdrawals in various cryptocurrencies, making it convenient
              for users worldwide.
            </p>
          </div>
          <div className="card">
            <h3>Mobile Casino Development</h3>
            <p>
              Capture the mobile gaming market with our mobile casino
              development solutions. We design and develop iOS and Android apps
              that allow players to enjoy your casino on the go.
            </p>
          </div>
        </div>
        <div className="text-white services_list">
          <h2 className="services_list_heading">Our Services</h2>
          <p>
            At Xettle, we offer a comprehensive range of services designed to
            empower your betting platform and provide a competitive edge in the
            dynamic world of sports and fantasy betting. Our services are
            crafted to meet your specific requirements and ensure the success of
            your venture.
          </p>
          <ul className="list-disc">
            <li>
              <p>
                <b>Experience: </b> With years of experience in sports and
                fantasy betting software development, we bring a wealth of
                knowledge to the table.
              </p>
            </li>

            <li>
              <p>
                <b>Customisation: </b> Our solutions are tailor-made to suit
                your unique business goals and requirements.
              </p>
            </li>

            <li>
              <p>
                <b>Quality Assurance: </b> We uphold the highest standards of
                quality in design, functionality, and security.
              </p>
            </li>

            <li>
              <p>
                <b>Compliance Expertise: </b> We stay up-to-date with evolving
                regulations to keep your platform compliant and secure.
              </p>
            </li>

            <li>
              <p>
                <b>Ongoing Support: </b> Our commitment to your success
                doesn&apos;t end with project delivery. We provide continuous
                support and maintenance to ensure your platform&apos;s optimal
                performance.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* <!-- our specialisation markup here  --> */}
      <section className="specialisation">
        <h3>Why us?</h3>
        <div className="card_container">
          <div className="h-full card">
            <h3>Customization</h3>
            <p>
              We tailor our solutions to your unique needs, ensuring your casino
              stands out in a competitive market.
            </p>
          </div>
          <div className="card">
            <h3>Expertise</h3>
            <p>
              Our team comprises experienced professionals who understand the
              intricacies of crypto casino development.
            </p>
          </div>
          <div className="card">
            <h3>Innovation</h3>
            <p>
              We stay up-to-date with blockchain technology and emerging trends
              to provide cutting-edge solutions.
            </p>
          </div>
        </div>
        <p className="more">and more...</p>
      </section>

      {/* <!-- ready to get started section  --> */}
      <section className="get_started">
        <h1>Ready to Get Started?</h1>
        <p>
          Start your crypto casino adventure now! Join the excitement with
          seamless registration, multiple cryptocurrencies, and a world of
          thrilling games. Let the fun begin!
        </p>
        <Link
          href="/contact"
          className=" px-[0.7rem] py-[0.7rem] rounded-lg text-white mt-8 mx-auto bg-[linear-gradient(71deg,_#3445e5_21.66%,_rgba(126,_254,_52,_0.92)_178.45%)"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
};

export default page;
