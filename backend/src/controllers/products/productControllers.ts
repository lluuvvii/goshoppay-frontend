import { Request, Response } from 'express'

const getProducts = (req: Request, res: Response) => {
  res.status(200).json({ products: "hp ovvo" })
}

export { getProducts }