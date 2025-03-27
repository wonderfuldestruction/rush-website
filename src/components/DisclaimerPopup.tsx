"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function DisclaimerPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the disclaimer
    const hasSeenDisclaimer = localStorage.getItem("hasSeenDisclaimer");
    if (!hasSeenDisclaimer) {
      setShowPopup(true); // Show the pop-up if not seen
    }
  }, []);

  const handleClosePopup = () => {
    localStorage.setItem("hasSeenDisclaimer", "true"); // Mark disclaimer as seen
    setShowPopup(false); // Close the pop-up
  };

  if (!showPopup) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-black p-6 rounded-lg shadow-lg text-center max-w-md">
        <h2 className="text-xl font-bold mb-4">Disclaimer</h2>
        <p className="mb-4">RUSH is a meme themed project.</p>
        <p className="mb-4">
          Not financial advice. Rewards aren’t promised. Do your own
          research.
        </p>
        <p className="mb-4">Crypto is extremely volatile and you will lose money.</p>
        <Link href="/disclaimer" className="text-blue-500 underline mb-4 block">
          Read Full Disclaimer
        </Link>
        <button
          onClick={handleClosePopup}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          I understand & accept the risks
        </button>
      </div>
    </div>
  );
}
