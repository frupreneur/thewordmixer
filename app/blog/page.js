import { blogPosts } from "@/db";
import Blog from "@/components/Blog";

export const metadata = {
  title: "Blog - The Word Mixer",
  description:
    "A Word mixer / word combiner that you can use to combine words or names for free. This combine words generator generates creative, readable & amazing combinations. Visit now!",
  openGraph: {
    title: "Blog - The Word Mixer",
    type: "article",
    description:
      "A Word mixer / word combiner that you can use to combine words or names for free.",
    url: "https://thewordmixer.com/blog",
    images: ["https://thewordmixer.com"],
    siteName: "Rice Purity Testing",
  },
  robots: "index, follow",
};

export default function BlogPage() {
  return (
    <div className="site-wrap" id="site-wrap">
      <h1 style={{ marginTop: "0 !important" }}>{`Blog - The Word Mixer`}</h1>
      <p className="intro">
        Browse through our trending posts which users love
      </p>
      <Blog blogPosts={blogPosts} />
    </div>
  );
}
