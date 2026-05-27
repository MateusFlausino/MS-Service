const fs = require('fs');
const path = require('path');

const root = __dirname;
const outDir = path.join(root, 'dist');

function copyRecursive(source, target) {
  if (!fs.existsSync(source)) return;

  const stat = fs.statSync(source);
  if (stat.isDirectory()) {
    fs.mkdirSync(target, { recursive: true });
    for (const entry of fs.readdirSync(source)) {
      copyRecursive(path.join(source, entry), path.join(target, entry));
    }
    return;
  }

  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(source, target);
}

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

copyRecursive(path.join(root, 'index.html'), path.join(outDir, 'index.html'));
copyRecursive(path.join(root, 'src'), path.join(outDir, 'src'));
copyRecursive(path.join(root, 'public'), path.join(outDir, 'public'));

console.log('MS Service static build generated in dist/');
