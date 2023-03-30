/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Fira+Code&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\n    box-sizing: border-box;\\n    margin: 0px;\\n}\\n\\nfieldset {\\n    width: 600px;\\n    border-color: #D2F898;\\n    background-color: black;\\n}\\n\\ninput {\\n    width: 350px;\\n    font-size: 1rem ;\\n}\\n\\nbutton {\\n    font-family: inherit;\\n    font-size: 1rem;\\n}\\n\\nlabel {\\n    margin-top: 1rem;\\n}\\n\\n.container {\\n    min-height: 100vh;\\n    background-color: #2F2F2F;\\n    color: white;\\n\\n    padding-left: 2rem;\\n    font-family: 'Fira Code', monospace, serif;\\n    font-size: 1.2rem;\\n}\\n\\n.heading {\\n    margin-left: 4rem;\\n    color: #F6F930;\\n}\\n\\n.formContainer {\\n    display: grid;\\n    grid-template: 1fr 1fr / 600px 1fr;\\n    gap: 0.5rem;\\n\\n    width: fit-content;\\n}\\n\\n.myInput {\\n    grid-row: 1 / 3;\\n\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.inputSmallDiv {\\n    display: flex;\\n    gap: 0.5rem;\\n}\\n\\n#balanceBtn {\\n    width: 400px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://bsearcht/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://bsearcht/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://bsearcht/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://bsearcht/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://bsearcht/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://bsearcht/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://bsearcht/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://bsearcht/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://bsearcht/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://bsearcht/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/binaryTree.js":
/*!***************************!*\
  !*** ./src/binaryTree.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tree)\n/* harmony export */ });\nclass Node{\n    value = 0;\n    nextLeft = null;\n    nextRight = null;\n\n    constructor(val = 0) {\n        this.value = val;\n    }\n}\n\nclass Tree{\n    root = null;\n\n    buildTree(arr) {\n        if (arr.length < 1) return null;\n            \n        if (arr.length == 1) return new Node(arr[0]);\n\n        //get middle elem\n        const mid = Math.floor(arr.length/2);\n\n        //create left treeNode with middle elem\n        let rootNode = new Node(arr[mid]);\n        \n        //recursively build left sub tree with left half of array \n        rootNode.nextLeft = this.buildTree(arr.slice(0, mid));\n\n        //recursively build right sub tree with right half of array\n        rootNode.nextRight = this.buildTree(arr.slice(mid+1));\n\n        //return root of balanced BST\n        return rootNode;\n    }\n\n    insertKey(newKey, rootNode=this.root) { // insertion is done at the leaf nodes\n        //if leaf node is reached, add newLey\n        if (rootNode == null) {\n            rootNode = new Node(newKey);\n            return rootNode;\n        }\n\n        //otherwise, keep traversing down the tree appropriately\n        if (newKey < rootNode.value) \n            rootNode.nextLeft = this.insertKey(newKey, rootNode.nextLeft);\n\n        if (newKey > rootNode.value) \n            rootNode.nextRight = this.insertKey(newKey, rootNode.nextRight);\n\n        return rootNode;\n    }\n\n    findKey(valKey, rootNode=this.root) {\n        //traverse tree comparing keys\n        if (rootNode == null || rootNode.value == valKey) return rootNode;\n\n        if (valKey < rootNode.value)\n            return this.findKey(valKey, rootNode.nextLeft);\n\n        return this.findKey(valKey, rootNode.nextRight);\n    }\n\n    #minValue(myRoot) {\n        let minv = myRoot.value;\n        while (myRoot.nextLeft != null)\n        {\n            minv = myRoot.nextLeft.value;\n            myRoot = myRoot.nextLeft;\n        }\n        return minv;\n    }\n\n    deleteKey(delKey, rootNode=this.root) {\n        //base case - tree empty\n        if (rootNode == null) return rootNode;\n\n        //otherwise traverse down the tree\n        if (delKey < rootNode.value) {\n            rootNode.nextLeft = this.deleteKey(delKey, rootNode.nextLeft);\n            return rootNode;\n        }\n\n        if (delKey > rootNode.value) {\n            rootNode.nextRight = this.deleteKey(delKey, rootNode.nextRight);\n            return rootNode;\n        }\n\n        // node to be deleted operation\n        if (rootNode.nextLeft == null) { //only right child\n            rootNode = rootNode.nextRight;\n            return rootNode;\n        }\n\n        if (rootNode.nextRight == null) { // only left child\n            rootNode = rootNode.nextLeft;\n            return rootNode;\n        } \n        // find in-order successor\n        // make it the node-to-be-deleted's value, then continue operation with right sub-tree \n        // to remove the duplicate in-order successor where it was gotten from.\n        rootNode.value = this.#minValue(rootNode.nextRight)\n\n        rootNode.nextRight = this.deleteKey(rootNode.value, rootNode.nextRight);\n        return rootNode; \n    }\n\n    // Breadth-First-Search\n    levelOrder(rootNode=this.root) {\n        if (rootNode == null) return;\n\n        let myQueue = [];            //working queue\n        myQueue.push(rootNode);\n\n        while(myQueue.length) {\n            let currNode = myQueue[0];\n            console.log(currNode.value)\n\n            //enqueue currNode children\n            if (currNode.nextLeft != null) myQueue.push(currNode.nextLeft);\n            if (currNode.nextRight != null) myQueue.push(currNode.nextRight);\n\n            //dequeue curr Node\n            myQueue.shift();\n        }\n    }\n\n    // Depth-First-Search operations\n    inOrder(rootNode=this.root) {\n        if (rootNode == null) return [];\n\n        let finalArr = [];\n        const tempLeft = this.inOrder(rootNode.nextLeft);\n        finalArr.push(rootNode.value);\n        const tempRight = this.inOrder(rootNode.nextRight);\n\n        return [...tempLeft, ...finalArr, ...tempRight];\n    }\n\n    preOrder(rootNode=this.root) {\n        if (rootNode == null) return [];\n\n        let finalArr = [];\n        finalArr.push(rootNode.value);\n        const tempLeft = this.preOrder(rootNode.nextLeft);\n        const tempRight = this.preOrder(rootNode.nextRight);\n\n        return [...finalArr, ...tempLeft, ...tempRight];\n    }\n\n    postOrder(rootNode=this.root) {\n        if (rootNode == null) return [];\n\n        let finalArr = [];\n        const tempRight = this.postOrder(rootNode.nextRight);\n        const tempLeft = this.postOrder(rootNode.nextLeft);\n        finalArr.push(rootNode.value);\n\n        return [...tempRight, ...tempLeft, ...finalArr];\n    }\n\n    //Height and Depth\n    findHeight(rootNode=this.root) {\n        // not 0 because it is a valid height\n        if (rootNode == null) return -1;\n\n        let leftfHeight = this.findHeight(rootNode.nextLeft);\n        let rightHeight = this.findHeight(rootNode.nextRight);\n\n        // 1 for the edge from root to its children\n        return Math.max(leftfHeight, rightHeight) + 1;\n    }\n\n    findDepth(valKey, rootNode=this.root) {\n        if (rootNode == null) return;\n        if (rootNode.value == valKey) return 0;\n\n        if (valKey < rootNode.value) {\n            return this.findDepth(valKey, rootNode.nextLeft) + 1;\n        }\n        if (valKey > rootNode.value) {\n            return this.findDepth(valKey, rootNode.nextRight) + 1;\n        }\n    }\n\n    isBalanced() { //compare heights of two sub trees of root Node\n        const myRoot = this.root;\n\n        let leftfHeight = this.findHeight(myRoot.nextLeft);\n        let rightHeight = this.findHeight(myRoot.nextRight);\n\n        return Math.abs(leftfHeight - rightHeight) <= 1;\n    }\n\n    rebalance() {\n        if (this.isBalanced()) return null; // prevent operation on balanced tree\n        //treverse the tree and get its in-order array\n        let newArr = this.inOrder();\n\n        //build new Tree\n        const newRoot = this.buildTree(newArr);\n\n        //set old tree to new tree\n        this.root = newRoot;\n    }\n}\n\n//# sourceURL=webpack://bsearcht/./src/binaryTree.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility */ \"./src/utility.js\");\n/* harmony import */ var _binaryTree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./binaryTree */ \"./src/binaryTree.js\");\n\n\n\n\n//Globals\nlet currentTree = null;\n\n//Acquire elements\nconst newElementsInput = document.getElementById('arrayNums');\nconst newElementsBtn = document.getElementById('newElementsBtn');\n\nconst insertElemInput = document.getElementById('newNum');\nconst insertElemBtn = document.getElementById('addElementBtn');\n\nconst deleteElemInput = document.getElementById('deleteNum');\nconst deleteBtn = document.getElementById('deleteBtn');\n\n//Event listeners\nnewElementsBtn.addEventListener('click', () => {\n    //prepareArray\n    const readyArray = (0,_utility__WEBPACK_IMPORTED_MODULE_1__.prepareArray)(newElementsInput.value);\n    \n    //create tree\n    currentTree = new _binaryTree__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    currentTree.root = currentTree.buildTree(readyArray);\n    (0,_utility__WEBPACK_IMPORTED_MODULE_1__.prettyPrint)(currentTree.root);\n});\n\ninsertElemBtn.addEventListener('click', () => {\n    if (insertElemInput.value > 99) return; \n\n    currentTree.insertKey(insertElemInput.value);\n    (0,_utility__WEBPACK_IMPORTED_MODULE_1__.prettyPrint)(currentTree.root);\n});\n\ndeleteBtn.addEventListener('click', () => {\n    currentTree.deleteKey(deleteElemInput.value);\n    (0,_utility__WEBPACK_IMPORTED_MODULE_1__.prettyPrint)(currentTree.root);\n});\n\n\n//# sourceURL=webpack://bsearcht/./src/script.js?");

/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prepareArray\": () => (/* binding */ prepareArray),\n/* harmony export */   \"prettyPrint\": () => (/* binding */ prettyPrint)\n/* harmony export */ });\n//Merge sort\nfunction mergeSort(arr) {\n    if (arr.length < 2) {\n        return arr;\n    }\n\n    //sort left half of array\n    const mid = Math.floor(arr.length/2);\n    const tempLeft = arr.slice(0, mid);\n    const sortedLeft = mergeSort(tempLeft);\n    \n    //sort right half of array\n    const tempRight = arr.slice(mid);\n    const sortedRight = mergeSort(tempRight);\n    \n    //merge the two halves\n    const finalArr = []\n    while (sortedLeft.length && sortedRight.length) {\n        if (sortedLeft[0] === sortedRight[0]) { //remove duplicates\n            sortedLeft.shift();\n            finalArr.push(sortedRight.shift())\n            \n        } else if (sortedLeft[0] < sortedRight[0]) {\n            finalArr.push(sortedLeft.shift());\n\n        } else {\n            finalArr.push(sortedRight.shift());\n        }\n    }\n    return [...finalArr, ...sortedLeft, ...sortedRight];\n}\n\n//prettyPrint\nconst prettyPrint = (node, prefix = '', isLeft = true) => {\n    if (node === null) {\n        return;\n    }\n    if (node.nextRight !== null) {\n        prettyPrint(node.nextRight, `${prefix}${isLeft ? '│   ' : '    '}`, false);\n    }\n    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);\n    if (node.nextLeft !== null) {\n        prettyPrint(node.nextLeft, `${prefix}${isLeft ? '    ' : '│   '}`, true);\n    }\n}\n\nfunction filterElements(myArr) {\n    let filteredArray = [];\n    let currNum = '';\n\n    for (let i = 0; i < myArr.length; i++) {\n        currNum = parseInt(myArr[i]);\n\n        //non-numbers\n        if (isNaN(currNum)) continue;\n\n        //numbers greater than 100\n        if (currNum > 99) continue;\n\n        //add valid number\n        filteredArray.push(currNum);\n    }\n\n    return filteredArray;\n}\n\nfunction prepareArray(rawInput) {\n    //split elements\n    rawInput = rawInput.split(' ');\n\n    //filter array for binary tree\n    const treeArray = filterElements(rawInput);\n\n    //sort array\n    return mergeSort(treeArray);\n}\n\n//# sourceURL=webpack://bsearcht/./src/utility.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;