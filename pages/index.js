import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'



const Home=({monies})=>{
  <Head>

  </Head>

return(

  <Layout >
      <div>
    {monies}
    </div>
  </Layout>

)


}

Home.getInitialProps=async()=>{
  const res = await fetch(`http://data.fixer.io/api/latest?access_key=3271d47901f06517e972113fca920187`);
  const json = await res.json();
  return{
      monies: JSON.stringify(json)
  }
    

    }

  


export default Home
