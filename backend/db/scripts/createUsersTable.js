import query from "../index.js";

async function createUsersTable() {
  const sqlString = `CREATE TABLE IF NOT EXISTS users (user_id SERIAL PRIMARY KEY, first_name TEXT, 
        last_name TEXT, email TEXT, role TEXT);`;

  const res = await query(sqlString);
  console.log("User table created", res);
}

createUsersTable();
