import Head from 'next/head'
import HeroSection from '../components/heroSection'
import NavBar from '../components/NavBar'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Sales Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <HeroSection />
    </div>
  )
}
