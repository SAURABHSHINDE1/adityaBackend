import express from 'express'
import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(express.json())

const port = process.env.PORT

const db = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
})

db.connect((error)=>{

    if(error){
        console.log("some error " , error.message)
    }
    else{
        console.log("Database is Connected Successfully ")
    }

})

app.put('/stud/update/:id' , (req , res)=>{

    try{

        const {id} = req.params
        const {name , email, age , address, gender} = req.body

        const sql = 'update student set name = ? , email = ? , age = ?, address = ? , gender = ? where id = ?'

        db.query(sql ,[name , email, age , address, gender, id], (error , result )=>{

            if(error){
                return res.json({message:"some error occur in db"})
            }
            else{
                return res.json({message:"user Updated successfully"})
            }

        })

    }
    catch(error){
        res.json({message:error.message})
    }

})



app.patch('/update/:id', (req , res)=>{

    try{

        const {id} = req.params
        const {email} = req.body

        const sql = 'update student set email = ? where id = ?'

        db.query(sql , [email , id ] , (error , result )=>{
            if(error){
                return res.json({message:"some error in db " , error})
            }
            else{
                return res.json({message:"Data updated successfully "})
            }

        })

    }
    catch(error){
        return res.json({message:error.message})
    }

})

app.delete('/del/:id' , (req , res)=>{
    try{

        const {id} = req.params

        const sql = 'delete from student where id = ? '

        db.query(sql , [id] , (error , result)=>{
            if(error){
                return res.json({message :"some error"})
            }
            else{
                return res.json({message:"user deleted sucessfully "})
            }
        })

    }
    catch(error){
        return res.json({message:error.message})
    }
})


app.listen(port , ()=>{
    console.log("server is Running on port " , port)
})