import Player from "./Components/player.jsx";
import GameBoard from "./Components/GameBoard.jsx";

function App() {
  return (
    <menu>
      <div id="game-container">
        <ol id="players">
          <Player initialname="Player 1" symbol="X" />
          <Player initialname="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
    </menu>
  );
}

export default App;
