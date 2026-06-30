import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const baseUrl = "https://cua-nhom-kinh-mien-bac.netlify.app";
const today = "2026-06-30";
const phone = "0975.337.071";
const phoneHref = "0975337071";
const ogImage = `${baseUrl}/img%20thi%20cong/IMG_1774397594460_1774416357947_1.jpg`;

const pages = [
  {
    slug: "bao-gia-cua-cuon.html",
    title: "Báo Giá Cửa Cuốn Hà Nội, Hưng Yên, Hà Nam | NK Door",
    description: "Tư vấn báo giá cửa cuốn cho nhà phố, gara, cửa hàng và kho nhỏ tại Hà Nội, Hưng Yên, Hà Nam. Báo giá theo kích thước, dòng nan, motor, ray và bộ lưu điện.",
    eyebrow: "Báo giá cửa cuốn",
    h1: "Báo Giá Cửa Cuốn Tại Hà Nội, Hưng Yên, Hà Nam",
    intro: "Báo giá cửa cuốn cần tính đủ kích thước, dòng nan, motor, bộ lưu điện, ray dẫn hướng và điều kiện lắp đặt. NK Door tư vấn cấu hình phù hợp cho nhà phố, gara, cửa hàng và kho nhỏ.",
    cards: [
      ["Cần chốt trước khi báo giá", ["Kích thước rộng x cao của ô cửa.", "Nhu cầu dùng motor, bộ lưu điện, remote và khóa an toàn.", "Vị trí lắp đặt, nguồn điện, mặt bằng và yêu cầu hoàn thiện."]],
      ["Chi phí thường gồm", ["Thân cửa, trục, ray, bộ motor và phụ kiện đi kèm.", "Nhân công lắp đặt, vận chuyển và căn chỉnh vận hành.", "Bảo hành theo cấu hình vật tư và điều kiện sử dụng."]],
      ["Liên kết liên quan", ["lap-dat-cua-cuon-ha-noi.html", "sua-cua-cuon-ha-noi.html", "bao-gia-cua-thep.html"]]
    ]
  },
  {
    slug: "bao-gia-kinh-cuong-luc.html",
    title: "Báo Giá Kính Cường Lực Hà Nội | Cửa Kính, Vách Kính",
    description: "Báo giá kính cường lực cho cửa kính, vách kính, cabin tắm, cầu thang kính và mặt tiền. Tư vấn theo độ dày kính, phụ kiện, vận chuyển và thi công.",
    eyebrow: "Báo giá kính cường lực",
    h1: "Báo Giá Kính Cường Lực, Cửa Kính, Vách Kính",
    intro: "Giá kính cường lực phụ thuộc độ dày kính, kích thước, phụ kiện, vận chuyển và điều kiện lắp đặt. NK Door báo giá theo từng hạng mục để khách dễ so sánh và hạn chế phát sinh.",
    cards: [
      ["Thông tin cần gửi", ["Ảnh hiện trạng và kích thước sơ bộ.", "Vị trí cần làm: cửa kính, vách kính, cabin tắm, lan can hoặc mặt tiền.", "Yêu cầu về độ dày kính, phụ kiện và thời gian thi công."]],
      ["Yếu tố ảnh hưởng giá", ["Độ dày kính, loại kính và số lượng tấm.", "Bản lề, kẹp kính, tay nắm, khóa sàn và phụ kiện inox.", "Điều kiện vận chuyển, nâng hạ và mặt bằng thi công."]],
      ["Liên kết liên quan", ["thi-cong-kinh-cuong-luc-ha-noi.html", "vach-kinh-van-phong.html", "cua-kinh-cuong-luc.html"]]
    ]
  },
  {
    slug: "cabin-tam-kinh.html",
    title: "Cabin Tắm Kính, Vách Tắm Kính Cường Lực | NK Door",
    description: "Thi công cabin tắm kính và vách tắm kính cường lực cho nhà phố, căn hộ, khách sạn nhỏ: kín nước, đẹp, dễ vệ sinh và phù hợp diện tích thực tế.",
    eyebrow: "Vách tắm kính",
    h1: "Thi Công Cabin Tắm Kính, Vách Tắm Kính Cường Lực",
    intro: "Cabin tắm kính giúp khu vệ sinh khô thoáng, hiện đại và dễ vệ sinh. NK Door tư vấn kiểu mở, kính, phụ kiện, gioăng chắn nước và cách lắp đặt theo diện tích thực tế.",
    cards: [
      ["Kiểu cabin phổ biến", ["Cabin tắm kính góc, vách thẳng hoặc vách cố định.", "Cửa kính mở quay hoặc mở lùa theo diện tích phòng tắm.", "Kính cường lực kết hợp phụ kiện inox và gioăng chắn nước."]],
      ["Cần khảo sát kỹ", ["Độ dốc sàn, vị trí thoát nước và mép bậc.", "Kích thước phòng tắm, hướng mở cửa và vị trí thiết bị vệ sinh.", "Tường, sàn, trần và các điểm bắt phụ kiện."]],
      ["Liên kết liên quan", ["vach-tam-kinh-cuong-luc.html", "bao-gia-kinh-cuong-luc.html", "cua-kinh-cuong-luc.html"]]
    ]
  },
  {
    slug: "cau-thang-kinh.html",
    title: "Cầu Thang Kính Cường Lực Hà Nội, Hưng Yên, Hà Nam",
    description: "Thi công cầu thang kính, lan can kính cường lực cho nhà phố, biệt thự và công trình cải tạo. Tư vấn kính, trụ, kẹp, tay vịn và phương án an toàn.",
    eyebrow: "Cầu thang kính",
    h1: "Thi Công Cầu Thang Kính Cường Lực, Lan Can Kính",
    intro: "Cầu thang kính giúp không gian thoáng và hiện đại hơn. NK Door tư vấn kính, trụ, kẹp, tay vịn và cách neo lắp theo hiện trạng cầu thang để đảm bảo an toàn khi sử dụng lâu dài.",
    cards: [
      ["Cấu hình thường dùng", ["Kính cường lực kết hợp trụ inox, kẹp hông hoặc pad kính.", "Tay vịn gỗ, inox hoặc không tay vịn tùy thiết kế.", "Lan can cầu thang, ban công, giếng trời và khoảng thông tầng."]],
      ["Điểm cần kiểm tra", ["Độ chắc của bậc thang, mặt hông và vị trí khoan bắt.", "Chiều cao lan can, khoảng hở và yêu cầu an toàn cho trẻ nhỏ.", "Lối vận chuyển kính và điều kiện nâng hạ tại công trình."]],
      ["Liên kết liên quan", ["mai-kinh-cuong-luc.html", "bao-gia-kinh-cuong-luc.html", "thi-cong-kinh-cuong-luc-ha-noi.html"]]
    ]
  },
  {
    slug: "cua-luoi-chong-muoi.html",
    title: "Cửa Lưới Chống Muỗi Hà Nội, Hưng Yên, Hà Nam | NK Door",
    description: "Lắp đặt cửa lưới chống muỗi dạng lùa, dạng cuốn, dạng mở cho cửa sổ, cửa đi, ban công tại Hà Nội, Hưng Yên, Hà Nam và khu vực lân cận.",
    eyebrow: "Giải pháp chống côn trùng",
    h1: "Lắp Đặt Cửa Lưới Chống Muỗi Cho Nhà Phố, Căn Hộ",
    intro: "Cửa lưới chống muỗi giúp lấy gió tự nhiên và hạn chế muỗi, côn trùng. NK Door tư vấn dạng cuốn, dạng lùa, dạng mở theo từng vị trí cửa và nhu cầu sử dụng.",
    cards: [
      ["Vị trí phù hợp", ["Cửa sổ phòng ngủ, phòng khách và khu bếp.", "Cửa đi ban công, logia, sân sau hoặc cửa phụ.", "Căn hộ, nhà phố, biệt thự và phòng cho thuê."]],
      ["Nên chọn theo", ["Kích thước ô cửa và hướng mở thực tế.", "Tần suất sử dụng, độ bền lưới và khung.", "Mức độ cần lấy gió, lấy sáng và chống côn trùng."]],
      ["Liên kết liên quan", ["bao-gia-cua-luoi-chong-muoi.html", "lap-dat-cua-luoi-chong-muoi-ha-noi.html", "cua-nhom-kinh-chung-cu.html"]]
    ]
  },
  {
    slug: "cua-nhom-kinh-chung-cu.html",
    title: "Cửa Nhôm Kính Chung Cư, Ban Công, Logia | NK Door",
    description: "Tư vấn cửa nhôm kính chung cư cho ban công, logia, cửa sổ và cửa phòng: kín nước, vận hành nhẹ, phù hợp quy định tòa nhà.",
    eyebrow: "Giải pháp cho căn hộ",
    h1: "Cửa Nhôm Kính Chung Cư Cho Ban Công, Logia, Cửa Sổ",
    intro: "Căn hộ chung cư cần cửa nhôm kính kín nước, an toàn, vận hành nhẹ và phù hợp quy định tòa nhà. NK Door tư vấn theo hiện trạng ban công, logia và cửa sổ.",
    cards: [
      ["Hạng mục thường làm", ["Cửa lùa ban công, cửa sổ nhôm kính và vách kính logia.", "Thay cửa cũ bị hở nước, hở gió hoặc đóng mở nặng.", "Căn chỉnh, thay phụ kiện, gioăng, khóa và bánh xe."]],
      ["Cần lưu ý", ["Quy định vận chuyển, thi công và thời gian làm việc của tòa nhà.", "Khả năng chống hắt nước, kín gió và thoát nước ray.", "Màu nhôm, kính và kiểu mở phù hợp mặt ngoài căn hộ."]],
      ["Liên kết liên quan", ["cua-nhom-kinh-ban-cong.html", "chong-tham-cua-nhom-kinh-ban-cong.html", "sua-chua-cua-nhom-kinh.html"]]
    ]
  },
  {
    slug: "cua-thep-van-go-chung-cu.html",
    title: "Cửa Thép Vân Gỗ Chung Cư, Cửa Căn Hộ | NK Door",
    description: "Tư vấn cửa thép vân gỗ cho chung cư và căn hộ: chắc chắn, màu sắc hài hòa nội thất, vận hành êm và phù hợp kích thước ô chờ.",
    eyebrow: "Cửa căn hộ an toàn",
    h1: "Cửa Thép Vân Gỗ Chung Cư, Cửa Căn Hộ",
    intro: "Cửa thép vân gỗ cho căn hộ cần đảm bảo độ chắc, đóng mở êm, màu sắc hài hòa nội thất và phụ kiện an toàn. NK Door tư vấn theo kích thước ô chờ thực tế.",
    cards: [
      ["Phù hợp với", ["Cửa chính căn hộ chung cư, phòng trọ cao cấp và nhà phố.", "Công trình cần cửa bền hơn gỗ tự nhiên, hạn chế cong vênh và mối mọt.", "Khách muốn vẻ ngoài giống gỗ nhưng dễ kiểm soát chi phí."]],
      ["Khi báo giá cần có", ["Kích thước ô chờ, độ dày tường và hướng mở.", "Màu vân gỗ, kiểu huỳnh, khóa và phụ kiện.", "Yêu cầu tháo dỡ cửa cũ, vận chuyển và hoàn thiện nẹp."]],
      ["Liên kết liên quan", ["bao-gia-cua-thep.html", "cua-thep-van-go-ha-noi.html", "so-sanh-cua-thep-va-cua-go.html"]]
    ]
  },
  {
    slug: "kinh-nghiem-chon-cua-nhom-kinh.html",
    title: "Kinh Nghiệm Chọn Cửa Nhôm Kính Bền, Kín, Đẹp",
    description: "Kinh nghiệm chọn cửa nhôm kính cho nhà phố, chung cư, văn phòng: hệ nhôm, kính, phụ kiện, độ kín nước, cách âm và kỹ thuật lắp đặt.",
    eyebrow: "Kinh nghiệm chọn cửa",
    h1: "Kinh Nghiệm Chọn Cửa Nhôm Kính Bền, Kín, Đẹp",
    intro: "Chọn cửa nhôm kính không nên chỉ nhìn màu mã hoặc giá mét vuông. Cần cân bằng hệ nhôm, kính, phụ kiện, độ kín nước, cách âm và kỹ thuật lắp đặt.",
    cards: [
      ["Nên kiểm tra", ["Độ dày và độ cứng của thanh nhôm.", "Loại kính, độ dày kính và nhu cầu an toàn.", "Phụ kiện, gioăng, keo và khả năng ép kín cánh."]],
      ["Dấu hiệu phương án tốt", ["Tư vấn rõ cấu hình theo từng vị trí cửa.", "Báo giá tách bạch vật tư, phụ kiện, nhân công và bảo hành.", "Có phương án xử lý chống nước, chống rung và vận hành lâu dài."]],
      ["Liên kết liên quan", ["cua-nhom-kinh.html", "bao-gia-cua-nhom-kinh.html", "phu-kien-cua-nhom-kinh.html"]]
    ]
  },
  {
    slug: "lap-dat-cua-cuon-ha-noi.html",
    title: "Lắp Đặt Cửa Cuốn Hà Nội | Cửa Cuốn Nhà Phố, Cửa Hàng",
    description: "Lắp đặt cửa cuốn Hà Nội cho nhà phố, gara, cửa hàng và kho nhỏ. Tư vấn motor, ray, nan cửa, bộ lưu điện và phương án vận hành an toàn.",
    eyebrow: "Dịch vụ cửa cuốn Hà Nội",
    h1: "Lắp Đặt Cửa Cuốn Tại Hà Nội",
    intro: "NK Door nhận tư vấn, khảo sát và lắp đặt cửa cuốn cho nhà phố, gara, cửa hàng, mặt bằng kinh doanh và kho nhỏ tại Hà Nội. Ưu tiên độ an toàn và vận hành ổn định.",
    cards: [
      ["Quy trình làm việc", ["Tiếp nhận kích thước, ảnh hiện trạng và nhu cầu sử dụng.", "Tư vấn dòng nan, motor, ray và bộ lưu điện phù hợp.", "Lắp đặt, căn chỉnh, hướng dẫn vận hành và bàn giao bảo hành."]],
      ["Nên khảo sát khi", ["Ô cửa lớn, mặt bằng hẹp hoặc cần thi công nhanh.", "Cần thay cửa cũ, tháo dỡ hoặc cải tạo phần tường.", "Cửa dùng nhiều lần trong ngày, cần motor và phụ kiện tốt hơn."]],
      ["Liên kết liên quan", ["bao-gia-cua-cuon.html", "sua-cua-cuon-ha-noi.html", "cua-cuon.html"]]
    ]
  },
  {
    slug: "so-sanh-cua-thep-va-cua-go.html",
    title: "So Sánh Cửa Thép Vân Gỗ Và Cửa Gỗ Tự Nhiên",
    description: "So sánh cửa thép vân gỗ và cửa gỗ tự nhiên về độ bền, chống cong vênh, mối mọt, chi phí, thẩm mỹ và vị trí nên sử dụng.",
    eyebrow: "Tư vấn chọn cửa thép",
    h1: "So Sánh Cửa Thép Vân Gỗ Và Cửa Gỗ Tự Nhiên",
    intro: "Cửa thép vân gỗ và cửa gỗ tự nhiên đều có ưu điểm riêng. Nếu cần độ ổn định, chống mối mọt và chi phí dễ kiểm soát, cửa thép vân gỗ là phương án đáng cân nhắc.",
    cards: [
      ["Cửa thép vân gỗ", ["Ổn định hơn trong môi trường ẩm, hạn chế cong vênh.", "Màu vân gỗ đa dạng, dễ đồng bộ nhiều vị trí.", "Phù hợp căn hộ, nhà phố, phòng ngủ và cửa chính."]],
      ["Cửa gỗ tự nhiên", ["Có cảm giác vật liệu thật và giá trị thẩm mỹ riêng.", "Cần kiểm soát độ ẩm, mối mọt và bảo dưỡng tốt.", "Chi phí thường biến động theo loại gỗ và độ hoàn thiện."]],
      ["Liên kết liên quan", ["cua-thep-van-go-chung-cu.html", "bao-gia-cua-thep.html", "cua-thep-van-go-ha-noi.html"]]
    ]
  },
  {
    slug: "sua-chua-cua-nhom-kinh.html",
    title: "Sửa Chữa Cửa Nhôm Kính, Cửa Kính, Cửa Cuốn | NK Door",
    description: "Sửa chữa cửa nhôm kính, cửa kính, cửa cuốn: căn chỉnh cánh, thay khóa, thay bánh xe, xử lý hở nước, hở gió và phụ kiện hỏng.",
    eyebrow: "Sửa chữa và bảo trì",
    h1: "Sửa Chữa Cửa Nhôm Kính, Căn Chỉnh Và Thay Phụ Kiện",
    intro: "Cửa nhôm kính sau thời gian sử dụng có thể bị xệ cánh, kẹt ray, hở nước, hở gió hoặc hỏng khóa. NK Door kiểm tra hiện trạng trước khi tư vấn sửa, thay phụ kiện hoặc thay cửa mới.",
    cards: [
      ["Lỗi thường gặp", ["Cửa lùa nặng, bánh xe mòn, ray bẩn hoặc lệch.", "Cửa mở quay xệ cánh, bản lề yếu, khóa không ăn.", "Gioăng chai cứng, keo lão hóa, hở nước ở chân khung."]],
      ["Cách xử lý", ["Vệ sinh ray, căn chỉnh cánh, thay bánh xe hoặc khóa.", "Bơm keo, thay gioăng và xử lý điểm thấm nước.", "Đề xuất thay mới khi hệ cửa quá yếu hoặc xuống cấp nhiều vị trí."]],
      ["Liên kết liên quan", ["sua-khóa-cua-nhom-kinh.html", "bao-hanh-bao-tri-cua-nhom-kinh.html", "chong-tham-cua-nhom-kinh-ban-cong.html"]]
    ]
  },
  {
    slug: "thi-cong-cua-thep-ha-noi.html",
    title: "Thi Công Cửa Thép Hà Nội | Cửa Thép Vân Gỗ, Cửa Căn Hộ",
    description: "Thi công cửa thép Hà Nội cho căn hộ, nhà phố, phòng ngủ, cửa chính và công trình cải tạo. Tư vấn kích thước, mẫu cửa, màu sắc và phụ kiện.",
    eyebrow: "Cửa thép Hà Nội",
    h1: "Thi Công Cửa Thép Vân Gỗ Tại Hà Nội",
    intro: "Cửa thép vân gỗ phù hợp công trình cần độ bền, dễ kiểm soát chi phí và hạn chế cong vênh. NK Door tư vấn cửa căn hộ, cửa phòng, cửa chính nhà phố và công trình cải tạo tại Hà Nội.",
    cards: [
      ["Hạng mục nhận làm", ["Cửa thép vân gỗ căn hộ, cửa chính nhà phố và cửa phòng.", "Thay cửa cũ, hoàn thiện nẹp, khóa và phụ kiện.", "Tư vấn màu sắc, kiểu cánh và hướng mở theo nội thất."]],
      ["Cần đo chính xác", ["Rộng x cao ô chờ, độ dày tường và cao độ nền.", "Hướng mở, vị trí khóa và yêu cầu chống ồn hoặc an toàn.", "Điều kiện vận chuyển, thang máy và thời gian thi công."]],
      ["Liên kết liên quan", ["bao-gia-cua-thep.html", "cua-thep-van-go-chung-cu.html", "so-sanh-cua-thep-va-cua-go.html"]]
    ]
  },
  {
    slug: "thi-cong-kinh-cuong-luc-ha-noi.html",
    title: "Thi Công Kính Cường Lực Hà Nội | Cửa Kính, Vách Kính",
    description: "Thi công kính cường lực Hà Nội cho cửa kính, vách kính, cabin tắm, lan can, cầu thang, mái kính và mặt tiền showroom.",
    eyebrow: "Dịch vụ kính cường lực Hà Nội",
    h1: "Thi Công Kính Cường Lực Tại Hà Nội",
    intro: "NK Door thi công cửa kính cường lực, vách kính văn phòng, cabin tắm kính, lan can kính và các hạng mục kính cường lực cho nhà phố, showroom, văn phòng tại Hà Nội.",
    cards: [
      ["Hạng mục chính", ["Cửa kính cường lực, vách kính văn phòng và mặt tiền kính.", "Cabin tắm kính, vách tắm kính, lan can và cầu thang kính.", "Mái kính, kính an toàn và các hạng mục kính cải tạo."]],
      ["Tư vấn theo thực tế", ["Kích thước tấm kính và độ dày phù hợp.", "Phụ kiện, bản lề, kẹp kính, tay nắm và khóa.", "Điều kiện vận chuyển, nâng hạ và an toàn thi công."]],
      ["Liên kết liên quan", ["bao-gia-kinh-cuong-luc.html", "vach-kinh-van-phong.html", "cabin-tam-kinh.html"]]
    ]
  },
  {
    slug: "thi-cong-nhom-kinh-bac-ninh.html",
    title: "Thi Công Nhôm Kính Bắc Ninh | Cửa Thép, Cửa Kính",
    description: "Thi công nhôm kính Bắc Ninh cho nhà phố, cửa hàng, văn phòng, xưởng nhỏ và công trình cải tạo. Tư vấn cửa nhôm kính, cửa thép, cửa cuốn, kính cường lực.",
    eyebrow: "Khu vực Bắc Ninh",
    h1: "Thi Công Nhôm Kính, Cửa Thép Tại Bắc Ninh",
    intro: "NK Door mở rộng thi công cửa nhôm kính, cửa thép, cửa cuốn và kính cường lực tại Bắc Ninh, phù hợp nhà phố, cửa hàng, văn phòng và công trình cải tạo.",
    cards: [
      ["Dịch vụ chính", ["Cửa nhôm kính, cửa sổ, cửa lùa và cửa ban công.", "Cửa kính cường lực, vách kính, cabin tắm kính.", "Cửa cuốn, cửa thép vân gỗ và sửa chữa cửa."]],
      ["Khu vực phù hợp", ["Nhà phố, cửa hàng, showroom và văn phòng nhỏ.", "Công trình cải tạo, thay cửa cũ hoặc bổ sung hạng mục mới.", "Khu vực Bắc Ninh và các điểm kết nối Hà Nội, Hưng Yên."]],
      ["Liên kết liên quan", ["thi-cong-nhom-kinh-ha-noi.html", "thi-cong-nhom-kinh-hung-yen.html", "bao-gia-cua-nhom-kinh.html"]]
    ]
  },
  {
    slug: "thi-cong-nhom-kinh-hai-phong.html",
    title: "Thi Công Nhôm Kính Hải Phòng | Cửa Thép, Cửa Cuốn",
    description: "Thi công nhôm kính Hải Phòng, cửa thép, cửa cuốn và kính cường lực theo lịch khảo sát. Phù hợp nhà phố, văn phòng, cửa hàng và công trình cải tạo.",
    eyebrow: "Khu vực Hải Phòng",
    h1: "Thi Công Nhôm Kính, Cửa Thép Tại Hải Phòng",
    intro: "NK Door nhận tư vấn và triển khai cửa nhôm kính, cửa thép, cửa cuốn, kính cường lực tại Hải Phòng theo lịch khảo sát và quy mô công trình.",
    cards: [
      ["Hạng mục thi công", ["Cửa nhôm kính, cửa sổ, cửa đi và vách nhôm kính.", "Cửa cuốn, cửa thép vân gỗ, cửa kính cường lực.", "Vách kính văn phòng, cabin tắm kính và sửa chữa cửa."]],
      ["Cần gửi trước", ["Ảnh hiện trạng, kích thước sơ bộ và địa chỉ công trình.", "Yêu cầu về tiến độ, vật tư và mức ngân sách.", "Thông tin vận chuyển, mặt bằng và thời gian có thể khảo sát."]],
      ["Liên kết liên quan", ["thi-cong-nhom-kinh-mien-bac.html", "cua-nhom-kinh.html", "bao-gia-cua-nhom-kinh.html"]]
    ]
  },
  {
    slug: "thi-cong-nhom-kinh-ninh-binh.html",
    title: "Thi Công Nhôm Kính Ninh Bình | Phủ Lý, Hà Nam Lân Cận",
    description: "Thi công nhôm kính Ninh Bình và khu vực lân cận: cửa nhôm kính, cửa thép, cửa cuốn, kính cường lực, vách kính, cabin tắm.",
    eyebrow: "Khu vực Ninh Bình - Phủ Lý",
    h1: "Thi Công Nhôm Kính, Cửa Thép Tại Ninh Bình",
    intro: "NK Door phục vụ nhu cầu cửa nhôm kính, cửa thép, cửa cuốn và kính cường lực tại Ninh Bình, Phủ Lý, Hà Nam lân cận và các khu vực kết nối miền Bắc.",
    cards: [
      ["Dịch vụ nhận làm", ["Cửa nhôm kính, cửa sổ, cửa lùa và cửa ban công.", "Cửa thép vân gỗ, cửa cuốn, cửa kính cường lực.", "Vách kính văn phòng, cabin tắm kính, cầu thang kính."]],
      ["Tư vấn báo giá", ["Gửi ảnh hiện trạng và kích thước sơ bộ để nhận tư vấn trước.", "Khảo sát trực tiếp với công trình cần chốt kích thước chính xác.", "Báo giá theo vật tư, phụ kiện, nhân công và vận chuyển."]],
      ["Liên kết liên quan", ["thi-cong-nhom-kinh-ha-nam.html", "thi-cong-nhom-kinh-phu-ly.html", "thi-cong-nhom-kinh-mien-bac.html"]]
    ]
  },
  {
    slug: "tu-bep-nhom-gia-go.html",
    title: "Tủ Bếp Nhôm Giả Gỗ Hà Nội, Hưng Yên, Hà Nam | NK Door",
    description: "Thi công tủ bếp nhôm giả gỗ chống nước, dễ vệ sinh, hạn chế mối mọt cho căn hộ, nhà phố và công trình cải tạo.",
    eyebrow: "Tủ bếp nhôm bền nước",
    h1: "Thi Công Tủ Bếp Nhôm Giả Gỗ Chống Nước",
    intro: "Tủ bếp nhôm giả gỗ phù hợp gia đình cần vật liệu bền nước, dễ vệ sinh và hạn chế mối mọt. NK Door đo đạc, tư vấn bố trí khoang tủ theo kích thước bếp thực tế.",
    cards: [
      ["Ưu điểm chính", ["Khung nhôm bền nước, dễ lau chùi và phù hợp khu bếp ẩm.", "Bề mặt giả gỗ tạo cảm giác ấm hơn so với nhôm màu trơn.", "Hạn chế mối mọt, cong vênh và phù hợp công trình cải tạo."]],
      ["Cần đo trước", ["Chiều dài bếp, vị trí chậu rửa, bếp nấu và tủ lạnh.", "Chiều cao tủ trên, tủ dưới và khu vực hút mùi.", "Nhu cầu ngăn kéo, khoang lưu trữ và phụ kiện bếp."]],
      ["Liên kết liên quan", ["cua-nhom-kinh-nha-ve-sinh.html", "bao-gia-cua-nhom-kinh.html", "thi-cong-nhom-kinh-ha-noi.html"]]
    ]
  },
  {
    slug: "vach-kinh-van-phong.html",
    title: "Vách Kính Văn Phòng, Vách Nhôm Kính | NK Door",
    description: "Thi công vách kính văn phòng, vách nhôm kính, cửa kính và phòng họp kính cho văn phòng, showroom, cửa hàng và mặt bằng kinh doanh.",
    eyebrow: "Không gian văn phòng",
    h1: "Thi Công Vách Kính Văn Phòng, Vách Nhôm Kính",
    intro: "Vách kính văn phòng giúp chia không gian mà vẫn giữ ánh sáng và cảm giác mở. NK Door tư vấn vách kính, cửa kính, khung nhôm và phụ kiện theo mặt bằng thực tế.",
    cards: [
      ["Ứng dụng phổ biến", ["Phòng họp, phòng giám đốc, khu làm việc và showroom.", "Vách kính cố định kết hợp cửa kính mở quay hoặc cửa lùa.", "Mặt bằng cần chia khu vực nhưng vẫn giữ ánh sáng tự nhiên."]],
      ["Cần tính kỹ", ["Độ dày kính, khung nhôm, phụ kiện và cách âm tương đối.", "Cao độ trần, nền, vách hiện hữu và điều kiện bắt khung.", "Hướng mở cửa, lối đi và an toàn khi sử dụng."]],
      ["Liên kết liên quan", ["vach-kinh-cua-hang-showroom.html", "thi-cong-kinh-cuong-luc-ha-noi.html", "bao-gia-kinh-cuong-luc.html"]]
    ]
  }
];

const labels = {
  "bao-gia-cua-luoi-chong-muoi.html": "Báo giá cửa lưới chống muỗi",
  "bao-gia-cua-nhom-kinh.html": "Báo giá cửa nhôm kính",
  "bao-gia-cua-thep.html": "Báo giá cửa thép",
  "bao-gia-kinh-cuong-luc.html": "Báo giá kính cường lực",
  "bao-hanh-bao-tri-cua-nhom-kinh.html": "Bảo hành, bảo trì cửa nhôm kính",
  "cabin-tam-kinh.html": "Cabin tắm kính",
  "chong-tham-cua-nhom-kinh-ban-cong.html": "Chống thấm cửa ban công",
  "cua-cuon.html": "Cửa cuốn",
  "cua-kinh-cuong-luc.html": "Cửa kính cường lực",
  "cua-nhom-kinh-ban-cong.html": "Cửa nhôm kính ban công",
  "cua-nhom-kinh-chung-cu.html": "Cửa nhôm kính chung cư",
  "cua-nhom-kinh-nha-ve-sinh.html": "Cửa nhôm kính nhà vệ sinh",
  "cua-nhom-kinh.html": "Cửa nhôm kính",
  "cua-thep-van-go-chung-cu.html": "Cửa thép vân gỗ chung cư",
  "cua-thep-van-go-ha-noi.html": "Cửa thép vân gỗ Hà Nội",
  "lap-dat-cua-cuon-ha-noi.html": "Lắp đặt cửa cuốn Hà Nội",
  "lap-dat-cua-luoi-chong-muoi-ha-noi.html": "Lắp đặt cửa lưới chống muỗi",
  "mai-kinh-cuong-luc.html": "Mái kính cường lực",
  "phu-kien-cua-nhom-kinh.html": "Phụ kiện cửa nhôm kính",
  "so-sanh-cua-thep-va-cua-go.html": "So sánh cửa thép và cửa gỗ",
  "sua-cua-cuon-ha-noi.html": "Sửa cửa cuốn Hà Nội",
  "sua-khóa-cua-nhom-kinh.html": "Sửa khóa cửa nhôm kính",
  "thi-cong-kinh-cuong-luc-ha-noi.html": "Thi công kính cường lực Hà Nội",
  "thi-cong-nhom-kinh-ha-nam.html": "Nhôm kính Hà Nam",
  "thi-cong-nhom-kinh-ha-noi.html": "Nhôm kính Hà Nội",
  "thi-cong-nhom-kinh-hung-yen.html": "Nhôm kính Hưng Yên",
  "thi-cong-nhom-kinh-mien-bac.html": "Nhôm kính miền Bắc",
  "thi-cong-nhom-kinh-phu-ly.html": "Nhôm kính Phủ Lý",
  "vach-kinh-cua-hang-showroom.html": "Vách kính showroom",
  "vach-kinh-van-phong.html": "Vách kính văn phòng",
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
      areaServed: ["Hà Nội", "Hưng Yên", "Hà Nam", "Phủ Lý", "Bắc Ninh", "Hải Phòng", "Ninh Bình", "Miền Bắc"],
      provider: { "@type": "LocalBusiness", name: "NK Door", telephone: "+84975337071", url: `${baseUrl}/` },
      url: `${baseUrl}/${page.slug}`
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Có thể báo giá qua ảnh không?",
          acceptedAnswer: { "@type": "Answer", text: "Có thể báo giá sơ bộ qua ảnh, kích thước và địa chỉ khu vực. Với công trình cần độ chính xác cao, NK Door sẽ tư vấn khảo sát trực tiếp trước khi chốt vật tư." }
        },
        {
          "@type": "Question",
          name: "Bao lâu có thể thi công?",
          acceptedAnswer: { "@type": "Answer", text: "Thời gian phụ thuộc hạng mục, số lượng, vật tư và điều kiện mặt bằng. Công trình dân dụng nhỏ thường có thể triển khai nhanh sau khi chốt kích thước và vật tư." }
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
    <section class="seo-section alt"><div class="container seo-copy"><h2>Tư vấn rõ vật tư trước khi chốt giá</h2><p>NK Door ưu tiên báo giá minh bạch theo từng hạng mục: vật tư, phụ kiện, nhân công, vận chuyển và bảo hành. Khách hàng có thể gửi ảnh hiện trạng để nhận tư vấn sơ bộ trước khi hẹn lịch khảo sát.</p><div class="seo-pill-links"><a href="quy-trinh-thi-cong-cua.html">Quy trình thi công</a><a href="index.html#contact">Liên hệ khảo sát</a><a href="bao-gia-cua-nhom-kinh.html">Báo giá tham khảo</a></div></div></section>
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
  const priority = file === "index.html" ? "1.0" : file.startsWith("bao-gia") || file.includes("ha-noi") || file.includes("ha-nam") || file.includes("hung-yen") ? "0.9" : "0.85";
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

const auditPattern = /\b(Cua|Bao Gia|Thi Cong|Kinh Nghiem|So Sanh|Lap Dat|Sua Chua|Vach|Cau Thang|Tu Bep|Trang chu|Dich vu|Goi tu van|Gui yeu cau|Khu vuc|Lien he|Nha Pho|Cua Hang)\b/;
const remaining = [];
for (const file of htmlFiles) {
  const content = fs.readFileSync(path.join(root, file), "utf8");
  const title = content.match(/<title>([^<]+)<\/title>/)?.[1] ?? "";
  const h1 = content.match(/<h1[^>]*>(.*?)<\/h1>/s)?.[1]?.replace(/<[^>]+>/g, "") ?? "";
  if (auditPattern.test(title) || auditPattern.test(h1)) remaining.push({ file, title, h1 });
}

console.log(JSON.stringify({ rewrittenPages: pages.length, totalUrls: htmlFiles.length, remainingTitleH1Issues: remaining }, null, 2));
