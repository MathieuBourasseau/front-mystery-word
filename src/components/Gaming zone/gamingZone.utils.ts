// Generate an array according to the value of hearts
export const generateHeartsArray = (hearts : number) => {
    return Array(hearts).fill(null)
}

// Create a button and its style according to the letter value
export const getButtonStyle = (letter : string, colorLetter : Record<string, boolean>) => {

    let classes = "border-1 rounded-sm p-2 cursor-pointer ";

    // Checking the value of letter 
    const isValidLetter = colorLetter[letter];

     if (isValidLetter) {
            classes += " bg-green-500 text-white";
        } else if (isValidLetter === false) {
            classes += " bg-red-500 text-white"
        } else {
            classes += " hover:bg-white hover:text-primary-blue"
        }

        return classes;
}