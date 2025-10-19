import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer">
      {/* Product Image */}
      <div 
        onClick={handleClick}
        className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full shadow-lg">
            Chính hãng
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <div className="text-xs text-blue-600 font-semibold mb-2">{product.category}</div>
        <h3 
          onClick={handleClick}
          className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors cursor-pointer"
        >
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        <button 
          onClick={handleClick}
          className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-600 transition-all flex items-center justify-center space-x-2 group-hover:shadow-lg"
        >
          <span>Xem chi tiết</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;