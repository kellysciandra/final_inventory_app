/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _index_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.styles */ \"./pages/index.styles.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/kellysciandra/Documents/GitHub/final_inventory_app/frontend/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),\n      products = _useState[0],\n      setProducts = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    axios__WEBPACK_IMPORTED_MODULE_4___default()({\n      \"method\": \"GET\",\n      \"url\": \"http://localhost:1337/products\"\n    }).then(function (response) {\n      setProducts(response.data);\n    });\n  }, []);\n\n  var test = function test(tag) {\n    if (tag === 'Paper') {\n      return 'red';\n    } else if (tag === 'Food') {\n      return 'blue';\n    } else if (tag === 'Liquor') {\n      return 'green';\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index_styles__WEBPACK_IMPORTED_MODULE_2__.ItemsContainer, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index_styles__WEBPACK_IMPORTED_MODULE_2__.ItemsHeader, {\n        children: \"Warehouse Inventory\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table, {\n        unstackable: true,\n        celled: true,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Header, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Row, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.HeaderCell, {\n              children: \"Product\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 21\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.HeaderCell, {\n              children: \"Total\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 21\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.HeaderCell, {\n              children: \"Action\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 21\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 17\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 17\n        }, _this), products ? products.map(function (item) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Body, {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Row, {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Cell, {\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\".concat(item.id),\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                      style: {\n                        color: test(item.tag)\n                      },\n                      children: item.name\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 47,\n                      columnNumber: 37\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 46,\n                    columnNumber: 33\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 45,\n                  columnNumber: 29\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Cell, {\n                  children: item.qty\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 50,\n                  columnNumber: 29\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Cell, {\n                  collapsing: true,\n                  textAlign: \"right\",\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\".concat(item.id),\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                      primary: true,\n                      children: \"View\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 53,\n                      columnNumber: 37\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 52,\n                    columnNumber: 33\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 51,\n                  columnNumber: 29\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 44,\n                columnNumber: 25\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 25\n            }, _this)\n          }, void 0, false);\n        }) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          children: \"No Items\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Index, \"WsG59hGLZBv0fpRHcsgwGiAQpQg=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInVzZVN0YXRlIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsInVzZUVmZmVjdCIsImF4aW9zIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInRlc3QiLCJ0YWciLCJtYXAiLCJpdGVtIiwiaWQiLCJjb2xvciIsIm5hbWUiLCJxdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDZ0JDLCtDQUFRLEVBRHhCO0FBQUEsTUFDVEMsUUFEUztBQUFBLE1BQ0NDLFdBREQ7O0FBR2hCQyxrREFBUyxDQUFDLFlBQU07QUFDWkMsZ0RBQUssQ0FBQztBQUNGLGdCQUFVLEtBRFI7QUFFRixhQUFPO0FBRkwsS0FBRCxDQUFMLENBSUNDLElBSkQsQ0FJTSxVQUFDQyxRQUFELEVBQWM7QUFDaEJKLGlCQUFXLENBQUNJLFFBQVEsQ0FBQ0MsSUFBVixDQUFYO0FBQ0gsS0FORDtBQU9ILEdBUlEsRUFRTixFQVJNLENBQVQ7O0FBVUEsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsR0FBRCxFQUFTO0FBQ2xCLFFBQUlBLEdBQUcsS0FBSyxPQUFaLEVBQXFCO0FBQ2pCLGFBQU8sS0FBUDtBQUNILEtBRkQsTUFFTyxJQUFJQSxHQUFHLEtBQUssTUFBWixFQUFvQjtBQUN2QixhQUFPLE1BQVA7QUFDSCxLQUZNLE1BRUEsSUFBSUEsR0FBRyxLQUFLLFFBQVosRUFBc0I7QUFDekIsYUFBTyxPQUFQO0FBQ0g7QUFDSixHQVJEOztBQVVBLHNCQUFPO0FBQUEsMkJBQ0gsOERBQUMseURBQUQ7QUFBQSw4QkFDQSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBRUksOERBQUMsb0RBQUQ7QUFBTyxtQkFBVyxNQUFsQjtBQUFtQixjQUFNLE1BQXpCO0FBQUEsZ0NBQ0ksOERBQUMsMkRBQUQ7QUFBQSxpQ0FDQSw4REFBQyx3REFBRDtBQUFBLG9DQUNJLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUksOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkosZUFHSSw4REFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLEVBUUtSLFFBQVEsR0FBR0EsUUFBUSxDQUFDUyxHQUFULENBQWEsVUFBQUMsSUFBSSxFQUFJO0FBQzdCLDhCQUFPO0FBQUEsbUNBQ0gsOERBQUMseURBQUQ7QUFBQSxxQ0FDQSw4REFBQyx3REFBRDtBQUFBLHdDQUNJLDhEQUFDLHlEQUFEO0FBQUEseUNBQ0ksOERBQUMsa0RBQUQ7QUFBTSx3QkFBSSxhQUFNQSxJQUFJLENBQUNDLEVBQVgsQ0FBVjtBQUFBLDJDQUNJO0FBQUcsMkJBQUssRUFBRTtBQUFDQyw2QkFBSyxFQUFFTCxJQUFJLENBQUNHLElBQUksQ0FBQ0YsR0FBTjtBQUFaLHVCQUFWO0FBQUEsZ0NBQW9DRSxJQUFJLENBQUNHO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQU1JLDhEQUFDLHlEQUFEO0FBQUEsNEJBQWFILElBQUksQ0FBQ0k7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFOSixlQU9JLDhEQUFDLHlEQUFEO0FBQVksNEJBQVUsTUFBdEI7QUFBdUIsMkJBQVMsRUFBQyxPQUFqQztBQUFBLHlDQUNJLDhEQUFDLGtEQUFEO0FBQU0sd0JBQUksYUFBTUosSUFBSSxDQUFDQyxFQUFYLENBQVY7QUFBQSwyQ0FDSSw4REFBQyxxREFBRDtBQUFRLDZCQUFPLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREcsMkJBQVA7QUFpQkgsU0FsQlcsQ0FBSCxnQkFrQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBMUJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURHLG1CQUFQO0FBaUNILENBeEREOztHQUFNYixLOztLQUFBQSxLO0FBMEROLCtEQUFlQSxLQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgQnV0dG9uLCBUYWJsZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCB7SXRlbXNDb250YWluZXIsIEl0ZW1zSGVhZGVyfSBmcm9tICcuL2luZGV4LnN0eWxlcydcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBheGlvcyh7XG4gICAgICAgICAgICBcIm1ldGhvZFwiOiBcIkdFVFwiLFxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwOi8vbG9jYWxob3N0OjEzMzcvcHJvZHVjdHNcIlxuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHNldFByb2R1Y3RzKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH0pXG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgdGVzdCA9ICh0YWcpID0+IHtcbiAgICAgICAgaWYgKHRhZyA9PT0gJ1BhcGVyJykge1xuICAgICAgICAgICAgcmV0dXJuICdyZWQnXG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09PSAnRm9vZCcpIHtcbiAgICAgICAgICAgIHJldHVybiAnYmx1ZSdcbiAgICAgICAgfSBlbHNlIGlmICh0YWcgPT09ICdMaXF1b3InKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2dyZWVuJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxJdGVtc0NvbnRhaW5lcj5cbiAgICAgICAgPEl0ZW1zSGVhZGVyPldhcmVob3VzZSBJbnZlbnRvcnk8L0l0ZW1zSGVhZGVyPlxuICAgICAgICAgICAgPFRhYmxlIHVuc3RhY2thYmxlIGNlbGxlZD5cbiAgICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxUYWJsZS5Sb3c+IFxuICAgICAgICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5Qcm9kdWN0PC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5Ub3RhbDwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGw+QWN0aW9uPC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICAgICAgICAgIDwvVGFibGUuSGVhZGVyPlxuICAgICAgICAgICAgICAgIHtwcm9kdWN0cyA/IHByb2R1Y3RzLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtpdGVtLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3tjb2xvcjogdGVzdChpdGVtLnRhZyl9fT57aXRlbS5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUuQ2VsbD57aXRlbS5xdHl9PC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZS5DZWxsIGNvbGxhcHNpbmcgdGV4dEFsaWduPSdyaWdodCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtpdGVtLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PlZpZXc8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZS5Cb2R5PiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgIH0pOiA8aDE+Tm8gSXRlbXM8L2gxPn1cbiAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgIDwvSXRlbXNDb250YWluZXI+XG4gICAgPC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});