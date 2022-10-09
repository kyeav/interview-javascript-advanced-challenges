/** Given an array filled with object ID's, return the
 * list of unique ID's in a string.
 *
 * @example
 * stringifyId([
 *  { id: 1 },
 *  { id: 2 },
 *  { id: 2 },
 *  { id: 3 },
 * ]) === '1, 2, 3'
 *
 * stringifyId([
 *  { id: 'ABC', name: 'David' },
 *  { id: 'abc', name: 'Bragg' },
 *  { id: 'CBA', name: 'Bragg' },
 * ]) === 'ABC, abc, CBA'
 */

// convert the array of objects into an array of id's
// convert the array of id's into an array of unique id's
// join the array to create a string of id's separated by ','
// const stringifyId = (arr) => {
//     const idArray = arr.map(obj => obj.id)
//     const uniqueArray = []
//     let idString = ""

//     for (let id of idArray) {
//         if (!uniqueArray.includes(id)) {
//             uniqueArray.push(id)
//         }
//     }

//     return uniqueArray.join(', ')

//     // for (let i = 0; i < uniqueArray.length; ++i) {
//     //     // if we are not on the last element
//     //     // add the id and ','
//     //     // else just add the id
//     //     if (i !== uniqueArray.length - 1) {
//     //         idString += `${uniqueArray[i]}, `
//     //     }
//     //     else {
//     //         idString += uniqueArray[i]
//     //     }
//     // }

//     // return idString

//     // for (let i = 0; i < uniqueArray.length; ++i) {
//     //     idString += `${uniqueArray[i]}, `
//     // }

//     // return idString.slice(0, idString.length - 2)
// };

const stringifyId = (arr) => {
    const idArray = arr.map((obj) => obj.id)
    const uniqueArray = [...new Set(idArray)]
    return uniqueArray.join(", ")
}

module.exports = stringifyId;
