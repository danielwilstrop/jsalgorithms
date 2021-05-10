const swap = (arr, i1, i2) => {
  const temp = i2
  i2 = i1
  i1 = temp
}

const bubbleSort = (arr) => {
  let swapping = true

  while (swapping) {
    swapping = false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1)
        swapping = true
      }
    }
  }
  return arr
}

array = [3, 6, 7, 3, 2, 1, 1, 1]

console.log(bubbleSort(array))
