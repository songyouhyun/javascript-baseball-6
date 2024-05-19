import { Console, Random } from "@woowacourse/mission-utils";
import { Player } from "./Player.js";
import { Input } from "./Input.js";
import { Score } from "./Score.js";

const GAME_STATUS = {
    START: 1,
    END: 2
}

class App {

    inputAboutRestartOrEnd;
    score;

    async play() {
        Console.print('숫자 야구 게임을 시작합니다');

        do {
            const computer = this.#pickUniqueRandomNumbers(3);
            await this.#playRound(computer);
            this.inputAboutRestartOrEnd = await Input.getRestartOrEnd();
        } while (this.inputAboutRestartOrEnd != GAME_STATUS.END);

        Console.print('게임 종료');
    }

    #pickUniqueRandomNumbers(count) {
        const uniqueArray = [];
        while (uniqueArray.length < count) {
            const number = Random.pickNumberInRange(1, 9);
            if (!uniqueArray.includes(number)) {
                uniqueArray.push(number);
            }
        }
        return uniqueArray;
    }

    async #playRound(computer) {
        do {
            const numbers = await Input.getNumbers();
            const player = new Player(numbers);

            this.score = new Score();
            this.score.countStrikeOrBall(computer, player.numbers)

            const result = this.score.getResultOfScore();
            Console.print(result);
        } while (this.score.strike !== 3);
    }
}

export default App;
