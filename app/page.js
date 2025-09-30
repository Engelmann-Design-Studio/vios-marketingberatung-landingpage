import Hero from '../components/Hero'
import Promises from '../components/Promises'
import Progress from '../components/Progress'
import SuccessStories from '../components/SuccessStories'
import FAQ from '../components/FAQ'
import ROASCalculator from '../components/ROASCalculator'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <Promises />
      <Progress />
      <SuccessStories />
      <FAQ />
      <ROASCalculator />
      <CTA />
    </main>
  )
}
