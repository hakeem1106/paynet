require('dotenv').config();
const axios = require('axios')


exports.handler = async(event, context, callback)=>{

    
    getRates= async()=>{
        const parsedBody = JSON.parse(event.body)
        axios.get(`http://data.fixer.io/api/latest?access_key=${process.env.API_KEY}`)
    .then(({data:{ rates: parsedBody}})=>{
        callback(null,{
            statusCode:200,
            headers:{
                "Access-Control-Allow-Origin" : "*",
                "Access-Control-Allow-Headers": "Content-Type",
                'content-type': 'application/json'
            },
            body: rates
        })
    })
    .catch(err=> console.log(err))

    }
   getRates()
    
}