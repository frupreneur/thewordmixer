import React from "react";
export default function Ad() {
  const adHolder = React.useRef();
  React.useEffect(() => {
    adHolder.current.innerHTML = `<svg
    version="1.1"
    id="L9"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 100 100"
    enable-background="new 0 0 0 0"
    xml:space="preserve"
  >
    <path
      fill="#5a097a"
      d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
    >
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        dur="1s"
        from="0 50 50"
        to="360 50 50"
        repeatCount="indefinite"
      />
    </path>
  </svg>`;
   
 
    // ad cleaner

    let timer = setTimeout(() => {
      adHolder.current.innerHTML = `<ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4320323956955727"
      data-ad-slot="1063568912"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>`;
      
      try {
        if (typeof window !== "undefined") {
          (adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (err) {
        console.error(err);
      }
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <>
      <div id="ads" className={`ad-container`} aria-hidden="true">
        <p style={{ fontStyle: "italic" }}>Advertisement</p>
        <div className="adHolder" ref={adHolder}>
        </div>
      </div>
    </>
  );
}
