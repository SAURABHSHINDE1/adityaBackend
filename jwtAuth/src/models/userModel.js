import db from '../config/db.js'
export const registerUser = async(name , email , password)=>{

    try{

        const sql = 'insert into user(name , email , password) values (? , ? , ?)'

        const [rows] = await db.execute(sql , [name , email , password])

        return rows

    }
    catch(error){
        return error
    }

}