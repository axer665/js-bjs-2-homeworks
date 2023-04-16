"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = (Math.pow(b, 2)) - (4 * a * c);

	if (d < 0) {
		// возвращаем пустой масив
	} else if (d === 0) {
		arr.push(-b / (2 * a));
	} else {
		arr.push((-b + Math.sqrt(d)) / (2 * a));
		arr.push((-b - Math.sqrt(d)) / (2 * a));
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	// считаем итоговую сумму кредита
	let summ = amount - contribution;

	// рассчитаем процентную ставку
	const P = percent / 100 / 12;

	// посчитаем аннуитетный ежемесячный платеж
	let payment = summ * (P + (P / (Math.pow(1 + P, countMonths) - 1)));

	// и вычислим итог
	let result = payment * countMonths;

	// ограничим до сотых и приведем к числу
	return Number(result.toFixed(2));

}