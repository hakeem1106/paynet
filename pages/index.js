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
    await (await fetch(`./.netlify/functions/getRates`))
}

 render(){

return(
     <Head>

  </Head>

  <Layout >
      <div>
      {fetchRates().then}
    </div>
  </Layout>

)
}


}


  

  


export default Home
