import React, { useEffect, useState } from "react";
import { SearchData } from "../script/FetchScript";
import { Link, useLocation } from "react-router-dom";

export default function SearchMovie({ UpdatePathName, UpdateData }) {
  const [Pagedata, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [newtitle, setTitle] = useState(null);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (query) {
      setTitle(query);

      async function fetchData() {
        try {
          const movieDetails = await SearchData(query, 1);
          setData(movieDetails);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      fetchData();
    }
  }, [query]);

  const loadMoreData = async () => {
    try {
      const newPage = page + 1;
      const response = await SearchData(query, newPage);
      setData((prevData) => {
        return {
          ...prevData,
          page: newPage,
          results: [...prevData.results, ...response.results],
        };
      });

      setPage(newPage);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (!Pagedata) {
    return (
      <div className="container">
        <div className="icon">
          <i className="fa-solid fa-circle-notch circle-animation active "></i>
        </div>
      </div>
    );
  } else if (Pagedata.results.length === 0) {
    return (
      <div className="container">
        <h2>No movies Found</h2>
      </div>
    );
  }

  return (
    <div className="container transparity-bottom">
      <h3>Results for</h3>
      <h2>{newtitle}</h2>
      <div className="content">
        {Pagedata.results.map((item, index) => {
          if (
            !item.poster_path ||
            !item.original_title ||
            !item.vote_average ||
            !item.release_date
          ) {
            return null;
          }

          return (
            <div
              key={index}
              className="movie-item"
              onClick={() => {
                UpdatePathName(
                  item.original_title.toLowerCase().replaceAll(" ", "-")
                );
                UpdateData(item.id);
              }}>
              <Link
                to={`/movies/${item.original_title
                  .toLowerCase()
                  .replaceAll(" ", "-")}`}>
                <img
                  alt={item.original_title}
                  src={
                    "https://image.tmdb.org/t/p/original/" + item.poster_path
                  }
                />
                <h4 className="title">{item.original_title}</h4>
                <div className="rating">
                  <span className="review">
                    <i className="fa-solid fa-star"></i>
                    <span className="review-data">
                      {item.vote_average.toFixed(1)}
                    </span>
                  </span>
                  <span className="date">
                    {item.release_date.match(/\d+/i)[0]}
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="btn">
        {Pagedata.page !== Pagedata.total_pages ? (
          <button onClick={loadMoreData} className="load-btn">
            Load More
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
