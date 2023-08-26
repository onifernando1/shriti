import { isMobile } from "react-device-detect";
import React from "react";
import { useEffect } from "react";
import { useState, setState } from "react";
import "../assets/styles/overview.css";
import PaintingOverview from "../components/PaintingOverview";
import { allPaintingsList } from "../data/data";

function Asian() {
  const [paintings, setPaintings] = useState([]);
  useEffect(() => {
    const filteredPaintings = allPaintingsList.filter(
      (painting) => painting.category === "asian"
    );
    const sortedPaintings = filteredPaintings.sort((a, b) => a.order - b.order);
    setPaintings(sortedPaintings);
  }, []);

  return (
    <>
      <PaintingOverview paintings={paintings} category_name="asian" />
    </>
  );
}

export default Asian;
