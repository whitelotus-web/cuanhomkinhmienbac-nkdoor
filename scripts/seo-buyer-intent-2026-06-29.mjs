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
    slug: "cua-so-nhom-kinh.html",
    title: "Cửa Sổ Nhôm Kính | Cửa Sổ Mở Quay, Mở Hất, Mở Lùa",
    description: "Thi công cửa sổ nhôm kính cho nhà phố, chung cư, văn phòng: cửa sổ mở quay, mở hất, mở lùa, kính an toàn, chống nước và cách âm.",
    eyebrow: "Cửa sổ nhôm kính",
    h1: "Cửa Sổ Nhôm Kính Cho Nhà Phố, Chung Cư Và Văn Phòng",
    intro: "Cửa sổ nhôm kính cần lấy sáng, thông gió, kín nước và dễ sử dụng lâu dài. NK Door tư vấn kiểu mở, hệ nhôm, kính và phụ kiện theo từng vị trí lắp đặt.",
    cards: [
      ["Kiểu cửa sổ phổ biến", ["Cửa sổ mở quay phù hợp vị trí cần mở rộng thoáng.", "Cửa sổ mở hất giúp thông gió khi mưa nhẹ.", "Cửa sổ mở lùa tiết kiệm diện tích cho ban công, logia, phòng nhỏ."]],
      ["Điểm cần chọn kỹ", ["Hệ nhôm và phụ kiện chịu tải phù hợp kích thước.", "Gioăng, keo và thoát nước để hạn chế hắt mưa.", "Kính an toàn, kính cường lực hoặc kính hộp theo nhu cầu."]],
      ["Liên kết liên quan", ["cua-nhom-kinh.html", "cua-nhom-kinh-cach-am.html", "bao-gia-cua-nhom-kinh.html"]]
    ]
  },
  {
    slug: "cua-di-nhom-kinh-4-canh.html",
    title: "Cửa Đi Nhôm Kính 4 Cánh | Cửa Mặt Tiền, Cửa Ban Công Lớn",
    description: "Tư vấn thi công cửa đi nhôm kính 4 cánh cho mặt tiền, ban công lớn, phòng khách, showroom. Chọn hệ nhôm, kính, khóa và bản lề phù hợp.",
    eyebrow: "Cửa đi 4 cánh",
    h1: "Cửa Đi Nhôm Kính 4 Cánh Cho Mặt Tiền Và Ban Công Lớn",
    intro: "Cửa đi nhôm kính 4 cánh thường dùng cho mặt tiền nhà phố, phòng khách, ban công lớn hoặc showroom cần mở rộng không gian. Hạng mục này cần đo chuẩn và chọn phụ kiện đúng tải trọng.",
    cards: [
      ["Khi nào nên dùng 4 cánh?", ["Ô cửa rộng cần mở thoáng và lấy sáng tốt.", "Mặt tiền nhà phố, showroom, cửa ra sân hoặc ban công lớn.", "Cần cân bằng thẩm mỹ, an toàn và vận hành nhẹ."]],
      ["Vật tư cần lưu ý", ["Bản lề, khóa và tay nắm phải phù hợp trọng lượng cánh.", "Kính an toàn hoặc kính cường lực tùy vị trí.", "Khung bao cần chắc, lắp kín để hạn chế rung và hở nước."]],
      ["Liên kết liên quan", ["cua-nhom-kinh.html", "cua-nhom-xingfa-ha-noi.html", "phu-kien-cua-nhom-kinh.html"]]
    ]
  },
  {
    slug: "cua-lua-nhom-kinh.html",
    title: "Cửa Lùa Nhôm Kính | Cửa Trượt Ban Công, Phòng Ngủ, Văn Phòng",
    description: "Thi công cửa lùa nhôm kính, cửa trượt ban công, cửa phòng ngủ, cửa văn phòng. Tư vấn ray, bánh xe, khóa, kính và chống nước.",
    eyebrow: "Cửa lùa nhôm kính",
    h1: "Cửa Lùa Nhôm Kính Tiết Kiệm Diện Tích",
    intro: "Cửa lùa nhôm kính phù hợp không gian cần tiết kiệm diện tích mở cánh như ban công chung cư, phòng ngủ, văn phòng, cửa hàng. Độ bền phụ thuộc nhiều vào ray, bánh xe, khóa và kỹ thuật lắp đặt.",
    cards: [
      ["Ưu điểm", ["Không chiếm diện tích khi mở cửa.", "Phù hợp ban công, logia, phòng nhỏ, văn phòng.", "Dễ kết hợp kính lấy sáng và khung nhôm hiện đại."]],
      ["Rủi ro cần tránh", ["Ray thoát nước kém gây thấm khi mưa lớn.", "Bánh xe yếu làm cửa trượt nặng sau thời gian sử dụng.", "Khóa, gioăng và khe hở không chuẩn làm giảm cách âm."]],
      ["Liên kết liên quan", ["cua-nhom-kinh-ban-cong.html", "chong-tham-cua-nhom-kinh-ban-cong.html", "phu-kien-cua-nhom-kinh.html"]]
    ]
  },
  {
    slug: "thay-kinh-cuong-luc-vo.html",
    title: "Thay Kính Cường Lực Vỡ | Thay Kính Cửa, Vách Kính, Cabin Tắm",
    description: "Dịch vụ thay kính cường lực vỡ cho cửa kính, vách kính, cabin tắm, mặt tiền, lan can. Tư vấn đo kính, độ dày, phụ kiện và an toàn thi công.",
    eyebrow: "Thay kính vỡ",
    h1: "Thay Kính Cường Lực Vỡ Cho Cửa Kính, Vách Kính, Cabin Tắm",
    intro: "Kính cường lực bị vỡ cần xử lý đúng để đảm bảo an toàn và đo lại chính xác trước khi đặt kính mới. NK Door tư vấn thay kính cho cửa kính, vách kính, cabin tắm, mặt tiền và các hạng mục kính dân dụng.",
    cards: [
      ["Cần làm gì trước?", ["Chụp ảnh hiện trạng và vị trí kính bị vỡ.", "Không tự tháo phụ kiện nếu chưa rõ kết cấu.", "Gửi kích thước sơ bộ và độ dày kính nếu biết."]],
      ["Thông tin quyết định báo giá", ["Loại kính, độ dày, kích thước và số lượng tấm.", "Vị trí lắp đặt, tầng thi công và đường vận chuyển.", "Phụ kiện kèm theo như bản lề, kẹp kính, tay nắm, gioăng."]],
      ["Liên kết liên quan", ["cua-kinh-cuong-luc.html", "bao-gia-kinh-cuong-luc.html", "vach-tam-kinh-cuong-luc.html"]]
    ]
  },
  {
    slug: "sua-khoa-cua-nhom-kinh.html",
    title: "Sửa Khóa Cửa Nhôm Kính | Thay Khóa, Tay Nắm, Bản Lề",
    description: "Sửa khóa cửa nhôm kính, thay khóa, tay nắm, bản lề, bánh xe, ray trượt, căn chỉnh cửa nhôm kính bị kẹt, xệ cánh, khó đóng.",
    eyebrow: "Sửa khóa cửa",
    h1: "Sửa Khóa Cửa Nhôm Kính, Thay Tay Nắm, Bản Lề, Bánh Xe",
    intro: "Cửa nhôm kính bị kẹt khóa, khó đóng, xệ cánh hoặc trượt nặng thường liên quan đến phụ kiện. NK Door kiểm tra tình trạng thực tế để tư vấn sửa, thay phụ kiện hoặc căn chỉnh cửa.",
    cards: [
      ["Dấu hiệu cần sửa", ["Khóa không ăn, tay nắm lỏng, cửa khó đóng.", "Cửa lùa trượt nặng, kêu hoặc lệch ray.", "Cánh cửa xệ, cọ nền, hở gioăng hoặc hở gió."]],
      ["Hạng mục xử lý", ["Thay khóa, tay nắm, bản lề, bánh xe, ray trượt.", "Căn chỉnh cánh, siết phụ kiện, kiểm tra gioăng.", "Tư vấn thay mới nếu phụ kiện không còn phù hợp."]],
      ["Liên kết liên quan", ["sua-chua-cua-nhom-kinh.html", "phu-kien-cua-nhom-kinh.html", "bao-hanh-bao-tri-cua-nhom-kinh.html"]]
    ]
  },
  {
    slug: "bao-gia-cua-luoi-chong-muoi.html",
    title: "Báo Giá Cửa Lưới Chống Muỗi | Cửa Lưới Ban Công, Cửa Sổ",
    description: "Tư vấn báo giá cửa lưới chống muỗi theo loại lưới, khung nhôm, kích thước, kiểu mở và vị trí lắp đặt cho chung cư, nhà phố, cửa sổ, ban công.",
    eyebrow: "Báo giá cửa lưới",
    h1: "Báo Giá Cửa Lưới Chống Muỗi Theo Kích Thước Và Kiểu Mở",
    intro: "Giá cửa lưới chống muỗi phụ thuộc vào loại lưới, khung nhôm, kích thước, kiểu mở và vị trí lắp đặt. NK Door tư vấn loại cửa lưới phù hợp cửa sổ, ban công, logia và cửa đi.",
    cards: [
      ["Yếu tố ảnh hưởng giá", ["Loại cửa lưới: xếp, cuốn, lùa hoặc cố định.", "Kích thước, số lượng bộ cửa và màu khung.", "Vị trí lắp đặt, độ khó thi công và yêu cầu hoàn thiện."]],
      ["Cần gửi gì để báo giá?", ["Ảnh vị trí lắp và kích thước rộng x cao.", "Nhu cầu lắp cửa sổ, ban công, cửa đi hay logia.", "Khu vực thi công tại Hà Nội, Hưng Yên, Hà Nam hoặc tỉnh lân cận."]],
      ["Liên kết liên quan", ["cua-luoi-chong-muoi.html", "lap-dat-cua-luoi-chong-muoi-ha-noi.html", "cua-nhom-kinh-chung-cu.html"]]
    ]
  }
];

const labels = {
  "cua-nhom-kinh.html": "Cửa nhôm kính",
  "cua-nhom-kinh-cach-am.html": "Cửa nhôm kính cách âm",
  "bao-gia-cua-nhom-kinh.html": "Báo giá cửa nhôm kính",
  "cua-nhom-xingfa-ha-noi.html": "Cửa nhôm Xingfa",
  "phu-kien-cua-nhom-kinh.html": "Phụ kiện cửa nhôm kính",
  "cua-nhom-kinh-ban-cong.html": "Cửa ban công",
  "chong-tham-cua-nhom-kinh-ban-cong.html": "Chống thấm cửa ban công",
  "cua-kinh-cuong-luc.html": "Cửa kính cường lực",
  "bao-gia-kinh-cuong-luc.html": "Báo giá kính cường lực",
  "vach-tam-kinh-cuong-luc.html": "Vách tắm kính",
  "sua-chua-cua-nhom-kinh.html": "Sửa cửa nhôm kính",
  "bao-hanh-bao-tri-cua-nhom-kinh.html": "Bảo hành bảo trì",
  "cua-luoi-chong-muoi.html": "Cửa lưới chống muỗi",
  "lap-dat-cua-luoi-chong-muoi-ha-noi.html": "Cửa lưới Hà Nội",
  "cua-nhom-kinh-chung-cu.html": "Cửa nhôm kính chung cư"
};

function header() {
  return `<header class="header scrolled"><div class="container"><a href="index.html" class="logo"><div class="logo-icon">NK</div><div class="logo-text"><span class="logo-name">NK Door</span><span class="logo-tagline">Cửa Thép & Nhôm Kính Miền Bắc</span></div></a><nav class="nav-menu"><a href="index.html#services" class="nav-link">Dịch vụ</a><a href="index.html#projects" class="nav-link">Dự án</a><a href="index.html#areas" class="nav-link">Khu vực</a><a href="index.html#contact" class="nav-link">Liên hệ</a></nav><div class="header-cta"><a href="tel:${phoneHref}" class="header-phone">${phone}</a></div></div></header>`;
}

function pageHtml(page) {
  const graph = [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${baseUrl}/` },
        { "@type": "ListItem", position: 2, name: page.h1, item: `${baseUrl}/${page.slug}` }
      ]
    },
    {
      "@type": "Service",
      name: page.h1,
      areaServed: ["Hà Nội", "Hưng Yên", "Hà Nam", "Phủ Lý", "Hải Dương", "Thái Bình", "Nam Định", "Miền Bắc"],
      provider: { "@type": "LocalBusiness", name: "NK Door", telephone: "+84975337071", url: `${baseUrl}/` }
    }
  ];
  const cards = page.cards.map(([title, items]) => {
    const linked = items.every((item) => item.endsWith(".html"));
    return `<article class="seo-card"><h2>${title}</h2>${linked ? `<div class="seo-pill-links">${items.map((href) => `<a href="${href}">${labels[href] ?? href}</a>`).join("")}</div>` : `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`}</article>`;
  }).join("");
  return `<!DOCTYPE html>
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
    <section class="seo-section alt"><div class="container seo-copy"><h2>Gửi ảnh hiện trạng để tư vấn nhanh hơn</h2><p>Khách hàng có thể gửi ảnh, kích thước sơ bộ, khu vực thi công và nhu cầu sử dụng. NK Door sẽ tư vấn phương án vật tư, phụ kiện và lịch khảo sát phù hợp.</p></div></section>
  </main>
</body>
</html>
`;
}

for (const page of pages) fs.writeFileSync(path.join(root, page.slug), pageHtml(page), "utf8");

let index = fs.readFileSync(path.join(root, "index.html"), "utf8");
const footerAdd = `
            <li><a href="cua-so-nhom-kinh.html" class="footer-link">Cửa sổ nhôm kính</a></li>
            <li><a href="cua-di-nhom-kinh-4-canh.html" class="footer-link">Cửa đi nhôm kính 4 cánh</a></li>
            <li><a href="cua-lua-nhom-kinh.html" class="footer-link">Cửa lùa nhôm kính</a></li>
            <li><a href="thay-kinh-cuong-luc-vo.html" class="footer-link">Thay kính cường lực vỡ</a></li>
            <li><a href="sua-khoa-cua-nhom-kinh.html" class="footer-link">Sửa khóa cửa nhôm kính</a></li>
            <li><a href="bao-gia-cua-luoi-chong-muoi.html" class="footer-link">Báo giá cửa lưới</a></li>`;
if (!index.includes("cua-so-nhom-kinh.html")) {
  index = index.replace('            <li><a href="cau-hoi-thuong-gap-cua-nhom-kinh.html" class="footer-link">FAQ cửa nhôm kính</a></li>', `            <li><a href="cau-hoi-thuong-gap-cua-nhom-kinh.html" class="footer-link">FAQ cửa nhôm kính</a></li>${footerAdd}`);
}
fs.writeFileSync(path.join(root, "index.html"), index, "utf8");

const htmlFiles = fs.readdirSync(root)
  .filter((file) => file.endsWith(".html"))
  .filter((file) => file !== "404.html")
  .sort((a, b) => (a === "index.html" ? -1 : b === "index.html" ? 1 : a.localeCompare(b, "vi")));

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

const titleMap = {};
for (const file of htmlFiles) {
  const content = fs.readFileSync(path.join(root, file), "utf8");
  titleMap[file] = file === "index.html"
    ? "Trang chủ"
    : (content.match(/<title>([^<]+)<\/title>/)?.[1]?.replace(/\s*\|.*$/, "") ?? file.replace(".html", ""));
}

const groups = [
  ["Báo giá", (file) => file.startsWith("bao-gia")],
  ["Cửa nhôm kính", (file) => file.includes("nhom") || file.includes("xingfa") || file.includes("phu-kien") || file.includes("chong-tham")],
  ["Cửa thép, cửa cuốn", (file) => file.includes("cua-thep") || file.includes("cua-cuon")],
  ["Kính cường lực", (file) => file.includes("kinh-cuong-luc") || file.includes("vach") || file.includes("cabin") || file.includes("mai-kinh") || file.includes("cau-thang") || file.includes("thay-kinh")],
  ["Khu vực thi công", (file) => file.startsWith("thi-cong-nhom-kinh")],
  ["Tư vấn, bảo hành, FAQ", (file) => file.includes("kinh-nghiem") || file.includes("so-sanh") || file.includes("quy-trinh") || file.includes("bao-hanh") || file.includes("checklist") || file.includes("cau-hoi") || file.includes("sua-")]
];

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

console.log(`Generated ${pages.length} buyer-intent pages. Sitemap URLs: ${htmlFiles.length}.`);
