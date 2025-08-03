import { motion } from "framer-motion"
import logo from '../assets/axtra-logo-light.webp';
import { Link } from "react-router-dom";

const socialLinks = [
    {name:"FACEBOOK", url:"www.facebook.com"},
    {name:"TWITTER", url:"www.twitter.com"},
    {name:"LINKEDIN", url:"www.linkedin.com"},
    {name:"INSTAGRAM", url:"www.instagram.com"},
]

const links = [
    {name:"ABOUT US", url:""},
    {name:"CONTANT", url:""},
    {name:"CAREERS", url:""},
    {name:"FAQS", url:""},
]

const lastLink = links.length - 1;

const Footer = () => {
  return (
    <footer className="w-full bg-dark mt-12">
        <section className="container-lg">
        {/* Upper Footer Section */}
        <article className="flex-bc flex-col md:flex-row gap-10 py-10 md:py-0 text-center">
            {/* 1. logo */}
            <figure className="w-full md:max-w-[375px]">
                <img src={logo} alt="white logo" />
                <p className="py-5 text-gray">When do they work well, and when do they on us and finally, when do we actually need how can we avoid them.
</p>
            </figure>
        

        {/* 2. Links */}
        <ul className="h-full flex flex-col justify-between ">
            {socialLinks.map((link, index)=><>
            <li className={`${index===lastLink?"border-b-0":""} w-full md:w-auto  social-link border py-[50px] px-5 center-center md:border-t-0 border-b-0 border-gray-500 hover:bg-gray-500 transition-colors duration-500 ease-in text-light`} key={index}>
                <Link to={link.url}>{link.name}</Link>
            </li>
            <hr className="w-full h-0.5 bg-gray-500" />
            </>)}
        </ul>

        {/* 3. Big text Only */}
        <h1 className="flex-1 uppercase flex justify-end  text-light text-[150px]"><strong>Let’s talk</strong></h1>
    </article>
    <hr className="w-full h-[1px] text-zinc-700 mb-10" />
        {/* Lower Footer Section */}
        <article className="flex-bc flex-col-reverse md:flex-row gap-10 text-light py-10">
            <p><strong> @ 2022 - 2025 | Alrights reserved <span className="hidden md:inline"><br /></span> by Crowdyflow </strong></p>

            {/* Links */}
            <ul className="flex-bc gap-15">
                {links.map((link, index)=> <li className="hover:text-gray-600 transition-colors duration-300 ease-in-out font-semibold"><Link to={link.url}>{link.name}</Link></li> )}
            </ul>

        </article>
        </section>
    </footer>
  )
}

export default Footer