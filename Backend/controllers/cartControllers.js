import userModel from '../Models/user.model.js';

// add products to user cart
const addToCart = async (req, res) => {
  try {
    const { itemId, size } = req.body;
    const userId = req.user.id; // Use token's verified ID

    const userData = await userModel.findById(userId);
    let cartData = userData.cartData || {}; // fallback to empty cart
    console.log(cartData)
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: 'Added to Cart' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


// update user cart
const updateCart = async (req, res) => {
  try {
    const { itemId, size, quantity } = req.body;
    const userId = req.user.id;

    const userData = await userModel.findById(userId);
    let cartData = userData.cartData;

    if (cartData?.[itemId]?.[size] !== undefined) {
      cartData[itemId][size] = quantity;
    } else {
      return res.json({ success: false, message: "Item not found in cart" });
    }

    await userModel.findByIdAndUpdate(userId, { $set: { cartData } });

    res.json({ success: true, message: "Cart Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// get products to user cart
const getUserCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const userData = await userModel.findById(userId);

    const cartData = userData.cartData || {};
    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


export { addToCart, updateCart, getUserCart };
