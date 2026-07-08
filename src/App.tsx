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

    // Stop game if there is not more hearts left
    if (hearts < 0){
      return;
    }

    // Checking if the letter is in the myserty word
    const isLetterValid = mysteryWord.includes(letter);

    // Update the object with the new letter tried
    setColorLetter({
      ...colorLetter,
      [letter]: isLetterValid
    });

    // Delete one heart for each error
    if (!isLetterValid) {
      setHearts(hearts - 1);
    }
  };

  // Show the word to guess from the real word
  const wordToGuess = mysteryWord.split("").map((letter) => {
    if (colorLetter[letter] === true) {
      return letter
    } else {
      return " "
    }
  });

  // Show end game messages
  const isGameLost = hearts === 0;
  const isGameWon = !wordToGuess.includes(" ");
  const isGameOver = isGameLost || isGameWon

  return (
    <div className="flex flex-col gap-6 min-h-screen bg-gray-900 p-4 md:p-6">
      <Header onNewGame={resetGame} gamesPlayed={gamesPlayed} />

      {/* Victory message */}
      { isGameWon && (
        <div className="bg-white text-blue-primary p-4 rounded-sm text-center font-bold text-sm mx-auto w-full max-w-mobile md:max-w-tablet">
          <p>Félicitations, vous avez découvert le bon mot ! 🎉 </p>
        </div>
      )}

      {/* Defeat message */}
      { isGameLost && (
        <div className="bg-white text-red-500 p-4 rounded-sm text-center font-bold text-sm mx-auto w-full max-w-mobile md:max-w-tablet">
          <p>Dommage vous avez perdu. Le mot était {mysteryWord}.</p>
        </div>
      )}

      {/* Start a new game */}
      { isGameOver && (
        <div class="text-white">
            <h1>Voulez-vous rejouer ?</h1>
            <div>
              <p>oui</p>
              <p>non</p>
            </div>
        </div>
      )}

      { !isGameOver && <GamingZone hearts={hearts} wordToGuess={wordToGuess} colorLetter={colorLetter} onLetterClick={sendLetter} /> }
    </div>
  )
}

export default App
