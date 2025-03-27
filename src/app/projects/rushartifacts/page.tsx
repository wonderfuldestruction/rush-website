"use client";

export default function Home() {
  return (
    <div
      style={{
        position: "relative",
        height: "110vh", // Full viewport height
        width: "100%", // Full width
        overflow: "hidden",
      }}
    >
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
          RUSH Artifacts
        </h1>
        <ul
          className="flex gap-6 list-none m-0 p-0 justify-center" // Centered items
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          <li>
            <a
              href="/projects/rushartifacts"
              className="text-white no-underline hover:underline"
            >
              About RUSH Artifacts
            </a>
          </li>
        </ul>
      </nav>

      {/* Content */}
      <div
        style={{
          padding: "20px",
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "left",
          color: "#ffffff",
          position: "relative",
          zIndex: 2, 
        }}
      >
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
            About RUSH Artifacts
          </h1>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            RUSH Artifacts will be a lower tier NFT collection designed to reduce
          the entry barrier into RUSH ecosystem and access to our gated
          community.
          </p>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            This collection will be part of a wider operation that is
          under-development and is expected to have synergy with RUSH Cabal and
          access to future utilities and rewards.
          </p>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            Stay put for announcements.
          </p>
        </section>
      </div>
    </div>
  );
}
