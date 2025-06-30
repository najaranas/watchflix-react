import React, { useRef, useCallback } from "react";

export default function SubCards({ data, defvalue, updateMainMovie }) {
  const subCards = useRef();
  const cardItem = useRef();

  const updateActiveCard = useCallback(
    (element, index) => {
      const childrenArray = Array.from(element.parentElement.children);
      childrenArray.forEach((el) => {
        el.classList.remove("active");
      });
      element.classList.add("active");
      updateMainMovie(data[index]);
    },
    [updateMainMovie, data]
  );

  return (
    <div className="sub-cards" ref={subCards}>
      {data.length ? (
        data.map((item, index) => {
          if (!item.id || !item.poster_path) {
            return null;
          }
          return (
            <div
              key={item.id}
              className={"card-item " + (index === defvalue ? "active" : "")}
              ref={cardItem}
              onClick={(e) => {
                updateActiveCard(e.target, index);
              }}>
              <img
                alt={item.title}
                src={"https://image.tmdb.org/t/p/original/" + item.poster_path}
              />
            </div>
          );
        })
      ) : (
        <h2>No data Found</h2>
      )}
    </div>
  );
}
