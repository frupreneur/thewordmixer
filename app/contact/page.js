import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us - The Word Mixer",
  description:
    "If you have any questions or would like to partner with us, please contact us.",
  openGraph: {
    title: "Contact Us - The Word Mixer",
    type: "article",
    description:
      "If you have any questions or would like to partner with us, please contact us.",
    url: "https://thewordmixer.com/contact",
    images: ["https://thewordmixer.com"],
    siteName: "Rice Purity Testing",
  },
  robots: "index, follow",
};

export default function ContactPage() {
  return <ContactForm />;
}
