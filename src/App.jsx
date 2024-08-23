import { useState } from "react";
import Log from "./Components/log.jsx";
import Player from "./Components/player.jsx";
import GameBoard from "./Components/GameBoard.jsx";
import { WINNING_COMBINATIONS } from "./WINNING_COMBINATIONS.js";
import GameOver from "./Components/GameOver.jsx";

const Players = {
  X: "player 1",
  O: "player 2",
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function driveActivePlayer(gameTurns) {
  let currentplyer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentplyer = "O";
  }
  return currentplyer;
}

function driveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];
  for (const Turn of gameTurns) {
    const { square, player } = Turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function driveWinner(gameBoard, players) {
  let winner;

  for (const compnation of WINNING_COMBINATIONS) {
    const fristSquareSymbol =
      gameBoard[compnation[0].row][compnation[0].column];
    const secendSquareSymbol =
      gameBoard[compnation[1].row][compnation[1].column];
    const thirdSquareSymbol =
      gameBoard[compnation[2].row][compnation[2].column];

    if (
      fristSquareSymbol &&
      fristSquareSymbol === secendSquareSymbol &&
      fristSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[fristSquareSymbol];
    }
  }
  return winner;
}

function App() {
  const [players, setplayers] = useState(Players);
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = driveActivePlayer(gameTurns);

  const gameBoard = driveGameBoard(gameTurns);

  const winner = driveWinner(gameBoard, players);

  let hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectedSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentplyer = driveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentplyer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  function handelRematch() {
    setGameTurns([]);
  }
  function handleplayerNameChange(symbol, newName) {
    setplayers((prevplayers) => {
      return {
        ...prevplayers,
        [symbol]: newName,
      };
    });
  }

  return (
    <menu>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialname={Players.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handleplayerNameChange}
          />
          <Player
            initialname={Players.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handleplayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRematched={handelRematch} />
        )}
        <GameBoard onSelectSquare={handleSelectedSquare} board={gameBoard} />
      </div>
      <Log Turns={gameTurns} />
    </menu>
  );
}

export default App;
