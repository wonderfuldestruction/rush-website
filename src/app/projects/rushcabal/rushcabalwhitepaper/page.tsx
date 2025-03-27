"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "120vh", // Matches Red Rush Turbo
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Background Image with Transparency */}
     

      {/* Subnavigation Bar */}
      <nav
        style={{
          background: "linear-gradient(90deg, #731010 0%, #3d0808 100%)",
          padding: "15px 25px",
          position: "sticky",
          top: 0,
          zIndex: 99,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          borderBottom: "1px solid rgba(255, 77, 77, 0.3)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          className="oswald-font"
          style={{
            color: "white",
            marginBottom: "12px",
            fontSize: "1.8rem",
            fontWeight: "bold",
            textShadow: "0 0 5px rgba(255, 77, 77, 0.5)",
            letterSpacing: "1px",
          }}
        >
          RUSH Cabal
        </h1>
        <ul
          className="flex gap-6 list-none m-0 p-0 justify-center"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          <li>
            <a
              href="/projects/rushcabal"
              className="text-white no-underline py-2 px-4 rounded-md transition-all duration-300 hover:bg-red-700 hover:text-gray-200"
            >
              About RUSH Cabal
            </a>
          </li>
          <li>
            <a
              href="/projects/rushcabal/rushcabalfaq"
              className="text-white no-underline py-2 px-4 rounded-md transition-all duration-300 hover:bg-red-700 hover:text-gray-200"
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="https://salvor.io/collections/0x67da5f891023751febe5554f663f2a2affa8beea"
              className="text-white no-underline py-2 px-4 rounded-md transition-all duration-300 hover:bg-red-700 hover:text-gray-200"
            >
              Marketplace
            </a>
          </li>
          <li>
            <a
              href="https://snowtrace.io/token/0x67DA5f891023751fEBE5554F663F2A2AfFA8bEEA/tokenholderchart?chainid=43114"
              className="text-white no-underline py-2 px-4 rounded-md transition-all duration-300 hover:bg-red-700 hover:text-gray-200"
            >
              Holders
            </a>
          </li>
          <li>
            <a
              href="/projects/rushcabal/rushcabalwhitepaper"
              className="text-white no-underline py-2 px-4 rounded-md transition-all duration-300 hover:bg-red-700 hover:text-gray-200"
            >
              Whitepaper
            </a>
          </li>
        </ul>
      </nav>

      {/* Content Container */}
      <div
        style={{
          padding: "40px 20px",
          maxWidth: "900px", // Matches Red Rush Turbo
          margin: "0 auto",
          textAlign: "left",
          color: "#ffffff",
        }}
      >
        {/* Title Section */}
        <section
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            padding: "25px",
            borderRadius: "8px",
            marginBottom: "30px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
          }}
        >
          <h1
            className="oswald-font"
            style={{
              fontSize: "2.25rem", // Matches Red Rush Turbo h1
              fontWeight: "bold",
              color: "#ff4d4d",
              marginBottom: "10px",
              lineHeight: "1.2",
            }}
          >
            RUSH Cabal Whitepaper
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.6",
              margin: "0",
            }}
          >
            Version 3 | Updated March 25, 2025
          </p>
        </section>

        {/* Treasury Section */}
        <section
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            padding: "25px",
            borderRadius: "8px",
            marginBottom: "30px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h2
            className="oswald-font"
            style={{
              fontSize: "2.25rem", // Matches Red Rush Turbo h2
              fontWeight: "bold",
              color: "#ff4d4d",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            One Treasury, Multiple Possibilities
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.6",
              margin: "12px 0",
            }}
          >
            RUSH is growing from a memecoin into something bigger—a ShadowFi world where a small group, the Cabal, backs a treasury full of different assets. This treasury aims to make money from fees, all while building a strong fund for $RUSH and its NFT holders.
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.6",
              margin: "12px 0",
            }}
          >
            For almost a year, $RUSH has been a small token that has done well—giving early holders staking rewards on Pharaoh.Exchange and price jumps over 100%.
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.6",
              margin: "12px 0",
            }}
          >
            Now, we’re taking it further. With Avalanche’s low fees and Pharaoh.Exchange’s trading power, we’re adding high-yield tokens like bluechips to the RUSH Treasury. This builds a powerful pool for everyone holding $RUSH or our NFTs. Together, we can make Avalanche a top name people trust.
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.6",
              margin: "12px 0",
            }}
          >
            Note: Past gains don’t mean future wins—check our{" "}
            <a
              href="/disclaimer"
              style={{ color: "#ff4d4d", textDecoration: "underline" }}
            >
              Disclaimer
            </a>{" "}
            for risks.
          </p>
          <Image
            src="/hauntednft.png"
            alt="RUSH Cabal Whitepaper"
            layout="responsive"
            width={100}
            height={50} // Adjust the aspect ratio as needed
            style={{
              borderRadius: "10px",
              marginTop: "20px",
            }}
          />
        </section>

        {/* Pre-Sale Section */}
        <section
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            padding: "25px",
            borderRadius: "8px",
            marginBottom: "30px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h2
            className="oswald-font"
            style={{
              fontSize: "2.25rem",
              fontWeight: "bold",
              color: "#ff4d4d",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            Pre-Sale (Complete)
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.6",
              margin: "12px 0",
            }}
          >
            The RUSH Cabal pre-sale is over. We raised over 1,000 AVAX plus Treasury was loan bootstrapped by founder with further 1,130 AVAX to start the treasury. The treasury is now live and earning fees from Pharaoh.Exchange.
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.6",
              margin: "12px 0",
            }}
          >
            Two distinct collections were released named Legacy and Uncanny, totalling 100 launched units. Future mints will be discretionary and available to public.
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.6",
              margin: "12px 0",
            }}
          >
            <b>Treasury Wallet</b> | 0x4638d23CeBf6621c4686541ea4603318EB31AC85
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.6",
              margin: "12px 0",
            }}
          >
            <b>Cabal NFT Address</b> | 0x67DA5f891023751fEBE5554F663F2A2AfFA8bEEA
          </p>
          <Image
            src="/21.png"
            alt="RUSH Cabal Whitepaper"
            layout="responsive"
            width={100}
            height={50} // Adjust the aspect ratio as needed
            style={{
              borderRadius: "10px",
              marginTop: "20px",
            }}
          />
        </section>

        {/* Treasury Revenue Section */}
        <section
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            padding: "25px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h2
            className="oswald-font"
            style={{
              fontSize: "2.25rem",
              fontWeight: "bold",
              color: "#ff4d4d",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            Treasury Revenue
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.6",
              margin: "12px 0",
            }}
          >
            NFT holders will be eligible to discretionary rewards from the Treasury&apos;s revenue.
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.6",
              margin: "12px 0",
            }}
          >
            Treasury will review its performance on a quarterly basis for revenue efficiency, and any excess might produce rewards to collection holders.
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.6",
              margin: "12px 0",
            }}
          >
            In conservative conditions, Treasury would aim to share 20% of its produced earnings to NFT holders. This is subject to change based on Treasury performance and market conditions in order to keep it strong.
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.6",
              margin: "12px 0",
              fontWeight: "bold",
            }}
          >
            A bigger Treasury could mean more value for the NFTs.
          </p>
          <Image
            src="/2.png"
            alt="RUSH Cabal Whitepaper"
            layout="responsive"
            width={100}
            height={50} // Adjust the aspect ratio as needed
            style={{
              borderRadius: "10px",
              marginTop: "20px",
            }}
          />
        </section>
      </div>
    </div>
  );
}