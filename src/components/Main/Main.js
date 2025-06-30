import "./main.css";
import React, { useState, useEffect } from "react";
import MovieShowcase from "../MovieShowcase/MovieShowcase";
import MovieCategory from "../MovieCategory/MovieCategory";
import {
  trendingData,
  topRatedData,
  upcomingData,
} from "../script/FetchScript";

export default function Main({ UpdatePathName, UpdateData }) {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const trending = await trendingData();
        setTrendingMovies(trending.results);

        const topRated = await topRatedData();
        setTopRatedMovies(topRated.results);

        const upcoming = await upcomingData();
        setUpcomingMovies(upcoming.results);
      } catch (error) {
        console.error("Error fetching movies data:", error);
      } finally {
        setLoading(false);
      }
    }
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="icon">
        <i className="fa-solid fa-circle-notch circle-animation active "></i>
      </div>
    );
  }

  return (
    <div className="main transparity-bottom">
      <MovieShowcase UpdatePathName={UpdatePathName} UpdateData={UpdateData} />
      {trendingMovies.length > 0 && (
        <MovieCategory
          UpdatePathName={UpdatePathName}
          data={trendingMovies}
          UpdateData={UpdateData}
          sectionTitle={"Weekly Trending Movies"}
        />
      )}
      {topRatedMovies.length > 0 && (
        <MovieCategory
          UpdatePathName={UpdatePathName}
          data={topRatedMovies}
          UpdateData={UpdateData}
          sectionTitle={"Top Rated Movies"}
        />
      )}
      {upcomingMovies.length > 0 && (
        <MovieCategory
          UpdatePathName={UpdatePathName}
          data={upcomingMovies}
          UpdateData={UpdateData}
          sectionTitle={"Upcoming Movies"}
        />
      )}
    </div>
  );
}
