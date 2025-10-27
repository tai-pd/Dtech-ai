// Sub-product detailed data with full specifications

export const subProductsData = {
  // LS Electric Sub-Products
  "mccb-ls-nf30-cs": {
    id: 101,
    slug: "mccb-ls-nf30-cs",
    parentSlug: "thiet-bi-dien-ls",
    parentName: "Thiết bị điện LS",
    name: "MCCB LS NF30-CS",
    fullName: "Aptomat khối LS Electric NF30-CS Series",
    category: "Thiết bị đóng cắt",
    brand: "LS Electric",
    manufacturer: "Hàn Quốc",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=800&h=600&fit=crop"
    ],
    description: "MCCB LS NF30-CS dòng kinh tế, công suất nhỏ phù hợp cho dân dụng và công nghiệp nhẹ",
    fullDescription: "MCCB LS NF30-CS thuộc dòng C Series - dòng sản phẩm kinh tế của LS Electric. Với thiết kế nhỏ gọn, dễ lắp đặt và giá thành hợp lý, NF30-CS là lựa chọn phù hợp cho các công trình dân dụng và công nghiệp nhỏ. Sản phẩm đảm bảo chất lượng LS Electric với khả năng bảo vệ quá tải và ngắn mạch tin cậy.",
    price: "350.000đ - 450.000đ",
    priceNote: "Giá theo từng model cụ thể",
    stock: "Còn hàng",
    warranty: "24 tháng",
    specifications: {
      "Dòng định mức": "10A, 15A, 20A, 30A",
      "Số cực": "2P, 3P",
      "Điện áp định mức": "220V-440V AC",
      "Tần số": "50/60Hz",
      "Dòng cắt ngắn mạch": "25kA at 380V",
      "Chuẩn": "IEC 60947-2",
      "Nhiệt độ hoạt động": "-25°C ~ +70°C",
      "Tuổi thọ cơ": "20,000 lần",
      "Tuổi thọ điện": "8,000 lần at In",
      "Cấp bảo vệ": "IP20"
    },
    features: [
      "Thiết kế nhỏ gọn, tiết kiệm không gian tủ điện",
      "Lắp đặt đơn giản trên rail 35mm",
      "Khả năng cắt cao, đảm bảo an toàn",
      "Giá thành hợp lý cho dòng kinh tế",
      "Độ tin cậy cao, ít bảo trì"
    ],
    applications: [
      "Tủ điện dân dụng",
      "Công trình nhà ở, chung cư",
      "Cửa hàng, văn phòng nhỏ",
      "Bảo vệ mạch điện công suất nhỏ"
    ],
    models: [
      { code: "NF30-CS 2P 10A", current: "10A", poles: "2P", price: "350.000đ" },
      { code: "NF30-CS 2P 15A", current: "15A", poles: "2P", price: "360.000đ" },
      { code: "NF30-CS 2P 20A", current: "20A", poles: "2P", price: "370.000đ" },
      { code: "NF30-CS 2P 30A", current: "30A", poles: "2P", price: "390.000đ" },
      { code: "NF30-CS 3P 10A", current: "10A", poles: "3P", price: "420.000đ" },
      { code: "NF30-CS 3P 20A", current: "20A", poles: "3P", price: "440.000đ" },
      { code: "NF30-CS 3P 30A", current: "30A", poles: "3P", price: "450.000đ" }
    ]
  },
  "mccb-ls-nf63-cv": {
    id: 102,
    slug: "mccb-ls-nf63-cv",
    parentSlug: "thiet-bi-dien-ls",
    parentName: "Thiết bị điện LS",
    name: "MCCB LS NF63-CV",
    fullName: "Aptomat khối LS Electric NF63-CV Series",
    category: "Thiết bị đóng cắt",
    brand: "LS Electric",
    manufacturer: "Hàn Quốc",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop"
    ],
    description: "MCCB LS NF63-CV dòng kinh tế công suất trung bình cho công nghiệp",
    fullDescription: "MCCB LS NF63-CV thuộc dòng C Series với công suất lớn hơn, phù hợp cho các ứng dụng công nghiệp nhẹ và trung bình. Sản phẩm có khả năng cắt ngắn mạch cao, đảm bảo an toàn cho hệ thống điện.",
    price: "550.000đ - 850.000đ",
    priceNote: "Giá theo dòng điện",
    stock: "Còn hàng",
    warranty: "24 tháng",
    specifications: {
      "Dòng định mức": "30A, 40A, 50A, 63A",
      "Số cực": "2P, 3P",
      "Điện áp định mức": "220V-440V AC",
      "Dòng cắt ngắn mạch": "35kA at 380V",
      "Chuẩn": "IEC 60947-2",
      "Tuổi thọ cơ": "20,000 lần",
      "Cấp bảo vệ": "IP20"
    },
    features: [
      "Dòng định mức cao hơn, phù hợp công nghiệp",
      "Khả năng cắt ngắn mạch 35kA",
      "Thiết kế chắc chắn, bền bỉ",
      "Dễ dàng bảo trì và thay thế"
    ],
    applications: [
      "Tủ điện công nghiệp nhẹ",
      "Xưởng sản xuất nhỏ",
      "Máy móc công suất trung bình",
      "Hệ thống điện thương mại"
    ],
    models: [
      { code: "NF63-CV 3P 30A", current: "30A", poles: "3P", price: "550.000đ" },
      { code: "NF63-CV 3P 40A", current: "40A", poles: "3P", price: "650.000đ" },
      { code: "NF63-CV 3P 50A", current: "50A", poles: "3P", price: "750.000đ" },
      { code: "NF63-CV 3P 63A", current: "63A", poles: "3P", price: "850.000đ" }
    ]
  },
  "contactor-ls-mc-9b": {
    id: 103,
    slug: "contactor-ls-mc-9b",
    parentSlug: "thiet-bi-dien-ls",
    parentName: "Thiết bị điện LS",
    name: "Contactor LS MC-9b",
    fullName: "Khởi động từ LS Electric MC-9b",
    category: "Thiết bị đóng cắt",
    brand: "LS Electric",
    manufacturer: "Hàn Quốc",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop"
    ],
    description: "Contactor LS MC-9b dòng 9A điều khiển động cơ công suất nhỏ",
    fullDescription: "Contactor LS MC-9b là khởi động từ công suất nhỏ, phù hợp cho điều khiển động cơ từ 0.75kW đến 4kW. Sản phẩm có độ tin cậy cao, tuổi thọ lâu dài và dễ dàng lắp đặt.",
    price: "120.000đ - 180.000đ",
    priceNote: "Giá theo điện áp cuộn dây",
    stock: "Còn hàng",
    warranty: "24 tháng",
    specifications: {
      "Dòng định mức": "9A",
      "Số tiếp điểm chính": "3P (3NO)",
      "Tiếp điểm phụ": "1NO + 1NC",
      "Điện áp cuộn dây": "24V, 110V, 220V, 380V AC/DC",
      "Công suất động cơ AC-3": "4kW at 380V",
      "Tuổi thọ cơ": "10 triệu lần",
      "Tuổi thọ điện": "2 triệu lần",
      "Cấp bảo vệ": "IP20"
    },
    features: [
      "Công suất nhỏ gọn, tiết kiệm năng lượng",
      "Tiếng ồn thấp khi hoạt động",
      "Lắp đặt dễ dàng trên rail 35mm",
      "Tuổi thọ cao, ít bảo trì"
    ],
    applications: [
      "Điều khiển động cơ nhỏ 0.75-4kW",
      "Máy bơm nước dân dụng",
      "Quạt thông gió",
      "Băng tải nhỏ"
    ],
    models: [
      { code: "MC-9b 24VAC", voltage: "24V AC", price: "150.000đ" },
      { code: "MC-9b 110VAC", voltage: "110V AC", price: "140.000đ" },
      { code: "MC-9b 220VAC", voltage: "220V AC", price: "120.000đ" },
      { code: "MC-9b 380VAC", voltage: "380V AC", price: "130.000đ" }
    ]
  },
  "mcb-ls-bh-d10": {
    id: 104,
    slug: "mcb-ls-bh-d10",
    parentSlug: "thiet-bi-dien-ls",
    parentName: "Thiết bị điện LS",
    name: "MCB LS BH-D10",
    fullName: "Aptomat tép LS Electric BH-D10",
    category: "Thiết bị đóng cắt",
    brand: "LS Electric",
    manufacturer: "Hàn Quốc",
    image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop"
    ],
    description: "MCB LS BH-D10 aptomat tép cắt 10kA cho dân dụng",
    fullDescription: "MCB LS BH-D10 là aptomat dạng tép với khả năng cắt ngắn mạch 10kA, phù hợp cho các ứng dụng dân dụng và thương mại. Sản phẩm có thiết kế nhỏ gọn, lắp đặt dễ dàng và giá thành hợp lý.",
    price: "35.000đ - 85.000đ",
    priceNote: "Giá theo dòng điện và số cực",
    stock: "Còn hàng",
    warranty: "24 tháng",
    specifications: {
      "Dòng định mức": "6A, 10A, 16A, 20A, 25A, 32A, 40A, 50A, 63A",
      "Số cực": "1P, 2P, 3P, 4P",
      "Điện áp định mức": "230V/400V AC",
      "Dòng cắt ngắn mạch": "10kA",
      "Đặc tính cắt": "C Curve",
      "Chuẩn": "IEC 60898",
      "Tuổi thọ cơ": "20,000 lần",
      "Cấp bảo vệ": "IP20"
    },
    features: [
      "Thiết kế nhỏ gọn 18mm mỗi module",
      "Khả năng cắt 10kA phù hợp dân dụng",
      "Lắp đặt nhanh trên rail 35mm",
      "Đặc tính C Curve tiêu chuẩn",
      "Giá thành cạnh tranh"
    ],
    applications: [
      "Tủ điện dân dụng",
      "Nhà ở, chung cư",
      "Văn phòng, cửa hàng",
      "Bảo vệ mạch điện chiếu sáng, ổ cắm"
    ],
    models: [
      { code: "BH-D10 1P 6A", current: "6A", poles: "1P", price: "35.000đ" },
      { code: "BH-D10 1P 10A", current: "10A", poles: "1P", price: "35.000đ" },
      { code: "BH-D10 1P 16A", current: "16A", poles: "1P", price: "38.000đ" },
      { code: "BH-D10 1P 20A", current: "20A", poles: "1P", price: "40.000đ" },
      { code: "BH-D10 1P 32A", current: "32A", poles: "1P", price: "45.000đ" },
      { code: "BH-D10 2P 16A", current: "16A", poles: "2P", price: "65.000đ" },
      { code: "BH-D10 2P 32A", current: "32A", poles: "2P", price: "75.000đ" },
      { code: "BH-D10 3P 32A", current: "32A", poles: "3P", price: "85.000đ" }
    ]
  }
};
