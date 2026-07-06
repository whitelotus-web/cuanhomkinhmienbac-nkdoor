import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const baseUrl = "https://cua-nhom-kinh-mien-bac.netlify.app";
const today = "2026-07-06";
const phone = "0975.337.071";
const phoneHref = "0975337071";
const ogImage = `${baseUrl}/img%20thi%20cong/IMG_1774397594460_1774416357947_1.jpg`;

const pages = [
  {
    slug: "gioi-thieu-nk-door.html",
    title: "Giới Thiệu NK Door | Thi Công Cửa Thép, Nhôm Kính Miền Bắc",
    description: "Giới thiệu NK Door, đơn vị tư vấn và thi công cửa thép, cửa nhôm kính, cửa cuốn, kính cường lực, vách kính, tủ bếp nhôm tại miền Bắc.",
    eyebrow: "Giới thiệu",
    h1: "Giới Thiệu NK Door",
    intro: "NK Door tập trung tư vấn và thi công các hạng mục cửa thép, cửa nhôm kính, cửa cuốn, kính cường lực, vách kính, cabin tắm kính và tủ bếp nhôm cho nhà ở, cửa hàng, văn phòng và công trình cải tạo tại miền Bắc.",
    type: "AboutPage",
    cards: [
      ["Hạng mục chính", ["Cửa nhôm kính, cửa nhôm Xingfa, cửa sổ, cửa lùa, cửa ban công.", "Cửa thép vân gỗ, cửa cuốn, cửa kính cường lực, vách kính.", "Cabin tắm kính, cầu thang kính, tủ bếp nhôm giả gỗ và sửa chữa cửa."]],
      ["Cách làm việc", ["Tiếp nhận ảnh hiện trạng và nhu cầu sử dụng.", "Tư vấn vật tư phù hợp theo vị trí, ngân sách và yêu cầu kỹ thuật.", "Khảo sát, báo giá rõ hạng mục, thi công và hỗ trợ sau bàn giao."]],
      ["Liên kết liên quan", ["du-an-thi-cong-nhom-kinh.html", "quy-trinh-thi-cong-cua.html", "lien-he-khao-sat-nhom-kinh.html"]]
    ]
  },
  {
    slug: "lien-he-khao-sat-nhom-kinh.html",
    title: "Liên Hệ Khảo Sát Nhôm Kính | Gửi Ảnh Nhận Báo Giá",
    description: "Liên hệ NK Door để gửi ảnh hiện trạng, đặt lịch khảo sát và nhận tư vấn báo giá cửa nhôm kính, cửa thép, cửa cuốn, kính cường lực.",
    eyebrow: "Liên hệ khảo sát",
    h1: "Liên Hệ Khảo Sát Nhôm Kính Và Nhận Báo Giá",
    intro: "Khách hàng có thể gửi ảnh hiện trạng, kích thước sơ bộ và địa chỉ khu vực để NK Door tư vấn trước. Với công trình cần độ chính xác cao, đội kỹ thuật sẽ hẹn lịch khảo sát theo điều kiện thực tế.",
    type: "ContactPage",
    cards: [
      ["Thông tin nên gửi", ["Ảnh tổng thể vị trí lắp đặt và ảnh cận cảnh ô chờ.", "Kích thước rộng x cao, số lượng bộ cửa hoặc vách kính.", "Địa chỉ khu vực, thời gian cần thi công và yêu cầu ưu tiên."]],
      ["Kênh liên hệ", ["Gọi trực tiếp 0975.337.071 để trao đổi nhanh.", "Gửi ảnh qua Zalo theo số điện thoại trên website.", "Điền form liên hệ tại trang chủ để lưu lại nhu cầu báo giá."]],
      ["Liên kết liên quan", ["huong-dan-gui-anh-bao-gia-nhom-kinh.html", "bao-gia-thi-cong-nhom-kinh-2026.html", "checklist-khao-sat-cua-nhom-kinh.html"]]
    ]
  },
  {
    slug: "huong-dan-gui-anh-bao-gia-nhom-kinh.html",
    title: "Hướng Dẫn Gửi Ảnh Báo Giá Nhôm Kính | Cần Chụp Gì?",
    description: "Hướng dẫn khách hàng chụp ảnh hiện trạng để nhận báo giá nhôm kính nhanh hơn: ô chờ, kích thước, mặt bằng, phụ kiện, vị trí lắp đặt.",
    eyebrow: "Gửi ảnh báo giá",
    h1: "Hướng Dẫn Gửi Ảnh Để Báo Giá Nhôm Kính Nhanh Hơn",
    intro: "Ảnh hiện trạng rõ giúp tư vấn đúng cấu hình, hạn chế báo giá thiếu vật tư và giảm phát sinh khi khảo sát. Khách hàng không cần ảnh chuyên nghiệp, chỉ cần chụp đủ vị trí và kích thước tham khảo.",
    type: "Article",
    cards: [
      ["Nên chụp những ảnh nào?", ["Ảnh toàn cảnh khu vực cần làm cửa, vách kính hoặc cửa cuốn.", "Ảnh cận cảnh ô chờ, chân khung, tường nền, ray hoặc cửa cũ.", "Ảnh vị trí xung quanh để xem hướng mở, lối vận chuyển và mặt bằng thi công."]],
      ["Nên ghi thêm", ["Rộng x cao sơ bộ của từng vị trí cần làm.", "Nhu cầu sử dụng: lấy sáng, chống nước, cách âm, an toàn hoặc tiết kiệm chi phí.", "Khu vực thi công và thời gian mong muốn khảo sát."]],
      ["Liên kết liên quan", ["lien-he-khao-sat-nhom-kinh.html", "bao-gia-cua-nhom-kinh.html", "bao-gia-thi-cong-nhom-kinh-2026.html"]]
    ]
  },
  {
    slug: "chinh-sach-bao-hanh-cua-nhom-kinh.html",
    title: "Chính Sách Bảo Hành Cửa Nhôm Kính, Cửa Kính, Cửa Cuốn",
    description: "Thông tin bảo hành, bảo trì, căn chỉnh sau thi công cửa nhôm kính, cửa kính, cửa cuốn, cửa thép và các hạng mục kính cường lực.",
    eyebrow: "Bảo hành",
    h1: "Chính Sách Bảo Hành Cửa Nhôm Kính, Cửa Kính, Cửa Cuốn",
    intro: "Sau thi công, cửa cần được vận hành ổn định, đóng mở nhẹ và xử lý kịp thời nếu phát sinh lỗi kỹ thuật. NK Door ưu tiên kiểm tra nguyên nhân thực tế trước khi tư vấn bảo hành, bảo trì hoặc thay phụ kiện.",
    type: "WebPage",
    cards: [
      ["Hạng mục thường hỗ trợ", ["Căn chỉnh cánh cửa, ray trượt, bản lề, khóa và phụ kiện.", "Kiểm tra điểm hở nước, hở gió, gioăng, keo và chân khung.", "Tư vấn thay phụ kiện khi cửa đã sử dụng lâu hoặc xuống cấp."]],
      ["Không nên tự xử lý khi", ["Cửa kính hoặc kính cường lực có dấu hiệu nứt, vỡ, xệ hoặc rung mạnh.", "Cửa cuốn kẹt, lệch ray, motor hoạt động bất thường.", "Cửa nhôm kính thấm nước nhiều vị trí hoặc khóa không còn an toàn."]],
      ["Liên kết liên quan", ["bao-hanh-bao-tri-cua-nhom-kinh.html", "sua-chua-cua-nhom-kinh.html", "sua-cua-cuon-ha-noi.html"]]
    ]
  }
];

const labels = {
  "bao-gia-cua-nhom-kinh.html": "Báo giá cửa nhôm kính",
  "bao-gia-thi-cong-nhom-kinh-2026.html": "Báo giá thi công nhôm kính 2026",
  "bao-hanh-bao-tri-cua-nhom-kinh.html": "Bảo hành, bảo trì",
  "checklist-khao-sat-cua-nhom-kinh.html": "Checklist khảo sát",
  "du-an-thi-cong-nhom-kinh.html": "Dự án thi công",
  "huong-dan-gui-anh-bao-gia-nhom-kinh.html": "Hướng dẫn gửi ảnh báo giá",
  "lien-he-khao-sat-nhom-kinh.html": "Liên hệ khảo sát",
  "quy-trinh-thi-cong-cua.html": "Quy trình thi công",
  "sua-chua-cua-nhom-kinh.html": "Sửa chữa cửa nhôm kính",
  "sua-cua-cuon-ha-noi.html": "Sửa cửa cuốn Hà Nội"
};

function header() {
  return `<header class="header scrolled"><div class="container"><a href="index.html" class="logo"><div class="logo-icon">NK</div><div class="logo-text"><span class="logo-name">NK Door</span><span class="logo-tagline">Cửa Thép & Nhôm Kính Miền Bắc</span></div></a><nav class="nav-menu"><a href="index.html#services" class="nav-link">Dịch vụ</a><a href="index.html#projects" class="nav-link">Dự án</a><a href="index.html#areas" class="nav-link">Khu vực</a><a href="index.html#contact" class="nav-link">Liên hệ</a></nav><div class="header-cta"><a href="tel:${phoneHref}" class="header-phone">${phone}</a></div></div></header>`;
}

function cardHtml([title, items]) {
  const linked = items.every((item) => item.endsWith(".html"));
  if (linked) {
    return `<article class="seo-card"><h2>${title}</h2><div class="seo-pill-links">${items.map((href) => `<a href="${href}">${labels[href] ?? href.replace(".html", "")}</a>`).join("")}</div></article>`;
  }
  return `<article class="seo-card"><h2>${title}</h2><ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul></article>`;
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
      "@type": page.type,
      name: page.h1,
      description: page.description,
      url: `${baseUrl}/${page.slug}`,
      isPartOf: { "@type": "WebSite", name: "NK Door", url: `${baseUrl}/` },
      publisher: { "@type": "Organization", name: "NK Door", telephone: "+84975337071", url: `${baseUrl}/` }
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Có thể tư vấn trước khi khảo sát không?",
          acceptedAnswer: { "@type": "Answer", text: "Có. Khách hàng có thể gửi ảnh hiện trạng, kích thước sơ bộ và khu vực thi công để NK Door tư vấn trước khi hẹn lịch khảo sát trực tiếp." }
        },
        {
          "@type": "Question",
          name: "Thông tin trên website có thay thế khảo sát thực tế không?",
          acceptedAnswer: { "@type": "Answer", text: "Không. Nội dung trên website giúp khách hàng chuẩn bị thông tin và hiểu phương án cơ bản. Với công trình cần chốt vật tư, kích thước và chi phí chính xác, nên khảo sát thực tế." }
        }
      ]
    }
  ];

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
  <meta property="og:url" content="${baseUrl}/${page.slug}">
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
    <section class="seo-section"><div class="container seo-grid">${page.cards.map(cardHtml).join("")}</div></section>
    <section class="seo-section alt"><div class="container seo-copy"><h2>Chuẩn bị thông tin trước khi gọi</h2><p>Ảnh hiện trạng, kích thước sơ bộ, khu vực thi công và nhu cầu sử dụng giúp quá trình tư vấn nhanh hơn, rõ vật tư hơn và hạn chế phát sinh sau khảo sát.</p><div class="seo-pill-links"><a href="lien-he-khao-sat-nhom-kinh.html">Liên hệ khảo sát</a><a href="huong-dan-gui-anh-bao-gia-nhom-kinh.html">Hướng dẫn gửi ảnh</a><a href="bao-gia-thi-cong-nhom-kinh-2026.html">Cách tính báo giá</a></div></div></section>
  </main>
</body>
</html>
`;
}

for (const page of pages) {
  fs.writeFileSync(path.join(root, page.slug), pageHtml(page), "utf8");
}

let index = fs.readFileSync(path.join(root, "index.html"), "utf8");
const footerAdd = `
            <li><a href="gioi-thieu-nk-door.html" class="footer-link">Giới thiệu NK Door</a></li>
            <li><a href="lien-he-khao-sat-nhom-kinh.html" class="footer-link">Liên hệ khảo sát</a></li>
            <li><a href="huong-dan-gui-anh-bao-gia-nhom-kinh.html" class="footer-link">Hướng dẫn gửi ảnh</a></li>
            <li><a href="chinh-sach-bao-hanh-cua-nhom-kinh.html" class="footer-link">Chính sách bảo hành</a></li>`;
if (!index.includes("gioi-thieu-nk-door.html")) {
  index = index.replace('            <li><a href="#why-us" class="footer-link">Về chúng tôi</a></li>', `${footerAdd}
            <li><a href="#why-us" class="footer-link">Về chúng tôi</a></li>`);
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
  ["Tin cậy, tư vấn, bảo hành, FAQ", (file) => file.includes("kinh-nghiem") || file.includes("so-sanh") || file.includes("quy-trinh") || file.includes("bao-hanh") || file.includes("chinh-sach") || file.includes("checklist") || file.includes("cau-hoi") || file.includes("sua-") || file.includes("du-an") || file.includes("gioi-thieu") || file.includes("lien-he") || file.includes("gui-anh")]
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

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${htmlFiles.map((file) => {
  const loc = file === "index.html" ? `${baseUrl}/` : `${baseUrl}/${file}`;
  const priority = file === "index.html" ? "1.0" : file.startsWith("bao-gia") || file.includes("lien-he") || file.includes("gioi-thieu") || file.includes("ha-noi") || file.includes("ha-nam") || file.includes("hung-yen") ? "0.9" : "0.85";
  const freq = file.includes("kinh-nghiem") || file.includes("so-sanh") || file.includes("checklist") || file.includes("cau-hoi") || file === "site-map.html" || file.includes("du-an") || file.includes("chinh-sach") ? "monthly" : "weekly";
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

console.log(JSON.stringify({ addedPages: pages.length, totalUrls: htmlFiles.length, pages: pages.map((page) => page.slug) }, null, 2));
