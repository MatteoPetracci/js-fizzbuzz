// Fizz Buzz test:
// Scrivi un programma che stampi i numeri da 1
// a 100,
// ma per i multipli di 3 stampi “Fizz” al
// posto del numero e per i multipli di 5 stampi
// Buzz.
// Per i numeri che sono sia multipli di 3
// che di 5 stampi FizzBuzz.
// Stampiamo come sempre prima in console e poi su html
// Bonus: usare due tipi di cicli, se usate per il primo il for in bonus  fate un while.



var num = 0;

for (var i = 1; i < 101; i++) {
  var somma = i;
  // console.log(num + i);
  if (somma % 3 == 0 && somma % 5 == 0) {
    console.log('FizzBuzz');
    somma = 'FizzBuzz';
  }
  if (somma % 3 == 0) {
    console.log('Fizz');
    somma = 'Fizz';
  } else if (somma % 5 == 0) {
    console.log('Buzz');
    somma = 'Buzz';
  } else {
    console.log(somma);
  }
  document.getElementById('lista').innerHTML += "<li>" + somma + "</li>";
}











// document.getElementById('lista').innerHTML += "<li>" + "Buzz" + "</li>";

// document.getElementById('lista').innerHTML += "<li>" + "FizzBuzz" + "</li>";
