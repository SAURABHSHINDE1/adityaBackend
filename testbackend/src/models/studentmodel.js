import db from "../config/db.js"


export const studentdata = async()=>{

    try{

        const sql = 'select * from student'

        const [rows] = await db.execute(sql)

        return rows


    }
    catch(error){
        return error

    }

}

export const addStudent = async(name , email , age , address , gender)=>{

    try{

        const sql = 'insert into student (name , email , age , address , gender) values (? , ? , ? , ? , ?)'

        const [rows] = await db.execute(sql ,[name , email , age , address , gender])

        return rows

    }
    catch(error){
        return error
    }

}


