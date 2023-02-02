import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "../css/Detail.module.css";

function Detail() {
  const x = useParams();
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState([]);

  const getMovieDetail = async () => {
    const movieResponse = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${x["id"]}`
    );
    const movieJson = await movieResponse.json();
    setMovieDetail(movieJson["data"]["movie"]);
    setLoading(false);
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  function DetailContents({ movieDetail: movieDetail }) {
    return (
      <div className={styles.movie}>
        <h1>
          {movieDetail["title"]} ({movieDetail["year"]})
        </h1>
        <div className={styles.cover}>
          <img src={movieDetail["medium_cover_image"]} />
        </div>
        <h3>Summary</h3>
        <p> {movieDetail["description_full"]}</p>
        <h3>Genres</h3>
        <ul>
          {movieDetail["genres"].map((genre, genreId) => {
            return <li key={genreId}>{genre}</li>;
          })}
        </ul>
      </div>
    );
  }
  console.log("reRender");
  return (
    <div>
      {loading ? "Loading...." : <DetailContents movieDetail={movieDetail} />}
    </div>
  );
}

export default Detail;
