import React from 'react';
import LoadingSpinner from './LoadingSpinner';

const PageLoader = () => {
  return (
    <div className="flex-1 flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <div className="mb-4">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-2xl">D</span>
          </div>
        </div>
        <LoadingSpinner size="lg" text="Đang tải dữ liệu..." />
      </div>
    </div>
  );
};

export default PageLoader;
