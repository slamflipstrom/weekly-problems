// Given a positive integer,
// generate an array in which every element
// is an array that goes from 1 to the index of that array.

const generateArrays = (number: number): number[][] => {
  if (number < 0) return [[]]

  let result: number[][] = []

  for (let i = 1; i <= number; i++) {
    let ar = Array.from({ length: i }, (_, i) => i + 1)
    result.push(ar)
  }

  return result
}

generateArrays(4) // [[1], [1, 2], [1, 2, 3], [1, 2, 3, 4]]

generateArrays(1) // [[1]]
