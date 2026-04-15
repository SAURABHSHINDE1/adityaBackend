import { addStudent, studentdata } from "../models/studentmodel.js"

export const studentDataController = async(req , res)=>{

    try{
        
        const result = await studentdata()

        console.log(result)

        if(result.length > 0 ){
            return res.json({result})
        }
        else{
            return res.json({Message:"some error in query"})
        }

    }
    catch(error){

        return res.json({Message:"syntax error"})

    }

}



export const addStudentController = async(req , res)=>{

    try{

        const { name , email , age , address , gender} = req.body
        
        const result = await addStudent(name , email , age , address , gender)

        console.log(result)

        if(result.affectedRows > 0){
            return res.json({message :"user Added successfully"})
        }
        else{
            return res.json({message:"some error will occur "})
        }

    }
    catch(error){
        return res.json({message:"syntax error"})
    }


}