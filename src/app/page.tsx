'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const images = [
    '/2.png',
    '/4.png',
    '/21.png',
    '/25.png',
    '/30.png',
    '/33.png',
    '/35.png',
    '/37.png',
    '/41.png',
    '/46.png',
    '/hauntednft.png',
  ];

  const [activeImage, setActiveImage] = useState(0);

  // Cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#1a1a1a",
      }}
    >
      {/* Fading Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          zIndex: 1,
        }}
      >
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Background ${index}`}
            fill
            style={{
              objectFit: "cover",
              opacity: index === activeImage ? 0.2 : 0,
              transition: "opacity 2s ease-in-out",
            }}
          />
        ))}
      </div>

      {/* Centered Content */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 0,
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-geist-sans)", // Use Geist font
            fontSize: "7rem",
            fontWeight: "bold",
            lineHeight: "1.1",
            color: "white",
            textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            margin: 0,
          }}
        >
          RUSH
        </h1>
        <p
          style={{
            fontFamily: "var(--font-geist-sans)", // Use Geist font
            color: "white",
            fontSize: "1.1rem",
            textAlign: "center",
            lineHeight: "1.2",
            margin: "10px 0 0 0",
            textShadow: "0 0 5px rgba(255, 255, 255, 0.5)",
          }}
        >
          ShadowFi | Cabal Driven | Version 1.0
        </p>
      </div>
    </div>
  );
}