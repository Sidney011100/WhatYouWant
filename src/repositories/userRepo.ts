import pool from "../db";

export interface User {
  id: number;
  firebase_uid: string;
  email: string | null;
  created_at: Date;
}

export async function createUserIfNotExists(
  firebaseUid: string,
  email?: string | null
): Promise<User> {
  const query = `
    INSERT INTO t_users (firebase_uid, email)
    VALUES ($1, $2)
    ON CONFLICT (firebase_uid)
    DO UPDATE SET email = EXCLUDED.email
    RETURNING id, firebase_uid, email, created_at;
  `;

  const values = [firebaseUid, email ?? null];

  const result = await pool.query<User>(query, values);
  return result.rows[0];
}
