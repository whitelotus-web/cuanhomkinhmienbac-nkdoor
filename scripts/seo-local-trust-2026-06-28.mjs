import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const baseUrl = "https://cua-nhom-kinh-mien-bac.netlify.app";
const today = "2026-06-28";
const phone = "0975.337.071";
const phoneHref = "0975337071";
const ogImage = `${baseUrl}/img%20thi%20cong/2026-05-29%2014.46.24_175422,%20%C4%90%C6%B0%E1%BB%9Dng%20L%E1%BA%A1c%20Long%20Qu%C3%A2n_1.jpg`;

const pages = [
  {
    slug: "thi-cong-nhom-kinh-hai-duong.html",
    title: "Thi Công Nhôm Kính Hải Dương | Cửa Nhôm Kính, Vách Kính",
    description: "Nhận thi công cửa nhôm kính, vách kính, cửa kính cường lực tại Hải Dương và khu vực lân cận. Tư vấn khảo sát, báo giá theo công trình.",
    h1: "Thi Công Nhôm Kính Tại Hải Dương",
    eyebrow: "Khu vực Hải Dương",
    intro: "NK Door nhận khảo sát và thi công cửa nhôm kính, vách kính, cửa kính cường lực, cửa cuốn và cửa thép cho nhà phố, cửa hàng, văn phòng tại Hải Dương.",
    cards: [
      ["Hạng mục nhận làm", ["Cửa nhôm kính, cửa sổ, cửa lùa, vách nhôm kính.", "Cửa kính cường lực, vách kính văn phòng, mái kính.", "Cửa cuốn, cửa thép vân gỗ, cửa lưới chống muỗi."]],
      ["Tư vấn báo giá", ["Khách hàng gửi ảnh, kích thước và vị trí công trình.", "Tư vấn vật tư phù hợp ngân sách và nhu cầu sử dụng.", "Khảo sát thực tế với công trình cần đo chính xác."]],
      ["Liên kết liên quan", ["thi-cong-nhom-kinh-mien-bac.html", "bao-gia-cua-nhom-kinh.html", "cua-nhom-xingfa-ha-noi.html"]]
    ]
  },
  {
    slug: "thi-cong-nhom-kinh-thai-binh.html",
    title: "Thi Công Nhôm Kính Thái Bình | Cửa Nhôm Kính, Cửa Kính",
    description: "Thi công nhôm kính Thái Bình: cửa nhôm kính, cửa kính cường lực, vách kính, cửa cuốn, cửa thép. Tư vấn vật tư và báo giá rõ hạng mục.",
    h1: "Thi Công Nhôm Kính Tại Thái Bình",
    eyebrow: "Khu vực Thái Bình",
    intro: "Trang khu vực Thái Bình giúp khách hàng tìm đúng dịch vụ thi công cửa nhôm kính, kính cường lực, cửa cuốn và cửa thép tại miền Bắc.",
    cards: [
      ["Công trình phù hợp", ["Nhà phố, căn hộ, cửa hàng, văn phòng.", "Mặt tiền cần lấy sáng, cửa ban công, cửa sổ.", "Công trình cải tạo cần thay cửa cũ."]],
      ["Điểm cần khảo sát", ["Kích thước ô chờ, hướng mở, tình trạng tường nền.", "Yêu cầu chống nước, cách âm, an toàn và thẩm mỹ.", "Vận chuyển, lắp đặt và thời gian hoàn thiện."]],
      ["Liên kết liên quan", ["cua-nhom-kinh.html", "cua-kinh-cuong-luc.html", "bao-gia-cua-cuon.html"]]
    ]
  },
  {
    slug: "thi-cong-nhom-kinh-nam-dinh.html",
    title: "Thi Công Nhôm Kính Nam Định | Cửa Nhôm Kính Miền Bắc",
    description: "Nhận thi công cửa nhôm kính, vách nhôm kính, cửa kính cường lực, cửa cuốn tại Nam Định. Tư vấn khảo sát và báo giá theo thực tế.",
    h1: "Thi Công Nhôm Kính Tại Nam Định",
    eyebrow: "Khu vực Nam Định",
    intro: "NK Door mở rộng cụm dịch vụ nhôm kính miền Bắc với trang khu vực Nam Định, phù hợp khách tìm nhà thầu thi công gần địa phương.",
    cards: [
      ["Dịch vụ chính", ["Cửa nhôm kính Xingfa, cửa nhôm kính phổ thông.", "Vách kính, cửa kính, mái kính, cabin tắm kính.", "Cửa thép vân gỗ, cửa cuốn và sửa chữa cửa."]],
      ["Cách nhận báo giá", ["Gửi ảnh hiện trạng và kích thước sơ bộ.", "Nêu rõ khu vực, tầng lắp đặt và hạng mục cần làm.", "Khảo sát trước khi chốt vật tư và tiến độ."]],
      ["Liên kết liên quan", ["thi-cong-nhom-kinh-mien-bac.html", "bao-gia-kinh-cuong-luc.html", "cua-thep-van-go-ha-noi.html"]]
    ]
  },
  {
    slug: "bao-hanh-bao-tri-cua-nhom-kinh.html",
    title: "Bảo Hành, Bảo Trì Cửa Nhôm Kính | Căn Chỉnh, Thay Phụ Kiện",
    description: "Tư vấn bảo hành, bảo trì cửa nhôm kính, cửa kính, cửa cuốn: căn chỉnh cánh, xử lý hở gioăng, thay phụ kiện, kiểm tra vận hành sau thi công.",
    h1: "Bảo Hành Và Bảo Trì Cửa Nhôm Kính Sau Thi Công",
    eyebrow: "Bảo hành - bảo trì",
    intro: "Trang bảo hành giúp khách hàng hiểu cách NK Door hỗ trợ sau thi công: kiểm tra vận hành, căn chỉnh, xử lý phát sinh và tư vấn bảo trì định kỳ.",
    cards: [
      ["Hạng mục hỗ trợ", ["Căn chỉnh cánh cửa bị xệ, kẹt hoặc khó đóng.", "Kiểm tra gioăng, khóa, bản lề, ray trượt, bánh xe.", "Tư vấn thay phụ kiện khi cửa đã sử dụng lâu năm."]],
      ["Khi nào cần bảo trì?", ["Cửa phát tiếng kêu, đóng mở nặng hoặc hở gió.", "Cửa ban công bị thấm nước khi mưa lớn.", "Cửa cuốn chạy yếu, motor nóng hoặc remote chập chờn."]],
      ["Liên kết liên quan", ["sua-chua-cua-nhom-kinh.html", "sua-cua-cuon-ha-noi.html", "quy-trinh-thi-cong-cua.html"]]
    ]
  },
  {
    slug: "checklist-khao-sat-cua-nhom-kinh.html",
    title: "Checklist Khảo Sát Cửa Nhôm Kính Trước Khi Báo Giá",
    description: "Checklist thông tin cần chuẩn bị khi khảo sát cửa nhôm kính: ảnh hiện trạng, kích thước, hướng mở, loại kính, phụ kiện, khu vực thi công.",
    h1: "Checklist Khảo Sát Cửa Nhôm Kính Trước Khi Báo Giá",
    eyebrow: "Tư vấn trước khảo sát",
    intro: "Chuẩn bị đúng thông tin giúp báo giá nhanh và sát hơn. Trang này tổng hợp các mục khách hàng nên gửi trước khi NK Door tư vấn hoặc khảo sát.",
    cards: [
      ["Thông tin nên gửi", ["Ảnh tổng thể và ảnh cận cảnh từng ô cửa.", "Kích thước rộng x cao, số lượng bộ cửa.", "Địa chỉ/khu vực thi công và tầng lắp đặt."]],
      ["Nhu cầu sử dụng", ["Cần cách âm, chống nước, lấy sáng hay an toàn.", "Muốn cửa lùa, mở quay, mở hất hoặc xếp trượt.", "Ngân sách dự kiến và thời gian cần hoàn thiện."]],
      ["Liên kết liên quan", ["bao-gia-cua-nhom-kinh.html", "kinh-nghiem-chon-cua-nhom-kinh.html", "cua-nhom-kinh-ban-cong.html"]]
    ]
  }
];

const linkLabels = {
  "thi-cong-nhom-kinh-mien-bac.html": "Nhôm kính miền Bắc",
  "bao-gia-cua-nhom-kinh.html": "Báo giá cửa nhôm kính",
  "cua-nhom-xingfa-ha-noi.html": "Cửa nhôm Xingfa",
  "cua-nhom-kinh.html": "Cửa nhôm kính",
  "cua-kinh-cuong-luc.html": "Cửa kính cường lực",
  "bao-gia-cua-cuon.html": "Báo giá cửa cuốn",
  "bao-gia-kinh-cuong-luc.html": "Báo giá kính cường lực",
  "cua-thep-van-go-ha-noi.html": "Cửa thép vân gỗ Hà Nội",
  "sua-chua-cua-nhom-kinh.html": "Sửa cửa nhôm kính",
  "sua-cua-cuon-ha-noi.html": "Sửa cửa cuốn Hà Nội",
  "quy-trinh-thi-cong-cua.html": "Quy trình thi công",
  "kinh-nghiem-chon-cua-nhom-kinh.html": "Kinh nghiệm chọn cửa",
  "cua-nhom-kinh-ban-cong.html": "Cửa ban công"
};

function header() {
  return `<header class="header scrolled"><div class="container"><a href="index.html" class="logo"><div class="logo-icon">NK</div><div class="logo-text"><span class="logo-name">NK Door</span><span class="logo-tagline">Cửa Thép & Nhôm Kính Miền Bắc</span></div></a><nav class="nav-menu"><a href="index.html#services" class="nav-link">Dịch vụ</a><a href="index.html#projects" class="nav-link">Dự án</a><a href="index.html#areas" class="nav-link">Khu vực</a><a href="index.html#contact" class="nav-link">Liên hệ</a></nav><div class="header-cta"><a href="tel:${phoneHref}" class="header-phone">${phone}</a></div></div></header>`;
}

function cardHtml([title, items]) {
  const body = items.every((item) => item.endsWith(".html"))
    ? `<div class="seo-pill-links">${items.map((href) => `<a href="${href}">${linkLabels[href] ?? href}</a>`).join("")}</div>`
    : `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  return `<article class="seo-card"><h2>${title}</h2>${body}</article>`;
}

function pageHtml(page) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
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
    ]
  };

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
${JSON.stringify(schema, null, 2)}
  </script>
</head>
<body class="seo-page">
  ${header()}
  <main>
    <section class="seo-hero"><div class="container"><div class="seo-hero-content"><div class="breadcrumb"><a href="index.html">Trang chủ</a><span>/</span><span>${page.eyebrow}</span></div><span class="seo-eyebrow">${page.eyebrow}</span><h1>${page.h1}</h1><p>${page.intro}</p><div class="seo-actions"><a href="tel:${phoneHref}" class="btn btn-primary">Gọi tư vấn</a><a href="index.html#contact" class="btn btn-outline">Nhận báo giá</a></div></div></div></section>
    <section class="seo-section"><div class="container seo-grid">${page.cards.map(cardHtml).join("")}</div></section>
    <section class="seo-section alt"><div class="container seo-copy"><h2>Tư vấn rõ trước khi thi công</h2><p>NK Door ưu tiên khảo sát đúng hiện trạng, báo giá rõ hạng mục và tư vấn phương án phù hợp thay vì chỉ đưa một mức giá chung. Điều này giúp khách hàng so sánh vật tư, phụ kiện, tiến độ và bảo hành dễ hơn.</p></div></section>
  </main>
</body>
</html>
`;
}

for (const page of pages) fs.writeFileSync(path.join(root, page.slug), pageHtml(page), "utf8");

let index = fs.readFileSync(path.join(root, "index.html"), "utf8");
const localLinks = `
            <li><a href="thi-cong-nhom-kinh-hai-duong.html" class="footer-link">Nhôm kính Hải Dương</a></li>
            <li><a href="thi-cong-nhom-kinh-thai-binh.html" class="footer-link">Nhôm kính Thái Bình</a></li>
            <li><a href="thi-cong-nhom-kinh-nam-dinh.html" class="footer-link">Nhôm kính Nam Định</a></li>`;
if (!index.includes("thi-cong-nhom-kinh-hai-duong.html")) {
  index = index.replace('            <li><a href="thi-cong-nhom-kinh-ninh-binh.html" class="footer-link">Nhôm kính Ninh Bình</a></li>', `            <li><a href="thi-cong-nhom-kinh-ninh-binh.html" class="footer-link">Nhôm kính Ninh Bình</a></li>${localLinks}`);
}
const trustLinks = `
            <li><a href="bao-hanh-bao-tri-cua-nhom-kinh.html" class="footer-link">Bảo hành bảo trì</a></li>
            <li><a href="checklist-khao-sat-cua-nhom-kinh.html" class="footer-link">Checklist khảo sát</a></li>`;
if (!index.includes("bao-hanh-bao-tri-cua-nhom-kinh.html")) {
  index = index.replace('            <li><a href="site-map.html" class="footer-link">Sitemap dịch vụ</a></li>', `            <li><a href="site-map.html" class="footer-link">Sitemap dịch vụ</a></li>${trustLinks}`);
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
  const freq = file.includes("kinh-nghiem") || file.includes("so-sanh") || file.includes("checklist") || file === "site-map.html" ? "monthly" : "weekly";
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

console.log(`Generated ${pages.length} local/trust pages. Sitemap URLs: ${htmlFiles.length}.`);
