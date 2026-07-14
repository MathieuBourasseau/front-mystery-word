import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import GamingZone from "./components/Gaming zone/GamingZone";

function App() {

  // State for games played
  const [gamesPlayed, setGamesPlayed] = useState(0);

  // State for hearts remaining for each game
  const [hearts, setHearts] = useState(5);

  // State for mystery word
  const [mysteryWord, setMysteryWord] = useState("");
  console.log(mysteryWord)

  // State for loading
  const [isLoading, setIsLoading] = useState(true);

  // State for error message
  const [errorMessage, setErrorMessage] = useState("");

  // State for color letters
  const [colorLetter, setColorLetter] = useState<Record<string, boolean>>({});

  // Function to reset the game
  const resetGame = () => {

    setIsLoading(true);
    setErrorMessage("");

    setGamesPlayed(gamesPlayed + 1);
    setHearts(5);

    fetchRandomWord();
  }

  // Function to check user attempt
  const sendLetter = (letter: string) => {

    // Stop game if there is not more hearts left
    if (hearts < 0) {
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

  const fetchRandomWord = async () => {

    const API_URL = import.meta.env.VITE_API_URL;

    // Headers content
    const headersContent = { "Content-Type": "application/json" };

    try {

      // Consuming back API 
      const response = await fetch(API_URL, {
        method: "GET",
        headers: headersContent
      });

      // Checking that the server answer is working
      if (!response.ok) {
        console.error("Erreur lors du fetch pour afficher un mot aléatoire");
        setIsLoading(false);
        setErrorMessage("Un problème est survenu lors du chargement du mot mystère.")
        return;
      };

      // Data contain a object sent from the back { "id": 1, "name": "word"}
      const data = await response.json();

      // We select the key name that contains the word
      const fetchedWord: string = data.name.toUpperCase();

      setMysteryWord(fetchedWord);
      setColorLetter({ [fetchedWord[0]]: true });
      setIsLoading(false);

      return;

    } catch (error) {

      console.error(error);
      setIsLoading(false);
      setErrorMessage("Impossible de joindre le serveur.")
    };

  };

  // Keydown event
  useEffect(() => {

    const handleKeyDown = (event: KeyboardEvent) => {

      const pressedKey = event.key.toUpperCase();

      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      // Checking that the letter sent is in alphabet
      if (alphabet.includes(pressedKey)) {

        // If the game is not over we send the pressed key to sendLetter
        if (hearts > 0 && wordToGuess.includes(" ")) {
          sendLetter(pressedKey)
        };
      };
    };

    // We bound the event to the window element
    window.addEventListener("keydown", handleKeyDown);

    // Destroy the former event before executing again the handleKeyDown function
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hearts, wordToGuess, sendLetter]);

  // Fetch random word
  useEffect(() => {

    fetchRandomWord();
  }, []);

  // Show end game messages
  const isGameLost = hearts === 0;
  const isGameWon = !wordToGuess.includes(" ") && wordToGuess.length > 0;
  const isGameOver = isGameLost || isGameWon

  return (
    <div className="flex flex-col gap-6 min-h-screen bg-gray-900 p-4 md:p-6">
      <Header onNewGame={resetGame} gamesPlayed={gamesPlayed} />

      {/* Victory message */}
      {isGameWon && (
        <div className="bg-white text-blue-primary p-4 rounded-sm text-center font-bold text-sm mx-auto w-full max-w-mobile md:max-w-tablet">
          <p>Félicitations, vous avez découvert le bon mot ! 🎉 </p>
        </div>
      )}

      {/* Defeat message */}
      {isGameLost && (
        <div className="bg-white text-red-500 p-4 rounded-sm text-center font-bold text-sm mx-auto w-full max-w-mobile md:max-w-tablet">
          <p>Dommage vous avez perdu. Le mot était {mysteryWord}.</p>
        </div>
      )}

      {/* Error message */}
      {errorMessage && (
        <div className="bg-white text-red-500 p-4 rounded-sm text-center font-bold text-sm mx-auto w-full max-w-mobile md:max-w-tablet">
          <p>{errorMessage}</p>
        </div>
      )}

      {/* Start a new game */}
      {isGameOver && (
        <div className="flex flex-col gap-4 text-white">
          <h1 className="text-center text-lg font-bold">Voulez-vous rejouer ?</h1>
          <div className="flex justify-around">
            <p onClick={resetGame} className="cursor-pointer border-1 py-2 px-5 uppercase hover:bg-white hover:text-primary-blue hover:font-bold">oui</p>
            <p className="cursor-pointer border-1 py-2 px-5 uppercase hover:bg-white hover:text-primary-blue hover:font-bold">non</p>
          </div>
        </div>
      )}

      {isLoading ? (
        <p>Chargement du jeu en cours ...</p>
      ) : (
        !isGameOver && <GamingZone hearts={hearts} wordToGuess={wordToGuess} colorLetter={colorLetter} onLetterClick={sendLetter} />
      )}
    </div>
  )
}

export default App
