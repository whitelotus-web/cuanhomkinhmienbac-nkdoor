import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const target = path.join(root, "dist", "cloudflare-pages");
const sourceBase = "https://cua-nhom-kinh-mien-bac.netlify.app";
const cloudflareBase = "https://cuanhomkinhmienbac.pages.dev";
const textExtensions = new Set([".html", ".xml", ".txt", ".css", ".js", ".webmanifest"]);
const rootFileExtensions = new Set([".html", ".css", ".js", ".xml", ".txt", ".webmanifest", ".toml"]);
const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg", ".ico"]);

function resetDir(dir) {
  if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
}

function copyFileWithRewrite(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  const ext = path.extname(src).toLowerCase();
  if (textExtensions.has(ext) || path.basename(src) === "robots.txt") {
    let content = fs.readFileSync(src, "utf8");
    if (ext === ".html") {
      content = content.replaceAll(
        '<meta name="robots" content="index, follow">',
        '<meta name="robots" content="noindex, nofollow">'
      );
    }
    fs.writeFileSync(dest, content, "utf8");
    return;
  }
  fs.copyFileSync(src, dest);
}

function copyRootFiles() {
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    if (!entry.isFile()) continue;
    const src = path.join(root, entry.name);
    const ext = path.extname(entry.name).toLowerCase();
    if (rootFileExtensions.has(ext) || entry.name === "robots.txt") {
      copyFileWithRewrite(src, path.join(target, entry.name));
    }
  }
}

function copyImages() {
  const imgDir = path.join(root, "img thi cong");
  if (!fs.existsSync(imgDir)) return;
  const outDir = path.join(target, "img thi cong");
  fs.mkdirSync(outDir, { recursive: true });
  for (const entry of fs.readdirSync(imgDir, { withFileTypes: true })) {
    if (!entry.isFile()) continue;
    const ext = path.extname(entry.name).toLowerCase();
    if (imageExtensions.has(ext)) {
      fs.copyFileSync(path.join(imgDir, entry.name), path.join(outDir, entry.name));
    }
  }
}

function writeCloudflareHeaders() {
  const headers = `/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: SAMEORIGIN
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  X-Robots-Tag: noindex, nofollow

/*.html
  Cache-Control: public, max-age=0, must-revalidate

/sitemap.xml
  Cache-Control: public, max-age=3600

/sitemap-index.xml
  Cache-Control: public, max-age=3600

/image-sitemap.xml
  Cache-Control: public, max-age=3600

/sitemap.txt
  Cache-Control: public, max-age=3600

/robots.txt
  Cache-Control: public, max-age=3600

/img thi cong/*
  Cache-Control: public, max-age=31536000, immutable
`;
  fs.writeFileSync(path.join(target, "_headers"), headers, "utf8");
}

function writeCloudflareRobots() {
  const robots = `User-agent: *
Disallow: /
`;
  fs.writeFileSync(path.join(target, "robots.txt"), robots, "utf8");
}

function auditBuild() {
  const sitemap = fs.readFileSync(path.join(target, "sitemap.xml"), "utf8");
  const robots = fs.readFileSync(path.join(target, "robots.txt"), "utf8");
  const index = fs.readFileSync(path.join(target, "index.html"), "utf8");
  const urlCount = (sitemap.match(/<loc>/g) || []).length;
  if (urlCount < 1) throw new Error("Cloudflare build sitemap has no URLs.");
  if (!sitemap.includes(sourceBase) || index.includes(cloudflareBase)) {
    throw new Error("Cloudflare mirror should keep Netlify canonical URLs.");
  }
  if (!robots.includes("Disallow: /") || !index.includes('content="noindex, nofollow"')) {
    throw new Error("Cloudflare mirror is missing noindex protection.");
  }
  return urlCount;
}

resetDir(target);
copyRootFiles();
copyImages();
writeCloudflareHeaders();
writeCloudflareRobots();
const urlCount = auditBuild();
console.log(`Built ${target} as noindex mirror with ${urlCount} Netlify canonical URLs for ${cloudflareBase}`);
