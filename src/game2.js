// // Button Logic
// document.addEventListener("DOMContentLoaded", () => {
//   // ============================================================ DETAILS MODAL START ============================================================
//   const detailModal = document.getElementById("detail-modal");

//   document.getElementById("details").addEventListener("click", () => {
//     // debugger;
//     if (detailModal.classList.contains("hide-about-modal")) {
//       detailModal.classList.remove("hide-about-modal");
//       detailModal.classList.add("about-modal");
//     }
//   });

//   // Close About Modal
//   document.getElementById("about-modal-close").addEventListener("click", () => {
//     if (detailModal.classList.contains("about-modal")) {
//       detailModal.classList.remove("about-modal");
//       detailModal.classList.add("hide-about-modal");
//     }
//   });
//   // ============================================================ DETAILS MODAL END ============================================================

//   let gameFreeze = true;

//   // ============================================================ START GAME START ============================================================
//   document.getElementById("start-game").addEventListener("click", () => {
//     document.getElementById("play-screen").classList.add("hide-screen");
//     document.getElementById("pause-screen").classList.remove("show-screen");
//     document.getElementById("pause-screen").classList.add("hide-screen");
//     console.log("game start");
//     frameLimiter += 1;
//     playGame();

//     // instantiate a piece class using a random Tetronimo letter as an argument
//     // instantiate a board class using the piece class as an argument

//     // const tetronimoes = ["I", "O", "T", "S", "Z", "J", "L"];
//     // const tetronimo = tetronimoes[Math.floor(Math.random()*tetronimoes.length)];

//     // let randomPiece = Piece(tetronimo);
//     // let currentBoard = Board(randomPiece); 
//       // QUICK NOTE: won't this instantiate a new board every time?
//       // If so, wouldn't that clear the board every time a new piece class is instantiated?
//         // possible work-around: instantiate pieces classes inside of the board itself, rather than here
//           // so that we only need to instantiate the board once until the game is over
//   });

//   document.getElementById("play-game").addEventListener("click", () => {
//     document.getElementById("play-screen").classList.remove("show-screen");
//     document.getElementById("play-screen").classList.add("hide-screen");
    
//     console.log("game start");
//     frameLimiter += 1;
//     playGame();
//   });

//   document.getElementById("game-paused").addEventListener("click", () => {
//     document.getElementById("pause-screen").classList.remove("show-screen");
//     document.getElementById("pause-screen").classList.add("hide-screen");
    
//     console.log("game start");
//     frameLimiter += 1;
//     playGame();
//   });
//   // ============================================================ START GAME END ============================================================



//   // ============================================================ PAUSE GAME START ============================================================
//   document.getElementById("pause-game").addEventListener("click", () => {
//     document.getElementById("pause-screen").classList.remove("hide-screen");
//     document.getElementById("pause-screen").classList.add("show-screen");
//     console.log("game paused");
//     frameLimiter = 0;
//     pauseGame();
//   });
//   // ============================================================ PAUSE GAME END ============================================================



//   // ============================================================ MUTE MUSIC START ============================================================
//   document.getElementById("mute-music").addEventListener("click", () => {
//     alert("mute-music");
//   });
//   // ============================================================ MUTE MUSIC END ============================================================



//   // ============================================================ CHANGE MUSIC START ============================================================
//   document.getElementById("change-music").addEventListener("click", () => {
//     alert("change-music");
//   });
//   // ============================================================ CHANGE MUSIC END ============================================================



//   // ============================================================ GAME CONTROLS START ============================================================
//   // console.log(document.getElementById("tetronimo-I-next").classList);

//   // Generate random Tetris piece
//   const tetronimoes = ["I", "O", "T", "S", "Z", "J", "L"];
//   let currentPiece = tetronimoes[Math.floor(Math.random()*tetronimoes.length)];

//   let nextPiece = tetronimoes[Math.floor(Math.random()*tetronimoes.length)];

//   // Logic for "Next Piece" box in right sidebar
//   document.getElementById(`tetronimo-${nextPiece}-next`).classList.remove("hide-tetronimo");
//   document.getElementById(`tetronimo-${nextPiece}-next`).classList.add("show-tetronimo");
  
//   // Initial position of Pieces
//   document.getElementById(`tetronimo-${currentPiece}`).style.marginTop = "0px";
//   document.getElementById(`tetronimo-${currentPiece}`).style.marginLeft = "90px";
//   document.getElementById(`tetronimo-${currentPiece}`).style.marginRight = "0px";

//   // Set colors
//   const pieceColors = ["lightBlue", "yellow", "purple", "green", "red", "blue", "orange"];
//   document.getElementById(`tetronimo-I`).style.color = "lightBlue";
//   document.getElementById(`tetronimo-O`).style.color = "yellow";
//   document.getElementById(`tetronimo-T`).style.color = "purple";
//   document.getElementById(`tetronimo-S`).style.color = "green";
//   document.getElementById(`tetronimo-Z`).style.color = "red";
//   document.getElementById(`tetronimo-J`).style.color = "blue";
//   document.getElementById(`tetronimo-L`).style.color = "orange";
  
//   let frameLimiter = 0;

//   let frameRate;
//   function playGame() {
//     gameFreeze = false;
    
//     if (frameLimiter === 1) {
//       frameRate = setInterval(() => {
//         if (currentPiece === "I") {
//           if (parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginTop) <= 540) {
//             document.getElementById(`tetronimo-${currentPiece}`).style.marginTop = `${parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginTop) + 30}px`;
//           }
//         }
//         else if (currentPiece !== "I") {
//           if (parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginTop) <= 510) {
//             document.getElementById(`tetronimo-${currentPiece}`).style.marginTop = `${parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginTop) + 30}px`;
//           }
//         }
//         // else {
//         //   clearInterval();
//         // }
//       }, 1000);
//     }
//   }

//   function pauseGame() {
//     gameFreeze = true;
//     clearInterval(frameRate);
//   }

//   document.addEventListener("keydown", event => {
//     // if (gameFreeze === false) {
//       if (event.which === 87) {
//         // w key
//         // remember to use this for the rotating logic
//         if (parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginTop) >= 30) {
//           document.getElementById(`tetronimo-${currentPiece}`).style.marginTop = `${parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginTop) - 30}px`;
//         }
//       }
  
//       else if (event.which === 83) {
//         // s key
//         if (currentPiece === "I") {
//           if (parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginTop) <= 540) {
//             document.getElementById(`tetronimo-${currentPiece}`).style.marginTop = `${parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginTop) + 30}px`;
//           }
//         }
//         else {
//           if (parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginTop) <= 510) {
//             document.getElementById(`tetronimo-${currentPiece}`).style.marginTop = `${parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginTop) + 30}px`;
//           }
//         }
//       }
  
//       else if (event.which === 65) {
//         // a key
//         if (parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginRight) >= 0 && parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginLeft) >= 30) {
//           document.getElementById(`tetronimo-${currentPiece}`).style.marginRight = `${parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginRight) + 30}px`;
//           document.getElementById(`tetronimo-${currentPiece}`).style.marginLeft = `${parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginLeft) - 30}px`;
//         }
//       }
  
//       else if (event.which === 68) {
//         // d key
//         if (currentPiece === "O") {
//           if (parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginLeft) <= 210 ) {
//             document.getElementById(`tetronimo-${currentPiece}`).style.marginLeft = `${parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginLeft) + 30}px`;
//           }
//         }
//         else if (currentPiece === "I") {
//           if (parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginLeft) <= 150 ) {
//             document.getElementById(`tetronimo-${currentPiece}`).style.marginLeft = `${parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginLeft) + 30}px`;
//           }
//         }
//         else {
//           if (parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginLeft) <= 180 ) {
//             document.getElementById(`tetronimo-${currentPiece}`).style.marginLeft = `${parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginLeft) + 30}px`;
//           }
//         }
//       }
//     // }
  
//       else if (event.which === 32 && event.target === document.body) {
//         // spacebar key
//         console.log("spacebar");
        
//         event.preventDefault();
//         if (currentPiece === "I") {
//           // document.getElementById(`tetronimo-${currentPiece}`).style.marginTop = "570px";
//           // document.getElementById(`tetronimo-${currentPiece}`).style.bottom = "0px";

//           currentPieceMarginTop = parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginTop);
//           let marginTop = currentPieceMarginTop;
//           // while the marginTop is less than the maximum distance from the top OR the piece below is not a clear color
//           while ( marginTop < 570 ) {
//             marginTop += 30;
//           }

//           document.getElementById(`tetronimo-${currentPiece}`).style.marginTop = `${marginTop}px`;

//           currentPiece = nextPiece;
//           document.getElementById(`tetronimo-${currentPiece}`).style.marginTop = "0px";
//           document.getElementById(`tetronimo-${currentPiece}`).style.marginLeft = "90px";
//           document.getElementById(`tetronimo-${currentPiece}`).style.marginRight = "0px";

//           nextPiece = tetronimoes[Math.floor(Math.random()*tetronimoes.length)];
//           document.getElementById(`tetronimo-${currentPiece}-next`).classList.remove("show-tetronimo");
//           document.getElementById(`tetronimo-${currentPiece}-next`).classList.add("hide-tetronimo");
//           document.getElementById(`tetronimo-${nextPiece}-next`).classList.remove("hide-tetronimo");
//           document.getElementById(`tetronimo-${nextPiece}-next`).classList.add("show-tetronimo");
//         }
//         else {
//           // document.getElementById(`tetronimo-${currentPiece}`).style.marginTop = "540px";
//           // document.getElementById(`tetronimo-${currentPiece}`).style.bottom = "0px";
//           currentPieceMarginTop = parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginTop);
//           let marginTop = currentPieceMarginTop;
//           // while the marginTop is less than the maximum distance from the top OR the piece below is not a clear color
//           while ( marginTop < 540 ) {
//             marginTop += 30;
//           }

//           document.getElementById(`tetronimo-${currentPiece}`).style.marginTop = `${marginTop}px`;

//           currentPiece = nextPiece;
//           document.getElementById(`tetronimo-${currentPiece}`).style.marginTop = "0px";
//           document.getElementById(`tetronimo-${currentPiece}`).style.marginLeft = "90px";
//           document.getElementById(`tetronimo-${currentPiece}`).style.marginRight = "0px";

//           nextPiece = tetronimoes[Math.floor(Math.random()*tetronimoes.length)];
//           document.getElementById(`tetronimo-${currentPiece}-next`).classList.remove("show-tetronimo");
//           document.getElementById(`tetronimo-${currentPiece}-next`).classList.add("hide-tetronimo");
//           document.getElementById(`tetronimo-${nextPiece}-next`).classList.remove("hide-tetronimo");
//           document.getElementById(`tetronimo-${nextPiece}-next`).classList.add("show-tetronimo");
//         }
//       }
  
//       else if (event.which === 81) {
//          // q key
//         if (currentPiece === "I") {
//           document.getElementById(`tetronimo-${currentPiece}`).style.marginTop = "570px";
//         }
//         else {
//           document.getElementById(`tetronimo-${currentPiece}`).style.marginTop = "540px";
//         }
//       }
  
//       else if (event.which === 16) {
//         // shift key
//         console.log("shift key");
//       }
//     // }

//     else if (event.which === 81) {
//       // q key
//       console.log("game start");

//       // console.log(gameFreeze);
//       gameFreeze = false;
//       // console.log(gameFreeze);

//       document.getElementById("play-screen").classList.remove("show-screen");
//       document.getElementById("play-screen").classList.add("hide-screen");
//       document.getElementById("pause-screen").classList.remove("show-screen");
//       document.getElementById("pause-screen").classList.add("hide-screen");
      
//       frameLimiter += 1;
//       playGame();
//     }

//     else if (event.which === 69) {
//       // e key
//       console.log("game paused");
      
//       document.getElementById("pause-screen").classList.remove("hide-screen");
//       document.getElementById("pause-screen").classList.add("show-screen");
      
//       frameLimiter = 0;
//       pauseGame();
//     }

//     else if (event.which === 85) {
//       // u key
//       console.log("u key");
//     }

//     else if (event.which === 73) {
//       // i key
//       console.log("i key");
//     }
//   });
//   // ============================================================ GAME CONTROLS END ============================================================
// });
  

// // Button Logic
// document.addEventListener("DOMContentLoaded", () => {  
//   // ============================================================ DETAILS MODAL START ============================================================
//   const detailModal = document.getElementById("detail-modal");

//   document.getElementById("details").addEventListener("click", () => {
//     // Open About Modal
//     if (detailModal.classList.contains("hide-about-modal")) {
//       detailModal.classList.remove("hide-about-modal");
//       detailModal.classList.add("about-modal");
//     }
//   });

//   // Close About Modal
//   document.getElementById("about-modal-close").addEventListener("click", () => {
//     if (detailModal.classList.contains("about-modal")) {
//       detailModal.classList.remove("about-modal");
//       detailModal.classList.add("hide-about-modal");
//     }
//   });
//   // ============================================================ DETAILS MODAL END ============================================================


//   // ============================================================ START GAME START ============================================================
//   document.getElementById("start-game").addEventListener("click", () => {
//     console.log("game start");

//     document.getElementById("play-screen").classList.add("hide-screen");
//     document.getElementById("pause-screen").classList.remove("show-screen");
//     document.getElementById("pause-screen").classList.add("hide-screen");
//   });

//   document.getElementById("play-game").addEventListener("click", () => {
//     console.log("play game");

//     document.getElementById("play-screen").classList.remove("show-screen");
//     document.getElementById("play-screen").classList.add("hide-screen");
//   });

//   document.getElementById("game-paused").addEventListener("click", () => {
//     console.log("game paused");

//     document.getElementById("pause-screen").classList.remove("show-screen");
//     document.getElementById("pause-screen").classList.add("hide-screen");

//     document.getElementById("play-screen").classList.remove("show-screen");
//     document.getElementById("play-screen").classList.add("hide-screen");
//   });
//   // ============================================================ START GAME END ============================================================



//   // ============================================================ PAUSE GAME START ============================================================
//   document.getElementById("pause-game").addEventListener("click", () => {
//     document.getElementById("pause-screen").classList.remove("hide-screen");
//     document.getElementById("pause-screen").classList.add("show-screen");
//     console.log("pause game");
//   });
//   // ============================================================ PAUSE GAME END ============================================================



//   // ============================================================ MUTE MUSIC START ============================================================
//   document.getElementById("mute-music").addEventListener("click", () => {
//     alert("mute-music");
//   });
//   // ============================================================ MUTE MUSIC END ============================================================



//   // ============================================================ CHANGE MUSIC START ============================================================
//   document.getElementById("change-music").addEventListener("click", () => {
//     alert("change-music");
//   });
//   // ============================================================ CHANGE MUSIC END ============================================================



//   // ============================================================ GAME CONTROLS START ============================================================
//   // Generate random Tetris piece
//   const tetronimoes = ["I", "O", "T", "S", "Z", "J", "L"];
//   const moveablePieces = ["i", "o", "t", "s", "z", "j", "l"];
//   let currentPiece = tetronimoes[Math.floor(Math.random()*tetronimoes.length)];
//   let nextPiece = tetronimoes[Math.floor(Math.random()*tetronimoes.length)];

//   document.getElementById(`tetronimo-${nextPiece}-next`).classList.remove("hide-tetronimo");
//   document.getElementById(`tetronimo-${nextPiece}-next`).classList.add("show-tetronimo");
  
//   piece = currentPiece.toLowerCase();
//   const gameBoard = [
//     // E = empty space
//     // lower-case letter = moveable piece
//     // capital letter = non-moveable piece
//     ["E", "E", "E", piece, piece, piece, piece, "E", "E", "E"],
//     ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
//     ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
//     ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
//     ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
//     ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
//     ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
//     ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
//     ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
//     ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
//     ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
//     ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
//     ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
//     ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
//     ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
//     ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
//     ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
//     ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
//     ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
//     ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
//   ];

//   window.gameBoard = gameBoard;

//   function boardLogic(curr_Piece) {
//     // Renders pieces onto the board.
//     console.log(curr_Piece);
//     // console.log(curr_piece.toLowerCase());
//     // Loops through entire gameBoard array
//     document.getElementById("piece-board").innerHTML = "";
//     for (let y = 0; y < gameBoard.length; y++) {
//       for (let x = 0; x < gameBoard[y].length; x++) {
//         // if the grid square we're looking at is our moveable piece
//         // if(gameBoard[y][x] === curr_Piece.toLowerCase() || gameBoard[y][x] === curr_Piece) {
//         //   document.getElementById("piece-board").innerHTML += `<div class='piece-board-${curr_Piece}'></div>`;
//         // }
        
//         if (tetronimoes.includes(gameBoard[y][x]) || moveablePieces.includes(gameBoard[y][x])) {
//           document.getElementById("piece-board").innerHTML += `<div class='piece-board-${gameBoard[y][x].toUpperCase()}'></div>`;
//         }
        
//         // // if the grid square we're looking at is an empty space
//         else if (gameBoard[y][x] === "E") {
//           document.getElementById("piece-board").innerHTML +="<div class='piece-board-empty'></div>";
//         }
//       }
//     }
//   }

//   function stopPiece() {
//     // Stops piece from moving when the collision condition has been met.
//     for (let y = 0; y < gameBoard.length; y++) {
//       for (let x = 0; x < gameBoard[y].length; x++) {
//         if (moveablePieces.includes(gameBoard[y][x])) {
//           gameBoard[y][x] = gameBoard[y][x].toUpperCase();
//         }
//       }
//     }

//     // gameBoard[0] = ["E", "E", "E", piece, piece, piece, piece, "E", "E", "E"];
//     // gameBoard[1] = ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"];

//     currentPiece = nextPiece;
//     piece = currentPiece.toLowerCase();
//     nextPiece = tetronimoes[Math.floor(Math.random()*tetronimoes.length)];
    
//     console.log(`Current Piece: ${currentPiece}`);
//     console.log(`Next Piece: ${nextPiece}`);

//     if (currentPiece === "I") {
//       gameBoard[0] = ["E", "E", "E", piece, piece, piece, piece, "E", "E", "E"];
//       gameBoard[1] = ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"];
//     }

//     else if (currentPiece === "O") {
//       gameBoard[0] = ["E", "E", "E", piece, piece, "E", "E", "E", "E", "E"];
//       gameBoard[1] = ["E", "E", "E", piece, piece, "E", "E", "E", "E", "E"];
//     }

//     else if (currentPiece === "T") {
//       gameBoard[0] = ["E", "E", "E", "E", piece, "E", "E", "E", "E", "E"];
//       gameBoard[1] = ["E", "E", "E", piece, piece, piece, "E", "E", "E", "E"];
//     }

//     else if (currentPiece === "S") {
//       gameBoard[0] = ["E", "E", "E", "E", piece, piece, "E", "E", "E", "E"];
//       gameBoard[1] = ["E", "E", "E", piece, piece, "E", "E", "E", "E", "E"];
//     }

//     else if (currentPiece === "Z") {
//       gameBoard[0] = ["E", "E", "E", piece, piece, "E", "E", "E", "E", "E"];
//       gameBoard[1] = ["E", "E", "E", "E", piece, piece, "E", "E", "E", "E"];
//     }

//     else if (currentPiece === "J") {
//       gameBoard[0] = ["E", "E", "E", piece, "E", "E", "E", "E", "E", "E"];
//       gameBoard[1] = ["E", "E", "E", piece, piece, piece, "E", "E", "E", "E"];
//     }

//     else if (currentPiece === "L") {
//       gameBoard[0] = ["E", "E", "E", "E", "E", piece, "E", "E", "E", "E"];
//       gameBoard[1] = ["E", "E", "E", piece, piece, piece, "E", "E", "E", "E"];
//     }


//     document.getElementById(`tetronimo-${currentPiece}-next`).classList.remove("show-tetronimo");
//     document.getElementById(`tetronimo-${currentPiece}-next`).classList.add("hide-tetronimo");
//     document.getElementById(`tetronimo-${nextPiece}-next`).classList.remove("hide-tetronimo");
//     document.getElementById(`tetronimo-${nextPiece}-next`).classList.add("show-tetronimo");
//   }

//   // Logic for pieces hitting the ground
//   function collisionLogic() {
//     let moveable = true;
//     for (let y = 0; y < gameBoard.length; y++) {
//       for (let x = 0; x < gameBoard[y].length; x++) {
//         // last row logic
//         if (gameBoard[y][x] === currentPiece.toLowerCase()) {
//           if (y === gameBoard.length - 1 || tetronimoes.includes(gameBoard[y + 1][x])) {
//             moveable = false;
//             stopPiece();
//           }
//         }
//       }
//     }

//     if (moveable) {
//       // if there IS a collision...
//         // 1. Stop the piece from moving
//         // 2. Bring out the next piece
//       for (let y = gameBoard.length - 1; y >= 0; y--) {
//         for (let x = 0; x < gameBoard[y].length; x++) {
//           if (moveablePieces.includes(gameBoard[y][x])) {
//             gameBoard[y + 1][x] = gameBoard[y][x];
//             gameBoard[y][x] = "E";
//           }
//         }
//       }
//     }
//   }

//   function pieceFrameRate() {
//     window.setInterval(() => {
//       collisionLogic();
//       boardLogic(currentPiece);
//     }, 1200);
//   }

//   function instantFall() {
//     for (let y = gameBoard.length - 1; y >= 0; y--) {
//       for (let x = 0; x < gameBoard[y].length; x++) {
//         if (moveablePieces.includes(gameBoard[y][x])) {
//           let downShoot = y;

//           console.log(`location: ${gameBoard[downShoot][x]}`);
//           console.log(!tetronimoes.includes(gameBoard[downShoot + 1][x]));

//           while( downShoot !== gameBoard.length - 1 && !tetronimoes.includes(gameBoard[downShoot + 1][x]) ) {
//             downShoot += 1;
//           }
//           gameBoard[downShoot][x] = gameBoard[y][x];
//           gameBoard[y][x] = "E";
//         }
//       }
//     }
//   }

//   function moveLeft() {
//     for (let y = gameBoard.length - 1; y >= 0; y--) {
//       for (let x = 0; x < gameBoard[y].length; x++) {
//         if ( (moveablePieces.includes(gameBoard[y][x])) && (gameBoard[y][x - 1] === "E") ) {
//           gameBoard[y][x - 1] = gameBoard[y][x];
//           gameBoard[y][x] = "E";
//         }
//       }
//     }

//     for ( let y = gameBoard.length - 1; y >= 0; y-- ) {
      
//     }
//   }

//   function moveRight() {
//     for (let y = gameBoard.length - 1; y >= 0; y--) {
//       for (let x = gameBoard.length - 1; x >= 0; x--) {
//         if ( moveablePieces.includes(gameBoard[y][x]) && (gameBoard[y][x + 1] === "E") ) {
//           gameBoard[y][x + 1] = gameBoard[y][x];
//           gameBoard[y][x] = "E";
//         }
//       }
//     }
//   }

//   function moveDown() {
//     for (let y = gameBoard.length - 1; y >= 0; y--) {
//       for (let x = 0; x < gameBoard[y].length; x++) {
//         if ( moveablePieces.includes(gameBoard[y][x]) && (gameBoard[y + 1][x] === "E") ) {
//           gameBoard[y + 1][x] = gameBoard[y][x];
//           gameBoard[y][x] = "E";
//         }
//       }
//     }
//   }

//   function reversePiece() {
//     console.log("reverse piece");
//   }
  
//   // First, render the board
//   // Then, start incrementally moving the pieces down
//   boardLogic(currentPiece);
//   pieceFrameRate();

//   document.addEventListener("keydown", event => {
//     // ================ GAMEPLAY CONTROLS START ================
//     if (event.which === 87) {
//       // w key
//       reversePiece();
//     }

//     else if (event.which === 83) {
//       // s key
//       moveDown();
//     }

//     else if (event.which === 65) {
//       // a key
//       moveLeft();
//     }

//     else if (event.which === 68) {
//       // d key
//       moveRight();
//     }

//     else if (event.which === 32 && event.target === document.body) {
//       // spacebar key
//       console.log("spacebar");
      
//       event.preventDefault();

//       instantFall();
//     }

//     else if (event.which === 16) {
//       // shift key
//       console.log("shift key");
//     }
//     // ================ GAMEPLAY CONTROLS END ================

//     else if (event.which === 81) {
//       // q key
//       console.log("game start");

//       document.getElementById("play-screen").classList.remove("show-screen");
//       document.getElementById("play-screen").classList.add("hide-screen");
//       document.getElementById("pause-screen").classList.remove("show-screen");
//       document.getElementById("pause-screen").classList.add("hide-screen");
//     }

//     else if (event.which === 69) {
//       // e key
//       console.log("game paused");
      
//       document.getElementById("pause-screen").classList.remove("hide-screen");
//       document.getElementById("pause-screen").classList.add("show-screen");
//     }

//     else if (event.which === 85) {
//       // u key
//       console.log("u key");
//     }

//     else if (event.which === 73) {
//       // i key
//       console.log("i key");
//     }
//   });
//   // ============================================================ GAME CONTROLS END ============================================================
// });
  