import React from 'react';
import { AlertCircle } from 'lucide-react';

const ErrorBoundary = ({ error, retry }) => {
  return (
    <div className="flex-1 flex items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto text-center p-8">
        <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
          <AlertCircle className="w-8 h-8 text-red-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Có lỗi xảy ra</h2>
        <p className="text-gray-600 mb-6">
          {error?.message || 'Không thể tải dữ liệu. Vui lòng thử lại.'}
        </p>
        {retry && (
          <button
            onClick={retry}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Thử lại
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorBoundary;
