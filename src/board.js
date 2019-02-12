export const board = () => {
  const gameBoard = [
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  for(let y = 0; y < gameBoard.length; y++) {
    for (let x = 0; x < gameBoard[y].length; x++) {
      if(gameBoard[y][x] === 1) {
        document.getElementById("piece-board").innerHTML += "<div class='piece-board-I'></div>";
      } else if (gameBoard[y][x] === 0) {
        document.getElementById("piece-board").innerHTML +="<div class='piece-board-empty'></div>";
      }
    }
  }
};

// import Piece from './piece';

// export default class Board {
//   constructor() {
//   }

//   start() {
//     // check if the game is over
//     // create random Tetris pieces
//       // currentPiece
//       // nextPiece
//     // setInterval for piece to fall unless the current piece is on the ground
//       // check if the currentPiece is on the ground with every interval
//       // what should the frame rate be?
//     // when piece hits the ground, restart while loop
//       // every loop will be a turn for a piece
    
//     this.game_over_check();

//     while (this.game_over_check === false) {
//       const tetronimoes = ["I", "O", "T", "S", "Z", "J", "L"];

//       const tetronimoCurrent = tetronimoes[Math.floor(Math.random()*tetronimoes.length)];
//       // const tetronimoNext = tetronimoes[Math.floor(Math.random()*tetronimoes.length)];

//       const currentPiece = Piece(tetronimoCurrent);
//       // const nextPiece = Piece(tetronimoNext);
//         // Implement nextPiece functionality AFTER done with basic Tetris functionality
//       currentPiece.piece();

//       this.frameRate();
//       check_if_on_ground();
//     }

//     this.game_over();
//   }

//   pause() {

//   }

//   frameRate() {
//     // will set the speed at which the piece will fall
//     setInterval(()=> {

//     }, 1300);
//   }

//   row_check() {
//     // check each row
//       // if a row is filled with the same colors:
//         // 1. Change that column's color back to the original background color
//         // 2. Shift everything down by one
//   }
  
//   game_over_check() {
//     // if there is NO column that's completely filled with colors, return false
//     // if there IS a column that's completely filled with colors, return true
//   }

//   check_if_on_ground() {
//     // if the piece is on the ground, check if there is a row to clear
//     // if the piece is on the ground, check if there is a filled column - if so, it's game over!
//     if (piece_is_on_ground) {
//       this.game_over_check();
//       this.row_check();
//     }
//   }

//   game_over() {
//     // end the game and give the player a message
//   }
// }
