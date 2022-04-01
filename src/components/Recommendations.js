import { useState, useEffect, useCallback } from 'react'
import Movie from './Movie'

const Recommendations = ({ id }) => {
  const [recommended, setRecommended] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchRecommended = useCallback(async () => {
    setLoading(true)

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB}&language=en-GB&page=1`
    )
    const movies = await data.json()
    setRecommended(movies.results.slice(0, 10))
    setLoading(false)
  }, [id])

  useEffect(() => {
    fetchRecommended()
  }, [fetchRecommended])

  if (loading) {
    return 'loading'
  }
  return (
    <>
      <h2 className="text-blue-500 uppercase tracking-wide font-semibold text-lg mt-6">
        Recommendations
      </h2>
      <div className="popular-movies text-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-12 border-b broder-gray-800 pb-16">
        {recommended &&
          recommended.map((movie) => <Movie key={movie.id} movie={movie} />)}
      </div>
    </>
  )
}
export default Recommendations
