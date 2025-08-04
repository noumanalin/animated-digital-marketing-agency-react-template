 import {  Check, DollarSign } from "lucide-react"


const MonthlyCard = () => {
  return (
    <article className="w-full flex items-center gap-5 bg-gray-100 my-5 p-3 rounded-md shadow-2xl">
        <span className="p-2 rounded-md  border border-gray-500 text-gray-900"><Check size={30}/></span>
        <section>
            <div className="flex-bc py-5 text-zinc-900">
            <p className="px-1.5 py-1 rounded-full border border-1-gray-300 text-[12px]"><strong>MONTHLY</strong></p>
            <p className="text-3xl flex-bc font-semibold"><DollarSign/>12.9</p>
            </div>

            <div>
            <h1 className="text-[26px] font-semibold mt-5 mb-3 text-zinc-800">14 DAYS FREE</h1>
            <p className="text-lg text-gray"><strong>Subscription fee is $129.99 USD and automatically <br /> renews each year.</strong></p>
            </div>
        </section>
    </article>
  )
}

export default MonthlyCard