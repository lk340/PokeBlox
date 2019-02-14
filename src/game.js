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
  
  const board = [];
  function generateEmptyBoard() {
    for ( let y = 0; y < 20; y++ ) {
      board[y] = [ ];
      for ( let x = 0; x < 10; x++ ) {
        board[y][x] = "rgb(54, 54, 54)";
      }
    }
  } 

  // CANVAS MANIPULATION START
  const canvasBoard = document.getElementById("tetris-canvas");
  const context = canvasBoard.getContext("2d");
  // CANVAS MANIPULATION END

  function generateGridBlock(x, y, color) {
    if (x < 10 && y < 20) {
      x_pos = x * 30;
      y_pos = y * 30;
      context.fillRect(x_pos, y_pos, 30, 30);
      context.fillStyle = color;
      context.strokeStyle = "rgb(92, 92, 92)";
      context.strokeRect(x_pos, y_pos, 30, 30);
    }
    else {
      alert("Out of bounds!");
    }
  }

  function canvasDrawBoard() {
    for ( let y = 0; y < 20; y++ ) {
      for ( let x = 0; x < 10; x++ ) {
        generateGridBlock(x, y, board[y][x]);
      }
    }
  }

  generateEmptyBoard();
  console.log(board);
  generateGridBlock(4, 19, "red");
  canvasDrawBoard();
  // ============================================================ BOARD GENERATION END ============================================================

  // ============================================================ GAME CONTROLS START ============================================================
  // Generate random Tetris piece
  // const tetronimoes = ["I", "O", "T", "S", "Z", "J", "L"];
  const tetronimoes = [I, O, T, S, Z, J, L];
  let currentPiece = tetronimoes[Math.floor(Math.random()*tetronimoes.length)];
  let nextPiece = tetronimoes[Math.floor(Math.random()*tetronimoes.length)];

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
      reversePiece();
    }

    else if (event.which === 83) {
      // s key
      moveDown();
    }

    else if (event.which === 65) {
      // a key
      moveLeft();
    }

    else if (event.which === 68) {
      // d key
      moveRight();
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
  