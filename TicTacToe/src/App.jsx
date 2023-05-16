import { useState } from "react";

const TURNS = {
  X: "x",
  O: "o",
};

const Square = ({ children, isSelected, updateBoard, index }) => {
  const clasenom = `square ${isSelected ? "is-selected" : ""}`;
  const handleClick = () => {
    updateBoard(index);
  };
  return (
    <div onClick={handleClick} className={clasenom}>
      {children}
    </div>
  );
};

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const checkWinner = (boardToCheck) => {
    //iteramos las combos con un for each
    for (const combo of WINNER_COMBOS) {
      //destructuramos
      const [a, b, c] = combo;
      //comparamos el tablero con las combinaciones ganadoras
      if (
        boardToCheck[a] &&
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] == boardToCheck[c]
      ) {
        //devolvemos el ganador
        return boardToCheck[a];
      }
    }
    //si no hay ganador devolvemos null
    return null;
  };

  const actualBoard = (index) => {
    //si ya tiene algo en la celda no sobreescribe o si hay ganador se para el juego
    if (board[index] || winner) return;
    //actualizar tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    //cambiar turno
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    //revisamos si hay ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    }else if ( checkEndGame(newBoard)){
      setWinner(false)
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const checkEndGame = (newBoard) => {
    //Revisamos si hay empate accediendo en cada celda si esta es diferente de null
    //lo hacemos con la funcion "every"
    return newBoard.every((celda) => celda != null)
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset Game</button>
      <section className="game">
        {board.map((cel, index) => {
          return (
            <Square key={index} index={index} updateBoard={actualBoard}>
              {cel}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
      </section>
      {winner != null && (
        <section className="winner">
          <div className="text">
            <h2>{winner == false ? "Empate" : "Ganó:"}</h2>

            <header className="win">
              {winner && <Square>{winner}</Square>}
            </header>
            <footer>
              <button onClick={resetGame}>Empezar de nuevo</button>
            </footer>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
