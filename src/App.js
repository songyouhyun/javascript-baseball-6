import { MissionUtils } from "@woowacourse/mission-utils";

class App {
    async play() {

        MissionUtils.Console.print('숫자 야구 게임을 시작합니다');

        let flag = 0;

        // 2를 입력하면 종료
        while (flag != 2) {
            // 선언
            let strike;
            let ball;

            // 컴퓨터는 1에서 9까지 서로 다른 임의의 수 3개를 선택
            const computer = [];
            while (computer.length < 3) {
                const number = MissionUtils.Random.pickNumberInRange(1, 9);
                if (!computer.includes(number)) {
                    computer.push(number);
                }
            }

            // 3개의 숫자를 모두 맞힐 경우 종료
            while (strike != 3) {

                // 초기화
                strike = 0;
                ball = 0;

                // 게임 플레이어는 3개의 숫자를 입력
                const number = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
                const player = number.split('').map((value) => parseInt(value));

                // 입력 유효성 검사
                if (player.includes(NaN)) {
                    throw new Error('숫자를 입력해주세요.');
                }
                if (player.length !== 3) {
                    throw new Error('[ERROR]')
                }

                // 순회하며 비교
                computer.forEach((computerValue, computerIndex) => {
                    player.forEach((playerValue, playerIndex) => {
                        // 같은 수가 같은 자리에 있는 경우: '스트라이크'
                        if (playerValue === computerValue && playerIndex === computerIndex) {
                            strike++;
                        }
                        // 같은 수가 다른 자리에 있는 경우: '볼'
                        if (playerValue === computerValue && playerIndex !== computerIndex) {
                            ball++;
                        }
                    });
                });

                // 입력한 수에 대한 결과 표시
                if (strike > 0 && ball > 0) {
                    MissionUtils.Console.print(ball + '볼' + ' ' + strike + '스트라이크');
                }
                if (strike > 0 && ball === 0) {
                    MissionUtils.Console.print(strike + '스트라이크');
                }
                if (strike === 0 && ball > 0) {
                    MissionUtils.Console.print(ball + '볼');
                }
                if (strike === 0 && ball === 0) {
                    MissionUtils.Console.print('낫싱');
                }
            }
            flag = await MissionUtils.Console.readLineAsync(
                '3개의 숫자를 모두 맞히셨습니다! 게임 종료 \n' +
                '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n'
            );
        }
        MissionUtils.Console.print('게임 종료');
    }
}

export default App;
