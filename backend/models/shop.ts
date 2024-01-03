import { Schema, model } from 'mongoose'

const shopSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  user_id: {
    type: Schema.Types.ObjectId,
    required: true
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

export default model('Shop', shopSchema)