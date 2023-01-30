import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "../css/Detail.module.css";

function Detail() {
  const x = useParams();
  const [loading, setLoading] = useState([]);
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
  console.log(movieDetail);

  function DetailContents({ movieDetail: movieDetail }) {
    return (
      <div className={styles.movie}>
        <h1>
          {movieDetail["title"]} ({movieDetail["year"]})
        </h1>
        <div className={styles.cover}>
          <img src={movieDetail["medium_cover_image"]} />
        </div>
        <h3>Intro</h3>
        <p> {movieDetail["description_intro"]}</p>
        <h3>Summary</h3>
        <p> {movieDetail["description_full"]}</p>
        <ul>
          {movieDetail["genres"].map((genre, genreId) => {
            return <li key={genreId}>{genre}</li>;
          })}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <Link to={`/home`}> Go to home</Link>
      <br />
      <Link to={`/about`}> Go to about</Link>
      <br />
      <Link to={`/detail`}> Go to detail</Link>
      {loading ? "Loading...." : <DetailContents movieDetail={movieDetail} />}
    </div>
  );
}

export default Detail;
