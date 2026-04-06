import express from 'express'
import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const port = process.env.PORT

const db = mysql.createConnection({
        host:process.env.HOST,
        user:process.env.USER,
        password:process.env.PASSWORD,
        database:process.env.DATABASE
})

db.connect((error)=>{

    if(error){
        console.log("some error in database connection:-" , error)
    }
    else{
        console.log("Database is connected successfully ! ")
    }

})


app.get('/' , (req , res)=>{

    res.send("hello from my api")

})

app.get('/student' , (req , res)=>{

    const sql = "select * from student"

    db.query(sql ,(error , result)=>{
        if(error){
            res.send("some err " + error)
        }

        res.send(result)
    })

})



app.get('/student/male' , (req , res)=>{

    const sql = "select * from student where gender = 'male' "

    db.query(sql ,(error , result)=>{
        if(error){
            res.send("some err " + error)
        }

        res.send(result)
    })

})

app.get('/student/id' , (req , res)=>{

    const sql = "select * from student where id = 5 "

    db.query(sql ,(error , result)=>{
        if(error){
            res.send("some err " + error)
        }

        res.send(result)
    })

})




app.listen(port , ()=>{
    console.log(`The server is Running on ${port}`)
})