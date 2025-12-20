import fs from "fs";
import path from "path";
import pool from "./db";

async function runMigration() {
  const filePath = path.join(
    process.cwd(),
    "migrations",
    "001_init_up.sql"
  );

  const sql = fs.readFileSync(filePath, "utf8");

  console.log("Running migration 001_init_up.sql...");
  await pool.query(sql);
  console.log("Migration complete ✅");

  await pool.end();
}

runMigration().catch((err) => {
  console.error("Migration failed ❌", err);
  process.exit(1);
});
