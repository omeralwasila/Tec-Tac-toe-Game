import Player from "./Components/player.jsx";

function App() {
  return (
    <menu>
      <div id="game-container">
        <ol id="players">
          <Player initialname="Player 1" symbol="X" />
          <Player initialname="Player 2" symbol="O" />
        </ol>
      </div>
    </menu>
  );
}

export default App;
