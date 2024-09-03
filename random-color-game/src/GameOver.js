const GameOver = ({ roundCount, onClick }) => {
  return (
    <div className="game-over">
      <h2>Game was over in {roundCount} rounds</h2>
      <button onClick={onClick}>Reset</button>
    </div>
  );
};

export default GameOver;
