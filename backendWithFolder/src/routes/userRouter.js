import express from 'express'
import { getUserController } from '../controller/userController.js'

const router = express.Router()

router.get('/user' , getUserController)

router.get('/' , (req , res)=>{res.send("runing.....")})

export default router