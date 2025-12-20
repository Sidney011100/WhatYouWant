CREATE TABLE t_users (
  id SERIAL PRIMARY KEY,
  firebase_uid TEXT UNIQUE NOT NULL,
  email TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- variations  {milk:[options], sugar level: [options]... object: [options…]}
CREATE TABLE t_drinks (
  drink_name TEXT PRIMARY KEY,
  variations JSONB NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE t_orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  drinks VARCHAR(255),
  closed BOOLEAN NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  modified_at TIMESTAMP DEFAULT NOW(),
  CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES t_users(id)
);

