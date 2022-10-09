/** Given a string, find the character that is used the 
 * maximum number of times.
 *
 * @example
 * maxCharacter('aabbbccd') === 'b'
 * maxCharacter('foo 111123') === '1'
 */

// const maxCharacter = (str) => {
//     // create a character map
//     // loop over every character in the character map
//         // if the value of the character is > than max
//             // set max to the value
//             // set maxChar to the character
//     // return maxChar
//     const charMap = {}
//     let max = 0
//     let maxChar = ""

//     for (let char of str) {
//         charMap[char] = charMap[char] + 1 || 1
//     }

//     for (let char in charMap) {
//         if (charMap[char] > max) {
//             max = charMap[char]
//             maxChar = char
//         }
//     }

//     return maxChar
// };

const maxCharacter = (str) => {
    // create a character map
    // loop over every character in the character map
        // if the value of the character is > than max
            // set max to the value
            // set maxChar to the character
    // return maxChar
    const charMap = new Map()
    let max = 0
    let maxChar = ""

    for (const char of str) {
        charMap.set(char, charMap.get(char) + 1 || 1)
    }

    for (const [char, count] of  charMap) {
        if (count > max) {
            max = count
            maxChar = char
        }
    }

    return maxChar
};

module.exports = maxCharacter;
