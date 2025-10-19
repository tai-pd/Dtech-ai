import apiClient from './apiClient';
import { mockCategories } from './mockData';
import { navigationCategories } from '../mockData';

// Simulate API delay
const delay = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));

// Category API Service
class CategoryService {
  // Get all categories
  async getAllCategories() {
    await delay(800);
    
    try {
      // In real API: const response = await apiClient.get('/categories');
      
      // Mock response
      return {
        success: true,
        data: navigationCategories
      };
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  }

  // Get category by slug
  async getCategoryBySlug(slug) {
    await delay(800);
    
    try {
      // In real API: const response = await apiClient.get(`/categories/${slug}`);
      
      // Mock response
      const category = navigationCategories.find(c => c.slug === slug);
      
      if (!category) {
        throw new Error('Category not found');
      }
      
      return {
        success: true,
        data: category
      };
    } catch (error) {
      console.error('Error fetching category:', error);
      throw error;
    }
  }
}

export default new CategoryService();
