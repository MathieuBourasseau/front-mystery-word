import type { GamingZoneProps } from "../../types/GamingZoneProps"

export default function GamingZone ({hearts, mysteryWord, colorLetter, onLetterClick} : GamingZoneProps) {

    // Create alphabet
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    
    return(
        <main className="flex flex-col gap-2 items-center text-white">

            <h1 className="uppercase font-bold text-lg">Devinez le mot caché</h1>

            {/* Life remaining */}
            <div>
                <span>Vies restantes : {hearts}</span>
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
                            onClick={onLetterClick}
                            className="border-1 rounded-sm p-2 cursor-pointer hover:bg-white hover:text-primary-blue"
                        >{letter}</button>
                    ))}
                </div>
            </div>
        </main>
    )

}