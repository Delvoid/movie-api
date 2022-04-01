import { useState, useEffect, useRef, useCallback } from 'react'

const MovieTrailer = ({ id }) => {
  const ref = useRef()
  const [showTrailer, setShowTrailer] = useState(false)
  const [trailer, setTrailer] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (showTrailer && ref.current && !ref.current.contains(e.target)) {
        setShowTrailer(false)
      }
    }
    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [showTrailer])

  const fetchTrailer = useCallback(async () => {
    setLoading(true)

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB}&language=en-GB`
    )
    const res = await data.json()
    const trailer = res.results.filter((trailer) =>
      trailer.name.includes('Official Trailer')
    )[0]
    setTrailer(trailer)
    setLoading(false)
  }, [id])

  useEffect(() => {
    fetchTrailer()
  }, [fetchTrailer])

  if (loading) {
    return 'Loading...'
  }
  return (
    <>
      {trailer && (
        <div className="mt-16 mb-4">
          <button
            className="flex bg-blue-500 text-white font-semibold px-4 py-4 hover:bg-blue-600 rounded transition ease-in-out duration-150"
            onClick={() => setShowTrailer(true)}
          >
            <svg className="w-6 fill-current" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
            </svg>
            <span className="ml-2">Play Trailer</span>
          </button>

          {showTrailer && (
            <section>
              <div
                // style="background-color: rgba(0, 0, 0, .5);"
                className="z-50 fixed top-0 left-0 w-full h-full flex items-center shadow-lg overflow-y-auto"
              >
                <div className="container mx-auto lg:px-32 rounded-lg">
                  <div
                    className="bg-gray-800 rounded border-2 border-gray-800 shadow-sm shadow-white"
                    ref={ref}
                  >
                    <div className="flex justify-end pr-4 pt-2">
                      <button
                        className="text-3xl leading-none hover:text-gray-300"
                        onClick={() => setShowTrailer(false)}
                      >
                        &times;
                      </button>
                    </div>
                    <div className="modal-body px-8 py-8 ">
                      <div
                        className="responsive-container overflow-hidden relative "
                        style={{ paddingTop: '56.25%' }}
                      >
                        <iframe
                          className="responsive-iframe absolute top-0 left-0 w-full h-full"
                          width="560"
                          height="315"
                          title="trailer"
                          src={`https://www.youtube.com/embed/${trailer.key}`}
                          style={{ border: '0' }}
                          allowFullScreen={true}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      )}
    </>
  )
}
export default MovieTrailer
