const express = require('express');
const { createUsers, getUsers, getUserById, updateUser, deleteUser } = require('../controller/userController');
const router = express.Router();

// router.get("/users", userDetail)
// router.get("/insert", insert)

// Create new user
router.post("/addusers", createUsers)

// Get all users
router.get("/getallusers", getUsers)

// Get user by ID
router.get("/getuser/:id", getUserById)

// Update user by ID
router.put("/updateuser/:id", updateUser)

//dELETE USER BY ID
router.delete("/deleteuser/:id", deleteUser)

module.exports = {router}