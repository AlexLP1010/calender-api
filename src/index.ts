import express from 'express'
import routes from './routes'
import { errorHandler } from './middlewares/errorhandler'

const app = express()

app.use(express.json())

const PORT = 3000

app.use('/api', routes)
app.use(errorHandler)

app.listen(PORT)