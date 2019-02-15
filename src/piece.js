  // Class function for tetronimo pieces
  export default class Piece {
    constructor(currPiece, color1, color2) {
      this.currPiece = currPiece;
      this.currentPieceIndex = 0;
      this.currentPiece = currPiece[this.currentPieceIndex];
      this.currentPieceType = currPiece.last();
      this.createColor = color1;
      this.deleteColor = color2;
      this.x = 3;
      this.y = 6;
      this.collision = false;
    }
    
    createPiece() {
      for ( let y = this.currentPiece.length - 1; y >= 0; y-- ) {
        for ( let x = 0; x < this.currentPiece[y].length; x++ ) {
          if ( this.currentPiece[y][x] === 1 ) {
            // debugger;
            if ( 
              this.y + y === 19 
              ) {
              this.collision = true;
            }
            generateGridBlock(this.x + x, this.y + y, this.createColor);
          }
        }
      }
    }

    deletePiece() {
      for ( let y = 0; y < this.currentPiece.length; y++ ) {
        for ( let x = 0; x < this.currentPiece[y].length; x++ ) {
          if ( this.currentPiece[y][x] === 1 ) {
            if ( this.y + y === 19 ) {
              this.collision = true;
            }
            generateGridBlock(this.x + x, this.y + y, this.deleteColor);
          }
        }
      }
    }

    detectVerticalCollision() {
      
    }

    detectHorizontalCollision() {

    }

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

      // if (this.currentPieceType === "I") {
        // if (this.y + 1 < 19) {
          // console.log(this.y + 1);
          if ( this.collision === false) {
            console.log(this.collision);
            this.y += 1;
          }
        // }
      // }
      
      // else if (this.currentPieceType === "O") {
      //   if (this.y + 1 < 18) {
      //     this.y += 1;
      //   }
      // }
      
      // else {
      //   if (this.y + 1 < 19) {
      //     this.y += 1;
      //   }
      // }
      

      this.createPiece();
    }

    reversePiece(x, y, currentPiece) {
      if ( this.collision === false ) {
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

    frameRate() {
      setInterval(() => {
        this.moveDown();
      }, 1200);
    }

    freeze() {
      // freezes the current piece
      // generates new piece afterwards
    }
  }
  