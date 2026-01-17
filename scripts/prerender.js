import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, "../dist");
const ROUTES = [
  "/",
  "/about",
  "/projects",
  "/contact",
  "/certificates",
  "/privacy",
];

import { spawn } from "child_process";

const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;

/** Prerenders the application by visiting routes with Puppeteer and saving the HTML. */
async function main() {
  // Spawns the Vite preview server to serve the built app.
  const server = spawn(
    "npm",
    ["run", "preview", "--", "--port", PORT.toString()],
    {
      stdio: "inherit",
      shell: true,
    }
  );

  console.log("Waiting for server...");
  await new Promise((r) => setTimeout(r, 3000));

  const browser = await puppeteer.launch();

  for (const route of ROUTES) {
    try {
      const page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 800 });

      console.log(`Prerendering ${route}...`);
      await page.goto(`${BASE_URL}${route}`, { waitUntil: "networkidle0" });

      // Waits 1s for hydration and animations to complete before capturing.
      await new Promise((r) => setTimeout(r, 1000));

      const html = await page.content();

      const filePath =
        route === "/"
          ? path.join(DIST_DIR, "index.html")
          : path.join(DIST_DIR, route, "index.html");

      const dirPath = path.dirname(filePath);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }

      fs.writeFileSync(filePath, html);
      console.log(`Generated ${filePath}`);
    } catch (e) {
      console.error(`Failed to render ${route}:`, e);
    }
  }

  await browser.close();
  server.kill();
  process.exit(0);
}

main();
