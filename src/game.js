Array.prototype.last = function() {
  return this[this.length - 1];
};

// Button Logic
document.addEventListener("DOMContentLoaded", () => {  
  // ============================================================ DETAILS MODAL START ============================================================
  const detailModal = document.getElementById("detail-modal-background");

  detailModal.addEventListener("click", () => {
    if (document.getElementById("detail-modal-information").classList.contains("show-about")) {
      document.getElementById("detail-modal-information").classList.remove("show-about");
      document.getElementById("detail-modal-information").classList.add("hide-about");
    }
  });

  document.getElementById("details").addEventListener("click", () => {
    // Open About Modal
    if (detailModal.classList.contains("hide-about-modal")) {
      document.getElementById("detail-modal").classList.remove("hide-detail-modal");
      document.getElementById("detail-modal").classList.add("show-detail-modal");
      
      detailModal.classList.remove("hide-about-modal");
      detailModal.classList.add("about-modal");

      document.getElementById("detail-modal-information").classList.remove("hide-about");
      document.getElementById("detail-modal-information").classList.add("show-about");

      document.getElementById("about-modal-close").classList.remove("about-modal-x-hide");
      document.getElementById("about-modal-close").classList.add("about-modal-x-show");
    }
  });

  // Close About Modal
  detailModal.addEventListener("click", () => {
    if (detailModal.classList.contains("about-modal")) {
      detailModal.classList.remove("about-modal");
      detailModal.classList.add("hide-about-modal");

      document.getElementById("detail-modal").classList.remove("show-detail-modal");
      document.getElementById("detail-modal").classList.add("hide-detail-modal");

      document.getElementById("detail-modal-information").classList.remove("show-about");
      document.getElementById("detail-modal-information").classList.add("hide-about");

      document.getElementById("about-modal-close").classList.remove("about-modal-x-show");
      document.getElementById("about-modal-close").classList.add("about-modal-x-hide");
    }
  });
  
  document.getElementById("about-modal-close").addEventListener("click", () => {
    if (detailModal.classList.contains("about-modal")) {
      detailModal.classList.remove("about-modal");
      detailModal.classList.add("hide-about-modal");

      document.getElementById("detail-modal").classList.remove("show-detail-modal");
      document.getElementById("detail-modal").classList.add("hide-detail-modal");

      document.getElementById("about-modal-close").classList.remove("about-modal-x-show");
      document.getElementById("about-modal-close").classList.add("about-modal-x-hide");

      document.getElementById("detail-modal-information").classList.remove("show-about");
      document.getElementById("detail-modal-information").classList.add("hide-about");
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
  //   [
  //     [0, 0, 0, 0],
  //     [1, 1, 1, 1],
  //     [0, 0, 0, 0],
  //     [0, 0, 0, 0],
  //   ],
  //   [
  //     [0, 1, 0, 0],
  //     [0, 1, 0, 0],
  //     [0, 1, 0, 0],
  //     [0, 1, 0, 0],
  //   ],
    [
      [1, 1, 1, 1],
    ],
    [
      [1],
      [1],
      [1],
      [1],
    ],
    "I",
  ];

  const O = [
    // [
    //   [0, 0, 0, 0],
    //   [0, 1, 1, 0],
    //   [0, 1, 1, 0],
    //   [0, 0, 0, 0],
    // ],
    [
      [1, 1],
      [1, 1],
    ],
    "O",
  ];
  
  const T = [
    // [
    //   [0, 1, 0],
    //   [1, 1, 1],
    //   [0, 0, 0],
    // ],
    // [
    //   [0, 1, 0],
    //   [0, 1, 1],
    //   [0, 1, 0],
    // ],
    // [
    //   [0, 0, 0],
    //   [1, 1, 1],
    //   [0, 1, 0],
    // ],
    // [
    //   [0, 1, 0],
    //   [1, 1, 0],
    //   [0, 1, 0],
    // ],
    [
      [0, 1, 0],
      [1, 1, 1],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 0],
    ],
    [
      [1, 1, 1],
      [0, 1, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [0, 1],
    ],
    "T",
  ];
  
  const S = [
    // [
    //   [0, 1, 1],
    //   [1, 1, 0],
    //   [0, 0, 0],
    // ],
    // [
    //   [0, 1, 0],
    //   [0, 1, 1],
    //   [0, 0, 1],
    // ],
    // [
    //   [0, 0, 0],
    //   [0, 1, 1],
    //   [1, 1, 0],
    // ],
    // [
    //   [1, 0, 0],
    //   [1, 1, 0],
    //   [0, 1, 0],
    // ],
    [
      [0, 1, 1],
      [1, 1, 0],
    ],
    [
      [1, 0],
      [1, 1],
      [0, 1],
    ],
    [
      [0, 1, 1],
      [1, 1, 0],
    ],
    [
      [1, 0],
      [1, 1],
      [0, 1],
    ],
    "S",
  ];
  
  const Z = [
    // [
    //   [1, 1, 0],
    //   [0, 1, 1],
    //   [0, 0, 0],
    // ],
    // [
    //   [0, 0, 1],
    //   [0, 1, 1],
    //   [0, 1, 0],
    // ],
    // [
    //   [0, 0, 0],
    //   [1, 1, 0],
    //   [0, 1, 1],
    // ],
    // [
    //   [0, 1, 0],
    //   [1, 1, 0],
    //   [1, 0, 0],
    // ],
    [
      [1, 1, 0],
      [0, 1, 1],
    ],
    [
      [0, 1],
      [1, 1],
      [1, 0],
    ],
    [
      [1, 1, 0],
      [0, 1, 1],
    ],
    [
      [0, 1],
      [1, 1],
      [1, 0],
    ],
    "Z",
  ];
  
  const J = [
    // [
    //   [1, 0, 0],
    //   [1, 1, 1],
    //   [0, 0, 0],
    // ],
    // [
    //   [0, 1, 1],
    //   [0, 1, 0],
    //   [0, 1, 0],
    // ],
    // [
    //   [0, 0, 0],
    //   [1, 1, 1],
    //   [0, 0, 1],
    // ],
    // [
    //   [0, 1, 0],
    //   [0, 1, 0],
    //   [1, 1, 0],
    // ],
    [
      [1, 0, 0],
      [1, 1, 1],
    ],
    [
      [1, 1],
      [1, 0],
      [1, 0],
    ],
    [
      [1, 1, 1],
      [0, 0, 1],
    ],
    [
      [0, 1],
      [0, 1],
      [1, 1],
    ],
    "J",
  ];
  
  const L = [
    // [
    //   [0, 0, 0],
    //   [0, 0, 1],
    //   [1, 1, 1],
    // ],
    // [
    //   [0, 1, 0],
    //   [0, 1, 0],
    //   [0, 1, 1],
    // ],
    // [
    //   [0, 0, 0],
    //   [1, 1, 1],
    //   [1, 0, 0],
    // ],
    // [
    //   [1, 1, 0],
    //   [0, 1, 0],
    //   [0, 1, 0],
    // ],
    [
      [0, 0, 1],
      [1, 1, 1],
    ],
    [
      [1, 0],
      [1, 0],
      [1, 1],
    ],
    [
      [1, 1, 1],
      [1, 0, 0],
    ],
    [
      [1, 1],
      [0, 1],
      [0, 1],
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

  // COLOR-PICKING LOGIC START
  function pickColor() {
    if ( currentPiece === I ) {
      return iColor;
    }
    else if ( currentPiece === O ) {
      return oColor;
    }
    else if ( currentPiece === T ) {
      return tColor;
    }
    else if ( currentPiece === S ) {
      return sColor;
    }
    else if ( currentPiece === Z ) {
      return zColor;
    }
    else if ( currentPiece === J ) {
      return jColor;
    }
    else if ( currentPiece === L ) {
      return lColor;
    }
  }
  // COLOR-PICKING LOGIC END
  
  const board = [];
  function generateEmptyBoardArray() {
    for ( let y = 0; y < 20; y++ ) {
      board[y] = [ ];
      for ( let x = 0; x < 10; x++ ) {
        board[y][x] = charcoal;
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
      context.fillStyle = blockColor;
      context.fillRect(x_pos, y_pos, 30, 30);
      context.strokeStyle = ash;
      context.strokeRect(x_pos, y_pos, 30, 30);
    }
  }

  function canvasDrawBoard() {
    for ( let y = 0; y < 20; y++ ) {
      for ( let x = 0; x < 10; x++ ) {
        generateGridBlock(x, y, board[y][x]);
      }
    }
  }

  // Class function for tetronimo pieces
  class CurrentPiece {
    constructor(currentPiece, color1, color2) {
      this.tetronimoes = tetronimoes;
      this.currPiece = currentPiece;
      // this.currPiece = this.tetronimoes[Math.floor(Math.random()*this.tetronimoes.length)];
      this.nextPiece = this.tetronimoes[Math.floor(Math.random()*this.tetronimoes.length)];
      this.currentPieceIndex = 0;
      this.currentPiece = this.currPiece[this.currentPieceIndex];
      this.currentPieceType = this.currPiece[this.currPiece.length - 1];
      this.createColor = color1;
      this.deleteColor = color2;
      this.x = 3;
      this.y = -1;
      this.verticalCollision = false;
      this.gameOver = false;
    }
    
    createPiece() {
      // console.log(this.currPiece);
      console.log(this.currentPieceType);
      for ( let y = this.currentPiece.length - 1; y >= 0; y-- ) {
        for ( let x = 0; x < this.currentPiece[y].length; x++ ) {
          if ( this.currentPiece[y][x] === 1 ) {
            // debugger;
            const y_val = this.currentPiece.length - 1;
            const lastIndex = this.currentPiece[y_val].length - 1;
            if ( this.x + lastIndex > 9 ) {
              while ( this.x + lastIndex > 9 ) {
                this.x -= 1;
              }
            }

            if ( this.y + y === 19 || board[this.y + y + 1][this.x + x] !== charcoal ) {
              for ( let y = this.currentPiece.length - 1; y >= 0; y-- ) {
                for ( let x = 0; x < this.currentPiece[y].length; x++ ) {
                  if ( this.currentPiece[y][x] === 1 ) {
                    board[this.y + y][this.x + x] = this.createColor;
                  }
                }
              }
              // console.log(board);
              
              this.verticalCollision = true;
              // console.log(context.getImageData(this.x + lastIndex, this.y + y, 30, 30).data.slice(0, 3));
              // console.log(this.y + y);
              // console.log(this.x + lastIndex);
              // console.log(board[this.y + y][this.x + lastIndex]);
            }
            generateGridBlock(this.x + x, this.y + y, this.createColor);
          }
        }
      }
    }

    deletePiece() {
      for ( let y = this.currentPiece.length - 1; y >= 0; y-- ) {
        for ( let x = 0; x < this.currentPiece[y].length; x++ ) {
          if ( this.currentPiece[y][x] === 1 ) {

            const y_val = this.currentPiece.length - 1;
            const lastIndex = this.currentPiece[y_val].length - 1;
            if ( this.x + lastIndex > 9 ) {
              while ( this.x + lastIndex > 9 ) {
                if ( this.currentPiece[y][x] === 1 ) {
                  this.x -= 1;
                }
              }
            }

            if ( this.y + y === 19 || board[this.y + y + 1][this.x + x] !== charcoal ) {
              for ( let y = this.currentPiece.length - 1; y >= 0; y-- ) {
                for ( let x = 0; x < this.currentPiece[y].length; x++ ) {
                  if ( this.currentPiece[y][x] === 1 ) {
                    board[this.y + y][this.x + x] = this.createColor;
                  }
                }
              }
              this.verticalCollision = true;
              // board[this.y + y][this.x + x] = this.createColor;
            }
            generateGridBlock(this.x + x, this.y + y, this.deleteColor);
          }
        }
      }
    }

    moveLeft() {
      this.deletePiece();



      if ( this.x - 1 >= 0 && this.verticalCollision === false ) {
        this.x -= 1;
      }

      this.createPiece();
    }

    moveRight() {
      this.deletePiece();

      const y = this.currentPiece.length - 1;
      const lastIndex = this.currentPiece[y].length - 1;

      if ( this.x + lastIndex + 1 < 10 && this.verticalCollision === false ) {
        this.x += 1;
      }

      this.createPiece();
    }

    moveDown() {
      this.deletePiece();
      if ( this.verticalCollision === false ) {
        this.y += 1;
      }

      this.createPiece();
    }

    reversePiece() {
      // if ( this.x - 1 >= 0 && (this.x + lastIndex + 1 < 10) && this.verticalCollision === false ) {
      if ( this.verticalCollision === false ) {
        // debugger;

        this.deletePiece();

        if (this.currentPieceType === "I") {
          if ( this.currentPieceIndex === 1 ) {
            this.currentPieceIndex = 0;
            this.currentPiece = this.currPiece[this.currentPieceIndex];
          }
          else {
            this.currentPieceIndex += 1;
            this.currentPiece = this.currPiece[this.currentPieceIndex];
          }
        }

        else if (this.currentPieceType !== "O") {
          if ( this.currentPieceIndex === 3 ) {
            this.currentPieceIndex = 0;
            this.currentPiece = this.currPiece[this.currentPieceIndex];
          }
          else {
            this.currentPieceIndex += 1;
            this.currentPiece = this.currPiece[this.currentPieceIndex];
          }
        }

        this.createPiece();
      }
    }

    // frameRate() {
    //   if ( this.verticalCollision === false ) {
    //     setInterval(() => {
    //       if ( this.verticalCollision === false ) {
    //         console.log("no collision");
    //         this.moveDown();
    //       }

    //       else {
    //         // Logic for creating a new piece
    //         console.log("yes collision");
    //         this.currPiece = this.nextPiece;
    //         this.nextPiece = this.tetronimoes[Math.floor(Math.random()*this.tetronimoes.length)];
    //         this.currentPieceIndex = 0;
    //         this.currentPiece = this.currPiece[this.currentPieceIndex];
    //         this.x = 3;
    //         this.y = 0;
    //         this.verticalCollision = false;
    //         console.log(this.currPiece);
    //         console.log(this.nextPiece);
    //         console.log(this.currentPieceIndex);
    //       }
    //     }, 800);
    //   }
    // }

    freeze() {
      // freezes the current piece
        // doesn't let the current piece move left, right, down, or rotate
      // generates new piece afterwards
    }
  }
  
  generateEmptyBoardArray();
  console.log(board);
  console.log(currentPiece);
  canvasDrawBoard();

  // const piece = new CurrentPiece(tetronimoes, pickColor(), charcoal);
  const piece = new CurrentPiece(currentPiece, pickColor(), charcoal);
  piece.createPiece();
  // piece.frameRate();
  if ( piece.verticalCollision === false ) {
    setInterval(() => {
      if ( piece.verticalCollision === false ) {
        console.log("no collision");
        piece.moveDown();
      }

      else {
        // Logic for creating a new piece
        console.log("yes collision");
        currentPiece = nextPiece;
        nextPiece = piece.tetronimoes[Math.floor(Math.random()*piece.tetronimoes.length)];
        piece.currPiece = currentPiece;
        piece.currentPieceIndex = 0;
        piece.currentPiece = piece.currPiece[piece.currentPieceIndex];
        piece.currentPieceType = piece.currPiece[piece.currPiece.length - 1];
        piece.createColor = pickColor();
        piece.x = 3;
        piece.y = -1;
        piece.verticalCollision = false;
        console.log(currentPiece);
        console.log(nextPiece);
      }
    }, 800);
  }
 
  
  // ============================================================ BOARD GENERATION END ============================================================

  // ============================================================ GAME CONTROLS START ============================================================

  // document.getElementById(`tetronimo-${nextPiece.last()}-next`).classList.remove("hide-tetronimo");
  // document.getElementById(`tetronimo-${nextPiece.last()}-next`).classList.add("show-tetronimo");
  document.getElementById(`tetronimo-${piece.nextPiece.last()}-next`).classList.remove("hide-tetronimo");
  document.getElementById(`tetronimo-${piece.nextPiece.last()}-next`).classList.add("show-tetronimo");
  
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

      while ( piece.verticalCollision === false ) {
        piece.moveDown();
      }
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
  