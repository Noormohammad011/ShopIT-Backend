import asyncHandler from 'express-async-handler'
import sendEmail from '../utils/sendEmail.js'


// @desc create contact message
// @route POST /api/contacts
// @access Public


const createContactMessage = asyncHandler(async (req, res) => { 
    const { name, email, subject, message } = req.body
    if (name && email && subject && message) {
        await sendEmail({ name, email, subject, message })
        res.status(200).json({ message: 'Message sent' })
    } else {
        res.status(400)
        throw new Error('Error sending message')
    }
})

export { createContactMessage }