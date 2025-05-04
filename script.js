const Gameboard = function() {
    const board = new Array(9).fill('');

        function placeMark(index, mark) {
            if(board[index] === '') {
                board[index] = mark;
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
            placeMark,
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

const CheckVictory = function() {
    let result = {};

    const row = function(board) {
        result = {};


    }

    const column = function(board) {
        result = {};
    }

    const diagonal = function(board) {
        result = {};
    }

    const tie = function(board) {
        result = {};
    }
}

const GameControl = function() {

}

