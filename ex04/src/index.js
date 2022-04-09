  // pravljenje fibernacci niza
function sumFibonacci(num) {
  let fibernacciNum = []
  if (num > 0) fibernacciNum.push(0);
  if (num >= 1) fibernacciNum.push(1)
//funkcija vraca zbir svih neparnih brojeva
  if (num > 2) {
    while ((fibernacciNum[fibernacciNum.length-2] + fibernacciNum[fibernacciNum.length-1]<num)) {
      fibernacciNum.push(fibernacciNum[fibernacciNum.length-2] + fibernacciNum[fibernacciNum.length-1]);
    }
    }
    return fibernacciNum.filter(num => (num % 2) != 0).reduce((acum, num) => acum + num,0);

    
 }
//
console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;