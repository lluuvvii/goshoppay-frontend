// const dotenv = require("dotenv")
// const express, { Request, Response } = require("express")
// const mongoose = require('mongoose')
import dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'
import routes from './routes'
import mongoose from 'mongoose'

const app: Express = express()
dotenv.config()

app.use(express.json())

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
  } catch(err) {
    console.error(err)
  }
}

connectDb()