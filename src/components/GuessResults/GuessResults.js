import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function GuessResults({ guess, answer }) {
  const results = checkGuess(guess, answer);
  console.log(results);
  return (
    <>
      <p className="guess">
        {range(5).map((data, id) => (
          <span
            className={results ? `cell ${results[data].status}` : "cell"}
            key={data}
          >
            {guess ? guess[id] : undefined}
          </span>
        ))}
      </p>
    </>
  );
}

export default GuessResults;
