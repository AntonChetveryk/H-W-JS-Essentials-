				/// Use this array for tests
const testArr =  [8, 2, 4, 4, 5, 6, 7, 8, 9];

/*Task1*/

function printTimeout(str, n) {
	setTimeout(() => console.log(str), n);
}

/*Task2*/

function sumAll(n) {
	if (sumAll.arguments[0] === 0 || sumAll.arguments.length === false) {
		return 0
	} else if (n > 1) {
		return n + sumAll(n - 1)
	} else {
		return 1;
	}
}

/*Task3*/

function bombTimer(str, time) {
	let count = time;
	let interval = setInterval(function () {
		console.log(count);
		count--;
		if (count === 0) {
			clearInterval(interval);
			console.log(str);
		}
	}, 1000);
	return 'start timer';
};
//Строка срабатывает одновременно с последним значением?

/*Task4*/

function factorial(n) {
	return (n > 1) ? n * factorial(n - 1) : 1;
	//  без учета n = 0 || n = false
}

/*Task6*/

function filterNumbers(arr, maxNumber) {
	const newArr = [];

	function filter(item, i, arr) {
		if (item < maxNumber) {
			newArr.push(item)
		}
	}
	arr.map(filter);
	return newArr;
}

/*Task7*/

function minMax(arr) {
	const obj = {};
	if(typeof arr !== 'object'){
		return 'input Array to minMax()';
	}
	let min = arr[0],
		max = arr[0];
	for(let i=0; i<arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		}
		if(arr[i] < min){
			min = arr[i];
		}
	}
	obj.min = min;
	obj.max  = max;
	return obj;
}

/*Task8*/

function average(arr){
	 let total = arr.reduce(function(sum, currentItem){
		return sum + currentItem;
	},0);
	return (total/arr.length).toFixed(2);
}

/*Task9*/

let matrix = [[2,2],[1,4],[5,6]];

function concatFirstNestedArrays(arr){
	function conc(previousValue, currentItem, index, arr){
		return previousValue.concat(currentItem);
	}
	return arr.reduce(conc,[]);
}






























