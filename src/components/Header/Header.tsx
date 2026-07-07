import type { HeaderProps } from "../../types/HeaderProps";

export default function Header({onNewGame, gamesPlayed} : HeaderProps) {

    return(
        <header>
            <button onClick={onNewGame}>Nouvelle partie</button>
            <span>Parties jouées: {gamesPlayed} </span>
        </header>
    )

}