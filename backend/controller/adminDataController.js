import ProductModel from "../model/ProductSchema.js";

const adminDataController = async (req, res) => {
  try {
    const alldata = await ProductModel.find({});
    console.log(alldata);
    return res.status(200).json({
      success: true,
      data: alldata,
      message: "Data retrieved successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export default adminDataController;
