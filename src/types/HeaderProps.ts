// Header must display two information :
// A function to start a new game and increment the former number of games played
// The current number of games played. 

export type HeaderProps = {
    onNewGame: () => void; 
    gamesPlayed: number;
}