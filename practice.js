import express from 'express'
import dotenv from 'dotenv'
import mysql from 'mysql2'
dotenv.config()

const app = express()
const port = process.env.PORT

app.use(express.json())

const db = mysql.createConnection({
        host:process.env.HOST,
        user:process.env.USER,
        password:process.env.PASSWORD,
        database:process.env.DATABASE
})

db.connect((error)=>{

        if(error){
            console.log("Some Error Occur in DB" , error)
        }
        else{
            console.log("Database is Conneted Successfully!!!!")
        }
})

app.get('/' , (req, res)=>{
    res.send("server is Running.....")
})

app.get('/user' , (req , res)=>{

    try{

        const sql = 'select * from student'

        db.query(sql , (error , result)=>{
            if(error){
                return res.json({Message:"some error occur in query"})
            }
            
            return res.json({data : result})
        })

    }
    catch(error){
        return res.json({Message:error})
    }

})



app.post('/add' , (req , res)=>{
    try{
            
        const {name , email , age , address , gender} = req.body
    
        const sql = 'insert into student(name , email, age, address, gender) values (? , ? , ? , ? , ?)'

        db.query(sql, [name , email, age, address, gender] , (error , result )=>{
            if(error){
                return res.json({Message:"Some Error in Query"})
            }

            return res.json({Message:"User Added successfully !!", username:name , result})
        })

    }
    catch(error){
         return res.json({error})
    }
})

app.put('/update/:id' , (req , res)=>{
    try{

        const {id} = req.params
        const {name , email , age , address} = req.body

        const sql = 'update student set name = ? , email = ? , age = ? , address = ? where id = ? '

        db.query(sql , [name, email, age, address , id] , (error , result)=>{
            if(error){
                return res.json({Message :"some error in query"})
            }
            return res.json({Message:"Data updated successfully" , name , result})
        })

    }
    catch(error){

    }
})

app.patch('/update/email' , (req , res)=>{
    try{

        const sql = 'update student set email = ? where id = ? '

        const {email , id } = req.body

        db.query(sql , [email , id] , (error , result)=>{
            if(error){
                return res.json({Message:"some error in query"})
            }

             return res.json({Message:"user Email updated successfully" , result})
        })
    }
    catch(error){
        return res.json({Message:"some error in code"})
    }
})


app.delete('/del/:id' , (req , res)=>{
    try{

        const {id} = req.params

        const sql = 'delete from student where id = ?'

        db.query(sql , [id] , (error , result)=>{
            if(error){
                return res.json({Message:"some error in query"})
            }

            return res.json({Message:"user Deleted sucessfully " , id , result})
        })

    }
    catch(error){
        return res.json({Message:"some error in code"})
    }
})

app.listen(port , ()=>{
    console.log(`The Server is Running on http://localhost:${port}`  )
})