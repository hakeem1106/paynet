const express = require('express');
const app = express();
const port= 5000;


app.get('/', (req, res)=>res.type('json'))

app.listen(port, ()=> console.log(`Server is listening on por ${port}`))