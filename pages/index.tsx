import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import MainBody from '../components/MainBody'
import Footer from '../components/Footer'

const Home: NextPage = () => {

  return (
    <div className="flex flex-col h-screen justify-between">
      <Head>
        <title>Google 2.0</title>
        <link rel="icon" href="/google.ico" />
      </Head>

      <Header/>  
      <MainBody/>
      <Footer/>
    </div>
  )
}

export default Home