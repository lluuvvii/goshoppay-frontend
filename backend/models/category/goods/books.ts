import { Schema } from 'mongoose'

const booksSchema = new Schema({
  product_id: {
    type: Schema.Types.ObjectId
  }
})

export default booksSchema