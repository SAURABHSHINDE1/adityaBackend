import bcrypt from 'bcrypt'
import { registerUser } from '../models/userModel.js'

export const registerController = async(req , res)=>{

    try{

        const {name ,email, password} = req.body

        const hashpass = await bcrypt.hash(password , 10)

        const result = await registerUser(name , email, hashpass)

        console.log(result)

        if(result.affectedRows > 0){
            return res.json({Message :"user Register successful"})
        }
        else{
            return res.json({message :"some problem in adding the user"})
        }


    }
    catch(error){
        return res.json({message :"erroe" , error,message})
    }

}