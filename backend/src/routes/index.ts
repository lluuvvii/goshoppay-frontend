import express, { Express } from 'express'
import products from './products'
import users from './users'

const app: Express = express()

app.use('/api/products', products)

app.use('/api/user', users)

export default app