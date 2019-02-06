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

/***/ "./node_modules/raw-loader/index.js!./src/entry.js":
/*!************************************************!*\
  !*** ./node_modules/raw-loader!./src/entry.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"import Button from './button';\\n\\ndocument.addEventListener(\\\"DOMContentLoaded\\\", () => {\\n  document.getElementById(\\\"details\\\").addEventListener(\\\"click\\\", () => {\\n    alert(\\\"successful!\\\");\\n    // 1. Find the detail-modal.\\n    // 2. If the detail-modal contains \\\"hide-modal\\\", change it to \\\"show-modal\\\".\\n    // 3. Else, change \\\"show-modal\\\" to \\\"hide-modal\\\".\\n  });\\n\\n  document.getElementById(\\\"start-game\\\").addEventListener(\\\"click\\\", () => {\\n    alert(\\\"start-game\\\");\\n  });\\n\\n  document.getElementById(\\\"pause-game\\\").addEventListener(\\\"click\\\", () => {\\n    alert(\\\"pause-game\\\");\\n  });\\n\\n  document.getElementById(\\\"mute-music\\\").addEventListener(\\\"click\\\", () => {\\n    alert(\\\"mute-music\\\");\\n  });\\n\\n  document.getElementById(\\\"change-music\\\").addEventListener(\\\"click\\\", () => {\\n    alert(\\\"change-music\\\");\\n  });\\n});\"\n\n//# sourceURL=webpack:///./src/entry.js?./node_modules/raw-loader");

/***/ }),

/***/ "./node_modules/script-loader/addScript.js":
/*!*************************************************!*\
  !*** ./node_modules/script-loader/addScript.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\nmodule.exports = function(src) {\n\tfunction log(error) {\n\t\t(typeof console !== \"undefined\")\n\t\t&& (console.error || console.log)(\"[Script Loader]\", error);\n\t}\n\n\t// Check for IE =< 8\n\tfunction isIE() {\n\t\treturn typeof attachEvent !== \"undefined\" && typeof addEventListener === \"undefined\";\n\t}\n\n\ttry {\n\t\tif (typeof execScript !== \"undefined\" && isIE()) {\n\t\t\texecScript(src);\n\t\t} else if (typeof eval !== \"undefined\") {\n\t\t\teval.call(null, src);\n\t\t} else {\n\t\t\tlog(\"EvalError: No eval function available\");\n\t\t}\n\t} catch (error) {\n\t\tlog(error);\n\t}\n}\n\n\n//# sourceURL=webpack:///./node_modules/script-loader/addScript.js?");

/***/ }),

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! !./node_modules/script-loader/addScript.js */ \"./node_modules/script-loader/addScript.js\")(__webpack_require__(/*! !./node_modules/raw-loader!./src/entry.js */ \"./node_modules/raw-loader/index.js!./src/entry.js\"))\n\n//# sourceURL=webpack:///./src/entry.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/entry.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/entry.js */\"./src/entry.js\");\n\n\n//# sourceURL=webpack:///multi_./src/entry.js?");

/***/ })

/******/ });