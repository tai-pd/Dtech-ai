import apiClient from './apiClient';
import { mockProducts } from './mockData';
import { featuredProducts } from '../productData';

// Simulate API delay
const delay = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));

// Product API Service
class ProductService {
  // Get all products with optional filters
  async getAllProducts(params = {}) {
    await delay(1000);
    
    try {
      // In real API: const response = await apiClient.get('/products', { params });
      
      // Mock response
      let products = [...featuredProducts];
      
      // Apply filters
      if (params.category) {
        products = products.filter(p => p.category === params.category);
      }
      
      if (params.brand) {
        products = products.filter(p => p.brand === params.brand);
      }
      
      if (params.search) {
        const searchLower = params.search.toLowerCase();
        products = products.filter(p => 
          p.name.toLowerCase().includes(searchLower) ||
          p.description.toLowerCase().includes(searchLower)
        );
      }
      
      // Simulate API response structure
      return {
        success: true,
        data: products,
        total: products.length,
        page: params.page || 1,
        limit: params.limit || 12
      };
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  // Get single product by slug
  async getProductBySlug(slug) {
    await delay(1000);
    
    try {
      // In real API: const response = await apiClient.get(`/products/${slug}`);
      
      // Mock response
      const product = featuredProducts.find(p => p.slug === slug);
      
      if (!product) {
        throw new Error('Product not found');
      }
      
      return {
        success: true,
        data: product
      };
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  }

  // Get products by category
  async getProductsByCategory(categorySlug) {
    await delay(1000);
    
    try {
      // In real API: const response = await apiClient.get(`/categories/${categorySlug}/products`);
      
      // Mock response
      const products = featuredProducts.filter(p => {
        // Match category slug with product category name
        const categoryMap = {
          'thiet-bi-dong-cat': 'Thiết bị đóng cắt',
          'bien-tan-inverter': 'Biến tần - Inverter',
          'thiet-bi-bu-cspk': 'Thiết bị bù CSPK',
          'do-dem-giam-sat-dieu-khien': 'Đo đếm - Giám sát - Điều khiển',
          'thiet-ke-lap-dat-tu-dien': 'Thiết kế và Lắp đặt Tủ điện'
        };
        
        return p.category === categoryMap[categorySlug];
      });
      
      return {
        success: true,
        data: products,
        total: products.length
      };
    } catch (error) {
      console.error('Error fetching category products:', error);
      throw error;
    }
  }

  // Get related products
  async getRelatedProducts(productId, category) {
    await delay(800);
    
    try {
      // In real API: const response = await apiClient.get(`/products/${productId}/related`);
      
      // Mock response
      const related = featuredProducts
        .filter(p => p.category === category && p.id !== productId)
        .slice(0, 4);
      
      return {
        success: true,
        data: related
      };
    } catch (error) {
      console.error('Error fetching related products:', error);
      throw error;
    }
  }
}

export default new ProductService();
