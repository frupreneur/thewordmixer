import { NextResponse } from "next/server";
import { readFileSync } from "fs";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const convert = (await import("xml-js")).default;
    const xml = readFileSync("./public/sitemap-0.xml", "utf8");
    const result2 = convert.xml2json(xml, { compact: false, spaces: 4 });
    console.log(
      JSON.parse(result2).elements[0].elements[0].elements[0].elements
    );
    return NextResponse.json({ message: "Done" });
  } catch (error) {
    return NextResponse.json({ message: "Error", error: error.message }, { status: 500 });
  }
}
