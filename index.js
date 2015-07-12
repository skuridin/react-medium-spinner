(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactMediumSpinner"] = factory(require("react"));
	else
		root["ReactMediumSpinner"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);

	module.exports = React.createClass({
	  displayName: "exports",

	  getDefaultProps: function getDefaultProps() {
	    return {
	      active: false,
	      speed: 20,
	      color: "#60d778",
	      height: "2px"
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      width: 0,
	      left: 0
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this.interval = setInterval(this.animate, this.props.speed);
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    clearInterval(this.interval);
	  },
	  animate: function animate() {
	    if (this.props.active !== true) return false;

	    var state = this.state;

	    if (state.left === 0 && state.width < 100) {
	      state.width += 4;
	    } else if (state.width <= 100 && state.left < 100) {
	      state.left += 4;
	      state.width -= 4;
	    } else if (state.left === 100 && state.width === 0) {
	      state.left = 0;
	    }

	    this.setState(state);
	  },
	  render: function render() {
	    var style = {
	      display: this.props.active ? "block" : "none",
	      position: "fixed",
	      top: "0px",
	      left: this.state.left + "%",
	      right: "0px",
	      width: this.state.width + "%",
	      height: this.props.height,
	      backgroundColor: this.props.color,
	      zIndex: 800
	    };
	    return React.createElement("div", { style: style });
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;