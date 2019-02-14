Array.prototype.last = function() {
  return this[this.length - 1];
};

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

  // ============================================================ BOARD GENERATION START ============================================================
   // PIECE ARRAYS START
   const I = [
    [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ],
    "I",
  ];

  const O = [
    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],
    // [
    //   [1, 1],
    //   [1, 1],
    // ],
    "O",
  ];
  
  const T = [
    [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    [
      [0, 1, 0],
      [0, 1, 1],
      [0, 1, 0],
    ],
    [
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0],
    ],
    [
      [0, 1, 0],
      [1, 1, 0],
      [0, 1, 0],
    ],
    "T",
  ];
  
  const S = [
    [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
    [
      [0, 1, 0],
      [0, 1, 1],
      [0, 0, 1],
    ],
    [
      [0, 0, 0],
      [0, 1, 1],
      [1, 1, 0],
    ],
    [
      [1, 0, 0],
      [1, 1, 0],
      [0, 1, 0],
    ],
    "S",
  ];
  
  const Z = [
    [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    [
      [0, 0, 1],
      [0, 1, 1],
      [0, 1, 0],
    ],
    [
      [0, 0, 0],
      [1, 1, 0],
      [0, 1, 1],
    ],
    [
      [0, 1, 0],
      [1, 1, 0],
      [1, 0, 0],
    ],
    "Z",
  ];
  
  const J = [
    [
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    [
      [0, 1, 1],
      [0, 1, 0],
      [0, 1, 0],
    ],
    [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 1],
    ],
    [
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 0],
    ],
    "J",
  ];
  
  const L = [
    [
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0],
    ],
    [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 1],
    ],
    [
      [0, 0, 0],
      [1, 1, 1],
      [1, 0, 0],
    ],
    [
      [1, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ],
    "L",
  ];
  // PIECE ARRAYS END
  
  // Generate random Tetris piece
    // const tetronimoes = ["I", "O", "T", "S", "Z", "J", "L"];
  const tetronimoes = [I, O, T, S, Z, J, L];
  let currentPiece = tetronimoes[Math.floor(Math.random()*tetronimoes.length)];
  let nextPiece = tetronimoes[Math.floor(Math.random()*tetronimoes.length)];
  
  const charcoal = "rgb(54, 54, 54)";
  const ash = "rgb(92, 92, 92)"; 
  const iColor = "rgb(145, 145, 245)";
  const oColor = "rgb(255, 255, 149)";
  const tColor = "rgb(204, 129, 204)";
  const sColor = "rgb(179, 221, 179)";
  const zColor = "rgb(211, 123, 123)";
  const jColor = "rgb(73, 73, 172)";
  const lColor = "rgb(255, 205, 113)";
  
  const board = [];
  function generateEmptyBoardArray() {
    for ( let y = 0; y < 20; y++ ) {
      board[y] = [ ];
      for ( let x = 0; x < 10; x++ ) {
        board[y][x] = "E";
      }
    }
  } 

  // CANVAS MANIPULATION START
  const canvasBoard = document.getElementById("tetris-canvas");
  const context = canvasBoard.getContext("2d");
  // CANVAS MANIPULATION END

  function generateGridBlock(x, y, blockColor) {
    if (x < 10 && y < 20) {
      x_pos = x * 30;
      y_pos = y * 30;
      context.fillRect(x_pos, y_pos, 30, 30);
      // debugger;
      context.fillStyle = blockColor;
      context.strokeStyle = ash;
      context.strokeRect(x_pos, y_pos, 30, 30);
    }
    else {
      alert("Out of bounds!");
    }
  }

  
  function canvasDrawBoard() {
    for ( let y = 0; y < 20; y++ ) {
      for ( let x = 0; x < 10; x++ ) {
        generateGridBlock(x, y, charcoal);
      }
    }
  }

  // Class function for tetronimo pieces
  class CurrentPiece {
    constructor(currPiece, color1, color2) {
      this.currentPiece = currPiece[0];
      this.currentPieceType = currPiece.last();
      this.createColor = color1;
      this.deleteColor = color2;
      this.x = 3;
      this.y = 6;
    }
    
    createPiece() {
      for ( let y = 0; y < this.currentPiece.length - 1; y++ ) {
        for ( let x = 0; x < this.currentPiece[y].length; x++ ) {
          if ( this.currentPiece[y][x] === 1 ) {
            generateGridBlock(this.x + x, this.y + y, this.createColor);
          }
        }
      }
    }

    deletePiece() {
      for ( let y = 0; y < this.currentPiece.length - 1; y++ ) {
        for ( let x = 0; x < this.currentPiece[y].length; x++ ) {
          if ( this.currentPiece[y][x] === 1 ) {
            generateGridBlock(this.x + x, this.y + y, this.deleteColor);
          }
        }
      }
    }

    // detectCollision() {

    // }

    moveLeft(x, y, currentPiece) {
      this.deletePiece();
      
      if (this.currentPieceType === "O") {
        if (this.x - 1 >= -1) {
          this.x -= 1;
        }
      }

      else {
        if (this.x - 1 >= 0) {
          this.x -= 1;
        }
      }

      this.createPiece();
    }

    moveRight(x, y, currentPiece) {
      this.deletePiece();

      if (this.currentPieceType === "I") {
        if (this.x + 1 < 7) {
          this.x += 1;
        }
      }

      else if (this.currentPieceType === "O") {
        if (this.x + 1 < 8) {
          this.x += 1;
        }
      }

      else {
        if (this.x + 1 < 8) {
          this.x += 1;
        }
      }

      this.createPiece();
    }

    moveDown(x, y, currentPiece) {
      this.deletePiece();

      if (this.currentPieceType === "I") {
        if (this.y + 1 < 19) {
          this.y += 1;
        }
      }
      
      else if (this.currentPieceType === "O") {
        if (this.y + 1 < 18) {
          this.y += 1;
        }
      }
      
      else {
        if (this.y + 1 < 19) {
          this.y += 1;
        }
      }
      

      this.createPiece();
    }

    reversePiece(x, y, currentPiece) {
      this.deletePiece();

      if (this.currentPieceType === "I") {
        if (this.y - 1 >= -1) {
          this.y -= 1;
        }
      }

      else if (this.currentPieceType === "O") {
        if (this.y - 1 > 1) {
          this.y -= 1;
        }
      }

      else {
        if (this.y - 1 >= 0) {
          this.y -= 1;
        }
      }

      this.createPiece();
    }

    frameRate() {

    }
  }
  
  generateEmptyBoardArray();
  console.log(board);
  console.log(currentPiece);
  canvasDrawBoard();
  // generateGridBlock(0, 0, oColor);
  // generateGridBlock(3, 2, oColor);
  // generateGridBlock(3, 3, oColor);
  // generateGridBlock(4, 2, oColor);
  // generateGridBlock(4, 3, oColor);
  const piece = new CurrentPiece(currentPiece, iColor, charcoal);
  piece.createPiece();
  // ============================================================ BOARD GENERATION END ============================================================

  // ============================================================ GAME CONTROLS START ============================================================

  document.getElementById(`tetronimo-${nextPiece.last()}-next`).classList.remove("hide-tetronimo");
  document.getElementById(`tetronimo-${nextPiece.last()}-next`).classList.add("show-tetronimo");
  
  // document.getElementById(`tetronimo-${currentPiece}-next`).classList.remove("show-tetronimo");
  // document.getElementById(`tetronimo-${currentPiece}-next`).classList.add("hide-tetronimo");
  // document.getElementById(`tetronimo-${nextPiece}-next`).classList.remove("hide-tetronimo");
  // document.getElementById(`tetronimo-${nextPiece}-next`).classList.add("show-tetronimo");

  document.addEventListener("keydown", event => {
    // ================ GAMEPLAY CONTROLS START ================
    if (event.which === 87) {
      // w key
      piece.reversePiece();
    }

    else if (event.which === 83) {
      // s key
      piece.moveDown();
    }

    else if (event.which === 65) {
      // a key
      piece.moveLeft();
    }

    else if (event.which === 68) {
      // d key
      piece.moveRight();
    }

    else if (event.which === 32 && event.target === document.body) {
      // spacebar key
      console.log("spacebar");
      
      event.preventDefault();

      instantFall();
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
  