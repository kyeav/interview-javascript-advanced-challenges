/** Given a sentence, capitalize the first letter of each word and 
 * return the capitalized sentence.
 *
 * @example
 * capitalize('coding is awesome') === 'Coding Is Awesome'
 * capitalize('a green apple') === 'A Green Apple'
 * capitalize('i love frontend simplified') === 'I Love Frontend Simplified'
 */

// const capitalize = (str) => {
//     const result = []
//     for (let word of str.split(" ")) {
//         const capitalizedWord = word[0].toUpperCase() + word.slice(1)
//         result.push(capitalizedWord)
//     }
//     return result.join(" ")
// };

const capitalize = (str) => {
    // create an empty 'result' string with the first letter in given string capitalised
    let result = str[0].toUpperCase()

    // for each character in the string
    for (let i = 1; i < str.length; ++i) {
        // if the character to the left has a space
        if (str[i - 1] === " ") {
            // capitalise the character and add it to 'result'
            result += str[i].toUpperCase()
        }
        // else
        else {
            // add it to 'result'
            result += str[i]
        }
    }

    return result
}

module.exports = capitalize;
