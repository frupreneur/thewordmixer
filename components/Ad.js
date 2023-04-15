import React from "react";
export default function Ad() {
  const adHolder = React.useRef();
  React.useEffect(() => {
    adHolder.current.innerHTML = `<ins
    class="adsbygoogle"
    style="display:block"
    data-ad-client="ca-pub-4787236575206177"
    data-ad-slot="6071203613"
    data-ad-format="auto"
    data-full-width-responsive="true"
  ></ins>`;

    let timer = setTimeout(() => {
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
        <div className="adHolder" ref={adHolder}></div>
      </div>
    </>
  );
}
