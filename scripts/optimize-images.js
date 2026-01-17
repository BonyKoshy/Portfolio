import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, "..");
const publicDir = path.join(projectRoot, "public");
const projectsDir = path.join(publicDir, "projects");
const certsDir = path.join(publicDir, "certs");

// Configuration
const MAX_WIDTH = 800; // Resize large project screenshots
const QUALITY = 80;

/** Recursively processes directories to optimize images to WebP. */
async function processDirectory(directory) {
  try {
    if (!fs.existsSync(directory)) {
      console.log(`Directory not found: ${directory}`);
      return;
    }
    const files = await fs.promises.readdir(directory);

    for (const file of files) {
      const filePath = path.join(directory, file);
      const stat = await fs.promises.stat(filePath);

      if (stat.isDirectory()) {
        await processDirectory(filePath);
      } else if (/\.(png|jpg|jpeg)$/i.test(file)) {
        const ext = path.extname(file);
        const name = path.basename(file, ext);
        const newFilePath = path.join(directory, `${name}.webp`);

        console.log(`Processing: ${file}`);

        const image = sharp(filePath);
        const metadata = await image.metadata();

        let pipeline = image.webp({ quality: QUALITY });

        if (metadata.width > MAX_WIDTH) {
          pipeline = pipeline.resize({ width: MAX_WIDTH });
        }

        await pipeline.toFile(newFilePath);
        console.log(`Created: ${name}.webp`);

        await fs.promises.unlink(filePath);
        console.log(`Deleted original: ${file}`);
      }
    }
  } catch (error) {
    console.error("Error processing directory:", error);
  }
}

console.log("Starting image optimization...");
await processDirectory(projectsDir);
await processDirectory(certsDir);

const profileImgPath = path.join(publicDir, "profile-image.jpg");
const profilePngPath = path.join(publicDir, "profile-image.png");

if (fs.existsSync(profileImgPath)) {
  console.log("Processing profile-image.jpg");
  await sharp(profileImgPath)
    .resize({ width: 500 }) // Resizes profile image to optimal display size.
    .webp({ quality: QUALITY })
    .toFile(path.join(publicDir, "profile-image.webp"));
  console.log("Created profile-image.webp");
}
if (fs.existsSync(profilePngPath)) {
  console.log("Processing profile-image.png");
  await sharp(profilePngPath)
    .resize({ width: 500 })
    .webp({ quality: QUALITY })
    .toFile(path.join(publicDir, "profile-image.webp"));
  console.log("Created profile-image.webp");
  await fs.promises.unlink(profilePngPath);
  console.log("Deleted original: profile-image.png");
}

console.log("Image optimization complete.");
