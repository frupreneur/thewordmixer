import { Meta, Blog } from "@/components";
import { blogPosts } from "@/db";

export default function BlogPage({ blogPosts }) {
  return (
    <>
      <Meta title="Blog - The Word Mixer" />

      <div className="site-wrap" id="site-wrap">
        <h1 style={{ marginTop: "0 !important" }}>{`Blog - The Word Mixer`}</h1>
        <p className="intro">
          Browse through our trending posts which users love
        </p>

        <Blog blogPosts={blogPosts} />
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      blogPosts,
    }, // will be passed to the page component as props
  };
}
