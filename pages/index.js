import Head from 'next/head'
import HeroSection from '../components/landing/herosection'
import LastseenSection from '../components/landing/lastseensection'
import NavBar from '../components/NavBar'
import AboutSection from '../components/landing/aboutsection'
import WorkSection from '../components/landing/worksection'
import IngredientSection from '../components/landing/ingredientsection'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sales Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <HeroSection />

      <LastseenSection />

      <section id="about">
        <AboutSection />
      </section>

      <section id="howworks">
        <WorkSection />
      </section>

      <section id="ingredients">
        <IngredientSection />
      </section>
    </div>
  )
}
