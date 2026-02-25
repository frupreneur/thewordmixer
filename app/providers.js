"use client";

import React from "react";
import StateProvider from "@/state";

export function Providers({ children }) {
  React.useEffect(() => {
    let timer = setTimeout(async () => {
      try {
        const autoAdScript = document.querySelector("#googleAdSenseScript");

        if (autoAdScript && autoAdScript.attributes["data-nscript"]) {
          autoAdScript.removeAttribute("data-nscript");
        }

        if (autoAdScript) {
          autoAdScript.setAttribute(
            "src",
            `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4320323956955727`
          );
        }
      } catch (err) {
        console.error(err);
      }
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <StateProvider>{children}</StateProvider>;
}
