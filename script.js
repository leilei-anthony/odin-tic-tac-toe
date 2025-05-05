const Gameboard = function() {
    const board = new Array(9).fill('');

        function placeToken(index, token) {
            if(board[index] === '') {
                board[index] = token;
                return true;
            }
            return false;
        }

        function getBoard() {
            return [...board];
        }

        function resetBoard() {
            for (let i = 0; i < boardSize; i++) {
                board[i] = '';
            }
        }

        return {
            placeToken,
            getBoard,
            resetBoard
        }
}

const Player = function() {
    let players = [];

    const addPlayer = function(name, token) {
        if(players.length === 2) {
            players = [];
        }

        let player = {
            name : name,
            token : token,
            score : 0
        };

        players.push(player);
    }

    const getPlayers = (index) => players[index];

    const addPoint = (player) => player.score += 1;

    const getScore = (player) => player.score;

    return {
        addPlayer,
        getPlayers,
        addPoint,
        getScore,
    }
}

const CheckWin = function() {
    let result = {};

    const checkRow = function(board, token) {
        result = {};

        if((board[0] === token &&
            board[1] === token &&
            board[2] === token) ||
           (board[3] === token &&
            board[4] === token &&
            board[5] === token) ||
           (board[6] === token &&
            board[7] === token &&
            board[8] === token)
        ) {
            result = {winner: token};
        }
    }

    const checkColumn = function(board, token) {
        result = {};

        if((board[0] === token &&
            board[3] === token &&
            board[6] === token) ||
           (board[1] === token &&
            board[4] === token &&
            board[7] === token) ||
           (board[2] === token &&
            board[5] === token &&
            board[8] === token)
        ) {
            result = {winner: token};
        }
    }

    const checkDiagonal = function(board, token) {
        result = {};

        if((board[0] === token &&
            board[4] === token &&
            board[8] === token) ||
           (board[2] === token &&
            board[4] === token &&
            board[6] === token)
        ) {
            result = {winner: token};
        }
    }

    const getResult = function() {
        return result;
    }

    return {
        checkRow,
        checkColumn,
        checkDiagonal,
        getResult
    }
}

const GameControl = function() {
    const gb = Gameboard();
    const pl = Player();
    const cw = CheckWin();

    pl.addPlayer('p1', 'X');
    pl.addPlayer('p2', 'O');

    const p1 = pl.getPlayers(0);
    const p2 = pl.getPlayers(1);

    console.log(gb.getBoard());

    console.log(p1);
    console.log(p2);

    gb.placeToken(0, p1.token)
    console.log(gb.getBoard());

    gb.placeToken(3, p2.token)
    console.log(gb.getBoard());

    gb.placeToken(1, p1.token)
    console.log(gb.getBoard());

    gb.placeToken(4, p2.token)
    console.log(gb.getBoard());

    gb.placeToken(2, p1.token)
    console.log(gb.getBoard());

    cw.checkRow(gb.getBoard(), p1.token);
    console.log(cw.getResult());




}

GameControl();
