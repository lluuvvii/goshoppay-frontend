import { Request, Response } from 'express'

const getUsers = (req: Request, res: Response) => {
  res.status(200).json({ products: "hp ovvo" })
}

export { getUsers }