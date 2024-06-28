import ProductModel from "../model/ProductSchema.js";
import { v4 as uuidv4 } from 'uuid';

const adminController = async (req, res) => {
  try {
    const { name, cuisines, rating, deliveryTime, location } = req.body;

    // Check if req.file exists and has a filename property
    const imageOfRes = req.file ? req.file.filename : null;

    // Generate a unique ID for the product
    const productId = uuidv4();

    // Create a new product instance
    const newProduct = new ProductModel({
      name,
      cuisines,
      rating,
      deliveryTime,
      location,
      imageOfRes,
      productId
    });

    // Save the new product to the database
    await newProduct.save();

    return res.status(200).json({
      success: true,
      data: newProduct,
      message: "Product Saved!"
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to save product"
    });
  }
}

export default adminController;
