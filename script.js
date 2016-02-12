var fizzBuzzRedux = function (arguments) {
  // How do you use the arguments to create fizzBuzz?;
}


var fizzBuzzRedux = function (num, firstWord, secondWord) {
  for (var i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0){
      console.log(firstWord+secondWord);
    } else if (i % 3 === 0) {
      console.log(firstWord);
    } else if (i % 5 === 0) {
      console.log(secondWord);
    } else {
      console.log(i);
    }
  }
}
