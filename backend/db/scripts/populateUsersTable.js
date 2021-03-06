import query from "../index.js";

/*
user_id TEXT PRIMARY KEY, first_name TEXT NOT NULL, 
        last_name TEXT NOT NULL, email TEXT NOT NULL, role TEXT NOT NULL
        */

const data = [
  {
    user_id: "1",
    first_name: "Bob",
    last_name: "Jones",
    email: "hi@gmail.com",
    role: "Bootcamper",
  },
  {
    user_id: "2",
    first_name: "Bill",
    last_name: "Jones",
    email: "hi@gmail.com",
    role: "Bootcamper",
  },
  {
    user_id: "3",
    first_name: "Chris",
    last_name: "Jones",
    email: "hi@gmail.com",
    role: "Bootcamper",
  },
];

async function populateUsersTable() {
  for (let i = 0; i < data.length; i++) {
    const sqlString = `INSERT INTO users (user_id, first_name, last_name, email, role) 
            VALUES ('${data[i]["user_id"]}', '${data[i]["first_name"]}', '${data[i]["last_name"]}', '${data[i].email}', '${data[i].role}') RETURNING *;`;

    const res = await query(sqlString);
    console.log("User added", res);
  }
}

populateUsersTable();
