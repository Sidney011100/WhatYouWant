import pool from "../db";

export interface CreateOrderInput {
  userId: number;
  drinks?: string;
  closed?: boolean;
}

export const createOrder = async ({
  userId,
  drinks = "",
  closed = false,
}: CreateOrderInput) => {
  const query = `
    INSERT INTO t_orders (user_id, drinks, closed)
    VALUES ($1, $2, $3)
    RETURNING id, user_id, drinks, closed, created_at, modified_at
  `;

  const values = [userId, drinks, closed];

  const result = await pool.query(query, values);

  return result.rows[0];
};
