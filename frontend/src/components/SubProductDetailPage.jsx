import React, { Suspense, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, Phone, ShoppingCart, ChevronLeft, Star } from 'lucide-react';
import { companyInfo } from '../mockData';
import productService from '../services/productService';
import PageLoader from './PageLoader';
import ErrorBoundary from './ErrorBoundary';

// Resource wrapper for Suspense
function wrapPromise(promise) {
  let status = 'pending';
  let result;
  let suspender = promise.then(
    (r) => {
      status = 'success';
      result = r;
    },
    (e) => {
      status = 'error';
      result = e;
    }
  );
  
  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    }
  };
}

// Component that reads the resource (triggers Suspense)
const SubProductContent = ({ parentSlug, subSlug }) => {
  const navigate = useNavigate();
  const [resource] = useState(() => 
    wrapPromise(productService.getSubProductBySlug(parentSlug, subSlug))
  );
  
  const response = resource.read();
  const subProduct = response.data;
  const parentProduct = response.parent;

  if (!subProduct) {
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
            <span className="text-gray-600">{subProduct.category}</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <button 
              onClick={() => navigate(`/product/${parentSlug}`)}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {parentProduct?.name || 'Sản phẩm'}
            </button>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">{subProduct.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Main Product Info */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full">
              {subProduct.category}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{subProduct.name}</h1>
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold text-gray-700">Thương hiệu:</span>
              <span className="text-lg text-blue-600 font-bold">{subProduct.brand}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold text-gray-700">Xuất xứ:</span>
              <span className="text-lg text-gray-800">{subProduct.manufacturer}</span>
            </div>
          </div>

          {/* Product Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Giá bán</p>
              <p className="text-xl font-bold text-red-600">{subProduct.price}</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Tình trạng</p>
              <p className="text-xl font-bold text-green-600">{subProduct.stock}</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Bảo hành</p>
              <p className="text-xl font-bold text-blue-600">{subProduct.warranty}</p>
            </div>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Mô tả sản phẩm</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{subProduct.fullDescription}</p>
          </div>

          {/* Main Product Image */}
          <div className="mt-8">
            <img
              src={subProduct.image}
              alt={subProduct.name}
              className="w-full max-w-3xl mx-auto rounded-xl shadow-lg"
            />
            <p className="text-center text-sm text-gray-500 mt-3">
              Hình ảnh: {subProduct.name}
            </p>
          </div>
        </div>

        {/* Additional Images */}
        {subProduct.images && subProduct.images.length > 0 && (
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Hình ảnh sản phẩm</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {subProduct.images.map((img, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src={img}
                    alt={`${subProduct.name} - Hình ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
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

        {/* Back to Parent Product */}
        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={() => navigate(`/product/${parentSlug}`)}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Quay về {parentProduct?.name || 'sản phẩm chính'}</span>
          </button>
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

// Main component with Suspense
const SubProductDetailPage = () => {
  const { slug, subSlug } = useParams();
  
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoader />}>
        <SubProductContent parentSlug={slug} subSlug={subSlug} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default SubProductDetailPage;
