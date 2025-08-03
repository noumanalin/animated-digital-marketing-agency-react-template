import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/axtra-logo-light.webp';
import Demos from './Demos';
import Portfolio from './Portfolio';
import Service from './Service';
import Others from './Others';
import Blog from './Blog';
import { Search } from 'lucide-react';

const links = [
  { name: 'demos', component: <Demos /> },
  { name: 'portfolio', component: <Portfolio /> },
  { name: 'service', component: <Service /> },
  { name: 'others', component: <Others /> },
  { name: 'blog', component: <Blog /> },
  { name: 'shop' }, // No dropdown
];

const dropdownAnimation = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.2 } },
};

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-accent text-white relative z-50">
      <nav className="container-lg flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="logo" className="w-[120px]" />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 relative">
          {links.map((link, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <NavLink
                to={`/`}
                className="uppercase font-semibold text-[16px] py-2 "
              >
                {link.name}
              </NavLink>

              {/* Dropdown */}
              <AnimatePresence>
                {link.component && activeDropdown === index && (
                  <motion.div
                    variants={dropdownAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute top-full left-0 mt-2 rounded shadow-lg z-50"
                  >
                    {link.component}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* Icons + Mobile Menu Toggle */}
        <div className="flex items-center gap-4 text-lg md:hidden">
          <button>
            <Search />
          </button>
          <button
            className="flex flex-col items-end gap-1 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="w-4 h-0.5 bg-white" />
            <span className="w-5 h-0.5 bg-white" />
            <span className="w-3 h-0.5 bg-white" />
          </button>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-4 text-lg">
          <button>
            <Search />
          </button>
          <button className="flex flex-col items-end gap-1 p-2">
            <span className="w-4 h-0.5 bg-white" />
            <span className="w-5 h-0.5 bg-white" />
            <span className="w-3 h-0.5 bg-white" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={dropdownAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="md:hidden absolute top-full left-0 w-full bg-[#1c1c1c] p-6"
          >
            <ul className="flex flex-col gap-4">
              {links.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={`/${link.name}`}
                    className="block uppercase font-semibold text-[16px] py-2 "
                    onClick={() => setMobileMenuOpen(false)}
                  >
                   <span className='w-6 h-2 bg-white'/> {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
