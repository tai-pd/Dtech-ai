// Mock data that simulates API responses

export const mockProducts = [
  {
    id: 1,
    slug: "thiet-bi-dien-ls",
    name: "Thiết bị điện LS",
    category: "Thiết bị đóng cắt",
    brand: "LS Electric",
    manufacturer: "Hàn Quốc",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop",
    description: "Aptomat, MCCB, ELCB chính hãng LS Electric",
    price: "Liên hệ",
    stock: "Còn hàng",
    warranty: "24 tháng",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z"
  },
  {
    id: 2,
    slug: "thiet-bi-dien-mitsubishi",
    name: "Thiết bị điện Mitsubishi",
    category: "Thiết bị đóng cắt",
    brand: "Mitsubishi Electric",
    manufacturer: "Nhật Bản",
    image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=400&h=300&fit=crop",
    description: "Contactor, Relay bảo vệ, MCB Mitsubishi Electric",
    price: "Liên hệ",
    stock: "Còn hàng",
    warranty: "24 tháng",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z"
  },
  {
    id: 3,
    slug: "thiet-bi-dien-schneider",
    name: "Thiết bị điện Schneider",
    category: "Thiết bị đóng cắt",
    brand: "Schneider Electric",
    manufacturer: "Pháp",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=300&fit=crop",
    description: "Aptomat, Contactor Schneider Electric chính hãng",
    price: "Liên hệ",
    stock: "Còn hàng",
    warranty: "24 tháng",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z"
  },
  {
    id: 4,
    slug: "bien-tan-invt",
    name: "Biến tần INVT",
    category: "Biến tần - Inverter",
    brand: "INVT",
    manufacturer: "Trung Quốc",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
    description: "Biến tần INVT công suất từ 0.75KW - 630KW",
    price: "Liên hệ",
    stock: "Còn hàng",
    warranty: "18 tháng",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z"
  },
  {
    id: 5,
    slug: "bien-tan-fuji",
    name: "Biến tần Fuji",
    category: "Biến tần - Inverter",
    brand: "Fuji Electric",
    manufacturer: "Nhật Bản",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
    description: "Biến tần Fuji Electric chính hãng Nhật Bản",
    price: "Liên hệ",
    stock: "Còn hàng",
    warranty: "24 tháng",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z"
  },
  {
    id: 6,
    slug: "bien-tan-ls",
    name: "Biến tần LS",
    category: "Biến tần - Inverter",
    brand: "LS Electric",
    manufacturer: "Hàn Quốc",
    image: "https://images.unsplash.com/photo-1581092583537-20d51876f31f?w=400&h=300&fit=crop",
    description: "Biến tần LS SV-iG5A series công suất lớn",
    price: "Liên hệ",
    stock: "Còn hàng",
    warranty: "24 tháng",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z"
  },
  {
    id: 7,
    slug: "tu-dien-phan-phoi",
    name: "Tủ điện phân phối",
    category: "Thiết kế và Lắp đặt Tủ điện",
    brand: "DTech",
    manufacturer: "Việt Nam",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop",
    description: "Tủ điện phân phối hạ thế 380V - 400V",
    price: "Liên hệ",
    stock: "Sản xuất theo đơn",
    warranty: "12 tháng",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z"
  },
  {
    id: 8,
    slug: "tu-dien-bu-cong-suat",
    name: "Tủ điện bù công suất",
    category: "Thiết bị bù CSPK",
    brand: "DTech",
    manufacturer: "Việt Nam",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdfcb2?w=400&h=300&fit=crop",
    description: "Tủ bù tự động 20KVAR đến 250KVAR",
    price: "Liên hệ",
    stock: "Sản xuất theo đơn",
    warranty: "12 tháng",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z"
  },
  {
    id: 9,
    slug: "tu-dieu-khien-dong-co",
    name: "Tủ điều khiển động cơ",
    category: "Thiết kế và Lắp đặt Tủ điện",
    brand: "DTech",
    manufacturer: "Việt Nam",
    image: "https://images.unsplash.com/photo-1581092583537-20d51876f31f?w=400&h=300&fit=crop",
    description: "Tủ điều khiển động cơ, tủ MCC",
    price: "Liên hệ",
    stock: "Sản xuất theo đơn",
    warranty: "12 tháng",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z"
  },
  {
    id: 10,
    slug: "tu-bu-tiet-kiem-dien",
    name: "Tụ bù tiết kiệm điện",
    category: "Thiết bị bù CSPK",
    brand: "Samsung",
    manufacturer: "Hàn Quốc",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
    description: "Tụ bù Samsung, EPCOS, MIKRO",
    price: "Liên hệ",
    stock: "Còn hàng",
    warranty: "12 tháng",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z"
  },
  {
    id: 11,
    slug: "thiet-bi-do-dem-idec",
    name: "Thiết bị đo đếm IDEC",
    category: "Đo đếm - Giám sát - Điều khiển",
    brand: "IDEC",
    manufacturer: "Nhật Bản",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
    description: "Đồng hồ đa năng, thiết bị đo IDEC",
    price: "Liên hệ",
    stock: "Còn hàng",
    warranty: "24 tháng",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z"
  },
  {
    id: 12,
    slug: "thiet-bi-do-emic",
    name: "Thiết bị đo EMIC",
    category: "Đo đếm - Giám sát - Điều khiển",
    brand: "EMIC",
    manufacturer: "Thổ Nhĩ Kỳ",
    image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=400&h=300&fit=crop",
    description: "Thiết bị đo lường EMIC chính hãng",
    price: "Liên hệ",
    stock: "Còn hàng",
    warranty: "18 tháng",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z"
  }
];

export const mockBlogPosts = [
  {
    id: 1,
    slug: "contactor-la-gi-cau-tao-ung-dung",
    title: "Contactor (Khởi động từ) là gì, cấu tạo và ứng dụng của Contactor",
    excerpt: "Tìm hiểu chi tiết về contactor, nguyên lý hoạt động và ứng dụng trong công nghiệp",
    date: "2024-01-15",
    author: "Kỹ thuật DTech",
    category: "Kiến thức kỹ thuật",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&h=600&fit=crop",
    views: 1250,
    createdAt: "2024-01-15T00:00:00Z"
  },
  {
    id: 2,
    slug: "aptomat-la-gi-cau-tao-thong-so",
    title: "Aptomat là gì, cấu tạo aptomat, các thông số cơ bản của Aptomat",
    excerpt: "Hướng dẫn chi tiết về aptomat, cách chọn aptomat phù hợp cho hệ thống điện",
    date: "2024-01-10",
    author: "Kỹ thuật DTech",
    category: "Kiến thức kỹ thuật",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&h=600&fit=crop",
    views: 980,
    createdAt: "2024-01-10T00:00:00Z"
  },
  {
    id: 3,
    slug: "aptomat-chong-giat-elcb-rccb",
    title: "Aptomat chống giật - ELCB và RCCB",
    excerpt: "Tìm hiểu về aptomat chống giật ELCB, RCCB và vai trò trong an toàn điện",
    date: "2024-01-05",
    author: "Kỹ thuật DTech",
    category: "An toàn điện",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1200&h=600&fit=crop",
    views: 875,
    createdAt: "2024-01-05T00:00:00Z"
  },
  {
    id: 4,
    slug: "ro-le-nhiet-bao-ve-dong-co",
    title: "Rơ le nhiệt - Thiết bị bảo vệ động cơ",
    excerpt: "Nguyên lý hoạt động và cách lắp đặt relay nhiệt bảo vệ động cơ",
    date: "2023-12-28",
    author: "Kỹ thuật DTech",
    category: "Động cơ công nghiệp",
    image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=1200&h=600&fit=crop",
    views: 720,
    createdAt: "2023-12-28T00:00:00Z"
  },
  {
    id: 5,
    slug: "tu-bu-tiet-kiem-dien-nang",
    title: "Tụ bù tiết kiệm điện năng",
    excerpt: "Giải pháp bù công suất hiệu quả, tiết kiệm chi phí điện năng cho doanh nghiệp",
    date: "2023-12-20",
    author: "Kỹ thuật DTech",
    category: "Tiết kiệm năng lượng",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdfcb2?w=1200&h=600&fit=crop",
    views: 1450,
    createdAt: "2023-12-20T00:00:00Z"
  }
];

export const mockCategories = [
  {
    id: 1,
    name: "Thiết bị đóng cắt",
    slug: "thiet-bi-dong-cat",
    description: "MCCB, MCB, ELCB, Contactor, Relay nhiệt",
    productCount: 3,
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Biến tần - Inverter",
    slug: "bien-tan-inverter",
    description: "Biến tần điều khiển tốc độ động cơ",
    productCount: 3,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Thiết bị bù CSPK",
    slug: "thiet-bi-bu-cspk",
    description: "Tụ bù, Tủ bù công suất phản kháng",
    productCount: 2,
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdfcb2?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Đo đếm - Giám sát - Điều khiển",
    slug: "do-dem-giam-sat-dieu-khien",
    description: "Đồng hồ đo, thiết bị giám sát, điều khiển",
    productCount: 2,
    image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    name: "Vỏ tủ - Phụ kiện - Dây cáp",
    slug: "vo-tu-phu-kien-day-cap",
    description: "Vỏ tủ điện, thanh cái, dây cáp điện",
    productCount: 0,
    image: "https://images.unsplash.com/photo-1581092583537-20d51876f31f?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    name: "Thiết kế và Lắp đặt Tủ điện",
    slug: "thiet-ke-lap-dat-tu-dien",
    description: "Dịch vụ thiết kế, lắp đặt tủ điện công nghiệp",
    productCount: 2,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop"
  },
  {
    id: 7,
    name: "Tư vấn Giải pháp",
    slug: "tu-van-giai-phap",
    description: "Tư vấn giải pháp điện công nghiệp",
    productCount: 0,
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=300&fit=crop"
  }
];
