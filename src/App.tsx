import { useState } from "react";
import Header from "./components/Header/Header";
import GamingZone from "./components/Gaming zone/GamingZone";

function App() {

  // State for games played
  const [gamesPlayed, setGamesPlayed] = useState(0);

  // State for hearts remaining for each game
  const [hearts, setHearts] = useState(5);

  // State for mistery word
  const [mysteryWord, setMysteryWord] = useState(["M", " ", " ", "G", " ", "R"]);

  // State for color letters
  const [colorLetter, setColorLetter] = useState<Record<string, boolean>>({ "A" : true, "Z" : false})

  // State for letter clicked
  const [letterClicked, setLetterClicked] = useState("");


  // Reset game and increment counter
  const resetGame = () => {
    setGamesPlayed(gamesPlayed + 1);
  }

  // Send the letter clicked to the back for checking
  const sendLetter = (letter: string) => {
    setLetterClicked(letter);
    console.log(letter);
  }



  return (
    <div className="flex flex-col gap-6 min-h-screen bg-gray-900 p-4 md:p-6">
      <Header onNewGame={resetGame} gamesPlayed={gamesPlayed} />
      <GamingZone hearts={hearts} mysteryWord={mysteryWord} colorLetter={colorLetter} onLetterClick={sendLetter} />
    </div>
  )
}

export default App
