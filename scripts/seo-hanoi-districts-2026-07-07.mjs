import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const baseUrl = "https://cua-nhom-kinh-mien-bac.netlify.app";
const today = "2026-07-07";
const phone = "0975.337.071";
const phoneHref = "0975337071";
const ogImage = `${baseUrl}/img%20thi%20cong/IMG_1774397594460_1774416357947_1.jpg`;

const pages = [
  {
    slug: "thi-cong-nhom-kinh-cau-giay.html",
    title: "Thi Công Nhôm Kính Cầu Giấy | Cửa Nhôm, Vách Kính, Cửa Kính",
    description: "Thi công nhôm kính Cầu Giấy cho căn hộ, văn phòng, cửa hàng: cửa nhôm kính, vách kính, cửa kính cường lực, sửa chữa và thay phụ kiện.",
    area: "Cầu Giấy",
    eyebrow: "Nhôm kính Cầu Giấy",
    h1: "Thi Công Nhôm Kính Cầu Giấy Cho Căn Hộ, Văn Phòng, Cửa Hàng",
    intro: "Khu vực Cầu Giấy có nhiều căn hộ, văn phòng, cửa hàng mặt phố và công trình cải tạo cần thi công nhanh, gọn, hạn chế ảnh hưởng sinh hoạt. NK Door tư vấn cửa nhôm kính, vách kính, cửa kính cường lực, cửa lùa, cửa sổ và sửa chữa phụ kiện theo hiện trạng thực tế.",
    sections: [
      {
        title: "Hạng mục phù hợp tại Cầu Giấy",
        items: [
          "Cửa nhôm kính căn hộ, cửa ban công, cửa logia, cửa phòng ngủ và cửa sổ lấy sáng.",
          "Vách kính văn phòng, vách ngăn phòng họp, cửa kính cường lực cho cửa hàng.",
          "Sửa cửa lùa, thay bánh xe, căn chỉnh bản lề, thay khóa và xử lý hở nước."
        ]
      },
      {
        title: "Điểm cần tính trước khi thi công",
        items: [
          "Lối vận chuyển kính, thang máy, giờ thi công của tòa nhà hoặc khu văn phòng.",
          "Hướng mưa, hướng nắng, tiếng ồn ngoài đường để chọn kính, gioăng và hệ nhôm phù hợp.",
          "Nhu cầu sử dụng hằng ngày: ưu tiên cách âm, kín nước, tiết kiệm chi phí hay thẩm mỹ mặt tiền."
        ]
      },
      {
        title: "Cách NK Door báo giá",
        items: [
          "Nhận ảnh hiện trạng và kích thước sơ bộ để tư vấn trước.",
          "Khảo sát khi cần chốt kích thước, hướng mở, phụ kiện, kính và phương án chống thấm.",
          "Báo giá theo từng hạng mục vật tư, phụ kiện, nhân công, vận chuyển và bảo hành."
        ]
      }
    ],
    related: ["thi-cong-nhom-kinh-ha-noi.html", "vach-kinh-van-phong.html", "cua-nhom-kinh-chung-cu.html", "bao-gia-cua-nhom-kinh.html"],
    faq: [
      {
        q: "Thi công nhôm kính Cầu Giấy có khảo sát tận nơi không?",
        a: "Có. Khách hàng có thể gửi ảnh trước để tư vấn sơ bộ, sau đó hẹn khảo sát khi cần chốt kích thước, vật tư và chi phí chính xác."
      },
      {
        q: "Căn hộ đang ở có thay cửa nhôm kính được không?",
        a: "Làm được nếu kiểm tra kỹ lối vận chuyển, thời gian thi công, vị trí tháo lắp và phương án che chắn bụi. Công trình đang ở nên thống nhất trước lịch thi công để giảm ảnh hưởng sinh hoạt."
      }
    ]
  },
  {
    slug: "thi-cong-nhom-kinh-nam-tu-liem.html",
    title: "Thi Công Nhôm Kính Nam Từ Liêm | Cửa Ban Công, Logia, Cửa Lùa",
    description: "Thi công nhôm kính Nam Từ Liêm cho chung cư, nhà phố, cửa hàng: cửa lùa, cửa ban công, logia, vách kính, cửa sổ và sửa chữa cửa nhôm.",
    area: "Nam Từ Liêm",
    eyebrow: "Nhôm kính Nam Từ Liêm",
    h1: "Thi Công Nhôm Kính Nam Từ Liêm Cho Chung Cư, Nhà Phố, Cửa Hàng",
    intro: "Nam Từ Liêm có nhiều chung cư, nhà phố, cửa hàng và mặt bằng kinh doanh cần cửa nhôm kính bền, kín nước, dễ sử dụng. NK Door tập trung khảo sát đúng hiện trạng để chọn cửa lùa, cửa ban công, vách kính, cửa sổ và phụ kiện phù hợp với từng vị trí.",
    sections: [
      {
        title: "Nhu cầu thường gặp",
        items: [
          "Thay cửa ban công, cửa logia, cửa lùa nhôm kính cho căn hộ.",
          "Lắp vách kính, cửa kính, mặt tiền cửa hàng hoặc văn phòng nhỏ.",
          "Sửa cửa nhôm kính bị kẹt ray, hở gió, thấm nước, khóa lỏng hoặc xệ cánh."
        ]
      },
      {
        title: "Gợi ý cấu hình",
        items: [
          "Cửa lùa nên kiểm tra ray, bánh xe, khóa và đường thoát nước chân ray.",
          "Cửa ban công nên ưu tiên kín nước, kín gió và kính phù hợp với hướng nắng.",
          "Vách kính cửa hàng cần chọn phụ kiện chịu tải tốt, mép kính xử lý đẹp và dễ bảo trì."
        ]
      },
      {
        title: "Thông tin nên gửi trước",
        items: [
          "Ảnh toàn cảnh vị trí lắp và ảnh cận cảnh chân khung, ray, khóa hoặc tường tiếp giáp.",
          "Kích thước rộng x cao sơ bộ và số lượng bộ cửa cần làm.",
          "Mục tiêu ưu tiên: tiết kiệm, bền chắc, chống ồn, chống nước hoặc thẩm mỹ."
        ]
      }
    ],
    related: ["thi-cong-nhom-kinh-ha-noi.html", "cua-nhom-kinh-ban-cong.html", "cua-lua-nhom-xingfa-he-93.html", "chong-tham-cua-nhom-kinh-ban-cong.html"],
    faq: [
      {
        q: "Cửa lùa ban công Nam Từ Liêm nên dùng hệ nào?",
        a: "Tùy kích thước và hướng mưa. Với cửa lùa lớn, cần kiểm tra hệ ray, bánh xe, khóa và thoát nước chân ray; không nên chỉ chọn theo giá mét vuông."
      },
      {
        q: "Có sửa cửa nhôm kính chung cư không?",
        a: "Có. Các lỗi thường gặp gồm kẹt ray, bánh xe mòn, khóa hỏng, cửa xệ, hở nước hoặc hở gió. Cần gửi ảnh hiện trạng để tư vấn trước khi hẹn kiểm tra."
      }
    ]
  },
  {
    slug: "thi-cong-nhom-kinh-bac-tu-liem.html",
    title: "Thi Công Nhôm Kính Bắc Từ Liêm | Cửa Nhôm Kính Nhà Phố, Căn Hộ",
    description: "Thi công nhôm kính Bắc Từ Liêm cho nhà phố, căn hộ, cửa hàng: cửa nhôm kính, cửa sổ, cửa mặt tiền, vách kính và sửa chữa phụ kiện.",
    area: "Bắc Từ Liêm",
    eyebrow: "Nhôm kính Bắc Từ Liêm",
    h1: "Thi Công Nhôm Kính Bắc Từ Liêm Cho Nhà Phố, Căn Hộ, Cửa Hàng",
    intro: "Bắc Từ Liêm có nhiều nhà phố, khu dân cư mới, căn hộ và mặt bằng kinh doanh cần cửa nhôm kính chắc, kín, dễ bảo trì. NK Door tư vấn theo vị trí lắp đặt, hướng mở, kích thước ô chờ và ngân sách để tránh phát sinh sau thi công.",
    sections: [
      {
        title: "Hạng mục nhận thi công",
        items: [
          "Cửa nhôm kính nhà phố, cửa mặt tiền, cửa đi 2 cánh, 4 cánh và cửa sổ.",
          "Cửa ban công, cửa lùa, cửa phòng ngủ, cửa nhà vệ sinh và vách ngăn kính.",
          "Sửa chữa cửa nhôm kính, thay kính, thay khóa, thay bánh xe và căn chỉnh cánh."
        ]
      },
      {
        title: "Lưu ý kỹ thuật",
        items: [
          "Ô cửa mặt tiền cần tính độ cứng khung, độ dày kính và tần suất đóng mở.",
          "Cửa sổ và ban công cần xử lý mép tiếp giáp tường để giảm thấm nước.",
          "Công trình cải tạo cần kiểm tra cửa cũ, tường nền và đường vận chuyển vật tư."
        ]
      },
      {
        title: "Quy trình làm việc",
        items: [
          "Tiếp nhận ảnh, kích thước và nhu cầu sử dụng để tư vấn phương án sơ bộ.",
          "Khảo sát thực tế khi cần đo chính xác và chốt vật tư.",
          "Thi công, căn chỉnh, vệ sinh khu vực lắp đặt và hướng dẫn sử dụng."
        ]
      }
    ],
    related: ["thi-cong-nhom-kinh-ha-noi.html", "cua-nhom-kinh-mat-tien-nha-pho.html", "cua-so-nhom-kinh.html", "sua-chua-cua-nhom-kinh.html"],
    faq: [
      {
        q: "Nhà phố ở Bắc Từ Liêm nên chọn cửa lùa hay cửa mở quay?",
        a: "Cửa lùa tiết kiệm diện tích, phù hợp ô rộng hoặc ban công. Cửa mở quay thường kín gió và kín nước tốt hơn. Nên chọn theo mặt bằng, hướng mở và nhu cầu sử dụng."
      },
      {
        q: "Có nhận thay cửa cũ bằng cửa nhôm kính mới không?",
        a: "Có. Cần kiểm tra khung cũ, tường bao, kích thước ô chờ và phương án tháo lắp để báo giá đúng, hạn chế phát sinh."
      }
    ]
  },
  {
    slug: "thi-cong-nhom-kinh-tay-ho.html",
    title: "Thi Công Nhôm Kính Tây Hồ | Cửa Ban Công, Cách Âm, Vách Kính",
    description: "Thi công nhôm kính Tây Hồ cho căn hộ, biệt thự, nhà phố, cửa hàng: cửa ban công, cửa cách âm, vách kính, cửa kính cường lực.",
    area: "Tây Hồ",
    eyebrow: "Nhôm kính Tây Hồ",
    h1: "Thi Công Nhôm Kính Tây Hồ Cho Căn Hộ, Nhà Phố, Cửa Hàng",
    intro: "Tây Hồ có nhiều căn hộ, nhà phố, biệt thự và cửa hàng cần giải pháp nhôm kính chú trọng thẩm mỹ, lấy sáng, cách âm và xử lý nước mưa. NK Door tư vấn cửa ban công, cửa sổ, vách kính, cửa kính cường lực và phụ kiện theo từng vị trí lắp đặt.",
    sections: [
      {
        title: "Nhu cầu nổi bật tại Tây Hồ",
        items: [
          "Cửa ban công, cửa sổ lấy sáng, cửa lùa và vách kính cho căn hộ có tầm nhìn rộng.",
          "Cửa nhôm kính cách âm, kính hộp hoặc kính an toàn cho khu vực cần yên tĩnh hơn.",
          "Vách kính, cửa kính cường lực cho cửa hàng, showroom và mặt tiền kinh doanh."
        ]
      },
      {
        title: "Nên ưu tiên gì?",
        items: [
          "Kín nước ở chân khung và mép tường nếu cửa nằm ở hướng mưa tạt.",
          "Kính, gioăng và phụ kiện phù hợp nếu cần giảm tiếng ồn.",
          "Màu nhôm, kiểu chia đố và tay nắm hài hòa với mặt tiền hoặc nội thất."
        ]
      },
      {
        title: "Trước khi báo giá cần có",
        items: [
          "Ảnh hiện trạng, kích thước sơ bộ và vị trí lắp đặt trong nhà, ban công hay mặt tiền.",
          "Yêu cầu về cách âm, chống nắng, an toàn, chống nước hoặc phong cách thẩm mỹ.",
          "Thời gian cần thi công và điều kiện vận chuyển vật tư vào công trình."
        ]
      }
    ],
    related: ["thi-cong-nhom-kinh-ha-noi.html", "cua-nhom-kinh-cach-am.html", "kinh-hop-cach-am-cach-nhiet.html", "chong-tham-cua-nhom-kinh-ban-cong.html"],
    faq: [
      {
        q: "Cửa nhôm kính Tây Hồ có làm loại cách âm tốt hơn không?",
        a: "Có thể tư vấn kính hộp, kính an toàn, hệ nhôm kín hơn và gioăng phù hợp. Mức cách âm thực tế còn phụ thuộc kích thước, khe hở, tường bao và cách thi công."
      },
      {
        q: "Cửa ban công bị mưa tạt nên xử lý thế nào?",
        a: "Cần kiểm tra hướng mưa, cao độ nền, chân khung, đường thoát nước và keo ngoài trời. Nếu xử lý từ đầu, cửa sẽ giảm nguy cơ thấm nước và hở gió tốt hơn."
      }
    ]
  }
];

const relatedLabels = {
  "bao-gia-cua-nhom-kinh.html": "Báo giá cửa nhôm kính",
  "chong-tham-cua-nhom-kinh-ban-cong.html": "Chống thấm cửa ban công",
  "cua-lua-nhom-xingfa-he-93.html": "Cửa lùa Xingfa hệ 93",
  "cua-nhom-kinh-ban-cong.html": "Cửa nhôm kính ban công",
  "cua-nhom-kinh-cach-am.html": "Cửa nhôm kính cách âm",
  "cua-nhom-kinh-chung-cu.html": "Cửa nhôm kính chung cư",
  "cua-nhom-kinh-mat-tien-nha-pho.html": "Cửa nhôm kính mặt tiền nhà phố",
  "cua-so-nhom-kinh.html": "Cửa sổ nhôm kính",
  "kinh-hop-cach-am-cach-nhiet.html": "Kính hộp cách âm cách nhiệt",
  "sua-chua-cua-nhom-kinh.html": "Sửa chữa cửa nhôm kính",
  "thi-cong-nhom-kinh-ha-noi.html": "Thi công nhôm kính Hà Nội",
  "vach-kinh-van-phong.html": "Vách kính văn phòng"
};

function header() {
  return `<header class="header scrolled"><div class="container"><a href="index.html" class="logo"><div class="logo-icon">NK</div><div class="logo-text"><span class="logo-name">NK Door</span><span class="logo-tagline">Cửa Thép & Nhôm Kính Miền Bắc</span></div></a><nav class="nav-menu"><a href="index.html#services" class="nav-link">Dịch vụ</a><a href="index.html#projects" class="nav-link">Dự án</a><a href="index.html#areas" class="nav-link">Khu vực</a><a href="index.html#contact" class="nav-link">Liên hệ</a></nav><div class="header-cta"><a href="tel:${phoneHref}" class="header-phone">${phone}</a></div></div></header>`;
}

function sectionHtml(section) {
  return `<article class="seo-card"><h2>${section.title}</h2><ul>${section.items.map((item) => `<li>${item}</li>`).join("")}</ul></article>`;
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
      mainEntity: page.faq.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a }
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
    <section class="seo-section alt"><div class="container seo-copy"><h2>Gửi ảnh để được tư vấn nhanh hơn</h2><p>Ảnh hiện trạng, kích thước rộng x cao, khu vực thi công và nhu cầu ưu tiên giúp NK Door tư vấn đúng hệ nhôm, kính, phụ kiện và phương án chống thấm trước khi khảo sát.</p><div class="seo-pill-links"><a href="lien-he-khao-sat-nhom-kinh.html">Liên hệ khảo sát</a><a href="huong-dan-gui-anh-bao-gia-nhom-kinh.html">Hướng dẫn gửi ảnh</a><a href="bao-gia-thi-cong-nhom-kinh-2026.html">Báo giá thi công 2026</a></div></div></section>
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
            <li><a href="thi-cong-nhom-kinh-cau-giay.html" class="footer-link">Nhôm kính Cầu Giấy</a></li>
            <li><a href="thi-cong-nhom-kinh-tay-ho.html" class="footer-link">Nhôm kính Tây Hồ</a></li>
            <li><a href="thi-cong-nhom-kinh-nam-tu-liem.html" class="footer-link">Nhôm kính Nam Từ Liêm</a></li>
            <li><a href="thi-cong-nhom-kinh-bac-tu-liem.html" class="footer-link">Nhôm kính Bắc Từ Liêm</a></li>`;
if (!index.includes("thi-cong-nhom-kinh-cau-giay.html")) {
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
