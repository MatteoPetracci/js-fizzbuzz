var i = 1;
var num = 0;

while (i < 100) {
  var somma = num + i;

  if (somma % 3 == 0) {
    console.log('Fizz');
  } else if (somma % 5 == 0) {
    console.log('Buzz');
  } else {
    console.log(somma);
  }
  if (somma % 3 == 0 && somma % 5 == 0) {
    console.log('FizzBuzz');
  }
  i++;
}
