import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const baseUrl = "https://cua-nhom-kinh-mien-bac.netlify.app";
const today = "2026-07-08";
const phone = "0975.337.071";
const phoneHref = "0975337071";
const ogImage = `${baseUrl}/img%20thi%20cong/IMG_1774397594460_1774416357947_1.jpg`;

const pages = [
  {
    slug: "thi-cong-nhom-kinh-ba-dinh.html",
    title: "Thi Công Nhôm Kính Ba Đình | Cửa Nhôm, Vách Kính, Cửa Kính",
    description: "Thi công nhôm kính Ba Đình cho nhà phố, căn hộ, văn phòng, cửa hàng: cửa nhôm kính, vách kính, cửa kính cường lực, sửa chữa và thay phụ kiện.",
    area: "Ba Đình",
    eyebrow: "Nhôm kính Ba Đình",
    h1: "Thi Công Nhôm Kính Ba Đình Cho Nhà Phố, Căn Hộ, Văn Phòng",
    intro: "Ba Đình có nhiều nhà phố, văn phòng, căn hộ và cửa hàng cần thi công nhôm kính gọn, sạch, đúng giờ và hạn chế ảnh hưởng sinh hoạt. NK Door tư vấn cửa nhôm kính, vách kính, cửa kính cường lực, cửa lùa, cửa sổ và sửa chữa phụ kiện theo hiện trạng thực tế.",
    sections: [
      ["Hạng mục thường làm", ["Cửa nhôm kính nhà phố, cửa ban công, cửa sổ và cửa phòng ngủ.", "Vách kính văn phòng, cửa kính cường lực, cửa hàng mặt phố và showroom nhỏ.", "Sửa cửa lùa, thay bánh xe, thay khóa, căn chỉnh cánh và xử lý hở nước."]],
      ["Lưu ý tại khu trung tâm", ["Cần tính giờ thi công, lối vận chuyển kính, chỗ tập kết vật tư và quy định tòa nhà.", "Nhà phố hoặc văn phòng đang hoạt động nên khảo sát kỹ để giảm bụi, tiếng ồn và thời gian tháo lắp.", "Mặt tiền cần cân bằng giữa thẩm mỹ, độ chắc, kính an toàn và phụ kiện chịu tải."]],
      ["Cách báo giá", ["Nhận ảnh hiện trạng và kích thước sơ bộ để tư vấn trước.", "Khảo sát khi cần chốt kích thước, hướng mở, loại kính, hệ nhôm và phụ kiện.", "Báo giá theo từng hạng mục vật tư, phụ kiện, nhân công, vận chuyển và bảo hành."]]
    ],
    related: ["thi-cong-nhom-kinh-ha-noi.html", "vach-kinh-van-phong.html", "cua-nhom-kinh-mat-tien-nha-pho.html", "sua-chua-cua-nhom-kinh.html"],
    faq: [
      ["Thi công nhôm kính Ba Đình có nhận sửa cửa cũ không?", "Có. NK Door nhận kiểm tra, căn chỉnh, thay bánh xe, thay khóa, xử lý hở nước và tư vấn thay mới khi hệ cửa đã xuống cấp nhiều vị trí."],
      ["Cửa hàng mặt phố ở Ba Đình nên dùng cửa kính hay cửa nhôm kính?", "Tùy mặt bằng và nhu cầu an toàn. Cửa kính cường lực tạo mặt tiền thoáng, còn cửa nhôm kính phù hợp khi cần khung chia đố, độ kín và khả năng bảo trì dễ hơn."]
    ]
  },
  {
    slug: "thi-cong-nhom-kinh-dong-da.html",
    title: "Thi Công Nhôm Kính Đống Đa | Cửa Ban Công, Cửa Sổ, Vách Kính",
    description: "Thi công nhôm kính Đống Đa cho nhà ở, căn hộ, cửa hàng, văn phòng: cửa ban công, cửa sổ, cửa lùa, vách kính, sửa cửa nhôm kính.",
    area: "Đống Đa",
    eyebrow: "Nhôm kính Đống Đa",
    h1: "Thi Công Nhôm Kính Đống Đa Cho Nhà Ở, Căn Hộ, Cửa Hàng",
    intro: "Đống Đa có mật độ nhà ở, căn hộ, cửa hàng và văn phòng cao nên các hạng mục nhôm kính thường cần khảo sát kỹ ô chờ, lối vận chuyển và thời gian thi công. NK Door hỗ trợ tư vấn cửa ban công, cửa sổ, cửa lùa, vách kính và sửa chữa cửa nhôm kính theo từng vị trí.",
    sections: [
      ["Nhu cầu phổ biến", ["Thay cửa ban công, cửa sổ, cửa lùa và cửa phòng cho căn hộ, nhà phố.", "Lắp vách kính văn phòng, cửa kính cường lực và mặt tiền cửa hàng.", "Sửa cửa nhôm kính kẹt ray, hỏng khóa, xệ cánh, thấm nước hoặc hở gió."]],
      ["Điểm cần kiểm tra", ["Kích thước ô chờ, hướng mở, vị trí vướng đồ nội thất, rèm hoặc lan can.", "Hướng mưa, độ cao nền và mép tiếp giáp tường để xử lý chống thấm.", "Tải trọng kính, loại phụ kiện và tần suất đóng mở để cửa vận hành ổn định."]],
      ["Gợi ý vật tư", ["Cửa sổ và cửa ban công nên ưu tiên gioăng, keo ngoài trời và thoát nước tốt.", "Cửa lùa cần ray, bánh xe và khóa đồng bộ với trọng lượng cánh.", "Vách kính hoặc cửa kính nên chọn phụ kiện chịu tải phù hợp kích thước tấm kính."]]
    ],
    related: ["thi-cong-nhom-kinh-ha-noi.html", "cua-nhom-kinh-ban-cong.html", "cua-lua-nhom-kinh.html", "chong-tham-cua-nhom-kinh-ban-cong.html"],
    faq: [
      ["Căn hộ ở Đống Đa có thay cửa ban công trong ngày được không?", "Tùy kích thước và tình trạng cửa cũ. Nếu đã khảo sát, chuẩn bị vật tư và thống nhất giờ thi công với tòa nhà, nhiều hạng mục có thể xử lý gọn trong ngày."],
      ["Cửa lùa bị nặng có cần thay cả bộ không?", "Không phải lúc nào cũng cần thay cả bộ. Cần kiểm tra ray, bánh xe, độ xệ cánh, khóa và khung nhôm để quyết định sửa, thay phụ kiện hay thay mới."]
    ]
  },
  {
    slug: "thi-cong-nhom-kinh-hai-ba-trung.html",
    title: "Thi Công Nhôm Kính Hai Bà Trưng | Cửa Nhôm, Cửa Kính, Showroom",
    description: "Thi công nhôm kính Hai Bà Trưng cho nhà phố, showroom, văn phòng, căn hộ: cửa nhôm kính, cửa kính cường lực, vách kính, cửa mặt tiền.",
    area: "Hai Bà Trưng",
    eyebrow: "Nhôm kính Hai Bà Trưng",
    h1: "Thi Công Nhôm Kính Hai Bà Trưng Cho Nhà Phố, Showroom, Văn Phòng",
    intro: "Hai Bà Trưng có nhiều tuyến phố kinh doanh, văn phòng, nhà ở cải tạo và căn hộ cần giải pháp nhôm kính vừa bền vừa đẹp. NK Door tư vấn cửa nhôm kính, cửa kính cường lực, vách kính, cửa mặt tiền và các hạng mục sửa chữa theo mục tiêu sử dụng.",
    sections: [
      ["Hạng mục phù hợp", ["Cửa kính cường lực, vách kính showroom, mặt tiền cửa hàng và văn phòng.", "Cửa nhôm kính nhà phố, cửa sổ, cửa ban công, cửa lùa và vách ngăn.", "Thay kính, thay phụ kiện, căn chỉnh bản lề, khóa và xử lý cửa đóng mở nặng."]],
      ["Yếu tố ảnh hưởng giá", ["Loại kính, độ dày kính, kích thước tấm, số lượng khoét lỗ và phụ kiện đi kèm.", "Hệ nhôm, màu sơn, kiểu mở, số cánh và yêu cầu chống nước, cách âm.", "Điều kiện vận chuyển, tháo dỡ cửa cũ và thời gian thi công tại mặt bằng đang hoạt động."]],
      ["Tư vấn theo mục tiêu", ["Mặt tiền cần sáng và thoáng nên ưu tiên tỷ lệ kính, phụ kiện gọn và đường nét sạch.", "Nhà ở cần kín nước, kín gió nên chú trọng hệ nhôm, gioăng, keo và chân khung.", "Văn phòng cần vách kính nên cân nhắc độ riêng tư, cách âm và hướng mở cửa."]]
    ],
    related: ["thi-cong-nhom-kinh-ha-noi.html", "vach-kinh-cua-hang-showroom.html", "cua-kinh-cuong-luc.html", "phu-kien-kinh-cuong-luc.html"],
    faq: [
      ["Showroom ở Hai Bà Trưng nên dùng kính dày bao nhiêu?", "Tùy chiều cao, kích thước tấm và phụ kiện. Kính 10mm hoặc 12mm thường được cân nhắc cho cửa kính, vách kính showroom nhưng cần khảo sát để chọn đúng tải trọng."],
      ["Có thi công ngoài giờ cho cửa hàng không?", "Có thể sắp xếp theo điều kiện mặt bằng và quy định khu vực. Cần trao đổi trước về thời gian, tiếng ồn, vận chuyển kính và phương án che chắn."]
    ]
  },
  {
    slug: "thi-cong-nhom-kinh-thanh-xuan.html",
    title: "Thi Công Nhôm Kính Thanh Xuân | Cửa Chung Cư, Ban Công, Cách Âm",
    description: "Thi công nhôm kính Thanh Xuân cho chung cư, nhà phố, văn phòng: cửa ban công, cửa lùa, cửa sổ cách âm, vách kính và sửa cửa nhôm kính.",
    area: "Thanh Xuân",
    eyebrow: "Nhôm kính Thanh Xuân",
    h1: "Thi Công Nhôm Kính Thanh Xuân Cho Chung Cư, Nhà Phố, Văn Phòng",
    intro: "Thanh Xuân có nhiều chung cư, nhà phố và văn phòng cần cửa nhôm kính kín nước, dễ dùng, cách âm tốt hơn và phù hợp không gian cải tạo. NK Door tư vấn cửa ban công, cửa lùa, cửa sổ, vách kính và sửa chữa phụ kiện theo hiện trạng từng công trình.",
    sections: [
      ["Nhu cầu thường gặp", ["Thay cửa ban công, logia, cửa lùa và cửa sổ cho căn hộ chung cư.", "Làm cửa nhôm kính phòng ngủ, phòng khách, nhà vệ sinh và cửa mặt tiền nhà phố.", "Lắp vách kính văn phòng, vách ngăn phòng họp và cửa kính cường lực."]],
      ["Cấu hình nên cân nhắc", ["Căn hộ gần đường lớn nên cân nhắc kính hộp, kính an toàn hoặc hệ cửa kín hơn để giảm ồn.", "Ban công cần xử lý chân khung, ray, keo ngoài trời và hướng thoát nước.", "Cửa lùa dùng nhiều cần bánh xe, ray và khóa đúng tải để tránh nhanh xệ."]],
      ["Quy trình triển khai", ["Gửi ảnh hiện trạng, kích thước sơ bộ và nhu cầu ưu tiên để tư vấn ban đầu.", "Khảo sát khi cần đo chính xác, kiểm tra tường, nền, hướng mở và phương án vận chuyển.", "Thi công, căn chỉnh, vệ sinh khu vực và hướng dẫn vận hành sau bàn giao."]]
    ],
    related: ["thi-cong-nhom-kinh-ha-noi.html", "cua-nhom-kinh-chung-cu.html", "cua-nhom-kinh-cach-am.html", "kinh-hop-cach-am-cach-nhiet.html"],
    faq: [
      ["Cửa nhôm kính Thanh Xuân có làm loại cách âm tốt hơn không?", "Có. Có thể tư vấn kính hộp, kính an toàn, hệ nhôm kín hơn và gioăng phù hợp. Hiệu quả thực tế còn phụ thuộc tường, khe hở, kích thước cửa và cách thi công."],
      ["Chung cư đang ở có thay cửa ban công được không?", "Làm được nếu thống nhất giờ thi công, lối vận chuyển và phương án che chắn. Nên khảo sát trước để tránh phát sinh khi tháo cửa cũ."]
    ]
  }
];

const relatedLabels = {
  "bao-gia-cua-nhom-kinh.html": "Báo giá cửa nhôm kính",
  "chong-tham-cua-nhom-kinh-ban-cong.html": "Chống thấm cửa ban công",
  "cua-kinh-cuong-luc.html": "Cửa kính cường lực",
  "cua-lua-nhom-kinh.html": "Cửa lùa nhôm kính",
  "cua-nhom-kinh-ban-cong.html": "Cửa nhôm kính ban công",
  "cua-nhom-kinh-cach-am.html": "Cửa nhôm kính cách âm",
  "cua-nhom-kinh-chung-cu.html": "Cửa nhôm kính chung cư",
  "cua-nhom-kinh-mat-tien-nha-pho.html": "Cửa nhôm kính mặt tiền nhà phố",
  "kinh-hop-cach-am-cach-nhiet.html": "Kính hộp cách âm cách nhiệt",
  "phu-kien-kinh-cuong-luc.html": "Phụ kiện kính cường lực",
  "sua-chua-cua-nhom-kinh.html": "Sửa chữa cửa nhôm kính",
  "thi-cong-nhom-kinh-ha-noi.html": "Thi công nhôm kính Hà Nội",
  "vach-kinh-cua-hang-showroom.html": "Vách kính cửa hàng, showroom",
  "vach-kinh-van-phong.html": "Vách kính văn phòng"
};

function header() {
  return `<header class="header scrolled"><div class="container"><a href="index.html" class="logo"><div class="logo-icon">NK</div><div class="logo-text"><span class="logo-name">NK Door</span><span class="logo-tagline">Cửa Thép & Nhôm Kính Miền Bắc</span></div></a><nav class="nav-menu"><a href="index.html#services" class="nav-link">Dịch vụ</a><a href="index.html#projects" class="nav-link">Dự án</a><a href="index.html#areas" class="nav-link">Khu vực</a><a href="index.html#contact" class="nav-link">Liên hệ</a></nav><div class="header-cta"><a href="tel:${phoneHref}" class="header-phone">${phone}</a></div></div></header>`;
}

function sectionHtml([title, items]) {
  return `<article class="seo-card"><h2>${title}</h2><ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul></article>`;
}

function relatedHtml(links) {
  return `<article class="seo-card"><h2>Liên kết liên quan</h2><div class="seo-pill-links">${links.map((href) => `<a href="${href}">${relatedLabels[href] ?? href.replace(".html", "")}</a>`).join("")}</div></article>`;
}

function pageHtml(page) {
  const graph = [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${baseUrl}/` },
        { "@type": "ListItem", position: 2, name: "Thi công nhôm kính Hà Nội", item: `${baseUrl}/thi-cong-nhom-kinh-ha-noi.html` },
        { "@type": "ListItem", position: 3, name: page.h1, item: `${baseUrl}/${page.slug}` }
      ]
    },
    {
      "@type": "Service",
      name: page.h1,
      serviceType: `Thi công nhôm kính ${page.area}`,
      description: page.description,
      url: `${baseUrl}/${page.slug}`,
      image: ogImage,
      areaServed: { "@type": "AdministrativeArea", name: page.area },
      provider: {
        "@type": "LocalBusiness",
        name: "NK Door",
        telephone: "+84975337071",
        url: `${baseUrl}/`,
        areaServed: "Hà Nội và miền Bắc"
      }
    },
    {
      "@type": "FAQPage",
      mainEntity: page.faq.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a }
      }))
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
    <section class="seo-hero"><div class="container"><div class="seo-hero-content"><div class="breadcrumb"><a href="index.html">Trang chủ</a><span>/</span><a href="thi-cong-nhom-kinh-ha-noi.html">Hà Nội</a><span>/</span><span>${page.area}</span></div><span class="seo-eyebrow">${page.eyebrow}</span><h1>${page.h1}</h1><p>${page.intro}</p><div class="seo-actions"><a href="tel:${phoneHref}" class="btn btn-primary">Gọi tư vấn</a><a href="index.html#contact" class="btn btn-outline">Nhận báo giá</a></div></div></div></section>
    <section class="seo-section"><div class="container seo-grid">${page.sections.map(sectionHtml).join("")}${relatedHtml(page.related)}</div></section>
    <section class="seo-section alt"><div class="container seo-copy"><h2>Gửi ảnh để chốt phương án nhanh hơn</h2><p>Ảnh hiện trạng, kích thước rộng x cao, vị trí thi công và nhu cầu ưu tiên giúp NK Door tư vấn đúng hệ nhôm, kính, phụ kiện và cách xử lý chống thấm trước khi khảo sát.</p><div class="seo-pill-links"><a href="lien-he-khao-sat-nhom-kinh.html">Liên hệ khảo sát</a><a href="huong-dan-gui-anh-bao-gia-nhom-kinh.html">Hướng dẫn gửi ảnh</a><a href="bao-gia-thi-cong-nhom-kinh-2026.html">Báo giá thi công 2026</a></div></div></section>
  </main>
</body>
</html>
`;
}

for (const page of pages) {
  fs.writeFileSync(path.join(root, page.slug), pageHtml(page), "utf8");
}

let index = fs.readFileSync(path.join(root, "index.html"), "utf8");
const districtFooterLinks = `
            <li><a href="thi-cong-nhom-kinh-ba-dinh.html" class="footer-link">Nhôm kính Ba Đình</a></li>
            <li><a href="thi-cong-nhom-kinh-dong-da.html" class="footer-link">Nhôm kính Đống Đa</a></li>
            <li><a href="thi-cong-nhom-kinh-hai-ba-trung.html" class="footer-link">Nhôm kính Hai Bà Trưng</a></li>
            <li><a href="thi-cong-nhom-kinh-thanh-xuan.html" class="footer-link">Nhôm kính Thanh Xuân</a></li>`;
if (!index.includes("thi-cong-nhom-kinh-ba-dinh.html")) {
  const marker = '            <li><a href="thi-cong-nhom-kinh-ha-dong.html" class="footer-link">Nhôm kính Hà Đông</a></li>';
  if (index.includes(marker)) {
    index = index.replace(marker, `${marker}${districtFooterLinks}`);
  } else {
    index = index.replace('            <li><a href="site-map.html" class="footer-link">Sitemap dịch vụ</a></li>', `${districtFooterLinks}
            <li><a href="site-map.html" class="footer-link">Sitemap dịch vụ</a></li>`);
  }
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
  ["Cửa nhôm kính", (file) => file.includes("nhom") || file.includes("xingfa") || file.includes("phu-kien-cua") || file.includes("chong-tham") || file.includes("kich-thuoc") || file.includes("mau-cua")],
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

const highPriority = new Set(pages.map((page) => page.slug));
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${htmlFiles.map((file) => {
  const loc = file === "index.html" ? `${baseUrl}/` : `${baseUrl}/${file}`;
  const priority = file === "index.html"
    ? "1.0"
    : highPriority.has(file) || file.startsWith("bao-gia") || file.includes("lien-he") || file.includes("gioi-thieu") || file.includes("ha-noi") || file.includes("ha-nam") || file.includes("hung-yen") || file.includes("phu-ly")
      ? "0.9"
      : "0.85";
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
