import bgWho from '../assets/who-baner.webp';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const WhoWeAre = () => {
  return (
    <motion.section
      className="w-full bg-dark relative overflow-hidden"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <article className="container-sm flex-bc flex-col md:flex-row gap-7 min-h-[900px] py-10 ">

        {/* media */}
        <div
          className="w-full md:w-[45%] h-[650px] bg-cover bg-center bg-fixed bg-no-repeat py-4"
          style={{ backgroundImage: `url(${bgWho})` }}
        ></div>

        {/* content */}
        <div className="relative">
          {/* vertical line */}
          <span className="hidden md:block min-h-[900px] w-[1px] absolute left-28 -top-52 z-0 bg-gray-400"></span>

          <div className="text-light z-50 bg-dark relative py-3">
            <h4 className="text-[18px]">WHO WE ARE</h4>
            <h2 className="text-6xl font-bold uppercase my-2">
              <span>We are leading</span> <br />
              <span>digital marketing</span> <br />
              agency.
            </h2>
          </div>

          <div className="md:ml-32 text-gray max-w-[400px] relative right-0 z-50">
            <p>
              We’re a team of strategic digital marketing experts working globally with the largest brands.
              We believe that progress only happens when you refuse to play it safe. We combine ideas, behaviors,
              and insights with design and technology to produce brand experiences that customers love.
            </p>
            <button className="w-32 h-32 border rounded-full border-gray-200 text-center mt-4">
              Explore us
            </button>
          </div>
        </div>
      </article>

      {/* Circle Decoration */}
      <span className="absolute right-[-150px] top-[45%] w-[350px] h-[350px] border border-gray-600 rounded-full block z-0">
        <span className="w-[120px] h-[1px] absolute -left-8 bottom-17 -rotate-45 bg-gray-600" />
      </span>
    </motion.section>
  );
};

export default WhoWeAre;
