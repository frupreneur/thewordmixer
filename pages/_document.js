import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en-US">
      <Head>
      {/* <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7721600787257010"
        crossorigin="anonymous"
      ></script> */}

        {/* <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-147964524-28"
        ></Script>
        <Script id="GAcode">
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag(`js`, new Date()); gtag(`config`, `UA-147964524-28`);
        </Script> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
