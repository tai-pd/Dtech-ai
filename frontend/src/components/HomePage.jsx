import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, ThumbsUp, Shield, TrendingUp, Users, Award, Phone } from 'lucide-react';
import { companyInfo, services, brands } from '../mockData';
import { blogPosts } from '../blogData';
import { featuredProducts } from '../productData';
import ProductCard from './ProductCard';

const HomePage = () => {
  const navigate = useNavigate();
  
  const iconMap = {
    Zap: Zap,
    ThumbsUp: ThumbsUp,
    Shield: Shield
  };

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {companyInfo.name}
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              {companyInfo.slogan}
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {companyInfo.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#products"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Xem sản phẩm
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Liên hệ tư vấn
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
              <div className="text-gray-600">Năm kinh nghiệm</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10,000+</div>
              <div className="text-gray-600">Khách hàng tin dùng</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Hàng chính hãng</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Giải pháp mua hàng
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <div
                  key={service.id}
                  className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Sản phẩm nổi bật
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Thiết bị điện công nghiệp chính hãng từ các thương hiệu hàng đầu thế giới
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Thương hiệu phân phối
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Đại lý ủy quyền của các thương hiệu hàng đầu
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-200 hover:border-blue-500 transition-all hover:shadow-lg flex items-center justify-center text-center font-semibold text-gray-700 hover:text-blue-600"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Bài viết hữu ích
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Kiến thức và hướng dẫn về thiết bị điện công nghiệp
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <article
                key={post.id}
                onClick={() => {
                  navigate(`/blog/${post.slug}`);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <span className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    Đọc thêm →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Cần tư vấn giải pháp thiết bị điện?
          </h2>
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
            <a
              href={`mailto:${companyInfo.email}`}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Gửi email tư vấn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;