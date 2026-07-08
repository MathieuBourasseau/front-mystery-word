import type { GamingZoneProps } from "../../types/GamingZoneProps"
import { FaHeart } from "react-icons/fa";

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
        <main className="flex flex-col gap-4 items-center justify-center text-white mx-auto max-w-mobile md:max-w-tablet md:gap-6">

            <h1 className="uppercase font-bold text-lg md:text-2xl">Devinez le mot caché</h1>

            {/* Life remaining */}
            <div className="flex flex-col gap-2 items-center w-full">
                <span className="text-sm md:text-base lg:text-lg">Vies restantes : {hearts}</span>
                <div className="flex gap-4">
                    {heartsArray.map((heart, index) => (
                        <FaHeart key={index} className="md:w-5 md:h-5 lg:w-6 lg:h-6" />
                    ))}
                </div>
            </div>

            {/* Mystery word and keyboard */}

            <div className="flex flex-col py-8 gap-8">
                <div className="flex justify-center gap-2">
                    {mysteryWord.map((letter, index) => (
                        <span
                            key={index}
                            className="flex justify-center w-8 h-8 border-b-4 border-white text-lg font-bold lg:text-2xl"
                        >
                            {letter}
                        </span>
                    ))}
                </div>
                <div className="flex flex-wrap justify-center gap-4 border-1 rounded-sm p-2 ">
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