import { useState, useEffect } from 'react'
import MovieSmall from './MovieSmall'

const Upcoming = () => {
  const [upcoming, setUpcoming] = useState([])
  const [loading, setLoading] = useState(false)
  const skeleton = [1, 2, 3, 4]
  const fetchUpcoming = async () => {
    setLoading(true)

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB}&language=en-G&page=1`
    )
    const movies = await data.json()
    setUpcoming(movies.results)
    setLoading(false)
  }

  useEffect(() => {
    fetchUpcoming()
  }, [])
  return (
    <>
      <h2
        className="text-blue-500 tracking-wide font-semibold"
        id="coming-soon"
      >
        Coming Soon
      </h2>
      <div className="upcoming-container space-y-10 mt-8">
        {loading
          ? skeleton.map((s, index) => (
              <div key={index} className="game flex">
                <div className="animated-bg-800 animate-skeleton rounded w-16 h-20 flex-none"></div>
                <div className="ml-4">
                  <div className="text-transparent animated-bg-700 animate-skeleton rounded leading-tight">
                    Title goes here today
                  </div>
                  <div className="text-transparent animated-bg-700 animate-skeleton rounded inline-block text-sm mt-2">
                    March 16, Name2022
                  </div>
                </div>
              </div>
            ))
          : upcoming &&
            upcoming.map((movie) => (
              <MovieSmall key={movie.id} movie={movie} />
            ))}
      </div>
    </>
  )
}
export default Upcoming
