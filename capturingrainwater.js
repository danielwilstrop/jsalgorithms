const rainwater = (array) => {
  let totalWater = 0
  let leftPoint = 0
  let rightPoint = array.length - 1
  let left = 0
  let right = 0

  while (leftPoint < rightPoint) {
    if (array[leftPoint] <= array[rightPoint]) {
      left = Math.max(array[leftPoint], left)
      totalWater += left - array[leftPoint]
      leftPoint++
    } else {
      right = Math.max(array[rightPoint], right)
      totalWater += right - array[rightPoint]
      rightPoint--
    }
  }
  return totalWater
}

console.log(rainwater([4, 5, 2, 1, 4, 1, 0, 8]))
