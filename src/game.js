// import Piece from './piece';
// import Board from './board';

// Button Logic
document.addEventListener("DOMContentLoaded", () => {
  // ============================================================ DETAILS MODAL START ============================================================
  const detailModal = document.getElementById("detail-modal");

  document.getElementById("details").addEventListener("click", () => {
    // debugger;
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
    alert("start-game");

    // instantiate a piece class using a random Tetronimo letter as an argument
    // instantiate a board class using the piece class as an argument

    const tetronimoes = ["I", "O", "T", "S", "Z", "J", "L"];
    const tetronimo = tetronimoes[Math.floor(Math.random()*tetronimoes.length)];

    // let randomPiece = Piece(tetronimo);
    // let currentBoard = Board(randomPiece); 
      // QUICK NOTE: won't this instantiate a new board every time?
      // If so, wouldn't that clear the board every time a new piece class is instantiated?
        // possible work-around: instantiate pieces classes inside of the board itself, rather than here
          // so that we only need to instantiate the board once until the game is over
  });
  // ============================================================ START GAME END ============================================================



  // ============================================================ PAUSE GAME START ============================================================
  document.getElementById("pause-game").addEventListener("click", () => {
    alert("pause-game");
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
  // console.log(document.getElementById("tetronimo-I-next").classList);

  // Generate random Tetris piece
  const tetronimoes = ["I", "O", "T", "S", "Z", "J", "L"];
  const currentPiece = tetronimoes[Math.floor(Math.random()*tetronimoes.length)];
  
  // Position of Pieces
  document.getElementById(`tetronimo-${currentPiece}`).style.marginLeft = "90px";
  document.getElementById(`tetronimo-${currentPiece}`).style.marginTop = "0px";
  document.getElementById(`tetronimo-${currentPiece}`).style.marginRight = "0px";
  // document.getElementById(`tetronimo-${currentPiece}`).style.marginTop = "0px";

  document.addEventListener("keydown", event => {
    if (event.which === 87) {
      // w key
      // remember to use this for the rotating logic
      if (parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginTop) >= 30) {
        document.getElementById(`tetronimo-${currentPiece}`).style.marginTop = `${parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginTop) - 30}px`;
      }
    }

    else if (event.which === 83) {
      // s key
      if (currentPiece === "I") {
        if (parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginTop) <= 540) {
          document.getElementById(`tetronimo-${currentPiece}`).style.marginTop = `${parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginTop) + 30}px`;
        }
      }
      else {
        if (parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginTop) <= 510) {
          document.getElementById(`tetronimo-${currentPiece}`).style.marginTop = `${parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginTop) + 30}px`;
        }
      }
    }

    else if (event.which === 65) {
      // a key
      if (parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginRight) >= 0 && parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginLeft) >= 30) {
        document.getElementById(`tetronimo-${currentPiece}`).style.marginRight = `${parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginRight) + 30}px`;
        document.getElementById(`tetronimo-${currentPiece}`).style.marginLeft = `${parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginLeft) - 30}px`;
      }
    }

    else if (event.which === 68) {
      // d key
      if (currentPiece === "O") {
        if (parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginLeft) <= 210 ) {
          document.getElementById(`tetronimo-${currentPiece}`).style.marginLeft = `${parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginLeft) + 30}px`;
        }
      }
      else if (currentPiece === "I") {
        if (parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginLeft) <= 150 ) {
          document.getElementById(`tetronimo-${currentPiece}`).style.marginLeft = `${parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginLeft) + 30}px`;
        }
      }
      else {
        if (parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginLeft) <= 180 ) {
          document.getElementById(`tetronimo-${currentPiece}`).style.marginLeft = `${parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginLeft) + 30}px`;
        }
      }
    }

    else if (event.which === 32 && event.target === document.body) {
      // spacebar key
      event.preventDefault();
      document.getElementById(`tetronimo-${currentPiece}`).style.marginTop = "570px";
    }

    else if (event.which === 16) {
      // shift key
      console.log("shift key");
    }

    else if (event.which === 79) {
      // o key
      console.log("o key");
    }

    else if (event.which === 80) {
      // p key
      console.log("p key");
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
