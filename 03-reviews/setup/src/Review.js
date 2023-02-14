import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);

  const moveRight = () => {
    if (index >= 0 && index < people.length - 1) setIndex(index + 1);
  };

  const moveLeft = () => {
    if (index > 0 && index < people.length) setIndex(index - 1);
  };

  const selectRandom = () => {
    let randomIdx = Math.floor(Math.random() * people.length);
    if (randomIdx === index && randomIdx < people.length - 1) randomIdx++;
    else if (randomIdx === index && randomIdx >= 1) randomIdx--;
    setIndex(randomIdx);
  };

  const { image, name, job, text } = people[index];
  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={name}></img>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <FaChevronLeft className="leftArrow" onClick={moveLeft} />
        <FaChevronRight className="rightArrow" onClick={moveRight} />
      </div>
      <button className="random-btn" onClick={selectRandom}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
