import React from "react";
import { useEffect } from "react";
import { useState, setState } from "react";
import axios from "axios";
import "../assets/styles/portfolio.css";

function Portfolio() {
  const [paintings, setPaintings] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/paintings`)
      .then((response) => {
        setPaintings(response.data.painting_list);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="portfolio-container">
        <div className="portfolio-paintings-container">
          {paintings.map((painting) => {
            return (
              <div className="portfolio-individual-container">
                <img
                  src={require(`../assets/images/${painting.image}.jpg`)}
                ></img>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
