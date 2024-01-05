import { Schema, model } from 'mongoose'

const booksSchema = new Schema({
  product_id: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }
})

const clothesSchema = new Schema({
  product_id: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }
})

const furnitureSchema = new Schema({
  product_id: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }
})

const gadgetsSchema = new Schema({
  product_id: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }
})

const healthSchema = new Schema({
  product_id: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }
})

const goodsSchema = new Schema({
  books: booksSchema,
  clothes: clothesSchema,
  furniture: furnitureSchema,
  gadgets: gadgetsSchema,
  health: healthSchema
})

export default model('Goods', goodsSchema)