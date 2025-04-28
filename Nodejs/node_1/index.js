// HTTP module
const http = require('http')
const fs = require('fs')


const server = http.createServer( (req, res)=>{
    console.log("Request from the user");

    // console.log(req.headers);
    console.log(req.url);

    // const logData = Date.now() + " " + req.url + "\n"

    // fs.appendFile( "./logs.txt" , logData , (err,data)=>{
    //     if(err){
    //         console.log(err);
    //     }
    // } )

    switch (req.url) {
        case "/":
            res.end("This is the home page!")
            break;
        case "/about":
            res.end("This is the about page!")
            break;
    
        default:
            res.end("Bad request!")
            break;
    }
    
})


server.listen(5050, ()=>{
    console.log(`Server is running on port localhost:5050`);
})