import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const baseUrl = "https://cua-nhom-kinh-mien-bac.netlify.app";
const today = "2026-06-30";
const phone = "0975.337.071";
const phoneHref = "0975337071";
const ogImage = `${baseUrl}/img%20thi%20cong/IMG_1774397594460_1774416357947_1.jpg`;

const pages = [
  {
    slug: "cua-nhom-kinh-mat-tien.html",
    title: "Cửa Nhôm Kính Mặt Tiền | Cửa Kính Nhà Phố, Showroom",
    description: "Thi công cửa nhôm kính mặt tiền cho nhà phố, showroom, cửa hàng: tư vấn cửa đi, vách kính, kính cường lực, hệ nhôm và phụ kiện.",
    eyebrow: "Cửa mặt tiền",
    h1: "Cửa Nhôm Kính Mặt Tiền Cho Nhà Phố, Showroom, Cửa Hàng",
    intro: "Mặt tiền cần vừa đẹp, lấy sáng, an toàn, dễ vận hành và phù hợp phong cách kinh doanh. NK Door tư vấn cửa nhôm kính, cửa kính cường lực, vách kính và phụ kiện theo kích thước thực tế.",
    cards: [
      ["Hạng mục phù hợp", ["Cửa đi nhôm kính 2 cánh, 4 cánh cho nhà phố.", "Vách kính mặt tiền showroom, văn phòng, cửa hàng.", "Cửa kính cường lực kết hợp khung nhôm hoặc phụ kiện kính."]],
      ["Cần tính kỹ", ["Kích thước mặt tiền, hướng mở và lưu lượng sử dụng.", "An toàn kính, khóa, bản lề, tay nắm và ray trượt.", "Thoát nước, kín gió và độ bền khi dùng thường xuyên."]],
      ["Liên kết liên quan", ["cua-di-nhom-kinh-4-canh.html", "cua-kinh-cuong-luc.html", "vach-kinh-van-phong.html"]]
    ]
  },
  {
    slug: "vach-kinh-cua-hang-showroom.html",
    title: "Vách Kính Cửa Hàng, Showroom | Mặt Tiền Kính Cường Lực",
    description: "Thi công vách kính cửa hàng, showroom, mặt tiền kính cường lực, cửa kính văn phòng. Tư vấn kính, phụ kiện, khung và phương án thi công.",
    eyebrow: "Vách kính showroom",
    h1: "Vách Kính Cửa Hàng, Showroom Và Mặt Tiền Kính",
    intro: "Vách kính giúp showroom và cửa hàng nhìn thoáng, dễ trưng bày sản phẩm và tạo mặt tiền sáng hơn. Hạng mục này cần chọn đúng kính, phụ kiện, khung đỡ và cách chia ô để đảm bảo an toàn.",
    cards: [
      ["Ứng dụng", ["Mặt tiền cửa hàng, showroom, văn phòng giao dịch.", "Vách kính cố định kết hợp cửa kính cường lực.", "Không gian cần nhìn xuyên sáng và nhận diện sản phẩm tốt."]],
      ["Điểm quyết định độ bền", ["Kính phù hợp kích thước và vị trí lắp đặt.", "Kẹp kính, bản lề, tay nắm, khóa sàn hoặc phụ kiện đồng bộ.", "Kỹ thuật neo, căn chỉnh, xử lý mép và chống rung."]],
      ["Liên kết liên quan", ["vach-kinh-van-phong.html", "thi-cong-kinh-cuong-luc-ha-noi.html", "bao-gia-kinh-cuong-luc.html"]]
    ]
  },
  {
    slug: "cua-nhom-kinh-chong-on.html",
    title: "Cửa Nhôm Kính Chống Ồn | Giải Pháp Giảm Tiếng Ồn Nhà Phố",
    description: "Tư vấn cửa nhôm kính chống ồn cho nhà phố, chung cư, văn phòng: kính hộp, kính an toàn, gioăng, keo, phụ kiện và kỹ thuật lắp kín.",
    eyebrow: "Chống ồn",
    h1: "Cửa Nhôm Kính Chống Ồn Cho Nhà Phố Và Chung Cư",
    intro: "Nhà gần đường lớn, khu đông dân cư hoặc căn hộ hướng ồn cần giải pháp cửa kín hơn. Cửa nhôm kính chống ồn phải kết hợp đúng kính, hệ nhôm, gioăng, phụ kiện và kỹ thuật thi công.",
    cards: [
      ["Giải pháp thường dùng", ["Kính hộp, kính an toàn hoặc kính dày hơn theo nhu cầu.", "Hệ nhôm đủ cứng, khung bao kín và phụ kiện ép cánh tốt.", "Xử lý gioăng, keo và khe hở quanh khung."]],
      ["Khi nào nên khảo sát?", ["Cửa cũ hở gió, lọt tiếng, rung hoặc đóng mở không kín.", "Căn hộ gần đường, trường học, khu thương mại.", "Văn phòng, phòng ngủ, phòng làm việc cần giảm ồn."]],
      ["Liên kết liên quan", ["cua-nhom-kinh-cach-am.html", "kinh-hop-cach-am-cach-nhiet.html", "phu-kien-cua-nhom-kinh.html"]]
    ]
  },
  {
    slug: "so-sanh-cua-nhom-xingfa-va-cua-nhom-thuong.html",
    title: "So Sánh Cửa Nhôm Xingfa Và Cửa Nhôm Thường | Nên Chọn Loại Nào?",
    description: "So sánh cửa nhôm Xingfa và cửa nhôm thường về độ bền, độ kín, phụ kiện, thẩm mỹ, chi phí và vị trí nên sử dụng.",
    eyebrow: "So sánh hệ nhôm",
    h1: "So Sánh Cửa Nhôm Xingfa Và Cửa Nhôm Thường",
    intro: "Không phải công trình nào cũng cần dùng cùng một hệ nhôm. So sánh đúng giữa cửa nhôm Xingfa và cửa nhôm thường giúp chọn phương án phù hợp ngân sách, vị trí lắp và mức độ sử dụng.",
    cards: [
      ["Cửa nhôm Xingfa", ["Phù hợp cửa đi, ban công, mặt tiền, ô cửa lớn.", "Độ cứng, độ kín và thẩm mỹ thường tốt hơn nhôm phổ thông.", "Chi phí cao hơn, cần phụ kiện đồng bộ để phát huy hiệu quả."]],
      ["Cửa nhôm thường", ["Phù hợp hạng mục nhỏ, khu phụ, vị trí ít chịu tải.", "Chi phí dễ tiếp cận hơn cho công trình ngân sách thấp.", "Cần chọn độ dày và phụ kiện đủ dùng để tránh nhanh xuống cấp."]],
      ["Liên kết liên quan", ["cua-nhom-xingfa-ha-noi.html", "bao-gia-cua-nhom-xingfa.html", "kinh-nghiem-chon-cua-nhom-kinh.html"]]
    ]
  },
  {
    slug: "thi-cong-nhom-kinh-dong-anh.html",
    title: "Thi Công Nhôm Kính Đông Anh | Cửa Nhôm Kính, Cửa Kính",
    description: "Nhận thi công nhôm kính Đông Anh: cửa nhôm kính, cửa kính cường lực, vách kính, cửa cuốn, cửa thép. Tư vấn khảo sát và báo giá theo công trình.",
    eyebrow: "Nhôm kính Đông Anh",
    h1: "Thi Công Nhôm Kính Đông Anh, Hà Nội",
    intro: "Đông Anh có nhiều nhà phố, xưởng, cửa hàng và công trình cải tạo cần cửa nhôm kính, vách kính, cửa kính cường lực. NK Door nhận tư vấn, khảo sát và báo giá theo hiện trạng.",
    cards: [
      ["Dịch vụ chính", ["Cửa nhôm kính, cửa sổ, cửa lùa, cửa ban công.", "Cửa kính cường lực, vách kính, mặt tiền kính.", "Cửa cuốn, cửa thép vân gỗ và sửa chữa cửa."]],
      ["Thông tin cần gửi", ["Ảnh hiện trạng, kích thước sơ bộ và địa chỉ khu vực.", "Nhu cầu sử dụng: lấy sáng, chống ồn, chống nước, an toàn.", "Thời gian cần khảo sát hoặc hoàn thiện."]],
      ["Liên kết liên quan", ["thi-cong-nhom-kinh-ha-noi.html", "cua-nhom-kinh.html", "bao-gia-cua-nhom-kinh.html"]]
    ]
  },
  {
    slug: "thi-cong-nhom-kinh-gia-lam.html",
    title: "Thi Công Nhôm Kính Gia Lâm | Cửa Nhôm Kính, Vách Kính",
    description: "Thi công nhôm kính Gia Lâm: cửa nhôm kính, cửa sổ, cửa ban công, vách kính, cửa kính cường lực, cửa cuốn. Khảo sát và báo giá theo thực tế.",
    eyebrow: "Nhôm kính Gia Lâm",
    h1: "Thi Công Nhôm Kính Gia Lâm, Hà Nội",
    intro: "NK Door nhận thi công nhôm kính tại Gia Lâm cho nhà phố, chung cư, cửa hàng, văn phòng và công trình cải tạo. Nội dung này giúp khách khu vực Gia Lâm tìm đúng dịch vụ gần nhu cầu hơn.",
    cards: [
      ["Hạng mục nhận làm", ["Cửa nhôm kính, cửa lùa, cửa sổ, cửa ban công.", "Vách kính, cửa kính cường lực, cabin tắm kính.", "Cửa cuốn, cửa thép, bảo trì và sửa chữa cửa."]],
      ["Quy trình", ["Tiếp nhận ảnh và kích thước sơ bộ.", "Khảo sát thực tế với công trình cần chốt kích thước.", "Báo giá rõ vật tư, phụ kiện, nhân công và tiến độ."]],
      ["Liên kết liên quan", ["thi-cong-nhom-kinh-ha-noi.html", "cua-so-nhom-kinh.html", "cua-nhom-kinh-ban-cong.html"]]
    ]
  }
];

const labels = {
  "cua-di-nhom-kinh-4-canh.html": "Cửa đi nhôm kính 4 cánh",
  "cua-kinh-cuong-luc.html": "Cửa kính cường lực",
  "vach-kinh-van-phong.html": "Vách kính văn phòng",
  "thi-cong-kinh-cuong-luc-ha-noi.html": "Kính cường lực Hà Nội",
  "bao-gia-kinh-cuong-luc.html": "Báo giá kính cường lực",
  "cua-nhom-kinh-cach-am.html": "Cửa nhôm kính cách âm",
  "kinh-hop-cach-am-cach-nhiet.html": "Kính hộp cách âm",
  "phu-kien-cua-nhom-kinh.html": "Phụ kiện cửa nhôm kính",
  "cua-nhom-xingfa-ha-noi.html": "Cửa nhôm Xingfa",
  "bao-gia-cua-nhom-xingfa.html": "Báo giá cửa nhôm Xingfa",
  "kinh-nghiem-chon-cua-nhom-kinh.html": "Kinh nghiệm chọn cửa",
  "thi-cong-nhom-kinh-ha-noi.html": "Nhôm kính Hà Nội",
  "cua-nhom-kinh.html": "Cửa nhôm kính",
  "bao-gia-cua-nhom-kinh.html": "Báo giá cửa nhôm kính",
  "cua-so-nhom-kinh.html": "Cửa sổ nhôm kính",
  "cua-nhom-kinh-ban-cong.html": "Cửa ban công"
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
      "@type": "Service",
      name: page.h1,
      description: page.description,
      areaServed: ["Hà Nội", "Đông Anh", "Gia Lâm", "Hưng Yên", "Hà Nam", "Miền Bắc"],
      provider: { "@type": "LocalBusiness", name: "NK Door", telephone: "+84975337071", url: `${baseUrl}/` }
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
    <section class="seo-section alt"><div class="container seo-copy"><h2>Tư vấn đúng vật tư, đúng vị trí</h2><p>NK Door khảo sát theo hiện trạng, tư vấn phương án phù hợp ngân sách và báo giá rõ từng hạng mục để khách hàng dễ so sánh trước khi thi công.</p></div></section>
  </main>
</body>
</html>
`;
  fs.writeFileSync(path.join(root, page.slug), html, "utf8");
}

for (const page of pages) writePage(page);

let index = fs.readFileSync(path.join(root, "index.html"), "utf8");
const footerAdd = `
            <li><a href="cua-nhom-kinh-mat-tien.html" class="footer-link">Cửa nhôm kính mặt tiền</a></li>
            <li><a href="vach-kinh-cua-hang-showroom.html" class="footer-link">Vách kính showroom</a></li>
            <li><a href="cua-nhom-kinh-chong-on.html" class="footer-link">Cửa nhôm kính chống ồn</a></li>
            <li><a href="so-sanh-cua-nhom-xingfa-va-cua-nhom-thuong.html" class="footer-link">Xingfa hay nhôm thường</a></li>
            <li><a href="thi-cong-nhom-kinh-dong-anh.html" class="footer-link">Nhôm kính Đông Anh</a></li>
            <li><a href="thi-cong-nhom-kinh-gia-lam.html" class="footer-link">Nhôm kính Gia Lâm</a></li>`;
if (!index.includes("cua-nhom-kinh-mat-tien.html")) {
  index = index.replace('            <li><a href="cua-nhom-kinh-nha-ve-sinh.html" class="footer-link">Cửa nhôm kính nhà vệ sinh</a></li>', `            <li><a href="cua-nhom-kinh-nha-ve-sinh.html" class="footer-link">Cửa nhôm kính nhà vệ sinh</a></li>${footerAdd}`);
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
  ["Kính cường lực và showroom", (file) => file.includes("kinh-cuong-luc") || file.includes("vach") || file.includes("cabin") || file.includes("mai-kinh") || file.includes("cau-thang") || file.includes("thay-kinh") || file.includes("kinh-an-toan") || file.includes("kinh-hop")],
  ["Khu vực thi công", (file) => file.startsWith("thi-cong-nhom-kinh")],
  ["Tư vấn, bảo hành, FAQ", (file) => file.includes("kinh-nghiem") || file.includes("so-sanh") || file.includes("quy-trinh") || file.includes("bao-hanh") || file.includes("checklist") || file.includes("cau-hoi") || file.includes("sua-")]
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${htmlFiles.map((file) => {
  const loc = file === "index.html" ? `${baseUrl}/` : `${baseUrl}/${file}`;
  const priority = file === "index.html" ? "1.0" : file.startsWith("bao-gia") || file.includes("ha-noi") || file.includes("dong-anh") || file.includes("gia-lam") ? "0.9" : "0.85";
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
fs.writeFileSync(path.join(root, "sitemap-index.xml"), `<?xml version="1.0" encoding="UTF-8"?>
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
`, "utf8");

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

console.log(`Generated ${pages.length} commercial pages. Sitemap URLs: ${htmlFiles.length}.`);
