import express from 'express'
import { createContactMessage } from '../controllers/contactController.js'
const router = express.Router()

router.route('/').post(createContactMessage)

export default router
