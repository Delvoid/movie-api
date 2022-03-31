import { useState, useEffect } from 'react'

const MovieCert = ({ id }) => {
  const [cert, setCert] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchMovieCert = async () => {
    setLoading(true)

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=${process.env.REACT_APP_TMDB}&language=en-GB`
    )
    const certs = await data.json()

    const GB = certs.results.filter((cert) => cert.iso_3166_1 === 'GB')[0]

    setCert(GB?.release_dates[0].certification)
    setLoading(false)
  }

  useEffect(() => {
    fetchMovieCert()
  }, [])

  if (loading) {
    return 'Loading...'
  }

  return (
    <>
      {cert ? (
        <span className="px-2 font-bold border-2 border-gray-200 rounded mr-2">
          {cert ? cert : ''}
        </span>
      ) : (
        ''
      )}
    </>
  )
}
export default MovieCert
