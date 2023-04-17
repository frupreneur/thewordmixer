import React from "react";
import { ContactForm, Meta } from "@/components";
import { useGlobalState } from "@/state";
import Link from "next/link";

export default function Contact() {
  const { state } = useGlobalState();

  console.log(state);
  return (
    <>
      <Meta
        title="Contact Us - The Word Mixer"
        description="If you have any questions or would like to partner with us, please contact us."
      />
      <ContactForm />
    </>
  );
}
