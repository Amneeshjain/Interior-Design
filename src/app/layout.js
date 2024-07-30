import { Inter } from "next/font/google";
import "./globals.css";
import MobileMenu from "../components/MobileMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/footer";
import Header from "../components/header";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <div>
          <Header />
          <MobileMenu />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
