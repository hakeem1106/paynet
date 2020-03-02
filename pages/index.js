import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'



class Home extends React.Component{
constructor(props){
    super(props)
    this.state={
      rates:[]
      
    }
    this.fetchRates = this.fetchRates.bind(this)
}



fetchRates = async(event)=>{
    await (fetch(`/.netlify/functions/getRates`))
    .then(res => await res.json())
    .then(this.setState({
        rates: [{
          monies: res.rates
        }]
    }))
    
}


 render(){

return(


  <Layout>
      <div onLoad={this.fetchRates}>
      {this.state.rates}
      </div>
      
    
  </Layout>

)
}


}


  

  


export default Home
