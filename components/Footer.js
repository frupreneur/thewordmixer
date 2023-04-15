import React from "react";
import { footerMenu } from "../db";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-menu">
        {footerMenu.map((menuItem, i) => (
          <li key={i}>
            <Link href={menuItem.path}>{menuItem.name}</Link>
          </li>
        ))}
      </ul>
      <p>
        {`All rights reserved © The Word Mixer ${new Date().getFullYear()}`}{" "}
      </p>
    </footer>
  );
}
