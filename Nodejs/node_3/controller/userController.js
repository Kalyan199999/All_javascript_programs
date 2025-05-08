const TestingUser = require("../model/userModel");

// Create the new user
const createUser = async (req,res)=>{

    try 
    {
        const user = await TestingUser.create(req.body);
        
        return res.status(200).json({
            message:"User created successfully",
            user:user
        })
    } 
    catch (error) 
    {
        return res.status(404).json({
            message:"User creation Failed!"
        })
    }

}

// Get all the users
const getAllUser = async (req,res)=>{

    try {

        const allUsers = await TestingUser.find();

        return res.status(200).json({
            message:"Users Fetched successfully",
            users:allUsers
        })
    } 
    catch (error) 
    {
        return res.status(404).json({
            message:"Users Fetchig Failed!"
        })
    }

}

// Get the specific user
const getUser = async (req,res)=>{

    try {

        const id = req.params.id;

        const user = await TestingUser.findById(id)

        if(!user){
            return res.status(201).json({
                message:"User not found"
            })
        }
        

        return res.status(200).json({
            message:"Users Fetched successfully",
            user:user
        })
    } 
    catch (error) 
    {
        return res.status(404).json({
            message:"Users Fetchig Failed!"
        })
    }
    
}

// Update the specific user
const updateUser = async (req,res)=>{
    try {

        const id = req.params.id;

        const updateUser = await TestingUser.findByIdAndUpdate(id,req.body,{new:true})

        if(!updateUser){
            return res.status(201).json({
                message:"User not found"
            })
        }

        return res.status(200).json({
            message:"User Updated successfully",
            user:updateUser
        })
    } 
    catch (error) 
    {
        return res.status(404).json({
            message:"User updation Failed!"
        })
    }
    
}

// Deleted the specific user
const deleteUser = async (req,res)=>{

    try {

        const deletedUser = await TestingUser.findByIdAndDelete(req.params.id)

        if(!deletedUser){
            return res.status(201).json({
                message:"User not found"
            })
        }

        return res.status(200).json({
            message:"Users deleted successfully",
            user:deletedUser
        })
    } 
    catch (error) 
    {
        return res.status(404).json({
            message:"User deleted Failed!"
        })
    }
    
}

module.exports = {createUser,getAllUser,getUser,updateUser,deleteUser}