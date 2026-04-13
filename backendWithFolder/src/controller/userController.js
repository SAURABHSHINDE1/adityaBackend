import { getUserData } from "../models/userModel.js"


export const getUserController = async(req , res)=>{

    try{

        const result = await getUserData()

        console.log(result)

        if(result.length > 0){
            return res.json({result})
        }
        else{
            return res.json({Message:"some error in query" })
        }

    }
    catch(error){
        return res.json({Message:"some error in syntax"})

    }

}