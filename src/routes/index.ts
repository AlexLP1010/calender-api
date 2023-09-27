import express from 'express'
import calender from './calender'

const router = express.Router()

router.use('/calender', calender)

export default router