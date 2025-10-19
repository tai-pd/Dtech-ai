// Updated navigation categories matching dtech.vn structure

export const companyInfo = {
  name: "Công ty Cổ phần Kỹ thuật DTech",
  slogan: "10 năm kinh nghiệm cung cấp thiết bị điện công nghiệp chính hãng",
  phone: "(024) 665.135.00",
  hotline: "0904 592 583",
  email: "sales@dtech.vn",
  address: "Số 3/147A Tân Mai, Hoàng Mai, Hà Nội",
  description: "Hơn 10.000 nhà máy, doanh nghiệp đã tin tưởng sử dụng sản phẩm, dịch vụ tại DTech. Chúng tôi cam kết mang đến cho doanh nghiệp giải pháp mua hàng: Nhanh chóng, Dễ dàng, Tin cậy"
};

export const navigationCategories = [
  {
    id: 1,
    name: "Thiết bị đóng cắt",
    slug: "thiet-bi-dong-cat",
    description: "MCCB, MCB, ELCB, Contactor, Relay nhiệt",
    subcategories: [
      { id: 11, name: "Thiết bị điện LS", slug: "thiet-bi-dien-ls" },
      { id: 12, name: "Thiết bị điện Mitsubishi", slug: "thiet-bi-dien-mitsubishi" },
      { id: 13, name: "Thiết bị điện Schneider", slug: "thiet-bi-dien-schneider" },
      { id: 14, name: "Thiết bị điện Hyundai", slug: "thiet-bi-dien-hyundai" },
      { id: 15, name: "Thiết bị điện CHINT", slug: "thiet-bi-dien-chint" },
      { id: 16, name: "Thiết bị điện Fuji", slug: "thiet-bi-dien-fuji" },
      { id: 17, name: "Thiết bị điện ABB", slug: "thiet-bi-dien-abb" },
      { id: 18, name: "Thiết bị điện Siemens", slug: "thiet-bi-dien-siemens" }
    ]
  },
  {
    id: 2,
    name: "Biến tần - Inverter",
    slug: "bien-tan-inverter",
    description: "Biến tần điều khiển tốc độ động cơ",
    subcategories: [
      { id: 21, name: "Biến tần INVT", slug: "bien-tan-invt" },
      { id: 22, name: "Biến tần Fuji", slug: "bien-tan-fuji" },
      { id: 23, name: "Biến tần LS", slug: "bien-tan-ls" },
      { id: 24, name: "Biến tần Mitsubishi", slug: "bien-tan-mitsubishi" },
      { id: 25, name: "Biến tần Schneider", slug: "bien-tan-schneider" },
      { id: 26, name: "Biến tần Siemens", slug: "bien-tan-siemens" },
      { id: 27, name: "Biến tần ABB", slug: "bien-tan-abb" }
    ]
  },
  {
    id: 3,
    name: "Thiết bị bù CSPK",
    slug: "thiet-bi-bu-cspk",
    description: "Tụ bù, Tủ bù công suất phản kháng",
    subcategories: [
      { id: 31, name: "Tụ bù hạ thế", slug: "tu-bu-ha-the" },
      { id: 32, name: "Tụ bù SAMSUNG - Hàn Quốc", slug: "tu-bu-samsung" },
      { id: 33, name: "Tụ bù EPCOS - Ấn Độ", slug: "tu-bu-epcos" },
      { id: 34, name: "Tụ bù MIKRO - Malaysia", slug: "tu-bu-mikro" },
      { id: 35, name: "Tủ bù tự động", slug: "tu-bu-tu-dong" },
      { id: 36, name: "Controller tụ bù", slug: "controller-tu-bu" }
    ]
  },
  {
    id: 4,
    name: "Đo đếm - Giám sát - Điều khiển",
    slug: "do-dem-giam-sat-dieu-khien",
    description: "Đồng hồ đo, thiết bị giám sát, điều khiển",
    subcategories: [
      { id: 41, name: "Thiết bị đo IDEC", slug: "thiet-bi-do-idec" },
      { id: 42, name: "Thiết bị đo EMIC", slug: "thiet-bi-do-emic" },
      { id: 43, name: "Thiết bị đo Siemens", slug: "thiet-bi-do-siemens" },
      { id: 44, name: "Thiết bị đo Mikro", slug: "thiet-bi-do-mikro" },
      { id: 45, name: "PLC & HMI", slug: "plc-hmi" },
      { id: 46, name: "Biến dòng - Biến áp", slug: "bien-dong-bien-ap" }
    ]
  },
  {
    id: 5,
    name: "Vỏ tủ - Phụ kiện - Dây cáp",
    slug: "vo-tu-phu-kien-day-cap",
    description: "Vỏ tủ điện, thanh cái, dây cáp điện",
    subcategories: [
      { id: 51, name: "Vỏ tủ điện", slug: "vo-tu-dien" },
      { id: 52, name: "Thanh cái đồng", slug: "thanh-cai-dong" },
      { id: 53, name: "Dây cáp điện", slug: "day-cap-dien" },
      { id: 54, name: "Đầu cốt cáp", slug: "dau-cot-cap" },
      { id: 55, name: "Phụ kiện tủ điện", slug: "phu-kien-tu-dien" }
    ]
  },
  {
    id: 6,
    name: "Thiết kế và Lắp đặt Tủ điện",
    slug: "thiet-ke-lap-dat-tu-dien",
    description: "Dịch vụ thiết kế, lắp đặt tủ điện công nghiệp",
    subcategories: [
      { id: 61, name: "Tủ điện phân phối", slug: "tu-dien-phan-phoi" },
      { id: 62, name: "Tủ điều khiển động cơ", slug: "tu-dieu-khien-dong-co" },
      { id: 63, name: "Tủ điện ATS", slug: "tu-dien-ats" },
      { id: 64, name: "Tủ điện chiếu sáng", slug: "tu-dien-chieu-sang" },
      { id: 65, name: "Tủ điện bù công suất", slug: "tu-dien-bu-cong-suat" }
    ]
  },
  {
    id: 7,
    name: "Tư vấn Giải pháp",
    slug: "tu-van-giai-phap",
    description: "Tư vấn giải pháp điện công nghiệp",
    subcategories: [
      { id: 71, name: "Tư vấn giải pháp bù công suất", slug: "tu-van-bu-cong-suat" },
      { id: 72, name: "Thiết kế hệ thống điện", slug: "thiet-ke-he-thong-dien" },
      { id: 73, name: "Lắp đặt và bảo trì", slug: "lap-dat-bao-tri" },
      { id: 74, name: "Đào tạo kỹ thuật", slug: "dao-tao-ky-thuat" }
    ]
  }
];

export const services = [
  {
    id: 1,
    icon: "Zap",
    title: "Nhanh chóng",
    description: "Tiết kiệm thời gian mua hàng, tư vấn giải pháp tối ưu, hỗ trợ kỹ thuật tận tình"
  },
  {
    id: 2,
    icon: "ThumbsUp",
    title: "Dễ dàng",
    description: "Quy trình đặt hàng đơn giản, giao hàng nhanh chóng, thanh toán linh hoạt"
  },
  {
    id: 3,
    icon: "Shield",
    title: "Tin cậy",
    description: "Sản phẩm chính hãng 100%, bảo hành đầy đủ, hỗ trợ kỹ thuật sau bán hàng"
  }
];

export const brands = [
  "LS Electric",
  "Mitsubishi Electric",
  "Schneider Electric",
  "ABB",
  "Siemens",
  "Fuji Electric",
  "Hyundai",
  "CHINT",
  "IDEC",
  "EMIC",
  "Omron",
  "Samsung",
  "EPCOS"
];

// Import this for product details
export { featuredProducts } from './productData';
