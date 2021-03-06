import query from "../index.js";

async function dropAllTables() {
  const sqlString = `DROP Table users, requests, response CASCADE;`;

  const res = await query(sqlString);
  console.log("Tables dropped", res);
}

dropAllTables();
