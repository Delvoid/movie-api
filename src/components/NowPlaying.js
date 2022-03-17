import { useState } from 'react'

const NowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState(0)
  const skeleton = [1, 2, 3]
  return (
    <div
      className="recently-reviewed w-full lg:w-3/4 mr-0 lg:mr-32"
      id="now-playing"
    >
      <h2 className="text-blue-500 tracking-wide font-semibold">Now Playing</h2>
      <div className="recently-reviewed-container space-y-12 mt-8">
        {!nowPlaying &&
          skeleton.map((s, index) => (
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
                    Reprehenderit cupidatat dolore labore eu. Lorem ipsum dolor
                    sit amet.{' '}
                  </span>
                  <span className="text-transparent animated-bg-700 animate-skeleton rounded inline-block">
                    Reprehenderit cupidatat dolore labore eu. Lorem ipsum dolor
                    sit amet.{' '}
                  </span>
                  <span className="text-transparent animated-bg-700 animate-skeleton rounded inline-block">
                    Reprehenderit cupidatat dolore labore eu. Lorem ipsum dolor
                    sit amet.{' '}
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
export default NowPlaying
