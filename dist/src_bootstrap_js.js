/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmarketing"] = self["webpackChunkmarketing"] || []).push([["src_bootstrap_js"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/styles/esm/StylesProvider/StylesProvider.js\");\n/* harmony import */ var react_web_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-web-component */ \"webpack/sharing/consume/default/react-web-component/react-web-component\");\n/* harmony import */ var react_web_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_web_component__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Landing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Landing */ \"./src/components/Landing.js\");\n;\n\n\n\n\nvar App = function App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Landing__WEBPACK_IMPORTED_MODULE_2__.default, null)));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\nreact_web_component__WEBPACK_IMPORTED_MODULE_1___default().create( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), 'my-app', false);\n\n//# sourceURL=webpack://marketing/./src/App.js?");

/***/ }),

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/*! namespace exports */
/*! export mount [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mount\": () => /* binding */ mount\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"webpack/sharing/consume/default/react-dom/react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n;\n\n // Mount function to start up the app\n\nvar mount = function mount(el) {\n  react_dom__WEBPACK_IMPORTED_MODULE_1___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_2__.default, null), el);\n}; // If we are in development and in isolation,\n// call mount immediately\n\n\nif (true) {\n  var devRoot = document.querySelector('#_marketing-dev-root');\n\n  if (devRoot) {\n    mount(devRoot);\n  }\n} // We are running through container\n// and we should export the mount function\n\n\n\n\n//# sourceURL=webpack://marketing/./src/bootstrap.js?");

/***/ }),

/***/ "./src/components/Landing.js":
/*!***********************************!*\
  !*** ./src/components/Landing.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Album\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/Button.js\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ \"./node_modules/@material-ui/core/esm/Card/Card.js\");\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardActions */ \"./node_modules/@material-ui/core/esm/CardActions/CardActions.js\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"./node_modules/@material-ui/core/esm/CardContent/CardContent.js\");\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardMedia */ \"./node_modules/@material-ui/core/esm/CardMedia/CardMedia.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/Grid.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/Typography.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/makeStyles.js\");\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ \"./node_modules/@material-ui/core/esm/Container/Container.js\");\n;\n\n\n\n\n\n\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.default)(function (theme) {\n  return {\n    '@global': {\n      a: {\n        textDecoration: 'none'\n      }\n    },\n    icon: {\n      marginRight: theme.spacing(2)\n    },\n    heroContent: {\n      backgroundColor: theme.palette.background.paper,\n      padding: theme.spacing(8, 0, 6)\n    },\n    heroButtons: {\n      marginTop: theme.spacing(4)\n    },\n    cardGrid: {\n      paddingTop: theme.spacing(8),\n      paddingBottom: theme.spacing(8)\n    },\n    card: {\n      height: '100%',\n      display: 'flex',\n      flexDirection: 'column'\n    },\n    cardMedia: {\n      paddingTop: '56.25%' // 16:9\n\n    },\n    cardContent: {\n      flexGrow: 1\n    },\n    footer: {\n      backgroundColor: theme.palette.background.paper,\n      padding: theme.spacing(6)\n    }\n  };\n});\nvar cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];\nfunction Album() {\n  var classes = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"main\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: classes.heroContent\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__.default, {\n    maxWidth: \"sm\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__.default, {\n    component: \"h1\",\n    variant: \"h2\",\n    align: \"center\",\n    color: \"textPrimary\",\n    gutterBottom: true\n  }, \"Home Page\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__.default, {\n    variant: \"h5\",\n    align: \"center\",\n    color: \"textSecondary\",\n    paragraph: true\n  }, \"Something short and leading about the collection below\\u2014its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__.default, {\n    className: classes.cardGrid,\n    maxWidth: \"md\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {\n    container: true,\n    spacing: 4\n  }, cards.map(function (card) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {\n      item: true,\n      key: card,\n      xs: 12,\n      sm: 6,\n      md: 4\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__.default, {\n      className: classes.card\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__.default, {\n      className: classes.cardMedia,\n      image: \"https://source.unsplash.com/random\",\n      title: \"Image title\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__.default, {\n      className: classes.cardContent\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__.default, {\n      gutterBottom: true,\n      variant: \"h5\",\n      component: \"h2\"\n    }, \"Heading\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__.default, null, \"This is a media card. You can use this section to describe the content.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_8__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__.default, {\n      size: \"small\",\n      color: \"primary\"\n    }, \"View\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__.default, {\n      size: \"small\",\n      color: \"primary\"\n    }, \"Edit\"))));\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"footer\", {\n    className: classes.footer\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__.default, {\n    variant: \"h6\",\n    align: \"center\",\n    gutterBottom: true\n  }, \"Footer\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__.default, {\n    variant: \"subtitle1\",\n    align: \"center\",\n    color: \"textSecondary\",\n    component: \"p\"\n  }, \"Something here to give the footer a purpose!\")));\n}\n\n//# sourceURL=webpack://marketing/./src/components/Landing.js?");

/***/ })

}]);