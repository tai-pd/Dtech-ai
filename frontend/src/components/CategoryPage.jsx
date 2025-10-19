import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { navigationCategories } from '../mockData';
import { featuredProducts } from '../productData';
import ProductCard from './ProductCard';

const CategoryPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Find the category
  const category = navigationCategories.find(cat => cat.slug === slug);
  
  if (!category) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Không tìm thấy danh mục</h2>
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

  // Filter products by category
  const categoryProducts = featuredProducts.filter(
    product => product.category === category.name
  );

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
            <span className="text-gray-900 font-medium">{category.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{category.name}</h1>
          <p className="text-xl text-gray-600">{category.description}</p>
        </div>

        {/* Subcategories */}
        {category.subcategories && category.subcategories.length > 0 && (
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Danh mục con</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.subcategories.map((sub) => (
                <button
                  key={sub.id}
                  className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-left"
                >
                  <span className="font-semibold text-gray-900">{sub.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Products */}
        {categoryProducts.length > 0 ? (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Sản phẩm ({categoryProducts.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <p className="text-xl text-gray-600 mb-4">
              Hiện chưa có sản phẩm trong danh mục này
            </p>
            <p className="text-gray-500">
              Vui lòng liên hệ {' '}
              <a href="tel:0904592583" className="text-blue-600 font-semibold">
                0904 592 583
              </a>
              {' '} để được tư vấn
            </p>
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

export default CategoryPage;
