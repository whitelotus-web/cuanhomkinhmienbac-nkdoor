import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const baseUrl = "https://cua-nhom-kinh-mien-bac.netlify.app";
const today = "2026-06-28";
const phone = "0975.337.071";
const phoneHref = "0975337071";
const ogImage = `${baseUrl}/img%20thi%20cong/IMG_1774397594460_1774416357947_1.jpg`;

const pages = [
  {
    slug: "cua-nhom-kinh-cach-am.html",
    title: "Cửa Nhôm Kính Cách Âm | Tư Vấn Kính, Gioăng, Phụ Kiện",
    description: "Tư vấn cửa nhôm kính cách âm cho nhà phố, chung cư, văn phòng: chọn hệ nhôm, kính an toàn, kính hộp, gioăng, phụ kiện và cách thi công kín khít.",
    eyebrow: "Cửa nhôm kính cách âm",
    h1: "Cửa Nhôm Kính Cách Âm Cho Nhà Phố, Chung Cư, Văn Phòng",
    intro: "Khách hàng thường cần cửa nhôm kính cách âm khi nhà gần đường lớn, căn hộ hướng gió, văn phòng cần giảm tiếng ồn hoặc phòng ngủ cần kín hơn. Hiệu quả cách âm phụ thuộc đồng thời vào hệ nhôm, kính, gioăng, phụ kiện và kỹ thuật lắp đặt.",
    sections: [
      ["Yếu tố quyết định cách âm", ["Hệ nhôm đủ cứng, khung lắp kín và không bị hở chân.", "Kính phù hợp như kính an toàn, kính hộp hoặc kính dày hơn theo nhu cầu.", "Gioăng, keo, phụ kiện và ray trượt phải đồng bộ để hạn chế khe hở."]],
      ["Vị trí nên ưu tiên", ["Cửa ban công chung cư, cửa phòng ngủ hướng đường.", "Cửa sổ nhà phố gần mặt đường hoặc khu đông dân cư.", "Văn phòng, phòng họp, showroom cần không gian yên tĩnh hơn."]],
      ["Liên kết liên quan", ["cua-nhom-kinh.html", "cua-nhom-kinh-ban-cong.html", "bao-gia-cua-nhom-kinh.html"]]
    ]
  },
  {
    slug: "chong-tham-cua-nhom-kinh-ban-cong.html",
    title: "Chống Thấm Cửa Nhôm Kính Ban Công | Xử Lý Hở Nước, Hở Gió",
    description: "Tư vấn chống thấm cửa nhôm kính ban công, xử lý hở nước, hở gió, ray thoát nước, keo, gioăng và phương án thay cửa phù hợp.",
    eyebrow: "Chống thấm ban công",
    h1: "Chống Thấm Cửa Nhôm Kính Ban Công Và Xử Lý Hở Nước",
    intro: "Cửa ban công bị hắt nước, hở gió hoặc thấm chân khung thường do ray thoát nước, keo, gioăng, độ dốc sàn hoặc cửa cũ lắp không kín. NK Door kiểm tra hiện trạng trước khi tư vấn sửa, căn chỉnh hoặc thay mới.",
    sections: [
      ["Nguyên nhân thường gặp", ["Keo chân khung lão hóa, nứt hoặc bơm không kín.", "Ray thoát nước bị tắc, lắp sai hướng hoặc không đủ độ dốc.", "Cánh cửa xệ, gioăng hở, khóa ép không đủ chặt."]],
      ["Cách xử lý", ["Vệ sinh ray, kiểm tra lỗ thoát nước và bơm keo lại điểm hở.", "Căn chỉnh phụ kiện, thay gioăng hoặc thay bánh xe nếu cần.", "Thay cửa mới nếu hệ cửa cũ quá yếu hoặc thấm nhiều vị trí."]],
      ["Liên kết liên quan", ["cua-nhom-kinh-ban-cong.html", "sua-chua-cua-nhom-kinh.html", "bao-hanh-bao-tri-cua-nhom-kinh.html"]]
    ]
  },
  {
    slug: "phu-kien-cua-nhom-kinh.html",
    title: "Phụ Kiện Cửa Nhôm Kính | Khóa, Bản Lề, Ray Trượt, Gioăng",
    description: "Tư vấn phụ kiện cửa nhôm kính: khóa, bản lề, tay nắm, ray trượt, bánh xe, gioăng, keo và cách chọn phụ kiện phù hợp từng hệ cửa.",
    eyebrow: "Phụ kiện cửa nhôm kính",
    h1: "Phụ Kiện Cửa Nhôm Kính Quyết Định Độ Bền Và Độ Kín",
    intro: "Một bộ cửa nhôm kính tốt không chỉ nằm ở thanh nhôm và kính. Khóa, bản lề, tay nắm, ray trượt, bánh xe, gioăng và keo hoàn thiện quyết định trải nghiệm đóng mở, độ kín nước và tuổi thọ sử dụng.",
    sections: [
      ["Nhóm phụ kiện chính", ["Khóa, tay nắm, bản lề cho cửa mở quay.", "Ray, bánh xe, khóa sò cho cửa lùa.", "Gioăng, keo, vít, nẹp và phụ kiện hoàn thiện."]],
      ["Khi nào nên thay phụ kiện?", ["Cửa đóng mở nặng, kêu, xệ cánh hoặc không khóa được.", "Cửa lùa trượt rít, bánh xe mòn hoặc ray bị lệch.", "Gioăng chai cứng, hở gió, hở nước hoặc giảm cách âm."]],
      ["Liên kết liên quan", ["sua-chua-cua-nhom-kinh.html", "bao-gia-cua-nhom-xingfa.html", "kinh-nghiem-chon-cua-nhom-kinh.html"]]
    ]
  },
  {
    slug: "cau-hoi-thuong-gap-cua-nhom-kinh.html",
    title: "Câu Hỏi Thường Gặp Về Cửa Nhôm Kính, Cửa Thép, Cửa Cuốn",
    description: "Tổng hợp câu hỏi thường gặp khi thi công cửa nhôm kính, cửa thép, cửa cuốn, kính cường lực: báo giá, khảo sát, bảo hành, vật tư và tiến độ.",
    eyebrow: "FAQ tổng hợp",
    h1: "Câu Hỏi Thường Gặp Khi Làm Cửa Nhôm Kính, Cửa Thép, Cửa Cuốn",
    intro: "Trang FAQ tổng hợp giúp khách hàng trả lời nhanh các câu hỏi phổ biến trước khi gọi khảo sát hoặc nhận báo giá. Nội dung cũng giúp Google hiểu rõ hơn các dịch vụ chính của NK Door.",
    faq: [
      ["Cần chuẩn bị gì để báo giá cửa nhôm kính nhanh?", "Nên gửi ảnh hiện trạng, kích thước rộng x cao, số lượng bộ cửa, khu vực thi công, kiểu mở mong muốn và nhu cầu như cách âm, chống nước hoặc lấy sáng."],
      ["Báo giá qua điện thoại có chính xác không?", "Có thể báo giá sơ bộ qua ảnh và kích thước. Với công trình cần độ chính xác cao, nên khảo sát trực tiếp để kiểm tra ô chờ, tường nền, hướng mở và điều kiện lắp đặt."],
      ["Cửa nhôm Xingfa khác gì cửa nhôm phổ thông?", "Cửa nhôm Xingfa thường được chọn khi cần độ cứng, độ kín, thẩm mỹ và vận hành ổn định hơn. Tuy nhiên vẫn cần chọn đúng phụ kiện, kính và kỹ thuật lắp đặt."],
      ["Cửa ban công bị thấm nước xử lý thế nào?", "Cần kiểm tra ray thoát nước, keo chân khung, gioăng, độ ép khóa và độ dốc sàn. Có trường hợp chỉ cần căn chỉnh, nhưng cửa quá cũ có thể phải thay mới."],
      ["NK Door có nhận bảo trì sau thi công không?", "Có. Đội kỹ thuật hỗ trợ kiểm tra, căn chỉnh, thay phụ kiện và xử lý phát sinh theo từng hạng mục, khu vực và điều kiện sử dụng thực tế."]
    ],
    sections: [
      ["Nhóm câu hỏi chính", ["Báo giá và khảo sát trước thi công.", "Vật tư, phụ kiện, kính, hệ nhôm, hệ cửa.", "Bảo hành, bảo trì, sửa chữa sau lắp đặt."]],
      ["Liên kết liên quan", ["checklist-khao-sat-cua-nhom-kinh.html", "bao-gia-cua-nhom-kinh.html", "bao-hanh-bao-tri-cua-nhom-kinh.html"]]
    ]
  }
];

const labels = {
  "cua-nhom-kinh.html": "Cửa nhôm kính",
  "cua-nhom-kinh-ban-cong.html": "Cửa nhôm kính ban công",
  "bao-gia-cua-nhom-kinh.html": "Báo giá cửa nhôm kính",
  "sua-chua-cua-nhom-kinh.html": "Sửa chữa cửa nhôm kính",
  "bao-hanh-bao-tri-cua-nhom-kinh.html": "Bảo hành bảo trì",
  "bao-gia-cua-nhom-xingfa.html": "Báo giá cửa nhôm Xingfa",
  "kinh-nghiem-chon-cua-nhom-kinh.html": "Kinh nghiệm chọn cửa",
  "checklist-khao-sat-cua-nhom-kinh.html": "Checklist khảo sát"
};

function header() {
  return `<header class="header scrolled"><div class="container"><a href="index.html" class="logo"><div class="logo-icon">NK</div><div class="logo-text"><span class="logo-name">NK Door</span><span class="logo-tagline">Cửa Thép & Nhôm Kính Miền Bắc</span></div></a><nav class="nav-menu"><a href="index.html#services" class="nav-link">Dịch vụ</a><a href="index.html#projects" class="nav-link">Dự án</a><a href="index.html#areas" class="nav-link">Khu vực</a><a href="index.html#contact" class="nav-link">Liên hệ</a></nav><div class="header-cta"><a href="tel:${phoneHref}" class="header-phone">${phone}</a></div></div></header>`;
}

function links(items) {
  return `<div class="seo-pill-links">${items.map((href) => `<a href="${href}">${labels[href] ?? href.replace(".html", "")}</a>`).join("")}</div>`;
}

function pageHtml(page) {
  const schemaGraph = [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${baseUrl}/` },
        { "@type": "ListItem", position: 2, name: page.h1, item: `${baseUrl}/${page.slug}` }
      ]
    },
    {
      "@type": page.faq ? "FAQPage" : "Service",
      name: page.h1,
      ...(page.faq ? {
        mainEntity: page.faq.map(([name, text]) => ({
          "@type": "Question",
          name,
          acceptedAnswer: { "@type": "Answer", text }
        }))
      } : {
        areaServed: ["Hà Nội", "Hưng Yên", "Hà Nam", "Phủ Lý", "Miền Bắc"],
        provider: { "@type": "LocalBusiness", name: "NK Door", telephone: "+84975337071", url: `${baseUrl}/` }
      })
    }
  ];

  const faqHtml = page.faq ? `<section class="seo-section"><div class="container seo-grid">${page.faq.map(([q, a]) => `<article class="seo-card"><h2>${q}</h2><p>${a}</p></article>`).join("")}</div></section>` : "";
  const sectionsHtml = page.sections.map(([title, items]) => {
    const allLinks = items.every((item) => item.endsWith(".html"));
    return `<article class="seo-card"><h2>${title}</h2>${allLinks ? links(items) : `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`}</article>`;
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
${JSON.stringify({ "@context": "https://schema.org", "@graph": schemaGraph }, null, 2)}
  </script>
</head>
<body class="seo-page">
  ${header()}
  <main>
    <section class="seo-hero"><div class="container"><div class="seo-hero-content"><div class="breadcrumb"><a href="index.html">Trang chủ</a><span>/</span><span>${page.eyebrow}</span></div><span class="seo-eyebrow">${page.eyebrow}</span><h1>${page.h1}</h1><p>${page.intro}</p><div class="seo-actions"><a href="tel:${phoneHref}" class="btn btn-primary">Gọi tư vấn</a><a href="index.html#contact" class="btn btn-outline">Nhận báo giá</a></div></div></div></section>
    <section class="seo-section"><div class="container seo-grid">${sectionsHtml}</div></section>
    ${faqHtml}
    <section class="seo-section alt"><div class="container seo-copy"><h2>Khảo sát đúng giúp giảm phát sinh</h2><p>Với các hạng mục cửa nhôm kính, kính cường lực, cửa cuốn và cửa thép, NK Door luôn ưu tiên kiểm tra hiện trạng, tư vấn vật tư phù hợp và báo giá theo từng vị trí thi công.</p></div></section>
  </main>
</body>
</html>
`;
}

for (const page of pages) fs.writeFileSync(path.join(root, page.slug), pageHtml(page), "utf8");

let index = fs.readFileSync(path.join(root, "index.html"), "utf8");
const footerAdd = `
            <li><a href="cua-nhom-kinh-cach-am.html" class="footer-link">Cửa nhôm kính cách âm</a></li>
            <li><a href="chong-tham-cua-nhom-kinh-ban-cong.html" class="footer-link">Chống thấm cửa ban công</a></li>
            <li><a href="phu-kien-cua-nhom-kinh.html" class="footer-link">Phụ kiện cửa nhôm kính</a></li>
            <li><a href="cau-hoi-thuong-gap-cua-nhom-kinh.html" class="footer-link">FAQ cửa nhôm kính</a></li>`;
if (!index.includes("cua-nhom-kinh-cach-am.html")) {
  index = index.replace('            <li><a href="checklist-khao-sat-cua-nhom-kinh.html" class="footer-link">Checklist khảo sát</a></li>', `            <li><a href="checklist-khao-sat-cua-nhom-kinh.html" class="footer-link">Checklist khảo sát</a></li>${footerAdd}`);
}

const htmlFiles = fs.readdirSync(root)
  .filter((file) => file.endsWith(".html"))
  .filter((file) => file !== "404.html")
  .sort((a, b) => (a === "index.html" ? -1 : b === "index.html" ? 1 : a.localeCompare(b, "vi")));

const titleMap = {};
for (const file of htmlFiles) {
  const content = fs.readFileSync(path.join(root, file), "utf8");
  const title = content.match(/<title>([^<]+)<\/title>/)?.[1]?.replace(/\s*\|.*$/, "") ?? file.replace(".html", "");
  titleMap[file] = file === "index.html" ? "Trang chủ" : title;
}

const groups = [
  ["Báo giá", (f) => f.startsWith("bao-gia")],
  ["Cửa nhôm kính", (f) => f.includes("nhom") || f.includes("xingfa") || f.includes("phu-kien") || f.includes("chong-tham")],
  ["Cửa thép, cửa cuốn", (f) => f.includes("cua-thep") || f.includes("cua-cuon")],
  ["Kính cường lực", (f) => f.includes("kinh-cuong-luc") || f.includes("vach") || f.includes("cabin") || f.includes("mai-kinh") || f.includes("cau-thang")],
  ["Khu vực thi công", (f) => f.startsWith("thi-cong-nhom-kinh")],
  ["Tư vấn, bảo hành, FAQ", (f) => f.includes("kinh-nghiem") || f.includes("so-sanh") || f.includes("quy-trinh") || f.includes("bao-hanh") || f.includes("checklist") || f.includes("cau-hoi") || f.includes("sua-")]
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
fs.writeFileSync(path.join(root, "index.html"), index, "utf8");

console.log(`Generated ${pages.length} content pages. Sitemap URLs: ${htmlFiles.length}.`);
