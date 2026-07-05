# 🥬 GreenCart | Full-Stack Grocery Delivery Platform

**GreenCart** is a full-featured, responsive, and secure grocery delivery application built using the modern **MERN (MongoDB, Express, React, Node.js) Stack**. It is designed with a premium, sleek user interface and robust backend capabilities, providing seamless flows for both shoppers and sellers.

---

## 🚀 Key Features

### 🛍️ Shopper Experience (Client)
*   **Dynamic Landing Page:** Features beautiful promotional banners, category filters, and curated sections like "Best Sellers".
*   **Search & Filters:** Intuitive text search and category-based filtering to quickly find products.
*   **Advanced Cart Management:** Users can add products, increase/decrease quantities, view total calculations dynamically (based on offer prices), and remove items.
*   **Address Management:** Save and manage multiple delivery addresses linked to user accounts.
*   **Payment Checkout:** 
    *   **Cash on Delivery (COD):** Order placement with flat 2% checkout tax charges.
    *   **Secure Stripe Payment Gateway:** Initiates a Stripe Checkout session, processes card payments securely, and uses Stripe Webhooks to confirm payment status, automatically clearing user carts upon success.
*   **My Orders:** Track order history, order date, total amounts, and delivery status (e.g., "Order Placed", etc.).

### 🔐 Authentication & Roles
*   **JWT Cookie-Based Authentication:** Employs JSON Web Tokens stored securely in `httpOnly` cookies for automated, seamless authentication.
*   **Multi-Role Access:** Dedicated flows for **Shoppers** and **Sellers**.
    *   **Shoppers** register/login securely with salted passwords.
    *   **Sellers** authenticate via configured administrative credentials.

### 🏪 Seller & Admin Dashboard
*   **Add Products:** Easily list new items with details (name, descriptions, original price, discount/offer price, category) and upload multiple images processed automatically using **Cloudinary**.
*   **Stock Control:** Toggle product stock availability (`inStock`) on the fly.
*   **Order Management:** Track and view orders placed by customers across the entire platform, complete with buyer addresses and payment statuses.

---

## 🛠️ Technology Stack

### Frontend (Client)
*   **React 19 & Vite:** A fast, next-generation build tool and development server running the latest React version.
*   **Tailwind CSS v4:** Utility-first CSS styling for modern, highly responsive design.
*   **React Router DOM v7:** Client-side routing.
*   **Axios:** HTTP client with globally configured defaults for base URLs and cookie credentials.
*   **React Hot Toast:** Elegant popup notifications for user feedback.

### Backend (Server)
*   **Node.js & Express:** Lightweight, scalable server-side framework.
*   **Mongoose (MongoDB ODM):** Defines and manages database schemas and models.
*   **JWT & BcryptJS:** High-security password hashing and session token verification.
*   **Multer:** Middleware for handling `multipart/form-data` uploads.
*   **Cloudinary SDK:** Cloud service integration for uploading and optimizing product images.
*   **Stripe SDK:** Integration for payment intent sessions and webhook handling.

---

## 🗄️ Database Schemas (MongoDB)

### 1. `User` Schema
```javascript
{
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cartItems: { type: Object, default: {} } // Map of productId -> quantity
}
```

### 2. `Product` Schema
```javascript
{
  name: { type: String, required: true },
  description: { type: Array, required: true },
  price: { type: Number, required: true },
  offerPrice: { type: Number, required: true },
  image: { type: Array, required: true }, // URLs returned from Cloudinary
  category: { type: String, required: true },
  inStock: { type: Boolean, default: true }
}
```

### 3. `Address` Schema
```javascript
{
  userId: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipcode: { type: Number, required: true },
  country: { type: String, required: true },
  phone: { type: String, required: true }
}
```

### 4. `Order` Schema
```javascript
{
  userId: { type: String, required: true, ref: 'user' },
  items: [{
    product: { type: String, required: true, ref: 'product' },
    quantity: { type: Number, required: true }
  }],
  amount: { type: Number, required: true },
  address: { type: String, required: true, ref: 'address' },
  status: { type: String, default: 'Order Placed' },
  paymentType: { type: String, required: true }, // COD or Online
  isPaid: { type: Boolean, required: true, default: false }
}
```

---

## 📡 API Endpoints

### 👤 Shopper & Auth Routes (`/api/user`)
*   `POST /api/user/register` - Registers a new user & sets JWT cookie.
*   `POST /api/user/login` - Authenticates user & sets JWT cookie.
*   `GET /api/user/is-auth` - Verifies current user authentication status.
*   `POST /api/user/logout` - Clears JWT token cookies.

### 🛍️ Cart Routes (`/api/cart`)
*   `POST /api/cart/update` - Syncs user's shopping cart items with the database.

### 📍 Address Routes (`/api/address`)
*   `POST /api/address/add` - Adds a new delivery address for the user.
*   `GET /api/address/get` - Retrieves list of user's saved addresses.

### 📦 Product Routes (`/api/product`)
*   `GET /api/product/list` - Fetches all available products.
*   `POST /api/product/id` - Fetches detailed info of a single product.

### 💳 Order Routes (`/api/order`)
*   `POST /api/order/cod` - Places order using Cash on Delivery.
*   `POST /api/order/stripe` - Initializes Stripe Checkout session.
*   `GET /api/order/user` - Fetches order history for current shopper.

### 🏪 Seller Dashboard Routes (`/api/seller` & `/api/product`)
*   `POST /api/seller/login` - Logs in admin/seller using static credentials.
*   `GET /api/seller/is-auth` - Verifies seller authentication status.
*   `POST /api/product/add` - Adds new product (supports image uploads, restricted to seller authorization).
*   `POST /api/product/stock` - Toggles product stock availability status.
*   `GET /api/order/seller` - Fetches all platform orders (restricted to seller authorization).

---

## ⚙️ Environment Configurations

### Server (`server/.env`)
Create a `.env` file under the `/server` folder with:
```env
JWT_SECRET="your_jwt_secret"
NODE_ENV="development"

# Seller Credentials
SELLER_EMAIL="admin@example.com"
SELLER_PASSWORD="your_secure_password"

# MongoDB Setup
MONGODB_URI="your_mongodb_connection_string"

# Cloudinary Setup
CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
CLOUDINARY_API_KEY="your_cloudinary_api_key"
CLOUDINARY_API_SECRET="your_cloudinary_api_secret"

# Stripe Setup
STRIPE_PUBLISHABLE_KEY="your_stripe_publishable_key"
STRIPE_SECRET_KEY="your_stripe_secret_key"
STRIPE_WEBHOOK_SECRET="your_stripe_webhook_signing_secret"
```

### Client (`client/.env`)
Create a `.env` file under the `/client` folder with:
```env
VITE_CURRENCY="$"
VITE_BACKEND_URL="http://localhost:4000"
```

---

## 🏃 Running the Application

1.  **Clone / Navigate** into the `greencart` directory.
2.  **Run Backend Server:**
    ```bash
    cd server
    npm install
    npm start # Runs on http://localhost:4000
    ```
3.  **Run Frontend Client:**
    ```bash
    cd client
    npm install
    npm run dev # Runs on http://localhost:5173
    ```
