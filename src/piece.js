export default class Piece {
  constructor(type) {
    this.type = type;
  }

  piece() {
    if (this.type === "I") {
      document.getElementById("197").classList.remove("board-grid");
      document.getElementById("197").classList.add("I");

      document.getElementById("196").classList.remove("board-grid");
      document.getElementById("196").classList.add("I");

      document.getElementById("195").classList.remove("board-grid");
      document.getElementById("195").classList.add("I");

      document.getElementById("194").classList.remove("board-grid");
      document.getElementById("194").classList.add("I");
    }

    else if (this.type === "O") {
      document.getElementById("196").classList.remove("board-grid");
      document.getElementById("196").classList.add("O");

      document.getElementById("195").classList.remove("board-grid");
      document.getElementById("195").classList.add("O");

      document.getElementById("186").classList.remove("board-grid");
      document.getElementById("186").classList.add("O");

      document.getElementById("185").classList.remove("board-grid");
      document.getElementById("185").classList.add("O");
    }

    else if (this.type === "T") {
      document.getElementById("196").classList.remove("board-grid");
      document.getElementById("196").classList.add("T");

      document.getElementById("187").classList.remove("board-grid");
      document.getElementById("187").classList.add("T");

      document.getElementById("186").classList.remove("board-grid");
      document.getElementById("186").classList.add("T");

      document.getElementById("185").classList.remove("board-grid");
      document.getElementById("185").classList.add("T");
    }

    else if (this.type === "S") {
      document.getElementById("196").classList.remove("board-grid");
      document.getElementById("196").classList.add("S");

      document.getElementById("195").classList.remove("board-grid");
      document.getElementById("195").classList.add("S");

      document.getElementById("187").classList.remove("board-grid");
      document.getElementById("187").classList.add("S");

      document.getElementById("186").classList.remove("board-grid");
      document.getElementById("186").classList.add("S");
    }

    else if (this.type === "Z") {
      document.getElementById("197").classList.remove("board-grid");
      document.getElementById("197").classList.add("Z");

      document.getElementById("196").classList.remove("board-grid");
      document.getElementById("196").classList.add("Z");

      document.getElementById("186").classList.remove("board-grid");
      document.getElementById("186").classList.add("Z");

      document.getElementById("185").classList.remove("board-grid");
      document.getElementById("185").classList.add("Z");
    }

    else if (this.type === "J") {
      document.getElementById("197").classList.remove("board-grid");
      document.getElementById("197").classList.add("J");

      document.getElementById("187").classList.remove("board-grid");
      document.getElementById("187").classList.add("J");

      document.getElementById("186").classList.remove("board-grid");
      document.getElementById("186").classList.add("J");

      document.getElementById("185").classList.remove("board-grid");
      document.getElementById("185").classList.add("J");
    }

    else if (this.type === "L") {
      document.getElementById("195").classList.remove("board-grid");
      document.getElementById("195").classList.add("L");

      document.getElementById("187").classList.remove("board-grid");
      document.getElementById("187").classList.add("L");

      document.getElementById("186").classList.remove("board-grid");
      document.getElementById("186").classList.add("L");

      document.getElementById("185").classList.remove("board-grid");
      document.getElementById("185").classList.add("L");
    }
  }
}
