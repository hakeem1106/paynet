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

async componentDidMount(){
  this.fetchRates()
}

fetchRates = async(event)=>{
    await (fetch(`/.netlify/functions/getRates`))
    .then(res => res.json())
    .then(this.setState({
        rates: [{
          
        }]
    }))
    
}


 render(){

return(


  <Layout>
      <div onLoad={this.fetchRates}>
      {this.state.rates.monies}
      </div>
      
    
  </Layout>

)
}


}


  

  


export default Home
