import { Request, Response } from 'express';
import { createOrder, getAllOrders } from '../services/order.service';
import { Order } from '../models/order.model';

export const createOrderController = async (req: Request, res: Response): Promise<Response> => {
  try {
    const orders: Order[] = req.body;
    const filteredOrders = orders.filter((order) => {
      
    });

    const createdOrders = await Promise.all(
      filteredOrders.map(async (order) => await createOrder(order))
    );

    return res.status(201).json(createdOrders);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getOrdersController = async (req: Request, res: Response): Promise<Response> => {
  try {
    const orders = await getAllOrders();
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};