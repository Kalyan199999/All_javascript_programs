const express = require('express')
const app = express()
const port = 5050

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


app.listen(port, () => {
    console.log(`server started on port http://localhost:${port}`);
})