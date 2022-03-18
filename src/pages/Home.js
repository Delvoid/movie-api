import TopRated from '../components/TopRated'
import Upcoming from '../components/Upcoming'
import NowPlaying from '../components/NowPlaying'
import Popular from '../components/Popular'

const Home = () => {
  return (
    <>
      <main className="container mx-auto px-4 py-8" id="popular">
        <section>
          <Popular />
        </section>
        <section className="flex flex-col lg:flex-row my-10">
          <NowPlaying />
          <div className="upcoming lg:w-1/4 mt-12 lg:mt-0">
            <Upcoming />
            <TopRated />
          </div>
        </section>
      </main>
    </>
  )
}
export default Home
