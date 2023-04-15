import React from "react";
import Head from "next/head";
import { Header, Footer, Meta } from "../components";
import { Andika } from "@next/font/google";

const andika = Andika({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "optional",
});

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/assets/favicon.ico" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <main className={andika.className}>
        <Header />
        <section className="main">{children}</section>
        <Footer />
      </main>
    </>
  );
}
