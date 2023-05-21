import React from "react";
import Link from "next/link";

export default function Blog({ blogPosts }) {
  return (
    <div>
      <h2>Posts On The Word Mixer</h2>
      {blogPosts.map((x, i) => {
        return (
          <Link key={i} href={x.path} style={{margin: "1rem"}}>
            <p> {x.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
