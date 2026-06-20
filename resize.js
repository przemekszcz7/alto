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
      
    console.log('Successfully generated optimized images!');
  } catch (err) {
    console.error('Error generating images:', err);
  }
}

resizeImage();
