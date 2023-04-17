import React from "react";
import { WordMixer, Meta, TrendingPosts } from "@/components";
import { DATABASE, testimonials } from "@/db";
import Link from "next/link";
import Image from "next/image";
import { useGlobalState } from "@/state";

export default function BlogPage(props) {
  const { state, setState } = useGlobalState();

  return (
    <>
      <Meta title="Blog - The Word Mixer" />

      <div className="site-wrap" id="site-wrap">
        <h1 style={{ marginTop: "0 !important" }}>{`Blog - The Word Mixer`}</h1>
        <p className="intro">
          Browse through our trending posts which users love
        </p>

        <TrendingPosts />
      </div>
    </>
  );
}
