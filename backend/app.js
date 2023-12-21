import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

const app = express()
dotenv.config()

app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.get('/api/hello', (req, res) => {
  res.json({ hello: "hello world" })
})

app.listen(process.env.PORT, () => {
  console.log('app listening at port', process.env.PORT)
})