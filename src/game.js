// Button Logic
document.addEventListener("DOMContentLoaded", () => {  
  // ============================================================ DETAILS MODAL START ============================================================
  const detailModal = document.getElementById("detail-modal");

  document.getElementById("details").addEventListener("click", () => {
    // Open About Modal
    if (detailModal.classList.contains("hide-about-modal")) {
      detailModal.classList.remove("hide-about-modal");
      detailModal.classList.add("about-modal");
    }
  });

  // Close About Modal
  document.getElementById("about-modal-close").addEventListener("click", () => {
    if (detailModal.classList.contains("about-modal")) {
      detailModal.classList.remove("about-modal");
      detailModal.classList.add("hide-about-modal");
    }
  });
  // ============================================================ DETAILS MODAL END ============================================================


  // ============================================================ START GAME START ============================================================
  document.getElementById("start-game").addEventListener("click", () => {
    console.log("game start");

    document.getElementById("play-screen").classList.add("hide-screen");
    document.getElementById("pause-screen").classList.remove("show-screen");
    document.getElementById("pause-screen").classList.add("hide-screen");
  });

  document.getElementById("play-game").addEventListener("click", () => {
    console.log("play game");

    document.getElementById("play-screen").classList.remove("show-screen");
    document.getElementById("play-screen").classList.add("hide-screen");
  });

  document.getElementById("game-paused").addEventListener("click", () => {
    console.log("game paused");

    document.getElementById("pause-screen").classList.remove("show-screen");
    document.getElementById("pause-screen").classList.add("hide-screen");

    document.getElementById("play-screen").classList.remove("show-screen");
    document.getElementById("play-screen").classList.add("hide-screen");
  });
  // ============================================================ START GAME END ============================================================



  // ============================================================ PAUSE GAME START ============================================================
  document.getElementById("pause-game").addEventListener("click", () => {
    document.getElementById("pause-screen").classList.remove("hide-screen");
    document.getElementById("pause-screen").classList.add("show-screen");
    console.log("pause game");
  });
  // ============================================================ PAUSE GAME END ============================================================



  // ============================================================ MUTE MUSIC START ============================================================
  document.getElementById("mute-music").addEventListener("click", () => {
    alert("mute-music");
  });
  // ============================================================ MUTE MUSIC END ============================================================



  // ============================================================ CHANGE MUSIC START ============================================================
  document.getElementById("change-music").addEventListener("click", () => {
    alert("change-music");
  });
  // ============================================================ CHANGE MUSIC END ============================================================



  // ============================================================ GAME CONTROLS START ============================================================
  // Generate random Tetris piece
  const tetronimoes = ["I", "O", "T", "S", "Z", "J", "L"];
  const moveablePieces = ["i", "o", "t", "s", "z", "j", "l"];
  let currentPiece = tetronimoes[Math.floor(Math.random()*tetronimoes.length)];
  let nextPiece = tetronimoes[Math.floor(Math.random()*tetronimoes.length)];

  document.getElementById(`tetronimo-${nextPiece}-next`).classList.remove("hide-tetronimo");
  document.getElementById(`tetronimo-${nextPiece}-next`).classList.add("show-tetronimo");
  
  piece = currentPiece.toLowerCase();
  const gameBoard = [
    // E = empty space
    // lower-case letter = moveable piece
    // capital letter = non-moveable piece
    ["E", "E", "E", piece, piece, piece, piece, "E", "E", "E"],
    ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
  ];

  window.gameBoard = gameBoard;

  function boardLogic(curr_Piece) {
    // Renders pieces onto the board.
    console.log(curr_Piece);
    // Loops through entire gameBoard array
    document.getElementById("piece-board").innerHTML = "";
    for (let y = 0; y < gameBoard.length; y++) {
      for (let x = 0; x < gameBoard[y].length; x++) {
        // if the grid square we're looking at is our moveable piece
        if(gameBoard[y][x] === curr_Piece.toLowerCase() || gameBoard[y][x] === curr_Piece) {
          document.getElementById("piece-board").innerHTML += `<div class='piece-board-${curr_Piece}'></div>`;
        }
        
        // if the grid square we're looking at is an empty space
        else if (gameBoard[y][x] === "E") {
          document.getElementById("piece-board").innerHTML +="<div class='piece-board-empty'></div>";
        }
      }
    }
  }

  function stopPiece() {
    // Stops piece from moving when the collision condition has been met.
    for (let y = 0; y < gameBoard.length; y++) {
      for (let x = 0; x < gameBoard[y].length; x++) {
        if (moveablePieces.includes(gameBoard[y][x])) {
          gameBoard[y][x] = gameBoard[y][x].toUpperCase();
        }
      }
    }

    gameBoard[0] = ["E", "E", "E", piece, piece, piece, piece, "E", "E", "E"];
    gameBoard[1] = ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"];

    currentPiece = nextPiece;
    piece = currentPiece.toLowerCase();
    nextPiece = tetronimoes[Math.floor(Math.random()*tetronimoes.length)];

    if (currentPiece === "I") {
      gameBoard[0] = ["E", "E", "E", piece, piece, piece, piece, "E", "E", "E"];
      gameBoard[1] = ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"];
    }

    else if (currentPiece === "O") {
      gameBoard[0] = ["E", "E", "E", piece, piece, "E", "E", "E", "E", "E"];
      gameBoard[1] = ["E", "E", "E", piece, piece, "E", "E", "E", "E", "E"];
    }

    else if (currentPiece === "T") {
      gameBoard[0] = ["E", "E", "E", "E", piece, "E", "E", "E", "E", "E"];
      gameBoard[1] = ["E", "E", "E", piece, piece, piece, "E", "E", "E", "E"];
    }

    else if (currentPiece === "S") {
      gameBoard[0] = ["E", "E", "E", "E", piece, piece, "E", "E", "E", "E"];
      gameBoard[1] = ["E", "E", "E", piece, piece, "E", "E", "E", "E", "E"];
    }

    else if (currentPiece === "Z") {
      gameBoard[0] = ["E", "E", "E", piece, piece, "E", "E", "E", "E", "E"];
      gameBoard[1] = ["E", "E", "E", "E", piece, piece, "E", "E", "E", "E"];
    }

    else if (currentPiece === "J") {
      gameBoard[0] = ["E", "E", "E", piece, "E", "E", "E", "E", "E", "E"];
      gameBoard[1] = ["E", "E", "E", piece, piece, piece, "E", "E", "E", "E"];
    }

    else if (currentPiece === "L") {
      gameBoard[0] = ["E", "E", "E", "E", "E", piece, "E", "E", "E", "E"];
      gameBoard[1] = ["E", "E", "E", piece, piece, piece, "E", "E", "E", "E"];
    }


    document.getElementById(`tetronimo-${currentPiece}-next`).classList.remove("show-tetronimo");
    document.getElementById(`tetronimo-${currentPiece}-next`).classList.add("hide-tetronimo");
    document.getElementById(`tetronimo-${nextPiece}-next`).classList.remove("hide-tetronimo");
    document.getElementById(`tetronimo-${nextPiece}-next`).classList.add("show-tetronimo");
  }

  // Logic for pieces hitting the ground
  function collisionLogic() {
    let moveable = true;
    for (let y = 0; y < gameBoard.length; y++) {
      for (let x = 0; x < gameBoard[y].length; x++) {
        // last row logic
        if (gameBoard[y][x] === currentPiece.toLowerCase()) {
          if (y === gameBoard.length - 1 || tetronimoes.includes(gameBoard[y + 1][x])) {
            moveable = false;
            stopPiece();
          }
        }
      }
    }

    if (moveable) {
      // if there IS a collision...
        // 1. Stop the piece from moving
        // 2. Bring out the next piece
      for (let y = gameBoard.length - 1; y >= 0; y--) {
        for (let x = 0; x < gameBoard[y].length; x++) {
          if (moveablePieces.includes(gameBoard[y][x])) {
            gameBoard[y + 1][x] = gameBoard[y][x];
            gameBoard[y][x] = "E";
          }
        }
      }
    }
  }

  function pieceFrameRate() {
    window.setInterval(() => {
      collisionLogic();
      boardLogic(currentPiece);
    }, 1200);
  }

  function generateNewPiece() {
    // Handles logic regarding the creation of a new piece once the conditions have been met in collisionLogic.
  }

  // First, render the board
  // Then, start incrementally moving the pieces down
  boardLogic(currentPiece);
  pieceFrameRate();

  document.addEventListener("keydown", event => {
    // ================ GAMEPLAY CONTROLS START ================
    if (event.which === 87) {
      // w key
    }

    else if (event.which === 83) {
      // s key
    }

    else if (event.which === 65) {
      // a key
    }

    else if (event.which === 68) {
      // d key
    }

    else if (event.which === 32 && event.target === document.body) {
      // spacebar key
      console.log("spacebar");
      
      event.preventDefault();
    }

    else if (event.which === 16) {
      // shift key
      console.log("shift key");
    }
    // ================ GAMEPLAY CONTROLS END ================

    else if (event.which === 81) {
      // q key
      console.log("game start");

      document.getElementById("play-screen").classList.remove("show-screen");
      document.getElementById("play-screen").classList.add("hide-screen");
      document.getElementById("pause-screen").classList.remove("show-screen");
      document.getElementById("pause-screen").classList.add("hide-screen");
    }

    else if (event.which === 69) {
      // e key
      console.log("game paused");
      
      document.getElementById("pause-screen").classList.remove("hide-screen");
      document.getElementById("pause-screen").classList.add("show-screen");
    }

    else if (event.which === 85) {
      // u key
      console.log("u key");
    }

    else if (event.which === 73) {
      // i key
      console.log("i key");
    }
  });
  // ============================================================ GAME CONTROLS END ============================================================
});
  