// Comprehensive product data with detailed specifications and product lines

export const featuredProducts = [
  {
    id: 1,
    slug: "thiet-bi-dien-ls",
    name: "Thiết bị điện LS",
    category: "Thiết bị đóng cắt",
    brand: "LS Electric",
    manufacturer: "Hàn Quốc",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop",
    description: "Aptomat, MCCB, ELCB chính hãng LS Electric",
    fullDescription: "Thiết bị điện LS Electric là dòng sản phẩm cao cấp được nhập khẩu chính hãng từ Hàn Quốc. Với công nghệ tiên tiến và chất lượng vượt trội, sản phẩm đảm bảo độ bền cao, vận hành ổn định và an toàn tuyệt đối cho hệ thống điện công nghiệp. LS Electric là nhà sản xuất thiết bị điện hàng đầu Hàn Quốc được sử dụng rộng rãi tại Việt Nam do đáp ứng được các yêu cầu kỹ thuật khắt khe và đặc biệt là chi phí đầu tư thấp. Các sản phẩm chính của thiết bị điện LS được sử dụng trong tất cả các công trình dân dụng và công nghiệp, các nhà máy, xưởng sản xuất, chung cư, tòa nhà văn phòng.",
    price: "Liên hệ",
    stock: "Còn hàng",
    warranty: "24 tháng",
    productLines: [
      {
        id: "mccb-ls",
        title: "MCCB LS - Aptomat khối",
        subtitle: "Cầu dao tự động dạng khối",
        description: "Dòng sản phẩm MCCB LS Electric với nhiều series đáp ứng mọi nhu cầu bảo vệ mạch điện",
        image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=400&fit=crop",
        series: [
          {
            name: "MCCB dòng kinh tế C Series",
            specs: "Dòng định mức tới 800A. Dòng cắt ngắn mạch tới 50kA. Số cực: 2P, 3P.",
            models: "Gồm có: NF30-CS, NF63-CV, NF125-CV, NF250-CV, NF400-CW, NF630-CW."
          },
          {
            name: "MCCB dòng tiêu chuẩn S Series",
            specs: "Dòng định mức tới 1600A. Dòng cắt ngắn mạch tới 85kA. Số cực: 3P, 4P.",
            models: "Gồm có: NF32-SV, NF63-SV, NF125-SV, NF250-SV, NF400-SW, NF630-SW, NF800-SEW, NF1000-SEW."
          },
          {
            name: "MCCB dòng cắt ngắn mạch cao H Series",
            specs: "Dòng định mức tới 800A. Dòng cắt ngắn mạch tới 75kA. Số cực: 3P, 4P.",
            models: "Gồm có: NF63-HV, NF125-HV, NF250-HV, NF400-HEW, NF630-HEW, NF800-HEW."
          }
        ]
      },
      {
        id: "elcb-ls",
        title: "ELCB LS - Aptomat chống giật dạng khối",
        subtitle: "Cầu dao chống dòng rò dạng khối",
        description: "ELCB LS Electric bảo vệ con người khỏi điện giật và phát hiện dòng rò",
        image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=400&fit=crop",
        series: [
          {
            name: "ELCB dòng kinh tế C Series",
            specs: "Dòng định mức tới 630A. Dòng rò: 15, 30, 100, 200, 500mA. Số cực: 3P.",
            models: "Gồm có: NV30-CS, NV63-CS, NV63-CV, NV125-CV, NV250-CV, NV400-CW, NV630-CW."
          },
          {
            name: "ELCB dòng tiêu chuẩn S Series",
            specs: "Dòng định mức tới 630A. Dòng rò: 15, 30, 100, 200, 500mA. Số cực: 3P, 4P.",
            models: "Gồm có: NV32-SV, NV63-SV, NV125-SV, NV250-SV, NV400-SW, NV630-SW."
          }
        ]
      },
      {
        id: "mcb-ls",
        title: "MCB LS - Aptomat tép",
        subtitle: "Cầu dao tự động dạng tép",
        description: "MCB LS Electric dòng nhỏ cho bảo vệ các mạch điện dân dụng và công nghiệp nhẹ",
        image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=800&h=400&fit=crop",
        series: [
          {
            name: "MCB BH-D10 Series",
            specs: "Dòng định mức tới 63A. Dòng cắt ngắn mạch 10kA. Số cực: 1P, 2P.",
            models: "Dòng từ 6A đến 63A"
          },
          {
            name: "MCB BHW-T Series",
            specs: "Dòng định mức tới 125A. Dòng cắt ngắn mạch 4.5kA-10kA. Số cực: 1P, 2P, 3P, 4P.",
            models: "BHW-T4, BHW-T10"
          }
        ]
      },
      {
        id: "contactor-ls",
        title: "Contactor LS - Khởi động từ",
        subtitle: "Thiết bị đóng cắt tự động",
        description: "Contactor LS Electric dùng để điều khiển động cơ và các thiết bị công suất lớn",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=400&fit=crop",
        series: [
          {
            name: "Contactor MC Series",
            specs: "Dòng định mức từ 9A đến 800A. Điện áp cuộn dây: 24V, 110V, 220V, 380V AC/DC.",
            models: "MC-9b, MC-12b, MC-18b, MC-32a, MC-50a, MC-85a, MC-100a đến MC-800a."
          }
        ]
      },
      {
        id: "relay-ls",
        title: "Relay nhiệt LS - Rơ le quá tải",
        subtitle: "Thiết bị bảo vệ quá tải động cơ",
        description: "Relay nhiệt LS Electric bảo vệ động cơ khỏi quá tải và thiếu pha",
        image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=400&fit=crop",
        series: [
          {
            name: "Relay nhiệt GTH Series",
            specs: "Dải điều chỉnh từ 0.1A đến 630A. Cấp bảo vệ: 10A, 20A.",
            models: "GTH-12, GTH-22, GTH-32, GTH-50, GTH-75, GTH-110, GTH-150, GTH-220."
          }
        ]
      }
    ]
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
    fullDescription: "Thiết bị điện Mitsubishi (Mitsubishi Electric) do Nhật Bản sản xuất là dòng thiết bị điện tiêu chuẩn được sử dụng rất phổ biến tại Việt Nam do đáp ứng được các yêu cầu kỹ thuật khắt khe và đặc biệt là chi phí đầu tư thấp. Với ưu điểm về chất lượng, thiết bị điện Mitsubishi được sử dụng trong tất cả các công trình dân dụng và công nghiệp, các nhà máy, xưởng sản xuất, chung cư, tòa nhà văn phòng. Các sản phẩm chính gồm có: Máy cắt chân không (VCB), Contactor trung thế (VMC), Máy cắt không khí (ACB), Aptomat hạ thế (MCB, MCCB) tiêu chuẩn IEC-60947-2, Cầu dao điện bảo vệ động cơ (RCCB, RCBO, ELCB), Contactor, Relay nhiệt tiêu chuẩn IEC-60947-4-1, Biến tần.",
    price: "Liên hệ",
    stock: "Còn hàng",
    warranty: "24 tháng",
    productLines: [
      {
        id: "mccb-mitsubishi",
        title: "MCCB Mitsubishi - Aptomat khối",
        subtitle: "Cầu dao tự động dạng khối",
        description: "DTech cung cấp các dòng MCCB Mitsubishi chính hãng với độ tin cậy cao",
        image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=800&h=400&fit=crop",
        series: [
          {
            name: "MCCB NF-Series",
            specs: "Dòng định mức: 30A-800A. Dòng cắt: 30kA-100kA. Số cực: 2P, 3P, 4P.",
            models: "NF30-CS, NF63-CV, NF125-SV, NF250-SV, NF400-SW, NF630-SW, NF800-SEW."
          },
          {
            name: "MCCB NV-Series (ELCB)",
            specs: "Dòng định mức: 30A-800A. Dòng rò: 30-500mA. Số cực: 3P, 4P.",
            models: "NV30-CS, NV63-SV, NV125-SV, NV250-SV, NV400-SW, NV630-SW."
          }
        ]
      },
      {
        id: "mcb-mitsubishi",
        title: "MCB Mitsubishi - Aptomat tép",
        subtitle: "Cầu dao tự động dạng tép",
        description: "MCB Mitsubishi chất lượng cao cho các ứng dụng dân dụng và công nghiệp",
        image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=400&fit=crop",
        series: [
          {
            name: "MCB BH-D Series",
            specs: "Dòng định mức: 6A-63A. Dòng cắt: 6kA, 10kA. Số cực: 1P, 2P, 3P, 4P.",
            models: "BH-D6, BH-D10 từ 6A đến 63A."
          },
          {
            name: "RCCB BV-D Series",
            specs: "Dòng rò: 30mA, 300mA. Số cực: 2P, 4P.",
            models: "BV-D 25A, 40A, 63A, 80A, 100A."
          }
        ]
      },
      {
        id: "contactor-mitsubishi",
        title: "Contactor Mitsubishi - Khởi động từ",
        subtitle: "Thiết bị đóng cắt điện tự động",
        description: "Contactor Mitsubishi với độ bền cao và tuổi thọ vượt trội",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=400&fit=crop",
        series: [
          {
            name: "Contactor S-T/SD-T Series",
            specs: "Dòng định mức: 10A-1500A. Điện áp cuộn: 24V, 110V, 220V, 380V, 440V AC.",
            models: "S-T10, S-T12, S-T20, S-T32, S-T50, S-T65, S-T95, SD-T200, SD-T400, SD-T800."
          }
        ]
      },
      {
        id: "relay-mitsubishi",
        title: "Relay nhiệt Mitsubishi - Rơ le bảo vệ quá tải",
        subtitle: "Thiết bị bảo vệ động cơ",
        description: "Relay nhiệt Mitsubishi bảo vệ động cơ an toàn, chính xác",
        image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=400&fit=crop",
        series: [
          {
            name: "Relay nhiệt TH-T Series",
            specs: "Dải điều chỉnh: 0.16A-690A. Cấp bảo vệ: 10A, 20A.",
            models: "TH-T12, TH-T18, TH-T25, TH-T32, TH-T50, TH-T80, TH-T100, TH-T125."
          }
        ]
      }
    ]
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
    fullDescription: "Schneider Electric là thương hiệu hàng đầu thế giới về giải pháp quản lý năng lượng và tự động hóa. Sản phẩm được thiết kế với công nghệ tiên tiến từ Pháp, đảm bảo hiệu suất tối ưu và tiết kiệm năng lượng. Schneider Electric cung cấp giải pháp toàn diện cho các công trình từ dân dụng đến công nghiệp, từ tòa nhà thông minh đến trung tâm dữ liệu. Với hơn 180 năm kinh nghiệm, Schneider Electric cam kết mang đến những sản phẩm chất lượng cao và dịch vụ tốt nhất cho khách hàng.",
    price: "Liên hệ",
    stock: "Còn hàng",
    warranty: "24 tháng",
    productLines: [
      {
        id: "acti9-schneider",
        title: "Dòng sản phẩm Acti9 - Giải pháp bảo vệ toàn diện",
        subtitle: "Thiết bị bảo vệ và điều khiển mạch",
        description: "Acti9 là dòng sản phẩm tiên tiến nhất của Schneider Electric cho bảo vệ mạch điện",
        image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=400&fit=crop",
        series: [
          {
            name: "MCB iC60 Series",
            specs: "Dòng định mức: 0.5A-63A. Dòng cắt: 6kA, 10kA. Số cực: 1P, 2P, 3P, 4P.",
            models: "iC60N, iC60H, iC60L từ 0.5A đến 63A."
          },
          {
            name: "RCCB iID Series",
            specs: "Dòng rò: 10mA, 30mA, 100mA, 300mA. Số cực: 2P, 4P.",
            models: "iID-2P, iID-4P từ 25A đến 125A."
          },
          {
            name: "RCBO iDPN Series",
            specs: "Dòng định mức: 6A-40A. Dòng rò: 30mA. Số cực: 1P+N.",
            models: "iDPN Vigi từ 6A đến 40A."
          }
        ]
      },
      {
        id: "compact-schneider",
        title: "MCCB Compact NSX - Aptomat khối",
        subtitle: "Cầu dao tự động công suất lớn",
        description: "Dòng MCCB Compact NSX với công nghệ Micrologic tiên tiến",
        image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=800&h=400&fit=crop",
        series: [
          {
            name: "Compact NSX100-250",
            specs: "Dòng định mức: 16A-250A. Dòng cắt: 36kA-50kA. Số cực: 3P, 4P.",
            models: "NSX100F, NSX100N, NSX160F, NSX250F, NSX250N."
          },
          {
            name: "Compact NSX400-630",
            specs: "Dòng định mức: 250A-630A. Dòng cắt: 50kA-70kA. Số cực: 3P, 4P.",
            models: "NSX400F, NSX400N, NSX630F, NSX630N."
          }
        ]
      }
    ]
  },
  {
    id: 4,
    slug: "bien-tan-invt",
    name: "Biến tần INVT",
    category: "Biến tần",
    brand: "INVT",
    manufacturer: "Trung Quốc",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
    description: "Biến tần INVT công suất từ 0.75KW - 630KW",
    fullDescription: "Biến tần INVT là giải pháp điều khiển tốc độ động cơ hiệu quả, tiết kiệm năng lượng lên đến 60%. Với nhiều tính năng thông minh và độ bền cao, sản phẩm phù hợp cho mọi ứng dụng công nghiệp. INVT là thương hiệu biến tần hàng đầu Trung Quốc với công nghệ tiên tiến, được ứng dụng rộng rãi trong các ngành công nghiệp tại Việt Nam như: máy bơm nước, quạt công nghiệp, băng tải sản xuất, máy nén khí, và nhiều ứng dụng khác.",
    price: "Liên hệ",
    stock: "Còn hàng",
    warranty: "18 tháng",
    productLines: [
      {
        id: "goodrive20",
        title: "Biến tần Goodrive20 - Dòng kinh tế",
        subtitle: "Biến tần vector không cảm biến",
        description: "Goodrive20 là dòng biến tần phổ thông với tính năng cơ bản, phù hợp cho các ứng dụng đơn giản",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=400&fit=crop",
        series: [
          {
            name: "Goodrive20 Series",
            specs: "Công suất: 0.75KW-630KW. Điện áp: 220V/380V. Tần số ra: 0-400Hz. Hiệu suất: 97%.",
            models: "GD20-0R7G-4, GD20-1R5G-4, GD20-2R2G-4, GD20-004G-4, GD20-7R5G-4 đến GD20-630G-4."
          }
        ]
      },
      {
        id: "goodrive200a",
        title: "Biến tần Goodrive200A - Dòng cao cấp",
        subtitle: "Biến tần điều khiển vector có cảm biến",
        description: "Goodrive200A với tính năng điều khiển vector tiên tiến, độ chính xác cao",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=400&fit=crop",
        series: [
          {
            name: "Goodrive200A Series",
            specs: "Công suất: 0.75KW-500KW. Điều khiển vector. IP20/IP54. Quá tải: 150% trong 60s.",
            models: "GD200A-0R7G-4, GD200A-1R5G-4, GD200A-2R2G-4 đến GD200A-500G-4."
          }
        ]
      }
    ]
  },
  {
    id: 5,
    slug: "bien-tan-fuji",
    name: "Biến tần Fuji",
    category: "Biến tần",
    brand: "Fuji Electric",
    manufacturer: "Nhật Bản",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
    description: "Biến tần Fuji Electric chính hãng Nhật Bản",
    fullDescription: "Biến tần Fuji Electric được sản xuất tại Nhật Bản với công nghệ cao cấp, đảm bảo độ chính xác và bền bỉ. Sản phẩm lý tưởng cho các ứng dụng đòi hỏi độ tin cậy cao như máy móc chính xác, hệ thống HVAC, và các dây chuyền tự động hóa. Với hơn 90 năm kinh nghiệm trong lĩnh vực điện và điện tử, Fuji Electric cam kết mang đến những giải pháp tốt nhất cho khách hàng.",
    price: "Liên hệ",
    stock: "Còn hàng",
    warranty: "24 tháng",
    productLines: [
      {
        id: "frenic-ace",
        title: "Biến tần Frenic-Ace - Công nghệ Nhật Bản",
        subtitle: "Biến tần điều khiển vector",
        description: "Frenic-Ace là dòng biến tần cao cấp của Fuji Electric với hiệu suất vượt trội",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=400&fit=crop",
        series: [
          {
            name: "Frenic-Ace Series",
            specs: "Công suất: 0.4KW-500KW. Điện áp: 200V-480V. IP20/IP54. Hiệu suất: 98%.",
            models: "FRN0.4C1S-2J, FRN0.75C1S-2J, FRN1.5C1S-2J đến FRN500F1S-4J."
          }
        ]
      }
    ]
  },
  {
    id: 6,
    slug: "bien-tan-ls",
    name: "Biến tần LS",
    category: "Biến tần",
    brand: "LS Electric",
    manufacturer: "Hàn Quốc",
    image: "https://images.unsplash.com/photo-1581092583537-20d51876f31f?w=400&h=300&fit=crop",
    description: "Biến tần LS SV-iG5A series công suất lớn",
    fullDescription: "Biến tần LS SV-iG5A series là dòng sản phẩm công suất lớn, được thiết kế cho các ứng dụng công nghiệp nặng với khả năng chịu tải cao và tính năng bảo vệ toàn diện. Sản phẩm phù hợp cho máy bơm công suất lớn, quạt công nghiệp, cần cẩu, thang máy và các ứng dụng công nghiệp nặng khác.",
    price: "Liên hệ",
    stock: "Còn hàng",
    warranty: "24 tháng",
    productLines: [
      {
        id: "sv-ig5a",
        title: "Biến tần SV-iG5A - Công suất lớn",
        subtitle: "Biến tần vector thông minh",
        description: "SV-iG5A với khả năng chịu tải cao, phù hợp công nghiệp nặng",
        image: "https://images.unsplash.com/photo-1581092583537-20d51876f31f?w=800&h=400&fit=crop",
        series: [
          {
            name: "SV-iG5A Series",
            specs: "Công suất: 0.75KW-800KW. Điện áp: 380V-480V. Quá tải: 150% trong 60s. IP20/IP55.",
            models: "SV008iG5A-4, SV015iG5A-4, SV022iG5A-4 đến SV800iG5A-4."
          }
        ]
      }
    ]
  },
  {
    id: 7,
    slug: "tu-dien-phan-phoi",
    name: "Tủ điện phân phối",
    category: "Tủ điện",
    brand: "DTech",
    manufacturer: "Việt Nam",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop",
    description: "Tủ điện phân phối hạ thế 380V - 400V",
    fullDescription: "Tủ điện phân phối được thiết kế và lắp ráp bởi DTech với linh kiện chính hãng. Đảm bảo an toàn tuyệt đối và phân phối điện năng hiệu quả cho toàn hệ thống.",
    price: "Liên hệ",
    stock: "Sản xuất theo đơn",
    warranty: "12 tháng",
    productLines: []
  },
  {
    id: 8,
    slug: "tu-dien-bu-cong-suat",
    name: "Tủ điện bù công suất",
    category: "Tủ điện",
    brand: "DTech",
    manufacturer: "Việt Nam",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdfcb2?w=400&h=300&fit=crop",
    description: "Tủ bù tự động 20KVAR đến 250KVAR",
    fullDescription: "Tủ bù công suất tự động giúp cải thiện hệ số cos φ, giảm tổn thất điện năng và tiết kiệm chi phí điện hàng tháng.",
    price: "Liên hệ",
    stock: "Sản xuất theo đơn",
    warranty: "12 tháng",
    productLines: []
  },
  {
    id: 9,
    slug: "tu-dieu-khien-dong-co",
    name: "Tủ điều khiển động cơ",
    category: "Tủ điện",
    brand: "DTech",
    manufacturer: "Việt Nam",
    image: "https://images.unsplash.com/photo-1581092583537-20d51876f31f?w=400&h=300&fit=crop",
    description: "Tủ điều khiển động cơ, tủ MCC",
    fullDescription: "Tủ điều khiển động cơ được thiết kế chuyên nghiệp để điều khiển và bảo vệ các động cơ công nghiệp.",
    price: "Liên hệ",
    stock: "Sản xuất theo đơn",
    warranty: "12 tháng",
    productLines: []
  },
  {
    id: 10,
    slug: "tu-bu-tiet-kiem-dien",
    name: "Tụ bù tiết kiệm điện",
    category: "Tụ bù CSPK",
    brand: "Samsung",
    manufacturer: "Hàn Quốc",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
    description: "Tụ bù Samsung, EPCOS, MIKRO",
    fullDescription: "Tụ bù công suất là thiết bị quan trọng trong hệ thống bù CSPK, giúp cải thiện hệ số công suất và tiết kiệm điện năng.",
    price: "Liên hệ",
    stock: "Còn hàng",
    warranty: "12 tháng",
    productLines: []
  },
  {
    id: 11,
    slug: "thiet-bi-do-dem-idec",
    name: "Thiết bị đo đếm IDEC",
    category: "Đo đếm",
    brand: "IDEC",
    manufacturer: "Nhật Bản",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
    description: "Đồng hồ đa năng, thiết bị đo IDEC",
    fullDescription: "Thiết bị đo đếm IDEC từ Nhật Bản cung cấp giải pháp giám sát và đo lường chính xác các thông số điện.",
    price: "Liên hệ",
    stock: "Còn hàng",
    warranty: "24 tháng",
    productLines: []
  },
  {
    id: 12,
    slug: "thiet-bi-do-emic",
    name: "Thiết bị đo EMIC",
    category: "Đo đếm",
    brand: "EMIC",
    manufacturer: "Thổ Nhĩ Kỳ",
    image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=400&h=300&fit=crop",
    description: "Thiết bị đo lường EMIC chính hãng",
    fullDescription: "Thiết bị đo EMIC là giải pháp đo lường và giám sát chất lượng điện năng chuyên nghiệp.",
    price: "Liên hệ",
    stock: "Còn hàng",
    warranty: "18 tháng",
    productLines: []
  }
];
