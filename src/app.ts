import express, { Application, Request, Response } from 'express';
import { createOrderController, getOrdersController } from './controlllers/order.controller'

const app: Application = express();

app.use(express.json());




//used route here
app.post('/orders', createOrderController);
app.get('/orders', getOrdersController);




const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running start on port ${PORT}`);
});