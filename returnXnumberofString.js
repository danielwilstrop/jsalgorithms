function repeatStringNumTimes(str, num) {
    if (num <= 0){
      return ""
    }
  let string = ''
  for (let i = 1; i <= num  ; i++){
    string = string + str
  }
  return string
  }

 