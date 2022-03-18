import { useState, useEffect } from 'react'
import MovieSmall from './MovieSmall'

const TopRated = () => {
  const [topRated, setTopRated] = useState([])
  const [loading, setLoading] = useState(false)
  const skeleton = [1, 2, 3, 4]

  const fetchTopRated = async () => {
    setLoading(true)

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB}&language=en-GB&page=1`
    )
    const movies = await data.json()
    setTopRated(movies.results.slice(0, 10))
    setLoading(false)
  }

  useEffect(() => {
    fetchTopRated()
  }, [])
  return (
    <>
      <h2
        className="text-blue-500 tracking-wide font-semibold mt-8"
        id="top-rated"
      >
        Top Rated
      </h2>
      <div className="top-rated-container space-y-10 mt-8">
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
          : topRated &&
            topRated.map((movie) => (
              <MovieSmall key={movie.id} movie={movie} />
            ))}
      </div>
    </>
  )
}
export default TopRated
