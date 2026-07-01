import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const baseUrl = "https://cua-nhom-kinh-mien-bac.netlify.app";
const today = "2026-07-01";
const phone = "0975.337.071";
const phoneHref = "0975337071";
const ogImage = `${baseUrl}/img%20thi%20cong/IMG_1774397594460_1774416357947_1.jpg`;

const pages = [
  {
    slug: "thi-cong-nhom-kinh-long-bien.html",
    title: "Thi Công Nhôm Kính Long Biên | Cửa Nhôm Kính, Vách Kính",
    description: "Thi công nhôm kính Long Biên cho nhà phố, chung cư, cửa hàng, văn phòng: cửa nhôm kính, cửa kính cường lực, vách kính, cửa cuốn, cửa thép.",
    eyebrow: "Nhôm kính Long Biên",
    h1: "Thi Công Nhôm Kính Long Biên, Hà Nội",
    intro: "Long Biên có nhiều nhà phố, chung cư, cửa hàng và mặt bằng kinh doanh cần cửa nhôm kính bền, kín nước và dễ sử dụng. NK Door tư vấn theo ảnh hiện trạng, kích thước và lịch khảo sát thực tế.",
    area: ["Long Biên", "Gia Lâm", "Đông Anh", "Hà Nội"],
    cards: [
      ["Nhu cầu thường gặp", ["Thay cửa ban công, cửa sổ, cửa lùa cho chung cư.", "Làm cửa nhôm kính mặt tiền, vách kính cửa hàng và showroom.", "Sửa cửa bị xệ cánh, hở nước, hỏng khóa hoặc kẹt ray."]],
      ["Thông tin cần gửi", ["Ảnh hiện trạng và kích thước rộng x cao sơ bộ.", "Địa chỉ khu vực Long Biên và thời gian có thể khảo sát.", "Nhu cầu ưu tiên: chống nước, cách âm, lấy sáng hoặc an toàn."]],
      ["Liên kết liên quan", ["thi-cong-nhom-kinh-ha-noi.html", "thi-cong-nhom-kinh-gia-lam.html", "cua-nhom-kinh-ban-cong.html"]]
    ]
  },
  {
    slug: "thi-cong-nhom-kinh-hoang-mai.html",
    title: "Thi Công Nhôm Kính Hoàng Mai | Cửa Ban Công, Cửa Sổ, Vách Kính",
    description: "Thi công nhôm kính Hoàng Mai cho căn hộ, nhà phố, cửa hàng: cửa ban công, cửa sổ, vách kính, cửa kính cường lực, sửa chữa cửa nhôm kính.",
    eyebrow: "Nhôm kính Hoàng Mai",
    h1: "Thi Công Nhôm Kính Hoàng Mai, Hà Nội",
    intro: "Hoàng Mai có nhiều căn hộ và nhà phố cần cửa nhôm kính kín nước, vận hành nhẹ và phù hợp mặt bằng thực tế. NK Door hỗ trợ tư vấn cấu hình cửa, kính, phụ kiện và phương án thi công.",
    area: ["Hoàng Mai", "Thanh Trì", "Hai Bà Trưng", "Hà Nội"],
    cards: [
      ["Hạng mục phù hợp", ["Cửa ban công, logia, cửa sổ và cửa lùa chung cư.", "Vách kính văn phòng, cửa kính cửa hàng, cabin tắm kính.", "Bảo trì, căn chỉnh, thay khóa, bánh xe, gioăng và keo."]],
      ["Điểm cần kiểm tra", ["Hướng mưa hắt, thoát nước ray và chân khung.", "Quy định thi công, vận chuyển của tòa nhà nếu là chung cư.", "Màu nhôm, loại kính và phụ kiện phù hợp nội thất."]],
      ["Liên kết liên quan", ["cua-nhom-kinh-chung-cu.html", "chong-tham-cua-nhom-kinh-ban-cong.html", "sua-chua-cua-nhom-kinh.html"]]
    ]
  },
  {
    slug: "thi-cong-nhom-kinh-ha-dong.html",
    title: "Thi Công Nhôm Kính Hà Đông | Cửa Nhôm Xingfa, Cửa Kính",
    description: "Thi công nhôm kính Hà Đông: cửa nhôm kính, cửa nhôm Xingfa, cửa kính cường lực, vách kính, cửa cuốn, cửa thép cho nhà phố và chung cư.",
    eyebrow: "Nhôm kính Hà Đông",
    h1: "Thi Công Nhôm Kính Hà Đông, Hà Nội",
    intro: "Hà Đông có nhiều nhà phố, chung cư và mặt bằng kinh doanh cần cửa bền, kín, đẹp và dễ bảo trì. NK Door tư vấn cửa nhôm kính, cửa nhôm Xingfa, vách kính, cửa cuốn và cửa thép theo từng vị trí.",
    area: ["Hà Đông", "Thanh Xuân", "Nam Từ Liêm", "Hà Nội"],
    cards: [
      ["Dịch vụ chính", ["Cửa nhôm Xingfa, cửa nhôm kính phổ thông, cửa sổ và cửa lùa.", "Cửa kính cường lực, vách kính văn phòng, vách kính mặt tiền.", "Cửa cuốn, cửa thép vân gỗ và sửa chữa cửa sau lắp đặt."]],
      ["Khi nào nên khảo sát?", ["Ô cửa lớn, hướng gió mạnh hoặc cần chống ồn tốt hơn.", "Cửa cũ bị thấm nước, khó khóa, xệ cánh hoặc ray kẹt.", "Cần đồng bộ nhiều hạng mục trong cùng công trình."]],
      ["Liên kết liên quan", ["cua-nhom-xingfa-ha-noi.html", "bao-gia-cua-nhom-xingfa.html", "cua-nhom-kinh-chong-on.html"]]
    ]
  },
  {
    slug: "thi-cong-nhom-kinh-thanh-tri.html",
    title: "Thi Công Nhôm Kính Thanh Trì | Nhà Phố, Xưởng, Cửa Hàng",
    description: "Thi công nhôm kính Thanh Trì cho nhà phố, xưởng nhỏ, cửa hàng, công trình cải tạo: cửa nhôm kính, vách kính, cửa cuốn, cửa thép.",
    eyebrow: "Nhôm kính Thanh Trì",
    h1: "Thi Công Nhôm Kính Thanh Trì, Hà Nội",
    intro: "Thanh Trì có nhiều nhà phố, xưởng nhỏ, kho và công trình cải tạo cần phương án cửa chắc, dễ vận hành và kiểm soát chi phí. NK Door tư vấn theo hiện trạng từng vị trí lắp đặt.",
    area: ["Thanh Trì", "Hoàng Mai", "Thường Tín", "Hà Nội"],
    cards: [
      ["Công trình phù hợp", ["Nhà phố, cửa hàng, kho nhỏ và xưởng gia đình.", "Cửa nhôm kính mặt tiền, cửa sổ, cửa đi, vách nhôm kính.", "Cửa cuốn, cửa thép, cửa kính và hạng mục kính cường lực."]],
      ["Cần tính trước", ["Kích thước ô chờ, nền, tường và hướng mở cửa.", "Nhu cầu lấy sáng, thông gió, chống nước hoặc an toàn.", "Điều kiện vận chuyển vật tư và thời gian hoàn thiện."]],
      ["Liên kết liên quan", ["thi-cong-nhom-kinh-hoang-mai.html", "cua-nhom-kinh-mat-tien.html", "bao-gia-cua-cuon.html"]]
    ]
  },
  {
    slug: "thi-cong-nhom-kinh-van-giang-hung-yen.html",
    title: "Thi Công Nhôm Kính Văn Giang, Hưng Yên | Cửa Nhôm Kính, Cửa Kính",
    description: "Thi công nhôm kính Văn Giang, Hưng Yên cho nhà phố, biệt thự, căn hộ, cửa hàng: cửa nhôm kính, vách kính, cửa kính cường lực, cửa cuốn.",
    eyebrow: "Nhôm kính Văn Giang",
    h1: "Thi Công Nhôm Kính Văn Giang, Hưng Yên",
    intro: "Văn Giang nằm sát Hà Nội, nhu cầu làm cửa nhôm kính cho nhà phố, biệt thự, căn hộ và cửa hàng khá đa dạng. NK Door nhận tư vấn theo ảnh hiện trạng và lịch khảo sát phù hợp.",
    area: ["Văn Giang", "Ecopark", "Hưng Yên", "Gia Lâm"],
    cards: [
      ["Hạng mục nhận làm", ["Cửa nhôm kính, cửa sổ, cửa lùa, cửa ban công.", "Vách kính, cửa kính cường lực, cabin tắm kính, cầu thang kính.", "Cửa cuốn, cửa thép vân gỗ, sửa chữa và bảo trì cửa."]],
      ["Tư vấn theo công trình", ["Nhà mới cần đồng bộ nhiều bộ cửa và màu nhôm.", "Công trình cải tạo cần tháo dỡ, đo lại và hạn chế phát sinh.", "Cửa hàng cần mặt tiền sáng, dễ quan sát và vận hành ổn định."]],
      ["Liên kết liên quan", ["thi-cong-nhom-kinh-hung-yen.html", "thi-cong-nhom-kinh-ecopark.html", "cua-nhom-kinh-mat-tien.html"]]
    ]
  },
  {
    slug: "thi-cong-nhom-kinh-ecopark.html",
    title: "Thi Công Nhôm Kính Ecopark | Cửa Ban Công, Logia, Vách Kính",
    description: "Thi công nhôm kính Ecopark cho căn hộ, nhà phố, shophouse: cửa ban công, logia, cửa sổ, vách kính, cabin tắm kính, sửa cửa nhôm kính.",
    eyebrow: "Nhôm kính Ecopark",
    h1: "Thi Công Nhôm Kính Ecopark, Văn Giang",
    intro: "Căn hộ, nhà phố và shophouse tại Ecopark thường cần cửa nhôm kính gọn, đẹp, kín nước và phù hợp quy định tòa nhà. NK Door tư vấn phương án thay cửa, sửa cửa, làm vách kính và hạng mục kính cường lực.",
    area: ["Ecopark", "Văn Giang", "Hưng Yên", "Hà Nội"],
    cards: [
      ["Nhu cầu phổ biến", ["Thay cửa ban công, cửa sổ, logia cho căn hộ.", "Làm vách kính, cabin tắm kính, cửa kính cho shophouse.", "Sửa cửa lùa nặng, hở nước, hỏng bánh xe hoặc khóa."]],
      ["Lưu ý thi công", ["Cần kiểm tra quy định vận chuyển và khung giờ thi công.", "Nên gửi ảnh hiện trạng, tầng, tòa và kích thước sơ bộ trước.", "Ưu tiên phương án kín nước, vận hành nhẹ và đồng bộ màu sắc."]],
      ["Liên kết liên quan", ["cua-nhom-kinh-chung-cu.html", "vach-tam-kinh-cuong-luc.html", "sua-chua-cua-nhom-kinh.html"]]
    ]
  },
  {
    slug: "thi-cong-nhom-kinh-duy-tien-ha-nam.html",
    title: "Thi Công Nhôm Kính Duy Tiên, Hà Nam | Cửa Nhôm Kính, Cửa Cuốn",
    description: "Thi công nhôm kính Duy Tiên, Hà Nam cho nhà phố, cửa hàng, văn phòng, xưởng nhỏ: cửa nhôm kính, vách kính, cửa cuốn, cửa thép.",
    eyebrow: "Nhôm kính Duy Tiên",
    h1: "Thi Công Nhôm Kính Duy Tiên, Hà Nam",
    intro: "Duy Tiên có nhiều nhà phố, cửa hàng và công trình sản xuất nhỏ cần cửa nhôm kính, cửa cuốn, cửa thép và vách kính bền, dễ bảo trì. NK Door tư vấn theo quy mô công trình và lịch khảo sát.",
    area: ["Duy Tiên", "Phủ Lý", "Hà Nam", "Hưng Yên"],
    cards: [
      ["Dịch vụ phù hợp", ["Cửa nhôm kính mặt tiền, cửa sổ, cửa đi và vách nhôm kính.", "Cửa cuốn cho gara, kho nhỏ, cửa hàng và mặt bằng kinh doanh.", "Cửa thép vân gỗ, cửa kính cường lực, vách kính văn phòng."]],
      ["Thông tin cần chuẩn bị", ["Địa chỉ công trình, ảnh hiện trạng và kích thước sơ bộ.", "Số lượng bộ cửa, loại hạng mục và yêu cầu tiến độ.", "Nhu cầu ưu tiên chi phí, độ bền, cách âm hoặc chống nước."]],
      ["Liên kết liên quan", ["thi-cong-nhom-kinh-ha-nam.html", "thi-cong-nhom-kinh-phu-ly.html", "bao-gia-cua-nhom-kinh.html"]]
    ]
  },
  {
    slug: "thi-cong-nhom-kinh-kim-bang-ha-nam.html",
    title: "Thi Công Nhôm Kính Kim Bảng, Hà Nam | Nhà Phố, Cửa Hàng",
    description: "Thi công nhôm kính Kim Bảng, Hà Nam: cửa nhôm kính, cửa thép, cửa cuốn, vách kính, kính cường lực cho nhà phố, cửa hàng và công trình cải tạo.",
    eyebrow: "Nhôm kính Kim Bảng",
    h1: "Thi Công Nhôm Kính Kim Bảng, Hà Nam",
    intro: "Kim Bảng có nhu cầu làm cửa nhôm kính cho nhà ở, cửa hàng, công trình cải tạo và mặt bằng kinh doanh. NK Door tư vấn vật tư rõ ràng, báo giá theo từng vị trí và điều kiện thi công.",
    area: ["Kim Bảng", "Phủ Lý", "Hà Nam", "Miền Bắc"],
    cards: [
      ["Hạng mục nhận tư vấn", ["Cửa nhôm kính, cửa sổ, cửa lùa, cửa mặt tiền.", "Vách kính, cửa kính cường lực, cabin tắm kính, cầu thang kính.", "Cửa cuốn, cửa thép vân gỗ và sửa chữa cửa sau sử dụng."]],
      ["Cách báo giá rõ hơn", ["Gửi ảnh hiện trạng để tư vấn sơ bộ trước.", "Đo chính xác ô chờ, tường nền, hướng mở và phụ kiện.", "Tách rõ vật tư, phụ kiện, nhân công, vận chuyển và bảo hành."]],
      ["Liên kết liên quan", ["thi-cong-nhom-kinh-ha-nam.html", "thi-cong-nhom-kinh-duy-tien-ha-nam.html", "bao-gia-kinh-cuong-luc.html"]]
    ]
  }
];

const labels = {
  "bao-gia-cua-cuon.html": "Báo giá cửa cuốn",
  "bao-gia-cua-nhom-kinh.html": "Báo giá cửa nhôm kính",
  "bao-gia-cua-nhom-xingfa.html": "Báo giá cửa nhôm Xingfa",
  "bao-gia-kinh-cuong-luc.html": "Báo giá kính cường lực",
  "chong-tham-cua-nhom-kinh-ban-cong.html": "Chống thấm cửa ban công",
  "cua-nhom-kinh-ban-cong.html": "Cửa ban công",
  "cua-nhom-kinh-chong-on.html": "Cửa nhôm kính chống ồn",
  "cua-nhom-kinh-chung-cu.html": "Cửa nhôm kính chung cư",
  "cua-nhom-kinh-mat-tien.html": "Cửa nhôm kính mặt tiền",
  "cua-nhom-xingfa-ha-noi.html": "Cửa nhôm Xingfa Hà Nội",
  "sua-chua-cua-nhom-kinh.html": "Sửa chữa cửa nhôm kính",
  "thi-cong-nhom-kinh-ecopark.html": "Nhôm kính Ecopark",
  "thi-cong-nhom-kinh-gia-lam.html": "Nhôm kính Gia Lâm",
  "thi-cong-nhom-kinh-ha-nam.html": "Nhôm kính Hà Nam",
  "thi-cong-nhom-kinh-ha-noi.html": "Nhôm kính Hà Nội",
  "thi-cong-nhom-kinh-hoang-mai.html": "Nhôm kính Hoàng Mai",
  "thi-cong-nhom-kinh-hung-yen.html": "Nhôm kính Hưng Yên",
  "thi-cong-nhom-kinh-phu-ly.html": "Nhôm kính Phủ Lý",
  "vach-tam-kinh-cuong-luc.html": "Vách tắm kính"
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
      "@type": "Service",
      name: page.h1,
      description: page.description,
      areaServed: page.area,
      provider: { "@type": "LocalBusiness", name: "NK Door", telephone: "+84975337071", url: `${baseUrl}/` },
      url: `${baseUrl}/${page.slug}`
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: `Có nhận khảo sát ${page.area[0]} không?`,
          acceptedAnswer: { "@type": "Answer", text: "NK Door tiếp nhận ảnh hiện trạng, kích thước sơ bộ và địa chỉ khu vực để tư vấn trước. Với hạng mục cần đo chính xác, đội kỹ thuật sẽ hẹn lịch khảo sát theo điều kiện công trình." }
        },
        {
          "@type": "Question",
          name: "Cần gửi gì để báo giá nhanh hơn?",
          acceptedAnswer: { "@type": "Answer", text: "Nên gửi ảnh vị trí lắp đặt, kích thước rộng x cao, số lượng bộ cửa, loại hạng mục cần làm và yêu cầu ưu tiên như chống nước, cách âm, an toàn hoặc tiết kiệm chi phí." }
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
    <section class="seo-section alt"><div class="container seo-copy"><h2>Tư vấn đúng khu vực, đúng hiện trạng</h2><p>Mỗi công trình có kích thước, hướng mưa nắng, tường nền và nhu cầu sử dụng khác nhau. NK Door ưu tiên khảo sát rõ hiện trạng, tư vấn vật tư phù hợp và báo giá theo từng hạng mục để khách hàng dễ kiểm soát chi phí.</p><div class="seo-pill-links"><a href="bao-gia-cua-nhom-kinh.html">Báo giá cửa nhôm kính</a><a href="quy-trinh-thi-cong-cua.html">Quy trình thi công</a><a href="index.html#contact">Liên hệ khảo sát</a></div></div></section>
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
            <li><a href="thi-cong-nhom-kinh-long-bien.html" class="footer-link">Nhôm kính Long Biên</a></li>
            <li><a href="thi-cong-nhom-kinh-hoang-mai.html" class="footer-link">Nhôm kính Hoàng Mai</a></li>
            <li><a href="thi-cong-nhom-kinh-ha-dong.html" class="footer-link">Nhôm kính Hà Đông</a></li>
            <li><a href="thi-cong-nhom-kinh-thanh-tri.html" class="footer-link">Nhôm kính Thanh Trì</a></li>
            <li><a href="thi-cong-nhom-kinh-van-giang-hung-yen.html" class="footer-link">Nhôm kính Văn Giang</a></li>
            <li><a href="thi-cong-nhom-kinh-ecopark.html" class="footer-link">Nhôm kính Ecopark</a></li>
            <li><a href="thi-cong-nhom-kinh-duy-tien-ha-nam.html" class="footer-link">Nhôm kính Duy Tiên</a></li>
            <li><a href="thi-cong-nhom-kinh-kim-bang-ha-nam.html" class="footer-link">Nhôm kính Kim Bảng</a></li>`;
if (!index.includes("thi-cong-nhom-kinh-long-bien.html")) {
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

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${htmlFiles.map((file) => {
  const loc = file === "index.html" ? `${baseUrl}/` : `${baseUrl}/${file}`;
  const priority = file === "index.html" ? "1.0" : file.startsWith("bao-gia") || file.includes("ha-noi") || file.includes("ha-nam") || file.includes("hung-yen") || file.includes("long-bien") || file.includes("ha-dong") || file.includes("hoang-mai") ? "0.9" : "0.85";
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

console.log(JSON.stringify({ addedPages: pages.length, totalUrls: htmlFiles.length, pages: pages.map((page) => page.slug) }, null, 2));
