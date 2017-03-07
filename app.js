'use strict'

// Powers of 2
function powersOfTwo(basis, n){
  var result;
  var resultList = [1];

  for (var i = 0; i < n; i++) {
    if (i === 0) {
      result = basis;
      resultList.push(result);
    } else {
      result *= basis;
      resultList.push(result);
    }
  }

  console.log('2 ^ ' + n + ' =', resultList);
  return resultList;
}

powersOfTwo(2, 4);



// Reversing Words in a String
function reverse(string){
  var arr = string.split(' ');
  var newArr = [];

  for (var i = 1; i <= arr.length; i++) {
    newArr.push(arr[arr.length - i]);
  }

  return newArr.join(' ');
}

// Best Practices
function reverseRight(string){
  return string.split(' ').reverse().join(' ');
}

console.log(reverse('Some string that will be reversed'));
console.log(reverseRight('Some string that will be reversed'));



// Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
function sumDigPow(a, b) {
  var result = [];

  for (var i = a; i <= b; i++) {
    var arr = i.toString().split(''),
    sumDigit = 0;

    arr.forEach(function(item, j , arr) {
      sumDigit += Math.pow(+item, j + 1);
    })

    if (i === sumDigit) {
      result.push(i);
    }
  }

  return result;
}

console.log(sumDigPow(90, 136));



// Two to One
function longest(s1, s2) {
  var result = [],
  concatStr = s1 + s2,
  regExp = /^[a-z]*$/;

  concatStr.split('').filter(function(item) {
    if (result.indexOf(item) === -1 && item.search(regExp) !== -1) {
      result.push(item)
    }
  });

  return result.sort().join('');
}

var str1 = 'asfkjalfjasehurnmAbco1 _"sdlfkjghsdweufsdjklz';
var str2 = 'ewuytiuertiqaaaaaaeuryw123124     ____=123*/pqiwuemnvskljhf';

console.log(longest(str1, str2));



// Calculator constructor (learn.javascript.ru)
function Calculator() {
  this.read = function() {
    this.a = +prompt('Enter a', '0');
    this.b = +prompt('Enter b', '0');
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

var calculator = new Calculator();
var calculator2 = new Calculator();

// calculator.read();
console.log('Sum = ', calculator.sum());
console.log('Multiplication = ', calculator.mul());



// Calculator with addMethod() (learn.javascript.ru)
function PowerCalc() {
  var methods = {
    '+': function(a, b) {return a + b},
    '-': function(a, b) {return a - b}
  };

  this.calculate = function(str) {
    var split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];

    if (!methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return methods[op](+a, +b);
  };

  this.addMethod = function(op, func) {
    methods[op] = func;
  };
}

var powerCalc = new PowerCalc();

console.log(powerCalc.calculate('2 - 4'));
console.log(powerCalc.calculate('2 + 4'));

powerCalc.addMethod('*', function(a, b) {
  return a * b;
});

console.log(powerCalc.calculate('8 * 4'));
powerCalc.addMethod('/', function(a, b) { return a / b;});
console.log(powerCalc.calculate('8 / 4'));



// Keep up the hoop
function hoopCount(n) {
  return (n < 10 && n >= 0 ) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
}

console.log(hoopCount(12));
console.log(hoopCount(10));
console.log(hoopCount(1));
console.log(hoopCount(2));



// I love you, a little , a lot, passionately ... not at all
function howMuchILoveYou(nbPetals) {
  var phraseList = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];

  if (nbPetals > 0) {
    return (nbPetals % phraseList.length === 0) ? phraseList[phraseList.length -1] : phraseList[(nbPetals % phraseList.length) -1];
  }
}

console.log(howMuchILoveYou(7));
console.log(howMuchILoveYou(4));
console.log(howMuchILoveYou(6));
console.log(howMuchILoveYou(2));
