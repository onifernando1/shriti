import React from "react";
import { useEffect } from "react";
import { useState, setState } from "react";
import axios from "axios";
import "../assets/styles/portfolio.css";
import PaintingOverview from "../components/PaintingOverview";

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
      <PaintingOverview paintings={paintings} />
    </>
  );
}

export default Portfolio;
