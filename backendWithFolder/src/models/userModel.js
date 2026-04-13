import db from "../config/db.js"

export const getUserData = async()=>{

    try{

        const sql = 'select * from student'

        const [rows] = await db.execute(sql)

        return rows

    }
    catch(error){
        return error
    }

}