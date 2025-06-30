import React from "react";
import "./MovieCategory.css";
import { Link } from "react-router-dom";

export default function MovieCategories({
  data,
  sectionTitle,
  UpdatePathName,
  UpdateData,
}) {
  return (
    <div className={`${sectionTitle.replaceAll(" ", "-")} section`}>
      <h2>{sectionTitle}</h2>
      <div className="section-content">
        {data.length ? (
          data.map((item) => {
            if (
              !item.id ||
              !item.poster_path ||
              !item.original_title ||
              !item.vote_average ||
              !item.release_date
            ) {
              return null;
            }
            return (
              <div
                className="movie-item"
                key={item.id}
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
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
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
          })
        ) : (
          <h2>No movies found</h2>
        )}
      </div>
    </div>
  );
}
