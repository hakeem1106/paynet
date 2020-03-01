require('dotenv').config();
const axios = require('axios').default


exports.handler = async(event, context, callback)=>{
    const send = body=>{
       return callback(null, {
            statusCode: 200,
            body: JSON.stringify(body)
        
        }) 

    }
    

    const getRates = async()=>{
       await axios.get(`http://data.fixer.io/api/latest?access_key=${process.env.API_KEY}`)
       .then(res=> send(res.data))
        .catch(err => send(err))
    }
    
        getRates()
    
    
    
      
    

    
}