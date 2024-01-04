import { Schema, model } from 'mongoose'

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
    required: [true, 'Store id is required']
  },
  Store_name: {
    type: String,
    required: [true, 'Store name is required']
  },
  image: {
    type: String
  },
  category: {
    type: String,
    required: [true, 'Category is required']
  },
  description: {
    type: String
  },
  stock: {
    type: Number,
    required: [true, 'Stock is required']
  }
})

export default model('Products', productSchema)