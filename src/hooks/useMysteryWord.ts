import { useState } from "react";

export const useMysteryWord = () => {

    // State for mystery word
    const [mysteryWord, setMysteryWord] = useState("");

    // State for color letters
    const [colorLetter, setColorLetter] = useState<Record<string, boolean>>({});

    // State for loading
    const [isLoading, setIsLoading] = useState(true);

    // State for error message
    const [errorMessage, setErrorMessage] = useState("");

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


}