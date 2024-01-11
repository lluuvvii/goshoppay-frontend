import { Request, Response } from 'express'
import User from '../../../models/user'

const getUsers = (req: Request, res: Response) => {
  res.status(200).json({ products: "hp ovvo" })
}

const addUser = async (req: Request, res: Response) => {
  try {
    const { profile } = req.body
    const userExists = await User.findOne({ email: profile.email })

    if (!userExists) {
      await User.create({
        email: profile.email,
        username: profile.name.replace(" ", "").toLowerCase(),
        image: profile.picture
      })
    }

    res.status(200).json({ userExists })
  } catch (err: any) {
    console.error(err)
    res.status(400).json({ error: err.message })
  }
}

export { getUsers, addUser }