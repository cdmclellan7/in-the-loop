import { response } from "express";
import query from "../db/index.js";

export async function getUsers() {
  const sqlString = `SELECT * FROM users`;
  const res = await query(sqlString);
  return res;
}

export async function getUserById(id) {
  const sqlString = `SELECT * FROM users WHERE user_id = ${id}`;
  const res = await query(sqlString);
  return res;
}

export async function createUser(user) {
  const user_id = user.user_id;
  const firstName = user.first_name;
  const lastName = user.last_name;
  const email = user.email;
  const role = user.role;
  const sqlString = `INSERT INTO users (user_id, first_name, last_name, email, role) VALUES ('${user_id}', '${firstName}', '${lastName}', '${email}', '${role}') ON CONFLICT DO NOTHING;`;
  const res = await query(sqlString);
  return res;
}
