import React, { useState } from "react";
import { data } from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  const hideList = () => {
    setPeople([]);
  };
  return (
    <main>
      <section className="container">
        <h3>{`${people.length} birthdays today`}</h3>
        {people.map((person) => (
          <List
            key={person.id}
            name={person.name}
            age={person.age}
            img={person.image}
          />
        ))}

        <button onClick={hideList}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
