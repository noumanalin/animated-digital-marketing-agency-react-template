 import {  Check, DollarSign } from "lucide-react"

const YearlyCard = () => {
  return (
     <article className="w-full flex items-center gap-5 bg-accent p-3 rounded-md relative">
        <span className="p-2 rounded-md  bg-[#ff9676] text-gray-900"><Check size={30}/></span>
        <section>
            <div className="flex-bc py-5">
            <p className="px-1.5 py-1 rounded-full border border-1-gray-300 text-[12px] text-gray">YEARLY</p>
            <p className="text-3xl flex-bc font-semibold"><DollarSign/>129.99</p>
            </div>

            <div>
            <h1 className="text-[26px] font-semibold mt-5 mb-3">14 DAYS FREE</h1>
            <p className="text-lg text-gray"><strong>Subscription fee is $129.99  USD and automatically <br /> renews each year.</strong></p>
            </div>
        </section>

        <span className="absolute -top-2 right-20 text-sm font-semibold px-1 rounded-sm text-gray-200 bg-[#ff9676] ">Best Value</span>
    </article>
  )
}

export default YearlyCard