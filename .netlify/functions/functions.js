require('dotenv').config();
const fetch = require('node-fetch')

exports.handler = (event, context, callback)=>{

    const send = body =>{
        callback(nul, {
            statuCode:200,
            body: JSON.stringify(body)
        })
    }
   
    const res = fetch(`http://data.fixer.io/api/latest?access_key=${process.env.API_KEY}`)
    const data = res
    console.log(data)
}