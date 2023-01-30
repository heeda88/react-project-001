import { useState, useEffect } from "react";
import Movie from "../components/Movies";
function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      <h1> Movie list</h1>
      {loading ? (
        "Loading....."
      ) : (
        <select>
          {movies.map((item) => {
            return (
              <option key={item.id} value={item.url}>
                {item.title}
              </option>
            );
          })}
        </select>
      )}
      {movies.map((movie) => {
        return (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            year={movie.year}
            coverImage={movie.medium_cover_image}
            summary={movie.summary}
            genres={movie.genres}
          />
        );
      })}
    </div>
  );
}

export default Home;
