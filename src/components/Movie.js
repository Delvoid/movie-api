import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Movie = ({ movie }) => {
  const genres = [
    {
      id: 28,
      name: 'Action',
    },
    {
      id: 12,
      name: 'Adventure',
    },
    {
      id: 16,
      name: 'Animation',
    },
    {
      id: 35,
      name: 'Comedy',
    },
    {
      id: 80,
      name: 'Crime',
    },
    {
      id: 99,
      name: 'Documentary',
    },
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 10751,
      name: 'Family',
    },
    {
      id: 14,
      name: 'Fantasy',
    },
    {
      id: 36,
      name: 'History',
    },
    {
      id: 27,
      name: 'Horror',
    },
    {
      id: 10402,
      name: 'Music',
    },
    {
      id: 9648,
      name: 'Mystery',
    },
    {
      id: 10749,
      name: 'Romance',
    },
    {
      id: 878,
      name: 'Science Fiction',
    },
    {
      id: 10770,
      name: 'TV Movie',
    },
    {
      id: 53,
      name: 'Thriller',
    },
    {
      id: 10752,
      name: 'War',
    },
    {
      id: 37,
      name: 'Western',
    },
  ]

  const getGenres = (genreIds) => {
    return genreIds.map((id) => {
      const genre = genres.filter((g) => g.id === id)
      if (genre.length > 0) return genre[0].name
      return ''
    })
  }
  // getGenres(movie.genre_ids)
  // console.log(getGenres(movie.genre_ids))
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      className="movie group mt-8 relative overflow-hidden bg-gray-700 rounded"
    >
      <div className="relative inline-block">
        <Link to={`/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="hover:opacity-75 transition ease-in-out duration-150 rounded rounded-b-none shadow-xl"
          />
        </Link>

        {movie.vote_average && (
          <>
            <div
              id={movie.id}
              className="absolute w-14 h-14 bg-gray-800 rounded-full"
              style={{ left: 'calc(50% - 28px)', bottom: '-28px' }}
            >
              <CircularProgressbar
                className=" font-bold"
                value={movie.vote_average * 10}
                text={`${movie.vote_average * 10}%`}
                styles={buildStyles({
                  pathTransitionDuration: 2,

                  textColor: 'white',
                  trailColor: '#374151',
                  pathColor:
                    movie.vote_average >= 8
                      ? 'green'
                      : movie.vote_average >= 5
                      ? 'orange'
                      : 'red',
                })}
              />
            </div>
          </>
        )}
      </div>
      <div className="movie-info px-4 py-2">
        <Link
          to={`/${movie.id}`}
          className="block text-base font-semibold leading-tight
        hover:text-gray-400 mt-8"
        >
          {movie.title}
        </Link>

        <div className="text-gray-400 mt-1">
          {getGenres(movie.genre_ids).join(', ')}
        </div>
      </div>

      <Link to={`/${movie.id}`} className="">
        <div className="overvie bg-white p-8 absolute left-0 bottom-0 right-0 max-h-full transform translate-y-[101%] overflow-y-auto transition ease-in duration-300 group-hover:trasform group-hover:translate-y-0 ">
          <h3 className="text-black text-lg font-bold ">Overview</h3>
          <span className="text-black text-base">{movie.overview}</span>
        </div>
      </Link>
    </motion.div>
  )
}
export default Movie
