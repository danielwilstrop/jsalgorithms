function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target
   }

// much simpler with a  new RegEx(target + '$' + 'i')