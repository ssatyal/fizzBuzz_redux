function fizzBuzz(wordOne, wordTwo, num)  {
    for (var i = 1; i <= num; i++) {
        if (i%3===0 && i%5===0) {
            console.log(wordOne + wordTwo)}
        else if (i%3===0) {
            console.log(wordOne)}
        else if (i%5===0) {
            console.log(wordTwo)}
        else {console.log(i)}
    }
}

fizzBuzz("Fizz","Buzz",30)
