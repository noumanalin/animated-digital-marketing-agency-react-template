import Hero from '../components/Hero'
import WhoWeAre from '../components/WhoWeAre'
import Reviews from '../components/Reviews' 
import Services from '../components/Services'
import Footer from '../components/Footer'
import FeaturedWork from '../components/FeaturedWork'
import FaqComponent from '../components/faqs/FaqComponent' 
import Journal from '../components/journal/Journal'

const Home = () => {
  return (
    <>
    <Hero/>
    <main>
      <WhoWeAre/>
      <Services/>
      <FeaturedWork/>
      <Reviews />

      <FaqComponent/> 
      <Journal/>
    </main>
    <Footer />
    </>
  )
}

export default Home