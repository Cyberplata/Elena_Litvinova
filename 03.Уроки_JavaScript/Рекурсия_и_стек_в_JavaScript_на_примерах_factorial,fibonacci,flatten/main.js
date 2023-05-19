// Рекурсия и стек в JavaScript на примерах: factorial, fibonacci, flatten

//1. factorial

// 0! = 1
// n! = n * (n - 1)!
// 2! = 1 * 2 = 2;
// 3! = 1 * 2 * 3 = 6;
// 4! = 1 * 2 * 3 * 4 = 24;

function factorial(n) {
   if(n < 0) {
      console.error('factorial вызван с неверным значение n'); //если число n < 0, то выдаст ошибку + бесконечный цикл
   }
   if(n === 0) {
      return 1;
   } else {
      return n * factorial(n - 1); 
   }
}
console.log(factorial(4));


//2. fibonacci

// fibo