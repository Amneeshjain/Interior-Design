import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "../components/footer";
import Header from "../components/header";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={dmSans.className}>
        <div className="">
          <div className="flex flex-col ">
            <Header />
          </div>

          <main className="grow flex flex-col">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
