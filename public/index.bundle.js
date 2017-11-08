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
	(0, _shared.setAttribute)(node, "svelte-2045066452", "");
}

function add_css() {
	var style = (0, _shared.createElement)("style");
	style.id = 'svelte-2045066452-style';
	style.textContent = "[svelte-2045066452].outer,[svelte-2045066452] .outer{position:relative;float:left;width:var(--container-size);height:var(--container-size)}[svelte-2045066452].mid,[svelte-2045066452] .mid,[svelte-2045066452].inner,[svelte-2045066452] .inner{transition:var(--transition_css);pointer-events:none}[svelte-2045066452].mid,[svelte-2045066452] .mid{transform:scale( var(--default-ratio) );margin:calc( calc( var(--container-size) - var(--default-size) ) / 2 )}[svelte-2045066452].inner,[svelte-2045066452] .inner{image-rendering:var(--pixelated);background-position:var(--default-position);width:var(--default-size);height:var(--default-size)}[svelte-2045066452].outer.hoverable:hover,[svelte-2045066452] .outer.hoverable:hover{z-index:100}[svelte-2045066452].outer.hoverable:hover .inner,[svelte-2045066452] .outer.hoverable:hover .inner{background-position:var(--hover-position);width:var(--hover-size);height:var(--hover-size)}[svelte-2045066452].outer.hoverable:hover .mid,[svelte-2045066452] .outer.hoverable:hover .mid{transform:scale(var(--hover-scale));margin:calc( calc( var(--container-size) - var(--hover-size) ) / 2 );border:var(--border_css);width:var(--hover-size)}";
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

	if (!document.getElementById("svelte-2045066452-style")) add_css();

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// load GoogleNetExamples immediately

new _GoogleNetExamples2.default({ target: document.getElementById("googlenet-examples") });

// sprite driven figures

// import RegReview             from "./diagrams/RegReview.html";
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
    config: __webpack_require__(16)
  },

  TransformExplore: {
    configurable: ["neurons", "jitter", "random_rotate", "random_scale"],
    icon_var_values: { jitter: 3, random_rotate: 2, random_scale: 2 },
    var_values: { jitter: 1, random_rotate: 1, random_scale: 1 },
    config: __webpack_require__(17)
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
	(0, _shared.setAttribute)(node, "svelte-2201991874", "");
}

function add_css() {
	var style = (0, _shared.createElement)("style");
	style.id = 'svelte-2201991874-style';
	style.textContent = "[svelte-2201991874].sprite_hero,[svelte-2201991874] .sprite_hero{background-image:url(\"images/sprite_hero.png\")}[svelte-2201991874].googlenet-examples,[svelte-2201991874] .googlenet-examples{font-size:16px;display:flex;flex-flow:column;align-items:center}[svelte-2201991874].googlenet-examples .example,[svelte-2201991874] .googlenet-examples .example{display:flex;flex-flow:column}[svelte-2201991874].googlenet-examples .example .images,[svelte-2201991874] .googlenet-examples .example .images{display:flex;flex-flow:row;flex-wrap:wrap;justify-content:flex-start}[svelte-2201991874].googlenet-examples .example .images > *,[svelte-2201991874] .googlenet-examples .example .images > *{margin-bottom:5px;margin-right:5px}[svelte-2201991874].googlenet-examples .inner,[svelte-2201991874] .googlenet-examples .inner{image-rendering:auto}[svelte-2201991874].googlenet-examples .example .images span:last-of-type,[svelte-2201991874] .googlenet-examples .example .images span:last-of-type{margin-bottom:0}[svelte-2201991874].googlenet-examples .example:last-of-type,[svelte-2201991874] .googlenet-examples .example:last-of-type{}[svelte-2201991874].googlenet-examples > div:last-child,[svelte-2201991874] .googlenet-examples > div:last-child{}[svelte-2201991874].description,[svelte-2201991874] .description{width:100%;margin-top:0.25em;margin-bottom:1.5em;color:rgba(0, 0, 0, 0.9);line-height:normal;font-size:0.8em}@media(min-width: 1105px){[svelte-2201991874].googlenet-examples,[svelte-2201991874] .googlenet-examples{grid-column:screen;flex-flow:row;justify-content:center}[svelte-2201991874].googlenet-examples .example .images,[svelte-2201991874] .googlenet-examples .example .images{flex-wrap:wrap}[svelte-2201991874].googlenet-examples .example,[svelte-2201991874] .googlenet-examples .example{margin-right:10px}[svelte-2201991874].googlenet-examples .example:last-of-type,[svelte-2201991874] .googlenet-examples .example:last-of-type{margin-right:0}[svelte-2201991874].googlenet-examples .example .images,[svelte-2201991874] .googlenet-examples .example .images{max-width:calc((100px * 2) + 10px);min-height:calc((100px * 3) + 10px)}}@media(min-width: 1400px){[svelte-2201991874].googlenet-examples .example,[svelte-2201991874] .googlenet-examples .example{margin-right:15px}[svelte-2201991874].googlenet-examples .example .images,[svelte-2201991874] .googlenet-examples .example .images{max-width:calc((125px * 2) + 10px);min-height:calc((125px * 3) + 10px)}}";
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

	if (!document.getElementById("svelte-2201991874-style")) add_css();

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
	(0, _shared.setAttribute)(node, "svelte-3067834231", "");
}

function add_css() {
	var style = (0, _shared.createElement)("style");
	style.id = 'svelte-3067834231-style';
	style.textContent = "[svelte-3067834231].icons,[svelte-3067834231] .icons{display:inline-flex;flex-wrap:wrap;flex-direction:row;margin-bottom:8px;border-bottom:1px solid #dddddd}[svelte-3067834231].icons .icon,[svelte-3067834231] .icons .icon{cursor:pointer;padding-bottom:5px;margin-bottom:-1px;margin-left:3px;margin-right:3px}[svelte-3067834231].icons .icon:first-of-type,[svelte-3067834231] .icons .icon:first-of-type{margin-left:0px}[svelte-3067834231].icons .icon:last-of-type,[svelte-3067834231] .icons .icon:last-of-type{margin-right:0px}[svelte-3067834231].icons .icon.selected,[svelte-3067834231] .icons .icon.selected{opacity:100%;border-bottom:3px solid #ff6600}[svelte-3067834231].icon div,[svelte-3067834231] .icon div{opacity:0.666;image-rendering:auto}[svelte-3067834231].icon.selected div,[svelte-3067834231] .icon.selected div{opacity:1}[svelte-3067834231].images,[svelte-3067834231] .images{display:flex;flex-wrap:wrap;flex-direction:row;top:0px}[svelte-3067834231].images > div,[svelte-3067834231] .images > div{margin-right:5px}[svelte-3067834231].images > div:last-child,[svelte-3067834231] .images > div:last-child{margin-right:0}[svelte-3067834231].images div img,[svelte-3067834231] .images div img{width:100%;height:100%;background-color:#EEE}figcaption[svelte-3067834231],[svelte-3067834231] figcaption{margin-top:6px}";
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

	if (!document.getElementById("svelte-3067834231-style")) add_css();

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
	(0, _shared.setAttribute)(node, "svelte-4225315172", "");
}

function add_css() {
	var style = (0, _shared.createElement)("style");
	style.id = 'svelte-4225315172-style';
	style.textContent = "[svelte-4225315172].icons .icon,[svelte-4225315172] .icons .icon{float:left;width:30px;height:30px;margin:2px;background-color:#EEE;filter:brightness(80%)}[svelte-4225315172].icons .selected,[svelte-4225315172] .icons .selected{background-color:#AAA;box-shadow:1px 1px 3px gold, -1px -1px 3px gold, -1px 1px 3px gold, 1px -1px 3px gold;filter:brightness(100%)}[svelte-4225315172].images > div,[svelte-4225315172] .images > div{position:absolute;top:0px;margin:0px}figcaption[svelte-4225315172],[svelte-4225315172] figcaption{margin-top:6px}[svelte-4225315172].opt-explore-sprites,[svelte-4225315172] .opt-explore-sprites{background:url(\"images/explore_mixed4c_450_sprite_128.jpeg\")}label[svelte-4225315172],[svelte-4225315172] label{display:block}";
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

	if (!document.getElementById("svelte-4225315172-style")) add_css();

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
	(0, _shared.setAttribute)(node, "svelte-1128437607", "");
}

function add_css() {
	var style = (0, _shared.createElement)("style");
	style.id = 'svelte-1128437607-style';
	style.textContent = "[svelte-1128437607].icons .icon,[svelte-1128437607] .icons .icon{float:left;width:40px;height:40px;margin:2px;background-color:#EEE}[svelte-1128437607].icons .selected,[svelte-1128437607] .icons .selected{background-color:#AAA;box-shadow:1px 1px 3px gold, -1px -1px 3px gold, -1px 1px 3px gold, 1px -1px 3px gold;filter:brightness(100%)}[svelte-1128437607].images > div,[svelte-1128437607] .images > div{position:absolute;top:0px;margin:0px}figcaption[svelte-1128437607],[svelte-1128437607] figcaption{padding-top:10px}[svelte-1128437607].opt-explore-sprites,[svelte-1128437607] .opt-explore-sprites{background:url(\"images/explore_opt_spritemap_64.jpeg\")}label[svelte-1128437607],[svelte-1128437607] label{display:block}";
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

	if (!document.getElementById("svelte-1128437607-style")) add_css();

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
	(0, _shared.setAttribute)(node, "svelte-1936772765", "");
}

function add_css() {
	var style = (0, _shared.createElement)("style");
	style.id = 'svelte-1936772765-style';
	style.textContent = "[svelte-1936772765].controls,[svelte-1936772765] .controls{display:flex;flex-flow:row;flex-wrap:wrap;font-size:13px;margin-bottom:8px}[svelte-1936772765].icons,[svelte-1936772765] .icons{display:inline-flex;flex-wrap:wrap;flex-direction:row;border-bottom:1px solid #dddddd}[svelte-1936772765].icons .icon,[svelte-1936772765] .icons .icon{cursor:pointer;padding-bottom:5px;margin-bottom:-1px;margin-left:3px;margin-right:3px}[svelte-1936772765].icons .icon:first-of-type,[svelte-1936772765] .icons .icon:first-of-type{margin-left:0px}[svelte-1936772765].icons .icon:last-of-type,[svelte-1936772765] .icons .icon:last-of-type{margin-right:0px}[svelte-1936772765].icons .icon.selected,[svelte-1936772765] .icons .icon.selected{opacity:100%;border-bottom:3px solid #ff6600}[svelte-1936772765].icon div,[svelte-1936772765] .icon div{opacity:0.666;image-rendering:auto}[svelte-1936772765].icon.selected div,[svelte-1936772765] .icon.selected div{opacity:1}[svelte-1936772765].config-group,[svelte-1936772765] .config-group{display:inline-block;margin-right:20px}[svelte-1936772765].config-group:last-of-type,[svelte-1936772765] .config-group:last-of-type{margin-right:0}[svelte-1936772765].config-group .config,[svelte-1936772765] .config-group .config{display:block}[svelte-1936772765].config-binary,[svelte-1936772765] .config-binary{width:auto}[svelte-1936772765].config-range,[svelte-1936772765] .config-range{width:140px;overflow:visible;white-space:nowrap}[svelte-1936772765].config-group .config input[type=\"range\"],[svelte-1936772765] .config-group .config input[type=\"range\"]{width:100%;margin:0px;padding:0px;margin-top:3px}[svelte-1936772765].config-group span.value,[svelte-1936772765] .config-group span.value{display:inline-block;width:35px}[svelte-1936772765].explain,[svelte-1936772765] .explain{display:inline-block;width:200px;vertical-align:top}[svelte-1936772765].images,[svelte-1936772765] .images{}[svelte-1936772765].images .outer,[svelte-1936772765] .images .outer{display:inline-block;padding-right:5px}[svelte-1936772765].images .outer:last-of-type,[svelte-1936772765] .images .outer:last-of-type{padding-right:0}[svelte-1936772765].inner,[svelte-1936772765] .inner{image-rendering:pixelated}";
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

	if (!document.getElementById("svelte-1936772765-style")) add_css();

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
	(0, _shared.setAttribute)(node, "svelte-3183631894", "");
}

function add_css() {
	var style = (0, _shared.createElement)("style");
	style.id = 'svelte-3183631894-style';
	style.textContent = "[svelte-3183631894].layers,[svelte-3183631894] .layers{margin-top:25px;display:flex;flex-flow:row;flex-wrap:wrap;align-items:flex-start;justify-content:center}[svelte-3183631894].outer,[svelte-3183631894] .outer{margin-top:5px;margin-bottom:15px;margin-left:4px;margin-right:4px}[svelte-3183631894].outer:first-of-type,[svelte-3183631894] .outer:first-of-type{margin-left:0}[svelte-3183631894].outer:last-of-type,[svelte-3183631894] .outer:last-of-type{margin-right:0}[svelte-3183631894].grad,[svelte-3183631894] .grad{background:url(\"images/layer_gradients_spritemap_4.jpeg\")}[svelte-3183631894].outer figcaption,[svelte-3183631894] .outer figcaption{margin-top:10px}[svelte-3183631894].highlight::before,[svelte-3183631894] .highlight::before{content:\"←\";position:relative;left:-3px;top:-25px;color:#888}";
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

	if (!document.getElementById("svelte-3183631894-style")) add_css();

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
	(0, _shared.setAttribute)(node, "svelte-2746593732", "");
}

function add_css() {
	var style = (0, _shared.createElement)("style");
	style.id = 'svelte-2746593732-style';
	style.textContent = "[svelte-2746593732].opt-and-examples-sprite,[svelte-2746593732] .opt-and-examples-sprite{background-image:url(\"images/examples.jpg\")}[svelte-2746593732].opt-and-examples-optimized-sprite,[svelte-2746593732] .opt-and-examples-optimized-sprite{background-image:url(\"images/examples_optimized.png\")}[svelte-2746593732].icons,[svelte-2746593732] .icons{display:inline-flex;flex-wrap:wrap;flex-direction:row;border-bottom:1px solid #dddddd}[svelte-2746593732].icons .icon,[svelte-2746593732] .icons .icon{cursor:pointer;padding-bottom:5px;margin-bottom:-1px;margin-right:4px;margin-top:3px}[svelte-2746593732].icons .icon:first-of-type,[svelte-2746593732] .icons .icon:first-of-type{margin-left:0px}[svelte-2746593732].icons .icon:last-of-type,[svelte-2746593732] .icons .icon:last-of-type{margin-right:0px}[svelte-2746593732].icons .icon.selected,[svelte-2746593732] .icons .icon.selected{border-bottom:3px solid #ff6600}[svelte-2746593732].icon div,[svelte-2746593732] .icon div{opacity:0.666;image-rendering:auto}[svelte-2746593732].icon.selected div,[svelte-2746593732] .icon.selected div{opacity:1}[svelte-2746593732].container,[svelte-2746593732] .container{grid-column:text;margin-top:25px;display:flex;flex-flow:column;flex-direction:column-reverse}[svelte-2746593732].positive,[svelte-2746593732] .positive,[svelte-2746593732].negative,[svelte-2746593732] .negative,[svelte-2746593732].divider,[svelte-2746593732] .divider{display:flex;flex-flow:row}[svelte-2746593732].container figcaption,[svelte-2746593732] .container figcaption{padding-top:5px}[svelte-2746593732].divider,[svelte-2746593732] .divider{display:none;margin-left:12px;margin-right:12px}[svelte-2746593732].positive > div,[svelte-2746593732] .positive > div{justify-content:flex-start}[svelte-2746593732].optimize,[svelte-2746593732] .optimize{}[svelte-2746593732].positive,[svelte-2746593732] .positive{margin-bottom:24px}[svelte-2746593732].optimize figcaption,[svelte-2746593732] .optimize figcaption{margin-left:0;margin-right:0}[svelte-2746593732].optimize,[svelte-2746593732] .optimize{display:flex;flex-flow:column;margin-bottom:12px}[svelte-2746593732].examples,[svelte-2746593732] .examples{display:flex;flex-flow:row}[svelte-2746593732].example-set,[svelte-2746593732] .example-set{display:flex;flex-flow:column;margin-right:12px}[svelte-2746593732].example-set > *,[svelte-2746593732] .example-set > *,[svelte-2746593732].optimize > *,[svelte-2746593732] .optimize > *{width:147px}[svelte-2746593732].example-set > div,[svelte-2746593732] .example-set > div,[svelte-2746593732].optimize > div,[svelte-2746593732] .optimize > div{height:147px}[svelte-2746593732].positive .examples,[svelte-2746593732] .positive .examples{flex-flow:row-reverse}[svelte-2746593732].positive .optimize,[svelte-2746593732] .positive .optimize{margin-right:24px}[svelte-2746593732].negative .optimize,[svelte-2746593732] .negative .optimize{margin-right:24px}@media(min-width: 1280px){[svelte-2746593732].divider,[svelte-2746593732] .divider{display:inherit;border-left:1px solid #ccc;position:relative}[svelte-2746593732].divider::before,[svelte-2746593732] .divider::before{content:\"0\";position:absolute;left:-4px;top:-25px;color:#ccc;font-weight:300;font-size:13px}[svelte-2746593732].example-set,[svelte-2746593732] .example-set{margin-right:0}[svelte-2746593732].example-set:first-child,[svelte-2746593732] .example-set:first-child{margin-right:12px}[svelte-2746593732].negative,[svelte-2746593732] .negative{margin-bottom:0}[svelte-2746593732].negative .optimize,[svelte-2746593732] .negative .optimize{flex-flow:column;justify-content:flex-start}[svelte-2746593732].container,[svelte-2746593732] .container{grid-column:page;flex-flow:row}[svelte-2746593732].positive,[svelte-2746593732] .positive{flex-flow:row-reverse}[svelte-2746593732].positive .examples,[svelte-2746593732] .positive .examples{flex-flow:row}[svelte-2746593732].negative,[svelte-2746593732] .negative,[svelte-2746593732].divider,[svelte-2746593732] .divider{display:flex;flex-flow:row}[svelte-2746593732].optimize,[svelte-2746593732] .optimize{margin-bottom:24px}[svelte-2746593732].negative > div,[svelte-2746593732] .negative > div{justify-content:flex-end}[svelte-2746593732].positive .optimize,[svelte-2746593732] .positive .optimize{margin-left:36px}[svelte-2746593732].negative .optimize,[svelte-2746593732] .negative .optimize{margin-right:36px}}";
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

	if (!document.getElementById("svelte-2746593732-style")) add_css();

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
				x: 5,
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
	(0, _shared.setAttribute)(node, "svelte-989839604", "");
}

function add_css() {
	var style = (0, _shared.createElement)("style");
	style.id = 'svelte-989839604-style';
	style.textContent = "[svelte-989839604].frow,[svelte-989839604] .frow{display:flex;flex-flow:row;flex-wrap:wrap;justify-content:flex-start}[svelte-989839604].fcolumn,[svelte-989839604] .fcolumn{display:flex;flex-flow:column;margin-right:10px;margin-bottom:10px;z-index:2}[svelte-989839604].icons,[svelte-989839604] .icons{display:flex;flex-wrap:wrap;flex-direction:row;margin-bottom:7px;max-width:100px}[svelte-989839604].icons .icon,[svelte-989839604] .icons .icon{cursor:pointer;padding-bottom:6px;margin-bottom:11px;margin-right:6px;border-bottom:1px solid #dddddd}[svelte-989839604].icons .icon.selected,[svelte-989839604] .icons .icon.selected{opacity:100%;padding-bottom:3px;border-bottom:3px solid #ff6600}[svelte-989839604].icon div,[svelte-989839604] .icon div{opacity:0.666;image-rendering:auto}[svelte-989839604].icon.selected div,[svelte-989839604] .icon.selected div{opacity:1}[svelte-989839604].linear_combinations_sprite,[svelte-989839604] .linear_combinations_sprite{background-image:url('images/linear_combinations.jpg')\n  }[svelte-989839604]#caption,[svelte-989839604] #caption{max-width:200px}[svelte-989839604]#icons-first,[svelte-989839604] #icons-first{order:1\n  }[svelte-989839604]#sprite-first,[svelte-989839604] #sprite-first{order:2\n  }[svelte-989839604]#sprite-second,[svelte-989839604] #sprite-second{order:5\n  }[svelte-989839604]#icons-second,[svelte-989839604] #icons-second{order:4\n  }[svelte-989839604].result,[svelte-989839604] .result{z-index:3}[svelte-989839604].operator,[svelte-989839604] .operator{display:none}@media(min-width: 1024px){[svelte-989839604].fcolumn,[svelte-989839604] .fcolumn{margin-left:10px}[svelte-989839604].fcolumn:first-of-type,[svelte-989839604] .fcolumn:first-of-type{margin-left:0}[svelte-989839604].fcolumn:last-of-type,[svelte-989839604] .fcolumn:last-of-type{margin-right:0}[svelte-989839604]#icons-first,[svelte-989839604] #icons-first{order:1\n    }[svelte-989839604]#sprite-first,[svelte-989839604] #sprite-first{order:2;margin-right:0}[svelte-989839604]#sprite-second,[svelte-989839604] #sprite-second{order:4;margin-left:0}[svelte-989839604]#icons-second,[svelte-989839604] #icons-second{order:5\n    }[svelte-989839604].operator,[svelte-989839604] .operator{display:block;background-image:url(images/join_arrow.svg);background-position:center 70%;background-repeat:no-repeat;background-size:280%;min-width:60px;height:180px;overflow:visible;order:3;opacity:0.33}[svelte-989839604].result.c,[svelte-989839604] .result.c{top:-64px;margin-left:240px;position:relative}[svelte-989839604].result.c > div,[svelte-989839604] .result.c > div{border:2px solid white;box-shadow:0px 5px 20px hsla(0,0%,0%,0.3)}[svelte-989839604]#sprite-second > span,[svelte-989839604] #sprite-second > span{text-align:right}[svelte-989839604].linear-combinations,[svelte-989839604] .linear-combinations{margin-bottom:-84px}}";
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

			text_2 = (0, _shared.createText)("\n    \n    ");
			div_4 = (0, _shared.createElement)("div");
			sprite._fragment.create();
			text_3 = (0, _shared.createText)("\n      ");
			span = (0, _shared.createElement)("span");
			text_4 = (0, _shared.createText)("Neuron 1");
			text_6 = (0, _shared.createText)("\n    \n    ");
			div_5 = (0, _shared.createElement)("div");
			text_7 = (0, _shared.createText)("\n    \n    ");
			div_6 = (0, _shared.createElement)("div");
			sprite_1._fragment.create();
			text_8 = (0, _shared.createText)("\n      ");
			span_1 = (0, _shared.createElement)("span");
			text_9 = (0, _shared.createText)("Neuron 2");
			text_11 = (0, _shared.createText)("\n  \n    ");
			div_7 = (0, _shared.createElement)("div");
			div_8 = (0, _shared.createElement)("div");

			for (var i_2 = 0; i_2 < each_block_1_iterations.length; i_2 += 1) {
				each_block_1_iterations[i_2].create();
			}

			text_15 = (0, _shared.createText)("\n  \n  ");
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

	if (!document.getElementById("svelte-989839604-style")) add_css();

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
	(0, _shared.setAttribute)(node, "svelte-759772376", "");
}

function add_css() {
	var style = (0, _shared.createElement)("style");
	style.id = 'svelte-759772376-style';
	style.textContent = "[svelte-759772376].sprite_opt_progress,[svelte-759772376] .sprite_opt_progress{background-image:url(\"images/opt_progress_mixed4a-11.png\")}[svelte-759772376].container,[svelte-759772376] .container{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:stretch;margin-bottom:5px}[svelte-759772376].container > div,[svelte-759772376] .container > div{}[svelte-759772376].container .sprite,[svelte-759772376] .container .sprite{align-self:stretch}[svelte-759772376].container .arrowbox,[svelte-759772376] .container .arrowbox{color:#888;display:flex;align-items:center;margin-left:5px;margin-right:5px;width:14px}";
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

	if (!document.getElementById("svelte-759772376-style")) add_css();

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
	(0, _shared.setAttribute)(node, "svelte-1636624821", "");
}

function add_css() {
	var style = (0, _shared.createElement)("style");
	style.id = 'svelte-1636624821-style';
	style.textContent = "[svelte-1636624821].sprite_examples_opt_comparison_examples,[svelte-1636624821] .sprite_examples_opt_comparison_examples{background-image:url(\"images/why_optimization_examples.jpg\")}[svelte-1636624821].sprite_examples_opt_comparison,[svelte-1636624821] .sprite_examples_opt_comparison{background-image:url(\"images/why_optimization_neuron.png\")}[svelte-1636624821].captions,[svelte-1636624821] .captions,[svelte-1636624821].images,[svelte-1636624821] .images{display:flex;flex-flow:row;justify-content:flex-start}[svelte-1636624821].images > div,[svelte-1636624821] .images > div{margin-bottom:10px;margin-right:10px}[svelte-1636624821].images > div:last-of-type,[svelte-1636624821] .images > div:last-of-type{margin-right:0}[svelte-1636624821].captions > figcaption,[svelte-1636624821] .captions > figcaption{display:inline-block;width:147px;margin-right:10px}[svelte-1636624821].captions > figcaption:last-of-type,[svelte-1636624821] .captions > figcaption:last-of-type{margin-right:0}@media(min-width: 1280px){[svelte-1636624821].captions > figcaption,[svelte-1636624821] .captions > figcaption{width:170px}}";
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

	if (!document.getElementById("svelte-1636624821-style")) add_css();

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
	(0, _shared.setAttribute)(node, "svelte-2372490575", "");
}

function add_css() {
	var style = (0, _shared.createElement)("style");
	style.id = 'svelte-2372490575-style';
	style.textContent = "figcaption[svelte-2372490575],[svelte-2372490575] figcaption{display:block}[svelte-2372490575].frow,[svelte-2372490575] .frow{display:flex;flex-flow:row;flex-wrap:wrap;justify-content:flex-start}[svelte-2372490575].fcolumn,[svelte-2372490575] .fcolumn{display:flex;flex-flow:column;margin-right:10px}[svelte-2372490575].fcolumn:last-of-type,[svelte-2372490575] .fcolumn:last-of-type{margin-right:0}[svelte-2372490575].fcolumn > *,[svelte-2372490575] .fcolumn > *{margin-bottom:10px}[svelte-2372490575].fcolumn > *:last-child,[svelte-2372490575] .fcolumn > *:last-child{margin-bottom:0}[svelte-2372490575].sprite_random_opt_examples,[svelte-2372490575] .sprite_random_opt_examples{background-image:url(\"images/random_optimization_examples.jpg\")}[svelte-2372490575].sprite_random_opt,[svelte-2372490575] .sprite_random_opt{background-image:url(\"images/random_optimization.png\")}[svelte-2372490575].column > div,[svelte-2372490575] .column > div{margin-bottom:10px}";
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

	if (!document.getElementById("svelte-2372490575-style")) add_css();

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
/***/ (function(module, exports) {

module.exports = {"y_vars":[{"name":"l1","label":"l1","type":"number","default":0,"values":[0,-0.05,-0.5,-2.5]},{"name":"tv","label":"tv","type":"number","default":0,"values":[0,-0.05,-0.25,-1.5,-3]},{"name":"blur","label":"blur","type":"number","default":0,"values":[0,-0.1,-1,-5,-10]}],"x_vars":[{"name":"neurons","label":"neurons","type":"icon","values":["mixed4b:452","mixed4b:465","mixed4b:475","mixed4b:464","mixed4c:450","mixed4d:479"]},{"name":"steps","label":"steps","type":"number","default":4,"values":[1,32,128,256,2048]}],"size":68}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {"y_vars":[{"type":"number","name":"jitter","values":[0,1,8,32],"label":"jitter","default":2},{"type":"number","name":"random_rotate","values":[0,5,15,45,180],"label":"random_rotate"},{"type":"number","name":"random_scale","values":[1,1.1,1.2,1.8],"label":"random_scale"}],"x_vars":[{"type":"icon","name":"neurons","values":["mixed4b:452","mixed4b:465","mixed4b:475","mixed4b:464","mixed4c:450","mixed4d:479"],"label":"neurons"},{"type":"number","name":"steps","values":[1,32,128,256,2048],"label":"steps","default":4}],"size":68}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTVhMmVhZjM2OWJjZDBjZGRhZWEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWdyYW1zL1Nwcml0ZS5odG1sIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmVsdGUtZXh0cmFzL2Rpc3Qvc3ZlbHRlLWV4dHJhcy5lcy5qcyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvaW1hZ2VzL1ByZWNvbmRpdGlvbmVyLmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFncmFtcy9Hb29nbGVOZXRFeGFtcGxlcy5odG1sIiwid2VicGFjazovLy8uL3NyYy9kaWFncmFtcy9JbWFnZUFycmF5Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWdyYW1zL09wdEV4cGxvcmUuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhZ3JhbXMvT3B0RXhwbG9yZTIuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhZ3JhbXMvT3B0RXhwbG9yZUZsZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhZ3JhbXMvR3JhZEFydGlmYWN0cy5odG1sIiwid2VicGFjazovLy8uL3NyYy9kaWFncmFtcy9PcHRBbmRFeGFtcGxlcy5odG1sIiwid2VicGFjazovLy8uL3NyYy9kaWFncmFtcy9MaW5lYXJDb21iaW5hdGlvbnMuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhZ3JhbXMvT3B0UHJvZ3Jlc3MuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhZ3JhbXMvRXhhbXBsZXNPcHRDb21wYXJpc29uLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWdyYW1zL1JhbmRvbUV4YW1wbGVzT3B0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ltYWdlcy9QZW5hbGl6ZUZyZXEuanNvbiIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvaW1hZ2VzL1RyYW5zZm9ybUV4cGxvcmUuanNvbiJdLCJuYW1lcyI6WyJ0YXJnZXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZmlndXJlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRhdGEiLCJzcmNfY2xhc3MiLCJpY29uX3NyY19jbGFzcyIsImljb25feCIsImxhYmVsX2Z1bmMiLCJuIiwiaSIsIm5faW1hZ2VzIiwibl9pY29ucyIsInNwcml0ZV9zaXplIiwic2l6ZSIsImljb25fc2NhbGUiLCJob3Zlcl9zY2FsZSIsInNlbGVjdGVkIiwiYmFja3dhcmRzIiwiT3B0RXhwbG9yZUZsZXhfY29uZmlncyIsIk9wdEV4cGxvcmVOYWl2ZSIsImNvbmZpZ3VyYWJsZSIsImljb25fdmFyX3ZhbHVlcyIsImRlY29ycmVsYXRlIiwidHJhbnNmb3JtcyIsInZhcl92YWx1ZXMiLCJsZWFybmluZ19yYXRlIiwiY29uZmlnIiwicmVxdWlyZSIsIlBlbmFsaXplRnJlcSIsImwxIiwidHYiLCJibHVyIiwiVHJhbnNmb3JtRXhwbG9yZSIsImppdHRlciIsInJhbmRvbV9yb3RhdGUiLCJyYW5kb21fc2NhbGUiLCJPcHRFeHBsb3JlIiwiYXBwIiwibG9hZF9zcHJpdGVtYXAiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sU0FBUztBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0E7QUFDQSxrQkFBa0IsNEJBQTRCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7O0FBRW5CLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0EsNEJBQTRCLGNBQWM7QUFDMUM7O0FBRUEsMkJBQTJCLGNBQWMsR0FBRztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esa0VBQWtFLGFBQWE7O0FBRS9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix1QkFBdUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSwyQkFBMkIsbUJBQW1CO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHVCQUF1QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDJCQUEyQix1QkFBdUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0FLUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQUNUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQW5CUzs7Ozs7Ozs7OztrQ0FDVDs7Ozs7Ozs7OztrQ0FLUzs7Ozs7Ozs7OztrQ0FDVDs7Ozs7Ozs7OztrQ0FLUzs7Ozs7Ozs7OztrQ0FDVDs7Ozs7Ozs7OztrQ0FLUzs7Ozs7Ozs7OztrQ0FDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEIzRSxrQkFBa0IsV0FBVyxrRkFBa0YsRUFBRSxzRkFBc0YsRUFBRSxxRkFBcUYsYUFBYSxnSkFBZ0osRUFBRSx3RkFBd0YsWTs7Ozs7O0FDQXJoQixrQkFBa0IsV0FBVyxpRkFBaUYsRUFBRSx3RkFBd0YsRUFBRSxzRkFBc0YsYUFBYSxnSkFBZ0osRUFBRSx3RkFBd0YsWSIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlNWEyZWFmMzY5YmNkMGNkZGFlYSIsImZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5mdW5jdGlvbiBhc3NpZ24odGFyZ2V0KSB7XG5cdHZhciBrLFxuXHRcdHNvdXJjZSxcblx0XHRpID0gMSxcblx0XHRsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuXHRmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0c291cmNlID0gYXJndW1lbnRzW2ldO1xuXHRcdGZvciAoayBpbiBzb3VyY2UpIHRhcmdldFtrXSA9IHNvdXJjZVtrXTtcblx0fVxuXG5cdHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZE5vZGUobm9kZSwgdGFyZ2V0KSB7XG5cdHRhcmdldC5hcHBlbmRDaGlsZChub2RlKTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0Tm9kZShub2RlLCB0YXJnZXQsIGFuY2hvcikge1xuXHR0YXJnZXQuaW5zZXJ0QmVmb3JlKG5vZGUsIGFuY2hvcik7XG59XG5cbmZ1bmN0aW9uIGRldGFjaE5vZGUobm9kZSkge1xuXHRub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG59XG5cbmZ1bmN0aW9uIGRldGFjaEJldHdlZW4oYmVmb3JlLCBhZnRlcikge1xuXHR3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nICYmIGJlZm9yZS5uZXh0U2libGluZyAhPT0gYWZ0ZXIpIHtcblx0XHRiZWZvcmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiZWZvcmUubmV4dFNpYmxpbmcpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRldGFjaEJlZm9yZShhZnRlcikge1xuXHR3aGlsZSAoYWZ0ZXIucHJldmlvdXNTaWJsaW5nKSB7XG5cdFx0YWZ0ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhZnRlci5wcmV2aW91c1NpYmxpbmcpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRldGFjaEFmdGVyKGJlZm9yZSkge1xuXHR3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nKSB7XG5cdFx0YmVmb3JlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYmVmb3JlLm5leHRTaWJsaW5nKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZWluc2VydEJldHdlZW4oYmVmb3JlLCBhZnRlciwgdGFyZ2V0KSB7XG5cdHdoaWxlIChiZWZvcmUubmV4dFNpYmxpbmcgJiYgYmVmb3JlLm5leHRTaWJsaW5nICE9PSBhZnRlcikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChiZWZvcmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiZWZvcmUubmV4dFNpYmxpbmcpKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZWluc2VydENoaWxkcmVuKHBhcmVudCwgdGFyZ2V0KSB7XG5cdHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkgdGFyZ2V0LmFwcGVuZENoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gcmVpbnNlcnRBZnRlcihiZWZvcmUsIHRhcmdldCkge1xuXHR3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nKSB0YXJnZXQuYXBwZW5kQ2hpbGQoYmVmb3JlLm5leHRTaWJsaW5nKTtcbn1cblxuZnVuY3Rpb24gcmVpbnNlcnRCZWZvcmUoYWZ0ZXIsIHRhcmdldCkge1xuXHR2YXIgcGFyZW50ID0gYWZ0ZXIucGFyZW50Tm9kZTtcblx0d2hpbGUgKHBhcmVudC5maXJzdENoaWxkICE9PSBhZnRlcikgdGFyZ2V0LmFwcGVuZENoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbn1cblxuLy8gVE9ETyB0aGlzIGlzIG91dCBvZiBkYXRlXG5mdW5jdGlvbiBkZXN0cm95RWFjaChpdGVyYXRpb25zLCBkZXRhY2gsIHN0YXJ0KSB7XG5cdGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGl0ZXJhdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRpZiAoaXRlcmF0aW9uc1tpXSkgaXRlcmF0aW9uc1tpXS5kZXN0cm95KGRldGFjaCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnQoKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQobmFtZSkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3ZnRWxlbWVudChuYW1lKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgbmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHQoZGF0YSkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbW1lbnQoKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcbn1cblxuZnVuY3Rpb24gYWRkTGlzdGVuZXIobm9kZSwgZXZlbnQsIGhhbmRsZXIpIHtcblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKG5vZGUsIGV2ZW50LCBoYW5kbGVyKSB7XG5cdG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuXHRub2RlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gc2V0WGxpbmtBdHRyaWJ1dGUobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuXHRub2RlLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGdldEJpbmRpbmdHcm91cFZhbHVlKGdyb3VwKSB7XG5cdHZhciB2YWx1ZSA9IFtdO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGdyb3VwLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0aWYgKGdyb3VwW2ldLmNoZWNrZWQpIHZhbHVlLnB1c2goZ3JvdXBbaV0uX192YWx1ZSk7XG5cdH1cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgPT09ICcnID8gdW5kZWZpbmVkIDogK3ZhbHVlO1xufVxuXG5mdW5jdGlvbiBjaGlsZHJlbiAoZWxlbWVudCkge1xuXHRyZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkTm9kZXMpO1xufVxuXG5mdW5jdGlvbiBjbGFpbUVsZW1lbnQgKG5vZGVzLCBuYW1lLCBhdHRyaWJ1dGVzLCBzdmcpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdHZhciBub2RlID0gbm9kZXNbaV07XG5cdFx0aWYgKG5vZGUubm9kZU5hbWUgPT09IG5hbWUpIHtcblx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgbm9kZS5hdHRyaWJ1dGVzLmxlbmd0aDsgaiArPSAxKSB7XG5cdFx0XHRcdHZhciBhdHRyaWJ1dGUgPSBub2RlLmF0dHJpYnV0ZXNbal07XG5cdFx0XHRcdGlmICghYXR0cmlidXRlc1thdHRyaWJ1dGUubmFtZV0pIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZS5uYW1lKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBub2Rlcy5zcGxpY2UoaSwgMSlbMF07IC8vIFRPRE8gc3RyaXAgdW53YW50ZWQgYXR0cmlidXRlc1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdmcgPyBjcmVhdGVTdmdFbGVtZW50KG5hbWUpIDogY3JlYXRlRWxlbWVudChuYW1lKTtcbn1cblxuZnVuY3Rpb24gY2xhaW1UZXh0IChub2RlcywgZGF0YSkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dmFyIG5vZGUgPSBub2Rlc1tpXTtcblx0XHRpZiAobm9kZS5ub2RlVHlwZSA9PT0gMykge1xuXHRcdFx0bm9kZS5kYXRhID0gZGF0YTtcblx0XHRcdHJldHVybiBub2Rlcy5zcGxpY2UoaSwgMSlbMF07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGNyZWF0ZVRleHQoZGF0YSk7XG59XG5cbmZ1bmN0aW9uIHNldElucHV0VHlwZShpbnB1dCwgdHlwZSkge1xuXHR0cnkge1xuXHRcdGlucHV0LnR5cGUgPSB0eXBlO1xuXHR9IGNhdGNoIChlKSB7fVxufVxuXG5mdW5jdGlvbiBzZXRTdHlsZShub2RlLCBrZXksIHZhbHVlKSB7XG5cdG5vZGUuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGxpbmVhcih0KSB7XG5cdHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVJ1bGUoXG5cdGEsXG5cdGIsXG5cdGRlbHRhLFxuXHRkdXJhdGlvbixcblx0ZWFzZSxcblx0Zm5cbikge1xuXHR2YXIga2V5ZnJhbWVzID0gJ3tcXG4nO1xuXG5cdGZvciAodmFyIHAgPSAwOyBwIDw9IDE7IHAgKz0gMTYuNjY2IC8gZHVyYXRpb24pIHtcblx0XHR2YXIgdCA9IGEgKyBkZWx0YSAqIGVhc2UocCk7XG5cdFx0a2V5ZnJhbWVzICs9IHAgKiAxMDAgKyAnJXsnICsgZm4odCkgKyAnfVxcbic7XG5cdH1cblxuXHRyZXR1cm4ga2V5ZnJhbWVzICsgJzEwMCUgeycgKyBmbihiKSArICd9XFxufSc7XG59XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJrc2t5YXBwL3N0cmluZy1oYXNoL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG5mdW5jdGlvbiBoYXNoKHN0cikge1xuXHR2YXIgaGFzaCA9IDUzODE7XG5cdHZhciBpID0gc3RyLmxlbmd0aDtcblxuXHR3aGlsZSAoaS0tKSBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgXiBzdHIuY2hhckNvZGVBdChpKTtcblx0cmV0dXJuIGhhc2ggPj4+IDA7XG59XG5cbmZ1bmN0aW9uIHdyYXBUcmFuc2l0aW9uKGNvbXBvbmVudCwgbm9kZSwgZm4sIHBhcmFtcywgaW50cm8sIG91dGdyb3VwKSB7XG5cdHZhciBvYmogPSBmbihub2RlLCBwYXJhbXMpO1xuXHR2YXIgZHVyYXRpb24gPSBvYmouZHVyYXRpb24gfHwgMzAwO1xuXHR2YXIgZWFzZSA9IG9iai5lYXNpbmcgfHwgbGluZWFyO1xuXHR2YXIgY3NzVGV4dDtcblxuXHQvLyBUT0RPIHNoYXJlIDxzdHlsZT4gdGFnIGJldHdlZW4gYWxsIHRyYW5zaXRpb25zP1xuXHRpZiAob2JqLmNzcyAmJiAhdHJhbnNpdGlvbk1hbmFnZXIuc3R5bGVzaGVldCkge1xuXHRcdHZhciBzdHlsZSA9IGNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0dHJhbnNpdGlvbk1hbmFnZXIuc3R5bGVzaGVldCA9IHN0eWxlLnNoZWV0O1xuXHR9XG5cblx0aWYgKGludHJvKSB7XG5cdFx0aWYgKG9iai5jc3MgJiYgb2JqLmRlbGF5KSB7XG5cdFx0XHRjc3NUZXh0ID0gbm9kZS5zdHlsZS5jc3NUZXh0O1xuXHRcdFx0bm9kZS5zdHlsZS5jc3NUZXh0ICs9IG9iai5jc3MoMCk7XG5cdFx0fVxuXG5cdFx0aWYgKG9iai50aWNrKSBvYmoudGljaygwKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0dDogaW50cm8gPyAwIDogMSxcblx0XHRydW5uaW5nOiBmYWxzZSxcblx0XHRwcm9ncmFtOiBudWxsLFxuXHRcdHBlbmRpbmc6IG51bGwsXG5cdFx0cnVuOiBmdW5jdGlvbihpbnRybywgY2FsbGJhY2spIHtcblx0XHRcdHZhciBwcm9ncmFtID0ge1xuXHRcdFx0XHRzdGFydDogd2luZG93LnBlcmZvcm1hbmNlLm5vdygpICsgKG9iai5kZWxheSB8fCAwKSxcblx0XHRcdFx0aW50cm86IGludHJvLFxuXHRcdFx0XHRjYWxsYmFjazogY2FsbGJhY2tcblx0XHRcdH07XG5cblx0XHRcdGlmIChvYmouZGVsYXkpIHtcblx0XHRcdFx0dGhpcy5wZW5kaW5nID0gcHJvZ3JhbTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc3RhcnQocHJvZ3JhbSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghdGhpcy5ydW5uaW5nKSB7XG5cdFx0XHRcdHRoaXMucnVubmluZyA9IHRydWU7XG5cdFx0XHRcdHRyYW5zaXRpb25NYW5hZ2VyLmFkZCh0aGlzKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHN0YXJ0OiBmdW5jdGlvbihwcm9ncmFtKSB7XG5cdFx0XHRjb21wb25lbnQuZmlyZShwcm9ncmFtLmludHJvID8gJ2ludHJvLnN0YXJ0JyA6ICdvdXRyby5zdGFydCcsIHsgbm9kZTogbm9kZSB9KTtcblxuXHRcdFx0cHJvZ3JhbS5hID0gdGhpcy50O1xuXHRcdFx0cHJvZ3JhbS5iID0gcHJvZ3JhbS5pbnRybyA/IDEgOiAwO1xuXHRcdFx0cHJvZ3JhbS5kZWx0YSA9IHByb2dyYW0uYiAtIHByb2dyYW0uYTtcblx0XHRcdHByb2dyYW0uZHVyYXRpb24gPSBkdXJhdGlvbiAqIE1hdGguYWJzKHByb2dyYW0uYiAtIHByb2dyYW0uYSk7XG5cdFx0XHRwcm9ncmFtLmVuZCA9IHByb2dyYW0uc3RhcnQgKyBwcm9ncmFtLmR1cmF0aW9uO1xuXG5cdFx0XHRpZiAob2JqLmNzcykge1xuXHRcdFx0XHRpZiAob2JqLmRlbGF5KSBub2RlLnN0eWxlLmNzc1RleHQgPSBjc3NUZXh0O1xuXG5cdFx0XHRcdHByb2dyYW0ucnVsZSA9IGdlbmVyYXRlUnVsZShcblx0XHRcdFx0XHRwcm9ncmFtLmEsXG5cdFx0XHRcdFx0cHJvZ3JhbS5iLFxuXHRcdFx0XHRcdHByb2dyYW0uZGVsdGEsXG5cdFx0XHRcdFx0cHJvZ3JhbS5kdXJhdGlvbixcblx0XHRcdFx0XHRlYXNlLFxuXHRcdFx0XHRcdG9iai5jc3Ncblx0XHRcdFx0KTtcblxuXHRcdFx0XHR0cmFuc2l0aW9uTWFuYWdlci5hZGRSdWxlKHByb2dyYW0ucnVsZSwgcHJvZ3JhbS5uYW1lID0gJ19fc3ZlbHRlXycgKyBoYXNoKHByb2dyYW0ucnVsZSkpO1xuXG5cdFx0XHRcdG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gKG5vZGUuc3R5bGUuYW5pbWF0aW9uIHx8ICcnKVxuXHRcdFx0XHRcdC5zcGxpdCgnLCAnKVxuXHRcdFx0XHRcdC5maWx0ZXIoZnVuY3Rpb24oYW5pbSkge1xuXHRcdFx0XHRcdFx0Ly8gd2hlbiBpbnRyb2luZywgZGlzY2FyZCBvbGQgYW5pbWF0aW9ucyBpZiB0aGVyZSBhcmUgYW55XG5cdFx0XHRcdFx0XHRyZXR1cm4gYW5pbSAmJiAocHJvZ3JhbS5kZWx0YSA8IDAgfHwgIS9fX3N2ZWx0ZS8udGVzdChhbmltKSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuY29uY2F0KHByb2dyYW0ubmFtZSArICcgJyArIGR1cmF0aW9uICsgJ21zIGxpbmVhciAxIGZvcndhcmRzJylcblx0XHRcdFx0XHQuam9pbignLCAnKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcblx0XHRcdHRoaXMucGVuZGluZyA9IG51bGw7XG5cdFx0fSxcblx0XHR1cGRhdGU6IGZ1bmN0aW9uKG5vdykge1xuXHRcdFx0dmFyIHByb2dyYW0gPSB0aGlzLnByb2dyYW07XG5cdFx0XHRpZiAoIXByb2dyYW0pIHJldHVybjtcblxuXHRcdFx0dmFyIHAgPSBub3cgLSBwcm9ncmFtLnN0YXJ0O1xuXHRcdFx0dGhpcy50ID0gcHJvZ3JhbS5hICsgcHJvZ3JhbS5kZWx0YSAqIGVhc2UocCAvIHByb2dyYW0uZHVyYXRpb24pO1xuXHRcdFx0aWYgKG9iai50aWNrKSBvYmoudGljayh0aGlzLnQpO1xuXHRcdH0sXG5cdFx0ZG9uZTogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcHJvZ3JhbSA9IHRoaXMucHJvZ3JhbTtcblx0XHRcdHRoaXMudCA9IHByb2dyYW0uYjtcblx0XHRcdGlmIChvYmoudGljaykgb2JqLnRpY2sodGhpcy50KTtcblx0XHRcdGlmIChvYmouY3NzKSB0cmFuc2l0aW9uTWFuYWdlci5kZWxldGVSdWxlKG5vZGUsIHByb2dyYW0ubmFtZSk7XG5cdFx0XHRwcm9ncmFtLmNhbGxiYWNrKCk7XG5cdFx0XHRwcm9ncmFtID0gbnVsbDtcblx0XHRcdHRoaXMucnVubmluZyA9ICEhdGhpcy5wZW5kaW5nO1xuXHRcdH0sXG5cdFx0YWJvcnQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKG9iai50aWNrKSBvYmoudGljaygxKTtcblx0XHRcdGlmIChvYmouY3NzKSB0cmFuc2l0aW9uTWFuYWdlci5kZWxldGVSdWxlKG5vZGUsIHRoaXMucHJvZ3JhbS5uYW1lKTtcblx0XHRcdHRoaXMucHJvZ3JhbSA9IHRoaXMucGVuZGluZyA9IG51bGw7XG5cdFx0XHR0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcblx0XHR9XG5cdH07XG59XG5cbnZhciB0cmFuc2l0aW9uTWFuYWdlciA9IHtcblx0cnVubmluZzogZmFsc2UsXG5cdHRyYW5zaXRpb25zOiBbXSxcblx0Ym91bmQ6IG51bGwsXG5cdHN0eWxlc2hlZXQ6IG51bGwsXG5cdGFjdGl2ZVJ1bGVzOiB7fSxcblxuXHRhZGQ6IGZ1bmN0aW9uKHRyYW5zaXRpb24pIHtcblx0XHR0aGlzLnRyYW5zaXRpb25zLnB1c2godHJhbnNpdGlvbik7XG5cblx0XHRpZiAoIXRoaXMucnVubmluZykge1xuXHRcdFx0dGhpcy5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmJvdW5kIHx8ICh0aGlzLmJvdW5kID0gdGhpcy5uZXh0LmJpbmQodGhpcykpKTtcblx0XHR9XG5cdH0sXG5cblx0YWRkUnVsZTogZnVuY3Rpb24ocnVsZSwgbmFtZSkge1xuXHRcdGlmICghdGhpcy5hY3RpdmVSdWxlc1tuYW1lXSkge1xuXHRcdFx0dGhpcy5hY3RpdmVSdWxlc1tuYW1lXSA9IHRydWU7XG5cdFx0XHR0aGlzLnN0eWxlc2hlZXQuaW5zZXJ0UnVsZSgnQGtleWZyYW1lcyAnICsgbmFtZSArICcgJyArIHJ1bGUsIHRoaXMuc3R5bGVzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuXHRcdH1cblx0fSxcblxuXHRuZXh0OiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcblxuXHRcdHZhciBub3cgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG5cdFx0dmFyIGkgPSB0aGlzLnRyYW5zaXRpb25zLmxlbmd0aDtcblxuXHRcdHdoaWxlIChpLS0pIHtcblx0XHRcdHZhciB0cmFuc2l0aW9uID0gdGhpcy50cmFuc2l0aW9uc1tpXTtcblxuXHRcdFx0aWYgKHRyYW5zaXRpb24ucHJvZ3JhbSAmJiBub3cgPj0gdHJhbnNpdGlvbi5wcm9ncmFtLmVuZCkge1xuXHRcdFx0XHR0cmFuc2l0aW9uLmRvbmUoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRyYW5zaXRpb24ucGVuZGluZyAmJiBub3cgPj0gdHJhbnNpdGlvbi5wZW5kaW5nLnN0YXJ0KSB7XG5cdFx0XHRcdHRyYW5zaXRpb24uc3RhcnQodHJhbnNpdGlvbi5wZW5kaW5nKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRyYW5zaXRpb24ucnVubmluZykge1xuXHRcdFx0XHR0cmFuc2l0aW9uLnVwZGF0ZShub3cpO1xuXHRcdFx0XHR0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIGlmICghdHJhbnNpdGlvbi5wZW5kaW5nKSB7XG5cdFx0XHRcdHRoaXMudHJhbnNpdGlvbnMuc3BsaWNlKGksIDEpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLnJ1bm5pbmcpIHtcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmJvdW5kKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuc3R5bGVzaGVldCkge1xuXHRcdFx0dmFyIGkgPSB0aGlzLnN0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKGktLSkgdGhpcy5zdHlsZXNoZWV0LmRlbGV0ZVJ1bGUoaSk7XG5cdFx0XHR0aGlzLmFjdGl2ZVJ1bGVzID0ge307XG5cdFx0fVxuXHR9LFxuXG5cdGRlbGV0ZVJ1bGU6IGZ1bmN0aW9uKG5vZGUsIG5hbWUpIHtcblx0XHRub2RlLnN0eWxlLmFuaW1hdGlvbiA9IG5vZGUuc3R5bGUuYW5pbWF0aW9uXG5cdFx0XHQuc3BsaXQoJywgJylcblx0XHRcdC5maWx0ZXIoZnVuY3Rpb24oYW5pbSkge1xuXHRcdFx0XHRyZXR1cm4gYW5pbS5zbGljZSgwLCBuYW1lLmxlbmd0aCkgIT09IG5hbWU7XG5cdFx0XHR9KVxuXHRcdFx0LmpvaW4oJywgJyk7XG5cdH1cbn07XG5cbmZ1bmN0aW9uIGRlc3Ryb3koZGV0YWNoKSB7XG5cdHRoaXMuZGVzdHJveSA9IG5vb3A7XG5cdHRoaXMuZmlyZSgnZGVzdHJveScpO1xuXHR0aGlzLnNldCA9IHRoaXMuZ2V0ID0gbm9vcDtcblxuXHRpZiAoZGV0YWNoICE9PSBmYWxzZSkgdGhpcy5fZnJhZ21lbnQudW5tb3VudCgpO1xuXHR0aGlzLl9mcmFnbWVudC5kZXN0cm95KCk7XG5cdHRoaXMuX2ZyYWdtZW50ID0gdGhpcy5fc3RhdGUgPSBudWxsO1xufVxuXG5mdW5jdGlvbiBkZXN0cm95RGV2KGRldGFjaCkge1xuXHRkZXN0cm95LmNhbGwodGhpcywgZGV0YWNoKTtcblx0dGhpcy5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS53YXJuKCdDb21wb25lbnQgd2FzIGFscmVhZHkgZGVzdHJveWVkJyk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIGRpZmZlcnMoYSwgYikge1xuXHRyZXR1cm4gYSAhPT0gYiB8fCAoKGEgJiYgdHlwZW9mIGEgPT09ICdvYmplY3QnKSB8fCB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoT2JzZXJ2ZXJzKGNvbXBvbmVudCwgZ3JvdXAsIGNoYW5nZWQsIG5ld1N0YXRlLCBvbGRTdGF0ZSkge1xuXHRmb3IgKHZhciBrZXkgaW4gZ3JvdXApIHtcblx0XHRpZiAoIWNoYW5nZWRba2V5XSkgY29udGludWU7XG5cblx0XHR2YXIgbmV3VmFsdWUgPSBuZXdTdGF0ZVtrZXldO1xuXHRcdHZhciBvbGRWYWx1ZSA9IG9sZFN0YXRlW2tleV07XG5cblx0XHR2YXIgY2FsbGJhY2tzID0gZ3JvdXBba2V5XTtcblx0XHRpZiAoIWNhbGxiYWNrcykgY29udGludWU7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0dmFyIGNhbGxiYWNrID0gY2FsbGJhY2tzW2ldO1xuXHRcdFx0aWYgKGNhbGxiYWNrLl9fY2FsbGluZykgY29udGludWU7XG5cblx0XHRcdGNhbGxiYWNrLl9fY2FsbGluZyA9IHRydWU7XG5cdFx0XHRjYWxsYmFjay5jYWxsKGNvbXBvbmVudCwgbmV3VmFsdWUsIG9sZFZhbHVlKTtcblx0XHRcdGNhbGxiYWNrLl9fY2FsbGluZyA9IGZhbHNlO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBnZXQoa2V5KSB7XG5cdHJldHVybiBrZXkgPyB0aGlzLl9zdGF0ZVtrZXldIDogdGhpcy5fc3RhdGU7XG59XG5cbmZ1bmN0aW9uIGZpcmUoZXZlbnROYW1lLCBkYXRhKSB7XG5cdHZhciBoYW5kbGVycyA9XG5cdFx0ZXZlbnROYW1lIGluIHRoaXMuX2hhbmRsZXJzICYmIHRoaXMuX2hhbmRsZXJzW2V2ZW50TmFtZV0uc2xpY2UoKTtcblx0aWYgKCFoYW5kbGVycykgcmV0dXJuO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgaGFuZGxlcnMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRoYW5kbGVyc1tpXS5jYWxsKHRoaXMsIGRhdGEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoa2V5LCBjYWxsYmFjaywgb3B0aW9ucykge1xuXHR2YXIgZ3JvdXAgPSBvcHRpb25zICYmIG9wdGlvbnMuZGVmZXJcblx0XHQ/IHRoaXMuX29ic2VydmVycy5wb3N0XG5cdFx0OiB0aGlzLl9vYnNlcnZlcnMucHJlO1xuXG5cdChncm91cFtrZXldIHx8IChncm91cFtrZXldID0gW10pKS5wdXNoKGNhbGxiYWNrKTtcblxuXHRpZiAoIW9wdGlvbnMgfHwgb3B0aW9ucy5pbml0ICE9PSBmYWxzZSkge1xuXHRcdGNhbGxiYWNrLl9fY2FsbGluZyA9IHRydWU7XG5cdFx0Y2FsbGJhY2suY2FsbCh0aGlzLCB0aGlzLl9zdGF0ZVtrZXldKTtcblx0XHRjYWxsYmFjay5fX2NhbGxpbmcgPSBmYWxzZTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0Y2FuY2VsOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpbmRleCA9IGdyb3VwW2tleV0uaW5kZXhPZihjYWxsYmFjayk7XG5cdFx0XHRpZiAofmluZGV4KSBncm91cFtrZXldLnNwbGljZShpbmRleCwgMSk7XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBvYnNlcnZlRGV2KGtleSwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcblx0dmFyIGMgPSAoa2V5ID0gJycgKyBrZXkpLnNlYXJjaCgvW15cXHddLyk7XG5cdGlmIChjID4gLTEpIHtcblx0XHR2YXIgbWVzc2FnZSA9XG5cdFx0XHQnVGhlIGZpcnN0IGFyZ3VtZW50IHRvIGNvbXBvbmVudC5vYnNlcnZlKC4uLikgbXVzdCBiZSB0aGUgbmFtZSBvZiBhIHRvcC1sZXZlbCBwcm9wZXJ0eSc7XG5cdFx0aWYgKGMgPiAwKVxuXHRcdFx0bWVzc2FnZSArPSBcIiwgaS5lLiAnXCIgKyBrZXkuc2xpY2UoMCwgYykgKyBcIicgcmF0aGVyIHRoYW4gJ1wiICsga2V5ICsgXCInXCI7XG5cblx0XHR0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG5cdH1cblxuXHRyZXR1cm4gb2JzZXJ2ZS5jYWxsKHRoaXMsIGtleSwgY2FsbGJhY2ssIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBvbihldmVudE5hbWUsIGhhbmRsZXIpIHtcblx0aWYgKGV2ZW50TmFtZSA9PT0gJ3RlYXJkb3duJykgcmV0dXJuIHRoaXMub24oJ2Rlc3Ryb3knLCBoYW5kbGVyKTtcblxuXHR2YXIgaGFuZGxlcnMgPSB0aGlzLl9oYW5kbGVyc1tldmVudE5hbWVdIHx8ICh0aGlzLl9oYW5kbGVyc1tldmVudE5hbWVdID0gW10pO1xuXHRoYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuXG5cdHJldHVybiB7XG5cdFx0Y2FuY2VsOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpbmRleCA9IGhhbmRsZXJzLmluZGV4T2YoaGFuZGxlcik7XG5cdFx0XHRpZiAofmluZGV4KSBoYW5kbGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gb25EZXYoZXZlbnROYW1lLCBoYW5kbGVyKSB7XG5cdGlmIChldmVudE5hbWUgPT09ICd0ZWFyZG93bicpIHtcblx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcIlVzZSBjb21wb25lbnQub24oJ2Rlc3Ryb3knLCAuLi4pIGluc3RlYWQgb2YgY29tcG9uZW50Lm9uKCd0ZWFyZG93bicsIC4uLikgd2hpY2ggaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSB1bnN1cHBvcnRlZCBpbiBTdmVsdGUgMlwiXG5cdFx0KTtcblx0XHRyZXR1cm4gdGhpcy5vbignZGVzdHJveScsIGhhbmRsZXIpO1xuXHR9XG5cblx0cmV0dXJuIG9uLmNhbGwodGhpcywgZXZlbnROYW1lLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gc2V0KG5ld1N0YXRlKSB7XG5cdHRoaXMuX3NldChhc3NpZ24oe30sIG5ld1N0YXRlKSk7XG5cdGlmICh0aGlzLl9yb290Ll9sb2NrKSByZXR1cm47XG5cdHRoaXMuX3Jvb3QuX2xvY2sgPSB0cnVlO1xuXHRjYWxsQWxsKHRoaXMuX3Jvb3QuX2JlZm9yZWNyZWF0ZSk7XG5cdGNhbGxBbGwodGhpcy5fcm9vdC5fb25jcmVhdGUpO1xuXHRjYWxsQWxsKHRoaXMuX3Jvb3QuX2FmdGVyY3JlYXRlKTtcblx0dGhpcy5fcm9vdC5fbG9jayA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBfc2V0KG5ld1N0YXRlKSB7XG5cdHZhciBvbGRTdGF0ZSA9IHRoaXMuX3N0YXRlLFxuXHRcdGNoYW5nZWQgPSB7fSxcblx0XHRkaXJ0eSA9IGZhbHNlO1xuXG5cdGZvciAodmFyIGtleSBpbiBuZXdTdGF0ZSkge1xuXHRcdGlmIChkaWZmZXJzKG5ld1N0YXRlW2tleV0sIG9sZFN0YXRlW2tleV0pKSBjaGFuZ2VkW2tleV0gPSBkaXJ0eSA9IHRydWU7XG5cdH1cblx0aWYgKCFkaXJ0eSkgcmV0dXJuO1xuXG5cdHRoaXMuX3N0YXRlID0gYXNzaWduKHt9LCBvbGRTdGF0ZSwgbmV3U3RhdGUpO1xuXHR0aGlzLl9yZWNvbXB1dGUoY2hhbmdlZCwgdGhpcy5fc3RhdGUsIG9sZFN0YXRlLCBmYWxzZSk7XG5cdGlmICh0aGlzLl9iaW5kKSB0aGlzLl9iaW5kKGNoYW5nZWQsIHRoaXMuX3N0YXRlKTtcblx0ZGlzcGF0Y2hPYnNlcnZlcnModGhpcywgdGhpcy5fb2JzZXJ2ZXJzLnByZSwgY2hhbmdlZCwgdGhpcy5fc3RhdGUsIG9sZFN0YXRlKTtcblx0dGhpcy5fZnJhZ21lbnQudXBkYXRlKGNoYW5nZWQsIHRoaXMuX3N0YXRlKTtcblx0ZGlzcGF0Y2hPYnNlcnZlcnModGhpcywgdGhpcy5fb2JzZXJ2ZXJzLnBvc3QsIGNoYW5nZWQsIHRoaXMuX3N0YXRlLCBvbGRTdGF0ZSk7XG59XG5cbmZ1bmN0aW9uIF9zZXREZXYobmV3U3RhdGUpIHtcblx0aWYgKHR5cGVvZiBuZXdTdGF0ZSAhPT0gJ29iamVjdCcpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHR0aGlzLl9kZWJ1Z05hbWUgKyAnIC5zZXQgd2FzIGNhbGxlZCB3aXRob3V0IGFuIG9iamVjdCBvZiBkYXRhIGtleS12YWx1ZXMgdG8gdXBkYXRlLidcblx0XHQpO1xuXHR9XG5cblx0dGhpcy5fY2hlY2tSZWFkT25seShuZXdTdGF0ZSk7XG5cdF9zZXQuY2FsbCh0aGlzLCBuZXdTdGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxBbGwoZm5zKSB7XG5cdHdoaWxlIChmbnMgJiYgZm5zLmxlbmd0aCkgZm5zLnBvcCgpKCk7XG59XG5cbmZ1bmN0aW9uIF9tb3VudCh0YXJnZXQsIGFuY2hvcikge1xuXHR0aGlzLl9mcmFnbWVudC5tb3VudCh0YXJnZXQsIGFuY2hvcik7XG59XG5cbmZ1bmN0aW9uIF91bm1vdW50KCkge1xuXHR0aGlzLl9mcmFnbWVudC51bm1vdW50KCk7XG59XG5cbnZhciBwcm90byA9IHtcblx0ZGVzdHJveTogZGVzdHJveSxcblx0Z2V0OiBnZXQsXG5cdGZpcmU6IGZpcmUsXG5cdG9ic2VydmU6IG9ic2VydmUsXG5cdG9uOiBvbixcblx0c2V0OiBzZXQsXG5cdHRlYXJkb3duOiBkZXN0cm95LFxuXHRfcmVjb21wdXRlOiBub29wLFxuXHRfc2V0OiBfc2V0LFxuXHRfbW91bnQ6IF9tb3VudCxcblx0X3VubW91bnQ6IF91bm1vdW50XG59O1xuXG52YXIgcHJvdG9EZXYgPSB7XG5cdGRlc3Ryb3k6IGRlc3Ryb3lEZXYsXG5cdGdldDogZ2V0LFxuXHRmaXJlOiBmaXJlLFxuXHRvYnNlcnZlOiBvYnNlcnZlRGV2LFxuXHRvbjogb25EZXYsXG5cdHNldDogc2V0LFxuXHR0ZWFyZG93bjogZGVzdHJveURldixcblx0X3JlY29tcHV0ZTogbm9vcCxcblx0X3NldDogX3NldERldixcblx0X21vdW50OiBfbW91bnQsXG5cdF91bm1vdW50OiBfdW5tb3VudFxufTtcblxuZXhwb3J0IHsgZGVzdHJveSwgZGVzdHJveURldiwgZGlmZmVycywgZGlzcGF0Y2hPYnNlcnZlcnMsIGdldCwgZmlyZSwgb2JzZXJ2ZSwgb2JzZXJ2ZURldiwgb24sIG9uRGV2LCBzZXQsIF9zZXQsIF9zZXREZXYsIGNhbGxBbGwsIF9tb3VudCwgX3VubW91bnQsIHByb3RvLCBwcm90b0RldiwgYXBwZW5kTm9kZSwgaW5zZXJ0Tm9kZSwgZGV0YWNoTm9kZSwgZGV0YWNoQmV0d2VlbiwgZGV0YWNoQmVmb3JlLCBkZXRhY2hBZnRlciwgcmVpbnNlcnRCZXR3ZWVuLCByZWluc2VydENoaWxkcmVuLCByZWluc2VydEFmdGVyLCByZWluc2VydEJlZm9yZSwgZGVzdHJveUVhY2gsIGNyZWF0ZUZyYWdtZW50LCBjcmVhdGVFbGVtZW50LCBjcmVhdGVTdmdFbGVtZW50LCBjcmVhdGVUZXh0LCBjcmVhdGVDb21tZW50LCBhZGRMaXN0ZW5lciwgcmVtb3ZlTGlzdGVuZXIsIHNldEF0dHJpYnV0ZSwgc2V0WGxpbmtBdHRyaWJ1dGUsIGdldEJpbmRpbmdHcm91cFZhbHVlLCB0b051bWJlciwgY2hpbGRyZW4sIGNsYWltRWxlbWVudCwgY2xhaW1UZXh0LCBzZXRJbnB1dFR5cGUsIHNldFN0eWxlLCBsaW5lYXIsIGdlbmVyYXRlUnVsZSwgaGFzaCwgd3JhcFRyYW5zaXRpb24sIHRyYW5zaXRpb25NYW5hZ2VyLCBub29wLCBhc3NpZ24gfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG48ZGl2IHJlZjpyb290IGNsYXNzPVwic3ByaXRlIG91dGVyIHt7aG92ZXJfY2xhc3N9fVwiIHN0eWxlPVwiLS1kZWZhdWx0LXNpemU6IHt7ZmluYWxfc3ByaXRlX3NpemV9fXB4O1xuIC0tZGVmYXVsdC1wb3NpdGlvbjogLXt7b2Zmc2V0X3h9fXB4IC17e29mZnNldF95fX1weDtcbiAtLWhvdmVyLXNpemU6IHt7c3ByaXRlX3NpemV9fXB4O1xuIC0taG92ZXItcG9zaXRpb246IC17e2Nvcm5lcl94fX1weCAte3tjb3JuZXJfeX19cHg7XG4gLS1jb250YWluZXItc2l6ZToge3tzaXplfX1weDsgXG4gLS1kZWZhdWx0LXJhdGlvOiB7eyBzaXplIC8gZmluYWxfc3ByaXRlX3NpemUgfX07XG4gLS1ob3Zlci1zY2FsZToge3tob3Zlcl9zY2FsZX19O1xuIC0tdHJhbnNpdGlvbl9jc3M6IHt7dHJhbnNpdGlvbl9jc3N9fTtcbiAtLWJvcmRlcl9jc3M6IHt7Ym9yZGVyX2Nzc319O1xuIC0tcGl4ZWxhdGVkOiB7e3BpeGVsYXRlZCA/ICdwaXhlbGF0ZWQnIDogJ2F1dG8nfX1cIj5cbiAgPGRpdiBjbGFzcz1cIm1pZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJpbm5lciB7e3NyY19jbGFzc319XCI+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxzdHlsZT5cblxuLm91dGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgLyptYXJnaW4tcmlnaHQ6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4OyovXG4gIHdpZHRoOiB2YXIoLS1jb250YWluZXItc2l6ZSk7XG4gIGhlaWdodDogdmFyKC0tY29udGFpbmVyLXNpemUpO1xufVxuXG4ubWlkLCAuaW5uZXIge1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uX2Nzcyk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ubWlkIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSggdmFyKC0tZGVmYXVsdC1yYXRpbykgKTtcbiAgbWFyZ2luOiBjYWxjKCBjYWxjKCB2YXIoLS1jb250YWluZXItc2l6ZSkgLSB2YXIoLS1kZWZhdWx0LXNpemUpICkgLyAyICk7XG59XG5cbi5pbm5lciB7XG4gIGltYWdlLXJlbmRlcmluZzogIHZhcigtLXBpeGVsYXRlZCk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHZhcigtLWRlZmF1bHQtcG9zaXRpb24pO1xuICB3aWR0aDogdmFyKC0tZGVmYXVsdC1zaXplKTtcbiAgaGVpZ2h0OiB2YXIoLS1kZWZhdWx0LXNpemUpO1xufVxuXG4ub3V0ZXIuaG92ZXJhYmxlOmhvdmVyIHtcbiAgei1pbmRleDogMTAwO1xufVxuXG4ub3V0ZXIuaG92ZXJhYmxlOmhvdmVyIC5pbm5lciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHZhcigtLWhvdmVyLXBvc2l0aW9uKTtcbiAgd2lkdGg6IHZhcigtLWhvdmVyLXNpemUpO1xuICBoZWlnaHQ6IHZhcigtLWhvdmVyLXNpemUpO1xuICAvKnRyYW5zaXRpb246IG5vbmU7Ki9cbn1cblxuLm91dGVyLmhvdmVyYWJsZTpob3ZlciAubWlkIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1ob3Zlci1zY2FsZSkpO1xuICBtYXJnaW46IGNhbGMoIGNhbGMoIHZhcigtLWNvbnRhaW5lci1zaXplKSAtIHZhcigtLWhvdmVyLXNpemUpICkgLyAyICk7XG4gIC8qdHJhbnNpdGlvbjogbm9uZTsqL1xuICAvKmJveC1zaGFkb3c6IDBweCA1cHggMjBweCByZ2JhKDAsMCwwLDAuNjY3KTsqL1xuICBib3JkZXI6IHZhcigtLWJvcmRlcl9jc3MpO1xuICB3aWR0aDogdmFyKC0taG92ZXItc2l6ZSk7XG59XG5cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3JjX2NsYXNzOiBcIm1peGVkNGRcIixcbiAgICAgICAgc3ByaXRlX3NpemU6IDIwMCxcbiAgICAgICAgc3ByaXRlX3NjYWxlOiAxLjAsXG4gICAgICAgIHNpemU6IDEwMCxcbiAgICAgICAgeDogMCwgLy8gc3BlY2lmaWVkIGluIFNwcml0ZSBzdWJjbGFzc2VzXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHNoaWZ0OiBbMC41LDAuNV0sXG4gICAgICAgIGhvdmVyOiBmYWxzZSxcbiAgICAgICAgaG92ZXJfc2NhbGU6IDEsXG4gICAgICAgIHRyYW5zaXRpb25fYmFja2dyb3VuZDogZmFsc2UsXG4gICAgICAgIGJvcmRlcjogZmFsc2UsXG4gICAgICAgIHBpeGVsYXRlZDogdHJ1ZVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIGNvcm5lcl94OiAoc3ByaXRlX3NpemUsIHgsIHNwcml0ZV9zY2FsZSkgPT4gc3ByaXRlX3NpemUqeCxcbiAgICAgIGNvcm5lcl95OiAoc3ByaXRlX3NpemUsIHksIHNwcml0ZV9zY2FsZSkgPT4gc3ByaXRlX3NpemUqeSxcbiAgICAgIG9mZnNldF94OiAoc3ByaXRlX3NpemUsIHNwcml0ZV9zY2FsZSwgY29ybmVyX3gsIHNoaWZ0LCBzaXplLCByYXRpbykgPT4ge1xuICAgICAgICByZXR1cm4gY29ybmVyX3ggKyBzcHJpdGVfc2l6ZSAqIHNoaWZ0WzBdICogKDEtc3ByaXRlX3NjYWxlKTtcbiAgICAgIH0sXG4gICAgICBvZmZzZXRfeTogKHNwcml0ZV9zaXplLCBzcHJpdGVfc2NhbGUsIGNvcm5lcl95LCBzaGlmdCwgc2l6ZSwgcmF0aW8pID0+IHtcbiAgICAgICAgcmV0dXJuIGNvcm5lcl95ICsgc3ByaXRlX3NpemUgKiBzaGlmdFsxXSAqICgxLXNwcml0ZV9zY2FsZSk7XG4gICAgICB9LFxuICAgICAgZmluYWxfc3ByaXRlX3NpemU6IChzcHJpdGVfc2NhbGUsIHNwcml0ZV9zaXplKSA9PiBzcHJpdGVfc2NhbGUgKiBzcHJpdGVfc2l6ZSxcbiAgICAgIHJhdGlvOiAoc2l6ZSwgZmluYWxfc3ByaXRlX3NpemUpID0+IHNpemUvZmluYWxfc3ByaXRlX3NpemUsXG4gICAgICBtYXJnaW46IChmaW5hbF9zcHJpdGVfc2l6ZSwgc2l6ZSkgPT4gLShmaW5hbF9zcHJpdGVfc2l6ZS1zaXplKS8yLFxuICAgICAgdHJhbnNpdGlvbl9jc3M6ICh0cmFuc2l0aW9uX2JhY2tncm91bmQpID0+IHtcbiAgICAgICAgbGV0IGNzcyA9IGB3aWR0aCAwLjFzIGVhc2Utb3V0LCBoZWlnaHQgMC4xcyBlYXNlLW91dCwgbWFyZ2luIDAuMXMgZWFzZS1vdXQsIHRyYW5zZm9ybSAwLjFzIGVhc2Utb3V0YDtcbiAgICAgICAgaWYgKHRyYW5zaXRpb25fYmFja2dyb3VuZCkge1xuICAgICAgICAgIGNzcyArPSBgLCBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuMXMgZWFzZS1vdXRgO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjc3M7XG4gICAgICB9LFxuICAgICAgYm9yZGVyX2NzczogKGJvcmRlcikgPT4gYm9yZGVyID8gJzJweCBzb2xpZCB3aGl0ZScgOiAnbm9uZScsXG4gICAgICBob3Zlcl9jbGFzczogKGhvdmVyKSA9PiBob3ZlciA/ICdob3ZlcmFibGUnIDogJydcbiAgICB9LFxuICAgIG9uY3JlYXRlKCkge1xuICAgICAgLy8gdGhpcy5vYnNlcnZlKCd4JywgKHgxLCB4MikgPT4gY29uc29sZS5sb2codGhpcykpXG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaWFncmFtcy9TcHJpdGUuaHRtbCIsInZhciBhcnJheU5vdGF0aW9uUGF0dGVybiA9IC9cXFtcXHMqKFxcZCspXFxzKlxcXS9nO1xuZnVuY3Rpb24gbWFrZUFycmF5TWV0aG9kKG5hbWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGtleXBhdGgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBhcnRzID0ga2V5cGF0aC5yZXBsYWNlKGFycmF5Tm90YXRpb25QYXR0ZXJuLCAnLiQxJykuc3BsaXQoJy4nKTtcbiAgICAgICAgdmFyIGtleSA9IHBhcnRzLnNoaWZ0KCk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0KGtleSk7XG4gICAgICAgIHZhciBhcnJheSA9IHZhbHVlO1xuICAgICAgICB3aGlsZSAocGFydHMubGVuZ3RoKVxuICAgICAgICAgICAgYXJyYXkgPSBhcnJheVtwYXJ0cy5zaGlmdCgpXTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGFycmF5W25hbWVdLmFwcGx5KGFycmF5LCBhcmdzKTtcbiAgICAgICAgdGhpcy5zZXQoKF9hID0ge30sIF9hW2tleV0gPSB2YWx1ZSwgX2EpKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgdmFyIF9hO1xuICAgIH07XG59XG52YXIgcHVzaCA9IG1ha2VBcnJheU1ldGhvZCgncHVzaCcpO1xudmFyIHBvcCA9IG1ha2VBcnJheU1ldGhvZCgncG9wJyk7XG52YXIgc2hpZnQgPSBtYWtlQXJyYXlNZXRob2QoJ3NoaWZ0Jyk7XG52YXIgdW5zaGlmdCA9IG1ha2VBcnJheU1ldGhvZCgndW5zaGlmdCcpO1xudmFyIHNwbGljZSA9IG1ha2VBcnJheU1ldGhvZCgnc3BsaWNlJyk7XG52YXIgc29ydCA9IG1ha2VBcnJheU1ldGhvZCgnc29ydCcpO1xudmFyIHJldmVyc2UgPSBtYWtlQXJyYXlNZXRob2QoJ3JldmVyc2UnKTtcblxuZnVuY3Rpb24gaXNEYXRlKG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG52YXIgc2NoZWR1bGVyID0ge1xuICAgIGNvbXBvbmVudHM6IFtdLFxuICAgIHJ1bm5pbmc6IGZhbHNlLFxuICAgIGFkZDogZnVuY3Rpb24gKGNvbXBvbmVudCkge1xuICAgICAgICBpZiAofnNjaGVkdWxlci5jb21wb25lbnRzLmluZGV4T2YoY29tcG9uZW50KSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgc2NoZWR1bGVyLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgICBpZiAoIXNjaGVkdWxlci5ydW5uaW5nKSB7XG4gICAgICAgICAgICBzY2hlZHVsZXIucnVubmluZyA9IHRydWU7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2NoZWR1bGVyLm5leHQpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBub3cgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIHZhciBoYXNDb21wb25lbnRzID0gZmFsc2U7XG4gICAgICAgIHZhciBpID0gc2NoZWR1bGVyLmNvbXBvbmVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICB2YXIgY29tcG9uZW50ID0gc2NoZWR1bGVyLmNvbXBvbmVudHNbaV07XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHt9O1xuICAgICAgICAgICAgdmFyIGhhc1R3ZWVucyA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGNvbXBvbmVudC5fY3VycmVudFR3ZWVucykge1xuICAgICAgICAgICAgICAgIHZhciB0ID0gY29tcG9uZW50Ll9jdXJyZW50VHdlZW5zW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSB0LmVuZCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhW2tleV0gPSB0LnRvO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY29tcG9uZW50Ll9jdXJyZW50VHdlZW5zW2tleV07XG4gICAgICAgICAgICAgICAgICAgIHQuZnVsZmlsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBoYXNUd2VlbnMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBoYXNDb21wb25lbnRzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdyA+PSB0LnN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IChub3cgLSB0LnN0YXJ0KSAvIHQuZHVyYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2tleV0gPSB0LnZhbHVlKHQuZWFzZShwKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb21wb25lbnQuX3R3ZWVuaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbXBvbmVudC5zZXQoZGF0YSk7XG4gICAgICAgICAgICBjb21wb25lbnQuX3R3ZWVuaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoIWhhc1R3ZWVucylcbiAgICAgICAgICAgICAgICBzY2hlZHVsZXIuY29tcG9uZW50cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc0NvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzY2hlZHVsZXIubmV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzY2hlZHVsZXIucnVubmluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufTtcbmZ1bmN0aW9uIHNuYXAodG8pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gdG87IH07XG59XG5mdW5jdGlvbiBpbnRlcnBvbGF0ZShhLCBiKSB7XG4gICAgaWYgKGEgPT09IGIgfHwgYSAhPT0gYSlcbiAgICAgICAgcmV0dXJuIHNuYXAoYSk7XG4gICAgdmFyIHR5cGUgPSB0eXBlb2YgYTtcbiAgICBpZiAodHlwZSAhPT0gdHlwZW9mIGIgfHwgQXJyYXkuaXNBcnJheShhKSAhPT0gQXJyYXkuaXNBcnJheShiKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBpbnRlcnBvbGF0ZSB2YWx1ZXMgb2YgZGlmZmVyZW50IHR5cGUnKTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgICAgdmFyIGFycl8xID0gYi5tYXAoZnVuY3Rpb24gKGJpLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gaW50ZXJwb2xhdGUoYVtpXSwgYmkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyXzEubWFwKGZ1bmN0aW9uIChmbikgeyByZXR1cm4gZm4odCk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKCFhIHx8ICFiKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdPYmplY3QgY2Fubm90IGJlIG51bGwnKTtcbiAgICAgICAgaWYgKGlzRGF0ZShhKSAmJiBpc0RhdGUoYikpIHtcbiAgICAgICAgICAgIGEgPSBhLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGIgPSBiLmdldFRpbWUoKTtcbiAgICAgICAgICAgIHZhciBkZWx0YV8xID0gYiAtIGE7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYSArIHQgKiBkZWx0YV8xKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGtleXNfMSA9IE9iamVjdC5rZXlzKGIpO1xuICAgICAgICB2YXIgaW50ZXJwb2xhdG9yc18xID0ge307XG4gICAgICAgIHZhciByZXN1bHRfMSA9IHt9O1xuICAgICAgICBrZXlzXzEuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBpbnRlcnBvbGF0b3JzXzFba2V5XSA9IGludGVycG9sYXRlKGFba2V5XSwgYltrZXldKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAga2V5c18xLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdF8xW2tleV0gPSBpbnRlcnBvbGF0b3JzXzFba2V5XSh0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdF8xO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgdmFyIGRlbHRhXzIgPSBiIC0gYTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICByZXR1cm4gYSArIHQgKiBkZWx0YV8yO1xuICAgICAgICB9O1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgaW50ZXJwb2xhdGUgXCIgKyB0eXBlICsgXCIgdmFsdWVzXCIpO1xufVxuZnVuY3Rpb24gbGluZWFyKHgpIHtcbiAgICByZXR1cm4geDtcbn1cbmZ1bmN0aW9uIHR3ZWVuKGtleSwgdG8sIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgaWYgKCF0aGlzLl9jdXJyZW50VHdlZW5zKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRUd2VlbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl90d2VlbmluZyA9IGZhbHNlO1xuICAgICAgICB2YXIgc2V0XzEgPSB0aGlzLnNldDtcbiAgICAgICAgdGhpcy5zZXQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgaWYgKCFfdGhpcy5fdHdlZW5pbmcpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXlfMSBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5fY3VycmVudFR3ZWVuc1trZXlfMV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fY3VycmVudFR3ZWVuc1trZXlfMV0uYWJvcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRfMS5jYWxsKF90aGlzLCBkYXRhKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2N1cnJlbnRUd2VlbnNba2V5XSlcbiAgICAgICAgdGhpcy5fY3VycmVudFR3ZWVuc1trZXldLmFib3J0KCk7XG4gICAgdmFyIHN0YXJ0ID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpICsgKG9wdGlvbnMuZGVsYXkgfHwgMCk7XG4gICAgdmFyIGR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbiB8fCA0MDA7XG4gICAgdmFyIGVuZCA9IHN0YXJ0ICsgZHVyYXRpb247XG4gICAgdmFyIHQgPSB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICB2YWx1ZTogKG9wdGlvbnMuaW50ZXJwb2xhdGUgfHwgaW50ZXJwb2xhdGUpKHRoaXMuZ2V0KGtleSksIHRvKSxcbiAgICAgICAgdG86IHRvLFxuICAgICAgICBzdGFydDogc3RhcnQsXG4gICAgICAgIGVuZDogZW5kLFxuICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgIGVhc2U6IG9wdGlvbnMuZWFzaW5nIHx8IGxpbmVhcixcbiAgICAgICAgcnVubmluZzogdHJ1ZSxcbiAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHQucnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgZGVsZXRlIF90aGlzLl9jdXJyZW50VHdlZW5zW2tleV07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuX2N1cnJlbnRUd2VlbnNba2V5XSA9IHQ7XG4gICAgc2NoZWR1bGVyLmFkZCh0aGlzKTtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChmdWxmaWwpIHtcbiAgICAgICAgdC5mdWxmaWwgPSBmdWxmaWw7XG4gICAgfSk7XG4gICAgcHJvbWlzZS5hYm9ydCA9IHQuYWJvcnQ7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGdldE5lc3RlZFZhbHVlKG9iaiwgcGFydHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICghb2JqKVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgb2JqID0gb2JqW3BhcnRzW2ldXTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIG9ic2VydmVEZWVwKGtleXBhdGgsIGNhbGxiYWNrLCBvcHRzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgcGFydHMgPSBrZXlwYXRoLnJlcGxhY2UoL1xcWyhcXGQrKVxcXS9nLCAnLiQxJykuc3BsaXQoJy4nKTtcbiAgICB2YXIga2V5ID0gcGFydHMuc2hpZnQoKTtcbiAgICB2YXIgbGFzdCA9IG9wdHMgJiYgb3B0cy5pbml0ID09PSBmYWxzZVxuICAgICAgICA/IGdldE5lc3RlZFZhbHVlKHRoaXMuZ2V0KGtleSksIHBhcnRzKVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gdGhpcy5vYnNlcnZlKGtleSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gZ2V0TmVzdGVkVmFsdWUodmFsdWUsIHBhcnRzKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBsYXN0IHx8XG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIHx8XG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoX3RoaXMsIHZhbHVlLCBsYXN0KTtcbiAgICAgICAgfVxuICAgICAgICBsYXN0ID0gdmFsdWU7XG4gICAgfSwgb3B0cyk7XG59XG5cbmZ1bmN0aW9uIGdldERlZXAoa2V5cGF0aCkge1xuICAgIGlmIChrZXlwYXRoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCk7XG4gICAgfVxuICAgIHZhciBrZXlzID0ga2V5cGF0aC5yZXBsYWNlKC9cXFsoXFxkKylcXF0vZywgJy4kMScpLnNwbGl0KCcuJyk7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5nZXQoa2V5c1swXSk7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWVba2V5c1tpXV07XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHNldERlZXAoa2V5cGF0aCwgdmFsdWUpIHtcbiAgICBpZiAoa2V5cGF0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGtleXMgPSBrZXlwYXRoLnJlcGxhY2UoL1xcWyhcXGQrKVxcXS9nLCAnLiQxJykuc3BsaXQoJy4nKTtcbiAgICB2YXIgbGFzdEtleSA9IGtleXMucG9wKCk7XG4gICAgLy8gSWYgbm90IGEgbmVzdGVkIGtleXBhdGhcbiAgICBpZiAoa2V5c1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBkYXRhXzEgPSB7fTtcbiAgICAgICAgZGF0YV8xW2xhc3RLZXldID0gdmFsdWU7XG4gICAgICAgIHRoaXMuc2V0KGRhdGFfMSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIG9iamVjdCA9IHRoaXMuZ2V0KGtleXNbMF0pO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBvYmplY3QgPSBvYmplY3Rba2V5c1tpXV07XG4gICAgfVxuICAgIG9iamVjdFtsYXN0S2V5XSA9IHZhbHVlO1xuICAgIHZhciBkYXRhID0ge307XG4gICAgZGF0YVtrZXlzWzBdXSA9IHRoaXMuZ2V0KGtleXNbMF0pO1xuICAgIHRoaXMuc2V0KGRhdGEpO1xufVxuXG52YXIgc2NoZWR1bGVyJDEgPSB7XG4gICAgY29tcG9uZW50czogW10sXG4gICAgcnVubmluZzogZmFsc2UsXG4gICAgYWRkOiBmdW5jdGlvbiAoY29tcG9uZW50KSB7XG4gICAgICAgIGlmICh+c2NoZWR1bGVyJDEuY29tcG9uZW50cy5pbmRleE9mKGNvbXBvbmVudCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHNjaGVkdWxlciQxLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgICBpZiAoIXNjaGVkdWxlciQxLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHNjaGVkdWxlciQxLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNjaGVkdWxlciQxLm5leHQpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBoYXNDb21wb25lbnRzID0gZmFsc2U7XG4gICAgICAgIHZhciBpID0gc2NoZWR1bGVyJDEuY29tcG9uZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgIHZhciBjb21wb25lbnQgPSBzY2hlZHVsZXIkMS5jb21wb25lbnRzW2ldO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7fTtcbiAgICAgICAgICAgIHZhciBoYXNTcHJpbmdzID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gY29tcG9uZW50Ll9zcHJpbmdzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNwcmluZ18xID0gY29tcG9uZW50Ll9zcHJpbmdzW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKHNwcmluZ18xLnRpY2soZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzU3ByaW5ncyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGhhc0NvbXBvbmVudHMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50Ll9zcHJpbmdDYWxsYmFja3Nba2V5XSgpO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY29tcG9uZW50Ll9zcHJpbmdzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjb21wb25lbnQuX3NwcmluZ0NhbGxiYWNrc1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbXBvbmVudC5fc3ByaW5naW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbXBvbmVudC5zZXQoZGF0YSk7XG4gICAgICAgICAgICBjb21wb25lbnQuX3NwcmluZ2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKCFoYXNTcHJpbmdzKVxuICAgICAgICAgICAgICAgIHNjaGVkdWxlciQxLmNvbXBvbmVudHMuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNDb21wb25lbnRzKSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2NoZWR1bGVyJDEubmV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzY2hlZHVsZXIkMS5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59O1xuZnVuY3Rpb24gc25hcCQxKGtleSwgYSwgYiwgb3B0aW9ucykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICB0aWNrOiBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICAgICAgICBvYmplY3Rba2V5XSA9IGI7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKG9iamVjdCwgb3B0aW9ucykge1xuICAgICAgICAgICAgYiA9IG9iamVjdDtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBudW1iZXIoa2V5LCBhLCBiLCBvcHRpb25zKSB7XG4gICAgdmFyIHZlbG9jaXR5ID0gMDtcbiAgICB2YXIgc3RpZmZuZXNzID0gb3B0aW9ucy5zdGlmZm5lc3MsIGRhbXBpbmcgPSBvcHRpb25zLmRhbXBpbmc7XG4gICAgdmFyIHZhbHVlVGhyZXNob2xkID0gTWF0aC5hYnMoYiAtIGEpICogMC4wMDE7XG4gICAgdmFyIHZlbG9jaXR5VGhyZXNob2xkID0gdmFsdWVUaHJlc2hvbGQ7IC8vIFRPRE8gaXMgdGhpcyByaWdodD9cbiAgICByZXR1cm4ge1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgdGljazogZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICAgICAgdmFyIGQgPSBiIC0gYTtcbiAgICAgICAgICAgIHZhciBzcHJpbmcgPSBzdGlmZm5lc3MgKiBkO1xuICAgICAgICAgICAgdmFyIGRhbXBlciA9IGRhbXBpbmcgKiB2ZWxvY2l0eTtcbiAgICAgICAgICAgIHZhciBhY2NlbGVyYXRpb24gPSBzcHJpbmcgLSBkYW1wZXI7XG4gICAgICAgICAgICB2ZWxvY2l0eSArPSBhY2NlbGVyYXRpb247XG4gICAgICAgICAgICBhICs9IHZlbG9jaXR5O1xuICAgICAgICAgICAgb2JqZWN0W2tleV0gPSBhO1xuICAgICAgICAgICAgaWYgKHZlbG9jaXR5IDwgdmVsb2NpdHlUaHJlc2hvbGQgJiZcbiAgICAgICAgICAgICAgICBNYXRoLmFicyhiIC0gYSkgPCB2YWx1ZVRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIG9iamVjdFtrZXldID0gYjtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvYmplY3Rba2V5XSA9IGE7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAob2JqZWN0LCBvcHRpb25zKSB7XG4gICAgICAgICAgICBjaGVja0NvbXBhdGliaWxpdHkob2JqZWN0LCBiKTtcbiAgICAgICAgICAgIGIgPSBvYmplY3Q7XG4gICAgICAgICAgICBzdGlmZm5lc3MgPSBvcHRpb25zLnN0aWZmbmVzcztcbiAgICAgICAgICAgIGRhbXBpbmcgPSBvcHRpb25zLmRhbXBpbmc7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gZGF0ZShrZXksIGEsIGIsIG9wdGlvbnMpIHtcbiAgICB2YXIgZHVtbXkgPSB7fTtcbiAgICB2YXIgc3Vic3ByaW5nID0gbnVtYmVyKGtleSwgYS5nZXRUaW1lKCksIGIuZ2V0VGltZSgpLCBvcHRpb25zKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgdGljazogZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICAgICAgaWYgKCFzdWJzcHJpbmcudGljayhkdW1teSkpIHtcbiAgICAgICAgICAgICAgICBvYmplY3Rba2V5XSA9IGI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2JqZWN0W2tleV0gPSBuZXcgRGF0ZShkdW1teVtrZXldKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uIChvYmplY3QsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGNoZWNrQ29tcGF0aWJpbGl0eShvYmplY3QsIGIpO1xuICAgICAgICAgICAgc3Vic3ByaW5nLnVwZGF0ZShvYmplY3QuZ2V0VGltZSgpLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGIgPSBvYmplY3Q7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gYXJyYXkoa2V5LCBhLCBiLCBvcHRpb25zKSB7XG4gICAgdmFyIHZhbHVlID0gW107XG4gICAgdmFyIHN1YnNwcmluZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgc3Vic3ByaW5ncy5wdXNoKGdldFNwcmluZyhpLCBhW2ldLCBiW2ldLCBvcHRpb25zKSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICB0aWNrOiBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICAgICAgICB2YXIgYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN1YnNwcmluZ3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3Vic3ByaW5nc1tpXS50aWNrKHZhbHVlKSlcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0W2tleV0gPSBiO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAob2JqZWN0LCBvcHRpb25zKSB7XG4gICAgICAgICAgICBjaGVja0NvbXBhdGliaWxpdHkob2JqZWN0LCBiKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgc3Vic3ByaW5nc1tpXS51cGRhdGUob2JqZWN0W2ldLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGIgPSBvYmplY3Q7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gb2JqZWN0KGtleSwgYSwgYiwgb3B0aW9ucykge1xuICAgIHZhciB2YWx1ZSA9IHt9O1xuICAgIHZhciBzdWJzcHJpbmdzID0gW107XG4gICAgZm9yICh2YXIgayBpbiBhKSB7XG4gICAgICAgIHN1YnNwcmluZ3MucHVzaChnZXRTcHJpbmcoaywgYVtrXSwgYltrXSwgb3B0aW9ucykpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgdGljazogZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICAgICAgdmFyIGFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdWJzcHJpbmdzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN1YnNwcmluZ3NbaV0udGljayh2YWx1ZSkpXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIG9iamVjdFtrZXldID0gYjtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKG9iamVjdCwgb3B0aW9ucykge1xuICAgICAgICAgICAgY2hlY2tDb21wYXRpYmlsaXR5KG9iamVjdCwgYik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN1YnNwcmluZ3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBzdWJzcHJpbmdzW2ldLnVwZGF0ZShvYmplY3Rbc3Vic3ByaW5nc1tpXS5rZXldLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGIgPSBvYmplY3Q7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gY2hlY2tDb21wYXRpYmlsaXR5KGEsIGIpIHtcbiAgICB2YXIgdHlwZSA9IHR5cGVvZiBhO1xuICAgIGlmICh0eXBlICE9PSB0eXBlb2YgYiB8fCBBcnJheS5pc0FycmF5KGEpICE9PSBBcnJheS5pc0FycmF5KGIpIHx8IGlzRGF0ZShhKSAhPT0gaXNEYXRlKGIpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGludGVycG9sYXRlIHZhbHVlcyBvZiBkaWZmZXJlbnQgdHlwZScpO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKCFhIHx8ICFiKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdPYmplY3QgY2Fubm90IGJlIG51bGwnKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgICAgICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBpbnRlcnBvbGF0ZSBhcnJheXMgb2YgZGlmZmVyZW50IGxlbmd0aCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFrZXlzTWF0Y2goYSwgYikpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgaW50ZXJwb2xhdGUgZGlmZmVyZW50bHktc2hhcGVkIG9iamVjdHMnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlICE9PSAnbnVtYmVyJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgaW50ZXJwb2xhdGUgXCIgKyB0eXBlICsgXCIgdmFsdWVzXCIpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldFNwcmluZyhrZXksIGEsIGIsIG9wdGlvbnMpIHtcbiAgICBpZiAoYSA9PT0gYiB8fCBhICE9PSBhKVxuICAgICAgICByZXR1cm4gc25hcCQxKGtleSwgYSwgYiwgb3B0aW9ucyk7XG4gICAgY2hlY2tDb21wYXRpYmlsaXR5KGEsIGIpO1xuICAgIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJheShrZXksIGEsIGIsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0RhdGUoYSkpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRlKGtleSwgYSwgYiwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iamVjdChrZXksIGEsIGIsIG9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gbnVtYmVyKGtleSwgYSwgYiwgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBzcHJpbmcoa2V5LCB0bywgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgaWYgKCF0aGlzLl9zcHJpbmdzKSB7XG4gICAgICAgIHRoaXMuX3NwcmluZ3MgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9zcHJpbmdDYWxsYmFja3MgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9zcHJpbmdpbmcgPSBmYWxzZTtcbiAgICAgICAgdmFyIHNldF8xID0gdGhpcy5zZXQ7XG4gICAgICAgIHRoaXMuc2V0ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGlmICghX3RoaXMuX3NwcmluZ2luZykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleV8xIGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIF90aGlzLl9zcHJpbmdzW2tleV8xXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRfMS5jYWxsKF90aGlzLCBkYXRhKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NwcmluZ3Nba2V5XSkge1xuICAgICAgICB0aGlzLl9zcHJpbmdzW2tleV0udXBkYXRlKHRvLCBvcHRpb25zKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBzcHJpbmdfMiA9IGdldFNwcmluZyhrZXksIHRoaXMuZ2V0KGtleSksIHRvLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5fc3ByaW5nc1trZXldID0gc3ByaW5nXzI7XG4gICAgfVxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKGZ1bGZpbCkge1xuICAgICAgICBfdGhpcy5fc3ByaW5nQ2FsbGJhY2tzW2tleV0gPSBmdWxmaWw7XG4gICAgfSk7XG4gICAgc2NoZWR1bGVyJDEuYWRkKHRoaXMpO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuZnVuY3Rpb24ga2V5c01hdGNoKGEsIGIpIHtcbiAgICB2YXIgYUtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICB2YXIgYktleXMgPSBPYmplY3Qua2V5cyhiKTtcbiAgICBpZiAoYUtleXMubGVuZ3RoICE9PSBiS2V5cy5sZW5ndGgpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFLZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICghKGFLZXlzW2ldIGluIGIpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IHsgcHVzaCwgcG9wLCBzaGlmdCwgdW5zaGlmdCwgc3BsaWNlLCBzb3J0LCByZXZlcnNlLCB0d2Vlbiwgb2JzZXJ2ZURlZXAsIGdldERlZXAsIHNldERlZXAsIHNwcmluZyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3ZlbHRlLWV4dHJhcy9kaXN0L3N2ZWx0ZS1leHRyYXMuZXMuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJ5X3ZhcnNcIjpbe1wibmFtZVwiOlwiZGVjb3JyZWxhdGVcIixcImxhYmVsXCI6XCJEZWNvcnJlbGF0ZWQgU3BhY2VcIixcInR5cGVcIjpcImJpbmFyeVwiLFwiZGVmYXVsdFwiOjAsXCJ2YWx1ZXNcIjpbMCwxXX0se1wibmFtZVwiOlwidHJhbnNmb3Jtc1wiLFwibGFiZWxcIjpcIlRyYW5zZm9ybWF0aW9uIFJvYnVzdG5lc3NcIixcInR5cGVcIjpcImJpbmFyeVwiLFwiZGVmYXVsdFwiOjAsXCJ2YWx1ZXNcIjpbMCwxXX0se1wibmFtZVwiOlwibGVhcm5pbmdfcmF0ZVwiLFwibGFiZWxcIjpcIkxlYXJuaW5nIFJhdGVcIixcInR5cGVcIjpcIm51bWJlclwiLFwiZGVmYXVsdFwiOjAuMSxcInZhbHVlc1wiOlswLjAxLDAuMDI1LDAuMDUsMC4xLDAuMjVdfV0sXCJ4X3ZhcnNcIjpbe1wibmFtZVwiOlwibmV1cm9uc1wiLFwibGFiZWxcIjpcIm5ldXJvbnNcIixcInR5cGVcIjpcImljb25cIixcInZhbHVlc1wiOltcIm1peGVkNGI6NDUyXCIsXCJtaXhlZDRiOjQ2NVwiLFwibWl4ZWQ0Yjo0NzVcIixcIm1peGVkNGI6NDY0XCIsXCJtaXhlZDRjOjQ1MFwiLFwibWl4ZWQ0ZDo0NzlcIl19LHtcIm5hbWVcIjpcInN0ZXBzXCIsXCJsYWJlbFwiOlwic3RlcHNcIixcInR5cGVcIjpcIm51bWJlclwiLFwiZGVmYXVsdFwiOjQsXCJ2YWx1ZXNcIjpbMSw0OCwxMjgsMjU2LDIwNDhdfV0sXCJzaXplXCI6Njh9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zdGF0aWMvaW1hZ2VzL1ByZWNvbmRpdGlvbmVyLmpzb25cbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEdvb2dsZU5ldEV4YW1wbGVzICAgICBmcm9tIFwiLi9kaWFncmFtcy9Hb29nbGVOZXRFeGFtcGxlcy5odG1sXCI7XG5pbXBvcnQgSW1hZ2VBcnJheSAgICAgICAgICAgIGZyb20gXCIuL2RpYWdyYW1zL0ltYWdlQXJyYXkuaHRtbFwiO1xuaW1wb3J0IE9wdEV4cGxvcmUgICAgICAgICAgICBmcm9tIFwiLi9kaWFncmFtcy9PcHRFeHBsb3JlLmh0bWxcIjtcbmltcG9ydCBPcHRFeHBsb3JlMiAgICAgICAgICAgZnJvbSBcIi4vZGlhZ3JhbXMvT3B0RXhwbG9yZTIuaHRtbFwiO1xuaW1wb3J0IE9wdEV4cGxvcmVGbGV4ICAgICAgICBmcm9tIFwiLi9kaWFncmFtcy9PcHRFeHBsb3JlRmxleC5odG1sXCI7XG5pbXBvcnQgR3JhZEFydGlmYWN0cyAgICAgICAgIGZyb20gXCIuL2RpYWdyYW1zL0dyYWRBcnRpZmFjdHMuaHRtbFwiO1xuLy8gaW1wb3J0IFJlZ1JldmlldyAgICAgICAgICAgICBmcm9tIFwiLi9kaWFncmFtcy9SZWdSZXZpZXcuaHRtbFwiO1xuaW1wb3J0IE9wdEFuZEV4YW1wbGVzICAgICAgICBmcm9tIFwiLi9kaWFncmFtcy9PcHRBbmRFeGFtcGxlcy5odG1sXCI7XG5pbXBvcnQgTGluZWFyQ29tYmluYXRpb25zICAgIGZyb20gXCIuL2RpYWdyYW1zL0xpbmVhckNvbWJpbmF0aW9ucy5odG1sXCI7XG5pbXBvcnQgT3B0UHJvZ3Jlc3MgICAgICAgICAgIGZyb20gXCIuL2RpYWdyYW1zL09wdFByb2dyZXNzLmh0bWxcIjtcbmltcG9ydCBFeGFtcGxlc09wdENvbXBhcmlzb24gZnJvbSBcIi4vZGlhZ3JhbXMvRXhhbXBsZXNPcHRDb21wYXJpc29uLmh0bWxcIjtcbmltcG9ydCBSYW5kb21FeGFtcGxlc09wdCAgICAgZnJvbSBcIi4vZGlhZ3JhbXMvUmFuZG9tRXhhbXBsZXNPcHQuaHRtbFwiO1xuXG5cblxuLy8gbG9hZCBHb29nbGVOZXRFeGFtcGxlcyBpbW1lZGlhdGVseVxuXG5uZXcgR29vZ2xlTmV0RXhhbXBsZXMoe3RhcmdldDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnb29nbGVuZXQtZXhhbXBsZXNcIil9KTtcblxuLy8gc3ByaXRlIGRyaXZlbiBmaWd1cmVzXG5cbntcbiAgY29uc3QgZmlndXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleGFtcGxlLW9wdGltaXphdGlvbi1jb21wYXJpc29uXCIpO1xuICBmaWd1cmUuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5XCIsIGZ1bmN0aW9uKCkge1xuICAgIG5ldyBFeGFtcGxlc09wdENvbXBhcmlzb24oe3RhcmdldDogZmlndXJlfSk7XG4gIH0pO1xufVxuXG57XG4gIGNvbnN0IGZpZ3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmFuZG9tLW9wdGltaXphdGlvbi1hbmQtZXhhbXBsZXNcIik7XG4gIGZpZ3VyZS5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlcIiwgZnVuY3Rpb24oKSB7XG4gICAgbmV3IFJhbmRvbUV4YW1wbGVzT3B0KHt0YXJnZXQ6IGZpZ3VyZX0pO1xuICB9KTtcbn1cblxue1xuICBjb25zdCBmaWd1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wdC1wcm9ncmVzc1wiKVxuICBmaWd1cmUuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5XCIsIGZ1bmN0aW9uKCkge1xuICAgIG5ldyBPcHRQcm9ncmVzcyh7dGFyZ2V0OiBmaWd1cmV9KTtcbiAgfSk7XG59XG5cbntcbiAgY29uc3QgZmlndXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lYXItY29tYmluYXRpb25zXCIpXG4gIGZpZ3VyZS5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlcIiwgZnVuY3Rpb24oKSB7XG4gICAgbmV3IExpbmVhckNvbWJpbmF0aW9ucyh7dGFyZ2V0OiBmaWd1cmV9KTtcbiAgfSk7XG59XG5cbi8vIHtcbi8vICAgY29uc3QgZmlndXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmZWF0dXJlLXZpcy1oaXN0b3J5XCIpXG4vLyAgIGZpZ3VyZS5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlcIiwgZnVuY3Rpb24oKSB7XG4vLyAgICAgbmV3IFJlZ1Jldmlldyh7dGFyZ2V0OiBmaWd1cmV9KTtcbi8vICAgfSk7XG4vLyB9XG5cbntcbiAgY29uc3QgZmlndXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcHRpbWl6YXRpb24tYW5kLWV4YW1wbGVzXCIpO1xuICBmaWd1cmUuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5XCIsIGZ1bmN0aW9uKCkge1xuICAgIG5ldyBPcHRBbmRFeGFtcGxlcyh7dGFyZ2V0OiBmaWd1cmV9KTtcbiAgfSk7XG59XG5cbntcbiAgY29uc3QgZmlndXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmVxdWVuY3ktYXJ0aWZhY3RzXCIpO1xuICBmaWd1cmUuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5XCIsIGZ1bmN0aW9uKCkge1xuICAgIG5ldyBHcmFkQXJ0aWZhY3RzKHt0YXJnZXQ6IGZpZ3VyZX0pO1xuICB9KTtcbn1cblxuLy8gaW1hZ2UgYXJyYXlzXG5cbntcbiAgY29uc3QgZmlndXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGVlcGVzdC1kZXNjZW50XCIpO1xuICBmaWd1cmUuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5XCIsIGZ1bmN0aW9uKCkge1xuICAgIG5ldyBJbWFnZUFycmF5KHt0YXJnZXQ6IGZpZ3VyZSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgc3JjX2NsYXNzOiBcInN0ZWVwc3QtZGlyLXNwcml0ZVwiLFxuICAgICAgICBpY29uX3NyY19jbGFzczogXCJzdGVlcHN0LWRpci1zcHJpdGVcIixcbiAgICAgICAgaWNvbl94OiAwLFxuICAgICAgICBsYWJlbF9mdW5jOiAobiwgaSkgPT4gW1xuICAgICAgICAgIFwiSW1hZ2VcIixcbiAgICAgICAgICBcIjxzdHJvbmc+TDxzdXA+4oiePC9zdXA+IG1ldHJpYzwvc3Ryb25nPiA8YnI+dXNlZCBpbiBhZHZlcnNlcmlhbCB3b3JrXCIsXG4gICAgICAgICAgXCI8c3Ryb25nPkw8c3VwPjI8L3N1cD4gbWV0cmljPC9zdHJvbmc+IDxicj5yZWd1bGFyIGdyYWRpZW50XCIsXG4gICAgICAgICAgXCI8c3Ryb25nPmRlY29ycmVsYXRlZCBzcGFjZTwvc3Ryb25nPlwiXG4gICAgICAgICAgXVtuXSxcbiAgICAgICAgbl9pbWFnZXM6IDQsXG4gICAgICAgIG5faWNvbnM6IDE0LFxuICAgICAgICBzcHJpdGVfc2l6ZTogMjI0LCBcbiAgICAgICAgc2l6ZTogMTcwLFxuICAgICAgICBpY29uX3NjYWxlOiAxLFxuICAgICAgICBob3Zlcl9zY2FsZTogMSxcbiAgICAgICAgc2VsZWN0ZWQ6IDksXG4gICAgICAgIGJhY2t3YXJkczogZmFsc2VcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbntcbiAgY29uc3QgZmlndXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnRlcnBvbGF0aW9uXCIpO1xuICBmaWd1cmUuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5XCIsIGZ1bmN0aW9uKCkge1xuICAgIG5ldyBJbWFnZUFycmF5KHt0YXJnZXQ6IGZpZ3VyZSxcbiAgICBkYXRhOiB7XG4gICAgICBzcmNfY2xhc3M6IFwiaW50ZXJwb2xhdGlvbi1zcHJpdGVcIixcbiAgICAgIGljb25fc3JjX2NsYXNzOiBcImludGVycG9sYXRpb24tc3ByaXRlXCIsXG4gICAgICBpY29uX3g6IDAsXG4gICAgICBsYWJlbF9mdW5jOiAobiwgaSkgPT4ge1xuICAgICAgICBpZiAobiA9PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIFwiTGF5ZXIgNGEsIFVuaXQgNDc2XCIsXG4gICAgICAgICAgICBcIkxheWVyIDRhLCBVbml0IDQ3NlwiLFxuICAgICAgICAgICAgXCJMYXllciA0YSwgVW5pdCA0NjBcIixcbiAgICAgICAgICAgIFwiTGF5ZXIgNGIsIFVuaXQgNDc1XCIsXG4gICAgICAgICAgICBcIkxheWVyIDRjLCBVbml0IDM2OVwiLFxuICAgICAgICAgICAgXCJMYXllciA0ZCwgVW5pdCA1MDNcIixcbiAgICAgICAgICAgIFwiTGF5ZXIgNGQsIFVuaXQgNTAzXCIsXG4gICAgICAgICAgICBcIkxheWVyIDVhLCBVbml0IDgxMFwiLFxuICAgICAgICAgICAgXCJMYXllciA1YSwgVW5pdCA4MTBcIixcbiAgICAgICAgICBdW2ldO1xuICAgICAgICB9IGVsc2UgaWYgKG4gPT0gNSkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBcIkxheWVyIDRhLCBVbml0IDQ1NVwiLFxuICAgICAgICAgICAgXCJMYXllciA0YSwgVW5pdCA0NjBcIixcbiAgICAgICAgICAgIFwiTGF5ZXIgNGEsIFVuaXQgNTAxXCIsXG4gICAgICAgICAgICBcIkxheWVyIDRhLCBVbml0IDQ3NlwiLFxuICAgICAgICAgICAgXCJMYXllciA0YSwgVW5pdCA0NzZcIixcbiAgICAgICAgICAgIFwiTGF5ZXIgNWEsIFVuaXQgNzkxXCIsXG4gICAgICAgICAgICBcIkxheWVyIDVhLCBVbml0IDgxMFwiLFxuICAgICAgICAgICAgXCJMYXllciA1YSwgVW5pdCAyMDBcIixcbiAgICAgICAgICAgIFwiTGF5ZXIgNWEsIFVuaXQgNzkxXCIsXG4gICAgICAgICAgXVtpXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG5faW1hZ2VzOiA2LFxuICAgICAgbl9pY29uczogOSxcbiAgICAgIHNwcml0ZV9zaXplOiAxMjgsIFxuICAgICAgc2l6ZTogMTI4LFxuICAgICAgaWNvbl9zY2FsZTogMSxcbiAgICAgIGhvdmVyX3NjYWxlOiAxLFxuICAgICAgc2VsZWN0ZWQ6IDEsXG4gICAgICBiYWNrd2FyZHM6IGZhbHNlXG4gICAgfX0pO1xuICB9KTtcbn1cblxuLy8gb3B0aW1pemF0aW9uIGV4cGxvcmUgd2lkZ2V0c1xuXG5jb25zdCBPcHRFeHBsb3JlRmxleF9jb25maWdzID0ge1xuICBcbiAgT3B0RXhwbG9yZU5haXZlOiB7XG4gICAgY29uZmlndXJhYmxlOiBbXCJuZXVyb25zXCIsIFwibGVhcm5pbmdfcmF0ZVwiXSxcbiAgICBpY29uX3Zhcl92YWx1ZXM6IHtkZWNvcnJlbGF0ZTogMSwgdHJhbnNmb3JtczogMX0sXG4gICAgdmFyX3ZhbHVlczoge2RlY29ycmVsYXRlOiAwLCBsZWFybmluZ19yYXRlOiAyLCB0cmFuc2Zvcm1zOiAwfSxcbiAgICBjb25maWc6IHJlcXVpcmUoJy4uL3N0YXRpYy9pbWFnZXMvUHJlY29uZGl0aW9uZXIuanNvbicpXG4gIH0sXG4gIFxuICBQZW5hbGl6ZUZyZXE6IHtcbiAgICBjb25maWd1cmFibGU6IFtcIm5ldXJvbnNcIiwgXCJsMVwiLCBcInR2XCIsIFwiYmx1clwiXSxcbiAgICB2YXJfdmFsdWVzOiB7bDE6IDEsIHR2OiAyLCBibHVyOiAyfSxcbiAgICBpY29uX3Zhcl92YWx1ZXM6IHtsMTogMSwgdHY6IDMsIGJsdXI6IDN9LFxuICAgIGNvbmZpZzogcmVxdWlyZSgnLi4vc3RhdGljL2ltYWdlcy9QZW5hbGl6ZUZyZXEuanNvbicpXG4gIH0sXG4gIFxuICBUcmFuc2Zvcm1FeHBsb3JlOiB7XG4gICAgY29uZmlndXJhYmxlOiBbXCJuZXVyb25zXCIsIFwiaml0dGVyXCIsIFwicmFuZG9tX3JvdGF0ZVwiLCBcInJhbmRvbV9zY2FsZVwiXSxcbiAgICBpY29uX3Zhcl92YWx1ZXM6IHtqaXR0ZXI6IDMsIHJhbmRvbV9yb3RhdGU6IDIsIHJhbmRvbV9zY2FsZTogMn0sXG4gICAgdmFyX3ZhbHVlczoge2ppdHRlcjogMSwgcmFuZG9tX3JvdGF0ZTogMSwgcmFuZG9tX3NjYWxlOiAxfSxcbiAgICBjb25maWc6IHJlcXVpcmUoJy4uL3N0YXRpYy9pbWFnZXMvVHJhbnNmb3JtRXhwbG9yZS5qc29uJylcbiAgfSxcbiAgXG4gIE9wdEV4cGxvcmU6IHtcbiAgICBjb25maWd1cmFibGU6IFtcIm5ldXJvbnNcIiwgXCJsZWFybmluZ19yYXRlXCIsIFtcImRlY29ycmVsYXRlXCIsIFwidHJhbnNmb3Jtc1wiXV0sXG4gICAgaWNvbl92YXJfdmFsdWVzOiB7ZGVjb3JyZWxhdGU6IDEsIHRyYW5zZm9ybXM6IDF9LFxuICAgIHZhcl92YWx1ZXM6IHtkZWNvcnJlbGF0ZTogMSwgbGVhcm5pbmdfcmF0ZTogMiwgdHJhbnNmb3JtczogMX0sXG4gICAgY29uZmlnOiByZXF1aXJlKCcuLi9zdGF0aWMvaW1hZ2VzL1ByZWNvbmRpdGlvbmVyLmpzb24nKVxuICB9XG59O1xuXG57XG4gIGNvbnN0IGZpZ3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3B0aW1pemUtbmFpdmVcIik7XG4gIGZpZ3VyZS5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlcIiwgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgYXBwID0gbmV3IE9wdEV4cGxvcmVGbGV4KHt0YXJnZXQ6IGZpZ3VyZX0pO1xuICAgIGFwcC5sb2FkX3Nwcml0ZW1hcChcIlByZWNvbmRpdGlvbmVyXCIsIE9wdEV4cGxvcmVGbGV4X2NvbmZpZ3MuT3B0RXhwbG9yZU5haXZlKVxuICB9KTtcbn1cblxue1xuICBjb25zdCBmaWd1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wdC1leHBsb3JlMlwiKTtcbiAgZmlndXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeVwiLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBhcHAgPSBuZXcgT3B0RXhwbG9yZUZsZXgoe3RhcmdldDogZmlndXJlfSk7XG4gICAgYXBwLmxvYWRfc3ByaXRlbWFwKFwiUHJlY29uZGl0aW9uZXJcIiwgT3B0RXhwbG9yZUZsZXhfY29uZmlncy5PcHRFeHBsb3JlKVxuICB9KTtcbn1cblxue1xuICBjb25zdCBmaWd1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZ3VsYXJpemVyLXBsYXlncm91bmQtcm9idXN0XCIpO1xuICBmaWd1cmUuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5XCIsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGFwcCA9IG5ldyBPcHRFeHBsb3JlRmxleCh7dGFyZ2V0OiBmaWd1cmV9KTtcbiAgICBhcHAubG9hZF9zcHJpdGVtYXAoXCJUcmFuc2Zvcm1FeHBsb3JlXCIsIE9wdEV4cGxvcmVGbGV4X2NvbmZpZ3MuVHJhbnNmb3JtRXhwbG9yZSlcbiAgfSk7XG59XG5cbntcbiAgY29uc3QgZmlndXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWd1bGFyaXplci1wbGF5Z3JvdW5kLWZyZXFcIik7XG4gIGZpZ3VyZS5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlcIiwgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgYXBwID0gbmV3IE9wdEV4cGxvcmVGbGV4KHt0YXJnZXQ6IGZpZ3VyZX0pO1xuICAgIGFwcC5sb2FkX3Nwcml0ZW1hcChcIlBlbmFsaXplRnJlcTJcIiwgT3B0RXhwbG9yZUZsZXhfY29uZmlncy5QZW5hbGl6ZUZyZXEpXG4gIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiPGRpdiBjbGFzcz1cImdvb2dsZW5ldC1leGFtcGxlc1wiPlxuICB7eyNlYWNoIHJhbmdlKDUpIGFzIHh9fVxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlXCI+XG4gICAgICA8IS0tPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvblwiPkVkZ2VzPC9zcGFuPi0tPlxuICAgICAgPGRpdiBjbGFzcz1cImltYWdlc1wiPlxuICAgICAgICB7eyNlYWNoIHJhbmdlKDYpIGFzIHl9fVxuICAgICAgICAgIDxTcHJpdGUgc3JjX2NsYXNzPSdzcHJpdGVfaGVybycgeD17e3h9fSB5PXt7eX19IGJpbmQ6c2l6ZSBiaW5kOnNwcml0ZV9zY2FsZSBob3Zlcj10cnVlLz5cbiAgICAgICAge3svZWFjaH19XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb25cIj48c3Ryb25nPnt7ZGVzY3JpcHRpb25zW3hdfX08L3N0cm9uZz4gKHt7bmFtZXNbeF19fSk8L3NwYW4+XG4gICAgPC9kaXY+XG4gIHt7L2VhY2h9fVxuPC9kaXY+XG5cbjxzdHlsZT5cblxuICAuc3ByaXRlX2hlcm8ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImltYWdlcy9zcHJpdGVfaGVyby5wbmdcIik7XG4gIH1cblxuICAuZ29vZ2xlbmV0LWV4YW1wbGVzIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAvKmdyaWQtY29sdW1uOiB0ZXh0LXN0YXJ0IC8gc2NyZWVuLWVuZDsqL1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLypvdmVyZmxvdy14OiBoaWRkZW47Ki9cbiAgICAvKm92ZXJmbG93LXk6IHZpc2libGU7Ki9cbiAgfVxuICBcbiAgLmdvb2dsZW5ldC1leGFtcGxlcyAuZXhhbXBsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgfVxuICBcbiAgLmdvb2dsZW5ldC1leGFtcGxlcyAuZXhhbXBsZSAuaW1hZ2VzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cbiAgXG4gIC5nb29nbGVuZXQtZXhhbXBsZXMgLmV4YW1wbGUgLmltYWdlcyA+ICoge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuICBcbiAgLmdvb2dsZW5ldC1leGFtcGxlcyAuaW5uZXIge1xuICAgIGltYWdlLXJlbmRlcmluZzogYXV0bztcbiAgfVxuICBcbiAgLmdvb2dsZW5ldC1leGFtcGxlcyAuZXhhbXBsZSAuaW1hZ2VzIHNwYW46bGFzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIC5nb29nbGVuZXQtZXhhbXBsZXMgLmV4YW1wbGU6bGFzdC1vZi10eXBlIHtcbiAgICAvKm1hcmdpbi1yaWdodDogMDsqL1xuICB9XG4gIC5nb29nbGVuZXQtZXhhbXBsZXMgPiBkaXY6bGFzdC1jaGlsZCB7XG4gIH1cbiAgXG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMC4yNWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICB9XG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTEwNXB4KSB7XG4gICAgLmdvb2dsZW5ldC1leGFtcGxlcyB7XG4gICAgICBncmlkLWNvbHVtbjogc2NyZWVuO1xuICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgXG4gICAgLmdvb2dsZW5ldC1leGFtcGxlcyAuZXhhbXBsZSAuaW1hZ2VzIHtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG4gICAgXG4gICAgLmdvb2dsZW5ldC1leGFtcGxlcyAuZXhhbXBsZSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIFxuICAgIC5nb29nbGVuZXQtZXhhbXBsZXMgLmV4YW1wbGU6bGFzdC1vZi10eXBlIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gICAgXG4gICAgLmdvb2dsZW5ldC1leGFtcGxlcyAuZXhhbXBsZSAuaW1hZ2VzIHtcbiAgICAgIG1heC13aWR0aDogIGNhbGMoKDEwMHB4ICogMikgKyAxMHB4KTtcbiAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoKDEwMHB4ICogMykgKyAxMHB4KTtcbiAgICB9XG4gIH1cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHsgICAgXG4gICAgLmdvb2dsZW5ldC1leGFtcGxlcyAuZXhhbXBsZSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgfVxuICAgIFxuICAgIC5nb29nbGVuZXQtZXhhbXBsZXMgLmV4YW1wbGUgLmltYWdlcyB7XG4gICAgICBtYXgtd2lkdGg6ICBjYWxjKCgxMjVweCAqIDIpICsgMTBweCk7XG4gICAgICBtaW4taGVpZ2h0OiBjYWxjKCgxMjVweCAqIDMpICsgMTBweCk7XG4gICAgfVxuICB9XG4gIFxuXG48L3N0eWxlPlxuXG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBTcHJpdGUgZnJvbSBcIi4vU3ByaXRlLmh0bWxcIjtcbiAgXG4gIGZ1bmN0aW9uIHJhbmdlKG4pe1xuICAgIHJldHVybiBBcnJheShuKS5maWxsKCkubWFwKChfLCBpKSA9PiBpKTtcbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuczogWzAsMSwyLDMsNCw1LDYsNyw4LDksMTAsMTEsMTIsMTMsMTQsMTUsMTYsMTcsMTgsMTksMjAsMjEsMjIsMjMsMjQsMjUsMjYsMjcsMjgsMjldLFxuICAgICAgICBzaXplOiAxMDAsXG4gICAgICAgIHNwcml0ZV9zY2FsZTogMS4wLFxuICAgICAgICBuYW1lczogW1xuICAgICAgICAgIFwibGF5ZXIgY29udjJkMFwiLFxuICAgICAgICAgIFwibGF5ZXIgbWl4ZWQzYVwiLFxuICAgICAgICAgIFwibGF5ZXIgbWl4ZWQ0YVwiLFxuICAgICAgICAgIFwibGF5ZXJzIG1peGVkNGIgJiBtaXhlZDRjXCIsXG4gICAgICAgICAgXCJsYXllcnMgbWl4ZWQ0ZCAmIG1peGVkNGVcIixcbiAgICAgICAgXSxcbiAgICAgICAgZGVzY3JpcHRpb25zOiBbXG4gICAgICAgICAgXCJFZGdlc1wiLFxuICAgICAgICAgIFwiVGV4dHVyZXNcIixcbiAgICAgICAgICBcIlBhdHRlcm5zXCIsXG4gICAgICAgICAgXCJQYXJ0c1wiLFxuICAgICAgICAgIFwiT2JqZWN0c1wiLFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBvbmNyZWF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLm1xID0gbWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDE0MDBweClcIik7XG4gICAgICB0aGlzLm1xLm9uY2hhbmdlID0gKGV2ZW50KSA9PiB0aGlzLnNldCh7c2l6ZTogZXZlbnQubWF0Y2hlcyA/IDEyNSA6IDEwMH0pO1xuICAgICAgdGhpcy5zZXQoe1xuICAgICAgICBzaXplOiB0aGlzLm1xLm1hdGNoZXMgPyAxMjUgOiAxMDAsXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHsgU3ByaXRlIH0sXG4gICAgaGVscGVyczogeyByYW5nZSB9LFxuICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaWFncmFtcy9Hb29nbGVOZXRFeGFtcGxlcy5odG1sIiwiXG48ZGl2IGNsYXNzPVwiaWNvbnNcIj5cbiAge3sjZWFjaCBpY29uX25zIGFzIG59fVxuICAgIDxkaXYgY2xhc3M9XCJpY29uIHt7KHNlbGVjdGVkID09IG4pPyAnc2VsZWN0ZWQnIDogJyd9fVwiXG4gICAgICAgICBvbjpjbGljaz0nc2V0KHtzZWxlY3RlZDogbn0pJ1xuICAgICAgPlxuICAgICAgICA8U3ByaXRlIGJpbmQ6c3JjX2NsYXNzPWljb25fc3JjX2NsYXNzIFxuICAgICAgICBzaXplPTQ0IFxuICAgICAgICBzcHJpdGVfc2l6ZT17e2ljb25fc2NhbGUqc3ByaXRlX3NpemV9fSBcbiAgICAgICAgeT17eygxLWljb25fc2NhbGUpLzIgKyBuL2ljb25fc2NhbGV9fSBcbiAgICAgICAgeD17eygxLWljb25fc2NhbGUpLzIgKyBpY29uX3gvaWNvbl9zY2FsZX19IFxuICAgICAgICBob3Zlcl9zY2FsZT17ezQ0L3Nwcml0ZV9zaXplL2ljb25fc2NhbGV9fSAvPlxuXG4gICAgPC9kaXY+XG4gIHt7L2VhY2h9fVxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiaW1hZ2VzXCI+XG4gIHt7I2VhY2ggaW1hZ2VfbnMgYXMgbn19XG4gICAgPGRpdj5cbiAgICAgIDxTcHJpdGUgYmluZDpzcmNfY2xhc3MgXG4gICAgICBiaW5kOnNpemUgXG4gICAgICBiaW5kOnNwcml0ZV9zaXplIFxuICAgICAgYmluZDp5PXNlbGVjdGVkIFxuICAgICAgeD17e259fSBcbiAgICAgICAgaG92ZXI9e3tmYWxzZX19ICAvPlxuICAgICAgPGJyIHN0eWxlPVwiY2xlYXI6bGVmdFwiPlxuICAgICAgPGZpZ2NhcHRpb24gc3R5bGU9XCJtYXgtd2lkdGg6IHt7c2l6ZX19cHg7XCIgPnt7e2xhYmVsX2Z1bmMobiwgc2VsZWN0ZWQpfX19PC9maWdjYXB0aW9uPlxuICAgIDwvZGl2PlxuICB7ey9lYWNofX1cbjwvZGl2PlxuXG5cbjxzdHlsZT5cblxuXG4uaWNvbnMge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xufVxuXG4uaWNvbnMgLmljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIFxuICBtYXJnaW4tbGVmdDogM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbn1cblxuLmljb25zIC5pY29uOmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4uaWNvbnMgLmljb246bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbi5pY29ucyAuaWNvbi5zZWxlY3RlZCB7XG4gIG9wYWNpdHk6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmY2NjAwO1xufVxuXG4uaWNvbiBkaXYge1xuICBvcGFjaXR5OiAwLjY2NjtcbiAgaW1hZ2UtcmVuZGVyaW5nOiBhdXRvO1xufVxuXG4uaWNvbi5zZWxlY3RlZCBkaXYge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uaW1hZ2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAvKmp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsqL1xuICB0b3A6IDBweDtcbn1cbi5pbWFnZXMgPiBkaXYge1xuICAvKndpZHRoOiAxODBweDsqL1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5pbWFnZXMgPiBkaXY6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5pbWFnZXMgZGl2IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG59XG5cbmZpZ2NhcHRpb24ge1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIC8qbWFyZ2luLWJvdHRvbTogNnB4OyovXG59XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgU3ByaXRlIGZyb20gXCIuL1Nwcml0ZS5odG1sXCI7XG4gIGZ1bmN0aW9uIHJhbmdlKG4sIGludmVydGVkKXtcbiAgICB2YXIgcmV0ID0gW107XG4gICAgaWYgKGludmVydGVkKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSkgcmV0LnB1c2gobi1pLTEpOyAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSkgcmV0LnB1c2goaSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuX2ljb25zOiA0LFxuICAgICAgICBuX2ltYWdlczogNixcbiAgICAgICAgc2VsZWN0ZWQ6IDAsXG4gICAgICAgIHNwcml0ZV9zaXplOiAxMjgsXG4gICAgICAgIHNpemU6IDE2MCxcbiAgICAgICAgc3JjX2NsYXNzOiBcIlwiLFxuICAgICAgICBsYWJlbF9mdW5jOiBuID0+IFwiSW1hZ2UgXCIgKyBuLFxuICAgICAgICBpY29uX3NyY19jbGFzczogXCJcIixcbiAgICAgICAgaWNvbl9zY2FsZTogMC41LFxuICAgICAgICBiYWNrd2FyZHM6IGZhbHNlXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgaWNvbl9uczogKG5faWNvbnMsIGJhY2t3YXJkcykgPT4gcmFuZ2Uobl9pY29ucywgYmFja3dhcmRzKSxcbiAgICAgIGltYWdlX25zOiBuX2ltYWdlcyA9PiByYW5nZShuX2ltYWdlcywgZmFsc2UpXG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7U3ByaXRlfVxuICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaWFncmFtcy9JbWFnZUFycmF5Lmh0bWwiLCI8ZGl2IGNsYXNzPVwib3B0LWV4cGxvcmVcIiA+XG4gIDxmaWdjYXB0aW9uIHN0eWxlPVwibWFyZ2luLWJvdHRvbToxMHB4O1wiPlxuICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDoge3soc2l6ZSArIDIwKSpuX2ltYWdlcy0yMH19cHg7XCI+XG4gICAgICA8IS0tPGRpdiBjbGFzcz1cImljb25zXCIgc3R5bGU9XCJmbG9hdDpsZWZ0OyBwYWRkaW5nLXJpZ2h0OiA2MHB4OyB3aWR0aDogMTQ1cHg7XCI+XG4gICAgICAgIHt7I2VhY2ggaWNvbl9ucyBhcyBufX1cbiAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICBjbGFzcz1cImljb24ge3soc2VsZWN0ZWQgPT0gbik/ICdzZWxlY3RlZCcgOiAnJ319XCJcbiAgICAgICAgICAgICAgb246Y2xpY2s9J3NldCh7c2VsZWN0ZWQ6IG59KSdcbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAge3svZWFjaH19XG4gICAgICA8L2Rpdj4tLT5cbiAgICAgIDxkaXYgc3R5bGU9XCJmbG9hdDpsZWZ0OyBwYWRkaW5nLXJpZ2h0OiA2MHB4O1wiPlxuICAgICAgICA8ZGl2PiBMZWFybmluZyBSYXRlICh7e2xlYXJuaW5nX3JhdGVfbGlzdFtbbGVhcm5pbmdfcmF0ZV1dfX0pPC9kaXY+XG4gICAgICAgIDxkaXY+PGlucHV0IGJpbmQ6dmFsdWU9bGVhcm5pbmdfcmF0ZSB0eXBlPVwicmFuZ2VcIiBtaW49MCBtYXg9e3tsZWFybmluZ19yYXRlX2xpc3QubGVuZ3RoLTF9fT48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT1cImZsb2F0OmxlZnQ7IHBhZGRpbmctcmlnaHQ6IDYwcHg7XCI+XG4gICAgICAgIDxsYWJlbD48aW5wdXQgYmluZDpjaGVja2VkPWppdHRlciB0eXBlPVwiY2hlY2tib3hcIj4gSml0dGVyPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPjxpbnB1dCBiaW5kOmNoZWNrZWQ9YWRhbSB0eXBlPVwiY2hlY2tib3hcIj4gQWRhbTwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9XCJmbG9hdDpsZWZ0OyBwYWRkaW5nLXJpZ2h0OiA2MHB4O1wiPlxuICAgICAgICA8bGFiZWw+PGlucHV0IGJpbmQ6Y2hlY2tlZD1weXJhbWlkIHR5cGU9XCJjaGVja2JveFwiPiBMYXBsYWNpYW4gUHlyYW1pZDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD48aW5wdXQgYmluZDpjaGVja2VkPWNvbG9yIHR5cGU9XCJjaGVja2JveFwiPiBGYW5jeSBDb2xvciBQYXJhbTwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxiciBzdHlsZT1cImNsZWFyOmxlZnQ7XCI+XG4gICAgPC9kaXY+XG4gIDwvZmlnY2FwdGlvbj5cbiAgPGRpdiBjbGFzcz1cImltYWdlc1wiIHN0eWxlPVwid2lkdGg6IDEwMCU7IGhlaWdodDoge3tzaXplKzIwfX1weDsgcG9zaXRpb246IHJlbGF0aXZlO1wiPlxuICAgIHt7I2VhY2ggaW1hZ2VfbnMgYXMgbn19XG4gICAgICA8ZGl2IHN0eWxlPVwibGVmdDoge3soc2l6ZSArIDIwKSpufX1weDsgd2lkdGg6IHt7c2l6ZX19cHg7IGhlaWdodDoge3tzaXplKzIwfX1weDtcIj5cbiAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbjoge3soc2l6ZS1zcHJpdGVfc2l6ZSkvMn19cHg7IHRyYW5zZm9ybTpzY2FsZSh7e3NpemUvc3ByaXRlX3NpemV9fSk7XCIgPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcHQtZXhwbG9yZS1zcHJpdGVzXCIgc3R5bGU9XCJ3aWR0aDp7e3Nwcml0ZV9zaXplfX1weDsgaGVpZ2h0Ont7c3ByaXRlX3NpemV9fXB4OyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAte3tzcHJpdGVfc2l6ZSpufX1weCAte3tzcHJpdGVfc2l6ZSp5fX1weDtcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmaWdjYXB0aW9uPnt7e2xhYmVsX2Z1bmMobil9fX08L2ZpZ2NhcHRpb24+XG4gICAgICA8L2Rpdj5cbiAgICB7ey9lYWNofX1cbiAgPC9kaXY+XG5cbjwvZGl2PlxuXG48c3R5bGU+XG5cbiAgLmljb25zIC5pY29uIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luOiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcbiAgfVxuXG4gIC5pY29ucyAuc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNBQUE7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggZ29sZCwgLTFweCAtMXB4IDNweCBnb2xkLCAtMXB4IDFweCAzcHggZ29sZCwgMXB4IC0xcHggM3B4IGdvbGQ7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xuICB9XG5cbiAgLmltYWdlcyA+IGRpdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG5cbiAgZmlnY2FwdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICB9XG5cbiAgLm9wdC1leHBsb3JlLXNwcml0ZXMgeyBiYWNrZ3JvdW5kOiB1cmwoXCJpbWFnZXMvZXhwbG9yZV9taXhlZDRjXzQ1MF9zcHJpdGVfMTI4LmpwZWdcIil9XG4gIFxuICBsYWJlbHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IFNwcml0ZSBmcm9tIFwiLi9TcHJpdGUuaHRtbFwiO1xuICBmdW5jdGlvbiByYW5nZShuKXtcbiAgICB2YXIgcmV0ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpIHJldC5wdXNoKGkpO1xuICAgIHJldHVybiByZXQ7XG4gIH1cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuX2ltYWdlczogNCxcbiAgICAgICAgc3ByaXRlX3NpemU6IDEzMixcbiAgICAgICAgc2l6ZTogMTgwLFxuICAgICAgICBqaXR0ZXI6IGZhbHNlLFxuICAgICAgICBhZGFtOiBmYWxzZSxcbiAgICAgICAgcHlyYW1pZDogZmFsc2UsXG4gICAgICAgIGNvbG9yOiBmYWxzZSxcbiAgICAgICAgbGVhcm5pbmdfcmF0ZTogMSxcbiAgICAgICAgbGVhcm5pbmdfcmF0ZV9saXN0OiBbMC4xLCAwLjAxLCAwLjAwMSwgMC4wMDAxXSxcbiAgICAgICAgbGFiZWxfZnVuYzogbiA9PiBcIlN0ZXAgXCIgKyAoOCpNYXRoLnBvdyg0LG4pKSxcbiAgICAgICAgc2VsZWN0ZWQ6IDAsXG4gICAgICAgIGljb25fbnM6IFswLDEsMiwzXSxcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICB5OiAoaml0dGVyLCBhZGFtLCBweXJhbWlkLCBjb2xvciwgbGVhcm5pbmdfcmF0ZSwgbGVhcm5pbmdfcmF0ZV9saXN0KSA9PlxuICAgICAgICAgIDEqY29sb3IgKyAyKnB5cmFtaWQgKyA0KmxlYXJuaW5nX3JhdGVcbiAgICAgICAgICArIDQqbGVhcm5pbmdfcmF0ZV9saXN0Lmxlbmd0aCphZGFtIFxuICAgICAgICAgICsgOCpsZWFybmluZ19yYXRlX2xpc3QubGVuZ3RoKmppdHRlcixcbiAgICAgIGltYWdlX25zOiBuX2ltYWdlcyA9PiByYW5nZShuX2ltYWdlcylcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtTcHJpdGV9XG4gIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpYWdyYW1zL09wdEV4cGxvcmUuaHRtbCIsIjxkaXYgY2xhc3M9XCJvcHQtZXhwbG9yZVwiID5cbiAgPGZpZ2NhcHRpb24gc3R5bGU9XCJtYXJnaW4tYm90dG9tOjEwcHg7XCI+XG4gICAgPGRpdiBzdHlsZT1cIndpZHRoOiB7eyhzaXplICsgMjApKm5faW1hZ2VzLTIwfX1weDtcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpY29uc1wiIHN0eWxlPVwiZmxvYXQ6bGVmdDsgcGFkZGluZy1yaWdodDogNDBweDsgd2lkdGg6IDIyMHB4O1wiPlxuICAgICAgICB7eyNlYWNoIGljb25fbnMgYXMgbn19XG4gICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgY2xhc3M9XCJpY29uIHt7KHNlbGVjdGVkID09IG4pPyAnc2VsZWN0ZWQnIDogJyd9fVwiXG4gICAgICAgICAgICAgIG9uOmNsaWNrPSdzZXQoe3NlbGVjdGVkOiBufSknXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3B0LWV4cGxvcmUtc3ByaXRlc1wiIHN0eWxlPVwiYmFja2dyb3VuZC1wb3NpdGlvbjogLXt7c3ByaXRlX3NpemUqKDQrbippY29uX25zLmxlbmd0aCl9fXB4IC17e3Nwcml0ZV9zaXplKjU4fX1weDsgd2lkdGg6NjRweDsgaGVpZ2h0OiA2NHB4OyB0cmFuc2Zvcm06IHNjYWxlKGNhbGMoIDQwIC8gNjQpKTsgbWFyZ2luOiAtMTJweDtcIj4gPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIHt7L2VhY2h9fVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPVwiZmxvYXQ6bGVmdDsgcGFkZGluZy1yaWdodDogNDBweDsgd2lkdGg6IDE1NXB4O1wiPlxuICAgICAgICA8ZGl2PiBMZWFybmluZyBSYXRlICh7e2xlYXJuaW5nX3JhdGVfbGlzdFtbbGVhcm5pbmdfcmF0ZV1dfX0pPC9kaXY+XG4gICAgICAgIDxkaXY+PGQtc2xpZGVyIHZhbHVlPWxlYXJuaW5nX3JhdGUgdHlwZT1cInJhbmdlXCIgbWluPTAgbWF4PXt7bGVhcm5pbmdfcmF0ZV9saXN0Lmxlbmd0aC0xfX0gc3R5bGU9XCJ3aWR0aDogMTAwcHg7XCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9XCJmbG9hdDpsZWZ0OyBwYWRkaW5nLXJpZ2h0OiAwcHg7IHdpZHRoOiA3MHB4O1wiPlxuICAgICAgICA8bGFiZWw+PGlucHV0IGJpbmQ6Y2hlY2tlZD1qaXR0ZXIgdHlwZT1cImNoZWNrYm94XCI+IEppdHRlcjwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD48aW5wdXQgYmluZDpjaGVja2VkPWFkYW0gdHlwZT1cImNoZWNrYm94XCI+IEFkYW08L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPVwiZmxvYXQ6bGVmdDsgcGFkZGluZy1yaWdodDogMHB4OyB3aWR0aDogMTUwcHg7XCI+XG4gICAgICAgIDxsYWJlbD48aW5wdXQgYmluZDpjaGVja2VkPXB5cmFtaWQgdHlwZT1cImNoZWNrYm94XCI+IExhcGxhY2lhbiBQeXJhbWlkPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPjxpbnB1dCBiaW5kOmNoZWNrZWQ9Y29sb3IgdHlwZT1cImNoZWNrYm94XCI+IEZhbmN5IENvbG9yIFBhcmFtPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJyIHN0eWxlPVwiY2xlYXI6bGVmdDtcIj5cbiAgICA8L2Rpdj5cbiAgPC9maWdjYXB0aW9uPlxuICA8ZGl2IGNsYXNzPVwiaW1hZ2VzXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiB7e3NpemUrMjB9fXB4OyBwb3NpdGlvbjogcmVsYXRpdmU7XCI+XG4gICAge3sjZWFjaCBpbWFnZV9ucyBhcyBufX1cbiAgICAgIDxkaXYgc3R5bGU9XCJsZWZ0OiB7eyhzaXplICsgNCkqbn19cHg7IHdpZHRoOiB7e3NpemV9fXB4OyBoZWlnaHQ6IHt7c2l6ZSsyMH19cHg7XCI+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW46IHt7KHNpemUtc3ByaXRlX3NpemUpLzJ9fXB4OyB0cmFuc2Zvcm06c2NhbGUoe3tzaXplL3Nwcml0ZV9zaXplfX0pO1wiID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwib3B0LWV4cGxvcmUtc3ByaXRlc1wiIHN0eWxlPVwid2lkdGg6e3tzcHJpdGVfc2l6ZX19cHg7IGhlaWdodDp7e3Nwcml0ZV9zaXplfX1weDsgYmFja2dyb3VuZC1wb3NpdGlvbjogLXt7c3ByaXRlX3NpemUqKG4rc2VsZWN0ZWQqaWNvbl9ucy5sZW5ndGgpfX1weCAte3tzcHJpdGVfc2l6ZSp5fX1weDtcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmaWdjYXB0aW9uPnt7e2xhYmVsX2Z1bmMobil9fX08L2ZpZ2NhcHRpb24+XG4gICAgICA8L2Rpdj5cbiAgICB7ey9lYWNofX1cbiAgPC9kaXY+XG5cbjwvZGl2PlxuXG48c3R5bGU+XG4uaWNvbnMgLmljb24ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG4gIC8qZmlsdGVyOiBicmlnaHRuZXNzKDgwJSkgc2F0dXJhdGUoMzAlKTsqL1xufVxuXG4uaWNvbnMgLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FBQTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggZ29sZCwgLTFweCAtMXB4IDNweCBnb2xkLCAtMXB4IDFweCAzcHggZ29sZCwgMXB4IC0xcHggM3B4IGdvbGQ7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxMDAlKTtcbn1cblxuICAuaW1hZ2VzID4gZGl2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cblxuICBmaWdjYXB0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgfVxuXG4gIC5vcHQtZXhwbG9yZS1zcHJpdGVzIHsgYmFja2dyb3VuZDogdXJsKFwiaW1hZ2VzL2V4cGxvcmVfb3B0X3Nwcml0ZW1hcF82NC5qcGVnXCIpfVxuICBcbiAgbGFiZWx7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBTcHJpdGUgZnJvbSBcIi4vU3ByaXRlLmh0bWxcIjtcbiAgZnVuY3Rpb24gcmFuZ2Uobil7XG4gICAgdmFyIHJldCA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKSByZXQucHVzaChpKTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbl9pbWFnZXM6IDUsXG4gICAgICAgIHNwcml0ZV9zaXplOiA2NCxcbiAgICAgICAgc2l6ZTogMTgwLFxuICAgICAgICBqaXR0ZXI6IHRydWUsXG4gICAgICAgIGFkYW06IGZhbHNlLFxuICAgICAgICBweXJhbWlkOiB0cnVlLFxuICAgICAgICBjb2xvcjogZmFsc2UsXG4gICAgICAgIGxlYXJuaW5nX3JhdGU6IDIsXG4gICAgICAgIGxlYXJuaW5nX3JhdGVfbGlzdDogWzUsIDEuMjUsIDAuMjUsIDAuMDUsIDAuMDEsIDAuMDAyXSxcbiAgICAgICAgbGFiZWxfZnVuYzogbiA9PiBcIlN0ZXAgXCIgKyAoOCpNYXRoLnBvdyg0LG4pKSxcbiAgICAgICAgc2VsZWN0ZWQ6IDAsXG4gICAgICAgIGljb25fbnM6IFswLDEsMiwzLDRdLFxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIHk6IChqaXR0ZXIsIGFkYW0sIHB5cmFtaWQsIGNvbG9yLCBsZWFybmluZ19yYXRlLCBsZWFybmluZ19yYXRlX2xpc3QpID0+XG4gICAgICAgICAgMSpjb2xvciArIDIqcHlyYW1pZCArIDQqbGVhcm5pbmdfcmF0ZVxuICAgICAgICAgICsgNCpsZWFybmluZ19yYXRlX2xpc3QubGVuZ3RoKmFkYW0gXG4gICAgICAgICAgKyA4KmxlYXJuaW5nX3JhdGVfbGlzdC5sZW5ndGgqaml0dGVyLFxuICAgICAgaW1hZ2VfbnM6IG5faW1hZ2VzID0+IHJhbmdlKG5faW1hZ2VzKVxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1Nwcml0ZX1cbiAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlhZ3JhbXMvT3B0RXhwbG9yZTIuaHRtbCIsIlxuPGRpdiBjbGFzcz1cImNvbnRyb2xzXCI+XG4gIHt7I2VhY2ggY29uZmlnX3Zhcl9ncm91cHMgYXMgY29uZmlnX3Zhcl9ncm91cH19XG4gICAgPGRpdiBjbGFzcz1cImNvbmZpZy1ncm91cFwiPlxuICAgICAge3sjZWFjaCBjb25maWdfdmFyX2dyb3VwIGFzIGNvbmZpZ192YXJ9fVxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29uZmlnIGNvbmZpZy17e2NvbmZpZ192YXIudHlwZX19XCIgZGF0YS1jb25maWctbmFtZT17e2NvbmZpZ192YXIubmFtZX19PlxuICAgICAgXG4gICAgICBcbiAgICAgICAgICB7eyNpZiBjb25maWdfdmFyLnR5cGUgPT0gXCJpY29uXCJ9fVxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImljb25zXCI+XG4gICAgICAgICAgICB7eyNlYWNoIHJhbmdlKGNvbmZpZ192YXIudmFsdWVzLmxlbmd0aCkgYXMgbn19XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz1cImljb24ge3sodmFyX3ZhbHVlc19zYWZlW2NvbmZpZ192YXIubmFtZV0gPT0gbik/ICdzZWxlY3RlZCcgOiAnJ319XCJcbiAgICAgICAgICAgICAgICBvbjpjbGljaz1cInNldERlZXAoJ3Zhcl92YWx1ZXMuJytjb25maWdfdmFyLm5hbWUsIG4pXCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiB7e2ljb25fc2l6ZX19cHg7IGhlaWdodDoge3tpY29uX3NpemV9fXB4O1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lclwiIHN0eWxlPVwibWFyZ2luOiB7eyhpY29uX3NpemUtc3ByaXRlX3NpemUpLzJ9fXB4OyB0cmFuc2Zvcm06c2NhbGUoe3tpY29uX3NpemUvc3ByaXRlX3NpemV9fSk7XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXJcIiBzdHlsZT1cIlxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHt7c3ByaXRlX2JhY2tncm91bmR9fTtcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7aWNvbl94X3Bvc19hZnRlcl9vdmVycmlkZShrZXl2YWx1ZShjb25maWdfdmFyLm5hbWUsIG4pKX19cHhcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7aWNvbl95X3Bvc19hZnRlcl9vdmVycmlkZShrZXl2YWx1ZShjb25maWdfdmFyLm5hbWUsIG4pKX19cHg7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHt7c3ByaXRlX3NpemV9fXB4O1xuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoge3tzcHJpdGVfc2l6ZX19cHg7XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3svZWFjaH19XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3svaWZ9fVxuICAgICAgXG4gICAgICAgICAge3sjaWYgY29uZmlnX3Zhci50eXBlID09IFwiYmluYXJ5XCJ9fVxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb246Y2hhbmdlPVwic2V0RGVlcCgndmFyX3ZhbHVlcy4nK2NvbmZpZ192YXIubmFtZSwgK3RoaXMuY2hlY2tlZClcIiBjaGVja2VkPVwie3t2YXJfdmFsdWVzX3NhZmVbY29uZmlnX3Zhci5uYW1lXX19XCI+XG4gICAgICAgICAgICAgIHt7e2h1bWFuX3JlYWRhYmxlKGNvbmZpZ192YXIubGFiZWwsIHN0cmluZ3MpfX19XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIHt7L2lmfX1cbiAgICAgICAgICBcbiAgICAgICAgICB7eyNpZiBjb25maWdfdmFyLnR5cGUgIT0gXCJiaW5hcnlcIiAmJiBjb25maWdfdmFyLnR5cGUgIT0gXCJpY29uXCIgfX1cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAge3t7aHVtYW5fcmVhZGFibGUoY29uZmlnX3Zhci5sYWJlbCwgc3RyaW5ncyl9fX1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+KHt7Y29uZmlnX3Zhci52YWx1ZXNbdmFyX3ZhbHVlc19zYWZlW2NvbmZpZ192YXIubmFtZV1dICsgKHVuaXRzLmdldChjb25maWdfdmFyLm5hbWUpIHx8ICcnKSB9fSk8L3NwYW4+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwid2lkdGg6IDEwMHB4O1wiPlxuICAgICAgICAgICAgICA8ZC1zbGlkZXIgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICBtaW49MSBtYXg9e3tjb25maWdfdmFyLnZhbHVlcy5sZW5ndGh9fSBzdGVwPXt7MX19IHRpY2tzXG4gICAgICAgICAgICAgICAgdmFsdWU9e3t2YXJfdmFsdWVzX3NhZmVbY29uZmlnX3Zhci5uYW1lXSsxfX1cbiAgICAgICAgICAgICAgICBvbjppbnB1dD1cInNldERlZXAoJ3Zhcl92YWx1ZXMuJytjb25maWdfdmFyLm5hbWUsIHRoaXMudmFsdWUtMSlcIj5cbiAgICAgICAgICAgICAgPC9kLXNsaWRlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHt7L2lmfX1cbiAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAge3svZWFjaH19XG4gICAgPC9kaXY+XG4gIHt7L2VhY2h9fVxuICB7eyNpZiBleHBsYWluX3RleHQgIT0gXCJcIn19XG4gICAgPGRpdiBjbGFzcz1cImV4cGxhaW5cIj5cbiAgICAgIHt7ZXhwbGFpbl90ZXh0fX1cbiAgICA8L2Rpdj5cbiAge3svaWZ9fVxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJpbWFnZXNcIj5cbiAge3sjZWFjaCBkaXNwbGF5X29mZnNldHMgYXMgb2Zmc2V0LCBpbmRleH19XG4gICAgPGRpdiBjbGFzcz1cIm91dGVyXCIgc3R5bGU9XCJ3aWR0aDoge3tzaXplfX1weDsgaGVpZ2h0OiB7e3NpemV9fXB4O1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImlubmVyXCIgc3R5bGU9XCJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHt7c3ByaXRlX2JhY2tncm91bmR9fTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHt7b2Zmc2V0Lnh9fXB4IHt7b2Zmc2V0Lnl9fXB4O1xuICAgICAgICAgICAgd2lkdGg6IHt7c3ByaXRlX3NpemV9fXB4OyBoZWlnaHQ6IHt7c3ByaXRlX3NpemV9fXB4O1xuICAgICAgICAgICAgbWFyZ2luOiB7eyhzaXplLXNwcml0ZV9zaXplKS8yfX1weDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSh7e3NpemUvc3ByaXRlX3NpemV9fSk7XCJcbiAgICAgICAgPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZmlnY2FwdGlvbj5cbiAgICAgICAgU3RlcCB7e3N0ZXBzW2luZGV4XX19XG4gICAgICA8L2ZpZ2NhcHRpb24+XG4gICAgPC9kaXY+XG4gIHt7L2VhY2h9fVxuPC9kaXY+XG5cbjxzdHlsZT5cblxuLmNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi8qIEljb25zICovXG5cbi5pY29ucyB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xufVxuXG4uaWNvbnMgLmljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIFxuICBtYXJnaW4tbGVmdDogM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbn1cblxuLmljb25zIC5pY29uOmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4uaWNvbnMgLmljb246bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbi5pY29ucyAuaWNvbi5zZWxlY3RlZCB7XG4gIG9wYWNpdHk6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmY2NjAwO1xufVxuXG4uaWNvbiBkaXYge1xuICBvcGFjaXR5OiAwLjY2NjtcbiAgaW1hZ2UtcmVuZGVyaW5nOiBhdXRvO1xufVxuXG4uaWNvbi5zZWxlY3RlZCBkaXYge1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBDb25maWcgR3JvdXAgKi9cblxuLmNvbmZpZy1ncm91cCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uY29uZmlnLWdyb3VwOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmNvbmZpZy1ncm91cCAuY29uZmlnIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jb25maWctYmluYXJ5IHtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5jb25maWctcmFuZ2Uge1xuICB3aWR0aDogMTQwcHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmNvbmZpZy1ncm91cCAuY29uZmlnIGlucHV0W3R5cGU9XCJyYW5nZVwiXSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi5jb25maWctZ3JvdXAgc3Bhbi52YWx1ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDM1cHg7XG59XG4gIFxuLmV4cGxhaW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMDBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmltYWdlcyB7XG59XG5cbi5pbWFnZXMgLm91dGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5pbWFnZXMgLm91dGVyOmxhc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi5pbm5lciB7XG4gIGltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xufVxuPC9zdHlsZT5cblxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBzZXREZWVwIH0gZnJvbSAnc3ZlbHRlLWV4dHJhcyc7XG5cbiAgZnVuY3Rpb24gcmFuZ2Uobil7XG4gICAgdmFyIHJldCA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKSByZXQucHVzaChpKTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG4gIFxuICBmdW5jdGlvbiBvYmpfdXBkYXRlKGEsIGIpe1xuICAgIHZhciByZXQgPSB7fTtcbiAgICBmb3IgKHZhciBrIGluIGEpIHJldFtrXSA9IGFba107XG4gICAgZm9yICh2YXIgayBpbiBiKSByZXRba10gPSBiW2tdO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBmdW5jdGlvbiB2YXJzX3RvX3Bvc2l0aW9uKGRpbV92YXJzLCB2YWxzKXtcbiAgICB2YXIgc3VtID0gMDtcbiAgICB2YXIgZGltX3NwYWNpbmcgPSAxO1xuICAgIHZhciBkaW1fc3BhY2luZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gZGltX3ZhcnMubGVuZ3RoLTE7IGkgPj0gMDsgaS0tKXtcbiAgICAgIGRpbV9zcGFjaW5ncy5wdXNoKGRpbV9zcGFjaW5nKTtcbiAgICAgIGRpbV9zcGFjaW5nICo9IGRpbV92YXJzW2ldLnZhbHVlcy5sZW5ndGg7XG4gICAgfVxuICAgIGRpbV9zcGFjaW5ncy5yZXZlcnNlKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaW1fdmFycy5sZW5ndGg7IGkrKyl7XG4gICAgICB2YXIgZGltX3ZhciA9IGRpbV92YXJzW2ldO1xuICAgICAgdmFyIHZhbCA9IHZhbHNbZGltX3Zhci5uYW1lXSB8fCAwO1xuICAgICAgc3VtICs9IHZhbCAqIGRpbV9zcGFjaW5nc1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIHN1bTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gc2VsZWN0X29ial9ieV9uYW1lKG9ianMsIG5hbWUpe1xuICAgIGZvciAodmFyIG9iaiBvZiBvYmpzKXtcbiAgICAgIGlmIChvYmoubmFtZSA9PSBuYW1lKXtcbiAgICAgICAgcmV0dXJuIG9ialxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBuYW1lcyA9IG9ianMubWFwKCBvID0+IG8ubmFtZSApXG4gICAgY29uc29sZS5lcnJvcihcIkRpZCBub3QgZmluZCBcIisgbmFtZSArIFwiIGluIFwiICsgbmFtZXMgKyBcIiFcIilcbiAgfVxuICBcbiAgZnVuY3Rpb24ga2V5dmFsdWUoayx2KXtcbiAgICB2YXIgcmV0ID0ge307XG4gICAgcmV0W2tdID0gdjtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cblxuICBmdW5jdGlvbiBsb2FkX3Nwcml0ZW1hcChuYW1lLCBzZXR0aW5ncykge1xuICAgIHRoaXMuc2V0KHtzcHJpdGVfcGF0aDogXCJpbWFnZXMvXCIgKyBuYW1lICsgXCIuanBnXCIsIH0pO1xuXG4gICAgY29uc3QgYWxsX3ZhcnMgPSBzZXR0aW5ncy5jb25maWcueF92YXJzLmNvbmNhdChzZXR0aW5ncy5jb25maWcueV92YXJzKTtcbiAgICBjb25zdCBzdGVwX3ZhciA9IGFsbF92YXJzLmZpbHRlcih2ID0+IHYubmFtZSA9PSBcInN0ZXBzXCIgfHwgdi5uYW1lID09IFwic3RlcFwiKVswXTtcbiAgICBjb25zdCBhZGp1c3RlZF9jb25maWcgPSB7XG4gICAgICBzcHJpdGVfc2l6ZTogc2V0dGluZ3MuY29uZmlnLnNpemUsXG4gICAgICB4X3ZhcnM6IHNldHRpbmdzLmNvbmZpZy54X3ZhcnMsXG4gICAgICB5X3ZhcnM6IHNldHRpbmdzLmNvbmZpZy55X3ZhcnMsXG4gICAgICBjb25maWd1cmFibGU6IGFsbF92YXJzXG4gICAgICAgIC5maWx0ZXIodiA9PiB2Lm5hbWUgIT0gXCJzdGVwc1wiICYmIHYudmFsdWVzLmxlbmd0aCA+IDApXG4gICAgICAgIC5tYXAodiA9PiB2Lm5hbWUpLFxuICAgICAgZGlzcGxheTogc3RlcF92YXIudmFsdWVzXG4gICAgICAgIC5tYXAoKHZhbCwgaSkgPT4ga2V5dmFsdWUoc3RlcF92YXIubmFtZSwgaSkpLFxuICAgIH1cbiAgICB0aGlzLnNldChhZGp1c3RlZF9jb25maWcpO1xuICAgIHRoaXMuc2V0KHNldHRpbmdzKTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gaHVtYW5fcmVhZGFibGUoa2V5LCBzdHJpbmdzKSB7XG4gICAgaWYgKHN0cmluZ3MuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBzdHJpbmdzLmdldChrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ga2V5LnNwbGl0KCdfJykubWFwKChzKSA9PiBzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcy5zbGljZSgxKSkuam9pbignICcpO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3ByaXRlbWFwX25hbWU6IFwiXCIsXG4gICAgICAgIHNwcml0ZV9wYXRoOiBcIlwiLFxuICAgICAgICBzaXplOiAxMzYsXG4gICAgICAgIHNwcml0ZV9zaXplOiAxLFxuICAgICAgICB4X3ZhcnM6IFtdLFxuICAgICAgICB5X3ZhcnM6IFtdLFxuICAgICAgICB2YXJfdmFsdWVzOiB7fSxcbiAgICAgICAgZGlzcGxheTogW3t9XSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBbXSxcbiAgICAgICAgZXhwbGFpbl90ZXh0OiBcIlwiLFxuICAgICAgICBpY29uX3NpemU6IDQ0LFxuICAgICAgICBpY29uX3Zhcl92YWx1ZXM6IHt9LFxuICAgICAgICBzdHJpbmdzOiBuZXcgTWFwKFtcbiAgICAgICAgICBbJ2RlZmF1bHRfdHJhbnNmb3JtcycsICdUcmFuc2Zvcm1zJ10sXG4gICAgICAgICAgWydweXJhbWlkJywgJ0RlY29ycmVsYXRlJ10sXG4gICAgICAgICAgWyd0dicsICdUb3RhbCBWYXJpYXRpb24nXSxcbiAgICAgICAgICBbJ2wxJywgJ0w8c3ViPjE8L3N1Yj4nXSxcbiAgICAgICAgICBbJ3JhbmRvbV9yb3RhdGUnLCAnUm90YXRlJ10sXG4gICAgICAgICAgWydyYW5kb21fc2NhbGUnLCAnU2NhbGUnXSxcbiAgICAgICAgICBbJ2xlYXJuaW5nIHJhdGUnLCAnTFInXSxcbiAgICAgICAgXSksXG4gICAgICAgIHVuaXRzOiBuZXcgTWFwKFtcbiAgICAgICAgICBbJ2ppdHRlcicsICdweCddLFxuICAgICAgICAgIFsncmFuZG9tX3JvdGF0ZScsICfCsCddLFxuICAgICAgICAgIFsncmFuZG9tX3NjYWxlJywgJ8OXJ10sXG4gICAgICAgIF0pLFxuICAgICAgICBzdGVwczogW1xuICAgICAgICAgIDEsIDMyLCAxMjgsIDI1NiwgMjA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgXG4gICAgICBzcHJpdGVfYmFja2dyb3VuZDogc3ByaXRlX3BhdGggPT4gXG4gICAgICAgIChzcHJpdGVfcGF0aCA9PSBcIlwiKT8gXCIjREREXCIgOiBcInVybChcIitzcHJpdGVfcGF0aCtcIilcIixcbiAgICAgIFxuICAgICAgYWxsX3ZhcnM6ICh4X3ZhcnMsIHlfdmFycykgPT4geF92YXJzLmNvbmNhdCh5X3ZhcnMpLFxuICAgICAgXG4gICAgICB2YXJfdmFsdWVzX3NhZmU6IChhbGxfdmFycywgdmFyX3ZhbHVlcykgPT4ge1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgY29uZmlnX3ZhciBvZiBhbGxfdmFycyl7XG4gICAgICAgICAgZGVmYXVsdHNbY29uZmlnX3Zhci5uYW1lXSA9IGNvbmZpZ192YXIuZGVmYXVsdCB8fCAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmpfdXBkYXRlKGRlZmF1bHRzLCB2YXJfdmFsdWVzKTtcbiAgICAgIH0sXG4gICAgICBcbiAgICAgIGljb25fdmFyX3ZhbHVlc19zYWZlOiAoYWxsX3ZhcnMsIHZhcl92YWx1ZXMsIGljb25fdmFyX3ZhbHVlcykgPT4ge1xuICAgICAgICB2YXIgdmFsdWVzID0ge307XG4gICAgICAgIGZvciAodmFyIGNvbmZpZ192YXIgb2YgYWxsX3ZhcnMpe1xuICAgICAgICAgIHZhciBuYW1lID0gY29uZmlnX3Zhci5uYW1lO1xuICAgICAgICAgIHZhbHVlc1tuYW1lXSA9IGljb25fdmFyX3ZhbHVlc1tuYW1lXSB8fCBjb25maWdfdmFyLmRlZmF1bHQgfHwgdmFyX3ZhbHVlc1tuYW1lXSB8fCAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICB9LFxuICAgICAgXG4gICAgICBjb25maWdfdmFyX2dyb3VwczogKGFsbF92YXJzLCBjb25maWd1cmFibGUpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gIGNvbmZpZ3VyYWJsZS5tYXAoZ3JvdXAgPT4ge1xuICAgICAgICAgIGlmICghKGdyb3VwIGluc3RhbmNlb2YgQXJyYXkpKSBncm91cCA9IFtncm91cF07XG4gICAgICAgICAgcmV0dXJuIGdyb3VwXG4gICAgICAgICAgICAubWFwKGNvbmZpZ192YXJfbmFtZSA9PiBzZWxlY3Rfb2JqX2J5X25hbWUoYWxsX3ZhcnMsIGNvbmZpZ192YXJfbmFtZSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0sXG4gICAgICBcbiAgICAgIHhfcG9zX2FmdGVyX292ZXJyaWRlOiAoeF92YXJzLCB2YXJfdmFsdWVzX3NhZmUsIHNwcml0ZV9zaXplKSA9PiAoXG4gICAgICAgICh2YXJfdmFsdWVfb3ZlcnJpZGUpID0+IC1zcHJpdGVfc2l6ZSp2YXJzX3RvX3Bvc2l0aW9uKHhfdmFycywgb2JqX3VwZGF0ZSh2YXJfdmFsdWVzX3NhZmUsIHZhcl92YWx1ZV9vdmVycmlkZSkpXG4gICAgICApLFxuICAgICAgXG4gICAgICB5X3Bvc19hZnRlcl9vdmVycmlkZTogKHlfdmFycywgdmFyX3ZhbHVlc19zYWZlLCBzcHJpdGVfc2l6ZSkgPT4gKFxuICAgICAgICAodmFyX3ZhbHVlX292ZXJyaWRlKSA9PiAtc3ByaXRlX3NpemUqdmFyc190b19wb3NpdGlvbih5X3ZhcnMsIG9ial91cGRhdGUodmFyX3ZhbHVlc19zYWZlLCB2YXJfdmFsdWVfb3ZlcnJpZGUpKVxuICAgICAgKSxcbiAgICBcbiAgICAgIGljb25feF9wb3NfYWZ0ZXJfb3ZlcnJpZGU6ICh4X3ZhcnMsIGljb25fdmFyX3ZhbHVlc19zYWZlLCBzcHJpdGVfc2l6ZSkgPT4gKFxuICAgICAgICAodmFyX3ZhbHVlX292ZXJyaWRlKSA9PiAtc3ByaXRlX3NpemUqdmFyc190b19wb3NpdGlvbih4X3ZhcnMsIG9ial91cGRhdGUoaWNvbl92YXJfdmFsdWVzX3NhZmUsIHZhcl92YWx1ZV9vdmVycmlkZSkpXG4gICAgICApLFxuICAgICAgXG4gICAgICBpY29uX3lfcG9zX2FmdGVyX292ZXJyaWRlOiAoeV92YXJzLCBpY29uX3Zhcl92YWx1ZXNfc2FmZSwgc3ByaXRlX3NpemUpID0+IChcbiAgICAgICAgKHZhcl92YWx1ZV9vdmVycmlkZSkgPT4gLXNwcml0ZV9zaXplKnZhcnNfdG9fcG9zaXRpb24oeV92YXJzLCBvYmpfdXBkYXRlKGljb25fdmFyX3ZhbHVlc19zYWZlLCB2YXJfdmFsdWVfb3ZlcnJpZGUpKVxuICAgICAgKSxcbiAgICAgIFxuICAgICAgZGlzcGxheV9vZmZzZXRzOiAoeF9wb3NfYWZ0ZXJfb3ZlcnJpZGUsIHlfcG9zX2FmdGVyX292ZXJyaWRlLCBkaXNwbGF5KSA9PiB7XG4gICAgICAgIHJldHVybiBkaXNwbGF5Lm1hcChkaXNwbGF5X3ZhbHVlcyA9PiAoe1xuICAgICAgICAgIHg6ICB4X3Bvc19hZnRlcl9vdmVycmlkZShkaXNwbGF5X3ZhbHVlcyksXG4gICAgICAgICAgeTogIHlfcG9zX2FmdGVyX292ZXJyaWRlKGRpc3BsYXlfdmFsdWVzKSxcbiAgICAgICAgfSkpXG4gICAgICB9LFxuICAgICAgXG5cbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHt9LFxuICAgIG1ldGhvZHM6IHtzZXREZWVwLCBsb2FkX3Nwcml0ZW1hcH0sXG4gICAgaGVscGVyczoge3JhbmdlLCBrZXl2YWx1ZSwgaHVtYW5fcmVhZGFibGV9XG4gIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpYWdyYW1zL09wdEV4cGxvcmVGbGV4Lmh0bWwiLCI8ZGl2IGNsYXNzPVwibGF5ZXJzXCI+XG4gIHt7I2VhY2ggcmFuZ2UoMTIpIGFzIG59fVxuICAgIDxkaXYgY2xhc3M9XCJvdXRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImdyYWRcIiBzdHlsZT1cIlxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAte3tzcHJpdGVfc2l6ZSoobisxKX19cHggLXt7c3ByaXRlX3NpemUqMH19cHg7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoe3tzaXplL3Nwcml0ZV9zaXplfX0pO1xuICAgICAgICBmaWx0ZXI6ICBjb250cmFzdCgyMDAlKTtcbiAgICAgICAgbWFyZ2luOiB7eyhzaXplLXNwcml0ZV9zaXplKS8yfX1weDtcbiAgICAgICAgd2lkdGg6IHt7c3ByaXRlX3NpemV9fXB4O1xuICAgICAgICBoZWlnaHQ6IHt7c3ByaXRlX3NpemV9fXB4OyBcIj48L2Rpdj5cbiAgICAgIDxmaWdjYXB0aW9uPnt7bGF5ZXJzW25dfX08L2ZpZ2NhcHRpb24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInt7KG4gPT0gMSB8fCBuID09IDMgfHwgbiA9PSA1IHx8IG4gPT0gMTApPyAnb3AgaGlnaGxpZ2h0JyA6ICdvcCd9fVwiIHN0eWxlPVwiXG4gICAgICB0b3A6IDQ1cHg7XG4gICAgICB3aWR0aDp7e21hcmdpbi0xMn19cHg7XG4gICAgICBoZWlnaHQ6e3tzaXplKzEwfX1weDtcbiAgICAgIGJhY2tncm91bmQ6IHt7KG4gPT0gMSB8fCBuID09IDMgfHwgbiA9PSA1IHx8IG4gPT0gMTApPyAnI2ZmNjYwMCcgOiAobiA9PSAxMSk/ICd3aGl0ZScgOiAnaHNsKDI0MCwgNTAlLCA5MCUpJ319O1xuICAgICAgYm9yZGVyLXJhZGl1czo0cHg7XCIgZGF0YS1uPVwie3tufX1cIj5cbiAgICA8L2Rpdj5cbiAge3svZWFjaH19XG48L2Rpdj5cblxuXG48c3R5bGU+XG4gIC5sYXllcnMge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLm91dGVyIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICB9XG4gIC5vdXRlcjpmaXJzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAub3V0ZXI6bGFzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbiAgLmdyYWQge1xuICAgIC8qd2lkdGg6IDIyNHB4OyovXG4gICAgLypoZWlnaHQ6IDIyNHB4OyovXG4gICAgYmFja2dyb3VuZDogdXJsKFwiaW1hZ2VzL2xheWVyX2dyYWRpZW50c19zcHJpdGVtYXBfNC5qcGVnXCIpO1xuICB9XG4gIC5vdXRlciBmaWdjYXB0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIC5oaWdobGlnaHQ6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCLihpBcIjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogLTNweDtcbiAgICB0b3A6IC0yNXB4O1xuICAgIGNvbG9yOiAjODg4O1xuICB9XG48L3N0eWxlPlxuXG5cbjxzY3JpcHQ+XG5mdW5jdGlvbiByYW5nZShuKXtcbiAgdmFyIHJldCA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSkgcmV0LnB1c2goaSk7XG4gIHJldHVybiByZXQ7XG59XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2l6ZTogNzAsXG4gICAgICAgIHNwcml0ZV9zaXplOiAyMjQsXG4gICAgICAgIG1hcmdpbjogMjAsXG4gICAgICAgIGxheWVyczogW1wiaW5wdXRcIiwgXCJjb252MmQwXCIsIFwiY29udjJkMVwiLCBcImNvbnYyZDJcIixcbiAgICAgICAgICAgICAgIFwibWl4ZWQzYVwiLCBcIm1peGVkM2JcIixcbiAgICAgICAgICAgICAgIFwibWl4ZWQ0YVwiLCBcIm1peGVkNGJcIiwgXCJtaXhlZDRjXCIsIFwibWl4ZWQ0ZFwiLCBcIm1peGVkNGVcIixcbiAgICAgICAgICAgICAgIFwibWl4ZWQ1YVwiLCBcIm1peGVkNWJcIl0sXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDogeyAgIH0sXG4gICAgaGVscGVyczoge3JhbmdlfVxuICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaWFncmFtcy9HcmFkQXJ0aWZhY3RzLmh0bWwiLCI8ZGl2IHN0eWxlPVwiZ3JpZC1jb2x1bW46IHRleHQ7XCI+XG4gIDxkaXYgY2xhc3M9XCJpY29uc1wiPlxuICB7eyNlYWNoIHRodW1ibmFpbF9pbmRpY2VzIGFzIGl9fVxuICAgIDxkaXYgY2xhc3M9XCJpY29uIHt7KHNlbGVjdGVkID09IGkpPyAnc2VsZWN0ZWQnIDogJyd9fVwiXG4gICAgICAgICBvbjpjbGljaz0nc2V0KHtzZWxlY3RlZDogaX0pJ1xuICAgICAgPlxuICAgICAgPFNwcml0ZSBzcmNfY2xhc3M9e3tzcHJpdGVfb3B0X2NsYXNzfX0gc2l6ZT00NCBzcHJpdGVfc2l6ZT0xNDcgeT17e2l9fSB4PTAgc3ByaXRlX3NjYWxlPTAuNS8+XG4gICAgPC9kaXY+XG4gIHt7L2VhY2h9fVxuICA8L2Rpdj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgXG4gIDxkaXYgY2xhc3M9XCJuZWdhdGl2ZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJvcHRpbWl6ZVwiPlxuICAgICAgPFNwcml0ZSBzcmNfY2xhc3M9e3tzcHJpdGVfb3B0X2NsYXNzfX0gc2l6ZT0xNDcgc3ByaXRlX3NpemU9MTQ3IHk9e3tzZWxlY3RlZH19IHg9MSBzcHJpdGVfc2NhbGU9MSBwaXhlbGF0ZWQ9e3tmYWxzZX19Lz5cbiAgICAgIDxmaWdjYXB0aW9uIGNsYXNzPVwiY2FwdGlvblwiPlxuICAgICAgICA8c3Ryb25nPk5lZ2F0aXZlPC9zdHJvbmc+IG9wdGltaXplZFxuICAgICAgPC9maWdjYXB0aW9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlc1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtc2V0XCI+XG4gICAgICAgIDwhLS0gPGltZyBzcmM9e3tpbWdfcGF0aCArIFwiMC1taW4uanBnXCJ9fT4gLS0+XG4gICAgICAgIDxTcHJpdGUgc3JjX2NsYXNzPXt7c3ByaXRlX2NsYXNzfX0gc2l6ZT0xNDcgc3ByaXRlX3NpemU9Mjk0IHk9e3tzZWxlY3RlZH19IHg9MCBzcHJpdGVfc2NhbGU9MS8+XG4gICAgICAgIDxmaWdjYXB0aW9uIGNsYXNzPVwiY2FwdGlvblwiPlxuICAgICAgICAgIDxzdHJvbmc+TWluaW11bTwvc3Ryb25nPiBhY3RpdmF0aW9uIGV4YW1wbGVzXG4gICAgICAgIDwvZmlnY2FwdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtc2V0XCI+XG4gICAgICAgIDxTcHJpdGUgc3JjX2NsYXNzPXt7c3ByaXRlX2NsYXNzfX0gc2l6ZT0xNDcgc3ByaXRlX3NpemU9Mjk0IHk9e3tzZWxlY3RlZH19IHg9MSBzcHJpdGVfc2NhbGU9MS8+XG4gICAgICAgIDxmaWdjYXB0aW9uIGNsYXNzPVwiY2FwdGlvblwiPlxuICAgICAgICAgIFNsaWdodGx5IG5lZ2F0aXZlIGFjdGl2YXRpb24gZXhhbXBsZXNcbiAgICAgICAgPC9maWdjYXB0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJkaXZpZGVyXCI+PC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cInBvc2l0aXZlXCI+XG4gICAgPGRpdiBjbGFzcz1cIm9wdGltaXplXCI+XG4gICAgICA8U3ByaXRlIHNyY19jbGFzcz17e3Nwcml0ZV9vcHRfY2xhc3N9fSBzaXplPTE0NyBzcHJpdGVfc2l6ZT0xNDcgeT17e3NlbGVjdGVkfX0geD0wIHNwcml0ZV9zY2FsZT0xLz5cbiAgICAgIDxmaWdjYXB0aW9uIGNsYXNzPVwiY2FwdGlvblwiPlxuICAgICAgICA8c3Ryb25nPlBvc2l0aXZlPC9zdHJvbmc+IG9wdGltaXplZFxuICAgICAgPC9maWdjYXB0aW9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlc1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtc2V0XCI+XG4gICAgICAgIDxTcHJpdGUgc3JjX2NsYXNzPXt7c3ByaXRlX2NsYXNzfX0gc2l6ZT0xNDcgc3ByaXRlX3NpemU9Mjk0IHk9e3tzZWxlY3RlZH19IHg9MyBzcHJpdGVfc2NhbGU9MS8+XG4gICAgICAgIDxmaWdjYXB0aW9uIGNsYXNzPVwiY2FwdGlvblwiPlxuICAgICAgICAgIFNsaWdodGx5IHBvc2l0aXZlIGFjdGl2YXRpb24gZXhhbXBsZXNcbiAgICAgICAgPC9maWdjYXB0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1zZXRcIj5cbiAgICAgICAgPFNwcml0ZSBzcmNfY2xhc3M9e3tzcHJpdGVfY2xhc3N9fSBzaXplPXt7MTQ3fX0gc3ByaXRlX3NpemU9e3syOTR9fSB5PXt7c2VsZWN0ZWR9fSB4PTQgc3ByaXRlX3NjYWxlPTEvPlxuICAgICAgICA8ZmlnY2FwdGlvbiBjbGFzcz1cImNhcHRpb25cIj5cbiAgICAgICAgICA8c3Ryb25nPk1heGltdW08L3N0cm9uZz4gYWN0aXZhdGlvbiBleGFtcGxlc1xuICAgICAgICA8L2ZpZ2NhcHRpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbjwvZGl2PlxuXG48ZmlnY2FwdGlvbiBzdHlsZT1cImdyaWQtY29sdW1uOiB0ZXh0O1wiPlxuICA8c3Ryb25nPnt7bmV1cm9uX25hbWUobmV1cm9uc1tzZWxlY3RlZF0pfX08L3N0cm9uZz5cbjwvZmlnY2FwdGlvbj5cblxuXG48c3R5bGU+XG5cbiAgLm9wdC1hbmQtZXhhbXBsZXMtc3ByaXRlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWFnZXMvZXhhbXBsZXMuanBnXCIpO1xuICB9XG4gIFxuICAub3B0LWFuZC1leGFtcGxlcy1vcHRpbWl6ZWQtc3ByaXRlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWFnZXMvZXhhbXBsZXNfb3B0aW1pemVkLnBuZ1wiKTtcbiAgfVxuICBcbiAgLyogSWNvbnMgKi9cblxuICAuaWNvbnMge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xuICB9XG5cbiAgLmljb25zIC5pY29uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICAgIFxuICAgIC8qbWFyZ2luLWxlZnQ6IDNweDsqL1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgfVxuXG4gIC5pY29ucyAuaWNvbjpmaXJzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG5cbiAgLmljb25zIC5pY29uOmxhc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIH1cblxuICAuaWNvbnMgLmljb24uc2VsZWN0ZWQge1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmY2NjAwO1xuICB9XG5cbiAgLmljb24gZGl2IHtcbiAgICBvcGFjaXR5OiAwLjY2NjtcbiAgICBpbWFnZS1yZW5kZXJpbmc6IGF1dG87XG4gIH1cblxuICAuaWNvbi5zZWxlY3RlZCBkaXYge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgXG4gIC8qIE9wdEFuZEV4YW1wbGVzICovXG5cbiAgLmNvbnRhaW5lciB7XG4gICAgZ3JpZC1jb2x1bW46IHRleHQ7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgfVxuICBcbiAgLnBvc2l0aXZlLCAubmVnYXRpdmUsIC5kaXZpZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93O1xuICB9XG4gIFxuICAuY29udGFpbmVyIGZpZ2NhcHRpb24ge1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gIH1cbiAgXG4gIC5kaXZpZGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgfVxuICBcbiAgLnBvc2l0aXZlID4gZGl2IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cbiAgXG4gIC5vcHRpbWl6ZSB7XG4gICAgXG4gIH1cbiAgXG4gIC5wb3NpdGl2ZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgfVxuICBcbiAgLm9wdGltaXplIGZpZ2NhcHRpb24ge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuICBcbiAgLm9wdGltaXplIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdztcbiAgfVxuICBcbiAgLmV4YW1wbGUtc2V0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtc2V0ID4gKixcbiAgLm9wdGltaXplID4gKiB7XG4gICAgd2lkdGg6IDE0N3B4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1zZXQgPiBkaXYsXG4gIC5vcHRpbWl6ZSA+IGRpdiB7XG4gICAgaGVpZ2h0OiAxNDdweDtcbiAgfVxuICBcbiAgLnBvc2l0aXZlIC5leGFtcGxlcyB7XG4gICAgZmxleC1mbG93OiByb3ctcmV2ZXJzZTtcbiAgfVxuICBcbiAgLnBvc2l0aXZlIC5vcHRpbWl6ZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICB9XG4gIFxuICAubmVnYXRpdmUgLm9wdGltaXplIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gIH1cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgICBcbiAgICAuZGl2aWRlciB7XG4gICAgICBkaXNwbGF5OiBpbmhlcml0O1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgLyptYXJnaW4tdG9wOiAtMTBweDsqL1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICBcbiAgICAuZGl2aWRlcjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiMFwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogLTRweDtcbiAgICAgIHRvcDogLTI1cHg7XG4gICAgICBjb2xvcjogI2NjYztcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuICAgIFxuICAgIC5leGFtcGxlLXNldCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICAgIFxuICAgIC5leGFtcGxlLXNldDpmaXJzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgfVxuICAgIFxuICAgIC5uZWdhdGl2ZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgICBcbiAgICAubmVnYXRpdmUgLm9wdGltaXplIHtcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIH1cbiAgICBcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGdyaWQtY29sdW1uOiBwYWdlO1xuICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgfVxuICAgIFxuICAgIC5wb3NpdGl2ZSB7XG4gICAgICBmbGV4LWZsb3c6IHJvdy1yZXZlcnNlO1xuICAgIH1cbiAgICBcbiAgICAucG9zaXRpdmUgLmV4YW1wbGVzIHtcbiAgICAgIGZsZXgtZmxvdzogcm93O1xuICAgIH1cbiAgICBcbiAgICAubmVnYXRpdmUsIC5kaXZpZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdztcbiAgICB9XG4gICAgXG4gICAgLm9wdGltaXplIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuICAgIFxuICAgIC5uZWdhdGl2ZSA+IGRpdiB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIH1cbiAgICBcbiAgICAucG9zaXRpdmUgLm9wdGltaXplIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAzNnB4O1xuICAgIH1cbiAgICBcbiAgICAubmVnYXRpdmUgLm9wdGltaXplIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMzZweDtcbiAgICB9XG4gIH1cbjwvc3R5bGU+XG5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgc2V0RGVlcCB9IGZyb20gJ3N2ZWx0ZS1leHRyYXMnO1xuICBpbXBvcnQgU3ByaXRlIGZyb20gJy4vU3ByaXRlLmh0bWwnO1xuICBcbiAgZnVuY3Rpb24gcGFkKG51bSwgc2l6ZSkge1xuICAgIHZhciBzID0gXCIwMDAwMFwiICsgbnVtO1xuICAgIHJldHVybiBzLnN1YnN0cihzLmxlbmd0aC1zaXplKTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gcmFuZ2Uobil7XG4gICAgcmV0dXJuIEFycmF5KG4pLmZpbGwoKS5tYXAoKF8sIGkpID0+IGkpO1xuICB9XG4gIFxuICBmdW5jdGlvbiBuZXVyb25fbmFtZShuZXVyb24pIHtcbiAgICByZXR1cm4gYExheWVyIG1peGVkICR7bmV1cm9uWzBdfSwgdW5pdCAke25ldXJvblsxXX1gO1xuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXVyb25zOiBbXG4gICAgICAgICAgW1wiNGFcIiwgICA2XSxcbiAgICAgICAgICBbXCI0YVwiLCAgNDFdLFxuICAgICAgICAgIFtcIjRhXCIsIDE0M10sXG4gICAgICAgICAgW1wiNGFcIiwgMjQwXSxcbiAgICAgICAgICBbXCI0YVwiLCA0NDldLFxuICAgICAgICAgIFtcIjRhXCIsIDQ5Ml0sXG4gICAgICAgICAgW1wiNGFcIiwgNDk5XSxcbiAgICAgICAgICBbXCI0YlwiLCA0ODJdLFxuICAgICAgICAgIFtcIjRkXCIsIDQ3OV0sXG4gICAgICAgICAgW1wiNGVcIiwgNzE4XSxcbiAgICAgICAgICBbXCI0ZVwiLCA4MTldXG4gICAgICAgIF0sXG4gICAgICAgIHNlbGVjdGVkOiA1LFxuICAgICAgICBzcHJpdGVfY2xhc3M6ICdvcHQtYW5kLWV4YW1wbGVzLXNwcml0ZScsXG4gICAgICAgIHNwcml0ZV9vcHRfY2xhc3M6ICdvcHQtYW5kLWV4YW1wbGVzLW9wdGltaXplZC1zcHJpdGUnXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgbnVtYmVyX29mX25ldXJvbnM6IG5ldXJvbnMgPT4gbmV1cm9ucy5sZW5ndGgsXG4gICAgICB0aHVtYm5haWxfaW5kaWNlczogbnVtYmVyX29mX25ldXJvbnMgPT4gcmFuZ2UobnVtYmVyX29mX25ldXJvbnMpLFxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1Nwcml0ZX0sXG4gICAgbWV0aG9kczoge30sXG4gICAgaGVscGVyczoge3BhZCwgbmV1cm9uX25hbWV9XG4gIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpYWdyYW1zL09wdEFuZEV4YW1wbGVzLmh0bWwiLCI8ZGl2IGNsYXNzPVwibGluZWFyLWNvbWJpbmF0aW9uc1wiPlxuICBcbiAgPGRpdiBjbGFzcz1cImZyb3dcIj5cbiAgICAgIFxuICAgIDxkaXYgaWQ9XCJpY29ucy1maXJzdFwiIGNsYXNzPVwiZmNvbHVtblwiPlxuICAgICAgPGRpdiBjbGFzcz1cImljb25zXCI+XG4gICAgICAgIHt7I2VhY2ggcmFuZ2UoNikgYXMgaX19XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImljb24ge3soeCA9PSBpKzEpPyAnc2VsZWN0ZWQnIDogJyd9fVwiIG9uOmNsaWNrPSdzZXQoe3g6IGkrMX0pJz5cbiAgICAgICAgICAgIDxTcHJpdGUgc3JjX2NsYXNzPXt7c3ByaXRlX2NsYXNzfX0gc2l6ZT00NCBzcHJpdGVfc2l6ZT0xODAgeT0wIHg9e3tpKzF9fSBzcHJpdGVfc2NhbGU9MC41Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAge3svZWFjaH19XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8ZGl2IGlkPVwic3ByaXRlLWZpcnN0XCIgY2xhc3M9XCJmY29sdW1uXCI+XG4gICAgICA8U3ByaXRlIHNyY19jbGFzcz17e3Nwcml0ZV9jbGFzc319IHNpemU9MTgwIHNwcml0ZV9zaXplPTE4MCB5PTAgeD17e3h9fSBzcHJpdGVfc2NhbGU9MS8+XG4gICAgICA8c3BhbiBjbGFzcz1cImZpZ2NhcHRpb25cIj5OZXVyb24gMTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8ZGl2IGNsYXNzPVwib3BlcmF0b3JcIj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8ZGl2IGlkPVwic3ByaXRlLXNlY29uZFwiIGNsYXNzPVwiZmNvbHVtblwiPlxuICAgICAgPFNwcml0ZSBzcmNfY2xhc3M9e3tzcHJpdGVfY2xhc3N9fSBzaXplPTE4MCBzcHJpdGVfc2l6ZT0xODAgeT17e3l9fSB4PTAgc3ByaXRlX3NjYWxlPTEvPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmaWdjYXB0aW9uXCI+TmV1cm9uIDI8L3NwYW4+XG4gICAgPC9kaXY+XG4gIFxuICAgIDxkaXYgaWQ9XCJpY29ucy1zZWNvbmRcIiBjbGFzcz1cImZjb2x1bW5cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpY29uc1wiPlxuICAgICAgICB7eyNlYWNoIHJhbmdlKDYpIGFzIGl9fVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uIHt7KHkgPT0gaSsxKT8gJ3NlbGVjdGVkJyA6ICcnfX1cIiBvbjpjbGljaz0nc2V0KHt5OiBpKzF9KScgPlxuICAgICAgICAgICAgPFNwcml0ZSBzcmNfY2xhc3M9e3tzcHJpdGVfY2xhc3N9fSBzaXplPTQ0IHNwcml0ZV9zaXplPTE4MCB5PXt7aSsxfX0geD0wIHNwcml0ZV9zY2FsZT0wLjUvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB7ey9lYWNofX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIFxuICA8L2Rpdj5cbiAgXG4gIDxkaXYgY2xhc3M9XCJmcm93XCIgc3R5bGU9XCJcIj5cbiAgICA8ZGl2IGNsYXNzPVwicmVzdWx0IGMgZmNvbHVtblwiPlxuICAgICAgPFNwcml0ZSBzcmNfY2xhc3M9e3tzcHJpdGVfY2xhc3N9fSBzaXplPTE4MCBzcHJpdGVfc2l6ZT0xODAgeT17e3l9fSB4PXt7eH19IHNwcml0ZV9zY2FsZT0xLz5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmlnY2FwdGlvblwiPkpvaW50bHkgb3B0aW1pemVkPC9zcGFuPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuXG5cbjxzdHlsZT5cblxuICAvKiBGUm93ICYgRkNvbHVtbiAqL1xuXG4gIC5mcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cblxuICAuZmNvbHVtbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB6LWluZGV4OiAyO1xuICB9XG5cbiAgLyouZmNvbHVtbiA+ICoge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH0qL1xuXG4gIC8qLmZjb2x1bW4gPiAqOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH0qL1xuXG4gIC8qIC1lbmQgRlJvdyAmIEZDb2x1bW4gZW5kLSAqL1xuXG4gIC8qIEljb25zICovXG4gIC5pY29ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICAvKmJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkOyovXG4gIH1cblxuICAuaWNvbnMgLmljb24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDExcHg7XG4gICAgXG4gICAgLyptYXJnaW4tbGVmdDogM3B4OyovXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XG4gIH1cblxuICAuaWNvbnMgLmljb24uc2VsZWN0ZWQge1xuICAgIG9wYWNpdHk6IDEwMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2ZmNjYwMDtcbiAgfVxuXG4gIC5pY29uIGRpdiB7XG4gICAgb3BhY2l0eTogMC42NjY7XG4gICAgaW1hZ2UtcmVuZGVyaW5nOiBhdXRvO1xuICB9XG5cbiAgLmljb24uc2VsZWN0ZWQgZGl2IHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgXG4gIC8qIGxpbmVhciBDb21iaW5hdGlvbnMgKi9cblxuICAubGluZWFyX2NvbWJpbmF0aW9uc19zcHJpdGUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1hZ2VzL2xpbmVhcl9jb21iaW5hdGlvbnMuanBnJylcbiAgfVxuXG4gIFxuICAjY2FwdGlvbiB7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgfVxuICBcbiAgI2ljb25zLWZpcnN0IHtcbiAgICBvcmRlcjogMVxuICB9XG4gICNzcHJpdGUtZmlyc3Qge1xuICAgIG9yZGVyOiAyXG4gIH1cbiAgI3Nwcml0ZS1zZWNvbmQge1xuICAgIG9yZGVyOiA1XG4gIH1cbiAgI2ljb25zLXNlY29uZCB7XG4gICAgb3JkZXI6IDRcbiAgfVxuICBcbiAgLnJlc3VsdCB7XG4gICAgei1pbmRleDogMztcbiAgfVxuICBcbiAgLm9wZXJhdG9yIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgXG4gICAgLmZjb2x1bW4ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuICAgIFxuICAgIC5mY29sdW1uOmZpcnN0LW9mLXR5cGUge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgLmZjb2x1bW46bGFzdC1vZi10eXBlIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gICAgXG4gICAgI2ljb25zLWZpcnN0IHtcbiAgICAgIG9yZGVyOiAxXG4gICAgfVxuICAgICNzcHJpdGUtZmlyc3Qge1xuICAgICAgb3JkZXI6IDI7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICAgICNzcHJpdGUtc2Vjb25kIHtcbiAgICAgIG9yZGVyOiA0O1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuICAgICNpY29ucy1zZWNvbmQge1xuICAgICAgb3JkZXI6IDVcbiAgICB9XG4gICAgXG4gICAgLm9wZXJhdG9yIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGltYWdlcy9qb2luX2Fycm93LnN2Zyk7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgNzAlO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMjgwJTtcbiAgICAgIG1pbi13aWR0aDogNjBweDtcbiAgICAgIGhlaWdodDogMTgwcHg7XG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgIG9yZGVyOiAzO1xuICAgICAgb3BhY2l0eTogMC4zMztcbiAgICB9XG4gICAgXG4gICAgLnJlc3VsdC5jIHtcbiAgICAgIHRvcDogLTY0cHg7XG4gICAgICBtYXJnaW4tbGVmdDogMjQwcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIFxuICAgIC5yZXN1bHQuYyA+IGRpdiB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMjBweCBoc2xhKDAsMCUsMCUsMC4zKTtcbiAgICB9XG4gICAgXG4gICAgI3Nwcml0ZS1zZWNvbmQgPiBzcGFuIHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbiAgICBcbiAgICAubGluZWFyLWNvbWJpbmF0aW9ucyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAtODRweDtcbiAgICB9XG4gIH1cblxuICBcbjwvc3R5bGU+XG5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IFNwcml0ZSBmcm9tICcuL1Nwcml0ZS5odG1sJztcbiAgLy8gY29uc3Qgam9pbl9zdmcgPSByZXF1aXJlKCdzdmctaW5saW5lLWxvYWRlcj9jbGFzc1ByZWZpeCEuLi9qb2luLnN2ZycpO1xuICBcbiAgZnVuY3Rpb24gcmFuZ2Uobil7XG4gICAgcmV0dXJuIEFycmF5KG4pLmZpbGwoKS5tYXAoKF8sIGkpID0+IGkpO1xuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzcHJpdGVfY2xhc3M6ICdsaW5lYXJfY29tYmluYXRpb25zX3Nwcml0ZScsXG4gICAgICAgIHg6IDUsXG4gICAgICAgIHk6IDEsXG4gICAgICAgIC8vIHN2Zzogam9pbl9zdmdcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7fSxcbiAgICBjb21wb25lbnRzOiB7U3ByaXRlfSxcbiAgICBtZXRob2RzOiB7fSxcbiAgICBoZWxwZXJzOiB7cmFuZ2V9XG4gIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpYWdyYW1zL0xpbmVhckNvbWJpbmF0aW9ucy5odG1sIiwiPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuXG4gIHt7I2VhY2ggcmFuZ2UoNCkgYXMgeCwgaW5kZXh9fVxuICAgIDxkaXY+XG4gICAgICA8U3ByaXRlIHNyY19jbGFzcz0nc3ByaXRlX29wdF9wcm9ncmVzcycgeD17e3h9fSB5PTAgc3ByaXRlX3NpemU9MTgwIHNpemU9MTQwIHBpeGVsYXRlZD17e2ZhbHNlfX0vPlxuICAgICAgPGZpZ2NhcHRpb24+XG4gICAgICAgIFN0ZXAge3tzdGVwc1tpbmRleF19fVxuICAgICAgPC9maWdjYXB0aW9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhcnJvd2JveFwiPlxuICAgICAge3sjaWYgeCAhPSAzfX3ihpJ7ey9pZn19XG4gICAgPC9kaXY+XG4gIHt7L2VhY2h9fVxuICBcbjwvZGl2PlxuXG5cbjxzdHlsZT5cblxuICAuc3ByaXRlX29wdF9wcm9ncmVzcyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1hZ2VzL29wdF9wcm9ncmVzc19taXhlZDRhLTExLnBuZ1wiKTtcbiAgfVxuICBcbiAgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICBcbiAgLmNvbnRhaW5lciA+IGRpdiB7XG4gICAgLyptYXJnaW4tYm90dG9tOiAyOHB4OyovXG4gIH1cbiAgXG4gIC5jb250YWluZXIgLnNwcml0ZSB7XG4gICAgLypmbGV4OiAxIDEgYXV0bzsqL1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gIH1cbiAgXG4gIC5jb250YWluZXIgLmFycm93Ym94IHtcbiAgICBjb2xvcjogIzg4ODtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB3aWR0aDogMTRweDtcbiAgfVxuXG48L3N0eWxlPlxuXG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBTcHJpdGUgZnJvbSBcIi4vU3ByaXRlLmh0bWxcIjtcbiAgXG4gIGZ1bmN0aW9uIHJhbmdlKG4pe1xuICAgIHJldHVybiBBcnJheShuKS5maWxsKCkubWFwKChfLCBpKSA9PiBpKTtcbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzcHJpdGVfc2NhbGU6IDEuMCxcbiAgICAgICAgc3RlcHM6IFswLDQsNDgsMjA0OF1cbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHsgU3ByaXRlIH0sXG4gICAgaGVscGVyczogeyByYW5nZSB9LFxuICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaWFncmFtcy9PcHRQcm9ncmVzcy5odG1sIiwiXG48ZmlnY2FwdGlvbiBzdHlsZT1cImdyaWQtY29sdW1uOiBraWNrZXI7XCI+PHN0cm9uZz5EYXRhc2V0IEV4YW1wbGVzPC9zdHJvbmc+IHNob3cgdXMgd2hhdCBuZXVyb25zIHJlc3BvbmQgdG8gaW4gcHJhY3RpY2U8L2ZpZ2NhcHRpb24+XG5cbjxkaXYgY2xhc3M9XCJpbWFnZXNcIiBzdHlsZT1cImdyaWQtY29sdW1uOiB0ZXh0LXN0YXJ0IC8gcGFnZS1lbmQ7XCI+XG4gIDxTcHJpdGUgc3JjX2NsYXNzPSdzcHJpdGVfZXhhbXBsZXNfb3B0X2NvbXBhcmlzb25fZXhhbXBsZXMnIHg9MCB5PTAgc3ByaXRlX3NpemU9Mjk0IGJpbmQ6c2l6ZT48L1Nwcml0ZT5cbiAgPFNwcml0ZSBzcmNfY2xhc3M9J3Nwcml0ZV9leGFtcGxlc19vcHRfY29tcGFyaXNvbl9leGFtcGxlcycgeD0xIHk9MCBzcHJpdGVfc2l6ZT0yOTQgYmluZDpzaXplPjwvU3ByaXRlPlxuICA8U3ByaXRlIHNyY19jbGFzcz0nc3ByaXRlX2V4YW1wbGVzX29wdF9jb21wYXJpc29uX2V4YW1wbGVzJyB4PTIgeT0wIHNwcml0ZV9zaXplPTI5NCBiaW5kOnNpemU+PC9TcHJpdGU+XG4gIDxTcHJpdGUgc3JjX2NsYXNzPSdzcHJpdGVfZXhhbXBsZXNfb3B0X2NvbXBhcmlzb25fZXhhbXBsZXMnIHg9MyB5PTAgc3ByaXRlX3NpemU9Mjk0IGJpbmQ6c2l6ZT48L1Nwcml0ZT5cbjwvZGl2PlxuXG48ZmlnY2FwdGlvbiBzdHlsZT1cImdyaWQtY29sdW1uOiBraWNrZXI7XCI+XG4gIDxzcGFuPlxuICAgIDxzdHJvbmc+T3B0aW1pemF0aW9uPC9zdHJvbmc+IGlzb2xhdGVzIHRoZSBjYXVzZXMgb2YgYmVoYXZpb3IgZnJvbSBtZXJlIGNvcnJlbGF0aW9ucy4gXG4gIDwvc3Bhbj5cbiAgPHNwYW4+XG4gICAgQSBuZXVyb24gbWF5IG5vdCBiZSBkZXRlY3Rpbmcgd2hhdCB5b3UgaW5pdGlhbGx5IHRob3VnaHQuXG4gIDwvc3Bhbj5cbjwvZmlnY2FwdGlvbj5cblxuPGRpdiBjbGFzcz1cImltYWdlc1wiIHN0eWxlPVwiZ3JpZC1jb2x1bW46IHRleHQtc3RhcnQgLyBwYWdlLWVuZDtcIj5cbiAgPFNwcml0ZSBzcmNfY2xhc3M9J3Nwcml0ZV9leGFtcGxlc19vcHRfY29tcGFyaXNvbicgeD0wIHk9MCBzcHJpdGVfc2l6ZT0xNzAgYmluZDpzaXplPjwvU3ByaXRlPlxuICA8U3ByaXRlIHNyY19jbGFzcz0nc3ByaXRlX2V4YW1wbGVzX29wdF9jb21wYXJpc29uJyB4PTEgeT0wIHNwcml0ZV9zaXplPTE3MCBiaW5kOnNpemU+PC9TcHJpdGU+XG4gIDxTcHJpdGUgc3JjX2NsYXNzPSdzcHJpdGVfZXhhbXBsZXNfb3B0X2NvbXBhcmlzb24nIHg9MiB5PTAgc3ByaXRlX3NpemU9MTcwIGJpbmQ6c2l6ZT48L1Nwcml0ZT5cbiAgPFNwcml0ZSBzcmNfY2xhc3M9J3Nwcml0ZV9leGFtcGxlc19vcHRfY29tcGFyaXNvbicgeD0zIHk9MCBzcHJpdGVfc2l6ZT0xNzAgYmluZDpzaXplPjwvU3ByaXRlPlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJjYXB0aW9uc1wiIHN0eWxlPVwiZ3JpZC1jb2x1bW46IHRleHQtc3RhcnQgLyBwYWdlLWVuZDtcIj5cbiAgPGZpZ2NhcHRpb24+QmFzZWJhbGzigJRvciBzdHJpcGVzPyA8YnI+PGVtPm1peGVkNGEsIFVuaXQgNjwvZW0+PC9maWdjYXB0aW9uPlxuICA8ZmlnY2FwdGlvbj5BbmltYWwgZmFjZXPigJRvciBzbm91dHM/IDxicj48ZW0+bWl4ZWQ0YSwgVW5pdCAyNDA8L2VtPjwvZmlnY2FwdGlvbj5cbiAgPGZpZ2NhcHRpb24+Q2xvdWRz4oCUb3IgZmx1ZmZpbmVzcz8gPGJyPjxlbT5taXhlZDRhLCBVbml0IDQ1MzwvZW0+PC9maWdjYXB0aW9uPlxuICA8ZmlnY2FwdGlvbj5CdWlsZGluZ3PigJRvciBza3k/IDxicj48ZW0+bWl4ZWQ0YSwgVW5pdCA0OTI8L2VtPjwvZmlnY2FwdGlvbj5cbjwvZGl2PiAgXG5cbjxzdHlsZT5cblxuLnNwcml0ZV9leGFtcGxlc19vcHRfY29tcGFyaXNvbl9leGFtcGxlcyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImltYWdlcy93aHlfb3B0aW1pemF0aW9uX2V4YW1wbGVzLmpwZ1wiKTtcbn1cblxuLnNwcml0ZV9leGFtcGxlc19vcHRfY29tcGFyaXNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImltYWdlcy93aHlfb3B0aW1pemF0aW9uX25ldXJvbi5wbmdcIik7XG59XG5cbi5jYXB0aW9ucyxcbi5pbWFnZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4uaW1hZ2VzID4gZGl2IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uaW1hZ2VzID4gZGl2Omxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmNhcHRpb25zID4gZmlnY2FwdGlvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE0N3B4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5jYXB0aW9ucyA+IGZpZ2NhcHRpb246bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gIFxuICAuY2FwdGlvbnMgPiBmaWdjYXB0aW9uIHtcbiAgICB3aWR0aDogMTcwcHg7XG4gIH1cbn1cblxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IFNwcml0ZSBmcm9tIFwiLi9TcHJpdGUuaHRtbFwiO1xuICBcbiAgZnVuY3Rpb24gcmFuZ2Uobil7XG4gICAgcmV0dXJuIEFycmF5KG4pLmZpbGwoKS5tYXAoKF8sIGkpID0+IGkpO1xuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH0sXG4gICAgb25jcmVhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgbXEgPSBtYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogMTI4MHB4KVwiKTtcbiAgICAgIG1xLm9uY2hhbmdlID0gKGV2ZW50KSA9PiB0aGlzLnNldCh7c2l6ZTogZXZlbnQubWF0Y2hlcyA/IDE3MCA6IDE0N30pO1xuICAgICAgdGhpcy5zZXQoe1xuICAgICAgICBzaXplOiBtcS5tYXRjaGVzID8gMTcwIDogMTQ3LFxuICAgICAgICAvLyBzcHJpdGVfc2NhbGU6IG1xLm1hdGNoZXMgPyAuNjI1IDogLjUsXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHsgU3ByaXRlIH0sXG4gICAgaGVscGVyczogeyByYW5nZSB9LFxuICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaWFncmFtcy9FeGFtcGxlc09wdENvbXBhcmlzb24uaHRtbCIsIjxkaXYgY2xhc3M9XCJmcm93XCI+XG4gIFxuICA8ZGl2IGNsYXNzPVwiZmNvbHVtblwiPlxuICAgIDxTcHJpdGUgc3JjX2NsYXNzPSdzcHJpdGVfcmFuZG9tX29wdF9leGFtcGxlcycgeD0wIHk9MCBzcHJpdGVfc2l6ZT0yOTQgYmluZDpzaXplPjwvU3ByaXRlPlxuICAgIDxTcHJpdGUgc3JjX2NsYXNzPSdzcHJpdGVfcmFuZG9tX29wdCcgeD0wIHk9MCBzcHJpdGVfc2l6ZT0xODAgYmluZDpzaXplPjwvU3ByaXRlPlxuICAgIDxmaWdjYXB0aW9uPjxlbT5taXhlZDNhLCByYW5kb20gZGlyZWN0aW9uPC9lbT48L2ZpZ2NhcHRpb24+XG4gIDwvZGl2PlxuICBcbiAgPGRpdiBjbGFzcz1cImZjb2x1bW5cIj5cbiAgICA8U3ByaXRlIHNyY19jbGFzcz0nc3ByaXRlX3JhbmRvbV9vcHRfZXhhbXBsZXMnIHg9MSB5PTAgc3ByaXRlX3NpemU9Mjk0IGJpbmQ6c2l6ZT48L1Nwcml0ZT5cbiAgICA8U3ByaXRlIHNyY19jbGFzcz0nc3ByaXRlX3JhbmRvbV9vcHQnIHg9MSB5PTAgc3ByaXRlX3NpemU9MTgwIGJpbmQ6c2l6ZT48L1Nwcml0ZT5cbiAgICA8ZmlnY2FwdGlvbj48ZW0+bWl4ZWQ0YywgcmFuZG9tIGRpcmVjdGlvbjwvZW0+PC9maWdjYXB0aW9uPlxuICA8L2Rpdj5cbiAgICBcbiAgPGRpdiBjbGFzcz1cImZjb2x1bW5cIj5cbiAgICA8U3ByaXRlIHNyY19jbGFzcz0nc3ByaXRlX3JhbmRvbV9vcHRfZXhhbXBsZXMnIHg9MiB5PTAgc3ByaXRlX3NpemU9Mjk0IGJpbmQ6c2l6ZT48L1Nwcml0ZT5cbiAgICA8U3ByaXRlIHNyY19jbGFzcz0nc3ByaXRlX3JhbmRvbV9vcHQnIHg9MiB5PTAgc3ByaXRlX3NpemU9MTgwIGJpbmQ6c2l6ZT48L1Nwcml0ZT5cbiAgICA8ZmlnY2FwdGlvbj48ZW0+bWl4ZWQ0ZCwgcmFuZG9tIGRpcmVjdGlvbjwvZW0+PC9maWdjYXB0aW9uPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiZmNvbHVtblwiPlxuICAgIDxTcHJpdGUgc3JjX2NsYXNzPSdzcHJpdGVfcmFuZG9tX29wdF9leGFtcGxlcycgeD0zIHk9MCBzcHJpdGVfc2l6ZT0yOTQgYmluZDpzaXplPjwvU3ByaXRlPlxuICAgIDxTcHJpdGUgc3JjX2NsYXNzPSdzcHJpdGVfcmFuZG9tX29wdCcgeD0zIHk9MCBzcHJpdGVfc2l6ZT0xODAgYmluZDpzaXplPjwvU3ByaXRlPlxuICAgIDxmaWdjYXB0aW9uPjxlbT5taXhlZDVhLCByYW5kb20gZGlyZWN0aW9uPC9lbT48L2ZpZ2NhcHRpb24+XG4gIDwvZGl2PlxuICAgIFxuPC9kaXY+XG5cbjxzdHlsZT5cblxuZmlnY2FwdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBGUm93ICYgRkNvbHVtbiAqL1xuXG4uZnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLmZjb2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uZmNvbHVtbjpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5mY29sdW1uID4gKiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5mY29sdW1uID4gKjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLyogLWVuZCBGUm93ICYgRkNvbHVtbiBlbmQtICovXG5cbi5zcHJpdGVfcmFuZG9tX29wdF9leGFtcGxlcyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImltYWdlcy9yYW5kb21fb3B0aW1pemF0aW9uX2V4YW1wbGVzLmpwZ1wiKTtcbn1cblxuLnNwcml0ZV9yYW5kb21fb3B0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1hZ2VzL3JhbmRvbV9vcHRpbWl6YXRpb24ucG5nXCIpO1xufVxuXG5cblxuLmNvbHVtbiA+IGRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi8qLnJvdyA+IGRpdiB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgd2lkdGg6IDE0N3B4O1xuICBoZWlnaHQ6IDE0N3B4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucm93ID4gZmlnY2FwdGlvbiB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgd2lkdGg6IDE0N3B4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgLnJvdyA+IGRpdiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGhlaWdodDogMTgwcHg7XG4gIH1cbiAgXG4gIC5yb3cgPiBmaWdjYXB0aW9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDE4MHB4O1xuICB9XG59Ki9cblxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IFNwcml0ZSBmcm9tIFwiLi9TcHJpdGUuaHRtbFwiO1xuICBcbiAgZnVuY3Rpb24gcmFuZ2Uobil7XG4gICAgcmV0dXJuIEFycmF5KG4pLmZpbGwoKS5tYXAoKF8sIGkpID0+IGkpO1xuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH0sXG4gICAgb25jcmVhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgbXEgPSBtYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogOTYwcHgpXCIpO1xuICAgICAgbXEub25jaGFuZ2UgPSAoZXZlbnQpID0+IHRoaXMuc2V0KHtzaXplOiBldmVudC5tYXRjaGVzID8gMTgwIDogMTQ3fSk7XG4gICAgICB0aGlzLnNldCh7XG4gICAgICAgIHNpemU6IG1xLm1hdGNoZXMgPyAxODAgOiAxNDcsXG4gICAgICAgIC8vIHNwcml0ZV9zY2FsZTogbXEubWF0Y2hlcyA/IC42MjUgOiAuNSxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgY29tcG9uZW50czogeyBTcHJpdGUgfSxcbiAgICBoZWxwZXJzOiB7IHJhbmdlIH0sXG4gIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpYWdyYW1zL1JhbmRvbUV4YW1wbGVzT3B0Lmh0bWwiLCJtb2R1bGUuZXhwb3J0cyA9IHtcInlfdmFyc1wiOlt7XCJuYW1lXCI6XCJsMVwiLFwibGFiZWxcIjpcImwxXCIsXCJ0eXBlXCI6XCJudW1iZXJcIixcImRlZmF1bHRcIjowLFwidmFsdWVzXCI6WzAsLTAuMDUsLTAuNSwtMi41XX0se1wibmFtZVwiOlwidHZcIixcImxhYmVsXCI6XCJ0dlwiLFwidHlwZVwiOlwibnVtYmVyXCIsXCJkZWZhdWx0XCI6MCxcInZhbHVlc1wiOlswLC0wLjA1LC0wLjI1LC0xLjUsLTNdfSx7XCJuYW1lXCI6XCJibHVyXCIsXCJsYWJlbFwiOlwiYmx1clwiLFwidHlwZVwiOlwibnVtYmVyXCIsXCJkZWZhdWx0XCI6MCxcInZhbHVlc1wiOlswLC0wLjEsLTEsLTUsLTEwXX1dLFwieF92YXJzXCI6W3tcIm5hbWVcIjpcIm5ldXJvbnNcIixcImxhYmVsXCI6XCJuZXVyb25zXCIsXCJ0eXBlXCI6XCJpY29uXCIsXCJ2YWx1ZXNcIjpbXCJtaXhlZDRiOjQ1MlwiLFwibWl4ZWQ0Yjo0NjVcIixcIm1peGVkNGI6NDc1XCIsXCJtaXhlZDRiOjQ2NFwiLFwibWl4ZWQ0Yzo0NTBcIixcIm1peGVkNGQ6NDc5XCJdfSx7XCJuYW1lXCI6XCJzdGVwc1wiLFwibGFiZWxcIjpcInN0ZXBzXCIsXCJ0eXBlXCI6XCJudW1iZXJcIixcImRlZmF1bHRcIjo0LFwidmFsdWVzXCI6WzEsMzIsMTI4LDI1NiwyMDQ4XX1dLFwic2l6ZVwiOjY4fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3RhdGljL2ltYWdlcy9QZW5hbGl6ZUZyZXEuanNvblxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJ5X3ZhcnNcIjpbe1widHlwZVwiOlwibnVtYmVyXCIsXCJuYW1lXCI6XCJqaXR0ZXJcIixcInZhbHVlc1wiOlswLDEsOCwzMl0sXCJsYWJlbFwiOlwiaml0dGVyXCIsXCJkZWZhdWx0XCI6Mn0se1widHlwZVwiOlwibnVtYmVyXCIsXCJuYW1lXCI6XCJyYW5kb21fcm90YXRlXCIsXCJ2YWx1ZXNcIjpbMCw1LDE1LDQ1LDE4MF0sXCJsYWJlbFwiOlwicmFuZG9tX3JvdGF0ZVwifSx7XCJ0eXBlXCI6XCJudW1iZXJcIixcIm5hbWVcIjpcInJhbmRvbV9zY2FsZVwiLFwidmFsdWVzXCI6WzEsMS4xLDEuMiwxLjhdLFwibGFiZWxcIjpcInJhbmRvbV9zY2FsZVwifV0sXCJ4X3ZhcnNcIjpbe1widHlwZVwiOlwiaWNvblwiLFwibmFtZVwiOlwibmV1cm9uc1wiLFwidmFsdWVzXCI6W1wibWl4ZWQ0Yjo0NTJcIixcIm1peGVkNGI6NDY1XCIsXCJtaXhlZDRiOjQ3NVwiLFwibWl4ZWQ0Yjo0NjRcIixcIm1peGVkNGM6NDUwXCIsXCJtaXhlZDRkOjQ3OVwiXSxcImxhYmVsXCI6XCJuZXVyb25zXCJ9LHtcInR5cGVcIjpcIm51bWJlclwiLFwibmFtZVwiOlwic3RlcHNcIixcInZhbHVlc1wiOlsxLDMyLDEyOCwyNTYsMjA0OF0sXCJsYWJlbFwiOlwic3RlcHNcIixcImRlZmF1bHRcIjo0fV0sXCJzaXplXCI6Njh9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zdGF0aWMvaW1hZ2VzL1RyYW5zZm9ybUV4cGxvcmUuanNvblxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==