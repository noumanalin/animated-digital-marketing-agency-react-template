import Hero from '../components/Hero'
import WhoWeAre from '../components/WhoWeAre'
import Reviews from '../components/Reviews' 
import Services from '../components/Services'
import Footer from '../components/Footer'
import FeaturedWork from '../components/FeaturedWork'
import FaqComponent from '../components/faqs/FaqComponent' 
import Journal from '../components/journal/Journal'
import Test from '../components/horizontalScroll/Test'
import HorizontalScroll from '../components/horizontalScroll/HorizontalScroll'

const Home = () => {
  return (
    <>
    <Hero/>
    <main> 
      <WhoWeAre/>
      <Services/>
      <FeaturedWork/>
      <Reviews />
      <HorizontalScroll/>
      <FaqComponent/> 
      <Journal/>
    </main>
    <Footer />
    </>
  )
}

export default Home