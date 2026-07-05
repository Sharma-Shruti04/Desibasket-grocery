import mongoose from 'mongoose';
import 'dotenv/config';
import Product from './models/Product.js';

const products = [
  // --- vegetables (10 items) ---
  {
    name: "Potato (Aloo) 1kg",
    description: ["Fresh and organic potatoes directly from local farms.", "Rich source of carbohydrates and vitamins.", "Perfect for curries, fries, and baking."],
    price: 40,
    offerPrice: 32,
    image: ["https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&auto=format&fit=crop&q=80"],
    category: "Vegetables",
    inStock: true
  },
  {
    name: "Onion (Pyaz) 1kg",
    description: ["Fresh red onions, highly flavorful.", "Essential kitchen staple for daily cooking.", "Excellent source of antioxidants."],
    price: 50,
    offerPrice: 38,
    image: ["https://images.unsplash.com/photo-1508747703725-719ae25db3e4?w=500&auto=format&fit=crop&q=80"],
    category: "Vegetables",
    inStock: true
  },
  {
    name: "Tomato (Tamatar) 1kg",
    description: ["Juicy, ripe red tomatoes.", "Grown organically, handpicked for quality.", "Perfect for salads, gravies, and sauces."],
    price: 60,
    offerPrice: 45,
    image: ["https://images.unsplash.com/photo-1595855759920-86582396756a?w=500&auto=format&fit=crop&q=80"],
    category: "Vegetables",
    inStock: true
  },
  {
    name: "Spinach (Palak) 250g",
    description: ["Fresh green spinach leaves, washed and ready.", "Packed with iron, vitamins, and minerals.", "Ideal for soups, salads, and traditional palak paneer."],
    price: 20,
    offerPrice: 15,
    image: ["https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&auto=format&fit=crop&q=80"],
    category: "Vegetables",
    inStock: true
  },
  {
    name: "Carrot (Gajar) 500g",
    description: ["Sweet and crunchy orange carrots.", "Excellent source of beta-carotene and Vitamin A.", "Great for raw snacking, salads, or sweet gajar halwa."],
    price: 35,
    offerPrice: 28,
    image: ["https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&auto=format&fit=crop&q=80"],
    category: "Vegetables",
    inStock: true
  },
  {
    name: "Cucumber (Kheera) 500g",
    description: ["Crisp and refreshing cucumbers.", "High water content to keep you hydrated.", "Best suited for refreshing summer salads."],
    price: 30,
    offerPrice: 22,
    image: ["https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=500&auto=format&fit=crop&q=80"],
    category: "Vegetables",
    inStock: true
  },
  {
    name: "Capsicum (Shimla Mirch) 250g",
    description: ["Crispy and fresh green capsicum.", "Adds a mild pepper flavor and vibrant crunch.", "Excellent for stir-fries, noodles, and pizzas."],
    price: 25,
    offerPrice: 18,
    image: ["https://images.unsplash.com/photo-1563565088989-ecfd299efecb?w=500&auto=format&fit=crop&q=80"],
    category: "Vegetables",
    inStock: true
  },
  {
    name: "Cauliflower (Phool Gobhi) 1pc",
    description: ["Compact, white heads of fresh cauliflower.", "Low-calorie, versatile vegetable.", "Ideal for gobhi parathas, aloo gobhi, or roasting."],
    price: 45,
    offerPrice: 35,
    image: ["https://images.unsplash.com/photo-1568584711298-bc79c6560413?w=500&auto=format&fit=crop&q=80"],
    category: "Vegetables",
    inStock: true
  },
  {
    name: "Coriander (Dhania) 100g",
    description: ["Fresh and highly aromatic coriander leaves.", "Perfect for garnishing Indian curries and dals.", "Washed and carefully selected bunches."],
    price: 15,
    offerPrice: 10,
    image: ["https://images.unsplash.com/photo-1608797178974-15b35a61d121?w=500&auto=format&fit=crop&q=80"],
    category: "Vegetables",
    inStock: true
  },
  {
    name: "Lemon (Nimbu) 250g",
    description: ["Juicy, fresh yellow lemons.", "Rich in Vitamin C and citric acid.", "Perfect for fresh lemonade, garnishes, and dressings."],
    price: 30,
    offerPrice: 24,
    image: ["https://images.unsplash.com/photo-1590502593747-42a996133562?w=500&auto=format&fit=crop&q=80"],
    category: "Vegetables",
    inStock: true
  },

  // --- fruits (8 items) ---
  {
    name: "Red Apple (Kashmir) 1kg",
    description: ["Sweet, crisp, and juicy Kashmiri apples.", "High in fiber and antioxidants to boost immunity.", "Perfect for snacking, baking, or fresh juice."],
    price: 180,
    offerPrice: 149,
    image: ["https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&auto=format&fit=crop&q=80"],
    category: "Fruits",
    inStock: true
  },
  {
    name: "Banana (Robusta) 1 Dozen",
    description: ["Sweet, fully ripe bananas.", "Rich source of potassium and instant energy.", "Perfect for breakfast smoothies, kids, or quick snacking."],
    price: 70,
    offerPrice: 55,
    image: ["https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format&fit=crop&q=80"],
    category: "Fruits",
    inStock: true
  },
  {
    name: "Alphonso Mango 1kg",
    description: ["Premium, rich, sweet Alphonso mangoes.", "The king of mangoes, intensely flavorful.", "Ideal for milkshakes, mango lassi, or direct consumption."],
    price: 250,
    offerPrice: 199,
    image: ["https://images.unsplash.com/photo-1553279768-865429fa0078?w=500&auto=format&fit=crop&q=80"],
    category: "Fruits",
    inStock: true
  },
  {
    name: "Orange (Nagpur) 1kg",
    description: ["Juicy, sweet Nagpur oranges.", "Loaded with Vitamin C and natural antioxidants.", "Easy to peel and extremely refreshing."],
    price: 120,
    offerPrice: 99,
    image: ["https://images.unsplash.com/photo-1547514701-42782101795e?w=500&auto=format&fit=crop&q=80"],
    category: "Fruits",
    inStock: true
  },
  {
    name: "Seedless Black Grapes 500g",
    description: ["Plump and sweet seedless black grapes.", "Rich in skin-friendly antioxidants.", "Great addition to fruit salads and cheese platters."],
    price: 90,
    offerPrice: 75,
    image: ["https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=500&auto=format&fit=crop&q=80"],
    category: "Fruits",
    inStock: true
  },
  {
    name: "Pomegranate (Anar) 1kg",
    description: ["Juicy, deep red pomegranate arils.", "Rich in iron and beneficial nutrients.", "Delicious as is or sprinkled on salads and curd rice."],
    price: 220,
    offerPrice: 179,
    image: ["https://images.unsplash.com/photo-1591871937573-74dbba515c4c?w=500&auto=format&fit=crop&q=80"],
    category: "Fruits",
    inStock: true
  },
  {
    name: "Papaya (Medium) 1pc",
    description: ["Sweet and buttery papaya.", "Contains papain enzyme, excellent for digestion.", "Perfect for morning breakfast bowls."],
    price: 60,
    offerPrice: 48,
    image: ["https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=500&auto=format&fit=crop&q=80"],
    category: "Fruits",
    inStock: true
  },
  {
    name: "Watermelon (Kiran) 1pc",
    description: ["Sweet Kiran watermelon with bright red flesh.", "Extremely hydrating, composed of 92% water.", "Ideal for refreshing summer juices."],
    price: 80,
    offerPrice: 65,
    image: ["https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500&auto=format&fit=crop&q=80"],
    category: "Fruits",
    inStock: true
  },

  // --- drinks (8 items) ---
  {
    name: "Coca-Cola 1.25L",
    description: ["Refreshing and sparkling soft drink.", "Best served ice cold with meals.", "Perfect for parties and get-togethers."],
    price: 70,
    offerPrice: 65,
    image: ["https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&auto=format&fit=crop&q=80"],
    category: "Drinks",
    inStock: true
  },
  {
    name: "Pepsi 1.25L",
    description: ["Sweet and refreshing cola beverage.", "Crisp taste that hits the spot.", "Great pairing with pizzas and snacks."],
    price: 70,
    offerPrice: 65,
    image: ["https://images.unsplash.com/photo-1527960656366-ee2a999e32e6?w=500&auto=format&fit=crop&q=80"],
    category: "Drinks",
    inStock: true
  },
  {
    name: "Sprite 1.25L",
    description: ["Crisp, clean, lemon-lime flavored soda.", "Naturally caffeine-free, highly refreshing.", "Ideal thirst quencher."],
    price: 70,
    offerPrice: 65,
    image: ["https://images.unsplash.com/photo-1625772290748-160b630074f6?w=500&auto=format&fit=crop&q=80"],
    category: "Drinks",
    inStock: true
  },
  {
    name: "Paper Boat Mango Juice 250ml",
    description: ["Traditional Indian mango drink with pulp.", "Rich taste of real sweet mangoes.", "Contains no added preservatives."],
    price: 40,
    offerPrice: 35,
    image: ["https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&auto=format&fit=crop&q=80"],
    category: "Drinks",
    inStock: true
  },
  {
    name: "Real Mixed Fruit Juice 1L",
    description: ["Nutritious blend of fresh tropical fruits.", "Rich in vitamins, essential nutrients.", "Perfect healthy addition to breakfast."],
    price: 130,
    offerPrice: 110,
    image: ["https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500&auto=format&fit=crop&q=80"],
    category: "Drinks",
    inStock: true
  },
  {
    name: "Red Bull Energy Drink 250ml",
    description: ["Vitalizes body and mind.", "Contains high-quality caffeine and taurine.", "Popular choice for active lifestyles."],
    price: 125,
    offerPrice: 115,
    image: ["https://images.unsplash.com/photo-1622543956221-1f7c37db4552?w=500&auto=format&fit=crop&q=80"],
    category: "Drinks",
    inStock: true
  },
  {
    name: "Amul Kool Cafe 200ml",
    description: ["Deliciously refreshing cold coffee.", "Made with rich, creamy milk and real coffee beans.", "Best enjoyed chilled on the go."],
    price: 30,
    offerPrice: 27,
    image: ["https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format&fit=crop&q=80"],
    category: "Drinks",
    inStock: true
  },
  {
    name: "Raw Pressery Tender Coconut Water 200ml",
    description: ["100% natural, unsweetened coconut water.", "Excellent source of natural electrolytes.", "Hydrates and rejuvenates instantly."],
    price: 60,
    offerPrice: 50,
    image: ["https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=500&auto=format&fit=crop&q=80"],
    category: "Drinks",
    inStock: true
  },

  // --- instant (8 items) ---
  {
    name: "Maggi 2-Min Masala Noodles 280g",
    description: ["India's favorite instant masala noodles.", "Quick, easy, and ready in 2 minutes.", "Features the signature spice blend."],
    price: 56,
    offerPrice: 52,
    image: ["https://images.unsplash.com/photo-1612927601601-6638404737ce?w=500&auto=format&fit=crop&q=80"],
    category: "Instant",
    inStock: true
  },
  {
    name: "Yippee Magic Masala Noodles 280g",
    description: ["Non-sticky, round block instant noodles.", "Infused with unique magic spices.", "Stays long and slurpy without clumping."],
    price: 56,
    offerPrice: 50,
    image: ["https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=80"],
    category: "Instant",
    inStock: true
  },
  {
    name: "Knorr Classic Tomato Soup 50g",
    description: ["Warm, rich, and delicious classic tomato soup.", "Ready in 3 simple steps.", "No artificial colors or preservatives."],
    price: 60,
    offerPrice: 52,
    image: ["https://images.unsplash.com/photo-1547592165-e1d17f97a15a?w=500&auto=format&fit=crop&q=80"],
    category: "Instant",
    inStock: true
  },
  {
    name: "Top Ramen Curry Noodles 280g",
    description: ["Instant noodles with a rich, savory curry flavor.", "Satisfying spicy broth.", "Quick meal for late nights."],
    price: 56,
    offerPrice: 50,
    image: ["https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=80"],
    category: "Instant",
    inStock: true
  },
  {
    name: "Haldiram's Bhujia Sev 350g",
    description: ["Classic, crispy tepary bean and chickpea flour snack.", "Mildly spiced, extremely crunchy.", "Traditional tea-time favorite."],
    price: 110,
    offerPrice: 95,
    image: ["https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500&auto=format&fit=crop&q=80"],
    category: "Instant",
    inStock: true
  },
  {
    name: "Lay's Classic Salted Chips 50g",
    description: ["Perfectly sliced, crispy golden potato chips.", "Lightly salted for a classic taste.", "Excellent snacking option anywhere."],
    price: 20,
    offerPrice: 18,
    image: ["https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=500&auto=format&fit=crop&q=80"],
    category: "Instant",
    inStock: true
  },
  {
    name: "Kurkure Masala Munch 90g",
    description: ["Crunchy, tangy, and spicy corn puffs.", "Perfect blend of traditional Indian spices.", "Loved by all snack enthusiasts."],
    price: 30,
    offerPrice: 27,
    image: ["https://images.unsplash.com/photo-1599490659273-e3b6942a6328?w=500&auto=format&fit=crop&q=80"],
    category: "Instant",
    inStock: true
  },
  {
    name: "Oreo Sandwich Cookies 120g",
    description: ["Rich chocolate sandwich cookies with vanilla cream.", "Perfect for dunking in cold milk.", "Voted the world's favorite cookie."],
    price: 40,
    offerPrice: 35,
    image: ["https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&auto=format&fit=crop&q=80"],
    category: "Instant",
    inStock: true
  },

  // --- dairy (6 items) ---
  {
    name: "Amul Taaza Toned Milk 1L",
    description: ["Fresh and pure toned milk from pasteurized sources.", "Rich in calcium and proteins.", "Ideal for daily tea, coffee, and curds."],
    price: 56,
    offerPrice: 54,
    image: ["https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&auto=format&fit=crop&q=80"],
    category: "Dairy",
    inStock: true
  },
  {
    name: "Amul Fresh Paneer 200g",
    description: ["Soft and creamy cottage cheese.", "Rich source of proteins and healthy fats.", "Comes in hygienic, vacuum-sealed packaging."],
    price: 90,
    offerPrice: 82,
    image: ["https://images.unsplash.com/photo-1589119908995-c6800ffca835?w=500&auto=format&fit=crop&q=80"],
    category: "Dairy",
    inStock: true
  },
  {
    name: "Amul Pasteurised Butter 100g",
    description: ["Salted yellow table butter.", "Creamy texture, adds delicious flavor.", "Perfect for toast, parathas, and baking."],
    price: 60,
    offerPrice: 56,
    image: ["https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500&auto=format&fit=crop&q=80"],
    category: "Dairy",
    inStock: true
  },
  {
    name: "Britannia Cheese Slices 200g",
    description: ["Rich, creamy, and individually wrapped cheese slices.", "Melts beautifully over hot burgers and toasties.", "Good source of calcium."],
    price: 160,
    offerPrice: 145,
    image: ["https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=500&auto=format&fit=crop&q=80"],
    category: "Dairy",
    inStock: true
  },
  {
    name: "Mother Dairy Plain Dahi 400g",
    description: ["Thick and creamy set yogurt.", "Hygienically prepared with no added stabilizers.", "Excellent probiotic for digestive health."],
    price: 35,
    offerPrice: 32,
    image: ["https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&auto=format&fit=crop&q=80"],
    category: "Dairy",
    inStock: true
  },
  {
    name: "Nestlé Greek Yogurt Strawberry 100g",
    description: ["Thick, low-fat Greek yogurt with strawberries.", "High protein content, delicious fruity taste.", "Perfect guilt-free dessert or snack."],
    price: 50,
    offerPrice: 45,
    image: ["https://images.unsplash.com/photo-1571244856353-fb0e38d7c49f?w=500&auto=format&fit=crop&q=80"],
    category: "Dairy",
    inStock: true
  },

  // --- bakery (5 items) ---
  {
    name: "Britannia White Bread 400g",
    description: ["Soft, fresh, and sliced white bread.", "Made with high-quality refined flour.", "Perfect for morning sandwiches and toast."],
    price: 30,
    offerPrice: 27,
    image: ["https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=80"],
    category: "Bakery",
    inStock: true
  },
  {
    name: "English Oven Brown Bread 400g",
    description: ["Nutritious sliced brown wheat bread.", "High in dietary fiber for better digestion.", "Healthy alternative for daily breakfasts."],
    price: 45,
    offerPrice: 40,
    image: ["https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=500&auto=format&fit=crop&q=80"],
    category: "Bakery",
    inStock: true
  },
  {
    name: "Butter Croissant 2pcs",
    description: ["Flaky, golden, and buttery croissants.", "Freshly baked, crisp on the outside, soft inside.", "Best paired with hot coffee."],
    price: 120,
    offerPrice: 99,
    image: ["https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop&q=80"],
    category: "Bakery",
    inStock: true
  },
  {
    name: "Chocolate Truffle Pastry 1pc",
    description: ["Decadent layer cake pastry filled with chocolate ganache.", "Rich, moist, and intensely chocolaty.", "Perfect dessert indulgence."],
    price: 80,
    offerPrice: 69,
    image: ["https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=80"],
    category: "Bakery",
    inStock: true
  },
  {
    name: "Eggless Vanilla Muffins 4pcs",
    description: ["Soft, fluffy eggless vanilla muffins.", "Perfect sweetness, rich vanilla aroma.", "Great treat for kids and evening tea."],
    price: 100,
    offerPrice: 85,
    image: ["https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=500&auto=format&fit=crop&q=80"],
    category: "Bakery",
    inStock: true
  },

  // --- grains & cereals (5 items) ---
  {
    name: "Fortune Basmati Rice 1kg",
    description: ["Premium long-grain Basmati rice.", "Delightful aroma, separate fluffy grains when cooked.", "Best suited for biryanis, pulao, and fried rice."],
    price: 150,
    offerPrice: 129,
    image: ["https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&auto=format&fit=crop&q=80"],
    category: "Grains",
    inStock: true
  },
  {
    name: "Aashirvaad Shudh Chakki Atta 5kg",
    description: ["100% whole wheat flour, stone ground.", "Keeps rotis soft and puffed for longer.", "Contains no added preservatives or chemicals."],
    price: 260,
    offerPrice: 235,
    image: ["https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&auto=format&fit=crop&q=80"],
    category: "Grains",
    inStock: true
  },
  {
    name: "Tata Sampann Toor Dal 1kg",
    description: ["Unpolished, naturally processed pigeon pea lentils.", "High protein and dietary fiber content.", "Perfect for daily healthy comfort dal tadka."],
    price: 180,
    offerPrice: 165,
    image: ["https://images.unsplash.com/photo-1547058886-f3b0c2a27ffb?w=500&auto=format&fit=crop&q=80"],
    category: "Grains",
    inStock: true
  },
  {
    name: "Kellogg's Rolled Oats 1kg",
    description: ["100% natural whole grain rolled oats.", "Rich in soluble fiber, great for weight management.", "Fast cooking breakfast option."],
    price: 190,
    offerPrice: 169,
    image: ["https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=500&auto=format&fit=crop&q=80"],
    category: "Grains",
    inStock: true
  },
  {
    name: "India Gate Dubar Basmati Rice 5kg",
    description: ["Aromatic long grain basmati rice, aged to perfection.", "Excellent fluffy texture.", "Ideal for everyday rice meals."],
    price: 650,
    offerPrice: 549,
    image: ["https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=500&auto=format&fit=crop&q=80"],
    category: "Grains",
    inStock: true
  }
];

const seedDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI?.trim();

    if (!mongoUri || mongoUri === "--------------") {
      throw new Error("MONGODB_URI is not configured in server/.env.");
    }

    console.log("Connecting to database...");
    await mongoose.connect(mongoUri);
    console.log("Database connected successfully!");

    console.log("Clearing existing products...");
    await Product.deleteMany({});
    console.log("Existing products cleared.");

    console.log(`Inserting ${products.length} categorized products...`);
    await Product.insertMany(products);
    console.log("Database seeded successfully with 50 products!");

  } catch (error) {
    console.error("Seeding failed:", error.message);
  } finally {
    await mongoose.disconnect();
    console.log("Database disconnected.");
    process.exit(0);
  }
};

seedDB();
