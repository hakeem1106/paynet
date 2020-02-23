require('dotenv').config()
exports.handler = (event, context, callback)=>{
    
   const send = body =>{
       callback(null, {
           statusCode:200,
           body: JSON.stringify(body)
       })
   } 
    
    const grabRates =()=>{
        const url =`http://data.fixer.io/api/latest?access_key=${process.env.API_KEY}` 

    fetch(url)
       .then(res => res.json())
       .then(data => {
           const rates = Object.entries(data.rates)
           res.send({rates})
       })
       .catch(err =>{
           res.send(err)
       })

    }

    if(event.httpMethod == 'GET'){
        grabRates()
    }
    
}