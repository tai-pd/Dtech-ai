// Mock data for DTech Vietnam Industrial Electrical Equipment Website

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

export const featuredProducts = [
  {
    id: 1,
    slug: "thiet-bi-dien-ls",
    name: "Thiết bị điện LS",
    category: "Thiết bị động cắt",
    brand: "LS Electric",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=800&h=600&fit=crop"
    ],
    description: "Aptomat, MCCB, ELCB chính hãng LS Electric",
    fullDescription: "Thiết bị điện LS Electric là dòng sản phẩm cao cấp được nhập khẩu chính hãng từ Hàn Quốc. Với công nghệ tiên tiến và chất lượng vượt trội, sản phẩm đảm bảo độ bền cao, vận hành ổn định và an toàn tuyệt đối cho hệ thống điện công nghiệp.",
    price: "Liên hệ",
    stock: "Còn hàng",
    warranty: "24 tháng",
    specifications: {
      "Xuất xứ": "Hàn Quốc",
      "Thương hiệu": "LS Electric",
      "Dòng điện": "6A - 1600A",
      "Điện áp": "220V - 690V",
      "Số cực": "1P, 2P, 3P, 4P",
      "Khả năng cắt": "6kA - 100kA",
      "Chuẩn": "IEC 60947-2, IEC 60898"
    },
    features: [
      "Khả năng cắt cao, đảm bảo an toàn hệ thống",
      "Thiết kế nhỏ gọn, dễ dàng lắp đặt",
      "Tuổi thọ cao, bảo trì ít",
      "Chống chịu tốt trong môi trường khắc nghiệt",
      "Có chứng nhận quốc tế CE, CB"
    ],
    applications: [
      "Tủ điện công nghiệp",
      "Hệ thống phân phối điện",
      "Bảo vệ động cơ và thiết bị",
      "Nhà máy, xí nghiệp sản xuất"
    ]
  },
  {
    id: 2,
    slug: "thiet-bi-dien-mitsubishi",
    name: "Thiết bị điện Mitsubishi",
    category: "Thiết bị động cắt",
    brand: "Mitsubishi Electric",
    image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop"
    ],
    description: "Contactor, Relay bảo vệ, MCB Mitsubishi Electric",
    fullDescription: "Thiết bị điện Mitsubishi Electric từ Nhật Bản nổi tiếng với độ tin cậy và tuổi thọ vượt trội. Được sử dụng rộng rãi trong các dự án công nghiệp lớn, sản phẩm đảm bảo hoạt động ổn định trong điều kiện khắc nghiệt nhất.",
    price: "Liên hệ",
    stock: "Còn hàng",
    warranty: "24 tháng",
    specifications: {
      "Xuất xứ": "Nhật Bản",
      "Thương hiệu": "Mitsubishi Electric",
      "Dòng điện": "9A - 630A",
      "Điện áp cuộn dây": "24V - 440V AC/DC",
      "Số tiếp điểm": "3P, 4P",
      "Tuổi thọ cơ": "10 triệu lần",
      "Tuổi thọ điện": "1-2 triệu lần"
    },
    features: [
      "Độ tin cậy cao, ít hỏng hóc",
      "Tiếng ồn thấp khi hoạt động",
      "Tiết kiệm năng lượng",
      "Kết cấu chắc chắn, chịu được rung động",
      "Dễ dàng bảo trì và thay thế"
    ],
    applications: [
      "Điều khiển động cơ công nghiệp",
      "Hệ thống tự động hóa",
      "Máy móc, dây chuyền sản xuất",
      "Điều khiển đèn chiếu sáng công suất lớn"
    ]
  },
  {
    id: 3,
    slug: "thiet-bi-dien-schneider",
    name: "Thiết bị điện Schneider",
    category: "Thiết bị động cắt",
    brand: "Schneider Electric",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=800&h=600&fit=crop"
    ],
    description: "Aptomat, Contactor Schneider Electric chính hãng",
    fullDescription: "Schneider Electric là thương hiệu hàng đầu thế giới về giải pháp quản lý năng lượng và tự động hóa. Sản phẩm được thiết kế với công nghệ tiên tiến, đảm bảo hiệu suất tối ưu và tiết kiệm năng lượng.",
    price: "Liên hệ",
    stock: "Còn hàng",
    warranty: "24 tháng",
    specifications: {
      "Xuất xứ": "Pháp",
      "Thương hiệu": "Schneider Electric",
      "Dòng điện": "6A - 2500A",
      "Điện áp": "230V - 690V",
      "Chuẩn": "IEC 60947, IEC 60898",
      "Khả năng cắt": "Lên đến 150kA",
      "Nhiệt độ hoạt động": "-25°C đến +70°C"
    },
    features: [
      "Công nghệ tiên tiến từ Pháp",
      "Tiết kiệm năng lượng tối ưu",
      "Kết nối thông minh, hỗ trợ IoT",
      "Độ chính xác cao",
      "Thiết kế thẩm mỹ, dễ sử dụng"
    ],
    applications: [
      "Tòa nhà thông minh",
      "Nhà máy công nghiệp",
      "Trung tâm dữ liệu",
      "Hệ thống năng lượng tái tạo"
    ]
  },
  {
    id: 4,
    slug: "bien-tan-invt",
    name: "Biến tần INVT",
    category: "Biến tần",
    brand: "INVT",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581092583537-20d51876f31f?w=800&h=600&fit=crop"
    ],
    description: "Biến tần INVT công suất từ 0.75KW - 630KW",
    fullDescription: "Biến tần INVT là giải pháp điều khiển tốc độ động cơ hiệu quả, tiết kiệm năng lượng lên đến 60%. Với nhiều tính năng thông minh và độ bền cao, sản phẩm phù hợp cho mọi ứng dụng công nghiệp.",
    price: "Liên hệ",
    stock: "Còn hàng",
    warranty: "18 tháng",
    specifications: {
      "Xuất xứ": "Trung Quốc",
      "Thương hiệu": "INVT",
      "Công suất": "0.75KW - 630KW",
      "Điện áp vào": "1 pha 220V / 3 pha 380V",
      "Tần số": "0-400Hz",
      "Hiệu suất": ">97%",
      "Chế độ điều khiển": "V/F, Vector không cảm biến"
    },
    features: [
      "Tiết kiệm điện năng đến 60%",
      "Khởi động mềm, bảo vệ động cơ",
      "Điều khiển chính xác, ổn định",
      "Chống nhiễu tốt",
      "Màn hình LED hiển thị rõ ràng"
    ],
    applications: [
      "Máy bơm nước",
      "Quạt công nghiệp",
      "Băng tải sản xuất",
      "Máy nén khí"
    ]
  },
  {
    id: 5,
    slug: "bien-tan-fuji",
    name: "Biến tần Fuji",
    category: "Biến tần",
    brand: "Fuji Electric",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581092583537-20d51876f31f?w=800&h=600&fit=crop"
    ],
    description: "Biến tần Fuji Electric chính hãng Nhật Bản",
    fullDescription: "Biến tần Fuji Electric được sản xuất tại Nhật Bản với công nghệ cao cấp, đảm bảo độ chính xác và bền bỉ. Sản phẩm lý tưởng cho các ứng dụng đòi hỏi độ tin cậy cao.",
    price: "Liên hệ",
    stock: "Còn hàng",
    warranty: "24 tháng",
    specifications: {
      "Xuất xứ": "Nhật Bản",
      "Thương hiệu": "Fuji Electric",
      "Công suất": "0.4KW - 500KW",
      "Điện áp": "200V - 480V",
      "Tần số ra": "0.01-400Hz",
      "Bảo vệ": "IP20/IP54",
      "Nhiệt độ": "-10°C đến +50°C"
    },
    features: [
      "Công nghệ cao cấp từ Nhật Bản",
      "Hiệu suất cao, tiết kiệm năng lượng",
      "Độ ồn thấp",
      "Nhiều chế độ bảo vệ an toàn",
      "Giao diện thân thiện, dễ cài đặt"
    ],
    applications: [
      "Máy móc chính xác cao",
      "Hệ thống HVAC",
      "Băng tải tự động",
      "Máy dệt, may"
    ]
  },
  {
    id: 6,
    slug: "bien-tan-ls",
    name: "Biến tần LS",
    category: "Biến tần",
    brand: "LS Electric",
    image: "https://images.unsplash.com/photo-1581092583537-20d51876f31f?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581092583537-20d51876f31f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop"
    ],
    description: "Biến tần LS SV-iG5A series công suất lớn",
    fullDescription: "Biến tần LS SV-iG5A series là dòng sản phẩm công suất lớn, được thiết kế cho các ứng dụng công nghiệp nặng. Với khả năng chịu tải cao và tính năng bảo vệ toàn diện.",
    price: "Liên hệ",
    stock: "Còn hàng",
    warranty: "24 tháng",
    specifications: {
      "Xuất xứ": "Hàn Quốc",
      "Thương hiệu": "LS Electric",
      "Công suất": "0.75KW - 800KW",
      "Điện áp": "3 pha 380V-480V",
      "Tần số": "0-590Hz",
      "Quá tải": "150% trong 60s",
      "Bảo vệ": "IP20/IP55"
    },
    features: [
      "Công suất lớn, chịu tải cao",
      "Điều khiển vector thông minh",
      "Bảo vệ toàn diện",
      "Giao tiếp RS-485, Modbus",
      "Thích hợp công nghiệp nặng"
    ],
    applications: [
      "Máy bơm công suất lớn",
      "Quạt công nghiệp",
      "Cần cẩu, thang máy",
      "Máy ép, máy cắt"
    ]
  },
  {
    id: 7,
    slug: "tu-dien-phan-phoi",
    name: "Tủ điện phân phối",
    category: "Tủ điện",
    brand: "DTech",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdfcb2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581092583537-20d51876f31f?w=800&h=600&fit=crop"
    ],
    description: "Tủ điện phân phối hạ thế 380V - 400V",
    fullDescription: "Tủ điện phân phối được thiết kế và lắp ráp bởi DTech với linh kiện chính hãng. Đảm bảo an toàn tuyệt đối và phân phối điện năng hiệu quả cho toàn hệ thống.",
    price: "Liên hệ",
    stock: "Sản xuất theo đơn",
    warranty: "12 tháng",
    specifications: {
      "Xuất xứ": "Việt Nam",
      "Thương hiệu": "DTech",
      "Điện áp": "380V - 400V",
      "Tần số": "50Hz",
      "Vỏ tủ": "Thép tráng kẽm sơn tĩnh điện",
      "Cấp bảo vệ": "IP42/IP54/IP65",
      "Nhiệt độ": "-5°C đến +40°C"
    },
    features: [
      "Thiết kế theo yêu cầu khách hàng",
      "Linh kiện chính hãng",
      "Lắp ráp chuyên nghiệp",
      "Kiểm tra kỹ trước khi giao",
      "Hỗ trợ lắp đặt tại công trình"
    ],
    applications: [
      "Nhà máy sản xuất",
      "Tòa nhà văn phòng",
      "Khu công nghiệp",
      "Trạm biến áp"
    ]
  },
  {
    id: 8,
    slug: "tu-dien-bu-cong-suat",
    name: "Tủ điện bù công suất",
    category: "Tủ điện",
    brand: "DTech",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdfcb2?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdfcb2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581092583537-20d51876f31f?w=800&h=600&fit=crop"
    ],
    description: "Tủ bù tự động 20KVAR đến 250KVAR",
    fullDescription: "Tủ bù công suất tự động giúp cải thiện hệ số cos φ, giảm tổn thất điện năng và tiết kiệm chi phí điện hàng tháng. Sản phẩm được thiết kế với công nghệ hiện đại, vận hành tự động và ổn định.",
    price: "Liên hệ",
    stock: "Sản xuất theo đơn",
    warranty: "12 tháng",
    specifications: {
      "Xuất xứ": "Việt Nam",
      "Thương hiệu": "DTech",
      "Công suất": "20KVAR - 250KVAR",
      "Điện áp": "380V-400V 3 pha",
      "Tụ bù": "Samsung/EPCOS/MIKRO",
      "Relay bù": "EMIC/MIKRO",
      "Số cấp": "6-12 cấp"
    },
    features: [
      "Cải thiện hệ số cos φ lên 0.95-0.99",
      "Tiết kiệm 10-30% tiền điện",
      "Bù tự động, chính xác",
      "Bảo vệ quá tải, ngắn mạch",
      "Giảm tổn thất trên đường dây"
    ],
    applications: [
      "Nhà máy có nhiều động cơ",
      "Xưởng cơ khí",
      "Nhà máy may mặc",
      "Khu công nghiệp"
    ]
  },
  {
    id: 9,
    slug: "tu-dieu-khien-dong-co",
    name: "Tủ điều khiển động cơ",
    category: "Tủ điện",
    brand: "DTech",
    image: "https://images.unsplash.com/photo-1581092583537-20d51876f31f?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581092583537-20d51876f31f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdfcb2?w=800&h=600&fit=crop"
    ],
    description: "Tủ điều khiển động cơ, tủ MCC",
    fullDescription: "Tủ điều khiển động cơ (Motor Control Center) được thiết kế chuyên nghiệp để điều khiển và bảo vệ các động cơ công nghiệp. Đảm bảo vận hành an toàn, hiệu quả và dễ dàng bảo trì.",
    price: "Liên hệ",
    stock: "Sản xuất theo đơn",
    warranty: "12 tháng",
    specifications: {
      "Xuất xứ": "Việt Nam",
      "Thương hiệu": "DTech",
      "Điện áp": "380V-400V 3 pha",
      "Công suất động cơ": "0.75KW - 500KW",
      "Contactor": "LS/Mitsubishi/Schneider",
      "Relay nhiệt": "LS/Schneider",
      "Cấp bảo vệ": "IP42/IP54"
    },
    features: [
      "Điều khiển chính xác",
      "Bảo vệ quá tải, ngắn mạch",
      "Khởi động mềm cho động cơ",
      "Dễ dàng bảo trì",
      "Tín hiệu báo lỗi rõ ràng"
    ],
    applications: [
      "Máy bơm công nghiệp",
      "Băng tải sản xuất",
      "Quạt thông gió",
      "Hệ thống HVAC"
    ]
  },
  {
    id: 10,
    slug: "tu-bu-tiet-kiem-dien",
    name: "Tụ bù tiết kiệm điện",
    category: "Tụ bù CSPK",
    brand: "Samsung",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop"
    ],
    description: "Tụ bù Samsung, EPCOS, MIKRO",
    fullDescription: "Tụ bù công suất là thiết bị quan trọng trong hệ thống bù CSPK, giúp cải thiện hệ số công suất và tiết kiệm điện năng. Sản phẩm chính hãng từ các thương hiệu uy tín.",
    price: "Liên hệ",
    stock: "Còn hàng",
    warranty: "12 tháng",
    specifications: {
      "Xuất xứ": "Hàn Quốc/Đức/Malaysia",
      "Thương hiệu": "Samsung/EPCOS/MIKRO",
      "Công suất": "5KVAR - 50KVAR",
      "Điện áp": "230V - 525V",
      "Tần số": "50/60Hz",
      "Cấp bảo vệ": "IP20",
      "Kiểu đấu": "3 pha"
    },
    features: [
      "Chất lượng cao, bền bỉ",
      "Tổn thất thấp",
      "Không chứa PCB",
      "Tự phóng điện an toàn",
      "Chống cháy nổ"
    ],
    applications: [
      "Tủ bù công suất",
      "Hệ thống điện công nghiệp",
      "Cải thiện hệ số cos φ",
      "Giảm tổn thất điện năng"
    ]
  },
  {
    id: 11,
    slug: "thiet-bi-do-dem-idec",
    name: "Thiết bị đo đếm IDEC",
    category: "Đo đếm",
    brand: "IDEC",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop"
    ],
    description: "Đồng hồ đa năng, thiết bị đo IDEC",
    fullDescription: "Thiết bị đo đếm IDEC từ Nhật Bản cung cấp giải pháp giám sát và đo lường chính xác các thông số điện. Sản phẩm có độ chính xác cao và giao diện hiển thị trực quan.",
    price: "Liên hệ",
    stock: "Còn hàng",
    warranty: "24 tháng",
    specifications: {
      "Xuất xứ": "Nhật Bản",
      "Thương hiệu": "IDEC",
      "Loại": "Đồng hồ đa năng",
      "Đo": "V, A, W, kWh, PF, Hz",
      "Độ chính xác": "±0.5%",
      "Điện áp": "100-600V",
      "Giao tiếp": "RS-485, Modbus RTU"
    },
    features: [
      "Độ chính xác cao",
      "Màn hình LCD rõ nét",
      "Đa chức năng đo lường",
      "Kết nối thông minh",
      "Cài đặt dễ dàng"
    ],
    applications: [
      "Giám sát hệ thống điện",
      "Quản lý năng lượng",
      "Tủ điện công nghiệp",
      "Nhà máy thông minh"
    ]
  },
  {
    id: 12,
    slug: "thiet-bi-do-emic",
    name: "Thiết bị đo EMIC",
    category: "Đo đếm",
    brand: "EMIC",
    image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop"
    ],
    description: "Thiết bị đo lường EMIC chính hãng",
    fullDescription: "Thiết bị đo EMIC là giải pháp đo lường và giám sát chất lượng điện năng chuyên nghiệp. Sản phẩm có nhiều tính năng thông minh, phù hợp cho các ứng dụng công nghiệp.",
    price: "Liên hệ",
    stock: "Còn hàng",
    warranty: "18 tháng",
    specifications: {
      "Xuất xứ": "Thổ Nhĩ Kỳ",
      "Thương hiệu": "EMIC",
      "Loại": "Đồng hồ đa năng, Relay",
      "Đo": "V, A, kW, kVAr, PF",
      "Độ chính xác": "±0.5%",
      "Điện áp": "57-480V",
      "Màn hình": "LED 4 số"
    },
    features: [
      "Giá thành hợp lý",
      "Chất lượng ổn định",
      "Hiển thị rõ ràng",
      "Nhiều mẫu mã",
      "Dễ dàng lắp đặt"
    ],
    applications: [
      "Đo lường công nghiệp",
      "Tủ bù công suất",
      "Hệ thống phân phối điện",
      "Giám sát năng lượng"
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