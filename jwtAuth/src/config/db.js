import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config()

const db = mysql.createPool({
        host:process.env.HOST,
        user:process.env.USER,
        password:process.env.PASSWORD,
        database:process.env.DATABASE,
        waitForConnections:true,
        connectionLimit:10,
        queueLimit:0
});

(async()=>{

    try{

        await db.query("select 1")
        console.log("The Database is Connected Successfully! ")
    }
    catch(error){
        console.log("Some error in Database Connection" , error)
    }

}) ();

export default db;