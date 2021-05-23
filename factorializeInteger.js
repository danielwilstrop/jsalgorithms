function factorialize(num) {
  let number = num
  let fNum = 1
  while (number > 1) {
    fnum *= number
    number = number - 1
  }
  return fNum
}

console.log(factorialize(3))
