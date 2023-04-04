import { Router } from 'express';
const router = Router(); //database connection

import { connect } from '../database';
router.get('/', async (req, res) => {
  const db = await connect();
  const result = await db.collection('servicios').find({}).toArray();
  res.json(result);
});
router.post('/', async (req, res) => {
  const db = await connect();
  const servicio = {
    tipo: req.body.tipo,
    costo: req.body.costo,
    tiempo: req.body.tiempo
  };
  const result = await db.collection('servicios').insert(servicio);
  res.json(result.ops[0]);
});
export default router;