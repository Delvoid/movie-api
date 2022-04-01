import { useEffect } from 'react'

const Filter = ({ setActiveGenre, activeGenre, setFiltered, popular }) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular)
      return
    }

    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    )
    setFiltered(filtered)
  }, [activeGenre, setFiltered, popular])
  return (
    <div className="filter-container mt-2 ">
      <button
        className={`mr-3 min-w-[4rem] px-1 py-1 border-none bg-white text-blue-500 font-bold cursor-pointer rounded-2xl border-2 border-blue-500 hover:bg-blue-500 hover:text-slate-50  ${
          activeGenre === 0 ? 'bg-blue-500 text-slate-50' : ''
        }`}
        onClick={() => setActiveGenre(0)}
      >
        All
      </button>
      <button
        className={`mr-3 min-w-[5rem] px-1 py-1 border-none bg-white text-blue-500 font-bold cursor-pointer rounded-2xl border-2 border-blue-500 hover:bg-blue-500 hover:text-slate-50   ${
          activeGenre === 35 ? 'bg-blue-500 text-slate-50' : ''
        }`}
        onClick={() => setActiveGenre(35)}
      >
        Comedy
      </button>
      <button
        className={`mr-3 min-w-[5rem] px-1 py-1 border-none bg-white text-blue-500 font-bold cursor-pointer rounded-2xl border-2 border-blue-500 hover:bg-blue-500 hover:text-slate-50   ${
          activeGenre === 28 ? 'bg-blue-500 text-slate-50' : ''
        }`}
        onClick={() => setActiveGenre(28)}
      >
        Action
      </button>
      <button
        className={`mr-3 min-w-[5rem] px-1 py-1 border-none bg-white text-blue-500 font-bold cursor-pointer rounded-2xl border-2 border-blue-500 hover:bg-blue-500 hover:text-slate-50   ${
          activeGenre === 18 ? 'bg-blue-500 text-slate-50' : ''
        }`}
        onClick={() => setActiveGenre(18)}
      >
        Drama
      </button>
      <button
        className={`mr-3 min-w-[5rem] px-1 py-1 border-none bg-white text-blue-500 font-bold cursor-pointer rounded-2xl border-2 border-blue-500 hover:bg-blue-500 hover:text-slate-50   ${
          activeGenre === 10751 ? 'bg-blue-500 text-slate-50' : ''
        }`}
        onClick={() => setActiveGenre(10751)}
      >
        Family
      </button>
    </div>
  )
}
export default Filter
