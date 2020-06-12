import React from "react";
import Card from "./Card";
import "./SearchResults.css";
const SearchResults = ({ results, addCardToDeck, removeCardFromDeck }) => {
  return (
    <div id="results">
      <h3>Here's what we found ({results.length} results):</h3>
      <div className="Cardlist">
        {results.map(function (e) {
          return (
            <Card
              {...e}
              key={e.id}
              addCardToDeck={addCardToDeck}
              removeCardFromDeck={removeCardFromDeck}
            ></Card>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
