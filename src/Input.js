import { Console } from "@woowacourse/mission-utils";

export class Input {
    static async getNumbers() {
        let numbers = await Console.readLineAsync('숫자를 입력해주세요 : ');
        return this.parseInputToNumbers(numbers);
    }

    static parseInputToNumbers(value) {
        return value.trim().split('').map((value) => parseInt(value));
    }

    static async getRestartOrEnd() {
        return await Console.readLineAsync(
            '3개의 숫자를 모두 맞히셨습니다! 게임 종료 \n' +
            '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n'
        );
    }
}
