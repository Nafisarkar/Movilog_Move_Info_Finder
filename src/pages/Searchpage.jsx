import { useState } from "react";
import Moviecard from "../components/moviecard";
import { Navbar } from "../components/Navbar";

const Seachpage = () => {
  const [Moviesearch, setMoviesearch] = useState("");
  const [movies, setMovies] = useState([]);

  function searchmoviedetails(moviesearch) {
    console.log(moviesearch);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        import.meta.env.VITE_TMDB_API
      }&query=${moviesearch}`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }

  return (
    <div className="min-h-screen pt-5 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div className="flex flex-col justify-start items-center ">
        <h1 className="text-2xl text-white font-bold pt-5">Search Movies</h1>
        <div className="w-full max-w-sm min-w-[180px] relative mt-4 px-4 ">
          <div className="relative">
            <input
              type="email"
              className="w-full bg-transparent placeholder:text-slate-400 text-white  text-sm border border-slate-200 rounded-md pl-3 pr-20 py-2  transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Enter your text"
              value={Moviesearch}
              onChange={(e) => setMoviesearch(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  searchmoviedetails(Moviesearch);
                }
              }}
            />
            <button
              className="absolute right-1 top-1 rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              onClick={() => searchmoviedetails(Moviesearch)}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-100dvh pb-10 pt-3">
        {movies.map((movie) => {
          return <Moviecard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default Seachpage;
