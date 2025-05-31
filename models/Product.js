import mongoose from 'mongoose';

// mongoose schema that defines a product
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    image: String
});
const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema)

module.exports = Product;