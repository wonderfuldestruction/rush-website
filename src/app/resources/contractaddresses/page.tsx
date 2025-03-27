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
          maxWidth: "900px", // Slightly wider for balance (adjusted from 820px)
          margin: "0 auto",
          textAlign: "left",
          color: "#ffffff", // Consistent white text
        }}
      >
        {/* Contract Addresses Section */}
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
            Contract Addresses
          </h1>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            <b>Red Rush Turbo ($RUSH) Token</b> | 0xe30A6FB6d2C153D4a09477e27b9a2A71c5C8acc8
          </p>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            <b>$RUSH Burned Txn</b> | 0x9bf9666943a03699400747c0ea3fc7a674ea23d78f2f7ecb1f9c5e6a910834b2
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
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            <b>RUSH Cabal NFT</b> | 0x67DA5f891023751fEBE5554F663F2A2AfFA8bEEA
          </p>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            <b>Treasury Wallet</b> | 0x4638d23CeBf6621c4686541ea4603318EB31AC85
          </p>
        </section>

        {/* Sunset Addresses Section */}
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
              fontWeight: "light", // Kept font-light as original
              color: "#ff4d4d",
              marginBottom: "20px",
              lineHeight: "1.2",
              textDecoration: "line-through", // Kept line-through as original
            }}
          >
            Sunset Addresses
          </h1>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            <b>Old RUSH Cabal NFT</b> | 0xe30A6FB6d2C153D4a09477e27b9a2A71c5C8acc8
          </p>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            <b>RUSH-PHAR LP</b> | 0x3534be1fd74f6c3f7f141486933c2d4d41dc7c0c
          </p>
          <p
            style={{
              margin: "12px 0",
              lineHeight: "1.6",
              fontSize: "1.1rem",
            }}
          >
            <b>RUSH-BTC.b LP</b> | 0x01f9723b0ac93d6464713047c0df4ecd9d4c3bac
          </p>
        </section>
      </div>
    </div>
  );
}