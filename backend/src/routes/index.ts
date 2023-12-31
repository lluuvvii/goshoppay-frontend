import express, { Express } from 'express'
import products from './products'

const app: Express = express()

app.use('/api/products', products)

export default app