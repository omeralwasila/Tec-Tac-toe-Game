export default function GameOver({ winner, onRematched }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p> it's Draw</p>}
      <p>
        <button onClick={onRematched}>Rematch!</button>
      </p>
    </div>
  );
}
