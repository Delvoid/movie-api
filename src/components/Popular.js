import { useState, useEffect } from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import Movie from './Movie'
import Filter from './Filter'

const Popular = () => {
  const [popular, setPopular] = useState([])
  const [filtered, setFiltered] = useState([])
  const [loading, setLoading] = useState(false)
  const [activeGenre, setActiveGenre] = useState(0)
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  const fetchPopular = async () => {
    setLoading(true)
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB}&language=en-GB&page=1`
    )
    const movies = await data.json()
    setPopular(movies.results)
    setFiltered(movies.results)
    setLoading(false)
  }

  useEffect(() => {
    fetchPopular()
  }, [])
  return (
    <>
      <h2 className="text-blue-500 uppercase tracking-wide font-semibold text-lg">
        Popular Movies
      </h2>
      {loading ? (
        <div className="popular-movies text-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-12 border-b broder-gray-800 pb-16">
          {skeleton.map((s, index) => (
            <div key={index} className="game mt-8">
              <div className="relative inline-block">
                <div className="animated-bg-800 animate-skeleton rounded w-64 h-96 "></div>
              </div>
              <div className="block text-transparent text-lg animated-bg-700 animate-skeleton rounded leading-tight mt-4 w-44">
                Title goes
              </div>
              <div className="text-transparent animated-bg-700 animate-skeleton inline-block mt-3 rounded">
                genre, types
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <Filter
            popular={popular}
            setFiltered={setFiltered}
            activeGenre={activeGenre}
            setActiveGenre={setActiveGenre}
          />
          <motion.div
            layout
            className="popular-movies text-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-12 border-b broder-gray-800 pb-16"
          >
            <AnimatePresence>
              {filtered &&
                filtered.map((movie) => <Movie key={movie.id} movie={movie} />)}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </>
  )
}
export default Popular
