import Search from './Search'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  return (
    <header className="border-b border-gray-800 sticky top-0 z-10 backdrop-blur-md">
      <nav className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 py-6">
        <div className="flex flex-col lg:flex-row items-center">
          <a href="/">
            <img
              src="/images/delvoid.svg"
              alt="delvoid-logo"
              className="w-32 flex-none"
            />
          </a>
          <ul className="flex ml-0 lg:ml-16 space-x-8 mt-6 lg:mt-0">
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
        <div className="flex items-center mt-6 lg:mt-0">
          <Search />
        </div>
      </nav>
    </header>
  )
}
export default Navbar
