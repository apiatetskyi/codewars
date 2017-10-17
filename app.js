'use strict'

/* Powers of 2 return list of all powers of 2 from 0 to n
============================================================ */
console.log('\n%cPowers of 2 return list of all powers of 2 from 0 to n', 'font-weight: 700; font-size: 16px;');

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

powersOfTwo(2, 2);
powersOfTwo(2, 4);
powersOfTwo(2, 6);



/* Reversing Words in a String
============================================================ */
console.log('\n%cReversing Words in a String', 'font-weight: 700; font-size: 16px;');

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
function reverse(string){
  return string.split(' ').reverse().join(' ');
}

console.log(reverse('Do or do not — there is no try'));



/* Find number abc = a^1 + b^2 + c^3 in range
============================================================ */
console.log('\n%cFind number abc = a^1 + b^2 + c^3 in range', 'font-weight: 700; font-size: 16px;');

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
console.log(sumDigPow(50, 1236));
console.log(sumDigPow(900, 13236));



/* Get str from 2 strs without char repetition. Sort result str
============================================================ */
console.log('\n%cGet str from 2 strs without char repetition. Sort result str', 'font-weight: 700; font-size: 16px;');

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

console.log(longest('asdasd', 'tyuigjk'));
console.log(longest('bvcncvbncvn', 'stwqer234werh r2'));
console.log(longest('ytiwefdsm;hlksfgfdf', '1244df'));
console.log(longest(longest('asdasd', 'tyuigjk'), longest('bvcncvbncvn', 'stwqer234werh r2')));



/* Calculator constructor (learn.javascript.ru)
============================================================ */
console.log('\n%cCalculator constructor (learn.javascript.ru)', 'font-weight: 700; font-size: 16px;');

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
console.log('\n%cCalculator with addMethod() (learn.javascript.ru)', 'font-weight: 700; font-size: 16px;');

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
console.log('\n%cKeep up the hoop', 'font-weight: 700; font-size: 16px;');
function hoopCount(n) {
  return (n < 10 && n >= 0 ) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
}

console.log(hoopCount(12));
console.log(hoopCount(10));
console.log(hoopCount(1));
console.log(hoopCount(2));



/* I love you, a little , a lot, passionately ... not at all
============================================================ */
console.log('\n%cI love you, a little , a lot, passionately ... not at all', 'font-weight: 700; font-size: 16px;');
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



/* Prototype in JS (learn.javascript.ru)
============================================================ */
console.log('\n%cPrototype in JS (learn.javascript.ru)', 'font-weight: 700; font-size: 16px;');

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
console.log('\n%cFind the capitals', 'font-weight: 700; font-size: 16px;');

function capitalsIndex(word) {
  var capitalChar = [];

  for (var i = 0; i < word.length; i++) {
    var char = word.charAt(i);

    if (/^[a-zA-Zа-яА-Я]+$/.test(char) && char == char.toUpperCase()) {
      capitalChar.push(i);
    }

  }

  return capitalChar;
}

function capitals(word) {
  var capitalChar = [];

  for (var i = 0; i < word.length; i++) {
    var char = word.charAt(i);

    if (/^[a-zA-Zа-яА-Я]+$/.test(char) && char == char.toUpperCase()) {
      capitalChar.push(char);
    }

  }

  return capitalChar;
}

console.log(capitalsIndex('Hello woRlD!'));
console.log(capitals('Hello woRlD!'));



/* Broken sequence
============================================================ */
console.log('\n%cBroken sequence', 'font-weight: 700; font-size: 16px;');

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
console.log('\n%cCalculation buying a car', 'font-weight: 700; font-size: 16px;');

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
console.log('\n%cSum of a sequence', 'font-weight: 700; font-size: 16px;');

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
console.log('\n%cFind the next perfect square', 'font-weight: 700; font-size: 16px;');

function findNextSquare(sq) {
  var powerBase = Math.sqrt(sq) + 1;
  return (powerBase % 1 === 0) ? Math.pow(powerBase, 2) : -1;
}

console.log(findNextSquare(144));
console.log(findNextSquare(121));
console.log(findNextSquare(122));



/* Triangel in the loop (Eloquent JavaScript)
============================================================ */
console.log('\n%cTriangel in the loop (Eloquent JavaScript)', 'font-weight: 700; font-size: 16px;');

var str = '';

for (var i = 0; i < 7; i++) {
  str += '#';
  console.log(str);
}



/* FizzBuzz (Eloquent JavaScript)
============================================================ */
console.log('\n%cFizzBuzz (Eloquent JavaScript)', 'font-weight: 700; font-size: 16px;');
console.log('%clook at solution in the source code ', 'color: #ccc;')

/* for (var i = 1; i <= 100; i++) {
  if (!(i % 3) && !(i % 5)) {
    console.log('FizzBuzz');
  } else if (!(i % 3)) {
    console.log('Fizz');
  } else if (!(i % 5)) {
    console.log('Bazz');
  } else {
    console.log(i);
  }
} */

// Author solution
/* for (var n = 1; n <= 100; n++) {
  var output = ';
  if (n % 3 == 0)
    output += 'Fizz';
  if (n % 5 == 0)
    output += 'Buzz';
  console.log(output || n);
} */



/* A Chain adding function
============================================================ */
console.log('\n%cA Chain adding function', 'font-weight: 700; font-size: 16px;');

function add(n) {
  var result = function(m){
    return add(n + m);
  }

  result.valueOf = result.toString = function() {
    return n;
  };

  return result;
}

console.log(add(2)(3)(4));



/* Chess board (Eloquent JavaScript)
============================================================ */
console.log('\n%cChess board (Eloquent JavaScript)', 'font-weight: 700; font-size: 16px;');

var chessBoard = '';
var boardSize = 8;

for (var i = 0; i < boardSize; i++) {
  for (var j = 0; j < boardSize; j++) {
    if ((i + j) % 2 === 0) {
      chessBoard += '#';
    } else {
      chessBoard += ' ';
    }
  }

  chessBoard += '\n';
}

console.log(chessBoard);



/* Minimum (Eloquent JavaScript)
============================================================ */
console.log('\n%cMinimum (Eloquent JavaScript)', 'font-weight: 700; font-size: 16px;');

function getMinimum(arg1, arg2) {
  return (arg1 > arg2) ? arg2 : arg1;
};

console.log(getMinimum(0, 10));
console.log(getMinimum(0, -10));



/* isEven function (Eloquent JavaScript)
============================================================ */
console.log('\n%cisEven function (Eloquent JavaScript)', 'font-weight: 700; font-size: 16px;');

function isEven(n) {
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else if (n < 1) {
    return isEven(-n)
  } else {
    return isEven(n - 2);
  }
};

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));



/* countBs function (Eloquent JavaScript)
============================================================ */
console.log('\n%ccountBs function (Eloquent JavaScript)', 'font-weight: 700; font-size: 16px;');

function countBs(str) {
  var counted = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === 'B') {
      counted += 1;
    } else {
      continue;
    }
  }

  return counted;
}

console.log(countBs('Aasdb Basd B b'));
console.log(countBs('Aasdb Bas b'));
console.log(countBs('Aasd b'));



/* countChars function (Eloquent JavaScript)
============================================================ */
console.log('\n%ccountChars function (Eloquent JavaScript)', 'font-weight: 700; font-size: 16px;');

function countChar(str, char) {
  var counted = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == char) {
      counted += 1;
    } else {
      continue;
    }
  }

  return counted;
}

console.log(countChar('Aasdb Basd B b', 'a'));
console.log(countChar('Aasdb Bas b', 'a'));
console.log(countChar('Aasd b', 'a'));



/* Jacque transformation (Eloquent JavaScript)
============================================================ */
console.log('\n%cJacque transformation (Eloquent JavaScript)', 'font-weight: 700; font-size: 16px;');

var journalSquirrle = window.JOURNAL;

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
    (table[0] + table[1]) *
    (table[1] + table[3]) *
    (table[0] + table[2])
  );
}

// Searching event name in current entry
function hasEvent(event, entry) {
  return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
  var table = [0, 0, 0, 0]; // output table template

  for (var i = 0; i < journal.length; i++) {
    var entry = journal[i], // get events array from journal
        index = 0; // set start index

    if (hasEvent(event, entry)) {
      index += 1;
    }

    if (entry.squirrel) {
      index += 2;
    }

    table[index] += 1;
  }

  return table;
}

function gatherCorrelations(journal) {
  var phis = {};

  for (var entry = 0; entry < journal.length; entry++) {
    var events = journal[entry].events;

    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      if (!(event in phis)) {
        phis[event] = phi(tableFor(event, journal))
      }
    }
  }

  return phis;
}

var correlations = gatherCorrelations(journalSquirrle);


console.log('\n%cCorrelation value of each event\n\n', 'font-weight: 400; color: #777;');

for (var event in correlations) {
  console.log(event + ': ' + correlations[event]);
}

console.log('\n%cEvents that has correlation more than 0.1 and less than -0.1  \n\n', 'font-weight: 400; color: #777;');
for (var event in correlations) {
  var correlation = correlations[event];

  if (correlation > 0.1 || correlation < -0.1) {
    console.log(event + ": " + correlation);
  }
}



/* Range function with step argument (Eloquent JavaScript)
============================================================ */
console.log('\n%cRange function (Eloquent JavaScript)', 'font-weight: 700; font-size: 16px;');

function range(start, end, step) {
  var range = [];

  if (step > 0) {
    while (start <= end) {
      range.push(start);
      start+= step;
    }
  } else {
    while (start >= end) {
      range.push(start);
      start+= step;
    }
  }

  return range;
}

// Solution in the book
function range(start, end, step) {
  if (step == null) step = 1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  return array;
}

console.log(range(6, 7));
console.log(range(1, 4, 2));
console.log(range(1, 10, 2));
console.log(range(22, 2, -4));



/* Sum function (Eloquent JavaScript)
============================================================ */
console.log('\n%cSum function (Eloquent JavaScript)', 'font-weight: 700; font-size: 16px;');

function sum(rangeArray) {
  var sum = 0;

  for (var i = 0; i < rangeArray.length; i++) {
    sum += rangeArray[i];
  }

  return sum;
}

console.log(sum(range(6,7)));
console.log(sum(range(1,10)));
console.log(sum(range(22,26)));



/* Reversing an array (Eloquent JavaScript)
============================================================ */
console.log('\n%cReversing an array (Eloquent JavaScript)', 'font-weight: 700; font-size: 16px;');

function reverseArray(array) {
  var output = [];
  for (var i = array.length - 1; i >= 0; i--)
    output.push(array[i]);
  return output;
}

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

var testArr = [1,5,2,3];

console.log(reverseArray(testArr));
console.log(testArr);

console.log(reverseArrayInPlace(testArr));
console.log(testArr);



/* Working out with JSON (Eloquent JavaScript)
============================================================ */
console.log('\n%cWorking out with JSON (Eloquent JavaScript)', 'font-weight: 700; font-size: 16px;');

var ancestry = JSON.parse(window.ANCESTRY_FILE);

console.log(ancestry);



/* Flattening (Eloquent JavaScript)
============================================================ */
console.log('\n%cFlattening (Eloquent JavaScript)', 'font-weight: 700; font-size: 16px;');

var array = [[1, 2, 3], [4, 5], [6]];

console.log(array.reduce(function(previousValue, currentValue) {
  return previousValue.concat(currentValue);
}, []));



/* Mother-child age difference (Eloquent JavaScript)
============================================================ */
console.log('\n%cMother-child age difference (Eloquent JavaScript)', 'font-weight: 700; font-size: 16px;');

function  average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};

ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var ageDifference = ancestry.filter(function(person) {
    return byName[person.mother] != null;
  }).map(function(person) {
    return person.born - byName[person.mother].born;
  });

console.log(average(ageDifference));
