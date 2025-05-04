import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
  user: String
});

const Product = mongoose.model('Product', productSchema);

export default Product;
