import { Schema, model } from 'mongoose'

const storeSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  description: {
    type: String
  }
})

export default model('Store', storeSchema)