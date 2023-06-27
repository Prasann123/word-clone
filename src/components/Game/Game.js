import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessList from "../GuessList/GuessList";
import GuessInput from "../GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessListData, setguessListData] = React.useState([]);

  function handleSubmitGuess(guess) {
    console.log(guess.guess);
    const guessPushData = [...guessListData, guess.guess];
    setguessListData(guessPushData);
    console.log(`this is the guess:   ${JSON.stringify(guess)}`);
    console.log(guess);
  }
  return (
    <>
      <GuessList guessListData={guessListData} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
