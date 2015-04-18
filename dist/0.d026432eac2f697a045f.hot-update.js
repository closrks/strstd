webpackHotUpdate(0,{

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(5), ReactMount = __webpack_require__(8), React = __webpack_require__(12); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	var React = __webpack_require__(12);

	var HelloWorld = React.createClass({
	    displayName: 'HelloWorld',

	    render: function render() {
	        return React.createElement(
	            'h1',
	            null,
	            'Hellao Crazya Worldasssss'
	        );
	    }
	});

	React.render(React.createElement(HelloWorld, null), document.getElementById('app'));

	/* REACT HOT LOADER */ })(); if (true) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(6), foundReactClasses = false; if (makeExportsHot(module, __webpack_require__(12))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "entry.jsx" + ": " + err.message); } }); } } })(); }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }

})