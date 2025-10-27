import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, Phone, ShoppingCart, ChevronLeft, Star } from 'lucide-react';
import { featuredProducts } from '../productData';
import { companyInfo } from '../mockData';

const EnhancedProductDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = featuredProducts.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Không tìm thấy sản phẩm</h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Quay về trang chủ
          </button>
        </div>
      </div>
    );
  }

  const relatedProducts = featuredProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="flex-1 bg-gray-50">
      {/* Back Button - Top Left */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors group mb-2"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Quay lại</span>
          </button>
          
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm">
            <button onClick={() => navigate('/')} className="text-gray-600 hover:text-blue-600 transition-colors">
              Trang chủ
            </button>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">{product.category}</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full">
              {product.category}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <div className="flex items-center space-x-2 mb-6">
            <span className="text-lg font-semibold text-gray-700">Nhà sản xuất:</span>
            <span className="text-lg text-blue-600 font-bold">{product.manufacturer}</span>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">{product.fullDescription}</p>
          </div>

          <div className="mt-8">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-3xl mx-auto rounded-xl shadow-lg"
            />
            <p className="text-center text-sm text-gray-500 mt-3">
              Hình ảnh: {product.name}, ACB, MCCB, MCB, Contactor, Ro le nhiệt {product.brand}
            </p>
          </div>
        </div>

        {/* Sub Products Section */}
        {product.hasSubProducts && product.subProducts && product.subProducts.length > 0 && (
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Sản phẩm chi tiết
            </h2>
            <p className="text-gray-600 mb-6">
              Nhấp vào từng sản phẩm bên dưới để xem thông tin chi tiết
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.subProducts.map((subProduct) => (
                <div
                  key={subProduct.id}
                  onClick={() => {
                    navigate(`/product/${product.slug}/${subProduct.slug}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-xl transition-all cursor-pointer overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={subProduct.image}
                      alt={subProduct.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {subProduct.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">{subProduct.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-red-600">{subProduct.price}</span>
                      <ChevronRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {product.productLines && product.productLines.length > 0 && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              DTech cung cấp các dòng sản phẩm hạ thế của {product.brand} gồm có:
            </h2>

            {product.productLines.map((line) => (
              <div key={line.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">{line.title}</h3>
                  <p className="text-lg text-gray-600 italic mb-4">{line.subtitle}</p>
                  <p className="text-gray-700 mb-6">{line.description}</p>

                  <div className="mb-8">
                    <img
                      src={line.image}
                      alt={line.title}
                      className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
                    />
                    <p className="text-center text-sm text-gray-500 mt-3">
                      Hình ảnh: {line.title.replace(':', '')}
                    </p>
                  </div>

                  {line.series && line.series.length > 0 && (
                    <div className="space-y-6">
                      {line.series.map((series, seriesIndex) => (
                        <div key={seriesIndex} className="border-l-4 border-blue-500 pl-6 py-3 bg-blue-50 rounded-r-lg">
                          <h4 className="text-lg font-bold text-gray-900 mb-2">
                            - {series.name}
                          </h4>
                          <p className="text-gray-700 mb-2">{series.specs}</p>
                          {series.models && (
                            <p className="text-gray-600 text-sm">{series.models}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl shadow-xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Cần tư vấn chi tiết về sản phẩm?</h3>
            <p className="text-xl mb-8 opacity-90">
              Đội ngũ kỹ thuật của chúng tôi sẵn sàng hỗ trợ bạn 24/7
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${companyInfo.hotline.replace(/\s/g, '')}`}
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:shadow-lg transform hover:-translate-y-0.5 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Gọi ngay: {companyInfo.hotline}</span>
              </a>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all hover:shadow-lg transform hover:-translate-y-0.5 flex items-center space-x-2">
                <ShoppingCart className="w-5 h-5" />
                <span>Yêu cầu báo giá</span>
              </button>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sản phẩm liên quan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct) => (
                <div
                  key={relProduct.id}
                  onClick={() => {
                    navigate(`/product/${relProduct.slug}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relProduct.image}
                      alt={relProduct.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center space-x-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {relProduct.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{relProduct.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Quay về trang chủ</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedProductDetailPage;
