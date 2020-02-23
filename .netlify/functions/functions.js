require('dotenv').config();
const fetch = require('isomorphic-unfetch')

exports.handler = (event, context, callback)=>{

    const send = body =>{
        callback(null, {
            statuCode:200,
            body: JSON.stringify(body)
        })
    }
   
    const getRates =()=>{
        fetch(`http://data.fixer.io/api/latest?access_key=${process.env.API_KEY}`)
        .then(res => send(res.data))
        .catch(err = send(err))

    }

    getRates()
    
}