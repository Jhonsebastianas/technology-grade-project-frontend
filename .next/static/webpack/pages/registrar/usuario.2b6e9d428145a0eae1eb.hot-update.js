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
      router.push("notificacion/activar-cuenta");
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
        router.push("login");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9ybXMvdXN1YXJpby9SZWdpc3RyYXJVc3VhcmlvLmpzeCJdLCJuYW1lcyI6WyJSZWdpc3RyYXJVc3VhcmlvIiwiYm90b24iLCJzdHlsZXNHb29nbGUiLCJpbWFnZW5Hb29nbGUiLCJ1c2VUb2FzdHMiLCJhZGRUb2FzdCIsInJvdXRlciIsInVzZVJvdXRlciIsInJlZ2lzdGVyU2NoZW1hIiwiWXVwIiwic2hhcGUiLCJub21icmVzIiwidHJpbSIsIm1heCIsInJlcXVpcmVkIiwiYXBlbGxpZG9zIiwiY29ycmVvIiwiZW1haWwiLCJtaW4iLCJjbGF2ZSIsIm1hdGNoZXMiLCJyZWdpc3Rlck5ld1VzZXIiLCJ2YWx1ZXMiLCJTZXJ2aWNlcyIsIm5ld1VzZXIiLCJkYXRhIiwiYXBwZWFyYW5jZSIsInB1c2giLCJlcnJvciIsInJlc3BvbnNlIiwic3RhdHVzIiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsInZhbGlkYXRpb25TY2hlbWEiLCJvblN1Ym1pdCIsInJlc3B1ZXN0YUdvb2dsZSIsImNvbnNvbGUiLCJsb2ciLCJwcm9maWxlT2JqIiwiZ29vZ2xlVXNlciIsImdpdmVuTmFtZSIsImZhbWlseU5hbWUiLCJnb29nbGVJZCIsIm5ld0dvb2dsZVVzZXIiLCJhdXRvRGlzbWlzcyIsImhhbmRsZVN1Ym1pdCIsImdldEZpZWxkUHJvcHMiLCJ0b3VjaGVkIiwiZXJyb3JzIiwid2lkdGgiLCJpc1ZhbGlkIiwicmVuZGVyUHJvcHMiLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFBQTs7QUFBQSxNQUVuQkMs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QUUsZ0JBQUFDLFdBQVc7QUFBQSw0QkFDZjtBQUFRLG1CQUFTLEVBQUVuRCxLQUFuQjtBQUEwQixpQkFBTyxFQUFFbUQsV0FBVyxDQUFDQyxPQUEvQztBQUF3RCxrQkFBUSxFQUFFRCxXQUFXLENBQUNFLFFBQTlFO0FBQUEsa0NBQ0kscUVBQUMsaURBQUQ7QUFDSSxlQUFHLEVBQUMsYUFEUjtBQUVJLGVBQUcsRUFBQyxvQkFGUjtBQUdJLGlCQUFLLEVBQUMsTUFIVjtBQUlJLGtCQUFNLEVBQUMsTUFKWDtBQUtJLHFCQUFTLEVBQUVuRDtBQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURlO0FBQUEsT0FGdkI7QUFhSSxlQUFTLEVBQUVpQyxlQWJmO0FBY0ksZUFBUyxFQUFFQSxlQWRmO0FBZUksa0JBQVksRUFBRTtBQWZsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckJKLGVBc0NJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0Q0osZUF1Q0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXZDSixlQXdDSSxxRUFBQyxnREFBRDtBQUFNLGVBQVMsRUFBQyxTQUFoQjtBQUEwQixVQUFJLEVBQUMsUUFBL0I7QUFBQSw2QkFBeUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTRDSCxDQWpJRDs7R0FBTXBDLGdCO1VBR21CSSxvRSxFQUNORyxxRCxFQXNDQXlCLGdEOzs7S0ExQ2JoQyxnQjtBQW1JU0EsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0cmFyL3VzdWFyaW8uMmI2ZTlkNDI4MTQ1YTBlYWUxZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xyXG5pbXBvcnQgeyBHb29nbGVMb2dpbiB9IGZyb20gJ3JlYWN0LWdvb2dsZS1sb2dpbic7XHJcbmltcG9ydCB7IEJ1dHRvbiwgVGV4dElucHV0IH0gZnJvbSAncmVhY3QtbWF0ZXJpYWxpemUnO1xyXG5pbXBvcnQgeyB1c2VUb2FzdHMgfSBmcm9tICdyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zJztcclxuaW1wb3J0IFNlcnZpY2VzIGZyb20gJ0BzZXJ2aWNlcy9zZXJ2aWNpb3NSZWdpc3RybydcclxuaW1wb3J0IHsgUGFzc3dvcmRGaWVsZCB9IGZyb20gJ0Bjb21wb25lbnRzL2NvbW1vbnMvaW5wdXRzL3Bhc3N3b3JkL1Bhc3N3b3JkRmllbGQnXHJcbmltcG9ydCBzdHlsZXNHb29nbGUgZnJvbSAnQHN0eWxlcy9tb2R1bGVzL3N0eWxlc0dvb2dsZS5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgUmVnaXN0cmFyVXN1YXJpbyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB7IGJvdG9uLCBpbWFnZW5Hb29nbGUgfSA9IHN0eWxlc0dvb2dsZTtcclxuICAgIGNvbnN0IHsgYWRkVG9hc3QgfSA9IHVzZVRvYXN0cygpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBjb25zdCByZWdpc3RlclNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgICAgICAgbm9tYnJlczogWXVwLnN0cmluZygpLnRyaW0oKVxyXG4gICAgICAgICAgICAubWF4KDYwLCAnTcOheGltbyA2MCBjYXJhY3RlcmVzJylcclxuICAgICAgICAgICAgLnJlcXVpcmVkKCdFc3RlIGNhbXBvIGVzIG9ibGlnYXRvcmlvJyksXHJcbiAgICAgICAgYXBlbGxpZG9zOiBZdXAuc3RyaW5nKCkudHJpbSgpXHJcbiAgICAgICAgICAgIC5tYXgoNjAsICdNw6F4aW1vIDYwIGNhcmFjdGVyZXMnKVxyXG4gICAgICAgICAgICAucmVxdWlyZWQoJ0VzdGUgY2FtcG8gZXMgb2JsaWdhdG9yaW8nKSxcclxuICAgICAgICBjb3JyZW86IFl1cC5zdHJpbmcoKS50cmltKClcclxuICAgICAgICAgICAgLnJlcXVpcmVkKCdFc3RlIGNhbXBvIGVzIG9ibGlnYXRvcmlvJylcclxuICAgICAgICAgICAgLmVtYWlsKCdDb3JyZW8gZWxlY3Ryb25pY28gaW52YWxpZG8nKVxyXG4gICAgICAgICAgICAubWluKDUsICdNw61uaW1vIDUgY2FyYWN0ZXJlcycpLFxyXG4gICAgICAgIGNsYXZlOiBZdXAuc3RyaW5nKClcclxuICAgICAgICAgICAgLnJlcXVpcmVkKCdFc3RlIGNhbXBvIGVzIG9ibGlnYXRvcmlvJylcclxuICAgICAgICAgICAgLm1hdGNoZXMoJ14oPz1cXFxcdypcXFxcZCkoPz1cXFxcdypbQS1aXSkoPz1cXFxcdypbYS16XSlcXFxcU3s4LDIwfSQnLCAnTGEgY2xhdmUgZGViZSB0ZW5lciBhbCBlbnRyZSA4IHkgMjAgY2FyYWN0ZXJlcywgdW4gZMOtZ2l0bywgdW5hIGxldHJhIG1pbsO6c2N1bGEgeSB1bmEgbGV0cmEgbWF5w7pzY3VsYS4nKVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVnaXN0ZXJOZXdVc2VyID0gKHZhbHVlcykgPT4ge1xyXG4gICAgICAgIFNlcnZpY2VzLm5ld1VzZXIodmFsdWVzLCAoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgYWRkVG9hc3QoJ8KhVXN1YXJpbyByZWdpc3RyYWRvIGNvbiBleGl0byEnLCB7IGFwcGVhcmFuY2U6ICdzdWNjZXNzJyB9KTtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goXCJub3RpZmljYWNpb24vYWN0aXZhci1jdWVudGFcIik7XHJcbiAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IGVycm9yLnJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gNDA5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoJ0N1ZW50YSBhY3R1YWxtZW50ZSBleGlzdGVudGUnLCB7IGFwcGVhcmFuY2U6ICdpbmZvJyB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSA0MjIpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCgnVmFsaWRhIGxhIGluZm9ybWFjacOzbiwgcG9yIGZhdm9yJywgeyBhcHBlYXJhbmNlOiAnd2FybmluZycgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoJ29oIG5vIDooLCBubyBlcmVzIHTDuiBzb21vcyBub3NvdHJvcywgYWxnbyBhIGlkbyBtYWwnLCB7IGFwcGVhcmFuY2U6ICdlcnJvcicgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCgnb2ggbm8gOigsIG5vIGVyZXMgdMO6IHNvbW9zIG5vc290cm9zLCBhbGdvIGEgaWRvIG1hbCcsIHsgYXBwZWFyYW5jZTogJ2Vycm9yJyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XHJcbiAgICAgICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICAgICAgICBub21icmVzOiAnJyxcclxuICAgICAgICAgICAgYXBlbGxpZG9zOiAnJyxcclxuICAgICAgICAgICAgY29ycmVvOiAnJyxcclxuICAgICAgICAgICAgY2xhdmU6ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYTogcmVnaXN0ZXJTY2hlbWEsXHJcbiAgICAgICAgb25TdWJtaXQ6IHJlZ2lzdGVyTmV3VXNlcixcclxuICAgIH0pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2luZyB1cCB3aXRoIGdvb2dsZVxyXG4gICAgICovXHJcbiAgICBjb25zdCByZXNwdWVzdGFHb29nbGUgPSAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5wcm9maWxlT2JqKTtcclxuICAgICAgICBpZiAocmVzcG9uc2UucHJvZmlsZU9iaikge1xyXG4gICAgICAgICAgICBjb25zdCBnb29nbGVVc2VyID0ge1xyXG4gICAgICAgICAgICAgICAgbm9tYnJlczogcmVzcG9uc2UucHJvZmlsZU9iai5naXZlbk5hbWUsXHJcbiAgICAgICAgICAgICAgICBhcGVsbGlkb3M6IHJlc3BvbnNlLnByb2ZpbGVPYmouZmFtaWx5TmFtZSxcclxuICAgICAgICAgICAgICAgIGNvcnJlbzogcmVzcG9uc2UucHJvZmlsZU9iai5lbWFpbCxcclxuICAgICAgICAgICAgICAgIGdvb2dsZUlkOiByZXNwb25zZS5wcm9maWxlT2JqLmdvb2dsZUlkLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBTZXJ2aWNlcy5uZXdHb29nbGVVc2VyKGdvb2dsZVVzZXIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCfCoVVzdWFyaW8gcmVnaXN0cmFkbyB5IHZlcmlmaWNhZG8gY29uIGV4aXRvIScsIHsgYXBwZWFyYW5jZTogJ3N1Y2Nlc3MnLCBhdXRvRGlzbWlzczogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwibG9naW5cIik7XHJcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IGVycm9yLnJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDQwOSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCgnQ3VlbnRhIGFjdHVhbG1lbnRlIGV4aXN0ZW50ZScsIHsgYXBwZWFyYW5jZTogJ2luZm8nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSA0MjIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoJ1ZhbGlkYSBsYSBpbmZvcm1hY2nDs24sIHBvciBmYXZvcicsIHsgYXBwZWFyYW5jZTogJ3dhcm5pbmcnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSA1MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoJ29oIG5vIDooLCBubyBlcmVzIHTDuiBzb21vcyBub3NvdHJvcywgYWxnbyBhIGlkbyBtYWwnLCB7IGFwcGVhcmFuY2U6ICdlcnJvcicgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCgnb2ggbm8gOigsIG5vIGVyZXMgdMO6IHNvbW9zIG5vc290cm9zLCBhbGdvIGEgaWRvIG1hbCcsIHsgYXBwZWFyYW5jZTogJ2Vycm9yJyB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJz5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNlbnRlclwiPjxzdHJvbmc+Q3JlYXI8L3N0cm9uZz4gdW5hIGN1ZW50YS48L2gyPlxyXG4gICAgICAgICAgICA8VGV4dElucHV0IGxhYmVsPSdOb21icmVzOicgbmFtZT1cIm5vbWJyZXNcIiBpZD0nbm9tYnJlcydcclxuICAgICAgICAgICAgICAgIHsuLi5mb3JtaWsuZ2V0RmllbGRQcm9wcygnbm9tYnJlcycpfVxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW49e2Zvcm1pay50b3VjaGVkLm5vbWJyZXMgJiYgZm9ybWlrLmVycm9ycy5ub21icmVzID8gKDxzcGFuIGNsYXNzTmFtZT1cImhlbHBlci10ZXh0IHJlZC10ZXh0XCI+e2Zvcm1pay5lcnJvcnMubm9tYnJlc308L3NwYW4+KSA6IG51bGx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0SW5wdXQgbGFiZWw9J0FwZWxsaWRvczonIG5hbWU9XCJhcGVsbGlkb3NcIiBpZD0nYXBlbGxpZG9zJ1xyXG4gICAgICAgICAgICAgICAgey4uLmZvcm1pay5nZXRGaWVsZFByb3BzKCdhcGVsbGlkb3MnKX1cclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuPXtmb3JtaWsudG91Y2hlZC5hcGVsbGlkb3MgJiYgZm9ybWlrLmVycm9ycy5hcGVsbGlkb3MgPyAoPHNwYW4gY2xhc3NOYW1lPVwiaGVscGVyLXRleHQgcmVkLXRleHRcIj57Zm9ybWlrLmVycm9ycy5hcGVsbGlkb3N9PC9zcGFuPikgOiBudWxsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dElucHV0IGxhYmVsPSdDb3JyZW86JyBlbWFpbCBuYW1lPVwiY29ycmVvXCIgaWQ9J2NvcnJlbydcclxuICAgICAgICAgICAgICAgIHsuLi5mb3JtaWsuZ2V0RmllbGRQcm9wcygnY29ycmVvJyl9XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbj17Zm9ybWlrLnRvdWNoZWQuY29ycmVvICYmIGZvcm1pay5lcnJvcnMuY29ycmVvID8gKDxzcGFuIGNsYXNzTmFtZT1cImhlbHBlci10ZXh0IHJlZC10ZXh0XCI+e2Zvcm1pay5lcnJvcnMuY29ycmVvfTwvc3Bhbj4pIDogbnVsbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFBhc3N3b3JkRmllbGQgbGFiZWw9J0NsYXZlOicgbmFtZT0nY2xhdmUnIGlkPSdjbGF2ZScgcz17MTJ9IG09ezV9IGw9ezV9XHJcbiAgICAgICAgICAgICAgICB7Li4uZm9ybWlrLmdldEZpZWxkUHJvcHMoJ2NsYXZlJyl9XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbj17Zm9ybWlrLnRvdWNoZWQuY2xhdmUgJiYgZm9ybWlrLmVycm9ycy5jbGF2ZSA/ICg8c3BhbiBjbGFzc05hbWU9XCJoZWxwZXItdGV4dCByZWQtdGV4dFwiPntmb3JtaWsuZXJyb3JzLmNsYXZlfTwvc3Bhbj4pIDogbnVsbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0gdHlwZT0nc3VibWl0JyBkaXNhYmxlZD17IWZvcm1pay5pc1ZhbGlkfSA+XHJcbiAgICAgICAgICAgICAgICBSZWdpc3RyYXJzZVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxHb29nbGVMb2dpblxyXG4gICAgICAgICAgICAgICAgY2xpZW50SWQ9XCIzMTk4MzI3NTc4OC01OTdzbG5xYm5xNzFwNDVxYWprMjdtNzE4dnFqMTNwcS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiXHJcbiAgICAgICAgICAgICAgICByZW5kZXI9e3JlbmRlclByb3BzID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Ym90b259IG9uQ2xpY2s9e3JlbmRlclByb3BzLm9uQ2xpY2t9IGRpc2FibGVkPXtyZW5kZXJQcm9wcy5kaXNhYmxlZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiZ29vZ2xlIGljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScvaW1hZ2VzL2dvb2dsZS5zdmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2ltYWdlbkdvb2dsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVnaXN0cmF0ZSBjb24gR29vZ2xlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzPXtyZXNwdWVzdGFHb29nbGV9XHJcbiAgICAgICAgICAgICAgICBvbkZhaWx1cmU9e3Jlc3B1ZXN0YUdvb2dsZX1cclxuICAgICAgICAgICAgICAgIGNvb2tpZVBvbGljeT17J3NpbmdsZV9ob3N0X29yaWdpbid9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYWxyZWFkeVwiIGhyZWY9Jy9sb2dpbicgPjxhPsK/WWEgdGllbmVzIHVuYSBjdWVudGE/IEluZ3Jlc2EgYXF1w60uPC9hPjwvTGluaz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhclVzdWFyaW8iXSwic291cmNlUm9vdCI6IiJ9