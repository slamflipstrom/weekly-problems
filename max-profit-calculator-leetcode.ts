const maxProfit = (prices: number[]): number => {
  let max = 0
  let ans = 0

  for (let i = prices.length - 1; i >= 0; i--) {
    ans = Math.max(ans, max - prices[i])

    if (prices[i] > max) {
      max = prices[i]
    }
  }
  return ans
}

console.log("maxProfit", maxProfit([2, 4, 1, 7])) // 6
