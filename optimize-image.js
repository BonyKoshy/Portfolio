import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function optimize() {
  const inputPath = 'public/profile-image.jpg';
  const outputPath = 'public/profile-image-optimized.jpg';

  if (!fs.existsSync(inputPath)) {
    console.log('Input file not found');
    return;
  }

  try {
    await sharp(inputPath)
      .resize(800) // Max width 800px
      .jpeg({ quality: 80, progressive: true })
      .toFile(outputPath);
    
    const oldSize = fs.statSync(inputPath).size;
    const newSize = fs.statSync(outputPath).size;
    
    console.log(`Optimized: ${inputPath}`);
    console.log(`Original size: ${(oldSize / 1024).toFixed(2)} KB`);
    console.log(`New size: ${(newSize / 1024).toFixed(2)} KB`);

    // Replace original
    fs.unlinkSync(inputPath);
    fs.renameSync(outputPath, inputPath);
    console.log('Original replaced with optimized version.');
  } catch (err) {
    console.error('Error optimizing image:', err);
  }
}

optimize();
