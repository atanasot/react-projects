import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, deleteTour }) => {
  return (
    <div>
      {tours.map((tour) => (
        <div key={tour.id}>
          <Tour {...tour} deleteTour={deleteTour} />
        </div>
      ))}
    </div>
  );
};

export default Tours;
