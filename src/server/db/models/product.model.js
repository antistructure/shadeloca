import { Schema } from 'mongoose';

const productSchema = new Schema({
  brand: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  productLink: {
    type: String,
    required: false
  },
  imageLink: {
    type: String,
    required: false
  },
  productType: {
    type: String,
    required: false
  },
  category: {
    type: String,
    required: false
  },
  tags: {
    type: [String],
    required: false,
    default: undefined
  },
  price: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    required: false
  }  
},
{
 timestamps: true
});

export const Product = mongoose.model("Product", productSchema);
