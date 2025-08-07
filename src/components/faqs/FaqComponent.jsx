import { Plus, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import YearlyCard from "./YearlyCard";
import MonthlyCard from "./MonthlyCard";
import MyButton from "../my-button/MyButton";
import { fadeIn } from "../../utils/framer-motion";

const faqs = [
  { q: "Design should enrich our day", a: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { q: "Bring their individual experience and creative", a: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { q: "Human centred design to challenges", a: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { q: "Design should enrich our day", a: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { q: "Developing core web applications", a: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
];

const FaqComponent = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="w-full bg-dark py-20">
      <div className="container-sm text-light">
        {/* Animated Section Title */}
        <motion.h2
          variants={fadeIn("up", "tween", 0.3, 2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="text-[18px] font-medium mb-12"
        >
          PRICING TABLE
        </motion.h2>

        <section className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left Content - FAQ Section */}
          <motion.article
            variants={fadeIn("up", "tween", 0.4, 2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="max-w-[635px]"
          >
            <motion.h1
              variants={fadeIn("up", "tween", 0.4, 2)}
              className="text-6xl font-bold mb-10 leading-tight"
            >
              BE KIND TO YOUR MIND
            </motion.h1>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", "tween", 0.5 + index * 0.1, 2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.5 }}
                  className="border-b border-gray-700 pb-6"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex justify-between items-center w-full text-left"
                  >
                    <span className="text-xl font-medium">{faq.q}</span>
                    <Plus
                      className={`transition-transform duration-300 ${openFaq === index ? "rotate-45" : ""
                        }`}
                    />
                  </button>

                  {openFaq === index && (
                    <p className="mt-4 text-gray-400">{faq.a}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.article>

          {/* Right Content - Pricing Cards Section */}
          <motion.div
            variants={fadeIn("up", "tween", 0.4, 2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="flex-1 space-y-6"
          >
            <YearlyCard />
            <MonthlyCard />
            <MyButton size="200px" url={"/"}>
              <span className="relative z-10 text-md text-light mix-blend-difference pointer-events-none center-center gap-2 px-3">
                <span>Try It <br /> Free Now</span>
                <ArrowUpRight />
              </span>
            </MyButton>
          </motion.div>
        </section>
      </div>
    </section>
  );
};

export default FaqComponent;
