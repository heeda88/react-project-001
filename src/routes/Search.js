import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movies";
import styles from "../css/Home.module.css";
function Search() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const x = useParams();
  const getMovies = async () => {
    console.log(x);
    const searchResponse = await fetch(
      `https://yts.mx/api/v2/list_movies.json?query_term=${x["keyword"]}`
    );
    const json = await searchResponse.json();
    console.log(searchResponse);
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  function SearchContents({ movies }) {
    return (
      <div className={styles.container}>
        {loading ? (
          "Loading....."
        ) : (
          <div className={styles.movies}>
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  year={movie.year}
                  coverImage={
                    movie.medium_cover_image ? movie.medium_cover_image : ""
                  }
                  summary={movie.summary}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <SearchContents movies={movies} />
    </div>
  );
}
export default Search;
