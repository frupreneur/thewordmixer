import React from "react";
import { footerMenu, menu } from "../db";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footerHeader">
          <ul className="footer-menu">
            {menu.slice(0,4).map((menuItem, i) => (
              <li key={i}>
                <Link href={menuItem.path}>{menuItem.name}</Link>
              </li>
            ))}
          </ul>
        </div>
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
      </div>
    </footer>
  );
}
