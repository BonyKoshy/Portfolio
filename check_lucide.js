import * as lucide from "lucide-react";
const keys = Object.keys(lucide);
console.log("Total keys:", keys.length);
console.log(
  "Keys containing git:",
  keys.filter((k) => k.toLowerCase().includes("git"))
);
