function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0; // Handle non-numeric values
  }
  return a + b; 
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(null, null)); // Output: 0
console.log(foo(0,2)); // Output: 2
console.log(foo(1,false)); //Output: 0
console.log(foo(1,'')); // Output: 0