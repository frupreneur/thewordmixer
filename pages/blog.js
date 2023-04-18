import { Meta, Blog } from "@/components";

export default function BlogPage(props) {
  return (
    <>
      <Meta title="Blog - The Word Mixer" />

      <div className="site-wrap" id="site-wrap">
        <h1 style={{ marginTop: "0 !important" }}>{`Blog - The Word Mixer`}</h1>
        <p className="intro">
          Browse through our trending posts which users love
        </p>

        <Blog />
      </div>
    </>
  );
}
