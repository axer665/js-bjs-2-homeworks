parseCount = (value) => {
    if (isNaN(Number.parseFloat(value))) {
        throw new Error("Невалидное значение");
    } else {
        return Number(value);
    }
}

validateCount = (value) => {
    try {
        let result = parseCount(value);
        return result;
    } catch (e) {
        return e;
    }
}


class Triangle {
    #perimeter;
    #area;
    a;
    b;
    c;

    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        if (this.a && this.b && this.c) {
            return this.a + this.b + this.c;
        } else {
            return "неправильное значение";
        }
    }

    get area() {
        if (this.a && this.b && this.c) {
            let p = (this.a + this.b + this.c) / 2;
            let s = Math.sqrt(p * (p-this.a) * (p-this.b) * (p-this.c));   
            this.#area = Number(s.toFixed(3));
            return this.#area;
        }
        return "неправильное значение";
    }
}

getTriangle = (a, b, c) => {
    try {
        let triangle = new Triangle(a, b, c);
        return triangle;
    } catch (e) {
        return {
            get perimeter () {
                return "Ошибка! Треугольник не существует";
            },
            get area() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}