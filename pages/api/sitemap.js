var convert = require("xml-js");
const fs = require("fs");

export default function handler(req, res) {
  var xml = fs.readFileSync("./public/sitemap-0.xml", "utf8");
  // var result1 = convert.xml2json(xml, { compact: true, spaces: 4 });
  var result2 = convert.xml2json(xml, { compact: false, spaces: 4 });
  console.log(JSON.parse(result2).elements[0].elements[0
].elements[0].elements);

  res.status(200).json({ message: "Done" });
}
