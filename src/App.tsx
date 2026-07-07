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
    <div className="flex flex-col min-h-screen bg-gray-900 p-4 md:p-6">
      <Header onNewGame={resetGame} gamesPlayed={gamesPlayed} />
    </div>
  )
}

export default App
