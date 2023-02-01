// Given an array of numbers
// recursively find the sum

// 4.1
const recursiveSum = (input: number[]): number => {
  if (input.length === 0) {
    return 0
  } else {
    const sliced = input.slice(1) // slice first item from input
    return input[0] + recursiveSum(sliced)
  }
}

console.log("recursiveSum:", recursiveSum([2, 4, 7, 1]))
console.log("recursiveSum:", recursiveSum([200, -4, 117, 98790, 21, 988, -2])) //100110
