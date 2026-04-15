import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config()

const db = mysql.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
    waitForConnections: true,
    connectionLimit:10,
    queueLimit:0
});


(async()=>{

    try{

        await db.query("select 1")
        console.log("Database is connected Successfully")

    }
    catch(error){
        console.log("Database is not connected")
    }

}) ();


export default db;