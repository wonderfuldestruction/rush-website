"use client";

export default function Home() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "110vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Background Image with Glowing Red Effect */}
      <div
        style={{
          backgroundImage: "url('/hauntednft.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          zIndex: 1,
          animation: "glowRed 2s ease-in-out infinite", // Pulsating red glow
        }}
      ></div>

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
          padding: "20px",
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "left",
          color: "#ffffff",
          position: "relative",
          zIndex: 2, // Ensure content stays above background
        }}
      >
        {/* Summary Section */}
        <section
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            padding: "25px",
            borderRadius: "8px",
            marginBottom: "30px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
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
            Rare Minting | 100 Units Launched | Exclusive Group | Discretionary Rewards
          </p>
        </section>

        {/* About RUSH Cabal Section */}
        <section
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            padding: "25px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h1
            className="oswald-font"
            style={{
              fontSize: "2.25rem",
              fontWeight: "bold",
              color: "#ff4d4d",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            About RUSH Cabal
          </h1>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            The RUSH Cabal NFT collection emerged from the shadows in February 2025—a clandestine crew wielding influence in the RUSH ShadowFi ecosystem. This elite Cabal reaps discretionary rewards and unlocks secret RUSH events, with only 100 units made to the bold, granting access to our Discord’s hidden channels.
          </p>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            Minting a RUSH Cabal NFT is a rare rite—granted in fleeting moments or to those who secure RUSH Artifacts for a dark forge at the Foundry. Membership in this shadowy circle opens only under the rarest stars, by the founder’s decree, keeping the Cabal’s ranks exclusive.
          </p>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            Should fate align, a few NFTs might surface for trade on{" "}
            <a
              href="https://salvor.io/collections/0x67da5f891023751febe5554f663f2a2affa8beea"
              style={{ color: "#ff4d4d", textDecoration: "underline" }}
            >
              Salvor NFT Marketplace
            </a>
            , at the Cabal’s whim.
          </p>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            Supply bends to the founder’s will—no cap, just scarcity forged in discretion. These ERC-721 NFTs only work on Avalanche C-Chain alone, thriving in wallets like Metamask, Trust Wallet, Core, or Rabby.
          </p>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
              fontWeight: "bold",
            }}
          >
            DO NOT use/transfer these NFTs into a centralised exchange wallet like Coinbase or Binance. You will lose your NFTs and these cannot be recovered!
          </p>
          <br></br>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
              textAlign: "center",
            }}
          >
            <b>Cabal NFT Address</b> | 0x67DA5f891023751fEBE5554F663F2A2AfFA8bEEA
          </p>
        </section>
      </div>

      {/* CSS for Glowing Red Effect */}
      <style jsx>{`
        @keyframes glowRed {
          0% {
            box-shadow: 0 0 20px rgba(255, 0, 0, 0.23);
          }
          50% {
            box-shadow: 0 0 40px rgba(255, 0, 0, 0.8); // Peak glow
          }
          100% {
            box-shadow: 0 0 20px rgba(255, 0, 0, 0.2);
          }
        }
      `}</style>
    </div>
  );
}