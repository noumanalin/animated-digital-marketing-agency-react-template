import Hero from '../components/Hero'
import WhoWeAre from '../components/WhoWeAre'
import Reviews from '../components/Reviews' 
import Services from '../components/Services'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Hero/>
    <main>
      <WhoWeAre/>
      <Services/>
      <div className="w-full h-32 bg-dark"></div>
      <Reviews />
    </main>
    <Footer />
    </>
  )
}

export default Home