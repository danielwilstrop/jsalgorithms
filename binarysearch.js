//array must be sorted before running

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function binarySearch(sortedArray, key) {
  let start = 0
  let end = sortedArray.length - 1

  while (start <= end) {
    let middle = Math.floor((start + end) / 2)

    if (sortedArray[middle] === key) {
      return middle
    } else if (sortedArray[middle] < key) {
      start = middle + 1
    } else {
      end = middle - 1
    }
  }
  return -1
}
