import { Router } from 'express';
const router = Router(); //database connection

import { connect } from '../database';
router.get('/', async (req, res) => {
  const db = await connect();
  const result = await db.collection('productos').find({}).toArray();
  res.json(result);
});
router.post('/', async (req, res) => {
  const db = await connect();
  const producto = {
    nombre: req.body.nombre,
    description: req.body.description,
    costo: req.body.costo
  };
  const result = await db.collection('productos').insert(producto);
  res.json(result.ops[0]);
});
export default router;