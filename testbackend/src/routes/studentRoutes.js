import express from 'express'
import { addStudentController, studentDataController } from '../controllers/studentController.js'

const router = express.Router()

router.get('/student' , studentDataController)

router.post('/add' , addStudentController)

export default router