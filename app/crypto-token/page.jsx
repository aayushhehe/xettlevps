import React from "react";
import Link from "next/link";
import "./token.css";
import Lottie from "@/Components/tokenlottie.jsx";
import Contour from "@/Components/contour.jsx";

const page = () => {
  return (
    <main className="bg-[#f9fbff]">
      {/* <!-- home page markup  --> */}
      <section className="home min-h-[100vh] pt-[2%] flex flex-col items-center">
        <div className="container flex flex-col items-center">
          <h1 className="text-[2.5rem] font-bold text-center">
            Crypto <span className="text-[#015dfd]">Project</span> And{" "}
            <span className="text-[#015dfd]">Token</span> Developement
          </h1>
          <p>
            Welcome to the Crypto Project/Token Development page at Xettle! We
            specialize in helping businesses and individuals navigate the
            exciting world of cryptocurrency by providing comprehensive crypto
            project and token development services. Whether you&apos;re looking
            to launch your own cryptocurrency or develop a blockchain-based
            project, we have the expertise to turn your vision into reality.
          </p>
          {/* <Image src={banner} width={1000} /> */}
          <div className="w-[85vw] sm:w-[60vw] md:w-[40vw] xl:m-[-10%] ">
            <Lottie />
          </div>
        </div>
      </section>

      {/* <!-- about section  --> */}
      <section className="relative about">
        <div className="w-[100%] h-[100%] absolute z-[-1] top-0 left-0">
          <Contour />
        </div>
        <h1 className="text-[2rem] font-medium z-[1] relative text-black">
          <span className="text-[2rem] font-medium z-[1] relative text-black">
            What is{" "}
            <span className="text-[#015dfd] relative">
              Crypto Project / Token Development
            </span>
          </span>
        </h1>
        <p>
          Crypto Project/Token Development refers to the process of creating and
          launching a cryptocurrency or blockchain-based token. These digital
          tokens can serve various purposes within the broader crypto ecosystem
          and are often used in Initial Coin Offerings (ICOs), Security Token
          Offerings (STOs), or as part of decentralized applications (DApps).
        </p>
        <div className="card_container">
          <div className="card1">
            <h2>Cryptocurrency</h2>
            <p>
              A cryptocurrency is a digital or virtual form of currency that
              uses cryptography for security. It operates on a decentralized
              ledger technology called blockchain, which ensures transparency
              and immutability of transactions. Cryptocurrencies like Bitcoin
              and Ethereum are examples of widely known cryptocurrencies.
            </p>
          </div>
          <div className="card2">
            <h2>Token</h2>
            <p>
              A token represents a digital asset or unit of value issued and
              managed on a blockchain. Tokens can have various use cases, such
              as representing ownership of assets, access to services, voting
              rights, or loyalty rewards.
            </p>
          </div>
          <div className="card3">
            <h2>Crypto Project and Token Development</h2>
            <p>
              A crypto project encompasses any venture within the realm of
              cryptocurrencies or blockchain technology. This can entail a wide
              range of activities, such as creating a new cryptocurrency,
              launching a blockchain network, developing decentralized
              applications (DApps), or pioneering innovative blockchain
              solutions across diverse industries like finance, supply chain,
              healthcare, and more. Token development is an integral part of
              many crypto projects. It involves the meticulous process of
              conceiving and crafting a blockchain-based token with specific
              attributes and functionalities. This includes determining the
              token&apos;s purpose, defining its technical specifications, and,
              if needed, coding smart contracts to manage and govern the
              token&apos;s behavior on a blockchain. Tokens can be created for
              various purposes, including fundraising through Initial Coin
              Offerings (ICOs), facilitating seamless transactions within DApps,
              or representing ownership of tangible or digital assets.
            </p>
          </div>
        </div>
      </section>

      <section className="services">
        <h1>
          <span className="purple">Services</span> Included
        </h1>
        <div className="card_container">
          <div className="card1">
            <h1>ICO/STO Tokens</h1>

            <ol>
              <li>
                Fundraising tokens: ICOs and STOs use tokens as a means to raise
                funds for projects.
              </li>

              <li>
                Regulatory compliance: STO tokens adhere to legal regulations
                and may offer rights to investors.
              </li>

              <li>
                Liquidity and trading: ICO tokens can be traded on
                cryptocurrency exchanges, providing liquidity.
              </li>

              <li>
                Potential volatility: Prices of ICO tokens can be highly
                volatile.
              </li>
            </ol>
          </div>
          <div className="card2">
            <h1>Security Tokens</h1>

            <ol>
              <li>
                Access tokens: Utility tokens grant access to specific services
                or features within a project.
              </li>

              <li>
                Ecosystem participation: Users use utility tokens to engage
                within a project&apos;s ecosystem.
              </li>

              <li>
                Non-investment use: Utility tokens are not intended as
                investments but rather as tools for specific functions.
              </li>

              <li>
                Stable value: Utility token prices are typically more stable
                compared to ICO token
              </li>
            </ol>
          </div>
          <div className="card3">
            <h1>Non-Fungible Tokens (NFTs)</h1>

            <ol>
              <li>
                Unique assets: NFTs represent one-of-a-kind digital or physical
                items.
              </li>

              <li>
                Digital ownership: NFTs establish ownership and authenticity of
                digital collectibles or art.
              </li>

              <li>
                Diverse applications: NFTs are used for digital art,
                collectibles, gaming items, and more.
              </li>

              <li>
                Individual value: Each NFT has its own distinct value, making
                them highly unique.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* <!-- contact us section  --> */}
      <section className="get_started">
        <h1>Contact Us</h1>
        <p>
          Ready to elevate your crypto trading experience with our
          state-of-the-art platform? Contact us today and let’s make it happen.
        </p>
        <Link href="/contact">Contact Us</Link>
      </section>
    </main>
  );
};

export default page;
