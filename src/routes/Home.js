import { useState, useEffect } from "react";
import Movie from "../components/Movies";
import styles from "../css/Home.module.css";
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

  function HomeContents({ movies }) {
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
                  coverImage={movie.medium_cover_image}
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
      <HomeContents movies={movies} />
    </div>
  );
}

export default Home;
