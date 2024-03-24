// task 1

function createPhoneNumber(numbers) {
  const firstPart = numbers.slice(0, 3).join('');
  const secondPart = numbers.slice(3, 6).join('');
  const thirdPart = numbers.slice(6).join('');

  return `(${firstPart}) ${secondPart}-${thirdPart}`;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(createPhoneNumber(numbers));

// task 2

function uniqueInOrder(sequence) {
  if (typeof sequence === 'string') {
    sequence = sequence.split('');
  }

  return sequence.filter((value, index, arr) => value !== arr[index - 1]);
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')); // Output: ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'));         // Output: ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3]));       // Output: [1, 2, 3]

// task 3

function XO(str) {
  var xCount = 0;
  var oCount = 0;
  for (var i = 0; i < str.length; i++) {
  if (str[i].toLowerCase() === 'x') {
  xCount++;
  } else if (str[i].toLowerCase() === 'o') {
  oCount++;
  }
  }
  return xCount === oCount;
  }
  
  console.log(XO("ooxx")); // true
  console.log(XO("xooxx")); // false
  console.log(XO("ooxXm")); // true
  console.log(XO("zpzpzpp")); // true
  console.log(XO("zzoo")); // false