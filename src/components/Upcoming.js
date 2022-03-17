import { useState } from 'react'

const Upcoming = () => {
  const [upcoming, setUpcoming] = useState(0)
  const skeleton = [1, 2, 3, 4]
  return (
    <>
      <h2
        className="text-blue-500 tracking-wide font-semibold"
        id="coming-soon"
      >
        Upcoming
      </h2>
      <div className="upcoming-container space-y-10 mt-8">
        {!upcoming &&
          skeleton.map((s, index) => (
            <div key={index} className="game flex">
              <div className="animated-bg-800 animate-skeleton rounded w-16 h-20 flex-none"></div>
              <div className="ml-4">
                <div className="text-transparent animated-bg-700 animate-skeleton  rounded leading-tight">
                  Title goes here today
                </div>
                <div className="text-transparent animated-bg-700 animate-skeleton  rounded inline-block text-sm mt-2">
                  March 16, 2022
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}
export default Upcoming
