"use client";

import { useState } from "react";

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is $RUSH inflationary or deflationary?",
      answer:
        "$RUSH stays at 1 billion tokens—no more will ever be made. We might burn some later by sending to burn wallet address, but that’s just an idea for now.",
    },
    {
      question: "Is $RUSH contract renounced or there's any further controls?",
      answer:
        "The $RUSH contract isn’t locked yet—we can still change ownership or let it go completely. There are no controls for taxes, fees, or extra tokens being made, and we can’t stop or mess with it in any shape.",
    },
    {
      question: "Does RUSH Treasury own any $RUSH tokens?",
      answer:
        "The RUSH Treasury started after $RUSH was already out there. It doesn’t have its own pile or controls $RUSH—it buys them from the market, same as you.",
    },
    {
      question: "Where I can trade $RUSH, and does it work cross-chain?",
      answer: (
        <>
          You can trade $RUSH only on the Avalanche C-Chain, at{" "}
          <a
            href="https://pharaoh.exchange/swap?to=0xe30A6FB6d2C153D4a09477e27b9a2A71c5C8acc8"
            style={{ color: "white", textDecoration: "underline" }}
          >
            Pharaoh.Exchange.
          </a>{" "}
          We’re not planning to put it on other chains right now.
        </>
      ),
    },
    {
      question: "Can I hold $RUSH on my Coinbase or Binance wallet?",
      answer:
        "DON’T send $RUSH to Coinbase or Binance wallets—you’ll lose it forever! It only works in Avalanche compatible wallets like Metamask, Trust Wallet, Core, or Rabby. We like Rabby best for mobile and computer use.",
    },
    {
      question: "What can I do with $RUSH besides holding it?",
      answer: (
        <>
          You can stake $RUSH on{" "}
          <a
            href="https://pharaoh.exchange/liquidity"
            style={{ color: "white", textDecoration: "underline" }}
          >
            Pharaoh.Exchange
          </a>{" "}
          for a chance at extra rewards—but there’s no guarantee. We’re working
          on new ways to use $RUSH in our ecosystem. Treasury might give rewards
          to $RUSH holders if they decide to. Make sure to read our{" "}
          <a
            href="/disclaimer/"
            style={{ color: "white", textDecoration: "underline" }}
          >
            Disclaimer
          </a>{" "}
          in regards to this risk.
        </>
      ),
    },
  ];

  return (
    <div
      style={{
        position: "relative",
        height: "120vh",
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
          background: "linear-gradient(90deg, #731010 0%, #3d0808 100%)",
          padding: "15px 25px",
          position: "sticky",
          top: 0,
          zIndex: 99,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          borderBottom: "1px solid rgba(255, 77, 77, 0.3)",
          display: "flex", // Add flex to center content
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
          Red Rush Turbo
        </h1>
        <ul
          className="flex gap-6 list-none m-0 p-0 justify-center" // Changed to justify-center
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
          Red Rush Turbo
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
