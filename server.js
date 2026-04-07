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
        console.log("some error in database connection:-" , error)
    }
    else{
        console.log("Database is connected successfully ! ")
    }

})


app.get('/' , (req , res)=>{

    res.send("hello from my api")

})

// app.get('/student' , (req , res)=>{

//     const sql = "select * from student"

//     db.query(sql ,(error , result)=>{
//         if(error){
//             res.send("some err " + error)
//         }

//         res.send(result)
//     })

// })

// app.get('/student/male' , (req , res)=>{

//     const sql = "select * from student where gender = 'male' "

//     db.query(sql ,(error , result)=>{
//         if(error){
//             res.send("some err " + error)
//         }
//         res.send(result)
//     })
// })

// app.get('/student/id' , (req , res)=>{

//     const sql = "select * from student where id = 5 "

//     db.query(sql ,(error , result)=>{
//         if(error){
//             res.send("some err " + error)
//         }

//         res.send(result)
//     })

// })

// app.get('/student' , (req , res)=>{

//     const id = req.query.id
//     const city = req.query.city

//     const sql = 'select * from student where id = ? and address = ?'

//     db.query(sql, [id , city], (error , result)=>{

//         if(error){
//             res.send("some error in query" , error)
//         }

//         res.send(result)

//     })

// })



// app.get('/student/:id/:city' , (req , res)=>{

//     // const id = req.params.id
//     // const city = req.params.city

//     const {id , city} = req.params

//     const sql = 'select * from student where id = ? and address = ?'

//     db.query(sql, [id , city], (error , result)=>{

//         if(error){
//             res.send("some error in query" , error)
//         }

//         res.send(result)

//     })

// })


app.post('/add/student' , (req , res)=>{

    const { name , email, age, address, gender} = req.body

    const sql = 'insert into student(name , email, age, address, gender) values (?,?,?,?,?)'

    db.query(sql , [name , email, age, address, gender] , (error , result )=>{
            if(error){
                return res.json({message:"some error"})
            }
            else{
                return res.json({message :"user added successfully"})
            }

    })

})





app.listen(port , ()=>{
    console.log(`The server is Running on ${port}`)
})