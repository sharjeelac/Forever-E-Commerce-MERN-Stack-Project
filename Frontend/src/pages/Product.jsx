import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import RelatedProducts from "../Components/RelatedProducts";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart, token } = useContext(ShopContext);
  const [productData, setProductData] = useState();
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image?.[0] || "fallback.jpg");
    }
  }, [products, productId]);

  const handleAddToCart = () => {
    
    if (!token) {
      toast.error('Login first')
      return
    } else if (size === ""){    
      toast.error("Please select a size first!");
      return;
    }
    addToCart(productData._id, size);
    toast.success("Product added to cart!");
  };

  if (!productData) {
    return <div className="p-10 text-center">Loading product details...</div>;
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500">
      {/* product data */}
      <div className="flex flex-col sm:flex-row justify-between gap-6">
        {/* product images */}
        <div className="flex sm:flex-row flex-col-reverse gap-4 w-full sm:w-[50%]">
          {/* Thumbnail Images */}
          <div className="flex gap-2 flex-row sm:flex-col w-[24%]">
            {productData.image?.length > 0 ? (
              productData.image.map((item, index) => (
                <img
                  src={item}
                  key={index}
                  alt="Thumbnail"
                  onClick={() => setImage(item)}
                  className="w-full cursor-pointer"
                />
              ))
            ) : (
              <p>No images available</p>
            )}
          </div>

          {/* Main image */}
          <div className="w-full h-auto">
            <img src={image} alt="Product" />
          </div>
        </div>

        {/* product info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            {[...Array(4)].map((_, i) => (
              <img
                src={assets.star_icon}
                className="w-3.5"
                alt="star"
                key={i}
              />
            ))}
            <img
              src={assets.star_dull_icon}
              className="w-3.5"
              alt="dull star"
            />
            <p className="pl-2">(122)</p>
          </div>

          {/* Price */}
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>

          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>

          {/* Size */}
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes?.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`cursor-pointer border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer transition-all duration-300 hover:bg-white hover:text-black hover:border hover:border-black"
          >
            ADD TO CART
          </button>

          <hr className="mt-8 sm:w-4/5" />

          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product.</p>
            <p>Cash on Delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description & Review Section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Review (122)</p>
        </div>
        <div className="flex flex-col gap-4 px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            excepturi ipsa veniam deleniti similique atque explicabo impedit
            iste.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            laboriosam! Quod dolor expedita repellendus velit quidem porro!
          </p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts
        category={productData.category}
        SubCategory={productData.SubCategory}
      />
    </div>
  );
};

export default Product;
