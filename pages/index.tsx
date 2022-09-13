import Head from 'next/head'
import Header from '../components/layout/Header'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Apple Local Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
    </div>
  )
}