"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Write",{

/***/ "./pages/Write.js":
/*!************************!*\
  !*** ./pages/Write.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Write; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tinymce/tinymce-react */ \"./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Write() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), title = _useState[0], setTitle = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), content = _useState1[0], setContent = _useState1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var handleSubmit = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_5__._)(function(e) {\n            var postData, response, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_6__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        e.preventDefault();\n                        postData = {\n                            title: title,\n                            content: content\n                        };\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            fetch(\"http://localhost:3001/api/posts\", {\n                                method: \"POST\",\n                                headers: {\n                                    \"Content-Type\": \"application/json\"\n                                },\n                                body: JSON.stringify(postData)\n                            })\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        if (response.ok) {\n                            router.push(\"/Board\");\n                        } else {\n                            console.error(\"Failed to create post\");\n                        }\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.error(\"Error:\", error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function handleSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"left-container\",\n                children: \"글쓰기 진행중 . . .\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\CPS\\\\cyworld\\\\pages\\\\Write.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"right-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: title,\n                            onChange: function(e) {\n                                return setTitle(e.target.value);\n                            },\n                            placeholder: \"제목\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\CPS\\\\cyworld\\\\pages\\\\Write.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_3__.Editor, {\n                            apiKey: \"dcuz3jq9lckyddsfzunwgrzvh5c52291hxt94bl221jmbo9p\",\n                            init: {\n                                plugins: \"anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown\",\n                                toolbar: \"undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat\",\n                                tinycomments_mode: \"embedded\",\n                                tinycomments_author: \"Author name\",\n                                mergetags_list: [\n                                    {\n                                        value: \"First.Name\",\n                                        title: \"First Name\"\n                                    },\n                                    {\n                                        value: \"Email\",\n                                        title: \"Email\"\n                                    }\n                                ],\n                                ai_request: function(request, respondWith) {\n                                    return respondWith.string(function() {\n                                        return Promise.reject(\"See docs to implement AI Assistant\");\n                                    });\n                                }\n                            },\n                            onEditorChange: function(content) {\n                                return setContent(content);\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\CPS\\\\cyworld\\\\pages\\\\Write.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"저장\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\CPS\\\\cyworld\\\\pages\\\\Write.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\CPS\\\\cyworld\\\\pages\\\\Write.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\CPS\\\\cyworld\\\\pages\\\\Write.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Write, \"UDt4gaR4tsPkvmYYXYVHwDaS2OU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Write;\nvar _c;\n$RefreshReg$(_c, \"Write\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Xcml0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ087QUFDUTtBQUVqQyxTQUFTRzs7SUFDdEIsSUFBMEJILFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxTQUE1QkksUUFBbUJKLGNBQVpLLFdBQVlMO0lBQzFCLElBQThCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsU0FBaENNLFVBQXVCTixlQUFkTyxhQUFjUDtJQUM5QixJQUFNUSxTQUFTUCxzREFBU0E7SUFFeEIsSUFBTVE7bUJBQWUsNEVBQU9DO2dCQUdwQkMsVUFNRUMsVUFhQ0M7Ozs7d0JBckJUSCxFQUFFSSxjQUFjO3dCQUVWSCxXQUFXOzRCQUNmUCxPQUFPQTs0QkFDUEUsU0FBU0E7d0JBQ1g7Ozs7Ozs7Ozt3QkFHbUI7OzRCQUFNUyxNQUFNLG1DQUFtQztnQ0FDOURDLFFBQVE7Z0NBQ1JDLFNBQVM7b0NBQ1AsZ0JBQWdCO2dDQUNsQjtnQ0FDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDVDs0QkFDdkI7Ozt3QkFOTUMsV0FBVzt3QkFRakIsSUFBSUEsU0FBU1MsRUFBRSxFQUFFOzRCQUNmYixPQUFPYyxJQUFJLENBQUM7d0JBQ2QsT0FBTzs0QkFDTEMsUUFBUVYsS0FBSyxDQUFDO3dCQUNoQjs7Ozs7O3dCQUNPQTt3QkFDUFUsUUFBUVYsS0FBSyxDQUFDLFVBQVVBOzs7Ozs7Ozs7OztRQUU1Qjt3QkF6Qk1KLGFBQXNCQzs7OztJQTJCNUIscUJBQ0U7OzBCQUNFLDhEQUFDYztnQkFBSUMsV0FBVTswQkFBaUI7Ozs7OzswQkFJaEMsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDQztvQkFBS0MsVUFBVWxCOztzQ0FDZCw4REFBQ21COzRCQUNDQyxNQUFLOzRCQUNMQyxPQUFPMUI7NEJBQ1AyQixVQUFVLFNBQUNyQjt1Q0FBTUwsU0FBU0ssRUFBRXNCLE1BQU0sQ0FBQ0YsS0FBSzs7NEJBQ3hDRyxhQUFZOzRCQUNaQyxRQUFROzs7Ozs7c0NBRVYsOERBQUNoQywwREFBTUE7NEJBQ0xpQyxRQUFPOzRCQUNQQyxNQUFNO2dDQUNKQyxTQUFTO2dDQUNUQyxTQUFTO2dDQUNUQyxtQkFBbUI7Z0NBQ25CQyxxQkFBcUI7Z0NBQ3JCQyxnQkFBZ0I7b0NBQ2Q7d0NBQUVYLE9BQU87d0NBQWMxQixPQUFPO29DQUFhO29DQUMzQzt3Q0FBRTBCLE9BQU87d0NBQVMxQixPQUFPO29DQUFRO2lDQUNsQztnQ0FDRHNDLFlBQVksU0FBQ0MsU0FBU0M7MkNBQWdCQSxZQUFZQyxNQUFNLENBQUM7K0NBQU1DLFFBQVFDLE1BQU0sQ0FBQzs7OzRCQUNoRjs0QkFDQUMsZ0JBQWdCLFNBQUMxQzt1Q0FBWUMsV0FBV0Q7Ozs7Ozs7c0NBRTFDLDhEQUFDMkM7NEJBQU9wQixNQUFLO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hDO0dBbkV3QjFCOztRQUdQRixrREFBU0E7OztLQUhGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Xcml0ZS5qcz9hNTFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IEVkaXRvciB9IGZyb20gJ0B0aW55bWNlL3RpbnltY2UtcmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV3JpdGUoKSB7XHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IHBvc3REYXRhID0ge1xyXG4gICAgICB0aXRsZTogdGl0bGUsICAgXHJcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsIFxyXG4gICAgfTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3Bvc3RzJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0RGF0YSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9Cb2FyZCcpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGNyZWF0ZSBwb3N0Jyk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgIOq4gOyTsOq4sCDsp4TtlonspJEgLiAuIC5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsoJzrqqlcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgICAgYXBpS2V5PSdkY3V6M2pxOWxja3lkZHNmenVud2dyenZoNWM1MjI5MWh4dDk0YmwyMjFqbWJvOXAnXHJcbiAgICAgICAgICAgIGluaXQ9e3tcclxuICAgICAgICAgICAgICBwbHVnaW5zOiAnYW5jaG9yIGF1dG9saW5rIGNoYXJtYXAgY29kZXNhbXBsZSBlbW90aWNvbnMgaW1hZ2UgbGluayBsaXN0cyBtZWRpYSBzZWFyY2hyZXBsYWNlIHRhYmxlIHZpc3VhbGJsb2NrcyB3b3JkY291bnQgY2hlY2tsaXN0IG1lZGlhZW1iZWQgY2FzZWNoYW5nZSBleHBvcnQgZm9ybWF0cGFpbnRlciBwYWdlZW1iZWQgbGlua2NoZWNrZXIgYTExeWNoZWNrZXIgdGlueW1jZXNwZWxsY2hlY2tlciBwZXJtYW5lbnRwZW4gcG93ZXJwYXN0ZSBhZHZ0YWJsZSBhZHZjb2RlIGVkaXRpbWFnZSBhZHZ0ZW1wbGF0ZSBhaSBtZW50aW9ucyB0aW55Y29tbWVudHMgdGFibGVvZmNvbnRlbnRzIGZvb3Rub3RlcyBtZXJnZXRhZ3MgYXV0b2NvcnJlY3QgdHlwb2dyYXBoeSBpbmxpbmVjc3MgbWFya2Rvd24nLFxyXG4gICAgICAgICAgICAgIHRvb2xiYXI6ICd1bmRvIHJlZG8gfCBibG9ja3MgZm9udGZhbWlseSBmb250c2l6ZSB8IGJvbGQgaXRhbGljIHVuZGVybGluZSBzdHJpa2V0aHJvdWdoIHwgbGluayBpbWFnZSBtZWRpYSB0YWJsZSBtZXJnZXRhZ3MgfCBhZGRjb21tZW50IHNob3djb21tZW50cyB8IHNwZWxsY2hlY2tkaWFsb2cgYTExeWNoZWNrIHR5cG9ncmFwaHkgfCBhbGlnbiBsaW5laGVpZ2h0IHwgY2hlY2tsaXN0IG51bWxpc3QgYnVsbGlzdCBpbmRlbnQgb3V0ZGVudCB8IGVtb3RpY29ucyBjaGFybWFwIHwgcmVtb3ZlZm9ybWF0JyxcclxuICAgICAgICAgICAgICB0aW55Y29tbWVudHNfbW9kZTogJ2VtYmVkZGVkJyxcclxuICAgICAgICAgICAgICB0aW55Y29tbWVudHNfYXV0aG9yOiAnQXV0aG9yIG5hbWUnLFxyXG4gICAgICAgICAgICAgIG1lcmdldGFnc19saXN0OiBbXHJcbiAgICAgICAgICAgICAgICB7IHZhbHVlOiAnRmlyc3QuTmFtZScsIHRpdGxlOiAnRmlyc3QgTmFtZScgfSxcclxuICAgICAgICAgICAgICAgIHsgdmFsdWU6ICdFbWFpbCcsIHRpdGxlOiAnRW1haWwnIH0sXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICBhaV9yZXF1ZXN0OiAocmVxdWVzdCwgcmVzcG9uZFdpdGgpID0+IHJlc3BvbmRXaXRoLnN0cmluZygoKSA9PiBQcm9taXNlLnJlamVjdChcIlNlZSBkb2NzIHRvIGltcGxlbWVudCBBSSBBc3Npc3RhbnRcIikpLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkVkaXRvckNoYW5nZT17KGNvbnRlbnQpID0+IHNldENvbnRlbnQoY29udGVudCl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+7KCA7J6lPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJFZGl0b3IiLCJXcml0ZSIsInRpdGxlIiwic2V0VGl0bGUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsInJvdXRlciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwb3N0RGF0YSIsInJlc3BvbnNlIiwiZXJyb3IiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJwdXNoIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiYXBpS2V5IiwiaW5pdCIsInBsdWdpbnMiLCJ0b29sYmFyIiwidGlueWNvbW1lbnRzX21vZGUiLCJ0aW55Y29tbWVudHNfYXV0aG9yIiwibWVyZ2V0YWdzX2xpc3QiLCJhaV9yZXF1ZXN0IiwicmVxdWVzdCIsInJlc3BvbmRXaXRoIiwic3RyaW5nIiwiUHJvbWlzZSIsInJlamVjdCIsIm9uRWRpdG9yQ2hhbmdlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Write.js\n"));

/***/ })

});