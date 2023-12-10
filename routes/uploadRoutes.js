import express from 'express'
import __dirname from 'path'
import asyncHandler from 'express-async-handler'
import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'
const router = express.Router()


router.post(
  '/',
  asyncHandler(async (req, res) => {
    const result = await cloudinary.uploader.upload(
      req.files.file.tempFilePath,
      {
        folder: 'product_image',
        use_filename: true,
        allowed_formats: ['jpg', 'png', 'jpeg', 'gif'],
        transformation: [{ width: 640, height: 510, crop: 'limit' }],
      }
    )
    fs.rm('tmp', { recursive: true }, (err) => {
      if (err) {
        throw err
      }
    })
    return res.status(200).json({ image: result.secure_url })
  })
)

export default router
