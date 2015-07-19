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

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var ReactMediumSpinner = (function (_React$Component) {
	  function ReactMediumSpinner(props) {
	    _classCallCheck(this, ReactMediumSpinner);

	    _get(Object.getPrototypeOf(ReactMediumSpinner.prototype), 'constructor', this).call(this, props);
	    this.state = { width: 0, left: 0 };
	  }

	  _inherits(ReactMediumSpinner, _React$Component);

	  _createClass(ReactMediumSpinner, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.interval = setInterval(this.animate.bind(this), this.props.speed);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearInterval(this.interval);
	    }
	  }, {
	    key: 'animate',
	    value: function animate() {
	      if (this.props.active !== true) return false;
	      var _state = this.state;
	      var left = _state.left;
	      var width = _state.width;

	      if (left === 0 && width < 100) {
	        width += 4;
	      } else if (width <= 100 && left < 100) {
	        left += 4;
	        width -= 4;
	      } else if (left === 100 && width === 0) {
	        left = 0;
	      }
	      this.setState({ left: left, width: width });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var style = {
	        display: this.props.active ? 'block' : 'none',
	        position: 'fixed',
	        top: '0px',
	        left: this.state.left + '%',
	        right: '0px',
	        width: this.state.width + '%',
	        height: this.props.height,
	        backgroundColor: this.props.color,
	        zIndex: 800
	      };
	      return _react2['default'].createElement('div', { style: style });
	    }
	  }]);

	  return ReactMediumSpinner;
	})(_react2['default'].Component);

	exports['default'] = ReactMediumSpinner;

	ReactMediumSpinner.defaultProps = {
	  active: false,
	  speed: 20,
	  color: '#60d778',
	  height: '2px'
	};

	ReactMediumSpinner.propTypes = {
	  active: _react2['default'].PropTypes.bool,
	  speed: _react2['default'].PropTypes.number,
	  color: _react2['default'].PropTypes.string,
	  height: _react2['default'].PropTypes.string
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;