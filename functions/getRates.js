require('dotenv').config();
const axios = require('axios').default


exports.handler.getrates = (event, context)=>{
    const send = body=>{
        console.log(event)
        console.log(context)
       return {
            statusCode: 200,
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
                
            },
            body: JSON.stringify(body)
        
        } 
    

    }

    const getRates = async()=>{
       await axios.get(`http://data.fixer.io/api/latest?access_key=${process.env.API_KEY}`)
       .then(res=> send(res.data))
        .catch(err => send(err))
    
    }

    
        getRates()
    
            
    
      
    

    
}