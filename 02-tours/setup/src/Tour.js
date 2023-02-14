import React, { useState } from "react";

const Tour = ({ image, id, name, price, info, deleteTour }) => {
  const [toggleInfo, setToggleInfo] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name}></img>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {toggleInfo ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setToggleInfo(!toggleInfo)}>
            {toggleInfo ? "Show less" : "Read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => deleteTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
