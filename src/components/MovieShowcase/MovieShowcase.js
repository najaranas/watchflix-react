import React, { useEffect, useState, useCallback } from "react";
import "./MovieShowcase.css";
import SubCards from "./SubCards";
import { CategoriesData, PopularData } from "../script/FetchScript";
import { Link } from "react-router-dom";

const defvalue = 1;

export default function MovieShowcase({ UpdatePathName, UpdateData }) {
  const [popularMovies, setPopularMovies] = useState([]);
  const [mainMovie, setMainMovie] = useState(null);
  const [categories, setCategories] = useState([]);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const popular = await PopularData();
        setPopularMovies(popular.results);
        const initialMainMovie = popular.results[defvalue];
        setMainMovie(initialMainMovie);

        const categoriesData = await CategoriesData();
        setAllCategories(categoriesData.genres);
        const filteredCategories = filterCategories(
          categoriesData.genres,
          initialMainMovie.genre_ids
        );
        setCategories(filteredCategories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  const updateMainMovie = useCallback(
    (data) => {
      setMainMovie(data);
      const updatedCategories = filterCategories(allCategories, data.genre_ids);
      setCategories(updatedCategories);
    },
    [allCategories]
  );

  const filterCategories = useCallback((allCategories, movieGenres) => {
    return allCategories
      .filter((category) => movieGenres.includes(category.id))
      .map((category) => category.name);
  }, []);

  if (!mainMovie) {
    return (
      <div className="icon">
        <i className="fa-solid fa-circle-notch circle-animation active "></i>
      </div>
    );
  }

  return (
    <div className="main-card">
      <img
        className="img-cover"
        alt={mainMovie.title}
        src={`https://image.tmdb.org/t/p/original${mainMovie.backdrop_path}`}
      />
      <div className="main-card-content">
        <h3>{mainMovie.title}</h3>
        <div className="data">
          <span className="year light-gray">
            {new Date(mainMovie.release_date).getFullYear()}
          </span>
          <span className="review">{mainMovie.vote_average.toFixed(1)}</span>
        </div>
        <span className="genres light-gray">{categories.join(", ")}</span>
        <span className="description light-gray">
          {mainMovie.overview.length < 150
            ? mainMovie.overview
            : mainMovie.overview.slice(0, 150) + "..."}
        </span>
        <Link
          to={`/movies/${mainMovie.original_title
            .toLowerCase()
            .replaceAll(" ", "-")}`}>
          <button
            className="watch-btn"
            onClick={() => {
              UpdatePathName(
                mainMovie.original_title.toLowerCase().replaceAll(" ", "-")
              );
              UpdateData(mainMovie.id);
            }}>
            <i className="fa-regular fa-circle-play"></i>
            <span>Watch Now</span>
          </button>
        </Link>
      </div>
      <SubCards
        data={popularMovies}
        defvalue={defvalue}
        updateMainMovie={updateMainMovie}
      />
    </div>
  );
}
