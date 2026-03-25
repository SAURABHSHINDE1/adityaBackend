import express from 'express'
import mysql from 'mysql2'

const app = express()

const port = 4000

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"system",
    database:"test"
})

db.connect(()=>{
    console.log("Database is connected successfully !")
})

app.get('/' , (req, res)=>{

    res.send("hello")

})


app.get('/user' , (req , res)=>{

    db.query('select * from user' , (error ,result)=>{

        if(error){
            res.send("some err" + error)
        }

        res.send(result)

    })

})

app.listen(port , ()=>{
    console.log(`Server is Running http://localhost:${port}`)
})