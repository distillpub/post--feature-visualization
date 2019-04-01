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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyDev", function() { return destroyDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "differs", function() { return differs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatchObservers", function() { return dispatchObservers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fire", function() { return fire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observe", function() { return observe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observeDev", function() { return observeDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDev", function() { return onDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_set", function() { return _set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_setDev", function() { return _setDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callAll", function() { return callAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_mount", function() { return _mount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_unmount", function() { return _unmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proto", function() { return proto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protoDev", function() { return protoDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendNode", function() { return appendNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertNode", function() { return insertNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detachNode", function() { return detachNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detachBetween", function() { return detachBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detachBefore", function() { return detachBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detachAfter", function() { return detachAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reinsertBetween", function() { return reinsertBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reinsertChildren", function() { return reinsertChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reinsertAfter", function() { return reinsertAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reinsertBefore", function() { return reinsertBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyEach", function() { return destroyEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFragment", function() { return createFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSvgElement", function() { return createSvgElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createText", function() { return createText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComment", function() { return createComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addListener", function() { return addListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeListener", function() { return removeListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttribute", function() { return setAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setXlinkAttribute", function() { return setXlinkAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBindingGroupValue", function() { return getBindingGroupValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claimElement", function() { return claimElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claimText", function() { return claimText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInputType", function() { return setInputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStyle", function() { return setStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRule", function() { return generateRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hash", function() { return hash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapTransition", function() { return wrapTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionManager", function() { return transitionManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
function noop() {}

function assign(target) {
	var k,
		source,
		i = 1,
		len = arguments.length;
	for (; i < len; i++) {
		source = arguments[i];
		for (k in source) target[k] = source[k];
	}

	return target;
}

function appendNode(node, target) {
	target.appendChild(node);
}

function insertNode(node, target, anchor) {
	target.insertBefore(node, anchor);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function detachBetween(before, after) {
	while (before.nextSibling && before.nextSibling !== after) {
		before.parentNode.removeChild(before.nextSibling);
	}
}

function detachBefore(after) {
	while (after.previousSibling) {
		after.parentNode.removeChild(after.previousSibling);
	}
}

function detachAfter(before) {
	while (before.nextSibling) {
		before.parentNode.removeChild(before.nextSibling);
	}
}

function reinsertBetween(before, after, target) {
	while (before.nextSibling && before.nextSibling !== after) {
		target.appendChild(before.parentNode.removeChild(before.nextSibling));
	}
}

function reinsertChildren(parent, target) {
	while (parent.firstChild) target.appendChild(parent.firstChild);
}

function reinsertAfter(before, target) {
	while (before.nextSibling) target.appendChild(before.nextSibling);
}

function reinsertBefore(after, target) {
	var parent = after.parentNode;
	while (parent.firstChild !== after) target.appendChild(parent.firstChild);
}

// TODO this is out of date
function destroyEach(iterations, detach, start) {
	for (var i = start; i < iterations.length; i += 1) {
		if (iterations[i]) iterations[i].destroy(detach);
	}
}

function createFragment() {
	return document.createDocumentFragment();
}

function createElement(name) {
	return document.createElement(name);
}

function createSvgElement(name) {
	return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function createText(data) {
	return document.createTextNode(data);
}

function createComment() {
	return document.createComment('');
}

function addListener(node, event, handler) {
	node.addEventListener(event, handler, false);
}

function removeListener(node, event, handler) {
	node.removeEventListener(event, handler, false);
}

function setAttribute(node, attribute, value) {
	node.setAttribute(attribute, value);
}

function setXlinkAttribute(node, attribute, value) {
	node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}

function getBindingGroupValue(group) {
	var value = [];
	for (var i = 0; i < group.length; i += 1) {
		if (group[i].checked) value.push(group[i].__value);
	}
	return value;
}

function toNumber(value) {
	return value === '' ? undefined : +value;
}

function children (element) {
	return Array.from(element.childNodes);
}

function claimElement (nodes, name, attributes, svg) {
	for (var i = 0; i < nodes.length; i += 1) {
		var node = nodes[i];
		if (node.nodeName === name) {
			for (var j = 0; j < node.attributes.length; j += 1) {
				var attribute = node.attributes[j];
				if (!attributes[attribute.name]) node.removeAttribute(attribute.name);
			}
			return nodes.splice(i, 1)[0]; // TODO strip unwanted attributes
		}
	}

	return svg ? createSvgElement(name) : createElement(name);
}

function claimText (nodes, data) {
	for (var i = 0; i < nodes.length; i += 1) {
		var node = nodes[i];
		if (node.nodeType === 3) {
			node.data = data;
			return nodes.splice(i, 1)[0];
		}
	}

	return createText(data);
}

function setInputType(input, type) {
	try {
		input.type = type;
	} catch (e) {}
}

function setStyle(node, key, value) {
	node.style.setProperty(key, value);
}

function linear(t) {
	return t;
}

function generateRule(
	a,
	b,
	delta,
	duration,
	ease,
	fn
) {
	var keyframes = '{\n';

	for (var p = 0; p <= 1; p += 16.666 / duration) {
		var t = a + delta * ease(p);
		keyframes += p * 100 + '%{' + fn(t) + '}\n';
	}

	return keyframes + '100% {' + fn(b) + '}\n}';
}

// https://github.com/darkskyapp/string-hash/blob/master/index.js
function hash(str) {
	var hash = 5381;
	var i = str.length;

	while (i--) hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
	return hash >>> 0;
}

function wrapTransition(component, node, fn, params, intro, outgroup) {
	var obj = fn(node, params);
	var duration = obj.duration || 300;
	var ease = obj.easing || linear;
	var cssText;

	// TODO share <style> tag between all transitions?
	if (obj.css && !transitionManager.stylesheet) {
		var style = createElement('style');
		document.head.appendChild(style);
		transitionManager.stylesheet = style.sheet;
	}

	if (intro) {
		if (obj.css && obj.delay) {
			cssText = node.style.cssText;
			node.style.cssText += obj.css(0);
		}

		if (obj.tick) obj.tick(0);
	}

	return {
		t: intro ? 0 : 1,
		running: false,
		program: null,
		pending: null,
		run: function(intro, callback) {
			var program = {
				start: window.performance.now() + (obj.delay || 0),
				intro: intro,
				callback: callback
			};

			if (obj.delay) {
				this.pending = program;
			} else {
				this.start(program);
			}

			if (!this.running) {
				this.running = true;
				transitionManager.add(this);
			}
		},
		start: function(program) {
			component.fire(program.intro ? 'intro.start' : 'outro.start', { node: node });

			program.a = this.t;
			program.b = program.intro ? 1 : 0;
			program.delta = program.b - program.a;
			program.duration = duration * Math.abs(program.b - program.a);
			program.end = program.start + program.duration;

			if (obj.css) {
				if (obj.delay) node.style.cssText = cssText;

				program.rule = generateRule(
					program.a,
					program.b,
					program.delta,
					program.duration,
					ease,
					obj.css
				);

				transitionManager.addRule(program.rule, program.name = '__svelte_' + hash(program.rule));

				node.style.animation = (node.style.animation || '')
					.split(', ')
					.filter(function(anim) {
						// when introing, discard old animations if there are any
						return anim && (program.delta < 0 || !/__svelte/.test(anim));
					})
					.concat(program.name + ' ' + duration + 'ms linear 1 forwards')
					.join(', ');
			}

			this.program = program;
			this.pending = null;
		},
		update: function(now) {
			var program = this.program;
			if (!program) return;

			var p = now - program.start;
			this.t = program.a + program.delta * ease(p / program.duration);
			if (obj.tick) obj.tick(this.t);
		},
		done: function() {
			var program = this.program;
			this.t = program.b;
			if (obj.tick) obj.tick(this.t);
			if (obj.css) transitionManager.deleteRule(node, program.name);
			program.callback();
			program = null;
			this.running = !!this.pending;
		},
		abort: function() {
			if (obj.tick) obj.tick(1);
			if (obj.css) transitionManager.deleteRule(node, this.program.name);
			this.program = this.pending = null;
			this.running = false;
		}
	};
}

var transitionManager = {
	running: false,
	transitions: [],
	bound: null,
	stylesheet: null,
	activeRules: {},

	add: function(transition) {
		this.transitions.push(transition);

		if (!this.running) {
			this.running = true;
			requestAnimationFrame(this.bound || (this.bound = this.next.bind(this)));
		}
	},

	addRule: function(rule, name) {
		if (!this.activeRules[name]) {
			this.activeRules[name] = true;
			this.stylesheet.insertRule('@keyframes ' + name + ' ' + rule, this.stylesheet.cssRules.length);
		}
	},

	next: function() {
		this.running = false;

		var now = window.performance.now();
		var i = this.transitions.length;

		while (i--) {
			var transition = this.transitions[i];

			if (transition.program && now >= transition.program.end) {
				transition.done();
			}

			if (transition.pending && now >= transition.pending.start) {
				transition.start(transition.pending);
			}

			if (transition.running) {
				transition.update(now);
				this.running = true;
			} else if (!transition.pending) {
				this.transitions.splice(i, 1);
			}
		}

		if (this.running) {
			requestAnimationFrame(this.bound);
		} else if (this.stylesheet) {
			var i = this.stylesheet.cssRules.length;
			while (i--) this.stylesheet.deleteRule(i);
			this.activeRules = {};
		}
	},

	deleteRule: function(node, name) {
		node.style.animation = node.style.animation
			.split(', ')
			.filter(function(anim) {
				return anim.slice(0, name.length) !== name;
			})
			.join(', ');
	}
};

function destroy(detach) {
	this.destroy = noop;
	this.fire('destroy');
	this.set = this.get = noop;

	if (detach !== false) this._fragment.unmount();
	this._fragment.destroy();
	this._fragment = this._state = null;
}

function destroyDev(detach) {
	destroy.call(this, detach);
	this.destroy = function() {
		console.warn('Component was already destroyed');
	};
}

function differs(a, b) {
	return a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}

function dispatchObservers(component, group, changed, newState, oldState) {
	for (var key in group) {
		if (!changed[key]) continue;

		var newValue = newState[key];
		var oldValue = oldState[key];

		var callbacks = group[key];
		if (!callbacks) continue;

		for (var i = 0; i < callbacks.length; i += 1) {
			var callback = callbacks[i];
			if (callback.__calling) continue;

			callback.__calling = true;
			callback.call(component, newValue, oldValue);
			callback.__calling = false;
		}
	}
}

function get(key) {
	return key ? this._state[key] : this._state;
}

function fire(eventName, data) {
	var handlers =
		eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		handlers[i].call(this, data);
	}
}

function observe(key, callback, options) {
	var group = options && options.defer
		? this._observers.post
		: this._observers.pre;

	(group[key] || (group[key] = [])).push(callback);

	if (!options || options.init !== false) {
		callback.__calling = true;
		callback.call(this, this._state[key]);
		callback.__calling = false;
	}

	return {
		cancel: function() {
			var index = group[key].indexOf(callback);
			if (~index) group[key].splice(index, 1);
		}
	};
}

function observeDev(key, callback, options) {
	var c = (key = '' + key).search(/[^\w]/);
	if (c > -1) {
		var message =
			'The first argument to component.observe(...) must be the name of a top-level property';
		if (c > 0)
			message += ", i.e. '" + key.slice(0, c) + "' rather than '" + key + "'";

		throw new Error(message);
	}

	return observe.call(this, key, callback, options);
}

function on(eventName, handler) {
	if (eventName === 'teardown') return this.on('destroy', handler);

	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
}

function onDev(eventName, handler) {
	if (eventName === 'teardown') {
		console.warn(
			"Use component.on('destroy', ...) instead of component.on('teardown', ...) which has been deprecated and will be unsupported in Svelte 2"
		);
		return this.on('destroy', handler);
	}

	return on.call(this, eventName, handler);
}

function set(newState) {
	this._set(assign({}, newState));
	if (this._root._lock) return;
	this._root._lock = true;
	callAll(this._root._beforecreate);
	callAll(this._root._oncreate);
	callAll(this._root._aftercreate);
	this._root._lock = false;
}

function _set(newState) {
	var oldState = this._state,
		changed = {},
		dirty = false;

	for (var key in newState) {
		if (differs(newState[key], oldState[key])) changed[key] = dirty = true;
	}
	if (!dirty) return;

	this._state = assign({}, oldState, newState);
	this._recompute(changed, this._state, oldState, false);
	if (this._bind) this._bind(changed, this._state);
	dispatchObservers(this, this._observers.pre, changed, this._state, oldState);
	this._fragment.update(changed, this._state);
	dispatchObservers(this, this._observers.post, changed, this._state, oldState);
}

function _setDev(newState) {
	if (typeof newState !== 'object') {
		throw new Error(
			this._debugName + ' .set was called without an object of data key-values to update.'
		);
	}

	this._checkReadOnly(newState);
	_set.call(this, newState);
}

function callAll(fns) {
	while (fns && fns.length) fns.pop()();
}

function _mount(target, anchor) {
	this._fragment.mount(target, anchor);
}

function _unmount() {
	this._fragment.unmount();
}

var proto = {
	destroy: destroy,
	get: get,
	fire: fire,
	observe: observe,
	on: on,
	set: set,
	teardown: destroy,
	_recompute: noop,
	_set: _set,
	_mount: _mount,
	_unmount: _unmount
};

var protoDev = {
	destroy: destroyDev,
	get: get,
	fire: fire,
	observe: observeDev,
	on: onDev,
	set: set,
	teardown: destroyDev,
	_recompute: noop,
	_set: _setDev,
	_mount: _mount,
	_unmount: _unmount
};




/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _shared = __webpack_require__(0);

var template = function () {
	return {
		data: function data() {
			return {
				src_class: "mixed4d",
				sprite_size: 200,
				sprite_scale: 1.0,
				size: 100,
				x: 0, // specified in Sprite subclasses
				y: 0,
				shift: [0.5, 0.5],
				hover: false,
				hover_scale: 1,
				transition_background: false,
				border: false,
				pixelated: true
			};
		},

		computed: {
			corner_x: function corner_x(sprite_size, x, sprite_scale) {
				return sprite_size * x;
			},
			corner_y: function corner_y(sprite_size, y, sprite_scale) {
				return sprite_size * y;
			},
			offset_x: function offset_x(sprite_size, sprite_scale, corner_x, shift, size, ratio) {
				return corner_x + sprite_size * shift[0] * (1 - sprite_scale);
			},
			offset_y: function offset_y(sprite_size, sprite_scale, corner_y, shift, size, ratio) {
				return corner_y + sprite_size * shift[1] * (1 - sprite_scale);
			},
			final_sprite_size: function final_sprite_size(sprite_scale, sprite_size) {
				return sprite_scale * sprite_size;
			},
			ratio: function ratio(size, final_sprite_size) {
				return size / final_sprite_size;
			},
			margin: function margin(final_sprite_size, size) {
				return -(final_sprite_size - size) / 2;
			},
			transition_css: function transition_css(transition_background) {
				var css = "width 0.1s ease-out, height 0.1s ease-out, margin 0.1s ease-out, transform 0.1s ease-out";
				if (transition_background) {
					css += ", background-position 0.1s ease-out";
				}
				return css;
			},
			border_css: function border_css(border) {
				return border ? '2px solid white' : 'none';
			},
			hover_class: function hover_class(hover) {
				return hover ? 'hoverable' : '';
			}
		},
		oncreate: function oncreate() {
			// this.observe('x', (x1, x2) => console.log(this))
		}
	};
}();

function encapsulateStyles(node) {
	(0, _shared.setAttribute)(node, "svelte-986317898", "");
}

function add_css() {
	var style = (0, _shared.createElement)("style");
	style.id = 'svelte-986317898-style';
	style.textContent = "[svelte-986317898].outer,[svelte-986317898] .outer{position:relative;float:left;width:var(--container-size);height:var(--container-size)}[svelte-986317898].mid,[svelte-986317898] .mid,[svelte-986317898].inner,[svelte-986317898] .inner{transition:var(--transition_css);pointer-events:none}[svelte-986317898].mid,[svelte-986317898] .mid{transform:scale( var(--default-ratio) );margin:calc( calc( var(--container-size) - var(--default-size) ) / 2 )}[svelte-986317898].inner,[svelte-986317898] .inner{image-rendering:var(--pixelated);background-position:var(--default-position);width:var(--default-size);height:var(--default-size)}[svelte-986317898].outer.hoverable:hover,[svelte-986317898] .outer.hoverable:hover{z-index:100}[svelte-986317898].outer.hoverable:hover .inner,[svelte-986317898] .outer.hoverable:hover .inner{background-position:var(--hover-position);width:var(--hover-size);height:var(--hover-size)}[svelte-986317898].outer.hoverable:hover .mid,[svelte-986317898] .outer.hoverable:hover .mid{transform:scale(var(--hover-scale));margin:calc( calc( var(--container-size) - var(--hover-size) ) / 2 );border:var(--border_css);width:var(--hover-size)}";
	(0, _shared.appendNode)(style, document.head);
}

function create_main_fragment(state, component) {
	var div, div_class_value, div_1, div_2, div_2_class_value;

	return {
		create: function create() {
			div = (0, _shared.createElement)("div");
			div_1 = (0, _shared.createElement)("div");
			div_2 = (0, _shared.createElement)("div");
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			encapsulateStyles(div);
			div.className = div_class_value = "sprite outer " + state.hover_class;
			(0, _shared.setStyle)(div, "--default-size", "" + state.final_sprite_size + "px");
			(0, _shared.setStyle)(div, "--default-position", "-" + state.offset_x + "px -" + state.offset_y + "px");
			(0, _shared.setStyle)(div, "--hover-size", "" + state.sprite_size + "px");
			(0, _shared.setStyle)(div, "--hover-position", "-" + state.corner_x + "px -" + state.corner_y + "px");
			(0, _shared.setStyle)(div, "--container-size", "" + state.size + "px");
			(0, _shared.setStyle)(div, "--default-ratio", state.size / state.final_sprite_size);
			(0, _shared.setStyle)(div, "--hover-scale", state.hover_scale);
			(0, _shared.setStyle)(div, "--transition_css", state.transition_css);
			(0, _shared.setStyle)(div, "--border_css", state.border_css);
			(0, _shared.setStyle)(div, "--pixelated", state.pixelated ? 'pixelated' : 'auto');
			div_1.className = "mid";
			div_2.className = div_2_class_value = "inner " + state.src_class;
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
			component.refs.root = div;
			(0, _shared.appendNode)(div_1, div);
			(0, _shared.appendNode)(div_2, div_1);
		},

		update: function update(changed, state) {
			if (changed.hover_class && div_class_value !== (div_class_value = "sprite outer " + state.hover_class)) {
				div.className = div_class_value;
			}

			if (changed.final_sprite_size) {
				(0, _shared.setStyle)(div, "--default-size", "" + state.final_sprite_size + "px");
			}

			if (changed.offset_x || changed.offset_y) {
				(0, _shared.setStyle)(div, "--default-position", "-" + state.offset_x + "px -" + state.offset_y + "px");
			}

			if (changed.sprite_size) {
				(0, _shared.setStyle)(div, "--hover-size", "" + state.sprite_size + "px");
			}

			if (changed.corner_x || changed.corner_y) {
				(0, _shared.setStyle)(div, "--hover-position", "-" + state.corner_x + "px -" + state.corner_y + "px");
			}

			if (changed.size) {
				(0, _shared.setStyle)(div, "--container-size", "" + state.size + "px");
			}

			if (changed.size || changed.final_sprite_size) {
				(0, _shared.setStyle)(div, "--default-ratio", state.size / state.final_sprite_size);
			}

			if (changed.hover_scale) {
				(0, _shared.setStyle)(div, "--hover-scale", state.hover_scale);
			}

			if (changed.transition_css) {
				(0, _shared.setStyle)(div, "--transition_css", state.transition_css);
			}

			if (changed.border_css) {
				(0, _shared.setStyle)(div, "--border_css", state.border_css);
			}

			if (changed.pixelated) {
				(0, _shared.setStyle)(div, "--pixelated", state.pixelated ? 'pixelated' : 'auto');
			}

			if (changed.src_class && div_2_class_value !== (div_2_class_value = "inner " + state.src_class)) {
				div_2.className = div_2_class_value;
			}
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(div);
		},

		destroy: function destroy() {
			if (component.refs.root === div) component.refs.root = null;
		}
	};
}

function Sprite(options) {
	this.options = options;
	this.refs = {};
	this._state = (0, _shared.assign)(template.data(), options.data);
	this._recompute({}, this._state, {}, true);

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root || this;
	this._yield = options._yield;
	this._bind = options._bind;

	if (!document.getElementById("svelte-986317898-style")) add_css();

	var oncreate = template.oncreate.bind(this);

	if (!options._root) {
		this._oncreate = [oncreate];
	} else {
		this._root._oncreate.push(oncreate);
	}

	this._fragment = create_main_fragment(this._state, this);

	if (options.target) {
		this._fragment.create();
		this._fragment.mount(options.target, options.anchor || null);

		(0, _shared.callAll)(this._oncreate);
	}
}

(0, _shared.assign)(Sprite.prototype, _shared.proto);

Sprite.prototype._recompute = function _recompute(changed, state, oldState, isInitial) {
	if (isInitial || changed.sprite_size || changed.x || changed.sprite_scale) {
		if ((0, _shared.differs)(state.corner_x = template.computed.corner_x(state.sprite_size, state.x, state.sprite_scale), oldState.corner_x)) changed.corner_x = true;
	}

	if (isInitial || changed.sprite_size || changed.y || changed.sprite_scale) {
		if ((0, _shared.differs)(state.corner_y = template.computed.corner_y(state.sprite_size, state.y, state.sprite_scale), oldState.corner_y)) changed.corner_y = true;
	}

	if (isInitial || changed.sprite_scale || changed.sprite_size) {
		if ((0, _shared.differs)(state.final_sprite_size = template.computed.final_sprite_size(state.sprite_scale, state.sprite_size), oldState.final_sprite_size)) changed.final_sprite_size = true;
	}

	if (isInitial || changed.size || changed.final_sprite_size) {
		if ((0, _shared.differs)(state.ratio = template.computed.ratio(state.size, state.final_sprite_size), oldState.ratio)) changed.ratio = true;
	}

	if (isInitial || changed.sprite_size || changed.sprite_scale || changed.corner_x || changed.shift || changed.size || changed.ratio) {
		if ((0, _shared.differs)(state.offset_x = template.computed.offset_x(state.sprite_size, state.sprite_scale, state.corner_x, state.shift, state.size, state.ratio), oldState.offset_x)) changed.offset_x = true;
	}

	if (isInitial || changed.sprite_size || changed.sprite_scale || changed.corner_y || changed.shift || changed.size || changed.ratio) {
		if ((0, _shared.differs)(state.offset_y = template.computed.offset_y(state.sprite_size, state.sprite_scale, state.corner_y, state.shift, state.size, state.ratio), oldState.offset_y)) changed.offset_y = true;
	}

	if (isInitial || changed.final_sprite_size || changed.size) {
		if ((0, _shared.differs)(state.margin = template.computed.margin(state.final_sprite_size, state.size), oldState.margin)) changed.margin = true;
	}

	if (isInitial || changed.transition_background) {
		if ((0, _shared.differs)(state.transition_css = template.computed.transition_css(state.transition_background), oldState.transition_css)) changed.transition_css = true;
	}

	if (isInitial || changed.border) {
		if ((0, _shared.differs)(state.border_css = template.computed.border_css(state.border), oldState.border_css)) changed.border_css = true;
	}

	if (isInitial || changed.hover) {
		if ((0, _shared.differs)(state.hover_class = template.computed.hover_class(state.hover), oldState.hover_class)) changed.hover_class = true;
	}
};

exports.default = Sprite;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "push", function() { return push; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pop", function() { return pop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shift", function() { return shift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unshift", function() { return unshift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splice", function() { return splice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverse", function() { return reverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tween", function() { return tween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observeDeep", function() { return observeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDeep", function() { return getDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDeep", function() { return setDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spring", function() { return spring; });
var arrayNotationPattern = /\[\s*(\d+)\s*\]/g;
function makeArrayMethod(name) {
    return function (keypath) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var parts = keypath.replace(arrayNotationPattern, '.$1').split('.');
        var key = parts.shift();
        var value = this.get(key);
        var array = value;
        while (parts.length)
            array = array[parts.shift()];
        var result = array[name].apply(array, args);
        this.set((_a = {}, _a[key] = value, _a));
        return result;
        var _a;
    };
}
var push = makeArrayMethod('push');
var pop = makeArrayMethod('pop');
var shift = makeArrayMethod('shift');
var unshift = makeArrayMethod('unshift');
var splice = makeArrayMethod('splice');
var sort = makeArrayMethod('sort');
var reverse = makeArrayMethod('reverse');

function isDate(obj) {
    return Object.prototype.toString.call(obj) === '[object Date]';
}

var scheduler = {
    components: [],
    running: false,
    add: function (component) {
        if (~scheduler.components.indexOf(component))
            return;
        scheduler.components.push(component);
        if (!scheduler.running) {
            scheduler.running = true;
            requestAnimationFrame(scheduler.next);
        }
    },
    next: function () {
        var now = window.performance.now();
        var hasComponents = false;
        var i = scheduler.components.length;
        while (i--) {
            var component = scheduler.components[i];
            var data = {};
            var hasTweens = false;
            for (var key in component._currentTweens) {
                var t = component._currentTweens[key];
                if (now >= t.end) {
                    data[key] = t.to;
                    delete component._currentTweens[key];
                    t.fulfil();
                }
                else {
                    hasTweens = true;
                    hasComponents = true;
                    if (now >= t.start) {
                        var p = (now - t.start) / t.duration;
                        data[key] = t.value(t.ease(p));
                    }
                }
            }
            component._tweening = true;
            component.set(data);
            component._tweening = false;
            if (!hasTweens)
                scheduler.components.splice(i, 1);
        }
        if (hasComponents) {
            requestAnimationFrame(scheduler.next);
        }
        else {
            scheduler.running = false;
        }
    }
};
function snap(to) {
    return function () { return to; };
}
function interpolate(a, b) {
    if (a === b || a !== a)
        return snap(a);
    var type = typeof a;
    if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
        throw new Error('Cannot interpolate values of different type');
    }
    if (Array.isArray(a)) {
        var arr_1 = b.map(function (bi, i) {
            return interpolate(a[i], bi);
        });
        return function (t) {
            return arr_1.map(function (fn) { return fn(t); });
        };
    }
    if (type === 'object') {
        if (!a || !b)
            throw new Error('Object cannot be null');
        if (isDate(a) && isDate(b)) {
            a = a.getTime();
            b = b.getTime();
            var delta_1 = b - a;
            return function (t) {
                return new Date(a + t * delta_1);
            };
        }
        var keys_1 = Object.keys(b);
        var interpolators_1 = {};
        var result_1 = {};
        keys_1.forEach(function (key) {
            interpolators_1[key] = interpolate(a[key], b[key]);
        });
        return function (t) {
            keys_1.forEach(function (key) {
                result_1[key] = interpolators_1[key](t);
            });
            return result_1;
        };
    }
    if (type === 'number') {
        var delta_2 = b - a;
        return function (t) {
            return a + t * delta_2;
        };
    }
    throw new Error("Cannot interpolate " + type + " values");
}
function linear(x) {
    return x;
}
function tween(key, to, options) {
    var _this = this;
    if (options === void 0) { options = {}; }
    if (!this._currentTweens) {
        this._currentTweens = Object.create(null);
        this._tweening = false;
        var set_1 = this.set;
        this.set = function (data) {
            if (!_this._tweening) {
                for (var key_1 in data) {
                    if (_this._currentTweens[key_1])
                        _this._currentTweens[key_1].abort();
                }
            }
            set_1.call(_this, data);
        };
    }
    if (this._currentTweens[key])
        this._currentTweens[key].abort();
    var start = window.performance.now() + (options.delay || 0);
    var duration = options.duration || 400;
    var end = start + duration;
    var t = {
        key: key,
        value: (options.interpolate || interpolate)(this.get(key), to),
        to: to,
        start: start,
        end: end,
        duration: duration,
        ease: options.easing || linear,
        running: true,
        abort: function () {
            t.running = false;
            delete _this._currentTweens[key];
        }
    };
    this._currentTweens[key] = t;
    scheduler.add(this);
    var promise = new Promise(function (fulfil) {
        t.fulfil = fulfil;
    });
    promise.abort = t.abort;
    return promise;
}

function getNestedValue(obj, parts) {
    for (var i = 0; i < parts.length; i += 1) {
        if (!obj)
            return undefined;
        obj = obj[parts[i]];
    }
    return obj;
}
function observeDeep(keypath, callback, opts) {
    var _this = this;
    var parts = keypath.replace(/\[(\d+)\]/g, '.$1').split('.');
    var key = parts.shift();
    var last = opts && opts.init === false
        ? getNestedValue(this.get(key), parts)
        : undefined;
    return this.observe(key, function (value) {
        value = getNestedValue(value, parts);
        if (value !== last ||
            typeof value === 'object' ||
            typeof value === 'function') {
            callback.call(_this, value, last);
        }
        last = value;
    }, opts);
}

function getDeep(keypath) {
    if (keypath === undefined) {
        return this.get();
    }
    var keys = keypath.replace(/\[(\d+)\]/g, '.$1').split('.');
    var value = this.get(keys[0]);
    for (var i = 1; i < keys.length; i++) {
        value = value[keys[i]];
    }
    return value;
}
function setDeep(keypath, value) {
    if (keypath === undefined) {
        return;
    }
    var keys = keypath.replace(/\[(\d+)\]/g, '.$1').split('.');
    var lastKey = keys.pop();
    // If not a nested keypath
    if (keys[0] === undefined) {
        var data_1 = {};
        data_1[lastKey] = value;
        this.set(data_1);
        return;
    }
    var object = this.get(keys[0]);
    for (var i = 1; i < keys.length; i++) {
        object = object[keys[i]];
    }
    object[lastKey] = value;
    var data = {};
    data[keys[0]] = this.get(keys[0]);
    this.set(data);
}

var scheduler$1 = {
    components: [],
    running: false,
    add: function (component) {
        if (~scheduler$1.components.indexOf(component))
            return;
        scheduler$1.components.push(component);
        if (!scheduler$1.running) {
            scheduler$1.running = true;
            requestAnimationFrame(scheduler$1.next);
        }
    },
    next: function () {
        var hasComponents = false;
        var i = scheduler$1.components.length;
        while (i--) {
            var component = scheduler$1.components[i];
            var data = {};
            var hasSprings = false;
            for (var key in component._springs) {
                var spring_1 = component._springs[key];
                if (spring_1.tick(data)) {
                    hasSprings = true;
                    hasComponents = true;
                }
                else {
                    component._springCallbacks[key]();
                    delete component._springs[key];
                    delete component._springCallbacks[key];
                }
            }
            component._springing = true;
            component.set(data);
            component._springing = false;
            if (!hasSprings)
                scheduler$1.components.splice(i, 1);
        }
        if (hasComponents) {
            requestAnimationFrame(scheduler$1.next);
        }
        else {
            scheduler$1.running = false;
        }
    }
};
function snap$1(key, a, b, options) {
    return {
        key: key,
        tick: function (object) {
            object[key] = b;
            return false;
        },
        update: function (object, options) {
            b = object;
        }
    };
}
function number(key, a, b, options) {
    var velocity = 0;
    var stiffness = options.stiffness, damping = options.damping;
    var valueThreshold = Math.abs(b - a) * 0.001;
    var velocityThreshold = valueThreshold; // TODO is this right?
    return {
        key: key,
        tick: function (object) {
            var d = b - a;
            var spring = stiffness * d;
            var damper = damping * velocity;
            var acceleration = spring - damper;
            velocity += acceleration;
            a += velocity;
            object[key] = a;
            if (velocity < velocityThreshold &&
                Math.abs(b - a) < valueThreshold) {
                object[key] = b;
                return false;
            }
            object[key] = a;
            return true;
        },
        update: function (object, options) {
            checkCompatibility(object, b);
            b = object;
            stiffness = options.stiffness;
            damping = options.damping;
        }
    };
}
function date(key, a, b, options) {
    var dummy = {};
    var subspring = number(key, a.getTime(), b.getTime(), options);
    return {
        key: key,
        tick: function (object) {
            if (!subspring.tick(dummy)) {
                object[key] = b;
                return false;
            }
            object[key] = new Date(dummy[key]);
            return true;
        },
        update: function (object, options) {
            checkCompatibility(object, b);
            subspring.update(object.getTime(), options);
            b = object;
        }
    };
}
function array(key, a, b, options) {
    var value = [];
    var subsprings = [];
    for (var i = 0; i < a.length; i += 1) {
        subsprings.push(getSpring(i, a[i], b[i], options));
    }
    return {
        key: key,
        tick: function (object) {
            var active = false;
            for (var i = 0; i < subsprings.length; i += 1) {
                if (subsprings[i].tick(value))
                    active = true;
            }
            if (!active) {
                object[key] = b;
                return false;
            }
            object[key] = value;
            return true;
        },
        update: function (object, options) {
            checkCompatibility(object, b);
            for (var i = 0; i < object.length; i += 1) {
                subsprings[i].update(object[i], options);
            }
            b = object;
        }
    };
}
function object(key, a, b, options) {
    var value = {};
    var subsprings = [];
    for (var k in a) {
        subsprings.push(getSpring(k, a[k], b[k], options));
    }
    return {
        key: key,
        tick: function (object) {
            var active = false;
            for (var i = 0; i < subsprings.length; i += 1) {
                if (subsprings[i].tick(value))
                    active = true;
            }
            if (!active) {
                object[key] = b;
                return false;
            }
            object[key] = value;
            return true;
        },
        update: function (object, options) {
            checkCompatibility(object, b);
            for (var i = 0; i < subsprings.length; i += 1) {
                subsprings[i].update(object[subsprings[i].key], options);
            }
            b = object;
        }
    };
}
function checkCompatibility(a, b) {
    var type = typeof a;
    if (type !== typeof b || Array.isArray(a) !== Array.isArray(b) || isDate(a) !== isDate(b)) {
        throw new Error('Cannot interpolate values of different type');
    }
    if (type === 'object') {
        if (!a || !b)
            throw new Error('Object cannot be null');
        if (Array.isArray(a)) {
            if (a.length !== b.length) {
                throw new Error('Cannot interpolate arrays of different length');
            }
        }
        else {
            if (!keysMatch(a, b))
                throw new Error('Cannot interpolate differently-shaped objects');
        }
    }
    else if (type !== 'number') {
        throw new Error("Cannot interpolate " + type + " values");
    }
}
function getSpring(key, a, b, options) {
    if (a === b || a !== a)
        return snap$1(key, a, b, options);
    checkCompatibility(a, b);
    if (typeof a === 'object') {
        if (Array.isArray(a)) {
            return array(key, a, b, options);
        }
        if (isDate(a)) {
            return date(key, a, b, options);
        }
        return object(key, a, b, options);
    }
    return number(key, a, b, options);
}
function spring(key, to, options) {
    var _this = this;
    if (!this._springs) {
        this._springs = Object.create(null);
        this._springCallbacks = Object.create(null);
        this._springing = false;
        var set_1 = this.set;
        this.set = function (data) {
            if (!_this._springing) {
                for (var key_1 in data) {
                    delete _this._springs[key_1];
                }
            }
            set_1.call(_this, data);
        };
    }
    if (this._springs[key]) {
        this._springs[key].update(to, options);
    }
    else {
        var spring_2 = getSpring(key, this.get(key), to, options);
        this._springs[key] = spring_2;
    }
    var promise = new Promise(function (fulfil) {
        _this._springCallbacks[key] = fulfil;
    });
    scheduler$1.add(this);
    return promise;
}
function keysMatch(a, b) {
    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length)
        return false;
    for (var i = 0; i < aKeys.length; i += 1) {
        if (!(aKeys[i] in b))
            return false;
    }
    return true;
}




/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {"y_vars":[{"name":"decorrelate","label":"Decorrelated Space","type":"binary","default":0,"values":[0,1]},{"name":"transforms","label":"Transformation Robustness","type":"binary","default":0,"values":[0,1]},{"name":"learning_rate","label":"Learning Rate","type":"number","default":0.1,"values":[0.01,0.025,0.05,0.1,0.25]}],"x_vars":[{"name":"neurons","label":"neurons","type":"icon","values":["mixed4b:452","mixed4b:465","mixed4b:475","mixed4b:464","mixed4c:450","mixed4d:479"]},{"name":"steps","label":"steps","type":"number","default":4,"values":[1,48,128,256,2048]}],"size":68}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _GoogleNetExamples = __webpack_require__(5);

var _GoogleNetExamples2 = _interopRequireDefault(_GoogleNetExamples);

var _ImageArray = __webpack_require__(6);

var _ImageArray2 = _interopRequireDefault(_ImageArray);

var _OptExplore = __webpack_require__(7);

var _OptExplore2 = _interopRequireDefault(_OptExplore);

var _OptExplore3 = __webpack_require__(8);

var _OptExplore4 = _interopRequireDefault(_OptExplore3);

var _OptExploreFlex = __webpack_require__(9);

var _OptExploreFlex2 = _interopRequireDefault(_OptExploreFlex);

var _GradArtifacts = __webpack_require__(10);

var _GradArtifacts2 = _interopRequireDefault(_GradArtifacts);

var _OptAndExamples = __webpack_require__(11);

var _OptAndExamples2 = _interopRequireDefault(_OptAndExamples);

var _LinearCombinations = __webpack_require__(12);

var _LinearCombinations2 = _interopRequireDefault(_LinearCombinations);

var _OptProgress = __webpack_require__(13);

var _OptProgress2 = _interopRequireDefault(_OptProgress);

var _ExamplesOptComparison = __webpack_require__(14);

var _ExamplesOptComparison2 = _interopRequireDefault(_ExamplesOptComparison);

var _RandomExamplesOpt = __webpack_require__(15);

var _RandomExamplesOpt2 = _interopRequireDefault(_RandomExamplesOpt);

var _ColabLink = __webpack_require__(16);

var _ColabLink2 = _interopRequireDefault(_ColabLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// load GoogleNetExamples immediately

// import RegReview             from "./diagrams/RegReview.html";
// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

new _GoogleNetExamples2.default({ target: document.getElementById("googlenet-examples") });

// sprite driven figures

{
  var figure = document.getElementById("example-optimization-comparison");
  figure.addEventListener("ready", function () {
    new _ExamplesOptComparison2.default({ target: figure });
  });
}

{
  var _figure = document.getElementById("random-optimization-and-examples");
  _figure.addEventListener("ready", function () {
    new _RandomExamplesOpt2.default({ target: _figure });
  });
}

{
  var _figure2 = document.getElementById("opt-progress");
  _figure2.addEventListener("ready", function () {
    new _OptProgress2.default({ target: _figure2 });
  });
}

{
  var _figure3 = document.getElementById("linear-combinations");
  _figure3.addEventListener("ready", function () {
    new _LinearCombinations2.default({ target: _figure3 });
  });
}

// {
//   const figure = document.getElementById("feature-vis-history")
//   figure.addEventListener("ready", function() {
//     new RegReview({target: figure});
//   });
// }

{
  var _figure4 = document.getElementById("optimization-and-examples");
  _figure4.addEventListener("ready", function () {
    new _OptAndExamples2.default({ target: _figure4 });
  });
}

{
  var _figure5 = document.getElementById("frequency-artifacts");
  _figure5.addEventListener("ready", function () {
    new _GradArtifacts2.default({ target: _figure5 });
  });
}

// image arrays

{
  var _figure6 = document.getElementById("steepest-descent");
  _figure6.addEventListener("ready", function () {
    new _ImageArray2.default({ target: _figure6,
      data: {
        src_class: "steepst-dir-sprite",
        icon_src_class: "steepst-dir-sprite",
        icon_x: 0,
        label_func: function label_func(n, i) {
          return ["Image", "<strong>L<sup>∞</sup> metric</strong> <br>used in adverserial work", "<strong>L<sup>2</sup> metric</strong> <br>regular gradient", "<strong>decorrelated space</strong>"][n];
        },
        n_images: 4,
        n_icons: 14,
        sprite_size: 224,
        size: 170,
        icon_scale: 1,
        hover_scale: 1,
        selected: 9,
        backwards: false
      }
    });
  });
}

{
  var _figure7 = document.getElementById("interpolation");
  _figure7.addEventListener("ready", function () {
    new _ImageArray2.default({ target: _figure7,
      data: {
        src_class: "interpolation-sprite",
        icon_src_class: "interpolation-sprite",
        icon_x: 0,
        label_func: function label_func(n, i) {
          if (n == 0) {
            return ["Layer 4a, Unit 476", "Layer 4a, Unit 476", "Layer 4a, Unit 460", "Layer 4b, Unit 475", "Layer 4c, Unit 369", "Layer 4d, Unit 503", "Layer 4d, Unit 503", "Layer 5a, Unit 810", "Layer 5a, Unit 810"][i];
          } else if (n == 5) {
            return ["Layer 4a, Unit 455", "Layer 4a, Unit 460", "Layer 4a, Unit 501", "Layer 4a, Unit 476", "Layer 4a, Unit 476", "Layer 5a, Unit 791", "Layer 5a, Unit 810", "Layer 5a, Unit 200", "Layer 5a, Unit 791"][i];
          } else {
            return "";
          }
        },
        n_images: 6,
        n_icons: 9,
        sprite_size: 128,
        size: 128,
        icon_scale: 1,
        hover_scale: 1,
        selected: 1,
        backwards: false
      } });
  });
}

// optimization explore widgets

var OptExploreFlex_configs = {

  OptExploreNaive: {
    configurable: ["neurons", "learning_rate"],
    icon_var_values: { decorrelate: 1, transforms: 1 },
    var_values: { decorrelate: 0, learning_rate: 2, transforms: 0 },
    config: __webpack_require__(3)
  },

  PenalizeFreq: {
    configurable: ["neurons", "l1", "tv", "blur"],
    var_values: { l1: 1, tv: 2, blur: 2 },
    icon_var_values: { l1: 1, tv: 3, blur: 3 },
    config: __webpack_require__(17)
  },

  TransformExplore: {
    configurable: ["neurons", "jitter", "random_rotate", "random_scale"],
    icon_var_values: { jitter: 3, random_rotate: 2, random_scale: 2 },
    var_values: { jitter: 1, random_rotate: 1, random_scale: 1 },
    config: __webpack_require__(18)
  },

  OptExplore: {
    configurable: ["neurons", "learning_rate", ["decorrelate", "transforms"]],
    icon_var_values: { decorrelate: 1, transforms: 1 },
    var_values: { decorrelate: 1, learning_rate: 2, transforms: 1 },
    config: __webpack_require__(3)
  }
};

{
  var _figure8 = document.getElementById("optimize-naive");
  _figure8.addEventListener("ready", function () {
    var app = new _OptExploreFlex2.default({ target: _figure8 });
    app.load_spritemap("Preconditioner", OptExploreFlex_configs.OptExploreNaive);
  });
}

{
  var _figure9 = document.getElementById("opt-explore2");
  _figure9.addEventListener("ready", function () {
    var app = new _OptExploreFlex2.default({ target: _figure9 });
    app.load_spritemap("Preconditioner", OptExploreFlex_configs.OptExplore);
  });
}

{
  var _figure10 = document.getElementById("regularizer-playground-robust");
  _figure10.addEventListener("ready", function () {
    var app = new _OptExploreFlex2.default({ target: _figure10 });
    app.load_spritemap("TransformExplore", OptExploreFlex_configs.TransformExplore);
  });
}

{
  var _figure11 = document.getElementById("regularizer-playground-freq");
  _figure11.addEventListener("ready", function () {
    var app = new _OptExploreFlex2.default({ target: _figure11 });
    app.load_spritemap("PenalizeFreq2", OptExploreFlex_configs.PenalizeFreq);
  });
}

{
  var div = document.getElementById("");
  var app = new _ColabLink2.default({ target: div, data: {
      url: ""
    } });
}

{
  var _div = document.getElementById("colab-negative");
  var app = new _ColabLink2.default({ target: _div, data: {
      url: "https://colab.research.google.com/github/tensorflow/lucid/blob/master/notebooks/feature-visualization/negative_neurons.ipynb"
    } });
}

{
  var _div2 = document.getElementById("colab-diversity");
  var app = new _ColabLink2.default({ target: _div2, data: {
      url: "https://colab.research.google.com/github/tensorflow/lucid/blob/master/notebooks/feature-visualization/neuron_diversity.ipynb"
    } });
}

{
  var _div3 = document.getElementById("colab-random");
  var app = new _ColabLink2.default({ target: _div3, data: {
      url: "https://colab.research.google.com/github/tensorflow/lucid/blob/master/notebooks/feature-visualization/neuron_interaction.ipynb#scrollTo=nxPbPfXzGWCD"
    } });
}

{
  var _div4 = document.getElementById("colab-combine");
  var app = new _ColabLink2.default({ target: _div4, data: {
      url: "https://colab.research.google.com/github/tensorflow/lucid/blob/master/notebooks/feature-visualization/neuron_interaction.ipynb#scrollTo=0x-Zi49jGULb"
    } });
}

{
  var _div5 = document.getElementById("colab-interpolation");
  var app = new _ColabLink2.default({ target: _div5, data: {
      url: "https://colab.research.google.com/github/tensorflow/lucid/blob/master/notebooks/feature-visualization/neuron_interaction.ipynb#scrollTo=MxRmLCTlGWSs"
    } });
}

{
  var _div6 = document.getElementById("colab-regularization-naive");
  var app = new _ColabLink2.default({ target: _div6, data: {
      url: "https://colab.research.google.com/github/tensorflow/lucid/blob/master/notebooks/feature-visualization/regularization.ipynb#scrollTo=d3ZKjNizGWtD"
    } });
}

{
  var _div7 = document.getElementById("colab-regularization-freq");
  var app = new _ColabLink2.default({ target: _div7, data: {
      url: "https://colab.research.google.com/github/tensorflow/lucid/blob/master/notebooks/feature-visualization/regularization.ipynb#scrollTo=zlIWBnagGd4q"
    } });
}

{
  var _div8 = document.getElementById("colab-regularization-transform");
  var app = new _ColabLink2.default({ target: _div8, data: {
      url: "https://colab.research.google.com/github/tensorflow/lucid/blob/master/notebooks/feature-visualization/regularization.ipynb#scrollTo=mSDJKMf5GeZy"
    } });
}

{
  var _div9 = document.getElementById("colab-regularization-preconditioner");
  var app = new _ColabLink2.default({ target: _div9, data: {
      url: "https://colab.research.google.com/github/tensorflow/lucid/blob/master/notebooks/feature-visualization/regularization.ipynb#scrollTo=gvF6j5h4GkDe"
    } });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Sprite = __webpack_require__(1);

var _Sprite2 = _interopRequireDefault(_Sprite);

var _shared = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = function () {
	function range(n) {
		return Array(n).fill().map(function (_, i) {
			return i;
		});
	}

	return {
		data: function data() {
			return {
				ns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
				size: 100,
				sprite_scale: 1.0,
				names: ["layer conv2d0", "layer mixed3a", "layer mixed4a", "layers mixed4b & mixed4c", "layers mixed4d & mixed4e"],
				descriptions: ["Edges", "Textures", "Patterns", "Parts", "Objects"]
			};
		},

		oncreate: function oncreate() {
			var _this = this;

			this.mq = matchMedia("(min-width: 1400px)");
			this.mq.onchange = function (event) {
				return _this.set({ size: event.matches ? 125 : 100 });
			};
			this.set({
				size: this.mq.matches ? 125 : 100
			});
		},
		helpers: { range: range }
	};
}();

function encapsulateStyles(node) {
	(0, _shared.setAttribute)(node, "svelte-3261002896", "");
}

function add_css() {
	var style = (0, _shared.createElement)("style");
	style.id = 'svelte-3261002896-style';
	style.textContent = "[svelte-3261002896].sprite_hero,[svelte-3261002896] .sprite_hero{background-image:url(\"images/sprite_hero.png\")}[svelte-3261002896].googlenet-examples,[svelte-3261002896] .googlenet-examples{font-size:16px;display:flex;flex-flow:column;align-items:center}[svelte-3261002896].googlenet-examples .example,[svelte-3261002896] .googlenet-examples .example{display:flex;flex-flow:column}[svelte-3261002896].googlenet-examples .example .images,[svelte-3261002896] .googlenet-examples .example .images{display:flex;flex-flow:row;flex-wrap:wrap;justify-content:flex-start}[svelte-3261002896].googlenet-examples .example .images > *,[svelte-3261002896] .googlenet-examples .example .images > *{margin-bottom:5px;margin-right:5px}[svelte-3261002896].googlenet-examples .inner,[svelte-3261002896] .googlenet-examples .inner{image-rendering:auto}[svelte-3261002896].googlenet-examples .example .images span:last-of-type,[svelte-3261002896] .googlenet-examples .example .images span:last-of-type{margin-bottom:0}[svelte-3261002896].googlenet-examples .example:last-of-type,[svelte-3261002896] .googlenet-examples .example:last-of-type{}[svelte-3261002896].googlenet-examples > div:last-child,[svelte-3261002896] .googlenet-examples > div:last-child{}[svelte-3261002896].description,[svelte-3261002896] .description{width:100%;margin-top:0.25em;margin-bottom:1.5em;color:rgba(0, 0, 0, 0.9);line-height:normal;font-size:0.8em}@media(min-width: 1105px){[svelte-3261002896].googlenet-examples,[svelte-3261002896] .googlenet-examples{grid-column:screen;flex-flow:row;justify-content:center}[svelte-3261002896].googlenet-examples .example .images,[svelte-3261002896] .googlenet-examples .example .images{flex-wrap:wrap}[svelte-3261002896].googlenet-examples .example,[svelte-3261002896] .googlenet-examples .example{margin-right:10px}[svelte-3261002896].googlenet-examples .example:last-of-type,[svelte-3261002896] .googlenet-examples .example:last-of-type{margin-right:0}[svelte-3261002896].googlenet-examples .example .images,[svelte-3261002896] .googlenet-examples .example .images{max-width:calc((100px * 2) + 10px);min-height:calc((100px * 3) + 10px)}}@media(min-width: 1400px){[svelte-3261002896].googlenet-examples .example,[svelte-3261002896] .googlenet-examples .example{margin-right:15px}[svelte-3261002896].googlenet-examples .example .images,[svelte-3261002896] .googlenet-examples .example .images{max-width:calc((125px * 2) + 10px);min-height:calc((125px * 3) + 10px)}}";
	(0, _shared.appendNode)(style, document.head);
}

function create_main_fragment(state, component) {
	var div;

	var each_block_value = template.helpers.range(5);

	var each_block_iterations = [];

	for (var i = 0; i < each_block_value.length; i += 1) {
		each_block_iterations[i] = create_each_block(state, each_block_value, each_block_value[i], i, component);
	}

	return {
		create: function create() {
			div = (0, _shared.createElement)("div");

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].create();
			}
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			encapsulateStyles(div);
			div.className = "googlenet-examples";
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].mount(div, null);
			}
		},

		update: function update(changed, state) {
			var each_block_value = template.helpers.range(5);

			if (changed.size || changed.sprite_scale || changed.descriptions || changed.names) {
				for (var i = 0; i < each_block_value.length; i += 1) {
					if (each_block_iterations[i]) {
						each_block_iterations[i].update(changed, state, each_block_value, each_block_value[i], i);
					} else {
						each_block_iterations[i] = create_each_block(state, each_block_value, each_block_value[i], i, component);
						each_block_iterations[i].create();
						each_block_iterations[i].mount(div, null);
					}
				}

				for (; i < each_block_iterations.length; i += 1) {
					each_block_iterations[i].unmount();
					each_block_iterations[i].destroy();
				}
				each_block_iterations.length = each_block_value.length;
			}
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(div);

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].unmount();
			}
		},

		destroy: function destroy() {
			(0, _shared.destroyEach)(each_block_iterations, false, 0);
		}
	};
}

function create_each_block(state, each_block_value, x, x_index, component) {
	var div,
	    div_1,
	    text_1,
	    span,
	    strong,
	    text_2_value = state.descriptions[x],
	    text_2,
	    text_3,
	    text_4_value = state.names[x],
	    text_4,
	    text_5;

	var each_block_value_1 = template.helpers.range(6);

	var each_block_iterations = [];

	for (var i = 0; i < each_block_value_1.length; i += 1) {
		each_block_iterations[i] = create_each_block_1(state, each_block_value, x, x_index, each_block_value_1, each_block_value_1[i], i, component);
	}

	return {
		create: function create() {
			div = (0, _shared.createElement)("div");
			div_1 = (0, _shared.createElement)("div");

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].create();
			}

			text_1 = (0, _shared.createText)("\n      ");
			span = (0, _shared.createElement)("span");
			strong = (0, _shared.createElement)("strong");
			text_2 = (0, _shared.createText)(text_2_value);
			text_3 = (0, _shared.createText)(" (");
			text_4 = (0, _shared.createText)(text_4_value);
			text_5 = (0, _shared.createText)(")");
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			div.className = "example";
			div_1.className = "images";
			span.className = "description";
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
			(0, _shared.appendNode)(div_1, div);

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].mount(div_1, null);
			}

			(0, _shared.appendNode)(text_1, div);
			(0, _shared.appendNode)(span, div);
			(0, _shared.appendNode)(strong, span);
			(0, _shared.appendNode)(text_2, strong);
			(0, _shared.appendNode)(text_3, span);
			(0, _shared.appendNode)(text_4, span);
			(0, _shared.appendNode)(text_5, span);
		},

		update: function update(changed, state, each_block_value, x, x_index) {
			var each_block_value_1 = template.helpers.range(6);

			if (changed.size || changed.sprite_scale) {
				for (var i = 0; i < each_block_value_1.length; i += 1) {
					if (each_block_iterations[i]) {
						each_block_iterations[i].update(changed, state, each_block_value, x, x_index, each_block_value_1, each_block_value_1[i], i);
					} else {
						each_block_iterations[i] = create_each_block_1(state, each_block_value, x, x_index, each_block_value_1, each_block_value_1[i], i, component);
						each_block_iterations[i].create();
						each_block_iterations[i].mount(div_1, null);
					}
				}

				for (; i < each_block_iterations.length; i += 1) {
					each_block_iterations[i].unmount();
					each_block_iterations[i].destroy();
				}
				each_block_iterations.length = each_block_value_1.length;
			}

			if (changed.descriptions && text_2_value !== (text_2_value = state.descriptions[x])) {
				text_2.data = text_2_value;
			}

			if (changed.names && text_4_value !== (text_4_value = state.names[x])) {
				text_4.data = text_4_value;
			}
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(div);

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].unmount();
			}
		},

		destroy: function destroy() {
			(0, _shared.destroyEach)(each_block_iterations, false, 0);
		}
	};
}

function create_each_block_1(state, each_block_value, x, x_index, each_block_value_1, y, y_index, component) {
	var sprite_updating = {};

	var sprite_initial_data = {
		src_class: "sprite_hero",
		x: x,
		y: y,
		hover: "true"
	};
	if ('size' in state) {
		sprite_initial_data.size = state.size;
		sprite_updating.size = true;
	}
	if ('sprite_scale' in state) {
		sprite_initial_data.sprite_scale = state.sprite_scale;
		sprite_updating.sprite_scale = true;
	}
	var sprite = new _Sprite2.default({
		_root: component._root,
		data: sprite_initial_data,
		_bind: function _bind(changed, childState) {
			var state = component.get(),
			    newState = {};
			if (!sprite_updating.size && changed.size) {
				newState.size = childState.size;
			}

			if (!sprite_updating.sprite_scale && changed.sprite_scale) {
				newState.sprite_scale = childState.sprite_scale;
			}
			sprite_updating = (0, _shared.assign)({}, changed);
			component._set(newState);
			sprite_updating = {};
		}
	});

	component._root._beforecreate.push(function () {
		var state = component.get(),
		    childState = sprite.get(),
		    newState = {};
		if (!childState) return;
		if (!sprite_updating.size) {
			newState.size = childState.size;
		}

		if (!sprite_updating.sprite_scale) {
			newState.sprite_scale = childState.sprite_scale;
		}
		sprite_updating = { size: true, sprite_scale: true };
		component._set(newState);
		sprite_updating = {};
	});

	var sprite_context = {
		state: state
	};

	return {
		create: function create() {
			sprite._fragment.create();
		},

		mount: function mount(target, anchor) {
			sprite._mount(target, anchor);
		},

		update: function update(changed, state, each_block_value, x, x_index, each_block_value_1, y, y_index) {
			var sprite_changes = {};
			sprite_changes.x = x;
			sprite_changes.y = y;
			if (!sprite_updating.size && changed.size) {
				sprite_changes.size = state.size;
				sprite_updating.size = true;
			}
			if (!sprite_updating.sprite_scale && changed.sprite_scale) {
				sprite_changes.sprite_scale = state.sprite_scale;
				sprite_updating.sprite_scale = true;
			}
			sprite._set(sprite_changes);
			sprite_updating = {};

			sprite_context.state = state;
		},

		unmount: function unmount() {
			sprite._unmount();
		},

		destroy: function destroy() {
			sprite.destroy(false);
		}
	};
}

function GoogleNetExamples(options) {
	this.options = options;
	this._state = (0, _shared.assign)(template.data(), options.data);

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root || this;
	this._yield = options._yield;
	this._bind = options._bind;

	if (!document.getElementById("svelte-3261002896-style")) add_css();

	var oncreate = template.oncreate.bind(this);

	if (!options._root) {
		this._oncreate = [oncreate];
		this._beforecreate = [];
		this._aftercreate = [];
	} else {
		this._root._oncreate.push(oncreate);
	}

	this._fragment = create_main_fragment(this._state, this);

	if (options.target) {
		this._fragment.create();
		this._fragment.mount(options.target, options.anchor || null);

		this._lock = true;
		(0, _shared.callAll)(this._beforecreate);
		(0, _shared.callAll)(this._oncreate);
		(0, _shared.callAll)(this._aftercreate);
		this._lock = false;
	}
}

(0, _shared.assign)(GoogleNetExamples.prototype, _shared.proto);

exports.default = GoogleNetExamples;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Sprite = __webpack_require__(1);

var _Sprite2 = _interopRequireDefault(_Sprite);

var _shared = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = function () {
	function range(n, inverted) {
		var ret = [];
		if (inverted) {
			for (var i = 0; i < n; ++i) {
				ret.push(n - i - 1);
			}
		} else {
			for (var i = 0; i < n; ++i) {
				ret.push(i);
			}
		}
		return ret;
	}
	return {
		data: function data() {
			return {
				n_icons: 4,
				n_images: 6,
				selected: 0,
				sprite_size: 128,
				size: 160,
				src_class: "",
				label_func: function label_func(n) {
					return "Image " + n;
				},
				icon_src_class: "",
				icon_scale: 0.5,
				backwards: false
			};
		},

		computed: {
			icon_ns: function icon_ns(n_icons, backwards) {
				return range(n_icons, backwards);
			},
			image_ns: function image_ns(n_images) {
				return range(n_images, false);
			}
		}
	};
}();

function encapsulateStyles(node) {
	(0, _shared.setAttribute)(node, "svelte-4203530351", "");
}

function add_css() {
	var style = (0, _shared.createElement)("style");
	style.id = 'svelte-4203530351-style';
	style.textContent = "[svelte-4203530351].icons,[svelte-4203530351] .icons{display:inline-flex;flex-wrap:wrap;flex-direction:row;margin-bottom:8px;border-bottom:1px solid #dddddd}[svelte-4203530351].icons .icon,[svelte-4203530351] .icons .icon{cursor:pointer;padding-bottom:5px;margin-bottom:-1px;margin-left:3px;margin-right:3px}[svelte-4203530351].icons .icon:first-of-type,[svelte-4203530351] .icons .icon:first-of-type{margin-left:0px}[svelte-4203530351].icons .icon:last-of-type,[svelte-4203530351] .icons .icon:last-of-type{margin-right:0px}[svelte-4203530351].icons .icon.selected,[svelte-4203530351] .icons .icon.selected{opacity:100%;border-bottom:3px solid #ff6600}[svelte-4203530351].icon div,[svelte-4203530351] .icon div{opacity:0.666;image-rendering:auto}[svelte-4203530351].icon.selected div,[svelte-4203530351] .icon.selected div{opacity:1}[svelte-4203530351].images,[svelte-4203530351] .images{display:flex;flex-wrap:wrap;flex-direction:row;top:0px}[svelte-4203530351].images > div,[svelte-4203530351] .images > div{margin-right:5px}[svelte-4203530351].images > div:last-child,[svelte-4203530351] .images > div:last-child{margin-right:0}[svelte-4203530351].images div img,[svelte-4203530351] .images div img{width:100%;height:100%;background-color:#EEE}figcaption[svelte-4203530351],[svelte-4203530351] figcaption{margin-top:6px}";
	(0, _shared.appendNode)(style, document.head);
}

function create_main_fragment(state, component) {
	var div, text_1, div_1;

	var each_block_value = state.icon_ns;

	var each_block_iterations = [];

	for (var i = 0; i < each_block_value.length; i += 1) {
		each_block_iterations[i] = create_each_block(state, each_block_value, each_block_value[i], i, component);
	}

	var each_block_value_1 = state.image_ns;

	var each_block_1_iterations = [];

	for (var i = 0; i < each_block_value_1.length; i += 1) {
		each_block_1_iterations[i] = create_each_block_1(state, each_block_value_1, each_block_value_1[i], i, component);
	}

	return {
		create: function create() {
			div = (0, _shared.createElement)("div");

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].create();
			}

			text_1 = (0, _shared.createText)("\n");
			div_1 = (0, _shared.createElement)("div");

			for (var i = 0; i < each_block_1_iterations.length; i += 1) {
				each_block_1_iterations[i].create();
			}
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			encapsulateStyles(div);
			div.className = "icons";
			encapsulateStyles(div_1);
			div_1.className = "images";
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].mount(div, null);
			}

			(0, _shared.insertNode)(text_1, target, anchor);
			(0, _shared.insertNode)(div_1, target, anchor);

			for (var i = 0; i < each_block_1_iterations.length; i += 1) {
				each_block_1_iterations[i].mount(div_1, null);
			}
		},

		update: function update(changed, state) {
			var each_block_value = state.icon_ns;

			if (changed.selected || changed.icon_ns || changed.icon_src_class || changed.icon_scale || changed.sprite_size || changed.icon_x) {
				for (var i = 0; i < each_block_value.length; i += 1) {
					if (each_block_iterations[i]) {
						each_block_iterations[i].update(changed, state, each_block_value, each_block_value[i], i);
					} else {
						each_block_iterations[i] = create_each_block(state, each_block_value, each_block_value[i], i, component);
						each_block_iterations[i].create();
						each_block_iterations[i].mount(div, null);
					}
				}

				for (; i < each_block_iterations.length; i += 1) {
					each_block_iterations[i].unmount();
					each_block_iterations[i].destroy();
				}
				each_block_iterations.length = each_block_value.length;
			}

			var each_block_value_1 = state.image_ns;

			if (changed.src_class || changed.size || changed.sprite_size || changed.selected || changed.image_ns || changed.label_func) {
				for (var i = 0; i < each_block_value_1.length; i += 1) {
					if (each_block_1_iterations[i]) {
						each_block_1_iterations[i].update(changed, state, each_block_value_1, each_block_value_1[i], i);
					} else {
						each_block_1_iterations[i] = create_each_block_1(state, each_block_value_1, each_block_value_1[i], i, component);
						each_block_1_iterations[i].create();
						each_block_1_iterations[i].mount(div_1, null);
					}
				}

				for (; i < each_block_1_iterations.length; i += 1) {
					each_block_1_iterations[i].unmount();
					each_block_1_iterations[i].destroy();
				}
				each_block_1_iterations.length = each_block_value_1.length;
			}
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(div);

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].unmount();
			}

			(0, _shared.detachNode)(text_1);
			(0, _shared.detachNode)(div_1);

			for (var i = 0; i < each_block_1_iterations.length; i += 1) {
				each_block_1_iterations[i].unmount();
			}
		},

		destroy: function destroy() {
			(0, _shared.destroyEach)(each_block_iterations, false, 0);

			(0, _shared.destroyEach)(each_block_1_iterations, false, 0);
		}
	};
}

function create_each_block(state, each_block_value, n, n_index, component) {
	var div,
	    div_class_value,
	    sprite_updating = {};

	var sprite_initial_data = {
		size: 44,
		sprite_size: state.icon_scale * state.sprite_size,
		y: (1 - state.icon_scale) / 2 + n / state.icon_scale,
		x: (1 - state.icon_scale) / 2 + state.icon_x / state.icon_scale,
		hover_scale: 44 / state.sprite_size / state.icon_scale
	};
	if ('icon_src_class' in state) {
		sprite_initial_data.src_class = state.icon_src_class;
		sprite_updating.src_class = true;
	}
	var sprite = new _Sprite2.default({
		_root: component._root,
		data: sprite_initial_data,
		_bind: function _bind(changed, childState) {
			var state = component.get(),
			    newState = {};
			if (!sprite_updating.src_class && changed.src_class) {
				newState.icon_src_class = childState.src_class;
			}
			sprite_updating = (0, _shared.assign)({}, changed);
			component._set(newState);
			sprite_updating = {};
		}
	});

	component._root._beforecreate.push(function () {
		var state = component.get(),
		    childState = sprite.get(),
		    newState = {};
		if (!childState) return;
		if (!sprite_updating.src_class) {
			newState.icon_src_class = childState.src_class;
		}
		sprite_updating = { src_class: true };
		component._set(newState);
		sprite_updating = {};
	});

	var sprite_context = {
		state: state
	};

	return {
		create: function create() {
			div = (0, _shared.createElement)("div");
			sprite._fragment.create();
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			div.className = div_class_value = "icon " + (state.selected == n ? 'selected' : '');
			(0, _shared.addListener)(div, "click", click_handler);

			div._svelte = {
				component: component,
				each_block_value: each_block_value,
				n_index: n_index
			};
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
			sprite._mount(div, null);
		},

		update: function update(changed, state, each_block_value, n, n_index) {
			if ((changed.selected || changed.icon_ns) && div_class_value !== (div_class_value = "icon " + (state.selected == n ? 'selected' : ''))) {
				div.className = div_class_value;
			}

			div._svelte.each_block_value = each_block_value;
			div._svelte.n_index = n_index;

			var sprite_changes = {};
			if (changed.icon_scale || changed.sprite_size) sprite_changes.sprite_size = state.icon_scale * state.sprite_size;
			if (changed.icon_scale || changed.icon_ns) sprite_changes.y = (1 - state.icon_scale) / 2 + n / state.icon_scale;
			if (changed.icon_scale || changed.icon_x) sprite_changes.x = (1 - state.icon_scale) / 2 + state.icon_x / state.icon_scale;
			if (changed.sprite_size || changed.icon_scale) sprite_changes.hover_scale = 44 / state.sprite_size / state.icon_scale;
			if (!sprite_updating.src_class && changed.icon_src_class) {
				sprite_changes.src_class = state.icon_src_class;
				sprite_updating.src_class = true;
			}
			sprite._set(sprite_changes);
			sprite_updating = {};

			sprite_context.state = state;
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(div);
		},

		destroy: function destroy() {
			(0, _shared.removeListener)(div, "click", click_handler);
			sprite.destroy(false);
		}
	};
}

function create_each_block_1(state, each_block_value_1, n_1, n_index_1, component) {
	var div,
	    sprite_updating = {},
	    text,
	    br,
	    text_1,
	    figcaption,
	    raw_value = state.label_func(n_1, state.selected);

	var sprite_initial_data = { x: n_1, hover: false };
	if ('src_class' in state) {
		sprite_initial_data.src_class = state.src_class;
		sprite_updating.src_class = true;
	}
	if ('size' in state) {
		sprite_initial_data.size = state.size;
		sprite_updating.size = true;
	}
	if ('sprite_size' in state) {
		sprite_initial_data.sprite_size = state.sprite_size;
		sprite_updating.sprite_size = true;
	}
	if ('selected' in state) {
		sprite_initial_data.y = state.selected;
		sprite_updating.y = true;
	}
	var sprite = new _Sprite2.default({
		_root: component._root,
		data: sprite_initial_data,
		_bind: function _bind(changed, childState) {
			var state = component.get(),
			    newState = {};
			if (!sprite_updating.src_class && changed.src_class) {
				newState.src_class = childState.src_class;
			}

			if (!sprite_updating.size && changed.size) {
				newState.size = childState.size;
			}

			if (!sprite_updating.sprite_size && changed.sprite_size) {
				newState.sprite_size = childState.sprite_size;
			}

			if (!sprite_updating.y && changed.y) {
				newState.selected = childState.y;
			}
			sprite_updating = (0, _shared.assign)({}, changed);
			component._set(newState);
			sprite_updating = {};
		}
	});

	component._root._beforecreate.push(function () {
		var state = component.get(),
		    childState = sprite.get(),
		    newState = {};
		if (!childState) return;
		if (!sprite_updating.src_class) {
			newState.src_class = childState.src_class;
		}

		if (!sprite_updating.size) {
			newState.size = childState.size;
		}

		if (!sprite_updating.sprite_size) {
			newState.sprite_size = childState.sprite_size;
		}

		if (!sprite_updating.y) {
			newState.selected = childState.y;
		}
		sprite_updating = { src_class: true, size: true, sprite_size: true, y: true };
		component._set(newState);
		sprite_updating = {};
	});

	var sprite_context = {
		state: state
	};

	return {
		create: function create() {
			div = (0, _shared.createElement)("div");
			sprite._fragment.create();
			text = (0, _shared.createText)("\n      ");
			br = (0, _shared.createElement)("br");
			text_1 = (0, _shared.createText)("\n      ");
			figcaption = (0, _shared.createElement)("figcaption");
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			(0, _shared.setStyle)(br, "clear", "left");
			(0, _shared.setStyle)(figcaption, "max-width", "" + state.size + "px");
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
			sprite._mount(div, null);
			(0, _shared.appendNode)(text, div);
			(0, _shared.appendNode)(br, div);
			(0, _shared.appendNode)(text_1, div);
			(0, _shared.appendNode)(figcaption, div);
			figcaption.innerHTML = raw_value;
		},

		update: function update(changed, state, each_block_value_1, n_1, n_index_1) {
			var sprite_changes = {};
			if (changed.image_ns) sprite_changes.x = n_1;
			sprite_changes.hover = false;
			if (!sprite_updating.src_class && changed.src_class) {
				sprite_changes.src_class = state.src_class;
				sprite_updating.src_class = true;
			}
			if (!sprite_updating.size && changed.size) {
				sprite_changes.size = state.size;
				sprite_updating.size = true;
			}
			if (!sprite_updating.sprite_size && changed.sprite_size) {
				sprite_changes.sprite_size = state.sprite_size;
				sprite_updating.sprite_size = true;
			}
			if (!sprite_updating.y && changed.selected) {
				sprite_changes.y = state.selected;
				sprite_updating.y = true;
			}
			sprite._set(sprite_changes);
			sprite_updating = {};

			sprite_context.state = state;

			if (changed.size) {
				(0, _shared.setStyle)(figcaption, "max-width", "" + state.size + "px");
			}

			if ((changed.label_func || changed.image_ns || changed.selected) && raw_value !== (raw_value = state.label_func(n_1, state.selected))) {
				figcaption.innerHTML = raw_value;
			}
		},

		unmount: function unmount() {
			figcaption.innerHTML = '';

			(0, _shared.detachNode)(div);
		},

		destroy: function destroy() {
			sprite.destroy(false);
		}
	};
}

function click_handler(event) {
	var component = this._svelte.component;
	var each_block_value = this._svelte.each_block_value,
	    n_index = this._svelte.n_index,
	    n = each_block_value[n_index];
	component.set({ selected: n });
}

function ImageArray(options) {
	this.options = options;
	this._state = (0, _shared.assign)(template.data(), options.data);
	this._recompute({}, this._state, {}, true);

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root || this;
	this._yield = options._yield;
	this._bind = options._bind;

	if (!document.getElementById("svelte-4203530351-style")) add_css();

	if (!options._root) {
		this._oncreate = [];
		this._beforecreate = [];
		this._aftercreate = [];
	}

	this._fragment = create_main_fragment(this._state, this);

	if (options.target) {
		this._fragment.create();
		this._fragment.mount(options.target, options.anchor || null);

		this._lock = true;
		(0, _shared.callAll)(this._beforecreate);
		(0, _shared.callAll)(this._oncreate);
		(0, _shared.callAll)(this._aftercreate);
		this._lock = false;
	}
}

(0, _shared.assign)(ImageArray.prototype, _shared.proto);

ImageArray.prototype._recompute = function _recompute(changed, state, oldState, isInitial) {
	if (isInitial || changed.n_icons || changed.backwards) {
		if ((0, _shared.differs)(state.icon_ns = template.computed.icon_ns(state.n_icons, state.backwards), oldState.icon_ns)) changed.icon_ns = true;
	}

	if (isInitial || changed.n_images) {
		if ((0, _shared.differs)(state.image_ns = template.computed.image_ns(state.n_images), oldState.image_ns)) changed.image_ns = true;
	}
};

exports.default = ImageArray;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Sprite = __webpack_require__(1);

var _Sprite2 = _interopRequireDefault(_Sprite);

var _shared = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = function () {
	function range(n) {
		var ret = [];
		for (var i = 0; i < n; ++i) {
			ret.push(i);
		}return ret;
	}
	return {
		data: function data() {
			return {
				n_images: 4,
				sprite_size: 132,
				size: 180,
				jitter: false,
				adam: false,
				pyramid: false,
				color: false,
				learning_rate: 1,
				learning_rate_list: [0.1, 0.01, 0.001, 0.0001],
				label_func: function label_func(n) {
					return "Step " + 8 * Math.pow(4, n);
				},
				selected: 0,
				icon_ns: [0, 1, 2, 3]
			};
		},

		computed: {
			y: function y(jitter, adam, pyramid, color, learning_rate, learning_rate_list) {
				return 1 * color + 2 * pyramid + 4 * learning_rate + 4 * learning_rate_list.length * adam + 8 * learning_rate_list.length * jitter;
			},
			image_ns: function image_ns(n_images) {
				return range(n_images);
			}
		}
	};
}();

function encapsulateStyles(node) {
	(0, _shared.setAttribute)(node, "svelte-3412449242", "");
}

function add_css() {
	var style = (0, _shared.createElement)("style");
	style.id = 'svelte-3412449242-style';
	style.textContent = "[svelte-3412449242].icons .icon,[svelte-3412449242] .icons .icon{float:left;width:30px;height:30px;margin:2px;background-color:#EEE;filter:brightness(80%)}[svelte-3412449242].icons .selected,[svelte-3412449242] .icons .selected{background-color:#AAA;box-shadow:1px 1px 3px gold, -1px -1px 3px gold, -1px 1px 3px gold, 1px -1px 3px gold;filter:brightness(100%)}[svelte-3412449242].images > div,[svelte-3412449242] .images > div{position:absolute;top:0px;margin:0px}figcaption[svelte-3412449242],[svelte-3412449242] figcaption{margin-top:6px}[svelte-3412449242].opt-explore-sprites,[svelte-3412449242] .opt-explore-sprites{background:url(\"images/explore_mixed4c_450_sprite_128.jpeg\")}label[svelte-3412449242],[svelte-3412449242] label{display:block}";
	(0, _shared.appendNode)(style, document.head);
}

function create_main_fragment(state, component) {
	var div,
	    figcaption,
	    div_1,
	    div_2,
	    div_3,
	    text,
	    text_1_value = state.learning_rate_list[[state.learning_rate]],
	    text_1,
	    text_2,
	    text_3,
	    div_4,
	    input,
	    input_max_value,
	    text_5,
	    div_5,
	    label,
	    input_1,
	    text_6,
	    text_7,
	    label_1,
	    input_2,
	    text_8,
	    text_10,
	    div_6,
	    label_2,
	    input_3,
	    text_11,
	    text_12,
	    label_3,
	    input_4,
	    text_13,
	    text_15,
	    br,
	    text_18,
	    div_7;

	function input_input_handler() {
		component.set({ learning_rate: (0, _shared.toNumber)(input.value) });
	}

	function input_1_change_handler() {
		component.set({ jitter: input_1.checked });
	}

	function input_2_change_handler() {
		component.set({ adam: input_2.checked });
	}

	function input_3_change_handler() {
		component.set({ pyramid: input_3.checked });
	}

	function input_4_change_handler() {
		component.set({ color: input_4.checked });
	}

	var each_block_value = state.image_ns;

	var each_block_iterations = [];

	for (var i = 0; i < each_block_value.length; i += 1) {
		each_block_iterations[i] = create_each_block(state, each_block_value, each_block_value[i], i, component);
	}

	return {
		create: function create() {
			div = (0, _shared.createElement)("div");
			figcaption = (0, _shared.createElement)("figcaption");
			div_1 = (0, _shared.createElement)("div");
			div_2 = (0, _shared.createElement)("div");
			div_3 = (0, _shared.createElement)("div");
			text = (0, _shared.createText)("Learning Rate (");
			text_1 = (0, _shared.createText)(text_1_value);
			text_2 = (0, _shared.createText)(")");
			text_3 = (0, _shared.createText)("\n        ");
			div_4 = (0, _shared.createElement)("div");
			input = (0, _shared.createElement)("input");
			text_5 = (0, _shared.createText)("\n      ");
			div_5 = (0, _shared.createElement)("div");
			label = (0, _shared.createElement)("label");
			input_1 = (0, _shared.createElement)("input");
			text_6 = (0, _shared.createText)(" Jitter");
			text_7 = (0, _shared.createText)("\n        ");
			label_1 = (0, _shared.createElement)("label");
			input_2 = (0, _shared.createElement)("input");
			text_8 = (0, _shared.createText)(" Adam");
			text_10 = (0, _shared.createText)("\n      ");
			div_6 = (0, _shared.createElement)("div");
			label_2 = (0, _shared.createElement)("label");
			input_3 = (0, _shared.createElement)("input");
			text_11 = (0, _shared.createText)(" Laplacian Pyramid");
			text_12 = (0, _shared.createText)("\n        ");
			label_3 = (0, _shared.createElement)("label");
			input_4 = (0, _shared.createElement)("input");
			text_13 = (0, _shared.createText)(" Fancy Color Param");
			text_15 = (0, _shared.createText)("\n      ");
			br = (0, _shared.createElement)("br");
			text_18 = (0, _shared.createText)("\n  ");
			div_7 = (0, _shared.createElement)("div");

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].create();
			}
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			encapsulateStyles(div);
			div.className = "opt-explore";
			(0, _shared.setStyle)(figcaption, "margin-bottom", "10px");
			(0, _shared.setStyle)(div_1, "width", "" + ((state.size + 20) * state.n_images - 20) + "px");
			(0, _shared.setStyle)(div_2, "float", "left");
			(0, _shared.setStyle)(div_2, "padding-right", "60px");
			input.type = "range";
			input.min = "0";
			input.max = input_max_value = state.learning_rate_list.length - 1;

			(0, _shared.addListener)(input, "input", input_input_handler);
			(0, _shared.addListener)(input, "change", input_input_handler);

			(0, _shared.setStyle)(div_5, "float", "left");
			(0, _shared.setStyle)(div_5, "padding-right", "60px");
			input_1.type = "checkbox";
			(0, _shared.addListener)(input_1, "change", input_1_change_handler);
			input_2.type = "checkbox";
			(0, _shared.addListener)(input_2, "change", input_2_change_handler);
			(0, _shared.setStyle)(div_6, "float", "left");
			(0, _shared.setStyle)(div_6, "padding-right", "60px");
			input_3.type = "checkbox";
			(0, _shared.addListener)(input_3, "change", input_3_change_handler);
			input_4.type = "checkbox";
			(0, _shared.addListener)(input_4, "change", input_4_change_handler);
			(0, _shared.setStyle)(br, "clear", "left");
			div_7.className = "images";
			(0, _shared.setStyle)(div_7, "width", "100%");
			(0, _shared.setStyle)(div_7, "height", "" + (state.size + 20) + "px");
			(0, _shared.setStyle)(div_7, "position", "relative");
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
			(0, _shared.appendNode)(figcaption, div);
			(0, _shared.appendNode)(div_1, figcaption);
			(0, _shared.appendNode)(div_2, div_1);
			(0, _shared.appendNode)(div_3, div_2);
			(0, _shared.appendNode)(text, div_3);
			(0, _shared.appendNode)(text_1, div_3);
			(0, _shared.appendNode)(text_2, div_3);
			(0, _shared.appendNode)(text_3, div_2);
			(0, _shared.appendNode)(div_4, div_2);
			(0, _shared.appendNode)(input, div_4);

			input.value = state.learning_rate;

			(0, _shared.appendNode)(text_5, div_1);
			(0, _shared.appendNode)(div_5, div_1);
			(0, _shared.appendNode)(label, div_5);
			(0, _shared.appendNode)(input_1, label);

			input_1.checked = state.jitter;

			(0, _shared.appendNode)(text_6, label);
			(0, _shared.appendNode)(text_7, div_5);
			(0, _shared.appendNode)(label_1, div_5);
			(0, _shared.appendNode)(input_2, label_1);

			input_2.checked = state.adam;

			(0, _shared.appendNode)(text_8, label_1);
			(0, _shared.appendNode)(text_10, div_1);
			(0, _shared.appendNode)(div_6, div_1);
			(0, _shared.appendNode)(label_2, div_6);
			(0, _shared.appendNode)(input_3, label_2);

			input_3.checked = state.pyramid;

			(0, _shared.appendNode)(text_11, label_2);
			(0, _shared.appendNode)(text_12, div_6);
			(0, _shared.appendNode)(label_3, div_6);
			(0, _shared.appendNode)(input_4, label_3);

			input_4.checked = state.color;

			(0, _shared.appendNode)(text_13, label_3);
			(0, _shared.appendNode)(text_15, div_1);
			(0, _shared.appendNode)(br, div_1);
			(0, _shared.appendNode)(text_18, div);
			(0, _shared.appendNode)(div_7, div);

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].mount(div_7, null);
			}
		},

		update: function update(changed, state) {
			if (changed.size || changed.n_images) {
				(0, _shared.setStyle)(div_1, "width", "" + ((state.size + 20) * state.n_images - 20) + "px");
			}

			if ((changed.learning_rate_list || changed.learning_rate) && text_1_value !== (text_1_value = state.learning_rate_list[[state.learning_rate]])) {
				text_1.data = text_1_value;
			}

			if (changed.learning_rate_list && input_max_value !== (input_max_value = state.learning_rate_list.length - 1)) {
				input.max = input_max_value;
			}

			input.value = state.learning_rate;

			input_1.checked = state.jitter;

			input_2.checked = state.adam;

			input_3.checked = state.pyramid;

			input_4.checked = state.color;

			if (changed.size) {
				(0, _shared.setStyle)(div_7, "height", "" + (state.size + 20) + "px");
			}

			var each_block_value = state.image_ns;

			if (changed.size || changed.image_ns || changed.sprite_size || changed.y || changed.label_func) {
				for (var i = 0; i < each_block_value.length; i += 1) {
					if (each_block_iterations[i]) {
						each_block_iterations[i].update(changed, state, each_block_value, each_block_value[i], i);
					} else {
						each_block_iterations[i] = create_each_block(state, each_block_value, each_block_value[i], i, component);
						each_block_iterations[i].create();
						each_block_iterations[i].mount(div_7, null);
					}
				}

				for (; i < each_block_iterations.length; i += 1) {
					each_block_iterations[i].unmount();
					each_block_iterations[i].destroy();
				}
				each_block_iterations.length = each_block_value.length;
			}
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(div);

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].unmount();
			}
		},

		destroy: function destroy() {
			(0, _shared.removeListener)(input, "input", input_input_handler);
			(0, _shared.removeListener)(input, "change", input_input_handler);

			(0, _shared.removeListener)(input_1, "change", input_1_change_handler);
			(0, _shared.removeListener)(input_2, "change", input_2_change_handler);
			(0, _shared.removeListener)(input_3, "change", input_3_change_handler);
			(0, _shared.removeListener)(input_4, "change", input_4_change_handler);

			(0, _shared.destroyEach)(each_block_iterations, false, 0);
		}
	};
}

function create_each_block(state, each_block_value, n, n_index, component) {
	var div,
	    div_1,
	    div_2,
	    text_1,
	    figcaption,
	    raw_value = state.label_func(n);

	return {
		create: function create() {
			div = (0, _shared.createElement)("div");
			div_1 = (0, _shared.createElement)("div");
			div_2 = (0, _shared.createElement)("div");
			text_1 = (0, _shared.createText)("\n        ");
			figcaption = (0, _shared.createElement)("figcaption");
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			(0, _shared.setStyle)(div, "left", "" + (state.size + 20) * n + "px");
			(0, _shared.setStyle)(div, "width", "" + state.size + "px");
			(0, _shared.setStyle)(div, "height", "" + (state.size + 20) + "px");
			(0, _shared.setStyle)(div_1, "margin", "" + (state.size - state.sprite_size) / 2 + "px");
			(0, _shared.setStyle)(div_1, "transform", "scale(" + state.size / state.sprite_size + ")");
			div_2.className = "opt-explore-sprites";
			(0, _shared.setStyle)(div_2, "width", "" + state.sprite_size + "px");
			(0, _shared.setStyle)(div_2, "height", "" + state.sprite_size + "px");
			(0, _shared.setStyle)(div_2, "background-position", "-" + state.sprite_size * n + "px -" + state.sprite_size * state.y + "px");
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
			(0, _shared.appendNode)(div_1, div);
			(0, _shared.appendNode)(div_2, div_1);
			(0, _shared.appendNode)(text_1, div);
			(0, _shared.appendNode)(figcaption, div);
			figcaption.innerHTML = raw_value;
		},

		update: function update(changed, state, each_block_value, n, n_index) {
			if (changed.size || changed.image_ns) {
				(0, _shared.setStyle)(div, "left", "" + (state.size + 20) * n + "px");
			}

			if (changed.size) {
				(0, _shared.setStyle)(div, "width", "" + state.size + "px");
				(0, _shared.setStyle)(div, "height", "" + (state.size + 20) + "px");
			}

			if (changed.size || changed.sprite_size) {
				(0, _shared.setStyle)(div_1, "margin", "" + (state.size - state.sprite_size) / 2 + "px");
				(0, _shared.setStyle)(div_1, "transform", "scale(" + state.size / state.sprite_size + ")");
			}

			if (changed.sprite_size) {
				(0, _shared.setStyle)(div_2, "width", "" + state.sprite_size + "px");
				(0, _shared.setStyle)(div_2, "height", "" + state.sprite_size + "px");
			}

			if (changed.sprite_size || changed.image_ns || changed.y) {
				(0, _shared.setStyle)(div_2, "background-position", "-" + state.sprite_size * n + "px -" + state.sprite_size * state.y + "px");
			}

			if ((changed.label_func || changed.image_ns) && raw_value !== (raw_value = state.label_func(n))) {
				figcaption.innerHTML = raw_value;
			}
		},

		unmount: function unmount() {
			figcaption.innerHTML = '';

			(0, _shared.detachNode)(div);
		},

		destroy: _shared.noop
	};
}

function OptExplore(options) {
	this.options = options;
	this._state = (0, _shared.assign)(template.data(), options.data);
	this._recompute({}, this._state, {}, true);

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root || this;
	this._yield = options._yield;
	this._bind = options._bind;

	if (!document.getElementById("svelte-3412449242-style")) add_css();

	this._fragment = create_main_fragment(this._state, this);

	if (options.target) {
		this._fragment.create();
		this._fragment.mount(options.target, options.anchor || null);
	}
}

(0, _shared.assign)(OptExplore.prototype, _shared.proto);

OptExplore.prototype._recompute = function _recompute(changed, state, oldState, isInitial) {
	if (isInitial || changed.jitter || changed.adam || changed.pyramid || changed.color || changed.learning_rate || changed.learning_rate_list) {
		if ((0, _shared.differs)(state.y = template.computed.y(state.jitter, state.adam, state.pyramid, state.color, state.learning_rate, state.learning_rate_list), oldState.y)) changed.y = true;
	}

	if (isInitial || changed.n_images) {
		if ((0, _shared.differs)(state.image_ns = template.computed.image_ns(state.n_images), oldState.image_ns)) changed.image_ns = true;
	}
};

exports.default = OptExplore;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Sprite = __webpack_require__(1);

var _Sprite2 = _interopRequireDefault(_Sprite);

var _shared = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = function () {
	function range(n) {
		var ret = [];
		for (var i = 0; i < n; ++i) {
			ret.push(i);
		}return ret;
	}
	return {
		data: function data() {
			return {
				n_images: 5,
				sprite_size: 64,
				size: 180,
				jitter: true,
				adam: false,
				pyramid: true,
				color: false,
				learning_rate: 2,
				learning_rate_list: [5, 1.25, 0.25, 0.05, 0.01, 0.002],
				label_func: function label_func(n) {
					return "Step " + 8 * Math.pow(4, n);
				},
				selected: 0,
				icon_ns: [0, 1, 2, 3, 4]
			};
		},

		computed: {
			y: function y(jitter, adam, pyramid, color, learning_rate, learning_rate_list) {
				return 1 * color + 2 * pyramid + 4 * learning_rate + 4 * learning_rate_list.length * adam + 8 * learning_rate_list.length * jitter;
			},
			image_ns: function image_ns(n_images) {
				return range(n_images);
			}
		}
	};
}();

function encapsulateStyles(node) {
	(0, _shared.setAttribute)(node, "svelte-1275485919", "");
}

function add_css() {
	var style = (0, _shared.createElement)("style");
	style.id = 'svelte-1275485919-style';
	style.textContent = "[svelte-1275485919].icons .icon,[svelte-1275485919] .icons .icon{float:left;width:40px;height:40px;margin:2px;background-color:#EEE}[svelte-1275485919].icons .selected,[svelte-1275485919] .icons .selected{background-color:#AAA;box-shadow:1px 1px 3px gold, -1px -1px 3px gold, -1px 1px 3px gold, 1px -1px 3px gold;filter:brightness(100%)}[svelte-1275485919].images > div,[svelte-1275485919] .images > div{position:absolute;top:0px;margin:0px}figcaption[svelte-1275485919],[svelte-1275485919] figcaption{padding-top:10px}[svelte-1275485919].opt-explore-sprites,[svelte-1275485919] .opt-explore-sprites{background:url(\"images/explore_opt_spritemap_64.jpeg\")}label[svelte-1275485919],[svelte-1275485919] label{display:block}";
	(0, _shared.appendNode)(style, document.head);
}

function create_main_fragment(state, component) {
	var div,
	    figcaption,
	    div_1,
	    div_2,
	    text_1,
	    div_3,
	    div_4,
	    text_2,
	    text_3_value = state.learning_rate_list[[state.learning_rate]],
	    text_3,
	    text_4,
	    text_5,
	    div_5,
	    d_slider,
	    d_slider_max_value,
	    text_7,
	    div_6,
	    label,
	    input,
	    text_8,
	    text_9,
	    label_1,
	    input_1,
	    text_10,
	    text_12,
	    div_7,
	    label_2,
	    input_2,
	    text_13,
	    text_14,
	    label_3,
	    input_3,
	    text_15,
	    text_17,
	    br,
	    text_20,
	    div_8;

	var each_block_value = state.icon_ns;

	var each_block_iterations = [];

	for (var i = 0; i < each_block_value.length; i += 1) {
		each_block_iterations[i] = create_each_block(state, each_block_value, each_block_value[i], i, component);
	}

	function input_change_handler() {
		component.set({ jitter: input.checked });
	}

	function input_1_change_handler() {
		component.set({ adam: input_1.checked });
	}

	function input_2_change_handler() {
		component.set({ pyramid: input_2.checked });
	}

	function input_3_change_handler() {
		component.set({ color: input_3.checked });
	}

	var each_block_value_1 = state.image_ns;

	var each_block_1_iterations = [];

	for (var i = 0; i < each_block_value_1.length; i += 1) {
		each_block_1_iterations[i] = create_each_block_1(state, each_block_value_1, each_block_value_1[i], i, component);
	}

	return {
		create: function create() {
			div = (0, _shared.createElement)("div");
			figcaption = (0, _shared.createElement)("figcaption");
			div_1 = (0, _shared.createElement)("div");
			div_2 = (0, _shared.createElement)("div");

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].create();
			}

			text_1 = (0, _shared.createText)("\n      ");
			div_3 = (0, _shared.createElement)("div");
			div_4 = (0, _shared.createElement)("div");
			text_2 = (0, _shared.createText)("Learning Rate (");
			text_3 = (0, _shared.createText)(text_3_value);
			text_4 = (0, _shared.createText)(")");
			text_5 = (0, _shared.createText)("\n        ");
			div_5 = (0, _shared.createElement)("div");
			d_slider = (0, _shared.createElement)("d-slider");
			text_7 = (0, _shared.createText)("\n      ");
			div_6 = (0, _shared.createElement)("div");
			label = (0, _shared.createElement)("label");
			input = (0, _shared.createElement)("input");
			text_8 = (0, _shared.createText)(" Jitter");
			text_9 = (0, _shared.createText)("\n        ");
			label_1 = (0, _shared.createElement)("label");
			input_1 = (0, _shared.createElement)("input");
			text_10 = (0, _shared.createText)(" Adam");
			text_12 = (0, _shared.createText)("\n      ");
			div_7 = (0, _shared.createElement)("div");
			label_2 = (0, _shared.createElement)("label");
			input_2 = (0, _shared.createElement)("input");
			text_13 = (0, _shared.createText)(" Laplacian Pyramid");
			text_14 = (0, _shared.createText)("\n        ");
			label_3 = (0, _shared.createElement)("label");
			input_3 = (0, _shared.createElement)("input");
			text_15 = (0, _shared.createText)(" Fancy Color Param");
			text_17 = (0, _shared.createText)("\n      ");
			br = (0, _shared.createElement)("br");
			text_20 = (0, _shared.createText)("\n  ");
			div_8 = (0, _shared.createElement)("div");

			for (var i = 0; i < each_block_1_iterations.length; i += 1) {
				each_block_1_iterations[i].create();
			}
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			encapsulateStyles(div);
			div.className = "opt-explore";
			(0, _shared.setStyle)(figcaption, "margin-bottom", "10px");
			(0, _shared.setStyle)(div_1, "width", "" + ((state.size + 20) * state.n_images - 20) + "px");
			div_2.className = "icons";
			(0, _shared.setStyle)(div_2, "float", "left");
			(0, _shared.setStyle)(div_2, "padding-right", "40px");
			(0, _shared.setStyle)(div_2, "width", "220px");
			(0, _shared.setStyle)(div_3, "float", "left");
			(0, _shared.setStyle)(div_3, "padding-right", "40px");
			(0, _shared.setStyle)(div_3, "width", "155px");
			(0, _shared.setAttribute)(d_slider, "value", "learning_rate");
			(0, _shared.setAttribute)(d_slider, "type", "range");
			(0, _shared.setAttribute)(d_slider, "min", "0");
			(0, _shared.setAttribute)(d_slider, "max", d_slider_max_value = state.learning_rate_list.length - 1);
			(0, _shared.setStyle)(d_slider, "width", "100px");
			(0, _shared.setStyle)(div_6, "float", "left");
			(0, _shared.setStyle)(div_6, "padding-right", "0px");
			(0, _shared.setStyle)(div_6, "width", "70px");
			input.type = "checkbox";
			(0, _shared.addListener)(input, "change", input_change_handler);
			input_1.type = "checkbox";
			(0, _shared.addListener)(input_1, "change", input_1_change_handler);
			(0, _shared.setStyle)(div_7, "float", "left");
			(0, _shared.setStyle)(div_7, "padding-right", "0px");
			(0, _shared.setStyle)(div_7, "width", "150px");
			input_2.type = "checkbox";
			(0, _shared.addListener)(input_2, "change", input_2_change_handler);
			input_3.type = "checkbox";
			(0, _shared.addListener)(input_3, "change", input_3_change_handler);
			(0, _shared.setStyle)(br, "clear", "left");
			div_8.className = "images";
			(0, _shared.setStyle)(div_8, "width", "100%");
			(0, _shared.setStyle)(div_8, "height", "" + (state.size + 20) + "px");
			(0, _shared.setStyle)(div_8, "position", "relative");
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
			(0, _shared.appendNode)(figcaption, div);
			(0, _shared.appendNode)(div_1, figcaption);
			(0, _shared.appendNode)(div_2, div_1);

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].mount(div_2, null);
			}

			(0, _shared.appendNode)(text_1, div_1);
			(0, _shared.appendNode)(div_3, div_1);
			(0, _shared.appendNode)(div_4, div_3);
			(0, _shared.appendNode)(text_2, div_4);
			(0, _shared.appendNode)(text_3, div_4);
			(0, _shared.appendNode)(text_4, div_4);
			(0, _shared.appendNode)(text_5, div_3);
			(0, _shared.appendNode)(div_5, div_3);
			(0, _shared.appendNode)(d_slider, div_5);
			(0, _shared.appendNode)(text_7, div_1);
			(0, _shared.appendNode)(div_6, div_1);
			(0, _shared.appendNode)(label, div_6);
			(0, _shared.appendNode)(input, label);

			input.checked = state.jitter;

			(0, _shared.appendNode)(text_8, label);
			(0, _shared.appendNode)(text_9, div_6);
			(0, _shared.appendNode)(label_1, div_6);
			(0, _shared.appendNode)(input_1, label_1);

			input_1.checked = state.adam;

			(0, _shared.appendNode)(text_10, label_1);
			(0, _shared.appendNode)(text_12, div_1);
			(0, _shared.appendNode)(div_7, div_1);
			(0, _shared.appendNode)(label_2, div_7);
			(0, _shared.appendNode)(input_2, label_2);

			input_2.checked = state.pyramid;

			(0, _shared.appendNode)(text_13, label_2);
			(0, _shared.appendNode)(text_14, div_7);
			(0, _shared.appendNode)(label_3, div_7);
			(0, _shared.appendNode)(input_3, label_3);

			input_3.checked = state.color;

			(0, _shared.appendNode)(text_15, label_3);
			(0, _shared.appendNode)(text_17, div_1);
			(0, _shared.appendNode)(br, div_1);
			(0, _shared.appendNode)(text_20, div);
			(0, _shared.appendNode)(div_8, div);

			for (var i = 0; i < each_block_1_iterations.length; i += 1) {
				each_block_1_iterations[i].mount(div_8, null);
			}
		},

		update: function update(changed, state) {
			if (changed.size || changed.n_images) {
				(0, _shared.setStyle)(div_1, "width", "" + ((state.size + 20) * state.n_images - 20) + "px");
			}

			var each_block_value = state.icon_ns;

			if (changed.selected || changed.icon_ns || changed.sprite_size) {
				for (var i = 0; i < each_block_value.length; i += 1) {
					if (each_block_iterations[i]) {
						each_block_iterations[i].update(changed, state, each_block_value, each_block_value[i], i);
					} else {
						each_block_iterations[i] = create_each_block(state, each_block_value, each_block_value[i], i, component);
						each_block_iterations[i].create();
						each_block_iterations[i].mount(div_2, null);
					}
				}

				for (; i < each_block_iterations.length; i += 1) {
					each_block_iterations[i].unmount();
					each_block_iterations[i].destroy();
				}
				each_block_iterations.length = each_block_value.length;
			}

			if ((changed.learning_rate_list || changed.learning_rate) && text_3_value !== (text_3_value = state.learning_rate_list[[state.learning_rate]])) {
				text_3.data = text_3_value;
			}

			if (changed.learning_rate_list && d_slider_max_value !== (d_slider_max_value = state.learning_rate_list.length - 1)) {
				(0, _shared.setAttribute)(d_slider, "max", d_slider_max_value);
			}

			input.checked = state.jitter;

			input_1.checked = state.adam;

			input_2.checked = state.pyramid;

			input_3.checked = state.color;

			if (changed.size) {
				(0, _shared.setStyle)(div_8, "height", "" + (state.size + 20) + "px");
			}

			var each_block_value_1 = state.image_ns;

			if (changed.size || changed.image_ns || changed.sprite_size || changed.selected || changed.icon_ns || changed.y || changed.label_func) {
				for (var i = 0; i < each_block_value_1.length; i += 1) {
					if (each_block_1_iterations[i]) {
						each_block_1_iterations[i].update(changed, state, each_block_value_1, each_block_value_1[i], i);
					} else {
						each_block_1_iterations[i] = create_each_block_1(state, each_block_value_1, each_block_value_1[i], i, component);
						each_block_1_iterations[i].create();
						each_block_1_iterations[i].mount(div_8, null);
					}
				}

				for (; i < each_block_1_iterations.length; i += 1) {
					each_block_1_iterations[i].unmount();
					each_block_1_iterations[i].destroy();
				}
				each_block_1_iterations.length = each_block_value_1.length;
			}
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(div);

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].unmount();
			}

			for (var i = 0; i < each_block_1_iterations.length; i += 1) {
				each_block_1_iterations[i].unmount();
			}
		},

		destroy: function destroy() {
			(0, _shared.destroyEach)(each_block_iterations, false, 0);

			(0, _shared.removeListener)(input, "change", input_change_handler);
			(0, _shared.removeListener)(input_1, "change", input_1_change_handler);
			(0, _shared.removeListener)(input_2, "change", input_2_change_handler);
			(0, _shared.removeListener)(input_3, "change", input_3_change_handler);

			(0, _shared.destroyEach)(each_block_1_iterations, false, 0);
		}
	};
}

function create_each_block(state, each_block_value, n, n_index, component) {
	var div, div_class_value, div_1;

	return {
		create: function create() {
			div = (0, _shared.createElement)("div");
			div_1 = (0, _shared.createElement)("div");
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			div.className = div_class_value = "icon " + (state.selected == n ? 'selected' : '');
			(0, _shared.addListener)(div, "click", click_handler);

			div._svelte = {
				component: component,
				each_block_value: each_block_value,
				n_index: n_index
			};

			div_1.className = "opt-explore-sprites";
			(0, _shared.setStyle)(div_1, "background-position", "-" + state.sprite_size * (4 + n * state.icon_ns.length) + "px -" + state.sprite_size * 58 + "px");
			(0, _shared.setStyle)(div_1, "width", "64px");
			(0, _shared.setStyle)(div_1, "height", "64px");
			(0, _shared.setStyle)(div_1, "transform", "scale(calc( 40 / 64))");
			(0, _shared.setStyle)(div_1, "margin", "-12px");
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
			(0, _shared.appendNode)(div_1, div);
		},

		update: function update(changed, state, each_block_value, n, n_index) {
			if ((changed.selected || changed.icon_ns) && div_class_value !== (div_class_value = "icon " + (state.selected == n ? 'selected' : ''))) {
				div.className = div_class_value;
			}

			div._svelte.each_block_value = each_block_value;
			div._svelte.n_index = n_index;

			if (changed.sprite_size || changed.icon_ns) {
				(0, _shared.setStyle)(div_1, "background-position", "-" + state.sprite_size * (4 + n * state.icon_ns.length) + "px -" + state.sprite_size * 58 + "px");
			}
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(div);
		},

		destroy: function destroy() {
			(0, _shared.removeListener)(div, "click", click_handler);
		}
	};
}

function create_each_block_1(state, each_block_value_1, n_1, n_index_1, component) {
	var div,
	    div_1,
	    div_2,
	    text_1,
	    figcaption,
	    raw_value = state.label_func(n_1);

	return {
		create: function create() {
			div = (0, _shared.createElement)("div");
			div_1 = (0, _shared.createElement)("div");
			div_2 = (0, _shared.createElement)("div");
			text_1 = (0, _shared.createText)("\n        ");
			figcaption = (0, _shared.createElement)("figcaption");
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			(0, _shared.setStyle)(div, "left", "" + (state.size + 4) * n_1 + "px");
			(0, _shared.setStyle)(div, "width", "" + state.size + "px");
			(0, _shared.setStyle)(div, "height", "" + (state.size + 20) + "px");
			(0, _shared.setStyle)(div_1, "margin", "" + (state.size - state.sprite_size) / 2 + "px");
			(0, _shared.setStyle)(div_1, "transform", "scale(" + state.size / state.sprite_size + ")");
			div_2.className = "opt-explore-sprites";
			(0, _shared.setStyle)(div_2, "width", "" + state.sprite_size + "px");
			(0, _shared.setStyle)(div_2, "height", "" + state.sprite_size + "px");
			(0, _shared.setStyle)(div_2, "background-position", "-" + state.sprite_size * (n_1 + state.selected * state.icon_ns.length) + "px -" + state.sprite_size * state.y + "px");
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
			(0, _shared.appendNode)(div_1, div);
			(0, _shared.appendNode)(div_2, div_1);
			(0, _shared.appendNode)(text_1, div);
			(0, _shared.appendNode)(figcaption, div);
			figcaption.innerHTML = raw_value;
		},

		update: function update(changed, state, each_block_value_1, n_1, n_index_1) {
			if (changed.size || changed.image_ns) {
				(0, _shared.setStyle)(div, "left", "" + (state.size + 4) * n_1 + "px");
			}

			if (changed.size) {
				(0, _shared.setStyle)(div, "width", "" + state.size + "px");
				(0, _shared.setStyle)(div, "height", "" + (state.size + 20) + "px");
			}

			if (changed.size || changed.sprite_size) {
				(0, _shared.setStyle)(div_1, "margin", "" + (state.size - state.sprite_size) / 2 + "px");
				(0, _shared.setStyle)(div_1, "transform", "scale(" + state.size / state.sprite_size + ")");
			}

			if (changed.sprite_size) {
				(0, _shared.setStyle)(div_2, "width", "" + state.sprite_size + "px");
				(0, _shared.setStyle)(div_2, "height", "" + state.sprite_size + "px");
			}

			if (changed.sprite_size || changed.image_ns || changed.selected || changed.icon_ns || changed.y) {
				(0, _shared.setStyle)(div_2, "background-position", "-" + state.sprite_size * (n_1 + state.selected * state.icon_ns.length) + "px -" + state.sprite_size * state.y + "px");
			}

			if ((changed.label_func || changed.image_ns) && raw_value !== (raw_value = state.label_func(n_1))) {
				figcaption.innerHTML = raw_value;
			}
		},

		unmount: function unmount() {
			figcaption.innerHTML = '';

			(0, _shared.detachNode)(div);
		},

		destroy: _shared.noop
	};
}

function click_handler(event) {
	var component = this._svelte.component;
	var each_block_value = this._svelte.each_block_value,
	    n_index = this._svelte.n_index,
	    n = each_block_value[n_index];
	component.set({ selected: n });
}

function OptExplore2(options) {
	this.options = options;
	this._state = (0, _shared.assign)(template.data(), options.data);
	this._recompute({}, this._state, {}, true);

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root || this;
	this._yield = options._yield;
	this._bind = options._bind;

	if (!document.getElementById("svelte-1275485919-style")) add_css();

	this._fragment = create_main_fragment(this._state, this);

	if (options.target) {
		this._fragment.create();
		this._fragment.mount(options.target, options.anchor || null);
	}
}

(0, _shared.assign)(OptExplore2.prototype, _shared.proto);

OptExplore2.prototype._recompute = function _recompute(changed, state, oldState, isInitial) {
	if (isInitial || changed.jitter || changed.adam || changed.pyramid || changed.color || changed.learning_rate || changed.learning_rate_list) {
		if ((0, _shared.differs)(state.y = template.computed.y(state.jitter, state.adam, state.pyramid, state.color, state.learning_rate, state.learning_rate_list), oldState.y)) changed.y = true;
	}

	if (isInitial || changed.n_images) {
		if ((0, _shared.differs)(state.image_ns = template.computed.image_ns(state.n_images), oldState.image_ns)) changed.image_ns = true;
	}
};

exports.default = OptExplore2;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _svelteExtras = __webpack_require__(2);

var _shared = __webpack_require__(0);

var template = function () {
	function range(n) {
		var ret = [];
		for (var i = 0; i < n; ++i) {
			ret.push(i);
		}return ret;
	}

	function obj_update(a, b) {
		var ret = {};
		for (var k in a) {
			ret[k] = a[k];
		}for (var k in b) {
			ret[k] = b[k];
		}return ret;
	}

	function vars_to_position(dim_vars, vals) {
		var sum = 0;
		var dim_spacing = 1;
		var dim_spacings = [];
		for (var i = dim_vars.length - 1; i >= 0; i--) {
			dim_spacings.push(dim_spacing);
			dim_spacing *= dim_vars[i].values.length;
		}
		dim_spacings.reverse();
		for (var i = 0; i < dim_vars.length; i++) {
			var dim_var = dim_vars[i];
			var val = vals[dim_var.name] || 0;
			sum += val * dim_spacings[i];
		}
		return sum;
	}

	function select_obj_by_name(objs, name) {
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = objs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var obj = _step.value;

				if (obj.name == name) {
					return obj;
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		var names = objs.map(function (o) {
			return o.name;
		});
		console.error("Did not find " + name + " in " + names + "!");
	}

	function keyvalue(k, v) {
		var ret = {};
		ret[k] = v;
		return ret;
	}

	function load_spritemap(name, settings) {
		this.set({ sprite_path: "images/" + name + ".jpg" });

		var all_vars = settings.config.x_vars.concat(settings.config.y_vars);
		var step_var = all_vars.filter(function (v) {
			return v.name == "steps" || v.name == "step";
		})[0];
		var adjusted_config = {
			sprite_size: settings.config.size,
			x_vars: settings.config.x_vars,
			y_vars: settings.config.y_vars,
			configurable: all_vars.filter(function (v) {
				return v.name != "steps" && v.values.length > 0;
			}).map(function (v) {
				return v.name;
			}),
			display: step_var.values.map(function (val, i) {
				return keyvalue(step_var.name, i);
			})
		};
		this.set(adjusted_config);
		this.set(settings);
	}

	function human_readable(key, strings) {
		if (strings.has(key)) {
			return strings.get(key);
		} else {
			return key.split('_').map(function (s) {
				return s.charAt(0).toUpperCase() + s.slice(1);
			}).join(' ');
		}
	}

	return {
		data: function data() {
			return {
				spritemap_name: "",
				sprite_path: "",
				size: 136,
				sprite_size: 1,
				x_vars: [],
				y_vars: [],
				var_values: {},
				display: [{}],
				configurable: [],
				explain_text: "",
				icon_size: 44,
				icon_var_values: {},
				strings: new Map([['default_transforms', 'Transforms'], ['pyramid', 'Decorrelate'], ['tv', 'Total Variation'], ['l1', 'L<sub>1</sub>'], ['random_rotate', 'Rotate'], ['random_scale', 'Scale'], ['learning rate', 'LR']]),
				units: new Map([['jitter', 'px'], ['random_rotate', '°'], ['random_scale', '×']]),
				steps: [1, 32, 128, 256, 2048]
			};
		},

		computed: {

			sprite_background: function sprite_background(sprite_path) {
				return sprite_path == "" ? "#DDD" : "url(" + sprite_path + ")";
			},

			all_vars: function all_vars(x_vars, y_vars) {
				return x_vars.concat(y_vars);
			},

			var_values_safe: function var_values_safe(all_vars, var_values) {
				var defaults = [];
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = all_vars[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var config_var = _step2.value;

						defaults[config_var.name] = config_var.default || 0;
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}

				return obj_update(defaults, var_values);
			},

			icon_var_values_safe: function icon_var_values_safe(all_vars, var_values, icon_var_values) {
				var values = {};
				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;

				try {
					for (var _iterator3 = all_vars[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var config_var = _step3.value;

						var name = config_var.name;
						values[name] = icon_var_values[name] || config_var.default || var_values[name] || 0;
					}
				} catch (err) {
					_didIteratorError3 = true;
					_iteratorError3 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion3 && _iterator3.return) {
							_iterator3.return();
						}
					} finally {
						if (_didIteratorError3) {
							throw _iteratorError3;
						}
					}
				}

				return values;
			},

			config_var_groups: function config_var_groups(all_vars, configurable) {
				var result = configurable.map(function (group) {
					if (!(group instanceof Array)) group = [group];
					return group.map(function (config_var_name) {
						return select_obj_by_name(all_vars, config_var_name);
					});
				});
				return result;
			},

			x_pos_after_override: function x_pos_after_override(x_vars, var_values_safe, sprite_size) {
				return function (var_value_override) {
					return -sprite_size * vars_to_position(x_vars, obj_update(var_values_safe, var_value_override));
				};
			},

			y_pos_after_override: function y_pos_after_override(y_vars, var_values_safe, sprite_size) {
				return function (var_value_override) {
					return -sprite_size * vars_to_position(y_vars, obj_update(var_values_safe, var_value_override));
				};
			},

			icon_x_pos_after_override: function icon_x_pos_after_override(x_vars, icon_var_values_safe, sprite_size) {
				return function (var_value_override) {
					return -sprite_size * vars_to_position(x_vars, obj_update(icon_var_values_safe, var_value_override));
				};
			},

			icon_y_pos_after_override: function icon_y_pos_after_override(y_vars, icon_var_values_safe, sprite_size) {
				return function (var_value_override) {
					return -sprite_size * vars_to_position(y_vars, obj_update(icon_var_values_safe, var_value_override));
				};
			},

			display_offsets: function display_offsets(x_pos_after_override, y_pos_after_override, display) {
				return display.map(function (display_values) {
					return {
						x: x_pos_after_override(display_values),
						y: y_pos_after_override(display_values)
					};
				});
			}

		},
		methods: { setDeep: _svelteExtras.setDeep, load_spritemap: load_spritemap },
		helpers: { range: range, keyvalue: keyvalue, human_readable: human_readable }
	};
}();

function encapsulateStyles(node) {
	(0, _shared.setAttribute)(node, "svelte-1716951829", "");
}

function add_css() {
	var style = (0, _shared.createElement)("style");
	style.id = 'svelte-1716951829-style';
	style.textContent = "[svelte-1716951829].controls,[svelte-1716951829] .controls{display:flex;flex-flow:row;flex-wrap:wrap;font-size:13px;margin-bottom:8px}[svelte-1716951829].icons,[svelte-1716951829] .icons{display:inline-flex;flex-wrap:wrap;flex-direction:row;border-bottom:1px solid #dddddd}[svelte-1716951829].icons .icon,[svelte-1716951829] .icons .icon{cursor:pointer;padding-bottom:5px;margin-bottom:-1px;margin-left:3px;margin-right:3px}[svelte-1716951829].icons .icon:first-of-type,[svelte-1716951829] .icons .icon:first-of-type{margin-left:0px}[svelte-1716951829].icons .icon:last-of-type,[svelte-1716951829] .icons .icon:last-of-type{margin-right:0px}[svelte-1716951829].icons .icon.selected,[svelte-1716951829] .icons .icon.selected{opacity:100%;border-bottom:3px solid #ff6600}[svelte-1716951829].icon div,[svelte-1716951829] .icon div{opacity:0.666;image-rendering:auto}[svelte-1716951829].icon.selected div,[svelte-1716951829] .icon.selected div{opacity:1}[svelte-1716951829].config-group,[svelte-1716951829] .config-group{display:inline-block;margin-right:20px}[svelte-1716951829].config-group:last-of-type,[svelte-1716951829] .config-group:last-of-type{margin-right:0}[svelte-1716951829].config-group .config,[svelte-1716951829] .config-group .config{display:block}[svelte-1716951829].config-binary,[svelte-1716951829] .config-binary{width:auto}[svelte-1716951829].config-range,[svelte-1716951829] .config-range{width:140px;overflow:visible;white-space:nowrap}[svelte-1716951829].config-group .config input[type=\"range\"],[svelte-1716951829] .config-group .config input[type=\"range\"]{width:100%;margin:0px;padding:0px;margin-top:3px}[svelte-1716951829].config-group span.value,[svelte-1716951829] .config-group span.value{display:inline-block;width:35px}[svelte-1716951829].explain,[svelte-1716951829] .explain{display:inline-block;width:200px;vertical-align:top}[svelte-1716951829].images,[svelte-1716951829] .images{}[svelte-1716951829].images .outer,[svelte-1716951829] .images .outer{display:inline-block;padding-right:5px}[svelte-1716951829].images .outer:last-of-type,[svelte-1716951829] .images .outer:last-of-type{padding-right:0}[svelte-1716951829].inner,[svelte-1716951829] .inner{image-rendering:pixelated}";
	(0, _shared.appendNode)(style, document.head);
}

function create_main_fragment(state, component) {
	var div, text, text_2, div_1;

	var each_block_value = state.config_var_groups;

	var each_block_iterations = [];

	for (var i = 0; i < each_block_value.length; i += 1) {
		each_block_iterations[i] = create_each_block(state, each_block_value, each_block_value[i], i, component);
	}

	var if_block = state.explain_text != "" && create_if_block_3(state, component);

	var each_block_value_1 = state.display_offsets;

	var each_block_1_iterations = [];

	for (var i = 0; i < each_block_value_1.length; i += 1) {
		each_block_1_iterations[i] = create_each_block_3(state, each_block_value_1, each_block_value_1[i], i, component);
	}

	return {
		create: function create() {
			div = (0, _shared.createElement)("div");

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].create();
			}

			text = (0, _shared.createText)("\n  ");
			if (if_block) if_block.create();
			text_2 = (0, _shared.createText)("\n\n");
			div_1 = (0, _shared.createElement)("div");

			for (var i = 0; i < each_block_1_iterations.length; i += 1) {
				each_block_1_iterations[i].create();
			}
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			encapsulateStyles(div);
			div.className = "controls";
			encapsulateStyles(div_1);
			div_1.className = "images";
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].mount(div, null);
			}

			(0, _shared.appendNode)(text, div);
			if (if_block) if_block.mount(div, null);
			(0, _shared.insertNode)(text_2, target, anchor);
			(0, _shared.insertNode)(div_1, target, anchor);

			for (var i = 0; i < each_block_1_iterations.length; i += 1) {
				each_block_1_iterations[i].mount(div_1, null);
			}
		},

		update: function update(changed, state) {
			var each_block_value = state.config_var_groups;

			if (changed.config_var_groups || changed.var_values_safe || changed.icon_size || changed.sprite_size || changed.sprite_background || changed.icon_x_pos_after_override || changed.icon_y_pos_after_override || changed.strings || changed.units) {
				for (var i = 0; i < each_block_value.length; i += 1) {
					if (each_block_iterations[i]) {
						each_block_iterations[i].update(changed, state, each_block_value, each_block_value[i], i);
					} else {
						each_block_iterations[i] = create_each_block(state, each_block_value, each_block_value[i], i, component);
						each_block_iterations[i].create();
						each_block_iterations[i].mount(div, text);
					}
				}

				for (; i < each_block_iterations.length; i += 1) {
					each_block_iterations[i].unmount();
					each_block_iterations[i].destroy();
				}
				each_block_iterations.length = each_block_value.length;
			}

			if (state.explain_text != "") {
				if (if_block) {
					if_block.update(changed, state);
				} else {
					if_block = create_if_block_3(state, component);
					if_block.create();
					if_block.mount(div, null);
				}
			} else if (if_block) {
				if_block.unmount();
				if_block.destroy();
				if_block = null;
			}

			var each_block_value_1 = state.display_offsets;

			if (changed.size || changed.sprite_background || changed.display_offsets || changed.sprite_size || changed.steps) {
				for (var i = 0; i < each_block_value_1.length; i += 1) {
					if (each_block_1_iterations[i]) {
						each_block_1_iterations[i].update(changed, state, each_block_value_1, each_block_value_1[i], i);
					} else {
						each_block_1_iterations[i] = create_each_block_3(state, each_block_value_1, each_block_value_1[i], i, component);
						each_block_1_iterations[i].create();
						each_block_1_iterations[i].mount(div_1, null);
					}
				}

				for (; i < each_block_1_iterations.length; i += 1) {
					each_block_1_iterations[i].unmount();
					each_block_1_iterations[i].destroy();
				}
				each_block_1_iterations.length = each_block_value_1.length;
			}
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(div);

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].unmount();
			}

			if (if_block) if_block.unmount();
			(0, _shared.detachNode)(text_2);
			(0, _shared.detachNode)(div_1);

			for (var i = 0; i < each_block_1_iterations.length; i += 1) {
				each_block_1_iterations[i].unmount();
			}
		},

		destroy: function destroy() {
			(0, _shared.destroyEach)(each_block_iterations, false, 0);

			if (if_block) if_block.destroy();

			(0, _shared.destroyEach)(each_block_1_iterations, false, 0);
		}
	};
}

function create_each_block(state, each_block_value, config_var_group, config_var_group_index, component) {
	var div;

	var each_block_value_1 = config_var_group;

	var each_block_iterations = [];

	for (var i = 0; i < each_block_value_1.length; i += 1) {
		each_block_iterations[i] = create_each_block_1(state, each_block_value, config_var_group, config_var_group_index, each_block_value_1, each_block_value_1[i], i, component);
	}

	return {
		create: function create() {
			div = (0, _shared.createElement)("div");

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].create();
			}
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			div.className = "config-group";
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].mount(div, null);
			}
		},

		update: function update(changed, state, each_block_value, config_var_group, config_var_group_index) {
			var each_block_value_1 = config_var_group;

			if (changed.config_var_groups || changed.var_values_safe || changed.icon_size || changed.sprite_size || changed.sprite_background || changed.icon_x_pos_after_override || changed.icon_y_pos_after_override || changed.strings || changed.units) {
				for (var i = 0; i < each_block_value_1.length; i += 1) {
					if (each_block_iterations[i]) {
						each_block_iterations[i].update(changed, state, each_block_value, config_var_group, config_var_group_index, each_block_value_1, each_block_value_1[i], i);
					} else {
						each_block_iterations[i] = create_each_block_1(state, each_block_value, config_var_group, config_var_group_index, each_block_value_1, each_block_value_1[i], i, component);
						each_block_iterations[i].create();
						each_block_iterations[i].mount(div, null);
					}
				}

				for (; i < each_block_iterations.length; i += 1) {
					each_block_iterations[i].unmount();
					each_block_iterations[i].destroy();
				}
				each_block_iterations.length = each_block_value_1.length;
			}
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(div);

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].unmount();
			}
		},

		destroy: function destroy() {
			(0, _shared.destroyEach)(each_block_iterations, false, 0);
		}
	};
}

function create_each_block_1(state, each_block_value, config_var_group, config_var_group_index, each_block_value_1, config_var, config_var_index, component) {
	var div, div_class_value, div_data_config_name_value, text, text_1;

	var if_block = config_var.type == "icon" && create_if_block(state, each_block_value, config_var_group, config_var_group_index, each_block_value_1, config_var, config_var_index, component);

	var if_block_1 = config_var.type == "binary" && create_if_block_1(state, each_block_value, config_var_group, config_var_group_index, each_block_value_1, config_var, config_var_index, component);

	var if_block_2 = config_var.type != "binary" && config_var.type != "icon" && create_if_block_2(state, each_block_value, config_var_group, config_var_group_index, each_block_value_1, config_var, config_var_index, component);

	return {
		create: function create() {
			div = (0, _shared.createElement)("div");
			if (if_block) if_block.create();
			text = (0, _shared.createText)("\n      \n          ");
			if (if_block_1) if_block_1.create();
			text_1 = (0, _shared.createText)("\n          \n          ");
			if (if_block_2) if_block_2.create();
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			div.className = div_class_value = "config config-" + config_var.type;
			(0, _shared.setAttribute)(div, "data-config-name", div_data_config_name_value = config_var.name);
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
			if (if_block) if_block.mount(div, null);
			(0, _shared.appendNode)(text, div);
			if (if_block_1) if_block_1.mount(div, null);
			(0, _shared.appendNode)(text_1, div);
			if (if_block_2) if_block_2.mount(div, null);
		},

		update: function update(changed, state, each_block_value, config_var_group, config_var_group_index, each_block_value_1, config_var, config_var_index) {
			if (changed.config_var_groups && div_class_value !== (div_class_value = "config config-" + config_var.type)) {
				div.className = div_class_value;
			}

			if (changed.config_var_groups && div_data_config_name_value !== (div_data_config_name_value = config_var.name)) {
				(0, _shared.setAttribute)(div, "data-config-name", div_data_config_name_value);
			}

			if (config_var.type == "icon") {
				if (if_block) {
					if_block.update(changed, state, each_block_value, config_var_group, config_var_group_index, each_block_value_1, config_var, config_var_index);
				} else {
					if_block = create_if_block(state, each_block_value, config_var_group, config_var_group_index, each_block_value_1, config_var, config_var_index, component);
					if_block.create();
					if_block.mount(div, text);
				}
			} else if (if_block) {
				if_block.unmount();
				if_block.destroy();
				if_block = null;
			}

			if (config_var.type == "binary") {
				if (if_block_1) {
					if_block_1.update(changed, state, each_block_value, config_var_group, config_var_group_index, each_block_value_1, config_var, config_var_index);
				} else {
					if_block_1 = create_if_block_1(state, each_block_value, config_var_group, config_var_group_index, each_block_value_1, config_var, config_var_index, component);
					if_block_1.create();
					if_block_1.mount(div, text_1);
				}
			} else if (if_block_1) {
				if_block_1.unmount();
				if_block_1.destroy();
				if_block_1 = null;
			}

			if (config_var.type != "binary" && config_var.type != "icon") {
				if (if_block_2) {
					if_block_2.update(changed, state, each_block_value, config_var_group, config_var_group_index, each_block_value_1, config_var, config_var_index);
				} else {
					if_block_2 = create_if_block_2(state, each_block_value, config_var_group, config_var_group_index, each_block_value_1, config_var, config_var_index, component);
					if_block_2.create();
					if_block_2.mount(div, null);
				}
			} else if (if_block_2) {
				if_block_2.unmount();
				if_block_2.destroy();
				if_block_2 = null;
			}
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(div);
			if (if_block) if_block.unmount();
			if (if_block_1) if_block_1.unmount();
			if (if_block_2) if_block_2.unmount();
		},

		destroy: function destroy() {
			if (if_block) if_block.destroy();
			if (if_block_1) if_block_1.destroy();
			if (if_block_2) if_block_2.destroy();
		}
	};
}

function create_each_block_2(state, each_block_value, config_var_group, config_var_group_index, each_block_value_1, config_var, config_var_index, each_block_value_2, n, n_index, component) {
	var div, div_class_value, div_1, div_2;

	return {
		create: function create() {
			div = (0, _shared.createElement)("div");
			div_1 = (0, _shared.createElement)("div");
			div_2 = (0, _shared.createElement)("div");
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			div.className = div_class_value = "icon " + (state.var_values_safe[config_var.name] == n ? 'selected' : '');
			(0, _shared.setStyle)(div, "width", "" + state.icon_size + "px");
			(0, _shared.setStyle)(div, "height", "" + state.icon_size + "px");
			(0, _shared.addListener)(div, "click", click_handler);

			div._svelte = {
				component: component,
				each_block_value_1: each_block_value_1,
				config_var_index: config_var_index,
				each_block_value_2: each_block_value_2,
				n_index: n_index
			};

			div_1.className = "inner";
			(0, _shared.setStyle)(div_1, "margin", "" + (state.icon_size - state.sprite_size) / 2 + "px");
			(0, _shared.setStyle)(div_1, "transform", "scale(" + state.icon_size / state.sprite_size + ")");
			div_2.className = "inner";
			(0, _shared.setStyle)(div_2, "background", state.sprite_background);
			(0, _shared.setStyle)(div_2, "background-position", "" + state.icon_x_pos_after_override(template.helpers.keyvalue(config_var.name, n)) + "px\n                        " + state.icon_y_pos_after_override(template.helpers.keyvalue(config_var.name, n)) + "px");
			(0, _shared.setStyle)(div_2, "width", "" + state.sprite_size + "px");
			(0, _shared.setStyle)(div_2, "height", "" + state.sprite_size + "px");
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
			(0, _shared.appendNode)(div_1, div);
			(0, _shared.appendNode)(div_2, div_1);
		},

		update: function update(changed, state, each_block_value, config_var_group, config_var_group_index, each_block_value_1, config_var, config_var_index, each_block_value_2, n, n_index) {
			if ((changed.var_values_safe || changed.config_var_groups) && div_class_value !== (div_class_value = "icon " + (state.var_values_safe[config_var.name] == n ? 'selected' : ''))) {
				div.className = div_class_value;
			}

			if (changed.icon_size) {
				(0, _shared.setStyle)(div, "width", "" + state.icon_size + "px");
				(0, _shared.setStyle)(div, "height", "" + state.icon_size + "px");
			}

			div._svelte.each_block_value_1 = each_block_value_1;
			div._svelte.config_var_index = config_var_index;
			div._svelte.each_block_value_2 = each_block_value_2;
			div._svelte.n_index = n_index;

			if (changed.icon_size || changed.sprite_size) {
				(0, _shared.setStyle)(div_1, "margin", "" + (state.icon_size - state.sprite_size) / 2 + "px");
				(0, _shared.setStyle)(div_1, "transform", "scale(" + state.icon_size / state.sprite_size + ")");
			}

			if (changed.sprite_background) {
				(0, _shared.setStyle)(div_2, "background", state.sprite_background);
			}

			if (changed.icon_x_pos_after_override || changed.config_var_groups || changed.icon_y_pos_after_override) {
				(0, _shared.setStyle)(div_2, "background-position", "" + state.icon_x_pos_after_override(template.helpers.keyvalue(config_var.name, n)) + "px\n                        " + state.icon_y_pos_after_override(template.helpers.keyvalue(config_var.name, n)) + "px");
			}

			if (changed.sprite_size) {
				(0, _shared.setStyle)(div_2, "width", "" + state.sprite_size + "px");
				(0, _shared.setStyle)(div_2, "height", "" + state.sprite_size + "px");
			}
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(div);
		},

		destroy: function destroy() {
			(0, _shared.removeListener)(div, "click", click_handler);
		}
	};
}

function create_if_block(state, each_block_value, config_var_group, config_var_group_index, each_block_value_1, config_var, config_var_index, component) {
	var div;

	var each_block_value_2 = template.helpers.range(config_var.values.length);

	var each_block_iterations = [];

	for (var i = 0; i < each_block_value_2.length; i += 1) {
		each_block_iterations[i] = create_each_block_2(state, each_block_value, config_var_group, config_var_group_index, each_block_value_1, config_var, config_var_index, each_block_value_2, each_block_value_2[i], i, component);
	}

	return {
		create: function create() {
			div = (0, _shared.createElement)("div");

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].create();
			}
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			div.className = "icons";
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].mount(div, null);
			}
		},

		update: function update(changed, state, each_block_value, config_var_group, config_var_group_index, each_block_value_1, config_var, config_var_index) {
			var each_block_value_2 = template.helpers.range(config_var.values.length);

			if (changed.var_values_safe || changed.config_var_groups || changed.icon_size || changed.sprite_size || changed.sprite_background || changed.icon_x_pos_after_override || changed.icon_y_pos_after_override) {
				for (var i = 0; i < each_block_value_2.length; i += 1) {
					if (each_block_iterations[i]) {
						each_block_iterations[i].update(changed, state, each_block_value, config_var_group, config_var_group_index, each_block_value_1, config_var, config_var_index, each_block_value_2, each_block_value_2[i], i);
					} else {
						each_block_iterations[i] = create_each_block_2(state, each_block_value, config_var_group, config_var_group_index, each_block_value_1, config_var, config_var_index, each_block_value_2, each_block_value_2[i], i, component);
						each_block_iterations[i].create();
						each_block_iterations[i].mount(div, null);
					}
				}

				for (; i < each_block_iterations.length; i += 1) {
					each_block_iterations[i].unmount();
					each_block_iterations[i].destroy();
				}
				each_block_iterations.length = each_block_value_2.length;
			}
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(div);

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].unmount();
			}
		},

		destroy: function destroy() {
			(0, _shared.destroyEach)(each_block_iterations, false, 0);
		}
	};
}

function create_if_block_1(state, each_block_value, config_var_group, config_var_group_index, each_block_value_1, config_var, config_var_index, component) {
	var label,
	    input,
	    input_checked_value,
	    text,
	    raw_value = template.helpers.human_readable(config_var.label, state.strings),
	    raw_before;

	return {
		create: function create() {
			label = (0, _shared.createElement)("label");
			input = (0, _shared.createElement)("input");
			text = (0, _shared.createText)("\n              ");
			raw_before = (0, _shared.createElement)('noscript');
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			input.type = "checkbox";
			input.checked = input_checked_value = state.var_values_safe[config_var.name];
			(0, _shared.addListener)(input, "change", change_handler);

			input._svelte = {
				component: component,
				each_block_value_1: each_block_value_1,
				config_var_index: config_var_index
			};
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(label, target, anchor);
			(0, _shared.appendNode)(input, label);
			(0, _shared.appendNode)(text, label);
			(0, _shared.appendNode)(raw_before, label);
			raw_before.insertAdjacentHTML("afterend", raw_value);
		},

		update: function update(changed, state, each_block_value, config_var_group, config_var_group_index, each_block_value_1, config_var, config_var_index) {
			if ((changed.var_values_safe || changed.config_var_groups) && input_checked_value !== (input_checked_value = state.var_values_safe[config_var.name])) {
				input.checked = input_checked_value;
			}

			input._svelte.each_block_value_1 = each_block_value_1;
			input._svelte.config_var_index = config_var_index;

			if ((changed.config_var_groups || changed.strings) && raw_value !== (raw_value = template.helpers.human_readable(config_var.label, state.strings))) {
				(0, _shared.detachAfter)(raw_before);
				raw_before.insertAdjacentHTML("afterend", raw_value);
			}
		},

		unmount: function unmount() {
			(0, _shared.detachAfter)(raw_before);

			(0, _shared.detachNode)(label);
		},

		destroy: function destroy() {
			(0, _shared.removeListener)(input, "change", change_handler);
		}
	};
}

function create_if_block_2(state, each_block_value, config_var_group, config_var_group_index, each_block_value_1, config_var, config_var_index, component) {
	var label,
	    span,
	    raw_value = template.helpers.human_readable(config_var.label, state.strings),
	    raw_after,
	    text,
	    span_1,
	    text_1,
	    text_2_value = config_var.values[state.var_values_safe[config_var.name]] + (state.units.get(config_var.name) || ''),
	    text_2,
	    text_3,
	    text_6,
	    div,
	    d_slider,
	    d_slider_max_value,
	    d_slider_step_value,
	    d_slider_value_value;

	return {
		create: function create() {
			label = (0, _shared.createElement)("label");
			span = (0, _shared.createElement)("span");
			raw_after = (0, _shared.createElement)('noscript');
			text = (0, _shared.createText)("\n                ");
			span_1 = (0, _shared.createElement)("span");
			text_1 = (0, _shared.createText)("(");
			text_2 = (0, _shared.createText)(text_2_value);
			text_3 = (0, _shared.createText)(")");
			text_6 = (0, _shared.createText)("\n            ");
			div = (0, _shared.createElement)("div");
			d_slider = (0, _shared.createElement)("d-slider");
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			span_1.className = "value";
			(0, _shared.setStyle)(div, "width", "100px");
			(0, _shared.setAttribute)(d_slider, "type", "range");
			(0, _shared.setAttribute)(d_slider, "min", "1");
			(0, _shared.setAttribute)(d_slider, "max", d_slider_max_value = config_var.values.length);
			(0, _shared.setAttribute)(d_slider, "step", d_slider_step_value = 1);
			(0, _shared.setAttribute)(d_slider, "ticks", true);
			(0, _shared.setAttribute)(d_slider, "value", d_slider_value_value = state.var_values_safe[config_var.name] + 1);
			(0, _shared.addListener)(d_slider, "input", input_handler);

			d_slider._svelte = {
				component: component,
				each_block_value_1: each_block_value_1,
				config_var_index: config_var_index
			};
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(label, target, anchor);
			(0, _shared.appendNode)(span, label);
			(0, _shared.appendNode)(raw_after, span);
			raw_after.insertAdjacentHTML("beforebegin", raw_value);
			(0, _shared.appendNode)(text, span);
			(0, _shared.appendNode)(span_1, span);
			(0, _shared.appendNode)(text_1, span_1);
			(0, _shared.appendNode)(text_2, span_1);
			(0, _shared.appendNode)(text_3, span_1);
			(0, _shared.insertNode)(text_6, target, anchor);
			(0, _shared.insertNode)(div, target, anchor);
			(0, _shared.appendNode)(d_slider, div);
		},

		update: function update(changed, state, each_block_value, config_var_group, config_var_group_index, each_block_value_1, config_var, config_var_index) {
			if ((changed.config_var_groups || changed.strings) && raw_value !== (raw_value = template.helpers.human_readable(config_var.label, state.strings))) {
				(0, _shared.detachBefore)(raw_after);
				raw_after.insertAdjacentHTML("beforebegin", raw_value);
			}

			if ((changed.config_var_groups || changed.var_values_safe || changed.units) && text_2_value !== (text_2_value = config_var.values[state.var_values_safe[config_var.name]] + (state.units.get(config_var.name) || ''))) {
				text_2.data = text_2_value;
			}

			if (changed.config_var_groups && d_slider_max_value !== (d_slider_max_value = config_var.values.length)) {
				(0, _shared.setAttribute)(d_slider, "max", d_slider_max_value);
			}

			if ((changed.var_values_safe || changed.config_var_groups) && d_slider_value_value !== (d_slider_value_value = state.var_values_safe[config_var.name] + 1)) {
				(0, _shared.setAttribute)(d_slider, "value", d_slider_value_value);
			}

			d_slider._svelte.each_block_value_1 = each_block_value_1;
			d_slider._svelte.config_var_index = config_var_index;
		},

		unmount: function unmount() {
			(0, _shared.detachBefore)(raw_after);

			(0, _shared.detachNode)(label);
			(0, _shared.detachNode)(text_6);
			(0, _shared.detachNode)(div);
		},

		destroy: function destroy() {
			(0, _shared.removeListener)(d_slider, "input", input_handler);
		}
	};
}

function create_if_block_3(state, component) {
	var div, text;

	return {
		create: function create() {
			div = (0, _shared.createElement)("div");
			text = (0, _shared.createText)(state.explain_text);
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			div.className = "explain";
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
			(0, _shared.appendNode)(text, div);
		},

		update: function update(changed, state) {
			if (changed.explain_text) {
				text.data = state.explain_text;
			}
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(div);
		},

		destroy: _shared.noop
	};
}

function create_each_block_3(state, each_block_value_1, offset, index, component) {
	var div,
	    div_1,
	    text,
	    figcaption,
	    text_1,
	    text_2_value = state.steps[index],
	    text_2;

	return {
		create: function create() {
			div = (0, _shared.createElement)("div");
			div_1 = (0, _shared.createElement)("div");
			text = (0, _shared.createText)("\n      ");
			figcaption = (0, _shared.createElement)("figcaption");
			text_1 = (0, _shared.createText)("Step ");
			text_2 = (0, _shared.createText)(text_2_value);
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			div.className = "outer";
			(0, _shared.setStyle)(div, "width", "" + state.size + "px");
			(0, _shared.setStyle)(div, "height", "" + state.size + "px");
			div_1.className = "inner";
			(0, _shared.setStyle)(div_1, "background-image", state.sprite_background);
			(0, _shared.setStyle)(div_1, "background-position", "" + offset.x + "px " + offset.y + "px");
			(0, _shared.setStyle)(div_1, "width", "" + state.sprite_size + "px");
			(0, _shared.setStyle)(div_1, "height", "" + state.sprite_size + "px");
			(0, _shared.setStyle)(div_1, "margin", "" + (state.size - state.sprite_size) / 2 + "px");
			(0, _shared.setStyle)(div_1, "transform", "scale(" + state.size / state.sprite_size + ")");
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
			(0, _shared.appendNode)(div_1, div);
			(0, _shared.appendNode)(text, div);
			(0, _shared.appendNode)(figcaption, div);
			(0, _shared.appendNode)(text_1, figcaption);
			(0, _shared.appendNode)(text_2, figcaption);
		},

		update: function update(changed, state, each_block_value_1, offset, index) {
			if (changed.size) {
				(0, _shared.setStyle)(div, "width", "" + state.size + "px");
				(0, _shared.setStyle)(div, "height", "" + state.size + "px");
			}

			if (changed.sprite_background) {
				(0, _shared.setStyle)(div_1, "background-image", state.sprite_background);
			}

			if (changed.display_offsets) {
				(0, _shared.setStyle)(div_1, "background-position", "" + offset.x + "px " + offset.y + "px");
			}

			if (changed.sprite_size) {
				(0, _shared.setStyle)(div_1, "width", "" + state.sprite_size + "px");
				(0, _shared.setStyle)(div_1, "height", "" + state.sprite_size + "px");
			}

			if (changed.size || changed.sprite_size) {
				(0, _shared.setStyle)(div_1, "margin", "" + (state.size - state.sprite_size) / 2 + "px");
				(0, _shared.setStyle)(div_1, "transform", "scale(" + state.size / state.sprite_size + ")");
			}

			if (changed.steps && text_2_value !== (text_2_value = state.steps[index])) {
				text_2.data = text_2_value;
			}
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(div);
		},

		destroy: _shared.noop
	};
}

function click_handler(event) {
	var component = this._svelte.component;
	var each_block_value_1 = this._svelte.each_block_value_1,
	    config_var_index = this._svelte.config_var_index,
	    config_var = each_block_value_1[config_var_index];
	var each_block_value_2 = this._svelte.each_block_value_2,
	    n_index = this._svelte.n_index,
	    n = each_block_value_2[n_index];
	component.setDeep('var_values.' + config_var.name, n);
}

function change_handler(event) {
	var component = this._svelte.component;
	var each_block_value_1 = this._svelte.each_block_value_1,
	    config_var_index = this._svelte.config_var_index,
	    config_var = each_block_value_1[config_var_index];
	component.setDeep('var_values.' + config_var.name, +this.checked);
}

function input_handler(event) {
	var component = this._svelte.component;
	var each_block_value_1 = this._svelte.each_block_value_1,
	    config_var_index = this._svelte.config_var_index,
	    config_var = each_block_value_1[config_var_index];
	component.setDeep('var_values.' + config_var.name, this.value - 1);
}

function OptExploreFlex(options) {
	this.options = options;
	this._state = (0, _shared.assign)(template.data(), options.data);
	this._recompute({}, this._state, {}, true);

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root || this;
	this._yield = options._yield;
	this._bind = options._bind;

	if (!document.getElementById("svelte-1716951829-style")) add_css();

	this._fragment = create_main_fragment(this._state, this);

	if (options.target) {
		this._fragment.create();
		this._fragment.mount(options.target, options.anchor || null);
	}
}

(0, _shared.assign)(OptExploreFlex.prototype, template.methods, _shared.proto);

OptExploreFlex.prototype._recompute = function _recompute(changed, state, oldState, isInitial) {
	if (isInitial || changed.sprite_path) {
		if ((0, _shared.differs)(state.sprite_background = template.computed.sprite_background(state.sprite_path), oldState.sprite_background)) changed.sprite_background = true;
	}

	if (isInitial || changed.x_vars || changed.y_vars) {
		if ((0, _shared.differs)(state.all_vars = template.computed.all_vars(state.x_vars, state.y_vars), oldState.all_vars)) changed.all_vars = true;
	}

	if (isInitial || changed.all_vars || changed.var_values) {
		if ((0, _shared.differs)(state.var_values_safe = template.computed.var_values_safe(state.all_vars, state.var_values), oldState.var_values_safe)) changed.var_values_safe = true;
	}

	if (isInitial || changed.all_vars || changed.var_values || changed.icon_var_values) {
		if ((0, _shared.differs)(state.icon_var_values_safe = template.computed.icon_var_values_safe(state.all_vars, state.var_values, state.icon_var_values), oldState.icon_var_values_safe)) changed.icon_var_values_safe = true;
	}

	if (isInitial || changed.all_vars || changed.configurable) {
		if ((0, _shared.differs)(state.config_var_groups = template.computed.config_var_groups(state.all_vars, state.configurable), oldState.config_var_groups)) changed.config_var_groups = true;
	}

	if (isInitial || changed.x_vars || changed.var_values_safe || changed.sprite_size) {
		if ((0, _shared.differs)(state.x_pos_after_override = template.computed.x_pos_after_override(state.x_vars, state.var_values_safe, state.sprite_size), oldState.x_pos_after_override)) changed.x_pos_after_override = true;
	}

	if (isInitial || changed.y_vars || changed.var_values_safe || changed.sprite_size) {
		if ((0, _shared.differs)(state.y_pos_after_override = template.computed.y_pos_after_override(state.y_vars, state.var_values_safe, state.sprite_size), oldState.y_pos_after_override)) changed.y_pos_after_override = true;
	}

	if (isInitial || changed.x_vars || changed.icon_var_values_safe || changed.sprite_size) {
		if ((0, _shared.differs)(state.icon_x_pos_after_override = template.computed.icon_x_pos_after_override(state.x_vars, state.icon_var_values_safe, state.sprite_size), oldState.icon_x_pos_after_override)) changed.icon_x_pos_after_override = true;
	}

	if (isInitial || changed.y_vars || changed.icon_var_values_safe || changed.sprite_size) {
		if ((0, _shared.differs)(state.icon_y_pos_after_override = template.computed.icon_y_pos_after_override(state.y_vars, state.icon_var_values_safe, state.sprite_size), oldState.icon_y_pos_after_override)) changed.icon_y_pos_after_override = true;
	}

	if (isInitial || changed.x_pos_after_override || changed.y_pos_after_override || changed.display) {
		if ((0, _shared.differs)(state.display_offsets = template.computed.display_offsets(state.x_pos_after_override, state.y_pos_after_override, state.display), oldState.display_offsets)) changed.display_offsets = true;
	}
};

exports.default = OptExploreFlex;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _shared = __webpack_require__(0);

var template = function () {
	function range(n) {
		var ret = [];
		for (var i = 0; i < n; ++i) {
			ret.push(i);
		}return ret;
	}
	return {
		data: function data() {
			return {
				size: 70,
				sprite_size: 224,
				margin: 20,
				layers: ["input", "conv2d0", "conv2d1", "conv2d2", "mixed3a", "mixed3b", "mixed4a", "mixed4b", "mixed4c", "mixed4d", "mixed4e", "mixed5a", "mixed5b"]
			};
		},

		computed: {},
		helpers: { range: range }
	};
}();

function encapsulateStyles(node) {
	(0, _shared.setAttribute)(node, "svelte-1825949572", "");
}

function add_css() {
	var style = (0, _shared.createElement)("style");
	style.id = 'svelte-1825949572-style';
	style.textContent = "[svelte-1825949572].layers,[svelte-1825949572] .layers{margin-top:25px;display:flex;flex-flow:row;flex-wrap:wrap;align-items:flex-start;justify-content:center}[svelte-1825949572].outer,[svelte-1825949572] .outer{margin-top:5px;margin-bottom:15px;margin-left:4px;margin-right:4px}[svelte-1825949572].outer:first-of-type,[svelte-1825949572] .outer:first-of-type{margin-left:0}[svelte-1825949572].outer:last-of-type,[svelte-1825949572] .outer:last-of-type{margin-right:0}[svelte-1825949572].grad,[svelte-1825949572] .grad{background:url(\"images/layer_gradients_spritemap_4.jpeg\")}[svelte-1825949572].outer figcaption,[svelte-1825949572] .outer figcaption{margin-top:10px}[svelte-1825949572].highlight::before,[svelte-1825949572] .highlight::before{content:\"←\";position:relative;left:-3px;top:-25px;color:#888}";
	(0, _shared.appendNode)(style, document.head);
}

function create_main_fragment(state, component) {
	var div;

	var each_block_value = template.helpers.range(12);

	var each_block_iterations = [];

	for (var i = 0; i < each_block_value.length; i += 1) {
		each_block_iterations[i] = create_each_block(state, each_block_value, each_block_value[i], i, component);
	}

	return {
		create: function create() {
			div = (0, _shared.createElement)("div");

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].create();
			}
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			encapsulateStyles(div);
			div.className = "layers";
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].mount(div, null);
			}
		},

		update: function update(changed, state) {
			var each_block_value = template.helpers.range(12);

			if (changed.sprite_size || changed.size || changed.layers || changed.margin) {
				for (var i = 0; i < each_block_value.length; i += 1) {
					if (each_block_iterations[i]) {
						each_block_iterations[i].update(changed, state, each_block_value, each_block_value[i], i);
					} else {
						each_block_iterations[i] = create_each_block(state, each_block_value, each_block_value[i], i, component);
						each_block_iterations[i].create();
						each_block_iterations[i].mount(div, null);
					}
				}

				for (; i < each_block_iterations.length; i += 1) {
					each_block_iterations[i].unmount();
					each_block_iterations[i].destroy();
				}
				each_block_iterations.length = each_block_value.length;
			}
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(div);

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].unmount();
			}
		},

		destroy: function destroy() {
			(0, _shared.destroyEach)(each_block_iterations, false, 0);
		}
	};
}

function create_each_block(state, each_block_value, n, n_index, component) {
	var div,
	    div_1,
	    text,
	    figcaption,
	    text_1_value = state.layers[n],
	    text_1,
	    text_3,
	    div_2,
	    div_2_class_value,
	    div_2_data_n_value;

	return {
		create: function create() {
			div = (0, _shared.createElement)("div");
			div_1 = (0, _shared.createElement)("div");
			text = (0, _shared.createText)("\n      ");
			figcaption = (0, _shared.createElement)("figcaption");
			text_1 = (0, _shared.createText)(text_1_value);
			text_3 = (0, _shared.createText)("\n    ");
			div_2 = (0, _shared.createElement)("div");
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			div.className = "outer";
			div_1.className = "grad";
			(0, _shared.setStyle)(div_1, "background-position", "-" + state.sprite_size * (n + 1) + "px -" + state.sprite_size * 0 + "px");
			(0, _shared.setStyle)(div_1, "transform", "scale(" + state.size / state.sprite_size + ")");
			(0, _shared.setStyle)(div_1, "filter", "contrast(200%)");
			(0, _shared.setStyle)(div_1, "margin", "" + (state.size - state.sprite_size) / 2 + "px");
			(0, _shared.setStyle)(div_1, "width", "" + state.sprite_size + "px");
			(0, _shared.setStyle)(div_1, "height", "" + state.sprite_size + "px");
			div_2.className = div_2_class_value = n == 1 || n == 3 || n == 5 || n == 10 ? 'op highlight' : 'op';
			(0, _shared.setStyle)(div_2, "top", "45px");
			(0, _shared.setStyle)(div_2, "width", "" + (state.margin - 12) + "px");
			(0, _shared.setStyle)(div_2, "height", "" + (state.size + 10) + "px");
			(0, _shared.setStyle)(div_2, "background", n == 1 || n == 3 || n == 5 || n == 10 ? '#ff6600' : n == 11 ? 'white' : 'hsl(240, 50%, 90%)');
			(0, _shared.setStyle)(div_2, "border-radius", "4px");
			(0, _shared.setAttribute)(div_2, "data-n", div_2_data_n_value = n);
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
			(0, _shared.appendNode)(div_1, div);
			(0, _shared.appendNode)(text, div);
			(0, _shared.appendNode)(figcaption, div);
			(0, _shared.appendNode)(text_1, figcaption);
			(0, _shared.insertNode)(text_3, target, anchor);
			(0, _shared.insertNode)(div_2, target, anchor);
		},

		update: function update(changed, state, each_block_value, n, n_index) {
			if (changed.sprite_size) {
				(0, _shared.setStyle)(div_1, "background-position", "-" + state.sprite_size * (n + 1) + "px -" + state.sprite_size * 0 + "px");
			}

			if (changed.size || changed.sprite_size) {
				(0, _shared.setStyle)(div_1, "transform", "scale(" + state.size / state.sprite_size + ")");
				(0, _shared.setStyle)(div_1, "margin", "" + (state.size - state.sprite_size) / 2 + "px");
			}

			if (changed.sprite_size) {
				(0, _shared.setStyle)(div_1, "width", "" + state.sprite_size + "px");
				(0, _shared.setStyle)(div_1, "height", "" + state.sprite_size + "px");
			}

			if (changed.layers && text_1_value !== (text_1_value = state.layers[n])) {
				text_1.data = text_1_value;
			}

			if (changed.margin) {
				(0, _shared.setStyle)(div_2, "width", "" + (state.margin - 12) + "px");
			}

			if (changed.size) {
				(0, _shared.setStyle)(div_2, "height", "" + (state.size + 10) + "px");
			}
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(div);
			(0, _shared.detachNode)(text_3);
			(0, _shared.detachNode)(div_2);
		},

		destroy: _shared.noop
	};
}

function GradArtifacts(options) {
	this.options = options;
	this._state = (0, _shared.assign)(template.data(), options.data);

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root || this;
	this._yield = options._yield;
	this._bind = options._bind;

	if (!document.getElementById("svelte-1825949572-style")) add_css();

	this._fragment = create_main_fragment(this._state, this);

	if (options.target) {
		this._fragment.create();
		this._fragment.mount(options.target, options.anchor || null);
	}
}

(0, _shared.assign)(GradArtifacts.prototype, _shared.proto);

exports.default = GradArtifacts;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _svelteExtras = __webpack_require__(2);

var _Sprite = __webpack_require__(1);

var _Sprite2 = _interopRequireDefault(_Sprite);

var _shared = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = function () {
	function pad(num, size) {
		var s = "00000" + num;
		return s.substr(s.length - size);
	}

	function range(n) {
		return Array(n).fill().map(function (_, i) {
			return i;
		});
	}

	function neuron_name(neuron) {
		return 'Layer mixed ' + neuron[0] + ', unit ' + neuron[1];
	}

	return {
		data: function data() {
			return {
				neurons: [["4a", 6], ["4a", 41], ["4a", 143], ["4a", 240], ["4a", 449], ["4a", 492], ["4a", 499], ["4b", 482], ["4d", 479], ["4e", 718], ["4e", 819]],
				selected: 5,
				sprite_class: 'opt-and-examples-sprite',
				sprite_opt_class: 'opt-and-examples-optimized-sprite'
			};
		},

		computed: {
			number_of_neurons: function number_of_neurons(neurons) {
				return neurons.length;
			},
			thumbnail_indices: function thumbnail_indices(number_of_neurons) {
				return range(number_of_neurons);
			}
		},
		methods: {},
		helpers: { pad: pad, neuron_name: neuron_name }
	};
}();

function encapsulateStyles(node) {
	(0, _shared.setAttribute)(node, "svelte-3177516282", "");
}

function add_css() {
	var style = (0, _shared.createElement)("style");
	style.id = 'svelte-3177516282-style';
	style.textContent = "[svelte-3177516282].opt-and-examples-sprite,[svelte-3177516282] .opt-and-examples-sprite{background-image:url(\"images/examples.jpg\")}[svelte-3177516282].opt-and-examples-optimized-sprite,[svelte-3177516282] .opt-and-examples-optimized-sprite{background-image:url(\"images/examples_optimized.png\")}[svelte-3177516282].icons,[svelte-3177516282] .icons{display:inline-flex;flex-wrap:wrap;flex-direction:row;border-bottom:1px solid #dddddd}[svelte-3177516282].icons .icon,[svelte-3177516282] .icons .icon{cursor:pointer;padding-bottom:5px;margin-bottom:-1px;margin-right:4px;margin-top:3px}[svelte-3177516282].icons .icon:first-of-type,[svelte-3177516282] .icons .icon:first-of-type{margin-left:0px}[svelte-3177516282].icons .icon:last-of-type,[svelte-3177516282] .icons .icon:last-of-type{margin-right:0px}[svelte-3177516282].icons .icon.selected,[svelte-3177516282] .icons .icon.selected{border-bottom:3px solid #ff6600}[svelte-3177516282].icon div,[svelte-3177516282] .icon div{opacity:0.666;image-rendering:auto}[svelte-3177516282].icon.selected div,[svelte-3177516282] .icon.selected div{opacity:1}[svelte-3177516282].container,[svelte-3177516282] .container{grid-column:text;margin-top:25px;display:flex;flex-flow:column;flex-direction:column-reverse}[svelte-3177516282].positive,[svelte-3177516282] .positive,[svelte-3177516282].negative,[svelte-3177516282] .negative,[svelte-3177516282].divider,[svelte-3177516282] .divider{display:flex;flex-flow:row}[svelte-3177516282].container figcaption,[svelte-3177516282] .container figcaption{padding-top:5px}[svelte-3177516282].divider,[svelte-3177516282] .divider{display:none;margin-left:12px;margin-right:12px}[svelte-3177516282].positive > div,[svelte-3177516282] .positive > div{justify-content:flex-start}[svelte-3177516282].optimize,[svelte-3177516282] .optimize{}[svelte-3177516282].positive,[svelte-3177516282] .positive{margin-bottom:24px}[svelte-3177516282].optimize figcaption,[svelte-3177516282] .optimize figcaption{margin-left:0;margin-right:0}[svelte-3177516282].optimize,[svelte-3177516282] .optimize{display:flex;flex-flow:column;margin-bottom:12px}[svelte-3177516282].examples,[svelte-3177516282] .examples{display:flex;flex-flow:row}[svelte-3177516282].example-set,[svelte-3177516282] .example-set{display:flex;flex-flow:column;margin-right:12px}[svelte-3177516282].example-set > *,[svelte-3177516282] .example-set > *,[svelte-3177516282].optimize > *,[svelte-3177516282] .optimize > *{width:147px}[svelte-3177516282].example-set > div,[svelte-3177516282] .example-set > div,[svelte-3177516282].optimize > div,[svelte-3177516282] .optimize > div{height:147px}[svelte-3177516282].positive .examples,[svelte-3177516282] .positive .examples{flex-flow:row-reverse}[svelte-3177516282].positive .optimize,[svelte-3177516282] .positive .optimize{margin-right:24px}[svelte-3177516282].negative .optimize,[svelte-3177516282] .negative .optimize{margin-right:24px}@media(min-width: 1280px){[svelte-3177516282].divider,[svelte-3177516282] .divider{display:inherit;border-left:1px solid #ccc;position:relative}[svelte-3177516282].divider::before,[svelte-3177516282] .divider::before{content:\"0\";position:absolute;left:-4px;top:-25px;color:#ccc;font-weight:300;font-size:13px}[svelte-3177516282].example-set,[svelte-3177516282] .example-set{margin-right:0}[svelte-3177516282].example-set:first-child,[svelte-3177516282] .example-set:first-child{margin-right:12px}[svelte-3177516282].negative,[svelte-3177516282] .negative{margin-bottom:0}[svelte-3177516282].negative .optimize,[svelte-3177516282] .negative .optimize{flex-flow:column;justify-content:flex-start}[svelte-3177516282].container,[svelte-3177516282] .container{grid-column:page;flex-flow:row}[svelte-3177516282].positive,[svelte-3177516282] .positive{flex-flow:row-reverse}[svelte-3177516282].positive .examples,[svelte-3177516282] .positive .examples{flex-flow:row}[svelte-3177516282].negative,[svelte-3177516282] .negative,[svelte-3177516282].divider,[svelte-3177516282] .divider{display:flex;flex-flow:row}[svelte-3177516282].optimize,[svelte-3177516282] .optimize{margin-bottom:24px}[svelte-3177516282].negative > div,[svelte-3177516282] .negative > div{justify-content:flex-end}[svelte-3177516282].positive .optimize,[svelte-3177516282] .positive .optimize{margin-left:36px}[svelte-3177516282].negative .optimize,[svelte-3177516282] .negative .optimize{margin-right:36px}}";
	(0, _shared.appendNode)(style, document.head);
}

function create_main_fragment(state, component) {
	var div,
	    div_1,
	    text_2,
	    div_2,
	    div_3,
	    div_4,
	    text_3,
	    figcaption,
	    strong,
	    text_4,
	    text_5,
	    text_7,
	    div_5,
	    div_6,
	    text_8,
	    figcaption_1,
	    strong_1,
	    text_9,
	    text_10,
	    text_12,
	    div_7,
	    text_13,
	    figcaption_2,
	    text_14,
	    text_18,
	    div_8,
	    text_19,
	    div_9,
	    div_10,
	    text_20,
	    figcaption_3,
	    strong_2,
	    text_21,
	    text_22,
	    text_24,
	    div_11,
	    div_12,
	    text_25,
	    figcaption_4,
	    text_26,
	    text_28,
	    div_13,
	    text_29,
	    figcaption_5,
	    strong_3,
	    text_30,
	    text_31,
	    text_36,
	    figcaption_6,
	    strong_4,
	    text_37_value = template.helpers.neuron_name(state.neurons[state.selected]),
	    text_37;

	var each_block_value = state.thumbnail_indices;

	var each_block_iterations = [];

	for (var i_1 = 0; i_1 < each_block_value.length; i_1 += 1) {
		each_block_iterations[i_1] = create_each_block(state, each_block_value, each_block_value[i_1], i_1, component);
	}

	var sprite = new _Sprite2.default({
		_root: component._root,
		data: {
			src_class: state.sprite_opt_class,
			size: 147,
			sprite_size: 147,
			y: state.selected,
			x: 1,
			sprite_scale: 1,
			pixelated: false
		}
	});

	var sprite_1 = new _Sprite2.default({
		_root: component._root,
		data: {
			src_class: state.sprite_class,
			size: 147,
			sprite_size: 294,
			y: state.selected,
			x: 0,
			sprite_scale: 1
		}
	});

	var sprite_2 = new _Sprite2.default({
		_root: component._root,
		data: {
			src_class: state.sprite_class,
			size: 147,
			sprite_size: 294,
			y: state.selected,
			x: 1,
			sprite_scale: 1
		}
	});

	var sprite_3 = new _Sprite2.default({
		_root: component._root,
		data: {
			src_class: state.sprite_opt_class,
			size: 147,
			sprite_size: 147,
			y: state.selected,
			x: 0,
			sprite_scale: 1
		}
	});

	var sprite_4 = new _Sprite2.default({
		_root: component._root,
		data: {
			src_class: state.sprite_class,
			size: 147,
			sprite_size: 294,
			y: state.selected,
			x: 3,
			sprite_scale: 1
		}
	});

	var sprite_5 = new _Sprite2.default({
		_root: component._root,
		data: {
			src_class: state.sprite_class,
			size: 147,
			sprite_size: 294,
			y: state.selected,
			x: 4,
			sprite_scale: 1
		}
	});

	return {
		create: function create() {
			div = (0, _shared.createElement)("div");
			div_1 = (0, _shared.createElement)("div");

			for (var i_1 = 0; i_1 < each_block_iterations.length; i_1 += 1) {
				each_block_iterations[i_1].create();
			}

			text_2 = (0, _shared.createText)("\n\n");
			div_2 = (0, _shared.createElement)("div");
			div_3 = (0, _shared.createElement)("div");
			div_4 = (0, _shared.createElement)("div");
			sprite._fragment.create();
			text_3 = (0, _shared.createText)("\n      ");
			figcaption = (0, _shared.createElement)("figcaption");
			strong = (0, _shared.createElement)("strong");
			text_4 = (0, _shared.createText)("Negative");
			text_5 = (0, _shared.createText)(" optimized");
			text_7 = (0, _shared.createText)("\n    ");
			div_5 = (0, _shared.createElement)("div");
			div_6 = (0, _shared.createElement)("div");
			sprite_1._fragment.create();
			text_8 = (0, _shared.createText)("\n        ");
			figcaption_1 = (0, _shared.createElement)("figcaption");
			strong_1 = (0, _shared.createElement)("strong");
			text_9 = (0, _shared.createText)("Minimum");
			text_10 = (0, _shared.createText)(" activation examples");
			text_12 = (0, _shared.createText)("\n      ");
			div_7 = (0, _shared.createElement)("div");
			sprite_2._fragment.create();
			text_13 = (0, _shared.createText)("\n        ");
			figcaption_2 = (0, _shared.createElement)("figcaption");
			text_14 = (0, _shared.createText)("Slightly negative activation examples");
			text_18 = (0, _shared.createText)("\n\n  ");
			div_8 = (0, _shared.createElement)("div");
			text_19 = (0, _shared.createText)("\n\n  ");
			div_9 = (0, _shared.createElement)("div");
			div_10 = (0, _shared.createElement)("div");
			sprite_3._fragment.create();
			text_20 = (0, _shared.createText)("\n      ");
			figcaption_3 = (0, _shared.createElement)("figcaption");
			strong_2 = (0, _shared.createElement)("strong");
			text_21 = (0, _shared.createText)("Positive");
			text_22 = (0, _shared.createText)(" optimized");
			text_24 = (0, _shared.createText)("\n    ");
			div_11 = (0, _shared.createElement)("div");
			div_12 = (0, _shared.createElement)("div");
			sprite_4._fragment.create();
			text_25 = (0, _shared.createText)("\n        ");
			figcaption_4 = (0, _shared.createElement)("figcaption");
			text_26 = (0, _shared.createText)("Slightly positive activation examples");
			text_28 = (0, _shared.createText)("\n      ");
			div_13 = (0, _shared.createElement)("div");
			sprite_5._fragment.create();
			text_29 = (0, _shared.createText)("\n        ");
			figcaption_5 = (0, _shared.createElement)("figcaption");
			strong_3 = (0, _shared.createElement)("strong");
			text_30 = (0, _shared.createText)("Maximum");
			text_31 = (0, _shared.createText)(" activation examples");
			text_36 = (0, _shared.createText)("\n\n");
			figcaption_6 = (0, _shared.createElement)("figcaption");
			strong_4 = (0, _shared.createElement)("strong");
			text_37 = (0, _shared.createText)(text_37_value);
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			encapsulateStyles(div);
			(0, _shared.setStyle)(div, "grid-column", "text");
			div_1.className = "icons";
			encapsulateStyles(div_2);
			div_2.className = "container";
			div_3.className = "negative";
			div_4.className = "optimize";
			figcaption.className = "caption";
			div_5.className = "examples";
			div_6.className = "example-set";
			figcaption_1.className = "caption";
			div_7.className = "example-set";
			figcaption_2.className = "caption";
			div_8.className = "divider";
			div_9.className = "positive";
			div_10.className = "optimize";
			figcaption_3.className = "caption";
			div_11.className = "examples";
			div_12.className = "example-set";
			figcaption_4.className = "caption";
			div_13.className = "example-set";
			figcaption_5.className = "caption";
			encapsulateStyles(figcaption_6);
			(0, _shared.setStyle)(figcaption_6, "grid-column", "text");
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
			(0, _shared.appendNode)(div_1, div);

			for (var i_1 = 0; i_1 < each_block_iterations.length; i_1 += 1) {
				each_block_iterations[i_1].mount(div_1, null);
			}

			(0, _shared.insertNode)(text_2, target, anchor);
			(0, _shared.insertNode)(div_2, target, anchor);
			(0, _shared.appendNode)(div_3, div_2);
			(0, _shared.appendNode)(div_4, div_3);
			sprite._mount(div_4, null);
			(0, _shared.appendNode)(text_3, div_4);
			(0, _shared.appendNode)(figcaption, div_4);
			(0, _shared.appendNode)(strong, figcaption);
			(0, _shared.appendNode)(text_4, strong);
			(0, _shared.appendNode)(text_5, figcaption);
			(0, _shared.appendNode)(text_7, div_3);
			(0, _shared.appendNode)(div_5, div_3);
			(0, _shared.appendNode)(div_6, div_5);
			sprite_1._mount(div_6, null);
			(0, _shared.appendNode)(text_8, div_6);
			(0, _shared.appendNode)(figcaption_1, div_6);
			(0, _shared.appendNode)(strong_1, figcaption_1);
			(0, _shared.appendNode)(text_9, strong_1);
			(0, _shared.appendNode)(text_10, figcaption_1);
			(0, _shared.appendNode)(text_12, div_5);
			(0, _shared.appendNode)(div_7, div_5);
			sprite_2._mount(div_7, null);
			(0, _shared.appendNode)(text_13, div_7);
			(0, _shared.appendNode)(figcaption_2, div_7);
			(0, _shared.appendNode)(text_14, figcaption_2);
			(0, _shared.appendNode)(text_18, div_2);
			(0, _shared.appendNode)(div_8, div_2);
			(0, _shared.appendNode)(text_19, div_2);
			(0, _shared.appendNode)(div_9, div_2);
			(0, _shared.appendNode)(div_10, div_9);
			sprite_3._mount(div_10, null);
			(0, _shared.appendNode)(text_20, div_10);
			(0, _shared.appendNode)(figcaption_3, div_10);
			(0, _shared.appendNode)(strong_2, figcaption_3);
			(0, _shared.appendNode)(text_21, strong_2);
			(0, _shared.appendNode)(text_22, figcaption_3);
			(0, _shared.appendNode)(text_24, div_9);
			(0, _shared.appendNode)(div_11, div_9);
			(0, _shared.appendNode)(div_12, div_11);
			sprite_4._mount(div_12, null);
			(0, _shared.appendNode)(text_25, div_12);
			(0, _shared.appendNode)(figcaption_4, div_12);
			(0, _shared.appendNode)(text_26, figcaption_4);
			(0, _shared.appendNode)(text_28, div_11);
			(0, _shared.appendNode)(div_13, div_11);
			sprite_5._mount(div_13, null);
			(0, _shared.appendNode)(text_29, div_13);
			(0, _shared.appendNode)(figcaption_5, div_13);
			(0, _shared.appendNode)(strong_3, figcaption_5);
			(0, _shared.appendNode)(text_30, strong_3);
			(0, _shared.appendNode)(text_31, figcaption_5);
			(0, _shared.insertNode)(text_36, target, anchor);
			(0, _shared.insertNode)(figcaption_6, target, anchor);
			(0, _shared.appendNode)(strong_4, figcaption_6);
			(0, _shared.appendNode)(text_37, strong_4);
		},

		update: function update(changed, state) {
			var each_block_value = state.thumbnail_indices;

			if (changed.selected || changed.thumbnail_indices || changed.sprite_opt_class) {
				for (var i_1 = 0; i_1 < each_block_value.length; i_1 += 1) {
					if (each_block_iterations[i_1]) {
						each_block_iterations[i_1].update(changed, state, each_block_value, each_block_value[i_1], i_1);
					} else {
						each_block_iterations[i_1] = create_each_block(state, each_block_value, each_block_value[i_1], i_1, component);
						each_block_iterations[i_1].create();
						each_block_iterations[i_1].mount(div_1, null);
					}
				}

				for (; i_1 < each_block_iterations.length; i_1 += 1) {
					each_block_iterations[i_1].unmount();
					each_block_iterations[i_1].destroy();
				}
				each_block_iterations.length = each_block_value.length;
			}

			var sprite_changes = {};
			if (changed.sprite_opt_class) sprite_changes.src_class = state.sprite_opt_class;
			if (changed.selected) sprite_changes.y = state.selected;
			sprite_changes.pixelated = false;
			sprite._set(sprite_changes);

			var sprite_1_changes = {};
			if (changed.sprite_class) sprite_1_changes.src_class = state.sprite_class;
			if (changed.selected) sprite_1_changes.y = state.selected;
			sprite_1._set(sprite_1_changes);

			var sprite_2_changes = {};
			if (changed.sprite_class) sprite_2_changes.src_class = state.sprite_class;
			if (changed.selected) sprite_2_changes.y = state.selected;
			sprite_2._set(sprite_2_changes);

			var sprite_3_changes = {};
			if (changed.sprite_opt_class) sprite_3_changes.src_class = state.sprite_opt_class;
			if (changed.selected) sprite_3_changes.y = state.selected;
			sprite_3._set(sprite_3_changes);

			var sprite_4_changes = {};
			if (changed.sprite_class) sprite_4_changes.src_class = state.sprite_class;
			if (changed.selected) sprite_4_changes.y = state.selected;
			sprite_4._set(sprite_4_changes);

			var sprite_5_changes = {};
			if (changed.sprite_class) sprite_5_changes.src_class = state.sprite_class;
			sprite_5_changes.size = 147;
			sprite_5_changes.sprite_size = 294;
			if (changed.selected) sprite_5_changes.y = state.selected;
			sprite_5._set(sprite_5_changes);

			if ((changed.neurons || changed.selected) && text_37_value !== (text_37_value = template.helpers.neuron_name(state.neurons[state.selected]))) {
				text_37.data = text_37_value;
			}
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(div);

			for (var i_1 = 0; i_1 < each_block_iterations.length; i_1 += 1) {
				each_block_iterations[i_1].unmount();
			}

			(0, _shared.detachNode)(text_2);
			(0, _shared.detachNode)(div_2);
			(0, _shared.detachNode)(text_36);
			(0, _shared.detachNode)(figcaption_6);
		},

		destroy: function destroy() {
			(0, _shared.destroyEach)(each_block_iterations, false, 0);

			sprite.destroy(false);
			sprite_1.destroy(false);
			sprite_2.destroy(false);
			sprite_3.destroy(false);
			sprite_4.destroy(false);
			sprite_5.destroy(false);
		}
	};
}

function create_each_block(state, each_block_value, i, i_index, component) {
	var div, div_class_value;

	var sprite = new _Sprite2.default({
		_root: component._root,
		data: {
			src_class: state.sprite_opt_class,
			size: 44,
			sprite_size: 147,
			y: i,
			x: 0,
			sprite_scale: 0.5
		}
	});

	return {
		create: function create() {
			div = (0, _shared.createElement)("div");
			sprite._fragment.create();
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			div.className = div_class_value = "icon " + (state.selected == i ? 'selected' : '');
			(0, _shared.addListener)(div, "click", click_handler);

			div._svelte = {
				component: component,
				each_block_value: each_block_value,
				i_index: i_index
			};
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
			sprite._mount(div, null);
		},

		update: function update(changed, state, each_block_value, i, i_index) {
			if ((changed.selected || changed.thumbnail_indices) && div_class_value !== (div_class_value = "icon " + (state.selected == i ? 'selected' : ''))) {
				div.className = div_class_value;
			}

			div._svelte.each_block_value = each_block_value;
			div._svelte.i_index = i_index;

			var sprite_changes = {};
			if (changed.sprite_opt_class) sprite_changes.src_class = state.sprite_opt_class;
			if (changed.thumbnail_indices) sprite_changes.y = i;
			sprite._set(sprite_changes);
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(div);
		},

		destroy: function destroy() {
			(0, _shared.removeListener)(div, "click", click_handler);
			sprite.destroy(false);
		}
	};
}

function click_handler(event) {
	var component = this._svelte.component;
	var each_block_value = this._svelte.each_block_value,
	    i_index = this._svelte.i_index,
	    i = each_block_value[i_index];
	component.set({ selected: i });
}

function OptAndExamples(options) {
	this.options = options;
	this._state = (0, _shared.assign)(template.data(), options.data);
	this._recompute({}, this._state, {}, true);

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root || this;
	this._yield = options._yield;
	this._bind = options._bind;

	if (!document.getElementById("svelte-3177516282-style")) add_css();

	if (!options._root) {
		this._oncreate = [];
		this._beforecreate = [];
		this._aftercreate = [];
	}

	this._fragment = create_main_fragment(this._state, this);

	if (options.target) {
		this._fragment.create();
		this._fragment.mount(options.target, options.anchor || null);

		this._lock = true;
		(0, _shared.callAll)(this._beforecreate);
		(0, _shared.callAll)(this._oncreate);
		(0, _shared.callAll)(this._aftercreate);
		this._lock = false;
	}
}

(0, _shared.assign)(OptAndExamples.prototype, template.methods, _shared.proto);

OptAndExamples.prototype._recompute = function _recompute(changed, state, oldState, isInitial) {
	if (isInitial || changed.neurons) {
		if ((0, _shared.differs)(state.number_of_neurons = template.computed.number_of_neurons(state.neurons), oldState.number_of_neurons)) changed.number_of_neurons = true;
	}

	if (isInitial || changed.number_of_neurons) {
		if ((0, _shared.differs)(state.thumbnail_indices = template.computed.thumbnail_indices(state.number_of_neurons), oldState.thumbnail_indices)) changed.thumbnail_indices = true;
	}
};

exports.default = OptAndExamples;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Sprite = __webpack_require__(1);

var _Sprite2 = _interopRequireDefault(_Sprite);

var _shared = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = function () {
	// const join_svg = require('svg-inline-loader?classPrefix!../join.svg');

	function range(n) {
		return Array(n).fill().map(function (_, i) {
			return i;
		});
	}

	return {
		data: function data() {
			return {
				sprite_class: 'linear_combinations_sprite',
				x: 4,
				y: 1
				// svg: join_svg
			};
		},

		computed: {},
		methods: {},
		helpers: { range: range }
	};
}();

function encapsulateStyles(node) {
	(0, _shared.setAttribute)(node, "svelte-127339819", "");
}

function add_css() {
	var style = (0, _shared.createElement)("style");
	style.id = 'svelte-127339819-style';
	style.textContent = "[svelte-127339819].frow,[svelte-127339819] .frow{display:flex;flex-flow:row;flex-wrap:wrap;justify-content:flex-start}[svelte-127339819].fcolumn,[svelte-127339819] .fcolumn{display:flex;flex-flow:column;margin-right:10px;margin-bottom:10px;z-index:2}[svelte-127339819].icons,[svelte-127339819] .icons{display:flex;flex-wrap:wrap;flex-direction:row;margin-bottom:7px;max-width:100px}[svelte-127339819].icons .icon,[svelte-127339819] .icons .icon{cursor:pointer;padding-bottom:6px;margin-bottom:11px;margin-right:6px;border-bottom:1px solid #dddddd}[svelte-127339819].icons .icon.selected,[svelte-127339819] .icons .icon.selected{opacity:100%;padding-bottom:3px;border-bottom:3px solid #ff6600}[svelte-127339819].icon div,[svelte-127339819] .icon div{opacity:0.666;image-rendering:auto}[svelte-127339819].icon.selected div,[svelte-127339819] .icon.selected div{opacity:1}[svelte-127339819].linear_combinations_sprite,[svelte-127339819] .linear_combinations_sprite{background-image:url('images/linear_combinations.jpg')\n  }[svelte-127339819]#caption,[svelte-127339819] #caption{max-width:200px}[svelte-127339819]#icons-first,[svelte-127339819] #icons-first{order:1\n  }[svelte-127339819]#sprite-first,[svelte-127339819] #sprite-first{order:2\n  }[svelte-127339819]#sprite-second,[svelte-127339819] #sprite-second{order:5\n  }[svelte-127339819]#icons-second,[svelte-127339819] #icons-second{order:4\n  }[svelte-127339819].result,[svelte-127339819] .result{z-index:3}[svelte-127339819].operator,[svelte-127339819] .operator{display:none}@media(min-width: 1024px){[svelte-127339819].fcolumn,[svelte-127339819] .fcolumn{margin-left:10px}[svelte-127339819].fcolumn:first-of-type,[svelte-127339819] .fcolumn:first-of-type{margin-left:0}[svelte-127339819].fcolumn:last-of-type,[svelte-127339819] .fcolumn:last-of-type{margin-right:0}[svelte-127339819]#icons-first,[svelte-127339819] #icons-first{order:1\n    }[svelte-127339819]#sprite-first,[svelte-127339819] #sprite-first{order:2;margin-right:0}[svelte-127339819]#sprite-second,[svelte-127339819] #sprite-second{order:4;margin-left:0}[svelte-127339819]#icons-second,[svelte-127339819] #icons-second{order:5\n    }[svelte-127339819].operator,[svelte-127339819] .operator{display:block;background-image:url(images/join_arrow.svg);background-position:center 70%;background-repeat:no-repeat;background-size:280%;min-width:60px;height:180px;overflow:visible;order:3;opacity:0.33}[svelte-127339819].result.c,[svelte-127339819] .result.c{top:-64px;margin-left:240px;position:relative}[svelte-127339819].result.c > div,[svelte-127339819] .result.c > div{border:2px solid white;box-shadow:0px 5px 20px hsla(0,0%,0%,0.3)}[svelte-127339819]#sprite-second > span,[svelte-127339819] #sprite-second > span{text-align:right}[svelte-127339819].linear-combinations,[svelte-127339819] .linear-combinations{margin-bottom:-84px}}";
	(0, _shared.appendNode)(style, document.head);
}

function create_main_fragment(state, component) {
	var div, div_1, div_2, div_3, text_2, div_4, text_3, span, text_4, text_6, div_5, text_7, div_6, text_8, span_1, text_9, text_11, div_7, div_8, text_15, div_9, div_10, text_16, span_2, text_17;

	var each_block_value = template.helpers.range(6);

	var each_block_iterations = [];

	for (var i_2 = 0; i_2 < each_block_value.length; i_2 += 1) {
		each_block_iterations[i_2] = create_each_block(state, each_block_value, each_block_value[i_2], i_2, component);
	}

	var sprite = new _Sprite2.default({
		_root: component._root,
		data: {
			src_class: state.sprite_class,
			size: 180,
			sprite_size: 180,
			y: 0,
			x: state.x,
			sprite_scale: 1
		}
	});

	var sprite_1 = new _Sprite2.default({
		_root: component._root,
		data: {
			src_class: state.sprite_class,
			size: 180,
			sprite_size: 180,
			y: state.y,
			x: 0,
			sprite_scale: 1
		}
	});

	var each_block_value_1 = template.helpers.range(6);

	var each_block_1_iterations = [];

	for (var i_2 = 0; i_2 < each_block_value_1.length; i_2 += 1) {
		each_block_1_iterations[i_2] = create_each_block_1(state, each_block_value_1, each_block_value_1[i_2], i_2, component);
	}

	var sprite_2 = new _Sprite2.default({
		_root: component._root,
		data: {
			src_class: state.sprite_class,
			size: 180,
			sprite_size: 180,
			y: state.y,
			x: state.x,
			sprite_scale: 1
		}
	});

	return {
		create: function create() {
			div = (0, _shared.createElement)("div");
			div_1 = (0, _shared.createElement)("div");
			div_2 = (0, _shared.createElement)("div");
			div_3 = (0, _shared.createElement)("div");

			for (var i_2 = 0; i_2 < each_block_iterations.length; i_2 += 1) {
				each_block_iterations[i_2].create();
			}

			text_2 = (0, _shared.createText)("\n\n    ");
			div_4 = (0, _shared.createElement)("div");
			sprite._fragment.create();
			text_3 = (0, _shared.createText)("\n      ");
			span = (0, _shared.createElement)("span");
			text_4 = (0, _shared.createText)("Neuron 1");
			text_6 = (0, _shared.createText)("\n\n    ");
			div_5 = (0, _shared.createElement)("div");
			text_7 = (0, _shared.createText)("\n\n    ");
			div_6 = (0, _shared.createElement)("div");
			sprite_1._fragment.create();
			text_8 = (0, _shared.createText)("\n      ");
			span_1 = (0, _shared.createElement)("span");
			text_9 = (0, _shared.createText)("Neuron 2");
			text_11 = (0, _shared.createText)("\n\n    ");
			div_7 = (0, _shared.createElement)("div");
			div_8 = (0, _shared.createElement)("div");

			for (var i_2 = 0; i_2 < each_block_1_iterations.length; i_2 += 1) {
				each_block_1_iterations[i_2].create();
			}

			text_15 = (0, _shared.createText)("\n\n  ");
			div_9 = (0, _shared.createElement)("div");
			div_10 = (0, _shared.createElement)("div");
			sprite_2._fragment.create();
			text_16 = (0, _shared.createText)("\n      ");
			span_2 = (0, _shared.createElement)("span");
			text_17 = (0, _shared.createText)("Jointly optimized");
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			encapsulateStyles(div);
			div.className = "linear-combinations";
			div_1.className = "frow";
			div_2.id = "icons-first";
			div_2.className = "fcolumn";
			div_3.className = "icons";
			div_4.id = "sprite-first";
			div_4.className = "fcolumn";
			span.className = "figcaption";
			div_5.className = "operator";
			div_6.id = "sprite-second";
			div_6.className = "fcolumn";
			span_1.className = "figcaption";
			div_7.id = "icons-second";
			div_7.className = "fcolumn";
			div_8.className = "icons";
			div_9.className = "frow";
			div_10.className = "result c fcolumn";
			span_2.className = "figcaption";
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
			(0, _shared.appendNode)(div_1, div);
			(0, _shared.appendNode)(div_2, div_1);
			(0, _shared.appendNode)(div_3, div_2);

			for (var i_2 = 0; i_2 < each_block_iterations.length; i_2 += 1) {
				each_block_iterations[i_2].mount(div_3, null);
			}

			(0, _shared.appendNode)(text_2, div_1);
			(0, _shared.appendNode)(div_4, div_1);
			sprite._mount(div_4, null);
			(0, _shared.appendNode)(text_3, div_4);
			(0, _shared.appendNode)(span, div_4);
			(0, _shared.appendNode)(text_4, span);
			(0, _shared.appendNode)(text_6, div_1);
			(0, _shared.appendNode)(div_5, div_1);
			(0, _shared.appendNode)(text_7, div_1);
			(0, _shared.appendNode)(div_6, div_1);
			sprite_1._mount(div_6, null);
			(0, _shared.appendNode)(text_8, div_6);
			(0, _shared.appendNode)(span_1, div_6);
			(0, _shared.appendNode)(text_9, span_1);
			(0, _shared.appendNode)(text_11, div_1);
			(0, _shared.appendNode)(div_7, div_1);
			(0, _shared.appendNode)(div_8, div_7);

			for (var i_2 = 0; i_2 < each_block_1_iterations.length; i_2 += 1) {
				each_block_1_iterations[i_2].mount(div_8, null);
			}

			(0, _shared.appendNode)(text_15, div);
			(0, _shared.appendNode)(div_9, div);
			(0, _shared.appendNode)(div_10, div_9);
			sprite_2._mount(div_10, null);
			(0, _shared.appendNode)(text_16, div_10);
			(0, _shared.appendNode)(span_2, div_10);
			(0, _shared.appendNode)(text_17, span_2);
		},

		update: function update(changed, state) {
			var each_block_value = template.helpers.range(6);

			if (changed.x || changed.sprite_class) {
				for (var i_2 = 0; i_2 < each_block_value.length; i_2 += 1) {
					if (each_block_iterations[i_2]) {
						each_block_iterations[i_2].update(changed, state, each_block_value, each_block_value[i_2], i_2);
					} else {
						each_block_iterations[i_2] = create_each_block(state, each_block_value, each_block_value[i_2], i_2, component);
						each_block_iterations[i_2].create();
						each_block_iterations[i_2].mount(div_3, null);
					}
				}

				for (; i_2 < each_block_iterations.length; i_2 += 1) {
					each_block_iterations[i_2].unmount();
					each_block_iterations[i_2].destroy();
				}
				each_block_iterations.length = each_block_value.length;
			}

			var sprite_changes = {};
			if (changed.sprite_class) sprite_changes.src_class = state.sprite_class;
			if (changed.x) sprite_changes.x = state.x;
			sprite._set(sprite_changes);

			var sprite_1_changes = {};
			if (changed.sprite_class) sprite_1_changes.src_class = state.sprite_class;
			if (changed.y) sprite_1_changes.y = state.y;
			sprite_1._set(sprite_1_changes);

			var each_block_value_1 = template.helpers.range(6);

			if (changed.y || changed.sprite_class) {
				for (var i_2 = 0; i_2 < each_block_value_1.length; i_2 += 1) {
					if (each_block_1_iterations[i_2]) {
						each_block_1_iterations[i_2].update(changed, state, each_block_value_1, each_block_value_1[i_2], i_2);
					} else {
						each_block_1_iterations[i_2] = create_each_block_1(state, each_block_value_1, each_block_value_1[i_2], i_2, component);
						each_block_1_iterations[i_2].create();
						each_block_1_iterations[i_2].mount(div_8, null);
					}
				}

				for (; i_2 < each_block_1_iterations.length; i_2 += 1) {
					each_block_1_iterations[i_2].unmount();
					each_block_1_iterations[i_2].destroy();
				}
				each_block_1_iterations.length = each_block_value_1.length;
			}

			var sprite_2_changes = {};
			if (changed.sprite_class) sprite_2_changes.src_class = state.sprite_class;
			if (changed.y) sprite_2_changes.y = state.y;
			if (changed.x) sprite_2_changes.x = state.x;
			sprite_2._set(sprite_2_changes);
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(div);

			for (var i_2 = 0; i_2 < each_block_iterations.length; i_2 += 1) {
				each_block_iterations[i_2].unmount();
			}

			for (var i_2 = 0; i_2 < each_block_1_iterations.length; i_2 += 1) {
				each_block_1_iterations[i_2].unmount();
			}
		},

		destroy: function destroy() {
			(0, _shared.destroyEach)(each_block_iterations, false, 0);

			sprite.destroy(false);
			sprite_1.destroy(false);

			(0, _shared.destroyEach)(each_block_1_iterations, false, 0);

			sprite_2.destroy(false);
		}
	};
}

function create_each_block(state, each_block_value, i, i_index, component) {
	var div, div_class_value;

	var sprite = new _Sprite2.default({
		_root: component._root,
		data: {
			src_class: state.sprite_class,
			size: 44,
			sprite_size: 180,
			y: 0,
			x: i + 1,
			sprite_scale: 0.5
		}
	});

	return {
		create: function create() {
			div = (0, _shared.createElement)("div");
			sprite._fragment.create();
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			div.className = div_class_value = "icon " + (state.x == i + 1 ? 'selected' : '');
			(0, _shared.addListener)(div, "click", click_handler);

			div._svelte = {
				component: component,
				each_block_value: each_block_value,
				i_index: i_index
			};
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
			sprite._mount(div, null);
		},

		update: function update(changed, state, each_block_value, i, i_index) {
			if (changed.x && div_class_value !== (div_class_value = "icon " + (state.x == i + 1 ? 'selected' : ''))) {
				div.className = div_class_value;
			}

			div._svelte.each_block_value = each_block_value;
			div._svelte.i_index = i_index;

			var sprite_changes = {};
			if (changed.sprite_class) sprite_changes.src_class = state.sprite_class;
			sprite_changes.x = i + 1;
			sprite._set(sprite_changes);
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(div);
		},

		destroy: function destroy() {
			(0, _shared.removeListener)(div, "click", click_handler);
			sprite.destroy(false);
		}
	};
}

function create_each_block_1(state, each_block_value_1, i_1, i_index_1, component) {
	var div, div_class_value;

	var sprite = new _Sprite2.default({
		_root: component._root,
		data: {
			src_class: state.sprite_class,
			size: 44,
			sprite_size: 180,
			y: i_1 + 1,
			x: 0,
			sprite_scale: 0.5
		}
	});

	return {
		create: function create() {
			div = (0, _shared.createElement)("div");
			sprite._fragment.create();
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			div.className = div_class_value = "icon " + (state.y == i_1 + 1 ? 'selected' : '');
			(0, _shared.addListener)(div, "click", click_handler_1);

			div._svelte = {
				component: component,
				each_block_value_1: each_block_value_1,
				i_index_1: i_index_1
			};
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
			sprite._mount(div, null);
		},

		update: function update(changed, state, each_block_value_1, i_1, i_index_1) {
			if (changed.y && div_class_value !== (div_class_value = "icon " + (state.y == i_1 + 1 ? 'selected' : ''))) {
				div.className = div_class_value;
			}

			div._svelte.each_block_value_1 = each_block_value_1;
			div._svelte.i_index_1 = i_index_1;

			var sprite_changes = {};
			if (changed.sprite_class) sprite_changes.src_class = state.sprite_class;
			sprite_changes.y = i_1 + 1;
			sprite._set(sprite_changes);
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(div);
		},

		destroy: function destroy() {
			(0, _shared.removeListener)(div, "click", click_handler_1);
			sprite.destroy(false);
		}
	};
}

function click_handler(event) {
	var component = this._svelte.component;
	var each_block_value = this._svelte.each_block_value,
	    i_index = this._svelte.i_index,
	    i = each_block_value[i_index];
	component.set({ x: i + 1 });
}

function click_handler_1(event) {
	var component = this._svelte.component;
	var each_block_value_1 = this._svelte.each_block_value_1,
	    i_index_1 = this._svelte.i_index_1,
	    i_1 = each_block_value_1[i_index_1];
	component.set({ y: i_1 + 1 });
}

function LinearCombinations(options) {
	this.options = options;
	this._state = (0, _shared.assign)(template.data(), options.data);

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root || this;
	this._yield = options._yield;
	this._bind = options._bind;

	if (!document.getElementById("svelte-127339819-style")) add_css();

	if (!options._root) {
		this._oncreate = [];
		this._beforecreate = [];
		this._aftercreate = [];
	}

	this._fragment = create_main_fragment(this._state, this);

	if (options.target) {
		this._fragment.create();
		this._fragment.mount(options.target, options.anchor || null);

		this._lock = true;
		(0, _shared.callAll)(this._beforecreate);
		(0, _shared.callAll)(this._oncreate);
		(0, _shared.callAll)(this._aftercreate);
		this._lock = false;
	}
}

(0, _shared.assign)(LinearCombinations.prototype, template.methods, _shared.proto);

exports.default = LinearCombinations;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Sprite = __webpack_require__(1);

var _Sprite2 = _interopRequireDefault(_Sprite);

var _shared = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = function () {
	function range(n) {
		return Array(n).fill().map(function (_, i) {
			return i;
		});
	}

	return {
		data: function data() {
			return {
				sprite_scale: 1.0,
				steps: [0, 4, 48, 2048]
			};
		},

		helpers: { range: range }
	};
}();

function encapsulateStyles(node) {
	(0, _shared.setAttribute)(node, "svelte-3927223486", "");
}

function add_css() {
	var style = (0, _shared.createElement)("style");
	style.id = 'svelte-3927223486-style';
	style.textContent = "[svelte-3927223486].sprite_opt_progress,[svelte-3927223486] .sprite_opt_progress{background-image:url(\"images/opt_progress_mixed4a-11.png\")}[svelte-3927223486].container,[svelte-3927223486] .container{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:stretch;margin-bottom:5px}[svelte-3927223486].container > div,[svelte-3927223486] .container > div{}[svelte-3927223486].container .sprite,[svelte-3927223486] .container .sprite{align-self:stretch}[svelte-3927223486].container .arrowbox,[svelte-3927223486] .container .arrowbox{color:#888;display:flex;align-items:center;margin-left:5px;margin-right:5px;width:14px}";
	(0, _shared.appendNode)(style, document.head);
}

function create_main_fragment(state, component) {
	var div;

	var each_block_value = template.helpers.range(4);

	var each_block_iterations = [];

	for (var i = 0; i < each_block_value.length; i += 1) {
		each_block_iterations[i] = create_each_block(state, each_block_value, each_block_value[i], i, component);
	}

	return {
		create: function create() {
			div = (0, _shared.createElement)("div");

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].create();
			}
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			encapsulateStyles(div);
			div.className = "container";
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].mount(div, null);
			}
		},

		update: function update(changed, state) {
			var each_block_value = template.helpers.range(4);

			if (changed.steps) {
				for (var i = 0; i < each_block_value.length; i += 1) {
					if (each_block_iterations[i]) {
						each_block_iterations[i].update(changed, state, each_block_value, each_block_value[i], i);
					} else {
						each_block_iterations[i] = create_each_block(state, each_block_value, each_block_value[i], i, component);
						each_block_iterations[i].create();
						each_block_iterations[i].mount(div, null);
					}
				}

				for (; i < each_block_iterations.length; i += 1) {
					each_block_iterations[i].unmount();
					each_block_iterations[i].destroy();
				}
				each_block_iterations.length = each_block_value.length;
			}
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(div);

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].unmount();
			}
		},

		destroy: function destroy() {
			(0, _shared.destroyEach)(each_block_iterations, false, 0);
		}
	};
}

function create_each_block(state, each_block_value, x, index, component) {
	var div,
	    text,
	    figcaption,
	    text_1,
	    text_2_value = state.steps[index],
	    text_2,
	    text_5,
	    div_1;

	var sprite = new _Sprite2.default({
		_root: component._root,
		data: {
			src_class: "sprite_opt_progress",
			x: x,
			y: 0,
			sprite_size: 180,
			size: 140,
			pixelated: false
		}
	});

	var if_block = x != 3 && create_if_block(state, each_block_value, x, index, component);

	return {
		create: function create() {
			div = (0, _shared.createElement)("div");
			sprite._fragment.create();
			text = (0, _shared.createText)("\n      ");
			figcaption = (0, _shared.createElement)("figcaption");
			text_1 = (0, _shared.createText)("Step ");
			text_2 = (0, _shared.createText)(text_2_value);
			text_5 = (0, _shared.createText)("\n    ");
			div_1 = (0, _shared.createElement)("div");
			if (if_block) if_block.create();
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			div_1.className = "arrowbox";
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
			sprite._mount(div, null);
			(0, _shared.appendNode)(text, div);
			(0, _shared.appendNode)(figcaption, div);
			(0, _shared.appendNode)(text_1, figcaption);
			(0, _shared.appendNode)(text_2, figcaption);
			(0, _shared.insertNode)(text_5, target, anchor);
			(0, _shared.insertNode)(div_1, target, anchor);
			if (if_block) if_block.mount(div_1, null);
		},

		update: function update(changed, state, each_block_value, x, index) {
			var sprite_changes = {};
			sprite_changes.x = x;
			sprite_changes.pixelated = false;
			sprite._set(sprite_changes);

			if (changed.steps && text_2_value !== (text_2_value = state.steps[index])) {
				text_2.data = text_2_value;
			}

			if (x != 3) {
				if (!if_block) {
					if_block = create_if_block(state, each_block_value, x, index, component);
					if_block.create();
					if_block.mount(div_1, null);
				}
			} else if (if_block) {
				if_block.unmount();
				if_block.destroy();
				if_block = null;
			}
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(div);
			(0, _shared.detachNode)(text_5);
			(0, _shared.detachNode)(div_1);
			if (if_block) if_block.unmount();
		},

		destroy: function destroy() {
			sprite.destroy(false);
			if (if_block) if_block.destroy();
		}
	};
}

function create_if_block(state, each_block_value, x, index, component) {
	var text;

	return {
		create: function create() {
			text = (0, _shared.createText)("→");
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(text, target, anchor);
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(text);
		},

		destroy: _shared.noop
	};
}

function OptProgress(options) {
	this.options = options;
	this._state = (0, _shared.assign)(template.data(), options.data);

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root || this;
	this._yield = options._yield;
	this._bind = options._bind;

	if (!document.getElementById("svelte-3927223486-style")) add_css();

	if (!options._root) {
		this._oncreate = [];
		this._beforecreate = [];
		this._aftercreate = [];
	}

	this._fragment = create_main_fragment(this._state, this);

	if (options.target) {
		this._fragment.create();
		this._fragment.mount(options.target, options.anchor || null);

		this._lock = true;
		(0, _shared.callAll)(this._beforecreate);
		(0, _shared.callAll)(this._oncreate);
		(0, _shared.callAll)(this._aftercreate);
		this._lock = false;
	}
}

(0, _shared.assign)(OptProgress.prototype, _shared.proto);

exports.default = OptProgress;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Sprite = __webpack_require__(1);

var _Sprite2 = _interopRequireDefault(_Sprite);

var _shared = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = function () {
	function range(n) {
		return Array(n).fill().map(function (_, i) {
			return i;
		});
	}

	return {
		data: function data() {
			return {};
		},

		oncreate: function oncreate() {
			var _this = this;

			var mq = matchMedia("(min-width: 1280px)");
			mq.onchange = function (event) {
				return _this.set({ size: event.matches ? 170 : 147 });
			};
			this.set({
				size: mq.matches ? 170 : 147
				// sprite_scale: mq.matches ? .625 : .5,
			});
		},
		helpers: { range: range }
	};
}();

function encapsulateStyles(node) {
	(0, _shared.setAttribute)(node, "svelte-3700122413", "");
}

function add_css() {
	var style = (0, _shared.createElement)("style");
	style.id = 'svelte-3700122413-style';
	style.textContent = "[svelte-3700122413].sprite_examples_opt_comparison_examples,[svelte-3700122413] .sprite_examples_opt_comparison_examples{background-image:url(\"images/why_optimization_examples.jpg\")}[svelte-3700122413].sprite_examples_opt_comparison,[svelte-3700122413] .sprite_examples_opt_comparison{background-image:url(\"images/why_optimization_neuron.png\")}[svelte-3700122413].captions,[svelte-3700122413] .captions,[svelte-3700122413].images,[svelte-3700122413] .images{display:flex;flex-flow:row;justify-content:flex-start}[svelte-3700122413].images > div,[svelte-3700122413] .images > div{margin-bottom:10px;margin-right:10px}[svelte-3700122413].images > div:last-of-type,[svelte-3700122413] .images > div:last-of-type{margin-right:0}[svelte-3700122413].captions > figcaption,[svelte-3700122413] .captions > figcaption{display:inline-block;width:147px;margin-right:10px}[svelte-3700122413].captions > figcaption:last-of-type,[svelte-3700122413] .captions > figcaption:last-of-type{margin-right:0}@media(min-width: 1280px){[svelte-3700122413].captions > figcaption,[svelte-3700122413] .captions > figcaption{width:170px}}";
	(0, _shared.appendNode)(style, document.head);
}

function create_main_fragment(state, component) {
	var figcaption,
	    strong,
	    text,
	    text_1,
	    text_2,
	    div,
	    sprite_updating = {},
	    text_3,
	    sprite_1_updating = {},
	    text_4,
	    sprite_2_updating = {},
	    text_5,
	    sprite_3_updating = {},
	    text_7,
	    figcaption_1,
	    span,
	    strong_1,
	    text_8,
	    text_9,
	    text_10,
	    span_1,
	    text_11,
	    text_13,
	    div_1,
	    sprite_4_updating = {},
	    text_14,
	    sprite_5_updating = {},
	    text_15,
	    sprite_6_updating = {},
	    text_16,
	    sprite_7_updating = {},
	    text_18,
	    div_2,
	    figcaption_2,
	    text_19,
	    br,
	    em,
	    text_20,
	    text_21,
	    figcaption_3,
	    text_22,
	    br_1,
	    em_1,
	    text_23,
	    text_24,
	    figcaption_4,
	    text_25,
	    br_2,
	    em_2,
	    text_26,
	    text_27,
	    figcaption_5,
	    text_28,
	    br_3,
	    em_3,
	    text_29;

	var sprite_initial_data = {
		src_class: "sprite_examples_opt_comparison_examples",
		x: 0,
		y: 0,
		sprite_size: 294
	};
	if ('size' in state) {
		sprite_initial_data.size = state.size;
		sprite_updating.size = true;
	}
	var sprite = new _Sprite2.default({
		_root: component._root,
		data: sprite_initial_data,
		_bind: function _bind(changed, childState) {
			var state = component.get(),
			    newState = {};
			if (!sprite_updating.size && changed.size) {
				newState.size = childState.size;
			}
			sprite_updating = (0, _shared.assign)({}, changed);
			component._set(newState);
			sprite_updating = {};
		}
	});

	component._root._beforecreate.push(function () {
		var state = component.get(),
		    childState = sprite.get(),
		    newState = {};
		if (!childState) return;
		if (!sprite_updating.size) {
			newState.size = childState.size;
		}
		sprite_updating = { size: true };
		component._set(newState);
		sprite_updating = {};
	});

	var sprite_context = {
		state: state
	};

	var sprite_1_initial_data = {
		src_class: "sprite_examples_opt_comparison_examples",
		x: 1,
		y: 0,
		sprite_size: 294
	};
	if ('size' in state) {
		sprite_1_initial_data.size = state.size;
		sprite_1_updating.size = true;
	}
	var sprite_1 = new _Sprite2.default({
		_root: component._root,
		data: sprite_1_initial_data,
		_bind: function _bind(changed, childState) {
			var state = component.get(),
			    newState = {};
			if (!sprite_1_updating.size && changed.size) {
				newState.size = childState.size;
			}
			sprite_1_updating = (0, _shared.assign)({}, changed);
			component._set(newState);
			sprite_1_updating = {};
		}
	});

	component._root._beforecreate.push(function () {
		var state = component.get(),
		    childState = sprite_1.get(),
		    newState = {};
		if (!childState) return;
		if (!sprite_1_updating.size) {
			newState.size = childState.size;
		}
		sprite_1_updating = { size: true };
		component._set(newState);
		sprite_1_updating = {};
	});

	var sprite_1_context = {
		state: state
	};

	var sprite_2_initial_data = {
		src_class: "sprite_examples_opt_comparison_examples",
		x: 2,
		y: 0,
		sprite_size: 294
	};
	if ('size' in state) {
		sprite_2_initial_data.size = state.size;
		sprite_2_updating.size = true;
	}
	var sprite_2 = new _Sprite2.default({
		_root: component._root,
		data: sprite_2_initial_data,
		_bind: function _bind(changed, childState) {
			var state = component.get(),
			    newState = {};
			if (!sprite_2_updating.size && changed.size) {
				newState.size = childState.size;
			}
			sprite_2_updating = (0, _shared.assign)({}, changed);
			component._set(newState);
			sprite_2_updating = {};
		}
	});

	component._root._beforecreate.push(function () {
		var state = component.get(),
		    childState = sprite_2.get(),
		    newState = {};
		if (!childState) return;
		if (!sprite_2_updating.size) {
			newState.size = childState.size;
		}
		sprite_2_updating = { size: true };
		component._set(newState);
		sprite_2_updating = {};
	});

	var sprite_2_context = {
		state: state
	};

	var sprite_3_initial_data = {
		src_class: "sprite_examples_opt_comparison_examples",
		x: 3,
		y: 0,
		sprite_size: 294
	};
	if ('size' in state) {
		sprite_3_initial_data.size = state.size;
		sprite_3_updating.size = true;
	}
	var sprite_3 = new _Sprite2.default({
		_root: component._root,
		data: sprite_3_initial_data,
		_bind: function _bind(changed, childState) {
			var state = component.get(),
			    newState = {};
			if (!sprite_3_updating.size && changed.size) {
				newState.size = childState.size;
			}
			sprite_3_updating = (0, _shared.assign)({}, changed);
			component._set(newState);
			sprite_3_updating = {};
		}
	});

	component._root._beforecreate.push(function () {
		var state = component.get(),
		    childState = sprite_3.get(),
		    newState = {};
		if (!childState) return;
		if (!sprite_3_updating.size) {
			newState.size = childState.size;
		}
		sprite_3_updating = { size: true };
		component._set(newState);
		sprite_3_updating = {};
	});

	var sprite_3_context = {
		state: state
	};

	var sprite_4_initial_data = {
		src_class: "sprite_examples_opt_comparison",
		x: 0,
		y: 0,
		sprite_size: 170
	};
	if ('size' in state) {
		sprite_4_initial_data.size = state.size;
		sprite_4_updating.size = true;
	}
	var sprite_4 = new _Sprite2.default({
		_root: component._root,
		data: sprite_4_initial_data,
		_bind: function _bind(changed, childState) {
			var state = component.get(),
			    newState = {};
			if (!sprite_4_updating.size && changed.size) {
				newState.size = childState.size;
			}
			sprite_4_updating = (0, _shared.assign)({}, changed);
			component._set(newState);
			sprite_4_updating = {};
		}
	});

	component._root._beforecreate.push(function () {
		var state = component.get(),
		    childState = sprite_4.get(),
		    newState = {};
		if (!childState) return;
		if (!sprite_4_updating.size) {
			newState.size = childState.size;
		}
		sprite_4_updating = { size: true };
		component._set(newState);
		sprite_4_updating = {};
	});

	var sprite_4_context = {
		state: state
	};

	var sprite_5_initial_data = {
		src_class: "sprite_examples_opt_comparison",
		x: 1,
		y: 0,
		sprite_size: 170
	};
	if ('size' in state) {
		sprite_5_initial_data.size = state.size;
		sprite_5_updating.size = true;
	}
	var sprite_5 = new _Sprite2.default({
		_root: component._root,
		data: sprite_5_initial_data,
		_bind: function _bind(changed, childState) {
			var state = component.get(),
			    newState = {};
			if (!sprite_5_updating.size && changed.size) {
				newState.size = childState.size;
			}
			sprite_5_updating = (0, _shared.assign)({}, changed);
			component._set(newState);
			sprite_5_updating = {};
		}
	});

	component._root._beforecreate.push(function () {
		var state = component.get(),
		    childState = sprite_5.get(),
		    newState = {};
		if (!childState) return;
		if (!sprite_5_updating.size) {
			newState.size = childState.size;
		}
		sprite_5_updating = { size: true };
		component._set(newState);
		sprite_5_updating = {};
	});

	var sprite_5_context = {
		state: state
	};

	var sprite_6_initial_data = {
		src_class: "sprite_examples_opt_comparison",
		x: 2,
		y: 0,
		sprite_size: 170
	};
	if ('size' in state) {
		sprite_6_initial_data.size = state.size;
		sprite_6_updating.size = true;
	}
	var sprite_6 = new _Sprite2.default({
		_root: component._root,
		data: sprite_6_initial_data,
		_bind: function _bind(changed, childState) {
			var state = component.get(),
			    newState = {};
			if (!sprite_6_updating.size && changed.size) {
				newState.size = childState.size;
			}
			sprite_6_updating = (0, _shared.assign)({}, changed);
			component._set(newState);
			sprite_6_updating = {};
		}
	});

	component._root._beforecreate.push(function () {
		var state = component.get(),
		    childState = sprite_6.get(),
		    newState = {};
		if (!childState) return;
		if (!sprite_6_updating.size) {
			newState.size = childState.size;
		}
		sprite_6_updating = { size: true };
		component._set(newState);
		sprite_6_updating = {};
	});

	var sprite_6_context = {
		state: state
	};

	var sprite_7_initial_data = {
		src_class: "sprite_examples_opt_comparison",
		x: 3,
		y: 0,
		sprite_size: 170
	};
	if ('size' in state) {
		sprite_7_initial_data.size = state.size;
		sprite_7_updating.size = true;
	}
	var sprite_7 = new _Sprite2.default({
		_root: component._root,
		data: sprite_7_initial_data,
		_bind: function _bind(changed, childState) {
			var state = component.get(),
			    newState = {};
			if (!sprite_7_updating.size && changed.size) {
				newState.size = childState.size;
			}
			sprite_7_updating = (0, _shared.assign)({}, changed);
			component._set(newState);
			sprite_7_updating = {};
		}
	});

	component._root._beforecreate.push(function () {
		var state = component.get(),
		    childState = sprite_7.get(),
		    newState = {};
		if (!childState) return;
		if (!sprite_7_updating.size) {
			newState.size = childState.size;
		}
		sprite_7_updating = { size: true };
		component._set(newState);
		sprite_7_updating = {};
	});

	var sprite_7_context = {
		state: state
	};

	return {
		create: function create() {
			figcaption = (0, _shared.createElement)("figcaption");
			strong = (0, _shared.createElement)("strong");
			text = (0, _shared.createText)("Dataset Examples");
			text_1 = (0, _shared.createText)(" show us what neurons respond to in practice");
			text_2 = (0, _shared.createText)("\n\n");
			div = (0, _shared.createElement)("div");
			sprite._fragment.create();
			text_3 = (0, _shared.createText)("\n  ");
			sprite_1._fragment.create();
			text_4 = (0, _shared.createText)("\n  ");
			sprite_2._fragment.create();
			text_5 = (0, _shared.createText)("\n  ");
			sprite_3._fragment.create();
			text_7 = (0, _shared.createText)("\n\n");
			figcaption_1 = (0, _shared.createElement)("figcaption");
			span = (0, _shared.createElement)("span");
			strong_1 = (0, _shared.createElement)("strong");
			text_8 = (0, _shared.createText)("Optimization");
			text_9 = (0, _shared.createText)(" isolates the causes of behavior from mere correlations.");
			text_10 = (0, _shared.createText)("\n  ");
			span_1 = (0, _shared.createElement)("span");
			text_11 = (0, _shared.createText)("A neuron may not be detecting what you initially thought.");
			text_13 = (0, _shared.createText)("\n\n");
			div_1 = (0, _shared.createElement)("div");
			sprite_4._fragment.create();
			text_14 = (0, _shared.createText)("\n  ");
			sprite_5._fragment.create();
			text_15 = (0, _shared.createText)("\n  ");
			sprite_6._fragment.create();
			text_16 = (0, _shared.createText)("\n  ");
			sprite_7._fragment.create();
			text_18 = (0, _shared.createText)("\n\n");
			div_2 = (0, _shared.createElement)("div");
			figcaption_2 = (0, _shared.createElement)("figcaption");
			text_19 = (0, _shared.createText)("Baseball—or stripes? ");
			br = (0, _shared.createElement)("br");
			em = (0, _shared.createElement)("em");
			text_20 = (0, _shared.createText)("mixed4a, Unit 6");
			text_21 = (0, _shared.createText)("\n  ");
			figcaption_3 = (0, _shared.createElement)("figcaption");
			text_22 = (0, _shared.createText)("Animal faces—or snouts? ");
			br_1 = (0, _shared.createElement)("br");
			em_1 = (0, _shared.createElement)("em");
			text_23 = (0, _shared.createText)("mixed4a, Unit 240");
			text_24 = (0, _shared.createText)("\n  ");
			figcaption_4 = (0, _shared.createElement)("figcaption");
			text_25 = (0, _shared.createText)("Clouds—or fluffiness? ");
			br_2 = (0, _shared.createElement)("br");
			em_2 = (0, _shared.createElement)("em");
			text_26 = (0, _shared.createText)("mixed4a, Unit 453");
			text_27 = (0, _shared.createText)("\n  ");
			figcaption_5 = (0, _shared.createElement)("figcaption");
			text_28 = (0, _shared.createText)("Buildings—or sky? ");
			br_3 = (0, _shared.createElement)("br");
			em_3 = (0, _shared.createElement)("em");
			text_29 = (0, _shared.createText)("mixed4a, Unit 492");
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			encapsulateStyles(figcaption);
			(0, _shared.setStyle)(figcaption, "grid-column", "kicker");
			encapsulateStyles(div);
			div.className = "images";
			(0, _shared.setStyle)(div, "grid-column", "text-start / page-end");
			encapsulateStyles(figcaption_1);
			(0, _shared.setStyle)(figcaption_1, "grid-column", "kicker");
			encapsulateStyles(div_1);
			div_1.className = "images";
			(0, _shared.setStyle)(div_1, "grid-column", "text-start / page-end");
			encapsulateStyles(div_2);
			div_2.className = "captions";
			(0, _shared.setStyle)(div_2, "grid-column", "text-start / page-end");
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(figcaption, target, anchor);
			(0, _shared.appendNode)(strong, figcaption);
			(0, _shared.appendNode)(text, strong);
			(0, _shared.appendNode)(text_1, figcaption);
			(0, _shared.insertNode)(text_2, target, anchor);
			(0, _shared.insertNode)(div, target, anchor);
			sprite._mount(div, null);
			(0, _shared.appendNode)(text_3, div);
			sprite_1._mount(div, null);
			(0, _shared.appendNode)(text_4, div);
			sprite_2._mount(div, null);
			(0, _shared.appendNode)(text_5, div);
			sprite_3._mount(div, null);
			(0, _shared.insertNode)(text_7, target, anchor);
			(0, _shared.insertNode)(figcaption_1, target, anchor);
			(0, _shared.appendNode)(span, figcaption_1);
			(0, _shared.appendNode)(strong_1, span);
			(0, _shared.appendNode)(text_8, strong_1);
			(0, _shared.appendNode)(text_9, span);
			(0, _shared.appendNode)(text_10, figcaption_1);
			(0, _shared.appendNode)(span_1, figcaption_1);
			(0, _shared.appendNode)(text_11, span_1);
			(0, _shared.insertNode)(text_13, target, anchor);
			(0, _shared.insertNode)(div_1, target, anchor);
			sprite_4._mount(div_1, null);
			(0, _shared.appendNode)(text_14, div_1);
			sprite_5._mount(div_1, null);
			(0, _shared.appendNode)(text_15, div_1);
			sprite_6._mount(div_1, null);
			(0, _shared.appendNode)(text_16, div_1);
			sprite_7._mount(div_1, null);
			(0, _shared.insertNode)(text_18, target, anchor);
			(0, _shared.insertNode)(div_2, target, anchor);
			(0, _shared.appendNode)(figcaption_2, div_2);
			(0, _shared.appendNode)(text_19, figcaption_2);
			(0, _shared.appendNode)(br, figcaption_2);
			(0, _shared.appendNode)(em, figcaption_2);
			(0, _shared.appendNode)(text_20, em);
			(0, _shared.appendNode)(text_21, div_2);
			(0, _shared.appendNode)(figcaption_3, div_2);
			(0, _shared.appendNode)(text_22, figcaption_3);
			(0, _shared.appendNode)(br_1, figcaption_3);
			(0, _shared.appendNode)(em_1, figcaption_3);
			(0, _shared.appendNode)(text_23, em_1);
			(0, _shared.appendNode)(text_24, div_2);
			(0, _shared.appendNode)(figcaption_4, div_2);
			(0, _shared.appendNode)(text_25, figcaption_4);
			(0, _shared.appendNode)(br_2, figcaption_4);
			(0, _shared.appendNode)(em_2, figcaption_4);
			(0, _shared.appendNode)(text_26, em_2);
			(0, _shared.appendNode)(text_27, div_2);
			(0, _shared.appendNode)(figcaption_5, div_2);
			(0, _shared.appendNode)(text_28, figcaption_5);
			(0, _shared.appendNode)(br_3, figcaption_5);
			(0, _shared.appendNode)(em_3, figcaption_5);
			(0, _shared.appendNode)(text_29, em_3);
		},

		update: function update(changed, state) {
			var sprite_changes = {};
			if (!sprite_updating.size && changed.size) {
				sprite_changes.size = state.size;
				sprite_updating.size = true;
			}
			sprite._set(sprite_changes);
			sprite_updating = {};

			sprite_context.state = state;

			var sprite_1_changes = {};
			if (!sprite_1_updating.size && changed.size) {
				sprite_1_changes.size = state.size;
				sprite_1_updating.size = true;
			}
			sprite_1._set(sprite_1_changes);
			sprite_1_updating = {};

			sprite_1_context.state = state;

			var sprite_2_changes = {};
			if (!sprite_2_updating.size && changed.size) {
				sprite_2_changes.size = state.size;
				sprite_2_updating.size = true;
			}
			sprite_2._set(sprite_2_changes);
			sprite_2_updating = {};

			sprite_2_context.state = state;

			var sprite_3_changes = {};
			if (!sprite_3_updating.size && changed.size) {
				sprite_3_changes.size = state.size;
				sprite_3_updating.size = true;
			}
			sprite_3._set(sprite_3_changes);
			sprite_3_updating = {};

			sprite_3_context.state = state;

			var sprite_4_changes = {};
			if (!sprite_4_updating.size && changed.size) {
				sprite_4_changes.size = state.size;
				sprite_4_updating.size = true;
			}
			sprite_4._set(sprite_4_changes);
			sprite_4_updating = {};

			sprite_4_context.state = state;

			var sprite_5_changes = {};
			if (!sprite_5_updating.size && changed.size) {
				sprite_5_changes.size = state.size;
				sprite_5_updating.size = true;
			}
			sprite_5._set(sprite_5_changes);
			sprite_5_updating = {};

			sprite_5_context.state = state;

			var sprite_6_changes = {};
			if (!sprite_6_updating.size && changed.size) {
				sprite_6_changes.size = state.size;
				sprite_6_updating.size = true;
			}
			sprite_6._set(sprite_6_changes);
			sprite_6_updating = {};

			sprite_6_context.state = state;

			var sprite_7_changes = {};
			if (!sprite_7_updating.size && changed.size) {
				sprite_7_changes.size = state.size;
				sprite_7_updating.size = true;
			}
			sprite_7._set(sprite_7_changes);
			sprite_7_updating = {};

			sprite_7_context.state = state;
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(figcaption);
			(0, _shared.detachNode)(text_2);
			(0, _shared.detachNode)(div);
			(0, _shared.detachNode)(text_7);
			(0, _shared.detachNode)(figcaption_1);
			(0, _shared.detachNode)(text_13);
			(0, _shared.detachNode)(div_1);
			(0, _shared.detachNode)(text_18);
			(0, _shared.detachNode)(div_2);
		},

		destroy: function destroy() {
			sprite.destroy(false);
			sprite_1.destroy(false);
			sprite_2.destroy(false);
			sprite_3.destroy(false);
			sprite_4.destroy(false);
			sprite_5.destroy(false);
			sprite_6.destroy(false);
			sprite_7.destroy(false);
		}
	};
}

function ExamplesOptComparison(options) {
	this.options = options;
	this._state = (0, _shared.assign)(template.data(), options.data);

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root || this;
	this._yield = options._yield;
	this._bind = options._bind;

	if (!document.getElementById("svelte-3700122413-style")) add_css();

	var oncreate = template.oncreate.bind(this);

	if (!options._root) {
		this._oncreate = [oncreate];
		this._beforecreate = [];
		this._aftercreate = [];
	} else {
		this._root._oncreate.push(oncreate);
	}

	this._fragment = create_main_fragment(this._state, this);

	if (options.target) {
		this._fragment.create();
		this._fragment.mount(options.target, options.anchor || null);

		this._lock = true;
		(0, _shared.callAll)(this._beforecreate);
		(0, _shared.callAll)(this._oncreate);
		(0, _shared.callAll)(this._aftercreate);
		this._lock = false;
	}
}

(0, _shared.assign)(ExamplesOptComparison.prototype, _shared.proto);

exports.default = ExamplesOptComparison;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Sprite = __webpack_require__(1);

var _Sprite2 = _interopRequireDefault(_Sprite);

var _shared = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = function () {
	function range(n) {
		return Array(n).fill().map(function (_, i) {
			return i;
		});
	}

	return {
		data: function data() {
			return {};
		},

		oncreate: function oncreate() {
			var _this = this;

			var mq = matchMedia("(min-width: 960px)");
			mq.onchange = function (event) {
				return _this.set({ size: event.matches ? 180 : 147 });
			};
			this.set({
				size: mq.matches ? 180 : 147
				// sprite_scale: mq.matches ? .625 : .5,
			});
		},
		helpers: { range: range }
	};
}();

function encapsulateStyles(node) {
	(0, _shared.setAttribute)(node, "svelte-887141927", "");
}

function add_css() {
	var style = (0, _shared.createElement)("style");
	style.id = 'svelte-887141927-style';
	style.textContent = "figcaption[svelte-887141927],[svelte-887141927] figcaption{display:block}[svelte-887141927].frow,[svelte-887141927] .frow{display:flex;flex-flow:row;flex-wrap:wrap;justify-content:flex-start}[svelte-887141927].fcolumn,[svelte-887141927] .fcolumn{display:flex;flex-flow:column;margin-right:10px}[svelte-887141927].fcolumn:last-of-type,[svelte-887141927] .fcolumn:last-of-type{margin-right:0}[svelte-887141927].fcolumn > *,[svelte-887141927] .fcolumn > *{margin-bottom:10px}[svelte-887141927].fcolumn > *:last-child,[svelte-887141927] .fcolumn > *:last-child{margin-bottom:0}[svelte-887141927].sprite_random_opt_examples,[svelte-887141927] .sprite_random_opt_examples{background-image:url(\"images/random_optimization_examples.jpg\")}[svelte-887141927].sprite_random_opt,[svelte-887141927] .sprite_random_opt{background-image:url(\"images/random_optimization.png\")}[svelte-887141927].column > div,[svelte-887141927] .column > div{margin-bottom:10px}";
	(0, _shared.appendNode)(style, document.head);
}

function create_main_fragment(state, component) {
	var div,
	    div_1,
	    sprite_updating = {},
	    text,
	    sprite_1_updating = {},
	    text_1,
	    figcaption,
	    em,
	    text_2,
	    text_4,
	    div_2,
	    sprite_2_updating = {},
	    text_5,
	    sprite_3_updating = {},
	    text_6,
	    figcaption_1,
	    em_1,
	    text_7,
	    text_9,
	    div_3,
	    sprite_4_updating = {},
	    text_10,
	    sprite_5_updating = {},
	    text_11,
	    figcaption_2,
	    em_2,
	    text_12,
	    text_14,
	    div_4,
	    sprite_6_updating = {},
	    text_15,
	    sprite_7_updating = {},
	    text_16,
	    figcaption_3,
	    em_3,
	    text_17;

	var sprite_initial_data = {
		src_class: "sprite_random_opt_examples",
		x: 0,
		y: 0,
		sprite_size: 294
	};
	if ('size' in state) {
		sprite_initial_data.size = state.size;
		sprite_updating.size = true;
	}
	var sprite = new _Sprite2.default({
		_root: component._root,
		data: sprite_initial_data,
		_bind: function _bind(changed, childState) {
			var state = component.get(),
			    newState = {};
			if (!sprite_updating.size && changed.size) {
				newState.size = childState.size;
			}
			sprite_updating = (0, _shared.assign)({}, changed);
			component._set(newState);
			sprite_updating = {};
		}
	});

	component._root._beforecreate.push(function () {
		var state = component.get(),
		    childState = sprite.get(),
		    newState = {};
		if (!childState) return;
		if (!sprite_updating.size) {
			newState.size = childState.size;
		}
		sprite_updating = { size: true };
		component._set(newState);
		sprite_updating = {};
	});

	var sprite_context = {
		state: state
	};

	var sprite_1_initial_data = {
		src_class: "sprite_random_opt",
		x: 0,
		y: 0,
		sprite_size: 180
	};
	if ('size' in state) {
		sprite_1_initial_data.size = state.size;
		sprite_1_updating.size = true;
	}
	var sprite_1 = new _Sprite2.default({
		_root: component._root,
		data: sprite_1_initial_data,
		_bind: function _bind(changed, childState) {
			var state = component.get(),
			    newState = {};
			if (!sprite_1_updating.size && changed.size) {
				newState.size = childState.size;
			}
			sprite_1_updating = (0, _shared.assign)({}, changed);
			component._set(newState);
			sprite_1_updating = {};
		}
	});

	component._root._beforecreate.push(function () {
		var state = component.get(),
		    childState = sprite_1.get(),
		    newState = {};
		if (!childState) return;
		if (!sprite_1_updating.size) {
			newState.size = childState.size;
		}
		sprite_1_updating = { size: true };
		component._set(newState);
		sprite_1_updating = {};
	});

	var sprite_1_context = {
		state: state
	};

	var sprite_2_initial_data = {
		src_class: "sprite_random_opt_examples",
		x: 1,
		y: 0,
		sprite_size: 294
	};
	if ('size' in state) {
		sprite_2_initial_data.size = state.size;
		sprite_2_updating.size = true;
	}
	var sprite_2 = new _Sprite2.default({
		_root: component._root,
		data: sprite_2_initial_data,
		_bind: function _bind(changed, childState) {
			var state = component.get(),
			    newState = {};
			if (!sprite_2_updating.size && changed.size) {
				newState.size = childState.size;
			}
			sprite_2_updating = (0, _shared.assign)({}, changed);
			component._set(newState);
			sprite_2_updating = {};
		}
	});

	component._root._beforecreate.push(function () {
		var state = component.get(),
		    childState = sprite_2.get(),
		    newState = {};
		if (!childState) return;
		if (!sprite_2_updating.size) {
			newState.size = childState.size;
		}
		sprite_2_updating = { size: true };
		component._set(newState);
		sprite_2_updating = {};
	});

	var sprite_2_context = {
		state: state
	};

	var sprite_3_initial_data = {
		src_class: "sprite_random_opt",
		x: 1,
		y: 0,
		sprite_size: 180
	};
	if ('size' in state) {
		sprite_3_initial_data.size = state.size;
		sprite_3_updating.size = true;
	}
	var sprite_3 = new _Sprite2.default({
		_root: component._root,
		data: sprite_3_initial_data,
		_bind: function _bind(changed, childState) {
			var state = component.get(),
			    newState = {};
			if (!sprite_3_updating.size && changed.size) {
				newState.size = childState.size;
			}
			sprite_3_updating = (0, _shared.assign)({}, changed);
			component._set(newState);
			sprite_3_updating = {};
		}
	});

	component._root._beforecreate.push(function () {
		var state = component.get(),
		    childState = sprite_3.get(),
		    newState = {};
		if (!childState) return;
		if (!sprite_3_updating.size) {
			newState.size = childState.size;
		}
		sprite_3_updating = { size: true };
		component._set(newState);
		sprite_3_updating = {};
	});

	var sprite_3_context = {
		state: state
	};

	var sprite_4_initial_data = {
		src_class: "sprite_random_opt_examples",
		x: 2,
		y: 0,
		sprite_size: 294
	};
	if ('size' in state) {
		sprite_4_initial_data.size = state.size;
		sprite_4_updating.size = true;
	}
	var sprite_4 = new _Sprite2.default({
		_root: component._root,
		data: sprite_4_initial_data,
		_bind: function _bind(changed, childState) {
			var state = component.get(),
			    newState = {};
			if (!sprite_4_updating.size && changed.size) {
				newState.size = childState.size;
			}
			sprite_4_updating = (0, _shared.assign)({}, changed);
			component._set(newState);
			sprite_4_updating = {};
		}
	});

	component._root._beforecreate.push(function () {
		var state = component.get(),
		    childState = sprite_4.get(),
		    newState = {};
		if (!childState) return;
		if (!sprite_4_updating.size) {
			newState.size = childState.size;
		}
		sprite_4_updating = { size: true };
		component._set(newState);
		sprite_4_updating = {};
	});

	var sprite_4_context = {
		state: state
	};

	var sprite_5_initial_data = {
		src_class: "sprite_random_opt",
		x: 2,
		y: 0,
		sprite_size: 180
	};
	if ('size' in state) {
		sprite_5_initial_data.size = state.size;
		sprite_5_updating.size = true;
	}
	var sprite_5 = new _Sprite2.default({
		_root: component._root,
		data: sprite_5_initial_data,
		_bind: function _bind(changed, childState) {
			var state = component.get(),
			    newState = {};
			if (!sprite_5_updating.size && changed.size) {
				newState.size = childState.size;
			}
			sprite_5_updating = (0, _shared.assign)({}, changed);
			component._set(newState);
			sprite_5_updating = {};
		}
	});

	component._root._beforecreate.push(function () {
		var state = component.get(),
		    childState = sprite_5.get(),
		    newState = {};
		if (!childState) return;
		if (!sprite_5_updating.size) {
			newState.size = childState.size;
		}
		sprite_5_updating = { size: true };
		component._set(newState);
		sprite_5_updating = {};
	});

	var sprite_5_context = {
		state: state
	};

	var sprite_6_initial_data = {
		src_class: "sprite_random_opt_examples",
		x: 3,
		y: 0,
		sprite_size: 294
	};
	if ('size' in state) {
		sprite_6_initial_data.size = state.size;
		sprite_6_updating.size = true;
	}
	var sprite_6 = new _Sprite2.default({
		_root: component._root,
		data: sprite_6_initial_data,
		_bind: function _bind(changed, childState) {
			var state = component.get(),
			    newState = {};
			if (!sprite_6_updating.size && changed.size) {
				newState.size = childState.size;
			}
			sprite_6_updating = (0, _shared.assign)({}, changed);
			component._set(newState);
			sprite_6_updating = {};
		}
	});

	component._root._beforecreate.push(function () {
		var state = component.get(),
		    childState = sprite_6.get(),
		    newState = {};
		if (!childState) return;
		if (!sprite_6_updating.size) {
			newState.size = childState.size;
		}
		sprite_6_updating = { size: true };
		component._set(newState);
		sprite_6_updating = {};
	});

	var sprite_6_context = {
		state: state
	};

	var sprite_7_initial_data = {
		src_class: "sprite_random_opt",
		x: 3,
		y: 0,
		sprite_size: 180
	};
	if ('size' in state) {
		sprite_7_initial_data.size = state.size;
		sprite_7_updating.size = true;
	}
	var sprite_7 = new _Sprite2.default({
		_root: component._root,
		data: sprite_7_initial_data,
		_bind: function _bind(changed, childState) {
			var state = component.get(),
			    newState = {};
			if (!sprite_7_updating.size && changed.size) {
				newState.size = childState.size;
			}
			sprite_7_updating = (0, _shared.assign)({}, changed);
			component._set(newState);
			sprite_7_updating = {};
		}
	});

	component._root._beforecreate.push(function () {
		var state = component.get(),
		    childState = sprite_7.get(),
		    newState = {};
		if (!childState) return;
		if (!sprite_7_updating.size) {
			newState.size = childState.size;
		}
		sprite_7_updating = { size: true };
		component._set(newState);
		sprite_7_updating = {};
	});

	var sprite_7_context = {
		state: state
	};

	return {
		create: function create() {
			div = (0, _shared.createElement)("div");
			div_1 = (0, _shared.createElement)("div");
			sprite._fragment.create();
			text = (0, _shared.createText)("\n    ");
			sprite_1._fragment.create();
			text_1 = (0, _shared.createText)("\n    ");
			figcaption = (0, _shared.createElement)("figcaption");
			em = (0, _shared.createElement)("em");
			text_2 = (0, _shared.createText)("mixed3a, random direction");
			text_4 = (0, _shared.createText)("\n  \n  ");
			div_2 = (0, _shared.createElement)("div");
			sprite_2._fragment.create();
			text_5 = (0, _shared.createText)("\n    ");
			sprite_3._fragment.create();
			text_6 = (0, _shared.createText)("\n    ");
			figcaption_1 = (0, _shared.createElement)("figcaption");
			em_1 = (0, _shared.createElement)("em");
			text_7 = (0, _shared.createText)("mixed4c, random direction");
			text_9 = (0, _shared.createText)("\n    \n  ");
			div_3 = (0, _shared.createElement)("div");
			sprite_4._fragment.create();
			text_10 = (0, _shared.createText)("\n    ");
			sprite_5._fragment.create();
			text_11 = (0, _shared.createText)("\n    ");
			figcaption_2 = (0, _shared.createElement)("figcaption");
			em_2 = (0, _shared.createElement)("em");
			text_12 = (0, _shared.createText)("mixed4d, random direction");
			text_14 = (0, _shared.createText)("\n\n  ");
			div_4 = (0, _shared.createElement)("div");
			sprite_6._fragment.create();
			text_15 = (0, _shared.createText)("\n    ");
			sprite_7._fragment.create();
			text_16 = (0, _shared.createText)("\n    ");
			figcaption_3 = (0, _shared.createElement)("figcaption");
			em_3 = (0, _shared.createElement)("em");
			text_17 = (0, _shared.createText)("mixed5a, random direction");
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			encapsulateStyles(div);
			div.className = "frow";
			div_1.className = "fcolumn";
			div_2.className = "fcolumn";
			div_3.className = "fcolumn";
			div_4.className = "fcolumn";
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
			(0, _shared.appendNode)(div_1, div);
			sprite._mount(div_1, null);
			(0, _shared.appendNode)(text, div_1);
			sprite_1._mount(div_1, null);
			(0, _shared.appendNode)(text_1, div_1);
			(0, _shared.appendNode)(figcaption, div_1);
			(0, _shared.appendNode)(em, figcaption);
			(0, _shared.appendNode)(text_2, em);
			(0, _shared.appendNode)(text_4, div);
			(0, _shared.appendNode)(div_2, div);
			sprite_2._mount(div_2, null);
			(0, _shared.appendNode)(text_5, div_2);
			sprite_3._mount(div_2, null);
			(0, _shared.appendNode)(text_6, div_2);
			(0, _shared.appendNode)(figcaption_1, div_2);
			(0, _shared.appendNode)(em_1, figcaption_1);
			(0, _shared.appendNode)(text_7, em_1);
			(0, _shared.appendNode)(text_9, div);
			(0, _shared.appendNode)(div_3, div);
			sprite_4._mount(div_3, null);
			(0, _shared.appendNode)(text_10, div_3);
			sprite_5._mount(div_3, null);
			(0, _shared.appendNode)(text_11, div_3);
			(0, _shared.appendNode)(figcaption_2, div_3);
			(0, _shared.appendNode)(em_2, figcaption_2);
			(0, _shared.appendNode)(text_12, em_2);
			(0, _shared.appendNode)(text_14, div);
			(0, _shared.appendNode)(div_4, div);
			sprite_6._mount(div_4, null);
			(0, _shared.appendNode)(text_15, div_4);
			sprite_7._mount(div_4, null);
			(0, _shared.appendNode)(text_16, div_4);
			(0, _shared.appendNode)(figcaption_3, div_4);
			(0, _shared.appendNode)(em_3, figcaption_3);
			(0, _shared.appendNode)(text_17, em_3);
		},

		update: function update(changed, state) {
			var sprite_changes = {};
			if (!sprite_updating.size && changed.size) {
				sprite_changes.size = state.size;
				sprite_updating.size = true;
			}
			sprite._set(sprite_changes);
			sprite_updating = {};

			sprite_context.state = state;

			var sprite_1_changes = {};
			if (!sprite_1_updating.size && changed.size) {
				sprite_1_changes.size = state.size;
				sprite_1_updating.size = true;
			}
			sprite_1._set(sprite_1_changes);
			sprite_1_updating = {};

			sprite_1_context.state = state;

			var sprite_2_changes = {};
			if (!sprite_2_updating.size && changed.size) {
				sprite_2_changes.size = state.size;
				sprite_2_updating.size = true;
			}
			sprite_2._set(sprite_2_changes);
			sprite_2_updating = {};

			sprite_2_context.state = state;

			var sprite_3_changes = {};
			if (!sprite_3_updating.size && changed.size) {
				sprite_3_changes.size = state.size;
				sprite_3_updating.size = true;
			}
			sprite_3._set(sprite_3_changes);
			sprite_3_updating = {};

			sprite_3_context.state = state;

			var sprite_4_changes = {};
			if (!sprite_4_updating.size && changed.size) {
				sprite_4_changes.size = state.size;
				sprite_4_updating.size = true;
			}
			sprite_4._set(sprite_4_changes);
			sprite_4_updating = {};

			sprite_4_context.state = state;

			var sprite_5_changes = {};
			if (!sprite_5_updating.size && changed.size) {
				sprite_5_changes.size = state.size;
				sprite_5_updating.size = true;
			}
			sprite_5._set(sprite_5_changes);
			sprite_5_updating = {};

			sprite_5_context.state = state;

			var sprite_6_changes = {};
			if (!sprite_6_updating.size && changed.size) {
				sprite_6_changes.size = state.size;
				sprite_6_updating.size = true;
			}
			sprite_6._set(sprite_6_changes);
			sprite_6_updating = {};

			sprite_6_context.state = state;

			var sprite_7_changes = {};
			if (!sprite_7_updating.size && changed.size) {
				sprite_7_changes.size = state.size;
				sprite_7_updating.size = true;
			}
			sprite_7._set(sprite_7_changes);
			sprite_7_updating = {};

			sprite_7_context.state = state;
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(div);
		},

		destroy: function destroy() {
			sprite.destroy(false);
			sprite_1.destroy(false);
			sprite_2.destroy(false);
			sprite_3.destroy(false);
			sprite_4.destroy(false);
			sprite_5.destroy(false);
			sprite_6.destroy(false);
			sprite_7.destroy(false);
		}
	};
}

function RandomExamplesOpt(options) {
	this.options = options;
	this._state = (0, _shared.assign)(template.data(), options.data);

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root || this;
	this._yield = options._yield;
	this._bind = options._bind;

	if (!document.getElementById("svelte-887141927-style")) add_css();

	var oncreate = template.oncreate.bind(this);

	if (!options._root) {
		this._oncreate = [oncreate];
		this._beforecreate = [];
		this._aftercreate = [];
	} else {
		this._root._oncreate.push(oncreate);
	}

	this._fragment = create_main_fragment(this._state, this);

	if (options.target) {
		this._fragment.create();
		this._fragment.mount(options.target, options.anchor || null);

		this._lock = true;
		(0, _shared.callAll)(this._beforecreate);
		(0, _shared.callAll)(this._oncreate);
		(0, _shared.callAll)(this._aftercreate);
		this._lock = false;
	}
}

(0, _shared.assign)(RandomExamplesOpt.prototype, _shared.proto);

exports.default = RandomExamplesOpt;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _shared = __webpack_require__(0);

var template = function () {
	return {
		methods: {
			track: function track() {
				var _get = this.get(),
				    url = _get.url;

				console.log(url);
				if (window.ga != null) {
					window.ga('send', 'event', 'outbound', 'click', url, {
						transport: 'beacon',
						hitCallback: function hitCallback() {
							document.location = url;
						}
					});
				}
			}
		}
	};
}();

function encapsulateStyles(node) {
	(0, _shared.setAttribute)(node, "svelte-3193739540", "");
}

function add_css() {
	var style = (0, _shared.createElement)("style");
	style.id = 'svelte-3193739540-style';
	style.textContent = "[svelte-3193739540].colab-root,[svelte-3193739540] .colab-root{display:inline-block;background:rgba(255, 255, 255, 0.75);padding:4px 8px;border-radius:4px;font-size:11px!important;text-decoration:none;color:#aaa;border:none;font-weight:300;border:solid 1px rgba(0, 0, 0, 0.08);border-bottom-color:rgba(0, 0, 0, 0.15);text-transform:uppercase;line-height:16px}span[svelte-3193739540],[svelte-3193739540] span{background-image:url(images/colab.svg);background-repeat:no-repeat;background-size:20px;background-position-y:2px;display:inline-block;padding-left:24px;border-radius:4px;text-decoration:none}a[svelte-3193739540]:hover,[svelte-3193739540] a:hover{color:#666;background:white;border-color:rgba(0, 0, 0, 0.2)}";
	(0, _shared.appendNode)(style, document.head);
}

function create_main_fragment(state, component) {
	var a, text, span, text_1;

	function click_handler(event) {
		component.track();
	}

	return {
		create: function create() {
			a = (0, _shared.createElement)("a");
			text = (0, _shared.createText)("Reproduce in a\n    ");
			span = (0, _shared.createElement)("span");
			text_1 = (0, _shared.createText)("Notebook");
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			encapsulateStyles(a);
			a.href = state.url;
			a.className = "colab-root";
			(0, _shared.addListener)(a, "click", click_handler);
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(a, target, anchor);
			(0, _shared.appendNode)(text, a);
			(0, _shared.appendNode)(span, a);
			(0, _shared.appendNode)(text_1, span);
		},

		update: function update(changed, state) {
			if (changed.url) {
				a.href = state.url;
			}
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(a);
		},

		destroy: function destroy() {
			(0, _shared.removeListener)(a, "click", click_handler);
		}
	};
}

function ColabLink(options) {
	this.options = options;
	this._state = options.data || {};

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root || this;
	this._yield = options._yield;
	this._bind = options._bind;

	if (!document.getElementById("svelte-3193739540-style")) add_css();

	this._fragment = create_main_fragment(this._state, this);

	if (options.target) {
		this._fragment.create();
		this._fragment.mount(options.target, options.anchor || null);
	}
}

(0, _shared.assign)(ColabLink.prototype, template.methods, _shared.proto);

exports.default = ColabLink;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {"y_vars":[{"name":"l1","label":"l1","type":"number","default":0,"values":[0,-0.05,-0.5,-2.5]},{"name":"tv","label":"tv","type":"number","default":0,"values":[0,-0.05,-0.25,-1.5,-3]},{"name":"blur","label":"blur","type":"number","default":0,"values":[0,-0.1,-1,-5,-10]}],"x_vars":[{"name":"neurons","label":"neurons","type":"icon","values":["mixed4b:452","mixed4b:465","mixed4b:475","mixed4b:464","mixed4c:450","mixed4d:479"]},{"name":"steps","label":"steps","type":"number","default":4,"values":[1,32,128,256,2048]}],"size":68}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {"y_vars":[{"type":"number","name":"jitter","values":[0,1,8,32],"label":"jitter","default":2},{"type":"number","name":"random_rotate","values":[0,5,15,45,180],"label":"random_rotate"},{"type":"number","name":"random_scale","values":[1,1.1,1.2,1.8],"label":"random_scale"}],"x_vars":[{"type":"icon","name":"neurons","values":["mixed4b:452","mixed4b:465","mixed4b:475","mixed4b:464","mixed4c:450","mixed4d:479"],"label":"neurons"},{"type":"number","name":"steps","values":[1,32,128,256,2048],"label":"steps","default":4}],"size":68}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDJkNWFlYjAzODZiYjhkMDViYzIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWdyYW1zL1Nwcml0ZS5odG1sIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmVsdGUtZXh0cmFzL2Rpc3Qvc3ZlbHRlLWV4dHJhcy5lcy5qcyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvaW1hZ2VzL1ByZWNvbmRpdGlvbmVyLmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFncmFtcy9Hb29nbGVOZXRFeGFtcGxlcy5odG1sIiwid2VicGFjazovLy8uL3NyYy9kaWFncmFtcy9JbWFnZUFycmF5Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWdyYW1zL09wdEV4cGxvcmUuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhZ3JhbXMvT3B0RXhwbG9yZTIuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhZ3JhbXMvT3B0RXhwbG9yZUZsZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhZ3JhbXMvR3JhZEFydGlmYWN0cy5odG1sIiwid2VicGFjazovLy8uL3NyYy9kaWFncmFtcy9PcHRBbmRFeGFtcGxlcy5odG1sIiwid2VicGFjazovLy8uL3NyYy9kaWFncmFtcy9MaW5lYXJDb21iaW5hdGlvbnMuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhZ3JhbXMvT3B0UHJvZ3Jlc3MuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhZ3JhbXMvRXhhbXBsZXNPcHRDb21wYXJpc29uLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWdyYW1zL1JhbmRvbUV4YW1wbGVzT3B0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWdyYW1zL0NvbGFiTGluay5odG1sIiwid2VicGFjazovLy8uL3N0YXRpYy9pbWFnZXMvUGVuYWxpemVGcmVxLmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ltYWdlcy9UcmFuc2Zvcm1FeHBsb3JlLmpzb24iXSwibmFtZXMiOlsidGFyZ2V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZpZ3VyZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJkYXRhIiwic3JjX2NsYXNzIiwiaWNvbl9zcmNfY2xhc3MiLCJpY29uX3giLCJsYWJlbF9mdW5jIiwibiIsImkiLCJuX2ltYWdlcyIsIm5faWNvbnMiLCJzcHJpdGVfc2l6ZSIsInNpemUiLCJpY29uX3NjYWxlIiwiaG92ZXJfc2NhbGUiLCJzZWxlY3RlZCIsImJhY2t3YXJkcyIsIk9wdEV4cGxvcmVGbGV4X2NvbmZpZ3MiLCJPcHRFeHBsb3JlTmFpdmUiLCJjb25maWd1cmFibGUiLCJpY29uX3Zhcl92YWx1ZXMiLCJkZWNvcnJlbGF0ZSIsInRyYW5zZm9ybXMiLCJ2YXJfdmFsdWVzIiwibGVhcm5pbmdfcmF0ZSIsImNvbmZpZyIsInJlcXVpcmUiLCJQZW5hbGl6ZUZyZXEiLCJsMSIsInR2IiwiYmx1ciIsIlRyYW5zZm9ybUV4cGxvcmUiLCJqaXR0ZXIiLCJyYW5kb21fcm90YXRlIiwicmFuZG9tX3NjYWxlIiwiT3B0RXhwbG9yZSIsImFwcCIsImxvYWRfc3ByaXRlbWFwIiwiZGl2IiwidXJsIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLFNBQVM7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLGtCQUFrQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLGtCQUFrQjtBQUNsQztBQUNBO0FBQ0Esa0JBQWtCLDRCQUE0QjtBQUM5QztBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLGtCQUFrQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1COztBQUVuQixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBLDRCQUE0QixjQUFjO0FBQzFDOztBQUVBLDJCQUEyQixjQUFjLEdBQUc7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGtFQUFrRSxhQUFhOztBQUUvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLHFCQUFxQjtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVE7Ozs7Ozs7Ozs7Ozs7Ozs7MkJDOWRBO0FBQ047QUFDTSx3QkFBRztBQUNMO0FBQ1csZUFBVztBQUNULGlCQUFLO0FBQ0osa0JBQUs7QUFDYixVQUFLO0FBQ1IsT0FBRztBQUNILE9BQUc7QUFDQyxXQUFFLENBQUksS0FBSztBQUNYLFdBQU87QUFDRCxpQkFBRztBQUNPLDJCQUFPO0FBQ3RCLFlBQU87QUFDSixlQUNWO0FBYk07QUFjUjs7QUFDTztBQUNFLCtCQUFjLGFBQUcsR0FBYztBQUE3QixXQUE2QyxjQUFFOztBQUNqRCwrQkFBYyxhQUFHLEdBQWM7QUFBN0IsV0FBNkMsY0FBRTs7QUFDakQsYUFBRSxrQkFBWSxhQUFjLGNBQVUsVUFBTyxPQUFNLE1BQU8sT0FBSztBQUNyRSxXQUFlLFdBQWMsY0FBUSxNQUFHLE1BQUssSUFBZTtBQUM3RDtBQUNPLGFBQUUsa0JBQVksYUFBYyxjQUFVLFVBQU8sT0FBTSxNQUFPLE9BQUs7QUFDckUsV0FBZSxXQUFjLGNBQVEsTUFBRyxNQUFLLElBQWU7QUFDN0Q7QUFDZ0IsaURBQWUsY0FBYTtBQUExQixXQUEyQyxlQUFjOztBQUN2RSx5QkFBTyxNQUFtQjtBQUF4QixXQUFpQyxPQUFrQjs7QUFDcEQsMkJBQW9CLG1CQUFNO0FBQXhCLFdBQTZCLEVBQW1CLG9CQUFNLFFBQUU7O0FBQ2xELG1CQUFFLHdCQUFzQix1QkFBSztBQUN6QyxRQUFxRztBQUNyRyxRQUF5Qix1QkFBRTtBQUNvQjtBQUM5QztBQUNELFdBQVc7QUFDWjtBQUNTLG1DQUFTO0FBQVAsV0FBa0IsU0FBb0Isb0JBQVM7O0FBQ2hELHFDQUFRO0FBQU4sV0FBZ0IsUUFBYyxjQUM1Qzs7QUFyQlM7QUFzQkYsZ0NBQUc7O0FBSWY7QUEzQ2lCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkRBbkU4QjsyREFBOEM7Z0VBQzdELDBCQUFnQjt5REFDcEI7OERBQ0UsMEJBQWdCOzZEQUNyQjt1REFDQSxhQUFvQjtxREFDaEI7d0RBQ007b0RBQ1I7bURBQ0YsWUFBYyxjQUFTOzswREFFZjs7Ozs7Ozs7Ozs7NkZBWGM7Ozs7OzREQUE4Qzs7OztpRUFDN0QsMEJBQWdCOzs7OzBEQUNwQjs7OzsrREFDRSwwQkFBZ0I7Ozs7OERBQ3JCOzs7O3dEQUNBLGFBQW9COzs7O3NEQUNoQjs7Ozt5REFDTTs7OztxREFDUjs7OztvREFDRixZQUFjLGNBQVM7Ozt3RkFFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCakM7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFdBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLDRDQUE0QyxjQUFjLEVBQUU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHVCQUF1QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDJCQUEyQixtQkFBbUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsdUJBQXVCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsMkJBQTJCLHVCQUF1QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVE7Ozs7Ozs7QUNyZVIsa0JBQWtCLFdBQVcsNkZBQTZGLEVBQUUsbUdBQW1HLEVBQUUsaUhBQWlILGFBQWEsZ0pBQWdKLEVBQUUsd0ZBQXdGLFk7Ozs7Ozs7OztBQ2N6a0I7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFJQTs7QUFWQTtBQXBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFvQkEsZ0NBQXNCLEVBQUNBLFFBQVFDLFNBQVNDLGNBQVQsQ0FBd0Isb0JBQXhCLENBQVQsRUFBdEI7O0FBRUE7O0FBRUE7QUFDRSxNQUFNQyxTQUFTRixTQUFTQyxjQUFULENBQXdCLGlDQUF4QixDQUFmO0FBQ0FDLFNBQU9DLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQVc7QUFDMUMsd0NBQTBCLEVBQUNKLFFBQVFHLE1BQVQsRUFBMUI7QUFDRCxHQUZEO0FBR0Q7O0FBRUQ7QUFDRSxNQUFNQSxVQUFTRixTQUFTQyxjQUFULENBQXdCLGtDQUF4QixDQUFmO0FBQ0FDLFVBQU9DLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQVc7QUFDMUMsb0NBQXNCLEVBQUNKLFFBQVFHLE9BQVQsRUFBdEI7QUFDRCxHQUZEO0FBR0Q7O0FBRUQ7QUFDRSxNQUFNQSxXQUFTRixTQUFTQyxjQUFULENBQXdCLGNBQXhCLENBQWY7QUFDQUMsV0FBT0MsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBVztBQUMxQyw4QkFBZ0IsRUFBQ0osUUFBUUcsUUFBVCxFQUFoQjtBQUNELEdBRkQ7QUFHRDs7QUFFRDtBQUNFLE1BQU1BLFdBQVNGLFNBQVNDLGNBQVQsQ0FBd0IscUJBQXhCLENBQWY7QUFDQUMsV0FBT0MsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBVztBQUMxQyxxQ0FBdUIsRUFBQ0osUUFBUUcsUUFBVCxFQUF2QjtBQUNELEdBRkQ7QUFHRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDRSxNQUFNQSxXQUFTRixTQUFTQyxjQUFULENBQXdCLDJCQUF4QixDQUFmO0FBQ0FDLFdBQU9DLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQVc7QUFDMUMsaUNBQW1CLEVBQUNKLFFBQVFHLFFBQVQsRUFBbkI7QUFDRCxHQUZEO0FBR0Q7O0FBRUQ7QUFDRSxNQUFNQSxXQUFTRixTQUFTQyxjQUFULENBQXdCLHFCQUF4QixDQUFmO0FBQ0FDLFdBQU9DLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQVc7QUFDMUMsZ0NBQWtCLEVBQUNKLFFBQVFHLFFBQVQsRUFBbEI7QUFDRCxHQUZEO0FBR0Q7O0FBRUQ7O0FBRUE7QUFDRSxNQUFNQSxXQUFTRixTQUFTQyxjQUFULENBQXdCLGtCQUF4QixDQUFmO0FBQ0FDLFdBQU9DLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQVc7QUFDMUMsNkJBQWUsRUFBQ0osUUFBUUcsUUFBVDtBQUNiRSxZQUFNO0FBQ0pDLG1CQUFXLG9CQURQO0FBRUpDLHdCQUFnQixvQkFGWjtBQUdKQyxnQkFBUSxDQUhKO0FBSUpDLG9CQUFZLG9CQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxpQkFBVSxDQUNwQixPQURvQixFQUVwQixvRUFGb0IsRUFHcEIsNERBSG9CLEVBSXBCLHFDQUpvQixFQUtsQkQsQ0FMa0IsQ0FBVjtBQUFBLFNBSlI7QUFVSkUsa0JBQVUsQ0FWTjtBQVdKQyxpQkFBUyxFQVhMO0FBWUpDLHFCQUFhLEdBWlQ7QUFhSkMsY0FBTSxHQWJGO0FBY0pDLG9CQUFZLENBZFI7QUFlSkMscUJBQWEsQ0FmVDtBQWdCSkMsa0JBQVUsQ0FoQk47QUFpQkpDLG1CQUFXO0FBakJQO0FBRE8sS0FBZjtBQXFCRCxHQXRCRDtBQXVCRDs7QUFFRDtBQUNFLE1BQU1oQixXQUFTRixTQUFTQyxjQUFULENBQXdCLGVBQXhCLENBQWY7QUFDQUMsV0FBT0MsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBVztBQUMxQyw2QkFBZSxFQUFDSixRQUFRRyxRQUFUO0FBQ2ZFLFlBQU07QUFDSkMsbUJBQVcsc0JBRFA7QUFFSkMsd0JBQWdCLHNCQUZaO0FBR0pDLGdCQUFRLENBSEo7QUFJSkMsb0JBQVksb0JBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ3BCLGNBQUlELEtBQUssQ0FBVCxFQUFZO0FBQ1YsbUJBQU8sQ0FDTCxvQkFESyxFQUVMLG9CQUZLLEVBR0wsb0JBSEssRUFJTCxvQkFKSyxFQUtMLG9CQUxLLEVBTUwsb0JBTkssRUFPTCxvQkFQSyxFQVFMLG9CQVJLLEVBU0wsb0JBVEssRUFVTEMsQ0FWSyxDQUFQO0FBV0QsV0FaRCxNQVlPLElBQUlELEtBQUssQ0FBVCxFQUFZO0FBQ2pCLG1CQUFPLENBQ0wsb0JBREssRUFFTCxvQkFGSyxFQUdMLG9CQUhLLEVBSUwsb0JBSkssRUFLTCxvQkFMSyxFQU1MLG9CQU5LLEVBT0wsb0JBUEssRUFRTCxvQkFSSyxFQVNMLG9CQVRLLEVBVUxDLENBVkssQ0FBUDtBQVdELFdBWk0sTUFZQTtBQUNMLG1CQUFPLEVBQVA7QUFDRDtBQUNGLFNBaENHO0FBaUNKQyxrQkFBVSxDQWpDTjtBQWtDSkMsaUJBQVMsQ0FsQ0w7QUFtQ0pDLHFCQUFhLEdBbkNUO0FBb0NKQyxjQUFNLEdBcENGO0FBcUNKQyxvQkFBWSxDQXJDUjtBQXNDSkMscUJBQWEsQ0F0Q1Q7QUF1Q0pDLGtCQUFVLENBdkNOO0FBd0NKQyxtQkFBVztBQXhDUCxPQURTLEVBQWY7QUEyQ0QsR0E1Q0Q7QUE2Q0Q7O0FBRUQ7O0FBRUEsSUFBTUMseUJBQXlCOztBQUU3QkMsbUJBQWlCO0FBQ2ZDLGtCQUFjLENBQUMsU0FBRCxFQUFZLGVBQVosQ0FEQztBQUVmQyxxQkFBaUIsRUFBQ0MsYUFBYSxDQUFkLEVBQWlCQyxZQUFZLENBQTdCLEVBRkY7QUFHZkMsZ0JBQVksRUFBQ0YsYUFBYSxDQUFkLEVBQWlCRyxlQUFlLENBQWhDLEVBQW1DRixZQUFZLENBQS9DLEVBSEc7QUFJZkcsWUFBUSxtQkFBQUMsQ0FBUSxDQUFSO0FBSk8sR0FGWTs7QUFTN0JDLGdCQUFjO0FBQ1pSLGtCQUFjLENBQUMsU0FBRCxFQUFZLElBQVosRUFBa0IsSUFBbEIsRUFBd0IsTUFBeEIsQ0FERjtBQUVaSSxnQkFBWSxFQUFDSyxJQUFJLENBQUwsRUFBUUMsSUFBSSxDQUFaLEVBQWVDLE1BQU0sQ0FBckIsRUFGQTtBQUdaVixxQkFBaUIsRUFBQ1EsSUFBSSxDQUFMLEVBQVFDLElBQUksQ0FBWixFQUFlQyxNQUFNLENBQXJCLEVBSEw7QUFJWkwsWUFBUSxtQkFBQUMsQ0FBUSxFQUFSO0FBSkksR0FUZTs7QUFnQjdCSyxvQkFBa0I7QUFDaEJaLGtCQUFjLENBQUMsU0FBRCxFQUFZLFFBQVosRUFBc0IsZUFBdEIsRUFBdUMsY0FBdkMsQ0FERTtBQUVoQkMscUJBQWlCLEVBQUNZLFFBQVEsQ0FBVCxFQUFZQyxlQUFlLENBQTNCLEVBQThCQyxjQUFjLENBQTVDLEVBRkQ7QUFHaEJYLGdCQUFZLEVBQUNTLFFBQVEsQ0FBVCxFQUFZQyxlQUFlLENBQTNCLEVBQThCQyxjQUFjLENBQTVDLEVBSEk7QUFJaEJULFlBQVEsbUJBQUFDLENBQVEsRUFBUjtBQUpRLEdBaEJXOztBQXVCN0JTLGNBQVk7QUFDVmhCLGtCQUFjLENBQUMsU0FBRCxFQUFZLGVBQVosRUFBNkIsQ0FBQyxhQUFELEVBQWdCLFlBQWhCLENBQTdCLENBREo7QUFFVkMscUJBQWlCLEVBQUNDLGFBQWEsQ0FBZCxFQUFpQkMsWUFBWSxDQUE3QixFQUZQO0FBR1ZDLGdCQUFZLEVBQUNGLGFBQWEsQ0FBZCxFQUFpQkcsZUFBZSxDQUFoQyxFQUFtQ0YsWUFBWSxDQUEvQyxFQUhGO0FBSVZHLFlBQVEsbUJBQUFDLENBQVEsQ0FBUjtBQUpFO0FBdkJpQixDQUEvQjs7QUErQkE7QUFDRSxNQUFNMUIsV0FBU0YsU0FBU0MsY0FBVCxDQUF3QixnQkFBeEIsQ0FBZjtBQUNBQyxXQUFPQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxZQUFXO0FBQzFDLFFBQU1tQyxNQUFNLDZCQUFtQixFQUFDdkMsUUFBUUcsUUFBVCxFQUFuQixDQUFaO0FBQ0FvQyxRQUFJQyxjQUFKLENBQW1CLGdCQUFuQixFQUFxQ3BCLHVCQUF1QkMsZUFBNUQ7QUFDRCxHQUhEO0FBSUQ7O0FBRUQ7QUFDRSxNQUFNbEIsV0FBU0YsU0FBU0MsY0FBVCxDQUF3QixjQUF4QixDQUFmO0FBQ0FDLFdBQU9DLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQVc7QUFDMUMsUUFBTW1DLE1BQU0sNkJBQW1CLEVBQUN2QyxRQUFRRyxRQUFULEVBQW5CLENBQVo7QUFDQW9DLFFBQUlDLGNBQUosQ0FBbUIsZ0JBQW5CLEVBQXFDcEIsdUJBQXVCa0IsVUFBNUQ7QUFDRCxHQUhEO0FBSUQ7O0FBRUQ7QUFDRSxNQUFNbkMsWUFBU0YsU0FBU0MsY0FBVCxDQUF3QiwrQkFBeEIsQ0FBZjtBQUNBQyxZQUFPQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxZQUFXO0FBQzFDLFFBQU1tQyxNQUFNLDZCQUFtQixFQUFDdkMsUUFBUUcsU0FBVCxFQUFuQixDQUFaO0FBQ0FvQyxRQUFJQyxjQUFKLENBQW1CLGtCQUFuQixFQUF1Q3BCLHVCQUF1QmMsZ0JBQTlEO0FBQ0QsR0FIRDtBQUlEOztBQUVEO0FBQ0UsTUFBTS9CLFlBQVNGLFNBQVNDLGNBQVQsQ0FBd0IsNkJBQXhCLENBQWY7QUFDQUMsWUFBT0MsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBVztBQUMxQyxRQUFNbUMsTUFBTSw2QkFBbUIsRUFBQ3ZDLFFBQVFHLFNBQVQsRUFBbkIsQ0FBWjtBQUNBb0MsUUFBSUMsY0FBSixDQUFtQixlQUFuQixFQUFvQ3BCLHVCQUF1QlUsWUFBM0Q7QUFDRCxHQUhEO0FBSUQ7O0FBSUQ7QUFDRSxNQUFNVyxNQUFNeEMsU0FBU0MsY0FBVCxDQUF3QixFQUF4QixDQUFaO0FBQ0EsTUFBSXFDLE1BQU0sd0JBQWMsRUFBQ3ZDLFFBQVF5QyxHQUFULEVBQWNwQyxNQUFNO0FBQzFDcUMsV0FBSztBQURxQyxLQUFwQixFQUFkLENBQVY7QUFHRDs7QUFJRDtBQUNFLE1BQU1ELE9BQU14QyxTQUFTQyxjQUFULENBQXdCLGdCQUF4QixDQUFaO0FBQ0EsTUFBSXFDLE1BQU0sd0JBQWMsRUFBQ3ZDLFFBQVF5QyxJQUFULEVBQWNwQyxNQUFNO0FBQzFDcUMsV0FBSztBQURxQyxLQUFwQixFQUFkLENBQVY7QUFHRDs7QUFFRDtBQUNFLE1BQU1ELFFBQU14QyxTQUFTQyxjQUFULENBQXdCLGlCQUF4QixDQUFaO0FBQ0EsTUFBSXFDLE1BQU0sd0JBQWMsRUFBQ3ZDLFFBQVF5QyxLQUFULEVBQWNwQyxNQUFNO0FBQzFDcUMsV0FBSztBQURxQyxLQUFwQixFQUFkLENBQVY7QUFHRDs7QUFFRDtBQUNFLE1BQU1ELFFBQU14QyxTQUFTQyxjQUFULENBQXdCLGNBQXhCLENBQVo7QUFDQSxNQUFJcUMsTUFBTSx3QkFBYyxFQUFDdkMsUUFBUXlDLEtBQVQsRUFBY3BDLE1BQU07QUFDMUNxQyxXQUFLO0FBRHFDLEtBQXBCLEVBQWQsQ0FBVjtBQUdEOztBQUVEO0FBQ0UsTUFBTUQsUUFBTXhDLFNBQVNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBWjtBQUNBLE1BQUlxQyxNQUFNLHdCQUFjLEVBQUN2QyxRQUFReUMsS0FBVCxFQUFjcEMsTUFBTTtBQUMxQ3FDLFdBQUs7QUFEcUMsS0FBcEIsRUFBZCxDQUFWO0FBR0Q7O0FBRUQ7QUFDRSxNQUFNRCxRQUFNeEMsU0FBU0MsY0FBVCxDQUF3QixxQkFBeEIsQ0FBWjtBQUNBLE1BQUlxQyxNQUFNLHdCQUFjLEVBQUN2QyxRQUFReUMsS0FBVCxFQUFjcEMsTUFBTTtBQUMxQ3FDLFdBQUs7QUFEcUMsS0FBcEIsRUFBZCxDQUFWO0FBR0Q7O0FBRUQ7QUFDRSxNQUFNRCxRQUFNeEMsU0FBU0MsY0FBVCxDQUF3Qiw0QkFBeEIsQ0FBWjtBQUNBLE1BQUlxQyxNQUFNLHdCQUFjLEVBQUN2QyxRQUFReUMsS0FBVCxFQUFjcEMsTUFBTTtBQUMxQ3FDLFdBQUs7QUFEcUMsS0FBcEIsRUFBZCxDQUFWO0FBR0Q7O0FBRUQ7QUFDRSxNQUFNRCxRQUFNeEMsU0FBU0MsY0FBVCxDQUF3QiwyQkFBeEIsQ0FBWjtBQUNBLE1BQUlxQyxNQUFNLHdCQUFjLEVBQUN2QyxRQUFReUMsS0FBVCxFQUFjcEMsTUFBTTtBQUMxQ3FDLFdBQUs7QUFEcUMsS0FBcEIsRUFBZCxDQUFWO0FBR0Q7O0FBRUQ7QUFDRSxNQUFNRCxRQUFNeEMsU0FBU0MsY0FBVCxDQUF3QixnQ0FBeEIsQ0FBWjtBQUNBLE1BQUlxQyxNQUFNLHdCQUFjLEVBQUN2QyxRQUFReUMsS0FBVCxFQUFjcEMsTUFBTTtBQUMxQ3FDLFdBQUs7QUFEcUMsS0FBcEIsRUFBZCxDQUFWO0FBR0Q7O0FBRUQ7QUFDRSxNQUFNRCxRQUFNeEMsU0FBU0MsY0FBVCxDQUF3QixxQ0FBeEIsQ0FBWjtBQUNBLE1BQUlxQyxNQUFNLHdCQUFjLEVBQUN2QyxRQUFReUMsS0FBVCxFQUFjcEMsTUFBTTtBQUMxQ3FDLFdBQUs7QUFEcUMsS0FBcEIsRUFBZCxDQUFWO0FBR0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQ2hMTztBQUdOLFVBQWMsTUFBRSxHQUFDO0FBQ2YsZUFBZSxHQUFPLE9BQUksY0FBRyxHQUFHO0FBQUwsVUFBYTtHQUE1QjtBQUNiOztBQUVEO0FBQ00sd0JBQUc7QUFDTDtBQUNJLFFBQUUsQ0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUk7QUFDakYsVUFBSztBQUNHLGtCQUFLO0FBQ1osV0FBRSxDQUNVLGlCQUNBLGlCQUNBLGlCQUNXLDRCQUUzQjtBQUNXLGtCQUFFLENBQ0wsU0FDRyxZQUNBLFlBQ0gsU0FHVjtBQWxCTTtBQW1CUjs7QUFDTyxZQUFFO0FBQVc7O0FBQ2YsUUFBRyxLQUFhLFdBQXdCO0FBQ3hDLFFBQUcsR0FBUyxxQkFBUztBQUFOLFdBQWUsTUFBSSxJQUFDLEVBQUssTUFBTyxNQUFRLFVBQU0sTUFBUzs7QUFDdEUsUUFBSTtBQUNGLFVBQU0sS0FBRyxHQUFRLFVBQU0sTUFDMUI7QUFGTTtBQUlXO0FBQ2YsV0FBRSxFQUViO0FBaENpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7eUNBbkhGLE1BQUc7Ozs7c0NBQWI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkNBQVUsTUFBRzs7O3lDQUFiOzs7Ozs7Ozs7Ozs7OztvREFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVFpRCxhQUFHOzs7MEJBQW9CLE1BQUc7Ozs7MkNBSjNELE1BQUc7Ozs7d0NBQWI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZDQUFVLE1BQUc7OzsyQ0FBYjs7Ozs7Ozs7Ozs7Ozs7c0RBQUE7OztzRUFJMkMsYUFBRzs7OzsrREFBb0IsTUFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBSGpDO0tBQVE7Ozs7bUNBQWE7Ozs7MkNBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JBQXZDO3NCQUFROztnQ0FBYTs7Ozt3Q0FBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQzhGOUU7QUFFTixVQUFjLE1BQUUsR0FBVSxVQUFDO0FBQ3pCLE1BQU8sTUFBTTtBQUNiLE1BQVksVUFBRTtBQUNaLFFBQUssSUFBSyxJQUFJLEdBQUcsSUFBSSxHQUFFLEVBQUc7QUFBSyxRQUFLLEtBQUUsSUFBRSxJQUFJOztBQUM3QyxTQUFNO0FBQ0wsUUFBSyxJQUFLLElBQUksR0FBRyxJQUFJLEdBQUUsRUFBRztBQUFLLFFBQUssS0FBSTs7QUFDekM7QUFDRCxTQUFXO0FBQ1o7QUFDRDtBQUNNLHdCQUFHO0FBQ0w7QUFDUyxhQUFHO0FBQ0YsY0FBRztBQUNILGNBQUc7QUFDQSxpQkFBSztBQUNaLFVBQUs7QUFDQSxlQUFJO0FBQ0g7QUFBRyxZQUFZLFdBQUk7O0FBQ2Ysb0JBQUk7QUFDUixnQkFBSztBQUNOLGVBQ1Y7QUFYTTtBQVlSOztBQUNPO0FBQ0MsNkJBQVUsU0FBVztBQUFuQixXQUE2QixNQUFRLFNBQVk7O0FBQ2xEO0FBQVUsV0FBUyxNQUFTLFVBSTFDOztBQU5jO0FBZkc7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQTdHQTs7OztzQ0FBWjs7OztnQ0FlYTs7Ozt3Q0FBYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBZlk7Ozt5Q0FBWjs7Ozs7Ozs7Ozs7Ozs7b0RBQUE7OztrQ0FlYTs7OzJDQUFiOzs7Ozs7Ozs7Ozs7Ozt3REFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkFUMkIsbUJBQVk7S0FDaEMsQ0FBRSxVQUFZLGNBQUUsSUFBSSxVQUFXO0tBQy9CLENBQUUsVUFBWSxjQUFFLFVBQVMsZUFBVztlQUN4QixXQUFZLG9CQUFXOzs7d0NBTEY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBSGIsWUFBTSxDQUFmLEdBQTJCLGFBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7d0dBQXZCLFlBQU0sQ0FBZixHQUEyQixhQUFLOzs7Ozs7OztxRkFLdkIsbUJBQVk7aUVBQ2hDLENBQUUsVUFBWSxjQUFFLElBQUksVUFBVztnRUFDL0IsQ0FBRSxVQUFZLGNBQUUsVUFBUyxlQUFXOytFQUN4QixXQUFZLG9CQUFXOztxQ0FMRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQW9Ca0IsV0FBRSxXQUFXOztnQ0FIbEUsWUFDVzs7d0NBSmY7Ozs7bUNBQ0E7Ozs7MENBQ0E7Ozs7Z0NBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2REFJcUI7Ozs7Ozs7Ozs7Ozs7Ozs0Q0FIaEM7MEJBQ1c7O3FDQUpmOzs7O2dDQUNBOzs7O3VDQUNBOzs7OzZCQUFlOzs7Ozs7Ozs7OERBSXFCOzs7d0dBQXFCLFdBQUUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQXRCdEQsSUFBQyxFQUFTLFVBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQ3NFN0I7QUFFTixVQUFjLE1BQUUsR0FBQztBQUNmLE1BQU8sTUFBTTtBQUNiLE9BQUssSUFBSyxJQUFJLEdBQUcsSUFBSSxHQUFFLEVBQUc7QUFBSyxPQUFLLEtBQUk7R0FDeEMsT0FBVztBQUNaO0FBQ0Q7QUFDTSx3QkFBRztBQUNMO0FBQ1UsY0FBRztBQUNBLGlCQUFLO0FBQ1osVUFBSztBQUNILFlBQU87QUFDVCxVQUFPO0FBQ0osYUFBTztBQUNULFdBQU87QUFDQyxtQkFBRztBQUNFLHdCQUFFLENBQUksS0FBTSxNQUFPLE9BQVM7QUFDcEM7QUFBRyxZQUFXLFVBQUssSUFBSyxLQUFJLElBQUUsR0FBSTs7QUFDcEMsY0FBRztBQUNKLGFBQUUsQ0FBRSxHQUFFLEdBQUUsR0FDaEI7QUFiTTtBQWNSOztBQUNPO0FBQ0wsaUJBQVMsUUFBTSxNQUFTLFNBQU8sT0FBZSxlQUFvQjtBQUFoRSxXQUNFLElBQU0sUUFBSSxJQUFRLFVBQUksSUFBYyxnQkFDbEMsSUFBbUIsbUJBQU8sU0FBSyxPQUMvQixJQUFtQixtQkFBTyxTQUFPOztBQUNoQztBQUFVLFdBQVMsTUFJakM7O0FBVGM7QUFqQkc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFwRWdDLG1CQUFDLE9BQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFlOUM7Ozs7c0NBQWI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQTFCa0IsT0FBSyxPQUFNLFlBQVMsV0FBRzs7Ozs7dUNBWXdDLG1CQUFPLFNBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQWF6QyxPQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFiZjs7Ozs7OzsyQkFHSDs7Ozs7OzsyQkFDRjs7Ozs7Ozs7MkJBR0c7Ozs7Ozs7MkJBQ0Y7Ozs7Ozs7Ozs7Ozs7OztnREFwQmYsT0FBSyxPQUFNLFlBQVMsV0FBRzs7O3VHQVdDLG1CQUFDLE9BQWdCOzs7O2tGQUNzQixtQkFBTyxTQUFFOzs7O3VCQUFyRDs7MkJBR0g7OzJCQUNGOzsyQkFHRzs7MkJBQ0Y7Ozt1REFLZ0IsT0FBRzs7O2dDQUN2Qzs7O3lDQUFiOzs7Ozs7Ozs7Ozs7OztvREFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBSzBCLFdBQUc7Ozs7Ozs7Ozs7Ozs7MkNBSlYsT0FBSyxPQUFNLE1BQUU7a0RBQW1CO29EQUFvQixPQUFHOytDQUNuRCxPQUFLLGFBQWEsZUFBRTs4REFBNEIsYUFBWTs7b0RBQ3JCO3FEQUEwQjttRUFBeUMsY0FBRSxtQkFBbUIsb0JBQUU7Ozs7Ozs7Ozs7Ozs7OzRDQUZySSxPQUFLLE9BQU0sTUFBRTs7OzttREFBbUI7cURBQW9CLE9BQUc7Ozs7Z0RBQ25ELE9BQUssYUFBYSxlQUFFOytEQUE0QixhQUFZOzs7O3FEQUNyQjtzREFBMEI7Ozs7b0VBQXlDLGNBQUUsbUJBQW1CLG9CQUFFOzs7b0ZBRTlILFdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQ3lDNUI7QUFFTixVQUFjLE1BQUUsR0FBQztBQUNmLE1BQU8sTUFBTTtBQUNiLE9BQUssSUFBSyxJQUFJLEdBQUcsSUFBSSxHQUFFLEVBQUc7QUFBSyxPQUFLLEtBQUk7R0FDeEMsT0FBVztBQUNaO0FBQ0Q7QUFDTSx3QkFBRztBQUNMO0FBQ1UsY0FBRztBQUNBLGlCQUFJO0FBQ1gsVUFBSztBQUNILFlBQU07QUFDUixVQUFPO0FBQ0osYUFBTTtBQUNSLFdBQU87QUFDQyxtQkFBRztBQUNFLHdCQUFFLENBQUUsR0FBTSxNQUFNLE1BQU0sTUFBTSxNQUFRO0FBQzVDO0FBQUcsWUFBVyxVQUFLLElBQUssS0FBSSxJQUFFLEdBQUk7O0FBQ3BDLGNBQUc7QUFDSixhQUFFLENBQUUsR0FBRSxHQUFFLEdBQUUsR0FDbEI7QUFiTTtBQWNSOztBQUNPO0FBQ0wsaUJBQVMsUUFBTSxNQUFTLFNBQU8sT0FBZSxlQUFvQjtBQUFoRSxXQUNFLElBQU0sUUFBSSxJQUFRLFVBQUksSUFBYyxnQkFDbEMsSUFBbUIsbUJBQU8sU0FBSyxPQUMvQixJQUFtQixtQkFBTyxTQUFPOztBQUNoQztBQUFVLFdBQVMsTUFJakM7O0FBVGM7QUFqQkc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQW5FZ0MsbUJBQUMsT0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFWM0M7Ozs7c0NBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQXlCUzs7Ozt3Q0FBYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQTNCa0IsT0FBSyxPQUFNLFlBQVMsV0FBRzs7Ozs7Ozs7Ozs7eUVBYXNDLG1CQUFPLFNBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBYXZDLE9BQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBVmxCOzs7Ozs7OzJCQUNGOzs7Ozs7OzsyQkFHRzs7Ozs7OzsyQkFDRjs7Ozs7Ozs7Ozs7Ozs7O2dEQXJCZixPQUFLLE9BQU0sWUFBUyxXQUFHOzs7Z0NBRXpCOzs7eUNBQVo7Ozs7Ozs7Ozs7Ozs7O29EQUFBOzs7dUdBVXNDLG1CQUFDLE9BQWdCOzs7O3dGQUNvQixtQkFBTyxTQUFFOzs7O3lCQUd0RDs7MkJBQ0Y7OzJCQUdHOzsyQkFDRjs7O3VEQUtnQixPQUFHOzs7a0NBQ3ZDOzs7MkNBQWI7Ozs7Ozs7Ozs7Ozs7O3dEQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQXZCOEIsWUFBTSxDQUFmLEdBQTJCLGFBQUs7Ozs7Ozs7Ozs7bUVBRzRCLGVBQUUsSUFBRSxVQUFRLFFBQVEseUJBQW1CLGNBQUc7Ozs7Ozs7Ozs7Ozs7d0dBSDdGLFlBQU0sQ0FBZixHQUEyQixhQUFLOzs7Ozs7OztvRUFHNEIsZUFBRSxJQUFFLFVBQVEsUUFBUSx5QkFBbUIsY0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBeUJqRyxXQUFHOzs7Ozs7Ozs7Ozs7OzJDQUpWLE9BQUssT0FBSyxLQUFDO2tEQUFvQjtvREFBb0IsT0FBRzsrQ0FDbEQsT0FBSyxhQUFhLGVBQUU7OERBQTRCLGFBQVk7O29EQUNyQjtxREFBMEI7bUVBQTBDLGVBQUUsWUFBUyxpQkFBUSxRQUFRLHlCQUFtQixvQkFBRTs7Ozs7Ozs7Ozs7Ozs7NENBRi9KLE9BQUssT0FBSyxLQUFDOzs7O21EQUFvQjtxREFBb0IsT0FBRzs7OztnREFDbEQsT0FBSyxhQUFhLGVBQUU7K0RBQTRCLGFBQVk7Ozs7cURBQ3JCO3NEQUEwQjs7OztvRUFBMEMsZUFBRSxZQUFTLGlCQUFRLFFBQVEseUJBQW1CLG9CQUFFOzs7b0ZBRXhKLFdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBM0JULElBQUMsRUFBUyxVQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQzJMbEM7QUFHTixVQUFjLE1BQUUsR0FBQztBQUNmLE1BQU8sTUFBTTtBQUNiLE9BQUssSUFBSyxJQUFJLEdBQUcsSUFBSSxHQUFFLEVBQUc7QUFBSyxPQUFLLEtBQUk7R0FDeEMsT0FBVztBQUNaOztBQUVELFVBQW1CLFdBQUUsR0FBRyxHQUFDO0FBQ3ZCLE1BQU8sTUFBTTtBQUNiLE9BQUssSUFBSyxLQUFLO0FBQUssT0FBRyxLQUFJLEVBQUk7UUFDMUIsSUFBSyxLQUFLO0FBQUssT0FBRyxLQUFJLEVBQUk7QUFBL0IsR0FDQSxPQUFXO0FBQ1o7O0FBRUQsVUFBeUIsaUJBQVMsVUFBTSxNQUFDO0FBQ3ZDLE1BQU8sTUFBSztBQUNaLE1BQWUsY0FBSztBQUNwQixNQUFnQixlQUFNO0FBQ3RCLE9BQUssSUFBSyxJQUFXLFNBQU8sU0FBRSxHQUFHLEtBQUssR0FBSyxLQUFDO0FBQzlCLGdCQUFLLEtBQWM7QUFDcEIsa0JBQVksU0FBRyxHQUFPLE9BQVE7QUFDMUM7QUFDVyxlQUFXO0FBQ3ZCLE9BQUssSUFBSyxJQUFJLEdBQUcsSUFBVyxTQUFPLFFBQUssS0FBQztBQUN2QyxPQUFXLFVBQVcsU0FBSTtBQUMxQixPQUFPLE1BQU8sS0FBUSxRQUFNLFNBQU07QUFDL0IsVUFBTyxNQUFlLGFBQUk7QUFDOUI7QUFDRCxTQUFXO0FBQ1o7O0FBRUQsVUFBMkIsbUJBQUssTUFBTTtBQUFDOzs7OztBQUNoQyx3QkFBZTtBQUFDLFFBQVQ7O0FBQ1YsUUFBTyxJQUFLLFFBQVEsTUFBQztBQUNuQixZQUFVO0FBQ1g7QUFDRjs7Ozs7Ozs7Ozs7Ozs7OztBQUNELE1BQVcsYUFBVztBQUFHLFVBQUssRUFBTztHQUFuQjtBQUNYLFVBQU0sTUFBZ0Isa0JBQU0sT0FBUyxTQUFRLFFBQU87QUFDNUQ7O0FBRUQsVUFBaUIsU0FBRSxHQUFFLEdBQUM7QUFDcEIsTUFBTyxNQUFNO0FBQ1YsTUFBRyxLQUFLO0FBQ1gsU0FBVztBQUNaOztBQUdELFVBQXVCLGVBQUssTUFBVSxVQUFFO0FBQ2xDLE9BQUksSUFBQyxFQUFZLGFBQVcsWUFBTyxPQUFjOztBQUVyRCxNQUFjLFdBQVcsU0FBTyxPQUFPLE9BQU8sT0FBUyxTQUFPLE9BQVM7QUFDdkUsTUFBYyxvQkFBa0I7QUFBRSxVQUFLLEVBQUssUUFBVyxXQUFLLEVBQUssUUFBVztHQUFuRCxFQUF1RDtBQUNoRixNQUFxQjtBQUNSLGdCQUFVLFNBQU8sT0FBSztBQUMzQixXQUFVLFNBQU8sT0FBTztBQUN4QixXQUFVLFNBQU8sT0FBTztBQUNsQiwwQkFDSDtBQUFFLFdBQUssRUFBSyxRQUFXLFdBQUssRUFBTyxPQUFPLFNBQUs7SUFEbEMsRUFFaEI7QUFBRSxXQUFLLEVBQU07O0FBQ1oscUJBQWlCLE9BQ2xCLGNBQUssS0FBRztBQUFQLFdBQW9CLFNBQVMsU0FBSyxNQUMxQztJQUZrQjtBQVBLO0FBVXBCLE9BQUksSUFBa0I7QUFDdEIsT0FBSSxJQUFXO0FBQ3BCOztBQUVELFVBQXVCLGVBQUksS0FBUyxTQUFFO0FBQ3BDLE1BQVcsUUFBSSxJQUFLLE1BQUU7QUFDcEIsVUFBYyxRQUFJLElBQU07QUFDekIsU0FBTTtBQUNMLGNBQWdCLE1BQUssS0FBSSxjQUFHO0FBQUYsV0FBUSxFQUFPLE9BQUcsR0FBYyxnQkFBSSxFQUFNLE1BQUk7SUFBOUQsRUFBbUUsS0FBTTtBQUNwRjtBQUNGOztBQUVEO0FBQ00sd0JBQUc7QUFDTDtBQUNnQixvQkFBSTtBQUNQLGlCQUFJO0FBQ1gsVUFBSztBQUNFLGlCQUFHO0FBQ1IsWUFBSTtBQUNKLFlBQUk7QUFDQSxnQkFBSTtBQUNQLGFBQUUsQ0FBSTtBQUNELGtCQUFJO0FBQ0osa0JBQUk7QUFDUCxlQUFJO0FBQ0UscUJBQUk7QUFDWixhQUFFLElBQU8sSUFBQyxDQUNmLENBQXFCLHNCQUFlLGVBQ3BDLENBQVUsV0FBZ0IsZ0JBQzFCLENBQUssTUFBb0Isb0JBQ3pCLENBQUssTUFBa0Isa0JBQ3ZCLENBQWdCLGlCQUFXLFdBQzNCLENBQWUsZ0JBQVUsVUFDekIsQ0FBZ0IsaUJBQ2hCO0FBQ0csV0FBRSxJQUFPLElBQUMsQ0FDYixDQUFTLFVBQU8sT0FDaEIsQ0FBZ0IsaUJBQU0sTUFDdEIsQ0FBZSxnQkFDZjtBQUNHLFdBQUUsQ0FDSixHQUFJLElBQUssS0FBSyxLQUVsQjtBQTlCTTtBQStCUjs7QUFDTzs7QUFFVztBQUFhLFdBQ2hCLGVBQU0sRUFBbEIsR0FBMkIsU0FBUyxTQUFZLGNBQUk7OztBQUU5QywrQkFBUyxRQUFRO0FBQWYsV0FBMEIsT0FBTyxPQUFROzs7QUFFcEMsb0JBQUUseUJBQVMsVUFBWTtBQUNwQyxRQUFZLFdBQU07QUFEdUI7Ozs7O0FBRXBDLDJCQUEwQjtBQUFDLFVBQWI7O0FBQ1QsZUFBVyxXQUFNLFFBQWEsV0FBUSxXQUFNO0FBQ3JEOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0QsV0FBaUIsV0FBUyxVQUFjO0FBQ3pDOztBQUVtQix5QkFBRSw4QkFBUyxVQUFZLFlBQWlCO0FBQzFELFFBQVUsU0FBTTtBQUQrQzs7Ozs7QUFFMUQsMkJBQTBCO0FBQUMsVUFBYjs7QUFDakIsVUFBUSxPQUFhLFdBQU07QUFDckIsYUFBTSxRQUFrQixnQkFBTSxTQUFjLFdBQVEsV0FBYyxXQUFNLFNBQU07QUFDckY7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDRCxXQUFjO0FBQ2Y7O0FBRWdCLHNCQUFFLDJCQUFTLFVBQWMsY0FBSztBQUM3QyxRQUFZLHNCQUFvQixJQUFNLGlCQUFJO0FBQ3hDLFNBQUksRUFBTyxpQkFBa0IsUUFBTyxRQUFHLENBQVE7QUFDL0Msa0JBQ007QUFBZ0IsYUFBc0IsbUJBQVMsVUFBb0I7TUFEN0Q7QUFFWCxLQUp5QjtBQUs1QixXQUFjO0FBQ2Y7O0FBRW1CLHVEQUFTLFFBQWlCLGlCQUFhO0FBQXJDLHFCQUNEO0FBQW5CLFlBQXdCLENBQVksY0FBaUIsaUJBQU8sUUFBWSxXQUFnQixpQkFDekY7Ozs7QUFFbUIsdURBQVMsUUFBaUIsaUJBQWE7QUFBckMscUJBQ0Q7QUFBbkIsWUFBd0IsQ0FBWSxjQUFpQixpQkFBTyxRQUFZLFdBQWdCLGlCQUN6Rjs7OztBQUV3QixpRUFBUyxRQUFzQixzQkFBYTtBQUExQyxxQkFDTjtBQUFuQixZQUF3QixDQUFZLGNBQWlCLGlCQUFPLFFBQVksV0FBcUIsc0JBQzlGOzs7O0FBRXdCLGlFQUFTLFFBQXNCLHNCQUFhO0FBQTFDLHFCQUNOO0FBQW5CLFlBQXdCLENBQVksY0FBaUIsaUJBQU8sUUFBWSxXQUFxQixzQkFDOUY7Ozs7QUFFYyxvQkFBRSx5QkFBcUIsc0JBQXNCLHNCQUFTLFNBQUs7QUFDeEUsbUJBQWtCO0FBQWU7QUFDOUIsU0FBdUIscUJBQWdCO0FBQ3ZDLFNBQXVCLHFCQUN2QjtBQUhtQztLQUF4QjtBQVFKOztBQTFESjtBQTJESCxXQUFFLEVBQVEsZ0NBQWlCO0FBQzNCLFdBQUUsRUFBTSxjQUFVLG9CQUU3QjtBQWhHaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQTdRVTs7OztzQ0FBdEI7Ozs7c0JBeURlLGdCQUFNOztnQ0FRRDs7Ozt3Q0FBcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FqRXNCOzs7eUNBQXRCOzs7Ozs7Ozs7Ozs7OztvREFBQTs7O2FBeURlLGdCQUFNOzs7Ozs7Ozs7Ozs7OztrQ0FRRDs7OzJDQUFwQjs7Ozs7Ozs7Ozs7Ozs7d0RBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkEvRHlCOzs7O3dDQUFyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQUFxQjs7OzJDQUFyQjs7Ozs7Ozs7Ozs7Ozs7c0RBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFJaUIsV0FBSyxRQUFVOztrQkF3QmYsV0FBSyxRQUFZOztrQkFPakIsV0FBSyxRQUFZLFlBQWMsV0FBSyxRQUFVOzs7Ozs7Ozs7Ozs7Ozt3REFsQzFCLFdBQUs7bUZBQWlDLFdBQUs7Ozs7Ozs7Ozs7Ozs7OEZBQTNDLFdBQUs7Ozs7aUdBQWlDLFdBQUs7Ozs7T0FHL0QsV0FBSyxRQUFVOzs7Ozs7Ozs7Ozs7OztPQXdCZixXQUFLLFFBQVk7Ozs7Ozs7Ozs7Ozs7O09BT2pCLFdBQUssUUFBWSxZQUFjLFdBQUssUUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQTNCMUIsZ0JBQVcsV0FBTSxTQUFNLENBQXZDLEdBQW1ELGFBQUs7a0RBRTdDO21EQUF5Qjs7Ozs7Ozs7Ozs7OytDQUVkLE9BQVUsa0JBQWEsZUFBRTs4REFBaUMsa0JBQVk7O29EQUVyRTtrRUFFRiwyQ0FBUyxTQUFXLFdBQUssTUFBSyw2Q0FDOUIsMkNBQVMsU0FBVyxXQUFLLE1BQUs7b0RBQ3ZDO3FEQUNDOzs7Ozs7Ozs7O3lIQVhHLGdCQUFXLFdBQU0sU0FBTSxDQUF2QyxHQUFtRCxhQUFLOzs7OzttREFFN0M7b0RBQXlCOzs7Ozs7Ozs7Z0RBRWQsT0FBVSxrQkFBYSxlQUFFOytEQUFpQyxrQkFBWTs7OztxREFFckU7Ozs7bUVBRUYsMkNBQVMsU0FBVyxXQUFLLE1BQUssNkNBQzlCLDJDQUFTLFNBQVcsV0FBSyxNQUFLOzs7O3FEQUN2QztzREFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7MkNBYmxCLE1BQVcsV0FBTyxPQUFROzs7O3dDQUFwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZDQUFVLE1BQVcsV0FBTyxPQUFROzs7MkNBQXBDOzs7Ozs7Ozs7Ozs7OztzREFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBeUJnQixlQUFXLFdBQU0sYUFBVTs7Ozs7Ozs7Ozs7Ozs7K0NBRHVFLGdCQUFXLFdBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0hBQWpCLGdCQUFXLFdBQU07Ozs7Ozs7cUdBQ25ILGVBQVcsV0FBTSxhQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBT3pCLGVBQVcsV0FBTSxhQUFVOzs7OztvQkFDWCxXQUFPLGFBQWdCLGdCQUFXLFdBQVUsZ0JBQU0sTUFBSSxJQUFXLFdBQU0sU0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttRUFLekYsV0FBTyxPQUFPO3FFQUFXOzs2RUFDeEIsZ0JBQVcsV0FBTSxRQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxR0FQekIsZUFBVyxXQUFNLGFBQVU7Ozs7O21IQUNYLFdBQU8sYUFBZ0IsZ0JBQVcsV0FBVSxnQkFBTSxNQUFJLElBQVcsV0FBTSxTQUFPOzs7O2lGQUt6RixXQUFPLE9BQU87Ozs7d0hBQ2IsZ0JBQVcsV0FBTSxRQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dDQVl0Qzs7Ozs7Ozs7Ozs7Ozs7O3NCQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBaUJBLE1BQU87Ozs7Ozs7Ozs7Ozs7Ozs7a0RBVmdCO21EQUFvQjs7MERBRWQ7NERBQ1IsT0FBRSxZQUFhLE9BQUU7b0RBQzFCO3FEQUEyQjsrQ0FDckMsT0FBSyxhQUFhLGVBQUU7OERBQ1IsYUFBWTs7Ozs7Ozs7Ozs7Ozs7bURBTkg7b0RBQW9COzs7OzJEQUVkOzs7OzZEQUNSLE9BQUUsWUFBYSxPQUFFOzs7O3FEQUMxQjtzREFBMkI7Ozs7Z0RBQ3JDLE9BQUssYUFBYSxlQUFFOytEQUNSLGFBQVk7OzsrREFJMUIsTUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBakVNLFFBQWMsZ0JBQVcsV0FBSyxNQUFJOzs7Ozs7OztXQXFCWixRQUFjLGdCQUFXLFdBQUssTUFBRSxDQUFLLEtBQVM7Ozs7Ozs7O1dBZ0JwRSxRQUFjLGdCQUFXLFdBQUssTUFBTSxLQUFNLFFBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJDWXRFO0FBQ1IsVUFBYyxNQUFFLEdBQUM7QUFDZixNQUFPLE1BQU07QUFDYixPQUFLLElBQUssSUFBSSxHQUFHLElBQUksR0FBRSxFQUFHO0FBQUssT0FBSyxLQUFJO0dBQ3hDLE9BQVc7QUFDWjtBQUNDO0FBQ00sd0JBQUc7QUFDTDtBQUNNLFVBQUk7QUFDRyxpQkFBSztBQUNWLFlBQUk7QUFDSixZQUFFLENBQVEsU0FBVyxXQUFXLFdBQVcsV0FDakMsV0FBVyxXQUNYLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FDNUMsV0FDakI7QUFSTTtBQVNSOztBQUNPLFlBQU87QUFDUixXQUFFLEVBRWI7QUFmaUI7Ozs7Ozs7Ozs7Ozs7Ozs7O3lDQW5FRixNQUFJOzs7O3NDQUFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJDQUFVLE1BQUk7Ozt5Q0FBZDs7Ozs7Ozs7Ozs7Ozs7b0RBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVNxQixPQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21FQU5lLGVBQUUsSUFBRyxvQkFBbUIsY0FBRTs4REFDdkMsYUFBWTs7K0NBRXpCLE9BQUssYUFBYSxlQUFFO29EQUNWO3FEQUNDO3lDQUdULEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQU8sRUFBdkMsR0FBdUQsaUJBQU87O3FEQUU1RCxTQUFHO3NEQUNKLE9BQUc7OENBQ0EsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBTyxFQUF2QyxHQUFrRCxZQUFLLEtBQU8sRUFBVCxHQUFrQixVQUF1Qjs7bUVBQzdFOzs7Ozs7Ozs7Ozs7Ozs7b0VBYk8sZUFBRSxJQUFHLG9CQUFtQixjQUFFOzs7OytEQUN2QyxhQUFZO2dEQUV6QixPQUFLLGFBQWEsZUFBRTs7OztxREFDVjtzREFDQzs7O2dFQUNILE9BQUc7Ozs7O3NEQUlULFNBQUc7Ozs7dURBQ0osT0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkNtUWQ7QUFJTixVQUFZLElBQUksS0FBTSxNQUFFO0FBQ3RCLE1BQUssSUFBVSxVQUFPO0FBQ3RCLFNBQVEsRUFBTyxPQUFFLEVBQU8sU0FBTztBQUNoQzs7QUFFRCxVQUFjLE1BQUUsR0FBQztBQUNmLGVBQWUsR0FBTyxPQUFJLGNBQUcsR0FBRztBQUFMLFVBQWE7R0FBNUI7QUFDYjs7QUFFRCxVQUFvQixZQUFPLFFBQUU7QUFDUCwwQkFBUSxPQUFXLGlCQUFRLE9BQU07QUFDdEQ7O0FBRUQ7QUFDTSx3QkFBRztBQUNMO0FBQ1MsYUFBRSxDQUNQLENBQUssTUFBTSxJQUNYLENBQUssTUFBTSxLQUNYLENBQUssTUFBTSxNQUNYLENBQUssTUFBTSxNQUNYLENBQUssTUFBTSxNQUNYLENBQUssTUFBTSxNQUNYLENBQUssTUFBTSxNQUNYLENBQUssTUFBTSxNQUNYLENBQUssTUFBTSxNQUNYLENBQUssTUFBTSxNQUNYLENBQUssTUFDTjtBQUNPLGNBQUc7QUFDQyxrQkFBMkI7QUFDdkIsc0JBQ2pCO0FBakJNO0FBa0JSOztBQUNPO0FBQ1c7QUFBUyxXQUFXLFFBQU87O0FBQzNCO0FBQW1CLFdBQVMsTUFFM0I7O0FBSlY7QUFLSCxXQUFJO0FBQ0osV0FBRSxFQUFJLFVBRWpCO0FBN0JpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBak9NLGtCQUFRLGNBQVc7Ozs4QkFoRWY7Ozs7MENBQXRCOzs7Ozs7O29CQWNxQzs7O1lBQXdDOzs7Y0FBdUM7Ozs7Ozs7b0JBUWpGOzs7WUFBd0M7Ozs7Ozs7OztvQkFNeEM7OztZQUF3Qzs7Ozs7Ozs7O29CQVl0Qzs7O1lBQXdDOzs7Ozs7Ozs7b0JBTzFDOzs7WUFBd0M7Ozs7Ozs7OztvQkFNeEM7U0FBYTtnQkFBb0I7WUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FyRDdEOzs7NkNBQXRCOzs7Ozs7Ozs7Ozs7OztvREFBQTs7OztrRUFjcUM7a0RBQXdDOzhCQUF1Qzs7OztnRUFRakY7b0RBQXdDOzs7O2dFQU14QztvREFBd0M7Ozs7b0VBWXRDO29EQUF3Qzs7OztnRUFPMUM7b0RBQXdDOzs7O2dFQU14QzsyQkFBYTtrQ0FBb0I7b0RBQWU7OztvR0FXakUsa0JBQVEsY0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkE1REE7OztNQUFnQzs7Ozs7Ozs7Ozs7Ozs7c0RBSDFDLFlBQU0sQ0FBZixHQUEyQixhQUFLOzs7Ozs7Ozs7Ozs7Ozs7O2tIQUF2QixZQUFNLENBQWYsR0FBMkIsYUFBSzs7Ozs7Ozs7a0VBR2I7cURBQWdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQUZwRCxJQUFDLEVBQVMsVUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJDK003QjtBQUVOOztBQUVBLFVBQWMsTUFBRSxHQUFDO0FBQ2YsZUFBZSxHQUFPLE9BQUksY0FBRyxHQUFHO0FBQUwsVUFBYTtHQUE1QjtBQUNiOztBQUVEO0FBQ00sd0JBQUc7QUFDTDtBQUNjLGtCQUE4QjtBQUN6QyxPQUFHO0FBQ0gsT0FBRztBQUVMO0FBTE07QUFNUjs7QUFDTyxZQUNZO0FBQ2IsV0FBSTtBQUNKLFdBQUUsRUFFYjtBQWRpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7eUNBck5JLE1BQUc7Ozs7MENBQWI7Ozs7Ozs7b0JBUzJCOzs7O1lBQXFDOzs7Ozs7OztvQkFRckM7OztZQUFpQzs7Ozs7OzJDQU1sRCxNQUFHOzs7OzRDQUFiOzs7Ozs7O29CQVkyQjs7O1lBQWlDO1lBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkNBbkMxRCxNQUFHOzs7NkNBQWI7Ozs7Ozs7Ozs7Ozs7O29EQUFBOzs7OzhEQVMyQjsyQ0FBcUM7Ozs7Z0VBUXJDOzZDQUFpQzs7OzZDQU1sRCxNQUFHOzs7K0NBQWI7Ozs7Ozs7Ozs7Ozs7O3dEQUFBOzs7O2dFQVkyQjs2Q0FBaUM7NkNBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQWpDbkM7Ozs7TUFBb0MsSUFBRTs7Ozs7Ozs7Ozs7OztzREFEbkQsS0FBSyxJQUFHLENBQVYsR0FBc0IsYUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs0RUFBekIsS0FBSyxJQUFHLENBQVYsR0FBc0IsYUFBSzs7Ozs7Ozs7OERBQ1o7c0JBQW9DLElBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkF1QnRDOzs7TUFBZ0MsTUFBRTs7Ozs7Ozs7Ozs7Ozs7c0RBRC9DLEtBQUssTUFBRyxDQUFWLEdBQXNCLGFBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7NEVBQXpCLEtBQUssTUFBRyxDQUFWLEdBQXNCLGFBQUs7Ozs7Ozs7OzhEQUNaO3NCQUFnQyxNQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQXhCTCxJQUFDLEVBQUUsR0FBRyxJQUFJOzs7Ozs7OztXQXVCVixJQUFDLEVBQUUsR0FBRyxNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJDc0IzRTtBQUdOLFVBQWMsTUFBRSxHQUFDO0FBQ2YsZUFBZSxHQUFPLE9BQUksY0FBRyxHQUFHO0FBQUwsVUFBYTtHQUE1QjtBQUNiOztBQUVEO0FBQ00sd0JBQUc7QUFDTDtBQUNjLGtCQUFLO0FBQ1osV0FBRSxDQUFFLEdBQUUsR0FBRyxJQUNmO0FBSE07QUFLYTs7QUFDZixXQUFFLEVBRWI7QUFWaUI7Ozs7Ozs7Ozs7Ozs7Ozs7O3lDQXpERixNQUFHOzs7O3NDQUFiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJDQUFVLE1BQUc7Ozt5Q0FBYjs7Ozs7Ozs7Ozs7Ozs7b0RBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUllLE1BQU87Ozs7Ozs7OztNQUZ3Qjs7OztjQUFpRDs7OztnQkFNdkYsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQkFOaUM7OEJBQWlEOzs7K0RBRWhGLE1BQU87Ozs7T0FJZCxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkNvRVY7QUFHTixVQUFjLE1BQUUsR0FBQztBQUNmLGVBQWUsR0FBTyxPQUFJLGNBQUcsR0FBRztBQUFMLFVBQWE7R0FBNUI7QUFDYjs7QUFFRDtBQUNNLHdCQUFHO0FBQ0wsVUFBUztBQUNWOztBQUNPLFlBQUU7QUFBVzs7QUFDbkIsT0FBUSxLQUFhLFdBQXdCO0FBQzNDLE1BQVMscUJBQVM7QUFBTixXQUFlLE1BQUksSUFBQyxFQUFLLE1BQU8sTUFBUSxVQUFNLE1BQVM7O0FBQ2pFLFFBQUk7QUFDRixVQUFJLEdBQVEsVUFBTSxNQUFNO0FBRTNCO0FBSE07QUFLVztBQUNmLFdBQUUsRUFFYjtBQWZpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQ0FqRjhFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBYVQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FuQlM7Ozs7Ozs7Ozs7a0NBQ0E7Ozs7Ozs7Ozs7a0NBQ0E7Ozs7Ozs7Ozs7a0NBQ0E7Ozs7Ozs7Ozs7a0NBYVQ7Ozs7Ozs7Ozs7a0NBQ0E7Ozs7Ozs7Ozs7a0NBQ0E7Ozs7Ozs7Ozs7a0NBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQ2tGOUU7QUFHTixVQUFjLE1BQUUsR0FBQztBQUNmLGVBQWUsR0FBTyxPQUFJLGNBQUcsR0FBRztBQUFMLFVBQWE7R0FBNUI7QUFDYjs7QUFFRDtBQUNNLHdCQUFHO0FBQ0wsVUFBUztBQUNWOztBQUNPLFlBQUU7QUFBVzs7QUFDbkIsT0FBUSxLQUFhLFdBQXVCO0FBQzFDLE1BQVMscUJBQVM7QUFBTixXQUFlLE1BQUksSUFBQyxFQUFLLE1BQU8sTUFBUSxVQUFNLE1BQVM7O0FBQ2pFLFFBQUk7QUFDRixVQUFJLEdBQVEsVUFBTSxNQUFNO0FBRTNCO0FBSE07QUFLVztBQUNmLFdBQUUsRUFFYjtBQWZpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBN0dtRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQUNUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBS1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0FDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQUtTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBQ1Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0FLUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQUNUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQW5CUzs7Ozs7Ozs7OztrQ0FDVDs7Ozs7Ozs7OztrQ0FLUzs7Ozs7Ozs7OztrQ0FDVDs7Ozs7Ozs7OztrQ0FLUzs7Ozs7Ozs7OztrQ0FDVDs7Ozs7Ozs7OztrQ0FLUzs7Ozs7Ozs7OztrQ0FDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQ2pCbkU7QUFDSjtBQUNlO0FBQ0UsVUFBRTtBQUNHLGVBQWMsS0FBTztRQUFkOztBQUNOLFlBQUksSUFBTTtBQUNqQixRQUFVLE9BQUcsTUFBUSxNQUFFO0FBQ2IsWUFBRyxHQUFPLFFBQVMsU0FBWSxZQUFTLFNBQUs7QUFDdEMsaUJBQVU7QUFDUixtQkFBRSx1QkFBWTtBQUFVLGdCQUFTLFdBQU87QUFDcEQ7QUFIa0Q7QUFJeEQ7QUFJckI7QUFicUI7QUFERjs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTmdCOzs7Ozs7Ozs7Ozs7OztrQkFBckI7Ozs7Ozs7Ozs7Ozs7O21CQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZkLGtCQUFrQixXQUFXLGtGQUFrRixFQUFFLHNGQUFzRixFQUFFLHFGQUFxRixhQUFhLGdKQUFnSixFQUFFLHdGQUF3RixZOzs7Ozs7QUNBcmhCLGtCQUFrQixXQUFXLGlGQUFpRixFQUFFLHdGQUF3RixFQUFFLHNGQUFzRixhQUFhLGdKQUFnSixFQUFFLHdGQUF3RixZIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQyZDVhZWIwMzg2YmI4ZDA1YmMyIiwiZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmZ1bmN0aW9uIGFzc2lnbih0YXJnZXQpIHtcblx0dmFyIGssXG5cdFx0c291cmNlLFxuXHRcdGkgPSAxLFxuXHRcdGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cdGZvciAoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cdFx0Zm9yIChrIGluIHNvdXJjZSkgdGFyZ2V0W2tdID0gc291cmNlW2tdO1xuXHR9XG5cblx0cmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gYXBwZW5kTm9kZShub2RlLCB0YXJnZXQpIHtcblx0dGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xufVxuXG5mdW5jdGlvbiBpbnNlcnROb2RlKG5vZGUsIHRhcmdldCwgYW5jaG9yKSB7XG5cdHRhcmdldC5pbnNlcnRCZWZvcmUobm9kZSwgYW5jaG9yKTtcbn1cblxuZnVuY3Rpb24gZGV0YWNoTm9kZShub2RlKSB7XG5cdG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbn1cblxuZnVuY3Rpb24gZGV0YWNoQmV0d2VlbihiZWZvcmUsIGFmdGVyKSB7XG5cdHdoaWxlIChiZWZvcmUubmV4dFNpYmxpbmcgJiYgYmVmb3JlLm5leHRTaWJsaW5nICE9PSBhZnRlcikge1xuXHRcdGJlZm9yZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGJlZm9yZS5uZXh0U2libGluZyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZGV0YWNoQmVmb3JlKGFmdGVyKSB7XG5cdHdoaWxlIChhZnRlci5wcmV2aW91c1NpYmxpbmcpIHtcblx0XHRhZnRlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGFmdGVyLnByZXZpb3VzU2libGluZyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZGV0YWNoQWZ0ZXIoYmVmb3JlKSB7XG5cdHdoaWxlIChiZWZvcmUubmV4dFNpYmxpbmcpIHtcblx0XHRiZWZvcmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiZWZvcmUubmV4dFNpYmxpbmcpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlaW5zZXJ0QmV0d2VlbihiZWZvcmUsIGFmdGVyLCB0YXJnZXQpIHtcblx0d2hpbGUgKGJlZm9yZS5uZXh0U2libGluZyAmJiBiZWZvcmUubmV4dFNpYmxpbmcgIT09IGFmdGVyKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKGJlZm9yZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGJlZm9yZS5uZXh0U2libGluZykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlaW5zZXJ0Q2hpbGRyZW4ocGFyZW50LCB0YXJnZXQpIHtcblx0d2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB0YXJnZXQuYXBwZW5kQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xufVxuXG5mdW5jdGlvbiByZWluc2VydEFmdGVyKGJlZm9yZSwgdGFyZ2V0KSB7XG5cdHdoaWxlIChiZWZvcmUubmV4dFNpYmxpbmcpIHRhcmdldC5hcHBlbmRDaGlsZChiZWZvcmUubmV4dFNpYmxpbmcpO1xufVxuXG5mdW5jdGlvbiByZWluc2VydEJlZm9yZShhZnRlciwgdGFyZ2V0KSB7XG5cdHZhciBwYXJlbnQgPSBhZnRlci5wYXJlbnROb2RlO1xuXHR3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQgIT09IGFmdGVyKSB0YXJnZXQuYXBwZW5kQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xufVxuXG4vLyBUT0RPIHRoaXMgaXMgb3V0IG9mIGRhdGVcbmZ1bmN0aW9uIGRlc3Ryb3lFYWNoKGl0ZXJhdGlvbnMsIGRldGFjaCwgc3RhcnQpIHtcblx0Zm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgaXRlcmF0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGlmIChpdGVyYXRpb25zW2ldKSBpdGVyYXRpb25zW2ldLmRlc3Ryb3koZGV0YWNoKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudCgpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChuYW1lKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdmdFbGVtZW50KG5hbWUpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBuYW1lKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dChkYXRhKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tbWVudCgpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpO1xufVxuXG5mdW5jdGlvbiBhZGRMaXN0ZW5lcihub2RlLCBldmVudCwgaGFuZGxlcikge1xuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIobm9kZSwgZXZlbnQsIGhhbmRsZXIpIHtcblx0bm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZShub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG5cdG5vZGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBzZXRYbGlua0F0dHJpYnV0ZShub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG5cdG5vZGUuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCBhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gZ2V0QmluZGluZ0dyb3VwVmFsdWUoZ3JvdXApIHtcblx0dmFyIHZhbHVlID0gW107XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXAubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRpZiAoZ3JvdXBbaV0uY2hlY2tlZCkgdmFsdWUucHVzaChncm91cFtpXS5fX3ZhbHVlKTtcblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZSA9PT0gJycgPyB1bmRlZmluZWQgOiArdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNoaWxkcmVuIChlbGVtZW50KSB7XG5cdHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGROb2Rlcyk7XG59XG5cbmZ1bmN0aW9uIGNsYWltRWxlbWVudCAobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMsIHN2Zykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dmFyIG5vZGUgPSBub2Rlc1tpXTtcblx0XHRpZiAobm9kZS5ub2RlTmFtZSA9PT0gbmFtZSkge1xuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBub2RlLmF0dHJpYnV0ZXMubGVuZ3RoOyBqICs9IDEpIHtcblx0XHRcdFx0dmFyIGF0dHJpYnV0ZSA9IG5vZGUuYXR0cmlidXRlc1tqXTtcblx0XHRcdFx0aWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZS5uYW1lXSkgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlLm5hbWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5vZGVzLnNwbGljZShpLCAxKVswXTsgLy8gVE9ETyBzdHJpcCB1bndhbnRlZCBhdHRyaWJ1dGVzXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN2ZyA/IGNyZWF0ZVN2Z0VsZW1lbnQobmFtZSkgOiBjcmVhdGVFbGVtZW50KG5hbWUpO1xufVxuXG5mdW5jdGlvbiBjbGFpbVRleHQgKG5vZGVzLCBkYXRhKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHR2YXIgbm9kZSA9IG5vZGVzW2ldO1xuXHRcdGlmIChub2RlLm5vZGVUeXBlID09PSAzKSB7XG5cdFx0XHRub2RlLmRhdGEgPSBkYXRhO1xuXHRcdFx0cmV0dXJuIG5vZGVzLnNwbGljZShpLCAxKVswXTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY3JlYXRlVGV4dChkYXRhKTtcbn1cblxuZnVuY3Rpb24gc2V0SW5wdXRUeXBlKGlucHV0LCB0eXBlKSB7XG5cdHRyeSB7XG5cdFx0aW5wdXQudHlwZSA9IHR5cGU7XG5cdH0gY2F0Y2ggKGUpIHt9XG59XG5cbmZ1bmN0aW9uIHNldFN0eWxlKG5vZGUsIGtleSwgdmFsdWUpIHtcblx0bm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gbGluZWFyKHQpIHtcblx0cmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUnVsZShcblx0YSxcblx0Yixcblx0ZGVsdGEsXG5cdGR1cmF0aW9uLFxuXHRlYXNlLFxuXHRmblxuKSB7XG5cdHZhciBrZXlmcmFtZXMgPSAne1xcbic7XG5cblx0Zm9yICh2YXIgcCA9IDA7IHAgPD0gMTsgcCArPSAxNi42NjYgLyBkdXJhdGlvbikge1xuXHRcdHZhciB0ID0gYSArIGRlbHRhICogZWFzZShwKTtcblx0XHRrZXlmcmFtZXMgKz0gcCAqIDEwMCArICcleycgKyBmbih0KSArICd9XFxuJztcblx0fVxuXG5cdHJldHVybiBrZXlmcmFtZXMgKyAnMTAwJSB7JyArIGZuKGIpICsgJ31cXG59Jztcbn1cblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Rhcmtza3lhcHAvc3RyaW5nLWhhc2gvYmxvYi9tYXN0ZXIvaW5kZXguanNcbmZ1bmN0aW9uIGhhc2goc3RyKSB7XG5cdHZhciBoYXNoID0gNTM4MTtcblx0dmFyIGkgPSBzdHIubGVuZ3RoO1xuXG5cdHdoaWxlIChpLS0pIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSBeIHN0ci5jaGFyQ29kZUF0KGkpO1xuXHRyZXR1cm4gaGFzaCA+Pj4gMDtcbn1cblxuZnVuY3Rpb24gd3JhcFRyYW5zaXRpb24oY29tcG9uZW50LCBub2RlLCBmbiwgcGFyYW1zLCBpbnRybywgb3V0Z3JvdXApIHtcblx0dmFyIG9iaiA9IGZuKG5vZGUsIHBhcmFtcyk7XG5cdHZhciBkdXJhdGlvbiA9IG9iai5kdXJhdGlvbiB8fCAzMDA7XG5cdHZhciBlYXNlID0gb2JqLmVhc2luZyB8fCBsaW5lYXI7XG5cdHZhciBjc3NUZXh0O1xuXG5cdC8vIFRPRE8gc2hhcmUgPHN0eWxlPiB0YWcgYmV0d2VlbiBhbGwgdHJhbnNpdGlvbnM/XG5cdGlmIChvYmouY3NzICYmICF0cmFuc2l0aW9uTWFuYWdlci5zdHlsZXNoZWV0KSB7XG5cdFx0dmFyIHN0eWxlID0gY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR0cmFuc2l0aW9uTWFuYWdlci5zdHlsZXNoZWV0ID0gc3R5bGUuc2hlZXQ7XG5cdH1cblxuXHRpZiAoaW50cm8pIHtcblx0XHRpZiAob2JqLmNzcyAmJiBvYmouZGVsYXkpIHtcblx0XHRcdGNzc1RleHQgPSBub2RlLnN0eWxlLmNzc1RleHQ7XG5cdFx0XHRub2RlLnN0eWxlLmNzc1RleHQgKz0gb2JqLmNzcygwKTtcblx0XHR9XG5cblx0XHRpZiAob2JqLnRpY2spIG9iai50aWNrKDApO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHR0OiBpbnRybyA/IDAgOiAxLFxuXHRcdHJ1bm5pbmc6IGZhbHNlLFxuXHRcdHByb2dyYW06IG51bGwsXG5cdFx0cGVuZGluZzogbnVsbCxcblx0XHRydW46IGZ1bmN0aW9uKGludHJvLCBjYWxsYmFjaykge1xuXHRcdFx0dmFyIHByb2dyYW0gPSB7XG5cdFx0XHRcdHN0YXJ0OiB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCkgKyAob2JqLmRlbGF5IHx8IDApLFxuXHRcdFx0XHRpbnRybzogaW50cm8sXG5cdFx0XHRcdGNhbGxiYWNrOiBjYWxsYmFja1xuXHRcdFx0fTtcblxuXHRcdFx0aWYgKG9iai5kZWxheSkge1xuXHRcdFx0XHR0aGlzLnBlbmRpbmcgPSBwcm9ncmFtO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zdGFydChwcm9ncmFtKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCF0aGlzLnJ1bm5pbmcpIHtcblx0XHRcdFx0dGhpcy5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdFx0dHJhbnNpdGlvbk1hbmFnZXIuYWRkKHRoaXMpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0c3RhcnQ6IGZ1bmN0aW9uKHByb2dyYW0pIHtcblx0XHRcdGNvbXBvbmVudC5maXJlKHByb2dyYW0uaW50cm8gPyAnaW50cm8uc3RhcnQnIDogJ291dHJvLnN0YXJ0JywgeyBub2RlOiBub2RlIH0pO1xuXG5cdFx0XHRwcm9ncmFtLmEgPSB0aGlzLnQ7XG5cdFx0XHRwcm9ncmFtLmIgPSBwcm9ncmFtLmludHJvID8gMSA6IDA7XG5cdFx0XHRwcm9ncmFtLmRlbHRhID0gcHJvZ3JhbS5iIC0gcHJvZ3JhbS5hO1xuXHRcdFx0cHJvZ3JhbS5kdXJhdGlvbiA9IGR1cmF0aW9uICogTWF0aC5hYnMocHJvZ3JhbS5iIC0gcHJvZ3JhbS5hKTtcblx0XHRcdHByb2dyYW0uZW5kID0gcHJvZ3JhbS5zdGFydCArIHByb2dyYW0uZHVyYXRpb247XG5cblx0XHRcdGlmIChvYmouY3NzKSB7XG5cdFx0XHRcdGlmIChvYmouZGVsYXkpIG5vZGUuc3R5bGUuY3NzVGV4dCA9IGNzc1RleHQ7XG5cblx0XHRcdFx0cHJvZ3JhbS5ydWxlID0gZ2VuZXJhdGVSdWxlKFxuXHRcdFx0XHRcdHByb2dyYW0uYSxcblx0XHRcdFx0XHRwcm9ncmFtLmIsXG5cdFx0XHRcdFx0cHJvZ3JhbS5kZWx0YSxcblx0XHRcdFx0XHRwcm9ncmFtLmR1cmF0aW9uLFxuXHRcdFx0XHRcdGVhc2UsXG5cdFx0XHRcdFx0b2JqLmNzc1xuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdHRyYW5zaXRpb25NYW5hZ2VyLmFkZFJ1bGUocHJvZ3JhbS5ydWxlLCBwcm9ncmFtLm5hbWUgPSAnX19zdmVsdGVfJyArIGhhc2gocHJvZ3JhbS5ydWxlKSk7XG5cblx0XHRcdFx0bm9kZS5zdHlsZS5hbmltYXRpb24gPSAobm9kZS5zdHlsZS5hbmltYXRpb24gfHwgJycpXG5cdFx0XHRcdFx0LnNwbGl0KCcsICcpXG5cdFx0XHRcdFx0LmZpbHRlcihmdW5jdGlvbihhbmltKSB7XG5cdFx0XHRcdFx0XHQvLyB3aGVuIGludHJvaW5nLCBkaXNjYXJkIG9sZCBhbmltYXRpb25zIGlmIHRoZXJlIGFyZSBhbnlcblx0XHRcdFx0XHRcdHJldHVybiBhbmltICYmIChwcm9ncmFtLmRlbHRhIDwgMCB8fCAhL19fc3ZlbHRlLy50ZXN0KGFuaW0pKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5jb25jYXQocHJvZ3JhbS5uYW1lICsgJyAnICsgZHVyYXRpb24gKyAnbXMgbGluZWFyIDEgZm9yd2FyZHMnKVxuXHRcdFx0XHRcdC5qb2luKCcsICcpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuXHRcdFx0dGhpcy5wZW5kaW5nID0gbnVsbDtcblx0XHR9LFxuXHRcdHVwZGF0ZTogZnVuY3Rpb24obm93KSB7XG5cdFx0XHR2YXIgcHJvZ3JhbSA9IHRoaXMucHJvZ3JhbTtcblx0XHRcdGlmICghcHJvZ3JhbSkgcmV0dXJuO1xuXG5cdFx0XHR2YXIgcCA9IG5vdyAtIHByb2dyYW0uc3RhcnQ7XG5cdFx0XHR0aGlzLnQgPSBwcm9ncmFtLmEgKyBwcm9ncmFtLmRlbHRhICogZWFzZShwIC8gcHJvZ3JhbS5kdXJhdGlvbik7XG5cdFx0XHRpZiAob2JqLnRpY2spIG9iai50aWNrKHRoaXMudCk7XG5cdFx0fSxcblx0XHRkb25lOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBwcm9ncmFtID0gdGhpcy5wcm9ncmFtO1xuXHRcdFx0dGhpcy50ID0gcHJvZ3JhbS5iO1xuXHRcdFx0aWYgKG9iai50aWNrKSBvYmoudGljayh0aGlzLnQpO1xuXHRcdFx0aWYgKG9iai5jc3MpIHRyYW5zaXRpb25NYW5hZ2VyLmRlbGV0ZVJ1bGUobm9kZSwgcHJvZ3JhbS5uYW1lKTtcblx0XHRcdHByb2dyYW0uY2FsbGJhY2soKTtcblx0XHRcdHByb2dyYW0gPSBudWxsO1xuXHRcdFx0dGhpcy5ydW5uaW5nID0gISF0aGlzLnBlbmRpbmc7XG5cdFx0fSxcblx0XHRhYm9ydDogZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAob2JqLnRpY2spIG9iai50aWNrKDEpO1xuXHRcdFx0aWYgKG9iai5jc3MpIHRyYW5zaXRpb25NYW5hZ2VyLmRlbGV0ZVJ1bGUobm9kZSwgdGhpcy5wcm9ncmFtLm5hbWUpO1xuXHRcdFx0dGhpcy5wcm9ncmFtID0gdGhpcy5wZW5kaW5nID0gbnVsbDtcblx0XHRcdHRoaXMucnVubmluZyA9IGZhbHNlO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHRyYW5zaXRpb25NYW5hZ2VyID0ge1xuXHRydW5uaW5nOiBmYWxzZSxcblx0dHJhbnNpdGlvbnM6IFtdLFxuXHRib3VuZDogbnVsbCxcblx0c3R5bGVzaGVldDogbnVsbCxcblx0YWN0aXZlUnVsZXM6IHt9LFxuXG5cdGFkZDogZnVuY3Rpb24odHJhbnNpdGlvbikge1xuXHRcdHRoaXMudHJhbnNpdGlvbnMucHVzaCh0cmFuc2l0aW9uKTtcblxuXHRcdGlmICghdGhpcy5ydW5uaW5nKSB7XG5cdFx0XHR0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYm91bmQgfHwgKHRoaXMuYm91bmQgPSB0aGlzLm5leHQuYmluZCh0aGlzKSkpO1xuXHRcdH1cblx0fSxcblxuXHRhZGRSdWxlOiBmdW5jdGlvbihydWxlLCBuYW1lKSB7XG5cdFx0aWYgKCF0aGlzLmFjdGl2ZVJ1bGVzW25hbWVdKSB7XG5cdFx0XHR0aGlzLmFjdGl2ZVJ1bGVzW25hbWVdID0gdHJ1ZTtcblx0XHRcdHRoaXMuc3R5bGVzaGVldC5pbnNlcnRSdWxlKCdAa2V5ZnJhbWVzICcgKyBuYW1lICsgJyAnICsgcnVsZSwgdGhpcy5zdHlsZXNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG5cdFx0fVxuXHR9LFxuXG5cdG5leHQ6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMucnVubmluZyA9IGZhbHNlO1xuXG5cdFx0dmFyIG5vdyA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcblx0XHR2YXIgaSA9IHRoaXMudHJhbnNpdGlvbnMubGVuZ3RoO1xuXG5cdFx0d2hpbGUgKGktLSkge1xuXHRcdFx0dmFyIHRyYW5zaXRpb24gPSB0aGlzLnRyYW5zaXRpb25zW2ldO1xuXG5cdFx0XHRpZiAodHJhbnNpdGlvbi5wcm9ncmFtICYmIG5vdyA+PSB0cmFuc2l0aW9uLnByb2dyYW0uZW5kKSB7XG5cdFx0XHRcdHRyYW5zaXRpb24uZG9uZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHJhbnNpdGlvbi5wZW5kaW5nICYmIG5vdyA+PSB0cmFuc2l0aW9uLnBlbmRpbmcuc3RhcnQpIHtcblx0XHRcdFx0dHJhbnNpdGlvbi5zdGFydCh0cmFuc2l0aW9uLnBlbmRpbmcpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHJhbnNpdGlvbi5ydW5uaW5nKSB7XG5cdFx0XHRcdHRyYW5zaXRpb24udXBkYXRlKG5vdyk7XG5cdFx0XHRcdHRoaXMucnVubmluZyA9IHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKCF0cmFuc2l0aW9uLnBlbmRpbmcpIHtcblx0XHRcdFx0dGhpcy50cmFuc2l0aW9ucy5zcGxpY2UoaSwgMSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucnVubmluZykge1xuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYm91bmQpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zdHlsZXNoZWV0KSB7XG5cdFx0XHR2YXIgaSA9IHRoaXMuc3R5bGVzaGVldC5jc3NSdWxlcy5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoaS0tKSB0aGlzLnN0eWxlc2hlZXQuZGVsZXRlUnVsZShpKTtcblx0XHRcdHRoaXMuYWN0aXZlUnVsZXMgPSB7fTtcblx0XHR9XG5cdH0sXG5cblx0ZGVsZXRlUnVsZTogZnVuY3Rpb24obm9kZSwgbmFtZSkge1xuXHRcdG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gbm9kZS5zdHlsZS5hbmltYXRpb25cblx0XHRcdC5zcGxpdCgnLCAnKVxuXHRcdFx0LmZpbHRlcihmdW5jdGlvbihhbmltKSB7XG5cdFx0XHRcdHJldHVybiBhbmltLnNsaWNlKDAsIG5hbWUubGVuZ3RoKSAhPT0gbmFtZTtcblx0XHRcdH0pXG5cdFx0XHQuam9pbignLCAnKTtcblx0fVxufTtcblxuZnVuY3Rpb24gZGVzdHJveShkZXRhY2gpIHtcblx0dGhpcy5kZXN0cm95ID0gbm9vcDtcblx0dGhpcy5maXJlKCdkZXN0cm95Jyk7XG5cdHRoaXMuc2V0ID0gdGhpcy5nZXQgPSBub29wO1xuXG5cdGlmIChkZXRhY2ggIT09IGZhbHNlKSB0aGlzLl9mcmFnbWVudC51bm1vdW50KCk7XG5cdHRoaXMuX2ZyYWdtZW50LmRlc3Ryb3koKTtcblx0dGhpcy5fZnJhZ21lbnQgPSB0aGlzLl9zdGF0ZSA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3lEZXYoZGV0YWNoKSB7XG5cdGRlc3Ryb3kuY2FsbCh0aGlzLCBkZXRhY2gpO1xuXHR0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLndhcm4oJ0NvbXBvbmVudCB3YXMgYWxyZWFkeSBkZXN0cm95ZWQnKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gZGlmZmVycyhhLCBiKSB7XG5cdHJldHVybiBhICE9PSBiIHx8ICgoYSAmJiB0eXBlb2YgYSA9PT0gJ29iamVjdCcpIHx8IHR5cGVvZiBhID09PSAnZnVuY3Rpb24nKTtcbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hPYnNlcnZlcnMoY29tcG9uZW50LCBncm91cCwgY2hhbmdlZCwgbmV3U3RhdGUsIG9sZFN0YXRlKSB7XG5cdGZvciAodmFyIGtleSBpbiBncm91cCkge1xuXHRcdGlmICghY2hhbmdlZFtrZXldKSBjb250aW51ZTtcblxuXHRcdHZhciBuZXdWYWx1ZSA9IG5ld1N0YXRlW2tleV07XG5cdFx0dmFyIG9sZFZhbHVlID0gb2xkU3RhdGVba2V5XTtcblxuXHRcdHZhciBjYWxsYmFja3MgPSBncm91cFtrZXldO1xuXHRcdGlmICghY2FsbGJhY2tzKSBjb250aW51ZTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHR2YXIgY2FsbGJhY2sgPSBjYWxsYmFja3NbaV07XG5cdFx0XHRpZiAoY2FsbGJhY2suX19jYWxsaW5nKSBjb250aW51ZTtcblxuXHRcdFx0Y2FsbGJhY2suX19jYWxsaW5nID0gdHJ1ZTtcblx0XHRcdGNhbGxiYWNrLmNhbGwoY29tcG9uZW50LCBuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuXHRcdFx0Y2FsbGJhY2suX19jYWxsaW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGdldChrZXkpIHtcblx0cmV0dXJuIGtleSA/IHRoaXMuX3N0YXRlW2tleV0gOiB0aGlzLl9zdGF0ZTtcbn1cblxuZnVuY3Rpb24gZmlyZShldmVudE5hbWUsIGRhdGEpIHtcblx0dmFyIGhhbmRsZXJzID1cblx0XHRldmVudE5hbWUgaW4gdGhpcy5faGFuZGxlcnMgJiYgdGhpcy5faGFuZGxlcnNbZXZlbnROYW1lXS5zbGljZSgpO1xuXHRpZiAoIWhhbmRsZXJzKSByZXR1cm47XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBoYW5kbGVycy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGhhbmRsZXJzW2ldLmNhbGwodGhpcywgZGF0YSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShrZXksIGNhbGxiYWNrLCBvcHRpb25zKSB7XG5cdHZhciBncm91cCA9IG9wdGlvbnMgJiYgb3B0aW9ucy5kZWZlclxuXHRcdD8gdGhpcy5fb2JzZXJ2ZXJzLnBvc3Rcblx0XHQ6IHRoaXMuX29ic2VydmVycy5wcmU7XG5cblx0KGdyb3VwW2tleV0gfHwgKGdyb3VwW2tleV0gPSBbXSkpLnB1c2goY2FsbGJhY2spO1xuXG5cdGlmICghb3B0aW9ucyB8fCBvcHRpb25zLmluaXQgIT09IGZhbHNlKSB7XG5cdFx0Y2FsbGJhY2suX19jYWxsaW5nID0gdHJ1ZTtcblx0XHRjYWxsYmFjay5jYWxsKHRoaXMsIHRoaXMuX3N0YXRlW2tleV0pO1xuXHRcdGNhbGxiYWNrLl9fY2FsbGluZyA9IGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRjYW5jZWw6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGluZGV4ID0gZ3JvdXBba2V5XS5pbmRleE9mKGNhbGxiYWNrKTtcblx0XHRcdGlmICh+aW5kZXgpIGdyb3VwW2tleV0uc3BsaWNlKGluZGV4LCAxKTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIG9ic2VydmVEZXYoa2V5LCBjYWxsYmFjaywgb3B0aW9ucykge1xuXHR2YXIgYyA9IChrZXkgPSAnJyArIGtleSkuc2VhcmNoKC9bXlxcd10vKTtcblx0aWYgKGMgPiAtMSkge1xuXHRcdHZhciBtZXNzYWdlID1cblx0XHRcdCdUaGUgZmlyc3QgYXJndW1lbnQgdG8gY29tcG9uZW50Lm9ic2VydmUoLi4uKSBtdXN0IGJlIHRoZSBuYW1lIG9mIGEgdG9wLWxldmVsIHByb3BlcnR5Jztcblx0XHRpZiAoYyA+IDApXG5cdFx0XHRtZXNzYWdlICs9IFwiLCBpLmUuICdcIiArIGtleS5zbGljZSgwLCBjKSArIFwiJyByYXRoZXIgdGhhbiAnXCIgKyBrZXkgKyBcIidcIjtcblxuXHRcdHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcblx0fVxuXG5cdHJldHVybiBvYnNlcnZlLmNhbGwodGhpcywga2V5LCBjYWxsYmFjaywgb3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIG9uKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuXHRpZiAoZXZlbnROYW1lID09PSAndGVhcmRvd24nKSByZXR1cm4gdGhpcy5vbignZGVzdHJveScsIGhhbmRsZXIpO1xuXG5cdHZhciBoYW5kbGVycyA9IHRoaXMuX2hhbmRsZXJzW2V2ZW50TmFtZV0gfHwgKHRoaXMuX2hhbmRsZXJzW2V2ZW50TmFtZV0gPSBbXSk7XG5cdGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG5cblx0cmV0dXJuIHtcblx0XHRjYW5jZWw6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGluZGV4ID0gaGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKTtcblx0XHRcdGlmICh+aW5kZXgpIGhhbmRsZXJzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBvbkRldihldmVudE5hbWUsIGhhbmRsZXIpIHtcblx0aWYgKGV2ZW50TmFtZSA9PT0gJ3RlYXJkb3duJykge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFwiVXNlIGNvbXBvbmVudC5vbignZGVzdHJveScsIC4uLikgaW5zdGVhZCBvZiBjb21wb25lbnQub24oJ3RlYXJkb3duJywgLi4uKSB3aGljaCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHVuc3VwcG9ydGVkIGluIFN2ZWx0ZSAyXCJcblx0XHQpO1xuXHRcdHJldHVybiB0aGlzLm9uKCdkZXN0cm95JywgaGFuZGxlcik7XG5cdH1cblxuXHRyZXR1cm4gb24uY2FsbCh0aGlzLCBldmVudE5hbWUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBzZXQobmV3U3RhdGUpIHtcblx0dGhpcy5fc2V0KGFzc2lnbih7fSwgbmV3U3RhdGUpKTtcblx0aWYgKHRoaXMuX3Jvb3QuX2xvY2spIHJldHVybjtcblx0dGhpcy5fcm9vdC5fbG9jayA9IHRydWU7XG5cdGNhbGxBbGwodGhpcy5fcm9vdC5fYmVmb3JlY3JlYXRlKTtcblx0Y2FsbEFsbCh0aGlzLl9yb290Ll9vbmNyZWF0ZSk7XG5cdGNhbGxBbGwodGhpcy5fcm9vdC5fYWZ0ZXJjcmVhdGUpO1xuXHR0aGlzLl9yb290Ll9sb2NrID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIF9zZXQobmV3U3RhdGUpIHtcblx0dmFyIG9sZFN0YXRlID0gdGhpcy5fc3RhdGUsXG5cdFx0Y2hhbmdlZCA9IHt9LFxuXHRcdGRpcnR5ID0gZmFsc2U7XG5cblx0Zm9yICh2YXIga2V5IGluIG5ld1N0YXRlKSB7XG5cdFx0aWYgKGRpZmZlcnMobmV3U3RhdGVba2V5XSwgb2xkU3RhdGVba2V5XSkpIGNoYW5nZWRba2V5XSA9IGRpcnR5ID0gdHJ1ZTtcblx0fVxuXHRpZiAoIWRpcnR5KSByZXR1cm47XG5cblx0dGhpcy5fc3RhdGUgPSBhc3NpZ24oe30sIG9sZFN0YXRlLCBuZXdTdGF0ZSk7XG5cdHRoaXMuX3JlY29tcHV0ZShjaGFuZ2VkLCB0aGlzLl9zdGF0ZSwgb2xkU3RhdGUsIGZhbHNlKTtcblx0aWYgKHRoaXMuX2JpbmQpIHRoaXMuX2JpbmQoY2hhbmdlZCwgdGhpcy5fc3RhdGUpO1xuXHRkaXNwYXRjaE9ic2VydmVycyh0aGlzLCB0aGlzLl9vYnNlcnZlcnMucHJlLCBjaGFuZ2VkLCB0aGlzLl9zdGF0ZSwgb2xkU3RhdGUpO1xuXHR0aGlzLl9mcmFnbWVudC51cGRhdGUoY2hhbmdlZCwgdGhpcy5fc3RhdGUpO1xuXHRkaXNwYXRjaE9ic2VydmVycyh0aGlzLCB0aGlzLl9vYnNlcnZlcnMucG9zdCwgY2hhbmdlZCwgdGhpcy5fc3RhdGUsIG9sZFN0YXRlKTtcbn1cblxuZnVuY3Rpb24gX3NldERldihuZXdTdGF0ZSkge1xuXHRpZiAodHlwZW9mIG5ld1N0YXRlICE9PSAnb2JqZWN0Jykge1xuXHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdHRoaXMuX2RlYnVnTmFtZSArICcgLnNldCB3YXMgY2FsbGVkIHdpdGhvdXQgYW4gb2JqZWN0IG9mIGRhdGEga2V5LXZhbHVlcyB0byB1cGRhdGUuJ1xuXHRcdCk7XG5cdH1cblxuXHR0aGlzLl9jaGVja1JlYWRPbmx5KG5ld1N0YXRlKTtcblx0X3NldC5jYWxsKHRoaXMsIG5ld1N0YXRlKTtcbn1cblxuZnVuY3Rpb24gY2FsbEFsbChmbnMpIHtcblx0d2hpbGUgKGZucyAmJiBmbnMubGVuZ3RoKSBmbnMucG9wKCkoKTtcbn1cblxuZnVuY3Rpb24gX21vdW50KHRhcmdldCwgYW5jaG9yKSB7XG5cdHRoaXMuX2ZyYWdtZW50Lm1vdW50KHRhcmdldCwgYW5jaG9yKTtcbn1cblxuZnVuY3Rpb24gX3VubW91bnQoKSB7XG5cdHRoaXMuX2ZyYWdtZW50LnVubW91bnQoKTtcbn1cblxudmFyIHByb3RvID0ge1xuXHRkZXN0cm95OiBkZXN0cm95LFxuXHRnZXQ6IGdldCxcblx0ZmlyZTogZmlyZSxcblx0b2JzZXJ2ZTogb2JzZXJ2ZSxcblx0b246IG9uLFxuXHRzZXQ6IHNldCxcblx0dGVhcmRvd246IGRlc3Ryb3ksXG5cdF9yZWNvbXB1dGU6IG5vb3AsXG5cdF9zZXQ6IF9zZXQsXG5cdF9tb3VudDogX21vdW50LFxuXHRfdW5tb3VudDogX3VubW91bnRcbn07XG5cbnZhciBwcm90b0RldiA9IHtcblx0ZGVzdHJveTogZGVzdHJveURldixcblx0Z2V0OiBnZXQsXG5cdGZpcmU6IGZpcmUsXG5cdG9ic2VydmU6IG9ic2VydmVEZXYsXG5cdG9uOiBvbkRldixcblx0c2V0OiBzZXQsXG5cdHRlYXJkb3duOiBkZXN0cm95RGV2LFxuXHRfcmVjb21wdXRlOiBub29wLFxuXHRfc2V0OiBfc2V0RGV2LFxuXHRfbW91bnQ6IF9tb3VudCxcblx0X3VubW91bnQ6IF91bm1vdW50XG59O1xuXG5leHBvcnQgeyBkZXN0cm95LCBkZXN0cm95RGV2LCBkaWZmZXJzLCBkaXNwYXRjaE9ic2VydmVycywgZ2V0LCBmaXJlLCBvYnNlcnZlLCBvYnNlcnZlRGV2LCBvbiwgb25EZXYsIHNldCwgX3NldCwgX3NldERldiwgY2FsbEFsbCwgX21vdW50LCBfdW5tb3VudCwgcHJvdG8sIHByb3RvRGV2LCBhcHBlbmROb2RlLCBpbnNlcnROb2RlLCBkZXRhY2hOb2RlLCBkZXRhY2hCZXR3ZWVuLCBkZXRhY2hCZWZvcmUsIGRldGFjaEFmdGVyLCByZWluc2VydEJldHdlZW4sIHJlaW5zZXJ0Q2hpbGRyZW4sIHJlaW5zZXJ0QWZ0ZXIsIHJlaW5zZXJ0QmVmb3JlLCBkZXN0cm95RWFjaCwgY3JlYXRlRnJhZ21lbnQsIGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZVN2Z0VsZW1lbnQsIGNyZWF0ZVRleHQsIGNyZWF0ZUNvbW1lbnQsIGFkZExpc3RlbmVyLCByZW1vdmVMaXN0ZW5lciwgc2V0QXR0cmlidXRlLCBzZXRYbGlua0F0dHJpYnV0ZSwgZ2V0QmluZGluZ0dyb3VwVmFsdWUsIHRvTnVtYmVyLCBjaGlsZHJlbiwgY2xhaW1FbGVtZW50LCBjbGFpbVRleHQsIHNldElucHV0VHlwZSwgc2V0U3R5bGUsIGxpbmVhciwgZ2VuZXJhdGVSdWxlLCBoYXNoLCB3cmFwVHJhbnNpdGlvbiwgdHJhbnNpdGlvbk1hbmFnZXIsIG5vb3AsIGFzc2lnbiB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3ZlbHRlL3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8IS0tXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuLS0+XG5cbjxkaXYgcmVmOnJvb3QgY2xhc3M9XCJzcHJpdGUgb3V0ZXIge3tob3Zlcl9jbGFzc319XCIgc3R5bGU9XCItLWRlZmF1bHQtc2l6ZToge3tmaW5hbF9zcHJpdGVfc2l6ZX19cHg7XG4gLS1kZWZhdWx0LXBvc2l0aW9uOiAte3tvZmZzZXRfeH19cHggLXt7b2Zmc2V0X3l9fXB4O1xuIC0taG92ZXItc2l6ZToge3tzcHJpdGVfc2l6ZX19cHg7XG4gLS1ob3Zlci1wb3NpdGlvbjogLXt7Y29ybmVyX3h9fXB4IC17e2Nvcm5lcl95fX1weDtcbiAtLWNvbnRhaW5lci1zaXplOiB7e3NpemV9fXB4OyBcbiAtLWRlZmF1bHQtcmF0aW86IHt7IHNpemUgLyBmaW5hbF9zcHJpdGVfc2l6ZSB9fTtcbiAtLWhvdmVyLXNjYWxlOiB7e2hvdmVyX3NjYWxlfX07XG4gLS10cmFuc2l0aW9uX2Nzczoge3t0cmFuc2l0aW9uX2Nzc319O1xuIC0tYm9yZGVyX2Nzczoge3tib3JkZXJfY3NzfX07XG4gLS1waXhlbGF0ZWQ6IHt7cGl4ZWxhdGVkID8gJ3BpeGVsYXRlZCcgOiAnYXV0byd9fVwiPlxuICA8ZGl2IGNsYXNzPVwibWlkXCI+XG4gICAgPGRpdiBjbGFzcz1cImlubmVyIHt7c3JjX2NsYXNzfX1cIj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPHN0eWxlPlxuXG4ub3V0ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICAvKm1hcmdpbi1yaWdodDogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7Ki9cbiAgd2lkdGg6IHZhcigtLWNvbnRhaW5lci1zaXplKTtcbiAgaGVpZ2h0OiB2YXIoLS1jb250YWluZXItc2l6ZSk7XG59XG5cbi5taWQsIC5pbm5lciB7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb25fY3NzKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5taWQge1xuICB0cmFuc2Zvcm06IHNjYWxlKCB2YXIoLS1kZWZhdWx0LXJhdGlvKSApO1xuICBtYXJnaW46IGNhbGMoIGNhbGMoIHZhcigtLWNvbnRhaW5lci1zaXplKSAtIHZhcigtLWRlZmF1bHQtc2l6ZSkgKSAvIDIgKTtcbn1cblxuLmlubmVyIHtcbiAgaW1hZ2UtcmVuZGVyaW5nOiAgdmFyKC0tcGl4ZWxhdGVkKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdmFyKC0tZGVmYXVsdC1wb3NpdGlvbik7XG4gIHdpZHRoOiB2YXIoLS1kZWZhdWx0LXNpemUpO1xuICBoZWlnaHQ6IHZhcigtLWRlZmF1bHQtc2l6ZSk7XG59XG5cbi5vdXRlci5ob3ZlcmFibGU6aG92ZXIge1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5vdXRlci5ob3ZlcmFibGU6aG92ZXIgLmlubmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdmFyKC0taG92ZXItcG9zaXRpb24pO1xuICB3aWR0aDogdmFyKC0taG92ZXItc2l6ZSk7XG4gIGhlaWdodDogdmFyKC0taG92ZXItc2l6ZSk7XG4gIC8qdHJhbnNpdGlvbjogbm9uZTsqL1xufVxuXG4ub3V0ZXIuaG92ZXJhYmxlOmhvdmVyIC5taWQge1xuICB0cmFuc2Zvcm06IHNjYWxlKHZhcigtLWhvdmVyLXNjYWxlKSk7XG4gIG1hcmdpbjogY2FsYyggY2FsYyggdmFyKC0tY29udGFpbmVyLXNpemUpIC0gdmFyKC0taG92ZXItc2l6ZSkgKSAvIDIgKTtcbiAgLyp0cmFuc2l0aW9uOiBub25lOyovXG4gIC8qYm94LXNoYWRvdzogMHB4IDVweCAyMHB4IHJnYmEoMCwwLDAsMC42NjcpOyovXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyX2Nzcyk7XG4gIHdpZHRoOiB2YXIoLS1ob3Zlci1zaXplKTtcbn1cblxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzcmNfY2xhc3M6IFwibWl4ZWQ0ZFwiLFxuICAgICAgICBzcHJpdGVfc2l6ZTogMjAwLFxuICAgICAgICBzcHJpdGVfc2NhbGU6IDEuMCxcbiAgICAgICAgc2l6ZTogMTAwLFxuICAgICAgICB4OiAwLCAvLyBzcGVjaWZpZWQgaW4gU3ByaXRlIHN1YmNsYXNzZXNcbiAgICAgICAgeTogMCxcbiAgICAgICAgc2hpZnQ6IFswLjUsMC41XSxcbiAgICAgICAgaG92ZXI6IGZhbHNlLFxuICAgICAgICBob3Zlcl9zY2FsZTogMSxcbiAgICAgICAgdHJhbnNpdGlvbl9iYWNrZ3JvdW5kOiBmYWxzZSxcbiAgICAgICAgYm9yZGVyOiBmYWxzZSxcbiAgICAgICAgcGl4ZWxhdGVkOiB0cnVlXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgY29ybmVyX3g6IChzcHJpdGVfc2l6ZSwgeCwgc3ByaXRlX3NjYWxlKSA9PiBzcHJpdGVfc2l6ZSp4LFxuICAgICAgY29ybmVyX3k6IChzcHJpdGVfc2l6ZSwgeSwgc3ByaXRlX3NjYWxlKSA9PiBzcHJpdGVfc2l6ZSp5LFxuICAgICAgb2Zmc2V0X3g6IChzcHJpdGVfc2l6ZSwgc3ByaXRlX3NjYWxlLCBjb3JuZXJfeCwgc2hpZnQsIHNpemUsIHJhdGlvKSA9PiB7XG4gICAgICAgIHJldHVybiBjb3JuZXJfeCArIHNwcml0ZV9zaXplICogc2hpZnRbMF0gKiAoMS1zcHJpdGVfc2NhbGUpO1xuICAgICAgfSxcbiAgICAgIG9mZnNldF95OiAoc3ByaXRlX3NpemUsIHNwcml0ZV9zY2FsZSwgY29ybmVyX3ksIHNoaWZ0LCBzaXplLCByYXRpbykgPT4ge1xuICAgICAgICByZXR1cm4gY29ybmVyX3kgKyBzcHJpdGVfc2l6ZSAqIHNoaWZ0WzFdICogKDEtc3ByaXRlX3NjYWxlKTtcbiAgICAgIH0sXG4gICAgICBmaW5hbF9zcHJpdGVfc2l6ZTogKHNwcml0ZV9zY2FsZSwgc3ByaXRlX3NpemUpID0+IHNwcml0ZV9zY2FsZSAqIHNwcml0ZV9zaXplLFxuICAgICAgcmF0aW86IChzaXplLCBmaW5hbF9zcHJpdGVfc2l6ZSkgPT4gc2l6ZS9maW5hbF9zcHJpdGVfc2l6ZSxcbiAgICAgIG1hcmdpbjogKGZpbmFsX3Nwcml0ZV9zaXplLCBzaXplKSA9PiAtKGZpbmFsX3Nwcml0ZV9zaXplLXNpemUpLzIsXG4gICAgICB0cmFuc2l0aW9uX2NzczogKHRyYW5zaXRpb25fYmFja2dyb3VuZCkgPT4ge1xuICAgICAgICBsZXQgY3NzID0gYHdpZHRoIDAuMXMgZWFzZS1vdXQsIGhlaWdodCAwLjFzIGVhc2Utb3V0LCBtYXJnaW4gMC4xcyBlYXNlLW91dCwgdHJhbnNmb3JtIDAuMXMgZWFzZS1vdXRgO1xuICAgICAgICBpZiAodHJhbnNpdGlvbl9iYWNrZ3JvdW5kKSB7XG4gICAgICAgICAgY3NzICs9IGAsIGJhY2tncm91bmQtcG9zaXRpb24gMC4xcyBlYXNlLW91dGA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNzcztcbiAgICAgIH0sXG4gICAgICBib3JkZXJfY3NzOiAoYm9yZGVyKSA9PiBib3JkZXIgPyAnMnB4IHNvbGlkIHdoaXRlJyA6ICdub25lJyxcbiAgICAgIGhvdmVyX2NsYXNzOiAoaG92ZXIpID0+IGhvdmVyID8gJ2hvdmVyYWJsZScgOiAnJ1xuICAgIH0sXG4gICAgb25jcmVhdGUoKSB7XG4gICAgICAvLyB0aGlzLm9ic2VydmUoJ3gnLCAoeDEsIHgyKSA9PiBjb25zb2xlLmxvZyh0aGlzKSlcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpYWdyYW1zL1Nwcml0ZS5odG1sIiwidmFyIGFycmF5Tm90YXRpb25QYXR0ZXJuID0gL1xcW1xccyooXFxkKylcXHMqXFxdL2c7XG5mdW5jdGlvbiBtYWtlQXJyYXlNZXRob2QobmFtZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoa2V5cGF0aCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcGFydHMgPSBrZXlwYXRoLnJlcGxhY2UoYXJyYXlOb3RhdGlvblBhdHRlcm4sICcuJDEnKS5zcGxpdCgnLicpO1xuICAgICAgICB2YXIga2V5ID0gcGFydHMuc2hpZnQoKTtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5nZXQoa2V5KTtcbiAgICAgICAgdmFyIGFycmF5ID0gdmFsdWU7XG4gICAgICAgIHdoaWxlIChwYXJ0cy5sZW5ndGgpXG4gICAgICAgICAgICBhcnJheSA9IGFycmF5W3BhcnRzLnNoaWZ0KCldO1xuICAgICAgICB2YXIgcmVzdWx0ID0gYXJyYXlbbmFtZV0uYXBwbHkoYXJyYXksIGFyZ3MpO1xuICAgICAgICB0aGlzLnNldCgoX2EgPSB7fSwgX2Fba2V5XSA9IHZhbHVlLCBfYSkpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB2YXIgX2E7XG4gICAgfTtcbn1cbnZhciBwdXNoID0gbWFrZUFycmF5TWV0aG9kKCdwdXNoJyk7XG52YXIgcG9wID0gbWFrZUFycmF5TWV0aG9kKCdwb3AnKTtcbnZhciBzaGlmdCA9IG1ha2VBcnJheU1ldGhvZCgnc2hpZnQnKTtcbnZhciB1bnNoaWZ0ID0gbWFrZUFycmF5TWV0aG9kKCd1bnNoaWZ0Jyk7XG52YXIgc3BsaWNlID0gbWFrZUFycmF5TWV0aG9kKCdzcGxpY2UnKTtcbnZhciBzb3J0ID0gbWFrZUFycmF5TWV0aG9kKCdzb3J0Jyk7XG52YXIgcmV2ZXJzZSA9IG1ha2VBcnJheU1ldGhvZCgncmV2ZXJzZScpO1xuXG5mdW5jdGlvbiBpc0RhdGUob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbnZhciBzY2hlZHVsZXIgPSB7XG4gICAgY29tcG9uZW50czogW10sXG4gICAgcnVubmluZzogZmFsc2UsXG4gICAgYWRkOiBmdW5jdGlvbiAoY29tcG9uZW50KSB7XG4gICAgICAgIGlmICh+c2NoZWR1bGVyLmNvbXBvbmVudHMuaW5kZXhPZihjb21wb25lbnQpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBzY2hlZHVsZXIuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgIGlmICghc2NoZWR1bGVyLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHNjaGVkdWxlci5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzY2hlZHVsZXIubmV4dCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5vdyA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgdmFyIGhhc0NvbXBvbmVudHMgPSBmYWxzZTtcbiAgICAgICAgdmFyIGkgPSBzY2hlZHVsZXIuY29tcG9uZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgIHZhciBjb21wb25lbnQgPSBzY2hlZHVsZXIuY29tcG9uZW50c1tpXTtcbiAgICAgICAgICAgIHZhciBkYXRhID0ge307XG4gICAgICAgICAgICB2YXIgaGFzVHdlZW5zID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gY29tcG9uZW50Ll9jdXJyZW50VHdlZW5zKSB7XG4gICAgICAgICAgICAgICAgdmFyIHQgPSBjb21wb25lbnQuX2N1cnJlbnRUd2VlbnNba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAobm93ID49IHQuZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFba2V5XSA9IHQudG87XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjb21wb25lbnQuX2N1cnJlbnRUd2VlbnNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgdC5mdWxmaWwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc1R3ZWVucyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGhhc0NvbXBvbmVudHMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm93ID49IHQuc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwID0gKG5vdyAtIHQuc3RhcnQpIC8gdC5kdXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFba2V5XSA9IHQudmFsdWUodC5lYXNlKHApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbXBvbmVudC5fdHdlZW5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgY29tcG9uZW50LnNldChkYXRhKTtcbiAgICAgICAgICAgIGNvbXBvbmVudC5fdHdlZW5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICghaGFzVHdlZW5zKVxuICAgICAgICAgICAgICAgIHNjaGVkdWxlci5jb21wb25lbnRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzQ29tcG9uZW50cykge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNjaGVkdWxlci5uZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNjaGVkdWxlci5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59O1xuZnVuY3Rpb24gc25hcCh0bykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiB0bzsgfTtcbn1cbmZ1bmN0aW9uIGludGVycG9sYXRlKGEsIGIpIHtcbiAgICBpZiAoYSA9PT0gYiB8fCBhICE9PSBhKVxuICAgICAgICByZXR1cm4gc25hcChhKTtcbiAgICB2YXIgdHlwZSA9IHR5cGVvZiBhO1xuICAgIGlmICh0eXBlICE9PSB0eXBlb2YgYiB8fCBBcnJheS5pc0FycmF5KGEpICE9PSBBcnJheS5pc0FycmF5KGIpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGludGVycG9sYXRlIHZhbHVlcyBvZiBkaWZmZXJlbnQgdHlwZScpO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgICAgICB2YXIgYXJyXzEgPSBiLm1hcChmdW5jdGlvbiAoYmksIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnRlcnBvbGF0ZShhW2ldLCBiaSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJfMS5tYXAoZnVuY3Rpb24gKGZuKSB7IHJldHVybiBmbih0KTsgfSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAoIWEgfHwgIWIpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ09iamVjdCBjYW5ub3QgYmUgbnVsbCcpO1xuICAgICAgICBpZiAoaXNEYXRlKGEpICYmIGlzRGF0ZShiKSkge1xuICAgICAgICAgICAgYSA9IGEuZ2V0VGltZSgpO1xuICAgICAgICAgICAgYiA9IGIuZ2V0VGltZSgpO1xuICAgICAgICAgICAgdmFyIGRlbHRhXzEgPSBiIC0gYTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShhICsgdCAqIGRlbHRhXzEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIga2V5c18xID0gT2JqZWN0LmtleXMoYik7XG4gICAgICAgIHZhciBpbnRlcnBvbGF0b3JzXzEgPSB7fTtcbiAgICAgICAgdmFyIHJlc3VsdF8xID0ge307XG4gICAgICAgIGtleXNfMS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGludGVycG9sYXRvcnNfMVtrZXldID0gaW50ZXJwb2xhdGUoYVtrZXldLCBiW2tleV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICBrZXlzXzEuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0XzFba2V5XSA9IGludGVycG9sYXRvcnNfMVtrZXldKHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0XzE7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgICB2YXIgZGVsdGFfMiA9IGIgLSBhO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiBhICsgdCAqIGRlbHRhXzI7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBpbnRlcnBvbGF0ZSBcIiArIHR5cGUgKyBcIiB2YWx1ZXNcIik7XG59XG5mdW5jdGlvbiBsaW5lYXIoeCkge1xuICAgIHJldHVybiB4O1xufVxuZnVuY3Rpb24gdHdlZW4oa2V5LCB0bywgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICBpZiAoIXRoaXMuX2N1cnJlbnRUd2VlbnMpIHtcbiAgICAgICAgdGhpcy5fY3VycmVudFR3ZWVucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX3R3ZWVuaW5nID0gZmFsc2U7XG4gICAgICAgIHZhciBzZXRfMSA9IHRoaXMuc2V0O1xuICAgICAgICB0aGlzLnNldCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBpZiAoIV90aGlzLl90d2VlbmluZykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleV8xIGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLl9jdXJyZW50VHdlZW5zW2tleV8xXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9jdXJyZW50VHdlZW5zW2tleV8xXS5hYm9ydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldF8xLmNhbGwoX3RoaXMsIGRhdGEpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAodGhpcy5fY3VycmVudFR3ZWVuc1trZXldKVxuICAgICAgICB0aGlzLl9jdXJyZW50VHdlZW5zW2tleV0uYWJvcnQoKTtcbiAgICB2YXIgc3RhcnQgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCkgKyAob3B0aW9ucy5kZWxheSB8fCAwKTtcbiAgICB2YXIgZHVyYXRpb24gPSBvcHRpb25zLmR1cmF0aW9uIHx8IDQwMDtcbiAgICB2YXIgZW5kID0gc3RhcnQgKyBkdXJhdGlvbjtcbiAgICB2YXIgdCA9IHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIHZhbHVlOiAob3B0aW9ucy5pbnRlcnBvbGF0ZSB8fCBpbnRlcnBvbGF0ZSkodGhpcy5nZXQoa2V5KSwgdG8pLFxuICAgICAgICB0bzogdG8sXG4gICAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgICAgZW5kOiBlbmQsXG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgZWFzZTogb3B0aW9ucy5lYXNpbmcgfHwgbGluZWFyLFxuICAgICAgICBydW5uaW5nOiB0cnVlLFxuICAgICAgICBhYm9ydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdC5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBkZWxldGUgX3RoaXMuX2N1cnJlbnRUd2VlbnNba2V5XTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5fY3VycmVudFR3ZWVuc1trZXldID0gdDtcbiAgICBzY2hlZHVsZXIuYWRkKHRoaXMpO1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKGZ1bGZpbCkge1xuICAgICAgICB0LmZ1bGZpbCA9IGZ1bGZpbDtcbiAgICB9KTtcbiAgICBwcm9taXNlLmFib3J0ID0gdC5hYm9ydDtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gZ2V0TmVzdGVkVmFsdWUob2JqLCBwYXJ0cykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKCFvYmopXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBvYmogPSBvYmpbcGFydHNbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZURlZXAoa2V5cGF0aCwgY2FsbGJhY2ssIG9wdHMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBwYXJ0cyA9IGtleXBhdGgucmVwbGFjZSgvXFxbKFxcZCspXFxdL2csICcuJDEnKS5zcGxpdCgnLicpO1xuICAgIHZhciBrZXkgPSBwYXJ0cy5zaGlmdCgpO1xuICAgIHZhciBsYXN0ID0gb3B0cyAmJiBvcHRzLmluaXQgPT09IGZhbHNlXG4gICAgICAgID8gZ2V0TmVzdGVkVmFsdWUodGhpcy5nZXQoa2V5KSwgcGFydHMpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiB0aGlzLm9ic2VydmUoa2V5LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSBnZXROZXN0ZWRWYWx1ZSh2YWx1ZSwgcGFydHMpO1xuICAgICAgICBpZiAodmFsdWUgIT09IGxhc3QgfHxcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHxcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbChfdGhpcywgdmFsdWUsIGxhc3QpO1xuICAgICAgICB9XG4gICAgICAgIGxhc3QgPSB2YWx1ZTtcbiAgICB9LCBvcHRzKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVlcChrZXlwYXRoKSB7XG4gICAgaWYgKGtleXBhdGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoKTtcbiAgICB9XG4gICAgdmFyIGtleXMgPSBrZXlwYXRoLnJlcGxhY2UoL1xcWyhcXGQrKVxcXS9nLCAnLiQxJykuc3BsaXQoJy4nKTtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLmdldChrZXlzWzBdKTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZVtrZXlzW2ldXTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gc2V0RGVlcChrZXlwYXRoLCB2YWx1ZSkge1xuICAgIGlmIChrZXlwYXRoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIga2V5cyA9IGtleXBhdGgucmVwbGFjZSgvXFxbKFxcZCspXFxdL2csICcuJDEnKS5zcGxpdCgnLicpO1xuICAgIHZhciBsYXN0S2V5ID0ga2V5cy5wb3AoKTtcbiAgICAvLyBJZiBub3QgYSBuZXN0ZWQga2V5cGF0aFxuICAgIGlmIChrZXlzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIGRhdGFfMSA9IHt9O1xuICAgICAgICBkYXRhXzFbbGFzdEtleV0gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5zZXQoZGF0YV8xKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgb2JqZWN0ID0gdGhpcy5nZXQoa2V5c1swXSk7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG9iamVjdCA9IG9iamVjdFtrZXlzW2ldXTtcbiAgICB9XG4gICAgb2JqZWN0W2xhc3RLZXldID0gdmFsdWU7XG4gICAgdmFyIGRhdGEgPSB7fTtcbiAgICBkYXRhW2tleXNbMF1dID0gdGhpcy5nZXQoa2V5c1swXSk7XG4gICAgdGhpcy5zZXQoZGF0YSk7XG59XG5cbnZhciBzY2hlZHVsZXIkMSA9IHtcbiAgICBjb21wb25lbnRzOiBbXSxcbiAgICBydW5uaW5nOiBmYWxzZSxcbiAgICBhZGQ6IGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgICAgICAgaWYgKH5zY2hlZHVsZXIkMS5jb21wb25lbnRzLmluZGV4T2YoY29tcG9uZW50KSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgc2NoZWR1bGVyJDEuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgIGlmICghc2NoZWR1bGVyJDEucnVubmluZykge1xuICAgICAgICAgICAgc2NoZWR1bGVyJDEucnVubmluZyA9IHRydWU7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2NoZWR1bGVyJDEubmV4dCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGhhc0NvbXBvbmVudHMgPSBmYWxzZTtcbiAgICAgICAgdmFyIGkgPSBzY2hlZHVsZXIkMS5jb21wb25lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgdmFyIGNvbXBvbmVudCA9IHNjaGVkdWxlciQxLmNvbXBvbmVudHNbaV07XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHt9O1xuICAgICAgICAgICAgdmFyIGhhc1NwcmluZ3MgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBjb21wb25lbnQuX3NwcmluZ3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3ByaW5nXzEgPSBjb21wb25lbnQuX3NwcmluZ3Nba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoc3ByaW5nXzEudGljayhkYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBoYXNTcHJpbmdzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaGFzQ29tcG9uZW50cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuX3NwcmluZ0NhbGxiYWNrc1trZXldKCk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjb21wb25lbnQuX3NwcmluZ3Nba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNvbXBvbmVudC5fc3ByaW5nQ2FsbGJhY2tzW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29tcG9uZW50Ll9zcHJpbmdpbmcgPSB0cnVlO1xuICAgICAgICAgICAgY29tcG9uZW50LnNldChkYXRhKTtcbiAgICAgICAgICAgIGNvbXBvbmVudC5fc3ByaW5naW5nID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoIWhhc1NwcmluZ3MpXG4gICAgICAgICAgICAgICAgc2NoZWR1bGVyJDEuY29tcG9uZW50cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc0NvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzY2hlZHVsZXIkMS5uZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNjaGVkdWxlciQxLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5mdW5jdGlvbiBzbmFwJDEoa2V5LCBhLCBiLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIHRpY2s6IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgICAgIG9iamVjdFtrZXldID0gYjtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAob2JqZWN0LCBvcHRpb25zKSB7XG4gICAgICAgICAgICBiID0gb2JqZWN0O1xuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIG51bWJlcihrZXksIGEsIGIsIG9wdGlvbnMpIHtcbiAgICB2YXIgdmVsb2NpdHkgPSAwO1xuICAgIHZhciBzdGlmZm5lc3MgPSBvcHRpb25zLnN0aWZmbmVzcywgZGFtcGluZyA9IG9wdGlvbnMuZGFtcGluZztcbiAgICB2YXIgdmFsdWVUaHJlc2hvbGQgPSBNYXRoLmFicyhiIC0gYSkgKiAwLjAwMTtcbiAgICB2YXIgdmVsb2NpdHlUaHJlc2hvbGQgPSB2YWx1ZVRocmVzaG9sZDsgLy8gVE9ETyBpcyB0aGlzIHJpZ2h0P1xuICAgIHJldHVybiB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICB0aWNrOiBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICAgICAgICB2YXIgZCA9IGIgLSBhO1xuICAgICAgICAgICAgdmFyIHNwcmluZyA9IHN0aWZmbmVzcyAqIGQ7XG4gICAgICAgICAgICB2YXIgZGFtcGVyID0gZGFtcGluZyAqIHZlbG9jaXR5O1xuICAgICAgICAgICAgdmFyIGFjY2VsZXJhdGlvbiA9IHNwcmluZyAtIGRhbXBlcjtcbiAgICAgICAgICAgIHZlbG9jaXR5ICs9IGFjY2VsZXJhdGlvbjtcbiAgICAgICAgICAgIGEgKz0gdmVsb2NpdHk7XG4gICAgICAgICAgICBvYmplY3Rba2V5XSA9IGE7XG4gICAgICAgICAgICBpZiAodmVsb2NpdHkgPCB2ZWxvY2l0eVRocmVzaG9sZCAmJlxuICAgICAgICAgICAgICAgIE1hdGguYWJzKGIgLSBhKSA8IHZhbHVlVGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0W2tleV0gPSBiO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9iamVjdFtrZXldID0gYTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uIChvYmplY3QsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGNoZWNrQ29tcGF0aWJpbGl0eShvYmplY3QsIGIpO1xuICAgICAgICAgICAgYiA9IG9iamVjdDtcbiAgICAgICAgICAgIHN0aWZmbmVzcyA9IG9wdGlvbnMuc3RpZmZuZXNzO1xuICAgICAgICAgICAgZGFtcGluZyA9IG9wdGlvbnMuZGFtcGluZztcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBkYXRlKGtleSwgYSwgYiwgb3B0aW9ucykge1xuICAgIHZhciBkdW1teSA9IHt9O1xuICAgIHZhciBzdWJzcHJpbmcgPSBudW1iZXIoa2V5LCBhLmdldFRpbWUoKSwgYi5nZXRUaW1lKCksIG9wdGlvbnMpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICB0aWNrOiBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoIXN1YnNwcmluZy50aWNrKGR1bW15KSkge1xuICAgICAgICAgICAgICAgIG9iamVjdFtrZXldID0gYjtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvYmplY3Rba2V5XSA9IG5ldyBEYXRlKGR1bW15W2tleV0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKG9iamVjdCwgb3B0aW9ucykge1xuICAgICAgICAgICAgY2hlY2tDb21wYXRpYmlsaXR5KG9iamVjdCwgYik7XG4gICAgICAgICAgICBzdWJzcHJpbmcudXBkYXRlKG9iamVjdC5nZXRUaW1lKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgYiA9IG9iamVjdDtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBhcnJheShrZXksIGEsIGIsIG9wdGlvbnMpIHtcbiAgICB2YXIgdmFsdWUgPSBbXTtcbiAgICB2YXIgc3Vic3ByaW5ncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBzdWJzcHJpbmdzLnB1c2goZ2V0U3ByaW5nKGksIGFbaV0sIGJbaV0sIG9wdGlvbnMpKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIHRpY2s6IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgICAgIHZhciBhY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic3ByaW5ncy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChzdWJzcHJpbmdzW2ldLnRpY2sodmFsdWUpKVxuICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFhY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBvYmplY3Rba2V5XSA9IGI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uIChvYmplY3QsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGNoZWNrQ29tcGF0aWJpbGl0eShvYmplY3QsIGIpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmplY3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBzdWJzcHJpbmdzW2ldLnVwZGF0ZShvYmplY3RbaV0sIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYiA9IG9iamVjdDtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBvYmplY3Qoa2V5LCBhLCBiLCBvcHRpb25zKSB7XG4gICAgdmFyIHZhbHVlID0ge307XG4gICAgdmFyIHN1YnNwcmluZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBrIGluIGEpIHtcbiAgICAgICAgc3Vic3ByaW5ncy5wdXNoKGdldFNwcmluZyhrLCBhW2tdLCBiW2tdLCBvcHRpb25zKSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICB0aWNrOiBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICAgICAgICB2YXIgYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN1YnNwcmluZ3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3Vic3ByaW5nc1tpXS50aWNrKHZhbHVlKSlcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0W2tleV0gPSBiO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAob2JqZWN0LCBvcHRpb25zKSB7XG4gICAgICAgICAgICBjaGVja0NvbXBhdGliaWxpdHkob2JqZWN0LCBiKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic3ByaW5ncy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIHN1YnNwcmluZ3NbaV0udXBkYXRlKG9iamVjdFtzdWJzcHJpbmdzW2ldLmtleV0sIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYiA9IG9iamVjdDtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBjaGVja0NvbXBhdGliaWxpdHkoYSwgYikge1xuICAgIHZhciB0eXBlID0gdHlwZW9mIGE7XG4gICAgaWYgKHR5cGUgIT09IHR5cGVvZiBiIHx8IEFycmF5LmlzQXJyYXkoYSkgIT09IEFycmF5LmlzQXJyYXkoYikgfHwgaXNEYXRlKGEpICE9PSBpc0RhdGUoYikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgaW50ZXJwb2xhdGUgdmFsdWVzIG9mIGRpZmZlcmVudCB0eXBlJyk7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAoIWEgfHwgIWIpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ09iamVjdCBjYW5ub3QgYmUgbnVsbCcpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgICAgICAgICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGludGVycG9sYXRlIGFycmF5cyBvZiBkaWZmZXJlbnQgbGVuZ3RoJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWtleXNNYXRjaChhLCBiKSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBpbnRlcnBvbGF0ZSBkaWZmZXJlbnRseS1zaGFwZWQgb2JqZWN0cycpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgIT09ICdudW1iZXInKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBpbnRlcnBvbGF0ZSBcIiArIHR5cGUgKyBcIiB2YWx1ZXNcIik7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0U3ByaW5nKGtleSwgYSwgYiwgb3B0aW9ucykge1xuICAgIGlmIChhID09PSBiIHx8IGEgIT09IGEpXG4gICAgICAgIHJldHVybiBzbmFwJDEoa2V5LCBhLCBiLCBvcHRpb25zKTtcbiAgICBjaGVja0NvbXBhdGliaWxpdHkoYSwgYik7XG4gICAgaWYgKHR5cGVvZiBhID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5KGtleSwgYSwgYiwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRGF0ZShhKSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUoa2V5LCBhLCBiLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqZWN0KGtleSwgYSwgYiwgb3B0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiBudW1iZXIoa2V5LCBhLCBiLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHNwcmluZyhrZXksIHRvLCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBpZiAoIXRoaXMuX3NwcmluZ3MpIHtcbiAgICAgICAgdGhpcy5fc3ByaW5ncyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX3NwcmluZ0NhbGxiYWNrcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX3NwcmluZ2luZyA9IGZhbHNlO1xuICAgICAgICB2YXIgc2V0XzEgPSB0aGlzLnNldDtcbiAgICAgICAgdGhpcy5zZXQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgaWYgKCFfdGhpcy5fc3ByaW5naW5nKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5XzEgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgX3RoaXMuX3NwcmluZ3Nba2V5XzFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldF8xLmNhbGwoX3RoaXMsIGRhdGEpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3ByaW5nc1trZXldKSB7XG4gICAgICAgIHRoaXMuX3NwcmluZ3Nba2V5XS51cGRhdGUodG8sIG9wdGlvbnMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIHNwcmluZ18yID0gZ2V0U3ByaW5nKGtleSwgdGhpcy5nZXQoa2V5KSwgdG8sIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9zcHJpbmdzW2tleV0gPSBzcHJpbmdfMjtcbiAgICB9XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAoZnVsZmlsKSB7XG4gICAgICAgIF90aGlzLl9zcHJpbmdDYWxsYmFja3Nba2V5XSA9IGZ1bGZpbDtcbiAgICB9KTtcbiAgICBzY2hlZHVsZXIkMS5hZGQodGhpcyk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5mdW5jdGlvbiBrZXlzTWF0Y2goYSwgYikge1xuICAgIHZhciBhS2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgIHZhciBiS2V5cyA9IE9iamVjdC5rZXlzKGIpO1xuICAgIGlmIChhS2V5cy5sZW5ndGggIT09IGJLZXlzLmxlbmd0aClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYUtleXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKCEoYUtleXNbaV0gaW4gYikpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgeyBwdXNoLCBwb3AsIHNoaWZ0LCB1bnNoaWZ0LCBzcGxpY2UsIHNvcnQsIHJldmVyc2UsIHR3ZWVuLCBvYnNlcnZlRGVlcCwgZ2V0RGVlcCwgc2V0RGVlcCwgc3ByaW5nIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdmVsdGUtZXh0cmFzL2Rpc3Qvc3ZlbHRlLWV4dHJhcy5lcy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcInlfdmFyc1wiOlt7XCJuYW1lXCI6XCJkZWNvcnJlbGF0ZVwiLFwibGFiZWxcIjpcIkRlY29ycmVsYXRlZCBTcGFjZVwiLFwidHlwZVwiOlwiYmluYXJ5XCIsXCJkZWZhdWx0XCI6MCxcInZhbHVlc1wiOlswLDFdfSx7XCJuYW1lXCI6XCJ0cmFuc2Zvcm1zXCIsXCJsYWJlbFwiOlwiVHJhbnNmb3JtYXRpb24gUm9idXN0bmVzc1wiLFwidHlwZVwiOlwiYmluYXJ5XCIsXCJkZWZhdWx0XCI6MCxcInZhbHVlc1wiOlswLDFdfSx7XCJuYW1lXCI6XCJsZWFybmluZ19yYXRlXCIsXCJsYWJlbFwiOlwiTGVhcm5pbmcgUmF0ZVwiLFwidHlwZVwiOlwibnVtYmVyXCIsXCJkZWZhdWx0XCI6MC4xLFwidmFsdWVzXCI6WzAuMDEsMC4wMjUsMC4wNSwwLjEsMC4yNV19XSxcInhfdmFyc1wiOlt7XCJuYW1lXCI6XCJuZXVyb25zXCIsXCJsYWJlbFwiOlwibmV1cm9uc1wiLFwidHlwZVwiOlwiaWNvblwiLFwidmFsdWVzXCI6W1wibWl4ZWQ0Yjo0NTJcIixcIm1peGVkNGI6NDY1XCIsXCJtaXhlZDRiOjQ3NVwiLFwibWl4ZWQ0Yjo0NjRcIixcIm1peGVkNGM6NDUwXCIsXCJtaXhlZDRkOjQ3OVwiXX0se1wibmFtZVwiOlwic3RlcHNcIixcImxhYmVsXCI6XCJzdGVwc1wiLFwidHlwZVwiOlwibnVtYmVyXCIsXCJkZWZhdWx0XCI6NCxcInZhbHVlc1wiOlsxLDQ4LDEyOCwyNTYsMjA0OF19XSxcInNpemVcIjo2OH1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3N0YXRpYy9pbWFnZXMvUHJlY29uZGl0aW9uZXIuanNvblxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG4vL1xuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbi8vIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbi8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuLy9cbi8vICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4vL1xuLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuLy8gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4vLyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4vLyBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuaW1wb3J0IEdvb2dsZU5ldEV4YW1wbGVzICAgICBmcm9tIFwiLi9kaWFncmFtcy9Hb29nbGVOZXRFeGFtcGxlcy5odG1sXCI7XG5pbXBvcnQgSW1hZ2VBcnJheSAgICAgICAgICAgIGZyb20gXCIuL2RpYWdyYW1zL0ltYWdlQXJyYXkuaHRtbFwiO1xuaW1wb3J0IE9wdEV4cGxvcmUgICAgICAgICAgICBmcm9tIFwiLi9kaWFncmFtcy9PcHRFeHBsb3JlLmh0bWxcIjtcbmltcG9ydCBPcHRFeHBsb3JlMiAgICAgICAgICAgZnJvbSBcIi4vZGlhZ3JhbXMvT3B0RXhwbG9yZTIuaHRtbFwiO1xuaW1wb3J0IE9wdEV4cGxvcmVGbGV4ICAgICAgICBmcm9tIFwiLi9kaWFncmFtcy9PcHRFeHBsb3JlRmxleC5odG1sXCI7XG5pbXBvcnQgR3JhZEFydGlmYWN0cyAgICAgICAgIGZyb20gXCIuL2RpYWdyYW1zL0dyYWRBcnRpZmFjdHMuaHRtbFwiO1xuLy8gaW1wb3J0IFJlZ1JldmlldyAgICAgICAgICAgICBmcm9tIFwiLi9kaWFncmFtcy9SZWdSZXZpZXcuaHRtbFwiO1xuaW1wb3J0IE9wdEFuZEV4YW1wbGVzICAgICAgICBmcm9tIFwiLi9kaWFncmFtcy9PcHRBbmRFeGFtcGxlcy5odG1sXCI7XG5pbXBvcnQgTGluZWFyQ29tYmluYXRpb25zICAgIGZyb20gXCIuL2RpYWdyYW1zL0xpbmVhckNvbWJpbmF0aW9ucy5odG1sXCI7XG5pbXBvcnQgT3B0UHJvZ3Jlc3MgICAgICAgICAgIGZyb20gXCIuL2RpYWdyYW1zL09wdFByb2dyZXNzLmh0bWxcIjtcbmltcG9ydCBFeGFtcGxlc09wdENvbXBhcmlzb24gZnJvbSBcIi4vZGlhZ3JhbXMvRXhhbXBsZXNPcHRDb21wYXJpc29uLmh0bWxcIjtcbmltcG9ydCBSYW5kb21FeGFtcGxlc09wdCAgICAgZnJvbSBcIi4vZGlhZ3JhbXMvUmFuZG9tRXhhbXBsZXNPcHQuaHRtbFwiO1xuaW1wb3J0IENvbGFiTGluayAgICAgZnJvbSBcIi4vZGlhZ3JhbXMvQ29sYWJMaW5rLmh0bWxcIjtcblxuXG5cbi8vIGxvYWQgR29vZ2xlTmV0RXhhbXBsZXMgaW1tZWRpYXRlbHlcblxubmV3IEdvb2dsZU5ldEV4YW1wbGVzKHt0YXJnZXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ29vZ2xlbmV0LWV4YW1wbGVzXCIpfSk7XG5cbi8vIHNwcml0ZSBkcml2ZW4gZmlndXJlc1xuXG57XG4gIGNvbnN0IGZpZ3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhhbXBsZS1vcHRpbWl6YXRpb24tY29tcGFyaXNvblwiKTtcbiAgZmlndXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeVwiLCBmdW5jdGlvbigpIHtcbiAgICBuZXcgRXhhbXBsZXNPcHRDb21wYXJpc29uKHt0YXJnZXQ6IGZpZ3VyZX0pO1xuICB9KTtcbn1cblxue1xuICBjb25zdCBmaWd1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhbmRvbS1vcHRpbWl6YXRpb24tYW5kLWV4YW1wbGVzXCIpO1xuICBmaWd1cmUuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5XCIsIGZ1bmN0aW9uKCkge1xuICAgIG5ldyBSYW5kb21FeGFtcGxlc09wdCh7dGFyZ2V0OiBmaWd1cmV9KTtcbiAgfSk7XG59XG5cbntcbiAgY29uc3QgZmlndXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcHQtcHJvZ3Jlc3NcIilcbiAgZmlndXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeVwiLCBmdW5jdGlvbigpIHtcbiAgICBuZXcgT3B0UHJvZ3Jlc3Moe3RhcmdldDogZmlndXJlfSk7XG4gIH0pO1xufVxuXG57XG4gIGNvbnN0IGZpZ3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZWFyLWNvbWJpbmF0aW9uc1wiKVxuICBmaWd1cmUuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5XCIsIGZ1bmN0aW9uKCkge1xuICAgIG5ldyBMaW5lYXJDb21iaW5hdGlvbnMoe3RhcmdldDogZmlndXJlfSk7XG4gIH0pO1xufVxuXG4vLyB7XG4vLyAgIGNvbnN0IGZpZ3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmVhdHVyZS12aXMtaGlzdG9yeVwiKVxuLy8gICBmaWd1cmUuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5XCIsIGZ1bmN0aW9uKCkge1xuLy8gICAgIG5ldyBSZWdSZXZpZXcoe3RhcmdldDogZmlndXJlfSk7XG4vLyAgIH0pO1xuLy8gfVxuXG57XG4gIGNvbnN0IGZpZ3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3B0aW1pemF0aW9uLWFuZC1leGFtcGxlc1wiKTtcbiAgZmlndXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeVwiLCBmdW5jdGlvbigpIHtcbiAgICBuZXcgT3B0QW5kRXhhbXBsZXMoe3RhcmdldDogZmlndXJlfSk7XG4gIH0pO1xufVxuXG57XG4gIGNvbnN0IGZpZ3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJlcXVlbmN5LWFydGlmYWN0c1wiKTtcbiAgZmlndXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeVwiLCBmdW5jdGlvbigpIHtcbiAgICBuZXcgR3JhZEFydGlmYWN0cyh7dGFyZ2V0OiBmaWd1cmV9KTtcbiAgfSk7XG59XG5cbi8vIGltYWdlIGFycmF5c1xuXG57XG4gIGNvbnN0IGZpZ3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RlZXBlc3QtZGVzY2VudFwiKTtcbiAgZmlndXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeVwiLCBmdW5jdGlvbigpIHtcbiAgICBuZXcgSW1hZ2VBcnJheSh7dGFyZ2V0OiBmaWd1cmUsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHNyY19jbGFzczogXCJzdGVlcHN0LWRpci1zcHJpdGVcIixcbiAgICAgICAgaWNvbl9zcmNfY2xhc3M6IFwic3RlZXBzdC1kaXItc3ByaXRlXCIsXG4gICAgICAgIGljb25feDogMCxcbiAgICAgICAgbGFiZWxfZnVuYzogKG4sIGkpID0+IFtcbiAgICAgICAgICBcIkltYWdlXCIsXG4gICAgICAgICAgXCI8c3Ryb25nPkw8c3VwPuKInjwvc3VwPiBtZXRyaWM8L3N0cm9uZz4gPGJyPnVzZWQgaW4gYWR2ZXJzZXJpYWwgd29ya1wiLFxuICAgICAgICAgIFwiPHN0cm9uZz5MPHN1cD4yPC9zdXA+IG1ldHJpYzwvc3Ryb25nPiA8YnI+cmVndWxhciBncmFkaWVudFwiLFxuICAgICAgICAgIFwiPHN0cm9uZz5kZWNvcnJlbGF0ZWQgc3BhY2U8L3N0cm9uZz5cIlxuICAgICAgICAgIF1bbl0sXG4gICAgICAgIG5faW1hZ2VzOiA0LFxuICAgICAgICBuX2ljb25zOiAxNCxcbiAgICAgICAgc3ByaXRlX3NpemU6IDIyNCwgXG4gICAgICAgIHNpemU6IDE3MCxcbiAgICAgICAgaWNvbl9zY2FsZTogMSxcbiAgICAgICAgaG92ZXJfc2NhbGU6IDEsXG4gICAgICAgIHNlbGVjdGVkOiA5LFxuICAgICAgICBiYWNrd2FyZHM6IGZhbHNlXG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG57XG4gIGNvbnN0IGZpZ3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW50ZXJwb2xhdGlvblwiKTtcbiAgZmlndXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeVwiLCBmdW5jdGlvbigpIHtcbiAgICBuZXcgSW1hZ2VBcnJheSh7dGFyZ2V0OiBmaWd1cmUsXG4gICAgZGF0YToge1xuICAgICAgc3JjX2NsYXNzOiBcImludGVycG9sYXRpb24tc3ByaXRlXCIsXG4gICAgICBpY29uX3NyY19jbGFzczogXCJpbnRlcnBvbGF0aW9uLXNwcml0ZVwiLFxuICAgICAgaWNvbl94OiAwLFxuICAgICAgbGFiZWxfZnVuYzogKG4sIGkpID0+IHtcbiAgICAgICAgaWYgKG4gPT0gMCkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBcIkxheWVyIDRhLCBVbml0IDQ3NlwiLFxuICAgICAgICAgICAgXCJMYXllciA0YSwgVW5pdCA0NzZcIixcbiAgICAgICAgICAgIFwiTGF5ZXIgNGEsIFVuaXQgNDYwXCIsXG4gICAgICAgICAgICBcIkxheWVyIDRiLCBVbml0IDQ3NVwiLFxuICAgICAgICAgICAgXCJMYXllciA0YywgVW5pdCAzNjlcIixcbiAgICAgICAgICAgIFwiTGF5ZXIgNGQsIFVuaXQgNTAzXCIsXG4gICAgICAgICAgICBcIkxheWVyIDRkLCBVbml0IDUwM1wiLFxuICAgICAgICAgICAgXCJMYXllciA1YSwgVW5pdCA4MTBcIixcbiAgICAgICAgICAgIFwiTGF5ZXIgNWEsIFVuaXQgODEwXCIsXG4gICAgICAgICAgXVtpXTtcbiAgICAgICAgfSBlbHNlIGlmIChuID09IDUpIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgXCJMYXllciA0YSwgVW5pdCA0NTVcIixcbiAgICAgICAgICAgIFwiTGF5ZXIgNGEsIFVuaXQgNDYwXCIsXG4gICAgICAgICAgICBcIkxheWVyIDRhLCBVbml0IDUwMVwiLFxuICAgICAgICAgICAgXCJMYXllciA0YSwgVW5pdCA0NzZcIixcbiAgICAgICAgICAgIFwiTGF5ZXIgNGEsIFVuaXQgNDc2XCIsXG4gICAgICAgICAgICBcIkxheWVyIDVhLCBVbml0IDc5MVwiLFxuICAgICAgICAgICAgXCJMYXllciA1YSwgVW5pdCA4MTBcIixcbiAgICAgICAgICAgIFwiTGF5ZXIgNWEsIFVuaXQgMjAwXCIsXG4gICAgICAgICAgICBcIkxheWVyIDVhLCBVbml0IDc5MVwiLFxuICAgICAgICAgIF1baV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBuX2ltYWdlczogNixcbiAgICAgIG5faWNvbnM6IDksXG4gICAgICBzcHJpdGVfc2l6ZTogMTI4LCBcbiAgICAgIHNpemU6IDEyOCxcbiAgICAgIGljb25fc2NhbGU6IDEsXG4gICAgICBob3Zlcl9zY2FsZTogMSxcbiAgICAgIHNlbGVjdGVkOiAxLFxuICAgICAgYmFja3dhcmRzOiBmYWxzZVxuICAgIH19KTtcbiAgfSk7XG59XG5cbi8vIG9wdGltaXphdGlvbiBleHBsb3JlIHdpZGdldHNcblxuY29uc3QgT3B0RXhwbG9yZUZsZXhfY29uZmlncyA9IHtcbiAgXG4gIE9wdEV4cGxvcmVOYWl2ZToge1xuICAgIGNvbmZpZ3VyYWJsZTogW1wibmV1cm9uc1wiLCBcImxlYXJuaW5nX3JhdGVcIl0sXG4gICAgaWNvbl92YXJfdmFsdWVzOiB7ZGVjb3JyZWxhdGU6IDEsIHRyYW5zZm9ybXM6IDF9LFxuICAgIHZhcl92YWx1ZXM6IHtkZWNvcnJlbGF0ZTogMCwgbGVhcm5pbmdfcmF0ZTogMiwgdHJhbnNmb3JtczogMH0sXG4gICAgY29uZmlnOiByZXF1aXJlKCcuLi9zdGF0aWMvaW1hZ2VzL1ByZWNvbmRpdGlvbmVyLmpzb24nKVxuICB9LFxuICBcbiAgUGVuYWxpemVGcmVxOiB7XG4gICAgY29uZmlndXJhYmxlOiBbXCJuZXVyb25zXCIsIFwibDFcIiwgXCJ0dlwiLCBcImJsdXJcIl0sXG4gICAgdmFyX3ZhbHVlczoge2wxOiAxLCB0djogMiwgYmx1cjogMn0sXG4gICAgaWNvbl92YXJfdmFsdWVzOiB7bDE6IDEsIHR2OiAzLCBibHVyOiAzfSxcbiAgICBjb25maWc6IHJlcXVpcmUoJy4uL3N0YXRpYy9pbWFnZXMvUGVuYWxpemVGcmVxLmpzb24nKVxuICB9LFxuICBcbiAgVHJhbnNmb3JtRXhwbG9yZToge1xuICAgIGNvbmZpZ3VyYWJsZTogW1wibmV1cm9uc1wiLCBcImppdHRlclwiLCBcInJhbmRvbV9yb3RhdGVcIiwgXCJyYW5kb21fc2NhbGVcIl0sXG4gICAgaWNvbl92YXJfdmFsdWVzOiB7aml0dGVyOiAzLCByYW5kb21fcm90YXRlOiAyLCByYW5kb21fc2NhbGU6IDJ9LFxuICAgIHZhcl92YWx1ZXM6IHtqaXR0ZXI6IDEsIHJhbmRvbV9yb3RhdGU6IDEsIHJhbmRvbV9zY2FsZTogMX0sXG4gICAgY29uZmlnOiByZXF1aXJlKCcuLi9zdGF0aWMvaW1hZ2VzL1RyYW5zZm9ybUV4cGxvcmUuanNvbicpXG4gIH0sXG4gIFxuICBPcHRFeHBsb3JlOiB7XG4gICAgY29uZmlndXJhYmxlOiBbXCJuZXVyb25zXCIsIFwibGVhcm5pbmdfcmF0ZVwiLCBbXCJkZWNvcnJlbGF0ZVwiLCBcInRyYW5zZm9ybXNcIl1dLFxuICAgIGljb25fdmFyX3ZhbHVlczoge2RlY29ycmVsYXRlOiAxLCB0cmFuc2Zvcm1zOiAxfSxcbiAgICB2YXJfdmFsdWVzOiB7ZGVjb3JyZWxhdGU6IDEsIGxlYXJuaW5nX3JhdGU6IDIsIHRyYW5zZm9ybXM6IDF9LFxuICAgIGNvbmZpZzogcmVxdWlyZSgnLi4vc3RhdGljL2ltYWdlcy9QcmVjb25kaXRpb25lci5qc29uJylcbiAgfVxufTtcblxue1xuICBjb25zdCBmaWd1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wdGltaXplLW5haXZlXCIpO1xuICBmaWd1cmUuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5XCIsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGFwcCA9IG5ldyBPcHRFeHBsb3JlRmxleCh7dGFyZ2V0OiBmaWd1cmV9KTtcbiAgICBhcHAubG9hZF9zcHJpdGVtYXAoXCJQcmVjb25kaXRpb25lclwiLCBPcHRFeHBsb3JlRmxleF9jb25maWdzLk9wdEV4cGxvcmVOYWl2ZSlcbiAgfSk7XG59XG5cbntcbiAgY29uc3QgZmlndXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcHQtZXhwbG9yZTJcIik7XG4gIGZpZ3VyZS5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlcIiwgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgYXBwID0gbmV3IE9wdEV4cGxvcmVGbGV4KHt0YXJnZXQ6IGZpZ3VyZX0pO1xuICAgIGFwcC5sb2FkX3Nwcml0ZW1hcChcIlByZWNvbmRpdGlvbmVyXCIsIE9wdEV4cGxvcmVGbGV4X2NvbmZpZ3MuT3B0RXhwbG9yZSlcbiAgfSk7XG59XG5cbntcbiAgY29uc3QgZmlndXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWd1bGFyaXplci1wbGF5Z3JvdW5kLXJvYnVzdFwiKTtcbiAgZmlndXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeVwiLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBhcHAgPSBuZXcgT3B0RXhwbG9yZUZsZXgoe3RhcmdldDogZmlndXJlfSk7XG4gICAgYXBwLmxvYWRfc3ByaXRlbWFwKFwiVHJhbnNmb3JtRXhwbG9yZVwiLCBPcHRFeHBsb3JlRmxleF9jb25maWdzLlRyYW5zZm9ybUV4cGxvcmUpXG4gIH0pO1xufVxuXG57XG4gIGNvbnN0IGZpZ3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVndWxhcml6ZXItcGxheWdyb3VuZC1mcmVxXCIpO1xuICBmaWd1cmUuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5XCIsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGFwcCA9IG5ldyBPcHRFeHBsb3JlRmxleCh7dGFyZ2V0OiBmaWd1cmV9KTtcbiAgICBhcHAubG9hZF9zcHJpdGVtYXAoXCJQZW5hbGl6ZUZyZXEyXCIsIE9wdEV4cGxvcmVGbGV4X2NvbmZpZ3MuUGVuYWxpemVGcmVxKVxuICB9KTtcbn1cblxuXG5cbntcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJcIik7XG4gIHZhciBhcHAgPSBuZXcgQ29sYWJMaW5rKHt0YXJnZXQ6IGRpdiwgZGF0YToge1xuICAgIHVybDogXCJcIlxuICB9fSk7XG59XG5cblxuXG57XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sYWItbmVnYXRpdmVcIik7XG4gIHZhciBhcHAgPSBuZXcgQ29sYWJMaW5rKHt0YXJnZXQ6IGRpdiwgZGF0YToge1xuICAgIHVybDogXCJodHRwczovL2NvbGFiLnJlc2VhcmNoLmdvb2dsZS5jb20vZ2l0aHViL3RlbnNvcmZsb3cvbHVjaWQvYmxvYi9tYXN0ZXIvbm90ZWJvb2tzL2ZlYXR1cmUtdmlzdWFsaXphdGlvbi9uZWdhdGl2ZV9uZXVyb25zLmlweW5iXCJcbiAgfX0pO1xufVxuXG57XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sYWItZGl2ZXJzaXR5XCIpO1xuICB2YXIgYXBwID0gbmV3IENvbGFiTGluayh7dGFyZ2V0OiBkaXYsIGRhdGE6IHtcbiAgICB1cmw6IFwiaHR0cHM6Ly9jb2xhYi5yZXNlYXJjaC5nb29nbGUuY29tL2dpdGh1Yi90ZW5zb3JmbG93L2x1Y2lkL2Jsb2IvbWFzdGVyL25vdGVib29rcy9mZWF0dXJlLXZpc3VhbGl6YXRpb24vbmV1cm9uX2RpdmVyc2l0eS5pcHluYlwiXG4gIH19KTtcbn1cblxue1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbGFiLXJhbmRvbVwiKTtcbiAgdmFyIGFwcCA9IG5ldyBDb2xhYkxpbmsoe3RhcmdldDogZGl2LCBkYXRhOiB7XG4gICAgdXJsOiBcImh0dHBzOi8vY29sYWIucmVzZWFyY2guZ29vZ2xlLmNvbS9naXRodWIvdGVuc29yZmxvdy9sdWNpZC9ibG9iL21hc3Rlci9ub3RlYm9va3MvZmVhdHVyZS12aXN1YWxpemF0aW9uL25ldXJvbl9pbnRlcmFjdGlvbi5pcHluYiNzY3JvbGxUbz1ueFBiUGZYekdXQ0RcIlxuICB9fSk7XG59XG5cbntcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2xhYi1jb21iaW5lXCIpO1xuICB2YXIgYXBwID0gbmV3IENvbGFiTGluayh7dGFyZ2V0OiBkaXYsIGRhdGE6IHtcbiAgICB1cmw6IFwiaHR0cHM6Ly9jb2xhYi5yZXNlYXJjaC5nb29nbGUuY29tL2dpdGh1Yi90ZW5zb3JmbG93L2x1Y2lkL2Jsb2IvbWFzdGVyL25vdGVib29rcy9mZWF0dXJlLXZpc3VhbGl6YXRpb24vbmV1cm9uX2ludGVyYWN0aW9uLmlweW5iI3Njcm9sbFRvPTB4LVppNDlqR1VMYlwiXG4gIH19KTtcbn1cblxue1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbGFiLWludGVycG9sYXRpb25cIik7XG4gIHZhciBhcHAgPSBuZXcgQ29sYWJMaW5rKHt0YXJnZXQ6IGRpdiwgZGF0YToge1xuICAgIHVybDogXCJodHRwczovL2NvbGFiLnJlc2VhcmNoLmdvb2dsZS5jb20vZ2l0aHViL3RlbnNvcmZsb3cvbHVjaWQvYmxvYi9tYXN0ZXIvbm90ZWJvb2tzL2ZlYXR1cmUtdmlzdWFsaXphdGlvbi9uZXVyb25faW50ZXJhY3Rpb24uaXB5bmIjc2Nyb2xsVG89TXhSbUxDVGxHV1NzXCJcbiAgfX0pO1xufVxuXG57XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sYWItcmVndWxhcml6YXRpb24tbmFpdmVcIik7XG4gIHZhciBhcHAgPSBuZXcgQ29sYWJMaW5rKHt0YXJnZXQ6IGRpdiwgZGF0YToge1xuICAgIHVybDogXCJodHRwczovL2NvbGFiLnJlc2VhcmNoLmdvb2dsZS5jb20vZ2l0aHViL3RlbnNvcmZsb3cvbHVjaWQvYmxvYi9tYXN0ZXIvbm90ZWJvb2tzL2ZlYXR1cmUtdmlzdWFsaXphdGlvbi9yZWd1bGFyaXphdGlvbi5pcHluYiNzY3JvbGxUbz1kM1pLak5pekdXdERcIlxuICB9fSk7XG59XG5cbntcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2xhYi1yZWd1bGFyaXphdGlvbi1mcmVxXCIpO1xuICB2YXIgYXBwID0gbmV3IENvbGFiTGluayh7dGFyZ2V0OiBkaXYsIGRhdGE6IHtcbiAgICB1cmw6IFwiaHR0cHM6Ly9jb2xhYi5yZXNlYXJjaC5nb29nbGUuY29tL2dpdGh1Yi90ZW5zb3JmbG93L2x1Y2lkL2Jsb2IvbWFzdGVyL25vdGVib29rcy9mZWF0dXJlLXZpc3VhbGl6YXRpb24vcmVndWxhcml6YXRpb24uaXB5bmIjc2Nyb2xsVG89emxJV0JuYWdHZDRxXCJcbiAgfX0pO1xufVxuXG57XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sYWItcmVndWxhcml6YXRpb24tdHJhbnNmb3JtXCIpO1xuICB2YXIgYXBwID0gbmV3IENvbGFiTGluayh7dGFyZ2V0OiBkaXYsIGRhdGE6IHtcbiAgICB1cmw6IFwiaHR0cHM6Ly9jb2xhYi5yZXNlYXJjaC5nb29nbGUuY29tL2dpdGh1Yi90ZW5zb3JmbG93L2x1Y2lkL2Jsb2IvbWFzdGVyL25vdGVib29rcy9mZWF0dXJlLXZpc3VhbGl6YXRpb24vcmVndWxhcml6YXRpb24uaXB5bmIjc2Nyb2xsVG89bVNESktNZjVHZVp5XCJcbiAgfX0pO1xufVxuXG57XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sYWItcmVndWxhcml6YXRpb24tcHJlY29uZGl0aW9uZXJcIik7XG4gIHZhciBhcHAgPSBuZXcgQ29sYWJMaW5rKHt0YXJnZXQ6IGRpdiwgZGF0YToge1xuICAgIHVybDogXCJodHRwczovL2NvbGFiLnJlc2VhcmNoLmdvb2dsZS5jb20vZ2l0aHViL3RlbnNvcmZsb3cvbHVjaWQvYmxvYi9tYXN0ZXIvbm90ZWJvb2tzL2ZlYXR1cmUtdmlzdWFsaXphdGlvbi9yZWd1bGFyaXphdGlvbi5pcHluYiNzY3JvbGxUbz1ndkY2ajVoNEdrRGVcIlxuICB9fSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCI8IS0tXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuLS0+XG48ZGl2IGNsYXNzPVwiZ29vZ2xlbmV0LWV4YW1wbGVzXCI+XG4gIHt7I2VhY2ggcmFuZ2UoNSkgYXMgeH19XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGVcIj5cbiAgICAgIDwhLS08c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+RWRnZXM8L3NwYW4+LS0+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VzXCI+XG4gICAgICAgIHt7I2VhY2ggcmFuZ2UoNikgYXMgeX19XG4gICAgICAgICAgPFNwcml0ZSBzcmNfY2xhc3M9J3Nwcml0ZV9oZXJvJyB4PXt7eH19IHk9e3t5fX0gYmluZDpzaXplIGJpbmQ6c3ByaXRlX3NjYWxlIGhvdmVyPXRydWUvPlxuICAgICAgICB7ey9lYWNofX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvblwiPjxzdHJvbmc+e3tkZXNjcmlwdGlvbnNbeF19fTwvc3Ryb25nPiAoe3tuYW1lc1t4XX19KTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAge3svZWFjaH19XG48L2Rpdj5cblxuPHN0eWxlPlxuXG4gIC5zcHJpdGVfaGVybyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1hZ2VzL3Nwcml0ZV9oZXJvLnBuZ1wiKTtcbiAgfVxuXG4gIC5nb29nbGVuZXQtZXhhbXBsZXMge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIC8qZ3JpZC1jb2x1bW46IHRleHQtc3RhcnQgLyBzY3JlZW4tZW5kOyovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKm92ZXJmbG93LXg6IGhpZGRlbjsqL1xuICAgIC8qb3ZlcmZsb3cteTogdmlzaWJsZTsqL1xuICB9XG4gIFxuICAuZ29vZ2xlbmV0LWV4YW1wbGVzIC5leGFtcGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICB9XG4gIFxuICAuZ29vZ2xlbmV0LWV4YW1wbGVzIC5leGFtcGxlIC5pbWFnZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuICBcbiAgLmdvb2dsZW5ldC1leGFtcGxlcyAuZXhhbXBsZSAuaW1hZ2VzID4gKiB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG4gIFxuICAuZ29vZ2xlbmV0LWV4YW1wbGVzIC5pbm5lciB7XG4gICAgaW1hZ2UtcmVuZGVyaW5nOiBhdXRvO1xuICB9XG4gIFxuICAuZ29vZ2xlbmV0LWV4YW1wbGVzIC5leGFtcGxlIC5pbWFnZXMgc3BhbjpsYXN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgLmdvb2dsZW5ldC1leGFtcGxlcyAuZXhhbXBsZTpsYXN0LW9mLXR5cGUge1xuICAgIC8qbWFyZ2luLXJpZ2h0OiAwOyovXG4gIH1cbiAgLmdvb2dsZW5ldC1leGFtcGxlcyA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgfVxuICBcbiAgLmRlc2NyaXB0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAwLjI1ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gIH1cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMTA1cHgpIHtcbiAgICAuZ29vZ2xlbmV0LWV4YW1wbGVzIHtcbiAgICAgIGdyaWQtY29sdW1uOiBzY3JlZW47XG4gICAgICBmbGV4LWZsb3c6IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICBcbiAgICAuZ29vZ2xlbmV0LWV4YW1wbGVzIC5leGFtcGxlIC5pbWFnZXMge1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cbiAgICBcbiAgICAuZ29vZ2xlbmV0LWV4YW1wbGVzIC5leGFtcGxlIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gICAgXG4gICAgLmdvb2dsZW5ldC1leGFtcGxlcyAuZXhhbXBsZTpsYXN0LW9mLXR5cGUge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbiAgICBcbiAgICAuZ29vZ2xlbmV0LWV4YW1wbGVzIC5leGFtcGxlIC5pbWFnZXMge1xuICAgICAgbWF4LXdpZHRoOiAgY2FsYygoMTAwcHggKiAyKSArIDEwcHgpO1xuICAgICAgbWluLWhlaWdodDogY2FsYygoMTAwcHggKiAzKSArIDEwcHgpO1xuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkgeyAgICBcbiAgICAuZ29vZ2xlbmV0LWV4YW1wbGVzIC5leGFtcGxlIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICB9XG4gICAgXG4gICAgLmdvb2dsZW5ldC1leGFtcGxlcyAuZXhhbXBsZSAuaW1hZ2VzIHtcbiAgICAgIG1heC13aWR0aDogIGNhbGMoKDEyNXB4ICogMikgKyAxMHB4KTtcbiAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoKDEyNXB4ICogMykgKyAxMHB4KTtcbiAgICB9XG4gIH1cbiAgXG5cbjwvc3R5bGU+XG5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IFNwcml0ZSBmcm9tIFwiLi9TcHJpdGUuaHRtbFwiO1xuICBcbiAgZnVuY3Rpb24gcmFuZ2Uobil7XG4gICAgcmV0dXJuIEFycmF5KG4pLmZpbGwoKS5tYXAoKF8sIGkpID0+IGkpO1xuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5zOiBbMCwxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMywxNCwxNSwxNiwxNywxOCwxOSwyMCwyMSwyMiwyMywyNCwyNSwyNiwyNywyOCwyOV0sXG4gICAgICAgIHNpemU6IDEwMCxcbiAgICAgICAgc3ByaXRlX3NjYWxlOiAxLjAsXG4gICAgICAgIG5hbWVzOiBbXG4gICAgICAgICAgXCJsYXllciBjb252MmQwXCIsXG4gICAgICAgICAgXCJsYXllciBtaXhlZDNhXCIsXG4gICAgICAgICAgXCJsYXllciBtaXhlZDRhXCIsXG4gICAgICAgICAgXCJsYXllcnMgbWl4ZWQ0YiAmIG1peGVkNGNcIixcbiAgICAgICAgICBcImxheWVycyBtaXhlZDRkICYgbWl4ZWQ0ZVwiLFxuICAgICAgICBdLFxuICAgICAgICBkZXNjcmlwdGlvbnM6IFtcbiAgICAgICAgICBcIkVkZ2VzXCIsXG4gICAgICAgICAgXCJUZXh0dXJlc1wiLFxuICAgICAgICAgIFwiUGF0dGVybnNcIixcbiAgICAgICAgICBcIlBhcnRzXCIsXG4gICAgICAgICAgXCJPYmplY3RzXCIsXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uY3JlYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMubXEgPSBtYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogMTQwMHB4KVwiKTtcbiAgICAgIHRoaXMubXEub25jaGFuZ2UgPSAoZXZlbnQpID0+IHRoaXMuc2V0KHtzaXplOiBldmVudC5tYXRjaGVzID8gMTI1IDogMTAwfSk7XG4gICAgICB0aGlzLnNldCh7XG4gICAgICAgIHNpemU6IHRoaXMubXEubWF0Y2hlcyA/IDEyNSA6IDEwMCxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgY29tcG9uZW50czogeyBTcHJpdGUgfSxcbiAgICBoZWxwZXJzOiB7IHJhbmdlIH0sXG4gIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpYWdyYW1zL0dvb2dsZU5ldEV4YW1wbGVzLmh0bWwiLCI8IS0tXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuLS0+XG5cbjxkaXYgY2xhc3M9XCJpY29uc1wiPlxuICB7eyNlYWNoIGljb25fbnMgYXMgbn19XG4gICAgPGRpdiBjbGFzcz1cImljb24ge3soc2VsZWN0ZWQgPT0gbik/ICdzZWxlY3RlZCcgOiAnJ319XCJcbiAgICAgICAgIG9uOmNsaWNrPSdzZXQoe3NlbGVjdGVkOiBufSknXG4gICAgICA+XG4gICAgICAgIDxTcHJpdGUgYmluZDpzcmNfY2xhc3M9aWNvbl9zcmNfY2xhc3MgXG4gICAgICAgIHNpemU9NDQgXG4gICAgICAgIHNwcml0ZV9zaXplPXt7aWNvbl9zY2FsZSpzcHJpdGVfc2l6ZX19IFxuICAgICAgICB5PXt7KDEtaWNvbl9zY2FsZSkvMiArIG4vaWNvbl9zY2FsZX19IFxuICAgICAgICB4PXt7KDEtaWNvbl9zY2FsZSkvMiArIGljb25feC9pY29uX3NjYWxlfX0gXG4gICAgICAgIGhvdmVyX3NjYWxlPXt7NDQvc3ByaXRlX3NpemUvaWNvbl9zY2FsZX19IC8+XG5cbiAgICA8L2Rpdj5cbiAge3svZWFjaH19XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJpbWFnZXNcIj5cbiAge3sjZWFjaCBpbWFnZV9ucyBhcyBufX1cbiAgICA8ZGl2PlxuICAgICAgPFNwcml0ZSBiaW5kOnNyY19jbGFzcyBcbiAgICAgIGJpbmQ6c2l6ZSBcbiAgICAgIGJpbmQ6c3ByaXRlX3NpemUgXG4gICAgICBiaW5kOnk9c2VsZWN0ZWQgXG4gICAgICB4PXt7bn19IFxuICAgICAgICBob3Zlcj17e2ZhbHNlfX0gIC8+XG4gICAgICA8YnIgc3R5bGU9XCJjbGVhcjpsZWZ0XCI+XG4gICAgICA8ZmlnY2FwdGlvbiBzdHlsZT1cIm1heC13aWR0aDoge3tzaXplfX1weDtcIiA+e3t7bGFiZWxfZnVuYyhuLCBzZWxlY3RlZCl9fX08L2ZpZ2NhcHRpb24+XG4gICAgPC9kaXY+XG4gIHt7L2VhY2h9fVxuPC9kaXY+XG5cblxuPHN0eWxlPlxuXG5cbi5pY29ucyB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XG59XG5cbi5pY29ucyAuaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuXG4uaWNvbnMgLmljb246Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi5pY29ucyAuaWNvbjpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLmljb25zIC5pY29uLnNlbGVjdGVkIHtcbiAgb3BhY2l0eTogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZjY2MDA7XG59XG5cbi5pY29uIGRpdiB7XG4gIG9wYWNpdHk6IDAuNjY2O1xuICBpbWFnZS1yZW5kZXJpbmc6IGF1dG87XG59XG5cbi5pY29uLnNlbGVjdGVkIGRpdiB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5pbWFnZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIC8qanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyovXG4gIHRvcDogMHB4O1xufVxuLmltYWdlcyA+IGRpdiB7XG4gIC8qd2lkdGg6IDE4MHB4OyovXG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmltYWdlcyA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLmltYWdlcyBkaXYgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbn1cblxuZmlnY2FwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgLyptYXJnaW4tYm90dG9tOiA2cHg7Ki9cbn1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBTcHJpdGUgZnJvbSBcIi4vU3ByaXRlLmh0bWxcIjtcbiAgZnVuY3Rpb24gcmFuZ2UobiwgaW52ZXJ0ZWQpe1xuICAgIHZhciByZXQgPSBbXTtcbiAgICBpZiAoaW52ZXJ0ZWQpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKSByZXQucHVzaChuLWktMSk7ICAgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKSByZXQucHVzaChpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5faWNvbnM6IDQsXG4gICAgICAgIG5faW1hZ2VzOiA2LFxuICAgICAgICBzZWxlY3RlZDogMCxcbiAgICAgICAgc3ByaXRlX3NpemU6IDEyOCxcbiAgICAgICAgc2l6ZTogMTYwLFxuICAgICAgICBzcmNfY2xhc3M6IFwiXCIsXG4gICAgICAgIGxhYmVsX2Z1bmM6IG4gPT4gXCJJbWFnZSBcIiArIG4sXG4gICAgICAgIGljb25fc3JjX2NsYXNzOiBcIlwiLFxuICAgICAgICBpY29uX3NjYWxlOiAwLjUsXG4gICAgICAgIGJhY2t3YXJkczogZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICBpY29uX25zOiAobl9pY29ucywgYmFja3dhcmRzKSA9PiByYW5nZShuX2ljb25zLCBiYWNrd2FyZHMpLFxuICAgICAgaW1hZ2VfbnM6IG5faW1hZ2VzID0+IHJhbmdlKG5faW1hZ2VzLCBmYWxzZSlcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtTcHJpdGV9XG4gIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpYWdyYW1zL0ltYWdlQXJyYXkuaHRtbCIsIjwhLS1cbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4tLT5cbjxkaXYgY2xhc3M9XCJvcHQtZXhwbG9yZVwiID5cbiAgPGZpZ2NhcHRpb24gc3R5bGU9XCJtYXJnaW4tYm90dG9tOjEwcHg7XCI+XG4gICAgPGRpdiBzdHlsZT1cIndpZHRoOiB7eyhzaXplICsgMjApKm5faW1hZ2VzLTIwfX1weDtcIj5cbiAgICAgIDwhLS08ZGl2IGNsYXNzPVwiaWNvbnNcIiBzdHlsZT1cImZsb2F0OmxlZnQ7IHBhZGRpbmctcmlnaHQ6IDYwcHg7IHdpZHRoOiAxNDVweDtcIj5cbiAgICAgICAge3sjZWFjaCBpY29uX25zIGFzIG59fVxuICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgIGNsYXNzPVwiaWNvbiB7eyhzZWxlY3RlZCA9PSBuKT8gJ3NlbGVjdGVkJyA6ICcnfX1cIlxuICAgICAgICAgICAgICBvbjpjbGljaz0nc2V0KHtzZWxlY3RlZDogbn0pJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB7ey9lYWNofX1cbiAgICAgIDwvZGl2Pi0tPlxuICAgICAgPGRpdiBzdHlsZT1cImZsb2F0OmxlZnQ7IHBhZGRpbmctcmlnaHQ6IDYwcHg7XCI+XG4gICAgICAgIDxkaXY+IExlYXJuaW5nIFJhdGUgKHt7bGVhcm5pbmdfcmF0ZV9saXN0W1tsZWFybmluZ19yYXRlXV19fSk8L2Rpdj5cbiAgICAgICAgPGRpdj48aW5wdXQgYmluZDp2YWx1ZT1sZWFybmluZ19yYXRlIHR5cGU9XCJyYW5nZVwiIG1pbj0wIG1heD17e2xlYXJuaW5nX3JhdGVfbGlzdC5sZW5ndGgtMX19PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPVwiZmxvYXQ6bGVmdDsgcGFkZGluZy1yaWdodDogNjBweDtcIj5cbiAgICAgICAgPGxhYmVsPjxpbnB1dCBiaW5kOmNoZWNrZWQ9aml0dGVyIHR5cGU9XCJjaGVja2JveFwiPiBKaXR0ZXI8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+PGlucHV0IGJpbmQ6Y2hlY2tlZD1hZGFtIHR5cGU9XCJjaGVja2JveFwiPiBBZGFtPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT1cImZsb2F0OmxlZnQ7IHBhZGRpbmctcmlnaHQ6IDYwcHg7XCI+XG4gICAgICAgIDxsYWJlbD48aW5wdXQgYmluZDpjaGVja2VkPXB5cmFtaWQgdHlwZT1cImNoZWNrYm94XCI+IExhcGxhY2lhbiBQeXJhbWlkPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPjxpbnB1dCBiaW5kOmNoZWNrZWQ9Y29sb3IgdHlwZT1cImNoZWNrYm94XCI+IEZhbmN5IENvbG9yIFBhcmFtPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJyIHN0eWxlPVwiY2xlYXI6bGVmdDtcIj5cbiAgICA8L2Rpdj5cbiAgPC9maWdjYXB0aW9uPlxuICA8ZGl2IGNsYXNzPVwiaW1hZ2VzXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiB7e3NpemUrMjB9fXB4OyBwb3NpdGlvbjogcmVsYXRpdmU7XCI+XG4gICAge3sjZWFjaCBpbWFnZV9ucyBhcyBufX1cbiAgICAgIDxkaXYgc3R5bGU9XCJsZWZ0OiB7eyhzaXplICsgMjApKm59fXB4OyB3aWR0aDoge3tzaXplfX1weDsgaGVpZ2h0OiB7e3NpemUrMjB9fXB4O1wiPlxuICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luOiB7eyhzaXplLXNwcml0ZV9zaXplKS8yfX1weDsgdHJhbnNmb3JtOnNjYWxlKHt7c2l6ZS9zcHJpdGVfc2l6ZX19KTtcIiA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm9wdC1leHBsb3JlLXNwcml0ZXNcIiBzdHlsZT1cIndpZHRoOnt7c3ByaXRlX3NpemV9fXB4OyBoZWlnaHQ6e3tzcHJpdGVfc2l6ZX19cHg7IGJhY2tncm91bmQtcG9zaXRpb246IC17e3Nwcml0ZV9zaXplKm59fXB4IC17e3Nwcml0ZV9zaXplKnl9fXB4O1wiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZpZ2NhcHRpb24+e3t7bGFiZWxfZnVuYyhuKX19fTwvZmlnY2FwdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIHt7L2VhY2h9fVxuICA8L2Rpdj5cblxuPC9kaXY+XG5cbjxzdHlsZT5cblxuICAuaWNvbnMgLmljb24ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW46IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xuICB9XG5cbiAgLmljb25zIC5zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FBQTtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCBnb2xkLCAtMXB4IC0xcHggM3B4IGdvbGQsIC0xcHggMXB4IDNweCBnb2xkLCAxcHggLTFweCAzcHggZ29sZDtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XG4gIH1cblxuICAuaW1hZ2VzID4gZGl2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cblxuICBmaWdjYXB0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gIH1cblxuICAub3B0LWV4cGxvcmUtc3ByaXRlcyB7IGJhY2tncm91bmQ6IHVybChcImltYWdlcy9leHBsb3JlX21peGVkNGNfNDUwX3Nwcml0ZV8xMjguanBlZ1wiKX1cbiAgXG4gIGxhYmVse1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgU3ByaXRlIGZyb20gXCIuL1Nwcml0ZS5odG1sXCI7XG4gIGZ1bmN0aW9uIHJhbmdlKG4pe1xuICAgIHZhciByZXQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSkgcmV0LnB1c2goaSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5faW1hZ2VzOiA0LFxuICAgICAgICBzcHJpdGVfc2l6ZTogMTMyLFxuICAgICAgICBzaXplOiAxODAsXG4gICAgICAgIGppdHRlcjogZmFsc2UsXG4gICAgICAgIGFkYW06IGZhbHNlLFxuICAgICAgICBweXJhbWlkOiBmYWxzZSxcbiAgICAgICAgY29sb3I6IGZhbHNlLFxuICAgICAgICBsZWFybmluZ19yYXRlOiAxLFxuICAgICAgICBsZWFybmluZ19yYXRlX2xpc3Q6IFswLjEsIDAuMDEsIDAuMDAxLCAwLjAwMDFdLFxuICAgICAgICBsYWJlbF9mdW5jOiBuID0+IFwiU3RlcCBcIiArICg4Kk1hdGgucG93KDQsbikpLFxuICAgICAgICBzZWxlY3RlZDogMCxcbiAgICAgICAgaWNvbl9uczogWzAsMSwyLDNdLFxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIHk6IChqaXR0ZXIsIGFkYW0sIHB5cmFtaWQsIGNvbG9yLCBsZWFybmluZ19yYXRlLCBsZWFybmluZ19yYXRlX2xpc3QpID0+XG4gICAgICAgICAgMSpjb2xvciArIDIqcHlyYW1pZCArIDQqbGVhcm5pbmdfcmF0ZVxuICAgICAgICAgICsgNCpsZWFybmluZ19yYXRlX2xpc3QubGVuZ3RoKmFkYW0gXG4gICAgICAgICAgKyA4KmxlYXJuaW5nX3JhdGVfbGlzdC5sZW5ndGgqaml0dGVyLFxuICAgICAgaW1hZ2VfbnM6IG5faW1hZ2VzID0+IHJhbmdlKG5faW1hZ2VzKVxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1Nwcml0ZX1cbiAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlhZ3JhbXMvT3B0RXhwbG9yZS5odG1sIiwiPCEtLVxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbi0tPlxuPGRpdiBjbGFzcz1cIm9wdC1leHBsb3JlXCIgPlxuICA8ZmlnY2FwdGlvbiBzdHlsZT1cIm1hcmdpbi1ib3R0b206MTBweDtcIj5cbiAgICA8ZGl2IHN0eWxlPVwid2lkdGg6IHt7KHNpemUgKyAyMCkqbl9pbWFnZXMtMjB9fXB4O1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImljb25zXCIgc3R5bGU9XCJmbG9hdDpsZWZ0OyBwYWRkaW5nLXJpZ2h0OiA0MHB4OyB3aWR0aDogMjIwcHg7XCI+XG4gICAgICAgIHt7I2VhY2ggaWNvbl9ucyBhcyBufX1cbiAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICBjbGFzcz1cImljb24ge3soc2VsZWN0ZWQgPT0gbik/ICdzZWxlY3RlZCcgOiAnJ319XCJcbiAgICAgICAgICAgICAgb246Y2xpY2s9J3NldCh7c2VsZWN0ZWQ6IG59KSdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcHQtZXhwbG9yZS1zcHJpdGVzXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLXBvc2l0aW9uOiAte3tzcHJpdGVfc2l6ZSooNCtuKmljb25fbnMubGVuZ3RoKX19cHggLXt7c3ByaXRlX3NpemUqNTh9fXB4OyB3aWR0aDo2NHB4OyBoZWlnaHQ6IDY0cHg7IHRyYW5zZm9ybTogc2NhbGUoY2FsYyggNDAgLyA2NCkpOyBtYXJnaW46IC0xMnB4O1wiPiA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAge3svZWFjaH19XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9XCJmbG9hdDpsZWZ0OyBwYWRkaW5nLXJpZ2h0OiA0MHB4OyB3aWR0aDogMTU1cHg7XCI+XG4gICAgICAgIDxkaXY+IExlYXJuaW5nIFJhdGUgKHt7bGVhcm5pbmdfcmF0ZV9saXN0W1tsZWFybmluZ19yYXRlXV19fSk8L2Rpdj5cbiAgICAgICAgPGRpdj48ZC1zbGlkZXIgdmFsdWU9bGVhcm5pbmdfcmF0ZSB0eXBlPVwicmFuZ2VcIiBtaW49MCBtYXg9e3tsZWFybmluZ19yYXRlX2xpc3QubGVuZ3RoLTF9fSBzdHlsZT1cIndpZHRoOiAxMDBweDtcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT1cImZsb2F0OmxlZnQ7IHBhZGRpbmctcmlnaHQ6IDBweDsgd2lkdGg6IDcwcHg7XCI+XG4gICAgICAgIDxsYWJlbD48aW5wdXQgYmluZDpjaGVja2VkPWppdHRlciB0eXBlPVwiY2hlY2tib3hcIj4gSml0dGVyPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPjxpbnB1dCBiaW5kOmNoZWNrZWQ9YWRhbSB0eXBlPVwiY2hlY2tib3hcIj4gQWRhbTwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9XCJmbG9hdDpsZWZ0OyBwYWRkaW5nLXJpZ2h0OiAwcHg7IHdpZHRoOiAxNTBweDtcIj5cbiAgICAgICAgPGxhYmVsPjxpbnB1dCBiaW5kOmNoZWNrZWQ9cHlyYW1pZCB0eXBlPVwiY2hlY2tib3hcIj4gTGFwbGFjaWFuIFB5cmFtaWQ8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+PGlucHV0IGJpbmQ6Y2hlY2tlZD1jb2xvciB0eXBlPVwiY2hlY2tib3hcIj4gRmFuY3kgQ29sb3IgUGFyYW08L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnIgc3R5bGU9XCJjbGVhcjpsZWZ0O1wiPlxuICAgIDwvZGl2PlxuICA8L2ZpZ2NhcHRpb24+XG4gIDxkaXYgY2xhc3M9XCJpbWFnZXNcIiBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IHt7c2l6ZSsyMH19cHg7IHBvc2l0aW9uOiByZWxhdGl2ZTtcIj5cbiAgICB7eyNlYWNoIGltYWdlX25zIGFzIG59fVxuICAgICAgPGRpdiBzdHlsZT1cImxlZnQ6IHt7KHNpemUgKyA0KSpufX1weDsgd2lkdGg6IHt7c2l6ZX19cHg7IGhlaWdodDoge3tzaXplKzIwfX1weDtcIj5cbiAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbjoge3soc2l6ZS1zcHJpdGVfc2l6ZSkvMn19cHg7IHRyYW5zZm9ybTpzY2FsZSh7e3NpemUvc3ByaXRlX3NpemV9fSk7XCIgPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcHQtZXhwbG9yZS1zcHJpdGVzXCIgc3R5bGU9XCJ3aWR0aDp7e3Nwcml0ZV9zaXplfX1weDsgaGVpZ2h0Ont7c3ByaXRlX3NpemV9fXB4OyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAte3tzcHJpdGVfc2l6ZSoobitzZWxlY3RlZCppY29uX25zLmxlbmd0aCl9fXB4IC17e3Nwcml0ZV9zaXplKnl9fXB4O1wiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZpZ2NhcHRpb24+e3t7bGFiZWxfZnVuYyhuKX19fTwvZmlnY2FwdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIHt7L2VhY2h9fVxuICA8L2Rpdj5cblxuPC9kaXY+XG5cbjxzdHlsZT5cbi5pY29ucyAuaWNvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgLypmaWx0ZXI6IGJyaWdodG5lc3MoODAlKSBzYXR1cmF0ZSgzMCUpOyovXG59XG5cbi5pY29ucyAuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUFBO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCBnb2xkLCAtMXB4IC0xcHggM3B4IGdvbGQsIC0xcHggMXB4IDNweCBnb2xkLCAxcHggLTFweCAzcHggZ29sZDtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xufVxuXG4gIC5pbWFnZXMgPiBkaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuXG4gIGZpZ2NhcHRpb24ge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICB9XG5cbiAgLm9wdC1leHBsb3JlLXNwcml0ZXMgeyBiYWNrZ3JvdW5kOiB1cmwoXCJpbWFnZXMvZXhwbG9yZV9vcHRfc3ByaXRlbWFwXzY0LmpwZWdcIil9XG4gIFxuICBsYWJlbHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IFNwcml0ZSBmcm9tIFwiLi9TcHJpdGUuaHRtbFwiO1xuICBmdW5jdGlvbiByYW5nZShuKXtcbiAgICB2YXIgcmV0ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpIHJldC5wdXNoKGkpO1xuICAgIHJldHVybiByZXQ7XG4gIH1cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuX2ltYWdlczogNSxcbiAgICAgICAgc3ByaXRlX3NpemU6IDY0LFxuICAgICAgICBzaXplOiAxODAsXG4gICAgICAgIGppdHRlcjogdHJ1ZSxcbiAgICAgICAgYWRhbTogZmFsc2UsXG4gICAgICAgIHB5cmFtaWQ6IHRydWUsXG4gICAgICAgIGNvbG9yOiBmYWxzZSxcbiAgICAgICAgbGVhcm5pbmdfcmF0ZTogMixcbiAgICAgICAgbGVhcm5pbmdfcmF0ZV9saXN0OiBbNSwgMS4yNSwgMC4yNSwgMC4wNSwgMC4wMSwgMC4wMDJdLFxuICAgICAgICBsYWJlbF9mdW5jOiBuID0+IFwiU3RlcCBcIiArICg4Kk1hdGgucG93KDQsbikpLFxuICAgICAgICBzZWxlY3RlZDogMCxcbiAgICAgICAgaWNvbl9uczogWzAsMSwyLDMsNF0sXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgeTogKGppdHRlciwgYWRhbSwgcHlyYW1pZCwgY29sb3IsIGxlYXJuaW5nX3JhdGUsIGxlYXJuaW5nX3JhdGVfbGlzdCkgPT5cbiAgICAgICAgICAxKmNvbG9yICsgMipweXJhbWlkICsgNCpsZWFybmluZ19yYXRlXG4gICAgICAgICAgKyA0KmxlYXJuaW5nX3JhdGVfbGlzdC5sZW5ndGgqYWRhbSBcbiAgICAgICAgICArIDgqbGVhcm5pbmdfcmF0ZV9saXN0Lmxlbmd0aCpqaXR0ZXIsXG4gICAgICBpbWFnZV9uczogbl9pbWFnZXMgPT4gcmFuZ2Uobl9pbWFnZXMpXG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7U3ByaXRlfVxuICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaWFncmFtcy9PcHRFeHBsb3JlMi5odG1sIiwiPCEtLVxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbi0tPlxuXG48ZGl2IGNsYXNzPVwiY29udHJvbHNcIj5cbiAge3sjZWFjaCBjb25maWdfdmFyX2dyb3VwcyBhcyBjb25maWdfdmFyX2dyb3VwfX1cbiAgICA8ZGl2IGNsYXNzPVwiY29uZmlnLWdyb3VwXCI+XG4gICAgICB7eyNlYWNoIGNvbmZpZ192YXJfZ3JvdXAgYXMgY29uZmlnX3Zhcn19XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb25maWcgY29uZmlnLXt7Y29uZmlnX3Zhci50eXBlfX1cIiBkYXRhLWNvbmZpZy1uYW1lPXt7Y29uZmlnX3Zhci5uYW1lfX0+XG4gICAgICBcbiAgICAgIFxuICAgICAgICAgIHt7I2lmIGNvbmZpZ192YXIudHlwZSA9PSBcImljb25cIn19XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvbnNcIj5cbiAgICAgICAgICAgIHt7I2VhY2ggcmFuZ2UoY29uZmlnX3Zhci52YWx1ZXMubGVuZ3RoKSBhcyBufX1cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiaWNvbiB7eyh2YXJfdmFsdWVzX3NhZmVbY29uZmlnX3Zhci5uYW1lXSA9PSBuKT8gJ3NlbGVjdGVkJyA6ICcnfX1cIlxuICAgICAgICAgICAgICAgIG9uOmNsaWNrPVwic2V0RGVlcCgndmFyX3ZhbHVlcy4nK2NvbmZpZ192YXIubmFtZSwgbilcIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IHt7aWNvbl9zaXplfX1weDsgaGVpZ2h0OiB7e2ljb25fc2l6ZX19cHg7XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyXCIgc3R5bGU9XCJtYXJnaW46IHt7KGljb25fc2l6ZS1zcHJpdGVfc2l6ZSkvMn19cHg7IHRyYW5zZm9ybTpzY2FsZSh7e2ljb25fc2l6ZS9zcHJpdGVfc2l6ZX19KTtcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lclwiIHN0eWxlPVwiXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDoge3tzcHJpdGVfYmFja2dyb3VuZH19O1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IFxuICAgICAgICAgICAgICAgICAgICAgICAge3tpY29uX3hfcG9zX2FmdGVyX292ZXJyaWRlKGtleXZhbHVlKGNvbmZpZ192YXIubmFtZSwgbikpfX1weFxuICAgICAgICAgICAgICAgICAgICAgICAge3tpY29uX3lfcG9zX2FmdGVyX292ZXJyaWRlKGtleXZhbHVlKGNvbmZpZ192YXIubmFtZSwgbikpfX1weDtcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoge3tzcHJpdGVfc2l6ZX19cHg7XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB7e3Nwcml0ZV9zaXplfX1weDtcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7ey9lYWNofX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7ey9pZn19XG4gICAgICBcbiAgICAgICAgICB7eyNpZiBjb25maWdfdmFyLnR5cGUgPT0gXCJiaW5hcnlcIn19XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbjpjaGFuZ2U9XCJzZXREZWVwKCd2YXJfdmFsdWVzLicrY29uZmlnX3Zhci5uYW1lLCArdGhpcy5jaGVja2VkKVwiIGNoZWNrZWQ9XCJ7e3Zhcl92YWx1ZXNfc2FmZVtjb25maWdfdmFyLm5hbWVdfX1cIj5cbiAgICAgICAgICAgICAge3t7aHVtYW5fcmVhZGFibGUoY29uZmlnX3Zhci5sYWJlbCwgc3RyaW5ncyl9fX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAge3svaWZ9fVxuICAgICAgICAgIFxuICAgICAgICAgIHt7I2lmIGNvbmZpZ192YXIudHlwZSAhPSBcImJpbmFyeVwiICYmIGNvbmZpZ192YXIudHlwZSAhPSBcImljb25cIiB9fVxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICB7e3todW1hbl9yZWFkYWJsZShjb25maWdfdmFyLmxhYmVsLCBzdHJpbmdzKX19fVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4oe3tjb25maWdfdmFyLnZhbHVlc1t2YXJfdmFsdWVzX3NhZmVbY29uZmlnX3Zhci5uYW1lXV0gKyAodW5pdHMuZ2V0KGNvbmZpZ192YXIubmFtZSkgfHwgJycpIH19KTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogMTAwcHg7XCI+XG4gICAgICAgICAgICAgIDxkLXNsaWRlciB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgIG1pbj0xIG1heD17e2NvbmZpZ192YXIudmFsdWVzLmxlbmd0aH19IHN0ZXA9e3sxfX0gdGlja3NcbiAgICAgICAgICAgICAgICB2YWx1ZT17e3Zhcl92YWx1ZXNfc2FmZVtjb25maWdfdmFyLm5hbWVdKzF9fVxuICAgICAgICAgICAgICAgIG9uOmlucHV0PVwic2V0RGVlcCgndmFyX3ZhbHVlcy4nK2NvbmZpZ192YXIubmFtZSwgdGhpcy52YWx1ZS0xKVwiPlxuICAgICAgICAgICAgICA8L2Qtc2xpZGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3svaWZ9fVxuICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICB7ey9lYWNofX1cbiAgICA8L2Rpdj5cbiAge3svZWFjaH19XG4gIHt7I2lmIGV4cGxhaW5fdGV4dCAhPSBcIlwifX1cbiAgICA8ZGl2IGNsYXNzPVwiZXhwbGFpblwiPlxuICAgICAge3tleHBsYWluX3RleHR9fVxuICAgIDwvZGl2PlxuICB7ey9pZn19XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImltYWdlc1wiPlxuICB7eyNlYWNoIGRpc3BsYXlfb2Zmc2V0cyBhcyBvZmZzZXQsIGluZGV4fX1cbiAgICA8ZGl2IGNsYXNzPVwib3V0ZXJcIiBzdHlsZT1cIndpZHRoOiB7e3NpemV9fXB4OyBoZWlnaHQ6IHt7c2l6ZX19cHg7XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5uZXJcIiBzdHlsZT1cIlxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZToge3tzcHJpdGVfYmFja2dyb3VuZH19O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjoge3tvZmZzZXQueH19cHgge3tvZmZzZXQueX19cHg7XG4gICAgICAgICAgICB3aWR0aDoge3tzcHJpdGVfc2l6ZX19cHg7IGhlaWdodDoge3tzcHJpdGVfc2l6ZX19cHg7XG4gICAgICAgICAgICBtYXJnaW46IHt7KHNpemUtc3ByaXRlX3NpemUpLzJ9fXB4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKHt7c2l6ZS9zcHJpdGVfc2l6ZX19KTtcIlxuICAgICAgICA+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmaWdjYXB0aW9uPlxuICAgICAgICBTdGVwIHt7c3RlcHNbaW5kZXhdfX1cbiAgICAgIDwvZmlnY2FwdGlvbj5cbiAgICA8L2Rpdj5cbiAge3svZWFjaH19XG48L2Rpdj5cblxuPHN0eWxlPlxuXG4uY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLyogSWNvbnMgKi9cblxuLmljb25zIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XG59XG5cbi5pY29ucyAuaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuXG4uaWNvbnMgLmljb246Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi5pY29ucyAuaWNvbjpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLmljb25zIC5pY29uLnNlbGVjdGVkIHtcbiAgb3BhY2l0eTogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZjY2MDA7XG59XG5cbi5pY29uIGRpdiB7XG4gIG9wYWNpdHk6IDAuNjY2O1xuICBpbWFnZS1yZW5kZXJpbmc6IGF1dG87XG59XG5cbi5pY29uLnNlbGVjdGVkIGRpdiB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIENvbmZpZyBHcm91cCAqL1xuXG4uY29uZmlnLWdyb3VwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5jb25maWctZ3JvdXA6bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uY29uZmlnLWdyb3VwIC5jb25maWcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNvbmZpZy1iaW5hcnkge1xuICB3aWR0aDogYXV0bztcbn1cblxuLmNvbmZpZy1yYW5nZSB7XG4gIHdpZHRoOiAxNDBweDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uY29uZmlnLWdyb3VwIC5jb25maWcgaW5wdXRbdHlwZT1cInJhbmdlXCJdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLmNvbmZpZy1ncm91cCBzcGFuLnZhbHVlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzVweDtcbn1cbiAgXG4uZXhwbGFpbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIwMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uaW1hZ2VzIHtcbn1cblxuLmltYWdlcyAub3V0ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLmltYWdlcyAub3V0ZXI6bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cblxuLmlubmVyIHtcbiAgaW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7XG59XG48L3N0eWxlPlxuXG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IHNldERlZXAgfSBmcm9tICdzdmVsdGUtZXh0cmFzJztcblxuICBmdW5jdGlvbiByYW5nZShuKXtcbiAgICB2YXIgcmV0ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpIHJldC5wdXNoKGkpO1xuICAgIHJldHVybiByZXQ7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIG9ial91cGRhdGUoYSwgYil7XG4gICAgdmFyIHJldCA9IHt9O1xuICAgIGZvciAodmFyIGsgaW4gYSkgcmV0W2tdID0gYVtrXTtcbiAgICBmb3IgKHZhciBrIGluIGIpIHJldFtrXSA9IGJba107XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHZhcnNfdG9fcG9zaXRpb24oZGltX3ZhcnMsIHZhbHMpe1xuICAgIHZhciBzdW0gPSAwO1xuICAgIHZhciBkaW1fc3BhY2luZyA9IDE7XG4gICAgdmFyIGRpbV9zcGFjaW5ncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSBkaW1fdmFycy5sZW5ndGgtMTsgaSA+PSAwOyBpLS0pe1xuICAgICAgZGltX3NwYWNpbmdzLnB1c2goZGltX3NwYWNpbmcpO1xuICAgICAgZGltX3NwYWNpbmcgKj0gZGltX3ZhcnNbaV0udmFsdWVzLmxlbmd0aDtcbiAgICB9XG4gICAgZGltX3NwYWNpbmdzLnJldmVyc2UoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpbV92YXJzLmxlbmd0aDsgaSsrKXtcbiAgICAgIHZhciBkaW1fdmFyID0gZGltX3ZhcnNbaV07XG4gICAgICB2YXIgdmFsID0gdmFsc1tkaW1fdmFyLm5hbWVdIHx8IDA7XG4gICAgICBzdW0gKz0gdmFsICogZGltX3NwYWNpbmdzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gc3VtO1xuICB9XG4gIFxuICBmdW5jdGlvbiBzZWxlY3Rfb2JqX2J5X25hbWUob2JqcywgbmFtZSl7XG4gICAgZm9yICh2YXIgb2JqIG9mIG9ianMpe1xuICAgICAgaWYgKG9iai5uYW1lID09IG5hbWUpe1xuICAgICAgICByZXR1cm4gb2JqXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG5hbWVzID0gb2Jqcy5tYXAoIG8gPT4gby5uYW1lIClcbiAgICBjb25zb2xlLmVycm9yKFwiRGlkIG5vdCBmaW5kIFwiKyBuYW1lICsgXCIgaW4gXCIgKyBuYW1lcyArIFwiIVwiKVxuICB9XG4gIFxuICBmdW5jdGlvbiBrZXl2YWx1ZShrLHYpe1xuICAgIHZhciByZXQgPSB7fTtcbiAgICByZXRba10gPSB2O1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIGxvYWRfc3ByaXRlbWFwKG5hbWUsIHNldHRpbmdzKSB7XG4gICAgdGhpcy5zZXQoe3Nwcml0ZV9wYXRoOiBcImltYWdlcy9cIiArIG5hbWUgKyBcIi5qcGdcIiwgfSk7XG5cbiAgICBjb25zdCBhbGxfdmFycyA9IHNldHRpbmdzLmNvbmZpZy54X3ZhcnMuY29uY2F0KHNldHRpbmdzLmNvbmZpZy55X3ZhcnMpO1xuICAgIGNvbnN0IHN0ZXBfdmFyID0gYWxsX3ZhcnMuZmlsdGVyKHYgPT4gdi5uYW1lID09IFwic3RlcHNcIiB8fCB2Lm5hbWUgPT0gXCJzdGVwXCIpWzBdO1xuICAgIGNvbnN0IGFkanVzdGVkX2NvbmZpZyA9IHtcbiAgICAgIHNwcml0ZV9zaXplOiBzZXR0aW5ncy5jb25maWcuc2l6ZSxcbiAgICAgIHhfdmFyczogc2V0dGluZ3MuY29uZmlnLnhfdmFycyxcbiAgICAgIHlfdmFyczogc2V0dGluZ3MuY29uZmlnLnlfdmFycyxcbiAgICAgIGNvbmZpZ3VyYWJsZTogYWxsX3ZhcnNcbiAgICAgICAgLmZpbHRlcih2ID0+IHYubmFtZSAhPSBcInN0ZXBzXCIgJiYgdi52YWx1ZXMubGVuZ3RoID4gMClcbiAgICAgICAgLm1hcCh2ID0+IHYubmFtZSksXG4gICAgICBkaXNwbGF5OiBzdGVwX3Zhci52YWx1ZXNcbiAgICAgICAgLm1hcCgodmFsLCBpKSA9PiBrZXl2YWx1ZShzdGVwX3Zhci5uYW1lLCBpKSksXG4gICAgfVxuICAgIHRoaXMuc2V0KGFkanVzdGVkX2NvbmZpZyk7XG4gICAgdGhpcy5zZXQoc2V0dGluZ3MpO1xuICB9XG4gIFxuICBmdW5jdGlvbiBodW1hbl9yZWFkYWJsZShrZXksIHN0cmluZ3MpIHtcbiAgICBpZiAoc3RyaW5ncy5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIHN0cmluZ3MuZ2V0KGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBrZXkuc3BsaXQoJ18nKS5tYXAoKHMpID0+IHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpKS5qb2luKCcgJyk7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzcHJpdGVtYXBfbmFtZTogXCJcIixcbiAgICAgICAgc3ByaXRlX3BhdGg6IFwiXCIsXG4gICAgICAgIHNpemU6IDEzNixcbiAgICAgICAgc3ByaXRlX3NpemU6IDEsXG4gICAgICAgIHhfdmFyczogW10sXG4gICAgICAgIHlfdmFyczogW10sXG4gICAgICAgIHZhcl92YWx1ZXM6IHt9LFxuICAgICAgICBkaXNwbGF5OiBbe31dLFxuICAgICAgICBjb25maWd1cmFibGU6IFtdLFxuICAgICAgICBleHBsYWluX3RleHQ6IFwiXCIsXG4gICAgICAgIGljb25fc2l6ZTogNDQsXG4gICAgICAgIGljb25fdmFyX3ZhbHVlczoge30sXG4gICAgICAgIHN0cmluZ3M6IG5ldyBNYXAoW1xuICAgICAgICAgIFsnZGVmYXVsdF90cmFuc2Zvcm1zJywgJ1RyYW5zZm9ybXMnXSxcbiAgICAgICAgICBbJ3B5cmFtaWQnLCAnRGVjb3JyZWxhdGUnXSxcbiAgICAgICAgICBbJ3R2JywgJ1RvdGFsIFZhcmlhdGlvbiddLFxuICAgICAgICAgIFsnbDEnLCAnTDxzdWI+MTwvc3ViPiddLFxuICAgICAgICAgIFsncmFuZG9tX3JvdGF0ZScsICdSb3RhdGUnXSxcbiAgICAgICAgICBbJ3JhbmRvbV9zY2FsZScsICdTY2FsZSddLFxuICAgICAgICAgIFsnbGVhcm5pbmcgcmF0ZScsICdMUiddLFxuICAgICAgICBdKSxcbiAgICAgICAgdW5pdHM6IG5ldyBNYXAoW1xuICAgICAgICAgIFsnaml0dGVyJywgJ3B4J10sXG4gICAgICAgICAgWydyYW5kb21fcm90YXRlJywgJ8KwJ10sXG4gICAgICAgICAgWydyYW5kb21fc2NhbGUnLCAnw5cnXSxcbiAgICAgICAgXSksXG4gICAgICAgIHN0ZXBzOiBbXG4gICAgICAgICAgMSwgMzIsIDEyOCwgMjU2LCAyMDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICBcbiAgICAgIHNwcml0ZV9iYWNrZ3JvdW5kOiBzcHJpdGVfcGF0aCA9PiBcbiAgICAgICAgKHNwcml0ZV9wYXRoID09IFwiXCIpPyBcIiNERERcIiA6IFwidXJsKFwiK3Nwcml0ZV9wYXRoK1wiKVwiLFxuICAgICAgXG4gICAgICBhbGxfdmFyczogKHhfdmFycywgeV92YXJzKSA9PiB4X3ZhcnMuY29uY2F0KHlfdmFycyksXG4gICAgICBcbiAgICAgIHZhcl92YWx1ZXNfc2FmZTogKGFsbF92YXJzLCB2YXJfdmFsdWVzKSA9PiB7XG4gICAgICAgIHZhciBkZWZhdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBjb25maWdfdmFyIG9mIGFsbF92YXJzKXtcbiAgICAgICAgICBkZWZhdWx0c1tjb25maWdfdmFyLm5hbWVdID0gY29uZmlnX3Zhci5kZWZhdWx0IHx8IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9ial91cGRhdGUoZGVmYXVsdHMsIHZhcl92YWx1ZXMpO1xuICAgICAgfSxcbiAgICAgIFxuICAgICAgaWNvbl92YXJfdmFsdWVzX3NhZmU6IChhbGxfdmFycywgdmFyX3ZhbHVlcywgaWNvbl92YXJfdmFsdWVzKSA9PiB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgY29uZmlnX3ZhciBvZiBhbGxfdmFycyl7XG4gICAgICAgICAgdmFyIG5hbWUgPSBjb25maWdfdmFyLm5hbWU7XG4gICAgICAgICAgdmFsdWVzW25hbWVdID0gaWNvbl92YXJfdmFsdWVzW25hbWVdIHx8IGNvbmZpZ192YXIuZGVmYXVsdCB8fCB2YXJfdmFsdWVzW25hbWVdIHx8IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgIH0sXG4gICAgICBcbiAgICAgIGNvbmZpZ192YXJfZ3JvdXBzOiAoYWxsX3ZhcnMsIGNvbmZpZ3VyYWJsZSkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSAgY29uZmlndXJhYmxlLm1hcChncm91cCA9PiB7XG4gICAgICAgICAgaWYgKCEoZ3JvdXAgaW5zdGFuY2VvZiBBcnJheSkpIGdyb3VwID0gW2dyb3VwXTtcbiAgICAgICAgICByZXR1cm4gZ3JvdXBcbiAgICAgICAgICAgIC5tYXAoY29uZmlnX3Zhcl9uYW1lID0+IHNlbGVjdF9vYmpfYnlfbmFtZShhbGxfdmFycywgY29uZmlnX3Zhcl9uYW1lKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSxcbiAgICAgIFxuICAgICAgeF9wb3NfYWZ0ZXJfb3ZlcnJpZGU6ICh4X3ZhcnMsIHZhcl92YWx1ZXNfc2FmZSwgc3ByaXRlX3NpemUpID0+IChcbiAgICAgICAgKHZhcl92YWx1ZV9vdmVycmlkZSkgPT4gLXNwcml0ZV9zaXplKnZhcnNfdG9fcG9zaXRpb24oeF92YXJzLCBvYmpfdXBkYXRlKHZhcl92YWx1ZXNfc2FmZSwgdmFyX3ZhbHVlX292ZXJyaWRlKSlcbiAgICAgICksXG4gICAgICBcbiAgICAgIHlfcG9zX2FmdGVyX292ZXJyaWRlOiAoeV92YXJzLCB2YXJfdmFsdWVzX3NhZmUsIHNwcml0ZV9zaXplKSA9PiAoXG4gICAgICAgICh2YXJfdmFsdWVfb3ZlcnJpZGUpID0+IC1zcHJpdGVfc2l6ZSp2YXJzX3RvX3Bvc2l0aW9uKHlfdmFycywgb2JqX3VwZGF0ZSh2YXJfdmFsdWVzX3NhZmUsIHZhcl92YWx1ZV9vdmVycmlkZSkpXG4gICAgICApLFxuICAgIFxuICAgICAgaWNvbl94X3Bvc19hZnRlcl9vdmVycmlkZTogKHhfdmFycywgaWNvbl92YXJfdmFsdWVzX3NhZmUsIHNwcml0ZV9zaXplKSA9PiAoXG4gICAgICAgICh2YXJfdmFsdWVfb3ZlcnJpZGUpID0+IC1zcHJpdGVfc2l6ZSp2YXJzX3RvX3Bvc2l0aW9uKHhfdmFycywgb2JqX3VwZGF0ZShpY29uX3Zhcl92YWx1ZXNfc2FmZSwgdmFyX3ZhbHVlX292ZXJyaWRlKSlcbiAgICAgICksXG4gICAgICBcbiAgICAgIGljb25feV9wb3NfYWZ0ZXJfb3ZlcnJpZGU6ICh5X3ZhcnMsIGljb25fdmFyX3ZhbHVlc19zYWZlLCBzcHJpdGVfc2l6ZSkgPT4gKFxuICAgICAgICAodmFyX3ZhbHVlX292ZXJyaWRlKSA9PiAtc3ByaXRlX3NpemUqdmFyc190b19wb3NpdGlvbih5X3ZhcnMsIG9ial91cGRhdGUoaWNvbl92YXJfdmFsdWVzX3NhZmUsIHZhcl92YWx1ZV9vdmVycmlkZSkpXG4gICAgICApLFxuICAgICAgXG4gICAgICBkaXNwbGF5X29mZnNldHM6ICh4X3Bvc19hZnRlcl9vdmVycmlkZSwgeV9wb3NfYWZ0ZXJfb3ZlcnJpZGUsIGRpc3BsYXkpID0+IHtcbiAgICAgICAgcmV0dXJuIGRpc3BsYXkubWFwKGRpc3BsYXlfdmFsdWVzID0+ICh7XG4gICAgICAgICAgeDogIHhfcG9zX2FmdGVyX292ZXJyaWRlKGRpc3BsYXlfdmFsdWVzKSxcbiAgICAgICAgICB5OiAgeV9wb3NfYWZ0ZXJfb3ZlcnJpZGUoZGlzcGxheV92YWx1ZXMpLFxuICAgICAgICB9KSlcbiAgICAgIH0sXG4gICAgICBcblxuICAgIH0sXG4gICAgY29tcG9uZW50czoge30sXG4gICAgbWV0aG9kczoge3NldERlZXAsIGxvYWRfc3ByaXRlbWFwfSxcbiAgICBoZWxwZXJzOiB7cmFuZ2UsIGtleXZhbHVlLCBodW1hbl9yZWFkYWJsZX1cbiAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlhZ3JhbXMvT3B0RXhwbG9yZUZsZXguaHRtbCIsIjwhLS1cbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4tLT5cbjxkaXYgY2xhc3M9XCJsYXllcnNcIj5cbiAge3sjZWFjaCByYW5nZSgxMikgYXMgbn19XG4gICAgPGRpdiBjbGFzcz1cIm91dGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZ3JhZFwiIHN0eWxlPVwiXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC17e3Nwcml0ZV9zaXplKihuKzEpfX1weCAte3tzcHJpdGVfc2l6ZSowfX1weDtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSh7e3NpemUvc3ByaXRlX3NpemV9fSk7XG4gICAgICAgIGZpbHRlcjogIGNvbnRyYXN0KDIwMCUpO1xuICAgICAgICBtYXJnaW46IHt7KHNpemUtc3ByaXRlX3NpemUpLzJ9fXB4O1xuICAgICAgICB3aWR0aDoge3tzcHJpdGVfc2l6ZX19cHg7XG4gICAgICAgIGhlaWdodDoge3tzcHJpdGVfc2l6ZX19cHg7IFwiPjwvZGl2PlxuICAgICAgPGZpZ2NhcHRpb24+e3tsYXllcnNbbl19fTwvZmlnY2FwdGlvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwie3sobiA9PSAxIHx8IG4gPT0gMyB8fCBuID09IDUgfHwgbiA9PSAxMCk/ICdvcCBoaWdobGlnaHQnIDogJ29wJ319XCIgc3R5bGU9XCJcbiAgICAgIHRvcDogNDVweDtcbiAgICAgIHdpZHRoOnt7bWFyZ2luLTEyfX1weDtcbiAgICAgIGhlaWdodDp7e3NpemUrMTB9fXB4O1xuICAgICAgYmFja2dyb3VuZDoge3sobiA9PSAxIHx8IG4gPT0gMyB8fCBuID09IDUgfHwgbiA9PSAxMCk/ICcjZmY2NjAwJyA6IChuID09IDExKT8gJ3doaXRlJyA6ICdoc2woMjQwLCA1MCUsIDkwJSknfX07XG4gICAgICBib3JkZXItcmFkaXVzOjRweDtcIiBkYXRhLW49XCJ7e259fVwiPlxuICAgIDwvZGl2PlxuICB7ey9lYWNofX1cbjwvZGl2PlxuXG5cbjxzdHlsZT5cbiAgLmxheWVycyB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAub3V0ZXIge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIH1cbiAgLm91dGVyOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIC5vdXRlcjpsYXN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuICAuZ3JhZCB7XG4gICAgLyp3aWR0aDogMjI0cHg7Ki9cbiAgICAvKmhlaWdodDogMjI0cHg7Ki9cbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCJpbWFnZXMvbGF5ZXJfZ3JhZGllbnRzX3Nwcml0ZW1hcF80LmpwZWdcIik7XG4gIH1cbiAgLm91dGVyIGZpZ2NhcHRpb24ge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmhpZ2hsaWdodDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIuKGkFwiO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtM3B4O1xuICAgIHRvcDogLTI1cHg7XG4gICAgY29sb3I6ICM4ODg7XG4gIH1cbjwvc3R5bGU+XG5cblxuPHNjcmlwdD5cbmZ1bmN0aW9uIHJhbmdlKG4pe1xuICB2YXIgcmV0ID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKSByZXQucHVzaChpKTtcbiAgcmV0dXJuIHJldDtcbn1cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzaXplOiA3MCxcbiAgICAgICAgc3ByaXRlX3NpemU6IDIyNCxcbiAgICAgICAgbWFyZ2luOiAyMCxcbiAgICAgICAgbGF5ZXJzOiBbXCJpbnB1dFwiLCBcImNvbnYyZDBcIiwgXCJjb252MmQxXCIsIFwiY29udjJkMlwiLFxuICAgICAgICAgICAgICAgXCJtaXhlZDNhXCIsIFwibWl4ZWQzYlwiLFxuICAgICAgICAgICAgICAgXCJtaXhlZDRhXCIsIFwibWl4ZWQ0YlwiLCBcIm1peGVkNGNcIiwgXCJtaXhlZDRkXCIsIFwibWl4ZWQ0ZVwiLFxuICAgICAgICAgICAgICAgXCJtaXhlZDVhXCIsIFwibWl4ZWQ1YlwiXSxcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7ICAgfSxcbiAgICBoZWxwZXJzOiB7cmFuZ2V9XG4gIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpYWdyYW1zL0dyYWRBcnRpZmFjdHMuaHRtbCIsIjwhLS1cbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4tLT5cbjxkaXYgc3R5bGU9XCJncmlkLWNvbHVtbjogdGV4dDtcIj5cbiAgPGRpdiBjbGFzcz1cImljb25zXCI+XG4gIHt7I2VhY2ggdGh1bWJuYWlsX2luZGljZXMgYXMgaX19XG4gICAgPGRpdiBjbGFzcz1cImljb24ge3soc2VsZWN0ZWQgPT0gaSk/ICdzZWxlY3RlZCcgOiAnJ319XCJcbiAgICAgICAgIG9uOmNsaWNrPSdzZXQoe3NlbGVjdGVkOiBpfSknXG4gICAgICA+XG4gICAgICA8U3ByaXRlIHNyY19jbGFzcz17e3Nwcml0ZV9vcHRfY2xhc3N9fSBzaXplPTQ0IHNwcml0ZV9zaXplPTE0NyB5PXt7aX19IHg9MCBzcHJpdGVfc2NhbGU9MC41Lz5cbiAgICA8L2Rpdj5cbiAge3svZWFjaH19XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICBcbiAgPGRpdiBjbGFzcz1cIm5lZ2F0aXZlXCI+XG4gICAgPGRpdiBjbGFzcz1cIm9wdGltaXplXCI+XG4gICAgICA8U3ByaXRlIHNyY19jbGFzcz17e3Nwcml0ZV9vcHRfY2xhc3N9fSBzaXplPTE0NyBzcHJpdGVfc2l6ZT0xNDcgeT17e3NlbGVjdGVkfX0geD0xIHNwcml0ZV9zY2FsZT0xIHBpeGVsYXRlZD17e2ZhbHNlfX0vPlxuICAgICAgPGZpZ2NhcHRpb24gY2xhc3M9XCJjYXB0aW9uXCI+XG4gICAgICAgIDxzdHJvbmc+TmVnYXRpdmU8L3N0cm9uZz4gb3B0aW1pemVkXG4gICAgICA8L2ZpZ2NhcHRpb24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGVzXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1zZXRcIj5cbiAgICAgICAgPCEtLSA8aW1nIHNyYz17e2ltZ19wYXRoICsgXCIwLW1pbi5qcGdcIn19PiAtLT5cbiAgICAgICAgPFNwcml0ZSBzcmNfY2xhc3M9e3tzcHJpdGVfY2xhc3N9fSBzaXplPTE0NyBzcHJpdGVfc2l6ZT0yOTQgeT17e3NlbGVjdGVkfX0geD0wIHNwcml0ZV9zY2FsZT0xLz5cbiAgICAgICAgPGZpZ2NhcHRpb24gY2xhc3M9XCJjYXB0aW9uXCI+XG4gICAgICAgICAgPHN0cm9uZz5NaW5pbXVtPC9zdHJvbmc+IGFjdGl2YXRpb24gZXhhbXBsZXNcbiAgICAgICAgPC9maWdjYXB0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1zZXRcIj5cbiAgICAgICAgPFNwcml0ZSBzcmNfY2xhc3M9e3tzcHJpdGVfY2xhc3N9fSBzaXplPTE0NyBzcHJpdGVfc2l6ZT0yOTQgeT17e3NlbGVjdGVkfX0geD0xIHNwcml0ZV9zY2FsZT0xLz5cbiAgICAgICAgPGZpZ2NhcHRpb24gY2xhc3M9XCJjYXB0aW9uXCI+XG4gICAgICAgICAgU2xpZ2h0bHkgbmVnYXRpdmUgYWN0aXZhdGlvbiBleGFtcGxlc1xuICAgICAgICA8L2ZpZ2NhcHRpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImRpdmlkZXJcIj48L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwicG9zaXRpdmVcIj5cbiAgICA8ZGl2IGNsYXNzPVwib3B0aW1pemVcIj5cbiAgICAgIDxTcHJpdGUgc3JjX2NsYXNzPXt7c3ByaXRlX29wdF9jbGFzc319IHNpemU9MTQ3IHNwcml0ZV9zaXplPTE0NyB5PXt7c2VsZWN0ZWR9fSB4PTAgc3ByaXRlX3NjYWxlPTEvPlxuICAgICAgPGZpZ2NhcHRpb24gY2xhc3M9XCJjYXB0aW9uXCI+XG4gICAgICAgIDxzdHJvbmc+UG9zaXRpdmU8L3N0cm9uZz4gb3B0aW1pemVkXG4gICAgICA8L2ZpZ2NhcHRpb24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGVzXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1zZXRcIj5cbiAgICAgICAgPFNwcml0ZSBzcmNfY2xhc3M9e3tzcHJpdGVfY2xhc3N9fSBzaXplPTE0NyBzcHJpdGVfc2l6ZT0yOTQgeT17e3NlbGVjdGVkfX0geD0zIHNwcml0ZV9zY2FsZT0xLz5cbiAgICAgICAgPGZpZ2NhcHRpb24gY2xhc3M9XCJjYXB0aW9uXCI+XG4gICAgICAgICAgU2xpZ2h0bHkgcG9zaXRpdmUgYWN0aXZhdGlvbiBleGFtcGxlc1xuICAgICAgICA8L2ZpZ2NhcHRpb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLXNldFwiPlxuICAgICAgICA8U3ByaXRlIHNyY19jbGFzcz17e3Nwcml0ZV9jbGFzc319IHNpemU9e3sxNDd9fSBzcHJpdGVfc2l6ZT17ezI5NH19IHk9e3tzZWxlY3RlZH19IHg9NCBzcHJpdGVfc2NhbGU9MS8+XG4gICAgICAgIDxmaWdjYXB0aW9uIGNsYXNzPVwiY2FwdGlvblwiPlxuICAgICAgICAgIDxzdHJvbmc+TWF4aW11bTwvc3Ryb25nPiBhY3RpdmF0aW9uIGV4YW1wbGVzXG4gICAgICAgIDwvZmlnY2FwdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuPC9kaXY+XG5cbjxmaWdjYXB0aW9uIHN0eWxlPVwiZ3JpZC1jb2x1bW46IHRleHQ7XCI+XG4gIDxzdHJvbmc+e3tuZXVyb25fbmFtZShuZXVyb25zW3NlbGVjdGVkXSl9fTwvc3Ryb25nPlxuPC9maWdjYXB0aW9uPlxuXG5cbjxzdHlsZT5cblxuICAub3B0LWFuZC1leGFtcGxlcy1zcHJpdGUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImltYWdlcy9leGFtcGxlcy5qcGdcIik7XG4gIH1cbiAgXG4gIC5vcHQtYW5kLWV4YW1wbGVzLW9wdGltaXplZC1zcHJpdGUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImltYWdlcy9leGFtcGxlc19vcHRpbWl6ZWQucG5nXCIpO1xuICB9XG4gIFxuICAvKiBJY29ucyAqL1xuXG4gIC5pY29ucyB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XG4gIH1cblxuICAuaWNvbnMgLmljb24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gICAgXG4gICAgLyptYXJnaW4tbGVmdDogM3B4OyovXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xuICB9XG5cbiAgLmljb25zIC5pY29uOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cblxuICAuaWNvbnMgLmljb246bGFzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgfVxuXG4gIC5pY29ucyAuaWNvbi5zZWxlY3RlZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZjY2MDA7XG4gIH1cblxuICAuaWNvbiBkaXYge1xuICAgIG9wYWNpdHk6IDAuNjY2O1xuICAgIGltYWdlLXJlbmRlcmluZzogYXV0bztcbiAgfVxuXG4gIC5pY29uLnNlbGVjdGVkIGRpdiB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICBcbiAgLyogT3B0QW5kRXhhbXBsZXMgKi9cblxuICAuY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogdGV4dDtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG4gIFxuICAucG9zaXRpdmUsIC5uZWdhdGl2ZSwgLmRpdmlkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3c7XG4gIH1cbiAgXG4gIC5jb250YWluZXIgZmlnY2FwdGlvbiB7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgfVxuICBcbiAgLmRpdmlkZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICB9XG4gIFxuICAucG9zaXRpdmUgPiBkaXYge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuICBcbiAgLm9wdGltaXplIHtcbiAgICBcbiAgfVxuICBcbiAgLnBvc2l0aXZlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICB9XG4gIFxuICAub3B0aW1pemUgZmlnY2FwdGlvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG4gIFxuICAub3B0aW1pemUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgfVxuICBcbiAgLmV4YW1wbGVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93O1xuICB9XG4gIFxuICAuZXhhbXBsZS1zZXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1zZXQgPiAqLFxuICAub3B0aW1pemUgPiAqIHtcbiAgICB3aWR0aDogMTQ3cHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLXNldCA+IGRpdixcbiAgLm9wdGltaXplID4gZGl2IHtcbiAgICBoZWlnaHQ6IDE0N3B4O1xuICB9XG4gIFxuICAucG9zaXRpdmUgLmV4YW1wbGVzIHtcbiAgICBmbGV4LWZsb3c6IHJvdy1yZXZlcnNlO1xuICB9XG4gIFxuICAucG9zaXRpdmUgLm9wdGltaXplIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gIH1cbiAgXG4gIC5uZWdhdGl2ZSAub3B0aW1pemUge1xuICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuICAgIFxuICAgIC5kaXZpZGVyIHtcbiAgICAgIGRpc3BsYXk6IGluaGVyaXQ7XG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjY2M7XG4gICAgICAvKm1hcmdpbi10b3A6IC0xMHB4OyovXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIFxuICAgIC5kaXZpZGVyOjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCIwXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAtNHB4O1xuICAgICAgdG9wOiAtMjVweDtcbiAgICAgIGNvbG9yOiAjY2NjO1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gICAgXG4gICAgLmV4YW1wbGUtc2V0IHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gICAgXG4gICAgLmV4YW1wbGUtc2V0OmZpcnN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICB9XG4gICAgXG4gICAgLm5lZ2F0aXZlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICAgIFxuICAgIC5uZWdhdGl2ZSAub3B0aW1pemUge1xuICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgfVxuICAgIFxuICAgIC5jb250YWluZXIge1xuICAgICAgZ3JpZC1jb2x1bW46IHBhZ2U7XG4gICAgICBmbGV4LWZsb3c6IHJvdztcbiAgICB9XG4gICAgXG4gICAgLnBvc2l0aXZlIHtcbiAgICAgIGZsZXgtZmxvdzogcm93LXJldmVyc2U7XG4gICAgfVxuICAgIFxuICAgIC5wb3NpdGl2ZSAuZXhhbXBsZXMge1xuICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgfVxuICAgIFxuICAgIC5uZWdhdGl2ZSwgLmRpdmlkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93O1xuICAgIH1cbiAgICBcbiAgICAub3B0aW1pemUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICB9XG4gICAgXG4gICAgLm5lZ2F0aXZlID4gZGl2IHtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgfVxuICAgIFxuICAgIC5wb3NpdGl2ZSAub3B0aW1pemUge1xuICAgICAgbWFyZ2luLWxlZnQ6IDM2cHg7XG4gICAgfVxuICAgIFxuICAgIC5uZWdhdGl2ZSAub3B0aW1pemUge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAzNnB4O1xuICAgIH1cbiAgfVxuPC9zdHlsZT5cblxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBzZXREZWVwIH0gZnJvbSAnc3ZlbHRlLWV4dHJhcyc7XG4gIGltcG9ydCBTcHJpdGUgZnJvbSAnLi9TcHJpdGUuaHRtbCc7XG4gIFxuICBmdW5jdGlvbiBwYWQobnVtLCBzaXplKSB7XG4gICAgdmFyIHMgPSBcIjAwMDAwXCIgKyBudW07XG4gICAgcmV0dXJuIHMuc3Vic3RyKHMubGVuZ3RoLXNpemUpO1xuICB9XG4gIFxuICBmdW5jdGlvbiByYW5nZShuKXtcbiAgICByZXR1cm4gQXJyYXkobikuZmlsbCgpLm1hcCgoXywgaSkgPT4gaSk7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIG5ldXJvbl9uYW1lKG5ldXJvbikge1xuICAgIHJldHVybiBgTGF5ZXIgbWl4ZWQgJHtuZXVyb25bMF19LCB1bml0ICR7bmV1cm9uWzFdfWA7XG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5ldXJvbnM6IFtcbiAgICAgICAgICBbXCI0YVwiLCAgIDZdLFxuICAgICAgICAgIFtcIjRhXCIsICA0MV0sXG4gICAgICAgICAgW1wiNGFcIiwgMTQzXSxcbiAgICAgICAgICBbXCI0YVwiLCAyNDBdLFxuICAgICAgICAgIFtcIjRhXCIsIDQ0OV0sXG4gICAgICAgICAgW1wiNGFcIiwgNDkyXSxcbiAgICAgICAgICBbXCI0YVwiLCA0OTldLFxuICAgICAgICAgIFtcIjRiXCIsIDQ4Ml0sXG4gICAgICAgICAgW1wiNGRcIiwgNDc5XSxcbiAgICAgICAgICBbXCI0ZVwiLCA3MThdLFxuICAgICAgICAgIFtcIjRlXCIsIDgxOV1cbiAgICAgICAgXSxcbiAgICAgICAgc2VsZWN0ZWQ6IDUsXG4gICAgICAgIHNwcml0ZV9jbGFzczogJ29wdC1hbmQtZXhhbXBsZXMtc3ByaXRlJyxcbiAgICAgICAgc3ByaXRlX29wdF9jbGFzczogJ29wdC1hbmQtZXhhbXBsZXMtb3B0aW1pemVkLXNwcml0ZSdcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICBudW1iZXJfb2ZfbmV1cm9uczogbmV1cm9ucyA9PiBuZXVyb25zLmxlbmd0aCxcbiAgICAgIHRodW1ibmFpbF9pbmRpY2VzOiBudW1iZXJfb2ZfbmV1cm9ucyA9PiByYW5nZShudW1iZXJfb2ZfbmV1cm9ucyksXG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7U3ByaXRlfSxcbiAgICBtZXRob2RzOiB7fSxcbiAgICBoZWxwZXJzOiB7cGFkLCBuZXVyb25fbmFtZX1cbiAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlhZ3JhbXMvT3B0QW5kRXhhbXBsZXMuaHRtbCIsIjwhLS1cbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4tLT5cbjxkaXYgY2xhc3M9XCJsaW5lYXItY29tYmluYXRpb25zXCI+XG5cbiAgPGRpdiBjbGFzcz1cImZyb3dcIj5cblxuICAgIDxkaXYgaWQ9XCJpY29ucy1maXJzdFwiIGNsYXNzPVwiZmNvbHVtblwiPlxuICAgICAgPGRpdiBjbGFzcz1cImljb25zXCI+XG4gICAgICAgIHt7I2VhY2ggcmFuZ2UoNikgYXMgaX19XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImljb24ge3soeCA9PSBpKzEpPyAnc2VsZWN0ZWQnIDogJyd9fVwiIG9uOmNsaWNrPSdzZXQoe3g6IGkrMX0pJz5cbiAgICAgICAgICAgIDxTcHJpdGUgc3JjX2NsYXNzPXt7c3ByaXRlX2NsYXNzfX0gc2l6ZT00NCBzcHJpdGVfc2l6ZT0xODAgeT0wIHg9e3tpKzF9fSBzcHJpdGVfc2NhbGU9MC41Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAge3svZWFjaH19XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgaWQ9XCJzcHJpdGUtZmlyc3RcIiBjbGFzcz1cImZjb2x1bW5cIj5cbiAgICAgIDxTcHJpdGUgc3JjX2NsYXNzPXt7c3ByaXRlX2NsYXNzfX0gc2l6ZT0xODAgc3ByaXRlX3NpemU9MTgwIHk9MCB4PXt7eH19IHNwcml0ZV9zY2FsZT0xLz5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmlnY2FwdGlvblwiPk5ldXJvbiAxPC9zcGFuPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cIm9wZXJhdG9yXCI+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGlkPVwic3ByaXRlLXNlY29uZFwiIGNsYXNzPVwiZmNvbHVtblwiPlxuICAgICAgPFNwcml0ZSBzcmNfY2xhc3M9e3tzcHJpdGVfY2xhc3N9fSBzaXplPTE4MCBzcHJpdGVfc2l6ZT0xODAgeT17e3l9fSB4PTAgc3ByaXRlX3NjYWxlPTEvPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmaWdjYXB0aW9uXCI+TmV1cm9uIDI8L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGlkPVwiaWNvbnMtc2Vjb25kXCIgY2xhc3M9XCJmY29sdW1uXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaWNvbnNcIj5cbiAgICAgICAge3sjZWFjaCByYW5nZSg2KSBhcyBpfX1cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvbiB7eyh5ID09IGkrMSk/ICdzZWxlY3RlZCcgOiAnJ319XCIgb246Y2xpY2s9J3NldCh7eTogaSsxfSknID5cbiAgICAgICAgICAgIDxTcHJpdGUgc3JjX2NsYXNzPXt7c3ByaXRlX2NsYXNzfX0gc2l6ZT00NCBzcHJpdGVfc2l6ZT0xODAgeT17e2krMX19IHg9MCBzcHJpdGVfc2NhbGU9MC41Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAge3svZWFjaH19XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiZnJvd1wiIHN0eWxlPVwiXCI+XG4gICAgPGRpdiBjbGFzcz1cInJlc3VsdCBjIGZjb2x1bW5cIj5cbiAgICAgIDxTcHJpdGUgc3JjX2NsYXNzPXt7c3ByaXRlX2NsYXNzfX0gc2l6ZT0xODAgc3ByaXRlX3NpemU9MTgwIHk9e3t5fX0geD17e3h9fSBzcHJpdGVfc2NhbGU9MS8+XG4gICAgICA8c3BhbiBjbGFzcz1cImZpZ2NhcHRpb25cIj5Kb2ludGx5IG9wdGltaXplZDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuXG48c3R5bGU+XG5cbiAgLyogRlJvdyAmIEZDb2x1bW4gKi9cblxuICAuZnJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgLmZjb2x1bW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgei1pbmRleDogMjtcbiAgfVxuXG4gIC8qLmZjb2x1bW4gPiAqIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9Ki9cblxuICAvKi5mY29sdW1uID4gKjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9Ki9cblxuICAvKiAtZW5kIEZSb3cgJiBGQ29sdW1uIGVuZC0gKi9cblxuICAvKiBJY29ucyAqL1xuICAuaWNvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgLypib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDsqL1xuICB9XG5cbiAgLmljb25zIC5pY29uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xuXG4gICAgLyptYXJnaW4tbGVmdDogM3B4OyovXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XG4gIH1cblxuICAuaWNvbnMgLmljb24uc2VsZWN0ZWQge1xuICAgIG9wYWNpdHk6IDEwMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2ZmNjYwMDtcbiAgfVxuXG4gIC5pY29uIGRpdiB7XG4gICAgb3BhY2l0eTogMC42NjY7XG4gICAgaW1hZ2UtcmVuZGVyaW5nOiBhdXRvO1xuICB9XG5cbiAgLmljb24uc2VsZWN0ZWQgZGl2IHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cblxuICAvKiBsaW5lYXIgQ29tYmluYXRpb25zICovXG5cbiAgLmxpbmVhcl9jb21iaW5hdGlvbnNfc3ByaXRlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy9saW5lYXJfY29tYmluYXRpb25zLmpwZycpXG4gIH1cblxuXG4gICNjYXB0aW9uIHtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICB9XG5cbiAgI2ljb25zLWZpcnN0IHtcbiAgICBvcmRlcjogMVxuICB9XG4gICNzcHJpdGUtZmlyc3Qge1xuICAgIG9yZGVyOiAyXG4gIH1cbiAgI3Nwcml0ZS1zZWNvbmQge1xuICAgIG9yZGVyOiA1XG4gIH1cbiAgI2ljb25zLXNlY29uZCB7XG4gICAgb3JkZXI6IDRcbiAgfVxuXG4gIC5yZXN1bHQge1xuICAgIHotaW5kZXg6IDM7XG4gIH1cblxuICAub3BlcmF0b3Ige1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG5cbiAgICAuZmNvbHVtbiB7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG5cbiAgICAuZmNvbHVtbjpmaXJzdC1vZi10eXBlIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cblxuICAgIC5mY29sdW1uOmxhc3Qtb2YtdHlwZSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuXG4gICAgI2ljb25zLWZpcnN0IHtcbiAgICAgIG9yZGVyOiAxXG4gICAgfVxuICAgICNzcHJpdGUtZmlyc3Qge1xuICAgICAgb3JkZXI6IDI7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICAgICNzcHJpdGUtc2Vjb25kIHtcbiAgICAgIG9yZGVyOiA0O1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuICAgICNpY29ucy1zZWNvbmQge1xuICAgICAgb3JkZXI6IDVcbiAgICB9XG5cbiAgICAub3BlcmF0b3Ige1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaW1hZ2VzL2pvaW5fYXJyb3cuc3ZnKTtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciA3MCU7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAyODAlO1xuICAgICAgbWluLXdpZHRoOiA2MHB4O1xuICAgICAgaGVpZ2h0OiAxODBweDtcbiAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgb3JkZXI6IDM7XG4gICAgICBvcGFjaXR5OiAwLjMzO1xuICAgIH1cblxuICAgIC5yZXN1bHQuYyB7XG4gICAgICB0b3A6IC02NHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDI0MHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgIC5yZXN1bHQuYyA+IGRpdiB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMjBweCBoc2xhKDAsMCUsMCUsMC4zKTtcbiAgICB9XG5cbiAgICAjc3ByaXRlLXNlY29uZCA+IHNwYW4ge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuXG4gICAgLmxpbmVhci1jb21iaW5hdGlvbnMge1xuICAgICAgbWFyZ2luLWJvdHRvbTogLTg0cHg7XG4gICAgfVxuICB9XG5cblxuPC9zdHlsZT5cblxuXG48c2NyaXB0PlxuICBpbXBvcnQgU3ByaXRlIGZyb20gJy4vU3ByaXRlLmh0bWwnO1xuICAvLyBjb25zdCBqb2luX3N2ZyA9IHJlcXVpcmUoJ3N2Zy1pbmxpbmUtbG9hZGVyP2NsYXNzUHJlZml4IS4uL2pvaW4uc3ZnJyk7XG5cbiAgZnVuY3Rpb24gcmFuZ2Uobil7XG4gICAgcmV0dXJuIEFycmF5KG4pLmZpbGwoKS5tYXAoKF8sIGkpID0+IGkpO1xuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzcHJpdGVfY2xhc3M6ICdsaW5lYXJfY29tYmluYXRpb25zX3Nwcml0ZScsXG4gICAgICAgIHg6IDQsXG4gICAgICAgIHk6IDEsXG4gICAgICAgIC8vIHN2Zzogam9pbl9zdmdcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7fSxcbiAgICBjb21wb25lbnRzOiB7U3ByaXRlfSxcbiAgICBtZXRob2RzOiB7fSxcbiAgICBoZWxwZXJzOiB7cmFuZ2V9XG4gIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpYWdyYW1zL0xpbmVhckNvbWJpbmF0aW9ucy5odG1sIiwiPCEtLVxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbi0tPlxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuXG4gIHt7I2VhY2ggcmFuZ2UoNCkgYXMgeCwgaW5kZXh9fVxuICAgIDxkaXY+XG4gICAgICA8U3ByaXRlIHNyY19jbGFzcz0nc3ByaXRlX29wdF9wcm9ncmVzcycgeD17e3h9fSB5PTAgc3ByaXRlX3NpemU9MTgwIHNpemU9MTQwIHBpeGVsYXRlZD17e2ZhbHNlfX0vPlxuICAgICAgPGZpZ2NhcHRpb24+XG4gICAgICAgIFN0ZXAge3tzdGVwc1tpbmRleF19fVxuICAgICAgPC9maWdjYXB0aW9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhcnJvd2JveFwiPlxuICAgICAge3sjaWYgeCAhPSAzfX3ihpJ7ey9pZn19XG4gICAgPC9kaXY+XG4gIHt7L2VhY2h9fVxuICBcbjwvZGl2PlxuXG5cbjxzdHlsZT5cblxuICAuc3ByaXRlX29wdF9wcm9ncmVzcyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1hZ2VzL29wdF9wcm9ncmVzc19taXhlZDRhLTExLnBuZ1wiKTtcbiAgfVxuICBcbiAgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICBcbiAgLmNvbnRhaW5lciA+IGRpdiB7XG4gICAgLyptYXJnaW4tYm90dG9tOiAyOHB4OyovXG4gIH1cbiAgXG4gIC5jb250YWluZXIgLnNwcml0ZSB7XG4gICAgLypmbGV4OiAxIDEgYXV0bzsqL1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gIH1cbiAgXG4gIC5jb250YWluZXIgLmFycm93Ym94IHtcbiAgICBjb2xvcjogIzg4ODtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB3aWR0aDogMTRweDtcbiAgfVxuXG48L3N0eWxlPlxuXG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBTcHJpdGUgZnJvbSBcIi4vU3ByaXRlLmh0bWxcIjtcbiAgXG4gIGZ1bmN0aW9uIHJhbmdlKG4pe1xuICAgIHJldHVybiBBcnJheShuKS5maWxsKCkubWFwKChfLCBpKSA9PiBpKTtcbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzcHJpdGVfc2NhbGU6IDEuMCxcbiAgICAgICAgc3RlcHM6IFswLDQsNDgsMjA0OF1cbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHsgU3ByaXRlIH0sXG4gICAgaGVscGVyczogeyByYW5nZSB9LFxuICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaWFncmFtcy9PcHRQcm9ncmVzcy5odG1sIiwiPCEtLVxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbi0tPlxuXG48ZmlnY2FwdGlvbiBzdHlsZT1cImdyaWQtY29sdW1uOiBraWNrZXI7XCI+PHN0cm9uZz5EYXRhc2V0IEV4YW1wbGVzPC9zdHJvbmc+IHNob3cgdXMgd2hhdCBuZXVyb25zIHJlc3BvbmQgdG8gaW4gcHJhY3RpY2U8L2ZpZ2NhcHRpb24+XG5cbjxkaXYgY2xhc3M9XCJpbWFnZXNcIiBzdHlsZT1cImdyaWQtY29sdW1uOiB0ZXh0LXN0YXJ0IC8gcGFnZS1lbmQ7XCI+XG4gIDxTcHJpdGUgc3JjX2NsYXNzPSdzcHJpdGVfZXhhbXBsZXNfb3B0X2NvbXBhcmlzb25fZXhhbXBsZXMnIHg9MCB5PTAgc3ByaXRlX3NpemU9Mjk0IGJpbmQ6c2l6ZT48L1Nwcml0ZT5cbiAgPFNwcml0ZSBzcmNfY2xhc3M9J3Nwcml0ZV9leGFtcGxlc19vcHRfY29tcGFyaXNvbl9leGFtcGxlcycgeD0xIHk9MCBzcHJpdGVfc2l6ZT0yOTQgYmluZDpzaXplPjwvU3ByaXRlPlxuICA8U3ByaXRlIHNyY19jbGFzcz0nc3ByaXRlX2V4YW1wbGVzX29wdF9jb21wYXJpc29uX2V4YW1wbGVzJyB4PTIgeT0wIHNwcml0ZV9zaXplPTI5NCBiaW5kOnNpemU+PC9TcHJpdGU+XG4gIDxTcHJpdGUgc3JjX2NsYXNzPSdzcHJpdGVfZXhhbXBsZXNfb3B0X2NvbXBhcmlzb25fZXhhbXBsZXMnIHg9MyB5PTAgc3ByaXRlX3NpemU9Mjk0IGJpbmQ6c2l6ZT48L1Nwcml0ZT5cbjwvZGl2PlxuXG48ZmlnY2FwdGlvbiBzdHlsZT1cImdyaWQtY29sdW1uOiBraWNrZXI7XCI+XG4gIDxzcGFuPlxuICAgIDxzdHJvbmc+T3B0aW1pemF0aW9uPC9zdHJvbmc+IGlzb2xhdGVzIHRoZSBjYXVzZXMgb2YgYmVoYXZpb3IgZnJvbSBtZXJlIGNvcnJlbGF0aW9ucy4gXG4gIDwvc3Bhbj5cbiAgPHNwYW4+XG4gICAgQSBuZXVyb24gbWF5IG5vdCBiZSBkZXRlY3Rpbmcgd2hhdCB5b3UgaW5pdGlhbGx5IHRob3VnaHQuXG4gIDwvc3Bhbj5cbjwvZmlnY2FwdGlvbj5cblxuPGRpdiBjbGFzcz1cImltYWdlc1wiIHN0eWxlPVwiZ3JpZC1jb2x1bW46IHRleHQtc3RhcnQgLyBwYWdlLWVuZDtcIj5cbiAgPFNwcml0ZSBzcmNfY2xhc3M9J3Nwcml0ZV9leGFtcGxlc19vcHRfY29tcGFyaXNvbicgeD0wIHk9MCBzcHJpdGVfc2l6ZT0xNzAgYmluZDpzaXplPjwvU3ByaXRlPlxuICA8U3ByaXRlIHNyY19jbGFzcz0nc3ByaXRlX2V4YW1wbGVzX29wdF9jb21wYXJpc29uJyB4PTEgeT0wIHNwcml0ZV9zaXplPTE3MCBiaW5kOnNpemU+PC9TcHJpdGU+XG4gIDxTcHJpdGUgc3JjX2NsYXNzPSdzcHJpdGVfZXhhbXBsZXNfb3B0X2NvbXBhcmlzb24nIHg9MiB5PTAgc3ByaXRlX3NpemU9MTcwIGJpbmQ6c2l6ZT48L1Nwcml0ZT5cbiAgPFNwcml0ZSBzcmNfY2xhc3M9J3Nwcml0ZV9leGFtcGxlc19vcHRfY29tcGFyaXNvbicgeD0zIHk9MCBzcHJpdGVfc2l6ZT0xNzAgYmluZDpzaXplPjwvU3ByaXRlPlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJjYXB0aW9uc1wiIHN0eWxlPVwiZ3JpZC1jb2x1bW46IHRleHQtc3RhcnQgLyBwYWdlLWVuZDtcIj5cbiAgPGZpZ2NhcHRpb24+QmFzZWJhbGzigJRvciBzdHJpcGVzPyA8YnI+PGVtPm1peGVkNGEsIFVuaXQgNjwvZW0+PC9maWdjYXB0aW9uPlxuICA8ZmlnY2FwdGlvbj5BbmltYWwgZmFjZXPigJRvciBzbm91dHM/IDxicj48ZW0+bWl4ZWQ0YSwgVW5pdCAyNDA8L2VtPjwvZmlnY2FwdGlvbj5cbiAgPGZpZ2NhcHRpb24+Q2xvdWRz4oCUb3IgZmx1ZmZpbmVzcz8gPGJyPjxlbT5taXhlZDRhLCBVbml0IDQ1MzwvZW0+PC9maWdjYXB0aW9uPlxuICA8ZmlnY2FwdGlvbj5CdWlsZGluZ3PigJRvciBza3k/IDxicj48ZW0+bWl4ZWQ0YSwgVW5pdCA0OTI8L2VtPjwvZmlnY2FwdGlvbj5cbjwvZGl2PiAgXG5cbjxzdHlsZT5cblxuLnNwcml0ZV9leGFtcGxlc19vcHRfY29tcGFyaXNvbl9leGFtcGxlcyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImltYWdlcy93aHlfb3B0aW1pemF0aW9uX2V4YW1wbGVzLmpwZ1wiKTtcbn1cblxuLnNwcml0ZV9leGFtcGxlc19vcHRfY29tcGFyaXNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImltYWdlcy93aHlfb3B0aW1pemF0aW9uX25ldXJvbi5wbmdcIik7XG59XG5cbi5jYXB0aW9ucyxcbi5pbWFnZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4uaW1hZ2VzID4gZGl2IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uaW1hZ2VzID4gZGl2Omxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmNhcHRpb25zID4gZmlnY2FwdGlvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE0N3B4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5jYXB0aW9ucyA+IGZpZ2NhcHRpb246bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gIFxuICAuY2FwdGlvbnMgPiBmaWdjYXB0aW9uIHtcbiAgICB3aWR0aDogMTcwcHg7XG4gIH1cbn1cblxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IFNwcml0ZSBmcm9tIFwiLi9TcHJpdGUuaHRtbFwiO1xuICBcbiAgZnVuY3Rpb24gcmFuZ2Uobil7XG4gICAgcmV0dXJuIEFycmF5KG4pLmZpbGwoKS5tYXAoKF8sIGkpID0+IGkpO1xuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH0sXG4gICAgb25jcmVhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgbXEgPSBtYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogMTI4MHB4KVwiKTtcbiAgICAgIG1xLm9uY2hhbmdlID0gKGV2ZW50KSA9PiB0aGlzLnNldCh7c2l6ZTogZXZlbnQubWF0Y2hlcyA/IDE3MCA6IDE0N30pO1xuICAgICAgdGhpcy5zZXQoe1xuICAgICAgICBzaXplOiBtcS5tYXRjaGVzID8gMTcwIDogMTQ3LFxuICAgICAgICAvLyBzcHJpdGVfc2NhbGU6IG1xLm1hdGNoZXMgPyAuNjI1IDogLjUsXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHsgU3ByaXRlIH0sXG4gICAgaGVscGVyczogeyByYW5nZSB9LFxuICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaWFncmFtcy9FeGFtcGxlc09wdENvbXBhcmlzb24uaHRtbCIsIjwhLS1cbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4tLT5cbjxkaXYgY2xhc3M9XCJmcm93XCI+XG4gIFxuICA8ZGl2IGNsYXNzPVwiZmNvbHVtblwiPlxuICAgIDxTcHJpdGUgc3JjX2NsYXNzPSdzcHJpdGVfcmFuZG9tX29wdF9leGFtcGxlcycgeD0wIHk9MCBzcHJpdGVfc2l6ZT0yOTQgYmluZDpzaXplPjwvU3ByaXRlPlxuICAgIDxTcHJpdGUgc3JjX2NsYXNzPSdzcHJpdGVfcmFuZG9tX29wdCcgeD0wIHk9MCBzcHJpdGVfc2l6ZT0xODAgYmluZDpzaXplPjwvU3ByaXRlPlxuICAgIDxmaWdjYXB0aW9uPjxlbT5taXhlZDNhLCByYW5kb20gZGlyZWN0aW9uPC9lbT48L2ZpZ2NhcHRpb24+XG4gIDwvZGl2PlxuICBcbiAgPGRpdiBjbGFzcz1cImZjb2x1bW5cIj5cbiAgICA8U3ByaXRlIHNyY19jbGFzcz0nc3ByaXRlX3JhbmRvbV9vcHRfZXhhbXBsZXMnIHg9MSB5PTAgc3ByaXRlX3NpemU9Mjk0IGJpbmQ6c2l6ZT48L1Nwcml0ZT5cbiAgICA8U3ByaXRlIHNyY19jbGFzcz0nc3ByaXRlX3JhbmRvbV9vcHQnIHg9MSB5PTAgc3ByaXRlX3NpemU9MTgwIGJpbmQ6c2l6ZT48L1Nwcml0ZT5cbiAgICA8ZmlnY2FwdGlvbj48ZW0+bWl4ZWQ0YywgcmFuZG9tIGRpcmVjdGlvbjwvZW0+PC9maWdjYXB0aW9uPlxuICA8L2Rpdj5cbiAgICBcbiAgPGRpdiBjbGFzcz1cImZjb2x1bW5cIj5cbiAgICA8U3ByaXRlIHNyY19jbGFzcz0nc3ByaXRlX3JhbmRvbV9vcHRfZXhhbXBsZXMnIHg9MiB5PTAgc3ByaXRlX3NpemU9Mjk0IGJpbmQ6c2l6ZT48L1Nwcml0ZT5cbiAgICA8U3ByaXRlIHNyY19jbGFzcz0nc3ByaXRlX3JhbmRvbV9vcHQnIHg9MiB5PTAgc3ByaXRlX3NpemU9MTgwIGJpbmQ6c2l6ZT48L1Nwcml0ZT5cbiAgICA8ZmlnY2FwdGlvbj48ZW0+bWl4ZWQ0ZCwgcmFuZG9tIGRpcmVjdGlvbjwvZW0+PC9maWdjYXB0aW9uPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiZmNvbHVtblwiPlxuICAgIDxTcHJpdGUgc3JjX2NsYXNzPSdzcHJpdGVfcmFuZG9tX29wdF9leGFtcGxlcycgeD0zIHk9MCBzcHJpdGVfc2l6ZT0yOTQgYmluZDpzaXplPjwvU3ByaXRlPlxuICAgIDxTcHJpdGUgc3JjX2NsYXNzPSdzcHJpdGVfcmFuZG9tX29wdCcgeD0zIHk9MCBzcHJpdGVfc2l6ZT0xODAgYmluZDpzaXplPjwvU3ByaXRlPlxuICAgIDxmaWdjYXB0aW9uPjxlbT5taXhlZDVhLCByYW5kb20gZGlyZWN0aW9uPC9lbT48L2ZpZ2NhcHRpb24+XG4gIDwvZGl2PlxuICAgIFxuPC9kaXY+XG5cbjxzdHlsZT5cblxuZmlnY2FwdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBGUm93ICYgRkNvbHVtbiAqL1xuXG4uZnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLmZjb2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uZmNvbHVtbjpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5mY29sdW1uID4gKiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5mY29sdW1uID4gKjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLyogLWVuZCBGUm93ICYgRkNvbHVtbiBlbmQtICovXG5cbi5zcHJpdGVfcmFuZG9tX29wdF9leGFtcGxlcyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImltYWdlcy9yYW5kb21fb3B0aW1pemF0aW9uX2V4YW1wbGVzLmpwZ1wiKTtcbn1cblxuLnNwcml0ZV9yYW5kb21fb3B0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1hZ2VzL3JhbmRvbV9vcHRpbWl6YXRpb24ucG5nXCIpO1xufVxuXG5cblxuLmNvbHVtbiA+IGRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi8qLnJvdyA+IGRpdiB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgd2lkdGg6IDE0N3B4O1xuICBoZWlnaHQ6IDE0N3B4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucm93ID4gZmlnY2FwdGlvbiB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgd2lkdGg6IDE0N3B4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgLnJvdyA+IGRpdiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGhlaWdodDogMTgwcHg7XG4gIH1cbiAgXG4gIC5yb3cgPiBmaWdjYXB0aW9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDE4MHB4O1xuICB9XG59Ki9cblxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IFNwcml0ZSBmcm9tIFwiLi9TcHJpdGUuaHRtbFwiO1xuICBcbiAgZnVuY3Rpb24gcmFuZ2Uobil7XG4gICAgcmV0dXJuIEFycmF5KG4pLmZpbGwoKS5tYXAoKF8sIGkpID0+IGkpO1xuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH0sXG4gICAgb25jcmVhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgbXEgPSBtYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogOTYwcHgpXCIpO1xuICAgICAgbXEub25jaGFuZ2UgPSAoZXZlbnQpID0+IHRoaXMuc2V0KHtzaXplOiBldmVudC5tYXRjaGVzID8gMTgwIDogMTQ3fSk7XG4gICAgICB0aGlzLnNldCh7XG4gICAgICAgIHNpemU6IG1xLm1hdGNoZXMgPyAxODAgOiAxNDcsXG4gICAgICAgIC8vIHNwcml0ZV9zY2FsZTogbXEubWF0Y2hlcyA/IC42MjUgOiAuNSxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgY29tcG9uZW50czogeyBTcHJpdGUgfSxcbiAgICBoZWxwZXJzOiB7IHJhbmdlIH0sXG4gIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpYWdyYW1zL1JhbmRvbUV4YW1wbGVzT3B0Lmh0bWwiLCI8IS0tXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuLS0+XG48YSBocmVmPVwie3t1cmx9fVwiIG9uOmNsaWNrPVwidHJhY2soKVwiIGNsYXNzPVwiY29sYWItcm9vdFwiPlxuICAgIFJlcHJvZHVjZSBpbiBhXG4gICAgPHNwYW4+Tm90ZWJvb2s8L3NwYW4+XG48L2E+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgICAgIHRyYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdXJsIH0gPSB0aGlzLmdldCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1cmwpO1xuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmdhICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5nYSgnc2VuZCcsICdldmVudCcsICdvdXRib3VuZCcsICdjbGljaycsIHVybCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zcG9ydDogJ2JlYWNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGl0Q2FsbGJhY2s6IGZ1bmN0aW9uICgpIHsgZG9jdW1lbnQubG9jYXRpb24gPSB1cmw7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAgIC5jb2xhYi1yb290IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweCFpbXBvcnRhbnQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6ICNhYWE7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgfVxuICAgIHNwYW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaW1hZ2VzL2NvbGFiLnN2Zyk7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjBweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAycHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG5cbiAgICBhOmhvdmVye1xuICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpYWdyYW1zL0NvbGFiTGluay5odG1sIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJ5X3ZhcnNcIjpbe1wibmFtZVwiOlwibDFcIixcImxhYmVsXCI6XCJsMVwiLFwidHlwZVwiOlwibnVtYmVyXCIsXCJkZWZhdWx0XCI6MCxcInZhbHVlc1wiOlswLC0wLjA1LC0wLjUsLTIuNV19LHtcIm5hbWVcIjpcInR2XCIsXCJsYWJlbFwiOlwidHZcIixcInR5cGVcIjpcIm51bWJlclwiLFwiZGVmYXVsdFwiOjAsXCJ2YWx1ZXNcIjpbMCwtMC4wNSwtMC4yNSwtMS41LC0zXX0se1wibmFtZVwiOlwiYmx1clwiLFwibGFiZWxcIjpcImJsdXJcIixcInR5cGVcIjpcIm51bWJlclwiLFwiZGVmYXVsdFwiOjAsXCJ2YWx1ZXNcIjpbMCwtMC4xLC0xLC01LC0xMF19XSxcInhfdmFyc1wiOlt7XCJuYW1lXCI6XCJuZXVyb25zXCIsXCJsYWJlbFwiOlwibmV1cm9uc1wiLFwidHlwZVwiOlwiaWNvblwiLFwidmFsdWVzXCI6W1wibWl4ZWQ0Yjo0NTJcIixcIm1peGVkNGI6NDY1XCIsXCJtaXhlZDRiOjQ3NVwiLFwibWl4ZWQ0Yjo0NjRcIixcIm1peGVkNGM6NDUwXCIsXCJtaXhlZDRkOjQ3OVwiXX0se1wibmFtZVwiOlwic3RlcHNcIixcImxhYmVsXCI6XCJzdGVwc1wiLFwidHlwZVwiOlwibnVtYmVyXCIsXCJkZWZhdWx0XCI6NCxcInZhbHVlc1wiOlsxLDMyLDEyOCwyNTYsMjA0OF19XSxcInNpemVcIjo2OH1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3N0YXRpYy9pbWFnZXMvUGVuYWxpemVGcmVxLmpzb25cbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1wieV92YXJzXCI6W3tcInR5cGVcIjpcIm51bWJlclwiLFwibmFtZVwiOlwiaml0dGVyXCIsXCJ2YWx1ZXNcIjpbMCwxLDgsMzJdLFwibGFiZWxcIjpcImppdHRlclwiLFwiZGVmYXVsdFwiOjJ9LHtcInR5cGVcIjpcIm51bWJlclwiLFwibmFtZVwiOlwicmFuZG9tX3JvdGF0ZVwiLFwidmFsdWVzXCI6WzAsNSwxNSw0NSwxODBdLFwibGFiZWxcIjpcInJhbmRvbV9yb3RhdGVcIn0se1widHlwZVwiOlwibnVtYmVyXCIsXCJuYW1lXCI6XCJyYW5kb21fc2NhbGVcIixcInZhbHVlc1wiOlsxLDEuMSwxLjIsMS44XSxcImxhYmVsXCI6XCJyYW5kb21fc2NhbGVcIn1dLFwieF92YXJzXCI6W3tcInR5cGVcIjpcImljb25cIixcIm5hbWVcIjpcIm5ldXJvbnNcIixcInZhbHVlc1wiOltcIm1peGVkNGI6NDUyXCIsXCJtaXhlZDRiOjQ2NVwiLFwibWl4ZWQ0Yjo0NzVcIixcIm1peGVkNGI6NDY0XCIsXCJtaXhlZDRjOjQ1MFwiLFwibWl4ZWQ0ZDo0NzlcIl0sXCJsYWJlbFwiOlwibmV1cm9uc1wifSx7XCJ0eXBlXCI6XCJudW1iZXJcIixcIm5hbWVcIjpcInN0ZXBzXCIsXCJ2YWx1ZXNcIjpbMSwzMiwxMjgsMjU2LDIwNDhdLFwibGFiZWxcIjpcInN0ZXBzXCIsXCJkZWZhdWx0XCI6NH1dLFwic2l6ZVwiOjY4fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3RhdGljL2ltYWdlcy9UcmFuc2Zvcm1FeHBsb3JlLmpzb25cbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=