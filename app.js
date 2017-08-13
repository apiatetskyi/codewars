'use strict'

/* Powers of 2
============================================================ */
console.log('\n%cPowers of 2', 'font-weight: 700;')

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



/* Reversing Words in a String
============================================================ */
console.log('\n%cReversing Words in a String', 'font-weight: 700;')

function reverse(string){
  var arr = string.split(' ');
  var newArr = [];

  for (var i = 1; i <= arr.length; i++) {
    newArr.push(arr[arr.length - i]);
  }

  return newArr.join(' ');
}

console.log(reverse('Some string that will be reversed'));

// Best Practices
function reverseRight(string){
  return string.split(' ').reverse().join(' ');
}

console.log(reverseRight('Some string that will be reversed'));



/* Find number abc = a^1 + b^2 + c^3 in range
============================================================ */
console.log('\n%cFind number abc = a^1 + b^2 + c^3 in range', 'font-weight: 700;')

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



/* Get str from 2 strs without char repetition. Sort result str
============================================================ */
console.log('\n%cGet str from 2 strs without char repetition. Sort result str', 'font-weight: 700;')

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



/* Calculator constructor (learn.javascript.ru)
============================================================ */
console.log('\n%cCalculator constructor (learn.javascript.ru)', 'font-weight: 700;')

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

// calculator.read();
console.log('Sum = ', calculator.sum());
console.log('Multiplication = ', calculator.mul());



/* Calculator with addMethod() (learn.javascript.ru)
============================================================ */
console.log('\n%cCalculator with addMethod() (learn.javascript.ru)', 'font-weight: 700;')

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



/* Keep up the hoop
============================================================ */
console.log('\n%cKeep up the hoop', 'font-weight: 700;')
function hoopCount(n) {
  return (n < 10 && n >= 0 ) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
}

console.log(hoopCount(12));
console.log(hoopCount(10));
console.log(hoopCount(1));
console.log(hoopCount(2));



/* I love you, a little , a lot, passionately ... not at all
============================================================ */
console.log('\n%cI love you, a little , a lot, passionately ... not at all', 'font-weight: 700;')
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



/* cPrototype in JS (learn.javascript.ru)
============================================================ */
console.log('\n%cPrototype in JS (learn.javascript.ru)', 'font-weight: 700;')

var gadget = {
  power: true,
  size: ''
};

function MobilePhone(brand, model) {
  this.brand = brand;
  this.model = model;
}

MobilePhone.prototype = gadget;
MobilePhone.prototype.constructor = MobilePhone;

var emptyArray = new Array(3);

console.log(new MobilePhone('Apple', 'Iphone 7'));
console.log(emptyArray);



/* Find the capitals
============================================================ */
console.log('\n%cFind the capitals', 'font-weight: 700;')

function capitalsIndex(word) {
  var capitalChar = [];

  for (var i = 0; i < word.length; i++) {
    var char = word.charAt(i);

    if (/^[a-zA-Z]+$/.test(char) && char == char.toUpperCase()) {
      capitalChar.push(i);
    }

  }

  return capitalChar;
}

function capitals(word) {
  var capitalChar = [];

  for (var i = 0; i < word.length; i++) {
    var char = word.charAt(i);

    if (/^[a-zA-Z]+$/.test(char) && char == char.toUpperCase()) {
      capitalChar.push(char);
    }

  }

  return capitalChar;
}

console.log(capitalsIndex('Hello woRlD!'));
console.log(capitals('Hello woRlD!'));



/* Broken sequence
============================================================ */
console.log('\n%cBroken sequence', 'font-weight: 700;')

function findMissingNumber(sequence){
  function compareNumeric(a, b) {
    return a - b;
  }

  if (sequence) {
    var sequenceArray = sequence.split(' ').map(function (sequenceItem) {
      return Number(sequenceItem);
    }).sort(compareNumeric),
        isCorrect = sequenceArray.every(function (item) {
          return !isNaN(item);
        }),
        correctItem;

    if (isCorrect) {
      for (var i = 0; i < sequenceArray.length; i++) {
        correctItem = i + 1;

        if (sequenceArray[i] !== correctItem) {
          return correctItem;
        } else {
          continue;
        }
        correctItem++;
      }

      return 0;
    } else {
      return 1;
    }
  } else {
    return 0;
  }
}

console.log(findMissingNumber('2 6 4 1'));



/* Calculation buying a car
============================================================ */
console.log('\n%cCalculation buying a car', 'font-weight: 700;')

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
  var savedMoney = 0,
      priceDifference = startPriceNew - startPriceOld,
      monthCount = Math.ceil(priceDifference / savingperMonth);

  if (startPriceOld < 0 || startPriceOld < 0 || savingperMonth < 0 || percentLossByMonth < 0) {
    return undefined;
  } else if (startPriceOld - startPriceNew >= 0) {
    return [0, Math.abs(startPriceOld - startPriceNew)];
  }

  for (var i = 1; i <= monthCount; i++) {
    if (i % 2 === 0) {
      percentLossByMonth += 0.5;
    }

    startPriceOld = startPriceOld - startPriceOld * ( percentLossByMonth / 100 );
    startPriceNew = startPriceNew - startPriceNew * ( percentLossByMonth / 100 );
    savedMoney += savingperMonth;

    if ((savedMoney + startPriceOld) - startPriceNew >= 0) {
      return [i, Math.round((savedMoney + startPriceOld) - startPriceNew)]
    }
  }
}

console.log(nbMonths(2000, 8000, 1000, 1.5));
console.log(nbMonths(12000, 8000, 1000, 1.5));



/* Sum of a sequence
============================================================ */
console.log('\n%cSum of a sequence', 'font-weight: 700;')

function sequenceSum(begin, end, step) {
  if (begin > end) {
    return 0;
  }

  var sum = begin,
      increment = begin + step;

  while (increment <= end) {
    sum += increment;
    increment += step;
  }

  return sum;
}

console.log(sequenceSum(2, 6, 2));
console.log(sequenceSum(1, 5, 1));
console.log(sequenceSum(1, 5, 3));



/* Find the next perfect square
============================================================ */
console.log('\n%cFind the next perfect square', 'font-weight: 700;')

function findNextSquare(sq) {
  var powerBase = Math.sqrt(sq) + 1;
  return (powerBase % 1 === 0) ? Math.pow(powerBase, 2) : -1;
}

console.log(findNextSquare(144));
console.log(findNextSquare(121));
console.log(findNextSquare(122));



