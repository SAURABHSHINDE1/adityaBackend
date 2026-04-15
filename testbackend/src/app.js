import express, { Router } from 'express'
import router from './routes/studentRoutes.js'

const app = express()

app.use(express.json())

app.use('/api' , router)

// app.use('/auth' , router)

export default app