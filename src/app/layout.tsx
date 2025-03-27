import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DisclaimerPopup from "../components/DisclaimerPopup";

export const metadata: Metadata = {
  title: "RUSH",
  description: "RUSH | ShadowFi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Navigation Bar */}
        <nav
          className="p-0 sticky top-0 z-100"
          style={{
            background: "linear-gradient(90deg, #a80000 0%, #4d0000 100%)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
            borderBottom: "1px solid rgba(255, 77, 77, 0.3)",
          }}
        >
          <ul
            className="flex gap-8 m-0 p-1 list-none justify-center items-center"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            <li>
              <Link
                href="/"
                className="text-white no-underline py-2 px-4 rounded-md transition-all duration-300 hover:bg-red-800 hover:text-gray-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-white no-underline py-2 px-4 rounded-md transition-all duration-300 hover:bg-red-800 hover:text-gray-200"
              >
                About
              </Link>
            </li>
            {/* dApp with Dropdown */}
            <li className="relative group">
              <span className="text-white no-underline py-2 px-4 rounded-md transition-all duration-300 hover:bg-red-800 hover:text-gray-200 cursor-pointer">
                dApp
              </span>
              <ul
                className="absolute left-0 mt-0 hidden group-hover:block rounded-lg shadow-lg p-2 w-56"
                style={{
                  background: "rgba(40, 40, 40, 0.9)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 77, 77, 0.2)",
                }}
              >
                <li>
                  <Link
                    href="/raw.gif"
                    className="block text-white no-underline hover:bg-red-700 p-2 rounded transition-all duration-200"
                  >
                    Coming Soon
                  </Link>
                </li>
              </ul>
            </li>
            {/* Projects with Dropdown */}
            <li className="relative group">
              <span className="text-white no-underline py-2 px-4 rounded-md transition-all duration-300 hover:bg-red-800 hover:text-gray-200 cursor-pointer">
                Projects
              </span>
              <ul
                className="absolute left-0 mt-0 hidden group-hover:block rounded-lg shadow-lg p-2 w-56"
                style={{
                  background: "rgba(40, 40, 40, 0.9)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 77, 77, 0.2)",
                }}
              >
                <li>
                  <Link
                    href="/projects/rushtoken"
                    className="block text-white no-underline hover:bg-red-700 p-2 rounded transition-all duration-200"
                  >
                    Red Rush Turbo
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects/rushcabal"
                    className="block text-white no-underline hover:bg-red-700 p-2 rounded transition-all duration-200"
                  >
                    RUSH Cabal
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects/rushartifacts"
                    className="block text-white no-underline hover:bg-red-700 p-2 rounded transition-all duration-200"
                  >
                    RUSH Artifacts
                  </Link>
                </li>
              </ul>
            </li>
            {/* Resources with Dropdown */}
            <li className="relative group">
              <span className="text-white no-underline py-2 px-4 rounded-md transition-all duration-300 hover:bg-red-800 hover:text-gray-200 cursor-pointer">
                Resources
              </span>
              <ul
                className="absolute left-0 mt-0 hidden group-hover:block rounded-lg shadow-lg p-2 w-56"
                style={{
                  background: "rgba(40, 40, 40, 0.9)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 77, 77, 0.2)",
                }}
              >
                <li>
                  <Link
                    href="/resources/contractaddresses"
                    className="block text-white no-underline hover:bg-red-700 p-2 rounded transition-all duration-200"
                  >
                    Contract Addresses
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/disclaimer"
                className="text-white no-underline py-2 px-4 rounded-md transition-all duration-300 hover:bg-red-800 hover:text-gray-200"
              >
                Disclaimer
              </Link>
            </li>
            {/* Discord Icon */}
            <li>
              <a
                href="https://discord.gg/tB7VDtePuR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white no-underline p-2"
              >
                <Image
                  src="/discord.svg"
                  alt="Discord"
                  width={28}
                  height={28}
                />
              </a>
            </li>
            {/* X Icon */}
            <li>
              <a
                href="https://x.com/rushshadowfi" // Replace with your X link
                target="_blank"
                rel="noopener noreferrer"
                className="text-white no-underline p-2"
              >
                <Image
                  src="/x.svg"
                  alt="X"
                  width={25}
                  height={25}
                />
              </a>
            </li>
          </ul>
        </nav>

        {/* Disclaimer Pop-up */}
        <DisclaimerPopup />

        {/* Page Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
