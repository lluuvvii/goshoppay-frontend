import { Schema, model } from 'mongoose'

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  shop_name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  stock: {
    type: Number,
    required: true
  }
})

export default model('Products', productSchema)