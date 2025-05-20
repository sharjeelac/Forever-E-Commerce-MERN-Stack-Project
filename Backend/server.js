  import cors from 'cors';
  import 'dotenv/config';
  import express from 'express';
  import cloudinary from './config/cloudinary.js';
  import connecDB from './config/mongodb.js';
  import cartRouter from './Routes/cart.Routes.js';
  import productRouter from './Routes/product.routes.js';
  import userRouter from './Routes/user.routes.js';
  import orderRouter from './Routes/order.Routes.js';

  // App Config
  const app = express();
  const PORT = process.env.PORT || 5000;
  connecDB();
  // cloudinary();

  // Middlewares
  app.use(express.json());
  app.use(cors());

  app.get('/', (req, res)=>{
    res.send('API working')
  })

  // API endpoints
  app.use('/api/user', userRouter);
  app.use('/api/product', productRouter);
  app.use('/api/cart', cartRouter);
  app.use('/api/orders', orderRouter);


  app.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:${PORT}`);
  });
