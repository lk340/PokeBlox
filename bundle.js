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

eval("module.exports = \"// import Piece from './piece';\\n// import Board from './board';\\n\\n// Button Logic\\ndocument.addEventListener(\\\"DOMContentLoaded\\\", () => {\\n  const detailModal = document.getElementById(\\\"detail-modal\\\");\\n\\n  document.getElementById(\\\"details\\\").addEventListener(\\\"click\\\", () => {\\n    // debugger;\\n    if (detailModal.classList.contains(\\\"hide-about-modal\\\")) {\\n      detailModal.classList.remove(\\\"hide-about-modal\\\");\\n      detailModal.classList.add(\\\"about-modal\\\");\\n    }\\n  });\\n\\n  // Close About Modal\\n  document.getElementById(\\\"about-modal-close\\\").addEventListener(\\\"click\\\", () => {\\n    if (detailModal.classList.contains(\\\"about-modal\\\")) {\\n      detailModal.classList.remove(\\\"about-modal\\\");\\n      detailModal.classList.add(\\\"hide-about-modal\\\");\\n    }\\n  });\\n\\n  document.getElementById(\\\"start-game\\\").addEventListener(\\\"click\\\", () => {\\n    alert(\\\"start-game\\\");\\n\\n    // instantiate a piece class using a random Tetronimo letter as an argument\\n    // instantiate a board class using the piece class as an argument\\n\\n    const tetronimoes = [\\\"I\\\", \\\"O\\\", \\\"T\\\", \\\"S\\\", \\\"Z\\\", \\\"J\\\", \\\"L\\\"];\\n    const tetronimo = tetronimoes[Math.floor(Math.random()*tetronimoes.length)];\\n\\n    // let randomPiece = Piece(tetronimo);\\n    // let currentBoard = Board(randomPiece); \\n      // QUICK NOTE: won't this instantiate a new board every time?\\n      // If so, wouldn't that clear the board every time a new piece class is instantiated?\\n        // possible work-around: instantiate pieces classes inside of the board itself, rather than here\\n          // so that we only need to instantiate the board once until the game is over\\n  });\\n\\n  document.getElementById(\\\"pause-game\\\").addEventListener(\\\"click\\\", () => {\\n    alert(\\\"pause-game\\\");\\n  });\\n\\n  document.getElementById(\\\"mute-music\\\").addEventListener(\\\"click\\\", () => {\\n    alert(\\\"mute-music\\\");\\n  });\\n\\n  document.getElementById(\\\"change-music\\\").addEventListener(\\\"click\\\", () => {\\n    alert(\\\"change-music\\\");\\n  });\\n\\n  // console.log(document.getElementById(\\\"tetronimo-I-next\\\").classList);\\n\\n  // Position of Pieces\\n  document.getElementById(\\\"tetronimo-I\\\").style.marginLeft = \\\"90px\\\";\\n  document.getElementById(\\\"tetronimo-I\\\").style.marginTop = \\\"0px\\\";\\n\\n  document.addEventListener(\\\"keydown\\\", event => {\\n    if (event.which === 87) {\\n      // w key\\n      // console.log(\\\"w key\\\");\\n      document.getElementById(\\\"tetronimo-I\\\").style.marginTop = `${parseInt(document.getElementById(\\\"tetronimo-I\\\").style.marginTop) - 30}px`;\\n    }\\n\\n    else if (event.which === 83) {\\n    // else if (event.which === 83) {\\n      // s key\\n      // console.log(\\\"s key\\\");\\n      document.getElementById(\\\"tetronimo-I\\\").style.marginTop = `${parseInt(document.getElementById(\\\"tetronimo-I\\\").style.marginTop) + 30}px`;\\n    }\\n\\n    else if (event.which === 65) {\\n      // a key\\n      // console.log(\\\"a key\\\");\\n      document.getElementById(\\\"tetronimo-I\\\").style.marginLeft = `${parseInt(document.getElementById(\\\"tetronimo-I\\\").style.marginLeft) - 30}px`;\\n    }\\n\\n    else if (event.which === 68) {\\n      // d key\\n      // console.log(\\\"d key\\\");\\n      document.getElementById(\\\"tetronimo-I\\\").style.marginLeft = `${parseInt(document.getElementById(\\\"tetronimo-I\\\").style.marginLeft) + 30}px`;\\n    }\\n\\n    else if (event.which === 32) {\\n      // spacebar key\\n      console.log(\\\"spacebar key\\\");\\n    }\\n\\n    else if (event.which === 16) {\\n      // shift key\\n      console.log(\\\"shift key\\\");\\n    }\\n\\n    else if (event.which === 79) {\\n      // o key\\n      console.log(\\\"o key\\\");\\n    }\\n\\n    else if (event.which === 80) {\\n      // p key\\n      console.log(\\\"p key\\\");\\n    }\\n\\n    else if (event.which === 85) {\\n      // u key\\n      console.log(\\\"u key\\\");\\n    }\\n\\n    else if (event.which === 73) {\\n      // i key\\n      console.log(\\\"i key\\\");\\n    }\\n  });\\n\\n});\\n\"\n\n//# sourceURL=webpack:///./src/game.js?./node_modules/raw-loader");

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