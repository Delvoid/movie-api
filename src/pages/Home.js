import { useEffect, useState } from 'react'
import axios from 'axios'

import TopRated from '../components/TopRated'
import Upcoming from '../components/Upcoming'
import NowPlaying from '../components/NowPlaying'
import Popular from '../components/Popular'

import { motion, AnimatePresence } from 'framer-motion'
import Filter from '../components/Filter'
import Movie from '../components/Movie'

const Home = () => {
  const [popular, setPopular] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeGenre, setActiveGenre] = useState(0)

  const fetchPopular = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=c12e1110388a10fca28964f97e7894e7&language=en-US&page=1'
    )
    const movies = await data.json()
    setPopular(movies.results)
    setFiltered(movies.results)
  }

  useEffect(() => {
    fetchPopular()
  }, [])
  return (
    <>
      <main className="container mx-auto px-4 py-8" id="popular">
        <section>
          <Popular />
        </section>
        <section className="flex flex-col lg:flex-row my-10">
          <NowPlaying />
          <div className="upcoming lg:w-1/4 mt-12 lg:mt-0">
            <Upcoming />
            <TopRated />
          </div>
        </section>
      </main>

      {/* <div className="">
        <Filter
          popular={popular}
          setFiltered={setFiltered}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />
        <motion.div layout className="popular-movies">
          <AnimatePresence>
            {filtered &&
              filtered.map((movie) => <Movie key={movie.id} movie={movie} />)}
          </AnimatePresence>
        </motion.div>
      </div> */}
    </>
  )
}
export default Home
