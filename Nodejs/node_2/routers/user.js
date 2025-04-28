const express = require("express");
const fs = require("fs");

const router = express.Router();


router.get("/", (req, res) => {

    console.log(req.headers);
    
 
    try 
    {
        const path = "C:/Users/hp/Documents/web_development/java_script/Nodejs/node_2/data.json"

        const data = fs.readFileSync(path,'utf-8');
        
        // console.log(data);
        
        const users = JSON.parse(data);
        res.status(200).json({
            message:"Hello from user router get method",
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
            message:"Hello from the user route with ID",
            id:id,
            user:response
        })
        
    } 
    catch (error) {
        
        return res.status(201).json({
            message:"Error occured"
        })
    }

  }
)

router.post("/post", (req, res) => {
    
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

        return res.status(200).json({
            message:"User added successfully",
            user:users
        })
        
    } 
    catch (error) 
    {
        return res.status(201).json({
            message:"Error occured"
        })
    }
    
})


module.exports = router;