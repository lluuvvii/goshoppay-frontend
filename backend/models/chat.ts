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
  },
  messages: [{
    sender: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }]
}, { timestamps: true })

export default model('Chat', chatSchema)