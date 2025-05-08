const express = require('express')
const {createUser,getAllUser,getUser,updateUser,deleteUser} = require('../controller/userController')

const userRouter = express.Router()


// Create a new user
userRouter.post('/', createUser)

// Get all the users
userRouter.get('/', getAllUser)

// Get a single user
userRouter.get('/:id', getUser)

// Update a user
userRouter.patch('/:id', updateUser)

// Delete a user
userRouter.delete('/:id', deleteUser)


module.exports = userRouter