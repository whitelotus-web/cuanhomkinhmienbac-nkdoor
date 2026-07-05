import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const baseUrl = "https://cua-nhom-kinh-mien-bac.netlify.app";
const today = "2026-07-05";
const phone = "0975.337.071";
const phoneHref = "0975337071";
const ogImage = `${baseUrl}/img%20thi%20cong/IMG_1774397594460_1774416357947_1.jpg`;

const pages = [
  {
    slug: "du-an-thi-cong-nhom-kinh.html",
    title: "Dự Án Thi Công Nhôm Kính, Cửa Kính, Cửa Thép | NK Door",
    description: "Tổng hợp hạng mục thi công nhôm kính, cửa kính, cửa thép, cửa cuốn, vách kính, cabin tắm kính để khách hàng tham khảo trước khi gửi ảnh hiện trạng.",
    eyebrow: "Dự án và hạng mục",
    h1: "Dự Án Thi Công Nhôm Kính, Cửa Kính, Cửa Thép",
    intro: "Trang này gom các nhóm công trình NK Door thường nhận tư vấn và thi công: nhà phố, căn hộ, cửa hàng, văn phòng, showroom và công trình cải tạo. Khi có ảnh công trình thật, đây sẽ là nơi bổ sung case study chi tiết cho từng khu vực.",
    type: "CollectionPage",
    cards: [
      ["Nhóm công trình dân dụng", ["Cửa nhôm kính nhà phố, cửa sổ, cửa đi, cửa ban công.", "Cửa nhôm kính căn hộ, logia, vách kính phòng tắm.", "Cửa thép vân gỗ, cửa cuốn, cửa lưới chống muỗi."]],
      ["Nhóm công trình kinh doanh", ["Vách kính cửa hàng, cửa kính mặt tiền và showroom.", "Vách kính văn phòng, phòng họp, cửa kính cường lực.", "Cửa cuốn, cửa thép, cửa nhôm kính cho kho nhỏ và mặt bằng."]],
      ["Liên kết liên quan", ["cua-nhom-kinh-mat-tien-nha-pho.html", "cua-nhom-kinh-cua-hang.html", "vach-kinh-cua-hang-showroom.html"]]
    ]
  },
  {
    slug: "bao-gia-thi-cong-nhom-kinh-2026.html",
    title: "Báo Giá Thi Công Nhôm Kính 2026 | Cách Tính Chi Phí",
    description: "Cách tính báo giá thi công nhôm kính 2026 theo kích thước, hệ nhôm, kính, phụ kiện, nhân công, vận chuyển và điều kiện lắp đặt thực tế.",
    eyebrow: "Báo giá 2026",
    h1: "Báo Giá Thi Công Nhôm Kính 2026 Và Cách Tính Chi Phí",
    intro: "Giá thi công nhôm kính không nên nhìn một con số chung cho mọi công trình. Chi phí cần tính theo kích thước, hệ nhôm, loại kính, phụ kiện, nhân công, vận chuyển và mức độ khó của vị trí lắp đặt.",
    type: "Article",
    cards: [
      ["Các yếu tố tạo giá", ["Diện tích rộng x cao, số lượng bộ cửa và kiểu mở.", "Hệ nhôm, độ dày nhôm, loại kính và màu hoàn thiện.", "Khóa, bản lề, ray, bánh xe, gioăng, keo và phụ kiện đồng bộ."]],
      ["Chi phí dễ bị bỏ sót", ["Tháo dỡ cửa cũ, xử lý ô chờ, chống thấm chân khung.", "Vận chuyển lên tầng cao, điều kiện thang máy hoặc lối đi hẹp.", "Bảo hành, căn chỉnh sau lắp đặt và xử lý phát sinh tại công trình."]],
      ["Liên kết liên quan", ["bao-gia-cua-nhom-kinh.html", "bao-gia-cua-nhom-xingfa.html", "checklist-khao-sat-cua-nhom-kinh.html"]]
    ]
  },
  {
    slug: "cua-nhom-kinh-phong-ngu.html",
    title: "Cửa Nhôm Kính Phòng Ngủ | Cách Âm, Kín Gió, An Toàn",
    description: "Tư vấn cửa nhôm kính phòng ngủ cho nhà phố, căn hộ: cách âm tương đối, kín gió, lấy sáng, chống nước, an toàn và phù hợp nội thất.",
    eyebrow: "Cửa phòng ngủ",
    h1: "Cửa Nhôm Kính Phòng Ngủ Cách Âm, Kín Gió, An Toàn",
    intro: "Phòng ngủ cần sự yên tĩnh, kín gió, đủ sáng và an toàn khi sử dụng hằng ngày. NK Door tư vấn hệ nhôm, kính, gioăng, phụ kiện và hướng mở theo vị trí phòng ngủ thực tế.",
    type: "Service",
    cards: [
      ["Nên ưu tiên", ["Độ kín gió và độ êm khi đóng mở.", "Kính an toàn hoặc kính phù hợp nhu cầu riêng tư.", "Phụ kiện chắc, khóa dễ sử dụng và ít phát tiếng ồn."]],
      ["Vị trí thường làm", ["Cửa phòng ngủ hướng ban công hoặc logia.", "Cửa sổ phòng ngủ cần lấy sáng nhưng hạn chế ồn.", "Cửa ngăn phòng trong nhà phố, căn hộ và phòng cho thuê."]],
      ["Liên kết liên quan", ["cua-nhom-kinh-cach-am.html", "kinh-hop-cach-am-cach-nhiet.html", "cua-so-nhom-kinh.html"]]
    ]
  },
  {
    slug: "cua-nhom-kinh-phong-khach.html",
    title: "Cửa Nhôm Kính Phòng Khách | Cửa Đi, Cửa Lùa, Mặt Tiền",
    description: "Tư vấn cửa nhôm kính phòng khách cho nhà phố và căn hộ: cửa đi, cửa lùa, cửa sổ lớn, vách kính lấy sáng, mặt tiền kính.",
    eyebrow: "Cửa phòng khách",
    h1: "Cửa Nhôm Kính Phòng Khách Cho Nhà Phố, Căn Hộ",
    intro: "Phòng khách thường cần cửa rộng, lấy sáng tốt, vận hành nhẹ và hài hòa với mặt tiền hoặc nội thất. NK Door tư vấn cửa đi, cửa lùa, cửa sổ lớn và vách kính theo từng không gian.",
    type: "Service",
    cards: [
      ["Phương án phổ biến", ["Cửa đi nhôm kính 2 cánh, 4 cánh cho mặt tiền nhà phố.", "Cửa lùa nhôm kính cho phòng khách nối ban công.", "Vách kính cố định kết hợp cửa mở để tăng ánh sáng."]],
      ["Cần tính kỹ", ["Hướng mở, lối đi, chiều rộng thông thủy và tần suất sử dụng.", "Độ an toàn kính, khóa, bản lề, ray trượt và tay nắm.", "Chống nước chân khung nếu cửa tiếp xúc mưa nắng."]],
      ["Liên kết liên quan", ["cua-di-nhom-kinh-4-canh.html", "cua-lua-nhom-kinh.html", "cua-nhom-kinh-mat-tien.html"]]
    ]
  },
  {
    slug: "cua-nhom-kinh-cua-hang.html",
    title: "Cửa Nhôm Kính Cửa Hàng | Mặt Tiền, Showroom, Văn Phòng",
    description: "Thi công cửa nhôm kính cửa hàng, showroom, văn phòng giao dịch: cửa mặt tiền, vách kính, cửa kính cường lực, cửa cuốn kết hợp.",
    eyebrow: "Cửa hàng và showroom",
    h1: "Cửa Nhôm Kính Cửa Hàng, Showroom, Văn Phòng",
    intro: "Cửa hàng cần mặt tiền sáng, dễ quan sát, an toàn và vận hành ổn định. NK Door tư vấn cửa nhôm kính, vách kính, cửa kính cường lực và cửa cuốn kết hợp theo mặt bằng kinh doanh.",
    type: "Service",
    cards: [
      ["Hạng mục phù hợp", ["Cửa nhôm kính mặt tiền, cửa đi 2 cánh hoặc 4 cánh.", "Vách kính showroom, cửa kính cường lực và khung nhôm.", "Cửa cuốn bảo vệ ngoài kết hợp cửa kính hoặc vách kính bên trong."]],
      ["Khi khảo sát cần xem", ["Chiều rộng mặt tiền, cao độ nền và hướng mở cửa.", "Lưu lượng khách ra vào, nhu cầu khóa và an toàn sau giờ bán hàng.", "Biển hiệu, vị trí trưng bày và yêu cầu nhìn xuyên sáng."]],
      ["Liên kết liên quan", ["vach-kinh-cua-hang-showroom.html", "cua-nhom-kinh-mat-tien.html", "bao-gia-cua-cuon.html"]]
    ]
  },
  {
    slug: "cua-nhom-kinh-mat-tien-nha-pho.html",
    title: "Cửa Nhôm Kính Mặt Tiền Nhà Phố | Lấy Sáng, An Toàn",
    description: "Tư vấn cửa nhôm kính mặt tiền nhà phố: cửa đi, vách kính, cửa kính cường lực, cửa cuốn kết hợp, chống nước và đảm bảo an toàn.",
    eyebrow: "Mặt tiền nhà phố",
    h1: "Cửa Nhôm Kính Mặt Tiền Nhà Phố Lấy Sáng, An Toàn",
    intro: "Mặt tiền nhà phố cần cân bằng giữa thẩm mỹ, lấy sáng, an toàn và chống nước. NK Door tư vấn cửa nhôm kính, vách kính, cửa kính cường lực và cửa cuốn kết hợp theo hiện trạng nhà.",
    type: "Service",
    cards: [
      ["Giải pháp thường dùng", ["Cửa nhôm kính 2 cánh, 4 cánh hoặc cửa lùa mặt tiền.", "Vách kính cố định kết hợp cửa mở cho không gian rộng.", "Cửa cuốn phía ngoài để tăng an toàn cho nhà phố kinh doanh."]],
      ["Yếu tố quyết định độ bền", ["Hệ nhôm đủ cứng, kính phù hợp kích thước và vị trí.", "Phụ kiện đồng bộ, khóa chắc, bản lề hoặc ray chịu tải tốt.", "Xử lý keo, gioăng, thoát nước và chân khung đúng kỹ thuật."]],
      ["Liên kết liên quan", ["cua-nhom-kinh-mat-tien.html", "cua-nhom-kinh-cua-hang.html", "bao-gia-thi-cong-nhom-kinh-2026.html"]]
    ]
  }
];

const labels = {
  "bao-gia-cua-cuon.html": "Báo giá cửa cuốn",
  "bao-gia-cua-nhom-kinh.html": "Báo giá cửa nhôm kính",
  "bao-gia-cua-nhom-xingfa.html": "Báo giá cửa nhôm Xingfa",
  "bao-gia-thi-cong-nhom-kinh-2026.html": "Báo giá thi công nhôm kính 2026",
  "checklist-khao-sat-cua-nhom-kinh.html": "Checklist khảo sát",
  "cua-di-nhom-kinh-4-canh.html": "Cửa đi nhôm kính 4 cánh",
  "cua-lua-nhom-kinh.html": "Cửa lùa nhôm kính",
  "cua-nhom-kinh-cach-am.html": "Cửa nhôm kính cách âm",
  "cua-nhom-kinh-cua-hang.html": "Cửa nhôm kính cửa hàng",
  "cua-nhom-kinh-mat-tien.html": "Cửa nhôm kính mặt tiền",
  "cua-nhom-kinh-mat-tien-nha-pho.html": "Cửa mặt tiền nhà phố",
  "cua-so-nhom-kinh.html": "Cửa sổ nhôm kính",
  "kinh-hop-cach-am-cach-nhiet.html": "Kính hộp cách âm",
  "vach-kinh-cua-hang-showroom.html": "Vách kính showroom"
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
      ...(page.type === "Service" ? {
        areaServed: ["Hà Nội", "Hưng Yên", "Hà Nam", "Phủ Lý", "Miền Bắc"],
        provider: { "@type": "LocalBusiness", name: "NK Door", telephone: "+84975337071", url: `${baseUrl}/` }
      } : {
        author: { "@type": "Organization", name: "NK Door" },
        publisher: { "@type": "Organization", name: "NK Door" }
      })
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Có thể báo giá sơ bộ qua ảnh không?",
          acceptedAnswer: { "@type": "Answer", text: "Có thể. Khách hàng nên gửi ảnh hiện trạng, kích thước rộng x cao, số lượng hạng mục và địa chỉ khu vực để NK Door tư vấn cấu hình phù hợp trước khi hẹn khảo sát." }
        },
        {
          "@type": "Question",
          name: "Khi nào cần khảo sát trực tiếp?",
          acceptedAnswer: { "@type": "Answer", text: "Nên khảo sát trực tiếp khi công trình có ô chờ lớn, cần chống nước, cần đồng bộ nhiều bộ cửa, cần tháo dỡ cửa cũ hoặc yêu cầu tiến độ chính xác." }
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
    <section class="seo-section alt"><div class="container seo-copy"><h2>Gửi ảnh hiện trạng để tư vấn nhanh hơn</h2><p>Ảnh hiện trạng, kích thước sơ bộ và địa chỉ khu vực giúp NK Door tư vấn đúng hạng mục, hạn chế báo giá thiếu vật tư và giảm phát sinh khi thi công.</p><div class="seo-pill-links"><a href="index.html#contact">Liên hệ khảo sát</a><a href="bao-gia-cua-nhom-kinh.html">Báo giá cửa nhôm kính</a><a href="du-an-thi-cong-nhom-kinh.html">Dự án thi công</a></div></div></section>
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
            <li><a href="du-an-thi-cong-nhom-kinh.html" class="footer-link">Dự án thi công</a></li>
            <li><a href="bao-gia-thi-cong-nhom-kinh-2026.html" class="footer-link">Báo giá nhôm kính 2026</a></li>
            <li><a href="cua-nhom-kinh-phong-ngu.html" class="footer-link">Cửa nhôm kính phòng ngủ</a></li>
            <li><a href="cua-nhom-kinh-phong-khach.html" class="footer-link">Cửa nhôm kính phòng khách</a></li>
            <li><a href="cua-nhom-kinh-cua-hang.html" class="footer-link">Cửa nhôm kính cửa hàng</a></li>
            <li><a href="cua-nhom-kinh-mat-tien-nha-pho.html" class="footer-link">Mặt tiền nhà phố</a></li>`;
if (!index.includes("du-an-thi-cong-nhom-kinh.html")) {
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
  ["Tư vấn, dự án, bảo hành, FAQ", (file) => file.includes("kinh-nghiem") || file.includes("so-sanh") || file.includes("quy-trinh") || file.includes("bao-hanh") || file.includes("checklist") || file.includes("cau-hoi") || file.includes("sua-") || file.includes("du-an")]
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
  const priority = file === "index.html" ? "1.0" : file.startsWith("bao-gia") || file.includes("ha-noi") || file.includes("ha-nam") || file.includes("hung-yen") || file.includes("mat-tien") || file.includes("cua-hang") ? "0.9" : "0.85";
  const freq = file.includes("kinh-nghiem") || file.includes("so-sanh") || file.includes("checklist") || file.includes("cau-hoi") || file === "site-map.html" || file.includes("du-an") ? "monthly" : "weekly";
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
