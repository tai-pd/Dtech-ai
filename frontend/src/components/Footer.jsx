import React from 'react';
import { Phone, Mail, MapPin, Facebook, MessageCircle } from 'lucide-react';
import { companyInfo, navigationCategories } from '../mockData';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-800 to-slate-900 text-white mt-16">
      {/* Info Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold">
            BÁN HÀNG CHÍNH HÃNG - GIAO HÀNG TẬN NƠI - TƯ VẤN MIỄN PHÍ
          </p>
          <p className="text-sm mt-1 opacity-90">
            Tiết kiệm Thời gian Mua hàng - Tư vấn Giải pháp Tối ưu - Hỗ trợ Kỹ thuật Tận tình
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{companyInfo.name}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-blue-400" />
                <span className="text-sm">{companyInfo.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 flex-shrink-0 text-blue-400" />
                <div>
                  <div className="text-sm">Tel: {companyInfo.phone}</div>
                  <div className="text-sm">Hotline: {companyInfo.hotline}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 flex-shrink-0 text-blue-400" />
                <span className="text-sm">{companyInfo.email}</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4">Sản phẩm chính</h3>
            <ul className="space-y-2 text-sm">
              {navigationCategories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <a href={`#${cat.slug}`} className="hover:text-blue-400 transition-colors">
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h3 className="text-lg font-bold mb-4">Thương hiệu phân phối</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">LS Electric</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Mitsubishi Electric</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Schneider Electric</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">ABB</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Siemens</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Fuji Electric</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kết nối với chúng tôi</h3>
            <div className="flex space-x-3 mb-6">
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            <div className="bg-slate-700 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Văn phòng Hà Nội</h4>
              <p className="text-sm mb-1">Hotline: 0934.664.698</p>
              <p className="text-sm">Email: thanhnl@dtech.vn</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-700 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          <p>© 2024 {companyInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;