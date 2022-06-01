// 01

let number = 10;
let factorial = 1;

for (let index = number; index > 0; index -= 1) {
  factorial *= index;
}

console.log(factorial);

// 02

let word = 'tryber';
let reverseWord;

reverseWord = word.split('').reverse('').join('');

console.log(reverseWord);

// 03

let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
}

console.log(biggestWord);

let smallestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  }
}

console.log(smallestWord);
