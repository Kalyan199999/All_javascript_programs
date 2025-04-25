const express = require('express')

const userrouter = require('./routers/user')

const app = express()
const port = 5050

app.use(express.json())

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