import { Andika } from "next/font/google";
import "@/styles/globals.css";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const andika = Andika({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "optional",
});

export const metadata = {
  icons: { icon: "/assets/favicon.ico" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <body>
        <Providers>
          <main className={andika.className}>
            <Header />
            <section className="main">{children}</section>
            <Footer />
          </main>
        </Providers>
        <Script
          id="googleAdSenseScript"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
