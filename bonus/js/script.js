var i = 1;

// METODO 1

//
// while (i < 101) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log('FizzBuzz');
//     document.getElementById('lista').innerHTML += "<li>" + "FizzBuzz" + "</li>";
//   }
//   if (i % 3 == 0) {
//     console.log('Fizz');
//     document.getElementById('lista').innerHTML += "<li>" + "Fizz" + "</li>";
//   } else if (i % 5 == 0) {
//     console.log('Buzz');
//     document.getElementById('lista').innerHTML += "<li>" + "Buzz" + "</li>";
//   } else {
//     console.log(i);
//     document.getElementById('lista').innerHTML += "<li>" + i + "</li>";
//   }
//   i++;
// }

// METODO 2

var testo;
while (i < 101) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz');
    testo = "Fizz";
  }
  if (i % 3 == 0) {
    console.log('Fizz');
    testo = "Fizz";
  } else if (i % 5 == 0) {
    console.log('Buzz');
    testo = "Buzz";
  } else {
    testo = i;
  }
  document.getElementById('lista').innerHTML += "<li>" + testo + "</li>";
  i++;
}
