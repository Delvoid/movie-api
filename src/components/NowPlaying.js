import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import MovieGenres from './MovieGenres'

const NowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState([])
  const [loading, setLoading] = useState(false)
  const skeleton = [1, 2, 3]

  const fetchNowPlaying = async () => {
    setLoading(true)

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB}&language=en-G&page=1`
    )
    const movies = await data.json()
    setNowPlaying(movies.results)
    setLoading(false)
  }

  useEffect(() => {
    fetchNowPlaying()
  }, [])
  return (
    <div
      className="recently-reviewed w-full lg:w-3/4 mr-0 lg:mr-32"
      id="now-playing"
    >
      <h2 className="text-blue-500 tracking-wide font-semibold text-lg">
        Now Playing
      </h2>
      <div className="recently-reviewed-container space-y-12 mt-8">
        {loading
          ? skeleton.map((_, index) => (
              <div
                key={index}
                className="game bg-gray-800 rounded-lg shadow-md flex px-6 py-6"
              >
                <div className="relative flex-none">
                  <div className="animated-bg-800 animate-skeleton rounded w-32 lg:w-48 lg:h-56"></div>
                </div>
                <div className="ml-6 lg:ml-12">
                  <div className="inline-block text-lg font-semibold leading-tight text-transparent animated-bg-700 animate-skeleton rounded mt-4">
                    Title here
                  </div>

                  <div className="mt-8 space-y-4 hidden lg:block">
                    <span className="text-transparent animated-bg-700 animate-skeleton rounded inline-block">
                      Reprehenderit cupidatat dolore labore eu. Lorem ipsum
                      dolor sit amet.{' '}
                    </span>
                    <span className="text-transparent animated-bg-700 animate-skeleton rounded inline-block">
                      Reprehenderit cupidatat dolore labore eu. Lorem ipsum
                      dolor sit amet.{' '}
                    </span>
                    <span className="text-transparent animated-bg-700 animate-skeleton rounded inline-block">
                      Reprehenderit cupidatat dolore labore eu. Lorem ipsum
                      dolor sit amet.{' '}
                    </span>
                  </div>
                </div>
              </div>
            ))
          : nowPlaying &&
            nowPlaying.map((movie) => (
              <div
                key={movie.id}
                className="game bg-gray-800 rounded-lg shadow-md flex px-6 py-6"
              >
                <div className="relative flex-none">
                  <Link to={`/${movie.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      className="w-48 hover:opacity-75 transition ease-in-out duration-150"
                    />
                  </Link>
                  {movie.vote_average && (
                    <>
                      <div
                        id={movie.id}
                        className="absolute w-14 h-14 bg-gray-800 rounded-full"
                        style={{ right: '-15px', bottom: '-15px' }}
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
                <div className="ml-12">
                  <Link
                    to={`/${movie.id}`}
                    className="block text-large font-semibold leading-tight
                    hover:text-gray-400 mt-4"
                  >
                    {movie.title}
                  </Link>
                  <MovieGenres ids={movie.genre_ids} />
                  <p className="mt-6 text-gray-400 hidden lg:block">
                    {movie.overview}
                  </p>
                </div>
              </div>
            ))}
      </div>
    </div>
  )
}
export default NowPlaying
