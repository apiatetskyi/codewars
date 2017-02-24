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



