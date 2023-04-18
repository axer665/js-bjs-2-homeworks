function Student(name, gender, age) {
	name;
	gender;
	age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	// если у нас уже есть какие-то оценки, то добавим к ним новые
	if (this.marks) {
		this.marks = [...this.marks, ...marks];
	} else {
		this.marks = marks;
	}
}

Student.prototype.getAverage = function() {
	if (typeof this.marks !== "undefined" && this.marks.length > 0) {
		// Соберем сумму всех оценок
		let marksSum = this.marks.reduce((previousValue, currentValue) => {
			return previousValue += currentValue;
		});
		// найдем среднее арифметическое всех оценок
		let average = marksSum / this.marks.length;
		return average;
	}
	return 0;
}

Student.prototype.exclude = function(reason) {
	delete this.marks;
	delete this.subject;
	this.excluded = reason;
}

let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
student1.marks;
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);
// {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Algebra"}
let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)
// {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}