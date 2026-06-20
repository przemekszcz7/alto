import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, 'src/assets/images/regenerated_image_1780829677406.png');
const outputDir = path.join(__dirname, 'src/assets/images');

async function resizeImage() {
  try {
    // Ensure public/assets directory exists
    const publicAssetsDir = path.join(__dirname, 'public/assets');
    fs.mkdirSync(publicAssetsDir, { recursive: true });

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

    // Generate public/assets/og-image.webp (1200x630 beautiful OG share image banner)
    const logoResized = await sharp(path.join(__dirname, 'src/assets/images/regenerated_image_1780829676018.png'))
      .resize({ width: 680, height: 340, fit: 'inside' })
      .toBuffer();

    await sharp({
      create: {
        width: 1200,
        height: 630,
        channels: 4,
        background: { r: 6, g: 11, b: 31, alpha: 1 } // Navy Dark: #060B1F
      }
    })
    .composite([{ input: logoResized, gravity: 'center' }])
    .toFormat('webp', { quality: 90 })
    .toFile(path.join(publicAssetsDir, 'og-image.webp'));
      
    console.log('Successfully generated optimized images, favicons, and OG banner!');
  } catch (err) {
    console.error('Error generating images:', err);
  }
}

resizeImage();
