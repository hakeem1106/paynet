require('dotenv').config();
const axios = require('axios')


exports.handler = async(event, context, callback)=>{

   await axios.get(`http://data.fixer.io/api/latest?access_key=${process.env.API_KEY}`)
    .then(({data:{ data: rates}})=>{
        callback(null,{
            statusCode:200,
            headers:{
                "Access-Control-Allow-Origin" : "*",
                "Access-Control-Allow-Headers": "Content-Type",
                'content-type': 'application/json'
            },
            body: JSON.stringify(rates)
        })
    })
    .catch(err=> console.log(err))
    
}