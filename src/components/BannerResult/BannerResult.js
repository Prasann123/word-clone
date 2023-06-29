import React from "react";

function BannerResult({ gameStatus, answer }) {
  return (
    <>
      {gameStatus === "Won" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>3 guesses</strong>.
          </p>
        </div>
      )}
      {gameStatus === "Lost" && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default BannerResult;
