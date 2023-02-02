import Movie from "../components/Movies";
import styles from "../css/Home.module.css";
function HomeContents({ movies, loading }) {
  return (
    <div className={styles.container}>
      {loading ? (
        "Loading..."
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
export default HomeContents;
