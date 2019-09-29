//input size
//gridSize
//input mines number
//print grid and ask what field to reveal

//input field index and reveal
//print again

class Cell{
    constructor(row, column) {
        this.row = row
        this.column = column
        this.revealed = false
        this.mined = false
        this.neighborMineCount = 0
    }
    reveal(){ this.revealed = true}
    
}

class Board{
    constructor(gridSize, minesNumber) {
        this.gridSize = gridSize
        this.minesNumber = minesNumber
        this.gameBoard = this.makeBoard()
        }
    makeBoard() {
        let board = new Array(this.gridSize)
        for (let row = 0; row < board.length; row++) {
            board[row] = new Array(this.gridSize)
            for(let column = 0; column < board.length; column++) {
                board[row][column] = new Cell(row, column)
            }
        }
        return board
    }

    printBoard(){
        for (let row = 0; row < this.gridSize; row++){
            for (let column = 0; column<this.gridSize; column++) {
                console.log(this.gameBoard[row][column].icon)
            }
        }
    }


    randomAssignMines(minesNumber){
        // let mineCooridinates = []
        for (let i = 0; i < minesNumber; i++) {
            let randomRow = this.getRandom()
            let randomCol = this.getRandom()
            if (randomCol != randomRow) {
                this.gameBoard[randomRow][randomCol].mined = true 
            }
        }
        return this.gameBoard
    }
    getRandom() {
        return Math.floor(Math.random() * (this.minesNumber - 0))
    }
    calculateNeighbor() {
        let mineCount = 0
        for(row = 0; row < this.gridSize; row++) {
            for (column = 0; column < this.gridSize; column++) {
                // let cell = this.gameBoard[row][column]
                if (this.gameBoard[row][column].mined = false) {
                    let neighbors = getneighbors(row,column)
                    mineCount = 0
                    for (let i = 0; i < neighbors.length; i++) {
                        if (typeof neighbors[i] != undefined) {
                            neighbors[i].mined ? (mineCount++) : mineCount
                        }   
                    }
                    this.gameBoard[row][column].neighborMineCount = mineCount
                }
            }
        }
    }

    getneighbors(row, column) {
        let neighbors = []
        neighbors.push(this.gameBoard[row-1][column-1])
        neighbors.push(this.gameBoard[row-1][column])
        neighbors.push(this.gameBoard[row-1][column+1])
        neighbors.push(this.gameBoard[row][column-1])
        neighbors.push(this.gameBoard[row][column+1])
        neighbors.push(this.gameBoard[row+1][column-1])
        neighbors.push(this.gameBoard[row+1][column])
        neighbors.push(this.gameBoard[row+1][column+1])

        return neighbors
    }

    revealCell(row, column){
        if (this.gameBoard[row][column].mined) {
            gameover
        } else {
            
        }
    }


}

let board = new Board(5,5)
// board.makeBoard(
// console.log(board.printBoard())
console.log(board.getRandom())