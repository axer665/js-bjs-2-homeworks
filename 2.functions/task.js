function getArrayParams(...arr) {
	let min = 0,
		max = 0,
		sum = 0,
		avg = 0;

	for (let i = 0; i < arr.length; i++) {
		if (i === 0) {
			min = arr[0];
			max = arr[0];
		} else {
			if (arr[i] < min) {
				min = arr[i];
			}
			if (arr[i] > max) {
				max = arr[i];
			}
		}
		sum += arr[i];
	}

	avg = Number((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

console.log(getArrayParams(-99, 99, 10));

function summElementsWorker(...arr) {
	if (arr.length > 0) {
		return arr.reduce((previousValue, currentValue) => {
			return previousValue += currentValue;
		});
	}
	return 0;
}
// summElementsWorker
console.log(summElementsWorker()); // 0
console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61

function differenceMaxMinWorker(...arr) {
	let difference = 0;
	if (arr.length > 0) {
		let min = Math.min(...arr),
			max = Math.max(...arr);
		difference = max - min;
	}
	return difference;
}
// differenceMaxMinWorker
console.log(differenceMaxMinWorker()); // 0
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 20 - 10 => 10

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0,
		sumOddElement = 0;
	if (arr.length > 0) {
		for (item of arr) {
			if (item % 2 === 0) {
				sumEvenElement += item;
			} else {
				sumOddElement += item;
			}
		}
	}
	return sumEvenElement - sumOddElement;
}
// differenceEvenOddWorker
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 266 - 213 => 53
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 114 - 383 => -269

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0,
		countEvenElement = 0;
	if (arr.length > 0) {
		for (item of arr) {
			if (item % 2 === 0) {
				sumEvenElement += item;
				countEvenElement++;
			}
		}
		return sumEvenElement / countEvenElement;
	}
	return 0;
}
// averageEvenElementsWorker
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // [2, 4, 6, 8] => 5
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // [64, 10, 40] => 38

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	if (arrOfArr.length > 0) {
		for (let i = 0; i < arrOfArr.length; i++) {
			const resultFunc = func(...arrOfArr[i]);
			if (resultFunc > maxWorkerResult) {
				maxWorkerResult = resultFunc;
			}
		}
		return maxWorkerResult;
	}
	return 0;
}
// makeWork
const arr = [
	[10, 10, 11, 20, 10],
	[67, 10, 2, 39, 88],
	[72, 75, 51, 87, 43],
	[30, 41, 55, 96, 62]
];
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72