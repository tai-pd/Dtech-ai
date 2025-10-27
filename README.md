# DTech Vietnam - Industrial Electrical Equipment Website

## 📋 Overview

DTech Vietnam is a modern full-stack web application for industrial electrical equipment sales and consultation services. The website features a comprehensive catalog of electrical products from leading brands including LS Electric, Mitsubishi, Schneider, and more.

## 🚀 Live Demo

**Live Site:** [https://vn-equipment.preview.emergentagent.com](https://vn-equipment.preview.emergentagent.com)

## 🛠️ Tech Stack

### Frontend
- **React 19.0.0** - UI framework
- **React Router 7.5.1** - Client-side routing
- **Axios 1.8.4** - HTTP client
- **Tailwind CSS 3.4.17** - Utility-first CSS
- **Shadcn/ui** - Modern UI components
- **Lucide React** - Icon library

### Backend
- **FastAPI 0.110.1** - Modern Python web framework
- **Motor 3.3.1** - Async MongoDB driver
- **Pydantic 2.6.4** - Data validation
- **Python 3.x** - Backend language

### Database
- **MongoDB** - NoSQL database

## 📁 Project Structure

```
/app
├── frontend/                 # React frontend application
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Header.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HomePage.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── EnhancedProductDetailPage.jsx
│   │   │   ├── BlogDetailPage.jsx
│   │   │   ├── CategoryPage.jsx
│   │   │   └── ChatWidget.jsx
│   │   ├── mockData.js      # Navigation & company data
│   │   ├── productData.js   # Product catalog
│   │   ├── blogData.js      # Blog posts
│   │   ├── App.js           # Main app component
│   │   ├── App.css          # Global styles
│   │   └── index.css        # Tailwind imports
│   ├── package.json         # Frontend dependencies
│   ├── tailwind.config.js   # Tailwind configuration
│   └── .env                 # Frontend environment variables
│
└── backend/                 # FastAPI backend application
    ├── server.py            # Main FastAPI application
    ├── requirements.txt     # Python dependencies
    └── .env                 # Backend environment variables
```

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **Yarn** (v1.22 or higher)
- **Python** (v3.8 or higher)
- **MongoDB** (v4.4 or higher)
- **Git**

## 📥 Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Setup Backend

```bash
# Navigate to backend directory
cd backend

# Create virtual environment (optional but recommended)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cp .env.example .env
# Edit .env and add your MongoDB connection string
```

**Backend .env file:**
```env
MONGO_URL=mongodb://localhost:27017/
DB_NAME=dtech_db
```

### 3. Setup Frontend

```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies (MUST use yarn, not npm)
yarn install

# Create .env file
cp .env.example .env
# The REACT_APP_BACKEND_URL is already configured
```

**Frontend .env file:**
```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

## 🚀 Running the Application

### Development Mode

You need to run both backend and frontend servers:

#### Terminal 1 - Backend Server

```bash
cd backend
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

Backend will be available at: `http://localhost:8001`

#### Terminal 2 - Frontend Server

```bash
cd frontend
yarn start
```

Frontend will be available at: `http://localhost:3000`

### Using Supervisor (Production-like)

If supervisor is configured:

```bash
# Start all services
sudo supervisorctl start all

# Check status
sudo supervisorctl status

# Restart services
sudo supervisorctl restart frontend
sudo supervisorctl restart backend

# View logs
tail -f /var/log/supervisor/frontend.out.log
tail -f /var/log/supervisor/backend.out.log
```

## 📦 Build for Production

### Frontend Build

```bash
cd frontend
yarn build
```

This creates an optimized production build in the `build/` directory.

### Backend Deployment

The FastAPI backend can be deployed using:
- **Uvicorn** with Gunicorn workers
- **Docker** containers
- **Cloud platforms** (AWS, Google Cloud, Azure)

## 🎨 Key Features

### ✅ Implemented Features

1. **Homepage**
   - Hero section with company info
   - Products grouped by categories
   - Services showcase
   - Brand partners
   - Blog posts preview

2. **Product Catalog**
   - 12 products across 5 categories
   - Detailed product pages with specifications
   - Product lines and series information
   - Related products
   - High-quality images

3. **Category System**
   - 7 main categories
   - Multi-level sidebar navigation
   - Category pages with filtering
   - Subcategories display

4. **Blog System**
   - 5 technical blog posts
   - Full article content
   - Related posts
   - Vietnamese technical content

5. **UI/UX Features**
   - Fully responsive design
   - Modern animations and transitions
   - Chat widget (Facebook Messenger, Zalo)
   - Search functionality
   - Breadcrumb navigation

### 📋 Categories

1. **Thiết bị đóng cắt** (Circuit Breakers)
2. **Biến tần - Inverter** (Frequency Inverters)
3. **Thiết bị bù CSPK** (Power Factor Correction)
4. **Đo đếm - Giám sát - Điều khiển** (Monitoring & Control)
5. **Vỏ tủ - Phụ kiện - Dây cáp** (Cabinets & Accessories)
6. **Thiết kế và Lắp đặt Tủ điện** (Cabinet Design & Installation)
7. **Tư vấn Giải pháp** (Consultation Services)

## 🔍 Available Scripts

### Frontend Scripts

```bash
yarn start          # Start development server
yarn build          # Build for production
yarn test           # Run tests
```

### Backend Scripts

```bash
uvicorn server:app --reload              # Development server
uvicorn server:app --host 0.0.0.0 --port 8001  # Production server
python -m pytest                         # Run tests
```

## 🌐 API Endpoints

### Backend API Routes

All backend routes are prefixed with `/api`:

```
GET  /api/                    # Health check
GET  /api/products            # Get all products (future)
GET  /api/products/:id        # Get single product (future)
POST /api/contact             # Submit contact form (future)
GET  /api/categories          # Get all categories (future)
```

**Note:** Currently using mock data on frontend. Backend endpoints will be implemented for full database integration.

## 🎯 Environment Variables

### Frontend (.env)

```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

### Backend (.env)

```env
MONGO_URL=mongodb://localhost:27017/
DB_NAME=dtech_db
```

## 🐛 Troubleshooting

### Common Issues

**1. Port already in use**
```bash
# Kill process on port 3000 (frontend)
lsof -ti:3000 | xargs kill -9

# Kill process on port 8001 (backend)
lsof -ti:8001 | xargs kill -9
```

**2. Module not found errors**
```bash
# Frontend
cd frontend
rm -rf node_modules
yarn install

# Backend
cd backend
pip install -r requirements.txt --force-reinstall
```

**3. MongoDB connection error**
```bash
# Check MongoDB status
sudo systemctl status mongod

# Start MongoDB
sudo systemctl start mongod
```

**4. Yarn not installed**
```bash
npm install -g yarn
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- 📱 Mobile (375px - 767px)
- 📱 Tablet (768px - 1023px)
- 💻 Laptop (1024px - 1439px)
- 🖥️ Desktop (1440px+)

## 🔐 Security Notes

- Never commit `.env` files to version control
- Keep API keys and database credentials secure
- Use environment variables for sensitive data
- Implement CORS properly for production

## 📊 Performance

- Lazy loading for images
- Code splitting with React Router
- Optimized bundle size
- Fast page transitions
- Efficient re-rendering

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software owned by DTech Vietnam.

## 👥 Contact

**Công ty Cổ phần Kỹ thuật DTech**
- **Address:** Số 3/147A Tân Mai, Hoàng Mai, Hà Nội
- **Phone:** (024) 665.135.00
- **Hotline:** 0904 592 583
- **Email:** sales@dtech.vn

## 🎉 Acknowledgments

- React team for the amazing framework
- FastAPI team for the modern Python framework
- Tailwind CSS for the utility-first CSS
- Shadcn/ui for beautiful components
- All open-source contributors

---

**Built with ❤️ by DTech Vietnam Development Team**
