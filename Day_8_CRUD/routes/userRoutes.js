import express from "express";
import {
  deleteUser,
  getAllUsers,
  postUsers,
  updateUsers,
} from "../controllers/userController.js";

const userRoute = express.Router();

userRoute.get("/allusers", getAllUsers);
userRoute.post("/users", postUsers);
userRoute.put("/updateUser/:id", updateUsers);
userRoute.delete("/deletedUser/:id", deleteUser);
export default userRoute;
