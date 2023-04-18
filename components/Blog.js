import React from "react";
import { blogPosts } from "../db";
import Link from "next/link";

export default function Blog() {

  return (
    <div>
      <h2>Posts On The Word Mixer</h2>
      {blogPosts.map((x, i) => {
        return (
          <Link key={i} href={x.path}>
            <p> {x.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
