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

});
