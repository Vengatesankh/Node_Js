import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const users = [];
// Parse JSON body
app.use(express.json());

// GET Method
app.get("/", (req, res) => {
  res.send("Hello Express");
});
//get all user
app.get("/allusers", (req, res) => {
  res.send(users);
});
// POST Method
app.post("/users", (req, res) => {
  const { userName, userEmail } = req.body;
  users.push({ id: users.length, userName, userEmail });
  res
    .status(201)
    .json({ message: "New User created Sucessfully", allusers: users });
});

//PUT_Request
//http://localhost:4000/api/updateUser/0
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { userName, userEmail } = req.body;

  if (!users[id]) {
    return res.json({ message: "User is Not Found" });
  }

  users[id] = { userName, userEmail };

  res.json({
    message: `User with ID:${id} updated Sucessfully`,
    updatedUser: users[id],
  });
});

//Delete Method

// Start server
app.listen(4000, () => {
  console.log("Server is Listening on port 4000");
});
