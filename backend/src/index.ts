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

app.listen(process.env.PORT, () => {
  console.log('app listening at port', process.env.PORT)
})