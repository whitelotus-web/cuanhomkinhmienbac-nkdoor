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
    slug: "cua-nhom-xingfa-he-55.html",
    title: "Cửa Nhôm Xingfa Hệ 55 | Cửa Đi, Cửa Sổ, Cửa Mở Quay",
    description: "Tư vấn cửa nhôm Xingfa hệ 55 cho cửa đi, cửa sổ, cửa mở quay, cửa hất: độ cứng, kính, phụ kiện, gioăng, vị trí phù hợp.",
    eyebrow: "Nhôm Xingfa hệ 55",
    h1: "Cửa Nhôm Xingfa Hệ 55 Cho Cửa Đi, Cửa Sổ, Cửa Mở Quay",
    intro: "Cửa nhôm Xingfa hệ 55 thường dùng cho cửa đi mở quay, cửa sổ mở quay, cửa sổ mở hất và các ô cửa cần độ cứng tốt nhưng vẫn giữ thiết kế gọn. Khi làm đúng hệ nhôm, kính và phụ kiện, bộ cửa kín khít hơn, vận hành chắc hơn và phù hợp nhiều nhà phố, chung cư, cửa hàng tại miền Bắc.",
    serviceType: "Tư vấn và thi công cửa nhôm Xingfa hệ 55",
    sections: [
      {
        title: "Hệ 55 phù hợp vị trí nào?",
        items: [
          "Cửa đi mở quay 1 cánh, 2 cánh cho phòng ngủ, phòng khách, ban công có mái che.",
          "Cửa sổ mở quay hoặc mở hất cần lấy sáng, lấy gió, giữ độ kín nước và kín gió.",
          "Các ô cửa không quá lớn, ưu tiên khung chắc, kiểu mở truyền thống và dễ bảo trì."
        ]
      },
      {
        title: "Cấu hình cần đồng bộ",
        items: [
          "Thanh nhôm đúng hệ, khoang nhôm không cong vênh và bề mặt sơn tĩnh điện đều màu.",
          "Kính cường lực, kính an toàn hoặc kính hộp tùy vị trí nắng, ồn, an toàn và ngân sách.",
          "Bản lề, khóa, tay nắm, gioăng và keo ngoài trời phải chọn đồng bộ theo trọng lượng cánh."
        ]
      },
      {
        title: "Nên kiểm tra trước khi chốt",
        items: [
          "Kích thước ô chờ, hướng mở, vị trí vướng rèm, lan can, tường hồi hoặc đồ nội thất.",
          "Mép tiếp giáp tường, chân khung và hướng mưa tạt để xử lý chống thấm ngay từ đầu.",
          "Nhu cầu cách âm, chống nóng hoặc an toàn để chọn loại kính phù hợp."
        ]
      }
    ],
    related: ["cua-nhom-xingfa-ha-noi.html", "bao-gia-cua-nhom-xingfa.html", "phu-kien-cua-nhom-kinh.html"],
    faq: [
      {
        q: "Cửa nhôm Xingfa hệ 55 có dùng làm cửa lùa không?",
        a: "Không nên gọi chung như vậy. Hệ 55 thường dùng cho cửa mở quay, cửa sổ mở quay hoặc mở hất. Cửa lùa Xingfa phổ biến hơn với hệ ray trượt như hệ 93."
      },
      {
        q: "Hệ 55 nên dùng kính dày bao nhiêu?",
        a: "Tùy kích thước cánh và vị trí lắp đặt. Nhiều công trình dùng kính cường lực 8mm, 10mm hoặc kính an toàn hai lớp; ô lớn, vị trí gió mạnh cần tính lại tải trọng và phụ kiện."
      }
    ]
  },
  {
    slug: "cua-lua-nhom-xingfa-he-93.html",
    title: "Cửa Lùa Nhôm Xingfa Hệ 93 | Cửa Trượt Ban Công, Mặt Tiền",
    description: "Tư vấn cửa lùa nhôm Xingfa hệ 93 cho ban công, mặt tiền, cửa trượt nhà phố: ray, bánh xe, khóa, kính và chống thấm chân ray.",
    eyebrow: "Nhôm Xingfa hệ 93",
    h1: "Cửa Lùa Nhôm Xingfa Hệ 93 Cho Ban Công, Mặt Tiền",
    intro: "Cửa lùa nhôm Xingfa hệ 93 phù hợp những vị trí cần tiết kiệm diện tích mở cánh như ban công, logia, mặt tiền hẹp, cửa thông phòng hoặc khu vực cần lấy sáng rộng. Điểm quyết định chất lượng không chỉ là thanh nhôm mà còn là ray, bánh xe, khóa, gioăng và cách xử lý thoát nước chân ray.",
    serviceType: "Tư vấn và thi công cửa lùa nhôm Xingfa hệ 93",
    sections: [
      {
        title: "Khi nào nên chọn hệ 93?",
        items: [
          "Cửa ban công, logia, sân sau hoặc mặt tiền cần cánh trượt gọn, không chiếm diện tích mở.",
          "Ô cửa rộng cần chia 2 cánh, 3 cánh hoặc 4 cánh để lấy sáng và tạo lối đi thoáng.",
          "Công trình cải tạo có sẵn không gian hạn chế, khó dùng cửa mở quay."
        ]
      },
      {
        title: "Các điểm dễ phát sinh lỗi",
        items: [
          "Ray không phẳng, bánh xe yếu hoặc tải cánh quá nặng khiến cửa trượt nặng, kẹt, nhanh xệ.",
          "Chân ray ban công không xử lý thoát nước tốt dễ bị hắt nước, thấm chân khung.",
          "Khóa, chốt, gioăng không đồng bộ làm cửa đóng không kín, rung khi gió mạnh."
        ]
      },
      {
        title: "Gợi ý cấu hình",
        items: [
          "Dùng kính cường lực hoặc kính an toàn theo chiều cao cánh và vị trí sử dụng.",
          "Chọn bánh xe, ray, khóa bán nguyệt hoặc khóa đa điểm theo trọng lượng và tần suất đóng mở.",
          "Bơm keo, chèn khe và xử lý thoát nước riêng cho ban công, logia, mặt tiền hứng mưa."
        ]
      }
    ],
    related: ["cua-lua-nhom-kinh.html", "cua-nhom-kinh-ban-cong.html", "chong-tham-cua-nhom-kinh-ban-cong.html"],
    faq: [
      {
        q: "Cửa lùa hệ 93 có kín bằng cửa mở quay không?",
        a: "Cửa lùa thường không kín tuyệt đối bằng cửa mở quay vì có ray trượt và khe vận hành. Nếu cần cách âm, kín gió cao, cần chọn cấu hình gioăng, ray, kính và phụ kiện tốt hơn."
      },
      {
        q: "Ban công bị mưa tạt có làm cửa lùa được không?",
        a: "Làm được, nhưng cần khảo sát hướng mưa, cao độ nền, chân ray và đường thoát nước. Phần chống thấm chân khung phải được xử lý ngay khi thi công."
      }
    ]
  },
  {
    slug: "kinh-cuong-luc-10mm-12mm.html",
    title: "Kính Cường Lực 10mm, 12mm | Chọn Độ Dày Kính Phù Hợp",
    description: "So sánh kính cường lực 10mm và 12mm cho cửa kính, vách kính, showroom, lan can, cabin tắm: khi nào dùng, lưu ý an toàn và báo giá.",
    eyebrow: "Độ dày kính cường lực",
    h1: "Kính Cường Lực 10mm, 12mm Nên Dùng Khi Nào?",
    intro: "Kính cường lực 10mm và 12mm là hai độ dày thường gặp trong cửa kính, vách kính, showroom, văn phòng, cabin tắm và một số hạng mục nội ngoại thất. Chọn độ dày đúng giúp công trình chắc hơn, an toàn hơn và tránh lãng phí khi dùng kính quá dày cho vị trí không cần thiết.",
    serviceType: "Tư vấn và thi công kính cường lực 10mm, 12mm",
    sections: [
      {
        title: "Kính 10mm thường dùng cho",
        items: [
          "Cửa kính, vách kính văn phòng, cửa hàng nhỏ, cabin tắm và vách ngăn trong nhà.",
          "Ô kính có kích thước vừa, ít chịu va đập mạnh và có phụ kiện giữ kính phù hợp.",
          "Công trình cần cân bằng giữa độ chắc, độ trong và chi phí."
        ]
      },
      {
        title: "Kính 12mm nên cân nhắc khi",
        items: [
          "Vách kính, cửa kính hoặc showroom có tấm lớn, chiều cao lớn, tần suất sử dụng nhiều.",
          "Khu vực mặt tiền, nơi dễ va chạm hoặc cần cảm giác chắc chắn hơn.",
          "Hạng mục dùng bản lề sàn, kẹp kính, tay nắm lớn hoặc phụ kiện chịu tải cao."
        ]
      },
      {
        title: "Lưu ý trước khi báo giá",
        items: [
          "Cần biết kích thước từng tấm, vị trí lắp, loại cạnh mài, khoét lỗ, khoét bản lề và phụ kiện đi kèm.",
          "Không nên chỉ so giá theo mét vuông kính vì tổng chi phí còn phụ thuộc phụ kiện, vận chuyển và lắp đặt.",
          "Với vị trí trên cao, lan can, mái kính hoặc nơi rủi ro cao, nên khảo sát kỹ trước khi chốt độ dày."
        ]
      }
    ],
    related: ["bao-gia-kinh-cuong-luc.html", "thi-cong-kinh-cuong-luc-ha-noi.html", "vach-kinh-van-phong.html"],
    faq: [
      {
        q: "Kính cường lực 10mm có đủ chắc không?",
        a: "Đủ cho nhiều hạng mục cửa kính, vách kính và cabin tắm kích thước vừa. Tuy nhiên độ chắc còn phụ thuộc kích thước tấm, vị trí lắp, phụ kiện và cách thi công."
      },
      {
        q: "Kính 12mm có luôn tốt hơn kính 10mm không?",
        a: "Không phải lúc nào cũng cần kính 12mm. Kính dày hơn nặng hơn, đòi hỏi phụ kiện chịu tải tốt hơn và chi phí cao hơn. Nên chọn theo kích thước, vị trí và nhu cầu an toàn."
      }
    ]
  },
  {
    slug: "phu-kien-kinh-cuong-luc.html",
    title: "Phụ Kiện Kính Cường Lực | Bản Lề, Kẹp Kính, Tay Nắm, Khóa",
    description: "Tư vấn phụ kiện kính cường lực: bản lề sàn, kẹp kính, tay nắm, khóa, ray treo, gioăng, keo và cách chọn theo trọng lượng cửa kính.",
    eyebrow: "Phụ kiện kính cường lực",
    h1: "Phụ Kiện Kính Cường Lực Quyết Định Độ Bền Và An Toàn",
    intro: "Với cửa kính cường lực và vách kính, phụ kiện là phần chịu lực, giữ tấm kính ổn định và quyết định cảm giác vận hành hằng ngày. Chọn sai bản lề, kẹp kính, tay nắm hoặc khóa có thể làm cửa xệ, đóng mở nặng, kêu, rung hoặc giảm an toàn khi sử dụng lâu dài.",
    serviceType: "Tư vấn và lắp đặt phụ kiện kính cường lực",
    sections: [
      {
        title: "Nhóm phụ kiện chính",
        items: [
          "Bản lề sàn, bản lề thủy lực, kẹp trên, kẹp dưới, kẹp L, kẹp kính tường.",
          "Tay nắm, khóa sàn, khóa kẹp kính, chốt âm, ray treo hoặc ray trượt tùy kiểu cửa.",
          "Gioăng, keo, nẹp, chân đế và phụ kiện phụ trợ giúp kín khe, giảm rung và hoàn thiện mép kính."
        ]
      },
      {
        title: "Cách chọn theo công trình",
        items: [
          "Cửa kính ra vào nhiều cần bản lề và khóa chịu tải tốt, đóng êm, dễ căn chỉnh sau thời gian sử dụng.",
          "Vách kính showroom cần kẹp kính chắc, mép kính xử lý đẹp và phụ kiện đồng màu với nhận diện cửa hàng.",
          "Cửa kính trong nhà có thể tối ưu chi phí nhưng vẫn cần đúng tải trọng kính và an toàn vận hành."
        ]
      },
      {
        title: "Dấu hiệu nên thay phụ kiện",
        items: [
          "Cửa kính bị xệ, quệt nền, đóng không tự về vị trí hoặc phát tiếng kêu khi mở.",
          "Khóa lỏng, tay nắm lung lay, kẹp kính oxy hóa hoặc bản lề chảy dầu.",
          "Kính rung nhiều khi đóng mở, khe hở lớn hoặc mép cửa không còn thẳng."
        ]
      }
    ],
    related: ["cua-kinh-cuong-luc.html", "vach-kinh-cua-hang-showroom.html", "bao-gia-kinh-cuong-luc.html"],
    faq: [
      {
        q: "Có nên dùng phụ kiện kính cường lực giá rẻ không?",
        a: "Chỉ nên dùng khi phù hợp tải trọng và tần suất sử dụng. Với cửa ra vào nhiều, cửa lớn hoặc mặt tiền, phụ kiện yếu sẽ nhanh xệ, khó căn chỉnh và tăng rủi ro an toàn."
      },
      {
        q: "Cửa kính bị xệ có phải thay cả bộ không?",
        a: "Không phải lúc nào cũng cần thay cả bộ. Cần kiểm tra bản lề, kẹp, khóa, nền và độ lệch kính để quyết định căn chỉnh, thay một phần hay thay đồng bộ."
      }
    ]
  }
];

const relatedLabels = {
  "bao-gia-cua-nhom-xingfa.html": "Báo giá cửa nhôm Xingfa",
  "bao-gia-kinh-cuong-luc.html": "Báo giá kính cường lực",
  "chong-tham-cua-nhom-kinh-ban-cong.html": "Chống thấm cửa ban công",
  "cua-kinh-cuong-luc.html": "Cửa kính cường lực",
  "cua-lua-nhom-kinh.html": "Cửa lùa nhôm kính",
  "cua-nhom-kinh-ban-cong.html": "Cửa nhôm kính ban công",
  "cua-nhom-xingfa-ha-noi.html": "Cửa nhôm Xingfa Hà Nội",
  "phu-kien-cua-nhom-kinh.html": "Phụ kiện cửa nhôm kính",
  "thi-cong-kinh-cuong-luc-ha-noi.html": "Thi công kính cường lực Hà Nội",
  "vach-kinh-cua-hang-showroom.html": "Vách kính cửa hàng, showroom",
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
        { "@type": "ListItem", position: 2, name: page.h1, item: `${baseUrl}/${page.slug}` }
      ]
    },
    {
      "@type": "Service",
      name: page.h1,
      serviceType: page.serviceType,
      description: page.description,
      url: `${baseUrl}/${page.slug}`,
      image: ogImage,
      areaServed: ["Hà Nội", "Hưng Yên", "Hà Nam", "Phủ Lý", "Bắc Ninh", "Hải Dương", "Nam Định", "Ninh Bình", "miền Bắc"],
      provider: {
        "@type": "LocalBusiness",
        name: "NK Door",
        telephone: "+84975337071",
        url: `${baseUrl}/`,
        areaServed: "Miền Bắc"
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
    <section class="seo-hero"><div class="container"><div class="seo-hero-content"><div class="breadcrumb"><a href="index.html">Trang chủ</a><span>/</span><span>${page.eyebrow}</span></div><span class="seo-eyebrow">${page.eyebrow}</span><h1>${page.h1}</h1><p>${page.intro}</p><div class="seo-actions"><a href="tel:${phoneHref}" class="btn btn-primary">Gọi tư vấn</a><a href="index.html#contact" class="btn btn-outline">Nhận báo giá</a></div></div></div></section>
    <section class="seo-section"><div class="container seo-grid">${page.sections.map(sectionHtml).join("")}${relatedHtml(page.related)}</div></section>
    <section class="seo-section alt"><div class="container seo-copy"><h2>Cần báo giá chính xác hơn?</h2><p>Gửi ảnh hiện trạng, kích thước rộng x cao, vị trí thi công và nhu cầu ưu tiên như cách âm, chống nước, an toàn hoặc tối ưu chi phí. NK Door sẽ tư vấn cấu hình phù hợp trước khi khảo sát thực tế.</p><div class="seo-pill-links"><a href="lien-he-khao-sat-nhom-kinh.html">Liên hệ khảo sát</a><a href="huong-dan-gui-anh-bao-gia-nhom-kinh.html">Hướng dẫn gửi ảnh</a><a href="bao-gia-thi-cong-nhom-kinh-2026.html">Báo giá thi công 2026</a></div></div></section>
  </main>
</body>
</html>
`;
}

for (const page of pages) {
  fs.writeFileSync(path.join(root, page.slug), pageHtml(page), "utf8");
}

let index = fs.readFileSync(path.join(root, "index.html"), "utf8");
const materialFooterLinks = `
            <li><a href="cua-nhom-xingfa-he-55.html" class="footer-link">Cửa nhôm Xingfa hệ 55</a></li>
            <li><a href="cua-lua-nhom-xingfa-he-93.html" class="footer-link">Cửa lùa Xingfa hệ 93</a></li>
            <li><a href="kinh-cuong-luc-10mm-12mm.html" class="footer-link">Kính cường lực 10mm, 12mm</a></li>
            <li><a href="phu-kien-kinh-cuong-luc.html" class="footer-link">Phụ kiện kính cường lực</a></li>`;
if (!index.includes("cua-nhom-xingfa-he-55.html")) {
  const marker = '            <li><a href="bao-gia-cua-nhom-xingfa.html" class="footer-link">Báo giá cửa nhôm Xingfa</a></li>';
  if (index.includes(marker)) {
    index = index.replace(marker, `${marker}${materialFooterLinks}`);
  } else {
    index = index.replace('            <li><a href="site-map.html" class="footer-link">Sitemap dịch vụ</a></li>', `${materialFooterLinks}
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
