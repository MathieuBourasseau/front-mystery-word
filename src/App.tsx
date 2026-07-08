import { useState } from "react";
import Header from "./components/Header/Header";
import GamingZone from "./components/Gaming zone/GamingZone";

function App() {

  // State for games played
  const [gamesPlayed, setGamesPlayed] = useState(0);

  // State for hearts remaining for each game
  const [hearts, setHearts] = useState(5);

  // State for mystery word
  const [mysteryWord, setMysteryWord] = useState("MANGER");

  // State for color letters
  const [colorLetter, setColorLetter] = useState<Record<string, boolean>>({ "M": true, "G": true });

  // Reset game and increment counter
  const resetGame = () => {
    setGamesPlayed(gamesPlayed + 1);
  }

  // Send the letter clicked to the back for checking
  const sendLetter = (letter: string) => {

    // Checking if the letter is in the myserty word
    const isLetterValid = mysteryWord.includes(letter);

    // Update the object with the new letter tried
    setColorLetter({
      ...colorLetter,
      [letter]: isLetterValid
    });

  };

  // Show the word to guess from the real word
  const wordToGuess = mysteryWord.split("").map((letter) => {
    if (colorLetter[letter] === true) {
      return letter
    } else {
      return " "
    }
  });

  return (
    <div className="flex flex-col gap-6 min-h-screen bg-gray-900 p-4 md:p-6">
      <Header onNewGame={resetGame} gamesPlayed={gamesPlayed} />
      <GamingZone hearts={hearts} wordToGuess={wordToGuess} colorLetter={colorLetter} onLetterClick={sendLetter} />
    </div>
  )
}

export default App
