import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, Phone, Mail, ShoppingCart, Check, Star, Package, Shield, Truck, ChevronLeft } from 'lucide-react';
import { featuredProducts } from '../productData';
import { companyInfo } from '../mockData';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = featuredProducts.find(p => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen">
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
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
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

      {/* Product Details */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`bg-white rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-blue-600 shadow-lg' : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-24 object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full">
                {product.category}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-600">(Đánh giá: 5/5)</span>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">{product.fullDescription}</p>

            {/* Price & Stock */}
            <div className="border-t border-b border-gray-200 py-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">Giá:</span>
                <span className="text-2xl font-bold text-blue-600">{product.price}</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">Tình trạng:</span>
                <span className="flex items-center text-green-600 font-semibold">
                  <Check className="w-5 h-5 mr-1" />
                  {product.stock}
                </span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">Thương hiệu:</span>
                <span className="font-semibold text-gray-900">{product.brand}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Bảo hành:</span>
                <span className="font-semibold text-gray-900">{product.warranty}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 mb-6">
              <a
                href={`tel:${companyInfo.hotline.replace(/\s/g, '')}`}
                className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                <span>Gọi ngay: {companyInfo.hotline}</span>
              </a>
              <button className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all">
                <ShoppingCart className="w-5 h-5" />
                <span>Yêu cầu báo giá</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Package className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-xs text-gray-600">Hàng chính hãng 100%</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-xs text-gray-600">Bảo hành chính hãng</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Truck className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-xs text-gray-600">Giao hàng tận nơi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-12">
          <div className="border-b border-gray-200 mb-6">
            <div className="flex space-x-8">
              <button className="pb-4 px-2 border-b-2 border-blue-600 text-blue-600 font-semibold">
                Thông số kỹ thuật
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex border-b border-gray-100 pb-3">
                <span className="w-1/2 text-gray-600 font-medium">{key}:</span>
                <span className="w-1/2 text-gray-900">{value}</span>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Tính năng nổi bật</h3>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ứng dụng</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {product.applications.map((app, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{app}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sản phẩm liên quan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct) => (
                <div
                  key={relProduct.id}
                  onClick={() => navigate(`/product/${relProduct.slug}`)}
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

        {/* Back Button */}
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

export default ProductDetailPage;