// Task 1: Even and Odd Sum
function sumEvenOdd(numbers) {
    let evenSum = 0;
    let oddSum = 0;
  
    numbers.forEach(num => {
      if (num % 2 === 0) {
        evenSum += num;
      } else {
        oddSum += num;
      }
    });
  
    return [evenSum, oddSum];
  }
  console.log(sumEvenOdd([1, 2, 3, 4, 5]));
  
  // Task 3: Reverse a String
  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  console.log(reverseString("JavaScript")); 
  
  // Task 5: Count Vowels in a String
  function countVowels(str) {
    let vowelCount = 0;
    const vowels = "aeiouAEIOU";
  
    for (let char of str) {
      if (vowels.includes(char)) {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  console.log(countVowels("JavaScript is fun")); 
  
  // Task 7: Shopping Cart Total
  const cart = [
    { name: "Apple", price: 1.5 },
    { name: "Banana", price: 0.8 },
    { name: "Orange", price: 2.0 },
  ];
  function calculateTotal(cart) {
    let total = 0;
  
    cart.forEach(item => {
      total += item.price;
    });
  
    return total;
  }
  console.log(calculateTotal(cart)); 
  
  // Task 9: Find the Longest Word
  function findLongestWord(sentence) {
    let words = sentence.split(" ");
    let longestWord = "";
  
    words.forEach(word => {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    });
  
    return longestWord;
  }
  console.log(findLongestWord("JavaScript is amazing and fun")); 
  
  // Bonus Challenge 1: Palindrome Checker
  function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
  }
  console.log(isPalindrome("A man a plan a canal Panama"));
  