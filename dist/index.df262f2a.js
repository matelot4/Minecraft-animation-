// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2pkDg":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4e5dac8afe405db7";
module.bundle.HMR_BUNDLE_ID = "5dcf17eddf262f2a";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}]},["2pkDg"], null, "parcelRequire449a")
// Version: 2021-08-22
//
// o--------------------------------------------------------------------------------o
// | This file is part of the RGraph package - you can learn more at:               |
// |                                                                                |
// |                         https://www.rgraph.net                                 |
// |                                                                                |
// | RGraph is licensed under the Open Source MIT license. That means that it's     |
// | totally free to use and there are no restrictions on what you can do with it!  |
// o--------------------------------------------------------------------------------o
RGraph = window.RGraph || {
    isrgraph: true,
    isRGraph: true,
    rgraph: true
};
RGraph.SVG = RGraph.SVG || {
};
// Module pattern
(function(win, doc, undefined) {
    //
    // This is used in two functions, hence it's here
    //
    RGraph.SVG.tooltips = {
    };
    RGraph.SVG.tooltips.css = RGraph.SVG.tooltips.style = {
        display: 'inline-block',
        position: 'absolute',
        padding: '6px',
        lineHeight: 'initial',
        fontFamily: 'Arial',
        fontSize: '12pt',
        fontWeight: 'normal',
        textAlign: 'center',
        left: 0,
        top: 0,
        backgroundColor: 'black',
        color: 'white',
        visibility: 'visible',
        zIndex: 3,
        borderRadius: '5px',
        boxShadow: 'rgba(96,96,96,0.5) 0 0 5px',
        transition: 'left ease-out .25s, top ease-out .25s'
    };
    //
    // Shows a tooltip
    //
    // @param obj The chart object
    // @param opt The options
    //
    RGraph.SVG.tooltip = function(opt) {
        var obj = opt.object;
        // Fire the beforetooltip event
        RGraph.SVG.fireCustomEvent(obj, 'onbeforetooltip');
        if (!opt.text || typeof opt.text === 'undefined' || RGraph.SVG.trim(opt.text).length === 0) return;
        var properties = obj.properties;
        //
        // chart.tooltip.override allows you to totally take control of rendering the tooltip yourself
        //
        if (typeof properties.tooltipsOverride === 'function') {
            // Add the body click handler that clears the highlight if necessary
            //
            document.body.addEventListener('mouseup', function(e) {
                obj.removeHighlight();
            }, false);
            return properties.tooltipsOverride(obj, opt);
        }
        // Create the tooltip DIV element
        if (!RGraph.SVG.REG.get('tooltip')) {
            var tooltipObj = document.createElement('DIV');
            tooltipObj.className = properties.tooltipsCssClass;
            // Add the default CSS to the tooltip
            for(var i in RGraph.SVG.tooltips.style)if (typeof i === 'string') tooltipObj.style[i] = substitute(RGraph.SVG.tooltips.style[i]);
            for(var i in RGraph.SVG.tooltips.css)if (typeof i === 'string') tooltipObj.style[i] = substitute(RGraph.SVG.tooltips.css[i]);
            //
            // If the tooltipsCss property is populated the add those values
            // to the tooltip
            //
            if (!RGraph.SVG.isNull(obj.properties.tooltipsCss)) {
                for(var i in obj.properties.tooltipsCss)if (typeof i === 'string') tooltipObj.style[i] = substitute(obj.properties.tooltipsCss[i]);
            }
        // Reuse an existing tooltip
        } else {
            var tooltipObj = RGraph.SVG.REG.get('tooltip');
            tooltipObj.__object__.removeHighlight();
            // This prevents the object from continuously growing
            tooltipObj.style.width = '';
        }
        if (RGraph.SVG.REG.get('tooltip-lasty')) {
            tooltipObj.style.left = RGraph.SVG.REG.get('tooltip-lastx') + 'px';
            tooltipObj.style.top = RGraph.SVG.REG.get('tooltip-lasty') + 'px';
        }
        ///////////////////////////////////////
        // Do tooltip text substitution here //
        ///////////////////////////////////////
        function substitute(original) {
            // Ensure that it's a string first
            original = String(original);
            if (typeof opt.object.tooltipSubstitutions !== 'function') return original;
            // Get hold of the indexes from the sequentialIndex that we have.
            //
            if (typeof opt.object.tooltipSubstitutions === 'function') var specific = opt.object.tooltipSubstitutions({
                index: opt.sequentialIndex
            });
            // This allows for escaping the percent
            var text = original.replace(/%%/g, '___--PERCENT--___');
            //
            // Draws the key in the tooltip
            //
            var keyReplacementFunction = function() {
                if (!specific.values) return;
                //
                // Allow the user to specify the key colors
                //
                var colors = properties.tooltipsFormattedKeyColors ? properties.tooltipsFormattedKeyColors : properties.colors;
                // Build up the HTML table that becomes the key
                for(var i = 0, str = []; i < specific.values.length; ++i){
                    var value = typeof specific.values === 'object' && typeof specific.values[i] === 'number' ? specific.values[i] : 0;
                    var color = colors[i];
                    var label = typeof properties.tooltipsFormattedKeyLabels === 'object' && typeof properties.tooltipsFormattedKeyLabels[i] === 'string' ? properties.tooltipsFormattedKeyLabels[i] : '';
                    // Chart specific customisations -------------------------
                    if (typeof opt.object.tooltipsFormattedCustom === 'function') {
                        // The index/group/sequential index
                        // The index
                        // The colors
                        var ret = opt.object.tooltipsFormattedCustom(specific, i, colors);
                        if (ret.continue) continue;
                        if (typeof ret.label === 'string') label = ret.label;
                        if (ret.color) color = ret.color;
                        if (typeof ret.value === 'number') value = ret.value;
                    }
                    value = RGraph.SVG.numberFormat({
                        object: opt.object,
                        num: value.toFixed(opt.object.properties.tooltipsFormattedDecimals),
                        thousand: opt.object.properties.tooltipsFormattedThousand || ',',
                        point: opt.object.properties.tooltipsFormattedPoint || '.',
                        prepend: opt.object.properties.tooltipsFormattedUnitsPre || '',
                        append: opt.object.properties.tooltipsFormattedUnitsPost || ''
                    });
                    // If the tooltipsFormattedKeyColorsShape property is set to circle then add
                    // some border-radius to the DIV tag
                    //
                    var borderRadius = 0;
                    if (typeof opt.object.properties.tooltipsFormattedKeyColorsShape === 'string' && opt.object.properties.tooltipsFormattedKeyColorsShape === 'circle') borderRadius = '100px';
                    // Facilitate the  property that allows CSS to be added to
                    // the tooltip key color blob
                    var tooltipsFormattedKeyColorsCss = '';
                    if (properties.tooltipsFormattedKeyColorsCss) {
                        for(property in properties.tooltipsFormattedKeyColorsCss)if (typeof property === 'string') tooltipsFormattedKeyColorsCss += '{1}: {2};'.format(property.replace(/[A-Z]/, function(match) {
                            return '-' + match.toLowerCase();
                        }), String(properties.tooltipsFormattedKeyColorsCss[property]));
                    }
                    str[i] = '<tr><td><div class="RGraph_tooltipsFormattedKeyColor" style="text-align: left; background-color: ' + color + '; color: transparent; pointer-events: none; border-radius: ' + borderRadius + ';' + tooltipsFormattedKeyColorsCss + '">Ml</div></td><td style="text-align: left">' + label + ' ' + value + '</td></tr>';
                }
                str = str.join('');
                // Add the key to the tooltip text - replacing the placeholder
                text = text.replace('%{key}', '<table style="color: inherit">' + str + '</table>');
            };
            keyReplacementFunction();
            // Replace the index of the tooltip
            text = text.replace(/%{index}/g, specific.index);
            // Replace the dataset/group of the tooltip
            text = text.replace(/%{dataset2}/g, specific.dataset2); // Used by the Bipolar
            text = text.replace(/%{dataset}/g, specific.dataset);
            text = text.replace(/%{group2}/g, specific.dataset2); // Used by the Bipolar
            text = text.replace(/%{group}/g, specific.dataset);
            // Replace the sequentialIndex of the tooltip
            text = text.replace(/%{sequential_index}/g, specific.sequentialIndex);
            text = text.replace(/%{seq}/g, specific.sequentialIndex);
            //Do %{list} sunstitution
            if (text.indexOf('%{list}') !== -1) (function() {
                if (properties.tooltipsFormattedListType === 'unordered') properties.tooltipsFormattedListType = 'ul';
                if (properties.tooltipsFormattedListType === '<ul>') properties.tooltipsFormattedListType = 'ul';
                if (properties.tooltipsFormattedListType === 'ordered') properties.tooltipsFormattedListType = 'ol';
                if (properties.tooltipsFormattedListType === '<ol>') properties.tooltipsFormattedListType = 'ol';
                var str = properties.tooltipsFormattedListType === 'ol' ? '<ol id="rgraph_formatted_tooltips_list">' : '<ul id="rgraph_formatted_tooltips_list">';
                var items = properties.tooltipsFormattedListItems[specific.sequentialIndex];
                if (items && items.length) for(var i = 0; i < items.length; ++i)str += '<li>' + items[i] + '</li>';
                str += properties.tooltipsFormattedListType === 'ol' ? '</ol>' : '</ul>';
                // Add the list to the tooltip
                text = text.replace(/%{list}/, str);
            })();
            // Do table substitution (ie %{table} )
            if (text.indexOf('%{table}') !== -1) (function() {
                var str = '<table>';
                // Add the headers if they're defined
                if (properties.tooltipsFormattedTableHeaders && properties.tooltipsFormattedTableHeaders.length) {
                    str += '<thead><tr>';
                    for(var i = 0; i < properties.tooltipsFormattedTableHeaders.length; ++i)str += '<th>' + properties.tooltipsFormattedTableHeaders[i] + '</th>';
                    str += '</tr></thead>';
                }
                // Add each row of data
                if (typeof properties.tooltipsFormattedTableData === 'object' && !RGraph.SVG.isNull(properties.tooltipsFormattedTableData)) {
                    str += '<tbody>';
                    for(var i = 0; i < properties.tooltipsFormattedTableData[specific.sequentialIndex].length; ++i){
                        str += '<tr>';
                        for(var j = 0; j < properties.tooltipsFormattedTableData[specific.sequentialIndex][i].length; ++j)str += '<td>' + String(properties.tooltipsFormattedTableData[specific.sequentialIndex][i][j]) + '</td>';
                        str += '</tr>';
                    }
                    str += '</tbody>';
                }
                // Close the table
                str += '</table>';
                text = text.replace(/%{table}/g, str);
            })();
            // Do property substitution when there's an index to the property
            var reg = /%{prop(?:erty)?:([_a-z0-9]+)\[([0-9]+)\]}/i;
            while(text.match(reg)){
                var property = RegExp.$1;
                var index = parseInt(RegExp.$2);
                if (opt.object.properties[property]) text = text.replace(reg, opt.object.properties[property][index] || '');
                else text = text.replace(reg, '');
                RegExp.lastIndex = null;
            }
            // Third, replace this: %{property:xxx} (but there's no index to the property)
            while(text.match(/%{property:([_a-z0-9]+)}/i)){
                var str = '%{property:' + RegExp.$1 + '}';
                text = text.replace(str, opt.object.properties[RegExp.$1]);
            }
            // Fourth, replace this: %%prop:xxx%%
            while(text.match(/%{prop:([_a-z0-9]+)}/i)){
                var str = '%{prop:' + RegExp.$1 + '}';
                text = text.replace(str, opt.object.properties[RegExp.$1]);
            }
            // THIS IS ONLY FOR A NON-EQUI-ANGULAR ROSE CHART
            //
            // Replace this: %{value2}
            if (opt.object.type === 'rose' && opt.object.properties.variant === 'non-equi-angular') while(text.match(/%{value2}/i))text = text.replace('%{value2}', specific.value2);
            // Fifth and sixth, replace this: %{value} and this: %{value_formatted}
            while(text.match(/%{value(?:_formatted)?}/i)){
                var value = specific.value;
                //
                // Special case for the Waterfall chart and mid totals
                //
                if (opt.object.type === 'waterfall' && specific.index != opt.object.data.length - 1 && RGraph.SVG.isNull(value)) {
                    for(var i = 0, tot = 0; i < specific.index; ++i)tot += opt.object.data[i];
                    value = tot;
                }
                if (text.match(/%{value_formatted}/i)) text = text.replace('%{value_formatted}', typeof value === 'number' ? RGraph.SVG.numberFormat({
                    object: opt.object,
                    num: value.toFixed(opt.object.properties.tooltipsFormattedDecimals),
                    thousand: opt.object.properties.tooltipsFormattedThousand || ',',
                    point: opt.object.properties.tooltipsFormattedPoint || '.',
                    prepend: opt.object.properties.tooltipsFormattedUnitsPre || '',
                    append: opt.object.properties.tooltipsFormattedUnitsPost || ''
                }) : null);
                else text = text.replace('%{value}', value);
            }
            ////////////////////////////////////////////////////////////////
            // Do global substitution when there's an index to the global //
            ////////////////////////////////////////////////////////////////
            var reg = /%{global:([_a-z0-9.]+)\[([0-9]+)\]}/i;
            while(text.match(reg)){
                var name = RegExp.$1, index = parseInt(RegExp.$2);
                if (eval(name)) text = text.replace(reg, eval(name)[index] || '');
                else text = text.replace(reg, '');
                RegExp.lastIndex = null;
            }
            //////////////////////////////////////////////////
            // Do global substitution when there's no index //
            //////////////////////////////////////////////////
            var reg = /%{global:([_a-z0-9.]+)}/i;
            while(text.match(reg)){
                var name = RegExp.$1;
                if (eval(name)) text = text.replace(reg, eval(name) || '');
                else text = text.replace(reg, '');
                RegExp.lastIndex = null;
            }
            // And lastly - call any functions
            // MUST be last
            var regexp = /%{function:([_A-Za-z0-9]+)\((.*?)\)}/;
            // Temporarily replace carriage returns and line feeds with CR and LF
            // so the the s option is not needed
            text = text.replace(/\r/, '|CR|');
            text = text.replace(/\n/, '|LF|');
            while(text.match(regexp)){
                var str = RegExp.$1 + '(' + RegExp.$2 + ')';
                for(var i = 0, len = str.length; i < len; ++i)str = str.replace(/\r?\n/, "\\n");
                RGraph.SVG.REG.set('tooltip-templates-function-object', opt.object);
                var func = new Function('return ' + str);
                var ret = func();
                text = text.replace(regexp, ret);
            }
            // Replace CR and LF with a space
            text = text.replace(/\|CR\|/, ' ');
            text = text.replace(/\|LF\|/, ' ');
            // Replace line returns with br tags
            text = text.replace(/\r?\n/g, '<br />');
            text = text.replace(/___--PERCENT--___/g, '%');
            return text.toString();
        }
        // Save the original text on the tooltip
        tooltipObj.__original_text__ = opt.text;
        opt.text = substitute(opt.text);
        // Add the pointer if requested. The background color is updated to match the
        // tooltip a further down.
        if (opt.object.properties.tooltipsPointer) opt.text += '<div id="RGraph_tooltipsPointer" style="background-color:rgb(255,255,239);color: transparent;position:absolute;bottom:-5px;left:50%;transform:translateX(-50%) rotate(45deg);width:10px;height:10px"></div>';
        tooltipObj.innerHTML = opt.text;
        tooltipObj.__text__ = opt.text; // This is set because the innerHTML can change when it's set
        tooltipObj.id = '__rgraph_tooltip_' + obj.id + '_' + obj.uid + '_' + opt.index;
        tooltipObj.__event__ = properties.tooltipsEvent || 'click';
        tooltipObj.__object__ = obj;
        // Add the index
        if (typeof opt.index === 'number') tooltipObj.__index__ = opt.index;
        // Add the dataset
        if (typeof opt.dataset === 'number') tooltipObj.__dataset__ = opt.dataset;
        // Add the group
        if (typeof opt.group === 'number' || RGraph.SVG.isNull(opt.group)) tooltipObj.__group__ = opt.group;
        // Add the sequentialIndex
        if (typeof opt.sequentialIndex === 'number') tooltipObj.__sequentialIndex__ = opt.sequentialIndex;
        // Add the tooltip to the document
        document.body.appendChild(tooltipObj);
        var width = tooltipObj.offsetWidth, height = tooltipObj.offsetHeight;
        // Set these properties to 0 (ie an integer) in case chart libraries are missing
        // default values for them
        obj.properties.tooltipsOffsetx = obj.properties.tooltipsOffsetx || 0;
        obj.properties.tooltipsOffsety = obj.properties.tooltipsOffsety || 0;
        // Move the tooltip into position
        tooltipObj.style.left = opt.event.pageX - width / 2 + obj.properties.tooltipsOffsetx + 'px';
        // Prevent the top of the tooltip from being placed off the top of the page
        var y = opt.event.pageY - height - 15;
        if (y < 0) y = 5;
        tooltipObj.style.top = y + obj.properties.tooltipsOffsety + 'px';
        //
        // Set the width on the tooltip so it doesn't resize if the window is resized
        //
        tooltipObj.style.width = width + 'px';
        //
        // Now that the tooltip pointer has been added, determine the background-color and update
        // the color of the pointer
        if (opt.object.properties.tooltipsPointer) {
            var styles = window.getComputedStyle(tooltipObj, false);
            var pointer = document.getElementById('RGraph_tooltipsPointer');
            pointer.style.backgroundColor = styles['background-color'];
            // Add the pointer to the tooltip as a property
            tooltipObj.__pointer__ = pointer;
            // Facilitate the  property that allows CSS to be added to
            // the tooltip key color blob
            var tooltipsPointerCss = '';
            if (opt.object.properties.tooltipsPointerCss) {
                var pointerDiv = document.getElementById('RGraph_tooltipsPointer');
                for(property in opt.object.properties.tooltipsPointerCss)if (typeof property === 'string') pointerDiv.style[property] = opt.object.properties.tooltipsPointerCss[property];
            }
        }
        // Fade the tooltip in if the tooltip is the first view
        //if (!RGraph.SVG.REG.get('tooltip-lastx')) {
        //    for (var i=0; i<=30; ++i) {
        //        (function (idx)
        //        {
        //            setTimeout(function ()
        //            {
        //                tooltipObj.style.opacity = (idx / 30) * 1;
        //            }, (idx / 30) * 200);
        //        })(i);
        //    }
        //}
        // If the left is less than zero - set it to 5
        if (parseFloat(tooltipObj.style.left) <= 5) tooltipObj.style.left = 5 + obj.properties.tooltipsOffsetx + 'px';
        // If the tooltip goes over the right hand edge then
        // adjust the positioning
        if (parseFloat(tooltipObj.style.left) + parseFloat(tooltipObj.style.width) > window.innerWidth) {
            tooltipObj.style.left = '';
            tooltipObj.style.right = 5 + obj.properties.tooltipsOffsety + 'px';
        }
        //
        // Allow for static positioning. Support for this is limited at the moment
        //
        if (opt.object.properties.tooltipsPositionStatic && typeof opt.object.positionTooltipStatic === 'function') opt.object.positionTooltipStatic({
            object: opt.object,
            event: opt.event,
            tooltip: tooltipObj,
            index: tooltipObj.__sequentialIndex__
        });
        //
        // Move the tooltip and its pointer ifthey're off-screen LHS
        //
        if (parseInt(tooltipObj.style.left) < 0) {
            var left = parseInt(tooltipObj.style.left);
            var width = parseInt(tooltipObj.style.width);
            left = left + width * 0.4;
            tooltipObj.style.left = left + 'px';
            var pointer = document.getElementById('RGraph_tooltipsPointer');
            if (pointer) pointer.style.left = 'calc(10% + 5px)';
        //
        // Move the tooltip and its pointer ifthey're off-screen LHS
        //
        } else if (parseInt(tooltipObj.style.left) + parseInt(tooltipObj.offsetWidth) > document.body.offsetWidth) {
            var left = parseInt(tooltipObj.style.left);
            var width = parseInt(tooltipObj.style.width);
            left = left - width * 0.4;
            tooltipObj.style.left = left + 'px';
            var pointer = document.getElementById('RGraph_tooltipsPointer');
            if (pointer) pointer.style.left = 'calc(90% - 5px)';
        }
        // If the canvas has fixed positioning then set the tooltip position to
        // fixed too
        if (RGraph.SVG.isFixed(obj.svg)) {
            var scrollTop = window.scrollY || document.documentElement.scrollTop;
            tooltipObj.style.position = 'fixed';
            tooltipObj.style.top = opt.event.pageY - scrollTop - height - 10 + obj.properties.tooltipsOffsety + 'px';
        }
        // Cancel the mousedown event
        tooltipObj.onmousedown = function(e) {
            e.stopPropagation();
        };
        // Cancel the mouseup event
        tooltipObj.onmouseup = function(e) {
            e.stopPropagation();
        };
        // Cancel the click event
        tooltipObj.onclick = function(e) {
            if (e.button == 0) e.stopPropagation();
        };
        // Add the body click handler that clears the tooltip
        document.body.addEventListener('mouseup', function(e) {
            RGraph.SVG.hideTooltip();
        }, false);
        //
        // Keep a reference to the tooltip in the registry
        //
        RGraph.SVG.REG.set('tooltip', tooltipObj);
        RGraph.SVG.REG.set('tooltip-lastx', parseFloat(tooltipObj.style.left));
        RGraph.SVG.REG.set('tooltip-lasty', parseFloat(tooltipObj.style.top));
        //
        // Fire the tooltip event
        //
        RGraph.SVG.fireCustomEvent(obj, 'ontooltip');
    };
// End module pattern
})(window, document);

//# sourceMappingURL=index.df262f2a.js.map
