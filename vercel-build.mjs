import fs from 'fs/promises';
import { execSync } from 'child_process';
import path from 'path';

console.log("Starting custom Vercel build...");

// 1. Run standard build
execSync('npm run build', { stdio: 'inherit' });

// 2. Create Vercel Build Output API structure
await fs.mkdir('.vercel/output/static', { recursive: true });
await fs.mkdir('.vercel/output/functions/index.func', { recursive: true });

// 3. Copy dist/client to static
const copyDir = async (src, dest) => {
  await fs.mkdir(dest, { recursive: true });
  let entries = await fs.readdir(src, { withFileTypes: true });
  for (let entry of entries) {
    let srcPath = path.join(src, entry.name);
    let destPath = path.join(dest, entry.name);
    entry.isDirectory() ? await copyDir(srcPath, destPath) : await fs.copyFile(srcPath, destPath);
  }
};
await copyDir('dist/client', '.vercel/output/static');

// 4. Copy dist/server to index.func
await copyDir('dist/server', '.vercel/output/functions/index.func');

// 5. Create edge function config
await fs.writeFile('.vercel/output/functions/index.func/.vc-config.json', JSON.stringify({
  runtime: 'edge',
  entrypoint: 'server.js'
}, null, 2));

// 6. Create routing config
await fs.writeFile('.vercel/output/config.json', JSON.stringify({
  version: 3,
  routes: [
    { handle: "filesystem" },
    { src: "/(.*)", dest: "/index" }
  ]
}, null, 2));

console.log("Vercel Build Output API structure created successfully!");
