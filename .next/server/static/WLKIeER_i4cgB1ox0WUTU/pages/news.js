module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(26);


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(2);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/Dropdown.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

 //import '../styles/dropdown.css';

/* Myself and Michael Brady were working on this, he did most of this page. Just thought i'd tell you incase you thought i was copying from him. We both worked together in labs */

var Dropdown_Dropdown =
/*#__PURE__*/
function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, props));
    _this.state = {
      visible: _this.props.visible,
      options: _this.props.options,
      selected: _this.props.selected
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Dropdown, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var jsxStyle = external_react_default.a.createElement("style", {
        jsx: true
      }, "\n            .list {\n                list-style-type: none;\n                width: 22.5%;\n                margin-left: 19em;\n                padding: 1em;\n                \n                \n            }\n            .ref {\n                background-color: #f2ddff;\n                border: 1px solid black;\n                text-align: center;\n                font-size: 18px;\n                border-radius: 1em;\n                \n            }\n            .ref:hover {\n                background-color: gray;\n            }\n            #head {\n                border-radius: 1em;\n                font-size: 22px;\n                background-color:purple;\n            }\n        ");
      var head = external_react_default.a.createElement("li", {
        id: "head",
        class: "ref",
        onClick: this.toggle,
        key: this.state.options.ref
      }, this.state.options[this.state.selected].text);
      var body = this.state.options.map(function (option) {
        return external_react_default.a.createElement("li", {
          class: "ref",
          onClick: function onClick() {
            return _this2.menuRefresh(option);
          }
        }, option.text);
      });
      if (!this.state.visible) return external_react_default.a.createElement("div", {
        class: "list"
      }, head, jsxStyle);else {
        return external_react_default.a.createElement("div", {
          class: "list"
        }, head, body, jsxStyle);
      }
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.setState({
        visible: this.state.visible = !this.state.visible,
        options: this.state.options,
        numOptions: this.state.numOptions
      });
    }
  }, {
    key: "changeHeader",
    value: function changeHeader(option) {
      for (var i = 0; i < this.state.options.length; i++) {
        if (this.state.options[i].ref === option.ref) {
          this.setState({
            selected: i
          });
        }
      }
    }
  }, {
    key: "menuRefresh",
    value: function menuRefresh(option) {
      this.changeHeader(option);
      this.props.setNewsSource(option.ref);
    }
  }, {
    key: "addref",
    value: function addref(ref, text) {
      this.setState({
        visible: this.visible,
        options: this.state.options.push({
          "ref": ref,
          "text": text
        }),
        numOptions: this.state.numOptions
      });
    }
  }]);

  return Dropdown;
}(external_react_["Component"]);

/* harmony default export */ var components_Dropdown = (Dropdown_Dropdown);
// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(3);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__(4);
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// CONCATENATED MODULE: ./components/SearchForm.js


function SearchForm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SearchForm_typeof = function _typeof(obj) { return typeof obj; }; } else { SearchForm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SearchForm_typeof(obj); }

function SearchForm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SearchForm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SearchForm_createClass(Constructor, protoProps, staticProps) { if (protoProps) SearchForm_defineProperties(Constructor.prototype, protoProps); if (staticProps) SearchForm_defineProperties(Constructor, staticProps); return Constructor; }

function SearchForm_possibleConstructorReturn(self, call) { if (call && (SearchForm_typeof(call) === "object" || typeof call === "function")) { return call; } return SearchForm_assertThisInitialized(self); }

function SearchForm_getPrototypeOf(o) { SearchForm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SearchForm_getPrototypeOf(o); }

function SearchForm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SearchForm_setPrototypeOf(subClass, superClass); }

function SearchForm_setPrototypeOf(o, p) { SearchForm_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SearchForm_setPrototypeOf(o, p); }

function SearchForm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Import Dependencies
 //
// Define SearchForm Class
//

var SearchForm_SearchForm =
/*#__PURE__*/
function (_Component) {
  SearchForm_inherits(SearchForm, _Component);

  // constructor accepts props and initialises state
  function SearchForm(props) {
    var _this;

    SearchForm_classCallCheck(this, SearchForm);

    _this = SearchForm_possibleConstructorReturn(this, SearchForm_getPrototypeOf(SearchForm).call(this, props));

    _defineProperty(SearchForm_assertThisInitialized(SearchForm_assertThisInitialized(_this)), "formSubmitted", function (event) {
      // Validate input value
      if (event.target.newsSource.value != "") {
        // setNewsSource is a function passed from parent (news page) via props
        // It is used as a way to pass the input value back up to the parent
        // This is called state lifting
        // see: https://reactjs.org/docs/lifting-state-up.html
        _this.props.setNewsSource(event.target.newsSource.value);
      } // prevent page reload (prevent submit)


      event.preventDefault();
    });

    _this.state = {};
    return _this;
  } //
  // an event handler for form submit
  //


  SearchForm_createClass(SearchForm, [{
    key: "render",
    // Render the form
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
        id: "search",
        className: "jsx-3989231330"
      }, external_react_default.a.createElement("h3", {
        className: "jsx-3989231330"
      }, "Enter a news source"), external_react_default.a.createElement("form", {
        onSubmit: this.formSubmitted,
        className: "jsx-3989231330"
      }, external_react_default.a.createElement("input", {
        name: "newsSource",
        placeholder: "e.g: the-irish-times",
        type: "text",
        className: "jsx-3989231330"
      }), external_react_default.a.createElement("button", {
        className: "jsx-3989231330"
      }, "Get News")), external_react_default.a.createElement(style_default.a, {
        styleId: "3989231330",
        css: ["#search.jsx-3989231330{margin-left:23.4em;}", "#search.jsx-3989231330 h3.jsx-3989231330{margin-left:1.8em;}"]
      })));
    }
  }]);

  return SearchForm;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./pages/news.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return news_News; });




function news_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { news_typeof = function _typeof(obj) { return typeof obj; }; } else { news_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return news_typeof(obj); }

function news_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function news_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function news_createClass(Constructor, protoProps, staticProps) { if (protoProps) news_defineProperties(Constructor.prototype, protoProps); if (staticProps) news_defineProperties(Constructor, staticProps); return Constructor; }

function news_possibleConstructorReturn(self, call) { if (call && (news_typeof(call) === "object" || typeof call === "function")) { return call; } return news_assertThisInitialized(self); }

function news_getPrototypeOf(o) { news_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return news_getPrototypeOf(o); }

function news_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) news_setPrototypeOf(subClass, superClass); }

function news_setPrototypeOf(o, p) { news_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return news_setPrototypeOf(o, p); }

function news_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function news_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Passing from child to parent
// https://www.robinwieruch.de/react-pass-props-to-component/#react-props
//
// Imports
//
// This is the Link API

 // Import fetch library

 // mport SearchForm Component

 //(free version) API key from  https://newsapi.org/
// Get your own key!

var apiKey = '3780066b33ef41b9b4b7e957994e9c38'; // Initial News source

var defaultNewsSource = 'the-irish-times'; //
// async method fetches and returns data from a url
//

function getNews(_x) {
  return _getNews.apply(this, arguments);
} //
//  The News page defined as an ES6 Class
//


function _getNews() {
  _getNews = _asyncToGenerator(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee3(url) {
    var res, data;
    return regenerator_default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return external_isomorphic_unfetch_default()(url);

          case 3:
            res = _context3.sent;
            _context3.next = 6;
            return res.json();

          case 6:
            data = _context3.sent;
            return _context3.abrupt("return", data);

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", _context3.t0);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 10]]);
  }));
  return _getNews.apply(this, arguments);
}

var news_News =
/*#__PURE__*/
function (_React$Component) {
  news_inherits(News, _React$Component);

  // Constructor
  // Recieve props and initialise state properties
  function News(props) {
    var _this;

    news_classCallCheck(this, News);

    _this = news_possibleConstructorReturn(this, news_getPrototypeOf(News).call(this, props));

    news_defineProperty(news_assertThisInitialized(news_assertThisInitialized(_this)), "setNewsSource", function (input) {
      _this.setState({
        newsSource: input,
        url: "https://newsapi.org/v2/top-headlines?sources=".concat(input, "&apiKey=").concat(apiKey)
      });
    });

    news_defineProperty(news_assertThisInitialized(news_assertThisInitialized(_this)), "searchNewsAPI", function (event) {
      // set state values - this will trigger an update and componentDidUpdate
      _this.setState({
        // Get the link text
        newsSource: "".concat(event.target.innerText),
        // Build the search URL using the link name
        url: "https://newsapi.org/v2/".concat(event.target.name, "&apiKey=").concat(apiKey)
      });

      console.log(_this.state.url);
    });

    _this.state = {
      newsSource: "",
      url: "",
      articles: [],
      index: 0
    };
    return _this;
  } // This function is passed to the SearchForm and used the get the value entered
  // This value will be used to generate the api url


  news_createClass(News, [{
    key: "updateID",
    value: function updateID(index) {
      console.log("hi");
      this.setState({
        index: index
      });
      /*I thought this would set the state and it could be retrieved on the articles page. I tried a lot */
    } //
    // render() method generates the page
    //

  }, {
    key: "render",
    value: function render() {
      // if state.articles is empty copy props to it
      if (this.state.articles.length == 0) {
        this.state.articles = this.props.articles;
      }

      return external_react_default.a.createElement("div", {
        className: "jsx-1012521257"
      }, external_react_default.a.createElement(components_Dropdown, {
        setNewsSource: this.setNewsSource,
        selected: 0,
        options: [{
          "ref": "die-zeit",
          "text": "Die Zeit"
        }, {
          "ref": "hacker-news",
          "text": "Hacker News"
        }, {
          "ref": "infobae",
          "text": "Infobae"
        }, {
          "ref": "les-echos",
          "text": "Les Echos"
        }]
      }), external_react_default.a.createElement(SearchForm_SearchForm, {
        setNewsSource: this.setNewsSource
      }), external_react_default.a.createElement("ul", {
        className: "jsx-1012521257" + " " + "newsMenu"
      }, external_react_default.a.createElement("li", {
        className: "jsx-1012521257"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.searchNewsAPI,
        name: "top-headlines?sources=abc-news",
        className: "jsx-1012521257"
      }, "ABC News")), external_react_default.a.createElement("li", {
        className: "jsx-1012521257"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.searchNewsAPI,
        name: "top-headlines?sources=cbc-news",
        className: "jsx-1012521257"
      }, "CBC News")), external_react_default.a.createElement("li", {
        className: "jsx-1012521257"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.searchNewsAPI,
        name: "top-headlines?sources=fox-news",
        className: "jsx-1012521257"
      }, "Fox News")), external_react_default.a.createElement("li", {
        className: "jsx-1012521257"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.searchNewsAPI,
        name: "top-headlines?sources=bbc-news",
        className: "jsx-1012521257"
      }, "BBC News"))), external_react_default.a.createElement("h3", {
        className: "jsx-1012521257"
      }, this.state.newsSource.split("-").join(" ")), external_react_default.a.createElement("div", {
        className: "jsx-1012521257"
      }, this.state.articles.map(function (article, index) {
        return external_react_default.a.createElement("section", {
          key: index,
          className: "jsx-1012521257"
        }, external_react_default.a.createElement("h3", {
          className: "jsx-1012521257"
        }, article.title), external_react_default.a.createElement("p", {
          className: "jsx-1012521257" + " " + "author"
        }, article.author, " ", Date(article.publishedAt)), external_react_default.a.createElement("img", {
          src: article.urlToImage,
          alt: "article image",
          className: "jsx-1012521257" + " " + "img-article"
        }), external_react_default.a.createElement("p", {
          className: "jsx-1012521257"
        }, article.description), external_react_default.a.createElement("p", {
          className: "jsx-1012521257"
        }, article.content), external_react_default.a.createElement("p", {
          className: "jsx-1012521257"
        }, external_react_default.a.createElement(link_default.a, {
          as: "/article/".concat(index),
          onClick: "updateID(".concat(index, ")"),
          href: "/article?id=".concat(index)
        }, external_react_default.a.createElement("a", {
          className: "jsx-1012521257"
        }, "Read More"))));
      })), external_react_default.a.createElement(style_default.a, {
        styleId: "1012521257",
        css: ["section.jsx-1012521257{width:50%;border:1px solid red;background-color:#f2ddff;padding:1em;padding-top:0em;margin-left:5em;}", "section.jsx-1012521257 h3.jsx-1012521257{color:blue;-webkit-text-decoration:bold;text-decoration:bold;}", ".author.jsx-1012521257{font-style:italic;font-size:0.8em;}", ".img-article.jsx-1012521257{max-width:90%;}", ".newsMenu.jsx-1012521257{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-left:5em;margin-right:42em;padding:0;margin-top:20px;}", ".newsMenu.jsx-1012521257 li.jsx-1012521257{display:inline-table;margin-left:6em;font-weight:bold;}", ".newsMenu.jsx-1012521257 li.jsx-1012521257 a.jsx-1012521257{font-size:1em;color:red;display:block;-webkit-text-decoration:none;text-decoration:none;}", ".newsMenu.jsx-1012521257 li.jsx-1012521257 a.jsx-1012521257:hover{color:black;-webkit-text-decoration:underline;text-decoration:underline;}"]
      }));
    } //
    // Get initial data on server side using an AJAX call
    // This will initialise the 'props' for the News page
    //    

  }, {
    key: "componentDidUpdate",
    // componentDidUpdate is called when the page state or props re updated
    // It can be over-ridden to perform other functions when an update occurs
    // Here it fetches new data using this.state.newsSource as the source
    value: function () {
      var _componentDidUpdate = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(prevProps, prevState) {
        var data;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.state.url !== prevState.url)) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return getNews(this.state.url);

              case 3:
                data = _context.sent;

                // If the result contains and articles array then it is good so update articles
                if (Array.isArray(data.articles)) {
                  // Store articles in state
                  this.state.articles = data.articles; // Force page update by changing state (make sure it happens!)

                  this.setState(this.state);
                } // Otherwise it contains an error, log and redirect to error page (status code 400)
                else {
                    console.error(data);

                    if (response) {
                      response.statusCode = 400;
                      response.end(data.message);
                    }
                  }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentDidUpdate(_x2, _x3) {
        return _componentDidUpdate.apply(this, arguments);
      };
    }() // End componentDidUpdate

  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(response) {
        var defaultUrl, data;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // Build the url which will be used to get the data
                // See https://newsapi.org/s/the-irish-times-api
                defaultUrl = "https://newsapi.org/v2/top-headlines?sources=".concat(defaultNewsSource, "&apiKey=").concat(apiKey); // Get news data from the api url

                _context2.next = 3;
                return getNews(defaultUrl);

              case 3:
                data = _context2.sent;

                if (!Array.isArray(data.articles)) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt("return", {
                  articles: data.articles
                });

              case 8:
                console.error(data);

                if (response) {
                  response.statusCode = 400;
                  response.end(data.message);
                }

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getInitialProps(_x4) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return News;
}(external_react_default.a.Component); // End class




/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ })

/******/ });