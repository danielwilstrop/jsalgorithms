// Add all integers up to and including 'n'

const sumUpTo = (n) => {
    if (n===1){
        return 1
    }

    if ( n > 0 ){
        return sumUpTo(n-1) + n
    }
}