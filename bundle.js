/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/raw-loader/index.js!./src/game.js":
/*!***********************************************!*\
  !*** ./node_modules/raw-loader!./src/game.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"Array.prototype.last = function() {\\n  return this[this.length - 1];\\n};\\n\\n// Button Logic\\ndocument.addEventListener(\\\"DOMContentLoaded\\\", () => {  \\n  // ============================================================ DETAILS MODAL START ============================================================\\n  const detailModal = document.getElementById(\\\"detail-modal\\\");\\n\\n  document.getElementById(\\\"details\\\").addEventListener(\\\"click\\\", () => {\\n    // Open About Modal\\n    if (detailModal.classList.contains(\\\"hide-about-modal\\\")) {\\n      detailModal.classList.remove(\\\"hide-about-modal\\\");\\n      detailModal.classList.add(\\\"about-modal\\\");\\n    }\\n  });\\n\\n  // Close About Modal\\n  document.getElementById(\\\"about-modal-close\\\").addEventListener(\\\"click\\\", () => {\\n    if (detailModal.classList.contains(\\\"about-modal\\\")) {\\n      detailModal.classList.remove(\\\"about-modal\\\");\\n      detailModal.classList.add(\\\"hide-about-modal\\\");\\n    }\\n  });\\n  // ============================================================ DETAILS MODAL END ============================================================\\n\\n\\n  // ============================================================ START GAME START ============================================================\\n  document.getElementById(\\\"start-game\\\").addEventListener(\\\"click\\\", () => {\\n    console.log(\\\"game start\\\");\\n\\n    document.getElementById(\\\"play-screen\\\").classList.add(\\\"hide-screen\\\");\\n    document.getElementById(\\\"pause-screen\\\").classList.remove(\\\"show-screen\\\");\\n    document.getElementById(\\\"pause-screen\\\").classList.add(\\\"hide-screen\\\");\\n  });\\n\\n  document.getElementById(\\\"play-game\\\").addEventListener(\\\"click\\\", () => {\\n    console.log(\\\"play game\\\");\\n\\n    document.getElementById(\\\"play-screen\\\").classList.remove(\\\"show-screen\\\");\\n    document.getElementById(\\\"play-screen\\\").classList.add(\\\"hide-screen\\\");\\n  });\\n\\n  document.getElementById(\\\"game-paused\\\").addEventListener(\\\"click\\\", () => {\\n    console.log(\\\"game paused\\\");\\n\\n    document.getElementById(\\\"pause-screen\\\").classList.remove(\\\"show-screen\\\");\\n    document.getElementById(\\\"pause-screen\\\").classList.add(\\\"hide-screen\\\");\\n\\n    document.getElementById(\\\"play-screen\\\").classList.remove(\\\"show-screen\\\");\\n    document.getElementById(\\\"play-screen\\\").classList.add(\\\"hide-screen\\\");\\n  });\\n  // ============================================================ START GAME END ============================================================\\n\\n\\n\\n  // ============================================================ PAUSE GAME START ============================================================\\n  document.getElementById(\\\"pause-game\\\").addEventListener(\\\"click\\\", () => {\\n    document.getElementById(\\\"pause-screen\\\").classList.remove(\\\"hide-screen\\\");\\n    document.getElementById(\\\"pause-screen\\\").classList.add(\\\"show-screen\\\");\\n    console.log(\\\"pause game\\\");\\n  });\\n  // ============================================================ PAUSE GAME END ============================================================\\n\\n\\n\\n  // ============================================================ MUTE MUSIC START ============================================================\\n  document.getElementById(\\\"mute-music\\\").addEventListener(\\\"click\\\", () => {\\n    alert(\\\"mute-music\\\");\\n  });\\n  // ============================================================ MUTE MUSIC END ============================================================\\n\\n\\n\\n  // ============================================================ CHANGE MUSIC START ============================================================\\n  document.getElementById(\\\"change-music\\\").addEventListener(\\\"click\\\", () => {\\n    alert(\\\"change-music\\\");\\n  });\\n  // ============================================================ CHANGE MUSIC END ============================================================\\n\\n  // ============================================================ BOARD GENERATION START ============================================================\\n   // PIECE ARRAYS START\\n   const I = [\\n  //   [\\n  //     [0, 0, 0, 0],\\n  //     [1, 1, 1, 1],\\n  //     [0, 0, 0, 0],\\n  //     [0, 0, 0, 0],\\n  //   ],\\n  //   [\\n  //     [0, 1, 0, 0],\\n  //     [0, 1, 0, 0],\\n  //     [0, 1, 0, 0],\\n  //     [0, 1, 0, 0],\\n  //   ],\\n    [\\n      [1, 1, 1, 1],\\n    ],\\n    [\\n      [1],\\n      [1],\\n      [1],\\n      [1],\\n    ],\\n    \\\"I\\\",\\n  ];\\n\\n  const O = [\\n    // [\\n    //   [0, 0, 0, 0],\\n    //   [0, 1, 1, 0],\\n    //   [0, 1, 1, 0],\\n    //   [0, 0, 0, 0],\\n    // ],\\n    [\\n      [1, 1],\\n      [1, 1],\\n    ],\\n    \\\"O\\\",\\n  ];\\n  \\n  const T = [\\n    // [\\n    //   [0, 1, 0],\\n    //   [1, 1, 1],\\n    //   [0, 0, 0],\\n    // ],\\n    // [\\n    //   [0, 1, 0],\\n    //   [0, 1, 1],\\n    //   [0, 1, 0],\\n    // ],\\n    // [\\n    //   [0, 0, 0],\\n    //   [1, 1, 1],\\n    //   [0, 1, 0],\\n    // ],\\n    // [\\n    //   [0, 1, 0],\\n    //   [1, 1, 0],\\n    //   [0, 1, 0],\\n    // ],\\n    [\\n      [0, 1, 0],\\n      [1, 1, 1],\\n    ],\\n    [\\n      [1, 0],\\n      [1, 1],\\n      [1, 0],\\n    ],\\n    [\\n      [1, 1, 1],\\n      [0, 1, 0],\\n    ],\\n    [\\n      [0, 1],\\n      [1, 1],\\n      [0, 1],\\n    ],\\n    \\\"T\\\",\\n  ];\\n  \\n  const S = [\\n    // [\\n    //   [0, 1, 1],\\n    //   [1, 1, 0],\\n    //   [0, 0, 0],\\n    // ],\\n    // [\\n    //   [0, 1, 0],\\n    //   [0, 1, 1],\\n    //   [0, 0, 1],\\n    // ],\\n    // [\\n    //   [0, 0, 0],\\n    //   [0, 1, 1],\\n    //   [1, 1, 0],\\n    // ],\\n    // [\\n    //   [1, 0, 0],\\n    //   [1, 1, 0],\\n    //   [0, 1, 0],\\n    // ],\\n    [\\n      [0, 1, 1],\\n      [1, 1, 0],\\n    ],\\n    [\\n      [1, 0],\\n      [1, 1],\\n      [0, 1],\\n    ],\\n    [\\n      [0, 1, 1],\\n      [1, 1, 0],\\n    ],\\n    [\\n      [1, 0],\\n      [1, 1],\\n      [0, 1],\\n    ],\\n    \\\"S\\\",\\n  ];\\n  \\n  const Z = [\\n    // [\\n    //   [1, 1, 0],\\n    //   [0, 1, 1],\\n    //   [0, 0, 0],\\n    // ],\\n    // [\\n    //   [0, 0, 1],\\n    //   [0, 1, 1],\\n    //   [0, 1, 0],\\n    // ],\\n    // [\\n    //   [0, 0, 0],\\n    //   [1, 1, 0],\\n    //   [0, 1, 1],\\n    // ],\\n    // [\\n    //   [0, 1, 0],\\n    //   [1, 1, 0],\\n    //   [1, 0, 0],\\n    // ],\\n    [\\n      [1, 1, 0],\\n      [0, 1, 1],\\n    ],\\n    [\\n      [0, 1],\\n      [1, 1],\\n      [1, 0],\\n    ],\\n    [\\n      [1, 1, 0],\\n      [0, 1, 1],\\n    ],\\n    [\\n      [0, 1],\\n      [1, 1],\\n      [1, 0],\\n    ],\\n    \\\"Z\\\",\\n  ];\\n  \\n  const J = [\\n    // [\\n    //   [1, 0, 0],\\n    //   [1, 1, 1],\\n    //   [0, 0, 0],\\n    // ],\\n    // [\\n    //   [0, 1, 1],\\n    //   [0, 1, 0],\\n    //   [0, 1, 0],\\n    // ],\\n    // [\\n    //   [0, 0, 0],\\n    //   [1, 1, 1],\\n    //   [0, 0, 1],\\n    // ],\\n    // [\\n    //   [0, 1, 0],\\n    //   [0, 1, 0],\\n    //   [1, 1, 0],\\n    // ],\\n    [\\n      [1, 0, 0],\\n      [1, 1, 1],\\n    ],\\n    [\\n      [1, 1],\\n      [1, 0],\\n      [1, 0],\\n    ],\\n    [\\n      [1, 1, 1],\\n      [0, 0, 1],\\n    ],\\n    [\\n      [0, 1],\\n      [0, 1],\\n      [1, 1],\\n    ],\\n    \\\"J\\\",\\n  ];\\n  \\n  const L = [\\n    // [\\n    //   [0, 0, 0],\\n    //   [0, 0, 1],\\n    //   [1, 1, 1],\\n    // ],\\n    // [\\n    //   [0, 1, 0],\\n    //   [0, 1, 0],\\n    //   [0, 1, 1],\\n    // ],\\n    // [\\n    //   [0, 0, 0],\\n    //   [1, 1, 1],\\n    //   [1, 0, 0],\\n    // ],\\n    // [\\n    //   [1, 1, 0],\\n    //   [0, 1, 0],\\n    //   [0, 1, 0],\\n    // ],\\n    [\\n      [0, 0, 1],\\n      [1, 1, 1],\\n    ],\\n    [\\n      [1, 0],\\n      [1, 0],\\n      [1, 1],\\n    ],\\n    [\\n      [1, 1, 1],\\n      [1, 0, 0],\\n    ],\\n    [\\n      [1, 1],\\n      [0, 1],\\n      [0, 1],\\n    ],\\n    \\\"L\\\",\\n  ];\\n  // PIECE ARRAYS END\\n  \\n  // Generate random Tetris piece\\n    // const tetronimoes = [\\\"I\\\", \\\"O\\\", \\\"T\\\", \\\"S\\\", \\\"Z\\\", \\\"J\\\", \\\"L\\\"];\\n  const tetronimoes = [I, O, T, S, Z, J, L];\\n  let currentPiece = tetronimoes[Math.floor(Math.random()*tetronimoes.length)];\\n  let nextPiece = tetronimoes[Math.floor(Math.random()*tetronimoes.length)];\\n  \\n  const charcoal = \\\"rgb(54, 54, 54)\\\";\\n  const ash = \\\"rgb(92, 92, 92)\\\"; \\n  const iColor = \\\"rgb(145, 145, 245)\\\";\\n  const oColor = \\\"rgb(255, 255, 149)\\\";\\n  const tColor = \\\"rgb(204, 129, 204)\\\";\\n  const sColor = \\\"rgb(179, 221, 179)\\\";\\n  const zColor = \\\"rgb(211, 123, 123)\\\";\\n  const jColor = \\\"rgb(73, 73, 172)\\\";\\n  const lColor = \\\"rgb(255, 205, 113)\\\";\\n\\n  // COLOR-PICKING LOGIC START\\n  function pickColor() {\\n    if ( currentPiece === I ) {\\n      return iColor;\\n    }\\n    else if ( currentPiece === O ) {\\n      return oColor;\\n    }\\n    else if ( currentPiece === T ) {\\n      return tColor;\\n    }\\n    else if ( currentPiece === S ) {\\n      return sColor;\\n    }\\n    else if ( currentPiece === Z ) {\\n      return zColor;\\n    }\\n    else if ( currentPiece === J ) {\\n      return jColor;\\n    }\\n    else if ( currentPiece === L ) {\\n      return lColor;\\n    }\\n  }\\n  // COLOR-PICKING LOGIC END\\n  \\n  const board = [];\\n  function generateEmptyBoardArray() {\\n    for ( let y = 0; y < 20; y++ ) {\\n      board[y] = [ ];\\n      for ( let x = 0; x < 10; x++ ) {\\n        board[y][x] = \\\"E\\\";\\n      }\\n    }\\n  } \\n\\n  // CANVAS MANIPULATION START\\n  const canvasBoard = document.getElementById(\\\"tetris-canvas\\\");\\n  const context = canvasBoard.getContext(\\\"2d\\\");\\n  // CANVAS MANIPULATION END\\n\\n  function generateGridBlock(x, y, blockColor) {\\n    if (x < 10 && y < 20) {\\n      x_pos = x * 30;\\n      y_pos = y * 30;\\n      context.fillStyle = blockColor;\\n      context.fillRect(x_pos, y_pos, 30, 30);\\n      context.strokeStyle = ash;\\n      context.strokeRect(x_pos, y_pos, 30, 30);\\n    }\\n  }\\n\\n  function canvasDrawBoard() {\\n    for ( let y = 0; y < 20; y++ ) {\\n      for ( let x = 0; x < 10; x++ ) {\\n        generateGridBlock(x, y, charcoal);\\n      }\\n    }\\n  }\\n\\n  // Class function for tetronimo pieces\\n  class CurrentPiece {\\n    constructor(currPiece, color1, color2) {\\n      this.currPiece = currPiece;\\n      this.currentPieceIndex = 0;\\n      this.currentPiece = currPiece[this.currentPieceIndex];\\n      this.currentPieceType = currPiece.last();\\n      this.createColor = color1;\\n      this.deleteColor = color2;\\n      this.x = 3;\\n      this.y = 0;\\n      this.verticalCollision = false;\\n    }\\n    \\n    createPiece() {\\n      for ( let y = this.currentPiece.length - 1; y >= 0; y-- ) {\\n        for ( let x = 0; x < this.currentPiece[y].length; x++ ) {\\n          if ( this.currentPiece[y][x] === 1 ) {\\n            // debugger;\\n            const y_val = this.currentPiece.length - 1;\\n            const lastIndex = this.currentPiece[y_val].length - 1;\\n            if ( this.x + lastIndex > 9 ) {\\n              while ( this.x + lastIndex > 9 ) {\\n                this.x -= 1;\\n              }\\n            }\\n            \\n            if ( this.y + y === 19 ) {\\n              this.verticalCollision = true;\\n            }\\n            generateGridBlock(this.x + x, this.y + y, this.createColor);\\n          }\\n        }\\n      }\\n    }\\n\\n    deletePiece() {\\n      for ( let y = this.currentPiece.length - 1; y >= 0; y-- ) {\\n        for ( let x = 0; x < this.currentPiece[y].length; x++ ) {\\n          if ( this.currentPiece[y][x] === 1 ) {\\n\\n            const y_val = this.currentPiece.length - 1;\\n            const lastIndex = this.currentPiece[y_val].length - 1;\\n            if ( this.x + lastIndex > 9 ) {\\n              while ( this.x + lastIndex > 9 ) {\\n                this.x -= 1;\\n              }\\n            }\\n\\n            if ( this.y + y === 19 ) {\\n              this.verticalCollision = true;\\n            }\\n            generateGridBlock(this.x + x, this.y + y, this.deleteColor);\\n          }\\n        }\\n      }\\n    }\\n\\n    moveLeft() {\\n      this.deletePiece();\\n      \\n      if ( this.x - 1 >= 0 && this.verticalCollision === false ) {\\n        this.x -= 1;\\n      }\\n\\n      this.createPiece();\\n    }\\n\\n    moveRight() {\\n      this.deletePiece();\\n\\n      const y = this.currentPiece.length - 1;\\n      const lastIndex = this.currentPiece[y].length - 1;\\n\\n      if ( this.x + lastIndex + 1 < 10 && this.verticalCollision === false ) {\\n        this.x += 1;\\n      }\\n\\n      this.createPiece();\\n    }\\n\\n    moveDown() {\\n      this.deletePiece();\\n      if ( this.verticalCollision === false ) {\\n        this.y += 1;\\n      }\\n\\n      this.createPiece();\\n    }\\n\\n    reversePiece() {\\n      // if ( this.x - 1 >= 0 && (this.x + lastIndex + 1 < 10) && this.verticalCollision === false ) {\\n      if ( this.verticalCollision === false ) {\\n        // debugger;\\n\\n        this.deletePiece();\\n\\n        if (this.currentPieceType === \\\"I\\\") {\\n          if ( this.currentPieceIndex === 1 ) {\\n            this.currentPieceIndex = 0;\\n            this.currentPiece = this.currPiece[this.currentPieceIndex];\\n          }\\n          else {\\n            this.currentPieceIndex += 1;\\n            this.currentPiece = this.currPiece[this.currentPieceIndex];\\n          }\\n        }\\n\\n        else if (this.currentPieceType !== \\\"O\\\") {\\n          if ( this.currentPieceIndex === 3 ) {\\n            this.currentPieceIndex = 0;\\n            this.currentPiece = this.currPiece[this.currentPieceIndex];\\n          }\\n          else {\\n            this.currentPieceIndex += 1;\\n            this.currentPiece = this.currPiece[this.currentPieceIndex];\\n          }\\n        }\\n\\n        this.createPiece();\\n      }\\n    }\\n\\n    frameRate() {\\n      setInterval(() => {\\n        this.moveDown();\\n      }, 1200);\\n    }\\n\\n    freeze() {\\n      // freezes the current piece\\n        // doesn't let the current piece move left, right, down, or rotate\\n      // generates new piece afterwards\\n    }\\n  }\\n  \\n  generateEmptyBoardArray();\\n  console.log(board);\\n  console.log(currentPiece);\\n  canvasDrawBoard();\\n\\n  const piece = new CurrentPiece(currentPiece, pickColor(), charcoal);\\n  piece.createPiece();\\n  piece.frameRate();\\n  if ( piece.verticalCollision === true ) {\\n    currentPiece = nextPiece;\\n    nextPiece = tetronimoes[Math.floor(Math.random()*tetronimoes.length)];\\n    // const newPiece = new CurrentPiece(currentPiece, pieceColor, charcoal);\\n    const newPiece = new CurrentPiece(currentPiece, pickColor(), charcoal);\\n    newPiece.createPiece();\\n    newPiece.frameRate();\\n  }\\n  \\n  // ============================================================ BOARD GENERATION END ============================================================\\n\\n  // ============================================================ GAME CONTROLS START ============================================================\\n\\n  document.getElementById(`tetronimo-${nextPiece.last()}-next`).classList.remove(\\\"hide-tetronimo\\\");\\n  document.getElementById(`tetronimo-${nextPiece.last()}-next`).classList.add(\\\"show-tetronimo\\\");\\n  \\n  // document.getElementById(`tetronimo-${currentPiece}-next`).classList.remove(\\\"show-tetronimo\\\");\\n  // document.getElementById(`tetronimo-${currentPiece}-next`).classList.add(\\\"hide-tetronimo\\\");\\n  // document.getElementById(`tetronimo-${nextPiece}-next`).classList.remove(\\\"hide-tetronimo\\\");\\n  // document.getElementById(`tetronimo-${nextPiece}-next`).classList.add(\\\"show-tetronimo\\\");\\n\\n  document.addEventListener(\\\"keydown\\\", event => {\\n    // ================ GAMEPLAY CONTROLS START ================\\n    if (event.which === 87) {\\n      // w key\\n      piece.reversePiece();\\n    }\\n\\n    else if (event.which === 83) {\\n      // s key\\n      piece.moveDown();\\n    }\\n\\n    else if (event.which === 65) {\\n      // a key\\n      piece.moveLeft();\\n    }\\n\\n    else if (event.which === 68) {\\n      // d key\\n      piece.moveRight();\\n    }\\n\\n    else if (event.which === 32 && event.target === document.body) {\\n      // spacebar key\\n      console.log(\\\"spacebar\\\");\\n      \\n      event.preventDefault();\\n\\n      while ( piece.verticalCollision === false ) {\\n        piece.moveDown();\\n      }\\n    }\\n\\n    else if (event.which === 16) {\\n      // shift key\\n      console.log(\\\"shift key\\\");\\n    }\\n    // ================ GAMEPLAY CONTROLS END ================\\n\\n    else if (event.which === 81) {\\n      // q key\\n      console.log(\\\"game start\\\");\\n\\n      document.getElementById(\\\"play-screen\\\").classList.remove(\\\"show-screen\\\");\\n      document.getElementById(\\\"play-screen\\\").classList.add(\\\"hide-screen\\\");\\n      document.getElementById(\\\"pause-screen\\\").classList.remove(\\\"show-screen\\\");\\n      document.getElementById(\\\"pause-screen\\\").classList.add(\\\"hide-screen\\\");\\n    }\\n\\n    else if (event.which === 69) {\\n      // e key\\n      console.log(\\\"game paused\\\");\\n      \\n      document.getElementById(\\\"pause-screen\\\").classList.remove(\\\"hide-screen\\\");\\n      document.getElementById(\\\"pause-screen\\\").classList.add(\\\"show-screen\\\");\\n    }\\n\\n    else if (event.which === 85) {\\n      // u key\\n      console.log(\\\"u key\\\");\\n    }\\n\\n    else if (event.which === 73) {\\n      // i key\\n      console.log(\\\"i key\\\");\\n    }\\n  });\\n  // ============================================================ GAME CONTROLS END ============================================================\\n});\\n  \"\n\n//# sourceURL=webpack:///./src/game.js?./node_modules/raw-loader");

/***/ }),

/***/ "./node_modules/script-loader/addScript.js":
/*!*************************************************!*\
  !*** ./node_modules/script-loader/addScript.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\nmodule.exports = function(src) {\n\tfunction log(error) {\n\t\t(typeof console !== \"undefined\")\n\t\t&& (console.error || console.log)(\"[Script Loader]\", error);\n\t}\n\n\t// Check for IE =< 8\n\tfunction isIE() {\n\t\treturn typeof attachEvent !== \"undefined\" && typeof addEventListener === \"undefined\";\n\t}\n\n\ttry {\n\t\tif (typeof execScript !== \"undefined\" && isIE()) {\n\t\t\texecScript(src);\n\t\t} else if (typeof eval !== \"undefined\") {\n\t\t\teval.call(null, src);\n\t\t} else {\n\t\t\tlog(\"EvalError: No eval function available\");\n\t\t}\n\t} catch (error) {\n\t\tlog(error);\n\t}\n}\n\n\n//# sourceURL=webpack:///./node_modules/script-loader/addScript.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! !./node_modules/script-loader/addScript.js */ \"./node_modules/script-loader/addScript.js\")(__webpack_require__(/*! !./node_modules/raw-loader!./src/game.js */ \"./node_modules/raw-loader/index.js!./src/game.js\"))\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/game.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/game.js */\"./src/game.js\");\n\n\n//# sourceURL=webpack:///multi_./src/game.js?");

/***/ })

/******/ });