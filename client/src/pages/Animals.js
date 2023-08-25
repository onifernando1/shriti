import { isMobile } from "react-device-detect";
import React from "react";
import { useEffect } from "react";
import { useState, setState } from "react";
import axios from "axios";
import "../assets/styles/overview.css";
import PaintingOverview from "../components/PaintingOverview";
import { allPaintingsList } from "../data/data";

function Animals() {
  const [paintings, setPaintings] = useState([]);
  useEffect(() => {
    const filteredPaintings = allPaintingsList.filter(
      (painting) => painting.category === "animals"
    );
    setPaintings(filteredPaintings);
  }, []);

  return (
    <>
      <PaintingOverview paintings={paintings} category_name="animals" />
    </>
  );
}

export default Animals;
