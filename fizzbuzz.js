/*
  Name: 
  Email:
*/

function fizzbuzz(n) {
  const array = []
for (let i = 0; i<n; i++){
  array.push(i);
  if (i%3===0){
    i='Fizz';
  }
  }
  return array;
}

console.log(fizzbuzz(0))
console.log(fizzbuzz(3))
console.log(fizzbuzz(5))
console.log(fizzbuzz(15))

