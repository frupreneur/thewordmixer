import React from "react";
import Head from "next/head";
import { Header, Footer, Meta } from "../components";
import { Andika } from "@next/font/google";
// import Script from "next/script";
// // import * as gtag from "@/utils/gtag";
// import { useRouter } from "next/router";

const andika = Andika({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "optional",
});

export default function Layout({ children }) {
  // const router = useRouter();

  // React.useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     gtag.pageView(url);
  //   };
  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);
  return (
    <>
      {/* <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      /> */}
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
