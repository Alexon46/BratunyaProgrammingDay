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

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var form_field = document.querySelectorAll('form label');

_toConsumableArray(form_field).forEach(function (element) {
  var label = element.querySelector('.placeholder');
  var field = element.querySelector('input');

  field.onfocus = function () {
    label.classList.add('active');
  };

  field.onblur = function () {
    if (field.value.length == 0) {
      label.classList.remove('active');
    }
  };
});

function requestDate(url) {
  var proxy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', proxy + url, true);

    xhr.onload = function () {
      if (this.status == 200) {
        resolve(this);
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

    xhr.onerror = function () {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });
}

var sign_in = document.querySelector('#sign_in button');
sign_in.addEventListener('click', function (event) {
  event.preventDefault();
  authorisation();
});

function authorisation() {
  var form = document.getElementById('sign_in');
  var params = 'username=' + encodeURIComponent(form.name.value) + '&password=' + encodeURIComponent(form.instrument.value);
  requestDate('/api/login?' + params).then(function (result) {
    var json = JSON.parse(result.response);

    if (json.error) {
      var errorText = document.createElement('span');
      errorText.classList.add('error');
      errorText.innerHTML = json.error;
      form.append(errorText);
      errorText.classList.add('show');
    } else {
      if (json.length) {
        generateTable(json);
      }
    }
  }, function (error) {
    console.log("Rejected: " + error);
  })["catch"](function (error) {
    console.log("Catch: " + error);
  });
}

var search_btn = document.querySelector('#search button');
search_btn.addEventListener('click', function (event) {
  event.preventDefault();
  search();
});

function search() {
  var form = document.getElementById('search');
  var params = 'search_s=' + encodeURIComponent(form.search_s.value);
  requestDate('/api/compositions?' + params).then(function (result) {
    var json = JSON.parse(result.response);

    if (json.response.error) {
      var errorText = document.createElement('span');
      errorText.classList.add('error');
      errorText.innerHTML = json.error;
      form.append(errorText);
      errorText.classList.add('show');
    } else {
      if (json.length) {
        generateTable(json);
      }
    }
  }, function (error) {
    console.log("Rejected: " + error);
  })["catch"](function (error) {
    console.log("Catch: " + error);
  });
}

function generateTable(date) {
  var table = new DocumentFragment();
  var row_example = document.createElement('div');
  row_example.classList.add('content-table_row');
  var cell_example = document.createElement('div');
  cell_example.classList.add('content-table_row-cell');
  date.forEach(function (element) {
    var row = row_example.cloneNode(false);

    for (key in element) {
      var cell = cell_example.cloneNode(false);
      cell, classList.add('content-table_row-cell-' + key);
      cell.innerHTML(element[key]);
      row.append(cell);
    }

    table.append(row);
  });
  document.querySelector('.content-table').append(table);
}

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/xenx/laravel-projects/BratunyaProgrammingDay/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /home/xenx/laravel-projects/BratunyaProgrammingDay/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });