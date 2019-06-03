import React from 'react';

const PairsGameOver = ({ restartGame }) => (
  <div className="justify-center">
    <h1>Game Over!</h1>
    <h3>If you enjoyed playing this game, follow me @iamkenec for more...</h3>
    <button className="restart-button" onClick={restartGame}>Restart Game</button>
  </div>
);

export default PairsGameOver;
