import { Link } from "react-router";
import Badge from "./Badge";

/* eslint-disable react/prop-types */
const genralist = {
  genres: [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ],
};

const Moviecard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      {" "}
      {/* Use Link for client-side navigation */}
      <div className="relative flex flex-col mt-4 ml-2 mr-2 border border-gray-700 rounded-lg w-56 drop-shadow-xl transform transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-103 backdrop-blur-md bg-white/10">
        <div className="relative p-2.5 h-76 overflow-hidden rounded-xl bg-clip-border">
          <img
            src={
              movie.poster_path ?? movie.backdrop_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : `https://placehold.co/400x600/000000/FFFFFF/?text=No+Image`
            }
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="px-3">
          <div className="mb-4 flex flex-col ">
            <p
              className="text-gray-200 text-xm font-semibold"
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                maxWidth: "20ch",
              }}
            >
              {movie.title.length > 20
                ? movie.title.slice(0, 17) + "..."
                : movie.title}
            </p>
            <p className="text-gray-300 text-xs items-start justify-between">
              {new Date(movie.release_date).getFullYear()}
              {movie.vote_average > 0
                ? ` - ${Math.round(movie.vote_average)}` + "⭐"
                : ""}
            </p>
            <p className="text-gray-300 text-xs flex items-start justify-start w-full flex-wrap max-w-[80%] pt-2">
              {genralist.genres
                .filter((genre) => movie.genre_ids.includes(genre.id))
                .slice(0, 1) // Only show first 3 genres
                .map((genre) => {
                  return genre ? (
                    <Badge key={genre.id} variant={genre.name}>
                      {genre.name}
                    </Badge>
                  ) : (
                    <Badge key={genre.id} variant={"nan"}>
                      nan
                    </Badge>
                  );
                })}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Moviecard;
