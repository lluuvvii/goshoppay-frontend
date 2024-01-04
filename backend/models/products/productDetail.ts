import { Schema } from 'mongoose'

const productDetailSchema = new Schema({
  size: {
    type: String
  },
  color: {
    type: String
  },
  material: {
    type: String
  },
  features: {
    type: String
  },
  images: [{
    type: String
  }]
})

export default productDetailSchema