import { Schema, model } from 'mongoose'

const storeSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  user_id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  products: {
    type: String
  }
})

export default model('Store', storeSchema)