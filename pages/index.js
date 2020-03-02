import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'



class Home extends React.Component{
constructor(props){
    super(props)
    this.state={

      
    }
}



fetchRates = async(event)=>{
    await (fetch(`/.netlify/functions/getRates`))
    .then(res => res.json())
    .then(JSON.stringify(res))
    
}


 render(){

return(


  <Layout>
      <div>
      {this.fetchRates(event)}
      </div>
      
    
  </Layout>

)
}


}


  

  


export default Home
