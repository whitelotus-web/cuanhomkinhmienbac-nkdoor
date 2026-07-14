import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const baseUrl = "https://cua-nhom-kinh-mien-bac.netlify.app";
const today = "2026-07-14";
const phone = "0975.337.071";
const phoneHref = "0975337071";
const ogImage = `${baseUrl}/img%20thi%20cong/IMG_1774397594460_1774416357947_1.jpg`;

function readHeadFile(file) {
  try {
    return execFileSync("git", ["show", `HEAD:${file}`], {
      cwd: root,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"]
    });
  } catch {
    return "";
  }
}

function readUrlLastmods(xml) {
  const result = new Map();
  for (const match of xml.matchAll(/<url>[\s\S]*?<loc>([^<]+)<\/loc>[\s\S]*?<lastmod>([^<]+)<\/lastmod>[\s\S]*?<\/url>/g)) {
    result.set(match[1], match[2]);
  }
  return result;
}

function readSitemapLastmod(xml, loc) {
  for (const match of xml.matchAll(/<sitemap>[\s\S]*?<loc>([^<]+)<\/loc>[\s\S]*?<lastmod>([^<]+)<\/lastmod>[\s\S]*?<\/sitemap>/g)) {
    if (match[1] === loc) return match[2];
  }
  return "";
}

const pages = [
  {
    slug: "bao-gia-cua-nhom-kinh-theo-m2.html",
    title: "Báo Giá Cửa Nhôm Kính Theo m2 | Cách Tính Đủ Vật Tư, Phụ Kiện",
    description: "Cách tính báo giá cửa nhôm kính theo m2 gồm nhôm, kính, phụ kiện, kích thước và công lắp. Gửi ảnh, số đo để nhận dự toán sát thực tế.",
    eyebrow: "Báo giá theo m2",
    h1: "Báo Giá Cửa Nhôm Kính Theo m2 Được Tính Như Thế Nào?",
    intro: "Giá cửa nhôm kính theo m2 chỉ là phần khởi đầu. Tổng chi phí còn phụ thuộc hệ nhôm, loại kính, số cánh, kiểu mở, phụ kiện, kích thước và điều kiện lắp đặt. Báo giá rõ từng cấu phần giúp khách hàng so sánh đúng và hạn chế phát sinh khi thi công.",
    serviceType: "Báo giá cửa nhôm kính theo m2",
    sections: [
      ["Một báo giá đầy đủ gồm gì?", ["Diện tích và hệ nhôm: quy cách thanh nhôm, màu sơn, kiểu chia đố.", "Loại kính: kính thường, kính cường lực, kính an toàn hoặc kính hộp.", "Phụ kiện, gioăng, keo, nhân công, vận chuyển, tháo cửa cũ và xử lý ô chờ nếu có."]],
      ["Vì sao cùng m2 nhưng giá khác?", ["Cửa mở quay, cửa lùa, cửa hất dùng bộ phụ kiện và lượng nhôm khác nhau.", "Cửa nhiều cánh, ô quá nhỏ hoặc quá lớn có tỷ lệ khung, kính và công gia công khác.", "Ban công, mặt tiền hoặc vị trí mưa tạt cần tăng yêu cầu kín nước, an toàn và chịu tải."]],
      ["Thông tin để dự toán nhanh", ["Kích thước rộng x cao và số lượng từng bộ cửa.", "Ảnh toàn cảnh ô chờ, ảnh chân khung và vị trí vận chuyển vật tư.", "Nhu cầu ưu tiên: tiết kiệm, cách âm, chống nóng, chống nước hay thẩm mỹ."]]
    ],
    related: ["bao-gia-cua-nhom-kinh.html", "bao-gia-cua-nhom-xingfa.html", "huong-dan-gui-anh-bao-gia-nhom-kinh.html", "lien-he-khao-sat-nhom-kinh.html"],
    faq: [
      ["Có thể chốt giá chỉ bằng diện tích m2 không?", "Chỉ nên dùng để dự toán sơ bộ. Muốn chốt giá cần xác định hệ nhôm, kính, kiểu mở, phụ kiện, số cánh và điều kiện thi công thực tế."],
      ["Gửi ảnh có nhận được báo giá trước khi khảo sát không?", "Có. Ảnh hiện trạng và kích thước sơ bộ giúp tư vấn cấu hình và khoảng chi phí ban đầu. Khảo sát vẫn cần thiết khi chốt kích thước và vật tư chính xác."]
    ]
  },
  {
    slug: "thay-cua-nhom-kinh-cu.html",
    title: "Thay Cửa Nhôm Kính Cũ | Khi Nào Nên Sửa, Khi Nào Nên Thay?",
    description: "Tư vấn thay cửa nhôm kính cũ: đánh giá khung, kính, ray, khóa, chống thấm; phân biệt trường hợp nên sửa phụ kiện hoặc thay cửa mới.",
    eyebrow: "Cải tạo cửa cũ",
    h1: "Thay Cửa Nhôm Kính Cũ: Nên Sửa Hay Thay Mới?",
    intro: "Cửa nhôm kính bị kẹt, xệ, hở nước hoặc hỏng khóa chưa chắc phải thay cả bộ. Cần kiểm tra khung nhôm, ray, kính, phụ kiện và mép tiếp giáp tường để chọn phương án sửa đúng chỗ hoặc thay mới khi hệ cửa đã xuống cấp toàn diện.",
    serviceType: "Thay cửa nhôm kính cũ",
    sections: [
      ["Có thể sửa khi", ["Khung còn thẳng và chắc, lỗi chủ yếu nằm ở bánh xe, bản lề, khóa hoặc gioăng.", "Kính còn an toàn, cánh chưa biến dạng và điểm thấm nước có thể xử lý lại keo.", "Chi phí sửa hợp lý so với tuổi thọ còn lại của bộ cửa."]],
      ["Nên thay mới khi", ["Khung nhôm mỏng, cong vênh, oxy hóa hoặc liên kết góc đã yếu.", "Cửa hở nhiều vị trí, thấm nước lặp lại, cánh xệ nặng hoặc phụ kiện không còn đồng bộ.", "Nhu cầu mới về cách âm, chống nóng, an toàn vượt quá khả năng của hệ cửa cũ."]],
      ["Quy trình thay cửa", ["Đo hiện trạng, kiểm tra tường nền và thống nhất hướng mở, vật tư mới.", "Gia công trước, sau đó tháo cửa cũ và bảo vệ khu vực thi công.", "Lắp khung, căn chỉnh cánh, xử lý keo, vệ sinh và kiểm tra đóng mở."]]
    ],
    related: ["sua-chua-cua-nhom-kinh.html", "sua-khoa-cua-nhom-kinh.html", "bao-hanh-bao-tri-cua-nhom-kinh.html", "bao-gia-cua-nhom-kinh.html"],
    faq: [
      ["Thay cửa cũ có phải đục tường nhiều không?", "Tùy cách lắp khung cũ và tình trạng ô chờ. Khảo sát trước giúp chọn cách tháo lắp hạn chế ảnh hưởng tường, sơn và nội thất xung quanh."],
      ["Có tận dụng lại kính hoặc phụ kiện cũ không?", "Có thể cân nhắc nếu kích thước phù hợp và vật tư còn an toàn, nhưng cần đánh giá chi phí tháo lắp và tuổi thọ còn lại trước khi quyết định."]
    ]
  },
  {
    slug: "cua-nhom-kinh-logia-chung-cu.html",
    title: "Cửa Nhôm Kính Logia Chung Cư | Cửa Lùa, Chống Mưa, Kín Gió",
    description: "Tư vấn cửa nhôm kính logia chung cư: cửa lùa, kính an toàn, ray thoát nước, chống mưa tạt, kín gió và lưu ý quy định tòa nhà.",
    eyebrow: "Cửa logia chung cư",
    h1: "Cửa Nhôm Kính Logia Chung Cư: Kín Gió, Chống Mưa, Dễ Sử Dụng",
    intro: "Logia chung cư thường chịu gió, mưa tạt và có không gian mở cánh hạn chế. Bộ cửa cần được chọn theo kích thước, hướng gió, cao độ nền, lối thoát nước và quy định của tòa nhà; không nên chỉ chọn theo mẫu hoặc giá m2.",
    serviceType: "Thi công cửa nhôm kính logia chung cư",
    sections: [
      ["Cấu hình thường dùng", ["Cửa lùa giúp tiết kiệm diện tích, cần ray và bánh xe đúng tải.", "Kính an toàn hoặc kính cường lực theo kích thước và vị trí sử dụng.", "Khóa, gioăng, keo ngoài trời và lỗ thoát nước phải đồng bộ với hệ cửa."]],
      ["Điểm dễ phát sinh thấm", ["Chân ray thấp hơn hoặc ngang nền ngoài, nước không có đường thoát.", "Mép khung tiếp giáp tường bị nứt keo hoặc xử lý không đủ chiều sâu.", "Cánh quá lớn, xệ hoặc khóa không ép kín khiến nước và gió đi qua khe cửa."]],
      ["Trước khi thi công", ["Kiểm tra quy định tòa nhà về màu khung, hình thức mặt ngoài và giờ thi công.", "Đo lối vận chuyển, thang máy và phương án bảo vệ sàn, nội thất.", "Chốt hướng mở, vị trí máy giặt, giàn phơi và khoảng thao tác tại logia."]]
    ],
    related: ["cua-nhom-kinh-chung-cu.html", "cua-nhom-kinh-ban-cong.html", "cua-lua-nhom-xingfa-he-93.html", "chong-tham-cua-nhom-kinh-ban-cong.html"],
    faq: [
      ["Logia chung cư nên làm cửa lùa hay mở quay?", "Cửa lùa thường phù hợp hơn khi diện tích hẹp. Cửa mở quay kín hơn nhưng cần đủ khoảng mở cánh và phải tuân thủ quy định an toàn của tòa nhà."],
      ["Có thể làm cửa kín hoàn toàn để chống mưa không?", "Có thể tăng khả năng kín nước bằng hệ cửa, gioăng, khóa và xử lý chân khung phù hợp, nhưng cần khảo sát hướng mưa và cao độ nền để đưa ra phương án thực tế."]
    ]
  },
  {
    slug: "cua-nhom-kinh-chong-nong.html",
    title: "Cửa Nhôm Kính Chống Nóng | Chọn Kính, Hệ Nhôm, Giải Pháp Che Nắng",
    description: "Tư vấn cửa nhôm kính chống nóng cho nhà phố, chung cư, mặt tiền: kính hộp, kính an toàn, kính cản nhiệt, độ kín và giải pháp che nắng.",
    eyebrow: "Giải pháp chống nóng",
    h1: "Cửa Nhôm Kính Chống Nóng Nên Chọn Kính Và Hệ Nhôm Nào?",
    intro: "Khả năng chống nóng không chỉ phụ thuộc độ dày kính. Hướng nắng, diện tích kính, loại kính, độ kín của khung, rèm hoặc mái che đều ảnh hưởng đến nhiệt trong phòng. Cần phối hợp các yếu tố thay vì chỉ thay một tấm kính dày hơn.",
    serviceType: "Thi công cửa nhôm kính chống nóng",
    sections: [
      ["Các lựa chọn kính", ["Kính hộp tạo lớp không khí giữa hai tấm, hỗ trợ cách nhiệt và cách âm.", "Kính an toàn, kính màu hoặc kính có lớp cản nhiệt cần chọn theo hướng nắng và nhu cầu lấy sáng.", "Kính cường lực tăng an toàn cơ học nhưng bản thân độ dày không quyết định toàn bộ khả năng chống nóng."]],
      ["Vai trò của hệ cửa", ["Khung và cánh kín, gioăng tốt giúp giảm khí nóng lọt qua khe cửa.", "Cửa lùa thường có nhiều khe vận hành hơn cửa mở quay, cần chọn cấu hình phù hợp.", "Keo, chân khung và mép tường phải được xử lý kín để giảm gió nóng và nước mưa."]],
      ["Giải pháp phối hợp", ["Rèm, lam che nắng, mái che hoặc phim kính có thể giảm bức xạ trực tiếp.", "Thông gió đúng thời điểm giúp thoát nhiệt tích tụ trong phòng.", "Nên khảo sát hướng nắng và diện tích mặt kính trước khi chốt vật tư."]]
    ],
    related: ["kinh-hop-cach-am-cach-nhiet.html", "cua-nhom-kinh-cach-am.html", "cua-nhom-kinh-ban-cong.html", "cua-nhom-kinh-mat-tien.html"],
    faq: [
      ["Kính cường lực dày hơn có chống nóng tốt hơn không?", "Không đáng kể nếu chỉ tăng độ dày. Hiệu quả chống nóng phụ thuộc loại kính, lớp phủ, cấu tạo kính hộp, diện tích kính, hướng nắng và giải pháp che nắng."],
      ["Cửa lùa có chống nóng tốt không?", "Có thể cải thiện bằng kính phù hợp và khung kín, nhưng cửa mở quay thường kín khí tốt hơn. Việc chọn kiểu cửa cần cân bằng diện tích, hướng mở và nhu cầu sử dụng."]
    ]
  }
];

const relatedLabels = {
  "bao-gia-cua-nhom-kinh.html": "Báo giá cửa nhôm kính",
  "bao-gia-cua-nhom-xingfa.html": "Báo giá cửa nhôm Xingfa",
  "bao-hanh-bao-tri-cua-nhom-kinh.html": "Bảo hành, bảo trì",
  "chong-tham-cua-nhom-kinh-ban-cong.html": "Chống thấm cửa ban công",
  "cua-lua-nhom-xingfa-he-93.html": "Cửa lùa Xingfa hệ 93",
  "cua-nhom-kinh-ban-cong.html": "Cửa nhôm kính ban công",
  "cua-nhom-kinh-cach-am.html": "Cửa nhôm kính cách âm",
  "cua-nhom-kinh-chung-cu.html": "Cửa nhôm kính chung cư",
  "cua-nhom-kinh-mat-tien.html": "Cửa nhôm kính mặt tiền",
  "huong-dan-gui-anh-bao-gia-nhom-kinh.html": "Hướng dẫn gửi ảnh báo giá",
  "kinh-hop-cach-am-cach-nhiet.html": "Kính hộp cách âm cách nhiệt",
  "lien-he-khao-sat-nhom-kinh.html": "Liên hệ khảo sát",
  "sua-chua-cua-nhom-kinh.html": "Sửa chữa cửa nhôm kính",
  "sua-khoa-cua-nhom-kinh.html": "Sửa khóa cửa nhôm kính"
};

function header() {
  return `<header class="header scrolled"><div class="container"><a href="index.html" class="logo"><div class="logo-icon">NK</div><div class="logo-text"><span class="logo-name">NK Door</span><span class="logo-tagline">Cửa Thép & Nhôm Kính Miền Bắc</span></div></a><nav class="nav-menu"><a href="index.html#services" class="nav-link">Dịch vụ</a><a href="index.html#projects" class="nav-link">Dự án</a><a href="index.html#areas" class="nav-link">Khu vực</a><a href="index.html#contact" class="nav-link">Liên hệ</a></nav><div class="header-cta"><a href="tel:${phoneHref}" class="header-phone">${phone}</a></div></div></header>`;
}

function sectionHtml([title, items]) {
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
      serviceType: page.serviceType,
      description: page.description,
      url: `${baseUrl}/${page.slug}`,
      image: ogImage,
      areaServed: ["Hà Nội", "Hưng Yên", "Hà Nam", "Phủ Lý", "miền Bắc"],
      provider: { "@type": "LocalBusiness", name: "NK Door", telephone: "+84975337071", url: `${baseUrl}/` }
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
    <section class="seo-hero"><div class="container"><div class="seo-hero-content"><div class="breadcrumb"><a href="index.html">Trang chủ</a><span>/</span><span>${page.eyebrow}</span></div><span class="seo-eyebrow">${page.eyebrow}</span><h1>${page.h1}</h1><p>${page.intro}</p><div class="seo-actions"><a href="tel:${phoneHref}" class="btn btn-primary">Gọi tư vấn</a><a href="index.html#contact" class="btn btn-outline">Nhận báo giá</a></div></div></div></section>
    <section class="seo-section"><div class="container seo-grid">${page.sections.map(sectionHtml).join("")}<article class="seo-card"><h2>Liên kết liên quan</h2><div class="seo-pill-links">${page.related.map((href) => `<a href="${href}">${relatedLabels[href] ?? href.replace(".html", "")}</a>`).join("")}</div></article></div></section>
    <section class="seo-section alt"><div class="container"><div class="seo-copy"><h2>Câu hỏi thường gặp</h2></div><div class="seo-grid">${page.faq.map(([q, a]) => `<article class="seo-card"><h3>${q}</h3><p>${a}</p></article>`).join("")}</div></div></section>
    <section class="seo-section"><div class="container seo-copy"><h2>Cần dự toán sát hiện trạng?</h2><p>Gửi ảnh, kích thước sơ bộ, khu vực thi công và nhu cầu ưu tiên. NK Door sẽ tư vấn cấu hình trước khi hẹn khảo sát để chốt vật tư và chi phí.</p><div class="seo-pill-links"><a href="lien-he-khao-sat-nhom-kinh.html">Liên hệ khảo sát</a><a href="huong-dan-gui-anh-bao-gia-nhom-kinh.html">Hướng dẫn gửi ảnh</a><a href="bao-gia-thi-cong-nhom-kinh-2026.html">Báo giá thi công 2026</a></div></div></section>
  </main>
</body>
</html>
`;
}

for (const page of pages) fs.writeFileSync(path.join(root, page.slug), pageHtml(page), "utf8");

let index = fs.readFileSync(path.join(root, "index.html"), "utf8");
const footerLinks = `
            <li><a href="bao-gia-cua-nhom-kinh-theo-m2.html" class="footer-link">Báo giá cửa nhôm theo m2</a></li>
            <li><a href="thay-cua-nhom-kinh-cu.html" class="footer-link">Thay cửa nhôm kính cũ</a></li>
            <li><a href="cua-nhom-kinh-logia-chung-cu.html" class="footer-link">Cửa logia chung cư</a></li>
            <li><a href="cua-nhom-kinh-chong-nong.html" class="footer-link">Cửa nhôm kính chống nóng</a></li>`;
if (!index.includes("bao-gia-cua-nhom-kinh-theo-m2.html")) {
  const marker = '            <li><a href="bao-gia-thi-cong-nhom-kinh-2026.html" class="footer-link">Báo giá nhôm kính 2026</a></li>';
  index = index.includes(marker)
    ? index.replace(marker, `${marker}${footerLinks}`)
    : index.replace('            <li><a href="site-map.html" class="footer-link">Sitemap dịch vụ</a></li>', `${footerLinks}\n            <li><a href="site-map.html" class="footer-link">Sitemap dịch vụ</a></li>`);
}
fs.writeFileSync(path.join(root, "index.html"), index, "utf8");

let hanoi = fs.readFileSync(path.join(root, "thi-cong-nhom-kinh-ha-noi.html"), "utf8");
hanoi = hanoi.replace(
  "Cầu Giấy, Hoàng Mai, Long Biên, Hà Đông, Gia Lâm, Thanh Trì, Đông Anh và khu vực lân cận.",
  "Ba Đình, Đống Đa, Hai Bà Trưng, Thanh Xuân, Cầu Giấy, Tây Hồ, Hoàng Mai, Long Biên, Hà Đông, Nam Từ Liêm, Bắc Từ Liêm, Gia Lâm, Thanh Trì, Đông Anh và khu vực lân cận."
);
if (!hanoi.includes('id="hanoi-service-areas"')) {
  const areaLinks = [
    ["thi-cong-nhom-kinh-ba-dinh.html", "Ba Đình"], ["thi-cong-nhom-kinh-dong-da.html", "Đống Đa"],
    ["thi-cong-nhom-kinh-hai-ba-trung.html", "Hai Bà Trưng"], ["thi-cong-nhom-kinh-thanh-xuan.html", "Thanh Xuân"],
    ["thi-cong-nhom-kinh-cau-giay.html", "Cầu Giấy"], ["thi-cong-nhom-kinh-tay-ho.html", "Tây Hồ"],
    ["thi-cong-nhom-kinh-hoang-mai.html", "Hoàng Mai"], ["thi-cong-nhom-kinh-long-bien.html", "Long Biên"],
    ["thi-cong-nhom-kinh-ha-dong.html", "Hà Đông"], ["thi-cong-nhom-kinh-nam-tu-liem.html", "Nam Từ Liêm"],
    ["thi-cong-nhom-kinh-bac-tu-liem.html", "Bắc Từ Liêm"], ["thi-cong-nhom-kinh-gia-lam.html", "Gia Lâm"],
    ["thi-cong-nhom-kinh-thanh-tri.html", "Thanh Trì"], ["thi-cong-nhom-kinh-dong-anh.html", "Đông Anh"]
  ];
  const hubSection = `<section class="seo-section alt" id="hanoi-service-areas"><div class="container seo-copy"><h2>Khu Vực Thi Công Nhôm Kính Tại Hà Nội</h2><p>Chọn khu vực gần công trình để xem nhu cầu thi công, lưu ý kỹ thuật và liên kết báo giá phù hợp.</p><div class="seo-pill-links">${areaLinks.map(([href, label]) => `<a href="${href}">Nhôm kính ${label}</a>`).join("")}</div></div></section>`;
  hanoi = hanoi.replace("  </main>", `    ${hubSection}\n  </main>`);
}
fs.writeFileSync(path.join(root, "thi-cong-nhom-kinh-ha-noi.html"), hanoi, "utf8");

const htmlFiles = fs.readdirSync(root).filter((file) => file.endsWith(".html") && file !== "404.html").sort((a, b) => (a === "index.html" ? -1 : b === "index.html" ? 1 : a.localeCompare(b, "vi")));
const titleMap = {};
for (const file of htmlFiles) {
  const content = fs.readFileSync(path.join(root, file), "utf8");
  titleMap[file] = file === "index.html" ? "Trang chủ" : (content.match(/<title>([^<]+)<\/title>/)?.[1]?.replace(/\s*\|.*$/, "") ?? file.replace(".html", ""));
}

const groups = [
  ["Báo giá", (file) => file.startsWith("bao-gia")],
  ["Nhu cầu mua hàng và cải tạo", (file) => file.includes("theo-m2") || file.includes("thay-cua") || file.includes("logia") || file.includes("chong-nong")],
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
${JSON.stringify({ "@context": "https://schema.org", "@type": "ItemList", name: "Sitemap dịch vụ NK Door", itemListElement: htmlFiles.map((file, index) => ({ "@type": "ListItem", position: index + 1, name: titleMap[file], url: file === "index.html" ? `${baseUrl}/` : `${baseUrl}/${file}` })) }, null, 2)}
  </script>
</head>
<body class="seo-page">
  ${header()}
  <main>
    <section class="seo-hero"><div class="container"><div class="seo-hero-content"><div class="breadcrumb"><a href="index.html">Trang chủ</a><span>/</span><span>Sitemap</span></div><span class="seo-eyebrow">Sitemap</span><h1>Danh Sách Trang Dịch Vụ NK Door</h1><p>Tổng hợp các trang báo giá, dịch vụ, khu vực thi công và tư vấn để khách hàng dễ tìm đúng nhu cầu.</p></div></div></section>
    <section class="seo-section"><div class="container seo-grid">${groups.map(([name, test]) => { const files = htmlFiles.filter((file) => file !== "index.html" && file !== "site-map.html" && test(file)); return `<article class="seo-card"><h2>${name}</h2><ul>${files.map((file) => `<li><a href="${file}">${titleMap[file]}</a></li>`).join("")}</ul></article>`; }).join("")}</div></section>
  </main>
</body>
</html>
`;
fs.writeFileSync(path.join(root, "site-map.html"), siteMapHtml, "utf8");

const highPriority = new Set(pages.map((page) => page.slug));
const changedFiles = new Set([
  "index.html",
  "site-map.html",
  "thi-cong-nhom-kinh-ha-noi.html",
  ...pages.map((page) => page.slug)
]);
const previousSitemap = readHeadFile("sitemap.xml") || fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
const previousLastmods = readUrlLastmods(previousSitemap);
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${htmlFiles.map((file) => {
  const loc = file === "index.html" ? `${baseUrl}/` : `${baseUrl}/${file}`;
  const lastmod = changedFiles.has(file) ? today : previousLastmods.get(loc) || today;
  const priority = file === "index.html" ? "1.0" : highPriority.has(file) || file.startsWith("bao-gia") || file.includes("ha-noi") || file.includes("ha-nam") || file.includes("hung-yen") || file.includes("phu-ly") ? "0.9" : "0.85";
  const freq = file.includes("kinh-nghiem") || file.includes("so-sanh") || file.includes("checklist") || file.includes("cau-hoi") || file === "site-map.html" || file.includes("du-an") || file.includes("chinh-sach") ? "monthly" : "weekly";
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${freq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(root, "sitemap.xml"), sitemapXml, "utf8");
fs.writeFileSync(path.join(root, "sitemap.txt"), htmlFiles.map((file) => file === "index.html" ? `${baseUrl}/` : `${baseUrl}/${file}`).join("\n") + "\n", "utf8");
const previousSitemapIndex = readHeadFile("sitemap-index.xml") || fs.readFileSync(path.join(root, "sitemap-index.xml"), "utf8");
const imageSitemapLoc = `${baseUrl}/image-sitemap.xml`;
const imageSitemapLastmod = readSitemapLastmod(previousSitemapIndex, imageSitemapLoc) || today;
fs.writeFileSync(path.join(root, "sitemap-index.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap>\n    <loc>${baseUrl}/sitemap.xml</loc>\n    <lastmod>${today}</lastmod>\n  </sitemap>\n  <sitemap>\n    <loc>${imageSitemapLoc}</loc>\n    <lastmod>${imageSitemapLastmod}</lastmod>\n  </sitemap>\n</sitemapindex>\n`, "utf8");

console.log(JSON.stringify({ addedPages: pages.length, totalUrls: htmlFiles.length, pages: pages.map((page) => page.slug), hanoiHubUpdated: hanoi.includes('id="hanoi-service-areas"') }, null, 2));
