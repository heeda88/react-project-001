import styled from "../css/Movies.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, year, coverImage, summary, genres }) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>
          {title} ({year})
        </Link>
      </h2>
      <div className={styled.cover}>
        <img src={coverImage} />
      </div>
      <p>{summary}</p>
      <ul>
        {genres.map((genre, genreI) => {
          return <li key={genreI}>{genre}</li>;
        })}
      </ul>
      <hr />
      <br />
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
