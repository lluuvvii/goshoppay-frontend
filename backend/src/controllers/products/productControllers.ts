import mongoose from 'mongoose'
import { Request, Response } from 'express'
import Product from '../../../models/product'

const getProducts = async (req: Request, res: Response) => {
  const products = await Product.find({})

  res.status(200).json({ products })
}

const addProducts = async (req: Request, res: Response) => {
  const { name, price, shop_name, description, stock } = req.body
  try {
    const product = await Product.create({ name, price, shop_name, description, stock })

    console.log(product)

    res.status(200).json({ product })
  } catch (err: any) {
    res.status(400).json({ error: err.message })
  }
}

const editProducts = async (req: Request, res: Response) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such product' })
  }

  const product = await Product.findOneAndUpdate({ _id: id }, {
    ...req.body
  })

  if (!product) {
    return res.status(404).json({ error: 'No such product' })
  }

  res.status(200).json(product)
}

const deleteProducts = async (req: Request, res: Response) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such product' })
  }

  const product = await Product.findOneAndDelete({ _id: id })

  if (!product) {
    return res.status(404).json({ error: 'No such product' })
  }

  res.status(200).json(product)
}

export { getProducts, addProducts, editProducts, deleteProducts }