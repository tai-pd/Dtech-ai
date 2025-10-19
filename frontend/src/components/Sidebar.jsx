import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { navigationCategories } from '../mockData';

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [expandedCategories, setExpandedCategories] = useState([1]);

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleCategoryClick = (slug) => {
    navigate(`/category/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onClose();
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-[120px] lg:top-[120px] left-0 h-[calc(100vh-120px)] 
          w-72 bg-white border-r border-gray-200 overflow-y-auto z-40
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800 mb-4 pb-3 border-b-2 border-blue-500">
            Danh mục sản phẩm
          </h2>
          <nav className="space-y-1">
            {navigationCategories.map((category) => (
              <div key={category.id} className="mb-2">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                >
                  <span 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCategoryClick(category.slug);
                    }}
                    className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    {category.name}
                  </span>
                  {expandedCategories.includes(category.id) ? (
                    <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  )}
                </button>
                {expandedCategories.includes(category.id) && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-3">
                    {category.subcategories.map((sub) => (
                      <a
                        key={sub.id}
                        href={`#${sub.slug}`}
                        className="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;