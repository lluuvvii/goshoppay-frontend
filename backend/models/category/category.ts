import { Schema, model } from 'mongoose'

const categorySchema = new Schema({
  product_id: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  description: {
    type: String
  },
  goods_id: {
    type: Schema.Types.ObjectId
  }
})

export default model('Category', categorySchema)