require('dotenv').config()
const express = require('express');
const next = require('next');
const port= 5000;

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()
const fetch = require('node-fetch')
const bodyParser = require('body-parser')
const serverless = require('serverless-http')


app.prepare()
.then(()=>{
    const server = express()
    
    
    server.get('*', (req, res)=>{
     
        return handle(req, res)
    })

    
    server.listen(port, (err)=>{
        if (err) throw err
    })
    module.exports.handler = serverless(server)
})

