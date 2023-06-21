import { isMobile } from "react-device-detect";
import React from "react";
import { useEffect } from "react";
import { useState, setState } from "react";
import axios from "axios";
import "../assets/styles/overview.css";
import PaintingOverview from "../components/PaintingOverview";

function Abstract() {
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

export default Abstract;
