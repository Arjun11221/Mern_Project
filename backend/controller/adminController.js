import ProductModel from "../model/ProductSchema.js";
import { v4 as uuidv4 } from 'uuid';

const adminController = async (req, res) => {
  try {
    const { name, cuisines, rating, deliveryTime, location } = req.body;

    if (!name || !cuisines || !rating || !deliveryTime || !location) {
      console.log('Missing required fields');
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    // Convert rating to a number and check if it is a valid number
    const parsedRating = Number(rating);
    if (isNaN(parsedRating) || parsedRating<0 || parsedRating>=6 ) {
      return res.status(400).json({
        success: false,
        message: "Rating must be a valid number",
      });
    }

    // Check if req.file exists and has a filename property
    const imageOfRes = req.file ? req.file.filename : null;
    if (!imageOfRes) {
      console.log('Image is required');
      return res.status(400).json({
        success: false,
        message: "Image is required"
      });
    }

    const productId = uuidv4();

    const newProduct = new ProductModel({
      name,
      cuisines,
      rating: parsedRating, 
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
    console.error('Error saving product:', error);
    return res.status(500).json({
      success: false,
      message: "Failed to save product",
      error: error.message
    });
  }
}

export default adminController;
