
import {connectionDb} from '../db/db.config.js'


export const Delete = async(req,res)=>{
    try{        
    const {id} = req.params;
    const [rows] = await connectionDb.query('DELETE  FROM Birds WHERE id = ?',[id])
    res.send(rows)

    }catch(error){
        res.status(500).json({message:"error has ocurred"})
    }}


export const post = async(req,res)=>{
    const {Cientific_Name,Regular_Name,Genre} =  req.body
    const row = await connectionDb.query('INSERT INTO Birds ( Cientific_Name, Regular_Name,Genre) VALUES (?,?,?)', [Cientific_Name,Regular_Name,Genre])
    res.send('success')

}


export const getId = async (req,res) =>{

    const {id} = req.params;
    const [result] = await connectionDb.query('SELECT * FROM Birds WHERE id = ?',[id])
    res.send(result)

}


export const get =  async(req,res) => {
    const [rows] = await connectionDb.query('SELECT * FROM Birds')
    res.send(rows)
}