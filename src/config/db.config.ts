import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'DB',
  password: 'Yash@4444',
  port: 5432,
});

export default pool;