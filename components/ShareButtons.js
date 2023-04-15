import React from "react";
import { FaWhatsapp, FaRegCopy, FaFacebook } from "react-icons/fa";
import Link from "next/link";

export default function ShareButtons() {
  const link = "https://www.ricepuritytesting.com";
  return (
    <div className="card">
      <div className="share-container">
        <h2>Help Your Friends!!!</h2>
        <p>
          Dont stop the fun, share this website with friends so they can check
          their purity level <br />
          (Your results will not be shared)
        </p>
        <div className="share-buttons">
          <Link
            href={`https://api.whatsapp.com/send?text=How Pure Are You?  %0a %0aTake this 100-Question Rice Purity Test / Innocence Test to Find Out! Get Ready for Some Surprises 👇 %0a${link}`}
            target="_blank"
            className="share-button wa"
          >
            <FaWhatsapp style={{ fontSize: "1.5rem" }} />{" "}
            <span> {`Share On WhatsApp`}</span>
          </Link>

          <Link
            href={`https://web.facebook.com/share.php?u=${link}`}
            target="_blank"
            className="share-button fb"
          >
            <FaFacebook style={{ fontSize: "1.5rem" }} />{" "}
            <span> {`Share On Facebook`}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
