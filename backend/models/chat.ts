import { Schema, model } from 'mongoose'

const chatSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  store_id: {
    type: Schema.Types.ObjectId,
    ref: 'Store',
    required: true
  }
})

export default model('Chat', chatSchema)