import React, { useEffect, useState } from "react";
import "./MovieDetails.css";
import MovieCategories from "../MovieCategory/MovieCategory";
import {
  EmbedVideosData,
  MovieCreditsData,
  SimilarData,
} from "../script/FetchScript";

export default function MovieDetails({ UpdatePathName, data, UpdateData }) {
  const [videosData, setVideosData] = useState(null);
  const [similarData, setSimilarData] = useState(null);
  const [creditsData, setCreditsData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const videosData = await EmbedVideosData(data.id);
        setVideosData(videosData);
      } catch (error) {
        console.error("Error fetching Videos data:", error);
      }

      try {
        const similarData = await SimilarData(data.id);
        setSimilarData(similarData.results);
      } catch (error) {
        console.error("Error fetching Similar data:", error);
      }

      try {
        const creditsData = await MovieCreditsData(data.id);
        setCreditsData(creditsData);
      } catch (error) {
        console.error("Error fetching Credits data:", error);
      }
    }

    if (data) {
      setTimeout(() => {
        fetchData();
      }, 7000);
      window.scrollTo(0, 0);
    }
  }, [data]);

  if (!data || !videosData || !similarData || !creditsData) {
    return (
      <div className="container">
        <div className="icon">
          <i className="fa-solid fa-circle-notch circle-animation active "></i>
        </div>
      </div>
    );
  }

  return (
    <div className="MovieDetails transparity-bottom">
      <div className="main-movie-details">
        <div className="bg-img">
          <img
            className="bg-image"
            alt={data.title}
            src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          />
        </div>
        <div className="main-movie-data">
          <img
            className="movie-image"
            alt={data.title}
            src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
          />
          <div className="content">
            <h2>{data.title}</h2>
            <div className="small-data">
              <div className="review circle">
                <i className="fa-solid fa-star"></i>
                <span className="review-data light-gray">
                  {data.vote_average.toFixed(1)}
                </span>
              </div>
              <span className="time circle light-gray">{data.runtime}m</span>
              <span className="released-data light-gray">
                {new Date(data.release_date).getFullYear()}
              </span>
            </div>
            <span className="genres light-gray">
              {data.genres.map((genre) => genre.name).join(", ")}
            </span>
            <span className="description">{data.overview}</span>
            <span className="box">
              <span className="light-gray name">Starring :</span>
              <span className="text">
                {creditsData.cast
                  .filter((item) => item.known_for_department === "Acting")
                  .slice(0, 30)
                  .map((item) => item.name)
                  .join(", ")}
              </span>
            </span>
            <span className="box">
              <span className="light-gray name">Directed By :</span>
              <span className="text">
                {creditsData.crew
                  .filter((item) => item.known_for_department === "Directing")
                  .map((item) => item.name)
                  .join(", ")}
              </span>
            </span>
            <h3>Trailers & Clips</h3>
            <div className="trailers-clips">
              {videosData.results.length ? (
                videosData.results.map((video, index) => {
                  if (!video.key) {
                    return null;
                  }
                  return (
                    <iframe
                      key={index}
                      width="420"
                      height="315"
                      title={video.name}
                      allowFullScreen
                      style={{ border: "none" }}
                      src={`https://www.youtube.com/embed/${video.key}`}
                    />
                  );
                })
              ) : (
                <span>No Trailers & Clips</span>
              )}
            </div>
          </div>
        </div>
      </div>
      <MovieCategories
        data={similarData}
        sectionTitle="You May Like Also"
        UpdatePathName={UpdatePathName}
        UpdateData={UpdateData}
      />
    </div>
  );
}
