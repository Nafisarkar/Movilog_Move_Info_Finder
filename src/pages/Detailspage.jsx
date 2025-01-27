import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Badge from "../components/badge";

const Detailspage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${
            import.meta.env.VITE_TMDB_API
          }`
        );
        const data = await response.json();
        console.log(data);
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative h-96 bg-gray-900">
        <div
          className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-46">
          <h1 className="text-5xl font-bold mb-4">{movie.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {movie.genres.map((genre) => (
              <Badge
                key={genre.id}
                variant={genre.name}
                className="px-3 py-1 rounded-full bg-gray-800 text-sm font-medium"
              >
                {genre.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="w-full rounded-lg mb-4"
              />
              <div className="text-lg font-semibold mb-4">
                Rating: {movie.vote_average} ⭐
              </div>
              <div className="text-gray-400 text-sm mb-2">
                Release Date: {movie.release_date}
              </div>
              <div className="text-gray-400 text-sm mb-2">
                Runtime: {movie.runtime} minutes
              </div>
              <div className="text-gray-400 text-sm">
                Status: {movie.status}
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-400">{movie.overview}</p>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {movie.budget && (
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Budget</h3>
                  <p className="text-gray-400">
                    {movie.budget >= 1000000000
                      ? (movie.budget / 1000000000).toLocaleString() + " B"
                      : (movie.budget / 1000000).toLocaleString() + " M"}
                  </p>
                </div>
              )}

              {movie.revenue && (
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Revenue</h3>
                  <p className="text-gray-400">
                    {movie.revenue >= 1000000000
                      ? (movie.revenue / 1000000000).toLocaleString() + " B"
                      : (movie.revenue / 1000000).toLocaleString() + " M"}
                  </p>
                </div>
              )}

              {movie.production_companies && (
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Production Companies</h3>
                  <p className="text-gray-400">
                    {movie.production_companies
                      .map((company) => company.name)
                      .join(", ")}
                  </p>
                </div>
              )}

              {movie.tagline && (
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Tagline</h3>
                  <p className="text-gray-400">{movie.tagline}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailspage;
