import { Router } from "express";
import { Delete, getId, post ,get} from "../controllers/birds.controllers.js";


const router = Router();

router.get('/species',get)
router.get('/species/:id', getId)
router.post('/species',post)
router.delete('/species/:id',Delete)

// router.get('/species/search/:genre',async(req,res)=>{

//     const {genre} = req.params
//     console.log(genre)
//     const [row] = await connectionDb.query('SELECT * FROM Birds WHERE Genre = ?' [genre])
//     res.send(row)

// })


export  default router