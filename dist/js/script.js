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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/_script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/_script.js":
/*!***************************!*\
  !*** ./src/js/_script.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_circleProgressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/circleProgressBar */ "./src/js/modules/circleProgressBar.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");




document.addEventListener('DOMContentLoaded', function () {
  Object(_modules_circleProgressBar__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_timer__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

/***/ }),

/***/ "./src/js/modules/circleProgressBar.js":
/*!*********************************************!*\
  !*** ./src/js/modules/circleProgressBar.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setProgressCircle; });
function setProgressCircle() {
  var circle = document.querySelector('.promo__progress-ring-circle'),
      radius = circle.r.baseVal.value,
      circumference = 2 * Math.PI * radius,
      persentVal = document.querySelector('.promo__stat-persent').innerHTML.match(/\d+/g);
  circle.style.strokeDasharray = "".concat(circumference, " ").concat(circumference);
  circle.style.strokeDashoffset = circumference;

  function setProgress(persent) {
    var offset = circumference - persent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
  }

  ;
  setProgress(persentVal);
}
;

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return timer; });
function timer() {
  var timerDeadline = document.querySelector('.timer__deadline span').textContent,
      deadline = new Date("".concat(timerDeadline));

  function getTime(endtime) {
    var total = Date.parse(deadline) - Date.parse(new Date()),
        days = Math.floor(total / (1000 * 60 * 60 * 24)),
        hours = Math.floor(total / (1000 * 60 * 60) % 24),
        minutes = Math.floor(total / (1000 * 60) % 60),
        seconds = Math.floor(total / 1000 % 60);
    return {
      total: total,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  function setClock(selector, endtime) {
    var timer = document.querySelector(selector),
        days = timer.querySelector('.days'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function getZero(num) {
      if (num >= 0 && num < 10) {
        return "0".concat(num);
      } else {
        return num;
      }
    }

    function updateClock() {
      var t = getTime(endtime);
      days.textContent = getZero(t.days);
      hours.textContent = getZero(t.hours);
      minutes.textContent = getZero(t.minutes);
      seconds.textContent = getZero(t.seconds);

      if (t.total <= 0) {
        var timerClock = document.querySelector('.timer');
        var end = document.createElement('div');
        timer.style = 'display: none';
        end.classList.add('title', 'title_mt35');
        end.innerHTML = 'The end';
        timerClock.append(end);
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer__wrapper', deadline);
}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map