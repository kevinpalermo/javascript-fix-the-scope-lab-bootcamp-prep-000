var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = 'cat'
  return animal
}

function add2(n) {
  var two = 2
  
  return n + two

  
}

var funkyFunction = function() {
<<<<<<< HEAD
  return function() {
    return "FUNKY!";
  };
 };
=======
    return "FUNKY!"
}
>>>>>>> 5dd81d1d467915d9ed4c1f20bb068d12d281c8bb

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

<<<<<<< HEAD
var theFunk = funkyFunction()()
=======
var theFunk = funkyFunction()
>>>>>>> 5dd81d1d467915d9ed4c1f20bb068d12d281c8bb
