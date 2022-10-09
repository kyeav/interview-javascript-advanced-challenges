/** Reverse the provided string.
 *
 * @example
 * reverse('david') === 'divad'
 * reverse('frontend') === 'dnetnorf'
 * reverse('Simplified!') === '!deifilpmiS'
 */

// 'David' => ['D', 'a', 'v', 'i', 'd']
// a = '', c = 'D' => a = 'D' + '' = 'D'
// a = 'D', c = 'a' => a = 'a' + 'D' = 'aD'
// a = 'aD', c = 'v' => a = 'v' + 'aD' = 'vaD'
// a = 'vaD', c = 'i' => a = 'i' + 'vaD' = 'ivaD'
// a = 'ivaD', c = 'd' => a = 'd' + 'ivaD' = 'divaD'

// 0 - str[i] = d, reversed = 'd' + '' = 'd'
// 1 - str[i] = a, reversed = 'a' + 'd' = 'ad'
// 2 - str[i] = v, reversed = 'v' + 'ad' = 'vad'
// 3 - str[i] = i, reversed = 'i' + 'vad' = 'ivad'
// 4 - str[i] = d, reversed = 'd' + 'ivad' = 'divad'

// const reverseString = (str) => {
//     let reversed = ''

//     for (let i = 0; i < str.length; ++i) {
//         reversed = str[i] + reversed
//     }

//     return reversed
// };

// const reverseString = (str) => {
//     let reversed = ''

//     for (let char of str) {
//         reversed = char + reversed
//     }
    
//     return reversed
// };

// 'david' => ['d', 'a', 'v', 'i', 'd']
// const reverseString = (str) => {
//     return str.split('').reverse().join('')

//     // const arr = str.split('')
//     // const reversedArr = arr.reverse()
//     // return reversedArr.join('')
// }

// 'David' => ['D', 'a', 'v', 'i' , 'd']
// a = '', c = 'D' => a = 'D' + '' = 'D'
// a = 'D', c = 'a' => a = 'a' + 'D' = 'aD'
// a = 'aD', c = 'v' => a = 'v' + 'aD' = 'vaD'
// a = 'vaD', c = 'i' => a = 'i' + 'vaD' = 'ivaD'
// a = 'ivaD', c = 'd' => a = 'd' + 'ivaD' = 'divaD'

// const reverseString = (str) => {
//     return str.split('').reduce((accumulator, currentValue) => {
//         return currentValue + accumulator
//     }, '')
// }

const reverseString = (str) => {
    return str
        .split('')
        .reduce((accumulator, currentValue) => currentValue + accumulator)
}

module.exports = reverseString;

// const arr = [1, -1, 2, 3]

// let sum = 0

// for (let elem of arr) {
//     sum += elem
// }

// console.log(sum)

// const arr = [1, -1, 2, 3]

// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5

// const sum = arr.reduce((accumulator, currentValue) => {
//     console.log(`a = ${accumulator}, c = ${currentValue} => a = ${accumulator + currentValue}`)
//     return accumulator + currentValue
// }, 0)

// console.log(sum)

// a = 1, c = -1 => a = 0 
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
// const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue)

// console.log(sum)
