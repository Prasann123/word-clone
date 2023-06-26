import React from "react";

function GuessList({ guessListData }) {
  /*   const [guessListData, setguessListData] = React.useState([]);
  const guessPushData = [...guessListData, guessWork.guess];
  setguessListData(guessPushData); */
  console.log(guessListData);
  return (
    <div className="guess-results">
      {guessListData.map((guess, id) => {
        return (
          <p key={crypto.randomUUID()} className="guess">
            {guess}
          </p>
        );
      })}
    </div>
  );
}

export default GuessList;
