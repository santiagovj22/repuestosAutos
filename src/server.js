import express,{json} from 'express'

const app = express();
//settings
app.set('port', process.env.PORT || 3000 );

//routes
import IndexRoutes from './routes/index.routes'
import TaskRoutes from './routes/tasks.routes';
import MarcasRoutes from './routes/marcas.routes';
import ServiciosRoutes from './routes/servicios.routes';
import ProductosRoutes from './routes/productos.routes';


//middlewares
app.use(json());

app.use(IndexRoutes);
app.use('/tasks',TaskRoutes);
app.use('/marcas',MarcasRoutes);
app.use('/servicios',ServiciosRoutes);
app.use('/productos',ProductosRoutes);
export default app;