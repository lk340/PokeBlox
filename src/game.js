// import Piece from './piece';
// import Board from './board';

// Button Logic
document.addEventListener("DOMContentLoaded", () => {
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

  document.getElementById("pause-game").addEventListener("click", () => {
    alert("pause-game");
  });

  document.getElementById("mute-music").addEventListener("click", () => {
    alert("mute-music");
  });

  document.getElementById("change-music").addEventListener("click", () => {
    alert("change-music");
  });

  // console.log(document.getElementById("tetronimo-I-next").classList);

  // Position of Pieces
  document.getElementById("tetronimo-I").style.marginLeft = "90px";
  document.getElementById("tetronimo-I").style.marginTop = "0px";

  document.addEventListener("keydown", event => {
    if (event.which === 87) {
      // w key
      // console.log("w key");
      document.getElementById("tetronimo-I").style.marginTop = `${parseInt(document.getElementById("tetronimo-I").style.marginTop) - 30}px`;
    }

    else if (event.which === 83) {
    // else if (event.which === 83) {
      // s key
      // console.log("s key");
      document.getElementById("tetronimo-I").style.marginTop = `${parseInt(document.getElementById("tetronimo-I").style.marginTop) + 30}px`;
    }

    else if (event.which === 65) {
      // a key
      // console.log("a key");
      document.getElementById("tetronimo-I").style.marginLeft = `${parseInt(document.getElementById("tetronimo-I").style.marginLeft) - 30}px`;
    }

    else if (event.which === 68) {
      // d key
      // console.log("d key");
      document.getElementById("tetronimo-I").style.marginLeft = `${parseInt(document.getElementById("tetronimo-I").style.marginLeft) + 30}px`;
    }

    else if (event.which === 32) {
      // spacebar key
      console.log("spacebar key");
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

});
