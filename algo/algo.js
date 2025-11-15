//Exercise 1 – VAT calculation (18.5%)

const VAT_RATE = 0.185;

let rawPrice = Number(prompt("Enter the raw price:"));
let finalPrice = rawPrice * (1 + VAT_RATE);

console.log("Final price with VAT:", finalPrice);
alert("Final price with VAT: " + finalPrice);


//Exercise 2 – Multiplication table (2 to 9 only)
let number = Number(prompt("Enter a number between 2 and 9:"));

if (number >= 2 && number <= 9) {
  console.log("Multiplication table for", number);
  for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
  }
} else {
  console.log("Number must be between 2 and 9.");
}


//Exercise 3 – Array operations
const values = [3, 11, 7, 2, 9, 10];

// sum
let sum = 0;
for (let v of values) {
  sum += v;
}
console.log("Sum:", sum); // 42

// average function
function averageArray(arr) {
  let total = 0;
  for (let x of arr) total += x;
  return total / arr.length;
}

console.log("Average:", averageArray(values));

// min & max function
function minMaxArray(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let x of arr) {
    if (x < min) min = x;
    if (x > max) max = x;
  }

  return { min, max };
}

const result = minMaxArray(values);
console.log("Min:", result.min, "Max:", result.max);


//Exercise 4 – Temperature conversion
// C → F
function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}

// F → C
function fahrenheitToCelsius(f) {
  return ((f - 32) * 5) / 9;
}



//celsius fahrenheit
let celsius = Number(prompt("Enter temperature in °C:"));
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(celsius + "°C =", fahrenheit + "°F");
alert(celsius + "°C = " + fahrenheit + "°F");


//Exercise 5 – String reversal
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Example:
console.log(reverseString("hello")); // "olleh"


//Exercise 6 – Vowel counting (a, e, i, o, u)
function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// Example:
console.log(countVowels("Javascript")); // 3 (a, a, i)

