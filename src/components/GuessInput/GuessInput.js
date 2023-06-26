import React from "react";

function GuessInput({ handleSubmitGuess }) {
  console.log("abc");
  const [guessWork, SetGuessWord] = React.useState({ guess: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    const guessWordle = { ...guessWork };
    guessWordle[name] = value.toUpperCase();
    SetGuessWord(guessWordle);
  };
  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          console.log(guessWork);
          handleSubmitGuess(guessWork);
          SetGuessWord({ guess: "" });
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          name="guess"
          type="text"
          pattern="[A-Za-z]{5}"
          value={guessWork.guess}
          onChange={handleChange}
        />
      </form>
    </>
  );
}

export default GuessInput;
