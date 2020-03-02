import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'



class Home extends React.Component{
constructor(props){
    super(props)
    this.state={
      rates: 
      <div>
        Starter data
      </div>
    }
}

fetchRates = async(event)=>{
    await (fetch(`/.netlify/functions/getRates`))
    .then(res => res.json())
    .then(res => this.setState({
      rates: 
      <div>
      {res.rates}
      </div>
      
    }))
}


 render(){

return(


  <Layout>
      <div>
      {this.state.rates}
      </div>
      
    
  </Layout>

)
}


}


  

  


export default Home
