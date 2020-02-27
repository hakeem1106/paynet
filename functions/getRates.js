require('dotenv').config();
const axios = require('axios').default


exports.handler = async(event, context, callback)=>{
    
    getRates = async()=>{
       await axios.get(`http://data.fixer.io/api/latest?access_key=${process.env.API_KEY}`)
        .then(res =>res.json())
        .then(console.log(res))
        .then(callback(null, {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin" : "*",
                "Access-Control-Allow-Headers": "Content-Type",
                'content-type': 'application/json'
            }
        
        }))
    }
    
        
    

    getRates()
}