"use client";
import { Inter } from "next/font/google";
import style from "../styles/home.module.css";
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
          <div className={style.social_media_icons}>
            <ul className={style.socialIcons_111}>
              <li className={style.social_facebook} >
                <Link href="https://www.facebook.com/ColonelzConstructions" target="_blank">

                  <img src="/Facebook.svg" alt="" />

                </Link>
              </li>
              <li className={style.social_instagram}>
                <Link href="https://www.instagram.com/colonelzconstructions/" target="_blank">

                  <img src="/instagram.svg" alt="" />

                </Link>
              </li>
              <li className={style.social_youtube} >
                <Link href="https://www.youtube.com/@ColonelzConstruction" target="_blank">

                  <img src="/YouTube.svg" alt="" />

                </Link>
              </li>
              <li className={style.social_linked} >
                <Link href="https://www.linkedin.com/company/colonelz/?originalSubdomain=in" target="_blank">

                  <img src="/linked.png" alt="" width="22px" />

                </Link>
              </li>
            </ul>
          </div>
          <MobileMenu />

          {children}
          <Footer />
        </div>

      </body>
    </html>
  );
}
