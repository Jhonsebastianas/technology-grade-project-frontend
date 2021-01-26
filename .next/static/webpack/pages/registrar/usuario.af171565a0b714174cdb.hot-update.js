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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9ybXMvdXN1YXJpby9SZWdpc3RyYXJVc3VhcmlvLmpzeCJdLCJuYW1lcyI6WyJSZWdpc3RyYXJVc3VhcmlvIiwiYm90b24iLCJzdHlsZXNHb29nbGUiLCJpbWFnZW5Hb29nbGUiLCJ1c2VUb2FzdHMiLCJhZGRUb2FzdCIsInJvdXRlciIsInVzZVJvdXRlciIsInJlZ2lzdGVyU2NoZW1hIiwiWXVwIiwic2hhcGUiLCJub21icmVzIiwidHJpbSIsIm1heCIsInJlcXVpcmVkIiwiYXBlbGxpZG9zIiwiY29ycmVvIiwiZW1haWwiLCJtaW4iLCJjbGF2ZSIsIm1hdGNoZXMiLCJyZWdpc3Rlck5ld1VzZXIiLCJ2YWx1ZXMiLCJTZXJ2aWNlcyIsIm5ld1VzZXIiLCJkYXRhIiwiYXBwZWFyYW5jZSIsInB1c2giLCJlcnJvciIsInJlc3BvbnNlIiwic3RhdHVzIiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsInZhbGlkYXRpb25TY2hlbWEiLCJvblN1Ym1pdCIsInJlc3B1ZXN0YUdvb2dsZSIsImNvbnNvbGUiLCJsb2ciLCJwcm9maWxlT2JqIiwiZ29vZ2xlVXNlciIsImdpdmVuTmFtZSIsImZhbWlseU5hbWUiLCJnb29nbGVJZCIsIm5ld0dvb2dsZVVzZXIiLCJhdXRvRGlzbWlzcyIsImhpc3RvcnkiLCJoYW5kbGVTdWJtaXQiLCJnZXRGaWVsZFByb3BzIiwidG91Y2hlZCIsImVycm9ycyIsIndpZHRoIiwiaXNWYWxpZCIsInJlbmRlclByb3BzIiwib25DbGljayIsImRpc2FibGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQUE7O0FB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QUVJLFlBQU0sRUFBRSxnQkFBQUMsV0FBVztBQUFBLDRCQUNmO0FBQVEsbUJBQVMsRUFBRXBELEtBQW5CO0FBQTBCLGlCQUFPLEVBQUVvRCxXQUFXLENBQUNDLE9BQS9DO0FBQXdELGtCQUFRLEVBQUVELFdBQVcsQ0FBQ0UsUUFBOUU7QUFBQSxrQ0FDSSxxRUFBQyxpREFBRDtBQUNJLGVBQUcsRUFBQyxhQURSO0FBRUksZUFBRyxFQUFDLG9CQUZSO0FBR0ksaUJBQUssRUFBQyxNQUhWO0FBSUksa0JBQU0sRUFBQyxNQUpYO0FBS0kscUJBQVMsRUFBRXBEO0FBTGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGU7QUFBQSxPQUZ2QjtBQWFJLGVBQVMsRUFBRWlDLGVBYmY7QUFjSSxlQUFTLEVBQUVBLGVBZGY7QUFlSSxrQkFBWSxFQUFFO0FBZmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQkosZUFzQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRDSixlQXVDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdkNKLGVBd0NJLHFFQUFDLGdEQUFEO0FBQU0sZUFBUyxFQUFDLFNBQWhCO0FBQTBCLFVBQUksRUFBQyxRQUEvQjtBQUFBLDZCQUF5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBeENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBNENILENBaklEOztHQUFNcEMsZ0I7VUFHbUJJLG9FLEVBQ05HLHFELEVBc0NBeUIsZ0Q7OztLQTFDYmhDLGdCO0FBbUlTQSwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3RyYXIvdXN1YXJpby5hZjE3MTU2NWEwYjcxNDE3NGNkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XHJcbmltcG9ydCB7IEdvb2dsZUxvZ2luIH0gZnJvbSAncmVhY3QtZ29vZ2xlLWxvZ2luJztcclxuaW1wb3J0IHsgQnV0dG9uLCBUZXh0SW5wdXQgfSBmcm9tICdyZWFjdC1tYXRlcmlhbGl6ZSc7XHJcbmltcG9ydCB7IHVzZVRvYXN0cyB9IGZyb20gJ3JlYWN0LXRvYXN0LW5vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgU2VydmljZXMgZnJvbSAnQHNlcnZpY2VzL3NlcnZpY2lvc1JlZ2lzdHJvJ1xyXG5pbXBvcnQgeyBQYXNzd29yZEZpZWxkIH0gZnJvbSAnQGNvbXBvbmVudHMvY29tbW9ucy9pbnB1dHMvcGFzc3dvcmQvUGFzc3dvcmRGaWVsZCdcclxuaW1wb3J0IHN0eWxlc0dvb2dsZSBmcm9tICdAc3R5bGVzL21vZHVsZXMvc3R5bGVzR29vZ2xlLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBSZWdpc3RyYXJVc3VhcmlvID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgYm90b24sIGltYWdlbkdvb2dsZSB9ID0gc3R5bGVzR29vZ2xlO1xyXG4gICAgY29uc3QgeyBhZGRUb2FzdCB9ID0gdXNlVG9hc3RzKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGNvbnN0IHJlZ2lzdGVyU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICAgICAgICBub21icmVzOiBZdXAuc3RyaW5nKCkudHJpbSgpXHJcbiAgICAgICAgICAgIC5tYXgoNjAsICdNw6F4aW1vIDYwIGNhcmFjdGVyZXMnKVxyXG4gICAgICAgICAgICAucmVxdWlyZWQoJ0VzdGUgY2FtcG8gZXMgb2JsaWdhdG9yaW8nKSxcclxuICAgICAgICBhcGVsbGlkb3M6IFl1cC5zdHJpbmcoKS50cmltKClcclxuICAgICAgICAgICAgLm1heCg2MCwgJ03DoXhpbW8gNjAgY2FyYWN0ZXJlcycpXHJcbiAgICAgICAgICAgIC5yZXF1aXJlZCgnRXN0ZSBjYW1wbyBlcyBvYmxpZ2F0b3JpbycpLFxyXG4gICAgICAgIGNvcnJlbzogWXVwLnN0cmluZygpLnRyaW0oKVxyXG4gICAgICAgICAgICAucmVxdWlyZWQoJ0VzdGUgY2FtcG8gZXMgb2JsaWdhdG9yaW8nKVxyXG4gICAgICAgICAgICAuZW1haWwoJ0NvcnJlbyBlbGVjdHJvbmljbyBpbnZhbGlkbycpXHJcbiAgICAgICAgICAgIC5taW4oNSwgJ03DrW5pbW8gNSBjYXJhY3RlcmVzJyksXHJcbiAgICAgICAgY2xhdmU6IFl1cC5zdHJpbmcoKVxyXG4gICAgICAgICAgICAucmVxdWlyZWQoJ0VzdGUgY2FtcG8gZXMgb2JsaWdhdG9yaW8nKVxyXG4gICAgICAgICAgICAubWF0Y2hlcygnXig/PVxcXFx3KlxcXFxkKSg/PVxcXFx3KltBLVpdKSg/PVxcXFx3KlthLXpdKVxcXFxTezgsMjB9JCcsICdMYSBjbGF2ZSBkZWJlIHRlbmVyIGFsIGVudHJlIDggeSAyMCBjYXJhY3RlcmVzLCB1biBkw61naXRvLCB1bmEgbGV0cmEgbWluw7pzY3VsYSB5IHVuYSBsZXRyYSBtYXnDunNjdWxhLicpXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZWdpc3Rlck5ld1VzZXIgPSAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgU2VydmljZXMubmV3VXNlcih2YWx1ZXMsICh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICBhZGRUb2FzdCgnwqFVc3VhcmlvIHJlZ2lzdHJhZG8gY29uIGV4aXRvIScsIHsgYXBwZWFyYW5jZTogJ3N1Y2Nlc3MnIH0pO1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIm5vdGlmaWNhY2lvbi9hY3RpdmFyLWN1ZW50YVwiKTtcclxuICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IHN0YXR1cyB9ID0gZXJyb3IucmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSA0MDkpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCgnQ3VlbnRhIGFjdHVhbG1lbnRlIGV4aXN0ZW50ZScsIHsgYXBwZWFyYW5jZTogJ2luZm8nIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQyMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCdWYWxpZGEgbGEgaW5mb3JtYWNpw7NuLCBwb3IgZmF2b3InLCB7IGFwcGVhcmFuY2U6ICd3YXJuaW5nJyB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSA1MDApIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCgnb2ggbm8gOigsIG5vIGVyZXMgdMO6IHNvbW9zIG5vc290cm9zLCBhbGdvIGEgaWRvIG1hbCcsIHsgYXBwZWFyYW5jZTogJ2Vycm9yJyB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCdvaCBubyA6KCwgbm8gZXJlcyB0w7ogc29tb3Mgbm9zb3Ryb3MsIGFsZ28gYSBpZG8gbWFsJywgeyBhcHBlYXJhbmNlOiAnZXJyb3InIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcclxuICAgICAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgICAgICAgIG5vbWJyZXM6ICcnLFxyXG4gICAgICAgICAgICBhcGVsbGlkb3M6ICcnLFxyXG4gICAgICAgICAgICBjb3JyZW86ICcnLFxyXG4gICAgICAgICAgICBjbGF2ZTogJycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hOiByZWdpc3RlclNjaGVtYSxcclxuICAgICAgICBvblN1Ym1pdDogcmVnaXN0ZXJOZXdVc2VyLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaW5nIHVwIHdpdGggZ29vZ2xlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHJlc3B1ZXN0YUdvb2dsZSA9IChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnByb2ZpbGVPYmopO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5wcm9maWxlT2JqKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdvb2dsZVVzZXIgPSB7XHJcbiAgICAgICAgICAgICAgICBub21icmVzOiByZXNwb25zZS5wcm9maWxlT2JqLmdpdmVuTmFtZSxcclxuICAgICAgICAgICAgICAgIGFwZWxsaWRvczogcmVzcG9uc2UucHJvZmlsZU9iai5mYW1pbHlOYW1lLFxyXG4gICAgICAgICAgICAgICAgY29ycmVvOiByZXNwb25zZS5wcm9maWxlT2JqLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgZ29vZ2xlSWQ6IHJlc3BvbnNlLnByb2ZpbGVPYmouZ29vZ2xlSWQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIFNlcnZpY2VzLm5ld0dvb2dsZVVzZXIoZ29vZ2xlVXNlciwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoJ8KhVXN1YXJpbyByZWdpc3RyYWRvIHkgdmVyaWZpY2FkbyBjb24gZXhpdG8hJywgeyBhcHBlYXJhbmNlOiAnc3VjY2VzcycsIGF1dG9EaXNtaXNzOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgaGlzdG9yeS5wdXNoKFwibG9naW5cIik7XHJcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IGVycm9yLnJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDQwOSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCgnQ3VlbnRhIGFjdHVhbG1lbnRlIGV4aXN0ZW50ZScsIHsgYXBwZWFyYW5jZTogJ2luZm8nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSA0MjIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoJ1ZhbGlkYSBsYSBpbmZvcm1hY2nDs24sIHBvciBmYXZvcicsIHsgYXBwZWFyYW5jZTogJ3dhcm5pbmcnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSA1MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoJ29oIG5vIDooLCBubyBlcmVzIHTDuiBzb21vcyBub3NvdHJvcywgYWxnbyBhIGlkbyBtYWwnLCB7IGFwcGVhcmFuY2U6ICdlcnJvcicgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCgnb2ggbm8gOigsIG5vIGVyZXMgdMO6IHNvbW9zIG5vc290cm9zLCBhbGdvIGEgaWRvIG1hbCcsIHsgYXBwZWFyYW5jZTogJ2Vycm9yJyB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJz5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNlbnRlclwiPjxzdHJvbmc+Q3JlYXI8L3N0cm9uZz4gdW5hIGN1ZW50YS48L2gyPlxyXG4gICAgICAgICAgICA8VGV4dElucHV0IGxhYmVsPSdOb21icmVzOicgbmFtZT1cIm5vbWJyZXNcIiBpZD0nbm9tYnJlcydcclxuICAgICAgICAgICAgICAgIHsuLi5mb3JtaWsuZ2V0RmllbGRQcm9wcygnbm9tYnJlcycpfVxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW49e2Zvcm1pay50b3VjaGVkLm5vbWJyZXMgJiYgZm9ybWlrLmVycm9ycy5ub21icmVzID8gKDxzcGFuIGNsYXNzTmFtZT1cImhlbHBlci10ZXh0IHJlZC10ZXh0XCI+e2Zvcm1pay5lcnJvcnMubm9tYnJlc308L3NwYW4+KSA6IG51bGx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0SW5wdXQgbGFiZWw9J0FwZWxsaWRvczonIG5hbWU9XCJhcGVsbGlkb3NcIiBpZD0nYXBlbGxpZG9zJ1xyXG4gICAgICAgICAgICAgICAgey4uLmZvcm1pay5nZXRGaWVsZFByb3BzKCdhcGVsbGlkb3MnKX1cclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuPXtmb3JtaWsudG91Y2hlZC5hcGVsbGlkb3MgJiYgZm9ybWlrLmVycm9ycy5hcGVsbGlkb3MgPyAoPHNwYW4gY2xhc3NOYW1lPVwiaGVscGVyLXRleHQgcmVkLXRleHRcIj57Zm9ybWlrLmVycm9ycy5hcGVsbGlkb3N9PC9zcGFuPikgOiBudWxsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dElucHV0IGxhYmVsPSdDb3JyZW86JyBlbWFpbCBuYW1lPVwiY29ycmVvXCIgaWQ9J2NvcnJlbydcclxuICAgICAgICAgICAgICAgIHsuLi5mb3JtaWsuZ2V0RmllbGRQcm9wcygnY29ycmVvJyl9XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbj17Zm9ybWlrLnRvdWNoZWQuY29ycmVvICYmIGZvcm1pay5lcnJvcnMuY29ycmVvID8gKDxzcGFuIGNsYXNzTmFtZT1cImhlbHBlci10ZXh0IHJlZC10ZXh0XCI+e2Zvcm1pay5lcnJvcnMuY29ycmVvfTwvc3Bhbj4pIDogbnVsbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFBhc3N3b3JkRmllbGQgbGFiZWw9J0NsYXZlOicgbmFtZT0nY2xhdmUnIGlkPSdjbGF2ZScgcz17MTJ9IG09ezV9IGw9ezV9XHJcbiAgICAgICAgICAgICAgICB7Li4uZm9ybWlrLmdldEZpZWxkUHJvcHMoJ2NsYXZlJyl9XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbj17Zm9ybWlrLnRvdWNoZWQuY2xhdmUgJiYgZm9ybWlrLmVycm9ycy5jbGF2ZSA/ICg8c3BhbiBjbGFzc05hbWU9XCJoZWxwZXItdGV4dCByZWQtdGV4dFwiPntmb3JtaWsuZXJyb3JzLmNsYXZlfTwvc3Bhbj4pIDogbnVsbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0gdHlwZT0nc3VibWl0JyBkaXNhYmxlZD17IWZvcm1pay5pc1ZhbGlkfSA+XHJcbiAgICAgICAgICAgICAgICBSZWdpc3RyYXJzZVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxHb29nbGVMb2dpblxyXG4gICAgICAgICAgICAgICAgY2xpZW50SWQ9XCIzMTk4MzI3NTc4OC01OTdzbG5xYm5xNzFwNDVxYWprMjdtNzE4dnFqMTNwcS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiXHJcbiAgICAgICAgICAgICAgICByZW5kZXI9e3JlbmRlclByb3BzID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Ym90b259IG9uQ2xpY2s9e3JlbmRlclByb3BzLm9uQ2xpY2t9IGRpc2FibGVkPXtyZW5kZXJQcm9wcy5kaXNhYmxlZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiZ29vZ2xlIGljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScvaW1hZ2VzL2dvb2dsZS5zdmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2ltYWdlbkdvb2dsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVnaXN0cmF0ZSBjb24gR29vZ2xlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzPXtyZXNwdWVzdGFHb29nbGV9XHJcbiAgICAgICAgICAgICAgICBvbkZhaWx1cmU9e3Jlc3B1ZXN0YUdvb2dsZX1cclxuICAgICAgICAgICAgICAgIGNvb2tpZVBvbGljeT17J3NpbmdsZV9ob3N0X29yaWdpbid9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYWxyZWFkeVwiIGhyZWY9Jy9sb2dpbicgPjxhPsK/WWEgdGllbmVzIHVuYSBjdWVudGE/IEluZ3Jlc2EgYXF1w60uPC9hPjwvTGluaz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhclVzdWFyaW8iXSwic291cmNlUm9vdCI6IiJ9