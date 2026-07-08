export const list : string[] = ["AVANCER", "DIALOGUER", "APPLICATION", "CROCODILE", "FINEMENT", "ORCHESTRER", "POLYVALENT"];

export const getRandomWord = (randomWordsList : string[]) => {

    const wordsList = randomWordsList;
    const randomIndex = Math.floor(Math.random() * wordsList.length);
    const randomWord = wordsList[randomIndex];

    return randomWord;

}