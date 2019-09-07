import {Router} from 'express'
const router = Router();

import { connect } from '../database'

router.get('/', async (req,res) =>{
    const db = await connect();
    const result = await db.collection('marcas').find({}).toArray();
    res.json(result);
})

router.post('/',async (req,res) =>{
    const db = await connect();
    const marca ={
        marca:req.body.marca,
        modelo:req.body.modelo
    };
    const result = await db.collection('marcas').insert(marca);
    res.json(result.ops[0]);
})



export default router;