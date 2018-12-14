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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Dropdown.js":
/*!********************************!*\
  !*** ./components/Dropdown.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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

var Dropdown =
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

      var jsxStyle = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
        jsx: true
      }, "\n            .list {\n                list-style-type: none;\n                width: 22.5%;\n                margin-left: 19em;\n                padding: 1em;\n                \n                \n            }\n            .ref {\n                background-color: #f2ddff;\n                border: 1px solid black;\n                text-align: center;\n                font-size: 18px;\n                border-radius: 1em;\n                \n            }\n            .ref:hover {\n                background-color: gray;\n            }\n            #head {\n                border-radius: 1em;\n                font-size: 22px;\n                background-color:purple;\n            }\n        ");
      var head = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        id: "head",
        class: "ref",
        onClick: this.toggle,
        key: this.state.options.ref
      }, this.state.options[this.state.selected].text);
      var body = this.state.options.map(function (option) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          class: "ref",
          onClick: function onClick() {
            return _this2.menuRefresh(option);
          }
        }, option.text);
      });
      if (!this.state.visible) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "list"
      }, head, jsxStyle);else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ }),

/***/ "./components/SearchForm.js":
/*!**********************************!*\
  !*** ./components/SearchForm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchForm; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Import Dependencies
 //
// Define SearchForm Class
//

var SearchForm =
/*#__PURE__*/
function (_Component) {
  _inherits(SearchForm, _Component);

  // constructor accepts props and initialises state
  function SearchForm(props) {
    var _this;

    _classCallCheck(this, SearchForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchForm).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "formSubmitted", function (event) {
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


  _createClass(SearchForm, [{
    key: "render",
    // Render the form
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "search",
        className: "jsx-3989231330"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-3989231330"
      }, "Enter a news source"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        onSubmit: this.formSubmitted,
        className: "jsx-3989231330"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        name: "newsSource",
        placeholder: "e.g: the-irish-times",
        type: "text",
        className: "jsx-3989231330"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "jsx-3989231330"
      }, "Get News")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3989231330",
        css: "#search.jsx-3989231330{margin-left:23.4em;}#search.jsx-3989231330 h3.jsx-3989231330{margin-left:1.8em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWljaGFcXFdlYnN0b3JtUHJvamVjdHNcXFdlYlByb2plY3RcXGNvbXBvbmVudHNcXFNlYXJjaEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0R1QixBQUcwQixBQUdDLGtCQUNwQixDQUhBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbWljaGFcXFdlYnN0b3JtUHJvamVjdHNcXFdlYlByb2plY3RcXGNvbXBvbmVudHNcXFNlYXJjaEZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgRGVwZW5kZW5jaWVzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vXHJcbi8vIERlZmluZSBTZWFyY2hGb3JtIENsYXNzXHJcbi8vXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIC8vIGNvbnN0cnVjdG9yIGFjY2VwdHMgcHJvcHMgYW5kIGluaXRpYWxpc2VzIHN0YXRlXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge307XHJcbiAgfVxyXG5cclxuICAvL1xyXG4gIC8vIGFuIGV2ZW50IGhhbmRsZXIgZm9yIGZvcm0gc3VibWl0XHJcbiAgLy9cclxuICBmb3JtU3VibWl0dGVkID0gZXZlbnQgPT4ge1xyXG4gICAgLy8gVmFsaWRhdGUgaW5wdXQgdmFsdWVcclxuICAgIGlmIChldmVudC50YXJnZXQubmV3c1NvdXJjZS52YWx1ZSAhPSBcIlwiKSB7XHJcbiAgICAgIC8vIHNldE5ld3NTb3VyY2UgaXMgYSBmdW5jdGlvbiBwYXNzZWQgZnJvbSBwYXJlbnQgKG5ld3MgcGFnZSkgdmlhIHByb3BzXHJcbiAgICAgIC8vIEl0IGlzIHVzZWQgYXMgYSB3YXkgdG8gcGFzcyB0aGUgaW5wdXQgdmFsdWUgYmFjayB1cCB0byB0aGUgcGFyZW50XHJcbiAgICAgIC8vIFRoaXMgaXMgY2FsbGVkIHN0YXRlIGxpZnRpbmdcclxuICAgICAgLy8gc2VlOiBodHRwczovL3JlYWN0anMub3JnL2RvY3MvbGlmdGluZy1zdGF0ZS11cC5odG1sXHJcbiAgICAgIHRoaXMucHJvcHMuc2V0TmV3c1NvdXJjZShldmVudC50YXJnZXQubmV3c1NvdXJjZS52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvLyBwcmV2ZW50IHBhZ2UgcmVsb2FkIChwcmV2ZW50IHN1Ym1pdClcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gUmVuZGVyIHRoZSBmb3JtXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7LyogU2VhcmNoIElucHV0ICovfVxyXG4gICAgICAgIDxkaXYgaWQ9XCJzZWFyY2hcIj5cclxuICAgICAgICAgIDxoMz5FbnRlciBhIG5ld3Mgc291cmNlPC9oMz5cclxuICAgICAgICAgIHsvKiBOb3RlIGV2ZW50IGhhbmRsZXIgKi99XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5mb3JtU3VibWl0dGVkfT5cclxuICAgICAgICAgICAgey8qIFRoZSBpbnB1dCBmaWVsZCAqL31cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgbmFtZT1cIm5ld3NTb3VyY2VcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nOiB0aGUtaXJpc2gtdGltZXNcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgey8qIEJ1dHRvbiBjbGljayB3aWxsIHRyaWdnZXIgc3VibWl0ICovfVxyXG4gICAgICAgICAgICA8YnV0dG9uPkdldCBOZXdzPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8c3R5bGUganN4ID57YFxyXG4gICAgICAjc2VhcmNoIHtcclxuICAgICAgIG1hcmdpbi1sZWZ0OjIzLjRlbTtcclxuICAgICAgfVxyXG4gICAgICAjc2VhcmNoIGgze1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxLjhlbTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgXHJcbiAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgIFxyXG4gIH1cclxuICBcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\micha\\WebstormProjects\\WebProject\\components\\SearchForm.js */"
      })));
    }
  }]);

  return SearchForm;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./pages/news.js":
/*!***********************!*\
  !*** ./pages/news.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return News; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Dropdown */ "./components/Dropdown.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_SearchForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SearchForm */ "./components/SearchForm.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(url) {
    var res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(url);

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

var News =
/*#__PURE__*/
function (_React$Component) {
  _inherits(News, _React$Component);

  // Constructor
  // Recieve props and initialise state properties
  function News(props) {
    var _this;

    _classCallCheck(this, News);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(News).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setNewsSource", function (input) {
      _this.setState({
        newsSource: input,
        url: "https://newsapi.org/v2/top-headlines?sources=".concat(input, "&apiKey=").concat(apiKey)
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "searchNewsAPI", function (event) {
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


  _createClass(News, [{
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

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1012521257"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SearchForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
        setNewsSource: this.setNewsSource
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
        className: "jsx-1012521257" + " " + "newsMenu"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
        className: "jsx-1012521257"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: "#",
        onClick: this.searchNewsAPI,
        name: "top-headlines?sources=abc-news",
        className: "jsx-1012521257"
      }, "ABC News")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
        className: "jsx-1012521257"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: "#",
        onClick: this.searchNewsAPI,
        name: "top-headlines?sources=cbc-news",
        className: "jsx-1012521257"
      }, "CBC News")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
        className: "jsx-1012521257"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: "#",
        onClick: this.searchNewsAPI,
        name: "top-headlines?sources=fox-news",
        className: "jsx-1012521257"
      }, "Fox News")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
        className: "jsx-1012521257"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: "#",
        onClick: this.searchNewsAPI,
        name: "top-headlines?sources=bbc-news",
        className: "jsx-1012521257"
      }, "BBC News"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
        className: "jsx-1012521257"
      }, this.state.newsSource.split("-").join(" ")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1012521257"
      }, this.state.articles.map(function (article, index) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
          key: index,
          className: "jsx-1012521257"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
          className: "jsx-1012521257"
        }, article.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
          className: "jsx-1012521257" + " " + "author"
        }, article.author, " ", Date(article.publishedAt)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
          src: article.urlToImage,
          alt: "article image",
          className: "jsx-1012521257" + " " + "img-article"
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
          className: "jsx-1012521257"
        }, article.description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
          className: "jsx-1012521257"
        }, article.content), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
          className: "jsx-1012521257"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          as: "/article/".concat(index),
          onClick: "updateID(".concat(index, ")"),
          href: "/article?id=".concat(index)
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
          className: "jsx-1012521257"
        }, "Read More"))));
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "1012521257",
        css: "section.jsx-1012521257{width:50%;border:1px solid red;background-color:#f2ddff;padding:1em;padding-top:0em;margin-left:5em;}section.jsx-1012521257 h3.jsx-1012521257{color:blue;-webkit-text-decoration:bold;text-decoration:bold;}.author.jsx-1012521257{font-style:italic;font-size:0.8em;}.img-article.jsx-1012521257{max-width:90%;}.newsMenu.jsx-1012521257{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-left:5em;margin-right:42em;padding:0;margin-top:20px;}.newsMenu.jsx-1012521257 li.jsx-1012521257{display:inline-table;margin-left:6em;font-weight:bold;}.newsMenu.jsx-1012521257 li.jsx-1012521257 a.jsx-1012521257{font-size:1em;color:red;display:block;-webkit-text-decoration:none;text-decoration:none;}.newsMenu.jsx-1012521257 li.jsx-1012521257 a.jsx-1012521257:hover{color:black;-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWljaGFcXFdlYnN0b3JtUHJvamVjdHNcXFdlYlByb2plY3RcXHBhZ2VzXFxuZXdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJJb0IsQUFJMkIsQUFVQyxBQU1PLEFBSUosQUFJSCxBQVVRLEFBTVAsQUFPRixVQTlDVyxDQVVBLENBcUNHLEVBM0IxQixBQW9CVSxJQXhCUSxHQWtCRixHQU9GLE9BeENhLEdBZ0IzQixHQWtCaUIsQ0FPSSxnQkFOdkIsRUFsQ2dCLEtBVWQsT0FUa0IsSUE2Q3BCLEVBeEJxQixVQXBCRCxJQXVDcEIsWUFyQ0UsMkNBbUJnQixnQkFDRSxrQkFDUixVQUNNLGdCQUdsQiIsImZpbGUiOiJDOlxcVXNlcnNcXG1pY2hhXFxXZWJzdG9ybVByb2plY3RzXFxXZWJQcm9qZWN0XFxwYWdlc1xcbmV3cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFBhc3NpbmcgZnJvbSBjaGlsZCB0byBwYXJlbnRcclxuLy8gaHR0cHM6Ly93d3cucm9iaW53aWVydWNoLmRlL3JlYWN0LXBhc3MtcHJvcHMtdG8tY29tcG9uZW50LyNyZWFjdC1wcm9wc1xyXG5cclxuLy9cclxuLy8gSW1wb3J0c1xyXG4vL1xyXG5cclxuLy8gVGhpcyBpcyB0aGUgTGluayBBUElcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4uL2NvbXBvbmVudHMvRHJvcGRvd24nXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbi8vIEltcG9ydCBmZXRjaCBsaWJyYXJ5XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG4vLyBtcG9ydCBTZWFyY2hGb3JtIENvbXBvbmVudFxyXG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaEZvcm0nO1xyXG5cclxuXHJcbi8vKGZyZWUgdmVyc2lvbikgQVBJIGtleSBmcm9tICBodHRwczovL25ld3NhcGkub3JnL1xyXG4vLyBHZXQgeW91ciBvd24ga2V5IVxyXG5jb25zdCBhcGlLZXkgPSAnMzc4MDA2NmIzM2VmNDFiOWI0YjdlOTU3OTk0ZTljMzgnO1xyXG5cclxuLy8gSW5pdGlhbCBOZXdzIHNvdXJjZVxyXG5jb25zdCBkZWZhdWx0TmV3c1NvdXJjZSA9ICd0aGUtaXJpc2gtdGltZXMnO1xyXG5cclxuLy9cclxuLy8gYXN5bmMgbWV0aG9kIGZldGNoZXMgYW5kIHJldHVybnMgZGF0YSBmcm9tIGEgdXJsXHJcbi8vXHJcbmFzeW5jIGZ1bmN0aW9uIGdldE5ld3ModXJsKSB7XHJcblxyXG4gIC8vIHRyeSBmZXRjaCBhbmQgY2F0Y2ggYW55IGVycm9yc1xyXG4gIHRyeSB7XHJcbiAgICAvLyBNYWtlIGFzeW5jIGNhbGxcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAvLyBnZXQganNvbiBkYXRhIHdoZW4gaXQgYXJyaXZlc1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAvLyByZXR1cm4ganNvbiBkYXRhXHJcbiAgICByZXR1cm4gKGRhdGEpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyByZXR1cm4gZXJyb3IgaWYgaXQgb2NjdXJzXHJcbiAgICByZXR1cm4gKGVycm9yKTtcclxuICB9XHJcbn1cclxuXHJcbi8vXHJcbi8vICBUaGUgTmV3cyBwYWdlIGRlZmluZWQgYXMgYW4gRVM2IENsYXNzXHJcbi8vXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAvLyBDb25zdHJ1Y3RvclxyXG4gIC8vIFJlY2lldmUgcHJvcHMgYW5kIGluaXRpYWxpc2Ugc3RhdGUgcHJvcGVydGllc1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG5ld3NTb3VyY2U6IFwiXCIsXHJcbiAgICAgIHVybDogXCJcIixcclxuICAgICAgYXJ0aWNsZXM6IFtdLFxyXG5cdCAgICBpbmRleDogMFxyXG4gICAgfVxyXG4gIH1cclxuICAvLyBUaGlzIGZ1bmN0aW9uIGlzIHBhc3NlZCB0byB0aGUgU2VhcmNoRm9ybSBhbmQgdXNlZCB0aGUgZ2V0IHRoZSB2YWx1ZSBlbnRlcmVkXHJcbiAgLy8gVGhpcyB2YWx1ZSB3aWxsIGJlIHVzZWQgdG8gZ2VuZXJhdGUgdGhlIGFwaSB1cmxcclxuICBzZXROZXdzU291cmNlID0gKGlucHV0KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbmV3c1NvdXJjZTogaW5wdXQsXHJcbiAgICAgIHVybDogYGh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvdG9wLWhlYWRsaW5lcz9zb3VyY2VzPSR7aW5wdXR9JmFwaUtleT0ke2FwaUtleX1gXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8gR2V0IGFsbCBhcnRpY2xlcyBieSBzZWFyY2hpbmcgZm9yIGtleXdvcmQocylcclxuICAvLyBodHRwczovL25ld3NhcGkub3JnL2RvY3MvZW5kcG9pbnRzL1xyXG4gIC8vXHJcbiAgc2VhcmNoTmV3c0FQSSA9IChldmVudCkgPT4ge1xyXG4gICAgLy8gc2V0IHN0YXRlIHZhbHVlcyAtIHRoaXMgd2lsbCB0cmlnZ2VyIGFuIHVwZGF0ZSBhbmQgY29tcG9uZW50RGlkVXBkYXRlXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgLy8gR2V0IHRoZSBsaW5rIHRleHRcclxuICAgICAgbmV3c1NvdXJjZTogYCR7ZXZlbnQudGFyZ2V0LmlubmVyVGV4dH1gLFxyXG4gICAgICAvLyBCdWlsZCB0aGUgc2VhcmNoIFVSTCB1c2luZyB0aGUgbGluayBuYW1lXHJcbiAgICAgIHVybDogYGh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvJHtldmVudC50YXJnZXQubmFtZX0mYXBpS2V5PSR7YXBpS2V5fWBcclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnVybCk7XHJcbiAgfVxyXG4gIFxyXG5cdHVwZGF0ZUlEKGluZGV4KXtcclxuICAgIGNvbnNvbGUubG9nKFwiaGlcIilcclxuICAgIHRoaXMuc2V0U3RhdGUoe2luZGV4fSk7IC8qSSB0aG91Z2h0IHRoaXMgd291bGQgc2V0IHRoZSBzdGF0ZSBhbmQgaXQgY291bGQgYmUgcmV0cmlldmVkIG9uIHRoZSBhcnRpY2xlcyBwYWdlLiBJIHRyaWVkIGEgbG90ICovXHJcbiAgICBcclxuXHR9XHJcbiAgLy9cclxuICAvLyByZW5kZXIoKSBtZXRob2QgZ2VuZXJhdGVzIHRoZSBwYWdlXHJcbiAgLy9cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgLy8gaWYgc3RhdGUuYXJ0aWNsZXMgaXMgZW1wdHkgY29weSBwcm9wcyB0byBpdFxyXG4gICAgaWYgKHRoaXMuc3RhdGUuYXJ0aWNsZXMubGVuZ3RoID09IDApIHtcclxuICAgICAgdGhpcy5zdGF0ZS5hcnRpY2xlcyA9IHRoaXMucHJvcHMuYXJ0aWNsZXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxEcm9wZG93biBzZXROZXdzU291cmNlPXt0aGlzLnNldE5ld3NTb3VyY2V9IHNlbGVjdGVkPXswfSBvcHRpb25zPVxyXG4gICAgICAgIHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgWyB7XCJyZWZcIjogXCJkaWUtemVpdFwiLCBcInRleHRcIjogXCJEaWUgWmVpdFwifSxcclxuICAgICAgICAgICAgICB7XCJyZWZcIjogXCJoYWNrZXItbmV3c1wiLCBcInRleHRcIjogXCJIYWNrZXIgTmV3c1wifSxcclxuICAgICAgICAgICAgICB7XCJyZWZcIjogXCJpbmZvYmFlXCIsIFwidGV4dFwiOiBcIkluZm9iYWVcIn0sXHJcbiAgICAgICAgICAgICAge1wicmVmXCI6IFwibGVzLWVjaG9zXCIsIFwidGV4dFwiOiBcIkxlcyBFY2hvc1wifV1cclxuICAgICAgICB9ID4gXHJcbiAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICB7IC8qIEFkZCB0aGUgU2VhcmNoRm9ybSBjb21wb25lbnQgKi99XHJcbiAgICAgICAgeyAvKiBQYXNzIHRoZSBzZXROZXdzU291cmNlIGZ1bmN0aW9uIGFzIGEgcHJvcCB3aXRoIHRoZSBzYW1lIG5hbWUqL31cclxuICAgICAgICA8U2VhcmNoRm9ybSBzZXROZXdzU291cmNlPXt0aGlzLnNldE5ld3NTb3VyY2V9Lz5cclxuXHJcbiAgICAgICAgeyAvKiBFeGFtcGxlIHNlYXJjaCBsaW5rcyAtIG5vdGUgdXNpbmcgbmFtZSBhdHRyaWJ1dGUgZm9yIHBhcmFtZXRlcnMoISEpICovfVxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuZXdzTWVudVwiPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5zZWFyY2hOZXdzQVBJfSBuYW1lPVwidG9wLWhlYWRsaW5lcz9zb3VyY2VzPWFiYy1uZXdzXCI+QUJDIE5ld3M8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMuc2VhcmNoTmV3c0FQSX0gbmFtZT1cInRvcC1oZWFkbGluZXM/c291cmNlcz1jYmMtbmV3c1wiPkNCQyBOZXdzPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLnNlYXJjaE5ld3NBUEl9IG5hbWU9XCJ0b3AtaGVhZGxpbmVzP3NvdXJjZXM9Zm94LW5ld3NcIj5Gb3ggTmV3czwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5zZWFyY2hOZXdzQVBJfSBuYW1lPVwidG9wLWhlYWRsaW5lcz9zb3VyY2VzPWJiYy1uZXdzXCI+QkJDIE5ld3M8L2E+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIHsgLyogRGlzcGxheSBhIHRpdGxlIGJhc2VkIG9uIHNvdXJjZSAqL31cclxuICAgICAgICA8aDM+e3RoaXMuc3RhdGUubmV3c1NvdXJjZS5zcGxpdChcIi1cIikuam9pbihcIiBcIil9PC9oMz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgeyAvKiBJdGVyYXRlIHRocm91Z2ggYXJ0aWNsZXMgdXNpbmcgQXJyYXkgbWFwKSAqL31cclxuICAgICAgICAgIHsgLyogRGlzcGxheSBhdXRob3IsIHB1Ymxpc2hlZEF0LCBpbWFnZSwgZGVzY3JpcHRpb24sIGFuZCBjb250ZW50ICovfVxyXG4gICAgICAgICAgeyAvKiBmb3IgZWFjaCBzdG9yeS4gQWxzbyBhIGxpbmsgZm9yIG1vcmUuLiAqL31cclxuICAgICAgICAgIHsgLyogdGhlIG1hcCBpbmRleCBwcm9wZXJ0eSBnaXZlcyB0aGUgcG9zaXRpb24gaW4gdGhlIGFycmF5IGZvciBlYWNoIGFydGljbGUgLSBzZWUgdGhlIGxpbmsgYmVsb3cgKi99XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5hcnRpY2xlcy5tYXAoKGFydGljbGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGtleT17aW5kZXh9PlxyXG5cdFx0XHRcdFxyXG4gICAgICAgICAgICAgIDxoMz57YXJ0aWNsZS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImF1dGhvclwiPnthcnRpY2xlLmF1dGhvcn0ge0RhdGUoYXJ0aWNsZS5wdWJsaXNoZWRBdCl9PC9wPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXthcnRpY2xlLnVybFRvSW1hZ2V9IGFsdD1cImFydGljbGUgaW1hZ2VcIiBjbGFzc05hbWU9XCJpbWctYXJ0aWNsZVwiPjwvaW1nPlxyXG4gICAgICAgICAgICAgIDxwPnthcnRpY2xlLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICA8cD57YXJ0aWNsZS5jb250ZW50fTwvcD5cclxuICAgICAgICAgICAgICB7IC8qIGFkZGluZyB0aGUgaW5kZXggdmFsdWUgYXMgYSBwYXJhbWF0ZXIgdG8gYmUgcGFzc2VkIHdpdGggYSByZXF1ZXN0IGZvciB0aGUgc2luZ2xlIGFydGljbGUgcGFnZSovfVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPHA+PExpbmsgYXM9e2AvYXJ0aWNsZS8ke2luZGV4fWB9IG9uQ2xpY2s9e2B1cGRhdGVJRCgke2luZGV4fSlgfSBocmVmPXtgL2FydGljbGU/aWQ9JHtpbmRleH1gfT48YT5SZWFkIE1vcmU8L2E+PC9MaW5rPjwvcD5cclxuXHRcdFx0XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgLyogQ1NTIGZvciB0aGlzIHBhZ2UgKi9cclxuICAgICAgICAgICAgICBzZWN0aW9uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkZGZmO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDBlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1ZW07XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgc2VjdGlvbiBoM3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBib2xkO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmF1dGhvciB7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmltZy1hcnRpY2xlIHtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uZXdzTWVudSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1ZW07XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MmVtO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5ld3NNZW51IGxpIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDZlbTtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm5ld3NNZW51IGxpIGEge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmV3c01lbnUgbGkgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLy9cclxuICAvLyBHZXQgaW5pdGlhbCBkYXRhIG9uIHNlcnZlciBzaWRlIHVzaW5nIGFuIEFKQVggY2FsbFxyXG4gIC8vIFRoaXMgd2lsbCBpbml0aWFsaXNlIHRoZSAncHJvcHMnIGZvciB0aGUgTmV3cyBwYWdlXHJcbiAgLy8gICAgXHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhyZXNwb25zZSkge1xyXG5cclxuICAgIC8vIEJ1aWxkIHRoZSB1cmwgd2hpY2ggd2lsbCBiZSB1c2VkIHRvIGdldCB0aGUgZGF0YVxyXG4gICAgLy8gU2VlIGh0dHBzOi8vbmV3c2FwaS5vcmcvcy90aGUtaXJpc2gtdGltZXMtYXBpXHJcbiAgICBjb25zdCBkZWZhdWx0VXJsID0gYGh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvdG9wLWhlYWRsaW5lcz9zb3VyY2VzPSR7ZGVmYXVsdE5ld3NTb3VyY2V9JmFwaUtleT0ke2FwaUtleX1gO1xyXG5cclxuICAgIC8vIEdldCBuZXdzIGRhdGEgZnJvbSB0aGUgYXBpIHVybFxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldE5ld3MoZGVmYXVsdFVybCk7XHJcblxyXG4gICAgLy8gSWYgdGhlIHJlc3VsdCBjb250YWlucyBhbmQgYXJ0aWNsZXMgYXJyYXkgdGhlbiBpdCBpcyBnb29kIHNvIHJldHVybiBhcnRpY2xlc1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5hcnRpY2xlcykpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBhcnRpY2xlczogZGF0YS5hcnRpY2xlc1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBPdGhlcndpc2UgaXQgY29udGFpbnMgYW4gZXJyb3IsIGxvZyBhbmQgcmVkaXJlY3QgdG8gZXJyb3IgcGFnZSAoc3RhdHVzIGNvZGUgNDAwKVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZGF0YSlcclxuICAgICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmVzcG9uc2Uuc3RhdHVzQ29kZSA9IDQwMFxyXG4gICAgICAgIHJlc3BvbnNlLmVuZChkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC8vIGNvbXBvbmVudERpZFVwZGF0ZSBpcyBjYWxsZWQgd2hlbiB0aGUgcGFnZSBzdGF0ZSBvciBwcm9wcyByZSB1cGRhdGVkXHJcbiAgLy8gSXQgY2FuIGJlIG92ZXItcmlkZGVuIHRvIHBlcmZvcm0gb3RoZXIgZnVuY3Rpb25zIHdoZW4gYW4gdXBkYXRlIG9jY3Vyc1xyXG4gIC8vIEhlcmUgaXQgZmV0Y2hlcyBuZXcgZGF0YSB1c2luZyB0aGlzLnN0YXRlLm5ld3NTb3VyY2UgYXMgdGhlIHNvdXJjZVxyXG4gIGFzeW5jIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xyXG5cclxuICAgIC8vIENoZWNrIGlmIG5ld3NTb3VyY2UgdXJsIGhhcyBjaGFuZ2VkIHRvIGF2b2lkIHVuZWNlc3NhcnkgdXBkYXRlcyBcclxuICAgIGlmICh0aGlzLnN0YXRlLnVybCAhPT0gcHJldlN0YXRlLnVybCkge1xyXG5cclxuICAgICAgLy8gVXNlIGFwaSB1cmwgKGZyb20gc3RhdGUpIHRvIGZldGNoIGRhdGEgYW5kIGNhbGwgZ2V0TmV3cygpXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXROZXdzKHRoaXMuc3RhdGUudXJsKTtcclxuXHJcbiAgICAgIC8vIElmIHRoZSByZXN1bHQgY29udGFpbnMgYW5kIGFydGljbGVzIGFycmF5IHRoZW4gaXQgaXMgZ29vZCBzbyB1cGRhdGUgYXJ0aWNsZXNcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5hcnRpY2xlcykpIHtcclxuICAgICAgICAvLyBTdG9yZSBhcnRpY2xlcyBpbiBzdGF0ZVxyXG4gICAgICAgIHRoaXMuc3RhdGUuYXJ0aWNsZXMgPSBkYXRhLmFydGljbGVzO1xyXG4gICAgICAgIC8vIEZvcmNlIHBhZ2UgdXBkYXRlIGJ5IGNoYW5naW5nIHN0YXRlIChtYWtlIHN1cmUgaXQgaGFwcGVucyEpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBPdGhlcndpc2UgaXQgY29udGFpbnMgYW4gZXJyb3IsIGxvZyBhbmQgcmVkaXJlY3QgdG8gZXJyb3IgcGFnZSAoc3RhdHVzIGNvZGUgNDAwKVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGRhdGEpXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICByZXNwb25zZS5zdGF0dXNDb2RlID0gNDAwXHJcbiAgICAgICAgICByZXNwb25zZS5lbmQoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IC8vIEVuZCBjb21wb25lbnREaWRVcGRhdGVcclxuXHJcblxyXG5cclxufSAvLyBFbmQgY2xhc3NcclxuXHJcblxyXG5cdFxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\micha\\WebstormProjects\\WebProject\\pages\\news.js */"
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(prevProps, prevState) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(response) {
        var defaultUrl, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
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
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component); // End class




/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/news.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/news.js */"./pages/news.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=news.js.map