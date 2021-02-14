function bouncer(arr) {
    let newArr = arr.slice()
    let array = []
    newArr.forEach(item => {
        if (item) {
          array.push(item)
        }
    })
    return array;
  }

  //Remioves all falsy values from an array