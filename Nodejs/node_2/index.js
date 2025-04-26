const express = require('express')

const userrouter = require('./routers/user')

const app = express()
const port = 5050

app.use(express.json())

// Middle ware-> it is used to perform some task before the request reaches the controller and authenticate the request
app.use((req,res,next)=>{
    console.log('middleware-1');

    req.isHacker = true;
    
    try {
        next()
    } catch (error) {
        return res.json({
            message: 'Access Denied!'
        })
        
    }
    
})

app.use((req,res,next)=>{
    console.log('middleware-2');
    
    console.log("Is he hacker:"+req.isHacker);
    try {
        next()
    } catch (error) {
        return res.json({
            message: 'Access Denied!'
        })
        
    }
    
})

app.get('/' , (req, res) => {
    res.json( {
        message: 'sending the data from the server',
        data:[1,2,3,4,5]
    } )
})

app.get('/about' , (req, res) => {
    console.log(req);
    
    res.json( {
        message: 'sending the data from the server about page',
        data:`Hey this is ${ req.query.name} and my age is ${req.query.age}`
    } )
})

app.use( '/users' , userrouter)



app.listen(port, () => {
    console.log(`server started on port http://localhost:${port}`);
})