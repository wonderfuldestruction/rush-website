export default function Home() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh", // Changed to minHeight for content flexibility
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Background Image with Transparency (Original) */}
      <div
        style={{
          backgroundImage: "url('/rush.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15, // 70% transparency as original
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
          maxWidth: "900px", // Slightly wider for balance
          margin: "0 auto",
          textAlign: "left",
          color: "#ffffff", // Consistent white text
        }}
      >
        {/* RUSH Genesis Section */}
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
              fontSize: "2.25rem", // Slightly larger, cleaner size
              fontWeight: "bold",
              color: "#ff4d4d", // Red accent for headings
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            RUSH Genesis
          </h1>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            May 2024, Red Rush Turbo ($RUSH) was born, in the midst of
            Avalanche&apos; Memerush Season. Blood started being spilled on
            streets, when users across Avalanche ecosystem were extracting value
            with disregard to future.
          </p>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            Red Rush Turbo equally suffered with the rest of the ecosystem, but
            very few survived. $RUSH was one of the few standing. Bent, but not
            broken.
          </p>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            As the dust settled, the survivors gathered to rebuild. The RUSH
            Cabal was formed, a secret group operating in the shadows of the
            blockchain, influencing RUSH&apos;s mission.
          </p>
        </section>

        {/* About RUSH Section */}
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
              fontSize: "2.25rem",
              fontWeight: "bold",
              color: "#ff4d4d",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            About RUSH
          </h1>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            Named after &apos;Red Rush Turbo&apos; token, RUSH is a decentralized
            autonomous organization (DAO) biased ecosystem with a treasury,
            minting, foundry, staking and future gaming features, leveraging
            $RUSH token within the Avalanche blockchain.
          </p>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            RUSH was developed to become ShadowFi, influenced by the RUSH Cabal,
            a secret group operating in a private community within the Avalanche
            blockchain where only RUSH Cabal NFT holders have access to.
          </p>
        </section>

        {/* Our Mission Section */}
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
            Our Mission
          </h1>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            RUSH is a white hat project aiming to bring users together in a
            trustworthy community where users can learn and extract value
            positively, most importantly, have fun. RUSH is not a hype and dump
            project, and has long-term mentality as the leadership steering it.
          </p>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            Whilst the RUSH Cabal collection can be a high entry barrier for
            some, RUSH Artifacts is a lower tier NFT which will be available for
            the public to access the RUSH community and utility features.
          </p>
        </section>
      </div>
    </div>
  );
}
