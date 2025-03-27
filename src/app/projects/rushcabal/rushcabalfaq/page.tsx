"use client"; // Required for client-side interactivity

import { useState } from "react";

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question:
        "Do I have to stake my RUSH Cabal NFT to be eligible for rewards?",
      answer:
        "No, you don’t need to stake your RUSH Cabal NFT to get rewards. For now, if there are any rewards, they’ll be sent straight to wallets holding the NFT—just keep it there.",
    },
    {
      question: "Is there any specific period to get these rewards?",
      answer:
        "Treasury performance will be reviewed quarterly which could produce additional rewards. RUSH Treasury produces its own revenue streams, and the rewards will be distributed at the discretion of RUSH founder. RUSH Treasury doesn't want to provide guarantees on rewards, but rather provide a unique opportunity for NFT holders to benefit from the success of the RUSH ecosystem.",
    },
    {
      question: "What tokens will be used for rewards?",
      answer:
        "Rewards will usually be $RUSH tokens, but they might be other tokens too. It depends on what the founder picks and how the Treasury’s doing.",
    },
    {
      question: "I hold multiple RUSH Cabal NFTs, will I get more rewards?",
      answer:
        "Yes, if you hold more RUSH Cabal NFTs, you’ll get more rewards based on how many you have.",
    },
    {
      question:
        "My wallet got hacked and someone took my NFTs, can I get compensation?",
      answer:
        "If your wallet gets hacked and your RUSH Cabal NFTs are stolen, we can’t get them back for you. It’s your job to keep your wallet safe. We might look at your case, but there’s no promise of help.",
    },
    {
      question:
        "I've held my NFTs for a long time and want to sell them, can I still get rewards?",
      answer:
        "You only get rewards if you’re still holding your RUSH Cabal NFTs. If you sell them, you won’t get any more rewards.",
    },
    {
      question: "Can I hold RUSH Cabal NFTs on my Coinbase or Binance wallet?",
      answer:
        "DON’T send your RUSH Cabal NFTs to Coinbase or Binance wallets—you’ll lose them forever! They only work with Avalanche compatible wallets like Metamask, Trust Wallet, Core, or Rabby.",
    },
  ];

  return (
    <div
      style={{
        position: "relative",
        height: "130vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Background Image with Transparency */}
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
          zIndex: -1,
        }}
      ></div>

      {/* Subnavigation Bar */}
      <nav
        style={{
          background: "linear-gradient(90deg, #731010 0%, #3d0808 100%)", // Gradient from your red to darker shade
          padding: "15px 25px",
          position: "sticky",
          top: 0,
          zIndex: 99,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          borderBottom: "1px solid rgba(255, 77, 77, 0.3)",
          display: "flex", // Add flex for centering
          flexDirection: "column", // Stack h1 and ul vertically
          alignItems: "center", // Center horizontally
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
          className="flex gap-6 list-none m-0 p-0 justify-center" // Centered items
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

      {/* Content */}
      <div
        style={{
          padding: "20px",
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "left",
        }}
      >
        <h1 className="oswald-font text-7xl font-bold leading-tight">
          RUSH Cabal
        </h1>
        <br />
        <h2 className="oswald-font text-2xl font-bold leading-tight">
          Frequently Asked Questions
        </h2>
        <br />
        <br />

        {/* FAQ Dropdown Section */}
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="oswald-font text-1xl font-bold leading-tight"
              style={{
                width: "100%",
                textAlign: "left",
                padding: "10px",
                cursor: "pointer",
                backgroundColor: "rgba(115, 16, 16, 0.2)", // Matches nav color with transparency
                border: "none",
                outline: "none",
                color: "white",
                marginBottom: "5px",
              }}
            >
              {faq.question}
              <span style={{ float: "right" }}>
                {openIndex === index ? " ▼" : " ►"}
              </span>
            </button>
            {openIndex === index && (
              <div
                style={{
                  padding: "10px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  lineHeight: "1.5",
                  marginBottom: "15px",
                }}
              >
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
