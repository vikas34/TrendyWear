import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

//Function for add product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    let imageUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    // console.log(name, description, price, category, subCategory, sizes, bestseller)
    // console.log(imageUrl)
    const productData = {
      name,
      description,
      category,
      subCategory,
      price: Number(price),
      bestseller: bestseller === "true" ? "true" : "false",
      sizes: JSON.parse(sizes),
      image: imageUrl,
      date: Date.now(),
    };

    console.log(productData);
    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product Added" });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

//Function for list product
const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

//Function for removing product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product Removed" });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

//Function for single product
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

export { listProduct, addProduct, removeProduct, singleProduct };
