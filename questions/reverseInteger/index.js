/** Reverse the ordering of the numbers of a given integer.
 *
 * @example
 * reverseInt(4321) === 1234
 * reverseInt(100) === 1
 * reverseInt(-641) === -146
 * reverseInt(-50) === -5
 */

// const reverseInteger = (int) => {
//     const reversed = parseInt(int.toString().split("").reverse().join(""))
//     return int < 0 ? reversed * - 1 : reversed
// };

// const reverseInteger = (int) => {
//     return parseInt(int.toString().split("").reverse().join("")) * Math.sign(int)
// };

const reverseInteger = (int) => {
    const reversed = int.toString().split("").reverse().join("")
    return parseInt(reversed) * Math.sign(int)
};

module.exports = reverseInteger;
