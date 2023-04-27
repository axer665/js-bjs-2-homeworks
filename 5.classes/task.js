class PrintEditionItem {
    name;
    releaseDate;
    pagesCount;
    #state = 100;
    type = null;
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
    }

    fix () {
        const value = this.#correctState(this.#state * 1.5);
        this.#state = value;
    }

    get state() {
        return this.#state;
    }
    
    set state(value) {
        this.#state = this.#correctState(value);
    }

    // Отдельный приватный метод для корректировки значения состояния
    #correctState(value) {
        if (value > 100) {
            value = 100;
        } else if (value < 0) {
            value = 0;
        }
        return value;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    name;
    books = [];
    constructor (name) {
        this.name = name;
    }

    addBook = (book) => {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy = (type, value) => {
        const findResult = this.books.find((item) => item[type] === value);
        return findResult || null;
    }

    giveBookByName = (bookName) => {
        const book = this.findBookBy("name", bookName);
        if (!book) return null;
        this.books = this.books.filter((item) => item.name !== bookName);
        return book;
    }
}

// Дополнительное задание
class Student {
    name;
    marks = {};
    constructor(name) {
        this.name = name;
    }

    addMark(score, markName) {
        if (score < 2 || score > 5){
            return;
        }
        if (typeof this.marks[markName] !== "undefined") {
            this.marks[markName].push(score);
        } else {
            this.marks[markName] = [score];
        }
    }

    getAverageBySubject(markName) {
        if (typeof this.marks[markName] !== "undefined") {
            let marksSum = this.marks[markName].reduce((previousValue, currentValue) => {
                return previousValue += currentValue;
            });
            let average = marksSum / this.marks[markName].length;
            return average;
        } 
        return 0;
    }

    getAverage() {
        let sum = 0;
        let marksCount = Object.keys(this.marks).length;
        if (marksCount > 0) {
            for (let markKey of Object.keys(this.marks)){
                sum += this.getAverageBySubject(markKey);
            }
            sum /= marksCount
        }
        return sum;
    }
  }
