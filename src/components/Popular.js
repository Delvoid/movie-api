import { useState } from 'react'

const Popular = () => {
  const [popular, setPopular] = useState(0)
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  return (
    <>
      <h2 className="text-blue-500 uppercase tracking-wide font-semibold">
        Popular Movies
      </h2>
      <div className="popular-games text-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-12 border-b broder-gray-800 pb-16">
        {!popular &&
          skeleton.map((s, index) => (
            <div key={index} className="game mt-8">
              <div className="relative inline-block">
                <div className="animated-bg-800 animate-skeleton rounded w-44 h-56 "></div>
              </div>
              <div className="block text-transparent text-lg animated-bg-700 animate-skeleton rounded leading-tight mt-4 w-44">
                Title goes
              </div>
              <div className="text-transparent animated-bg-700 animate-skeleton inline-block mt-3 rounded">
                genre, types
              </div>
            </div>
          ))}
      </div>
    </>
  )
}
export default Popular
