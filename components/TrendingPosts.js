import React from "react";
import { trendingPosts } from "../db";
import Link from "next/link";

export default function TrendingPosts() {
  return (
    <div
     
    >
      <h2
      
      >
        Trending On The Word Mixer
      </h2>
      {trendingPosts.map((x, i) => {
        return (
          <Link key={i} href={x.path}>
            <p> {x.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
