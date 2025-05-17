import { v2 as cloudinary } from 'cloudinary';
import productModel from '../Models/product.model.js';

// add product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      price,
      description,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    // Handle image uploads from fields
    const files = req.files;
    const imageFields = ['image1', 'image2', 'image3', 'image4'];

    const uploadedImages = await Promise.all(
      imageFields.map(async (field) => {
        if (files[field] && files[field][0]) {
          console.log('Uploading')
          const result = await cloudinary.uploader.upload(files[field][0].path, {
            resource_type: 'image',
          });
          return result.secure_url;
        }
        return null;
      })
    );

    console.log('uploaded complete')

    const imageUrls = uploadedImages.filter((url) => url !== null);

    const parsedSizes = sizes ? JSON.parse(sizes) : [];

    const productData = {
      name,
      description,
      price: Number(price),
      sizes: parsedSizes,
      category,
      subCategory,
      bestseller: bestseller === 'true',
      image: imageUrls,
      date: Date.now(),
    };

    const product = new productModel(productData);
    await product.save();

    res.status(200).json({ success: true, message: 'Product Added' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// removing product
const removeProduct = async (req, res) => {
  try {
    const id = req.body.id;
    await productModel.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: 'Product Deleted' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: error.message });
  }
};

// list all product
const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    res.json({ success: false, message: error.message }).status(400);
  }
};

// for single product info
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.status(200).json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: error.message });
  }
};

export { addProduct, listProduct, removeProduct, singleProduct };
