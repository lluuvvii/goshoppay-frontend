import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    unique: [true, 'Email already exist'],
    required: [true, 'Email is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  image_profile: {
    type: String
  },
  address: {
    type: String
  }
})

export default model('User', userSchema)