import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const result = await response.json();
        setData(result);
        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  const deleteTour = (tourId) => {
    const newTours = data.filter((tour) => tourId !== tour.id);
    setData(newTours);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading)
    return (
      <main>
        <Loading />
      </main>
    );

  if (!data.length) {
    return (
      <main>
        <h2>No tours left</h2>
        <button className="btn" onClick={fetchTours}>
          Refresh
        </button>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={data} deleteTour={deleteTour} />
    </main>
  );
}

export default App;
