import React, { useState } from "react";
import data from "./data";
function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [num, setNum] = useState(0);

  const onChange = (e) => {
    setNum(e.target.value * 1);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (num < 0) setParagraphs(data.slice(0, 1));
    else if (num > 9) setParagraphs(data);
    else setParagraphs(data.slice(0, num));
  };

  return (
    <main className="section-center">
      <h3>TIRED OF BORING LOREM IPSUM?</h3>
      <form className="lorem-form" onSubmit={onSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input type="number" value={num} onChange={onChange} name="amount" />
        <button type="submit" className="btn">
          GENERATE
        </button>
      </form>
      <article className="lorem-text">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </article>
    </main>
  );
}

export default App;
