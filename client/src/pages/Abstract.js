import { isMobile } from "react-device-detect";
import React from "react";
import { useEffect } from "react";
import { useState, setState } from "react";
import "../assets/styles/overview.css";
import PaintingOverview from "../components/PaintingOverview";
import { allPaintingsList } from "../data/data";

function Abstract() {
  const [paintings, setPaintings] = useState(allPaintingsList);
  useEffect(() => {
    const filteredPaintings = allPaintingsList.filter(
      (painting) => painting.category === "abstract"
    );
    setPaintings(filteredPaintings);
  }, []);

  return (
    <>
      <PaintingOverview paintings={paintings} category_name="abstract" />
    </>
  );
}

export default Abstract;
