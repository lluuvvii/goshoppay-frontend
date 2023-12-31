import { Router } from 'express'
import { getProducts, addProducts, editProducts, deleteProducts } from '../../controllers/products/productControllers'

const router = Router()

router.get('/', getProducts)

router.post('/', addProducts)

router.patch('/:id', editProducts)

router.delete('/:id', deleteProducts)

export default router