import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, 'src/assets/images/regenerated_image_1780829677406.png');
const outputDir = path.join(__dirname, 'src/assets/images');

async function resizeImage() {
  try {
    // Standard 400x400 WebP
    await sharp(inputPath)
      .resize(400, 400)
      .toFormat('webp', { quality: 85 })
      .toFile(path.join(outputDir, 'loader_logo_400.webp'));
      
    // Retina 800x800 WebP
    await sharp(inputPath)
      .resize(800, 800)
      .toFormat('webp', { quality: 85 })
      .toFile(path.join(outputDir, 'loader_logo_800.webp'));
      
    // Generate public/favicon.png (512x512 PNG)
    await sharp(inputPath)
      .resize(512, 512)
      .toFormat('png')
      .toFile(path.join(__dirname, 'public/favicon.png'));
      
    // Generate public/favicon.ico (32x32 PNG/ICO)
    await sharp(inputPath)
      .resize(32, 32)
      .toFormat('png')
      .toFile(path.join(__dirname, 'public/favicon.ico'));
      
    console.log('Successfully generated optimized images, favicons!');
  } catch (err) {
    console.error('Error generating images:', err);
  }
}

resizeImage();
