import userModel from "../models/userModel.js";

// ===== Add product to user cart =====
const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;
    const userData = await userModel.findById(userId);
    let cartData = userData.cartData || {};

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

    res.json({ success: true, message: "Added to cart", cartData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// ===== Update quantity in cart =====
const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;
    const userData = await userModel.findById(userId);
    let cartData = userData.cartData || {};

    if (quantity <= 0) {
      // Remove the size from the item
      if (cartData[itemId] && cartData[itemId][size] !== undefined) {
        delete cartData[itemId][size];

        // If no sizes left, remove item completely
        if (Object.keys(cartData[itemId]).length === 0) {
          delete cartData[itemId];
        }
      }
    } else {
      cartData[itemId][size] = quantity;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Cart updated", cartData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// ===== Get user cart =====
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const userData = await userModel.findById(userId);
    let cartData = userData.cartData || {};
    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// ===== Delete item from cart =====
const deleteCartItem = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = userData.cartData || {};

    if (cartData[itemId] && cartData[itemId][size] !== undefined) {
      // Remove the size
      await userModel.findByIdAndUpdate(userId, {
        $unset: { [`cartData.${itemId}.${size}`]: "" }
      });

      // Check if item has no sizes left in DB
      const updatedUser = await userModel.findById(userId);
      if (!updatedUser.cartData[itemId] || Object.keys(updatedUser.cartData[itemId]).length === 0) {
        await userModel.findByIdAndUpdate(userId, {
          $unset: { [`cartData.${itemId}`]: "" }
        });
      }

      return res.json({ success: true, message: "Item removed from cart" });
    }

    res.json({ success: false, message: "Item not found in cart" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};


export { addToCart, updateCart, getUserCart, deleteCartItem };
