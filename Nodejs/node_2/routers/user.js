const express = require("express");
const fs = require("fs");

const router = express.Router();


router.get("/", (req, res) => {
 
    try 
    {
        const path = "C:/Users/hp/Documents/web_development/java_script/Nodejs/node_2/data.json"

        const data = fs.readFileSync(path,'utf-8');
        
        // console.log(data);
        
        const users = JSON.parse(data);
        res.status(200).json({
            message:"Hello from user router",
            users:users
        });
    
    } 
    catch (error) {

        return res.status(201).send({
            message:"Error occured"
        })
       
    }

})

router.get("/:id", (req, res) => {
    
    try {

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
        
        
        return res.status(200).json({
            message:"Hello from the user route ID",
            id:id,
            user:response
        })
        
    } 
    catch (error) {
        
        return res.status(201).send({
            message:"Error occured"
        })
    }


  })

module.exports = router;