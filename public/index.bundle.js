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
	(0, _shared.setAttribute)(node, "svelte-661071470", "");
}

function add_css() {
	var style = (0, _shared.createElement)("style");
	style.id = 'svelte-661071470-style';
	style.textContent = "figcaption[svelte-661071470],[svelte-661071470] figcaption{grid-column:text}[svelte-661071470].sprite_hero,[svelte-661071470] .sprite_hero{background-image:url(\"images/sprite_hero.png\")}[svelte-661071470].googlenet-examples,[svelte-661071470] .googlenet-examples{font-size:16px;display:flex;flex-flow:column;grid-column:text-start / screen-end}[svelte-661071470].googlenet-examples .example,[svelte-661071470] .googlenet-examples .example{display:flex;flex-flow:column}[svelte-661071470].googlenet-examples .example .images,[svelte-661071470] .googlenet-examples .example .images{display:flex;flex-flow:row;flex-wrap:wrap;justify-content:flex-start}[svelte-661071470].googlenet-examples .example .images > *,[svelte-661071470] .googlenet-examples .example .images > *{margin-bottom:5px;margin-right:5px}[svelte-661071470].googlenet-examples .inner,[svelte-661071470] .googlenet-examples .inner{image-rendering:auto}[svelte-661071470].googlenet-examples .example .images span:last-of-type,[svelte-661071470] .googlenet-examples .example .images span:last-of-type{margin-bottom:0}[svelte-661071470].googlenet-examples .example:last-of-type,[svelte-661071470] .googlenet-examples .example:last-of-type{}[svelte-661071470].googlenet-examples > div:last-child,[svelte-661071470] .googlenet-examples > div:last-child{}[svelte-661071470].description,[svelte-661071470] .description{width:100%;margin-top:0.25em;margin-bottom:1.5em;color:rgba(0, 0, 0, 0.9);line-height:normal;font-size:0.8em}@media(min-width: 1105px){[svelte-661071470].googlenet-examples,[svelte-661071470] .googlenet-examples{grid-column:screen;flex-flow:row;justify-content:center}[svelte-661071470].googlenet-examples .example .images,[svelte-661071470] .googlenet-examples .example .images{flex-wrap:wrap}[svelte-661071470].googlenet-examples .example,[svelte-661071470] .googlenet-examples .example{margin-right:10px}[svelte-661071470].googlenet-examples .example:last-of-type,[svelte-661071470] .googlenet-examples .example:last-of-type{margin-right:0}[svelte-661071470].googlenet-examples .example .images,[svelte-661071470] .googlenet-examples .example .images{max-width:calc((100px * 2) + 10px);min-height:calc((100px * 3) + 10px)}}@media(min-width: 1400px){[svelte-661071470].googlenet-examples .example,[svelte-661071470] .googlenet-examples .example{margin-right:15px}[svelte-661071470].googlenet-examples .example .images,[svelte-661071470] .googlenet-examples .example .images{max-width:calc((125px * 2) + 10px);min-height:calc((125px * 3) + 10px)}}";
	(0, _shared.appendNode)(style, document.head);
}

function create_main_fragment(state, component) {
	var div, text_1, figcaption, text_2, a, text_3, text_4;

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

			text_1 = (0, _shared.createText)("\n");
			figcaption = (0, _shared.createElement)("figcaption");
			text_2 = (0, _shared.createText)("Feature visualization allows us to see how GoogLeNet, trained on the ImageNet dataset, builds up its understanding of images over many layers.\n  Visualizations of all channel are available in the ");
			a = (0, _shared.createElement)("a");
			text_3 = (0, _shared.createText)("appendix");
			text_4 = (0, _shared.createText)(".");
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			encapsulateStyles(div);
			div.className = "googlenet-examples";
			encapsulateStyles(figcaption);
			a.href = "appendix/";
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].mount(div, null);
			}

			(0, _shared.insertNode)(text_1, target, anchor);
			(0, _shared.insertNode)(figcaption, target, anchor);
			(0, _shared.appendNode)(text_2, figcaption);
			(0, _shared.appendNode)(a, figcaption);
			(0, _shared.appendNode)(text_3, a);
			(0, _shared.appendNode)(text_4, figcaption);
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

			(0, _shared.detachNode)(text_1);
			(0, _shared.detachNode)(figcaption);
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

	if (!document.getElementById("svelte-661071470-style")) add_css();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTYyOTU5ZDg1ODM2MzMzZWZlZjAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWdyYW1zL1Nwcml0ZS5odG1sIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmVsdGUtZXh0cmFzL2Rpc3Qvc3ZlbHRlLWV4dHJhcy5lcy5qcyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvaW1hZ2VzL1ByZWNvbmRpdGlvbmVyLmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFncmFtcy9Hb29nbGVOZXRFeGFtcGxlcy5odG1sIiwid2VicGFjazovLy8uL3NyYy9kaWFncmFtcy9JbWFnZUFycmF5Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWdyYW1zL09wdEV4cGxvcmUuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhZ3JhbXMvT3B0RXhwbG9yZTIuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhZ3JhbXMvT3B0RXhwbG9yZUZsZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhZ3JhbXMvR3JhZEFydGlmYWN0cy5odG1sIiwid2VicGFjazovLy8uL3NyYy9kaWFncmFtcy9PcHRBbmRFeGFtcGxlcy5odG1sIiwid2VicGFjazovLy8uL3NyYy9kaWFncmFtcy9MaW5lYXJDb21iaW5hdGlvbnMuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhZ3JhbXMvT3B0UHJvZ3Jlc3MuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhZ3JhbXMvRXhhbXBsZXNPcHRDb21wYXJpc29uLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWdyYW1zL1JhbmRvbUV4YW1wbGVzT3B0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ltYWdlcy9QZW5hbGl6ZUZyZXEuanNvbiIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvaW1hZ2VzL1RyYW5zZm9ybUV4cGxvcmUuanNvbiJdLCJuYW1lcyI6WyJ0YXJnZXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZmlndXJlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRhdGEiLCJzcmNfY2xhc3MiLCJpY29uX3NyY19jbGFzcyIsImljb25feCIsImxhYmVsX2Z1bmMiLCJuIiwiaSIsIm5faW1hZ2VzIiwibl9pY29ucyIsInNwcml0ZV9zaXplIiwic2l6ZSIsImljb25fc2NhbGUiLCJob3Zlcl9zY2FsZSIsInNlbGVjdGVkIiwiYmFja3dhcmRzIiwiT3B0RXhwbG9yZUZsZXhfY29uZmlncyIsIk9wdEV4cGxvcmVOYWl2ZSIsImNvbmZpZ3VyYWJsZSIsImljb25fdmFyX3ZhbHVlcyIsImRlY29ycmVsYXRlIiwidHJhbnNmb3JtcyIsInZhcl92YWx1ZXMiLCJsZWFybmluZ19yYXRlIiwiY29uZmlnIiwicmVxdWlyZSIsIlBlbmFsaXplRnJlcSIsImwxIiwidHYiLCJibHVyIiwiVHJhbnNmb3JtRXhwbG9yZSIsImppdHRlciIsInJhbmRvbV9yb3RhdGUiLCJyYW5kb21fc2NhbGUiLCJPcHRFeHBsb3JlIiwiYXBwIiwibG9hZF9zcHJpdGVtYXAiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sU0FBUztBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0E7QUFDQSxrQkFBa0IsNEJBQTRCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7O0FBRW5CLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0EsNEJBQTRCLGNBQWM7QUFDMUM7O0FBRUEsMkJBQTJCLGNBQWMsR0FBRztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esa0VBQWtFLGFBQWE7O0FBRS9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix1QkFBdUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSwyQkFBMkIsbUJBQW1CO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHVCQUF1QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDJCQUEyQix1QkFBdUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBS1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0FDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FuQlM7Ozs7Ozs7Ozs7a0NBQ1Q7Ozs7Ozs7Ozs7a0NBS1M7Ozs7Ozs7Ozs7a0NBQ1Q7Ozs7Ozs7Ozs7a0NBS1M7Ozs7Ozs7Ozs7a0NBQ1Q7Ozs7Ozs7Ozs7a0NBS1M7Ozs7Ozs7Ozs7a0NBQ1Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCM0Usa0JBQWtCLFdBQVcsa0ZBQWtGLEVBQUUsc0ZBQXNGLEVBQUUscUZBQXFGLGFBQWEsZ0pBQWdKLEVBQUUsd0ZBQXdGLFk7Ozs7OztBQ0FyaEIsa0JBQWtCLFdBQVcsaUZBQWlGLEVBQUUsd0ZBQXdGLEVBQUUsc0ZBQXNGLGFBQWEsZ0pBQWdKLEVBQUUsd0ZBQXdGLFkiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTYyOTU5ZDg1ODM2MzMzZWZlZjAiLCJmdW5jdGlvbiBub29wKCkge31cblxuZnVuY3Rpb24gYXNzaWduKHRhcmdldCkge1xuXHR2YXIgayxcblx0XHRzb3VyY2UsXG5cdFx0aSA9IDEsXG5cdFx0bGVuID0gYXJndW1lbnRzLmxlbmd0aDtcblx0Zm9yICg7IGkgPCBsZW47IGkrKykge1xuXHRcdHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblx0XHRmb3IgKGsgaW4gc291cmNlKSB0YXJnZXRba10gPSBzb3VyY2Vba107XG5cdH1cblxuXHRyZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBhcHBlbmROb2RlKG5vZGUsIHRhcmdldCkge1xuXHR0YXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG59XG5cbmZ1bmN0aW9uIGluc2VydE5vZGUobm9kZSwgdGFyZ2V0LCBhbmNob3IpIHtcblx0dGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IpO1xufVxuXG5mdW5jdGlvbiBkZXRhY2hOb2RlKG5vZGUpIHtcblx0bm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuXG5mdW5jdGlvbiBkZXRhY2hCZXR3ZWVuKGJlZm9yZSwgYWZ0ZXIpIHtcblx0d2hpbGUgKGJlZm9yZS5uZXh0U2libGluZyAmJiBiZWZvcmUubmV4dFNpYmxpbmcgIT09IGFmdGVyKSB7XG5cdFx0YmVmb3JlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYmVmb3JlLm5leHRTaWJsaW5nKTtcblx0fVxufVxuXG5mdW5jdGlvbiBkZXRhY2hCZWZvcmUoYWZ0ZXIpIHtcblx0d2hpbGUgKGFmdGVyLnByZXZpb3VzU2libGluZykge1xuXHRcdGFmdGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYWZ0ZXIucHJldmlvdXNTaWJsaW5nKTtcblx0fVxufVxuXG5mdW5jdGlvbiBkZXRhY2hBZnRlcihiZWZvcmUpIHtcblx0d2hpbGUgKGJlZm9yZS5uZXh0U2libGluZykge1xuXHRcdGJlZm9yZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGJlZm9yZS5uZXh0U2libGluZyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVpbnNlcnRCZXR3ZWVuKGJlZm9yZSwgYWZ0ZXIsIHRhcmdldCkge1xuXHR3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nICYmIGJlZm9yZS5uZXh0U2libGluZyAhPT0gYWZ0ZXIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoYmVmb3JlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYmVmb3JlLm5leHRTaWJsaW5nKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVpbnNlcnRDaGlsZHJlbihwYXJlbnQsIHRhcmdldCkge1xuXHR3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHRhcmdldC5hcHBlbmRDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG59XG5cbmZ1bmN0aW9uIHJlaW5zZXJ0QWZ0ZXIoYmVmb3JlLCB0YXJnZXQpIHtcblx0d2hpbGUgKGJlZm9yZS5uZXh0U2libGluZykgdGFyZ2V0LmFwcGVuZENoaWxkKGJlZm9yZS5uZXh0U2libGluZyk7XG59XG5cbmZ1bmN0aW9uIHJlaW5zZXJ0QmVmb3JlKGFmdGVyLCB0YXJnZXQpIHtcblx0dmFyIHBhcmVudCA9IGFmdGVyLnBhcmVudE5vZGU7XG5cdHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCAhPT0gYWZ0ZXIpIHRhcmdldC5hcHBlbmRDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG59XG5cbi8vIFRPRE8gdGhpcyBpcyBvdXQgb2YgZGF0ZVxuZnVuY3Rpb24gZGVzdHJveUVhY2goaXRlcmF0aW9ucywgZGV0YWNoLCBzdGFydCkge1xuXHRmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBpdGVyYXRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0aWYgKGl0ZXJhdGlvbnNbaV0pIGl0ZXJhdGlvbnNbaV0uZGVzdHJveShkZXRhY2gpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50KCkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KG5hbWUpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN2Z0VsZW1lbnQobmFtZSkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIG5hbWUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0KGRhdGEpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21tZW50KCkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJyk7XG59XG5cbmZ1bmN0aW9uIGFkZExpc3RlbmVyKG5vZGUsIGV2ZW50LCBoYW5kbGVyKSB7XG5cdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihub2RlLCBldmVudCwgaGFuZGxlcikge1xuXHRub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcblx0bm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHNldFhsaW5rQXR0cmlidXRlKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcblx0bm9kZS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsIGF0dHJpYnV0ZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBnZXRCaW5kaW5nR3JvdXBWYWx1ZShncm91cCkge1xuXHR2YXIgdmFsdWUgPSBbXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBncm91cC5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGlmIChncm91cFtpXS5jaGVja2VkKSB2YWx1ZS5wdXNoKGdyb3VwW2ldLl9fdmFsdWUpO1xuXHR9XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlID09PSAnJyA/IHVuZGVmaW5lZCA6ICt2YWx1ZTtcbn1cblxuZnVuY3Rpb24gY2hpbGRyZW4gKGVsZW1lbnQpIHtcblx0cmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5jaGlsZE5vZGVzKTtcbn1cblxuZnVuY3Rpb24gY2xhaW1FbGVtZW50IChub2RlcywgbmFtZSwgYXR0cmlidXRlcywgc3ZnKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHR2YXIgbm9kZSA9IG5vZGVzW2ldO1xuXHRcdGlmIChub2RlLm5vZGVOYW1lID09PSBuYW1lKSB7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG5vZGUuYXR0cmlidXRlcy5sZW5ndGg7IGogKz0gMSkge1xuXHRcdFx0XHR2YXIgYXR0cmlidXRlID0gbm9kZS5hdHRyaWJ1dGVzW2pdO1xuXHRcdFx0XHRpZiAoIWF0dHJpYnV0ZXNbYXR0cmlidXRlLm5hbWVdKSBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUubmFtZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbm9kZXMuc3BsaWNlKGksIDEpWzBdOyAvLyBUT0RPIHN0cmlwIHVud2FudGVkIGF0dHJpYnV0ZXNcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3ZnID8gY3JlYXRlU3ZnRWxlbWVudChuYW1lKSA6IGNyZWF0ZUVsZW1lbnQobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNsYWltVGV4dCAobm9kZXMsIGRhdGEpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdHZhciBub2RlID0gbm9kZXNbaV07XG5cdFx0aWYgKG5vZGUubm9kZVR5cGUgPT09IDMpIHtcblx0XHRcdG5vZGUuZGF0YSA9IGRhdGE7XG5cdFx0XHRyZXR1cm4gbm9kZXMuc3BsaWNlKGksIDEpWzBdO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjcmVhdGVUZXh0KGRhdGEpO1xufVxuXG5mdW5jdGlvbiBzZXRJbnB1dFR5cGUoaW5wdXQsIHR5cGUpIHtcblx0dHJ5IHtcblx0XHRpbnB1dC50eXBlID0gdHlwZTtcblx0fSBjYXRjaCAoZSkge31cbn1cblxuZnVuY3Rpb24gc2V0U3R5bGUobm9kZSwga2V5LCB2YWx1ZSkge1xuXHRub2RlLnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBsaW5lYXIodCkge1xuXHRyZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVSdWxlKFxuXHRhLFxuXHRiLFxuXHRkZWx0YSxcblx0ZHVyYXRpb24sXG5cdGVhc2UsXG5cdGZuXG4pIHtcblx0dmFyIGtleWZyYW1lcyA9ICd7XFxuJztcblxuXHRmb3IgKHZhciBwID0gMDsgcCA8PSAxOyBwICs9IDE2LjY2NiAvIGR1cmF0aW9uKSB7XG5cdFx0dmFyIHQgPSBhICsgZGVsdGEgKiBlYXNlKHApO1xuXHRcdGtleWZyYW1lcyArPSBwICogMTAwICsgJyV7JyArIGZuKHQpICsgJ31cXG4nO1xuXHR9XG5cblx0cmV0dXJuIGtleWZyYW1lcyArICcxMDAlIHsnICsgZm4oYikgKyAnfVxcbn0nO1xufVxuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZGFya3NreWFwcC9zdHJpbmctaGFzaC9ibG9iL21hc3Rlci9pbmRleC5qc1xuZnVuY3Rpb24gaGFzaChzdHIpIHtcblx0dmFyIGhhc2ggPSA1MzgxO1xuXHR2YXIgaSA9IHN0ci5sZW5ndGg7XG5cblx0d2hpbGUgKGktLSkgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpIF4gc3RyLmNoYXJDb2RlQXQoaSk7XG5cdHJldHVybiBoYXNoID4+PiAwO1xufVxuXG5mdW5jdGlvbiB3cmFwVHJhbnNpdGlvbihjb21wb25lbnQsIG5vZGUsIGZuLCBwYXJhbXMsIGludHJvLCBvdXRncm91cCkge1xuXHR2YXIgb2JqID0gZm4obm9kZSwgcGFyYW1zKTtcblx0dmFyIGR1cmF0aW9uID0gb2JqLmR1cmF0aW9uIHx8IDMwMDtcblx0dmFyIGVhc2UgPSBvYmouZWFzaW5nIHx8IGxpbmVhcjtcblx0dmFyIGNzc1RleHQ7XG5cblx0Ly8gVE9ETyBzaGFyZSA8c3R5bGU+IHRhZyBiZXR3ZWVuIGFsbCB0cmFuc2l0aW9ucz9cblx0aWYgKG9iai5jc3MgJiYgIXRyYW5zaXRpb25NYW5hZ2VyLnN0eWxlc2hlZXQpIHtcblx0XHR2YXIgc3R5bGUgPSBjcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdHRyYW5zaXRpb25NYW5hZ2VyLnN0eWxlc2hlZXQgPSBzdHlsZS5zaGVldDtcblx0fVxuXG5cdGlmIChpbnRybykge1xuXHRcdGlmIChvYmouY3NzICYmIG9iai5kZWxheSkge1xuXHRcdFx0Y3NzVGV4dCA9IG5vZGUuc3R5bGUuY3NzVGV4dDtcblx0XHRcdG5vZGUuc3R5bGUuY3NzVGV4dCArPSBvYmouY3NzKDApO1xuXHRcdH1cblxuXHRcdGlmIChvYmoudGljaykgb2JqLnRpY2soMCk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHQ6IGludHJvID8gMCA6IDEsXG5cdFx0cnVubmluZzogZmFsc2UsXG5cdFx0cHJvZ3JhbTogbnVsbCxcblx0XHRwZW5kaW5nOiBudWxsLFxuXHRcdHJ1bjogZnVuY3Rpb24oaW50cm8sIGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgcHJvZ3JhbSA9IHtcblx0XHRcdFx0c3RhcnQ6IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSArIChvYmouZGVsYXkgfHwgMCksXG5cdFx0XHRcdGludHJvOiBpbnRybyxcblx0XHRcdFx0Y2FsbGJhY2s6IGNhbGxiYWNrXG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAob2JqLmRlbGF5KSB7XG5cdFx0XHRcdHRoaXMucGVuZGluZyA9IHByb2dyYW07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnN0YXJ0KHByb2dyYW0pO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXRoaXMucnVubmluZykge1xuXHRcdFx0XHR0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0XHR0cmFuc2l0aW9uTWFuYWdlci5hZGQodGhpcyk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRzdGFydDogZnVuY3Rpb24ocHJvZ3JhbSkge1xuXHRcdFx0Y29tcG9uZW50LmZpcmUocHJvZ3JhbS5pbnRybyA/ICdpbnRyby5zdGFydCcgOiAnb3V0cm8uc3RhcnQnLCB7IG5vZGU6IG5vZGUgfSk7XG5cblx0XHRcdHByb2dyYW0uYSA9IHRoaXMudDtcblx0XHRcdHByb2dyYW0uYiA9IHByb2dyYW0uaW50cm8gPyAxIDogMDtcblx0XHRcdHByb2dyYW0uZGVsdGEgPSBwcm9ncmFtLmIgLSBwcm9ncmFtLmE7XG5cdFx0XHRwcm9ncmFtLmR1cmF0aW9uID0gZHVyYXRpb24gKiBNYXRoLmFicyhwcm9ncmFtLmIgLSBwcm9ncmFtLmEpO1xuXHRcdFx0cHJvZ3JhbS5lbmQgPSBwcm9ncmFtLnN0YXJ0ICsgcHJvZ3JhbS5kdXJhdGlvbjtcblxuXHRcdFx0aWYgKG9iai5jc3MpIHtcblx0XHRcdFx0aWYgKG9iai5kZWxheSkgbm9kZS5zdHlsZS5jc3NUZXh0ID0gY3NzVGV4dDtcblxuXHRcdFx0XHRwcm9ncmFtLnJ1bGUgPSBnZW5lcmF0ZVJ1bGUoXG5cdFx0XHRcdFx0cHJvZ3JhbS5hLFxuXHRcdFx0XHRcdHByb2dyYW0uYixcblx0XHRcdFx0XHRwcm9ncmFtLmRlbHRhLFxuXHRcdFx0XHRcdHByb2dyYW0uZHVyYXRpb24sXG5cdFx0XHRcdFx0ZWFzZSxcblx0XHRcdFx0XHRvYmouY3NzXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0dHJhbnNpdGlvbk1hbmFnZXIuYWRkUnVsZShwcm9ncmFtLnJ1bGUsIHByb2dyYW0ubmFtZSA9ICdfX3N2ZWx0ZV8nICsgaGFzaChwcm9ncmFtLnJ1bGUpKTtcblxuXHRcdFx0XHRub2RlLnN0eWxlLmFuaW1hdGlvbiA9IChub2RlLnN0eWxlLmFuaW1hdGlvbiB8fCAnJylcblx0XHRcdFx0XHQuc3BsaXQoJywgJylcblx0XHRcdFx0XHQuZmlsdGVyKGZ1bmN0aW9uKGFuaW0pIHtcblx0XHRcdFx0XHRcdC8vIHdoZW4gaW50cm9pbmcsIGRpc2NhcmQgb2xkIGFuaW1hdGlvbnMgaWYgdGhlcmUgYXJlIGFueVxuXHRcdFx0XHRcdFx0cmV0dXJuIGFuaW0gJiYgKHByb2dyYW0uZGVsdGEgPCAwIHx8ICEvX19zdmVsdGUvLnRlc3QoYW5pbSkpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmNvbmNhdChwcm9ncmFtLm5hbWUgKyAnICcgKyBkdXJhdGlvbiArICdtcyBsaW5lYXIgMSBmb3J3YXJkcycpXG5cdFx0XHRcdFx0LmpvaW4oJywgJyk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG5cdFx0XHR0aGlzLnBlbmRpbmcgPSBudWxsO1xuXHRcdH0sXG5cdFx0dXBkYXRlOiBmdW5jdGlvbihub3cpIHtcblx0XHRcdHZhciBwcm9ncmFtID0gdGhpcy5wcm9ncmFtO1xuXHRcdFx0aWYgKCFwcm9ncmFtKSByZXR1cm47XG5cblx0XHRcdHZhciBwID0gbm93IC0gcHJvZ3JhbS5zdGFydDtcblx0XHRcdHRoaXMudCA9IHByb2dyYW0uYSArIHByb2dyYW0uZGVsdGEgKiBlYXNlKHAgLyBwcm9ncmFtLmR1cmF0aW9uKTtcblx0XHRcdGlmIChvYmoudGljaykgb2JqLnRpY2sodGhpcy50KTtcblx0XHR9LFxuXHRcdGRvbmU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHByb2dyYW0gPSB0aGlzLnByb2dyYW07XG5cdFx0XHR0aGlzLnQgPSBwcm9ncmFtLmI7XG5cdFx0XHRpZiAob2JqLnRpY2spIG9iai50aWNrKHRoaXMudCk7XG5cdFx0XHRpZiAob2JqLmNzcykgdHJhbnNpdGlvbk1hbmFnZXIuZGVsZXRlUnVsZShub2RlLCBwcm9ncmFtLm5hbWUpO1xuXHRcdFx0cHJvZ3JhbS5jYWxsYmFjaygpO1xuXHRcdFx0cHJvZ3JhbSA9IG51bGw7XG5cdFx0XHR0aGlzLnJ1bm5pbmcgPSAhIXRoaXMucGVuZGluZztcblx0XHR9LFxuXHRcdGFib3J0OiBmdW5jdGlvbigpIHtcblx0XHRcdGlmIChvYmoudGljaykgb2JqLnRpY2soMSk7XG5cdFx0XHRpZiAob2JqLmNzcykgdHJhbnNpdGlvbk1hbmFnZXIuZGVsZXRlUnVsZShub2RlLCB0aGlzLnByb2dyYW0ubmFtZSk7XG5cdFx0XHR0aGlzLnByb2dyYW0gPSB0aGlzLnBlbmRpbmcgPSBudWxsO1xuXHRcdFx0dGhpcy5ydW5uaW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSB7XG5cdHJ1bm5pbmc6IGZhbHNlLFxuXHR0cmFuc2l0aW9uczogW10sXG5cdGJvdW5kOiBudWxsLFxuXHRzdHlsZXNoZWV0OiBudWxsLFxuXHRhY3RpdmVSdWxlczoge30sXG5cblx0YWRkOiBmdW5jdGlvbih0cmFuc2l0aW9uKSB7XG5cdFx0dGhpcy50cmFuc2l0aW9ucy5wdXNoKHRyYW5zaXRpb24pO1xuXG5cdFx0aWYgKCF0aGlzLnJ1bm5pbmcpIHtcblx0XHRcdHRoaXMucnVubmluZyA9IHRydWU7XG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5ib3VuZCB8fCAodGhpcy5ib3VuZCA9IHRoaXMubmV4dC5iaW5kKHRoaXMpKSk7XG5cdFx0fVxuXHR9LFxuXG5cdGFkZFJ1bGU6IGZ1bmN0aW9uKHJ1bGUsIG5hbWUpIHtcblx0XHRpZiAoIXRoaXMuYWN0aXZlUnVsZXNbbmFtZV0pIHtcblx0XHRcdHRoaXMuYWN0aXZlUnVsZXNbbmFtZV0gPSB0cnVlO1xuXHRcdFx0dGhpcy5zdHlsZXNoZWV0Lmluc2VydFJ1bGUoJ0BrZXlmcmFtZXMgJyArIG5hbWUgKyAnICcgKyBydWxlLCB0aGlzLnN0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcblx0XHR9XG5cdH0sXG5cblx0bmV4dDogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5ydW5uaW5nID0gZmFsc2U7XG5cblx0XHR2YXIgbm93ID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuXHRcdHZhciBpID0gdGhpcy50cmFuc2l0aW9ucy5sZW5ndGg7XG5cblx0XHR3aGlsZSAoaS0tKSB7XG5cdFx0XHR2YXIgdHJhbnNpdGlvbiA9IHRoaXMudHJhbnNpdGlvbnNbaV07XG5cblx0XHRcdGlmICh0cmFuc2l0aW9uLnByb2dyYW0gJiYgbm93ID49IHRyYW5zaXRpb24ucHJvZ3JhbS5lbmQpIHtcblx0XHRcdFx0dHJhbnNpdGlvbi5kb25lKCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0cmFuc2l0aW9uLnBlbmRpbmcgJiYgbm93ID49IHRyYW5zaXRpb24ucGVuZGluZy5zdGFydCkge1xuXHRcdFx0XHR0cmFuc2l0aW9uLnN0YXJ0KHRyYW5zaXRpb24ucGVuZGluZyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0cmFuc2l0aW9uLnJ1bm5pbmcpIHtcblx0XHRcdFx0dHJhbnNpdGlvbi51cGRhdGUobm93KTtcblx0XHRcdFx0dGhpcy5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSBpZiAoIXRyYW5zaXRpb24ucGVuZGluZykge1xuXHRcdFx0XHR0aGlzLnRyYW5zaXRpb25zLnNwbGljZShpLCAxKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodGhpcy5ydW5uaW5nKSB7XG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5ib3VuZCk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLnN0eWxlc2hlZXQpIHtcblx0XHRcdHZhciBpID0gdGhpcy5zdHlsZXNoZWV0LmNzc1J1bGVzLmxlbmd0aDtcblx0XHRcdHdoaWxlIChpLS0pIHRoaXMuc3R5bGVzaGVldC5kZWxldGVSdWxlKGkpO1xuXHRcdFx0dGhpcy5hY3RpdmVSdWxlcyA9IHt9O1xuXHRcdH1cblx0fSxcblxuXHRkZWxldGVSdWxlOiBmdW5jdGlvbihub2RlLCBuYW1lKSB7XG5cdFx0bm9kZS5zdHlsZS5hbmltYXRpb24gPSBub2RlLnN0eWxlLmFuaW1hdGlvblxuXHRcdFx0LnNwbGl0KCcsICcpXG5cdFx0XHQuZmlsdGVyKGZ1bmN0aW9uKGFuaW0pIHtcblx0XHRcdFx0cmV0dXJuIGFuaW0uc2xpY2UoMCwgbmFtZS5sZW5ndGgpICE9PSBuYW1lO1xuXHRcdFx0fSlcblx0XHRcdC5qb2luKCcsICcpO1xuXHR9XG59O1xuXG5mdW5jdGlvbiBkZXN0cm95KGRldGFjaCkge1xuXHR0aGlzLmRlc3Ryb3kgPSBub29wO1xuXHR0aGlzLmZpcmUoJ2Rlc3Ryb3knKTtcblx0dGhpcy5zZXQgPSB0aGlzLmdldCA9IG5vb3A7XG5cblx0aWYgKGRldGFjaCAhPT0gZmFsc2UpIHRoaXMuX2ZyYWdtZW50LnVubW91bnQoKTtcblx0dGhpcy5fZnJhZ21lbnQuZGVzdHJveSgpO1xuXHR0aGlzLl9mcmFnbWVudCA9IHRoaXMuX3N0YXRlID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gZGVzdHJveURldihkZXRhY2gpIHtcblx0ZGVzdHJveS5jYWxsKHRoaXMsIGRldGFjaCk7XG5cdHRoaXMuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUud2FybignQ29tcG9uZW50IHdhcyBhbHJlYWR5IGRlc3Ryb3llZCcpO1xuXHR9O1xufVxuXG5mdW5jdGlvbiBkaWZmZXJzKGEsIGIpIHtcblx0cmV0dXJuIGEgIT09IGIgfHwgKChhICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JykgfHwgdHlwZW9mIGEgPT09ICdmdW5jdGlvbicpO1xufVxuXG5mdW5jdGlvbiBkaXNwYXRjaE9ic2VydmVycyhjb21wb25lbnQsIGdyb3VwLCBjaGFuZ2VkLCBuZXdTdGF0ZSwgb2xkU3RhdGUpIHtcblx0Zm9yICh2YXIga2V5IGluIGdyb3VwKSB7XG5cdFx0aWYgKCFjaGFuZ2VkW2tleV0pIGNvbnRpbnVlO1xuXG5cdFx0dmFyIG5ld1ZhbHVlID0gbmV3U3RhdGVba2V5XTtcblx0XHR2YXIgb2xkVmFsdWUgPSBvbGRTdGF0ZVtrZXldO1xuXG5cdFx0dmFyIGNhbGxiYWNrcyA9IGdyb3VwW2tleV07XG5cdFx0aWYgKCFjYWxsYmFja3MpIGNvbnRpbnVlO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdHZhciBjYWxsYmFjayA9IGNhbGxiYWNrc1tpXTtcblx0XHRcdGlmIChjYWxsYmFjay5fX2NhbGxpbmcpIGNvbnRpbnVlO1xuXG5cdFx0XHRjYWxsYmFjay5fX2NhbGxpbmcgPSB0cnVlO1xuXHRcdFx0Y2FsbGJhY2suY2FsbChjb21wb25lbnQsIG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XG5cdFx0XHRjYWxsYmFjay5fX2NhbGxpbmcgPSBmYWxzZTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0KGtleSkge1xuXHRyZXR1cm4ga2V5ID8gdGhpcy5fc3RhdGVba2V5XSA6IHRoaXMuX3N0YXRlO1xufVxuXG5mdW5jdGlvbiBmaXJlKGV2ZW50TmFtZSwgZGF0YSkge1xuXHR2YXIgaGFuZGxlcnMgPVxuXHRcdGV2ZW50TmFtZSBpbiB0aGlzLl9oYW5kbGVycyAmJiB0aGlzLl9oYW5kbGVyc1tldmVudE5hbWVdLnNsaWNlKCk7XG5cdGlmICghaGFuZGxlcnMpIHJldHVybjtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGhhbmRsZXJzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0aGFuZGxlcnNbaV0uY2FsbCh0aGlzLCBkYXRhKTtcblx0fVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKGtleSwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcblx0dmFyIGdyb3VwID0gb3B0aW9ucyAmJiBvcHRpb25zLmRlZmVyXG5cdFx0PyB0aGlzLl9vYnNlcnZlcnMucG9zdFxuXHRcdDogdGhpcy5fb2JzZXJ2ZXJzLnByZTtcblxuXHQoZ3JvdXBba2V5XSB8fCAoZ3JvdXBba2V5XSA9IFtdKSkucHVzaChjYWxsYmFjayk7XG5cblx0aWYgKCFvcHRpb25zIHx8IG9wdGlvbnMuaW5pdCAhPT0gZmFsc2UpIHtcblx0XHRjYWxsYmFjay5fX2NhbGxpbmcgPSB0cnVlO1xuXHRcdGNhbGxiYWNrLmNhbGwodGhpcywgdGhpcy5fc3RhdGVba2V5XSk7XG5cdFx0Y2FsbGJhY2suX19jYWxsaW5nID0gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGNhbmNlbDogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaW5kZXggPSBncm91cFtrZXldLmluZGV4T2YoY2FsbGJhY2spO1xuXHRcdFx0aWYgKH5pbmRleCkgZ3JvdXBba2V5XS5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZURldihrZXksIGNhbGxiYWNrLCBvcHRpb25zKSB7XG5cdHZhciBjID0gKGtleSA9ICcnICsga2V5KS5zZWFyY2goL1teXFx3XS8pO1xuXHRpZiAoYyA+IC0xKSB7XG5cdFx0dmFyIG1lc3NhZ2UgPVxuXHRcdFx0J1RoZSBmaXJzdCBhcmd1bWVudCB0byBjb21wb25lbnQub2JzZXJ2ZSguLi4pIG11c3QgYmUgdGhlIG5hbWUgb2YgYSB0b3AtbGV2ZWwgcHJvcGVydHknO1xuXHRcdGlmIChjID4gMClcblx0XHRcdG1lc3NhZ2UgKz0gXCIsIGkuZS4gJ1wiICsga2V5LnNsaWNlKDAsIGMpICsgXCInIHJhdGhlciB0aGFuICdcIiArIGtleSArIFwiJ1wiO1xuXG5cdFx0dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuXHR9XG5cblx0cmV0dXJuIG9ic2VydmUuY2FsbCh0aGlzLCBrZXksIGNhbGxiYWNrLCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gb24oZXZlbnROYW1lLCBoYW5kbGVyKSB7XG5cdGlmIChldmVudE5hbWUgPT09ICd0ZWFyZG93bicpIHJldHVybiB0aGlzLm9uKCdkZXN0cm95JywgaGFuZGxlcik7XG5cblx0dmFyIGhhbmRsZXJzID0gdGhpcy5faGFuZGxlcnNbZXZlbnROYW1lXSB8fCAodGhpcy5faGFuZGxlcnNbZXZlbnROYW1lXSA9IFtdKTtcblx0aGFuZGxlcnMucHVzaChoYW5kbGVyKTtcblxuXHRyZXR1cm4ge1xuXHRcdGNhbmNlbDogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaW5kZXggPSBoYW5kbGVycy5pbmRleE9mKGhhbmRsZXIpO1xuXHRcdFx0aWYgKH5pbmRleCkgaGFuZGxlcnMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIG9uRGV2KGV2ZW50TmFtZSwgaGFuZGxlcikge1xuXHRpZiAoZXZlbnROYW1lID09PSAndGVhcmRvd24nKSB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XCJVc2UgY29tcG9uZW50Lm9uKCdkZXN0cm95JywgLi4uKSBpbnN0ZWFkIG9mIGNvbXBvbmVudC5vbigndGVhcmRvd24nLCAuLi4pIHdoaWNoIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgdW5zdXBwb3J0ZWQgaW4gU3ZlbHRlIDJcIlxuXHRcdCk7XG5cdFx0cmV0dXJuIHRoaXMub24oJ2Rlc3Ryb3knLCBoYW5kbGVyKTtcblx0fVxuXG5cdHJldHVybiBvbi5jYWxsKHRoaXMsIGV2ZW50TmFtZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIHNldChuZXdTdGF0ZSkge1xuXHR0aGlzLl9zZXQoYXNzaWduKHt9LCBuZXdTdGF0ZSkpO1xuXHRpZiAodGhpcy5fcm9vdC5fbG9jaykgcmV0dXJuO1xuXHR0aGlzLl9yb290Ll9sb2NrID0gdHJ1ZTtcblx0Y2FsbEFsbCh0aGlzLl9yb290Ll9iZWZvcmVjcmVhdGUpO1xuXHRjYWxsQWxsKHRoaXMuX3Jvb3QuX29uY3JlYXRlKTtcblx0Y2FsbEFsbCh0aGlzLl9yb290Ll9hZnRlcmNyZWF0ZSk7XG5cdHRoaXMuX3Jvb3QuX2xvY2sgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gX3NldChuZXdTdGF0ZSkge1xuXHR2YXIgb2xkU3RhdGUgPSB0aGlzLl9zdGF0ZSxcblx0XHRjaGFuZ2VkID0ge30sXG5cdFx0ZGlydHkgPSBmYWxzZTtcblxuXHRmb3IgKHZhciBrZXkgaW4gbmV3U3RhdGUpIHtcblx0XHRpZiAoZGlmZmVycyhuZXdTdGF0ZVtrZXldLCBvbGRTdGF0ZVtrZXldKSkgY2hhbmdlZFtrZXldID0gZGlydHkgPSB0cnVlO1xuXHR9XG5cdGlmICghZGlydHkpIHJldHVybjtcblxuXHR0aGlzLl9zdGF0ZSA9IGFzc2lnbih7fSwgb2xkU3RhdGUsIG5ld1N0YXRlKTtcblx0dGhpcy5fcmVjb21wdXRlKGNoYW5nZWQsIHRoaXMuX3N0YXRlLCBvbGRTdGF0ZSwgZmFsc2UpO1xuXHRpZiAodGhpcy5fYmluZCkgdGhpcy5fYmluZChjaGFuZ2VkLCB0aGlzLl9zdGF0ZSk7XG5cdGRpc3BhdGNoT2JzZXJ2ZXJzKHRoaXMsIHRoaXMuX29ic2VydmVycy5wcmUsIGNoYW5nZWQsIHRoaXMuX3N0YXRlLCBvbGRTdGF0ZSk7XG5cdHRoaXMuX2ZyYWdtZW50LnVwZGF0ZShjaGFuZ2VkLCB0aGlzLl9zdGF0ZSk7XG5cdGRpc3BhdGNoT2JzZXJ2ZXJzKHRoaXMsIHRoaXMuX29ic2VydmVycy5wb3N0LCBjaGFuZ2VkLCB0aGlzLl9zdGF0ZSwgb2xkU3RhdGUpO1xufVxuXG5mdW5jdGlvbiBfc2V0RGV2KG5ld1N0YXRlKSB7XG5cdGlmICh0eXBlb2YgbmV3U3RhdGUgIT09ICdvYmplY3QnKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0dGhpcy5fZGVidWdOYW1lICsgJyAuc2V0IHdhcyBjYWxsZWQgd2l0aG91dCBhbiBvYmplY3Qgb2YgZGF0YSBrZXktdmFsdWVzIHRvIHVwZGF0ZS4nXG5cdFx0KTtcblx0fVxuXG5cdHRoaXMuX2NoZWNrUmVhZE9ubHkobmV3U3RhdGUpO1xuXHRfc2V0LmNhbGwodGhpcywgbmV3U3RhdGUpO1xufVxuXG5mdW5jdGlvbiBjYWxsQWxsKGZucykge1xuXHR3aGlsZSAoZm5zICYmIGZucy5sZW5ndGgpIGZucy5wb3AoKSgpO1xufVxuXG5mdW5jdGlvbiBfbW91bnQodGFyZ2V0LCBhbmNob3IpIHtcblx0dGhpcy5fZnJhZ21lbnQubW91bnQodGFyZ2V0LCBhbmNob3IpO1xufVxuXG5mdW5jdGlvbiBfdW5tb3VudCgpIHtcblx0dGhpcy5fZnJhZ21lbnQudW5tb3VudCgpO1xufVxuXG52YXIgcHJvdG8gPSB7XG5cdGRlc3Ryb3k6IGRlc3Ryb3ksXG5cdGdldDogZ2V0LFxuXHRmaXJlOiBmaXJlLFxuXHRvYnNlcnZlOiBvYnNlcnZlLFxuXHRvbjogb24sXG5cdHNldDogc2V0LFxuXHR0ZWFyZG93bjogZGVzdHJveSxcblx0X3JlY29tcHV0ZTogbm9vcCxcblx0X3NldDogX3NldCxcblx0X21vdW50OiBfbW91bnQsXG5cdF91bm1vdW50OiBfdW5tb3VudFxufTtcblxudmFyIHByb3RvRGV2ID0ge1xuXHRkZXN0cm95OiBkZXN0cm95RGV2LFxuXHRnZXQ6IGdldCxcblx0ZmlyZTogZmlyZSxcblx0b2JzZXJ2ZTogb2JzZXJ2ZURldixcblx0b246IG9uRGV2LFxuXHRzZXQ6IHNldCxcblx0dGVhcmRvd246IGRlc3Ryb3lEZXYsXG5cdF9yZWNvbXB1dGU6IG5vb3AsXG5cdF9zZXQ6IF9zZXREZXYsXG5cdF9tb3VudDogX21vdW50LFxuXHRfdW5tb3VudDogX3VubW91bnRcbn07XG5cbmV4cG9ydCB7IGRlc3Ryb3ksIGRlc3Ryb3lEZXYsIGRpZmZlcnMsIGRpc3BhdGNoT2JzZXJ2ZXJzLCBnZXQsIGZpcmUsIG9ic2VydmUsIG9ic2VydmVEZXYsIG9uLCBvbkRldiwgc2V0LCBfc2V0LCBfc2V0RGV2LCBjYWxsQWxsLCBfbW91bnQsIF91bm1vdW50LCBwcm90bywgcHJvdG9EZXYsIGFwcGVuZE5vZGUsIGluc2VydE5vZGUsIGRldGFjaE5vZGUsIGRldGFjaEJldHdlZW4sIGRldGFjaEJlZm9yZSwgZGV0YWNoQWZ0ZXIsIHJlaW5zZXJ0QmV0d2VlbiwgcmVpbnNlcnRDaGlsZHJlbiwgcmVpbnNlcnRBZnRlciwgcmVpbnNlcnRCZWZvcmUsIGRlc3Ryb3lFYWNoLCBjcmVhdGVGcmFnbWVudCwgY3JlYXRlRWxlbWVudCwgY3JlYXRlU3ZnRWxlbWVudCwgY3JlYXRlVGV4dCwgY3JlYXRlQ29tbWVudCwgYWRkTGlzdGVuZXIsIHJlbW92ZUxpc3RlbmVyLCBzZXRBdHRyaWJ1dGUsIHNldFhsaW5rQXR0cmlidXRlLCBnZXRCaW5kaW5nR3JvdXBWYWx1ZSwgdG9OdW1iZXIsIGNoaWxkcmVuLCBjbGFpbUVsZW1lbnQsIGNsYWltVGV4dCwgc2V0SW5wdXRUeXBlLCBzZXRTdHlsZSwgbGluZWFyLCBnZW5lcmF0ZVJ1bGUsIGhhc2gsIHdyYXBUcmFuc2l0aW9uLCB0cmFuc2l0aW9uTWFuYWdlciwgbm9vcCwgYXNzaWduIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdmVsdGUvc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuPGRpdiByZWY6cm9vdCBjbGFzcz1cInNwcml0ZSBvdXRlciB7e2hvdmVyX2NsYXNzfX1cIiBzdHlsZT1cIi0tZGVmYXVsdC1zaXplOiB7e2ZpbmFsX3Nwcml0ZV9zaXplfX1weDtcbiAtLWRlZmF1bHQtcG9zaXRpb246IC17e29mZnNldF94fX1weCAte3tvZmZzZXRfeX19cHg7XG4gLS1ob3Zlci1zaXplOiB7e3Nwcml0ZV9zaXplfX1weDtcbiAtLWhvdmVyLXBvc2l0aW9uOiAte3tjb3JuZXJfeH19cHggLXt7Y29ybmVyX3l9fXB4O1xuIC0tY29udGFpbmVyLXNpemU6IHt7c2l6ZX19cHg7IFxuIC0tZGVmYXVsdC1yYXRpbzoge3sgc2l6ZSAvIGZpbmFsX3Nwcml0ZV9zaXplIH19O1xuIC0taG92ZXItc2NhbGU6IHt7aG92ZXJfc2NhbGV9fTtcbiAtLXRyYW5zaXRpb25fY3NzOiB7e3RyYW5zaXRpb25fY3NzfX07XG4gLS1ib3JkZXJfY3NzOiB7e2JvcmRlcl9jc3N9fTtcbiAtLXBpeGVsYXRlZDoge3twaXhlbGF0ZWQgPyAncGl4ZWxhdGVkJyA6ICdhdXRvJ319XCI+XG4gIDxkaXYgY2xhc3M9XCJtaWRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5uZXIge3tzcmNfY2xhc3N9fVwiPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48c3R5bGU+XG5cbi5vdXRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIC8qbWFyZ2luLXJpZ2h0OiAycHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDsqL1xuICB3aWR0aDogdmFyKC0tY29udGFpbmVyLXNpemUpO1xuICBoZWlnaHQ6IHZhcigtLWNvbnRhaW5lci1zaXplKTtcbn1cblxuLm1pZCwgLmlubmVyIHtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbl9jc3MpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLm1pZCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoIHZhcigtLWRlZmF1bHQtcmF0aW8pICk7XG4gIG1hcmdpbjogY2FsYyggY2FsYyggdmFyKC0tY29udGFpbmVyLXNpemUpIC0gdmFyKC0tZGVmYXVsdC1zaXplKSApIC8gMiApO1xufVxuXG4uaW5uZXIge1xuICBpbWFnZS1yZW5kZXJpbmc6ICB2YXIoLS1waXhlbGF0ZWQpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB2YXIoLS1kZWZhdWx0LXBvc2l0aW9uKTtcbiAgd2lkdGg6IHZhcigtLWRlZmF1bHQtc2l6ZSk7XG4gIGhlaWdodDogdmFyKC0tZGVmYXVsdC1zaXplKTtcbn1cblxuLm91dGVyLmhvdmVyYWJsZTpob3ZlciB7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLm91dGVyLmhvdmVyYWJsZTpob3ZlciAuaW5uZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB2YXIoLS1ob3Zlci1wb3NpdGlvbik7XG4gIHdpZHRoOiB2YXIoLS1ob3Zlci1zaXplKTtcbiAgaGVpZ2h0OiB2YXIoLS1ob3Zlci1zaXplKTtcbiAgLyp0cmFuc2l0aW9uOiBub25lOyovXG59XG5cbi5vdXRlci5ob3ZlcmFibGU6aG92ZXIgLm1pZCB7XG4gIHRyYW5zZm9ybTogc2NhbGUodmFyKC0taG92ZXItc2NhbGUpKTtcbiAgbWFyZ2luOiBjYWxjKCBjYWxjKCB2YXIoLS1jb250YWluZXItc2l6ZSkgLSB2YXIoLS1ob3Zlci1zaXplKSApIC8gMiApO1xuICAvKnRyYW5zaXRpb246IG5vbmU7Ki9cbiAgLypib3gtc2hhZG93OiAwcHggNXB4IDIwcHggcmdiYSgwLDAsMCwwLjY2Nyk7Ki9cbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXJfY3NzKTtcbiAgd2lkdGg6IHZhcigtLWhvdmVyLXNpemUpO1xufVxuXG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNyY19jbGFzczogXCJtaXhlZDRkXCIsXG4gICAgICAgIHNwcml0ZV9zaXplOiAyMDAsXG4gICAgICAgIHNwcml0ZV9zY2FsZTogMS4wLFxuICAgICAgICBzaXplOiAxMDAsXG4gICAgICAgIHg6IDAsIC8vIHNwZWNpZmllZCBpbiBTcHJpdGUgc3ViY2xhc3Nlc1xuICAgICAgICB5OiAwLFxuICAgICAgICBzaGlmdDogWzAuNSwwLjVdLFxuICAgICAgICBob3ZlcjogZmFsc2UsXG4gICAgICAgIGhvdmVyX3NjYWxlOiAxLFxuICAgICAgICB0cmFuc2l0aW9uX2JhY2tncm91bmQ6IGZhbHNlLFxuICAgICAgICBib3JkZXI6IGZhbHNlLFxuICAgICAgICBwaXhlbGF0ZWQ6IHRydWVcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICBjb3JuZXJfeDogKHNwcml0ZV9zaXplLCB4LCBzcHJpdGVfc2NhbGUpID0+IHNwcml0ZV9zaXplKngsXG4gICAgICBjb3JuZXJfeTogKHNwcml0ZV9zaXplLCB5LCBzcHJpdGVfc2NhbGUpID0+IHNwcml0ZV9zaXplKnksXG4gICAgICBvZmZzZXRfeDogKHNwcml0ZV9zaXplLCBzcHJpdGVfc2NhbGUsIGNvcm5lcl94LCBzaGlmdCwgc2l6ZSwgcmF0aW8pID0+IHtcbiAgICAgICAgcmV0dXJuIGNvcm5lcl94ICsgc3ByaXRlX3NpemUgKiBzaGlmdFswXSAqICgxLXNwcml0ZV9zY2FsZSk7XG4gICAgICB9LFxuICAgICAgb2Zmc2V0X3k6IChzcHJpdGVfc2l6ZSwgc3ByaXRlX3NjYWxlLCBjb3JuZXJfeSwgc2hpZnQsIHNpemUsIHJhdGlvKSA9PiB7XG4gICAgICAgIHJldHVybiBjb3JuZXJfeSArIHNwcml0ZV9zaXplICogc2hpZnRbMV0gKiAoMS1zcHJpdGVfc2NhbGUpO1xuICAgICAgfSxcbiAgICAgIGZpbmFsX3Nwcml0ZV9zaXplOiAoc3ByaXRlX3NjYWxlLCBzcHJpdGVfc2l6ZSkgPT4gc3ByaXRlX3NjYWxlICogc3ByaXRlX3NpemUsXG4gICAgICByYXRpbzogKHNpemUsIGZpbmFsX3Nwcml0ZV9zaXplKSA9PiBzaXplL2ZpbmFsX3Nwcml0ZV9zaXplLFxuICAgICAgbWFyZ2luOiAoZmluYWxfc3ByaXRlX3NpemUsIHNpemUpID0+IC0oZmluYWxfc3ByaXRlX3NpemUtc2l6ZSkvMixcbiAgICAgIHRyYW5zaXRpb25fY3NzOiAodHJhbnNpdGlvbl9iYWNrZ3JvdW5kKSA9PiB7XG4gICAgICAgIGxldCBjc3MgPSBgd2lkdGggMC4xcyBlYXNlLW91dCwgaGVpZ2h0IDAuMXMgZWFzZS1vdXQsIG1hcmdpbiAwLjFzIGVhc2Utb3V0LCB0cmFuc2Zvcm0gMC4xcyBlYXNlLW91dGA7XG4gICAgICAgIGlmICh0cmFuc2l0aW9uX2JhY2tncm91bmQpIHtcbiAgICAgICAgICBjc3MgKz0gYCwgYmFja2dyb3VuZC1wb3NpdGlvbiAwLjFzIGVhc2Utb3V0YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3NzO1xuICAgICAgfSxcbiAgICAgIGJvcmRlcl9jc3M6IChib3JkZXIpID0+IGJvcmRlciA/ICcycHggc29saWQgd2hpdGUnIDogJ25vbmUnLFxuICAgICAgaG92ZXJfY2xhc3M6IChob3ZlcikgPT4gaG92ZXIgPyAnaG92ZXJhYmxlJyA6ICcnXG4gICAgfSxcbiAgICBvbmNyZWF0ZSgpIHtcbiAgICAgIC8vIHRoaXMub2JzZXJ2ZSgneCcsICh4MSwgeDIpID0+IGNvbnNvbGUubG9nKHRoaXMpKVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlhZ3JhbXMvU3ByaXRlLmh0bWwiLCJ2YXIgYXJyYXlOb3RhdGlvblBhdHRlcm4gPSAvXFxbXFxzKihcXGQrKVxccypcXF0vZztcbmZ1bmN0aW9uIG1ha2VBcnJheU1ldGhvZChuYW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChrZXlwYXRoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwYXJ0cyA9IGtleXBhdGgucmVwbGFjZShhcnJheU5vdGF0aW9uUGF0dGVybiwgJy4kMScpLnNwbGl0KCcuJyk7XG4gICAgICAgIHZhciBrZXkgPSBwYXJ0cy5zaGlmdCgpO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmdldChrZXkpO1xuICAgICAgICB2YXIgYXJyYXkgPSB2YWx1ZTtcbiAgICAgICAgd2hpbGUgKHBhcnRzLmxlbmd0aClcbiAgICAgICAgICAgIGFycmF5ID0gYXJyYXlbcGFydHMuc2hpZnQoKV07XG4gICAgICAgIHZhciByZXN1bHQgPSBhcnJheVtuYW1lXS5hcHBseShhcnJheSwgYXJncyk7XG4gICAgICAgIHRoaXMuc2V0KChfYSA9IHt9LCBfYVtrZXldID0gdmFsdWUsIF9hKSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIHZhciBfYTtcbiAgICB9O1xufVxudmFyIHB1c2ggPSBtYWtlQXJyYXlNZXRob2QoJ3B1c2gnKTtcbnZhciBwb3AgPSBtYWtlQXJyYXlNZXRob2QoJ3BvcCcpO1xudmFyIHNoaWZ0ID0gbWFrZUFycmF5TWV0aG9kKCdzaGlmdCcpO1xudmFyIHVuc2hpZnQgPSBtYWtlQXJyYXlNZXRob2QoJ3Vuc2hpZnQnKTtcbnZhciBzcGxpY2UgPSBtYWtlQXJyYXlNZXRob2QoJ3NwbGljZScpO1xudmFyIHNvcnQgPSBtYWtlQXJyYXlNZXRob2QoJ3NvcnQnKTtcbnZhciByZXZlcnNlID0gbWFrZUFycmF5TWV0aG9kKCdyZXZlcnNlJyk7XG5cbmZ1bmN0aW9uIGlzRGF0ZShvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxudmFyIHNjaGVkdWxlciA9IHtcbiAgICBjb21wb25lbnRzOiBbXSxcbiAgICBydW5uaW5nOiBmYWxzZSxcbiAgICBhZGQ6IGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgICAgICAgaWYgKH5zY2hlZHVsZXIuY29tcG9uZW50cy5pbmRleE9mKGNvbXBvbmVudCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHNjaGVkdWxlci5jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgICAgaWYgKCFzY2hlZHVsZXIucnVubmluZykge1xuICAgICAgICAgICAgc2NoZWR1bGVyLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNjaGVkdWxlci5uZXh0KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbm93ID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB2YXIgaGFzQ29tcG9uZW50cyA9IGZhbHNlO1xuICAgICAgICB2YXIgaSA9IHNjaGVkdWxlci5jb21wb25lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgdmFyIGNvbXBvbmVudCA9IHNjaGVkdWxlci5jb21wb25lbnRzW2ldO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7fTtcbiAgICAgICAgICAgIHZhciBoYXNUd2VlbnMgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBjb21wb25lbnQuX2N1cnJlbnRUd2VlbnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IGNvbXBvbmVudC5fY3VycmVudFR3ZWVuc1trZXldO1xuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gdC5lbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtrZXldID0gdC50bztcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNvbXBvbmVudC5fY3VycmVudFR3ZWVuc1trZXldO1xuICAgICAgICAgICAgICAgICAgICB0LmZ1bGZpbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzVHdlZW5zID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaGFzQ29tcG9uZW50cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub3cgPj0gdC5zdGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSAobm93IC0gdC5zdGFydCkgLyB0LmR1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtrZXldID0gdC52YWx1ZSh0LmVhc2UocCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29tcG9uZW50Ll90d2VlbmluZyA9IHRydWU7XG4gICAgICAgICAgICBjb21wb25lbnQuc2V0KGRhdGEpO1xuICAgICAgICAgICAgY29tcG9uZW50Ll90d2VlbmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKCFoYXNUd2VlbnMpXG4gICAgICAgICAgICAgICAgc2NoZWR1bGVyLmNvbXBvbmVudHMuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNDb21wb25lbnRzKSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2NoZWR1bGVyLm5leHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2NoZWR1bGVyLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5mdW5jdGlvbiBzbmFwKHRvKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRvOyB9O1xufVxuZnVuY3Rpb24gaW50ZXJwb2xhdGUoYSwgYikge1xuICAgIGlmIChhID09PSBiIHx8IGEgIT09IGEpXG4gICAgICAgIHJldHVybiBzbmFwKGEpO1xuICAgIHZhciB0eXBlID0gdHlwZW9mIGE7XG4gICAgaWYgKHR5cGUgIT09IHR5cGVvZiBiIHx8IEFycmF5LmlzQXJyYXkoYSkgIT09IEFycmF5LmlzQXJyYXkoYikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgaW50ZXJwb2xhdGUgdmFsdWVzIG9mIGRpZmZlcmVudCB0eXBlJyk7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgICAgIHZhciBhcnJfMSA9IGIubWFwKGZ1bmN0aW9uIChiaSwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIGludGVycG9sYXRlKGFbaV0sIGJpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgcmV0dXJuIGFycl8xLm1hcChmdW5jdGlvbiAoZm4pIHsgcmV0dXJuIGZuKHQpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmICghYSB8fCAhYilcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignT2JqZWN0IGNhbm5vdCBiZSBudWxsJyk7XG4gICAgICAgIGlmIChpc0RhdGUoYSkgJiYgaXNEYXRlKGIpKSB7XG4gICAgICAgICAgICBhID0gYS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBiID0gYi5nZXRUaW1lKCk7XG4gICAgICAgICAgICB2YXIgZGVsdGFfMSA9IGIgLSBhO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGEgKyB0ICogZGVsdGFfMSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHZhciBrZXlzXzEgPSBPYmplY3Qua2V5cyhiKTtcbiAgICAgICAgdmFyIGludGVycG9sYXRvcnNfMSA9IHt9O1xuICAgICAgICB2YXIgcmVzdWx0XzEgPSB7fTtcbiAgICAgICAga2V5c18xLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaW50ZXJwb2xhdG9yc18xW2tleV0gPSBpbnRlcnBvbGF0ZShhW2tleV0sIGJba2V5XSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIGtleXNfMS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRfMVtrZXldID0gaW50ZXJwb2xhdG9yc18xW2tleV0odCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRfMTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHZhciBkZWx0YV8yID0gYiAtIGE7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgcmV0dXJuIGEgKyB0ICogZGVsdGFfMjtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGludGVycG9sYXRlIFwiICsgdHlwZSArIFwiIHZhbHVlc1wiKTtcbn1cbmZ1bmN0aW9uIGxpbmVhcih4KSB7XG4gICAgcmV0dXJuIHg7XG59XG5mdW5jdGlvbiB0d2VlbihrZXksIHRvLCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIGlmICghdGhpcy5fY3VycmVudFR3ZWVucykge1xuICAgICAgICB0aGlzLl9jdXJyZW50VHdlZW5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5fdHdlZW5pbmcgPSBmYWxzZTtcbiAgICAgICAgdmFyIHNldF8xID0gdGhpcy5zZXQ7XG4gICAgICAgIHRoaXMuc2V0ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGlmICghX3RoaXMuX3R3ZWVuaW5nKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5XzEgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuX2N1cnJlbnRUd2VlbnNba2V5XzFdKVxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2N1cnJlbnRUd2VlbnNba2V5XzFdLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0XzEuY2FsbChfdGhpcywgZGF0YSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICh0aGlzLl9jdXJyZW50VHdlZW5zW2tleV0pXG4gICAgICAgIHRoaXMuX2N1cnJlbnRUd2VlbnNba2V5XS5hYm9ydCgpO1xuICAgIHZhciBzdGFydCA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSArIChvcHRpb25zLmRlbGF5IHx8IDApO1xuICAgIHZhciBkdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb24gfHwgNDAwO1xuICAgIHZhciBlbmQgPSBzdGFydCArIGR1cmF0aW9uO1xuICAgIHZhciB0ID0ge1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgdmFsdWU6IChvcHRpb25zLmludGVycG9sYXRlIHx8IGludGVycG9sYXRlKSh0aGlzLmdldChrZXkpLCB0byksXG4gICAgICAgIHRvOiB0byxcbiAgICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgICBlbmQ6IGVuZCxcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICBlYXNlOiBvcHRpb25zLmVhc2luZyB8fCBsaW5lYXIsXG4gICAgICAgIHJ1bm5pbmc6IHRydWUsXG4gICAgICAgIGFib3J0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0LnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGRlbGV0ZSBfdGhpcy5fY3VycmVudFR3ZWVuc1trZXldO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aGlzLl9jdXJyZW50VHdlZW5zW2tleV0gPSB0O1xuICAgIHNjaGVkdWxlci5hZGQodGhpcyk7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAoZnVsZmlsKSB7XG4gICAgICAgIHQuZnVsZmlsID0gZnVsZmlsO1xuICAgIH0pO1xuICAgIHByb21pc2UuYWJvcnQgPSB0LmFib3J0O1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBnZXROZXN0ZWRWYWx1ZShvYmosIHBhcnRzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoIW9iailcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIG9iaiA9IG9ialtwYXJ0c1tpXV07XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBvYnNlcnZlRGVlcChrZXlwYXRoLCBjYWxsYmFjaywgb3B0cykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIHBhcnRzID0ga2V5cGF0aC5yZXBsYWNlKC9cXFsoXFxkKylcXF0vZywgJy4kMScpLnNwbGl0KCcuJyk7XG4gICAgdmFyIGtleSA9IHBhcnRzLnNoaWZ0KCk7XG4gICAgdmFyIGxhc3QgPSBvcHRzICYmIG9wdHMuaW5pdCA9PT0gZmFsc2VcbiAgICAgICAgPyBnZXROZXN0ZWRWYWx1ZSh0aGlzLmdldChrZXkpLCBwYXJ0cylcbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHRoaXMub2JzZXJ2ZShrZXksIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IGdldE5lc3RlZFZhbHVlKHZhbHVlLCBwYXJ0cyk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gbGFzdCB8fFxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fFxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKF90aGlzLCB2YWx1ZSwgbGFzdCk7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdCA9IHZhbHVlO1xuICAgIH0sIG9wdHMpO1xufVxuXG5mdW5jdGlvbiBnZXREZWVwKGtleXBhdGgpIHtcbiAgICBpZiAoa2V5cGF0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgpO1xuICAgIH1cbiAgICB2YXIga2V5cyA9IGtleXBhdGgucmVwbGFjZSgvXFxbKFxcZCspXFxdL2csICcuJDEnKS5zcGxpdCgnLicpO1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0KGtleXNbMF0pO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlW2tleXNbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBzZXREZWVwKGtleXBhdGgsIHZhbHVlKSB7XG4gICAgaWYgKGtleXBhdGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBrZXlzID0ga2V5cGF0aC5yZXBsYWNlKC9cXFsoXFxkKylcXF0vZywgJy4kMScpLnNwbGl0KCcuJyk7XG4gICAgdmFyIGxhc3RLZXkgPSBrZXlzLnBvcCgpO1xuICAgIC8vIElmIG5vdCBhIG5lc3RlZCBrZXlwYXRoXG4gICAgaWYgKGtleXNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgZGF0YV8xID0ge307XG4gICAgICAgIGRhdGFfMVtsYXN0S2V5XSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnNldChkYXRhXzEpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBvYmplY3QgPSB0aGlzLmdldChrZXlzWzBdKTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgb2JqZWN0ID0gb2JqZWN0W2tleXNbaV1dO1xuICAgIH1cbiAgICBvYmplY3RbbGFzdEtleV0gPSB2YWx1ZTtcbiAgICB2YXIgZGF0YSA9IHt9O1xuICAgIGRhdGFba2V5c1swXV0gPSB0aGlzLmdldChrZXlzWzBdKTtcbiAgICB0aGlzLnNldChkYXRhKTtcbn1cblxudmFyIHNjaGVkdWxlciQxID0ge1xuICAgIGNvbXBvbmVudHM6IFtdLFxuICAgIHJ1bm5pbmc6IGZhbHNlLFxuICAgIGFkZDogZnVuY3Rpb24gKGNvbXBvbmVudCkge1xuICAgICAgICBpZiAofnNjaGVkdWxlciQxLmNvbXBvbmVudHMuaW5kZXhPZihjb21wb25lbnQpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBzY2hlZHVsZXIkMS5jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgICAgaWYgKCFzY2hlZHVsZXIkMS5ydW5uaW5nKSB7XG4gICAgICAgICAgICBzY2hlZHVsZXIkMS5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzY2hlZHVsZXIkMS5uZXh0KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaGFzQ29tcG9uZW50cyA9IGZhbHNlO1xuICAgICAgICB2YXIgaSA9IHNjaGVkdWxlciQxLmNvbXBvbmVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICB2YXIgY29tcG9uZW50ID0gc2NoZWR1bGVyJDEuY29tcG9uZW50c1tpXTtcbiAgICAgICAgICAgIHZhciBkYXRhID0ge307XG4gICAgICAgICAgICB2YXIgaGFzU3ByaW5ncyA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGNvbXBvbmVudC5fc3ByaW5ncykge1xuICAgICAgICAgICAgICAgIHZhciBzcHJpbmdfMSA9IGNvbXBvbmVudC5fc3ByaW5nc1trZXldO1xuICAgICAgICAgICAgICAgIGlmIChzcHJpbmdfMS50aWNrKGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc1NwcmluZ3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBoYXNDb21wb25lbnRzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5fc3ByaW5nQ2FsbGJhY2tzW2tleV0oKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNvbXBvbmVudC5fc3ByaW5nc1trZXldO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY29tcG9uZW50Ll9zcHJpbmdDYWxsYmFja3Nba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb21wb25lbnQuX3NwcmluZ2luZyA9IHRydWU7XG4gICAgICAgICAgICBjb21wb25lbnQuc2V0KGRhdGEpO1xuICAgICAgICAgICAgY29tcG9uZW50Ll9zcHJpbmdpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICghaGFzU3ByaW5ncylcbiAgICAgICAgICAgICAgICBzY2hlZHVsZXIkMS5jb21wb25lbnRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzQ29tcG9uZW50cykge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNjaGVkdWxlciQxLm5leHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2NoZWR1bGVyJDEucnVubmluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufTtcbmZ1bmN0aW9uIHNuYXAkMShrZXksIGEsIGIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgdGljazogZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICAgICAgb2JqZWN0W2tleV0gPSBiO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uIChvYmplY3QsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGIgPSBvYmplY3Q7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gbnVtYmVyKGtleSwgYSwgYiwgb3B0aW9ucykge1xuICAgIHZhciB2ZWxvY2l0eSA9IDA7XG4gICAgdmFyIHN0aWZmbmVzcyA9IG9wdGlvbnMuc3RpZmZuZXNzLCBkYW1waW5nID0gb3B0aW9ucy5kYW1waW5nO1xuICAgIHZhciB2YWx1ZVRocmVzaG9sZCA9IE1hdGguYWJzKGIgLSBhKSAqIDAuMDAxO1xuICAgIHZhciB2ZWxvY2l0eVRocmVzaG9sZCA9IHZhbHVlVGhyZXNob2xkOyAvLyBUT0RPIGlzIHRoaXMgcmlnaHQ/XG4gICAgcmV0dXJuIHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIHRpY2s6IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgICAgIHZhciBkID0gYiAtIGE7XG4gICAgICAgICAgICB2YXIgc3ByaW5nID0gc3RpZmZuZXNzICogZDtcbiAgICAgICAgICAgIHZhciBkYW1wZXIgPSBkYW1waW5nICogdmVsb2NpdHk7XG4gICAgICAgICAgICB2YXIgYWNjZWxlcmF0aW9uID0gc3ByaW5nIC0gZGFtcGVyO1xuICAgICAgICAgICAgdmVsb2NpdHkgKz0gYWNjZWxlcmF0aW9uO1xuICAgICAgICAgICAgYSArPSB2ZWxvY2l0eTtcbiAgICAgICAgICAgIG9iamVjdFtrZXldID0gYTtcbiAgICAgICAgICAgIGlmICh2ZWxvY2l0eSA8IHZlbG9jaXR5VGhyZXNob2xkICYmXG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoYiAtIGEpIDwgdmFsdWVUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICBvYmplY3Rba2V5XSA9IGI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2JqZWN0W2tleV0gPSBhO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKG9iamVjdCwgb3B0aW9ucykge1xuICAgICAgICAgICAgY2hlY2tDb21wYXRpYmlsaXR5KG9iamVjdCwgYik7XG4gICAgICAgICAgICBiID0gb2JqZWN0O1xuICAgICAgICAgICAgc3RpZmZuZXNzID0gb3B0aW9ucy5zdGlmZm5lc3M7XG4gICAgICAgICAgICBkYW1waW5nID0gb3B0aW9ucy5kYW1waW5nO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGRhdGUoa2V5LCBhLCBiLCBvcHRpb25zKSB7XG4gICAgdmFyIGR1bW15ID0ge307XG4gICAgdmFyIHN1YnNwcmluZyA9IG51bWJlcihrZXksIGEuZ2V0VGltZSgpLCBiLmdldFRpbWUoKSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIHRpY2s6IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgICAgIGlmICghc3Vic3ByaW5nLnRpY2soZHVtbXkpKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0W2tleV0gPSBiO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9iamVjdFtrZXldID0gbmV3IERhdGUoZHVtbXlba2V5XSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAob2JqZWN0LCBvcHRpb25zKSB7XG4gICAgICAgICAgICBjaGVja0NvbXBhdGliaWxpdHkob2JqZWN0LCBiKTtcbiAgICAgICAgICAgIHN1YnNwcmluZy51cGRhdGUob2JqZWN0LmdldFRpbWUoKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBiID0gb2JqZWN0O1xuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGFycmF5KGtleSwgYSwgYiwgb3B0aW9ucykge1xuICAgIHZhciB2YWx1ZSA9IFtdO1xuICAgIHZhciBzdWJzcHJpbmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHN1YnNwcmluZ3MucHVzaChnZXRTcHJpbmcoaSwgYVtpXSwgYltpXSwgb3B0aW9ucykpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgdGljazogZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICAgICAgdmFyIGFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdWJzcHJpbmdzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN1YnNwcmluZ3NbaV0udGljayh2YWx1ZSkpXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIG9iamVjdFtrZXldID0gYjtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKG9iamVjdCwgb3B0aW9ucykge1xuICAgICAgICAgICAgY2hlY2tDb21wYXRpYmlsaXR5KG9iamVjdCwgYik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIHN1YnNwcmluZ3NbaV0udXBkYXRlKG9iamVjdFtpXSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiID0gb2JqZWN0O1xuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIG9iamVjdChrZXksIGEsIGIsIG9wdGlvbnMpIHtcbiAgICB2YXIgdmFsdWUgPSB7fTtcbiAgICB2YXIgc3Vic3ByaW5ncyA9IFtdO1xuICAgIGZvciAodmFyIGsgaW4gYSkge1xuICAgICAgICBzdWJzcHJpbmdzLnB1c2goZ2V0U3ByaW5nKGssIGFba10sIGJba10sIG9wdGlvbnMpKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIHRpY2s6IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgICAgIHZhciBhY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic3ByaW5ncy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChzdWJzcHJpbmdzW2ldLnRpY2sodmFsdWUpKVxuICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFhY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBvYmplY3Rba2V5XSA9IGI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uIChvYmplY3QsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGNoZWNrQ29tcGF0aWJpbGl0eShvYmplY3QsIGIpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdWJzcHJpbmdzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgc3Vic3ByaW5nc1tpXS51cGRhdGUob2JqZWN0W3N1YnNwcmluZ3NbaV0ua2V5XSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiID0gb2JqZWN0O1xuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNoZWNrQ29tcGF0aWJpbGl0eShhLCBiKSB7XG4gICAgdmFyIHR5cGUgPSB0eXBlb2YgYTtcbiAgICBpZiAodHlwZSAhPT0gdHlwZW9mIGIgfHwgQXJyYXkuaXNBcnJheShhKSAhPT0gQXJyYXkuaXNBcnJheShiKSB8fCBpc0RhdGUoYSkgIT09IGlzRGF0ZShiKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBpbnRlcnBvbGF0ZSB2YWx1ZXMgb2YgZGlmZmVyZW50IHR5cGUnKTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmICghYSB8fCAhYilcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignT2JqZWN0IGNhbm5vdCBiZSBudWxsJyk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgICAgICAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgaW50ZXJwb2xhdGUgYXJyYXlzIG9mIGRpZmZlcmVudCBsZW5ndGgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICgha2V5c01hdGNoKGEsIGIpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGludGVycG9sYXRlIGRpZmZlcmVudGx5LXNoYXBlZCBvYmplY3RzJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGludGVycG9sYXRlIFwiICsgdHlwZSArIFwiIHZhbHVlc1wiKTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRTcHJpbmcoa2V5LCBhLCBiLCBvcHRpb25zKSB7XG4gICAgaWYgKGEgPT09IGIgfHwgYSAhPT0gYSlcbiAgICAgICAgcmV0dXJuIHNuYXAkMShrZXksIGEsIGIsIG9wdGlvbnMpO1xuICAgIGNoZWNrQ29tcGF0aWJpbGl0eShhLCBiKTtcbiAgICBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXkoa2V5LCBhLCBiLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEYXRlKGEpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZShrZXksIGEsIGIsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmplY3Qoa2V5LCBhLCBiLCBvcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bWJlcihrZXksIGEsIGIsIG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gc3ByaW5nKGtleSwgdG8sIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIGlmICghdGhpcy5fc3ByaW5ncykge1xuICAgICAgICB0aGlzLl9zcHJpbmdzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5fc3ByaW5nQ2FsbGJhY2tzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5fc3ByaW5naW5nID0gZmFsc2U7XG4gICAgICAgIHZhciBzZXRfMSA9IHRoaXMuc2V0O1xuICAgICAgICB0aGlzLnNldCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBpZiAoIV90aGlzLl9zcHJpbmdpbmcpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXlfMSBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGhpcy5fc3ByaW5nc1trZXlfMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0XzEuY2FsbChfdGhpcywgZGF0YSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICh0aGlzLl9zcHJpbmdzW2tleV0pIHtcbiAgICAgICAgdGhpcy5fc3ByaW5nc1trZXldLnVwZGF0ZSh0bywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgc3ByaW5nXzIgPSBnZXRTcHJpbmcoa2V5LCB0aGlzLmdldChrZXkpLCB0bywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX3NwcmluZ3Nba2V5XSA9IHNwcmluZ18yO1xuICAgIH1cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChmdWxmaWwpIHtcbiAgICAgICAgX3RoaXMuX3NwcmluZ0NhbGxiYWNrc1trZXldID0gZnVsZmlsO1xuICAgIH0pO1xuICAgIHNjaGVkdWxlciQxLmFkZCh0aGlzKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cbmZ1bmN0aW9uIGtleXNNYXRjaChhLCBiKSB7XG4gICAgdmFyIGFLZXlzID0gT2JqZWN0LmtleXMoYSk7XG4gICAgdmFyIGJLZXlzID0gT2JqZWN0LmtleXMoYik7XG4gICAgaWYgKGFLZXlzLmxlbmd0aCAhPT0gYktleXMubGVuZ3RoKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhS2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoIShhS2V5c1tpXSBpbiBiKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCB7IHB1c2gsIHBvcCwgc2hpZnQsIHVuc2hpZnQsIHNwbGljZSwgc29ydCwgcmV2ZXJzZSwgdHdlZW4sIG9ic2VydmVEZWVwLCBnZXREZWVwLCBzZXREZWVwLCBzcHJpbmcgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS1leHRyYXMvZGlzdC9zdmVsdGUtZXh0cmFzLmVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1wieV92YXJzXCI6W3tcIm5hbWVcIjpcImRlY29ycmVsYXRlXCIsXCJsYWJlbFwiOlwiRGVjb3JyZWxhdGVkIFNwYWNlXCIsXCJ0eXBlXCI6XCJiaW5hcnlcIixcImRlZmF1bHRcIjowLFwidmFsdWVzXCI6WzAsMV19LHtcIm5hbWVcIjpcInRyYW5zZm9ybXNcIixcImxhYmVsXCI6XCJUcmFuc2Zvcm1hdGlvbiBSb2J1c3RuZXNzXCIsXCJ0eXBlXCI6XCJiaW5hcnlcIixcImRlZmF1bHRcIjowLFwidmFsdWVzXCI6WzAsMV19LHtcIm5hbWVcIjpcImxlYXJuaW5nX3JhdGVcIixcImxhYmVsXCI6XCJMZWFybmluZyBSYXRlXCIsXCJ0eXBlXCI6XCJudW1iZXJcIixcImRlZmF1bHRcIjowLjEsXCJ2YWx1ZXNcIjpbMC4wMSwwLjAyNSwwLjA1LDAuMSwwLjI1XX1dLFwieF92YXJzXCI6W3tcIm5hbWVcIjpcIm5ldXJvbnNcIixcImxhYmVsXCI6XCJuZXVyb25zXCIsXCJ0eXBlXCI6XCJpY29uXCIsXCJ2YWx1ZXNcIjpbXCJtaXhlZDRiOjQ1MlwiLFwibWl4ZWQ0Yjo0NjVcIixcIm1peGVkNGI6NDc1XCIsXCJtaXhlZDRiOjQ2NFwiLFwibWl4ZWQ0Yzo0NTBcIixcIm1peGVkNGQ6NDc5XCJdfSx7XCJuYW1lXCI6XCJzdGVwc1wiLFwibGFiZWxcIjpcInN0ZXBzXCIsXCJ0eXBlXCI6XCJudW1iZXJcIixcImRlZmF1bHRcIjo0LFwidmFsdWVzXCI6WzEsNDgsMTI4LDI1NiwyMDQ4XX1dLFwic2l6ZVwiOjY4fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3RhdGljL2ltYWdlcy9QcmVjb25kaXRpb25lci5qc29uXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBHb29nbGVOZXRFeGFtcGxlcyAgICAgZnJvbSBcIi4vZGlhZ3JhbXMvR29vZ2xlTmV0RXhhbXBsZXMuaHRtbFwiO1xuaW1wb3J0IEltYWdlQXJyYXkgICAgICAgICAgICBmcm9tIFwiLi9kaWFncmFtcy9JbWFnZUFycmF5Lmh0bWxcIjtcbmltcG9ydCBPcHRFeHBsb3JlICAgICAgICAgICAgZnJvbSBcIi4vZGlhZ3JhbXMvT3B0RXhwbG9yZS5odG1sXCI7XG5pbXBvcnQgT3B0RXhwbG9yZTIgICAgICAgICAgIGZyb20gXCIuL2RpYWdyYW1zL09wdEV4cGxvcmUyLmh0bWxcIjtcbmltcG9ydCBPcHRFeHBsb3JlRmxleCAgICAgICAgZnJvbSBcIi4vZGlhZ3JhbXMvT3B0RXhwbG9yZUZsZXguaHRtbFwiO1xuaW1wb3J0IEdyYWRBcnRpZmFjdHMgICAgICAgICBmcm9tIFwiLi9kaWFncmFtcy9HcmFkQXJ0aWZhY3RzLmh0bWxcIjtcbi8vIGltcG9ydCBSZWdSZXZpZXcgICAgICAgICAgICAgZnJvbSBcIi4vZGlhZ3JhbXMvUmVnUmV2aWV3Lmh0bWxcIjtcbmltcG9ydCBPcHRBbmRFeGFtcGxlcyAgICAgICAgZnJvbSBcIi4vZGlhZ3JhbXMvT3B0QW5kRXhhbXBsZXMuaHRtbFwiO1xuaW1wb3J0IExpbmVhckNvbWJpbmF0aW9ucyAgICBmcm9tIFwiLi9kaWFncmFtcy9MaW5lYXJDb21iaW5hdGlvbnMuaHRtbFwiO1xuaW1wb3J0IE9wdFByb2dyZXNzICAgICAgICAgICBmcm9tIFwiLi9kaWFncmFtcy9PcHRQcm9ncmVzcy5odG1sXCI7XG5pbXBvcnQgRXhhbXBsZXNPcHRDb21wYXJpc29uIGZyb20gXCIuL2RpYWdyYW1zL0V4YW1wbGVzT3B0Q29tcGFyaXNvbi5odG1sXCI7XG5pbXBvcnQgUmFuZG9tRXhhbXBsZXNPcHQgICAgIGZyb20gXCIuL2RpYWdyYW1zL1JhbmRvbUV4YW1wbGVzT3B0Lmh0bWxcIjtcblxuXG5cbi8vIGxvYWQgR29vZ2xlTmV0RXhhbXBsZXMgaW1tZWRpYXRlbHlcblxubmV3IEdvb2dsZU5ldEV4YW1wbGVzKHt0YXJnZXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ29vZ2xlbmV0LWV4YW1wbGVzXCIpfSk7XG5cbi8vIHNwcml0ZSBkcml2ZW4gZmlndXJlc1xuXG57XG4gIGNvbnN0IGZpZ3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhhbXBsZS1vcHRpbWl6YXRpb24tY29tcGFyaXNvblwiKTtcbiAgZmlndXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeVwiLCBmdW5jdGlvbigpIHtcbiAgICBuZXcgRXhhbXBsZXNPcHRDb21wYXJpc29uKHt0YXJnZXQ6IGZpZ3VyZX0pO1xuICB9KTtcbn1cblxue1xuICBjb25zdCBmaWd1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhbmRvbS1vcHRpbWl6YXRpb24tYW5kLWV4YW1wbGVzXCIpO1xuICBmaWd1cmUuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5XCIsIGZ1bmN0aW9uKCkge1xuICAgIG5ldyBSYW5kb21FeGFtcGxlc09wdCh7dGFyZ2V0OiBmaWd1cmV9KTtcbiAgfSk7XG59XG5cbntcbiAgY29uc3QgZmlndXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcHQtcHJvZ3Jlc3NcIilcbiAgZmlndXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeVwiLCBmdW5jdGlvbigpIHtcbiAgICBuZXcgT3B0UHJvZ3Jlc3Moe3RhcmdldDogZmlndXJlfSk7XG4gIH0pO1xufVxuXG57XG4gIGNvbnN0IGZpZ3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZWFyLWNvbWJpbmF0aW9uc1wiKVxuICBmaWd1cmUuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5XCIsIGZ1bmN0aW9uKCkge1xuICAgIG5ldyBMaW5lYXJDb21iaW5hdGlvbnMoe3RhcmdldDogZmlndXJlfSk7XG4gIH0pO1xufVxuXG4vLyB7XG4vLyAgIGNvbnN0IGZpZ3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmVhdHVyZS12aXMtaGlzdG9yeVwiKVxuLy8gICBmaWd1cmUuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5XCIsIGZ1bmN0aW9uKCkge1xuLy8gICAgIG5ldyBSZWdSZXZpZXcoe3RhcmdldDogZmlndXJlfSk7XG4vLyAgIH0pO1xuLy8gfVxuXG57XG4gIGNvbnN0IGZpZ3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3B0aW1pemF0aW9uLWFuZC1leGFtcGxlc1wiKTtcbiAgZmlndXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeVwiLCBmdW5jdGlvbigpIHtcbiAgICBuZXcgT3B0QW5kRXhhbXBsZXMoe3RhcmdldDogZmlndXJlfSk7XG4gIH0pO1xufVxuXG57XG4gIGNvbnN0IGZpZ3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJlcXVlbmN5LWFydGlmYWN0c1wiKTtcbiAgZmlndXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeVwiLCBmdW5jdGlvbigpIHtcbiAgICBuZXcgR3JhZEFydGlmYWN0cyh7dGFyZ2V0OiBmaWd1cmV9KTtcbiAgfSk7XG59XG5cbi8vIGltYWdlIGFycmF5c1xuXG57XG4gIGNvbnN0IGZpZ3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RlZXBlc3QtZGVzY2VudFwiKTtcbiAgZmlndXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeVwiLCBmdW5jdGlvbigpIHtcbiAgICBuZXcgSW1hZ2VBcnJheSh7dGFyZ2V0OiBmaWd1cmUsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHNyY19jbGFzczogXCJzdGVlcHN0LWRpci1zcHJpdGVcIixcbiAgICAgICAgaWNvbl9zcmNfY2xhc3M6IFwic3RlZXBzdC1kaXItc3ByaXRlXCIsXG4gICAgICAgIGljb25feDogMCxcbiAgICAgICAgbGFiZWxfZnVuYzogKG4sIGkpID0+IFtcbiAgICAgICAgICBcIkltYWdlXCIsXG4gICAgICAgICAgXCI8c3Ryb25nPkw8c3VwPuKInjwvc3VwPiBtZXRyaWM8L3N0cm9uZz4gPGJyPnVzZWQgaW4gYWR2ZXJzZXJpYWwgd29ya1wiLFxuICAgICAgICAgIFwiPHN0cm9uZz5MPHN1cD4yPC9zdXA+IG1ldHJpYzwvc3Ryb25nPiA8YnI+cmVndWxhciBncmFkaWVudFwiLFxuICAgICAgICAgIFwiPHN0cm9uZz5kZWNvcnJlbGF0ZWQgc3BhY2U8L3N0cm9uZz5cIlxuICAgICAgICAgIF1bbl0sXG4gICAgICAgIG5faW1hZ2VzOiA0LFxuICAgICAgICBuX2ljb25zOiAxNCxcbiAgICAgICAgc3ByaXRlX3NpemU6IDIyNCwgXG4gICAgICAgIHNpemU6IDE3MCxcbiAgICAgICAgaWNvbl9zY2FsZTogMSxcbiAgICAgICAgaG92ZXJfc2NhbGU6IDEsXG4gICAgICAgIHNlbGVjdGVkOiA5LFxuICAgICAgICBiYWNrd2FyZHM6IGZhbHNlXG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG57XG4gIGNvbnN0IGZpZ3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW50ZXJwb2xhdGlvblwiKTtcbiAgZmlndXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeVwiLCBmdW5jdGlvbigpIHtcbiAgICBuZXcgSW1hZ2VBcnJheSh7dGFyZ2V0OiBmaWd1cmUsXG4gICAgZGF0YToge1xuICAgICAgc3JjX2NsYXNzOiBcImludGVycG9sYXRpb24tc3ByaXRlXCIsXG4gICAgICBpY29uX3NyY19jbGFzczogXCJpbnRlcnBvbGF0aW9uLXNwcml0ZVwiLFxuICAgICAgaWNvbl94OiAwLFxuICAgICAgbGFiZWxfZnVuYzogKG4sIGkpID0+IHtcbiAgICAgICAgaWYgKG4gPT0gMCkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBcIkxheWVyIDRhLCBVbml0IDQ3NlwiLFxuICAgICAgICAgICAgXCJMYXllciA0YSwgVW5pdCA0NzZcIixcbiAgICAgICAgICAgIFwiTGF5ZXIgNGEsIFVuaXQgNDYwXCIsXG4gICAgICAgICAgICBcIkxheWVyIDRiLCBVbml0IDQ3NVwiLFxuICAgICAgICAgICAgXCJMYXllciA0YywgVW5pdCAzNjlcIixcbiAgICAgICAgICAgIFwiTGF5ZXIgNGQsIFVuaXQgNTAzXCIsXG4gICAgICAgICAgICBcIkxheWVyIDRkLCBVbml0IDUwM1wiLFxuICAgICAgICAgICAgXCJMYXllciA1YSwgVW5pdCA4MTBcIixcbiAgICAgICAgICAgIFwiTGF5ZXIgNWEsIFVuaXQgODEwXCIsXG4gICAgICAgICAgXVtpXTtcbiAgICAgICAgfSBlbHNlIGlmIChuID09IDUpIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgXCJMYXllciA0YSwgVW5pdCA0NTVcIixcbiAgICAgICAgICAgIFwiTGF5ZXIgNGEsIFVuaXQgNDYwXCIsXG4gICAgICAgICAgICBcIkxheWVyIDRhLCBVbml0IDUwMVwiLFxuICAgICAgICAgICAgXCJMYXllciA0YSwgVW5pdCA0NzZcIixcbiAgICAgICAgICAgIFwiTGF5ZXIgNGEsIFVuaXQgNDc2XCIsXG4gICAgICAgICAgICBcIkxheWVyIDVhLCBVbml0IDc5MVwiLFxuICAgICAgICAgICAgXCJMYXllciA1YSwgVW5pdCA4MTBcIixcbiAgICAgICAgICAgIFwiTGF5ZXIgNWEsIFVuaXQgMjAwXCIsXG4gICAgICAgICAgICBcIkxheWVyIDVhLCBVbml0IDc5MVwiLFxuICAgICAgICAgIF1baV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBuX2ltYWdlczogNixcbiAgICAgIG5faWNvbnM6IDksXG4gICAgICBzcHJpdGVfc2l6ZTogMTI4LCBcbiAgICAgIHNpemU6IDEyOCxcbiAgICAgIGljb25fc2NhbGU6IDEsXG4gICAgICBob3Zlcl9zY2FsZTogMSxcbiAgICAgIHNlbGVjdGVkOiAxLFxuICAgICAgYmFja3dhcmRzOiBmYWxzZVxuICAgIH19KTtcbiAgfSk7XG59XG5cbi8vIG9wdGltaXphdGlvbiBleHBsb3JlIHdpZGdldHNcblxuY29uc3QgT3B0RXhwbG9yZUZsZXhfY29uZmlncyA9IHtcbiAgXG4gIE9wdEV4cGxvcmVOYWl2ZToge1xuICAgIGNvbmZpZ3VyYWJsZTogW1wibmV1cm9uc1wiLCBcImxlYXJuaW5nX3JhdGVcIl0sXG4gICAgaWNvbl92YXJfdmFsdWVzOiB7ZGVjb3JyZWxhdGU6IDEsIHRyYW5zZm9ybXM6IDF9LFxuICAgIHZhcl92YWx1ZXM6IHtkZWNvcnJlbGF0ZTogMCwgbGVhcm5pbmdfcmF0ZTogMiwgdHJhbnNmb3JtczogMH0sXG4gICAgY29uZmlnOiByZXF1aXJlKCcuLi9zdGF0aWMvaW1hZ2VzL1ByZWNvbmRpdGlvbmVyLmpzb24nKVxuICB9LFxuICBcbiAgUGVuYWxpemVGcmVxOiB7XG4gICAgY29uZmlndXJhYmxlOiBbXCJuZXVyb25zXCIsIFwibDFcIiwgXCJ0dlwiLCBcImJsdXJcIl0sXG4gICAgdmFyX3ZhbHVlczoge2wxOiAxLCB0djogMiwgYmx1cjogMn0sXG4gICAgaWNvbl92YXJfdmFsdWVzOiB7bDE6IDEsIHR2OiAzLCBibHVyOiAzfSxcbiAgICBjb25maWc6IHJlcXVpcmUoJy4uL3N0YXRpYy9pbWFnZXMvUGVuYWxpemVGcmVxLmpzb24nKVxuICB9LFxuICBcbiAgVHJhbnNmb3JtRXhwbG9yZToge1xuICAgIGNvbmZpZ3VyYWJsZTogW1wibmV1cm9uc1wiLCBcImppdHRlclwiLCBcInJhbmRvbV9yb3RhdGVcIiwgXCJyYW5kb21fc2NhbGVcIl0sXG4gICAgaWNvbl92YXJfdmFsdWVzOiB7aml0dGVyOiAzLCByYW5kb21fcm90YXRlOiAyLCByYW5kb21fc2NhbGU6IDJ9LFxuICAgIHZhcl92YWx1ZXM6IHtqaXR0ZXI6IDEsIHJhbmRvbV9yb3RhdGU6IDEsIHJhbmRvbV9zY2FsZTogMX0sXG4gICAgY29uZmlnOiByZXF1aXJlKCcuLi9zdGF0aWMvaW1hZ2VzL1RyYW5zZm9ybUV4cGxvcmUuanNvbicpXG4gIH0sXG4gIFxuICBPcHRFeHBsb3JlOiB7XG4gICAgY29uZmlndXJhYmxlOiBbXCJuZXVyb25zXCIsIFwibGVhcm5pbmdfcmF0ZVwiLCBbXCJkZWNvcnJlbGF0ZVwiLCBcInRyYW5zZm9ybXNcIl1dLFxuICAgIGljb25fdmFyX3ZhbHVlczoge2RlY29ycmVsYXRlOiAxLCB0cmFuc2Zvcm1zOiAxfSxcbiAgICB2YXJfdmFsdWVzOiB7ZGVjb3JyZWxhdGU6IDEsIGxlYXJuaW5nX3JhdGU6IDIsIHRyYW5zZm9ybXM6IDF9LFxuICAgIGNvbmZpZzogcmVxdWlyZSgnLi4vc3RhdGljL2ltYWdlcy9QcmVjb25kaXRpb25lci5qc29uJylcbiAgfVxufTtcblxue1xuICBjb25zdCBmaWd1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wdGltaXplLW5haXZlXCIpO1xuICBmaWd1cmUuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5XCIsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGFwcCA9IG5ldyBPcHRFeHBsb3JlRmxleCh7dGFyZ2V0OiBmaWd1cmV9KTtcbiAgICBhcHAubG9hZF9zcHJpdGVtYXAoXCJQcmVjb25kaXRpb25lclwiLCBPcHRFeHBsb3JlRmxleF9jb25maWdzLk9wdEV4cGxvcmVOYWl2ZSlcbiAgfSk7XG59XG5cbntcbiAgY29uc3QgZmlndXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcHQtZXhwbG9yZTJcIik7XG4gIGZpZ3VyZS5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlcIiwgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgYXBwID0gbmV3IE9wdEV4cGxvcmVGbGV4KHt0YXJnZXQ6IGZpZ3VyZX0pO1xuICAgIGFwcC5sb2FkX3Nwcml0ZW1hcChcIlByZWNvbmRpdGlvbmVyXCIsIE9wdEV4cGxvcmVGbGV4X2NvbmZpZ3MuT3B0RXhwbG9yZSlcbiAgfSk7XG59XG5cbntcbiAgY29uc3QgZmlndXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWd1bGFyaXplci1wbGF5Z3JvdW5kLXJvYnVzdFwiKTtcbiAgZmlndXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeVwiLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBhcHAgPSBuZXcgT3B0RXhwbG9yZUZsZXgoe3RhcmdldDogZmlndXJlfSk7XG4gICAgYXBwLmxvYWRfc3ByaXRlbWFwKFwiVHJhbnNmb3JtRXhwbG9yZVwiLCBPcHRFeHBsb3JlRmxleF9jb25maWdzLlRyYW5zZm9ybUV4cGxvcmUpXG4gIH0pO1xufVxuXG57XG4gIGNvbnN0IGZpZ3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVndWxhcml6ZXItcGxheWdyb3VuZC1mcmVxXCIpO1xuICBmaWd1cmUuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5XCIsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGFwcCA9IG5ldyBPcHRFeHBsb3JlRmxleCh7dGFyZ2V0OiBmaWd1cmV9KTtcbiAgICBhcHAubG9hZF9zcHJpdGVtYXAoXCJQZW5hbGl6ZUZyZXEyXCIsIE9wdEV4cGxvcmVGbGV4X2NvbmZpZ3MuUGVuYWxpemVGcmVxKVxuICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIjxkaXYgY2xhc3M9XCJnb29nbGVuZXQtZXhhbXBsZXNcIj5cbiAge3sjZWFjaCByYW5nZSg1KSBhcyB4fX1cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZVwiPlxuICAgICAgPCEtLTxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5FZGdlczwvc3Bhbj4tLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZXNcIj5cbiAgICAgICAge3sjZWFjaCByYW5nZSg2KSBhcyB5fX1cbiAgICAgICAgICA8U3ByaXRlIHNyY19jbGFzcz0nc3ByaXRlX2hlcm8nIHg9e3t4fX0geT17e3l9fSBiaW5kOnNpemUgYmluZDpzcHJpdGVfc2NhbGUgaG92ZXI9dHJ1ZS8+XG4gICAgICAgIHt7L2VhY2h9fVxuICAgICAgPC9kaXY+XG4gICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+PHN0cm9uZz57e2Rlc2NyaXB0aW9uc1t4XX19PC9zdHJvbmc+ICh7e25hbWVzW3hdfX0pPC9zcGFuPlxuICAgIDwvZGl2PlxuICB7ey9lYWNofX1cbjwvZGl2PlxuPGZpZ2NhcHRpb24+XG4gIEZlYXR1cmUgdmlzdWFsaXphdGlvbiBhbGxvd3MgdXMgdG8gc2VlIGhvdyBHb29nTGVOZXQsIHRyYWluZWQgb24gdGhlIEltYWdlTmV0IGRhdGFzZXQsIGJ1aWxkcyB1cCBpdHMgdW5kZXJzdGFuZGluZyBvZiBpbWFnZXMgb3ZlciBtYW55IGxheWVycy5cbiAgVmlzdWFsaXphdGlvbnMgb2YgYWxsIGNoYW5uZWwgYXJlIGF2YWlsYWJsZSBpbiB0aGUgPGEgaHJlZj1cImFwcGVuZGl4L1wiPmFwcGVuZGl4PC9hPi5cbjwvZmlnY2FwdGlvbj5cblxuPHN0eWxlPlxuXG4gIGZpZ2NhcHRpb24ge1xuICAgIGdyaWQtY29sdW1uOiB0ZXh0O1xuICB9XG5cbiAgLnNwcml0ZV9oZXJvIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWFnZXMvc3ByaXRlX2hlcm8ucG5nXCIpO1xuICB9XG5cbiAgLmdvb2dsZW5ldC1leGFtcGxlcyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgZ3JpZC1jb2x1bW46IHRleHQtc3RhcnQgLyBzY3JlZW4tZW5kO1xuICAgIC8qb3ZlcmZsb3cteDogaGlkZGVuOyovXG4gICAgLypvdmVyZmxvdy15OiB2aXNpYmxlOyovXG4gIH1cbiAgXG4gIC5nb29nbGVuZXQtZXhhbXBsZXMgLmV4YW1wbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gIH1cbiAgXG4gIC5nb29nbGVuZXQtZXhhbXBsZXMgLmV4YW1wbGUgLmltYWdlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG4gIFxuICAuZ29vZ2xlbmV0LWV4YW1wbGVzIC5leGFtcGxlIC5pbWFnZXMgPiAqIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cbiAgXG4gIC5nb29nbGVuZXQtZXhhbXBsZXMgLmlubmVyIHtcbiAgICBpbWFnZS1yZW5kZXJpbmc6IGF1dG87XG4gIH1cbiAgXG4gIC5nb29nbGVuZXQtZXhhbXBsZXMgLmV4YW1wbGUgLmltYWdlcyBzcGFuOmxhc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICAuZ29vZ2xlbmV0LWV4YW1wbGVzIC5leGFtcGxlOmxhc3Qtb2YtdHlwZSB7XG4gICAgLyptYXJnaW4tcmlnaHQ6IDA7Ki9cbiAgfVxuICAuZ29vZ2xlbmV0LWV4YW1wbGVzID4gZGl2Omxhc3QtY2hpbGQge1xuICB9XG4gIFxuICAuZGVzY3JpcHRpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDAuMjVlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDExMDVweCkge1xuICAgIC5nb29nbGVuZXQtZXhhbXBsZXMge1xuICAgICAgZ3JpZC1jb2x1bW46IHNjcmVlbjtcbiAgICAgIGZsZXgtZmxvdzogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC5nb29nbGVuZXQtZXhhbXBsZXMgLmV4YW1wbGUgLmltYWdlcyB7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuICAgIFxuICAgIC5nb29nbGVuZXQtZXhhbXBsZXMgLmV4YW1wbGUge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICBcbiAgICAuZ29vZ2xlbmV0LWV4YW1wbGVzIC5leGFtcGxlOmxhc3Qtb2YtdHlwZSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICAgIFxuICAgIC5nb29nbGVuZXQtZXhhbXBsZXMgLmV4YW1wbGUgLmltYWdlcyB7XG4gICAgICBtYXgtd2lkdGg6ICBjYWxjKCgxMDBweCAqIDIpICsgMTBweCk7XG4gICAgICBtaW4taGVpZ2h0OiBjYWxjKCgxMDBweCAqIDMpICsgMTBweCk7XG4gICAgfVxuICB9XG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7ICAgIFxuICAgIC5nb29nbGVuZXQtZXhhbXBsZXMgLmV4YW1wbGUge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIH1cbiAgICBcbiAgICAuZ29vZ2xlbmV0LWV4YW1wbGVzIC5leGFtcGxlIC5pbWFnZXMge1xuICAgICAgbWF4LXdpZHRoOiAgY2FsYygoMTI1cHggKiAyKSArIDEwcHgpO1xuICAgICAgbWluLWhlaWdodDogY2FsYygoMTI1cHggKiAzKSArIDEwcHgpO1xuICAgIH1cbiAgfVxuICBcblxuPC9zdHlsZT5cblxuXG48c2NyaXB0PlxuICBpbXBvcnQgU3ByaXRlIGZyb20gXCIuL1Nwcml0ZS5odG1sXCI7XG4gIFxuICBmdW5jdGlvbiByYW5nZShuKXtcbiAgICByZXR1cm4gQXJyYXkobikuZmlsbCgpLm1hcCgoXywgaSkgPT4gaSk7XG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbnM6IFswLDEsMiwzLDQsNSw2LDcsOCw5LDEwLDExLDEyLDEzLDE0LDE1LDE2LDE3LDE4LDE5LDIwLDIxLDIyLDIzLDI0LDI1LDI2LDI3LDI4LDI5XSxcbiAgICAgICAgc2l6ZTogMTAwLFxuICAgICAgICBzcHJpdGVfc2NhbGU6IDEuMCxcbiAgICAgICAgbmFtZXM6IFtcbiAgICAgICAgICBcImxheWVyIGNvbnYyZDBcIixcbiAgICAgICAgICBcImxheWVyIG1peGVkM2FcIixcbiAgICAgICAgICBcImxheWVyIG1peGVkNGFcIixcbiAgICAgICAgICBcImxheWVycyBtaXhlZDRiICYgbWl4ZWQ0Y1wiLFxuICAgICAgICAgIFwibGF5ZXJzIG1peGVkNGQgJiBtaXhlZDRlXCIsXG4gICAgICAgIF0sXG4gICAgICAgIGRlc2NyaXB0aW9uczogW1xuICAgICAgICAgIFwiRWRnZXNcIixcbiAgICAgICAgICBcIlRleHR1cmVzXCIsXG4gICAgICAgICAgXCJQYXR0ZXJuc1wiLFxuICAgICAgICAgIFwiUGFydHNcIixcbiAgICAgICAgICBcIk9iamVjdHNcIixcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgb25jcmVhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5tcSA9IG1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiAxNDAwcHgpXCIpO1xuICAgICAgdGhpcy5tcS5vbmNoYW5nZSA9IChldmVudCkgPT4gdGhpcy5zZXQoe3NpemU6IGV2ZW50Lm1hdGNoZXMgPyAxMjUgOiAxMDB9KTtcbiAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgc2l6ZTogdGhpcy5tcS5tYXRjaGVzID8gMTI1IDogMTAwLFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7IFNwcml0ZSB9LFxuICAgIGhlbHBlcnM6IHsgcmFuZ2UgfSxcbiAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlhZ3JhbXMvR29vZ2xlTmV0RXhhbXBsZXMuaHRtbCIsIlxuPGRpdiBjbGFzcz1cImljb25zXCI+XG4gIHt7I2VhY2ggaWNvbl9ucyBhcyBufX1cbiAgICA8ZGl2IGNsYXNzPVwiaWNvbiB7eyhzZWxlY3RlZCA9PSBuKT8gJ3NlbGVjdGVkJyA6ICcnfX1cIlxuICAgICAgICAgb246Y2xpY2s9J3NldCh7c2VsZWN0ZWQ6IG59KSdcbiAgICAgID5cbiAgICAgICAgPFNwcml0ZSBiaW5kOnNyY19jbGFzcz1pY29uX3NyY19jbGFzcyBcbiAgICAgICAgc2l6ZT00NCBcbiAgICAgICAgc3ByaXRlX3NpemU9e3tpY29uX3NjYWxlKnNwcml0ZV9zaXplfX0gXG4gICAgICAgIHk9e3soMS1pY29uX3NjYWxlKS8yICsgbi9pY29uX3NjYWxlfX0gXG4gICAgICAgIHg9e3soMS1pY29uX3NjYWxlKS8yICsgaWNvbl94L2ljb25fc2NhbGV9fSBcbiAgICAgICAgaG92ZXJfc2NhbGU9e3s0NC9zcHJpdGVfc2l6ZS9pY29uX3NjYWxlfX0gLz5cblxuICAgIDwvZGl2PlxuICB7ey9lYWNofX1cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImltYWdlc1wiPlxuICB7eyNlYWNoIGltYWdlX25zIGFzIG59fVxuICAgIDxkaXY+XG4gICAgICA8U3ByaXRlIGJpbmQ6c3JjX2NsYXNzIFxuICAgICAgYmluZDpzaXplIFxuICAgICAgYmluZDpzcHJpdGVfc2l6ZSBcbiAgICAgIGJpbmQ6eT1zZWxlY3RlZCBcbiAgICAgIHg9e3tufX0gXG4gICAgICAgIGhvdmVyPXt7ZmFsc2V9fSAgLz5cbiAgICAgIDxiciBzdHlsZT1cImNsZWFyOmxlZnRcIj5cbiAgICAgIDxmaWdjYXB0aW9uIHN0eWxlPVwibWF4LXdpZHRoOiB7e3NpemV9fXB4O1wiID57e3tsYWJlbF9mdW5jKG4sIHNlbGVjdGVkKX19fTwvZmlnY2FwdGlvbj5cbiAgICA8L2Rpdj5cbiAge3svZWFjaH19XG48L2Rpdj5cblxuXG48c3R5bGU+XG5cblxuLmljb25zIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcbn1cblxuLmljb25zIC5pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICBcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG5cbi5pY29ucyAuaWNvbjpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLmljb25zIC5pY29uOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4uaWNvbnMgLmljb24uc2VsZWN0ZWQge1xuICBvcGFjaXR5OiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2ZmNjYwMDtcbn1cblxuLmljb24gZGl2IHtcbiAgb3BhY2l0eTogMC42NjY7XG4gIGltYWdlLXJlbmRlcmluZzogYXV0bztcbn1cblxuLmljb24uc2VsZWN0ZWQgZGl2IHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmltYWdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLypqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47Ki9cbiAgdG9wOiAwcHg7XG59XG4uaW1hZ2VzID4gZGl2IHtcbiAgLyp3aWR0aDogMTgwcHg7Ki9cbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4uaW1hZ2VzID4gZGl2Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4uaW1hZ2VzIGRpdiBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xufVxuXG5maWdjYXB0aW9uIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICAvKm1hcmdpbi1ib3R0b206IDZweDsqL1xufVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IFNwcml0ZSBmcm9tIFwiLi9TcHJpdGUuaHRtbFwiO1xuICBmdW5jdGlvbiByYW5nZShuLCBpbnZlcnRlZCl7XG4gICAgdmFyIHJldCA9IFtdO1xuICAgIGlmIChpbnZlcnRlZCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpIHJldC5wdXNoKG4taS0xKTsgICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpIHJldC5wdXNoKGkpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbl9pY29uczogNCxcbiAgICAgICAgbl9pbWFnZXM6IDYsXG4gICAgICAgIHNlbGVjdGVkOiAwLFxuICAgICAgICBzcHJpdGVfc2l6ZTogMTI4LFxuICAgICAgICBzaXplOiAxNjAsXG4gICAgICAgIHNyY19jbGFzczogXCJcIixcbiAgICAgICAgbGFiZWxfZnVuYzogbiA9PiBcIkltYWdlIFwiICsgbixcbiAgICAgICAgaWNvbl9zcmNfY2xhc3M6IFwiXCIsXG4gICAgICAgIGljb25fc2NhbGU6IDAuNSxcbiAgICAgICAgYmFja3dhcmRzOiBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIGljb25fbnM6IChuX2ljb25zLCBiYWNrd2FyZHMpID0+IHJhbmdlKG5faWNvbnMsIGJhY2t3YXJkcyksXG4gICAgICBpbWFnZV9uczogbl9pbWFnZXMgPT4gcmFuZ2Uobl9pbWFnZXMsIGZhbHNlKVxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1Nwcml0ZX1cbiAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlhZ3JhbXMvSW1hZ2VBcnJheS5odG1sIiwiPGRpdiBjbGFzcz1cIm9wdC1leHBsb3JlXCIgPlxuICA8ZmlnY2FwdGlvbiBzdHlsZT1cIm1hcmdpbi1ib3R0b206MTBweDtcIj5cbiAgICA8ZGl2IHN0eWxlPVwid2lkdGg6IHt7KHNpemUgKyAyMCkqbl9pbWFnZXMtMjB9fXB4O1wiPlxuICAgICAgPCEtLTxkaXYgY2xhc3M9XCJpY29uc1wiIHN0eWxlPVwiZmxvYXQ6bGVmdDsgcGFkZGluZy1yaWdodDogNjBweDsgd2lkdGg6IDE0NXB4O1wiPlxuICAgICAgICB7eyNlYWNoIGljb25fbnMgYXMgbn19XG4gICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgY2xhc3M9XCJpY29uIHt7KHNlbGVjdGVkID09IG4pPyAnc2VsZWN0ZWQnIDogJyd9fVwiXG4gICAgICAgICAgICAgIG9uOmNsaWNrPSdzZXQoe3NlbGVjdGVkOiBufSknXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIHt7L2VhY2h9fVxuICAgICAgPC9kaXY+LS0+XG4gICAgICA8ZGl2IHN0eWxlPVwiZmxvYXQ6bGVmdDsgcGFkZGluZy1yaWdodDogNjBweDtcIj5cbiAgICAgICAgPGRpdj4gTGVhcm5pbmcgUmF0ZSAoe3tsZWFybmluZ19yYXRlX2xpc3RbW2xlYXJuaW5nX3JhdGVdXX19KTwvZGl2PlxuICAgICAgICA8ZGl2PjxpbnB1dCBiaW5kOnZhbHVlPWxlYXJuaW5nX3JhdGUgdHlwZT1cInJhbmdlXCIgbWluPTAgbWF4PXt7bGVhcm5pbmdfcmF0ZV9saXN0Lmxlbmd0aC0xfX0+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9XCJmbG9hdDpsZWZ0OyBwYWRkaW5nLXJpZ2h0OiA2MHB4O1wiPlxuICAgICAgICA8bGFiZWw+PGlucHV0IGJpbmQ6Y2hlY2tlZD1qaXR0ZXIgdHlwZT1cImNoZWNrYm94XCI+IEppdHRlcjwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD48aW5wdXQgYmluZDpjaGVja2VkPWFkYW0gdHlwZT1cImNoZWNrYm94XCI+IEFkYW08L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPVwiZmxvYXQ6bGVmdDsgcGFkZGluZy1yaWdodDogNjBweDtcIj5cbiAgICAgICAgPGxhYmVsPjxpbnB1dCBiaW5kOmNoZWNrZWQ9cHlyYW1pZCB0eXBlPVwiY2hlY2tib3hcIj4gTGFwbGFjaWFuIFB5cmFtaWQ8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+PGlucHV0IGJpbmQ6Y2hlY2tlZD1jb2xvciB0eXBlPVwiY2hlY2tib3hcIj4gRmFuY3kgQ29sb3IgUGFyYW08L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnIgc3R5bGU9XCJjbGVhcjpsZWZ0O1wiPlxuICAgIDwvZGl2PlxuICA8L2ZpZ2NhcHRpb24+XG4gIDxkaXYgY2xhc3M9XCJpbWFnZXNcIiBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IHt7c2l6ZSsyMH19cHg7IHBvc2l0aW9uOiByZWxhdGl2ZTtcIj5cbiAgICB7eyNlYWNoIGltYWdlX25zIGFzIG59fVxuICAgICAgPGRpdiBzdHlsZT1cImxlZnQ6IHt7KHNpemUgKyAyMCkqbn19cHg7IHdpZHRoOiB7e3NpemV9fXB4OyBoZWlnaHQ6IHt7c2l6ZSsyMH19cHg7XCI+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW46IHt7KHNpemUtc3ByaXRlX3NpemUpLzJ9fXB4OyB0cmFuc2Zvcm06c2NhbGUoe3tzaXplL3Nwcml0ZV9zaXplfX0pO1wiID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwib3B0LWV4cGxvcmUtc3ByaXRlc1wiIHN0eWxlPVwid2lkdGg6e3tzcHJpdGVfc2l6ZX19cHg7IGhlaWdodDp7e3Nwcml0ZV9zaXplfX1weDsgYmFja2dyb3VuZC1wb3NpdGlvbjogLXt7c3ByaXRlX3NpemUqbn19cHggLXt7c3ByaXRlX3NpemUqeX19cHg7XCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZmlnY2FwdGlvbj57e3tsYWJlbF9mdW5jKG4pfX19PC9maWdjYXB0aW9uPlxuICAgICAgPC9kaXY+XG4gICAge3svZWFjaH19XG4gIDwvZGl2PlxuXG48L2Rpdj5cblxuPHN0eWxlPlxuXG4gIC5pY29ucyAuaWNvbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbjogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XG4gIH1cblxuICAuaWNvbnMgLnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUFBO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IGdvbGQsIC0xcHggLTFweCAzcHggZ29sZCwgLTFweCAxcHggM3B4IGdvbGQsIDFweCAtMXB4IDNweCBnb2xkO1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMDAlKTtcbiAgfVxuXG4gIC5pbWFnZXMgPiBkaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuXG4gIGZpZ2NhcHRpb24ge1xuICAgIG1hcmdpbi10b3A6IDZweDtcbiAgfVxuXG4gIC5vcHQtZXhwbG9yZS1zcHJpdGVzIHsgYmFja2dyb3VuZDogdXJsKFwiaW1hZ2VzL2V4cGxvcmVfbWl4ZWQ0Y180NTBfc3ByaXRlXzEyOC5qcGVnXCIpfVxuICBcbiAgbGFiZWx7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBTcHJpdGUgZnJvbSBcIi4vU3ByaXRlLmh0bWxcIjtcbiAgZnVuY3Rpb24gcmFuZ2Uobil7XG4gICAgdmFyIHJldCA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKSByZXQucHVzaChpKTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbl9pbWFnZXM6IDQsXG4gICAgICAgIHNwcml0ZV9zaXplOiAxMzIsXG4gICAgICAgIHNpemU6IDE4MCxcbiAgICAgICAgaml0dGVyOiBmYWxzZSxcbiAgICAgICAgYWRhbTogZmFsc2UsXG4gICAgICAgIHB5cmFtaWQ6IGZhbHNlLFxuICAgICAgICBjb2xvcjogZmFsc2UsXG4gICAgICAgIGxlYXJuaW5nX3JhdGU6IDEsXG4gICAgICAgIGxlYXJuaW5nX3JhdGVfbGlzdDogWzAuMSwgMC4wMSwgMC4wMDEsIDAuMDAwMV0sXG4gICAgICAgIGxhYmVsX2Z1bmM6IG4gPT4gXCJTdGVwIFwiICsgKDgqTWF0aC5wb3coNCxuKSksXG4gICAgICAgIHNlbGVjdGVkOiAwLFxuICAgICAgICBpY29uX25zOiBbMCwxLDIsM10sXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgeTogKGppdHRlciwgYWRhbSwgcHlyYW1pZCwgY29sb3IsIGxlYXJuaW5nX3JhdGUsIGxlYXJuaW5nX3JhdGVfbGlzdCkgPT5cbiAgICAgICAgICAxKmNvbG9yICsgMipweXJhbWlkICsgNCpsZWFybmluZ19yYXRlXG4gICAgICAgICAgKyA0KmxlYXJuaW5nX3JhdGVfbGlzdC5sZW5ndGgqYWRhbSBcbiAgICAgICAgICArIDgqbGVhcm5pbmdfcmF0ZV9saXN0Lmxlbmd0aCpqaXR0ZXIsXG4gICAgICBpbWFnZV9uczogbl9pbWFnZXMgPT4gcmFuZ2Uobl9pbWFnZXMpXG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7U3ByaXRlfVxuICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaWFncmFtcy9PcHRFeHBsb3JlLmh0bWwiLCI8ZGl2IGNsYXNzPVwib3B0LWV4cGxvcmVcIiA+XG4gIDxmaWdjYXB0aW9uIHN0eWxlPVwibWFyZ2luLWJvdHRvbToxMHB4O1wiPlxuICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDoge3soc2l6ZSArIDIwKSpuX2ltYWdlcy0yMH19cHg7XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaWNvbnNcIiBzdHlsZT1cImZsb2F0OmxlZnQ7IHBhZGRpbmctcmlnaHQ6IDQwcHg7IHdpZHRoOiAyMjBweDtcIj5cbiAgICAgICAge3sjZWFjaCBpY29uX25zIGFzIG59fVxuICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgIGNsYXNzPVwiaWNvbiB7eyhzZWxlY3RlZCA9PSBuKT8gJ3NlbGVjdGVkJyA6ICcnfX1cIlxuICAgICAgICAgICAgICBvbjpjbGljaz0nc2V0KHtzZWxlY3RlZDogbn0pJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9wdC1leHBsb3JlLXNwcml0ZXNcIiBzdHlsZT1cImJhY2tncm91bmQtcG9zaXRpb246IC17e3Nwcml0ZV9zaXplKig0K24qaWNvbl9ucy5sZW5ndGgpfX1weCAte3tzcHJpdGVfc2l6ZSo1OH19cHg7IHdpZHRoOjY0cHg7IGhlaWdodDogNjRweDsgdHJhbnNmb3JtOiBzY2FsZShjYWxjKCA0MCAvIDY0KSk7IG1hcmdpbjogLTEycHg7XCI+IDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB7ey9lYWNofX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT1cImZsb2F0OmxlZnQ7IHBhZGRpbmctcmlnaHQ6IDQwcHg7IHdpZHRoOiAxNTVweDtcIj5cbiAgICAgICAgPGRpdj4gTGVhcm5pbmcgUmF0ZSAoe3tsZWFybmluZ19yYXRlX2xpc3RbW2xlYXJuaW5nX3JhdGVdXX19KTwvZGl2PlxuICAgICAgICA8ZGl2PjxkLXNsaWRlciB2YWx1ZT1sZWFybmluZ19yYXRlIHR5cGU9XCJyYW5nZVwiIG1pbj0wIG1heD17e2xlYXJuaW5nX3JhdGVfbGlzdC5sZW5ndGgtMX19IHN0eWxlPVwid2lkdGg6IDEwMHB4O1wiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPVwiZmxvYXQ6bGVmdDsgcGFkZGluZy1yaWdodDogMHB4OyB3aWR0aDogNzBweDtcIj5cbiAgICAgICAgPGxhYmVsPjxpbnB1dCBiaW5kOmNoZWNrZWQ9aml0dGVyIHR5cGU9XCJjaGVja2JveFwiPiBKaXR0ZXI8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+PGlucHV0IGJpbmQ6Y2hlY2tlZD1hZGFtIHR5cGU9XCJjaGVja2JveFwiPiBBZGFtPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT1cImZsb2F0OmxlZnQ7IHBhZGRpbmctcmlnaHQ6IDBweDsgd2lkdGg6IDE1MHB4O1wiPlxuICAgICAgICA8bGFiZWw+PGlucHV0IGJpbmQ6Y2hlY2tlZD1weXJhbWlkIHR5cGU9XCJjaGVja2JveFwiPiBMYXBsYWNpYW4gUHlyYW1pZDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD48aW5wdXQgYmluZDpjaGVja2VkPWNvbG9yIHR5cGU9XCJjaGVja2JveFwiPiBGYW5jeSBDb2xvciBQYXJhbTwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxiciBzdHlsZT1cImNsZWFyOmxlZnQ7XCI+XG4gICAgPC9kaXY+XG4gIDwvZmlnY2FwdGlvbj5cbiAgPGRpdiBjbGFzcz1cImltYWdlc1wiIHN0eWxlPVwid2lkdGg6IDEwMCU7IGhlaWdodDoge3tzaXplKzIwfX1weDsgcG9zaXRpb246IHJlbGF0aXZlO1wiPlxuICAgIHt7I2VhY2ggaW1hZ2VfbnMgYXMgbn19XG4gICAgICA8ZGl2IHN0eWxlPVwibGVmdDoge3soc2l6ZSArIDQpKm59fXB4OyB3aWR0aDoge3tzaXplfX1weDsgaGVpZ2h0OiB7e3NpemUrMjB9fXB4O1wiPlxuICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luOiB7eyhzaXplLXNwcml0ZV9zaXplKS8yfX1weDsgdHJhbnNmb3JtOnNjYWxlKHt7c2l6ZS9zcHJpdGVfc2l6ZX19KTtcIiA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm9wdC1leHBsb3JlLXNwcml0ZXNcIiBzdHlsZT1cIndpZHRoOnt7c3ByaXRlX3NpemV9fXB4OyBoZWlnaHQ6e3tzcHJpdGVfc2l6ZX19cHg7IGJhY2tncm91bmQtcG9zaXRpb246IC17e3Nwcml0ZV9zaXplKihuK3NlbGVjdGVkKmljb25fbnMubGVuZ3RoKX19cHggLXt7c3ByaXRlX3NpemUqeX19cHg7XCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZmlnY2FwdGlvbj57e3tsYWJlbF9mdW5jKG4pfX19PC9maWdjYXB0aW9uPlxuICAgICAgPC9kaXY+XG4gICAge3svZWFjaH19XG4gIDwvZGl2PlxuXG48L2Rpdj5cblxuPHN0eWxlPlxuLmljb25zIC5pY29uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuICAvKmZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpIHNhdHVyYXRlKDMwJSk7Ki9cbn1cblxuLmljb25zIC5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQUE7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IGdvbGQsIC0xcHggLTFweCAzcHggZ29sZCwgLTFweCAxcHggM3B4IGdvbGQsIDFweCAtMXB4IDNweCBnb2xkO1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XG59XG5cbiAgLmltYWdlcyA+IGRpdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG5cbiAgZmlnY2FwdGlvbiB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gIH1cblxuICAub3B0LWV4cGxvcmUtc3ByaXRlcyB7IGJhY2tncm91bmQ6IHVybChcImltYWdlcy9leHBsb3JlX29wdF9zcHJpdGVtYXBfNjQuanBlZ1wiKX1cbiAgXG4gIGxhYmVse1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgU3ByaXRlIGZyb20gXCIuL1Nwcml0ZS5odG1sXCI7XG4gIGZ1bmN0aW9uIHJhbmdlKG4pe1xuICAgIHZhciByZXQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSkgcmV0LnB1c2goaSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5faW1hZ2VzOiA1LFxuICAgICAgICBzcHJpdGVfc2l6ZTogNjQsXG4gICAgICAgIHNpemU6IDE4MCxcbiAgICAgICAgaml0dGVyOiB0cnVlLFxuICAgICAgICBhZGFtOiBmYWxzZSxcbiAgICAgICAgcHlyYW1pZDogdHJ1ZSxcbiAgICAgICAgY29sb3I6IGZhbHNlLFxuICAgICAgICBsZWFybmluZ19yYXRlOiAyLFxuICAgICAgICBsZWFybmluZ19yYXRlX2xpc3Q6IFs1LCAxLjI1LCAwLjI1LCAwLjA1LCAwLjAxLCAwLjAwMl0sXG4gICAgICAgIGxhYmVsX2Z1bmM6IG4gPT4gXCJTdGVwIFwiICsgKDgqTWF0aC5wb3coNCxuKSksXG4gICAgICAgIHNlbGVjdGVkOiAwLFxuICAgICAgICBpY29uX25zOiBbMCwxLDIsMyw0XSxcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICB5OiAoaml0dGVyLCBhZGFtLCBweXJhbWlkLCBjb2xvciwgbGVhcm5pbmdfcmF0ZSwgbGVhcm5pbmdfcmF0ZV9saXN0KSA9PlxuICAgICAgICAgIDEqY29sb3IgKyAyKnB5cmFtaWQgKyA0KmxlYXJuaW5nX3JhdGVcbiAgICAgICAgICArIDQqbGVhcm5pbmdfcmF0ZV9saXN0Lmxlbmd0aCphZGFtIFxuICAgICAgICAgICsgOCpsZWFybmluZ19yYXRlX2xpc3QubGVuZ3RoKmppdHRlcixcbiAgICAgIGltYWdlX25zOiBuX2ltYWdlcyA9PiByYW5nZShuX2ltYWdlcylcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtTcHJpdGV9XG4gIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpYWdyYW1zL09wdEV4cGxvcmUyLmh0bWwiLCJcbjxkaXYgY2xhc3M9XCJjb250cm9sc1wiPlxuICB7eyNlYWNoIGNvbmZpZ192YXJfZ3JvdXBzIGFzIGNvbmZpZ192YXJfZ3JvdXB9fVxuICAgIDxkaXYgY2xhc3M9XCJjb25maWctZ3JvdXBcIj5cbiAgICAgIHt7I2VhY2ggY29uZmlnX3Zhcl9ncm91cCBhcyBjb25maWdfdmFyfX1cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpZyBjb25maWcte3tjb25maWdfdmFyLnR5cGV9fVwiIGRhdGEtY29uZmlnLW5hbWU9e3tjb25maWdfdmFyLm5hbWV9fT5cbiAgICAgIFxuICAgICAgXG4gICAgICAgICAge3sjaWYgY29uZmlnX3Zhci50eXBlID09IFwiaWNvblwifX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uc1wiPlxuICAgICAgICAgICAge3sjZWFjaCByYW5nZShjb25maWdfdmFyLnZhbHVlcy5sZW5ndGgpIGFzIG59fVxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJpY29uIHt7KHZhcl92YWx1ZXNfc2FmZVtjb25maWdfdmFyLm5hbWVdID09IG4pPyAnc2VsZWN0ZWQnIDogJyd9fVwiXG4gICAgICAgICAgICAgICAgb246Y2xpY2s9XCJzZXREZWVwKCd2YXJfdmFsdWVzLicrY29uZmlnX3Zhci5uYW1lLCBuKVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDoge3tpY29uX3NpemV9fXB4OyBoZWlnaHQ6IHt7aWNvbl9zaXplfX1weDtcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXJcIiBzdHlsZT1cIm1hcmdpbjoge3soaWNvbl9zaXplLXNwcml0ZV9zaXplKS8yfX1weDsgdHJhbnNmb3JtOnNjYWxlKHt7aWNvbl9zaXplL3Nwcml0ZV9zaXplfX0pO1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyXCIgc3R5bGU9XCJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB7e3Nwcml0ZV9iYWNrZ3JvdW5kfX07XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2ljb25feF9wb3NfYWZ0ZXJfb3ZlcnJpZGUoa2V5dmFsdWUoY29uZmlnX3Zhci5uYW1lLCBuKSl9fXB4XG4gICAgICAgICAgICAgICAgICAgICAgICB7e2ljb25feV9wb3NfYWZ0ZXJfb3ZlcnJpZGUoa2V5dmFsdWUoY29uZmlnX3Zhci5uYW1lLCBuKSl9fXB4O1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB7e3Nwcml0ZV9zaXplfX1weDtcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHt7c3ByaXRlX3NpemV9fXB4O1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHt7L2VhY2h9fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHt7L2lmfX1cbiAgICAgIFxuICAgICAgICAgIHt7I2lmIGNvbmZpZ192YXIudHlwZSA9PSBcImJpbmFyeVwifX1cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uOmNoYW5nZT1cInNldERlZXAoJ3Zhcl92YWx1ZXMuJytjb25maWdfdmFyLm5hbWUsICt0aGlzLmNoZWNrZWQpXCIgY2hlY2tlZD1cInt7dmFyX3ZhbHVlc19zYWZlW2NvbmZpZ192YXIubmFtZV19fVwiPlxuICAgICAgICAgICAgICB7e3todW1hbl9yZWFkYWJsZShjb25maWdfdmFyLmxhYmVsLCBzdHJpbmdzKX19fVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICB7ey9pZn19XG4gICAgICAgICAgXG4gICAgICAgICAge3sjaWYgY29uZmlnX3Zhci50eXBlICE9IFwiYmluYXJ5XCIgJiYgY29uZmlnX3Zhci50eXBlICE9IFwiaWNvblwiIH19XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIHt7e2h1bWFuX3JlYWRhYmxlKGNvbmZpZ192YXIubGFiZWwsIHN0cmluZ3MpfX19XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPih7e2NvbmZpZ192YXIudmFsdWVzW3Zhcl92YWx1ZXNfc2FmZVtjb25maWdfdmFyLm5hbWVdXSArICh1bml0cy5nZXQoY29uZmlnX3Zhci5uYW1lKSB8fCAnJykgfX0pPC9zcGFuPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOiAxMDBweDtcIj5cbiAgICAgICAgICAgICAgPGQtc2xpZGVyIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgbWluPTEgbWF4PXt7Y29uZmlnX3Zhci52YWx1ZXMubGVuZ3RofX0gc3RlcD17ezF9fSB0aWNrc1xuICAgICAgICAgICAgICAgIHZhbHVlPXt7dmFyX3ZhbHVlc19zYWZlW2NvbmZpZ192YXIubmFtZV0rMX19XG4gICAgICAgICAgICAgICAgb246aW5wdXQ9XCJzZXREZWVwKCd2YXJfdmFsdWVzLicrY29uZmlnX3Zhci5uYW1lLCB0aGlzLnZhbHVlLTEpXCI+XG4gICAgICAgICAgICAgIDwvZC1zbGlkZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7ey9pZn19XG4gICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIHt7L2VhY2h9fVxuICAgIDwvZGl2PlxuICB7ey9lYWNofX1cbiAge3sjaWYgZXhwbGFpbl90ZXh0ICE9IFwiXCJ9fVxuICAgIDxkaXYgY2xhc3M9XCJleHBsYWluXCI+XG4gICAgICB7e2V4cGxhaW5fdGV4dH19XG4gICAgPC9kaXY+XG4gIHt7L2lmfX1cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiaW1hZ2VzXCI+XG4gIHt7I2VhY2ggZGlzcGxheV9vZmZzZXRzIGFzIG9mZnNldCwgaW5kZXh9fVxuICAgIDxkaXYgY2xhc3M9XCJvdXRlclwiIHN0eWxlPVwid2lkdGg6IHt7c2l6ZX19cHg7IGhlaWdodDoge3tzaXplfX1weDtcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbm5lclwiIHN0eWxlPVwiXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB7e3Nwcml0ZV9iYWNrZ3JvdW5kfX07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB7e29mZnNldC54fX1weCB7e29mZnNldC55fX1weDtcbiAgICAgICAgICAgIHdpZHRoOiB7e3Nwcml0ZV9zaXplfX1weDsgaGVpZ2h0OiB7e3Nwcml0ZV9zaXplfX1weDtcbiAgICAgICAgICAgIG1hcmdpbjoge3soc2l6ZS1zcHJpdGVfc2l6ZSkvMn19cHg7XG4gICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoe3tzaXplL3Nwcml0ZV9zaXplfX0pO1wiXG4gICAgICAgID5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZpZ2NhcHRpb24+XG4gICAgICAgIFN0ZXAge3tzdGVwc1tpbmRleF19fVxuICAgICAgPC9maWdjYXB0aW9uPlxuICAgIDwvZGl2PlxuICB7ey9lYWNofX1cbjwvZGl2PlxuXG48c3R5bGU+XG5cbi5jb250cm9scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4vKiBJY29ucyAqL1xuXG4uaWNvbnMge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcbn1cblxuLmljb25zIC5pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICBcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG5cbi5pY29ucyAuaWNvbjpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLmljb25zIC5pY29uOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4uaWNvbnMgLmljb24uc2VsZWN0ZWQge1xuICBvcGFjaXR5OiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2ZmNjYwMDtcbn1cblxuLmljb24gZGl2IHtcbiAgb3BhY2l0eTogMC42NjY7XG4gIGltYWdlLXJlbmRlcmluZzogYXV0bztcbn1cblxuLmljb24uc2VsZWN0ZWQgZGl2IHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogQ29uZmlnIEdyb3VwICovXG5cbi5jb25maWctZ3JvdXAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmNvbmZpZy1ncm91cDpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5jb25maWctZ3JvdXAgLmNvbmZpZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY29uZmlnLWJpbmFyeSB7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4uY29uZmlnLXJhbmdlIHtcbiAgd2lkdGg6IDE0MHB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5jb25maWctZ3JvdXAgLmNvbmZpZyBpbnB1dFt0eXBlPVwicmFuZ2VcIl0ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4uY29uZmlnLWdyb3VwIHNwYW4udmFsdWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzNXB4O1xufVxuICBcbi5leHBsYWluIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjAwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5pbWFnZXMge1xufVxuXG4uaW1hZ2VzIC5vdXRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4uaW1hZ2VzIC5vdXRlcjpsYXN0LW9mLXR5cGUge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4uaW5uZXIge1xuICBpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDtcbn1cbjwvc3R5bGU+XG5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgc2V0RGVlcCB9IGZyb20gJ3N2ZWx0ZS1leHRyYXMnO1xuXG4gIGZ1bmN0aW9uIHJhbmdlKG4pe1xuICAgIHZhciByZXQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSkgcmV0LnB1c2goaSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuICBcbiAgZnVuY3Rpb24gb2JqX3VwZGF0ZShhLCBiKXtcbiAgICB2YXIgcmV0ID0ge307XG4gICAgZm9yICh2YXIgayBpbiBhKSByZXRba10gPSBhW2tdO1xuICAgIGZvciAodmFyIGsgaW4gYikgcmV0W2tdID0gYltrXTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgZnVuY3Rpb24gdmFyc190b19wb3NpdGlvbihkaW1fdmFycywgdmFscyl7XG4gICAgdmFyIHN1bSA9IDA7XG4gICAgdmFyIGRpbV9zcGFjaW5nID0gMTtcbiAgICB2YXIgZGltX3NwYWNpbmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IGRpbV92YXJzLmxlbmd0aC0xOyBpID49IDA7IGktLSl7XG4gICAgICBkaW1fc3BhY2luZ3MucHVzaChkaW1fc3BhY2luZyk7XG4gICAgICBkaW1fc3BhY2luZyAqPSBkaW1fdmFyc1tpXS52YWx1ZXMubGVuZ3RoO1xuICAgIH1cbiAgICBkaW1fc3BhY2luZ3MucmV2ZXJzZSgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGltX3ZhcnMubGVuZ3RoOyBpKyspe1xuICAgICAgdmFyIGRpbV92YXIgPSBkaW1fdmFyc1tpXTtcbiAgICAgIHZhciB2YWwgPSB2YWxzW2RpbV92YXIubmFtZV0gfHwgMDtcbiAgICAgIHN1bSArPSB2YWwgKiBkaW1fc3BhY2luZ3NbaV07XG4gICAgfVxuICAgIHJldHVybiBzdW07XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIHNlbGVjdF9vYmpfYnlfbmFtZShvYmpzLCBuYW1lKXtcbiAgICBmb3IgKHZhciBvYmogb2Ygb2Jqcyl7XG4gICAgICBpZiAob2JqLm5hbWUgPT0gbmFtZSl7XG4gICAgICAgIHJldHVybiBvYmpcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgbmFtZXMgPSBvYmpzLm1hcCggbyA9PiBvLm5hbWUgKVxuICAgIGNvbnNvbGUuZXJyb3IoXCJEaWQgbm90IGZpbmQgXCIrIG5hbWUgKyBcIiBpbiBcIiArIG5hbWVzICsgXCIhXCIpXG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGtleXZhbHVlKGssdil7XG4gICAgdmFyIHJldCA9IHt9O1xuICAgIHJldFtrXSA9IHY7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gbG9hZF9zcHJpdGVtYXAobmFtZSwgc2V0dGluZ3MpIHtcbiAgICB0aGlzLnNldCh7c3ByaXRlX3BhdGg6IFwiaW1hZ2VzL1wiICsgbmFtZSArIFwiLmpwZ1wiLCB9KTtcblxuICAgIGNvbnN0IGFsbF92YXJzID0gc2V0dGluZ3MuY29uZmlnLnhfdmFycy5jb25jYXQoc2V0dGluZ3MuY29uZmlnLnlfdmFycyk7XG4gICAgY29uc3Qgc3RlcF92YXIgPSBhbGxfdmFycy5maWx0ZXIodiA9PiB2Lm5hbWUgPT0gXCJzdGVwc1wiIHx8IHYubmFtZSA9PSBcInN0ZXBcIilbMF07XG4gICAgY29uc3QgYWRqdXN0ZWRfY29uZmlnID0ge1xuICAgICAgc3ByaXRlX3NpemU6IHNldHRpbmdzLmNvbmZpZy5zaXplLFxuICAgICAgeF92YXJzOiBzZXR0aW5ncy5jb25maWcueF92YXJzLFxuICAgICAgeV92YXJzOiBzZXR0aW5ncy5jb25maWcueV92YXJzLFxuICAgICAgY29uZmlndXJhYmxlOiBhbGxfdmFyc1xuICAgICAgICAuZmlsdGVyKHYgPT4gdi5uYW1lICE9IFwic3RlcHNcIiAmJiB2LnZhbHVlcy5sZW5ndGggPiAwKVxuICAgICAgICAubWFwKHYgPT4gdi5uYW1lKSxcbiAgICAgIGRpc3BsYXk6IHN0ZXBfdmFyLnZhbHVlc1xuICAgICAgICAubWFwKCh2YWwsIGkpID0+IGtleXZhbHVlKHN0ZXBfdmFyLm5hbWUsIGkpKSxcbiAgICB9XG4gICAgdGhpcy5zZXQoYWRqdXN0ZWRfY29uZmlnKTtcbiAgICB0aGlzLnNldChzZXR0aW5ncyk7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGh1bWFuX3JlYWRhYmxlKGtleSwgc3RyaW5ncykge1xuICAgIGlmIChzdHJpbmdzLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gc3RyaW5ncy5nZXQoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGtleS5zcGxpdCgnXycpLm1hcCgocykgPT4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSkpLmpvaW4oJyAnKTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNwcml0ZW1hcF9uYW1lOiBcIlwiLFxuICAgICAgICBzcHJpdGVfcGF0aDogXCJcIixcbiAgICAgICAgc2l6ZTogMTM2LFxuICAgICAgICBzcHJpdGVfc2l6ZTogMSxcbiAgICAgICAgeF92YXJzOiBbXSxcbiAgICAgICAgeV92YXJzOiBbXSxcbiAgICAgICAgdmFyX3ZhbHVlczoge30sXG4gICAgICAgIGRpc3BsYXk6IFt7fV0sXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogW10sXG4gICAgICAgIGV4cGxhaW5fdGV4dDogXCJcIixcbiAgICAgICAgaWNvbl9zaXplOiA0NCxcbiAgICAgICAgaWNvbl92YXJfdmFsdWVzOiB7fSxcbiAgICAgICAgc3RyaW5nczogbmV3IE1hcChbXG4gICAgICAgICAgWydkZWZhdWx0X3RyYW5zZm9ybXMnLCAnVHJhbnNmb3JtcyddLFxuICAgICAgICAgIFsncHlyYW1pZCcsICdEZWNvcnJlbGF0ZSddLFxuICAgICAgICAgIFsndHYnLCAnVG90YWwgVmFyaWF0aW9uJ10sXG4gICAgICAgICAgWydsMScsICdMPHN1Yj4xPC9zdWI+J10sXG4gICAgICAgICAgWydyYW5kb21fcm90YXRlJywgJ1JvdGF0ZSddLFxuICAgICAgICAgIFsncmFuZG9tX3NjYWxlJywgJ1NjYWxlJ10sXG4gICAgICAgICAgWydsZWFybmluZyByYXRlJywgJ0xSJ10sXG4gICAgICAgIF0pLFxuICAgICAgICB1bml0czogbmV3IE1hcChbXG4gICAgICAgICAgWydqaXR0ZXInLCAncHgnXSxcbiAgICAgICAgICBbJ3JhbmRvbV9yb3RhdGUnLCAnwrAnXSxcbiAgICAgICAgICBbJ3JhbmRvbV9zY2FsZScsICfDlyddLFxuICAgICAgICBdKSxcbiAgICAgICAgc3RlcHM6IFtcbiAgICAgICAgICAxLCAzMiwgMTI4LCAyNTYsIDIwNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIFxuICAgICAgc3ByaXRlX2JhY2tncm91bmQ6IHNwcml0ZV9wYXRoID0+IFxuICAgICAgICAoc3ByaXRlX3BhdGggPT0gXCJcIik/IFwiI0RERFwiIDogXCJ1cmwoXCIrc3ByaXRlX3BhdGgrXCIpXCIsXG4gICAgICBcbiAgICAgIGFsbF92YXJzOiAoeF92YXJzLCB5X3ZhcnMpID0+IHhfdmFycy5jb25jYXQoeV92YXJzKSxcbiAgICAgIFxuICAgICAgdmFyX3ZhbHVlc19zYWZlOiAoYWxsX3ZhcnMsIHZhcl92YWx1ZXMpID0+IHtcbiAgICAgICAgdmFyIGRlZmF1bHRzID0gW107XG4gICAgICAgIGZvciAodmFyIGNvbmZpZ192YXIgb2YgYWxsX3ZhcnMpe1xuICAgICAgICAgIGRlZmF1bHRzW2NvbmZpZ192YXIubmFtZV0gPSBjb25maWdfdmFyLmRlZmF1bHQgfHwgMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqX3VwZGF0ZShkZWZhdWx0cywgdmFyX3ZhbHVlcyk7XG4gICAgICB9LFxuICAgICAgXG4gICAgICBpY29uX3Zhcl92YWx1ZXNfc2FmZTogKGFsbF92YXJzLCB2YXJfdmFsdWVzLCBpY29uX3Zhcl92YWx1ZXMpID0+IHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IHt9O1xuICAgICAgICBmb3IgKHZhciBjb25maWdfdmFyIG9mIGFsbF92YXJzKXtcbiAgICAgICAgICB2YXIgbmFtZSA9IGNvbmZpZ192YXIubmFtZTtcbiAgICAgICAgICB2YWx1ZXNbbmFtZV0gPSBpY29uX3Zhcl92YWx1ZXNbbmFtZV0gfHwgY29uZmlnX3Zhci5kZWZhdWx0IHx8IHZhcl92YWx1ZXNbbmFtZV0gfHwgMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgfSxcbiAgICAgIFxuICAgICAgY29uZmlnX3Zhcl9ncm91cHM6IChhbGxfdmFycywgY29uZmlndXJhYmxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9ICBjb25maWd1cmFibGUubWFwKGdyb3VwID0+IHtcbiAgICAgICAgICBpZiAoIShncm91cCBpbnN0YW5jZW9mIEFycmF5KSkgZ3JvdXAgPSBbZ3JvdXBdO1xuICAgICAgICAgIHJldHVybiBncm91cFxuICAgICAgICAgICAgLm1hcChjb25maWdfdmFyX25hbWUgPT4gc2VsZWN0X29ial9ieV9uYW1lKGFsbF92YXJzLCBjb25maWdfdmFyX25hbWUpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9LFxuICAgICAgXG4gICAgICB4X3Bvc19hZnRlcl9vdmVycmlkZTogKHhfdmFycywgdmFyX3ZhbHVlc19zYWZlLCBzcHJpdGVfc2l6ZSkgPT4gKFxuICAgICAgICAodmFyX3ZhbHVlX292ZXJyaWRlKSA9PiAtc3ByaXRlX3NpemUqdmFyc190b19wb3NpdGlvbih4X3ZhcnMsIG9ial91cGRhdGUodmFyX3ZhbHVlc19zYWZlLCB2YXJfdmFsdWVfb3ZlcnJpZGUpKVxuICAgICAgKSxcbiAgICAgIFxuICAgICAgeV9wb3NfYWZ0ZXJfb3ZlcnJpZGU6ICh5X3ZhcnMsIHZhcl92YWx1ZXNfc2FmZSwgc3ByaXRlX3NpemUpID0+IChcbiAgICAgICAgKHZhcl92YWx1ZV9vdmVycmlkZSkgPT4gLXNwcml0ZV9zaXplKnZhcnNfdG9fcG9zaXRpb24oeV92YXJzLCBvYmpfdXBkYXRlKHZhcl92YWx1ZXNfc2FmZSwgdmFyX3ZhbHVlX292ZXJyaWRlKSlcbiAgICAgICksXG4gICAgXG4gICAgICBpY29uX3hfcG9zX2FmdGVyX292ZXJyaWRlOiAoeF92YXJzLCBpY29uX3Zhcl92YWx1ZXNfc2FmZSwgc3ByaXRlX3NpemUpID0+IChcbiAgICAgICAgKHZhcl92YWx1ZV9vdmVycmlkZSkgPT4gLXNwcml0ZV9zaXplKnZhcnNfdG9fcG9zaXRpb24oeF92YXJzLCBvYmpfdXBkYXRlKGljb25fdmFyX3ZhbHVlc19zYWZlLCB2YXJfdmFsdWVfb3ZlcnJpZGUpKVxuICAgICAgKSxcbiAgICAgIFxuICAgICAgaWNvbl95X3Bvc19hZnRlcl9vdmVycmlkZTogKHlfdmFycywgaWNvbl92YXJfdmFsdWVzX3NhZmUsIHNwcml0ZV9zaXplKSA9PiAoXG4gICAgICAgICh2YXJfdmFsdWVfb3ZlcnJpZGUpID0+IC1zcHJpdGVfc2l6ZSp2YXJzX3RvX3Bvc2l0aW9uKHlfdmFycywgb2JqX3VwZGF0ZShpY29uX3Zhcl92YWx1ZXNfc2FmZSwgdmFyX3ZhbHVlX292ZXJyaWRlKSlcbiAgICAgICksXG4gICAgICBcbiAgICAgIGRpc3BsYXlfb2Zmc2V0czogKHhfcG9zX2FmdGVyX292ZXJyaWRlLCB5X3Bvc19hZnRlcl9vdmVycmlkZSwgZGlzcGxheSkgPT4ge1xuICAgICAgICByZXR1cm4gZGlzcGxheS5tYXAoZGlzcGxheV92YWx1ZXMgPT4gKHtcbiAgICAgICAgICB4OiAgeF9wb3NfYWZ0ZXJfb3ZlcnJpZGUoZGlzcGxheV92YWx1ZXMpLFxuICAgICAgICAgIHk6ICB5X3Bvc19hZnRlcl9vdmVycmlkZShkaXNwbGF5X3ZhbHVlcyksXG4gICAgICAgIH0pKVxuICAgICAgfSxcbiAgICAgIFxuXG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7fSxcbiAgICBtZXRob2RzOiB7c2V0RGVlcCwgbG9hZF9zcHJpdGVtYXB9LFxuICAgIGhlbHBlcnM6IHtyYW5nZSwga2V5dmFsdWUsIGh1bWFuX3JlYWRhYmxlfVxuICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaWFncmFtcy9PcHRFeHBsb3JlRmxleC5odG1sIiwiPGRpdiBjbGFzcz1cImxheWVyc1wiPlxuICB7eyNlYWNoIHJhbmdlKDEyKSBhcyBufX1cbiAgICA8ZGl2IGNsYXNzPVwib3V0ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJncmFkXCIgc3R5bGU9XCJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLXt7c3ByaXRlX3NpemUqKG4rMSl9fXB4IC17e3Nwcml0ZV9zaXplKjB9fXB4O1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKHt7c2l6ZS9zcHJpdGVfc2l6ZX19KTtcbiAgICAgICAgZmlsdGVyOiAgY29udHJhc3QoMjAwJSk7XG4gICAgICAgIG1hcmdpbjoge3soc2l6ZS1zcHJpdGVfc2l6ZSkvMn19cHg7XG4gICAgICAgIHdpZHRoOiB7e3Nwcml0ZV9zaXplfX1weDtcbiAgICAgICAgaGVpZ2h0OiB7e3Nwcml0ZV9zaXplfX1weDsgXCI+PC9kaXY+XG4gICAgICA8ZmlnY2FwdGlvbj57e2xheWVyc1tuXX19PC9maWdjYXB0aW9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ7eyhuID09IDEgfHwgbiA9PSAzIHx8IG4gPT0gNSB8fCBuID09IDEwKT8gJ29wIGhpZ2hsaWdodCcgOiAnb3AnfX1cIiBzdHlsZT1cIlxuICAgICAgdG9wOiA0NXB4O1xuICAgICAgd2lkdGg6e3ttYXJnaW4tMTJ9fXB4O1xuICAgICAgaGVpZ2h0Ont7c2l6ZSsxMH19cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB7eyhuID09IDEgfHwgbiA9PSAzIHx8IG4gPT0gNSB8fCBuID09IDEwKT8gJyNmZjY2MDAnIDogKG4gPT0gMTEpPyAnd2hpdGUnIDogJ2hzbCgyNDAsIDUwJSwgOTAlKSd9fTtcbiAgICAgIGJvcmRlci1yYWRpdXM6NHB4O1wiIGRhdGEtbj1cInt7bn19XCI+XG4gICAgPC9kaXY+XG4gIHt7L2VhY2h9fVxuPC9kaXY+XG5cblxuPHN0eWxlPlxuICAubGF5ZXJzIHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5vdXRlciB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgfVxuICAub3V0ZXI6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbiAgLm91dGVyOmxhc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG4gIC5ncmFkIHtcbiAgICAvKndpZHRoOiAyMjRweDsqL1xuICAgIC8qaGVpZ2h0OiAyMjRweDsqL1xuICAgIGJhY2tncm91bmQ6IHVybChcImltYWdlcy9sYXllcl9ncmFkaWVudHNfc3ByaXRlbWFwXzQuanBlZ1wiKTtcbiAgfVxuICAub3V0ZXIgZmlnY2FwdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICAuaGlnaGxpZ2h0OjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwi4oaQXCI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IC0zcHg7XG4gICAgdG9wOiAtMjVweDtcbiAgICBjb2xvcjogIzg4ODtcbiAgfVxuPC9zdHlsZT5cblxuXG48c2NyaXB0PlxuZnVuY3Rpb24gcmFuZ2Uobil7XG4gIHZhciByZXQgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpIHJldC5wdXNoKGkpO1xuICByZXR1cm4gcmV0O1xufVxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNpemU6IDcwLFxuICAgICAgICBzcHJpdGVfc2l6ZTogMjI0LFxuICAgICAgICBtYXJnaW46IDIwLFxuICAgICAgICBsYXllcnM6IFtcImlucHV0XCIsIFwiY29udjJkMFwiLCBcImNvbnYyZDFcIiwgXCJjb252MmQyXCIsXG4gICAgICAgICAgICAgICBcIm1peGVkM2FcIiwgXCJtaXhlZDNiXCIsXG4gICAgICAgICAgICAgICBcIm1peGVkNGFcIiwgXCJtaXhlZDRiXCIsIFwibWl4ZWQ0Y1wiLCBcIm1peGVkNGRcIiwgXCJtaXhlZDRlXCIsXG4gICAgICAgICAgICAgICBcIm1peGVkNWFcIiwgXCJtaXhlZDViXCJdLFxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHsgICB9LFxuICAgIGhlbHBlcnM6IHtyYW5nZX1cbiAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlhZ3JhbXMvR3JhZEFydGlmYWN0cy5odG1sIiwiPGRpdiBzdHlsZT1cImdyaWQtY29sdW1uOiB0ZXh0O1wiPlxuICA8ZGl2IGNsYXNzPVwiaWNvbnNcIj5cbiAge3sjZWFjaCB0aHVtYm5haWxfaW5kaWNlcyBhcyBpfX1cbiAgICA8ZGl2IGNsYXNzPVwiaWNvbiB7eyhzZWxlY3RlZCA9PSBpKT8gJ3NlbGVjdGVkJyA6ICcnfX1cIlxuICAgICAgICAgb246Y2xpY2s9J3NldCh7c2VsZWN0ZWQ6IGl9KSdcbiAgICAgID5cbiAgICAgIDxTcHJpdGUgc3JjX2NsYXNzPXt7c3ByaXRlX29wdF9jbGFzc319IHNpemU9NDQgc3ByaXRlX3NpemU9MTQ3IHk9e3tpfX0geD0wIHNwcml0ZV9zY2FsZT0wLjUvPlxuICAgIDwvZGl2PlxuICB7ey9lYWNofX1cbiAgPC9kaXY+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIFxuICA8ZGl2IGNsYXNzPVwibmVnYXRpdmVcIj5cbiAgICA8ZGl2IGNsYXNzPVwib3B0aW1pemVcIj5cbiAgICAgIDxTcHJpdGUgc3JjX2NsYXNzPXt7c3ByaXRlX29wdF9jbGFzc319IHNpemU9MTQ3IHNwcml0ZV9zaXplPTE0NyB5PXt7c2VsZWN0ZWR9fSB4PTEgc3ByaXRlX3NjYWxlPTEgcGl4ZWxhdGVkPXt7ZmFsc2V9fS8+XG4gICAgICA8ZmlnY2FwdGlvbiBjbGFzcz1cImNhcHRpb25cIj5cbiAgICAgICAgPHN0cm9uZz5OZWdhdGl2ZTwvc3Ryb25nPiBvcHRpbWl6ZWRcbiAgICAgIDwvZmlnY2FwdGlvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZXNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLXNldFwiPlxuICAgICAgICA8IS0tIDxpbWcgc3JjPXt7aW1nX3BhdGggKyBcIjAtbWluLmpwZ1wifX0+IC0tPlxuICAgICAgICA8U3ByaXRlIHNyY19jbGFzcz17e3Nwcml0ZV9jbGFzc319IHNpemU9MTQ3IHNwcml0ZV9zaXplPTI5NCB5PXt7c2VsZWN0ZWR9fSB4PTAgc3ByaXRlX3NjYWxlPTEvPlxuICAgICAgICA8ZmlnY2FwdGlvbiBjbGFzcz1cImNhcHRpb25cIj5cbiAgICAgICAgICA8c3Ryb25nPk1pbmltdW08L3N0cm9uZz4gYWN0aXZhdGlvbiBleGFtcGxlc1xuICAgICAgICA8L2ZpZ2NhcHRpb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLXNldFwiPlxuICAgICAgICA8U3ByaXRlIHNyY19jbGFzcz17e3Nwcml0ZV9jbGFzc319IHNpemU9MTQ3IHNwcml0ZV9zaXplPTI5NCB5PXt7c2VsZWN0ZWR9fSB4PTEgc3ByaXRlX3NjYWxlPTEvPlxuICAgICAgICA8ZmlnY2FwdGlvbiBjbGFzcz1cImNhcHRpb25cIj5cbiAgICAgICAgICBTbGlnaHRseSBuZWdhdGl2ZSBhY3RpdmF0aW9uIGV4YW1wbGVzXG4gICAgICAgIDwvZmlnY2FwdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiZGl2aWRlclwiPjwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJwb3NpdGl2ZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJvcHRpbWl6ZVwiPlxuICAgICAgPFNwcml0ZSBzcmNfY2xhc3M9e3tzcHJpdGVfb3B0X2NsYXNzfX0gc2l6ZT0xNDcgc3ByaXRlX3NpemU9MTQ3IHk9e3tzZWxlY3RlZH19IHg9MCBzcHJpdGVfc2NhbGU9MS8+XG4gICAgICA8ZmlnY2FwdGlvbiBjbGFzcz1cImNhcHRpb25cIj5cbiAgICAgICAgPHN0cm9uZz5Qb3NpdGl2ZTwvc3Ryb25nPiBvcHRpbWl6ZWRcbiAgICAgIDwvZmlnY2FwdGlvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZXNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLXNldFwiPlxuICAgICAgICA8U3ByaXRlIHNyY19jbGFzcz17e3Nwcml0ZV9jbGFzc319IHNpemU9MTQ3IHNwcml0ZV9zaXplPTI5NCB5PXt7c2VsZWN0ZWR9fSB4PTMgc3ByaXRlX3NjYWxlPTEvPlxuICAgICAgICA8ZmlnY2FwdGlvbiBjbGFzcz1cImNhcHRpb25cIj5cbiAgICAgICAgICBTbGlnaHRseSBwb3NpdGl2ZSBhY3RpdmF0aW9uIGV4YW1wbGVzXG4gICAgICAgIDwvZmlnY2FwdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtc2V0XCI+XG4gICAgICAgIDxTcHJpdGUgc3JjX2NsYXNzPXt7c3ByaXRlX2NsYXNzfX0gc2l6ZT17ezE0N319IHNwcml0ZV9zaXplPXt7Mjk0fX0geT17e3NlbGVjdGVkfX0geD00IHNwcml0ZV9zY2FsZT0xLz5cbiAgICAgICAgPGZpZ2NhcHRpb24gY2xhc3M9XCJjYXB0aW9uXCI+XG4gICAgICAgICAgPHN0cm9uZz5NYXhpbXVtPC9zdHJvbmc+IGFjdGl2YXRpb24gZXhhbXBsZXNcbiAgICAgICAgPC9maWdjYXB0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG48L2Rpdj5cblxuPGZpZ2NhcHRpb24gc3R5bGU9XCJncmlkLWNvbHVtbjogdGV4dDtcIj5cbiAgPHN0cm9uZz57e25ldXJvbl9uYW1lKG5ldXJvbnNbc2VsZWN0ZWRdKX19PC9zdHJvbmc+XG48L2ZpZ2NhcHRpb24+XG5cblxuPHN0eWxlPlxuXG4gIC5vcHQtYW5kLWV4YW1wbGVzLXNwcml0ZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1hZ2VzL2V4YW1wbGVzLmpwZ1wiKTtcbiAgfVxuICBcbiAgLm9wdC1hbmQtZXhhbXBsZXMtb3B0aW1pemVkLXNwcml0ZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1hZ2VzL2V4YW1wbGVzX29wdGltaXplZC5wbmdcIik7XG4gIH1cbiAgXG4gIC8qIEljb25zICovXG5cbiAgLmljb25zIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcbiAgfVxuXG4gIC5pY29ucyAuaWNvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgICBcbiAgICAvKm1hcmdpbi1sZWZ0OiAzcHg7Ki9cbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gIH1cblxuICAuaWNvbnMgLmljb246Zmlyc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxuXG4gIC5pY29ucyAuaWNvbjpsYXN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICB9XG5cbiAgLmljb25zIC5pY29uLnNlbGVjdGVkIHtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2ZmNjYwMDtcbiAgfVxuXG4gIC5pY29uIGRpdiB7XG4gICAgb3BhY2l0eTogMC42NjY7XG4gICAgaW1hZ2UtcmVuZGVyaW5nOiBhdXRvO1xuICB9XG5cbiAgLmljb24uc2VsZWN0ZWQgZGl2IHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIFxuICAvKiBPcHRBbmRFeGFtcGxlcyAqL1xuXG4gIC5jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uOiB0ZXh0O1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIH1cbiAgXG4gIC5wb3NpdGl2ZSwgLm5lZ2F0aXZlLCAuZGl2aWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdztcbiAgfVxuICBcbiAgLmNvbnRhaW5lciBmaWdjYXB0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICB9XG4gIFxuICAuZGl2aWRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIH1cbiAgXG4gIC5wb3NpdGl2ZSA+IGRpdiB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG4gIFxuICAub3B0aW1pemUge1xuICAgIFxuICB9XG4gIFxuICAucG9zaXRpdmUge1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIH1cbiAgXG4gIC5vcHRpbWl6ZSBmaWdjYXB0aW9uIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbiAgXG4gIC5vcHRpbWl6ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICB9XG4gIFxuICAuZXhhbXBsZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3c7XG4gIH1cbiAgXG4gIC5leGFtcGxlLXNldCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLXNldCA+ICosXG4gIC5vcHRpbWl6ZSA+ICoge1xuICAgIHdpZHRoOiAxNDdweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtc2V0ID4gZGl2LFxuICAub3B0aW1pemUgPiBkaXYge1xuICAgIGhlaWdodDogMTQ3cHg7XG4gIH1cbiAgXG4gIC5wb3NpdGl2ZSAuZXhhbXBsZXMge1xuICAgIGZsZXgtZmxvdzogcm93LXJldmVyc2U7XG4gIH1cbiAgXG4gIC5wb3NpdGl2ZSAub3B0aW1pemUge1xuICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgfVxuICBcbiAgLm5lZ2F0aXZlIC5vcHRpbWl6ZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICB9XG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gICAgXG4gICAgLmRpdmlkZXIge1xuICAgICAgZGlzcGxheTogaW5oZXJpdDtcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NjYztcbiAgICAgIC8qbWFyZ2luLXRvcDogLTEwcHg7Ki9cbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgXG4gICAgLmRpdmlkZXI6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIjBcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IC00cHg7XG4gICAgICB0b3A6IC0yNXB4O1xuICAgICAgY29sb3I6ICNjY2M7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cbiAgICBcbiAgICAuZXhhbXBsZS1zZXQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbiAgICBcbiAgICAuZXhhbXBsZS1zZXQ6Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIH1cbiAgICBcbiAgICAubmVnYXRpdmUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gICAgXG4gICAgLm5lZ2F0aXZlIC5vcHRpbWl6ZSB7XG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB9XG4gICAgXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBncmlkLWNvbHVtbjogcGFnZTtcbiAgICAgIGZsZXgtZmxvdzogcm93O1xuICAgIH1cbiAgICBcbiAgICAucG9zaXRpdmUge1xuICAgICAgZmxleC1mbG93OiByb3ctcmV2ZXJzZTtcbiAgICB9XG4gICAgXG4gICAgLnBvc2l0aXZlIC5leGFtcGxlcyB7XG4gICAgICBmbGV4LWZsb3c6IHJvdztcbiAgICB9XG4gICAgXG4gICAgLm5lZ2F0aXZlLCAuZGl2aWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgfVxuICAgIFxuICAgIC5vcHRpbWl6ZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIH1cbiAgICBcbiAgICAubmVnYXRpdmUgPiBkaXYge1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICB9XG4gICAgXG4gICAgLnBvc2l0aXZlIC5vcHRpbWl6ZSB7XG4gICAgICBtYXJnaW4tbGVmdDogMzZweDtcbiAgICB9XG4gICAgXG4gICAgLm5lZ2F0aXZlIC5vcHRpbWl6ZSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDM2cHg7XG4gICAgfVxuICB9XG48L3N0eWxlPlxuXG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IHNldERlZXAgfSBmcm9tICdzdmVsdGUtZXh0cmFzJztcbiAgaW1wb3J0IFNwcml0ZSBmcm9tICcuL1Nwcml0ZS5odG1sJztcbiAgXG4gIGZ1bmN0aW9uIHBhZChudW0sIHNpemUpIHtcbiAgICB2YXIgcyA9IFwiMDAwMDBcIiArIG51bTtcbiAgICByZXR1cm4gcy5zdWJzdHIocy5sZW5ndGgtc2l6ZSk7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIHJhbmdlKG4pe1xuICAgIHJldHVybiBBcnJheShuKS5maWxsKCkubWFwKChfLCBpKSA9PiBpKTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gbmV1cm9uX25hbWUobmV1cm9uKSB7XG4gICAgcmV0dXJuIGBMYXllciBtaXhlZCAke25ldXJvblswXX0sIHVuaXQgJHtuZXVyb25bMV19YDtcbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV1cm9uczogW1xuICAgICAgICAgIFtcIjRhXCIsICAgNl0sXG4gICAgICAgICAgW1wiNGFcIiwgIDQxXSxcbiAgICAgICAgICBbXCI0YVwiLCAxNDNdLFxuICAgICAgICAgIFtcIjRhXCIsIDI0MF0sXG4gICAgICAgICAgW1wiNGFcIiwgNDQ5XSxcbiAgICAgICAgICBbXCI0YVwiLCA0OTJdLFxuICAgICAgICAgIFtcIjRhXCIsIDQ5OV0sXG4gICAgICAgICAgW1wiNGJcIiwgNDgyXSxcbiAgICAgICAgICBbXCI0ZFwiLCA0NzldLFxuICAgICAgICAgIFtcIjRlXCIsIDcxOF0sXG4gICAgICAgICAgW1wiNGVcIiwgODE5XVxuICAgICAgICBdLFxuICAgICAgICBzZWxlY3RlZDogNSxcbiAgICAgICAgc3ByaXRlX2NsYXNzOiAnb3B0LWFuZC1leGFtcGxlcy1zcHJpdGUnLFxuICAgICAgICBzcHJpdGVfb3B0X2NsYXNzOiAnb3B0LWFuZC1leGFtcGxlcy1vcHRpbWl6ZWQtc3ByaXRlJ1xuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIG51bWJlcl9vZl9uZXVyb25zOiBuZXVyb25zID0+IG5ldXJvbnMubGVuZ3RoLFxuICAgICAgdGh1bWJuYWlsX2luZGljZXM6IG51bWJlcl9vZl9uZXVyb25zID0+IHJhbmdlKG51bWJlcl9vZl9uZXVyb25zKSxcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtTcHJpdGV9LFxuICAgIG1ldGhvZHM6IHt9LFxuICAgIGhlbHBlcnM6IHtwYWQsIG5ldXJvbl9uYW1lfVxuICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaWFncmFtcy9PcHRBbmRFeGFtcGxlcy5odG1sIiwiPGRpdiBjbGFzcz1cImxpbmVhci1jb21iaW5hdGlvbnNcIj5cbiAgXG4gIDxkaXYgY2xhc3M9XCJmcm93XCI+XG4gICAgICBcbiAgICA8ZGl2IGlkPVwiaWNvbnMtZmlyc3RcIiBjbGFzcz1cImZjb2x1bW5cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpY29uc1wiPlxuICAgICAgICB7eyNlYWNoIHJhbmdlKDYpIGFzIGl9fVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uIHt7KHggPT0gaSsxKT8gJ3NlbGVjdGVkJyA6ICcnfX1cIiBvbjpjbGljaz0nc2V0KHt4OiBpKzF9KSc+XG4gICAgICAgICAgICA8U3ByaXRlIHNyY19jbGFzcz17e3Nwcml0ZV9jbGFzc319IHNpemU9NDQgc3ByaXRlX3NpemU9MTgwIHk9MCB4PXt7aSsxfX0gc3ByaXRlX3NjYWxlPTAuNS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIHt7L2VhY2h9fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPGRpdiBpZD1cInNwcml0ZS1maXJzdFwiIGNsYXNzPVwiZmNvbHVtblwiPlxuICAgICAgPFNwcml0ZSBzcmNfY2xhc3M9e3tzcHJpdGVfY2xhc3N9fSBzaXplPTE4MCBzcHJpdGVfc2l6ZT0xODAgeT0wIHg9e3t4fX0gc3ByaXRlX3NjYWxlPTEvPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmaWdjYXB0aW9uXCI+TmV1cm9uIDE8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPGRpdiBjbGFzcz1cIm9wZXJhdG9yXCI+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPGRpdiBpZD1cInNwcml0ZS1zZWNvbmRcIiBjbGFzcz1cImZjb2x1bW5cIj5cbiAgICAgIDxTcHJpdGUgc3JjX2NsYXNzPXt7c3ByaXRlX2NsYXNzfX0gc2l6ZT0xODAgc3ByaXRlX3NpemU9MTgwIHk9e3t5fX0geD0wIHNwcml0ZV9zY2FsZT0xLz5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmlnY2FwdGlvblwiPk5ldXJvbiAyPC9zcGFuPlxuICAgIDwvZGl2PlxuICBcbiAgICA8ZGl2IGlkPVwiaWNvbnMtc2Vjb25kXCIgY2xhc3M9XCJmY29sdW1uXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaWNvbnNcIj5cbiAgICAgICAge3sjZWFjaCByYW5nZSg2KSBhcyBpfX1cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvbiB7eyh5ID09IGkrMSk/ICdzZWxlY3RlZCcgOiAnJ319XCIgb246Y2xpY2s9J3NldCh7eTogaSsxfSknID5cbiAgICAgICAgICAgIDxTcHJpdGUgc3JjX2NsYXNzPXt7c3ByaXRlX2NsYXNzfX0gc2l6ZT00NCBzcHJpdGVfc2l6ZT0xODAgeT17e2krMX19IHg9MCBzcHJpdGVfc2NhbGU9MC41Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAge3svZWFjaH19XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgPC9kaXY+XG4gIFxuICA8ZGl2IGNsYXNzPVwiZnJvd1wiIHN0eWxlPVwiXCI+XG4gICAgPGRpdiBjbGFzcz1cInJlc3VsdCBjIGZjb2x1bW5cIj5cbiAgICAgIDxTcHJpdGUgc3JjX2NsYXNzPXt7c3ByaXRlX2NsYXNzfX0gc2l6ZT0xODAgc3ByaXRlX3NpemU9MTgwIHk9e3t5fX0geD17e3h9fSBzcHJpdGVfc2NhbGU9MS8+XG4gICAgICA8c3BhbiBjbGFzcz1cImZpZ2NhcHRpb25cIj5Kb2ludGx5IG9wdGltaXplZDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuXG48c3R5bGU+XG5cbiAgLyogRlJvdyAmIEZDb2x1bW4gKi9cblxuICAuZnJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgLmZjb2x1bW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgei1pbmRleDogMjtcbiAgfVxuXG4gIC8qLmZjb2x1bW4gPiAqIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9Ki9cblxuICAvKi5mY29sdW1uID4gKjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9Ki9cblxuICAvKiAtZW5kIEZSb3cgJiBGQ29sdW1uIGVuZC0gKi9cblxuICAvKiBJY29ucyAqL1xuICAuaWNvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgLypib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDsqL1xuICB9XG5cbiAgLmljb25zIC5pY29uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xuICAgIFxuICAgIC8qbWFyZ2luLWxlZnQ6IDNweDsqL1xuICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xuICB9XG5cbiAgLmljb25zIC5pY29uLnNlbGVjdGVkIHtcbiAgICBvcGFjaXR5OiAxMDAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZjY2MDA7XG4gIH1cblxuICAuaWNvbiBkaXYge1xuICAgIG9wYWNpdHk6IDAuNjY2O1xuICAgIGltYWdlLXJlbmRlcmluZzogYXV0bztcbiAgfVxuXG4gIC5pY29uLnNlbGVjdGVkIGRpdiB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIFxuICAvKiBsaW5lYXIgQ29tYmluYXRpb25zICovXG5cbiAgLmxpbmVhcl9jb21iaW5hdGlvbnNfc3ByaXRlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy9saW5lYXJfY29tYmluYXRpb25zLmpwZycpXG4gIH1cblxuICBcbiAgI2NhcHRpb24ge1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gIH1cbiAgXG4gICNpY29ucy1maXJzdCB7XG4gICAgb3JkZXI6IDFcbiAgfVxuICAjc3ByaXRlLWZpcnN0IHtcbiAgICBvcmRlcjogMlxuICB9XG4gICNzcHJpdGUtc2Vjb25kIHtcbiAgICBvcmRlcjogNVxuICB9XG4gICNpY29ucy1zZWNvbmQge1xuICAgIG9yZGVyOiA0XG4gIH1cbiAgXG4gIC5yZXN1bHQge1xuICAgIHotaW5kZXg6IDM7XG4gIH1cbiAgXG4gIC5vcGVyYXRvciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIFxuICAgIC5mY29sdW1uIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgICBcbiAgICAuZmNvbHVtbjpmaXJzdC1vZi10eXBlIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cblxuICAgIC5mY29sdW1uOmxhc3Qtb2YtdHlwZSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICAgIFxuICAgICNpY29ucy1maXJzdCB7XG4gICAgICBvcmRlcjogMVxuICAgIH1cbiAgICAjc3ByaXRlLWZpcnN0IHtcbiAgICAgIG9yZGVyOiAyO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbiAgICAjc3ByaXRlLXNlY29uZCB7XG4gICAgICBvcmRlcjogNDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbiAgICAjaWNvbnMtc2Vjb25kIHtcbiAgICAgIG9yZGVyOiA1XG4gICAgfVxuICAgIFxuICAgIC5vcGVyYXRvciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChpbWFnZXMvam9pbl9hcnJvdy5zdmcpO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDcwJTtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDI4MCU7XG4gICAgICBtaW4td2lkdGg6IDYwcHg7XG4gICAgICBoZWlnaHQ6IDE4MHB4O1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICBvcmRlcjogMztcbiAgICAgIG9wYWNpdHk6IDAuMzM7XG4gICAgfVxuICAgIFxuICAgIC5yZXN1bHQuYyB7XG4gICAgICB0b3A6IC02NHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDI0MHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICBcbiAgICAucmVzdWx0LmMgPiBkaXYge1xuICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgICBib3gtc2hhZG93OiAwcHggNXB4IDIwcHggaHNsYSgwLDAlLDAlLDAuMyk7XG4gICAgfVxuICAgIFxuICAgICNzcHJpdGUtc2Vjb25kID4gc3BhbiB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG4gICAgXG4gICAgLmxpbmVhci1jb21iaW5hdGlvbnMge1xuICAgICAgbWFyZ2luLWJvdHRvbTogLTg0cHg7XG4gICAgfVxuICB9XG5cbiAgXG48L3N0eWxlPlxuXG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBTcHJpdGUgZnJvbSAnLi9TcHJpdGUuaHRtbCc7XG4gIC8vIGNvbnN0IGpvaW5fc3ZnID0gcmVxdWlyZSgnc3ZnLWlubGluZS1sb2FkZXI/Y2xhc3NQcmVmaXghLi4vam9pbi5zdmcnKTtcbiAgXG4gIGZ1bmN0aW9uIHJhbmdlKG4pe1xuICAgIHJldHVybiBBcnJheShuKS5maWxsKCkubWFwKChfLCBpKSA9PiBpKTtcbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3ByaXRlX2NsYXNzOiAnbGluZWFyX2NvbWJpbmF0aW9uc19zcHJpdGUnLFxuICAgICAgICB4OiA1LFxuICAgICAgICB5OiAxLFxuICAgICAgICAvLyBzdmc6IGpvaW5fc3ZnXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge30sXG4gICAgY29tcG9uZW50czoge1Nwcml0ZX0sXG4gICAgbWV0aG9kczoge30sXG4gICAgaGVscGVyczoge3JhbmdlfVxuICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaWFncmFtcy9MaW5lYXJDb21iaW5hdGlvbnMuaHRtbCIsIjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cblxuICB7eyNlYWNoIHJhbmdlKDQpIGFzIHgsIGluZGV4fX1cbiAgICA8ZGl2PlxuICAgICAgPFNwcml0ZSBzcmNfY2xhc3M9J3Nwcml0ZV9vcHRfcHJvZ3Jlc3MnIHg9e3t4fX0geT0wIHNwcml0ZV9zaXplPTE4MCBzaXplPTE0MCBwaXhlbGF0ZWQ9e3tmYWxzZX19Lz5cbiAgICAgIDxmaWdjYXB0aW9uPlxuICAgICAgICBTdGVwIHt7c3RlcHNbaW5kZXhdfX1cbiAgICAgIDwvZmlnY2FwdGlvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYXJyb3dib3hcIj5cbiAgICAgIHt7I2lmIHggIT0gM3194oaSe3svaWZ9fVxuICAgIDwvZGl2PlxuICB7ey9lYWNofX1cbiAgXG48L2Rpdj5cblxuXG48c3R5bGU+XG5cbiAgLnNwcml0ZV9vcHRfcHJvZ3Jlc3Mge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImltYWdlcy9vcHRfcHJvZ3Jlc3NfbWl4ZWQ0YS0xMS5wbmdcIik7XG4gIH1cbiAgXG4gIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbiAgXG4gIC5jb250YWluZXIgPiBkaXYge1xuICAgIC8qbWFyZ2luLWJvdHRvbTogMjhweDsqL1xuICB9XG4gIFxuICAuY29udGFpbmVyIC5zcHJpdGUge1xuICAgIC8qZmxleDogMSAxIGF1dG87Ki9cbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICB9XG4gIFxuICAuY29udGFpbmVyIC5hcnJvd2JveCB7XG4gICAgY29sb3I6ICM4ODg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgd2lkdGg6IDE0cHg7XG4gIH1cblxuPC9zdHlsZT5cblxuXG48c2NyaXB0PlxuICBpbXBvcnQgU3ByaXRlIGZyb20gXCIuL1Nwcml0ZS5odG1sXCI7XG4gIFxuICBmdW5jdGlvbiByYW5nZShuKXtcbiAgICByZXR1cm4gQXJyYXkobikuZmlsbCgpLm1hcCgoXywgaSkgPT4gaSk7XG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3ByaXRlX3NjYWxlOiAxLjAsXG4gICAgICAgIHN0ZXBzOiBbMCw0LDQ4LDIwNDhdXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7IFNwcml0ZSB9LFxuICAgIGhlbHBlcnM6IHsgcmFuZ2UgfSxcbiAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlhZ3JhbXMvT3B0UHJvZ3Jlc3MuaHRtbCIsIlxuPGZpZ2NhcHRpb24gc3R5bGU9XCJncmlkLWNvbHVtbjoga2lja2VyO1wiPjxzdHJvbmc+RGF0YXNldCBFeGFtcGxlczwvc3Ryb25nPiBzaG93IHVzIHdoYXQgbmV1cm9ucyByZXNwb25kIHRvIGluIHByYWN0aWNlPC9maWdjYXB0aW9uPlxuXG48ZGl2IGNsYXNzPVwiaW1hZ2VzXCIgc3R5bGU9XCJncmlkLWNvbHVtbjogdGV4dC1zdGFydCAvIHBhZ2UtZW5kO1wiPlxuICA8U3ByaXRlIHNyY19jbGFzcz0nc3ByaXRlX2V4YW1wbGVzX29wdF9jb21wYXJpc29uX2V4YW1wbGVzJyB4PTAgeT0wIHNwcml0ZV9zaXplPTI5NCBiaW5kOnNpemU+PC9TcHJpdGU+XG4gIDxTcHJpdGUgc3JjX2NsYXNzPSdzcHJpdGVfZXhhbXBsZXNfb3B0X2NvbXBhcmlzb25fZXhhbXBsZXMnIHg9MSB5PTAgc3ByaXRlX3NpemU9Mjk0IGJpbmQ6c2l6ZT48L1Nwcml0ZT5cbiAgPFNwcml0ZSBzcmNfY2xhc3M9J3Nwcml0ZV9leGFtcGxlc19vcHRfY29tcGFyaXNvbl9leGFtcGxlcycgeD0yIHk9MCBzcHJpdGVfc2l6ZT0yOTQgYmluZDpzaXplPjwvU3ByaXRlPlxuICA8U3ByaXRlIHNyY19jbGFzcz0nc3ByaXRlX2V4YW1wbGVzX29wdF9jb21wYXJpc29uX2V4YW1wbGVzJyB4PTMgeT0wIHNwcml0ZV9zaXplPTI5NCBiaW5kOnNpemU+PC9TcHJpdGU+XG48L2Rpdj5cblxuPGZpZ2NhcHRpb24gc3R5bGU9XCJncmlkLWNvbHVtbjoga2lja2VyO1wiPlxuICA8c3Bhbj5cbiAgICA8c3Ryb25nPk9wdGltaXphdGlvbjwvc3Ryb25nPiBpc29sYXRlcyB0aGUgY2F1c2VzIG9mIGJlaGF2aW9yIGZyb20gbWVyZSBjb3JyZWxhdGlvbnMuIFxuICA8L3NwYW4+XG4gIDxzcGFuPlxuICAgIEEgbmV1cm9uIG1heSBub3QgYmUgZGV0ZWN0aW5nIHdoYXQgeW91IGluaXRpYWxseSB0aG91Z2h0LlxuICA8L3NwYW4+XG48L2ZpZ2NhcHRpb24+XG5cbjxkaXYgY2xhc3M9XCJpbWFnZXNcIiBzdHlsZT1cImdyaWQtY29sdW1uOiB0ZXh0LXN0YXJ0IC8gcGFnZS1lbmQ7XCI+XG4gIDxTcHJpdGUgc3JjX2NsYXNzPSdzcHJpdGVfZXhhbXBsZXNfb3B0X2NvbXBhcmlzb24nIHg9MCB5PTAgc3ByaXRlX3NpemU9MTcwIGJpbmQ6c2l6ZT48L1Nwcml0ZT5cbiAgPFNwcml0ZSBzcmNfY2xhc3M9J3Nwcml0ZV9leGFtcGxlc19vcHRfY29tcGFyaXNvbicgeD0xIHk9MCBzcHJpdGVfc2l6ZT0xNzAgYmluZDpzaXplPjwvU3ByaXRlPlxuICA8U3ByaXRlIHNyY19jbGFzcz0nc3ByaXRlX2V4YW1wbGVzX29wdF9jb21wYXJpc29uJyB4PTIgeT0wIHNwcml0ZV9zaXplPTE3MCBiaW5kOnNpemU+PC9TcHJpdGU+XG4gIDxTcHJpdGUgc3JjX2NsYXNzPSdzcHJpdGVfZXhhbXBsZXNfb3B0X2NvbXBhcmlzb24nIHg9MyB5PTAgc3ByaXRlX3NpemU9MTcwIGJpbmQ6c2l6ZT48L1Nwcml0ZT5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiY2FwdGlvbnNcIiBzdHlsZT1cImdyaWQtY29sdW1uOiB0ZXh0LXN0YXJ0IC8gcGFnZS1lbmQ7XCI+XG4gIDxmaWdjYXB0aW9uPkJhc2ViYWxs4oCUb3Igc3RyaXBlcz8gPGJyPjxlbT5taXhlZDRhLCBVbml0IDY8L2VtPjwvZmlnY2FwdGlvbj5cbiAgPGZpZ2NhcHRpb24+QW5pbWFsIGZhY2Vz4oCUb3Igc25vdXRzPyA8YnI+PGVtPm1peGVkNGEsIFVuaXQgMjQwPC9lbT48L2ZpZ2NhcHRpb24+XG4gIDxmaWdjYXB0aW9uPkNsb3Vkc+KAlG9yIGZsdWZmaW5lc3M/IDxicj48ZW0+bWl4ZWQ0YSwgVW5pdCA0NTM8L2VtPjwvZmlnY2FwdGlvbj5cbiAgPGZpZ2NhcHRpb24+QnVpbGRpbmdz4oCUb3Igc2t5PyA8YnI+PGVtPm1peGVkNGEsIFVuaXQgNDkyPC9lbT48L2ZpZ2NhcHRpb24+XG48L2Rpdj4gIFxuXG48c3R5bGU+XG5cbi5zcHJpdGVfZXhhbXBsZXNfb3B0X2NvbXBhcmlzb25fZXhhbXBsZXMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWFnZXMvd2h5X29wdGltaXphdGlvbl9leGFtcGxlcy5qcGdcIik7XG59XG5cbi5zcHJpdGVfZXhhbXBsZXNfb3B0X2NvbXBhcmlzb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWFnZXMvd2h5X29wdGltaXphdGlvbl9uZXVyb24ucG5nXCIpO1xufVxuXG4uY2FwdGlvbnMsXG4uaW1hZ2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLmltYWdlcyA+IGRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmltYWdlcyA+IGRpdjpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5jYXB0aW9ucyA+IGZpZ2NhcHRpb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxNDdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY2FwdGlvbnMgPiBmaWdjYXB0aW9uOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuICBcbiAgLmNhcHRpb25zID4gZmlnY2FwdGlvbiB7XG4gICAgd2lkdGg6IDE3MHB4O1xuICB9XG59XG5cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBTcHJpdGUgZnJvbSBcIi4vU3ByaXRlLmh0bWxcIjtcbiAgXG4gIGZ1bmN0aW9uIHJhbmdlKG4pe1xuICAgIHJldHVybiBBcnJheShuKS5maWxsKCkubWFwKChfLCBpKSA9PiBpKTtcbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9LFxuICAgIG9uY3JlYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IG1xID0gbWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDEyODBweClcIik7XG4gICAgICBtcS5vbmNoYW5nZSA9IChldmVudCkgPT4gdGhpcy5zZXQoe3NpemU6IGV2ZW50Lm1hdGNoZXMgPyAxNzAgOiAxNDd9KTtcbiAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgc2l6ZTogbXEubWF0Y2hlcyA/IDE3MCA6IDE0NyxcbiAgICAgICAgLy8gc3ByaXRlX3NjYWxlOiBtcS5tYXRjaGVzID8gLjYyNSA6IC41LFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7IFNwcml0ZSB9LFxuICAgIGhlbHBlcnM6IHsgcmFuZ2UgfSxcbiAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlhZ3JhbXMvRXhhbXBsZXNPcHRDb21wYXJpc29uLmh0bWwiLCI8ZGl2IGNsYXNzPVwiZnJvd1wiPlxuICBcbiAgPGRpdiBjbGFzcz1cImZjb2x1bW5cIj5cbiAgICA8U3ByaXRlIHNyY19jbGFzcz0nc3ByaXRlX3JhbmRvbV9vcHRfZXhhbXBsZXMnIHg9MCB5PTAgc3ByaXRlX3NpemU9Mjk0IGJpbmQ6c2l6ZT48L1Nwcml0ZT5cbiAgICA8U3ByaXRlIHNyY19jbGFzcz0nc3ByaXRlX3JhbmRvbV9vcHQnIHg9MCB5PTAgc3ByaXRlX3NpemU9MTgwIGJpbmQ6c2l6ZT48L1Nwcml0ZT5cbiAgICA8ZmlnY2FwdGlvbj48ZW0+bWl4ZWQzYSwgcmFuZG9tIGRpcmVjdGlvbjwvZW0+PC9maWdjYXB0aW9uPlxuICA8L2Rpdj5cbiAgXG4gIDxkaXYgY2xhc3M9XCJmY29sdW1uXCI+XG4gICAgPFNwcml0ZSBzcmNfY2xhc3M9J3Nwcml0ZV9yYW5kb21fb3B0X2V4YW1wbGVzJyB4PTEgeT0wIHNwcml0ZV9zaXplPTI5NCBiaW5kOnNpemU+PC9TcHJpdGU+XG4gICAgPFNwcml0ZSBzcmNfY2xhc3M9J3Nwcml0ZV9yYW5kb21fb3B0JyB4PTEgeT0wIHNwcml0ZV9zaXplPTE4MCBiaW5kOnNpemU+PC9TcHJpdGU+XG4gICAgPGZpZ2NhcHRpb24+PGVtPm1peGVkNGMsIHJhbmRvbSBkaXJlY3Rpb248L2VtPjwvZmlnY2FwdGlvbj5cbiAgPC9kaXY+XG4gICAgXG4gIDxkaXYgY2xhc3M9XCJmY29sdW1uXCI+XG4gICAgPFNwcml0ZSBzcmNfY2xhc3M9J3Nwcml0ZV9yYW5kb21fb3B0X2V4YW1wbGVzJyB4PTIgeT0wIHNwcml0ZV9zaXplPTI5NCBiaW5kOnNpemU+PC9TcHJpdGU+XG4gICAgPFNwcml0ZSBzcmNfY2xhc3M9J3Nwcml0ZV9yYW5kb21fb3B0JyB4PTIgeT0wIHNwcml0ZV9zaXplPTE4MCBiaW5kOnNpemU+PC9TcHJpdGU+XG4gICAgPGZpZ2NhcHRpb24+PGVtPm1peGVkNGQsIHJhbmRvbSBkaXJlY3Rpb248L2VtPjwvZmlnY2FwdGlvbj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImZjb2x1bW5cIj5cbiAgICA8U3ByaXRlIHNyY19jbGFzcz0nc3ByaXRlX3JhbmRvbV9vcHRfZXhhbXBsZXMnIHg9MyB5PTAgc3ByaXRlX3NpemU9Mjk0IGJpbmQ6c2l6ZT48L1Nwcml0ZT5cbiAgICA8U3ByaXRlIHNyY19jbGFzcz0nc3ByaXRlX3JhbmRvbV9vcHQnIHg9MyB5PTAgc3ByaXRlX3NpemU9MTgwIGJpbmQ6c2l6ZT48L1Nwcml0ZT5cbiAgICA8ZmlnY2FwdGlvbj48ZW0+bWl4ZWQ1YSwgcmFuZG9tIGRpcmVjdGlvbjwvZW0+PC9maWdjYXB0aW9uPlxuICA8L2Rpdj5cbiAgICBcbjwvZGl2PlxuXG48c3R5bGU+XG5cbmZpZ2NhcHRpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogRlJvdyAmIEZDb2x1bW4gKi9cblxuLmZyb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi5mY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmZjb2x1bW46bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uZmNvbHVtbiA+ICoge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZmNvbHVtbiA+ICo6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi8qIC1lbmQgRlJvdyAmIEZDb2x1bW4gZW5kLSAqL1xuXG4uc3ByaXRlX3JhbmRvbV9vcHRfZXhhbXBsZXMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWFnZXMvcmFuZG9tX29wdGltaXphdGlvbl9leGFtcGxlcy5qcGdcIik7XG59XG5cbi5zcHJpdGVfcmFuZG9tX29wdCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImltYWdlcy9yYW5kb21fb3B0aW1pemF0aW9uLnBuZ1wiKTtcbn1cblxuXG5cbi5jb2x1bW4gPiBkaXYge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4vKi5yb3cgPiBkaXYge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNDdweDtcbiAgaGVpZ2h0OiAxNDdweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnJvdyA+IGZpZ2NhcHRpb24ge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNDdweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gIC5yb3cgPiBkaXYge1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICB9XG4gIFxuICAucm93ID4gZmlnY2FwdGlvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAxODBweDtcbiAgfVxufSovXG5cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBTcHJpdGUgZnJvbSBcIi4vU3ByaXRlLmh0bWxcIjtcbiAgXG4gIGZ1bmN0aW9uIHJhbmdlKG4pe1xuICAgIHJldHVybiBBcnJheShuKS5maWxsKCkubWFwKChfLCBpKSA9PiBpKTtcbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9LFxuICAgIG9uY3JlYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IG1xID0gbWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDk2MHB4KVwiKTtcbiAgICAgIG1xLm9uY2hhbmdlID0gKGV2ZW50KSA9PiB0aGlzLnNldCh7c2l6ZTogZXZlbnQubWF0Y2hlcyA/IDE4MCA6IDE0N30pO1xuICAgICAgdGhpcy5zZXQoe1xuICAgICAgICBzaXplOiBtcS5tYXRjaGVzID8gMTgwIDogMTQ3LFxuICAgICAgICAvLyBzcHJpdGVfc2NhbGU6IG1xLm1hdGNoZXMgPyAuNjI1IDogLjUsXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHsgU3ByaXRlIH0sXG4gICAgaGVscGVyczogeyByYW5nZSB9LFxuICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaWFncmFtcy9SYW5kb21FeGFtcGxlc09wdC5odG1sIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJ5X3ZhcnNcIjpbe1wibmFtZVwiOlwibDFcIixcImxhYmVsXCI6XCJsMVwiLFwidHlwZVwiOlwibnVtYmVyXCIsXCJkZWZhdWx0XCI6MCxcInZhbHVlc1wiOlswLC0wLjA1LC0wLjUsLTIuNV19LHtcIm5hbWVcIjpcInR2XCIsXCJsYWJlbFwiOlwidHZcIixcInR5cGVcIjpcIm51bWJlclwiLFwiZGVmYXVsdFwiOjAsXCJ2YWx1ZXNcIjpbMCwtMC4wNSwtMC4yNSwtMS41LC0zXX0se1wibmFtZVwiOlwiYmx1clwiLFwibGFiZWxcIjpcImJsdXJcIixcInR5cGVcIjpcIm51bWJlclwiLFwiZGVmYXVsdFwiOjAsXCJ2YWx1ZXNcIjpbMCwtMC4xLC0xLC01LC0xMF19XSxcInhfdmFyc1wiOlt7XCJuYW1lXCI6XCJuZXVyb25zXCIsXCJsYWJlbFwiOlwibmV1cm9uc1wiLFwidHlwZVwiOlwiaWNvblwiLFwidmFsdWVzXCI6W1wibWl4ZWQ0Yjo0NTJcIixcIm1peGVkNGI6NDY1XCIsXCJtaXhlZDRiOjQ3NVwiLFwibWl4ZWQ0Yjo0NjRcIixcIm1peGVkNGM6NDUwXCIsXCJtaXhlZDRkOjQ3OVwiXX0se1wibmFtZVwiOlwic3RlcHNcIixcImxhYmVsXCI6XCJzdGVwc1wiLFwidHlwZVwiOlwibnVtYmVyXCIsXCJkZWZhdWx0XCI6NCxcInZhbHVlc1wiOlsxLDMyLDEyOCwyNTYsMjA0OF19XSxcInNpemVcIjo2OH1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3N0YXRpYy9pbWFnZXMvUGVuYWxpemVGcmVxLmpzb25cbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1wieV92YXJzXCI6W3tcInR5cGVcIjpcIm51bWJlclwiLFwibmFtZVwiOlwiaml0dGVyXCIsXCJ2YWx1ZXNcIjpbMCwxLDgsMzJdLFwibGFiZWxcIjpcImppdHRlclwiLFwiZGVmYXVsdFwiOjJ9LHtcInR5cGVcIjpcIm51bWJlclwiLFwibmFtZVwiOlwicmFuZG9tX3JvdGF0ZVwiLFwidmFsdWVzXCI6WzAsNSwxNSw0NSwxODBdLFwibGFiZWxcIjpcInJhbmRvbV9yb3RhdGVcIn0se1widHlwZVwiOlwibnVtYmVyXCIsXCJuYW1lXCI6XCJyYW5kb21fc2NhbGVcIixcInZhbHVlc1wiOlsxLDEuMSwxLjIsMS44XSxcImxhYmVsXCI6XCJyYW5kb21fc2NhbGVcIn1dLFwieF92YXJzXCI6W3tcInR5cGVcIjpcImljb25cIixcIm5hbWVcIjpcIm5ldXJvbnNcIixcInZhbHVlc1wiOltcIm1peGVkNGI6NDUyXCIsXCJtaXhlZDRiOjQ2NVwiLFwibWl4ZWQ0Yjo0NzVcIixcIm1peGVkNGI6NDY0XCIsXCJtaXhlZDRjOjQ1MFwiLFwibWl4ZWQ0ZDo0NzlcIl0sXCJsYWJlbFwiOlwibmV1cm9uc1wifSx7XCJ0eXBlXCI6XCJudW1iZXJcIixcIm5hbWVcIjpcInN0ZXBzXCIsXCJ2YWx1ZXNcIjpbMSwzMiwxMjgsMjU2LDIwNDhdLFwibGFiZWxcIjpcInN0ZXBzXCIsXCJkZWZhdWx0XCI6NH1dLFwic2l6ZVwiOjY4fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3RhdGljL2ltYWdlcy9UcmFuc2Zvcm1FeHBsb3JlLmpzb25cbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=