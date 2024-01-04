import { Schema, model } from 'mongoose'

const reviewSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'UserId is required']
  },
  product_id: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: [true, 'ProductId is required']
  },
  rating: {
    type: Number,
    required: [true, 'Rating is required']
  },
  review_date: {
    type: Date,
    default: Date.now,
    required: [true, 'Date is required']
  }
})

export default model('Review', reviewSchema)