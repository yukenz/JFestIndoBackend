
import { Router } from "express";
import get from './get'
import post from './post'

const router = Router()
const URI: string = '/event'

router.post(URI, post)
router.get(URI, get)
router.get(URI + '/:id', get)

export default router