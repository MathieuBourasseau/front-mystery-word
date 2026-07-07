import type { HeaderProps } from "../../types/HeaderProps";

export default function Header({onNewGame, gamesPlayed} : HeaderProps) {

    return(
        <header className="flex justify-between items-center text-sm text-white font-bold cursor-pointer md:text-base">
            <button onClick={onNewGame} className="border-1 py-2 px-4 cursor-pointer hover:bg-white hover:text-primary-blue">Nouvelle partie</button>
            <span>Parties jouées: {gamesPlayed} </span>
        </header>
    )

}