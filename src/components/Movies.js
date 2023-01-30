import styles from "../css/Movies.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, year, coverImage, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img src={coverImage} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul>
          {genres.map((genre, genreI) => {
            return <li key={genreI}>{genre}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  year: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
