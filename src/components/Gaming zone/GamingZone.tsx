import type { GamingZoneProps } from "../../types/GamingZoneProps"

export default function GamingZone({ hearts, mysteryWord, colorLetter, onLetterClick }: GamingZoneProps) {

    // Create alphabet
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    // Create an empty Array with the value of hearts
    const heartsArray = Array(hearts).fill(null);

    // Colored letter function
    const buttonsColor = (letter: string) => {

        // Basic classes
        let classes = "border-1 rounded-sm p-2 cursor-pointer "

        // Checking the value of the letter 
        const isValidLetter = colorLetter[letter];

        if (isValidLetter) {
            classes += " bg-green-500 text-white";
        } else if (isValidLetter === false) {
            classes += " bg-red-500 text-white"
        } else {
            classes += " hover:bg-white hover:text-primary-blue"
        }

        return classes
    }

    return (
        <main className="flex flex-col gap-2 items-center justify-center text-white">

            <h1 className="uppercase font-bold text-lg">Devinez le mot caché</h1>

            {/* Life remaining */}
            <div className="flex flex-col  items-center w-full">
                <span>Vies restantes : {hearts}</span>
                <div>
                    {heartsArray.map((heart, index) => (
                        <span key={index}>❤️</span>
                    ))}
                </div>
            </div>

            {/* Mystery word and keyboard */}

            <div className="flex flex-col py-8 gap-8">
                <div className="flex justify-center gap-2">
                    {mysteryWord.map((letter, index) => (
                        <span
                            key={index}
                            className="flex justify-center w-8 h-8 border-b-4 border-white text-lg"
                        >
                            {letter}
                        </span>
                    ))}
                </div>
                <div className="flex flex-wrap justify-center gap-4 border-1 rounded-sm p-2">
                    {alphabet.map((letter, index) => (
                        <button
                            key={index}
                            onClick={() => onLetterClick(letter)}
                            className={buttonsColor(letter)}
                            disabled={colorLetter[letter] !== undefined}
                        >
                            {letter}
                        </button>
                    ))}
                </div>
            </div>
        </main>
    )
}