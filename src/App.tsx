import { useState } from "react";
import Header from "./components/Header/Header";

function App() {

  // State for games played
  const [gamesPlayed, setGamesPlayed] = useState(0);

  // Reset game and increment counter
  const resetGame = () => {
    setGamesPlayed(gamesPlayed + 1);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <Header onNewGame={resetGame} gamesPlayed={gamesPlayed} />
      <h1 className="text-3xl font-bold text-white">Mystery Word</h1>
    </div>
  )
}

export default App
