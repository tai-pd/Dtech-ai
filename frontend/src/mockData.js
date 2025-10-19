// Enhanced mock data with detailed product information

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
    name: "Thiết bị động cắt",
    slug: "thiet-bi-dong-cat",
    subcategories: [
      { id: 11, name: "Thiết bị điện LS", slug: "thiet-bi-dien-ls" },
      { id: 12, name: "Thiết bị điện Mitsubishi", slug: "thiet-bi-dien-mitsubishi" },
      { id: 13, name: "Thiết bị điện Schneider", slug: "thiet-bi-dien-schneider" },
      { id: 14, name: "Thiết bị điện Hyundai", slug: "thiet-bi-dien-hyundai" },
      { id: 15, name: "Thiết bị điện CHINT", slug: "thiet-bi-dien-chint" },
      { id: 16, name: "Thiết bị điện Fuji", slug: "thiet-bi-dien-fuji" }
    ]
  },
  {
    id: 2,
    name: "Biến tần - Khởi động mềm",
    slug: "bien-tan-khoi-dong-mem",
    subcategories: [
      { id: 21, name: "Biến tần INVT", slug: "bien-tan-invt" },
      { id: 22, name: "Biến tần Fuji", slug: "bien-tan-fuji" },
      { id: 23, name: "Biến tần LS", slug: "bien-tan-ls" },
      { id: 24, name: "Biến tần Mitsubishi", slug: "bien-tan-mitsubishi" },
      { id: 25, name: "Biến tần Schneider", slug: "bien-tan-schneider" },
      { id: 26, name: "Biến tần Siemens", slug: "bien-tan-siemens" }
    ]
  },
  {
    id: 3,
    name: "Tủ bù CSPK",
    slug: "tu-bu-cspk",
    subcategories: [
      { id: 31, name: "Tụ bù hạ thế", slug: "tu-bu-ha-the" },
      { id: 32, name: "Tụ bù SAMSUNG - Hàn Quốc", slug: "tu-bu-samsung" },
      { id: 33, name: "Tụ bù EPCOS - Ấn Độ", slug: "tu-bu-epcos" },
      { id: 34, name: "Tụ bù MIKRO - Malaysia", slug: "tu-bu-mikro" }
    ]
  },
  {
    id: 4,
    name: "Tủ điện - TMC",
    slug: "tu-dien-tmc",
    subcategories: [
      { id: 41, name: "Tủ điện hạ thế", slug: "tu-dien-ha-the" },
      { id: 42, name: "Tủ điện phân phối", slug: "tu-dien-phan-phoi" },
      { id: 43, name: "Tủ điện ATS", slug: "tu-dien-ats" },
      { id: 44, name: "Tủ điện chiếu sáng", slug: "tu-dien-chieu-sang" }
    ]
  },
  {
    id: 5,
    name: "Thiết bị đo đếm - Giám sát",
    slug: "thiet-bi-do-dem",
    subcategories: [
      { id: 51, name: "Thiết bị điện Siemens", slug: "thiet-bi-do-dem-siemens" },
      { id: 52, name: "Thiết bị điện IDEC", slug: "thiet-bi-do-dem-idec" },
      { id: 53, name: "Thiết bị điện EMIC", slug: "thiet-bi-do-dem-emic" },
      { id: 54, name: "Thiết bị điện Mikro", slug: "thiet-bi-do-dem-mikro" }
    ]
  },
  {
    id: 6,
    name: "Dịch vụ",
    slug: "dich-vu",
    subcategories: [
      { id: 61, name: "Tư vấn giải pháp bù công suất", slug: "tu-van-giai-phap" },
      { id: 62, name: "Thiết kế hệ thống bù công suất", slug: "thiet-ke-he-thong" },
      { id: 63, name: "Lắp đặt và bảo trì", slug: "lap-dat-bao-tri" }
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

export const blogPosts = [
  {
    id: 1,
    title: "Contactor (Khởi động từ) là gì, cấu tạo và ứng dụng của Contactor",
    excerpt: "Tìm hiểu chi tiết về contactor, nguyên lý hoạt động và ứng dụng trong công nghiệp",
    date: "2024-01-15"
  },
  {
    id: 2,
    title: "Aptomat là gì, cấu tạo aptomat, các thông số cơ bản của Aptomat",
    excerpt: "Hướng dẫn chi tiết về aptomat, cách chọn aptomat phù hợp cho hệ thống điện",
    date: "2024-01-10"
  },
  {
    id: 3,
    title: "Aptomat chống giật",
    excerpt: "Tìm hiểu về aptomat chống giật ELCB, RCCB và vai trò trong an toàn điện",
    date: "2024-01-05"
  },
  {
    id: 4,
    title: "Ro le nhiệt",
    excerpt: "Nguyên lý hoạt động và cách lắp đặt relay nhiệt bảo vệ động cơ",
    date: "2023-12-28"
  },
  {
    id: 5,
    title: "Tụ bù tiết kiệm điện",
    excerpt: "Giải pháp bù công suất hiệu quả, tiết kiệm chi phí điện năng cho doanh nghiệp",
    date: "2023-12-20"
  }
];

// Import this for product details
export { featuredProducts } from './productData';