const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// WebP変換設定
const WEBP_QUALITY = 85;
const INPUT_DIR = path.join(__dirname, 'public', 'assets', 'images');

// サポートされる画像拡張子
const SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];

async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: WEBP_QUALITY })
      .toFile(outputPath);
    
    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    const savings = Math.round((1 - outputStats.size / inputStats.size) * 100);
    
    console.log(`✓ ${path.basename(inputPath)} -> ${path.basename(outputPath)} (${savings}% smaller)`);
    return true;
  } catch (error) {
    console.error(`✗ Failed to convert ${inputPath}:`, error.message);
    return false;
  }
}

async function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let converted = 0;
  let skipped = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      const result = await processDirectory(fullPath);
      converted += result.converted;
      skipped += result.skipped;
    } else if (stat.isFile()) {
      const ext = path.extname(item);
      if (SUPPORTED_EXTENSIONS.includes(ext)) {
        const webpPath = fullPath.replace(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i, '.webp');
        
        // 既にWebPファイルが存在し、元ファイルより新しい場合はスキップ
        if (fs.existsSync(webpPath)) {
          const webpStats = fs.statSync(webpPath);
          if (webpStats.mtime > stat.mtime) {
            console.log(`- Skipping ${item} (already converted)`);
            skipped++;
            continue;
          }
        }
        
        const success = await convertToWebP(fullPath, webpPath);
        if (success) {
          converted++;
        }
      }
    }
  }
  
  return { converted, skipped };
}

async function main() {
  console.log('🚀 Starting WebP conversion...');
  console.log(`📁 Input directory: ${INPUT_DIR}`);
  console.log(`⚙️  Quality: ${WEBP_QUALITY}%\n`);
  
  try {
    const result = await processDirectory(INPUT_DIR);
    
    console.log('\n✅ Conversion complete!');
    console.log(`📊 Converted: ${result.converted} files`);
    console.log(`⏭️  Skipped: ${result.skipped} files`);
  } catch (error) {
    console.error('❌ Error during conversion:', error);
    process.exit(1);
  }
}

main();