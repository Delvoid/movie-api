import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const Search = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [hidden, setHidden] = useState(true)
  const inputElement = useRef(null)

  const fetchSearch = async () => {
    setLoading(true)

    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB}&language=en-GB&query=${search}&page=1&include_adult=false`
    )
    const movies = await data.json()
    setResults(movies.results.slice(0, 10))
    setLoading(false)
  }

  useEffect(() => {
    if (search.length <= 2) {
      setHidden(true)
      setResults([])
      return
    }
    setHidden(false)
    const timeoutId = setTimeout(() => fetchSearch(), 500)
    return () => clearTimeout(timeoutId)
  }, [search])

  // useEffect(() => {
  //   document.addEventListener('keydown', onKeyDown)

  //   return () => {
  //     document.removeEventListener('keydown', onKeyDown)
  //   }
  // })

  // const onKeyDown = (e) => {
  //   let letter = e.key
  //   if (letter.toLowerCase() === 's') {
  //     if (document.activeElement !== inputElement.current) {
  //       inputElement.current.focus()
  //     }
  //   }
  // }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="relative" x-data="{ isVisible : true }">
      <input
        ref={inputElement}
        type="text"
        className="bg-gray-800 text-sm rounded-full focus:outline-none focus:shadow-outline w-64 px-3 pl-8 py-1"
        placeholder="Search"
        value={search}
        onChange={(e) => handleChange(e)}
      />
      <div className="absolute top-0 flex items-center h-full ml-2">
        <svg className="fill-current text-gray-400 w-4" viewBox="0 0 24 24">
          <path
            className="heroicon-ui"
            d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"
          />
        </svg>
      </div>

      {loading && (
        <div className="absolute top-0 right-0 flex items-center h-full mr-2">
          <svg
            role="status"
            className=" w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600  "
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            ></path>
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            ></path>
          </svg>
        </div>
      )}

      {!hidden && (
        <div className="fixed z-50 bg-gray-800 text-sm rounded w-64 mt-2 ">
          {results.length > 0 ? (
            results.map((movie, index) => (
              <ul key={index} className="">
                <li className="border-b border-gray-700">
                  <Link
                    to={`/${movie.id}`}
                    className="block hover:bg-gray-700 flex items-center transition ease-in-out duration-150 px-3 py-3"
                    onClick={() => {
                      setSearch('')
                      setHidden(true)
                    }}
                  >
                    {movie.poster_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="w-10"
                      />
                    ) : (
                      <img
                        src="https://via.placeholder.com/264x352"
                        alt={movie.title}
                        className="w-10"
                      />
                    )}

                    <span className="ml-4"> {movie.title}</span>
                  </Link>
                </li>
              </ul>
            ))
          ) : (
            <div className="px-3 py-3">No results for {search}</div>
          )}
        </div>
      )}
    </div>
  )
}
export default Search
