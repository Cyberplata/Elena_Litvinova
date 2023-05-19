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

function factorial(n) { // Краткая запись factorial
   return (n <= 0) ? 1 :  n * factorial(n - 1);
}



//2. fibonacci

// fibonacci(0) = 0;
// fibonacci(1) = 1;
// fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 2);

function fibonacci(n) {
   if(n <= 1) {
      return n;
   } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
   }
}

console.log(fibonacci(7));



//3 flatten

function flatten() {

}

console.log(flatten(1, [2, [[3]]], 4, 5, [6, [7]]));
console.log(flatten);