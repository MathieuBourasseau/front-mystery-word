// Gaming zone must show dynamically: 
    // Hearts remaining
    // Mystery word
    // The color of the letters tried (red if false for example)
    // Send to the back the letter clicked.

export type GamingZoneProps = {
    hearts: number;
    mysteryWord: string[];
    colorLetter: Record<string, boolean>;
    onLetterClick: (letter: string) => void;
}