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