import ProductModel from "../model/ProductSchema.js";

const adminController = async(req,res)=>{
    try {
        const products = await new ProductModel({
            name : req.body.name,
            cuisine : req.body.cuisine,
            rating : req.body.rating,
            deliveryTime : req.body.deliveryTime,
            location : req.body.location,
            image : req.body.image
        });

        const productSaved = await products.save();
        console.log("Products Saved");
        
        return res.status(200).json({
            success: true,
            data : productSaved,
            message : "Product Saved !"

        })
            
    } catch (error) {
        console.log(error.message);
    }
}

export default adminController;