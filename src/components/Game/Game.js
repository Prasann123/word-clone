import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessList from "../GuessList/GuessList";
import GuessInput from "../GuessInput";
import BannerResult from "../BannerResult/BannerResult";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessListData, setguessListData] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("Running");
  function handleSubmitGuess(guess) {
    console.log(guess.guess);
    const guessPushData = [...guessListData, guess.guess];
    setguessListData(guessPushData);

    if (guess.guess === answer) {
      setGameStatus("Won");
    }
    if (guessPushData.length >= 6) {
      setGameStatus("Lost");
    }
    console.log(`this is the guess:   ${JSON.stringify(guess)}`);
    console.log(guess);
  }
  return (
    <>
      <GuessList guessListData={guessListData} answer={answer} />
      <GuessInput
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />
      {gameStatus !== "Running" && (
        <BannerResult gameStatus={gameStatus} answer={answer} />
      )}
    </>
  );
}

export default Game;
