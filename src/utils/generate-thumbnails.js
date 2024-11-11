// scripts/generate-thumbnails.js
import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const THUMBNAIL_WIDTH = 800; // Adjust this value as needed
const SOURCE_DIR = 'src/imgs';
const THUMBNAIL_DIR = 'src/imgs/thumbnails';

async function generateThumbnails() {
  try {
    // Create thumbnails directory if it doesn't exist
    await mkdir(THUMBNAIL_DIR, { recursive: true });

    // Read all files from the gallery directory
    const files = await readdir(SOURCE_DIR);
    
    // Filter for image files
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|webp)$/i.test(file) && file !== 'thumbnails'
    );

    // Process each image
    for (const file of imageFiles) {
      const sourcePath = join(SOURCE_DIR, file);
      const targetPath = join(THUMBNAIL_DIR, file);

      await sharp(sourcePath)
        // Preserve orientation metadata
        .rotate() // This automatically rotates based on EXIF orientation
        .resize(THUMBNAIL_WIDTH, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        // Keep metadata including orientation
        .withMetadata()
        // Use higher quality for better results
        .jpeg({ 
          quality: 85,
          force: false // Don't force JPEG if original is PNG/WebP
        })
        .png({ 
          force: false // Don't force PNG if original is JPEG/WebP
        })
        .webp({ 
          quality: 85,
          force: false // Don't force WebP if original is JPEG/PNG
        })
        .toFile(targetPath);

      console.log(`Generated thumbnail for ${file}`);
    }

    console.log('All thumbnails generated successfully!');
  } catch (error) {
    console.error('Error generating thumbnails:', error);
  }
}

generateThumbnails();