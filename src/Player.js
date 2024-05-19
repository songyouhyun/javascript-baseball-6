export class Player {
    #numbers;

    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers;
    }

    #validate(numbers) {
        if (numbers.length !== 3) {
            throw new Error('[ERROR] 숫자 3개를 입력해주세요.');
        }
        if (numbers.includes(NaN)) {
            throw new Error('[ERROR] 숫자를 입력해주세요.');
        }
        this.#validatePositive(numbers);
        this.#validateDuplicate(numbers);
    }

    #validatePositive(numbers) {
        const isPositive = numbers.every((value) => value > 0);
        if (!isPositive) {
            throw new Error('[ERROR] 양수인 정수를 입력해주세요.')
        }
    }

    #validateDuplicate(numbers) {
        const uniqueArray = [];
        numbers.forEach((value) => {
            if (uniqueArray.includes(value)) {
                throw new Error('[ERROR] 서로 다른 숫자를 입력해주세요.');
            }
            uniqueArray.push(value);
        })
    }

    get numbers() {
        return this.#numbers;
    }
}