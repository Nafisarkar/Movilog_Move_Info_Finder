import { useEffect, useState } from "react";
import Moviecard from "../components/moviecard";
import { FiChevronDown, FiCalendar, FiFlag, FiMusic } from "react-icons/fi";

const Topmovies = () => {
  const [movies, setMovies] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isYearMenuOpen, setIsYearMenuOpen] = useState(false);
  const [isGenreMenuOpen, setIsGenreMenuOpen] = useState(false);

  const years = Array.from(
    { length: new Date().getFullYear() - 1950 },
    (_, i) => 1950 + i + 1
  );
  years.sort((a, b) => b - a);

  const languages = [
    { value: "all", label: "All Languages" },
    { value: "en", label: "English" },
    { value: "ko", label: "Korean" },
    { value: "id", label: "Indonesian" },
    { value: "bn", label: "Bangla" },
    { value: "hi", label: "Hindi" },
    { value: "zh", label: "Chinese" },
    { value: "es", label: "Spanish" },
    { value: "ar", label: "Arabic" },
    { value: "pt", label: "Portuguese" },
    { value: "ru", label: "Russian" },
    { value: "ja", label: "Japanese" },
    { value: "fr", label: "French" },
    { value: "de", label: "German" },
    { value: "it", label: "Italian" },
    { value: "tr", label: "Turkish" },
    { value: "th", label: "Thai" },
    { value: "vi", label: "Vietnamese" },
    { value: "pl", label: "Polish" },
  ];

  const genres = [
    { id: 28, name: "Action", icon: <FiMusic className="w-4 h-4" /> },
    { id: 12, name: "Adventure", icon: <FiMusic className="w-4 h-4" /> },
    { id: 16, name: "Animation", icon: <FiMusic className="w-4 h-4" /> },
    { id: 35, name: "Comedy", icon: <FiMusic className="w-4 h-4" /> },
    { id: 80, name: "Crime", icon: <FiMusic className="w-4 h-4" /> },
    { id: 99, name: "Documentary", icon: <FiMusic className="w-4 h-4" /> },
    { id: 18, name: "Drama", icon: <FiMusic className="w-4 h-4" /> },
    { id: 10751, name: "Family", icon: <FiMusic className="w-4 h-4" /> },
    { id: 14, name: "Fantasy", icon: <FiMusic className="w-4 h-4" /> },
    { id: 36, name: "History", icon: <FiMusic className="w-4 h-4" /> },
    { id: 27, name: "Horror", icon: <FiMusic className="w-4 h-4" /> },
    { id: 10402, name: "Music", icon: <FiMusic className="w-4 h-4" /> },
    { id: 9648, name: "Mystery", icon: <FiMusic className="w-4 h-4" /> },
    { id: 10749, name: "Romance", icon: <FiMusic className="w-4 h-4" /> },
    { id: 878, name: "Science Fiction", icon: <FiMusic className="w-4 h-4" /> },
    { id: 10770, name: "TV Movie", icon: <FiMusic className="w-4 h-4" /> },
    { id: 53, name: "Thriller", icon: <FiMusic className="w-4 h-4" /> },
    { id: 10752, name: "War", icon: <FiMusic className="w-4 h-4" /> },
    { id: 37, name: "Western", icon: <FiMusic className="w-4 h-4" /> },
  ];

  const fetchTopMovies = async () => {
    setIsLoading(true);
    try {
      let url = `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_TMDB_API
      }&sort_by=vote_average.desc`;

      if (selectedYear) {
        url += `&primary_release_year=${selectedYear}`;
      }
      if (selectedLanguage !== "all") {
        url += `&with_original_language=${selectedLanguage}`;
      }
      if (selectedGenre && selectedGenre.length > 0) {
        url += `&with_genres=${selectedGenre.join(",")}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTopMovies();
  }, [selectedYear, selectedLanguage, selectedGenre]);

  return (
    <div className="min-h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div className="">
        <div className="pt-5 ">
          <h1>
            <p className="text-2xl text-white font-bold text-center pb-2">
              Top Movies
            </p>
          </h1>
        </div>
        <div className="px-5">
          <div className="flex flex-col items-center gap-2 mb-8">
            {/* Year Selector */}
            <div
              className="relative w-64 cursor-pointer z-20"
              onClick={() => setIsYearMenuOpen(!isYearMenuOpen)}
              disabled={isLoading}
            >
              <div className="flex items-center justify-between w-full px-4 py-1 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg">
                <span className="text-white font-medium">
                  {selectedYear || "Select Year"}
                </span>
                <FiChevronDown className="text-white" />
              </div>
              {isYearMenuOpen && (
                <div className="absolute top-full left-0 w-full mt-1 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-lg transform transition-all">
                  <div className="py-2">
                    <button
                      className="w-full flex items-center px-4 py-2 text-white hover:bg-gray-700 rounded-lg"
                      onClick={() => {
                        setSelectedYear(null);
                        setIsYearMenuOpen(false);
                      }}
                    >
                      <FiCalendar className="mr-2" />
                      All Years
                    </button>
                    {years.map((year) => (
                      <button
                        key={year}
                        className={`w-full flex items-center px-2 py-1 text-white hover:bg-gray-700 rounded-lg ${
                          selectedYear === year ? "bg-gray-700" : ""
                        }`}
                        onClick={() => {
                          setSelectedYear(year);
                          setIsYearMenuOpen(false);
                        }}
                      >
                        <FiCalendar className="mr-2" />
                        {year}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Language Selector */}
            <select
              className="bg-gray-800 text-white py-x pl-4 rounded-lg mb-1 max-w-md "
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              disabled={isLoading}
            >
              {languages.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  <FiFlag className="mr-2" /> {lang.label}
                </option>
              ))}
            </select>

            {/* Genre Selector */}
            <div
              className="relative w-full max-w-md z-10"
              onClick={() => setIsGenreMenuOpen(!isGenreMenuOpen)}
            >
              <div className="flex items-center justify-between px-4 py-1 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg cursor-pointer">
                <span className="text-white font-medium">
                  {selectedGenre
                    ?.map((id) => genres.find((g) => g.id === id)?.name)
                    ?.join(", ") || "Select Genres"}
                </span>
                <FiChevronDown className="text-white" />
              </div>
              {isGenreMenuOpen && (
                <div className="absolute top-full left-0 w-full mt-1 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-lg transform transition-all">
                  <div className="py-1">
                    {genres.map((genre) => (
                      <button
                        key={genre.id}
                        className={`w-full flex items-center px-4 py-1 text-white hover:bg-gray-700 rounded-lg ${
                          selectedGenre?.includes(genre.id) ? "bg-gray-700" : ""
                        }`}
                        onClick={() => {
                          if (selectedGenre?.includes(genre.id)) {
                            setSelectedGenre(
                              selectedGenre.filter((id) => id !== genre.id)
                            );
                          } else {
                            setSelectedGenre([
                              ...(selectedGenre || []),
                              genre.id,
                            ]);
                          }
                          setIsGenreMenuOpen(false);
                        }}
                      >
                        {genre.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {isLoading ? (
              <div className="text-center text-white">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                <p className="mt-2">Loading...</p>
              </div>
            ) : (
              <div className="flex flex-wrap justify-center w-full pb-10 pt-3 gap-4">
                {movies.slice(0, 8).map((movie) => {
                  return <Moviecard key={movie.id} movie={movie} />;
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topmovies;
