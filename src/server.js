const express = require('express')

const app = express();
//settings
app.set('port', process.env.PORT || 3000 );

//routes
const IndexRoutes = require('./routes/index.routes')
// import TaskRoutes from './routes/tasks.routes';
// import MarcasRoutes from './routes/marcas.routes';
// import ServiciosRoutes from './routes/servicios.routes';
// import ProductosRoutes from './routes/productos.routes';


//middlewares
app.use(express.json());

app.use(IndexRoutes);
// app.use('/tasks',TaskRoutes);
// app.use('/marcas',MarcasRoutes);
// app.use('/servicios',ServiciosRoutes);
// app.use('/productos',ProductosRoutes);
module.exports = app;