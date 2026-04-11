import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config()

const db = mysql.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
    waitForConnections:"true",
    connectionLimit:10,
    queueLimit:0
});


// IIFE
(async()=>{

    try{

        await db.query("select 1")
        console.log("Database is Connected successfully ")

    }
    catch(error){

        console.log("some error in connection")
    }

}) ();


export default db;