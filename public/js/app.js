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

var form_field = document.querySelectorAll('form label');
form_field.forEach(function (element) {
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

;
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
      if (!form.querySelector('.error')) {
        var errorText = document.createElement('span');
        errorText.classList.add('error');
        errorText.innerHTML = json.error;
        form.append(errorText);
        setTimeout(function () {
          errorText.classList.add('show');
        }, 100);
      }
    } else {
      if (form.querySelector('.error')) {
        form.querySelector('.error').classList.remove('show');
      }

      document.querySelector('.header').classList.add('hide');
      document.querySelector('.content').classList.add('show');

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

; // document.querySelector('#search input').onchange = function(){
//     this.parentNode.querySelector('.search-reset').remove('show');
// }

document.querySelector('#search button').addEventListener('click', function (event) {
  event.preventDefault();
  var url = '/api/compositions?' + getParams.search_s() + '&' + getParams.title() + '&' + getParams.date() + '&' + getParams.tags();
  getCompositions(url);

  if (this.parentNode.search_s.value !== '') {
    this.parentNode.querySelector('.search-reset').classList.add('show');
    this.parentNode.querySelector('button').classList.add('hide');
  }
});
document.querySelector('.search-reset').addEventListener('click', function () {
  this.parentNode.reset();
  var url = '/api/compositions';
  getCompositions(url);
  this.classList.remove('show');
  this.parentNode.querySelector('button').classList.remove('hide');
});

function getCompositions(url) {
  requestDate(url).then(function (result) {
    var json = JSON.parse(result.response);

    if (json.length) {
      generateTable(json);
    } else {
      clearTable();
      var error = document.createElement('div');
      error.classList.add('content-table_row', 'content-table_row-error');
      error.innerHTML = 'Таких произведений не найдено';
      document.querySelector('.content-table').append(error);
    }
  }, function (error) {
    console.log("Rejected: " + error);
  })["catch"](function (error) {
    console.log("Catch: " + error);
  });
}

;

function clearTable() {
  var table = document.querySelector('.content-table');

  while (table.querySelector('.content-table_row')) {
    table.removeChild(table.querySelector('.content-table_row'));
  }
}

;
var orderby_btn = document.querySelectorAll('.filter-order');
orderby_btn.forEach(function (element) {
  element.addEventListener('click', function (event) {
    console.log(event.target);
    var attr = this.getAttribute('data-value');

    if (attr == 'asc') {
      this.setAttribute('data-value', 'desc');
      this.classList.add('reverse');
    } else {
      this.setAttribute('data-value', 'asc');
      this.classList.remove('reverse');
    }
  });
});
var getParams = {
  'search_s': function search_s() {
    var form = document.getElementById('search');
    return 'search_s=' + encodeURIComponent(form.search_s.value);
  },
  'title': function title() {
    var filter = document.querySelector('.content-table_head-cell-title');
    return 'title=' + encodeURIComponent(filter.querySelector('.filter-order').getAttribute('data-value'));
  },
  'date': function date() {
    var filter = document.querySelector('.content-table_head-cell-updated_at');
    return 'date=' + encodeURIComponent(filter.querySelector('.filter-order').getAttribute('data-value'));
  },
  'tags': function tags() {
    var tags = document.querySelectorAll('#tags-modal .tags-list_item.active'),
        tags_length = tags.length,
        tags_string = '';
    tags.forEach(function (elem, i) {
      tags_string += 'tag[]=' + elem.innerHTML + (i !== tags_length - 1 ? '&' : '');
    });
    return tags_string;
  }
};
var filter_btn = document.querySelectorAll('.filter-btn');
filter_btn.forEach(function (element) {
  element.addEventListener('click', function () {
    var filter = this.getAttribute('data-filter');
    var url = '/api/compositions?' + getParams.search_s() + '&' + getParams[filter]() + '&' + getParams.tags();
    getCompositions(url);
  });
});

function generateTable(date) {
  var rows = new DocumentFragment();
  row_example = document.createElement('div');
  row_example.classList.add('content-table_row');
  var cell_example = document.createElement('div');
  cell_example.classList.add('content-table_row-cell');
  var tags = [],
      tags_modal = new DocumentFragment(),
      tags_modal_wrap = document.createElement('div'),
      tags_modal_content = document.createElement('div'),
      tags_ul_example = document.createElement('ul'),
      tags_li_example = document.createElement('li');
  tags_modal_wrap.id = 'tags-modal';
  tags_modal_wrap.classList.add('modal-wrap');
  tags_modal_content.classList.add('modal-content');
  tags_ul_example.classList.add('tags-list');
  tags_li_example.classList.add('tags-list_item');
  date.forEach(function (element) {
    var row = row_example.cloneNode(false);
    var needdate = ['title', 'tags', 'updated_at'];

    for (var i = 0; i < 3; i++) {
      var cell = cell_example.cloneNode(false);
      cell.classList.add('content-table_row-cell-' + needdate[i]);

      if (needdate[i] == "tags") {
        (function () {
          var ul = tags_ul_example.cloneNode(false);
          element[needdate[i]].forEach(function (element) {
            var li = tags_li_example.cloneNode(false);
            li.innerHTML = element.tag;
            tags.push(element.tag);
            ul.append(li);
          });
          cell.append(ul);
        })();
      } else {
        cell.innerHTML = element[needdate[i]];
      }

      row.append(cell);
    }

    rows.append(row);
  });
  console.log(tags);
  tags = uniq(tags);
  var modal_tags_ul = tags_ul_example.cloneNode(false);
  tags.forEach(function (element) {
    var li = tags_li_example.cloneNode(false);
    li.innerHTML = element;
    li.addEventListener('click', toggleTags);
    modal_tags_ul.append(li);
  });
  tags_modal_content.append(modal_tags_ul);
  tags_modal_wrap.append(tags_modal_content);
  tags_modal.append(tags_modal_wrap);
  document.querySelector('.app').append(tags_modal);
  var tags_modal_target = document.querySelector('.content-table_head-cell-tags');
  tags_modal_target.addEventListener('click', toggleModal.bind(null, 'tags-modal', 'on'));
  tags_modal = document.getElementById('tags-modal');
  tags_modal.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal-wrap')) {
      toggleModal('tags-modal', 'off');
    }
  });
  console.log(tags);
  clearTable();
  document.querySelector('.content-table').append(rows);
}

;

function uniq(a) {
  var r = {};
  return a.filter(function (i) {
    return r.hasOwnProperty(i) ? !1 : r[i] = !0;
  });
}

function toggleTags(event) {
  event.stopPropagation();
  this.classList.toggle('active');
}

function toggleModal(modalId, value) {
  var modal = document.getElementById(modalId);

  if (value === 'on') {
    modal.classList.add('active');
  } else {
    modal.classList.remove('active');
  }
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

__webpack_require__(/*! /Users/macbook/Documents/верстка/orchestra calendar/BratunyaProgrammingDay/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /Users/macbook/Documents/верстка/orchestra calendar/BratunyaProgrammingDay/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });