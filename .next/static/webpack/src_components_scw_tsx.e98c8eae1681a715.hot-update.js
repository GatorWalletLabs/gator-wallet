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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.css */ \"./src/components/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _biconomy_core_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @biconomy/core-types */ \"./node_modules/@biconomy/core-types/dist/src/index.js\");\n/* harmony import */ var _biconomy_core_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_biconomy_core_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _biconomy_web3_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @biconomy/web3-auth */ \"./node_modules/@biconomy/web3-auth/dist/src/index.js\");\n/* harmony import */ var _biconomy_web3_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_biconomy_web3_auth__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _biconomy_smart_account__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @biconomy/smart-account */ \"./node_modules/@biconomy/smart-account/dist/src/index.js\");\n/* harmony import */ var _biconomy_smart_account__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_biconomy_smart_account__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\n\n\nconst Scw = ()=>{\n    _s();\n    const [provider, setProvider] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [smartAccount, setSmartAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [scwAddress, setScwAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [scwLoading, setScwLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [socialLoginSDK, setSocialLoginSDK] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const connectWeb3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{\n        if (false) {}\n        console.log(\"socialLoginSDK\", socialLoginSDK);\n        if (socialLoginSDK === null || socialLoginSDK === void 0 ? void 0 : socialLoginSDK.provider) {\n            const web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.providers.Web3Provider(socialLoginSDK.provider);\n            setProvider(web3Provider);\n            const accounts = await web3Provider.listAccounts();\n            setAccount(accounts[0]);\n            return;\n        }\n        if (socialLoginSDK) {\n            socialLoginSDK.showWallet();\n            return socialLoginSDK;\n        }\n        const sdk = new (_biconomy_web3_auth__WEBPACK_IMPORTED_MODULE_3___default())();\n        await sdk.init({\n            chainId: ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.hexValue(80001)\n        });\n        setSocialLoginSDK(sdk);\n        sdk.showWallet();\n        return socialLoginSDK;\n    }, [\n        socialLoginSDK\n    ]);\n    // if wallet already connected close widget\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"hidelwallet\");\n        if (socialLoginSDK && socialLoginSDK.provider) {\n            socialLoginSDK.hideWallet();\n        }\n    }, [\n        account,\n        socialLoginSDK\n    ]);\n    // after metamask login -> get provider event\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(async ()=>{\n            if (account) {\n                clearInterval(interval);\n            }\n            if ((socialLoginSDK === null || socialLoginSDK === void 0 ? void 0 : socialLoginSDK.provider) && !account) {\n                connectWeb3();\n            }\n        }, 1000);\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, [\n        account,\n        connectWeb3,\n        socialLoginSDK\n    ]);\n    const disconnectWeb3 = async ()=>{\n        if (!socialLoginSDK || !socialLoginSDK.web3auth) {\n            console.error(\"Web3Modal not initialized.\");\n            return;\n        }\n        await socialLoginSDK.logout();\n        socialLoginSDK.hideWallet();\n        setProvider(undefined);\n        setAccount(undefined);\n        setScwAddress(\"\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function setupSmartAccount() {\n            setScwAddress(\"\");\n            setScwLoading(true);\n            const smartAccount = new (_biconomy_smart_account__WEBPACK_IMPORTED_MODULE_4___default())(provider, {\n                activeNetworkId: _biconomy_core_types__WEBPACK_IMPORTED_MODULE_2__.ChainId.GOERLI,\n                supportedNetworksIds: [\n                    _biconomy_core_types__WEBPACK_IMPORTED_MODULE_2__.ChainId.GOERLI\n                ]\n            });\n            await smartAccount.init();\n            const context = smartAccount.getSmartAccountContext();\n            setScwAddress(context.baseWallet.getAddress());\n            setSmartAccount(smartAccount);\n            setScwLoading(false);\n        }\n        if (!!provider && !!account) {\n            setupSmartAccount();\n            console.log(\"Provider...\", provider);\n        }\n    }, [\n        account,\n        provider\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kabee\\\\Downloads\\\\Gator wallet\\\\Gator wallet\\\\src\\\\components\\\\scw.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: !account ? connectWeb3 : disconnectWeb3,\n                    children: !account ? \"Connect Wallet\" : \"Disconnect Wallet\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kabee\\\\Downloads\\\\Gator wallet\\\\Gator wallet\\\\src\\\\components\\\\scw.tsx\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, undefined),\n                account && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"EOA Address\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kabee\\\\Downloads\\\\Gator wallet\\\\Gator wallet\\\\src\\\\components\\\\scw.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: account\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kabee\\\\Downloads\\\\Gator wallet\\\\Gator wallet\\\\src\\\\components\\\\scw.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kabee\\\\Downloads\\\\Gator wallet\\\\Gator wallet\\\\src\\\\components\\\\scw.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 11\n                }, undefined),\n                scwLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Loading Smart Account...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kabee\\\\Downloads\\\\Gator wallet\\\\Gator wallet\\\\src\\\\components\\\\scw.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 24\n                }, undefined),\n                scwAddress && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Smart Account Address\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kabee\\\\Downloads\\\\Gator wallet\\\\Gator wallet\\\\src\\\\components\\\\scw.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: scwAddress\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kabee\\\\Downloads\\\\Gator wallet\\\\Gator wallet\\\\src\\\\components\\\\scw.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kabee\\\\Downloads\\\\Gator wallet\\\\Gator wallet\\\\src\\\\components\\\\scw.tsx\",\n                    lineNumber: 117,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\kabee\\\\Downloads\\\\Gator wallet\\\\Gator wallet\\\\src\\\\components\\\\scw.tsx\",\n            lineNumber: 101,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kabee\\\\Downloads\\\\Gator wallet\\\\Gator wallet\\\\src\\\\components\\\\scw.tsx\",\n        lineNumber: 100,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Scw, \"xT7Uk8NEoGNuVxUegj69EDSj8HQ=\");\n_c = Scw;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scw);\nvar _c;\n$RefreshReg$(_c, \"Scw\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zY3cudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQUE7QUFDd0M7QUFDaUI7QUFDekI7QUFDZTtBQUNEO0FBQ0s7QUFFbkQsTUFBTVEsTUFBTSxJQUFNOztJQUNoQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBO0lBQ3hDLE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUE7SUFDdEMsTUFBTSxDQUFDVSxjQUFjQyxnQkFBZ0IsR0FBR1gsK0NBQVFBLENBQXNCLElBQUk7SUFDMUUsTUFBTSxDQUFDWSxZQUFZQyxjQUFjLEdBQUdiLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2MsWUFBWUMsY0FBYyxHQUFHZiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ2xELE1BQU0sQ0FBQ2dCLGdCQUFnQkMsa0JBQWtCLEdBQUdqQiwrQ0FBUUEsQ0FDbEQsSUFBSTtJQUdOLE1BQU1rQixjQUFjcEIsa0RBQVdBLENBQUMsVUFBWTtRQUMxQyxJQUFJLEtBQTZCLEVBQUUsRUFBTztRQUMxQ3FCLFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JKO1FBQzlCLElBQUlBLDJCQUFBQSw0QkFBQUEsS0FBQUEsSUFBQUEsZUFBZ0JWLFFBQVEsRUFBRTtZQUM1QixNQUFNZSxlQUFlLElBQUlwQixpRUFBNkIsQ0FDcERlLGVBQWVWLFFBQVE7WUFFekJDLFlBQVljO1lBQ1osTUFBTUcsV0FBVyxNQUFNSCxhQUFhSSxZQUFZO1lBQ2hEaEIsV0FBV2UsUUFBUSxDQUFDLEVBQUU7WUFDdEI7UUFDRixDQUFDO1FBQ0QsSUFBSVIsZ0JBQWdCO1lBQ2xCQSxlQUFlVSxVQUFVO1lBQ3pCLE9BQU9WO1FBQ1QsQ0FBQztRQUNELE1BQU1XLE1BQU0sSUFBSXhCLDREQUFXQTtRQUMzQixNQUFNd0IsSUFBSUMsSUFBSSxDQUFDO1lBQ2JDLFNBQVM1Qix5REFBcUIsQ0FBQztRQUNqQztRQUNBZ0Isa0JBQWtCVTtRQUNsQkEsSUFBSUQsVUFBVTtRQUNkLE9BQU9WO0lBQ1QsR0FBRztRQUFDQTtLQUFlO0lBRW5CLDJDQUEyQztJQUMzQ2pCLGdEQUFTQSxDQUFDLElBQU07UUFDZG9CLFFBQVFDLEdBQUcsQ0FBQztRQUNaLElBQUlKLGtCQUFrQkEsZUFBZVYsUUFBUSxFQUFFO1lBQzdDVSxlQUFlZ0IsVUFBVTtRQUMzQixDQUFDO0lBQ0gsR0FBRztRQUFDeEI7UUFBU1E7S0FBZTtJQUU1Qiw2Q0FBNkM7SUFDN0NqQixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTWtDLFdBQVdDLFlBQVksVUFBWTtZQUN2QyxJQUFJMUIsU0FBUztnQkFDWDJCLGNBQWNGO1lBQ2hCLENBQUM7WUFDRCxJQUFJakIsQ0FBQUEsMkJBQUFBLDRCQUFBQSxLQUFBQSxJQUFBQSxlQUFnQlYsUUFBUSxLQUFJLENBQUNFLFNBQVM7Z0JBQ3hDVTtZQUNGLENBQUM7UUFDSCxHQUFHO1FBQ0gsT0FBTyxJQUFNO1lBQ1hpQixjQUFjRjtRQUNoQjtJQUNGLEdBQUc7UUFBQ3pCO1FBQVNVO1FBQWFGO0tBQWU7SUFFekMsTUFBTW9CLGlCQUFpQixVQUFZO1FBQ2pDLElBQUksQ0FBQ3BCLGtCQUFrQixDQUFDQSxlQUFlcUIsUUFBUSxFQUFFO1lBQy9DbEIsUUFBUW1CLEtBQUssQ0FBQztZQUNkO1FBQ0YsQ0FBQztRQUNELE1BQU10QixlQUFldUIsTUFBTTtRQUMzQnZCLGVBQWVnQixVQUFVO1FBQ3pCekIsWUFBWWlDO1FBQ1ovQixXQUFXK0I7UUFDWDNCLGNBQWM7SUFDaEI7SUFFQWQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLGVBQWUwQyxvQkFBb0I7WUFDakM1QixjQUFjO1lBQ2RFLGNBQWMsSUFBSTtZQUNsQixNQUFNTCxlQUFlLElBQUlOLGdFQUFZQSxDQUFDRSxVQUFVO2dCQUM5Q29DLGlCQUFpQnhDLGdFQUFjO2dCQUMvQjBDLHNCQUFzQjtvQkFBQzFDLGdFQUFjO2lCQUFDO1lBQ3hDO1lBQ0EsTUFBTVEsYUFBYWtCLElBQUk7WUFDdkIsTUFBTWlCLFVBQVVuQyxhQUFhb0Msc0JBQXNCO1lBQ25EakMsY0FBY2dDLFFBQVFFLFVBQVUsQ0FBQ0MsVUFBVTtZQUMzQ3JDLGdCQUFnQkQ7WUFDaEJLLGNBQWMsS0FBSztRQUNyQjtRQUNBLElBQUksQ0FBQyxDQUFDVCxZQUFZLENBQUMsQ0FBQ0UsU0FBUztZQUMzQmlDO1lBQ0F0QixRQUFRQyxHQUFHLENBQUMsZUFBZWQ7UUFDN0IsQ0FBQztJQUNILEdBQUc7UUFBQ0U7UUFBU0Y7S0FBUztJQUV0QixxQkFDRSw4REFBQzJDO1FBQUlDLFdBQVdyRCxxRUFBZ0I7a0JBQzlCLDRFQUFDdUQ7WUFBS0YsV0FBV3JELGdFQUFXOzs4QkFDMUIsOERBQUN3RDs7Ozs7OEJBQ0QsOERBQUNDO29CQUFPQyxTQUFTLENBQUMvQyxVQUFVVSxjQUFja0IsY0FBYzs4QkFDckQsQ0FBQzVCLFVBQVUsbUJBQW1CLG1CQUFtQjs7Ozs7O2dCQUduREEseUJBQ0MsOERBQUN5Qzs7c0NBQ0MsOERBQUNPO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNDO3NDQUFHakQ7Ozs7Ozs7Ozs7OztnQkFJUE0sNEJBQWMsOERBQUMwQzs4QkFBRzs7Ozs7O2dCQUVsQjVDLDRCQUNDLDhEQUFDcUM7O3NDQUNDLDhEQUFDTztzQ0FBRzs7Ozs7O3NDQUNKLDhEQUFDQztzQ0FBRzdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1oQjtHQXBITVA7S0FBQUE7QUFzSE4sK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2N3LnRzeD83NDNlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCB7IENoYWluSWQgfSBmcm9tIFwiQGJpY29ub215L2NvcmUtdHlwZXNcIjtcclxuaW1wb3J0IFNvY2lhbExvZ2luIGZyb20gXCJAYmljb25vbXkvd2ViMy1hdXRoXCI7XHJcbmltcG9ydCBTbWFydEFjY291bnQgZnJvbSBcIkBiaWNvbm9teS9zbWFydC1hY2NvdW50XCI7XHJcblxyXG5jb25zdCBTY3cgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Byb3ZpZGVyLCBzZXRQcm92aWRlcl0gPSB1c2VTdGF0ZTxhbnk+KCk7XHJcbiAgY29uc3QgW2FjY291bnQsIHNldEFjY291bnRdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xyXG4gIGNvbnN0IFtzbWFydEFjY291bnQsIHNldFNtYXJ0QWNjb3VudF0gPSB1c2VTdGF0ZTxTbWFydEFjY291bnQgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbc2N3QWRkcmVzcywgc2V0U2N3QWRkcmVzc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2N3TG9hZGluZywgc2V0U2N3TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NvY2lhbExvZ2luU0RLLCBzZXRTb2NpYWxMb2dpblNES10gPSB1c2VTdGF0ZTxTb2NpYWxMb2dpbiB8IG51bGw+KFxyXG4gICAgbnVsbFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGNvbm5lY3RXZWIzID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcclxuICAgIGNvbnNvbGUubG9nKFwic29jaWFsTG9naW5TREtcIiwgc29jaWFsTG9naW5TREspO1xyXG4gICAgaWYgKHNvY2lhbExvZ2luU0RLPy5wcm92aWRlcikge1xyXG4gICAgICBjb25zdCB3ZWIzUHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoXHJcbiAgICAgICAgc29jaWFsTG9naW5TREsucHJvdmlkZXJcclxuICAgICAgKTtcclxuICAgICAgc2V0UHJvdmlkZXIod2ViM1Byb3ZpZGVyKTtcclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzUHJvdmlkZXIubGlzdEFjY291bnRzKCk7XHJcbiAgICAgIHNldEFjY291bnQoYWNjb3VudHNbMF0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoc29jaWFsTG9naW5TREspIHtcclxuICAgICAgc29jaWFsTG9naW5TREsuc2hvd1dhbGxldCgpO1xyXG4gICAgICByZXR1cm4gc29jaWFsTG9naW5TREs7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZGsgPSBuZXcgU29jaWFsTG9naW4oKTtcclxuICAgIGF3YWl0IHNkay5pbml0KHtcclxuICAgICAgY2hhaW5JZDogZXRoZXJzLnV0aWxzLmhleFZhbHVlKDgwMDAxKSxcclxuICAgIH0pO1xyXG4gICAgc2V0U29jaWFsTG9naW5TREsoc2RrKTtcclxuICAgIHNkay5zaG93V2FsbGV0KCk7XHJcbiAgICByZXR1cm4gc29jaWFsTG9naW5TREs7XHJcbiAgfSwgW3NvY2lhbExvZ2luU0RLXSk7XHJcblxyXG4gIC8vIGlmIHdhbGxldCBhbHJlYWR5IGNvbm5lY3RlZCBjbG9zZSB3aWRnZXRcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJoaWRlbHdhbGxldFwiKTtcclxuICAgIGlmIChzb2NpYWxMb2dpblNESyAmJiBzb2NpYWxMb2dpblNESy5wcm92aWRlcikge1xyXG4gICAgICBzb2NpYWxMb2dpblNESy5oaWRlV2FsbGV0KCk7XHJcbiAgICB9XHJcbiAgfSwgW2FjY291bnQsIHNvY2lhbExvZ2luU0RLXSk7XHJcblxyXG4gIC8vIGFmdGVyIG1ldGFtYXNrIGxvZ2luIC0+IGdldCBwcm92aWRlciBldmVudFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKGFjY291bnQpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoc29jaWFsTG9naW5TREs/LnByb3ZpZGVyICYmICFhY2NvdW50KSB7XHJcbiAgICAgICAgY29ubmVjdFdlYjMoKTtcclxuICAgICAgfVxyXG4gICAgfSwgMTAwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH07XHJcbiAgfSwgW2FjY291bnQsIGNvbm5lY3RXZWIzLCBzb2NpYWxMb2dpblNES10pO1xyXG5cclxuICBjb25zdCBkaXNjb25uZWN0V2ViMyA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghc29jaWFsTG9naW5TREsgfHwgIXNvY2lhbExvZ2luU0RLLndlYjNhdXRoKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJXZWIzTW9kYWwgbm90IGluaXRpYWxpemVkLlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgYXdhaXQgc29jaWFsTG9naW5TREsubG9nb3V0KCk7XHJcbiAgICBzb2NpYWxMb2dpblNESy5oaWRlV2FsbGV0KCk7XHJcbiAgICBzZXRQcm92aWRlcih1bmRlZmluZWQpO1xyXG4gICAgc2V0QWNjb3VudCh1bmRlZmluZWQpO1xyXG4gICAgc2V0U2N3QWRkcmVzcyhcIlwiKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gc2V0dXBTbWFydEFjY291bnQoKSB7XHJcbiAgICAgIHNldFNjd0FkZHJlc3MoXCJcIik7XHJcbiAgICAgIHNldFNjd0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIGNvbnN0IHNtYXJ0QWNjb3VudCA9IG5ldyBTbWFydEFjY291bnQocHJvdmlkZXIsIHtcclxuICAgICAgICBhY3RpdmVOZXR3b3JrSWQ6IENoYWluSWQuR09FUkxJLFxyXG4gICAgICAgIHN1cHBvcnRlZE5ldHdvcmtzSWRzOiBbQ2hhaW5JZC5HT0VSTEldLFxyXG4gICAgICB9KTtcclxuICAgICAgYXdhaXQgc21hcnRBY2NvdW50LmluaXQoKTtcclxuICAgICAgY29uc3QgY29udGV4dCA9IHNtYXJ0QWNjb3VudC5nZXRTbWFydEFjY291bnRDb250ZXh0KCk7XHJcbiAgICAgIHNldFNjd0FkZHJlc3MoY29udGV4dC5iYXNlV2FsbGV0LmdldEFkZHJlc3MoKSk7XHJcbiAgICAgIHNldFNtYXJ0QWNjb3VudChzbWFydEFjY291bnQpO1xyXG4gICAgICBzZXRTY3dMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICAgIGlmICghIXByb3ZpZGVyICYmICEhYWNjb3VudCkge1xyXG4gICAgICBzZXR1cFNtYXJ0QWNjb3VudCgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlByb3ZpZGVyLi4uXCIsIHByb3ZpZGVyKTtcclxuICAgIH1cclxuICB9LCBbYWNjb3VudCwgcHJvdmlkZXJdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPGgxPjwvaDE+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXshYWNjb3VudCA/IGNvbm5lY3RXZWIzIDogZGlzY29ubmVjdFdlYjN9PlxyXG4gICAgICAgICAgeyFhY2NvdW50ID8gXCJDb25uZWN0IFdhbGxldFwiIDogXCJEaXNjb25uZWN0IFdhbGxldFwifVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICB7YWNjb3VudCAmJiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDI+RU9BIEFkZHJlc3M8L2gyPlxyXG4gICAgICAgICAgICA8cD57YWNjb3VudH08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7c2N3TG9hZGluZyAmJiA8aDI+TG9hZGluZyBTbWFydCBBY2NvdW50Li4uPC9oMj59XHJcblxyXG4gICAgICAgIHtzY3dBZGRyZXNzICYmIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMj5TbWFydCBBY2NvdW50IEFkZHJlc3M8L2gyPlxyXG4gICAgICAgICAgICA8cD57c2N3QWRkcmVzc308L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2N3O1xyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImV0aGVycyIsIkNoYWluSWQiLCJTb2NpYWxMb2dpbiIsIlNtYXJ0QWNjb3VudCIsIlNjdyIsInByb3ZpZGVyIiwic2V0UHJvdmlkZXIiLCJhY2NvdW50Iiwic2V0QWNjb3VudCIsInNtYXJ0QWNjb3VudCIsInNldFNtYXJ0QWNjb3VudCIsInNjd0FkZHJlc3MiLCJzZXRTY3dBZGRyZXNzIiwic2N3TG9hZGluZyIsInNldFNjd0xvYWRpbmciLCJzb2NpYWxMb2dpblNESyIsInNldFNvY2lhbExvZ2luU0RLIiwiY29ubmVjdFdlYjMiLCJjb25zb2xlIiwibG9nIiwid2ViM1Byb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiYWNjb3VudHMiLCJsaXN0QWNjb3VudHMiLCJzaG93V2FsbGV0Iiwic2RrIiwiaW5pdCIsImNoYWluSWQiLCJ1dGlscyIsImhleFZhbHVlIiwiaGlkZVdhbGxldCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZGlzY29ubmVjdFdlYjMiLCJ3ZWIzYXV0aCIsImVycm9yIiwibG9nb3V0IiwidW5kZWZpbmVkIiwic2V0dXBTbWFydEFjY291bnQiLCJhY3RpdmVOZXR3b3JrSWQiLCJHT0VSTEkiLCJzdXBwb3J0ZWROZXR3b3Jrc0lkcyIsImNvbnRleHQiLCJnZXRTbWFydEFjY291bnRDb250ZXh0IiwiYmFzZVdhbGxldCIsImdldEFkZHJlc3MiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJtYWluIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwiaDIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/scw.tsx\n"));

/***/ })

});