import { motion } from 'framer-motion'
import { fadeIn, textVariants } from '../utils/framer-motion'

import image1 from '../assets/service-1.jpg'
import image2 from '../assets/service-2.jpg'
import image3 from '../assets/service-3.jpg'
import image4 from '../assets/service-4.jpg'
import ServiceCard from "./ServiceCard"


const services = [
  {
    id: 1,
    title: "Search Engine Optimization",
    description: "We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
    list: [{ item: "mobile & web design" }, { item: "interaction design" }, { item: "UX Research & Plan" }],
    img: image1,
    url: ""
  },
  {
    id: 2,
    title: "Email Marketing",
    description: "We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
    list: [{ item: "mobile & web design" }, { item: "interaction design" }, { item: "UX Research & Plan" }],
    img: image2,
    url: ""
  },
  {
    id: 3,
    title: "COntent Marketing",
    description: "We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
    list: [{ item: "mobile & web design" }, { item: "interaction design" }, { item: "UX Research & Plan" }],
    img: image3,
    url: ""
  },
  {
    id: 4,
    title: "Social Marketing",
    description: "We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
    list: [{ item: "mobile & web design" }, { item: "interaction design" }, { item: "UX Research & Plan" }],
    img: image4,
    url: ""
  },
]


const Services = () => {
  return (
    <section className="w-full bg-accent">
      <div className="container-sm">
        {/* vertical section */}
        <div className="relative py-15 md:pt-32 max-w-[600px] mx-auto">
          {/* vertical line */}
          <span className="hidden md:block h-full min-h-[300px] w-[1px] absolute left-28 -top-2 z-0 bg-zinc-700"></span>

          <div className="text-light z-50 bg-accent relative py-3">
            <h4 className="text-[18px]">Services</h4>
            <motion.h2
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              className="text-6xl font-bold uppercase my-2">
              <span>Our marketing</span> <br />
              <span>Services</span>
            </motion.h2>
          </div>

          <div className="md:ml-32 text-gray max-w-[400px] relative right-0 z-50">
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              Consumers today rely heavily on digital means to research products. We research a brand of bldend engaging with it, according to the meanwhile, 51% of consumers say they use Google to research products before buying.
            </motion.p>
          </div>
        </div>

        <hr className="w-full h-[1px]  text-zinc-700 my-14" />

        {/* All Services */}
        {
          services && services.map((data, index) => (
            <>
              <ServiceCard key={index} data={data} />


              <hr className="w-full h-[1px] text-zinc-700 my-14" />
            </>
          ))
        }
      </div>
    </section>
  )
}

export default Services