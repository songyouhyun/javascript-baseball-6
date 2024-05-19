export class Score {
    constructor() {
        this.strike = 0;
        this.ball = 0;
    }

    countStrikeOrBall(computer, player) {
        this.strike = 0;
        this.ball = 0;

        computer.forEach((computerValue, computerIndex) => {
            player.forEach((playerValue, playerIndex) => {
                if (playerValue === computerValue) {
                    if (playerIndex === computerIndex) {
                        this.strike++;
                    } else {
                        this.ball++;
                    }
                }
            });
        });
    }

    getResultOfScore() {
        let message = '';

        if (this.ball > 0) {
            message += `${this.ball}볼`;
        }

        if (this.strike > 0) {
            if (message.length > 0) {
                message += ' ';
            }
            message += `${this.strike}스트라이크`;
        }

        if (message.length === 0) {
            message += '낫싱';
        }

        return message;
    }
}
