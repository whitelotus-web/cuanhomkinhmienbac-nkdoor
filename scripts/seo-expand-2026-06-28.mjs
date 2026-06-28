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
    slug: "cua-nhom-xingfa-ha-noi.html",
    title: "Cửa Nhôm Xingfa Hà Nội | Thi Công Cửa Nhôm Kính Xingfa",
    description: "Thi công cửa nhôm Xingfa tại Hà Nội, Hưng Yên, Hà Nam: cửa đi, cửa sổ, cửa lùa, ban công, mặt tiền. Khảo sát và báo giá theo kích thước thực tế.",
    breadcrumb: "Cửa nhôm Xingfa Hà Nội",
    eyebrow: "Cửa nhôm Xingfa",
    h1: "Thi Công Cửa Nhôm Xingfa Tại Hà Nội Và Miền Bắc",
    intro: "Cửa nhôm Xingfa phù hợp nhà phố, căn hộ, văn phòng và mặt tiền cần độ cứng, kín khít, cách âm tốt hơn cửa nhôm phổ thông. NK Door tư vấn hệ nhôm, kính và phụ kiện theo từng vị trí lắp đặt.",
    sections: [
      ["Phù hợp vị trí nào?", ["Cửa đi chính, cửa ban công, cửa thông phòng.", "Cửa sổ mở quay, mở hất, mở lùa.", "Mặt tiền showroom, văn phòng, nhà phố."]],
      ["Tư vấn vật tư", ["Nhôm Xingfa hệ 55, hệ 93 hoặc hệ phù hợp thực tế.", "Kính cường lực, kính an toàn, kính hộp tùy nhu cầu.", "Phụ kiện đồng bộ để cửa vận hành ổn định."]],
      ["Khu vực nhận thi công", ["Hà Nội, Hưng Yên, Hà Nam, Phủ Lý.", "Bắc Ninh, Hải Phòng, Ninh Bình và các tỉnh miền Bắc.", "Khảo sát nhanh với công trình cần báo giá gấp."]]
    ],
    copyTitle: "Vì sao cửa nhôm Xingfa thường được tìm nhiều?",
    copy: "Nhóm khách hàng tìm cửa nhôm Xingfa thường đã có nhu cầu rõ ràng về độ bền, độ kín nước và thẩm mỹ. Trang này giúp site bắt đúng ý định tìm kiếm theo sản phẩm cụ thể, đồng thời dẫn người dùng về báo giá và dịch vụ thi công cửa nhôm kính tổng thể.",
    links: ["bao-gia-cua-nhom-xingfa.html", "cua-nhom-kinh.html", "thi-cong-nhom-kinh-ha-noi.html"]
  },
  {
    slug: "bao-gia-cua-nhom-xingfa.html",
    title: "Báo Giá Cửa Nhôm Xingfa Hà Nội, Hưng Yên, Hà Nam | NK Door",
    description: "Báo giá cửa nhôm Xingfa theo hệ nhôm, kính, phụ kiện, kiểu mở và kích thước. Tư vấn phương án phù hợp nhà phố, chung cư, văn phòng miền Bắc.",
    breadcrumb: "Báo giá cửa nhôm Xingfa",
    eyebrow: "Báo giá cửa nhôm",
    h1: "Báo Giá Cửa Nhôm Xingfa Theo Kích Thước Và Phụ Kiện",
    intro: "Giá cửa nhôm Xingfa thay đổi theo hệ nhôm, loại kính, phụ kiện, kiểu mở, màu sơn và điều kiện thi công. NK Door báo giá sơ bộ qua ảnh, sau đó khảo sát để chốt kích thước chính xác.",
    sections: [
      ["Các yếu tố ảnh hưởng giá", ["Hệ nhôm, độ dày thanh nhôm và màu hoàn thiện.", "Kính an toàn, kính cường lực hoặc kính hộp.", "Phụ kiện, khóa, bản lề, ray trượt và gioăng."]],
      ["Thông tin cần gửi", ["Ảnh hiện trạng hoặc bản vẽ mặt bằng.", "Kích thước rộng x cao từng ô cửa.", "Khu vực thi công và yêu cầu cách âm, chống nước."]],
      ["Cách so sánh báo giá", ["So sánh cùng hệ nhôm, cùng loại kính, cùng phụ kiện.", "Kiểm tra chi phí vận chuyển, tháo dỡ, lắp đặt.", "Ưu tiên báo giá rõ hạng mục để tránh phát sinh."]]
    ],
    copyTitle: "Trang báo giá giúp kéo nhóm khách có ý định mua cao",
    copy: "Người tìm báo giá thường đã gần quyết định thi công. Nội dung cần rõ ràng, không hứa giá cố định khi chưa khảo sát, nhưng phải giải thích được cách tính để tăng niềm tin và tỷ lệ gọi điện.",
    links: ["cua-nhom-xingfa-ha-noi.html", "bao-gia-cua-nhom-kinh.html", "kinh-nghiem-chon-cua-nhom-kinh.html"]
  },
  {
    slug: "sua-cua-cuon-ha-noi.html",
    title: "Sửa Cửa Cuốn Hà Nội | Sửa Motor, Kẹt Ray, Cửa Cuốn Không Lên",
    description: "Nhận sửa cửa cuốn Hà Nội: cửa không lên xuống, kẹt ray, hỏng motor, lỗi điều khiển, thay nan, thay lưu điện. Tư vấn kiểm tra nhanh.",
    breadcrumb: "Sửa cửa cuốn Hà Nội",
    eyebrow: "Sửa chữa cửa cuốn",
    h1: "Sửa Cửa Cuốn Hà Nội: Motor, Ray, Nan Cửa Và Điều Khiển",
    intro: "Cửa cuốn hỏng thường ảnh hưởng trực tiếp đến an toàn và sinh hoạt. NK Door hỗ trợ kiểm tra tình trạng cửa cuốn, tư vấn sửa motor, ray, nan cửa, hộp điều khiển và bộ lưu điện.",
    sections: [
      ["Lỗi thường gặp", ["Cửa cuốn không lên xuống hoặc dừng giữa chừng.", "Cửa kêu to, lệch ray, kẹt nan, đứt lá.", "Remote không nhận, motor yếu, lưu điện không hoạt động."]],
      ["Quy trình xử lý", ["Tiếp nhận ảnh/video tình trạng cửa.", "Kiểm tra motor, ray, trục, nan và hộp điều khiển.", "Báo phương án sửa hoặc thay thế trước khi làm."]],
      ["Khu vực", ["Các quận nội thành Hà Nội.", "Khu vực giáp Hà Nội, Hưng Yên, Hà Nam khi có lịch phù hợp.", "Có thể tư vấn sơ bộ qua điện thoại trước."]]
    ],
    copyTitle: "SEO sửa chữa giúp có khách nhanh hơn dịch vụ lắp mới",
    copy: "Từ khóa sửa cửa cuốn có tính cấp bách cao. Trang này bổ sung nhóm khách hàng cần xử lý ngay, đồng thời liên kết sang lắp đặt cửa cuốn để tăng cơ hội chuyển đổi khi cửa cũ không còn đáng sửa.",
    links: ["lap-dat-cua-cuon-ha-noi.html", "bao-gia-cua-cuon.html", "cua-cuon.html"]
  },
  {
    slug: "lap-dat-cua-luoi-chong-muoi-ha-noi.html",
    title: "Lắp Đặt Cửa Lưới Chống Muỗi Hà Nội | Cửa Lưới Ban Công, Cửa Sổ",
    description: "Lắp đặt cửa lưới chống muỗi tại Hà Nội cho cửa sổ, ban công, cửa đi, chung cư, nhà phố. Tư vấn loại lưới, khung nhôm và kích thước phù hợp.",
    breadcrumb: "Cửa lưới chống muỗi Hà Nội",
    eyebrow: "Cửa lưới chống muỗi",
    h1: "Lắp Đặt Cửa Lưới Chống Muỗi Tại Hà Nội",
    intro: "Cửa lưới chống muỗi giúp lấy gió, giảm côn trùng và phù hợp với căn hộ, nhà phố, phòng ngủ, ban công, cửa sổ. NK Door tư vấn kiểu mở và khung lưới theo từng vị trí.",
    sections: [
      ["Vị trí lắp phổ biến", ["Cửa sổ phòng ngủ, phòng khách, bếp.", "Cửa ban công chung cư, logia, cửa ra sân.", "Cửa đi nhà phố, cửa thông gió."]],
      ["Loại cửa lưới", ["Cửa lưới dạng xếp, dạng cuốn, dạng lùa.", "Khung nhôm màu phù hợp cửa hiện hữu.", "Lưới chống muỗi thoáng gió, dễ vệ sinh."]],
      ["Khi nào cần khảo sát?", ["Kích thước lớn, ô cửa không vuông, cửa cũ đã lắp phụ kiện.", "Ban công cần giải pháp vừa thoáng vừa an toàn.", "Cần đồng bộ màu với cửa nhôm kính hiện có."]]
    ],
    copyTitle: "Bổ sung nhóm nhu cầu nhỏ nhưng đều",
    copy: "Cửa lưới chống muỗi là dịch vụ giá trị đơn hàng nhỏ hơn nhưng nhu cầu ổn định, nhất là căn hộ và nhà phố tại Hà Nội. Trang riêng giúp site có thêm điểm chạm với nhóm khách cải tạo nhà.",
    links: ["cua-luoi-chong-muoi.html", "cua-nhom-kinh-chung-cu.html", "thi-cong-nhom-kinh-ha-noi.html"]
  },
  {
    slug: "mai-kinh-cuong-luc.html",
    title: "Mái Kính Cường Lực Hà Nội, Miền Bắc | Mái Kính Sắt, Inox",
    description: "Thi công mái kính cường lực cho giếng trời, sân, ban công, sảnh, mái che nhà phố tại Hà Nội và miền Bắc. Tư vấn kính, khung sắt, inox.",
    breadcrumb: "Mái kính cường lực",
    eyebrow: "Kính cường lực",
    h1: "Thi Công Mái Kính Cường Lực Cho Nhà Phố Và Công Trình",
    intro: "Mái kính cường lực giúp lấy sáng, che mưa và tạo mặt tiền thoáng cho nhà phố, showroom, sảnh, sân sau, giếng trời. NK Door tư vấn độ dày kính, kết cấu khung và thoát nước theo mặt bằng.",
    sections: [
      ["Ứng dụng", ["Mái kính giếng trời, mái sân, mái ban công.", "Mái che sảnh, cửa hàng, showroom.", "Mái kính kết hợp khung sắt, inox hoặc nhôm."]],
      ["Điểm cần tính kỹ", ["Độ dốc thoát nước và hướng hắt mưa.", "Tải trọng kính, khung đỡ và điểm neo.", "Vị trí cần lấy sáng nhưng vẫn đảm bảo an toàn."]],
      ["Khu vực", ["Hà Nội, Hưng Yên, Hà Nam, Phủ Lý.", "Bắc Ninh, Hải Phòng, Ninh Bình và các tỉnh miền Bắc.", "Khảo sát thực tế trước khi chốt kết cấu."]]
    ],
    copyTitle: "Mái kính là cụm từ mở rộng tốt cho nhóm kính cường lực",
    copy: "Trang mái kính cường lực mở rộng cụm từ khóa kính cường lực sang hạng mục có giá trị thi công cao hơn. Nội dung cần nhấn mạnh an toàn, kết cấu và khảo sát thực tế thay vì chỉ nói giá.",
    links: ["cua-kinh-cuong-luc.html", "bao-gia-kinh-cuong-luc.html", "thi-cong-kinh-cuong-luc-ha-noi.html"]
  },
  {
    slug: "vach-tam-kinh-cuong-luc.html",
    title: "Vách Tắm Kính Cường Lực | Cabin Tắm Kính Hà Nội, Miền Bắc",
    description: "Thi công vách tắm kính cường lực, cabin tắm kính cho nhà phố, căn hộ, khách sạn tại Hà Nội, Hưng Yên, Hà Nam. Tư vấn phụ kiện và kiểu mở.",
    breadcrumb: "Vách tắm kính cường lực",
    eyebrow: "Cabin tắm kính",
    h1: "Vách Tắm Kính Cường Lực Cho Căn Hộ, Nhà Phố, Khách Sạn",
    intro: "Vách tắm kính giúp phòng tắm gọn, khô ráo và hiện đại hơn. NK Door tư vấn cabin tắm kính mở quay, mở lùa, vách cố định và phụ kiện inox theo diện tích thực tế.",
    sections: [
      ["Kiểu vách tắm", ["Cabin tắm kính góc, vách kính thẳng, vách cố định.", "Cửa kính mở quay hoặc mở lùa theo diện tích.", "Kính cường lực kết hợp phụ kiện inox."]],
      ["Cần lưu ý", ["Độ dốc sàn và vị trí thoát nước.", "Kích thước phòng tắm và hướng mở cửa.", "Gioăng chắn nước, nẹp, bản lề và tay nắm."]],
      ["Phù hợp công trình", ["Chung cư, nhà phố, biệt thự.", "Khách sạn, homestay, căn hộ cho thuê.", "Cải tạo phòng tắm đã sử dụng."]]
    ],
    copyTitle: "Tách riêng vách tắm để tránh dồn hết vào cabin tắm",
    copy: "Người dùng có thể tìm cả cabin tắm kính và vách tắm kính cường lực. Trang này giúp phủ thêm cách gọi phổ biến, đồng thời liên kết về trang cabin tắm kính hiện có.",
    links: ["cabin-tam-kinh.html", "bao-gia-kinh-cuong-luc.html", "cua-kinh-cuong-luc.html"]
  },
  {
    slug: "cua-nhom-kinh-ban-cong.html",
    title: "Cửa Nhôm Kính Ban Công | Cửa Ban Công Chung Cư, Nhà Phố",
    description: "Tư vấn cửa nhôm kính ban công cho chung cư, nhà phố: cửa lùa, mở quay, kính an toàn, chống nước, kín gió. Thi công Hà Nội và miền Bắc.",
    breadcrumb: "Cửa nhôm kính ban công",
    eyebrow: "Cửa ban công",
    h1: "Cửa Nhôm Kính Ban Công Cho Chung Cư Và Nhà Phố",
    intro: "Cửa ban công cần kín nước, kín gió, vận hành nhẹ và đủ an toàn khi sử dụng lâu dài. NK Door tư vấn cửa lùa, cửa mở quay, kính an toàn và phụ kiện phù hợp từng căn hộ.",
    sections: [
      ["Nhu cầu thường gặp", ["Thay cửa ban công cũ bị thấm nước, hở gió.", "Làm cửa lùa để tiết kiệm diện tích.", "Tăng cách âm, lấy sáng và an toàn cho căn hộ."]],
      ["Vật tư nên cân nhắc", ["Hệ nhôm phù hợp khẩu độ và hướng gió.", "Kính an toàn hoặc kính cường lực.", "Ray, bánh xe, khóa và gioăng chống nước."]],
      ["Khu vực thi công", ["Chung cư tại Hà Nội và khu vực lân cận.", "Nhà phố, biệt thự, công trình cải tạo.", "Hưng Yên, Hà Nam, Phủ Lý khi có lịch khảo sát."]]
    ],
    copyTitle: "Trang theo vị trí lắp đặt giúp tăng độ sát nhu cầu",
    copy: "Người tìm cửa ban công thường có vấn đề cụ thể về nước, gió, tiếng ồn hoặc diện tích. Nội dung theo vị trí lắp đặt giúp Google hiểu sâu hơn về dịch vụ cửa nhôm kính của site.",
    links: ["cua-nhom-kinh-chung-cu.html", "cua-nhom-kinh.html", "bao-gia-cua-nhom-kinh.html"]
  },
  {
    slug: "cua-thep-van-go-ha-noi.html",
    title: "Cửa Thép Vân Gỗ Hà Nội | Cửa Căn Hộ, Nhà Phố, Phòng Ngủ",
    description: "Thi công cửa thép vân gỗ tại Hà Nội cho căn hộ, nhà phố, phòng ngủ, cửa thông phòng. Tư vấn mẫu, kích thước, phụ kiện và báo giá.",
    breadcrumb: "Cửa thép vân gỗ Hà Nội",
    eyebrow: "Cửa thép vân gỗ",
    h1: "Cửa Thép Vân Gỗ Hà Nội Cho Căn Hộ Và Nhà Phố",
    intro: "Cửa thép vân gỗ phù hợp khách hàng cần cửa bền, ít cong vênh, chống mối mọt và dễ bảo trì hơn cửa gỗ tự nhiên. NK Door tư vấn mẫu cửa, màu vân gỗ và phụ kiện theo từng vị trí.",
    sections: [
      ["Ứng dụng", ["Cửa căn hộ, cửa phòng ngủ, cửa thông phòng.", "Cửa nhà phố, cửa khu phụ, cửa kỹ thuật.", "Công trình cần đồng bộ nhiều bộ cửa."]],
      ["Lợi thế", ["Ít cong vênh, không mối mọt như gỗ tự nhiên.", "Mẫu vân gỗ đa dạng, dễ phối nội thất.", "Chi phí kiểm soát tốt hơn nhiều dòng cửa gỗ cao cấp."]],
      ["Tư vấn trước khi đặt", ["Đo kích thước ô chờ và hướng mở.", "Chọn màu, pano, khóa và phụ kiện.", "Kiểm tra yêu cầu chống cháy nếu công trình cần."]]
    ],
    copyTitle: "Cửa thép vân gỗ cần có trang theo địa phương",
    copy: "Trang này nhắm nhóm tìm kiếm cửa thép vân gỗ tại Hà Nội, sát hơn trang cửa thép chung. Đây là nhóm từ khóa có ý định mua rõ, phù hợp để kéo cuộc gọi và yêu cầu báo giá.",
    links: ["cua-thep-cao-cap.html", "bao-gia-cua-thep.html", "thi-cong-cua-thep-ha-noi.html"]
  }
];

const extraLinks = {
  "bao-gia-cua-nhom-xingfa.html": "Báo giá cửa nhôm Xingfa",
  "cua-nhom-xingfa-ha-noi.html": "Cửa nhôm Xingfa Hà Nội",
  "sua-cua-cuon-ha-noi.html": "Sửa cửa cuốn Hà Nội",
  "lap-dat-cua-luoi-chong-muoi-ha-noi.html": "Cửa lưới chống muỗi Hà Nội",
  "mai-kinh-cuong-luc.html": "Mái kính cường lực",
  "vach-tam-kinh-cuong-luc.html": "Vách tắm kính cường lực",
  "cua-nhom-kinh-ban-cong.html": "Cửa nhôm kính ban công",
  "cua-thep-van-go-ha-noi.html": "Cửa thép vân gỗ Hà Nội"
};

function list(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function header() {
  return `<header class="header scrolled"><div class="container"><a href="index.html" class="logo"><div class="logo-icon">NK</div><div class="logo-text"><span class="logo-name">NK Door</span><span class="logo-tagline">Cửa Thép & Nhôm Kính Miền Bắc</span></div></a><nav class="nav-menu"><a href="index.html#services" class="nav-link">Dịch vụ</a><a href="index.html#projects" class="nav-link">Dự án</a><a href="index.html#areas" class="nav-link">Khu vực</a><a href="index.html#contact" class="nav-link">Liên hệ</a></nav><div class="header-cta"><a href="tel:${phoneHref}" class="header-phone">${phone}</a></div></div></header>`;
}

function pageHtml(page) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${baseUrl}/` },
          { "@type": "ListItem", position: 2, name: page.breadcrumb, item: `${baseUrl}/${page.slug}` }
        ]
      },
      {
        "@type": "Service",
        name: page.breadcrumb,
        serviceType: page.eyebrow,
        areaServed: ["Hà Nội", "Hưng Yên", "Hà Nam", "Phủ Lý", "Miền Bắc"],
        provider: {
          "@type": "LocalBusiness",
          name: "NK Door",
          telephone: "+84975337071",
          url: `${baseUrl}/`
        }
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
    <section class="seo-hero"><div class="container"><div class="seo-hero-content"><div class="breadcrumb"><a href="index.html">Trang chủ</a><span>/</span><span>${page.breadcrumb}</span></div><span class="seo-eyebrow">${page.eyebrow}</span><h1>${page.h1}</h1><p>${page.intro}</p><div class="seo-actions"><a href="tel:${phoneHref}" class="btn btn-primary">Gọi tư vấn</a><a href="index.html#contact" class="btn btn-outline">Nhận báo giá</a></div><div class="seo-pill-links">${page.links.map((href) => `<a href="${href}">${extraLinks[href] ?? href.replace(".html", "")}</a>`).join("")}</div></div></div></section>
    <section class="seo-section"><div class="container seo-grid">${page.sections.map(([title, items]) => `<article class="seo-card"><h2>${title}</h2>${list(items)}</article>`).join("")}</div></section>
    <section class="seo-section alt"><div class="container seo-copy"><h2>${page.copyTitle}</h2><p>${page.copy}</p><p>Khách hàng có thể gửi ảnh hiện trạng, kích thước sơ bộ và khu vực thi công để được tư vấn phương án trước khi khảo sát trực tiếp.</p></div></section>
  </main>
</body>
</html>
`;
}

for (const page of pages) {
  fs.writeFileSync(path.join(root, page.slug), pageHtml(page), "utf8");
}

const htmlFiles = fs.readdirSync(root)
  .filter((file) => file.endsWith(".html"))
  .filter((file) => file !== "404.html")
  .sort((a, b) => (a === "index.html" ? -1 : b === "index.html" ? 1 : a.localeCompare(b, "vi")));

const labelBySlug = {
  "index.html": "Trang chủ",
  "bao-gia-cua-cuon.html": "Báo giá cửa cuốn",
  "bao-gia-cua-nhom-kinh.html": "Báo giá cửa nhôm kính",
  "bao-gia-cua-nhom-xingfa.html": "Báo giá cửa nhôm Xingfa",
  "bao-gia-cua-thep.html": "Báo giá cửa thép",
  "bao-gia-kinh-cuong-luc.html": "Báo giá kính cường lực",
  "cabin-tam-kinh.html": "Cabin tắm kính",
  "cau-thang-kinh.html": "Cầu thang kính",
  "cua-cuon.html": "Cửa cuốn",
  "cua-kinh-cuong-luc.html": "Cửa kính cường lực",
  "cua-luoi-chong-muoi.html": "Cửa lưới chống muỗi",
  "cua-nhom-kinh-ban-cong.html": "Cửa nhôm kính ban công",
  "cua-nhom-kinh-chung-cu.html": "Cửa nhôm kính chung cư",
  "cua-nhom-kinh.html": "Cửa nhôm kính",
  "cua-nhom-xingfa-ha-noi.html": "Cửa nhôm Xingfa Hà Nội",
  "cua-thep-cao-cap.html": "Cửa thép cao cấp",
  "cua-thep-van-go-chung-cu.html": "Cửa thép vân gỗ chung cư",
  "cua-thep-van-go-ha-noi.html": "Cửa thép vân gỗ Hà Nội",
  "kinh-nghiem-chon-cua-nhom-kinh.html": "Kinh nghiệm chọn cửa nhôm kính",
  "lap-dat-cua-cuon-ha-noi.html": "Lắp đặt cửa cuốn Hà Nội",
  "lap-dat-cua-luoi-chong-muoi-ha-noi.html": "Lắp đặt cửa lưới chống muỗi Hà Nội",
  "mai-kinh-cuong-luc.html": "Mái kính cường lực",
  "quy-trinh-thi-cong-cua.html": "Quy trình thi công cửa",
  "so-sanh-cua-thep-va-cua-go.html": "So sánh cửa thép và cửa gỗ",
  "sua-chua-cua-nhom-kinh.html": "Sửa chữa cửa nhôm kính",
  "sua-cua-cuon-ha-noi.html": "Sửa cửa cuốn Hà Nội",
  "thi-cong-cua-thep-ha-noi.html": "Thi công cửa thép Hà Nội",
  "thi-cong-kinh-cuong-luc-ha-noi.html": "Thi công kính cường lực Hà Nội",
  "thi-cong-nhom-kinh-bac-ninh.html": "Thi công nhôm kính Bắc Ninh",
  "thi-cong-nhom-kinh-ha-nam.html": "Thi công nhôm kính Hà Nam",
  "thi-cong-nhom-kinh-ha-noi.html": "Thi công nhôm kính Hà Nội",
  "thi-cong-nhom-kinh-hai-phong.html": "Thi công nhôm kính Hải Phòng",
  "thi-cong-nhom-kinh-hung-yen.html": "Thi công nhôm kính Hưng Yên",
  "thi-cong-nhom-kinh-mien-bac.html": "Thi công nhôm kính miền Bắc",
  "thi-cong-nhom-kinh-ninh-binh.html": "Thi công nhôm kính Ninh Bình",
  "thi-cong-nhom-kinh-phu-ly.html": "Thi công nhôm kính Phủ Lý",
  "tu-bep-nhom-gia-go.html": "Tủ bếp nhôm giả gỗ",
  "vach-kinh-van-phong.html": "Vách kính văn phòng",
  "vach-tam-kinh-cuong-luc.html": "Vách tắm kính cường lực"
};

const serviceMap = [
  ["Nhóm báo giá", htmlFiles.filter((f) => f.startsWith("bao-gia"))],
  ["Dịch vụ cửa nhôm kính", htmlFiles.filter((f) => f.includes("nhom") || f.includes("xingfa"))],
  ["Dịch vụ cửa thép, cửa cuốn", htmlFiles.filter((f) => f.includes("cua-thep") || f.includes("cua-cuon"))],
  ["Kính cường lực và hạng mục phụ", htmlFiles.filter((f) => f.includes("kinh") || f.includes("cabin") || f.includes("vach") || f.includes("cau-thang") || f.includes("mai-kinh"))],
  ["Khu vực thi công", htmlFiles.filter((f) => f.startsWith("thi-cong-nhom-kinh"))],
  ["Tư vấn và kinh nghiệm", htmlFiles.filter((f) => f.includes("kinh-nghiem") || f.includes("so-sanh") || f.includes("quy-trinh") || f.includes("sua-"))]
];

const htmlSitemap = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sitemap Dịch Vụ Cửa Nhôm Kính, Cửa Thép, Kính Cường Lực | NK Door</title>
  <meta name="description" content="Danh sách đầy đủ các trang dịch vụ, báo giá, khu vực thi công và tư vấn của NK Door tại Hà Nội, Hưng Yên, Hà Nam, Phủ Lý và miền Bắc.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${baseUrl}/site-map.html">
  <link rel="stylesheet" href="style.css">
</head>
<body class="seo-page">
  ${header()}
  <main>
    <section class="seo-hero"><div class="container"><div class="seo-hero-content"><div class="breadcrumb"><a href="index.html">Trang chủ</a><span>/</span><span>Sitemap</span></div><span class="seo-eyebrow">Sitemap</span><h1>Danh Sách Trang Dịch Vụ NK Door</h1><p>Tổng hợp các trang báo giá, dịch vụ, khu vực thi công và tư vấn để khách hàng dễ tìm đúng nhu cầu. Trang này cũng giúp công cụ tìm kiếm đi sâu vào cấu trúc nội dung của website.</p></div></div></section>
    <section class="seo-section"><div class="container seo-grid">${serviceMap.map(([title, files]) => `<article class="seo-card"><h2>${title}</h2><ul>${[...new Set(files)].map((file) => `<li><a href="${file}">${labelBySlug[file] ?? file.replace(".html", "")}</a></li>`).join("")}</ul></article>`).join("")}</div></section>
  </main>
</body>
</html>
`;
fs.writeFileSync(path.join(root, "site-map.html"), htmlSitemap, "utf8");

const sitemapFiles = fs.readdirSync(root)
  .filter((file) => file.endsWith(".html"))
  .filter((file) => file !== "404.html")
  .sort((a, b) => (a === "index.html" ? -1 : b === "index.html" ? 1 : a.localeCompare(b, "vi")));

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapFiles.map((file) => {
  const loc = file === "index.html" ? `${baseUrl}/` : `${baseUrl}/${file}`;
  const priority = file === "index.html" ? "1.0" : file.startsWith("bao-gia") || file.includes("ha-noi") ? "0.9" : "0.85";
  const freq = file.includes("kinh-nghiem") || file.includes("so-sanh") || file === "site-map.html" ? "monthly" : "weekly";
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
fs.writeFileSync(path.join(root, "sitemap.txt"), sitemapFiles.map((file) => file === "index.html" ? `${baseUrl}/` : `${baseUrl}/${file}`).join("\n") + "\n", "utf8");

let index = fs.readFileSync(path.join(root, "index.html"), "utf8");
const newCards = `
        <a class="seo-card seo-card-link reveal delay-1" href="cua-nhom-xingfa-ha-noi.html">
          <h3>Cửa nhôm Xingfa Hà Nội</h3>
          <p>Trang chuyên sâu cho khách tìm cửa nhôm Xingfa, cửa đi, cửa sổ, ban công và mặt tiền.</p>
        </a>
        <a class="seo-card seo-card-link reveal delay-2" href="bao-gia-cua-nhom-xingfa.html">
          <h3>Báo giá cửa nhôm Xingfa</h3>
          <p>Cách tính giá theo hệ nhôm, kính, phụ kiện, kiểu mở, kích thước và điều kiện thi công.</p>
        </a>
        <a class="seo-card seo-card-link reveal delay-3" href="mai-kinh-cuong-luc.html">
          <h3>Mái kính cường lực</h3>
          <p>Giải pháp mái kính cho giếng trời, sân, ban công, sảnh và mặt tiền nhà phố.</p>
        </a>`;
if (!index.includes("cua-nhom-xingfa-ha-noi.html")) {
  index = index.replace("      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- ============================================================\r\n       FAQ SECTION", `${newCards}\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- ============================================================\r\n       FAQ SECTION`);
}
const serviceFooterAdd = `
            <li><a href="cua-nhom-xingfa-ha-noi.html" class="footer-link">Cửa nhôm Xingfa Hà Nội</a></li>
            <li><a href="bao-gia-cua-nhom-xingfa.html" class="footer-link">Báo giá cửa nhôm Xingfa</a></li>
            <li><a href="mai-kinh-cuong-luc.html" class="footer-link">Mái kính cường lực</a></li>
            <li><a href="vach-tam-kinh-cuong-luc.html" class="footer-link">Vách tắm kính cường lực</a></li>`;
if (!index.includes("bao-gia-cua-nhom-xingfa.html")) {
  index = index.replace('            <li><a href="cabin-tam-kinh.html" class="footer-link">Cabin tắm kính</a></li>', `            <li><a href="cabin-tam-kinh.html" class="footer-link">Cabin tắm kính</a></li>${serviceFooterAdd}`);
}
const quickFooterAdd = `
            <li><a href="sua-cua-cuon-ha-noi.html" class="footer-link">Sửa cửa cuốn Hà Nội</a></li>
            <li><a href="lap-dat-cua-luoi-chong-muoi-ha-noi.html" class="footer-link">Cửa lưới Hà Nội</a></li>
            <li><a href="cua-nhom-kinh-ban-cong.html" class="footer-link">Cửa ban công</a></li>
            <li><a href="cua-thep-van-go-ha-noi.html" class="footer-link">Cửa thép vân gỗ Hà Nội</a></li>
            <li><a href="site-map.html" class="footer-link">Sitemap dịch vụ</a></li>`;
if (!index.includes("site-map.html")) {
  index = index.replace('            <li><a href="so-sanh-cua-thep-va-cua-go.html" class="footer-link">Cửa thép hay cửa gỗ</a></li>', `            <li><a href="so-sanh-cua-thep-va-cua-go.html" class="footer-link">Cửa thép hay cửa gỗ</a></li>${quickFooterAdd}`);
}
fs.writeFileSync(path.join(root, "index.html"), index, "utf8");

console.log(`Generated ${pages.length} SEO pages, sitemap HTML, sitemap XML/TXT with ${sitemapFiles.length} URLs.`);
