import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, 'src/assets/images/regenerated_image_1780829676018.png');
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
      
    // Generate public/og-image.png (1200x630 with navy-dark background and centered logo)
    const logoResized = await sharp(inputPath)
      .resize({ height: 450, width: 900, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toBuffer();

    await sharp({
      create: {
        width: 1200,
        height: 630,
        channels: 4,
        background: { r: 6, g: 11, b: 31, alpha: 1 }
      }
    })
    .composite([{ input: logoResized, gravity: 'center' }])
    .toFormat('png')
    .toFile(path.join(__dirname, 'public/og-image.png'));

    // Also save as public/assets/og-image.webp (using WebP format) to cover both possible paths
    await sharp({
      create: {
        width: 1200,
        height: 630,
        channels: 4,
        background: { r: 6, g: 11, b: 31, alpha: 1 }
      }
    })
    .composite([{ input: logoResized, gravity: 'center' }])
    .toFormat('webp', { quality: 85 })
    .toFile(path.join(__dirname, 'public/assets/og-image.webp'));
      
    console.log('Successfully generated optimized images, favicons, OG images!');
  } catch (err) {
    console.error('Error generating images:', err);
  }
}

resizeImage();
