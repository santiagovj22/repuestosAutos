import { Router } from 'express';
const router = Router();
router.get('/', (req, res) => {
  res.send('Bienvenido a la tienda de repuestos para autos:   routes: /marcas , /productos , /servicios , /tasks');
});
export default router;