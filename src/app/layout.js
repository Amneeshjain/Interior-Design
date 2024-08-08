"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileMenu from "../components/MobileMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    // Dynamically import the Bootstrap JS bundle
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <div className="hide-in-web">
            <div className="fixedButton">
              <Link href="/get-in-touch">Get In Touch</Link>
            </div>
          </div>
          <Header />

          <MobileMenu />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
