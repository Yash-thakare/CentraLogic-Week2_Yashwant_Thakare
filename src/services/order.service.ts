import pool from '../config/db.config';
import { Order } from '../models/order.model';

export const createOrder = async (order: Order): Promise<Order> => {
  const { orderID } = order;
  const query = 'INSERT INTO orders (orderID) VALUES ($1) RETURNING *';
  const result = await pool.query(query, [orderID]);
  return result.rows[0];
};

export const getAllOrders = async (): Promise<Order[]> => {
  const query = 'SELECT * FROM orders';
  const result = await pool.query(query);
  return result.rows;
};