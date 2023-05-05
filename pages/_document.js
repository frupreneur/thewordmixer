import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en-US">
      <Head>
        {/* <script
          async
          // data-client="ca-pub-4320323956955727"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          crossorigin="anonymous"
        ></script> */}

        {/* <Script
          id="googleAdSenseScript"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          data-ad-client="ca-pub-4320323956955727"
          strategy="beforeInteractive"
          // strategy="lazyOnLoad"
        /> */}

        <Script
          id="googleAdSenseScript"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          data-client="ca-pub-4320323956955727"
          strategy="lazyOnload"
        />

        {/* <Script
          id="show-autoads"
          dangerouslySetInnerHTML={{
            __html: `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4320323956955727"
            crossorigin="anonymous"></script>`,
          }}
          strategy="beforeInteractive"
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
