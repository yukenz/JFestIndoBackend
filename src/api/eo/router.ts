
import { Router } from "express";
// import get from './get'
import post from './post'
import get from './get'

const router = Router()
const URI: string = '/eo'

router.post(URI, post)
router.get(URI, get)
router.get(URI + '/:id', get)
// router.get('URI', get)

export default router