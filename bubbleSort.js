const swap = (arr, i1, i2) => {
  const temp = i2
  i2 = i1
  i1 = temp
}

const bubbleSort = (input) => {
  let swapping = true

  while (swapping) {
    swapping = false

    for (let i = 0; i < input.length - 1; i++) {
      if (input[i] > input[i + 1]) {
        swap(input, i, i + 1)
        swapping = true
      }
    }
  }
  return input
}

// reverse, sorts from largest to smallest (if statement is less than not more than)

const bubbleSort = (input) => {
  let swapping = true

  while (swapping) {
    swapping = false

    for (let i = 0; i < input.length - 1; i++) {
      if (input[i] < input[i + 1]) {
        swap(input, i, i + 1)
        swapping = true
      }
    }
  }

  return input
}
