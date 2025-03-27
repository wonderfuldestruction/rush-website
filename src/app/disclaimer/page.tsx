export default function Home() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "180vh", // Changed to minHeight, kept at 180vh for content length
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Background Image with Transparency */}
      <div
        style={{
          backgroundImage: "url('/rush.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15, // 70% transparency
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          zIndex: -1, // Place it behind the content
        }}
      ></div>

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
        {/* Disclaimer Section */}
        <section
          style={{
            background: "rgba(255, 255, 255, 0.05)", // Subtle white tint for contrast
            padding: "25px",
            borderRadius: "8px",
            marginBottom: "30px", // Space between sections
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)", // Soft shadow
          }}
        >
          <h1
            className="oswald-font"
            style={{
              fontSize: "2.25rem",
              fontWeight: "bold",
              color: "#ff4d4d", // Red accent for headings
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            Disclaimer
          </h1>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            Welcome to RUSH. Before you dive into the shadows, read this carefully. This isn’t just a formality — it’s the line between us and the chaos.
          </p>
        </section>

        {/* Not Financial Advice Section */}
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
              fontSize: "1.75rem", // Slightly smaller for h2, adjusted from 2xl
              fontWeight: "light", // Kept font-light as original
              color: "#ff4d4d",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            Not Financial Advice
          </h2>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            RUSH is not financial advice, an investment offer, or a promise of riches. We’re a wild experiment in meme-powered crypto, not your financial planner. Any actions you take—buying, trading, or rushing in—are your own call. Talk to a professional if you’re unsure.
          </p>
        </section>

        {/* The Cabal's Role Section */}
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
              fontSize: "1.75rem",
              fontWeight: "light",
              color: "#ff4d4d",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            The Cabal&apos;s Role
          </h2>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            The Cabal—our higher tier NFT community—drives RUSH from the shadows. They whisper influence, spark ideas, and steer the vibe, but they don’t own or control it. Their role is advisory, not a stake in profits or a voting share. This isn’t a company, and they’re not shareholders.
          </p>
        </section>

        {/* Treasury and Rewards Section */}
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
              fontSize: "1.75rem",
              fontWeight: "light",
              color: "#ff4d4d",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            Treasury and Rewards
          </h2>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            Our treasury fuels the ecosystem—sub-projects, drops, whatever the Cabal dreams up. Rewards? They’re discretionary, not guaranteed. No promises of payouts, profits, or returns here. If they happen, they’re a bonus, not a right. Crypto’s a gamble—don’t expect a safety net.
          </p>
        </section>

        {/* Crypto Risks Section */}
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
              fontSize: "1.75rem",
              fontWeight: "light",
              color: "#ff4d4d",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            Crypto Risks
          </h2>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            Cryptocurrency is volatile. Prices crash, wallets get hacked, and you could lose everything. RUSH runs on blockchain—fast, shadowy, and unforgiving. We don’t control the market, the tech, or your decisions.
          </p>
        </section>

        {/* No Warranties Section */}
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
              fontSize: "1.75rem",
              fontWeight: "light",
              color: "#ff4d4d",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            No Warranties
          </h2>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            This site and our ecosystem come “as is.” We don’t guarantee it’ll work flawlessly, make you money, or even make sense. Tech breaks, memes fade, and shadows shift. We’re not liable for losses, damages, or headaches from using RUSH.
          </p>
        </section>

        {/* External Links Section */}
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
              fontSize: "1.75rem",
              fontWeight: "light",
              color: "#ff4d4d",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            External Links
          </h2>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            We might link to other sites, projects, or Cabal-approved rabbit holes. They’re not ours—we don’t endorse or control them. Click at your own peril. We’re not responsible for their content, security, or vibes. You’re on your own in the wild web.
          </p>
        </section>

        {/* Legal Stuff Section */}
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
              fontSize: "1.75rem",
              fontWeight: "light",
              color: "#ff4d4d",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            Legal Stuff
          </h2>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            RUSH isn’t a security, investment contract, or regulated entity—at least, that’s the plan. Laws vary by country, and crypto’s a gray zone. We’re not lawyers; check your local rules. If you’re in a jurisdiction where this doesn’t fly, that’s on you to know.
          </p>
        </section>

        {/* Age and Responsibility Section */}
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
              fontSize: "1.75rem",
              fontWeight: "light",
              color: "#ff4d4d",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            Age and Responsibility
          </h2>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            You should be 18+ to mess with this. If you’re not, or if you’re using someone else’s funds, stop now. Your actions, your responsibility.
          </p>
        </section>

        {/* Updates Section */}
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
              fontSize: "1.75rem",
              fontWeight: "light",
              color: "#ff4d4d",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            Updates
          </h2>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            This disclaimer might change as RUSH evolves. Check back—or don’t, but it’s here when you need it.
          </p>
        </section>

        {/* Questions Section */}
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
              fontSize: "1.75rem",
              fontWeight: "light",
              color: "#ff4d4d",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            Questions?
          </h2>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            Got a bone to pick or a shadow to chase? Hit us up in our Discord channel or X profile account. No promises we’ll answer from the dark.
          </p>
        </section>
      </div>
    </div>
  );
}