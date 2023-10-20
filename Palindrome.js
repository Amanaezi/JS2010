function isPalindrome(str) 
{
    const cleanStr = str.replace(/ /g, "").toLowerCase();
    return cleanStr === cleanStr.split("").reverse().join("");
}
  
  function findPalindromes(arr) 
  {
    return arr.filter(isPalindrome);
  }
  
  let arr = 
  [
    "А роза упала на лапу Азора",
    "Ого",
    "А Собака боса",
    "Привет, мир",
    "А Собака боса",
    "Лёша на полке клопа нашёл",
    "Я — арка края",
  ];
  
  const palindromes = findPalindromes(arr);
  console.log(palindromes);