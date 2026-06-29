import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const baseUrl = "https://cua-nhom-kinh-mien-bac.netlify.app";
const today = "2026-06-29";
const phone = "0975.337.071";
const phoneHref = "0975337071";
const ogImage = `${baseUrl}/img%20thi%20cong/IMG_1774397594460_1774416357947_1.jpg`;

const pages = [
  {
    slug: "kinh-an-toan-hai-lop.html",
    title: "Kính An Toàn Hai Lớp | Ứng Dụng Cho Cửa Nhôm Kính",
    description: "Tư vấn kính an toàn hai lớp cho cửa nhôm kính, cửa ban công, cửa sổ, vách kính. So sánh kính an toàn, kính cường lực và kính hộp.",
    eyebrow: "Kính an toàn",
    h1: "Kính An Toàn Hai Lớp Cho Cửa Nhôm Kính Và Vách Kính",
    intro: "Kính an toàn hai lớp thường được chọn cho cửa nhôm kính, cửa ban công, cửa sổ và vách kính cần tăng an toàn khi sử dụng. Lớp phim ở giữa giúp hạn chế mảnh kính rơi văng khi có va đập.",
    cards: [
      ["Khi nào nên dùng?", ["Cửa ban công, cửa sổ tầng cao, khu vực có trẻ nhỏ.", "Vách kính trong nhà, văn phòng, showroom.", "Công trình cần ưu tiên an toàn hơn kính thường."]],
      ["So với kính cường lực", ["Kính cường lực chịu lực tốt nhưng khi vỡ sẽ vỡ vụn.", "Kính an toàn có lớp phim giữ mảnh kính tốt hơn.", "Có thể kết hợp giải pháp theo từng vị trí và ngân sách."]],
      ["Liên kết liên quan", ["cua-nhom-kinh.html", "cua-nhom-kinh-ban-cong.html", "bao-gia-kinh-cuong-luc.html"]]
    ]
  },
  {
    slug: "kinh-hop-cach-am-cach-nhiet.html",
    title: "Kính Hộp Cách Âm Cách Nhiệt | Giải Pháp Cửa Nhôm Kính",
    description: "Tư vấn kính hộp cách âm cách nhiệt cho cửa nhôm kính nhà phố, chung cư, văn phòng. Khi nào nên dùng kính hộp, ưu điểm và lưu ý thi công.",
    eyebrow: "Kính hộp",
    h1: "Kính Hộp Cách Âm Cách Nhiệt Cho Cửa Nhôm Kính",
    intro: "Kính hộp là phương án nâng cấp cho công trình cần tăng cách âm, cách nhiệt và giảm đọng sương. Hiệu quả phụ thuộc vào cấu tạo kính, hệ nhôm, gioăng và độ kín khi lắp đặt.",
    cards: [
      ["Phù hợp công trình nào?", ["Nhà phố gần đường lớn, căn hộ hướng nắng hoặc hướng ồn.", "Văn phòng, phòng họp, không gian cần yên tĩnh.", "Cửa sổ và cửa ban công cần giảm nóng, giảm tiếng ồn."]],
      ["Điểm cần tính kỹ", ["Độ dày tổng thể của kính và khả năng chịu tải của hệ nhôm.", "Phụ kiện phải phù hợp trọng lượng cánh.", "Thi công kín khít để phát huy hiệu quả cách âm."]],
      ["Liên kết liên quan", ["cua-nhom-kinh-cach-am.html", "cua-so-nhom-kinh.html", "phu-kien-cua-nhom-kinh.html"]]
    ]
  },
  {
    slug: "kich-thuoc-cua-nhom-kinh.html",
    title: "Kích Thước Cửa Nhôm Kính | Cách Đo Ô Chờ Trước Khi Báo Giá",
    description: "Hướng dẫn đo kích thước cửa nhôm kính, cửa sổ, cửa đi, cửa ban công trước khi báo giá. Các thông tin cần gửi để khảo sát nhanh.",
    eyebrow: "Kích thước cửa",
    h1: "Cách Đo Kích Thước Cửa Nhôm Kính Trước Khi Báo Giá",
    intro: "Kích thước cửa nhôm kính cần đo đúng rộng, cao, độ dày tường, hướng mở và hiện trạng ô chờ. Thông tin càng rõ thì báo giá sơ bộ càng sát trước khi khảo sát thực tế.",
    cards: [
      ["Cách đo cơ bản", ["Đo rộng x cao ở nhiều điểm để phát hiện ô chờ lệch.", "Chụp ảnh toàn cảnh và ảnh cận mép tường, nền, trần.", "Ghi rõ cửa đi, cửa sổ, cửa ban công hay vách kính."]],
      ["Sai số thường gặp", ["Tường không vuông, nền chưa hoàn thiện, ô chờ bị vênh.", "Chưa tính hướng mở, tay nắm, khóa và khoảng mở cánh.", "Không kiểm tra vị trí thoát nước ở cửa ban công."]],
      ["Liên kết liên quan", ["checklist-khao-sat-cua-nhom-kinh.html", "bao-gia-cua-nhom-kinh.html", "cua-di-nhom-kinh-4-canh.html"]]
    ]
  },
  {
    slug: "mau-cua-nhom-kinh-dep.html",
    title: "Mẫu Cửa Nhôm Kính Đẹp | Gợi Ý Cửa Đi, Cửa Sổ, Ban Công",
    description: "Gợi ý mẫu cửa nhôm kính đẹp cho nhà phố, chung cư, văn phòng: cửa đi, cửa sổ, cửa lùa, cửa ban công, màu khung và kiểu kính.",
    eyebrow: "Mẫu cửa đẹp",
    h1: "Mẫu Cửa Nhôm Kính Đẹp Cho Nhà Phố, Chung Cư, Văn Phòng",
    intro: "Mẫu cửa nhôm kính đẹp cần phù hợp kiến trúc, màu khung, loại kính, kiểu mở và nhu cầu sử dụng. NK Door tư vấn theo hiện trạng công trình thay vì chọn mẫu chỉ theo ảnh tham khảo.",
    cards: [
      ["Nhóm mẫu phổ biến", ["Cửa đi nhôm kính 1 cánh, 2 cánh, 4 cánh.", "Cửa sổ mở quay, mở hất, mở lùa.", "Cửa ban công, cửa lùa phòng ngủ, vách kính lấy sáng."]],
      ["Cách chọn màu", ["Màu ghi, đen, trắng hoặc vân gỗ tùy phong cách nhà.", "Nên đồng bộ màu cửa, lan can, mặt tiền và nội thất.", "Công trình nhiều bộ cửa nên chọn màu dễ bảo trì."]],
      ["Liên kết liên quan", ["cua-nhom-kinh.html", "cua-so-nhom-kinh.html", "cua-lua-nhom-kinh.html"]]
    ]
  },
  {
    slug: "cua-nhom-kinh-nha-ve-sinh.html",
    title: "Cửa Nhôm Kính Nhà Vệ Sinh | Cửa Khu Phụ Chống Ẩm",
    description: "Tư vấn cửa nhôm kính nhà vệ sinh, cửa khu phụ, cửa phòng tắm: chống ẩm, dễ vệ sinh, chọn kính mờ, khung nhôm và phụ kiện phù hợp.",
    eyebrow: "Cửa nhà vệ sinh",
    h1: "Cửa Nhôm Kính Nhà Vệ Sinh, Cửa Khu Phụ Chống Ẩm",
    intro: "Cửa nhà vệ sinh và khu phụ cần chống ẩm, dễ vệ sinh, kín đáo và bền trong môi trường ẩm. Cửa nhôm kính là lựa chọn phổ biến nếu chọn đúng kính, khung và phụ kiện.",
    cards: [
      ["Nên chọn kiểu nào?", ["Cửa mở quay cho khu vực đủ diện tích mở cánh.", "Cửa lùa khi cần tiết kiệm diện tích.", "Kính mờ, kính hoa văn hoặc vật liệu kín đáo theo nhu cầu."]],
      ["Lưu ý phụ kiện", ["Khóa, bản lề, tay nắm nên chống gỉ tốt.", "Gioăng và keo cần xử lý kín mép để hạn chế ẩm.", "Nên đo đúng nền hoàn thiện trước khi sản xuất."]],
      ["Liên kết liên quan", ["cua-nhom-kinh.html", "phu-kien-cua-nhom-kinh.html", "kich-thuoc-cua-nhom-kinh.html"]]
    ]
  }
];

const labels = {
  "cua-nhom-kinh.html": "Cửa nhôm kính",
  "cua-nhom-kinh-ban-cong.html": "Cửa ban công",
  "bao-gia-kinh-cuong-luc.html": "Báo giá kính cường lực",
  "cua-nhom-kinh-cach-am.html": "Cửa nhôm kính cách âm",
  "cua-so-nhom-kinh.html": "Cửa sổ nhôm kính",
  "phu-kien-cua-nhom-kinh.html": "Phụ kiện cửa nhôm kính",
  "checklist-khao-sat-cua-nhom-kinh.html": "Checklist khảo sát",
  "bao-gia-cua-nhom-kinh.html": "Báo giá cửa nhôm kính",
  "cua-di-nhom-kinh-4-canh.html": "Cửa đi 4 cánh",
  "cua-lua-nhom-kinh.html": "Cửa lùa nhôm kính",
  "kich-thuoc-cua-nhom-kinh.html": "Kích thước cửa nhôm kính"
};

function header() {
  return `<header class="header scrolled"><div class="container"><a href="index.html" class="logo"><div class="logo-icon">NK</div><div class="logo-text"><span class="logo-name">NK Door</span><span class="logo-tagline">Cửa Thép & Nhôm Kính Miền Bắc</span></div></a><nav class="nav-menu"><a href="index.html#services" class="nav-link">Dịch vụ</a><a href="index.html#projects" class="nav-link">Dự án</a><a href="index.html#areas" class="nav-link">Khu vực</a><a href="index.html#contact" class="nav-link">Liên hệ</a></nav><div class="header-cta"><a href="tel:${phoneHref}" class="header-phone">${phone}</a></div></div></header>`;
}

function writePage(page) {
  const graph = [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${baseUrl}/` },
        { "@type": "ListItem", position: 2, name: page.h1, item: `${baseUrl}/${page.slug}` }
      ]
    },
    {
      "@type": "Article",
      headline: page.h1,
      description: page.description,
      image: ogImage,
      author: { "@type": "Organization", name: "NK Door" },
      publisher: { "@type": "Organization", name: "NK Door" },
      inLanguage: "vi-VN"
    }
  ];
  const cards = page.cards.map(([title, items]) => {
    const linked = items.every((item) => item.endsWith(".html"));
    return `<article class="seo-card"><h2>${title}</h2>${linked ? `<div class="seo-pill-links">${items.map((href) => `<a href="${href}">${labels[href] ?? href}</a>`).join("")}</div>` : `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`}</article>`;
  }).join("");
  const html = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${page.title}</title>
  <meta name="description" content="${page.description}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${baseUrl}/${page.slug}">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${page.title}">
  <meta property="og:description" content="${page.description}">
  <meta property="og:image" content="${ogImage}">
  <link rel="manifest" href="site.webmanifest">
  <link rel="stylesheet" href="style.css">
  <script type="application/ld+json">
${JSON.stringify({ "@context": "https://schema.org", "@graph": graph }, null, 2)}
  </script>
</head>
<body class="seo-page">
  ${header()}
  <main>
    <section class="seo-hero"><div class="container"><div class="seo-hero-content"><div class="breadcrumb"><a href="index.html">Trang chủ</a><span>/</span><span>${page.eyebrow}</span></div><span class="seo-eyebrow">${page.eyebrow}</span><h1>${page.h1}</h1><p>${page.intro}</p><div class="seo-actions"><a href="tel:${phoneHref}" class="btn btn-primary">Gọi tư vấn</a><a href="index.html#contact" class="btn btn-outline">Nhận báo giá</a></div></div></div></section>
    <section class="seo-section"><div class="container seo-grid">${cards}</div></section>
    <section class="seo-section alt"><div class="container seo-copy"><h2>Tư vấn theo hiện trạng thực tế</h2><p>Mỗi công trình có kích thước, hướng mở, mức độ sử dụng và ngân sách khác nhau. NK Door ưu tiên khảo sát rõ trước khi chốt vật tư để cửa vận hành ổn định và giảm phát sinh sau lắp đặt.</p></div></section>
  </main>
</body>
</html>
`;
  fs.writeFileSync(path.join(root, page.slug), html, "utf8");
}

for (const page of pages) writePage(page);

let index = fs.readFileSync(path.join(root, "index.html"), "utf8");
const footerAdd = `
            <li><a href="kinh-an-toan-hai-lop.html" class="footer-link">Kính an toàn hai lớp</a></li>
            <li><a href="kinh-hop-cach-am-cach-nhiet.html" class="footer-link">Kính hộp cách âm</a></li>
            <li><a href="kich-thuoc-cua-nhom-kinh.html" class="footer-link">Kích thước cửa nhôm kính</a></li>
            <li><a href="mau-cua-nhom-kinh-dep.html" class="footer-link">Mẫu cửa nhôm kính đẹp</a></li>
            <li><a href="cua-nhom-kinh-nha-ve-sinh.html" class="footer-link">Cửa nhôm kính nhà vệ sinh</a></li>`;
if (!index.includes("kinh-an-toan-hai-lop.html")) {
  index = index.replace('            <li><a href="bao-gia-cua-luoi-chong-muoi.html" class="footer-link">Báo giá cửa lưới</a></li>', `            <li><a href="bao-gia-cua-luoi-chong-muoi.html" class="footer-link">Báo giá cửa lưới</a></li>${footerAdd}`);
}
fs.writeFileSync(path.join(root, "index.html"), index, "utf8");

const htmlFiles = fs.readdirSync(root)
  .filter((file) => file.endsWith(".html"))
  .filter((file) => file !== "404.html")
  .sort((a, b) => (a === "index.html" ? -1 : b === "index.html" ? 1 : a.localeCompare(b, "vi")));

const titleMap = {};
for (const file of htmlFiles) {
  const content = fs.readFileSync(path.join(root, file), "utf8");
  titleMap[file] = file === "index.html"
    ? "Trang chủ"
    : (content.match(/<title>([^<]+)<\/title>/)?.[1]?.replace(/\s*\|.*$/, "") ?? file.replace(".html", ""));
}

const groups = [
  ["Báo giá", (file) => file.startsWith("bao-gia")],
  ["Cửa nhôm kính", (file) => file.includes("nhom") || file.includes("xingfa") || file.includes("phu-kien") || file.includes("chong-tham") || file.includes("kich-thuoc") || file.includes("mau-cua")],
  ["Cửa thép, cửa cuốn", (file) => file.includes("cua-thep") || file.includes("cua-cuon")],
  ["Kính cường lực và kính an toàn", (file) => file.includes("kinh-cuong-luc") || file.includes("vach") || file.includes("cabin") || file.includes("mai-kinh") || file.includes("cau-thang") || file.includes("thay-kinh") || file.includes("kinh-an-toan") || file.includes("kinh-hop")],
  ["Khu vực thi công", (file) => file.startsWith("thi-cong-nhom-kinh")],
  ["Tư vấn, bảo hành, FAQ", (file) => file.includes("kinh-nghiem") || file.includes("so-sanh") || file.includes("quy-trinh") || file.includes("bao-hanh") || file.includes("checklist") || file.includes("cau-hoi") || file.includes("sua-")]
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${htmlFiles.map((file) => {
  const loc = file === "index.html" ? `${baseUrl}/` : `${baseUrl}/${file}`;
  const priority = file === "index.html" ? "1.0" : file.startsWith("bao-gia") || file.includes("ha-noi") ? "0.9" : "0.85";
  const freq = file.includes("kinh-nghiem") || file.includes("so-sanh") || file.includes("checklist") || file.includes("cau-hoi") || file === "site-map.html" ? "monthly" : "weekly";
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(root, "sitemap.xml"), sitemapXml, "utf8");
fs.writeFileSync(path.join(root, "sitemap.txt"), htmlFiles.map((file) => file === "index.html" ? `${baseUrl}/` : `${baseUrl}/${file}`).join("\n") + "\n", "utf8");

const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/image-sitemap.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>
`;
fs.writeFileSync(path.join(root, "sitemap-index.xml"), sitemapIndex, "utf8");

const siteMapHtml = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sitemap Dịch Vụ Cửa Nhôm Kính, Cửa Thép, Kính Cường Lực | NK Door</title>
  <meta name="description" content="Danh sách đầy đủ các trang dịch vụ, báo giá, khu vực thi công và tư vấn của NK Door tại Hà Nội, Hưng Yên, Hà Nam, Phủ Lý và miền Bắc.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${baseUrl}/site-map.html">
  <link rel="stylesheet" href="style.css">
  <script type="application/ld+json">
${JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Sitemap dịch vụ NK Door",
  itemListElement: htmlFiles.map((file, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: titleMap[file],
    url: file === "index.html" ? `${baseUrl}/` : `${baseUrl}/${file}`
  }))
}, null, 2)}
  </script>
</head>
<body class="seo-page">
  ${header()}
  <main>
    <section class="seo-hero"><div class="container"><div class="seo-hero-content"><div class="breadcrumb"><a href="index.html">Trang chủ</a><span>/</span><span>Sitemap</span></div><span class="seo-eyebrow">Sitemap</span><h1>Danh Sách Trang Dịch Vụ NK Door</h1><p>Tổng hợp các trang báo giá, dịch vụ, khu vực thi công và tư vấn để khách hàng dễ tìm đúng nhu cầu. Trang này cũng giúp công cụ tìm kiếm đi sâu vào cấu trúc nội dung của website.</p></div></div></section>
    <section class="seo-section"><div class="container seo-grid">${groups.map(([name, test]) => {
      const files = htmlFiles.filter((file) => file !== "index.html" && file !== "site-map.html" && test(file));
      return `<article class="seo-card"><h2>${name}</h2><ul>${files.map((file) => `<li><a href="${file}">${titleMap[file]}</a></li>`).join("")}</ul></article>`;
    }).join("")}</div></section>
  </main>
</body>
</html>
`;
fs.writeFileSync(path.join(root, "site-map.html"), siteMapHtml, "utf8");

const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap-index.xml
Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/sitemap.txt
Sitemap: ${baseUrl}/image-sitemap.xml
`;
fs.writeFileSync(path.join(root, "robots.txt"), robots, "utf8");

console.log(`Generated ${pages.length} spec pages. Sitemap URLs: ${htmlFiles.length}.`);
