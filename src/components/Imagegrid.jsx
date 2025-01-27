import Moviecard from "./Moviecard";
import { useEffect, useState } from "react";

const Imagegrid = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${
        import.meta.env.VITE_TMDB_API
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <div>
      <div className="flex flex-wrap justify-center w-100dvh pb-10 pt-3">
        {movies.map((movie) => {
          return <Moviecard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default Imagegrid;
