function isPalindrome(word) {
    return word === word.split('').reverse().join('');
}
console.log(isPalindrome("car"));
console.log(isPalindrome("heh"));
