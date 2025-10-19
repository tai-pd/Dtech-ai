import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Calendar, User, Tag } from 'lucide-react';
import { blogPosts } from '../blogData';

const BlogDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Không tìm thấy bài viết</h2>
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

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const renderContent = (item, index) => {
    switch (item.type) {
      case 'heading':
        return (
          <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            {item.text}
          </h2>
        );
      case 'paragraph':
        return (
          <p key={index} className="text-gray-700 leading-relaxed mb-4">
            {item.text}
          </p>
        );
      case 'list':
        return (
          <ul key={index} className="list-disc list-inside space-y-2 mb-6 ml-4">
            {item.items.map((listItem, i) => (
              <li key={i} className="text-gray-700">{listItem}</li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

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
            <span className="text-gray-600">Bài viết</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">{post.title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Post Header */}
          <article className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            {/* Featured Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover"
            />

            {/* Post Meta */}
            <div className="p-8">
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Tag className="w-4 h-4" />
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Title */}
              <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>

              {/* Post Excerpt */}
              <p className="text-xl text-gray-600 mb-8 pb-8 border-b border-gray-200">
                {post.excerpt}
              </p>

              {/* Post Content */}
              <div className="prose max-w-none">
                {post.content.map((item, index) => renderContent(item, index))}
              </div>
            </div>
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Bài viết liên quan</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relPost) => (
                  <div
                    key={relPost.id}
                    onClick={() => {
                      navigate(`/blog/${relPost.slug}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="cursor-pointer group"
                  >
                    <div className="h-40 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-3 overflow-hidden">
                      <img
                        src={relPost.image}
                        alt={relPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="text-sm text-gray-500 mb-2">{relPost.date}</div>
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {relPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{relPost.excerpt}</p>
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
    </div>
  );
};

export default BlogDetailPage;
