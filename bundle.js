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

eval("module.exports = \"// Button Logic\\ndocument.addEventListener(\\\"DOMContentLoaded\\\", () => {  \\n  // ============================================================ DETAILS MODAL START ============================================================\\n  const detailModal = document.getElementById(\\\"detail-modal\\\");\\n\\n  document.getElementById(\\\"details\\\").addEventListener(\\\"click\\\", () => {\\n    // Open About Modal\\n    if (detailModal.classList.contains(\\\"hide-about-modal\\\")) {\\n      detailModal.classList.remove(\\\"hide-about-modal\\\");\\n      detailModal.classList.add(\\\"about-modal\\\");\\n    }\\n  });\\n\\n  // Close About Modal\\n  document.getElementById(\\\"about-modal-close\\\").addEventListener(\\\"click\\\", () => {\\n    if (detailModal.classList.contains(\\\"about-modal\\\")) {\\n      detailModal.classList.remove(\\\"about-modal\\\");\\n      detailModal.classList.add(\\\"hide-about-modal\\\");\\n    }\\n  });\\n  // ============================================================ DETAILS MODAL END ============================================================\\n\\n\\n  // ============================================================ START GAME START ============================================================\\n  document.getElementById(\\\"start-game\\\").addEventListener(\\\"click\\\", () => {\\n    console.log(\\\"game start\\\");\\n\\n    document.getElementById(\\\"play-screen\\\").classList.add(\\\"hide-screen\\\");\\n    document.getElementById(\\\"pause-screen\\\").classList.remove(\\\"show-screen\\\");\\n    document.getElementById(\\\"pause-screen\\\").classList.add(\\\"hide-screen\\\");\\n  });\\n\\n  document.getElementById(\\\"play-game\\\").addEventListener(\\\"click\\\", () => {\\n    console.log(\\\"play game\\\");\\n\\n    document.getElementById(\\\"play-screen\\\").classList.remove(\\\"show-screen\\\");\\n    document.getElementById(\\\"play-screen\\\").classList.add(\\\"hide-screen\\\");\\n  });\\n\\n  document.getElementById(\\\"game-paused\\\").addEventListener(\\\"click\\\", () => {\\n    console.log(\\\"game paused\\\");\\n\\n    document.getElementById(\\\"pause-screen\\\").classList.remove(\\\"show-screen\\\");\\n    document.getElementById(\\\"pause-screen\\\").classList.add(\\\"hide-screen\\\");\\n\\n    document.getElementById(\\\"play-screen\\\").classList.remove(\\\"show-screen\\\");\\n    document.getElementById(\\\"play-screen\\\").classList.add(\\\"hide-screen\\\");\\n  });\\n  // ============================================================ START GAME END ============================================================\\n\\n\\n\\n  // ============================================================ PAUSE GAME START ============================================================\\n  document.getElementById(\\\"pause-game\\\").addEventListener(\\\"click\\\", () => {\\n    document.getElementById(\\\"pause-screen\\\").classList.remove(\\\"hide-screen\\\");\\n    document.getElementById(\\\"pause-screen\\\").classList.add(\\\"show-screen\\\");\\n    console.log(\\\"pause game\\\");\\n  });\\n  // ============================================================ PAUSE GAME END ============================================================\\n\\n\\n\\n  // ============================================================ MUTE MUSIC START ============================================================\\n  document.getElementById(\\\"mute-music\\\").addEventListener(\\\"click\\\", () => {\\n    alert(\\\"mute-music\\\");\\n  });\\n  // ============================================================ MUTE MUSIC END ============================================================\\n\\n\\n\\n  // ============================================================ CHANGE MUSIC START ============================================================\\n  document.getElementById(\\\"change-music\\\").addEventListener(\\\"click\\\", () => {\\n    alert(\\\"change-music\\\");\\n  });\\n  // ============================================================ CHANGE MUSIC END ============================================================\\n\\n\\n\\n  // ============================================================ GAME CONTROLS START ============================================================\\n  // Generate random Tetris piece\\n  const tetronimoes = [\\\"I\\\", \\\"O\\\", \\\"T\\\", \\\"S\\\", \\\"Z\\\", \\\"J\\\", \\\"L\\\"];\\n  const moveablePieces = [\\\"i\\\", \\\"o\\\", \\\"t\\\", \\\"s\\\", \\\"z\\\", \\\"j\\\", \\\"l\\\"];\\n  let currentPiece = tetronimoes[Math.floor(Math.random()*tetronimoes.length)];\\n  let nextPiece = tetronimoes[Math.floor(Math.random()*tetronimoes.length)];\\n\\n  document.getElementById(`tetronimo-${nextPiece}-next`).classList.remove(\\\"hide-tetronimo\\\");\\n  document.getElementById(`tetronimo-${nextPiece}-next`).classList.add(\\\"show-tetronimo\\\");\\n  \\n  const gameBoard = [\\n    // E = empty space\\n    // lower-case letter = moveable piece\\n    // capital letter = non-moveable piece\\n    [\\\"E\\\", \\\"E\\\", \\\"E\\\", currentPiece.toLowerCase(), currentPiece.toLowerCase(), currentPiece.toLowerCase(), currentPiece.toLowerCase(), \\\"E\\\", \\\"E\\\", \\\"E\\\"],\\n    [\\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\"],\\n    [\\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\"],\\n    [\\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\"],\\n    [\\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\"],\\n    [\\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\"],\\n    [\\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\"],\\n    [\\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\"],\\n    [\\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\"],\\n    [\\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\"],\\n    [\\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\"],\\n    [\\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\"],\\n    [\\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\"],\\n    [\\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\"],\\n    [\\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\"],\\n    [\\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\"],\\n    [\\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\"],\\n    [\\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\"],\\n    [\\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\", \\\"E\\\"],\\n    [\\\"E\\\", \\\"E\\\", \\\"E\\\", currentPiece, currentPiece, currentPiece, currentPiece, \\\"E\\\", \\\"E\\\", \\\"E\\\"],\\n  ];\\n\\n  function boardLogic(piece) {\\n    // Renders pieces onto the board.\\n    // Needs to move piece down every second (frame rate logic).\\n    console.log(piece);\\n    // Loops through entire gameBoard array\\n    document.getElementById(\\\"piece-board\\\").innerHTML = \\\"\\\";\\n    for(let y = 0; y < gameBoard.length; y++) {\\n      for (let x = 0; x < gameBoard[y].length; x++) {\\n        // if the grid square we're looking at is our moveable piece\\n        if(gameBoard[y][x] === piece.toLowerCase() || gameBoard[y][x] === piece) {\\n          document.getElementById(\\\"piece-board\\\").innerHTML += `<div class='piece-board-${piece}'></div>`;\\n        }\\n        \\n        // if the grid square we're looking at is an empty space\\n        else if (gameBoard[y][x] === \\\"E\\\") {\\n          document.getElementById(\\\"piece-board\\\").innerHTML +=\\\"<div class='piece-board-empty'></div>\\\";\\n        }\\n      }\\n    }\\n  }\\n\\n  function stopPiece() {\\n    for(let y = 0; y < gameBoard.length; y++) {\\n      for (let x = 0; x < gameBoard[y].length; x++) {\\n        if (moveablePieces.includes(gameBoard[y][x])) {\\n          gameBoard[y][x] = gameBoard[y][x].toUpperCase();\\n        }\\n      }\\n    }\\n  }\\n\\n  // Logic for pieces hitting the ground\\n  let canMove = true;\\n  function collisionLogic() {\\n    for(let y = 0; y < gameBoard.length; y++) {\\n      for (let x = 0; x < gameBoard[y].length; x++) {\\n        // last row logic\\n        if (gameBoard[y][x] === currentPiece.toLowerCase()) {\\n          if (y === gameBoard.length - 1 || tetronimoes.includes(gameBoard[y + 1][x])) {\\n            canMove = false;\\n            stopPiece();\\n          }\\n        }\\n      }\\n    }\\n\\n    if (canMove) {\\n      // if there IS a collision...\\n        // 1. Stop the piece from moving\\n        // 2. Bring out the next piece\\n      for(let y = gameBoard.length - 1; y >= 0; y--) {\\n        for (let x = 0; x < gameBoard[y].length; x++) {\\n          if (moveablePieces.includes(gameBoard[y][x])) {\\n            gameBoard[y + 1][x] = gameBoard[y][x];\\n            gameBoard[y][x] = \\\"E\\\";\\n          }\\n        }\\n      }\\n    }\\n  }\\n\\n  function pieceFrameRate() {\\n    window.setInterval(() => {\\n      collisionLogic();\\n      boardLogic(currentPiece);\\n      console.log(gameBoard);\\n    }, 1200);\\n  }\\n\\n  function generateNewPiece() {\\n    // Handles logic regarding the creation of a new piece once the conditions have been met in collisionLogic.\\n  }\\n\\n  // First, render the board\\n  // Then, start incrementally moving the pieces down\\n  boardLogic(currentPiece);\\n  pieceFrameRate();\\n\\n  document.addEventListener(\\\"keydown\\\", event => {\\n    // ================ GAMEPLAY CONTROLS START ================\\n    if (event.which === 87) {\\n      // w key\\n    }\\n\\n    else if (event.which === 83) {\\n      // s key\\n    }\\n\\n    else if (event.which === 65) {\\n      // a key\\n    }\\n\\n    else if (event.which === 68) {\\n      // d key\\n    }\\n\\n    else if (event.which === 32 && event.target === document.body) {\\n      // spacebar key\\n      console.log(\\\"spacebar\\\");\\n      \\n      event.preventDefault();\\n    }\\n\\n    else if (event.which === 16) {\\n      // shift key\\n      console.log(\\\"shift key\\\");\\n    }\\n    // ================ GAMEPLAY CONTROLS END ================\\n\\n    else if (event.which === 81) {\\n      // q key\\n      console.log(\\\"game start\\\");\\n\\n      document.getElementById(\\\"play-screen\\\").classList.remove(\\\"show-screen\\\");\\n      document.getElementById(\\\"play-screen\\\").classList.add(\\\"hide-screen\\\");\\n      document.getElementById(\\\"pause-screen\\\").classList.remove(\\\"show-screen\\\");\\n      document.getElementById(\\\"pause-screen\\\").classList.add(\\\"hide-screen\\\");\\n    }\\n\\n    else if (event.which === 69) {\\n      // e key\\n      console.log(\\\"game paused\\\");\\n      \\n      document.getElementById(\\\"pause-screen\\\").classList.remove(\\\"hide-screen\\\");\\n      document.getElementById(\\\"pause-screen\\\").classList.add(\\\"show-screen\\\");\\n    }\\n\\n    else if (event.which === 85) {\\n      // u key\\n      console.log(\\\"u key\\\");\\n    }\\n\\n    else if (event.which === 73) {\\n      // i key\\n      console.log(\\\"i key\\\");\\n    }\\n  });\\n  // ============================================================ GAME CONTROLS END ============================================================\\n});\\n  \"\n\n//# sourceURL=webpack:///./src/game.js?./node_modules/raw-loader");

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