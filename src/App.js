import { useEffect, useState } from 'react';

import Navbar from './components/Navbar';

import { motion, AnimatePresence } from 'framer-motion';
import Filter from './components/Filter';
import Movie from './components/Movie';

import './App.css';

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  const fetchPopular = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=c12e1110388a10fca28964f97e7894e7&language=en-US&page=1'
    );
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  };
  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <>
      <Navbar />
      <div className="">
        <Filter
          popular={popular}
          setFiltered={setFiltered}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />
        <motion.div layout className="popular-movies">
          <AnimatePresence>
            {filtered &&
              filtered.map((movie) => <Movie key={movie.id} movie={movie} />)}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}

export default App;
