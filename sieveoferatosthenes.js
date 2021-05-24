const sieveOfEratosthenes = (n) => {
  const output = new Array(n + 1).fill(true)
  output[0] = false
  output[1] = false

  for (let i = 2; i <= n; i++) {
    if (output[i] === true) {
      for (let j = i * 2; j <= n; j = j + i) {
        output[j] = false
      }
    }
  }

  const result = []
  output.forEach((val, index) => {
    if (val) {
      result.push(index)
    }
  })
  return result
}

console.log(sieveOfEratosthenes(100))
