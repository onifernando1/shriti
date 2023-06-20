import React from "react";
import { useEffect } from "react";
import { useState, setState } from "react";
import axios from "axios";

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
      {paintings.map((painting) => {
        return <div>{painting.title}</div>;
      })}
    </>
  );
}

export default Portfolio;
