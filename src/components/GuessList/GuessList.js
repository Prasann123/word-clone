import React from "react";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessList({ guessListData, answer }) {
  /*   const [guessListData, setguessListData] = React.useState([]);
  const guessPushData = [...guessListData, guessWork.guess];
  setguessListData(guessPushData); */
  console.log(guessListData);
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num, id) => {
        return (
          <GuessResults key={num} guess={guessListData[num]} answer={answer} />
        );
      })}
    </div>
  );
}

export default GuessList;
