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

const recursiveGenerateArrays = (
  number: number,
  parentArray: number[][] = []
): number[][] => {
  if (number > 0) {
    const newArray = Array.from({ length: number }, (_, number) => number + 1)
    parentArray.push(newArray)
    recursiveGenerateArrays(number - 1, parentArray)
  }

  return parentArray.reverse()
}

console.log("generateArrays:", generateArrays(4))

console.log("recursiveGenerateArrays:", recursiveGenerateArrays(4))
