webpackHotUpdate_N_E("pages/registrar/usuario",{

/***/ "./src/components/forms/usuario/RegistrarUsuario.jsx":
/*!***********************************************************!*\
  !*** ./src/components/forms/usuario/RegistrarUsuario.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-google-login */ "./node_modules/react-google-login/dist/google-login.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-materialize */ "./node_modules/react-materialize/lib/index.js");
/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_materialize__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toast-notifications */ "./node_modules/react-toast-notifications/dist/index.js");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _services_serviciosRegistro__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/serviciosRegistro */ "./src/services/serviciosRegistro.jsx");
/* harmony import */ var _components_commons_inputs_password_PasswordField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/commons/inputs/password/PasswordField */ "./src/components/commons/inputs/password/PasswordField.jsx");
/* harmony import */ var _styles_modules_stylesGoogle_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @styles/modules/stylesGoogle.module.css */ "./src/styles/modules/stylesGoogle.module.css");
/* harmony import */ var _styles_modules_stylesGoogle_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_modules_stylesGoogle_module_css__WEBPACK_IMPORTED_MODULE_13__);



var _jsxFileName = "C:\\Users\\Sebastian\\Desktop\\frontend-nextjs\\src\\components\\forms\\usuario\\RegistrarUsuario.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














var RegistrarUsuario = function RegistrarUsuario() {
  _s();

  var boton = _styles_modules_stylesGoogle_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.boton,
      imagenGoogle = _styles_modules_stylesGoogle_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.imagenGoogle;

  var _useToasts = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_10__["useToasts"])(),
      addToast = _useToasts.addToast;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var registerSchema = yup__WEBPACK_IMPORTED_MODULE_7__["object"]().shape({
    nombres: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().trim().max(60, 'Máximo 60 caracteres').required('Este campo es obligatorio'),
    apellidos: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().trim().max(60, 'Máximo 60 caracteres').required('Este campo es obligatorio'),
    correo: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().trim().required('Este campo es obligatorio').email('Correo electronico invalido').min(5, 'Mínimo 5 caracteres'),
    clave: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('Este campo es obligatorio').matches('^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,20}$', 'La clave debe tener al entre 8 y 20 caracteres, un dígito, una letra minúscula y una letra mayúscula.')
  });

  var registerNewUser = function registerNewUser(values) {
    _services_serviciosRegistro__WEBPACK_IMPORTED_MODULE_11__["default"].newUser(values, function (_ref) {
      var data = _ref.data;
      addToast('¡Usuario registrado con exito!', {
        appearance: 'success'
      });
      history.push("notificacion/activar-cuenta");
    }, function (error) {
      if (error.response) {
        var status = error.response.status;

        if (status === 409) {
          addToast('Cuenta actualmente existente', {
            appearance: 'info'
          });
        } else if (status === 422) {
          addToast('Valida la información, por favor', {
            appearance: 'warning'
          });
        } else if (status === 500) {
          addToast('oh no :(, no eres tú somos nosotros, algo a ido mal', {
            appearance: 'error'
          });
        }
      } else {
        addToast('oh no :(, no eres tú somos nosotros, algo a ido mal', {
          appearance: 'error'
        });
      }
    });
  };

  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_6__["useFormik"])({
    initialValues: {
      nombres: '',
      apellidos: '',
      correo: '',
      clave: ''
    },
    validationSchema: registerSchema,
    onSubmit: registerNewUser
  });
  /**
   * Sing up with google
   */

  var respuestaGoogle = function respuestaGoogle(response) {
    console.log(response.profileObj);

    if (response.profileObj) {
      var googleUser = {
        nombres: response.profileObj.givenName,
        apellidos: response.profileObj.familyName,
        correo: response.profileObj.email,
        googleId: response.profileObj.googleId
      };
      _services_serviciosRegistro__WEBPACK_IMPORTED_MODULE_11__["default"].newGoogleUser(googleUser, function () {
        addToast('¡Usuario registrado y verificado con exito!', {
          appearance: 'success',
          autoDismiss: true
        });
        history.push("login");
      }, function (error) {
        if (error.response) {
          var status = error.response.status;

          if (status === 409) {
            addToast('Cuenta actualmente existente', {
              appearance: 'info'
            });
          } else if (status === 422) {
            addToast('Valida la información, por favor', {
              appearance: 'warning'
            });
          } else if (status === 500) {
            addToast('oh no :(, no eres tú somos nosotros, algo a ido mal', {
              appearance: 'error'
            });
          }
        } else {
          addToast('oh no :(, no eres tú somos nosotros, algo a ido mal', {
            appearance: 'error'
          });
        }
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
    onSubmit: formik.handleSubmit,
    className: "form-control",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
      className: "center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("strong", {
        children: "Crear"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 36
      }, _this), " una cuenta."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_materialize__WEBPACK_IMPORTED_MODULE_9__["TextInput"], _objectSpread(_objectSpread({
      label: "Nombres:",
      name: "nombres",
      id: "nombres"
    }, formik.getFieldProps('nombres')), {}, {
      children: formik.touched.nombres && formik.errors.nombres ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "helper-text red-text",
        children: formik.errors.nombres
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 78
      }, _this) : null
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_materialize__WEBPACK_IMPORTED_MODULE_9__["TextInput"], _objectSpread(_objectSpread({
      label: "Apellidos:",
      name: "apellidos",
      id: "apellidos"
    }, formik.getFieldProps('apellidos')), {}, {
      children: formik.touched.apellidos && formik.errors.apellidos ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "helper-text red-text",
        children: formik.errors.apellidos
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 82
      }, _this) : null
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_materialize__WEBPACK_IMPORTED_MODULE_9__["TextInput"], _objectSpread(_objectSpread({
      label: "Correo:",
      email: true,
      name: "correo",
      id: "correo"
    }, formik.getFieldProps('correo')), {}, {
      children: formik.touched.correo && formik.errors.correo ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "helper-text red-text",
        children: formik.errors.correo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 76
      }, _this) : null
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_commons_inputs_password_PasswordField__WEBPACK_IMPORTED_MODULE_12__["PasswordField"], _objectSpread(_objectSpread({
      label: "Clave:",
      name: "clave",
      id: "clave",
      s: 12,
      m: 5,
      l: 5
    }, formik.getFieldProps('clave')), {}, {
      children: formik.touched.clave && formik.errors.clave ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "helper-text red-text",
        children: formik.errors.clave
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 74
      }, _this) : null
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_materialize__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      style: {
        width: "100%"
      },
      type: "submit",
      disabled: !formik.isValid,
      children: "Registrarse"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_google_login__WEBPACK_IMPORTED_MODULE_8__["GoogleLogin"], {
      clientId: "31983275788-597slnqbnq71p45qajk27m718vqj13pq.apps.googleusercontent.com",
      render: function render(renderProps) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          className: boton,
          onClick: renderProps.onClick,
          disabled: renderProps.disabled,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
            alt: "google icon",
            src: "/images/google.svg",
            width: "auto",
            height: "20px",
            className: imagenGoogle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 25
          }, _this), "Registrate con Google"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 21
        }, _this);
      },
      onSuccess: respuestaGoogle,
      onFailure: respuestaGoogle,
      cookiePolicy: 'single_host_origin'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "already",
      href: "/login",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
        children: "\xBFYa tienes una cuenta? Ingresa aqu\xED."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 54
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 9
  }, _this);
};

_s(RegistrarUsuario, "UCmugVPQBGLVqR6/0qLmO8Rx8eM=", false, function () {
  return [react_toast_notifications__WEBPACK_IMPORTED_MODULE_10__["useToasts"], next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"], formik__WEBPACK_IMPORTED_MODULE_6__["useFormik"]];
});

_c = RegistrarUsuario;
/* harmony default export */ __webpack_exports__["default"] = (RegistrarUsuario);

var _c;

$RefreshReg$(_c, "RegistrarUsuario");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9ybXMvdXN1YXJpby9SZWdpc3RyYXJVc3VhcmlvLmpzeCJdLCJuYW1lcyI6WyJSZWdpc3RyYXJVc3VhcmlvIiwiYm90b24iLCJzdHlsZXNHb29nbGUiLCJpbWFnZW5Hb29nbGUiLCJ1c2VUb2FzdHMiLCJhZGRUb2FzdCIsInJvdXRlciIsInVzZVJvdXRlciIsInJlZ2lzdGVyU2NoZW1hIiwiWXVwIiwic2hhcGUiLCJub21icmVzIiwidHJpbSIsIm1heCIsInJlcXVpcmVkIiwiYXBlbGxpZG9zIiwiY29ycmVvIiwiZW1haWwiLCJtaW4iLCJjbGF2ZSIsIm1hdGNoZXMiLCJyZWdpc3Rlck5ld1VzZXIiLCJ2YWx1ZXMiLCJTZXJ2aWNlcyIsIm5ld1VzZXIiLCJkYXRhIiwiYXBwZWFyYW5jZSIsImhpc3RvcnkiLCJwdXNoIiwiZXJyb3IiLCJyZXNwb25zZSIsInN0YXR1cyIsImZvcm1payIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJ2YWxpZGF0aW9uU2NoZW1hIiwib25TdWJtaXQiLCJyZXNwdWVzdGFHb29nbGUiLCJjb25zb2xlIiwibG9nIiwicHJvZmlsZU9iaiIsImdvb2dsZVVzZXIiLCJnaXZlbk5hbWUiLCJmYW1pbHlOYW1lIiwiZ29vZ2xlSWQiLCJuZXdHb29nbGVVc2VyIiwiYXV0b0Rpc21pc3MiLCJoYW5kbGVTdWJtaXQiLCJnZXRGaWVsZFByb3BzIiwidG91Y2hlZCIsImVycm9ycyIsIndpZHRoIiwiaXNWYWxpZCIsInJlbmRlclByb3BzIiwib25DbGljayIsImRpc2FibGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQUE7O0FBQUEsTUFFbkJDLEtBRm1CLEdBRUtDLCtFQUZMLENBRW5CRCxLQUZtQjtBQUFBLE1BRVpFLFlBRlksR0FFS0QsK0VBRkwsQ0FFWkMsWUFGWTs7QUFBQSxtQkFHTkMsNEVBQVMsRUFISDtBQUFBLE1BR25CQyxRQUhtQixjQUduQkEsUUFIbUI7O0FBSTNCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxNQUFNQyxjQUFjLEdBQUdDLDBDQUFBLEdBQWFDLEtBQWIsQ0FBbUI7QUFDdENDLFdBQU8sRUFBRUYsMENBQUEsR0FBYUcsSUFBYixHQUNKQyxHQURJLENBQ0EsRUFEQSxFQUNJLHNCQURKLEVBRUpDLFFBRkksQ0FFSywyQkFGTCxDQUQ2QjtBQUl0Q0MsYUFBUyxFQUFFTiwwQ0FBQSxHQUFhRyxJQUFiLEdBQ05DLEdBRE0sQ0FDRixFQURFLEVBQ0Usc0JBREYsRUFFTkMsUUFGTSxDQUVHLDJCQUZILENBSjJCO0FBT3RDRSxVQUFNLEVBQUVQLDBDQUFBLEdBQWFHLElBQWIsR0FDSEUsUUFERyxDQUNNLDJCQUROLEVBRUhHLEtBRkcsQ0FFRyw2QkFGSCxFQUdIQyxHQUhHLENBR0MsQ0FIRCxFQUdJLHFCQUhKLENBUDhCO0FBV3RDQyxTQUFLLEVBQUVWLDBDQUFBLEdBQ0ZLLFFBREUsQ0FDTywyQkFEUCxFQUVGTSxPQUZFLENBRU0sa0RBRk4sRUFFMEQsdUdBRjFEO0FBWCtCLEdBQW5CLENBQXZCOztBQWdCQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLE1BQUQsRUFBWTtBQUNoQ0Msd0VBQVEsQ0FBQ0MsT0FBVCxDQUFpQkYsTUFBakIsRUFBeUIsZ0JBQWM7QUFBQSxVQUFYRyxJQUFXLFFBQVhBLElBQVc7QUFDbkNwQixjQUFRLENBQUMsZ0NBQUQsRUFBbUM7QUFBRXFCLGtCQUFVLEVBQUU7QUFBZCxPQUFuQyxDQUFSO0FBQ0FDLGFBQU8sQ0FBQ0MsSUFBUixDQUFhLDZCQUFiO0FBQ0gsS0FIRCxFQUdHLFVBQUNDLEtBQUQsRUFBVztBQUNWLFVBQUlBLEtBQUssQ0FBQ0MsUUFBVixFQUFvQjtBQUFBLFlBQ1JDLE1BRFEsR0FDR0YsS0FBSyxDQUFDQyxRQURULENBQ1JDLE1BRFE7O0FBRWhCLFlBQUlBLE1BQU0sS0FBSyxHQUFmLEVBQW9CO0FBQ2hCMUIsa0JBQVEsQ0FBQyw4QkFBRCxFQUFpQztBQUFFcUIsc0JBQVUsRUFBRTtBQUFkLFdBQWpDLENBQVI7QUFDSCxTQUZELE1BRU8sSUFBSUssTUFBTSxLQUFLLEdBQWYsRUFBb0I7QUFDdkIxQixrQkFBUSxDQUFDLGtDQUFELEVBQXFDO0FBQUVxQixzQkFBVSxFQUFFO0FBQWQsV0FBckMsQ0FBUjtBQUNILFNBRk0sTUFFQSxJQUFJSyxNQUFNLEtBQUssR0FBZixFQUFvQjtBQUN2QjFCLGtCQUFRLENBQUMscURBQUQsRUFBd0Q7QUFBRXFCLHNCQUFVLEVBQUU7QUFBZCxXQUF4RCxDQUFSO0FBQ0g7QUFDSixPQVRELE1BU087QUFDSHJCLGdCQUFRLENBQUMscURBQUQsRUFBd0Q7QUFBRXFCLG9CQUFVLEVBQUU7QUFBZCxTQUF4RCxDQUFSO0FBQ0g7QUFDSixLQWhCRDtBQWlCSCxHQWxCRDs7QUFvQkEsTUFBTU0sTUFBTSxHQUFHQyx3REFBUyxDQUFDO0FBQ3JCQyxpQkFBYSxFQUFFO0FBQ1h2QixhQUFPLEVBQUUsRUFERTtBQUVYSSxlQUFTLEVBQUUsRUFGQTtBQUdYQyxZQUFNLEVBQUUsRUFIRztBQUlYRyxXQUFLLEVBQUU7QUFKSSxLQURNO0FBT3JCZ0Isb0JBQWdCLEVBQUUzQixjQVBHO0FBUXJCNEIsWUFBUSxFQUFFZjtBQVJXLEdBQUQsQ0FBeEI7QUFXQTtBQUNKO0FBQ0E7O0FBQ0ksTUFBTWdCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ1AsUUFBRCxFQUFjO0FBQ2xDUSxXQUFPLENBQUNDLEdBQVIsQ0FBWVQsUUFBUSxDQUFDVSxVQUFyQjs7QUFDQSxRQUFJVixRQUFRLENBQUNVLFVBQWIsRUFBeUI7QUFDckIsVUFBTUMsVUFBVSxHQUFHO0FBQ2Y5QixlQUFPLEVBQUVtQixRQUFRLENBQUNVLFVBQVQsQ0FBb0JFLFNBRGQ7QUFFZjNCLGlCQUFTLEVBQUVlLFFBQVEsQ0FBQ1UsVUFBVCxDQUFvQkcsVUFGaEI7QUFHZjNCLGNBQU0sRUFBRWMsUUFBUSxDQUFDVSxVQUFULENBQW9CdkIsS0FIYjtBQUlmMkIsZ0JBQVEsRUFBRWQsUUFBUSxDQUFDVSxVQUFULENBQW9CSTtBQUpmLE9BQW5CO0FBTUFyQiwwRUFBUSxDQUFDc0IsYUFBVCxDQUF1QkosVUFBdkIsRUFBbUMsWUFBTTtBQUNyQ3BDLGdCQUFRLENBQUMsNkNBQUQsRUFBZ0Q7QUFBRXFCLG9CQUFVLEVBQUUsU0FBZDtBQUF5Qm9CLHFCQUFXLEVBQUU7QUFBdEMsU0FBaEQsQ0FBUjtBQUNBbkIsZUFBTyxDQUFDQyxJQUFSLENBQWEsT0FBYjtBQUNILE9BSEQsRUFHRyxVQUFDQyxLQUFELEVBQVc7QUFDVixZQUFJQSxLQUFLLENBQUNDLFFBQVYsRUFBb0I7QUFBQSxjQUNSQyxNQURRLEdBQ0dGLEtBQUssQ0FBQ0MsUUFEVCxDQUNSQyxNQURROztBQUVoQixjQUFJQSxNQUFNLEtBQUssR0FBZixFQUFvQjtBQUNoQjFCLG9CQUFRLENBQUMsOEJBQUQsRUFBaUM7QUFBRXFCLHdCQUFVLEVBQUU7QUFBZCxhQUFqQyxDQUFSO0FBQ0gsV0FGRCxNQUVPLElBQUlLLE1BQU0sS0FBSyxHQUFmLEVBQW9CO0FBQ3ZCMUIsb0JBQVEsQ0FBQyxrQ0FBRCxFQUFxQztBQUFFcUIsd0JBQVUsRUFBRTtBQUFkLGFBQXJDLENBQVI7QUFDSCxXQUZNLE1BRUEsSUFBSUssTUFBTSxLQUFLLEdBQWYsRUFBb0I7QUFDdkIxQixvQkFBUSxDQUFDLHFEQUFELEVBQXdEO0FBQUVxQix3QkFBVSxFQUFFO0FBQWQsYUFBeEQsQ0FBUjtBQUNIO0FBQ0osU0FURCxNQVNPO0FBQ0hyQixrQkFBUSxDQUFDLHFEQUFELEVBQXdEO0FBQUVxQixzQkFBVSxFQUFFO0FBQWQsV0FBeEQsQ0FBUjtBQUNIO0FBQ0osT0FoQkQ7QUFpQkg7QUFDSixHQTNCRDs7QUE2QkEsc0JBQ0k7QUFBTSxZQUFRLEVBQUVNLE1BQU0sQ0FBQ2UsWUFBdkI7QUFBcUMsYUFBUyxFQUFDLGNBQS9DO0FBQUEsNEJBQ0k7QUFBSSxlQUFTLEVBQUMsUUFBZDtBQUFBLDhCQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJLHFFQUFDLDJEQUFEO0FBQVcsV0FBSyxFQUFDLFVBQWpCO0FBQTRCLFVBQUksRUFBQyxTQUFqQztBQUEyQyxRQUFFLEVBQUM7QUFBOUMsT0FDUWYsTUFBTSxDQUFDZ0IsYUFBUCxDQUFxQixTQUFyQixDQURSO0FBRUksY0FBUSxFQUFFaEIsTUFBTSxDQUFDaUIsT0FBUCxDQUFldEMsT0FBZixJQUEwQnFCLE1BQU0sQ0FBQ2tCLE1BQVAsQ0FBY3ZDLE9BQXhDLGdCQUFtRDtBQUFNLGlCQUFTLEVBQUMsc0JBQWhCO0FBQUEsa0JBQXdDcUIsTUFBTSxDQUFDa0IsTUFBUCxDQUFjdkM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFuRCxHQUE0SDtBQUYxSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFNSSxxRUFBQywyREFBRDtBQUFXLFdBQUssRUFBQyxZQUFqQjtBQUE4QixVQUFJLEVBQUMsV0FBbkM7QUFBK0MsUUFBRSxFQUFDO0FBQWxELE9BQ1FxQixNQUFNLENBQUNnQixhQUFQLENBQXFCLFdBQXJCLENBRFI7QUFFSSxjQUFRLEVBQUVoQixNQUFNLENBQUNpQixPQUFQLENBQWVsQyxTQUFmLElBQTRCaUIsTUFBTSxDQUFDa0IsTUFBUCxDQUFjbkMsU0FBMUMsZ0JBQXVEO0FBQU0saUJBQVMsRUFBQyxzQkFBaEI7QUFBQSxrQkFBd0NpQixNQUFNLENBQUNrQixNQUFQLENBQWNuQztBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXZELEdBQWtJO0FBRmhKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSixlQVVJLHFFQUFDLDJEQUFEO0FBQVcsV0FBSyxFQUFDLFNBQWpCO0FBQTJCLFdBQUssTUFBaEM7QUFBaUMsVUFBSSxFQUFDLFFBQXRDO0FBQStDLFFBQUUsRUFBQztBQUFsRCxPQUNRaUIsTUFBTSxDQUFDZ0IsYUFBUCxDQUFxQixRQUFyQixDQURSO0FBRUksY0FBUSxFQUFFaEIsTUFBTSxDQUFDaUIsT0FBUCxDQUFlakMsTUFBZixJQUF5QmdCLE1BQU0sQ0FBQ2tCLE1BQVAsQ0FBY2xDLE1BQXZDLGdCQUFpRDtBQUFNLGlCQUFTLEVBQUMsc0JBQWhCO0FBQUEsa0JBQXdDZ0IsTUFBTSxDQUFDa0IsTUFBUCxDQUFjbEM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFqRCxHQUF5SDtBQUZ2STtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkosZUFjSSxxRUFBQyxnR0FBRDtBQUFlLFdBQUssRUFBQyxRQUFyQjtBQUE4QixVQUFJLEVBQUMsT0FBbkM7QUFBMkMsUUFBRSxFQUFDLE9BQTlDO0FBQXNELE9BQUMsRUFBRSxFQUF6RDtBQUE2RCxPQUFDLEVBQUUsQ0FBaEU7QUFBbUUsT0FBQyxFQUFFO0FBQXRFLE9BQ1FnQixNQUFNLENBQUNnQixhQUFQLENBQXFCLE9BQXJCLENBRFI7QUFFSSxjQUFRLEVBQUVoQixNQUFNLENBQUNpQixPQUFQLENBQWU5QixLQUFmLElBQXdCYSxNQUFNLENBQUNrQixNQUFQLENBQWMvQixLQUF0QyxnQkFBK0M7QUFBTSxpQkFBUyxFQUFDLHNCQUFoQjtBQUFBLGtCQUF3Q2EsTUFBTSxDQUFDa0IsTUFBUCxDQUFjL0I7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUEvQyxHQUFzSDtBQUZwSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZEosZUFrQkkscUVBQUMsd0RBQUQ7QUFBUSxXQUFLLEVBQUU7QUFBRWdDLGFBQUssRUFBRTtBQUFULE9BQWY7QUFBa0MsVUFBSSxFQUFDLFFBQXZDO0FBQWdELGNBQVEsRUFBRSxDQUFDbkIsTUFBTSxDQUFDb0IsT0FBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQkosZUFxQkkscUVBQUMsOERBQUQ7QUFDSSxjQUFRLEVBQUMseUVBRGI7QUFFSSxZQUFNLEVBQUUsZ0JBQUFDLFdBQVc7QUFBQSw0QkFDZjtBQUFRLG1CQUFTLEVBQUVwRCxLQUFuQjtBQUEwQixpQkFBTyxFQUFFb0QsV0FBVyxDQUFDQyxPQUEvQztBQUF3RCxrQkFBUSxFQUFFRCxXQUFXLENBQUNFLFFBQTlFO0FBQUEsa0NBQ0kscUVBQUMsaURBQUQ7QUFDSSxlQUFHLEVBQUMsYUFEUjtBQUVJLGVBQUcsRUFBQyxvQkFGUjtBQUdJLGlCQUFLLEVBQUMsTUFIVjtBQUlJLGtCQUFNLEVBQUMsTUFKWDtBQUtJLHFCQUFTLEVBQUVwRDtBQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURlO0FBQUEsT0FGdkI7QUFhSSxlQUFTLEVBQUVrQyxlQWJmO0FBY0ksZUFBUyxFQUFFQSxlQWRmO0FBZUksa0JBQVksRUFBRTtBQWZsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckJKLGVBc0NJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0Q0osZUF1Q0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXZDSixlQXdDSSxxRUFBQyxnREFBRDtBQUFNLGVBQVMsRUFBQyxTQUFoQjtBQUEwQixVQUFJLEVBQUMsUUFBL0I7QUFBQSw2QkFBeUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTRDSCxDQWpJRDs7R0FBTXJDLGdCO1VBR21CSSxvRSxFQUNORyxxRCxFQXNDQTBCLGdEOzs7S0ExQ2JqQyxnQjtBQW1JU0EsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0cmFyL3VzdWFyaW8uZDliNmQwZTQwMDhjNjc3NmM4NzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xyXG5pbXBvcnQgeyBHb29nbGVMb2dpbiB9IGZyb20gJ3JlYWN0LWdvb2dsZS1sb2dpbic7XHJcbmltcG9ydCB7IEJ1dHRvbiwgVGV4dElucHV0IH0gZnJvbSAncmVhY3QtbWF0ZXJpYWxpemUnO1xyXG5pbXBvcnQgeyB1c2VUb2FzdHMgfSBmcm9tICdyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zJztcclxuaW1wb3J0IFNlcnZpY2VzIGZyb20gJ0BzZXJ2aWNlcy9zZXJ2aWNpb3NSZWdpc3RybydcclxuaW1wb3J0IHsgUGFzc3dvcmRGaWVsZCB9IGZyb20gJ0Bjb21wb25lbnRzL2NvbW1vbnMvaW5wdXRzL3Bhc3N3b3JkL1Bhc3N3b3JkRmllbGQnXHJcbmltcG9ydCBzdHlsZXNHb29nbGUgZnJvbSAnQHN0eWxlcy9tb2R1bGVzL3N0eWxlc0dvb2dsZS5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgUmVnaXN0cmFyVXN1YXJpbyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB7IGJvdG9uLCBpbWFnZW5Hb29nbGUgfSA9IHN0eWxlc0dvb2dsZTtcclxuICAgIGNvbnN0IHsgYWRkVG9hc3QgfSA9IHVzZVRvYXN0cygpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBjb25zdCByZWdpc3RlclNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgICAgICAgbm9tYnJlczogWXVwLnN0cmluZygpLnRyaW0oKVxyXG4gICAgICAgICAgICAubWF4KDYwLCAnTcOheGltbyA2MCBjYXJhY3RlcmVzJylcclxuICAgICAgICAgICAgLnJlcXVpcmVkKCdFc3RlIGNhbXBvIGVzIG9ibGlnYXRvcmlvJyksXHJcbiAgICAgICAgYXBlbGxpZG9zOiBZdXAuc3RyaW5nKCkudHJpbSgpXHJcbiAgICAgICAgICAgIC5tYXgoNjAsICdNw6F4aW1vIDYwIGNhcmFjdGVyZXMnKVxyXG4gICAgICAgICAgICAucmVxdWlyZWQoJ0VzdGUgY2FtcG8gZXMgb2JsaWdhdG9yaW8nKSxcclxuICAgICAgICBjb3JyZW86IFl1cC5zdHJpbmcoKS50cmltKClcclxuICAgICAgICAgICAgLnJlcXVpcmVkKCdFc3RlIGNhbXBvIGVzIG9ibGlnYXRvcmlvJylcclxuICAgICAgICAgICAgLmVtYWlsKCdDb3JyZW8gZWxlY3Ryb25pY28gaW52YWxpZG8nKVxyXG4gICAgICAgICAgICAubWluKDUsICdNw61uaW1vIDUgY2FyYWN0ZXJlcycpLFxyXG4gICAgICAgIGNsYXZlOiBZdXAuc3RyaW5nKClcclxuICAgICAgICAgICAgLnJlcXVpcmVkKCdFc3RlIGNhbXBvIGVzIG9ibGlnYXRvcmlvJylcclxuICAgICAgICAgICAgLm1hdGNoZXMoJ14oPz1cXFxcdypcXFxcZCkoPz1cXFxcdypbQS1aXSkoPz1cXFxcdypbYS16XSlcXFxcU3s4LDIwfSQnLCAnTGEgY2xhdmUgZGViZSB0ZW5lciBhbCBlbnRyZSA4IHkgMjAgY2FyYWN0ZXJlcywgdW4gZMOtZ2l0bywgdW5hIGxldHJhIG1pbsO6c2N1bGEgeSB1bmEgbGV0cmEgbWF5w7pzY3VsYS4nKVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVnaXN0ZXJOZXdVc2VyID0gKHZhbHVlcykgPT4ge1xyXG4gICAgICAgIFNlcnZpY2VzLm5ld1VzZXIodmFsdWVzLCAoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgYWRkVG9hc3QoJ8KhVXN1YXJpbyByZWdpc3RyYWRvIGNvbiBleGl0byEnLCB7IGFwcGVhcmFuY2U6ICdzdWNjZXNzJyB9KTtcclxuICAgICAgICAgICAgaGlzdG9yeS5wdXNoKFwibm90aWZpY2FjaW9uL2FjdGl2YXItY3VlbnRhXCIpO1xyXG4gICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBlcnJvci5yZXNwb25zZTtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDQwOSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCdDdWVudGEgYWN0dWFsbWVudGUgZXhpc3RlbnRlJywgeyBhcHBlYXJhbmNlOiAnaW5mbycgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDIyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoJ1ZhbGlkYSBsYSBpbmZvcm1hY2nDs24sIHBvciBmYXZvcicsIHsgYXBwZWFyYW5jZTogJ3dhcm5pbmcnIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCdvaCBubyA6KCwgbm8gZXJlcyB0w7ogc29tb3Mgbm9zb3Ryb3MsIGFsZ28gYSBpZG8gbWFsJywgeyBhcHBlYXJhbmNlOiAnZXJyb3InIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoJ29oIG5vIDooLCBubyBlcmVzIHTDuiBzb21vcyBub3NvdHJvcywgYWxnbyBhIGlkbyBtYWwnLCB7IGFwcGVhcmFuY2U6ICdlcnJvcicgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM6IHtcclxuICAgICAgICAgICAgbm9tYnJlczogJycsXHJcbiAgICAgICAgICAgIGFwZWxsaWRvczogJycsXHJcbiAgICAgICAgICAgIGNvcnJlbzogJycsXHJcbiAgICAgICAgICAgIGNsYXZlOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE6IHJlZ2lzdGVyU2NoZW1hLFxyXG4gICAgICAgIG9uU3VibWl0OiByZWdpc3Rlck5ld1VzZXIsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNpbmcgdXAgd2l0aCBnb29nbGVcclxuICAgICAqL1xyXG4gICAgY29uc3QgcmVzcHVlc3RhR29vZ2xlID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UucHJvZmlsZU9iaik7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnByb2ZpbGVPYmopIHtcclxuICAgICAgICAgICAgY29uc3QgZ29vZ2xlVXNlciA9IHtcclxuICAgICAgICAgICAgICAgIG5vbWJyZXM6IHJlc3BvbnNlLnByb2ZpbGVPYmouZ2l2ZW5OYW1lLFxyXG4gICAgICAgICAgICAgICAgYXBlbGxpZG9zOiByZXNwb25zZS5wcm9maWxlT2JqLmZhbWlseU5hbWUsXHJcbiAgICAgICAgICAgICAgICBjb3JyZW86IHJlc3BvbnNlLnByb2ZpbGVPYmouZW1haWwsXHJcbiAgICAgICAgICAgICAgICBnb29nbGVJZDogcmVzcG9uc2UucHJvZmlsZU9iai5nb29nbGVJZCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgU2VydmljZXMubmV3R29vZ2xlVXNlcihnb29nbGVVc2VyLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCgnwqFVc3VhcmlvIHJlZ2lzdHJhZG8geSB2ZXJpZmljYWRvIGNvbiBleGl0byEnLCB7IGFwcGVhcmFuY2U6ICdzdWNjZXNzJywgYXV0b0Rpc21pc3M6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICBoaXN0b3J5LnB1c2goXCJsb2dpblwiKTtcclxuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHN0YXR1cyB9ID0gZXJyb3IucmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gNDA5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCdDdWVudGEgYWN0dWFsbWVudGUgZXhpc3RlbnRlJywgeyBhcHBlYXJhbmNlOiAnaW5mbycgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQyMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCgnVmFsaWRhIGxhIGluZm9ybWFjacOzbiwgcG9yIGZhdm9yJywgeyBhcHBlYXJhbmNlOiAnd2FybmluZycgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCgnb2ggbm8gOigsIG5vIGVyZXMgdMO6IHNvbW9zIG5vc290cm9zLCBhbGdvIGEgaWRvIG1hbCcsIHsgYXBwZWFyYW5jZTogJ2Vycm9yJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCdvaCBubyA6KCwgbm8gZXJlcyB0w7ogc29tb3Mgbm9zb3Ryb3MsIGFsZ28gYSBpZG8gbWFsJywgeyBhcHBlYXJhbmNlOiAnZXJyb3InIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2VudGVyXCI+PHN0cm9uZz5DcmVhcjwvc3Ryb25nPiB1bmEgY3VlbnRhLjwvaDI+XHJcbiAgICAgICAgICAgIDxUZXh0SW5wdXQgbGFiZWw9J05vbWJyZXM6JyBuYW1lPVwibm9tYnJlc1wiIGlkPSdub21icmVzJ1xyXG4gICAgICAgICAgICAgICAgey4uLmZvcm1pay5nZXRGaWVsZFByb3BzKCdub21icmVzJyl9XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbj17Zm9ybWlrLnRvdWNoZWQubm9tYnJlcyAmJiBmb3JtaWsuZXJyb3JzLm5vbWJyZXMgPyAoPHNwYW4gY2xhc3NOYW1lPVwiaGVscGVyLXRleHQgcmVkLXRleHRcIj57Zm9ybWlrLmVycm9ycy5ub21icmVzfTwvc3Bhbj4pIDogbnVsbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRJbnB1dCBsYWJlbD0nQXBlbGxpZG9zOicgbmFtZT1cImFwZWxsaWRvc1wiIGlkPSdhcGVsbGlkb3MnXHJcbiAgICAgICAgICAgICAgICB7Li4uZm9ybWlrLmdldEZpZWxkUHJvcHMoJ2FwZWxsaWRvcycpfVxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW49e2Zvcm1pay50b3VjaGVkLmFwZWxsaWRvcyAmJiBmb3JtaWsuZXJyb3JzLmFwZWxsaWRvcyA/ICg8c3BhbiBjbGFzc05hbWU9XCJoZWxwZXItdGV4dCByZWQtdGV4dFwiPntmb3JtaWsuZXJyb3JzLmFwZWxsaWRvc308L3NwYW4+KSA6IG51bGx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0SW5wdXQgbGFiZWw9J0NvcnJlbzonIGVtYWlsIG5hbWU9XCJjb3JyZW9cIiBpZD0nY29ycmVvJ1xyXG4gICAgICAgICAgICAgICAgey4uLmZvcm1pay5nZXRGaWVsZFByb3BzKCdjb3JyZW8nKX1cclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuPXtmb3JtaWsudG91Y2hlZC5jb3JyZW8gJiYgZm9ybWlrLmVycm9ycy5jb3JyZW8gPyAoPHNwYW4gY2xhc3NOYW1lPVwiaGVscGVyLXRleHQgcmVkLXRleHRcIj57Zm9ybWlrLmVycm9ycy5jb3JyZW99PC9zcGFuPikgOiBudWxsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8UGFzc3dvcmRGaWVsZCBsYWJlbD0nQ2xhdmU6JyBuYW1lPSdjbGF2ZScgaWQ9J2NsYXZlJyBzPXsxMn0gbT17NX0gbD17NX1cclxuICAgICAgICAgICAgICAgIHsuLi5mb3JtaWsuZ2V0RmllbGRQcm9wcygnY2xhdmUnKX1cclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuPXtmb3JtaWsudG91Y2hlZC5jbGF2ZSAmJiBmb3JtaWsuZXJyb3JzLmNsYXZlID8gKDxzcGFuIGNsYXNzTmFtZT1cImhlbHBlci10ZXh0IHJlZC10ZXh0XCI+e2Zvcm1pay5lcnJvcnMuY2xhdmV9PC9zcGFuPikgOiBudWxsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fSB0eXBlPSdzdWJtaXQnIGRpc2FibGVkPXshZm9ybWlrLmlzVmFsaWR9ID5cclxuICAgICAgICAgICAgICAgIFJlZ2lzdHJhcnNlXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEdvb2dsZUxvZ2luXHJcbiAgICAgICAgICAgICAgICBjbGllbnRJZD1cIjMxOTgzMjc1Nzg4LTU5N3NsbnFibnE3MXA0NXFhamsyN203MTh2cWoxM3BxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCJcclxuICAgICAgICAgICAgICAgIHJlbmRlcj17cmVuZGVyUHJvcHMgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtib3Rvbn0gb25DbGljaz17cmVuZGVyUHJvcHMub25DbGlja30gZGlzYWJsZWQ9e3JlbmRlclByb3BzLmRpc2FibGVkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJnb29nbGUgaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9pbWFnZXMvZ29vZ2xlLnN2ZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aW1hZ2VuR29vZ2xlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWdpc3RyYXRlIGNvbiBHb29nbGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3M9e3Jlc3B1ZXN0YUdvb2dsZX1cclxuICAgICAgICAgICAgICAgIG9uRmFpbHVyZT17cmVzcHVlc3RhR29vZ2xlfVxyXG4gICAgICAgICAgICAgICAgY29va2llUG9saWN5PXsnc2luZ2xlX2hvc3Rfb3JpZ2luJ31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJhbHJlYWR5XCIgaHJlZj0nL2xvZ2luJyA+PGE+wr9ZYSB0aWVuZXMgdW5hIGN1ZW50YT8gSW5ncmVzYSBhcXXDrS48L2E+PC9MaW5rPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0cmFyVXN1YXJpbyJdLCJzb3VyY2VSb290IjoiIn0=