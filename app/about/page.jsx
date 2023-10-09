import React from "react";
import "./about.css";
import Lottie from "@/Components/aboutus.jsx";

const page = () => {
  return (
    <main className="bg-[#f9fbff] aboutmain">
      <main className="aboutabout">
        <div className="aboutcontainer">
          <section className="aboutgrid aboutinfo">
            <div className="column-xs-12 column-md-1">
              <div className="about"></div>
            </div>
            <Lottie />
            <div className="column-xs-12 column-md-7">
              <div className="aboutintro">
                <p className="aboutp">
                  At Xettle, we&apos;re not just another software development
                  agency; we&apos;re your partners in innovation and progress.
                  With a relentless pursuit of excellence and a team of
                  passionate experts, we are committed to delivering
                  cutting-edge solutions in the fields of crypto, fin-tech,
                  e-commerce, and payment gateways. Here&apos;s why Xettle
                  stands out in the industry:
                </p>
                <p className="aboutp">
                  We specialize in the most dynamic and transformative
                  industries of today - cryptocurrency, financial technology,
                  e-commerce, and payment gateways. With years of experience and
                  a deep understanding of these domains, we are equipped to
                  provide you with top-tier solutions that drive your business
                  forward.
                </p>
                <p className="aboutp">
                  Innovation is not just a buzzword for us; it&apos;s at the
                  core of everything we do. We thrive on challenges and take
                  pride in pushing the boundaries of technology. Whether you
                  need a groundbreaking crypto solution, a robust fin-tech
                  platform, an e-commerce store that stands out, or a secure and
                  seamless payment gateway, we&apos;re here to make it happen.
                </p>
              </div>
            </div>
            <div className="column-xs-12 column-md-7">
              <blockquote className="aboutblockquote">
                <h3 className="abouth3">
                  Ready to embark on a journey of innovation and growth? Contact
                  us today, and let&apos;s explore how Xettle can empower your
                  business in the crypto, fin-tech, e-commerce, and payment
                  gateway domains. Together, we&apos;ll turn your ideas into
                  realities and your challenges into opportunities.
                </h3>
              </blockquote>
            </div>
          </section>
        </div>
      </main>
    </main>
  );
};

export default page;
