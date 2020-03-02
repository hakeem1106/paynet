require('dotenv').config();
const axios = require('axios').default


exports.handler = async(event, context)=>{
    const send = body=>{
        console.log(event)
        console.log(context)
       return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin" : "*",
                "Access-Control-Allow-Headers": "Content-Type",
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        
        }, 
        console.log(body)
        

    }

    const getRates = async()=>{
       await axios.get(`http://data.fixer.io/api/latest?access_key=${process.env.API_KEY}`)
       .then(res=> send(res.data))
        .catch(err => send(err))
    }

    
        getRates()
    
    
    
      
    

    
}