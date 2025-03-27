export default function Home() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "120vh", // Changed to minHeight for content flexibility
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Background Image with Transparency */}
      <div
        style={{
          backgroundImage: "url('/rushlogo.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1, // Kept at 10% transparency as original
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          zIndex: -1,
        }}
      ></div>

      {/* Subnavigation Bar (Unchanged) */}
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
          Red Rush Turbo
        </h1>
        <ul
          className="flex gap-6 list-none m-0 p-0 justify-center"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          <li>
            <a
              href="/projects/rushtoken"
              className="text-white no-underline py-2 px-4 rounded-md transition-all duration-300 hover:bg-red-700 hover:text-gray-200"
            >
              About $RUSH
            </a>
          </li>
          <li>
            <a
              href="/projects/rushtoken/rushfaq"
              className="text-white no-underline py-2 px-4 rounded-md transition-all duration-300 hover:bg-red-700 hover:text-gray-200"
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="https://pharaoh.exchange/swap?to=0xe30A6FB6d2C153D4a09477e27b9a2A71c5C8acc8"
              className="text-white no-underline py-2 px-4 rounded-md transition-all duration-300 hover:bg-red-700 hover:text-gray-200"
            >
              Trade
            </a>
          </li>
          <li>
            <a
              href="https://snowtrace.io/token/0xe30A6FB6d2C153D4a09477e27b9a2A71c5C8acc8/tokenholderchart?chainId=43114"
              className="text-white no-underline py-2 px-4 rounded-md transition-all duration-300 hover:bg-red-700 hover:text-gray-200"
            >
              Holders
            </a>
          </li>
          <li>
            <a
              href="https://dexscreener.com/avalanche/0x9e2015cb486d148beb09340776ae5403e29afc41"
              className="text-white no-underline py-2 px-4 rounded-md transition-all duration-300 hover:bg-red-700 hover:text-gray-200"
            >
              Price Chart
            </a>
          </li>
        </ul>
      </nav>

      {/* Content Container */}
      <div
        style={{
          padding: "40px 20px", // More padding for breathing room
          maxWidth: "900px", // Slightly wider for balance (adjusted from 800px)
          margin: "0 auto",
          textAlign: "left",
          color: "#ffffff", // Consistent white text
        }}
      >
        {/* Summary Section */}
        <section
          style={{
            background: "rgba(255, 255, 255, 0.05)", // Subtle white tint for contrast
            padding: "25px",
            borderRadius: "8px",
            marginBottom: "30px", // Space between sections
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)", // Soft shadow
          }}
        >
          <p
            style={{
              fontSize: "1.1rem",
              textAlign: "center",
              margin: "0",
              lineHeight: "1.6",
            }}
          >
            $RUSH | 1 Billion Supply Cap | 50% Burned Supply | Fair Launched
          </p>
        </section>

        {/* About $RUSH Token Section */}
        <section
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            padding: "25px",
            borderRadius: "8px",
            marginBottom: "30px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h1
            className="oswald-font"
            style={{
              fontSize: "2.25rem", // Adjusted from 2xl for consistency
              fontWeight: "bold",
              color: "#ff4d4d", // Red accent for headings
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            About $RUSH Token
          </h1>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            Red Rush Turbo ($RUSH) token is the first iteration, and native
            currency of the RUSH ecosystem. It was fair launched through
            Ignite.Meme in May 2024 during Avalanche&apos;s Memerush Season - hence
            the name.
          </p>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            Once $RUSH was fully bonded, 50% of the supply was permanently
            burned to create RUSH/AVAX liquidity pool with Pharaoh.Exchange, and
            the remaining 50% was distributed to investors that participated in
            the pre-launch.
          </p>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            Supply is capped at 1 billion tokens, no trade tax or hidden
            strings. All $RUSH is available in the open market.
          </p>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            $RUSH is only available on Avalanche C-Chain and can be traded on{" "}
            <a
              href="https://pharaoh.exchange/swap?to=0xe30A6FB6d2C153D4a09477e27b9a2A71c5C8acc8"
              style={{ color: "#ff4d4d", textDecoration: "underline" }} // Red link for consistency
            >
              Pharaoh.Exchange.
            </a>
          </p>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
              fontWeight: "bold",
            }}
          >
            DO NOT use/transfer these tokens into a centralised exchange wallet
            like Coinbase or Binance. You will lose your tokens and these cannot
            be recovered!
          </p>
        </section>

        {/* Burn & Contract Addresses Section */}
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
              fontSize: "2.25rem", // Adjusted from 2xl for consistency
              fontWeight: "bold",
              color: "#ff4d4d",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            Burn & Contract Addresses
          </h2>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            <b>Burned Txn</b> |
            0x9bf9666943a03699400747c0ea3fc7a674ea23d78f2f7ecb1f9c5e6a910834b2
          </p>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            <b>RUSH Token</b> | 0xe30A6FB6d2C153D4a09477e27b9a2A71c5C8acc8
          </p>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            <b>RUSH-AVAX LP</b> | 0x9e2015Cb486d148bEb09340776aE5403E29AfC41
          </p>
        </section>
      </div>
    </div>
  );
}
