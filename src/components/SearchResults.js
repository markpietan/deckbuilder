import React from "react";
import Card from "./Card";
import "./SearchResults.css"
const SearchResults = ({ results }) => {
  return (
    <div id="results">
      <h3>Here's what we found ({results.length} results):</h3>
      <div className = "Cardlist">
      {results.map(function (e) {
        return <Card {...e} key = {e.id}></Card>
      })}
      </div>
    </div>
  );
};

export default SearchResults;
