require('dotenv').config();
import fetch from 'node-fetch';

exports.handler = async(event, context)=>{
   return fetch(`http://data.fixer.io/api/latest?access_key=${process.env.API_KEY}`, {headers:{ "Accept": "application/json"}})
   .then(res => res.json())
   .then(data =>({
       statusCode:200,
       body: data.rates
   }))
   .then(console.log(body))
   .catch(error =>({ statusCode: 422, body:String(error)}))
    
}