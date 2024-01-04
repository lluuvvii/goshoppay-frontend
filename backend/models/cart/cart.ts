import { Schema, model } from 'mongoose'
import cartItemSchema from './cartItem'

const cartSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [cartItemSchema],
  total_amount: {
    type: Number,
    required: true
  }
})

export default model('Cart', cartSchema)