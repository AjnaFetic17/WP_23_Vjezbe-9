// module.exports = getAllOddNumbers = (n) => {
//   const numbers = []
//   for (let i = 0; i < n; i++) {
//     if (i % 2 !== 0) {
//       numbers.push(i)
//     }
//   }
//   return numbers
// }

module.exports = {
  getAllOddNumbers: (n) => {
    const numbers = []
    for (let i = 0; i < n; i++) {
      if (i % 2 !== 0) {
        numbers.push(i)
      }
    }
    return numbers
  },
  getAllEvenNumbers: (n) => {
    const numbers = []
    for (let i = 0; i < n; i++) {
      if (i % 2 === 0) {
        numbers.push(i)
      }
    }
    return numbers
  },
}