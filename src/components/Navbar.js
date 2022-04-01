import { useState } from 'react'
import Search from './Search'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logoipsum from '../images/logoipsum.svg'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const location = useLocation()
  const [toggle, setToggle] = useState(false)

  return (
    <header className="border-b border-gray-800 sticky top-0 z-10 backdrop-blur-md">
      <nav className="container mx-auto flex flex-row items-center justify-between  px-4 py-6">
        <div className="flex flex-col md:flex-row  items-center">
          <Link to={'/'}>
            <img src={logoipsum} alt="delvoid-logo" className="w-32" />
          </Link>
          <ul className="md:flex md:flex ml-0 md:ml-12 space-x-8 mt-6 md:mt-0 hidden ">
            {location.pathname === '/' ? (
              <>
                <li>
                  <a href="#popular" className="hover:text-gray-400">
                    Popular
                  </a>
                </li>
                <li>
                  <a href="#now-playing" className="hover:text-gray-400">
                    Now Playing
                  </a>
                </li>
                <li>
                  <a href="#coming-soon" className="hover:text-gray-400">
                    Coming Soon
                  </a>
                </li>
                <li>
                  <a href="#top-rated" className="hover:text-gray-400">
                    Top Rated
                  </a>
                </li>
              </>
            ) : (
              <li>
                <Link to={'/'} className="hover:text-gray-400">
                  Home
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="flex items-center mt-0">
          <Search />
        </div>
        <div className="app__navbar-menu md:hidden w-9 h-9 rounded relative flex justify-center items-center text-white bg-blue-500">
          <HiMenuAlt4 onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
              className=" fixed top-0 bottom-0 right-0 z-50 p-4 w-4/5 h-screen flex justify-end items-end flex-col bg-gray-700 shadow"
            >
              <HiX
                onClick={() => setToggle(false)}
                className="text-white w-9 h-9 mx-4 my-2"
              />
              <ul className="list-none m-0 p-0 h-full w-full flex justify-start items-start flex-col">
                {location.pathname === '/' ? (
                  <>
                    <li
                      onClick={() => setToggle(false)}
                      className="m-4 text-base uppercase font-medium"
                    >
                      <a href="#popular" className="hover:text-blue-400 ">
                        Popular
                      </a>
                    </li>
                    <li
                      onClick={() => setToggle(false)}
                      className="m-4 text-base uppercase font-medium"
                    >
                      <a href="#now-playing" className="hover:text-blue-400 ">
                        Now Playing
                      </a>
                    </li>
                    <li
                      onClick={() => setToggle(false)}
                      className="m-4 text-base uppercase font-medium"
                    >
                      <a href="#coming-soon" className="hover:text-blue-400 ">
                        Coming Soon
                      </a>
                    </li>
                    <li
                      onClick={() => setToggle(false)}
                      className="m-4 text-base uppercase font-medium"
                    >
                      <a href="#top-rated" className="hover:text-blue-400 ">
                        Top Rated
                      </a>
                    </li>
                  </>
                ) : (
                  <li
                    onClick={() => setToggle(false)}
                    className="m-4 text-base uppercase font-medium"
                  >
                    <Link to={'/'} className="hover:text-blue-400 ">
                      Home
                    </Link>
                  </li>
                )}
              </ul>
              <div className="absolute bottom-2/4 right-2/4 bg-gray-900 w-12 h-12 rounded-full "></div>
              <div className="absolute  bottom-2/3 right-1/4 bg-gray-900 w-20 h-20 rounded-full "></div>
              <div className="absolute bottom-1/3 right-1/3 bg-gray-900 w-24 h-24 rounded-full "></div>
              <div className="absolute top-3/4 right-2/3 bg-gray-900 w-16 h-16 rounded-full "></div>
            </motion.div>
          )}
        </div>
      </nav>
    </header>
  )
}
export default Navbar
