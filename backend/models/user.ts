import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, 'Username invalid, it should contain 8-20 alphanumeric letters and be unique!']
  },
  email: {
    type: String,
    unique: [true, 'Email already exist'],
    required: [true, 'Email is required']
  },
  password: {
    type: String,
  },
  image_profile: {
    type: String
  },
  address: {
    type: String
  }
})

export default model('User', userSchema)