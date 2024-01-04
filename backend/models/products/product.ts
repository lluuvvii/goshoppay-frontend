import { Schema, model } from 'mongoose'
import productDetailSchema from './productDetail'

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  price: {
    type: Number,
    required: [true, 'Price is required']
  },
  store_id: {
    type: Schema.Types.ObjectId,
    ref: 'Store',
    required: [true, 'StoreId is required']
  },
  image: {
    type: String
  },
  category: {
    type: String,
  },
  description: {
    type: String
  },
  stock: {
    type: Number,
    required: [true, 'Stock is required']
  },
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'Review'
  }],
  details: productDetailSchema
})

export default model('Products', productSchema)