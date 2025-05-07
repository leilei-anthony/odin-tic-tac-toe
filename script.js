const Gameboard = function() {
    const board = new Array(9).fill('');

        const title = document.getElementById('title');

        function placeToken(index, token) {
            if(board[index] === '' && title.innerHTML === 'tic-tac-toe') {
                board[index] = token;
                displayBoard();
                return true;
            }
            return false;
        }

        function getBoard() {
            return [...board];
        }

        function resetBoard() {
            for (let i = 0; i < 9; i++) {
                board[i] = '';
            }
        }

        function displayBoard() {
            for (let i = 0; i < board.length; i++) {
                document.getElementById(`cell${i}`).innerHTML = board[i];
            }          
        }

        const btnReset = document.getElementById('btnReset');
        btnReset.addEventListener('click', function() {
            resetBoard();
            title.innerHTML = 'tic-tac-toe'
            displayBoard();
        })

        for (let i = 0; i < board.length; i++) {
            document.getElementById(`cell${i}`).innerHTML = board[i];
        }  

        return {
            placeToken,
            getBoard,
            resetBoard,
            displayBoard
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

    const checkRow = function(board, token) {
        return (
            (board[0] === token && board[1] === token && board[2] === token) ||
            (board[3] === token && board[4] === token && board[5] === token) ||
            (board[6] === token && board[7] === token && board[8] === token)
        );
    }
    
    const checkColumn = function(board, token) {
        return (
            (board[0] === token && board[3] === token && board[6] === token) ||
            (board[1] === token && board[4] === token && board[7] === token) ||
            (board[2] === token && board[5] === token && board[8] === token)
        );
    }
    
    const checkDiagonal = function(board, token) {
        return (
            (board[0] === token && board[4] === token && board[8] === token) ||
            (board[2] === token && board[4] === token && board[6] === token)
        );
    }

    const getResult = function(board, token) {
        return (
            checkRow(board, token) ||
            checkColumn(board, token) ||
            checkDiagonal(board, token)
        );
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

    let currentPlayer = p1;

    const cellArray = Array.from(document.querySelectorAll('.cell'));
        cellArray.forEach(cell => {
            cell.addEventListener('click', () => {

                const str = cell.id;
                const match = str.match(/^([a-zA-Z]+)(\d+)$/);
                const index = match[2];

                gb.placeToken(index, currentPlayer.token);

                console.log(gb.getBoard());

                if (cw.getResult(gb.getBoard(), currentPlayer.token)) {
                    const title = document.getElementById('title');
                    title.innerHTML = currentPlayer.token + " wins!";
                }

                currentPlayer = currentPlayer === p1 ? p2 : p1;
            })
        })

    gb.displayBoard();
}

GameControl();
