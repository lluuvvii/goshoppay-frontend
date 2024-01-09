import dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'
import mongoose from 'mongoose'
import routes from './routes'

// express config
const app: Express = express()
app.use(express.json())

// env config
dotenv.config()

// Middleware to view method action
app.use((req: Request, res: Response, next) => {
  console.log(req.path, req.method)
  next()
})

app.use(routes)

// connect to db
const connectDb = async () => {
  try {
    // Periksa apakah process.env.MONGO_URI tidak bernilai undefined
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI environment variable is not defined');
    }
    await mongoose.connect(process.env.MONGO_URI)

    app.listen(process.env.PORT, () => {
      console.log('connected to mongodb & listening on port', process.env.PORT)
    })
  } catch (err) {
    console.error(err)
  }
}

connectDb()