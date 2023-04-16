"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_scw_tsx",{

/***/ "./src/components/scw.tsx":
/*!********************************!*\
  !*** ./src/components/scw.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.css */ \"./src/components/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _biconomy_core_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @biconomy/core-types */ \"./node_modules/@biconomy/core-types/dist/src/index.js\");\n/* harmony import */ var _biconomy_core_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_biconomy_core_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _biconomy_web3_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @biconomy/web3-auth */ \"./node_modules/@biconomy/web3-auth/dist/src/index.js\");\n/* harmony import */ var _biconomy_web3_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_biconomy_web3_auth__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _biconomy_smart_account__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @biconomy/smart-account */ \"./node_modules/@biconomy/smart-account/dist/src/index.js\");\n/* harmony import */ var _biconomy_smart_account__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_biconomy_smart_account__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Scw = ()=>{\n    _s();\n    const [provider, setProvider] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [smartAccount, setSmartAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [scwAddress, setScwAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [scwLoading, setScwLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [socialLoginSDK, setSocialLoginSDK] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const connectWeb3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{\n        if (false) {}\n        console.log(\"socialLoginSDK\", socialLoginSDK);\n        if (socialLoginSDK === null || socialLoginSDK === void 0 ? void 0 : socialLoginSDK.provider) {\n            const web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.providers.Web3Provider(socialLoginSDK.provider);\n            setProvider(web3Provider);\n            const accounts = await web3Provider.listAccounts();\n            setAccount(accounts[0]);\n            return;\n        }\n        if (socialLoginSDK) {\n            socialLoginSDK.showWallet();\n            return socialLoginSDK;\n        }\n        const sdk = new (_biconomy_web3_auth__WEBPACK_IMPORTED_MODULE_3___default())();\n        await sdk.init({\n            chainId: ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.hexValue(80001)\n        });\n        setSocialLoginSDK(sdk);\n        sdk.showWallet();\n        return socialLoginSDK;\n    }, [\n        socialLoginSDK\n    ]);\n    // if wallet already connected close widget\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"hidelwallet\");\n        if (socialLoginSDK && socialLoginSDK.provider) {\n            socialLoginSDK.hideWallet();\n        }\n    }, [\n        account,\n        socialLoginSDK\n    ]);\n    // after metamask login -> get provider event\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(async ()=>{\n            if (account) {\n                clearInterval(interval);\n            }\n            if ((socialLoginSDK === null || socialLoginSDK === void 0 ? void 0 : socialLoginSDK.provider) && !account) {\n                connectWeb3();\n            }\n        }, 1000);\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, [\n        account,\n        connectWeb3,\n        socialLoginSDK\n    ]);\n    const disconnectWeb3 = async ()=>{\n        if (!socialLoginSDK || !socialLoginSDK.web3auth) {\n            console.error(\"Web3Modal not initialized.\");\n            return;\n        }\n        await socialLoginSDK.logout();\n        socialLoginSDK.hideWallet();\n        setProvider(undefined);\n        setAccount(undefined);\n        setScwAddress(\"\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function setupSmartAccount() {\n            setScwAddress(\"\");\n            setScwLoading(true);\n            const smartAccount = new (_biconomy_smart_account__WEBPACK_IMPORTED_MODULE_4___default())(provider, {\n                activeNetworkId: _biconomy_core_types__WEBPACK_IMPORTED_MODULE_2__.ChainId.GOERLI,\n                supportedNetworksIds: [\n                    _biconomy_core_types__WEBPACK_IMPORTED_MODULE_2__.ChainId.GOERLI\n                ]\n            });\n            await smartAccount.init();\n            const context = smartAccount.getSmartAccountContext();\n            setScwAddress(context.baseWallet.getAddress());\n            setSmartAccount(smartAccount);\n            setScwLoading(false);\n        }\n        if (!!provider && !!account) {\n            setupSmartAccount();\n            console.log(\"Provider...\", provider);\n        }\n    }, [\n        account,\n        provider\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),\n                    children: \"Gator Wallet\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kabee\\\\Downloads\\\\Gator wallet\\\\Gator wallet\\\\src\\\\components\\\\scw.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: !account ? connectWeb3 : disconnectWeb3,\n                    children: !account ? \"Connect Wallet\" : \"Disconnect Wallet\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kabee\\\\Downloads\\\\Gator wallet\\\\Gator wallet\\\\src\\\\components\\\\scw.tsx\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, undefined),\n                account && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"EOA Address\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kabee\\\\Downloads\\\\Gator wallet\\\\Gator wallet\\\\src\\\\components\\\\scw.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: account\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kabee\\\\Downloads\\\\Gator wallet\\\\Gator wallet\\\\src\\\\components\\\\scw.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kabee\\\\Downloads\\\\Gator wallet\\\\Gator wallet\\\\src\\\\components\\\\scw.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 11\n                }, undefined),\n                scwLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Loading Smart Account...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kabee\\\\Downloads\\\\Gator wallet\\\\Gator wallet\\\\src\\\\components\\\\scw.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 24\n                }, undefined),\n                scwAddress && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Smart Account Address\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kabee\\\\Downloads\\\\Gator wallet\\\\Gator wallet\\\\src\\\\components\\\\scw.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: scwAddress\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kabee\\\\Downloads\\\\Gator wallet\\\\Gator wallet\\\\src\\\\components\\\\scw.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kabee\\\\Downloads\\\\Gator wallet\\\\Gator wallet\\\\src\\\\components\\\\scw.tsx\",\n                    lineNumber: 117,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\kabee\\\\Downloads\\\\Gator wallet\\\\Gator wallet\\\\src\\\\components\\\\scw.tsx\",\n            lineNumber: 101,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kabee\\\\Downloads\\\\Gator wallet\\\\Gator wallet\\\\src\\\\components\\\\scw.tsx\",\n        lineNumber: 100,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Scw, \"xT7Uk8NEoGNuVxUegj69EDSj8HQ=\");\n_c = Scw;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scw);\nvar _c;\n$RefreshReg$(_c, \"Scw\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtZQUNuRGpDLGNBQWNnQyxRQUFRRSxVQUFVLENBQUNDLFVBQVU7WUFDM0NyQyxnQkFBZ0JEO1lBQ2hCSyxjQUFjLEtBQUs7UUFDckI7UUFDQSxJQUFJLENBQUMsQ0FBQ1QsWUFBWSxDQUFDLENBQUNFLFNBQVM7WUFDM0JpQztZQUNBdEIsUUFBUUMsR0FBRyxDQUFDLGVBQWVkO1FBQzdCLENBQUM7SUFDSCxHQUFHO1FBQUNFO1FBQVNGO0tBQVM7SUFFdEIscUJBQ0UsOERBQUMyQztRQUFJQyxXQUFXckQscUVBQWdCO2tCQUM5Qiw0RUFBQ3VEO1lBQUtGLFdBQVdyRCxnRUFBVzs7OEJBQzFCLDhEQUFDd0Q7b0JBQUdILFdBQVdyRCxpRUFBWTs4QkFBRTs7Ozs7OzhCQUM3Qiw4REFBQzBEO29CQUFPQyxTQUFTLENBQUNoRCxVQUFVVSxjQUFja0IsY0FBYzs4QkFDckQsQ0FBQzVCLFVBQVUsbUJBQW1CLG1CQUFtQjs7Ozs7O2dCQUduREEseUJBQ0MsOERBQUN5Qzs7c0NBQ0MsOERBQUNRO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNDO3NDQUFHbEQ7Ozs7Ozs7Ozs7OztnQkFJUE0sNEJBQWMsOERBQUMyQzs4QkFBRzs7Ozs7O2dCQUVsQjdDLDRCQUNDLDhEQUFDcUM7O3NDQUNDLDhEQUFDUTtzQ0FBRzs7Ozs7O3NDQUNKLDhEQUFDQztzQ0FBRzlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1oQjtHQXBITVA7S0FBQUE7QUFzSE4sK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2N3LnRzeD83NDNlIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5pbXBvcnQgeyBDaGFpbklkIH0gZnJvbSBcIkBiaWNvbm9teS9jb3JlLXR5cGVzXCI7XHJcbmltcG9ydCBTb2NpYWxMb2dpbiBmcm9tIFwiQGJpY29ub215L3dlYjMtYXV0aFwiO1xyXG5pbXBvcnQgU21hcnRBY2NvdW50IGZyb20gXCJAYmljb25vbXkvc21hcnQtYWNjb3VudFwiO1xyXG5cclxuY29uc3QgU2N3ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm92aWRlciwgc2V0UHJvdmlkZXJdID0gdXNlU3RhdGU8YW55PigpO1xyXG4gIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcclxuICBjb25zdCBbc21hcnRBY2NvdW50LCBzZXRTbWFydEFjY291bnRdID0gdXNlU3RhdGU8U21hcnRBY2NvdW50IHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3Njd0FkZHJlc3MsIHNldFNjd0FkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Njd0xvYWRpbmcsIHNldFNjd0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzb2NpYWxMb2dpblNESywgc2V0U29jaWFsTG9naW5TREtdID0gdXNlU3RhdGU8U29jaWFsTG9naW4gfCBudWxsPihcclxuICAgIG51bGxcclxuICApO1xyXG5cclxuICBjb25zdCBjb25uZWN0V2ViMyA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XHJcbiAgICBjb25zb2xlLmxvZyhcInNvY2lhbExvZ2luU0RLXCIsIHNvY2lhbExvZ2luU0RLKTtcclxuICAgIGlmIChzb2NpYWxMb2dpblNESz8ucHJvdmlkZXIpIHtcclxuICAgICAgY29uc3Qgd2ViM1Byb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKFxyXG4gICAgICAgIHNvY2lhbExvZ2luU0RLLnByb3ZpZGVyXHJcbiAgICAgICk7XHJcbiAgICAgIHNldFByb3ZpZGVyKHdlYjNQcm92aWRlcik7XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViM1Byb3ZpZGVyLmxpc3RBY2NvdW50cygpO1xyXG4gICAgICBzZXRBY2NvdW50KGFjY291bnRzWzBdKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHNvY2lhbExvZ2luU0RLKSB7XHJcbiAgICAgIHNvY2lhbExvZ2luU0RLLnNob3dXYWxsZXQoKTtcclxuICAgICAgcmV0dXJuIHNvY2lhbExvZ2luU0RLO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2RrID0gbmV3IFNvY2lhbExvZ2luKCk7XHJcbiAgICBhd2FpdCBzZGsuaW5pdCh7XHJcbiAgICAgIGNoYWluSWQ6IGV0aGVycy51dGlscy5oZXhWYWx1ZSg4MDAwMSksXHJcbiAgICB9KTtcclxuICAgIHNldFNvY2lhbExvZ2luU0RLKHNkayk7XHJcbiAgICBzZGsuc2hvd1dhbGxldCgpO1xyXG4gICAgcmV0dXJuIHNvY2lhbExvZ2luU0RLO1xyXG4gIH0sIFtzb2NpYWxMb2dpblNES10pO1xyXG5cclxuICAvLyBpZiB3YWxsZXQgYWxyZWFkeSBjb25uZWN0ZWQgY2xvc2Ugd2lkZ2V0XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGlkZWx3YWxsZXRcIik7XHJcbiAgICBpZiAoc29jaWFsTG9naW5TREsgJiYgc29jaWFsTG9naW5TREsucHJvdmlkZXIpIHtcclxuICAgICAgc29jaWFsTG9naW5TREsuaGlkZVdhbGxldCgpO1xyXG4gICAgfVxyXG4gIH0sIFthY2NvdW50LCBzb2NpYWxMb2dpblNES10pO1xyXG5cclxuICAvLyBhZnRlciBtZXRhbWFzayBsb2dpbiAtPiBnZXQgcHJvdmlkZXIgZXZlbnRcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChhY2NvdW50KSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHNvY2lhbExvZ2luU0RLPy5wcm92aWRlciAmJiAhYWNjb3VudCkge1xyXG4gICAgICAgIGNvbm5lY3RXZWIzKCk7XHJcbiAgICAgIH1cclxuICAgIH0sIDEwMDApO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9O1xyXG4gIH0sIFthY2NvdW50LCBjb25uZWN0V2ViMywgc29jaWFsTG9naW5TREtdKTtcclxuXHJcbiAgY29uc3QgZGlzY29ubmVjdFdlYjMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIXNvY2lhbExvZ2luU0RLIHx8ICFzb2NpYWxMb2dpblNESy53ZWIzYXV0aCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiV2ViM01vZGFsIG5vdCBpbml0aWFsaXplZC5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGF3YWl0IHNvY2lhbExvZ2luU0RLLmxvZ291dCgpO1xyXG4gICAgc29jaWFsTG9naW5TREsuaGlkZVdhbGxldCgpO1xyXG4gICAgc2V0UHJvdmlkZXIodW5kZWZpbmVkKTtcclxuICAgIHNldEFjY291bnQodW5kZWZpbmVkKTtcclxuICAgIHNldFNjd0FkZHJlc3MoXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIHNldHVwU21hcnRBY2NvdW50KCkge1xyXG4gICAgICBzZXRTY3dBZGRyZXNzKFwiXCIpO1xyXG4gICAgICBzZXRTY3dMb2FkaW5nKHRydWUpO1xyXG4gICAgICBjb25zdCBzbWFydEFjY291bnQgPSBuZXcgU21hcnRBY2NvdW50KHByb3ZpZGVyLCB7XHJcbiAgICAgICAgYWN0aXZlTmV0d29ya0lkOiBDaGFpbklkLkdPRVJMSSxcclxuICAgICAgICBzdXBwb3J0ZWROZXR3b3Jrc0lkczogW0NoYWluSWQuR09FUkxJXSxcclxuICAgICAgfSk7XHJcbiAgICAgIGF3YWl0IHNtYXJ0QWNjb3VudC5pbml0KCk7XHJcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBzbWFydEFjY291bnQuZ2V0U21hcnRBY2NvdW50Q29udGV4dCgpO1xyXG4gICAgICBzZXRTY3dBZGRyZXNzKGNvbnRleHQuYmFzZVdhbGxldC5nZXRBZGRyZXNzKCkpO1xyXG4gICAgICBzZXRTbWFydEFjY291bnQoc21hcnRBY2NvdW50KTtcclxuICAgICAgc2V0U2N3TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoISFwcm92aWRlciAmJiAhIWFjY291bnQpIHtcclxuICAgICAgc2V0dXBTbWFydEFjY291bnQoKTtcclxuICAgICAgY29uc29sZS5sb2coXCJQcm92aWRlci4uLlwiLCBwcm92aWRlcik7XHJcbiAgICB9XHJcbiAgfSwgW2FjY291bnQsIHByb3ZpZGVyXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+R2F0b3IgV2FsbGV0PC9oMT5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyFhY2NvdW50ID8gY29ubmVjdFdlYjMgOiBkaXNjb25uZWN0V2ViM30+XHJcbiAgICAgICAgICB7IWFjY291bnQgPyBcIkNvbm5lY3QgV2FsbGV0XCIgOiBcIkRpc2Nvbm5lY3QgV2FsbGV0XCJ9XHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgIHthY2NvdW50ICYmIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMj5FT0EgQWRkcmVzczwvaDI+XHJcbiAgICAgICAgICAgIDxwPnthY2NvdW50fTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHtzY3dMb2FkaW5nICYmIDxoMj5Mb2FkaW5nIFNtYXJ0IEFjY291bnQuLi48L2gyPn1cclxuXHJcbiAgICAgICAge3Njd0FkZHJlc3MgJiYgKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyPlNtYXJ0IEFjY291bnQgQWRkcmVzczwvaDI+XHJcbiAgICAgICAgICAgIDxwPntzY3dBZGRyZXNzfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3c7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZXRoZXJzIiwiQ2hhaW5JZCIsIlNvY2lhbExvZ2luIiwiU21hcnRBY2NvdW50IiwiU2N3IiwicHJvdmlkZXIiLCJzZXRQcm92aWRlciIsImFjY291bnQiLCJzZXRBY2NvdW50Iiwic21hcnRBY2NvdW50Iiwic2V0U21hcnRBY2NvdW50Iiwic2N3QWRkcmVzcyIsInNldFNjd0FkZHJlc3MiLCJzY3dMb2FkaW5nIiwic2V0U2N3TG9hZGluZyIsInNvY2lhbExvZ2luU0RLIiwic2V0U29jaWFsTG9naW5TREsiLCJjb25uZWN0V2ViMyIsImNvbnNvbGUiLCJsb2ciLCJ3ZWIzUHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJhY2NvdW50cyIsImxpc3RBY2NvdW50cyIsInNob3dXYWxsZXQiLCJzZGsiLCJpbml0IiwiY2hhaW5JZCIsInV0aWxzIiwiaGV4VmFsdWUiLCJoaWRlV2FsbGV0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJkaXNjb25uZWN0V2ViMyIsIndlYjNhdXRoIiwiZXJyb3IiLCJsb2dvdXQiLCJ1bmRlZmluZWQiLCJzZXR1cFNtYXJ0QWNjb3VudCIsImFjdGl2ZU5ldHdvcmtJZCIsIkdPRVJMSSIsInN1cHBvcnRlZE5ldHdvcmtzSWRzIiwiY29udGV4dCIsImdldFNtYXJ0QWNjb3VudENvbnRleHQiLCJiYXNlV2FsbGV0IiwiZ2V0QWRkcmVzcyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIm1haW4iLCJoMSIsInRpdGxlIiwiYnV0dG9uIiwib25DbGljayIsImgyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/scw.tsx\n"));

/***/ })

});