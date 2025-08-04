import { Plus, Check, DollarSign } from "lucide-react" 
import { useState } from "react"
import YearlyCard from "./YearlyCard"
import MonthlyCard from "./MonthlyCard"

const faqs = [
  {q:"Design should enrich our day", a:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
  {q:"Bring their individual experience and creative", a:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
  {q:"Human centred design to challenges", a:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
  {q:"Design should enrich our day", a:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
  {q:"Developing core web applications", a:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
]

const FaqComponent = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <section className="w-full bg-dark py-20">
      <div className="container-sm text-light">
        <h2 className="text-[18px] font-medium mb-12">PRICING TABLE</h2>
        
        <section className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left Content - FAQ Section */}
          <article className=" max-w-[635px]">
            <h1 className="text-6xl font-bold mb-10 leading-tight">BE KIND TO YOUR MIND</h1>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-700 pb-6">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="flex justify-between items-center w-full text-left"
                  >
                    <span className="text-xl font-medium">{faq.q}</span>
                    <Plus className={`transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`} />
                  </button>
                  
                  {openFaq === index && (
                    <p className="mt-4 text-gray-400">{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </article>

          {/* Right Content - Pricing Cards Section */}
          <div className="flex-1"> 
            <YearlyCard/> 
            <MonthlyCard/>
          </div>

        </section>
      </div>
    </section>
  )
}
 

 

export default FaqComponent