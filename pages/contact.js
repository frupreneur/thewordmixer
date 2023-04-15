import React from "react";
import { ContactForm, Meta } from "@/components";
import { useGlobalState } from "@/state";
import Link from "next/link";

export default function contact() {
  const { state } = useGlobalState();

  console.log(state);
  return (
    <>
      <Meta
        title="Contact Us - Rice Purity Test"
        description="If you have any questions or would like to partner with us, please contact us."
      />
      <ContactForm />
      <Link href="/" alt="Rice Purity Test">
        {" "}
        <button>TAKE RICE PURITY TEST</button>
      </Link>
    </>
  );
}
