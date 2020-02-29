import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'



class Home extends React.Component{
constructor(props){
    super(props)
    this.state={}
}

fetchRates = async()=>{
    await (fetch(`/.netlify/functions/getRates`))
    .then(res => res.json())
    .then(res => this.setState({
      rates: res.rates
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
