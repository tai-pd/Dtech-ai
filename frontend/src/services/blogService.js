import apiClient from './apiClient';
import { mockBlogPosts } from './mockData';
import { blogPosts } from '../blogData';

// Simulate API delay
const delay = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));

// Blog API Service
class BlogService {
  // Get all blog posts
  async getAllPosts(params = {}) {
    await delay(1000);
    
    try {
      // In real API: const response = await apiClient.get('/blog', { params });
      
      // Mock response
      let posts = [...blogPosts];
      
      // Apply filters
      if (params.category) {
        posts = posts.filter(p => p.category === params.category);
      }
      
      if (params.limit) {
        posts = posts.slice(0, params.limit);
      }
      
      return {
        success: true,
        data: posts,
        total: posts.length
      };
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      throw error;
    }
  }

  // Get single blog post by slug
  async getPostBySlug(slug) {
    await delay(1000);
    
    try {
      // In real API: const response = await apiClient.get(`/blog/${slug}`);
      
      // Mock response
      const post = blogPosts.find(p => p.slug === slug);
      
      if (!post) {
        throw new Error('Blog post not found');
      }
      
      return {
        success: true,
        data: post
      };
    } catch (error) {
      console.error('Error fetching blog post:', error);
      throw error;
    }
  }

  // Get related blog posts
  async getRelatedPosts(postId, category) {
    await delay(800);
    
    try {
      // In real API: const response = await apiClient.get(`/blog/${postId}/related`);
      
      // Mock response
      const related = blogPosts
        .filter(p => p.category === category && p.id !== postId)
        .slice(0, 3);
      
      return {
        success: true,
        data: related
      };
    } catch (error) {
      console.error('Error fetching related posts:', error);
      throw error;
    }
  }
}

export default new BlogService();
