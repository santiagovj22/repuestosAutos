import {Router} from 'express'
const router = Router();


//database connection
import { connect } from '../database'

router.get('/', async (req,res) =>{
    const db = await connect();
    const result = await db.collection('tasks').find({}).toArray();
    
    res.json(result);
})
 
router.post('/',async (req,res) =>{
    const db = await connect();
    const task ={
        title:req.body.title,
        description:req.body.description
    };
    const result = await db.collection('tasks').insert(task);
    res.json(result.ops[0]);

})



export default router;