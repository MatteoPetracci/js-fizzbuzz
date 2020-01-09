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




for (var i = 1; i < 101; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz');
    document.getElementById('lista').innerHTML += "<li>" + "FizzBuzz" + "</li>";
  }
  if (i % 3 == 0) {
    console.log('Fizz');
    document.getElementById('lista').innerHTML += "<li>" + "Fizz" + "</li>";
  } else if (i % 5 == 0) {
    console.log('Buzz');
    document.getElementById('lista').innerHTML += "<li>" + "Buzz" + "</li>";
  } else {
    console.log(i);
    document.getElementById('lista').innerHTML += "<li>" + i + "</li>";
  }
}
