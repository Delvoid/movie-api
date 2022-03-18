import { Link } from 'react-router-dom'
import MovieGenres from './MovieGenres'

const MovieSmall = ({ movie }) => {
  const date = new Date(movie.release_date).toDateString()
  return (
    <div className="game flex">
      <Link to={`/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-16 hover:opacity-75 transition ease-in-out duration-150"
        />
      </Link>
      <div className="ml-4 flex flex-col justify-between">
        <div>
          <Link to={`/${movie.id}`} className="hover:text-gray-300">
            {movie.title}
          </Link>
          <MovieGenres ids={movie.genre_ids} />
        </div>
        <div className="text-gray-400 text-sm mt-1">{date}</div>
      </div>
    </div>
  )
}
export default MovieSmall
