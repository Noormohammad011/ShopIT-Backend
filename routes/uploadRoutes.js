import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'
import path from 'path'
const uploadImage =
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
      res.status(404)
      throw new Error('Product not found')
    }
    if (!req.files) {
      res.status(400)
      throw new Error('Please upload a file')
    }
    const file = req.files.file
    if (!file.mimetype.startsWith('image')) {
      res.status(400)
      throw new Error('Please upload an image file')
    }
    if (file.size > process.env.MAX_FILE_UPLOAD) {
      res.status(400)
      throw new Error(
        `Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`
      )
    }
    file.name = `photo_${product._id}${path.parse(file.name).ext}`
    file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async (err) => {
      if (err) {
        console.error(err)
        res.status(500)
        throw new Error('Problem with file upload')
      }
      const imageUrl = `images/${file.name}`
      await Product.findByIdAndUpdate(req.params.id, { image: imageUrl })
      res.status(200).json(file.name)
    })
  }) 
  
export default uploadImage
