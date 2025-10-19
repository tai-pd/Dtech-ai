# DTech Vietnam Industrial Electrical Equipment Website - Contracts

## Overview
This document outlines the contracts and integration plan for the DTech Vietnam website clone, which is currently frontend-only with mock data.

## Current Implementation Status
✅ Frontend completed with modern, improved design
✅ Multi-level sidebar navigation with expandable categories
✅ Product grid with hover effects and animations
✅ Responsive design (mobile & desktop)
✅ Vietnamese language content
✅ Mock data for all sections

## Mock Data Location
File: `/app/frontend/src/mockData.js`

### Mocked Data Includes:
1. **Company Information**
   - Name, contact details, address, slogan, description

2. **Navigation Categories** (6 main categories, each with 3-6 subcategories)
   - Thiết bị động cắt (Circuit Breakers)
   - Biến tần - Khởi động mềm (Inverters)
   - Tủ bù CSPK (Power Factor Correction)
   - Tủ điện - TMC (Electrical Cabinets)
   - Thiết bị đo đếm - Giám sát (Measuring Devices)
   - Dịch vụ (Services)

3. **Featured Products** (12 products)
   - Each product has: id, name, category, image URL, description

4. **Services** (3 service offerings)
   - Fast, Easy, Reliable services

5. **Brands** (13 major brands)
   - LS Electric, Mitsubishi, Schneider, ABB, Siemens, etc.

6. **Blog Posts** (5 technical articles)

## Future Backend Implementation Plan

### Phase 1: Database Models

#### Product Model
```python
class Product(BaseModel):
    id: str
    name: str
    category: str
    subcategory: str
    brand: str
    description: str
    image_url: str
    price: Optional[float]
    stock_status: str
    specifications: Dict[str, Any]
    created_at: datetime
    updated_at: datetime
```

#### Category Model
```python
class Category(BaseModel):
    id: str
    name: str
    slug: str
    subcategories: List[Subcategory]
```

#### Blog Post Model
```python
class BlogPost(BaseModel):
    id: str
    title: str
    excerpt: str
    content: str
    date: datetime
    author: str
    category: str
```

#### Contact Form Model
```python
class ContactForm(BaseModel):
    id: str
    name: str
    email: str
    phone: str
    message: str
    submitted_at: datetime
    status: str  # pending, contacted, resolved
```

### Phase 2: API Endpoints

#### Product APIs
- `GET /api/products` - Get all products with pagination and filters
- `GET /api/products/:id` - Get single product details
- `GET /api/products/category/:category` - Get products by category
- `GET /api/products/search?q=query` - Search products

#### Category APIs
- `GET /api/categories` - Get all categories with subcategories
- `GET /api/categories/:slug` - Get category details

#### Blog APIs
- `GET /api/blog` - Get all blog posts
- `GET /api/blog/:id` - Get single blog post

#### Contact APIs
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact submissions (admin only)

### Phase 3: Frontend Integration Changes

#### Files to Update:
1. `/app/frontend/src/components/HomePage.jsx`
   - Replace mock data imports with API calls
   - Add useEffect hooks to fetch data on mount
   - Add loading states and error handling

2. `/app/frontend/src/components/ProductCard.jsx`
   - Update to use real product data from API
   - Add click handler to navigate to product detail page

3. `/app/frontend/src/components/Sidebar.jsx`
   - Fetch categories from API instead of mockData
   - Keep client-side expand/collapse logic

4. Create new components:
   - `ProductDetailPage.jsx` - Single product view
   - `CategoryPage.jsx` - Product listing by category
   - `BlogDetailPage.jsx` - Single blog post view
   - `ContactForm.jsx` - Contact form with API submission

#### Example API Integration:
```javascript
// Before (Mock)
import { featuredProducts } from '../mockData';

// After (API)
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/products`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };
  fetchProducts();
}, []);
```

### Phase 4: Additional Features to Implement

1. **Search Functionality**
   - Real-time product search
   - Search by name, category, brand

2. **Product Filtering**
   - Filter by category, brand, price range
   - Sort by name, price, date

3. **Contact Form**
   - Form validation
   - Email notification to admin
   - Success/error toast messages

4. **Admin Panel** (Optional)
   - Manage products
   - Manage blog posts
   - View contact submissions

## Design Improvements Implemented

### Compared to Original dtech.vn:

1. **Modern Color Scheme**
   - Replaced basic blue with gradient blue (from-blue-600 to-blue-500)
   - Better contrast and readability
   - Professional dark footer (slate-800 to slate-900)

2. **Enhanced Typography & Spacing**
   - 2-3x more whitespace
   - Better font hierarchy
   - Improved line heights

3. **Animations & Interactions**
   - Smooth hover effects on all interactive elements
   - Card lift on hover (transform: translateY)
   - Image zoom on hover
   - Smooth scroll behavior
   - Gradient overlays on hover

4. **Modern Components**
   - Rounded cards with shadows
   - Gradient icon backgrounds
   - Better button designs
   - Improved sidebar with smooth transitions

5. **Responsive Design**
   - Mobile-first approach
   - Collapsible sidebar on mobile
   - Responsive grid layouts
   - Touch-friendly buttons

6. **Performance**
   - Optimized images
   - Lazy loading ready
   - Efficient animations using transform

## Notes
- All product images are currently using Unsplash placeholder images
- Vietnamese text content is authentic and professionally written
- Chat widget (Facebook Messenger, Zalo) is UI only - links need to be updated with real social profiles
- All data is currently client-side mock data stored in mockData.js
