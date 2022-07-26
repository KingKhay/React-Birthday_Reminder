import React, { useEffect, useState } from "react";
import "./index.css";
import data from "./data";

const Card = () => {
  const [people, setPeople] = useState([]);
  const [noPeople, setNoPeople] = useState(false);

  const handleDelete = () => {
    setNoPeople(true);
  };

  const handleRefresh = () => {
    setPeople(people);
    setNoPeople(false);
  };
  useEffect(() => {
    setPeople(data);
  }, []);

  if (noPeople) {
    return (
      <>
        <button type="button" className="btn refresh" onClick={handleRefresh}>
          View All
        </button>
      </>
    );
  }
  return (
    <>
      <div className="whole-card">
        <div className="container">
          <h2>{people.length} birthdays today</h2>
          <div className="list">
            {people.map((person) => {
              const { id, name, image, age } = person;
              return (
                <div className="list-item" key={id}>
                  <div className="card">
                    <div className="image-container">
                      <img src={image} alt={name} />
                    </div>
                    <div className="card-text">
                      <h4>{name}</h4>
                      <h5>{age} years</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="btn" onClick={handleDelete}>
            Clear All
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
