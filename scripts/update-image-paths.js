const fs = require('fs');
const path = require('path');

// 更新対象の拡張子とディレクトリ
const TARGET_EXTENSIONS = ['.jsx', '.tsx'];
const SRC_DIR = path.join(__dirname, 'src');

// 画像拡張子の置換マッピング
const IMAGE_REPLACEMENTS = [
  { from: /\.jpg/g, to: '.webp' },
  { from: /\.jpeg/g, to: '.webp' },
  { from: /\.png/g, to: '.webp' },
  { from: /\.JPG/g, to: '.webp' },
  { from: /\.JPEG/g, to: '.webp' },
  { from: /\.PNG/g, to: '.webp' }
];

function updateImagePaths(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // 各拡張子を.webpに置換
    IMAGE_REPLACEMENTS.forEach(replacement => {
      if (content.match(replacement.from)) {
        content = content.replace(replacement.from, replacement.to);
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Updated: ${path.relative(SRC_DIR, filePath)}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`✗ Error updating ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let updatedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      updatedCount += processDirectory(fullPath);
    } else if (stat.isFile()) {
      const ext = path.extname(item);
      if (TARGET_EXTENSIONS.includes(ext)) {
        if (updateImagePaths(fullPath)) {
          updatedCount++;
        }
      }
    }
  }
  
  return updatedCount;
}

function main() {
  console.log('🔄 Updating image paths to WebP format...');
  console.log(`📁 Source directory: ${SRC_DIR}\n`);
  
  const updatedCount = processDirectory(SRC_DIR);
  
  console.log(`\n✅ Update complete!`);
  console.log(`📊 Updated files: ${updatedCount}`);
}

main();