import express from 'express';
import {
  addProduct,
  removeProduct,
  listProduct,
  singleProduct,
} from '../controllers/product.controllers.js';
import upload from '../Middlewares/multer.js';
import adminAuth from '../Middlewares/adminAuth.js';

const productRouter = express.Router();

productRouter.post(
  '/add',adminAuth,
  upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 },
  ]),
  addProduct,
);
productRouter.post('/remove',adminAuth, removeProduct);
productRouter.post('/single', singleProduct);
productRouter.get('/list', listProduct);

export default productRouter;
