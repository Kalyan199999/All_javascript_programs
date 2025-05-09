const express = require("express");
const fs = require("fs");
const TestingUser = require("../models/userModel");

const router = express.Router();

// Get all the users
router.get("/", async (req, res) => {

    // console.log(req.headers);
 
    try 
    {
        const path = "C:/Users/hp/Documents/web_development/java_script/Nodejs/node_2/data.json"

        const data = fs.readFileSync(path,'utf-8');
    
        const users = JSON.parse(data);
        
        const databse_user = await TestingUser.find({});
        
        res.status(200).json({
            message:"Hello from user router get method",
            users:users,
            databse_user
        });
    
    } 
    catch (error) {

        return res.status(201).send({
            message:"Error occured"
        })
       
    }

})

// Get the user by ID
router.get("/:id", async (req, res) => {
    
    try {

        // get the parameters 
        const {id} = req.params;

        const path = "C:/Users/hp/Documents/web_development/java_script/Nodejs/node_2/data.json"

        const data = fs.readFileSync(path,'utf-8');
        const users = JSON.parse(data);

        const response = users.filter((user) => {
            if(user.id == id)
            {
                return user;
            }
        })

        const databse_user = await TestingUser.find({_id:id});
        
        return res.status(200).json({
            message:"Hello from the user route with ID",
            id:id,
            user:response,
            databse_user
        })
        
    } 
    catch (error) {
        
        return res.status(201).json({
            message:"Error occured"
        })
    }

  }
)

// Create the new user

router.post("/post", async (req, res) => {
    
    try {

        const {id, name,age, email} = req.body;

        const path = "C:/Users/hp/Documents/web_development/java_script/Nodejs/node_2/data.json"

        const data = fs.readFileSync(path,'utf-8');

        const users = JSON.parse(data);

        users.push({
            id:id,
            name:name,
            age:age,
            email:email
        })

        fs.writeFileSync(path, JSON.stringify(users), 'utf-8')

        const newUser = await TestingUser.create({id:id, name:name, age:age, email:email})
        newUser.save()

        return res.status(200).json({
            message:"User added successfully",
            user:users,
            newUser:newUser
        })
        
    } 
    catch (error) 
    {
        return res.status(201).json({
            message:"Error occured"
        })
    }
    
})

// Update the user
router.patch("/update/:id", async (req, res) => {

    console.log("Update the user");
    
    try {
        const id = req.params.id;
        console.log(id);

        const updateUser = await TestingUser.findByIdAndUpdate(id, req.body, {new:true});

        if(!updateUser)
        {
            return res.status(404).json({
                message:"User not found"
            })
        }


        return res.status(201).json({
            message:"User updated successfully",
            user:updateUser
        })
        
    } 
    catch (error) 
    {
        return res.status(404).json({
            message:"User updated Failed!"
        })    
    }

    
})

module.exports = router;