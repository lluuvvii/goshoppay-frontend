import { Router } from 'express'
import { getProducts } from '../../controllers/products/productControllers'

const router = Router()

router.get('/', getProducts)

export default router