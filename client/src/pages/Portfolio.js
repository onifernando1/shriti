import React from "react";
import { useEffect } from "react";
import { useState, setState } from "react";
import axios from "axios";
import "../assets/styles/overview.css";
import PaintingOverview from "../components/PaintingOverview";
import { allPaintingsList } from "../data/data";

function Portfolio() {
  const [paintings, setPaintings] = useState(allPaintingsList);

  return (
    <>
      <PaintingOverview paintings={paintings} category_name="all" />
    </>
  );
}

export default Portfolio;
