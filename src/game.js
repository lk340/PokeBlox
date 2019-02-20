Array.prototype.last = function() {
  return this[this.length - 1];
};

Array.prototype.countColors = function(color) {
  let count = 0;
  this.forEach(element => {
    if (element === color) {
      count++;
    }
  });

  if (count === this.length) {
    return true;
  }
  return false;
};

let pauseSong = false;
let clearSound = false;

// Button Logic
document.addEventListener("DOMContentLoaded", () => {  
  // ============================================================ DETAILS MODAL START ============================================================
  const detailModal = document.getElementById("detail-modal-background");

  detailModal.addEventListener("click", () => {
    if (document.getElementById("detail-modal-information").classList.contains("show-about")) {
      document.getElementById("detail-modal-information").classList.remove("show-about");
      document.getElementById("detail-modal-information").classList.add("hide-about");
    }

    // pauseGame();
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

    // pauseGame();
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

    // startGame();
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

    // startGame();
  });
  // ============================================================ DETAILS MODAL END ============================================================

  // ============================================================ DIRECTIONS MODAL START ============================================================
  document.getElementById("guide-modal-background").addEventListener("click", () => {
    document.getElementById("guide-modal").classList.remove("show-guide");
    document.getElementById("guide-modal").classList.add("hide-guide");

    document.getElementById("guide-modal-information").classList.remove("show-guide-modal");
    document.getElementById("guide-modal-information").classList.add("hide-guide-modal");

    document.getElementById("guide-modal-background").classList.remove("show-guide-background");
    document.getElementById("guide-modal-background").classList.add("hide-guide-background");

    document.getElementById("guide-modal-info").classList.remove("show-guide-modal-info");
    document.getElementById("guide-modal-info").classList.add("hide-guide-modal-info");

    // startGame();
  });

  document.getElementById("close-guide-modal").addEventListener("click", () => {
    document.getElementById("guide-modal").classList.remove("show-guide");
    document.getElementById("guide-modal").classList.add("hide-guide");

    document.getElementById("guide-modal-information").classList.remove("show-guide-modal");
    document.getElementById("guide-modal-information").classList.add("hide-guide-modal");

    document.getElementById("guide-modal-background").classList.remove("show-guide-background");
    document.getElementById("guide-modal-background").classList.add("hide-guide-background");

    document.getElementById("guide-modal-info").classList.remove("show-guide-modal-info");
    document.getElementById("guide-modal-info").classList.add("hide-guide-modal-info");

    // startGame();
  });

  document.getElementById("guide").addEventListener("click", () => {
    document.getElementById("guide-modal").classList.remove("hide-guide");
    document.getElementById("guide-modal").classList.add("show-guide");

    document.getElementById("guide-modal-information").classList.remove("hide-guide-modal");
    document.getElementById("guide-modal-information").classList.add("show-guide-modal");

    document.getElementById("guide-modal-background").classList.remove("hide-guide-background");
    document.getElementById("guide-modal-background").classList.add("show-guide-background");

    document.getElementById("guide-modal-info").classList.remove("hide-guide-modal-info");
    document.getElementById("guide-modal-info").classList.add("show-guide-modal-info");

    // pauseGame();
  });
  // ============================================================ DIRECTIONS MODAL END ============================================================

  // ============================================================ START GAME START ============================================================
  document.getElementById("start-game").addEventListener("click", () => {
    document.getElementById("play-screen").classList.add("hide-screen");
    document.getElementById("pause-screen").classList.remove("show-screen");
    document.getElementById("pause-screen").classList.add("hide-screen");

    startGame();
  });

  document.getElementById("play-game").addEventListener("click", () => {
    document.getElementById("play-screen").classList.remove("show-screen");
    document.getElementById("play-screen").classList.add("hide-screen");

    startGame();
  });

  document.getElementById("game-paused").addEventListener("click", () => {
    document.getElementById("pause-screen").classList.remove("show-screen");
    document.getElementById("pause-screen").classList.add("hide-screen");

    document.getElementById("play-screen").classList.remove("show-screen");
    document.getElementById("play-screen").classList.add("hide-screen");

    startGame();
  });
  // ============================================================ START GAME END ============================================================



  // ============================================================ PAUSE GAME START ============================================================
  document.getElementById("pause-game").addEventListener("click", () => {
    document.getElementById("pause-screen").classList.remove("hide-screen");
    document.getElementById("pause-screen").classList.add("show-screen");

    pauseGame();
  });
  // ============================================================ PAUSE GAME END ============================================================

  // ============================================================ REPLAY GAME START ============================================================
  document.getElementById("game-over").addEventListener("click", () => {
    document.getElementById("game-over-screen").classList.remove("game-over-screen");
    document.getElementById("game-over-screen").classList.add("game-over-screen-close");

    restartGame();
  });
  // ============================================================ REPLAY GAME END ============================================================

  // ============================================================ CHANGE MUSIC START ============================================================
  document.getElementById("change-music").addEventListener("click", () => {
    const audio2 = document.getElementById("audio").classList[0];
    
    if (audio2.includes("audio-hidden")) {
      document.getElementById("audio").classList.remove("audio-hidden");
      document.getElementById("audio").classList.add("audio");
    }
    else {
      document.getElementById("audio").classList.remove("audio");
      document.getElementById("audio").classList.add("audio-hidden");
    }
  });
  // ============================================================ CHANGE MUSIC END ============================================================

  // ============================================================ MUSIC PLAYER START ============================================================
  document.getElementById("current-song").addEventListener("click", () => {
    const audio = document.getElementById("audio").classList[0];
    
    if (audio.includes("audio-hidden")) {
      document.getElementById("audio").classList.remove("audio-hidden");
      document.getElementById("audio").classList.add("audio");
    }
    else {
      document.getElementById("audio").classList.remove("audio");
      document.getElementById("audio").classList.add("audio-hidden");
    }
  });
  // ============================================================ MUSIC PLAYER END ============================================================

  // ============================================================ AUDIO LOGIC START ============================================================
  let currentSong = document.getElementById("005");
  currentSong.play();
  currentSong.loop = true;

  document.getElementById("tears-of-life").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("001");
    currentSong.play();
    currentSong.loop = true;
    document.getElementById("now-playing").innerHTML = "Mewtwo - Tears of Life";

    document.getElementById("song-title").classList.remove(document.getElementById("song-title").classList[0]);
    document.getElementById("song-title").classList.add("song-title-background-tears-of-life");
  });

  document.getElementById("johto-opening").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("002");
    currentSong.play();
    currentSong.loop = true;
    document.getElementById("now-playing").innerHTML = "Pokémon Johto Opening";

    document.getElementById("song-title").classList.remove(document.getElementById("song-title").classList[0]);
    document.getElementById("song-title").classList.add("song-title-background-johto-opening");
  });

  document.getElementById("viridian-city").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("003");
    currentSong.play();
    currentSong.loop = true;
    document.getElementById("now-playing").innerHTML = "RBY Viridian City";

    document.getElementById("song-title").classList.remove(document.getElementById("song-title").classList[0]);
    document.getElementById("song-title").classList.add("song-title-background-viridian-city");
  });

  document.getElementById("viridian-forest").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("004");
    currentSong.play();
    currentSong.loop = true;
    document.getElementById("now-playing").innerHTML = "RBY Viridian Forest";

    document.getElementById("song-title").classList.remove(document.getElementById("song-title").classList[0]);
    document.getElementById("song-title").classList.add("song-title-background-viridian-forest");
  });

  document.getElementById("team-rocket").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("005");
    currentSong.play();
    currentSong.loop = true;
    document.getElementById("now-playing").innerHTML = "Battle! Team Rocket";

    document.getElementById("song-title").classList.remove(document.getElementById("song-title").classList[0]);
    document.getElementById("song-title").classList.add("song-title-background-team-rocket");
  });

  document.getElementById("gsc-champion").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("006");
    currentSong.play();
    currentSong.loop = true;
    document.getElementById("now-playing").innerHTML = "GSC Champion";

    document.getElementById("song-title").classList.remove(document.getElementById("song-title").classList[0]);
    document.getElementById("song-title").classList.add("song-title-background-gsc-champion");
  });

  document.getElementById("route-47").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("007");
    currentSong.play();
    currentSong.loop = true;
    document.getElementById("now-playing").innerHTML = "GSC Route 47";

    document.getElementById("song-title").classList.remove(document.getElementById("song-title").classList[0]);
    document.getElementById("song-title").classList.add("song-title-background-route-47");
  });

  document.getElementById("dpp-champion").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("008");
    currentSong.play();
    currentSong.loop = true;
    document.getElementById("now-playing").innerHTML = "DPP Champion";

    document.getElementById("song-title").classList.remove(document.getElementById("song-title").classList[0]);
    document.getElementById("song-title").classList.add("song-title-background-dpp-champion");
  });

  document.getElementById("n-theme").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("009");
    currentSong.play();
    currentSong.loop = true;
    document.getElementById("now-playing").innerHTML = "BW N's Theme";

    document.getElementById("song-title").classList.remove(document.getElementById("song-title").classList[0]);
    document.getElementById("song-title").classList.add("song-title-background-n-theme");
  });

  document.getElementById("snowbelle-city").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("010");
    currentSong.play();
    currentSong.loop = true;
    document.getElementById("now-playing").innerHTML = "XY Snowbelle City";

    document.getElementById("song-title").classList.remove(document.getElementById("song-title").classList[0]);
    document.getElementById("song-title").classList.add("song-title-background-snowbelle-city");
  });

  document.getElementById("usum-theme").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("011");
    currentSong.play();
    currentSong.loop = true;
    document.getElementById("now-playing").innerHTML = "USUM Theme";

    document.getElementById("song-title").classList.remove(document.getElementById("song-title").classList[0]);
    document.getElementById("song-title").classList.add("song-title-background-usum-theme");
  });

  document.getElementById("tetris-original").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("012");
    currentSong.play();
    currentSong.loop = true;
    document.getElementById("now-playing").innerHTML = "Tetris Original Theme";

    document.getElementById("song-title").classList.remove(document.getElementById("song-title").classList[0]);
    document.getElementById("song-title").classList.add("song-title-background-tetris-original");
  });

  document.getElementById("tetris99").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("013");
    currentSong.play();
    currentSong.loop = true;
    document.getElementById("now-playing").innerHTML = "Tetris99 Theme";

    document.getElementById("song-title").classList.remove(document.getElementById("song-title").classList[0]);
    document.getElementById("song-title").classList.add("song-title-background-tetris99");
  });
  // ============================================================ AUDIO LOGIC END ============================================================


  // ============================================================ MUTE MUSIC START ============================================================
  document.getElementById("mute-music").addEventListener("click", () => {
    if (pauseSong === false) {
      pauseSong = true;
      currentSong.pause();
    }
    else {
      pauseSong = false;
      currentSong.play();
    }
  });
  // ============================================================ MUTE MUSIC END ============================================================

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
  const tetronimoes = [I, O, T, S, Z, J, L, I, O, T, S, Z, J, L, I, O, T, S, Z, J, L, I, O, T, S, Z, J, L];
  // const tetronimoes = [I];
  let currentPiece = tetronimoes[Math.floor(Math.random()*tetronimoes.length)];
  let nextPiece = tetronimoes[Math.floor(Math.random()*tetronimoes.length)];
  let savedPiece = null;
  let freeze = false;
  let rowsDeleted = 0;
  let points = 0;
  
  const charcoal = "rgb(54, 54, 54)";
  const ash = "rgb(92, 92, 92)"; 
  const iColor = "rgb(145, 145, 245)";
  const oColor = "rgb(255, 255, 149)";
  const tColor = "rgb(204, 129, 204)";
  const sColor = "rgb(179, 221, 179)";
  const zColor = "rgb(211, 123, 123)";
  const jColor = "rgb(73, 73, 172)";
  const lColor = "rgb(255, 205, 113)";

  let pieceCounter = 0;

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

  const emptyRow = [charcoal, charcoal, charcoal, charcoal, charcoal, charcoal, charcoal, charcoal, charcoal, charcoal];
  
  let board = [];
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
    for ( let y = 0; y < board.length; y++ ) {
      for ( let x = 0; x < board[y].length; x++ ) {
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
      // this.y = -2;
      this.y = this.currentPieceType === "I" ? -1 : -2;
      this.verticalCollision = false;
      this.gameOver = false;
      this.fallDown = true;
    }
    
    createPiece() {
      if (this.y === 0) {
        board[0].forEach(grid => {
          if ( grid !== charcoal ) {
            this.gameOver = true;
          }
        });
        }
        if (this.gameOver === false) {
          for ( let y = this.currentPiece.length - 1; y >= 0; y-- ) {
            for ( let x = 0; x < this.currentPiece[y].length; x++ ) {
              if ( this.currentPiece[y][x] === 1 ) {
                const y_val = this.currentPiece.length - 1;
                const lastIndex = this.currentPiece[y_val].length - 1;
                if ( this.x + lastIndex > 9 ) {
                  while ( this.x + lastIndex > 9 ) {
                    this.x -= 1;
                  }
                }
    
                if (this.y > -1) {
                  if ( this.y + y === 19 || board[this.y + y + 1][this.x + x] !== charcoal ) {
                    for ( let y = this.currentPiece.length - 1; y >= 0; y-- ) {
                      for ( let x = 0; x < this.currentPiece[y].length; x++ ) {
                        if ( this.currentPiece[y][x] === 1 ) {
                          board[this.y + y][this.x + x] = this.createColor;
                        }
                      }
                    }
                    
                    // this.fallDown = false;
                    // setTimeout(() => {
                    //   this.fallDown = true;
                      this.verticalCollision = true;
                    // }, 500);
                  }
                }
    
                generateGridBlock(this.x + x, this.y + y, this.createColor);
              }
            }
          }
        }
      // }
    }

    deletePiece() {
      
      if (this.y === 0) {
        board[0].forEach(grid => {
          if ( grid !== charcoal ) {
            this.gameOver = true;
          }
        });
        }

        if (this.gameOver === false) {
          for ( let y = this.currentPiece.length - 1; y >= 0; y-- ) {
            for ( let x = 0; x < this.currentPiece[y].length; x++ ) {
              if ( this.currentPiece[y][x] === 1 ) {
                const y_val = this.currentPiece.length - 1;
                const lastIndex = this.currentPiece[y_val].length - 1;
                if ( this.x + lastIndex > 9 ) {
                  while ( this.x + lastIndex > 9 ) {
                    this.x -= 1;
                  }
                }
    
                if (this.y > -1) {
                  if ( this.y + y === 19 || board[this.y + y + 1][this.x + x] !== charcoal ) {
                    for ( let y = this.currentPiece.length - 1; y >= 0; y-- ) {
                      for ( let x = 0; x < this.currentPiece[y].length; x++ ) {
                        if ( this.currentPiece[y][x] === 1 ) {
                          board[this.y + y][this.x + x] = this.deleteColor;
                        }
                      }
                    }
                    
                    // this.fallDown = false;
                    // setTimeout(() => {
                    //   this.fallDown = true;
                    //   this.verticalCollision = true;
                    // }, 3000);

                    this.verticalCollision = true;
                  }
                }
    
                generateGridBlock(this.x + x, this.y + y, this.deleteColor);
              }
            }
          }
        }
    }

    moveLeft() {
      this.deletePiece();
      let shift = 0;
      let counter = 0;
      
      for ( let y = this.currentPiece.length - 1; y >= 0; y-- ) {
        if ( this.currentPiece[y][0] === 1 && this.y >= 0 ) {
          if ( board[this.y + y][this.x - 1] === charcoal ) {
            shift = 1;
          }
          else {
            shift = 0;
          }
        }
      }
      
      if ( this.x - 1 >= 0 && this.verticalCollision === false ) {
        this.x -= shift;
        document.getElementById("soundeffect06").play();
      }

      this.createPiece();
    }

    moveRight() {
      this.deletePiece();

      const y_offset = this.currentPiece.length - 1;
      const lastIndex = this.currentPiece[y_offset].length - 1;

      let shift = 0;

      for ( let y = this.currentPiece.length - 1; y >= 0; y-- ) {
        if ( this.currentPiece[y][this.currentPiece[y].length - 1] === 1 && this.y >= 0 ) {
          if ( board[this.y + y][this.x + this.currentPiece[y].length - 1 + 1] === charcoal ) {
            shift = 1;
          }
          else {
            shift = 0;
          }
        }
      }

      if ( this.x + lastIndex + 1 < 10 && this.verticalCollision === false ) {
        this.x += shift;
        document.getElementById("soundeffect06").play();
      }

      this.createPiece();
    }

    moveDown() {
      if (this.fallDown === true) {
        this.deletePiece();
        if ( this.verticalCollision === false ) {
          this.y += 1;
        }

        this.createPiece();
      }
    }

    reversePiece() {
      if ( this.verticalCollision === false ) {
        document.getElementById("soundeffect02").play();

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
  }
  
  generateEmptyBoardArray();
  canvasDrawBoard();

  let piece = new CurrentPiece(currentPiece, pickColor(), charcoal);
  piece.createPiece();
  // piece.frameRate();
  let frameRate;
  function startGame() {
    freeze = false;
    if ( piece.verticalCollision === false ) {
      // piece.createPiece();
      frameRate = setInterval(() => {
        if (piece.gameOver === false) {
          if ( piece.verticalCollision === false ) {
            piece.moveDown();
          }

          else if (piece.verticalCollision === true) {
            // Logic for creating a new piece
            currentPiece = nextPiece;
            document.getElementById(`tetronimo-${nextPiece.last()}-next`).classList.remove("show-tetronimo");
            document.getElementById(`tetronimo-${nextPiece.last()}-next`).classList.add("hide-tetronimo");
            nextPiece = piece.tetronimoes[Math.floor(Math.random()*piece.tetronimoes.length)];

            piece.currPiece = currentPiece;
            piece.currentPieceIndex = 0;
            piece.currentPiece = piece.currPiece[piece.currentPieceIndex];
            piece.currentPieceType = piece.currPiece[piece.currPiece.length - 1];
            piece.createColor = pickColor();
            piece.x = 3;
            // piece.y = piece.currentPieceType === "I" ? -1 : -2;
            piece.y = piece.currentPieceType === "I" ? -1 : -1;
            piece.verticalCollision = false;
            document.getElementById(`tetronimo-${nextPiece.last()}-next`).classList.remove("hide-tetronimo");
            document.getElementById(`tetronimo-${nextPiece.last()}-next`).classList.add("show-tetronimo");

            let last = board.length - 1;
            while (board[last] && board[last].countColors(charcoal) === false) {
              if (!board[last].includes(charcoal)) {
                board.splice(last, 1);
                board.unshift([charcoal, charcoal, charcoal, charcoal, charcoal, charcoal, charcoal, charcoal, charcoal, charcoal]);
                rowsDeleted += 1;
                clearSound = true;
              }
              else {
                if (last > 0) {            
                  if (last - 1 === 0) {
                    break;
                  }

                  else {
                    last -= 1;  
                  }
                }
              }
            }
            if (clearSound === true) {
              document.getElementById("soundeffect07").play();
            }
            clearSound = false;

            canvasDrawBoard();

            switch(rowsDeleted) {
              case 1:
                points += (rowsDeleted * 10);
                rowsDeleted = 0;
                break;
              case 2:
                points += (rowsDeleted * 10) + 10;
                rowsDeleted = 0;
                break;
              case 3:
                points += (rowsDeleted * 10) + 20;
                rowsDeleted = 0;
                break;
              case 4:
                points += (rowsDeleted * 10) + 30;
                rowsDeleted = 0;
                break;
            }


            document.getElementById("points-counter").innerHTML = points;
          }
        }
  
        else {
          // Game Over
          clearInterval(frameRate);
          currentSong.pause();
          document.getElementById("soundeffect05").play();
          document.getElementById("game-over-screen").classList.remove("game-over-screen-close");
          document.getElementById("game-over-screen").classList.add("game-over-screen");
        }

        if (parseInt(document.getElementById("points-counter").innerHTML) > 250) {
          clearInterval(frameRate);
          startGame2();
        }

      }, 400);
    }
  }


  let frameRate2;
  function startGame2() {
    freeze = false;
    if ( piece.verticalCollision === false ) {
      frameRate2 = setInterval(() => {
        if (piece.gameOver === false) {
          if ( piece.verticalCollision === false ) {
            piece.moveDown();
          }

          else if (piece.verticalCollision === true) {
            // Logic for creating a new piece
            currentPiece = nextPiece;
            document.getElementById(`tetronimo-${nextPiece.last()}-next`).classList.remove("show-tetronimo");
            document.getElementById(`tetronimo-${nextPiece.last()}-next`).classList.add("hide-tetronimo");
            nextPiece = piece.tetronimoes[Math.floor(Math.random()*piece.tetronimoes.length)];

            piece.currPiece = currentPiece;
            piece.currentPieceIndex = 0;
            piece.currentPiece = piece.currPiece[piece.currentPieceIndex];
            piece.currentPieceType = piece.currPiece[piece.currPiece.length - 1];
            piece.createColor = pickColor();
            piece.x = 3;
            piece.y = piece.currentPieceType === "I" ? -1 : -1;
            piece.verticalCollision = false;
            document.getElementById(`tetronimo-${nextPiece.last()}-next`).classList.remove("hide-tetronimo");
            document.getElementById(`tetronimo-${nextPiece.last()}-next`).classList.add("show-tetronimo");

            let last = board.length - 1;
            while (board[last] && board[last].countColors(charcoal) === false) {
              if (!board[last].includes(charcoal)) {
                board.splice(last, 1);
                board.unshift([charcoal, charcoal, charcoal, charcoal, charcoal, charcoal, charcoal, charcoal, charcoal, charcoal]);
                rowsDeleted += 1;
                clearSound = true;
              }
              else {
                if (last > 0) {            
                  if (last - 1 === 0) {
                    break;
                  }

                  else {
                    last -= 1;  
                  }
                }
              }
            }

            if (clearSound === true) {
              document.getElementById("soundeffect07").play();
            }
            clearSound = false;

            canvasDrawBoard();

            switch(rowsDeleted) {
              case 1:
                points += (rowsDeleted * 10);
                rowsDeleted = 0;
                break;
              case 2:
                points += (rowsDeleted * 10) + 10;
                rowsDeleted = 0;
                break;
              case 3:
                points += (rowsDeleted * 10) + 10;
                rowsDeleted = 0;
                break;
              case 4:
                points += (rowsDeleted * 10) + 10;
                rowsDeleted = 0;
                break;
            }


            document.getElementById("points-counter").innerHTML = points;
          }
        }
  
        else {
          // Game Over
          clearInterval(frameRate2);
          currentSong.pause();
          document.getElementById("soundeffect05").play();
          document.getElementById("game-over-screen").classList.remove("game-over-screen-close");
          document.getElementById("game-over-screen").classList.add("game-over-screen");
        }

        if (parseInt(document.getElementById("points-counter").innerHTML) > 500) {
          clearInterval(frameRate2);
          startGame3();
        }
      }, 250);
    }
  }

  let frameRate3;
  function startGame3() {
    freeze = false;
    if ( piece.verticalCollision === false ) {
      frameRate3 = setInterval(() => {
        if (piece.gameOver === false) {
          if ( piece.verticalCollision === false ) {
            piece.moveDown();
          }

          else if (piece.verticalCollision === true) {
            // Logic for creating a new piece
            currentPiece = nextPiece;
            document.getElementById(`tetronimo-${nextPiece.last()}-next`).classList.remove("show-tetronimo");
            document.getElementById(`tetronimo-${nextPiece.last()}-next`).classList.add("hide-tetronimo");
            nextPiece = piece.tetronimoes[Math.floor(Math.random()*piece.tetronimoes.length)];

            piece.currPiece = currentPiece;
            piece.currentPieceIndex = 0;
            piece.currentPiece = piece.currPiece[piece.currentPieceIndex];
            piece.currentPieceType = piece.currPiece[piece.currPiece.length - 1];
            piece.createColor = pickColor();
            piece.x = 3;
            piece.y = piece.currentPieceType === "I" ? -1 : -1;
            piece.verticalCollision = false;
            document.getElementById(`tetronimo-${nextPiece.last()}-next`).classList.remove("hide-tetronimo");
            document.getElementById(`tetronimo-${nextPiece.last()}-next`).classList.add("show-tetronimo");

            let last = board.length - 1;
            while (board[last] && board[last].countColors(charcoal) === false) {
              if (!board[last].includes(charcoal)) {
                board.splice(last, 1);
                board.unshift([charcoal, charcoal, charcoal, charcoal, charcoal, charcoal, charcoal, charcoal, charcoal, charcoal]);
                rowsDeleted += 1;
                clearSound = true;
              }
              else {
                if (last > 0) {            
                  if (last - 1 === 0) {
                    break;
                  }

                  else {
                    last -= 1;  
                  }
                }
              }
            }

            if (clearSound === true) {
              document.getElementById("soundeffect07").play();
            }
            clearSound = false;

            canvasDrawBoard();

            switch(rowsDeleted) {
              case 1:
                points += (rowsDeleted * 10);
                rowsDeleted = 0;
                break;
              case 2:
                points += (rowsDeleted * 10) + 10;
                rowsDeleted = 0;
                break;
              case 3:
                points += (rowsDeleted * 10) + 10;
                rowsDeleted = 0;
                break;
              case 4:
                points += (rowsDeleted * 10) + 10;
                rowsDeleted = 0;
                break;
            }


            document.getElementById("points-counter").innerHTML = points;
          }
        }
  
        else {
          // Game Over
          clearInterval(frameRate3);
          currentSong.pause();
          document.getElementById("soundeffect05").play();
          document.getElementById("game-over-screen").classList.remove("game-over-screen-close");
          document.getElementById("game-over-screen").classList.add("game-over-screen");
        }

        if (parseInt(document.getElementById("points-counter").innerHTML) > 1000) {
          clearInterval(frameRate3);
          startGame4();
        }
      }, 150);
    }
  }

  let frameRate4;
  function startGame4() {
    currentSong.pause();
    currentSong =document.getElementById("014");
    currentSong.play();
    
    freeze = false;
    if ( piece.verticalCollision === false ) {
      frameRate4 = setInterval(() => {
        if (piece.gameOver === false) {
          if ( piece.verticalCollision === false ) {
            piece.moveDown();
          }

          else if (piece.verticalCollision === true) {
            // Logic for creating a new piece
            currentPiece = nextPiece;
            document.getElementById(`tetronimo-${nextPiece.last()}-next`).classList.remove("show-tetronimo");
            document.getElementById(`tetronimo-${nextPiece.last()}-next`).classList.add("hide-tetronimo");
            nextPiece = piece.tetronimoes[Math.floor(Math.random()*piece.tetronimoes.length)];

            piece.currPiece = currentPiece;
            piece.currentPieceIndex = 0;
            piece.currentPiece = piece.currPiece[piece.currentPieceIndex];
            piece.currentPieceType = piece.currPiece[piece.currPiece.length - 1];
            piece.createColor = pickColor();
            piece.x = 3;
            piece.y = piece.currentPieceType === "I" ? -1 : -1;
            piece.verticalCollision = false;
            document.getElementById(`tetronimo-${nextPiece.last()}-next`).classList.remove("hide-tetronimo");
            document.getElementById(`tetronimo-${nextPiece.last()}-next`).classList.add("show-tetronimo");

            let last = board.length - 1;
            while (board[last] && board[last].countColors(charcoal) === false) {
              if (!board[last].includes(charcoal)) {
                board.splice(last, 1);
                board.unshift([charcoal, charcoal, charcoal, charcoal, charcoal, charcoal, charcoal, charcoal, charcoal, charcoal]);
                rowsDeleted += 1;
                clearSound = true;
              }
              else {
                if (last > 0) {            
                  if (last - 1 === 0) {
                    break;
                  }

                  else {
                    last -= 1;  
                  }
                }
              }
            }

            if (clearSound === true) {
              document.getElementById("soundeffect07").play();
            }
            clearSound = false;

            canvasDrawBoard();

            switch(rowsDeleted) {
              case 1:
                points += (rowsDeleted * 10);
                rowsDeleted = 0;
                break;
              case 2:
                points += (rowsDeleted * 10) + 10;
                rowsDeleted = 0;
                break;
              case 3:
                points += (rowsDeleted * 10) + 10;
                rowsDeleted = 0;
                break;
              case 4:
                points += (rowsDeleted * 10) + 10;
                rowsDeleted = 0;
                break;
            }


            document.getElementById("points-counter").innerHTML = points;
          }
        }
  
        else {
          // Game Over
          clearInterval(frameRate4);
          currentSong.pause();
          document.getElementById("soundeffect05").play();
          document.getElementById("game-over-screen").classList.remove("game-over-screen-close");
          document.getElementById("game-over-screen").classList.add("game-over-screen");
        }
      }, 80);
    }
  }

  function restartGame() {
    piece.verticalCollision = false;
    piece.gameOver = false;
    piece.y = this.currentPieceType === "I" ? -1 : -2;
    points = 0;
    document.getElementById("points-counter").innerHTML = points;
    board = [];
    clearInterval(frameRate);
    clearInterval(frameRate2);
    clearInterval(frameRate3);
    clearInterval(frameRate4);
    generateEmptyBoardArray();
    canvasDrawBoard();
    startGame();
  }

  function pauseGame() {
    freeze = true;
    clearInterval(frameRate);
    clearInterval(frameRate2);
    clearInterval(frameRate3);
    clearInterval(frameRate4);
  }
 
  // ============================================================ BOARD GENERATION END ============================================================

  // ============================================================ GAME CONTROLS START ============================================================
  document.getElementById(`tetronimo-${nextPiece.last()}-next`).classList.remove("hide-tetronimo");
  document.getElementById(`tetronimo-${nextPiece.last()}-next`).classList.add("show-tetronimo");

  document.addEventListener("keydown", event => {
    // ================ GAMEPLAY CONTROLS START ================
    if (freeze === false) {
      if (event.which === 87) {
        // w key
        // document.getElementById("soundeffect02").play();        
        piece.reversePiece();
      }
  
      else if (event.which === 83) {
        // s key
        document.getElementById("soundeffect06").play();
        piece.moveDown();
      }
  
      else if (event.which === 65) {
        // a key
        // document.getElementById("soundeffect02").play();
        piece.moveLeft();
      }
  
      else if (event.which === 68) {
        // d key
        // document.getElementById("soundeffect02").play();
        piece.moveRight();
      }
  
      else if (event.which === 38) {
        // up key
        event.preventDefault();
        // document.getElementById("soundeffect02").play();
        piece.reversePiece();
      }
  
      else if (event.which === 40) {
        // down key
        event.preventDefault();
        document.getElementById("soundeffect06").play();
        piece.moveDown();
      }
  
      else if (event.which === 37) {
        // left key
        event.preventDefault();
        // document.getElementById("soundeffect02").play();
        piece.moveLeft();
      }
  
      else if (event.which === 39) {
        // right key
        event.preventDefault();
        // document.getElementById("soundeffect02").play();
        piece.moveRight();
      }
  
      else if (event.which === 32 && event.target === document.body) {
        // spacebar key
        
        event.preventDefault();
        
        while ( piece.verticalCollision === false && piece.y > 0 ) {
        // while ( piece.verticalCollision === false ) {
          piece.moveDown();
        }
  
        if (piece.verticalCollision === true) {
          document.getElementById("soundeffect03").play();
        }
      }
  
      else if (event.which === 16) {
        // shift key
  
        document.getElementById(`tetronimo-${nextPiece.last()}-next`).classList.remove("show-tetronimo");
        document.getElementById(`tetronimo-${nextPiece.last()}-next`).classList.add("hide-tetronimo");
        
        if (savedPiece) {
          document.getElementById(`tetronimo-${savedPiece.last()}-saved`).classList.remove("show-tetronimo");
          document.getElementById(`tetronimo-${savedPiece.last()}-saved`).classList.add("hide-tetronimo");
        }
  
        if (savedPiece === null) {
          savedPiece = piece.currPiece;
          piece.currPiece = nextPiece;
          piece.nextPiece = tetronimoes[Math.floor(Math.random()*tetronimoes.length)];
          nextPiece = piece.nextPiece;
        }
  
        else {
          const temp = savedPiece;
          savedPiece = piece.currPiece;
          piece.currPiece = temp;
        }
  
        currentPiece = piece.currPiece;
        piece.currentPieceIndex = 0;
        piece.currentPiece = piece.currPiece[piece.currentPieceIndex];
        piece.currentPieceType = piece.currPiece[piece.currPiece.length - 1];
        piece.createColor = pickColor();
        piece.x = 3;
        piece.y = piece.currentPieceType === "I" ? -1 : -1;
        piece.verticalCollision = false;
  
        canvasDrawBoard();
  
        document.getElementById(`tetronimo-${nextPiece.last()}-next`).classList.remove("hide-tetronimo");
        document.getElementById(`tetronimo-${nextPiece.last()}-next`).classList.add("show-tetronimo");
        
        document.getElementById(`tetronimo-${savedPiece.last()}-saved`).classList.remove("hide-tetronimo");
        document.getElementById(`tetronimo-${savedPiece.last()}-saved`).classList.add("show-tetronimo");
      }
    }
  });
    // ================ GAMEPLAY CONTROLS END ================
    document.addEventListener("keydown", event => {
    if (event.which === 81) {
      // q key

      document.getElementById("play-screen").classList.remove("show-screen");
      document.getElementById("play-screen").classList.add("hide-screen");
      document.getElementById("pause-screen").classList.remove("show-screen");
      document.getElementById("pause-screen").classList.add("hide-screen");

      startGame();
    }

    else if (event.which === 69) {
      // e key
      
      document.getElementById("pause-screen").classList.remove("hide-screen");
      document.getElementById("pause-screen").classList.add("show-screen");

      pauseGame();
    }

    else if (event.which === 82) {
      // u key
      if (pauseSong === false) {
        pauseSong = true;
        currentSong.pause();
      }
      else {
        pauseSong = false;
        currentSong.play();
      }
    }

    else if (event.which === 73) {
      // i key
      // console.log("i key");
    }
  });
  // ============================================================ GAME CONTROLS END ============================================================
});
  