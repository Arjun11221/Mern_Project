import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cuisines: {
    type: [String],
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  deliveryTime: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  imageOfRes: { 
    type: String,
    required: true
  },
  productId: {
    type: String,
    required: true
  }
});

const ProductModel = mongoose.model('Product', productSchema);

export default ProductModel;
