(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"dashboard-dashboard-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-errors/app-error-handler.ts":
/*!*************************************************!*\
  !*** ./src/app/app-errors/app-error-handler.ts ***!
  \*************************************************/
/*! exports provided: AppErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppErrorHandler", function() { return AppErrorHandler; });
var AppErrorHandler = /** @class */ (function () {
    function AppErrorHandler() {
    }
    AppErrorHandler.prototype.handleError = function (error) {
        alert('An expected error occured :' + error);
        //    console.log(error);
    };
    return AppErrorHandler;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<app-toast-messages></app-toast-messages>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _app_errors_app_error_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-errors/app-error-handler */ "./src/app/app-errors/app-error-handler.ts");
/* harmony import */ var _shared_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/app.routing.module */ "./src/app/shared/app.routing.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _entities_entities_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./entities/entities.module */ "./src/app/entities/entities.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/admin-auth-guard.service */ "./src/app/services/admin-auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// import { Store, StoreModule } from '@ngrx/store';







// import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            exports: [],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCollapseModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["NoopAnimationsModule"],
                _entities_entities_module__WEBPACK_IMPORTED_MODULE_14__["EntitiesModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _shared_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                // StoreModule.forRoot({principal: principalReducer}),
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["LayoutModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
                    useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__["AuthInterceptor"],
                    multi: true },
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__["CookieService"],
                // JwtHelperService,
                _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"],
                _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AdminAuthGuard"],
                // Store
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ErrorHandler"], useClass: _app_errors_app_error_handler__WEBPACK_IMPORTED_MODULE_1__["AppErrorHandler"]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor, httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { CookieService } from 'ngx-cookie-service';
// on peut construire notre propre service de gestion des cookies


var TOKEN_HEADER_KEY = 'Authorization';
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(token) {
        this.token = token;
        this.refreshTokenInProgress = false;
        // Refresh Token Subject tracks the current token, or is null if no token is currently
        // available (e.g. refresh pending).
        this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authReq = req;
        var token = this.token.getToken();
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, "Bearer " + token) });
        }
        return next.handle(authReq);
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());

var httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: AuthInterceptor, multi: true }
];


/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _config_app_url_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/app.url.config */ "./src/app/config/app.url.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AuthService = /** @class */ (function () {
    function AuthService(http, tokenService, router) {
        this.http = http;
        this.tokenService = tokenService;
        this.router = router;
        this.loggedIn = false;
    }
    AuthService.prototype.login = function (credentials) {
        // on pourrait utiliser des credentials non types comme JSON.stringify(credentials)
        return this.http.post(_config_app_url_config__WEBPACK_IMPORTED_MODULE_0__["API_URLS"].SINGNING_URL, credentials, httpOptions);
    };
    AuthService.prototype.logout = function () {
        this.tokenService.signOut();
    };
    AuthService.prototype.isLoggedIn = function () {
        // create an instance of jwthelper
        var jwtHelperService = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
        // get the token from the local storage
        var token = localStorage.getItem('AuthToken');
        // const expirationDate = jwtHelperService.getTokenExpirationDate(token);
        var isExpired = jwtHelperService.isTokenExpired(token);
        if (!token || isExpired) {
            return false;
        }
        else {
            //  const decodedToken = jwtHelperService.decodeToken(token);
            return !isExpired;
        }
    };
    AuthService.prototype.decodeUserFromToken = function (token) {
        return new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]().decodeToken(token);
    };
    AuthService.prototype.signUp = function (info) {
        return this.http.post(_config_app_url_config__WEBPACK_IMPORTED_MODULE_0__["API_URLS"].SINGNUP_URL, info, httpOptions);
    };
    AuthService.prototype.isAdmin = function () {
        // get the roles from local storage or state management
        var roles = this.tokenService.getAuthorities();
        if (roles.find(function (r) { return r['authority'] === 'ROLE_ADMIN'; })) {
            return true;
        }
        else {
            //  this.router.navigate(['/access-denied']);
            return false;
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login-info.ts":
/*!************************************!*\
  !*** ./src/app/auth/login-info.ts ***!
  \************************************/
/*! exports provided: AuthLoginInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLoginInfo", function() { return AuthLoginInfo; });
var AuthLoginInfo = /** @class */ (function () {
    function AuthLoginInfo(username, password) {
        this.username = username;
        this.password = password;
    }
    return AuthLoginInfo;
}());



/***/ }),

/***/ "./src/app/auth/sigup-info.ts":
/*!************************************!*\
  !*** ./src/app/auth/sigup-info.ts ***!
  \************************************/
/*! exports provided: SignUpInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpInfo", function() { return SignUpInfo; });
var SignUpInfo = /** @class */ (function () {
    function SignUpInfo(name, username, email, password, role) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
    }
    return SignUpInfo;
}());



/***/ }),

/***/ "./src/app/auth/token-storage.service.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/token-storage.service.ts ***!
  \***********************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TOKEN_KEY = 'AuthToken';
var USERNAME_KEY = 'AuthUsername';
var AUTHORITIES_KEY = 'AuthAuthorities';
var TokenStorageService = /** @class */ (function () {
    function TokenStorageService() {
        this.roles = [];
    }
    TokenStorageService.prototype.signOut = function () {
        // window.sessionStorage.clear();
        localStorage.clear();
    };
    TokenStorageService.prototype.saveToken = function (token) {
        // window.sessionStorage.removeItem(TOKEN_KEY);
        // window.sessionStorage.setItem(TOKEN_KEY, token);
        localStorage.removeItem(TOKEN_KEY);
        localStorage.setItem(TOKEN_KEY, token);
    };
    TokenStorageService.prototype.getToken = function () {
        // return sessionStorage.getItem(TOKEN_KEY);
        if (localStorage.getItem(TOKEN_KEY)) {
            return localStorage.getItem(TOKEN_KEY);
        }
    };
    TokenStorageService.prototype.saveUsername = function (username) {
        // window.sessionStorage.removeItem(USERNAME_KEY);
        // window.sessionStorage.setItem(USERNAME_KEY, username);
        localStorage.removeItem(USERNAME_KEY);
        localStorage.setItem(USERNAME_KEY, username);
    };
    TokenStorageService.prototype.getUsername = function () {
        // return sessionStorage.getItem(USERNAME_KEY);
        return localStorage.getItem(USERNAME_KEY);
    };
    TokenStorageService.prototype.saveAuthorities = function (authorities) {
        // window.sessionStorage.removeItem(AUTHORITIES_KEY);
        // window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
        localStorage.removeItem(AUTHORITIES_KEY);
        localStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    };
    TokenStorageService.prototype.getAuthorities = function () {
        var _this = this;
        this.roles = [];
        if (localStorage.getItem(TOKEN_KEY)) {
            // console.log(localStorage.getItem(AUTHORITIES_KEY));
            // console.log(sessionStorage.getItem(AUTHORITIES_KEY));
            JSON.parse(localStorage.getItem(AUTHORITIES_KEY)).forEach(function (authority) {
                _this.roles.push(authority);
            });
        }
        // console.log(this.roles);
        return this.roles;
    };
    TokenStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TokenStorageService);
    return TokenStorageService;
}());



/***/ }),

/***/ "./src/app/config/app.url.config.ts":
/*!******************************************!*\
  !*** ./src/app/config/app.url.config.ts ***!
  \******************************************/
/*! exports provided: API_URLS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URLS", function() { return API_URLS; });
var BASE = ''; //  'http://localhost';
var PORT = ''; //  8089;
var PATH = '/api';
var API_URLS = {
    CATEGORY_URL: BASE + PORT + PATH + '/category',
    PRODUITS_URL: BASE + PORT + PATH + '/produit',
    CLIENTS_URL: BASE + PORT + PATH + '/client',
    FOURNISSEURS_URL: BASE + PORT + PATH + '/fournisseur',
    ENTREE_URL: BASE + PORT + PATH + '/appro',
    SORTIE_URL: BASE + PORT + PATH + '/sortie',
    INVOICE_URL: BASE + PORT + PATH + '/invoice',
    TRANSALINE_URL: BASE + PORT + PATH + '/transactionLine',
    USER_URL: BASE + PORT + PATH + '/auth/all',
    SPENDINGS_URL: BASE + PORT + PATH + '/spending',
    COMPANY_URL: BASE + PORT + PATH + '/company',
    CASHBALANCE_URL: BASE + PORT + PATH + '/cash',
    PRODBALANCE_URL: BASE + PORT + PATH + '/prodBalance',
    SINGNING_URL: BASE + PORT + PATH + '/auth/signin',
    SINGNUP_URL: BASE + PORT + PATH + '/auth/signup'
};


/***/ }),

/***/ "./src/app/dashboard/components/main-content/main-content.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/components/main-content/main-content.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <p> here you are</p>\n<router-outlet></router-outlet>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/dashboard/components/main-content/main-content.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/components/main-content/main-content.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL21haW4tY29udGVudC9tYWluLWNvbnRlbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/components/main-content/main-content.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/components/main-content/main-content.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MainContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContentComponent", function() { return MainContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainContentComponent = /** @class */ (function () {
    function MainContentComponent() {
    }
    MainContentComponent.prototype.ngOnInit = function () {
    };
    MainContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-content',
            template: __webpack_require__(/*! ./main-content.component.html */ "./src/app/dashboard/components/main-content/main-content.component.html"),
            styles: [__webpack_require__(/*! ./main-content.component.scss */ "./src/app/dashboard/components/main-content/main-content.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainContentComponent);
    return MainContentComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/side-nav/side-nav.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/components/side-nav/side-nav.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-sidenav-container class=\"app-sidenav-container\" >\n  <mat-sidenav class=\"app-sidenav mat-elevation-z10\"\n  [opened]=\"!isScreenSmall()\"\n  [mode]=\"isScreenSmall() ? 'over' :'side'\"\n  mdbWavesEffect\n  style=\"background-color:rgba(37, 151, 226, 0.863);\"\n  #sidenav>\n<mat-toolbar style=\"background-color:rgba(37, 151, 226, 0.863);\" mdbWavesEffect >\n  <img src=\"/assets/yasn logo.jpeg\" id=\"company_logo\" style=\"height: 60px; width: 60px\">\n  &nbsp;Home\n</mat-toolbar>\n<mat-list >\n  <mat-nav-list *ngIf=\"authService.isLoggedIn()\">\n    <a mat-list-item  [routerLink] = [link.url] *ngFor=\" let link of links\" >\n        <i class={{link.format}}></i> {{link.name}}</a>\n    <li class=\"treeview\">\n      <a ><i class=\"fa fa-amazon\"></i> <span>Factures</span>\n        <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n      </a>\n      <ul class=\"treeview\">\n        <li>\n          <a [routerLink]=\"['invoice-create']\"> <i class=\"fa fa-circle-o\"></i> Nouvelle</a>\n        </li>\n        <li>\n          <a [routerLink]=\"['invoice-all']\"> <i class=\"fa fa-circle-o\"></i> Toutes</a>\n        </li>\n        <li>\n          <a [routerLink]=\"['invoice-display']\"> <i class=\"fa fa-circle-o\"></i> Display</a>\n        </li>\n      </ul>\n    </li>\n  </mat-nav-list>\n</mat-list>\n  </mat-sidenav >\n  <div class=\"app-sidenav-content\" >\n      <app-toolbar (toggleSidenav) = \"sidenav.toggle()\"></app-toolbar>\n      <div [ngSwitch]=\"authService.isLoggedIn()\">\n          <div class=\"mat-card-header \" *ngSwitchCase=\"false\">\n            <div class=\"col-lg-12\">\n              <div class=\"alert alert-warning \" role=\"alert\" style=\"text-align: center; align-content: center\">\n                  Vous etes deconnecte, essayez de vous connecter a nouveau!\n              </div>\n            </div>\n              <p> Main invite here</p>\n              <section>\n                  <button (click)=\"submitMessage()\">\n                    Submit\n                  </button>\n                </section>\n                <app-notifier></app-notifier>\n        </div>\n        <div *ngSwitchCase=\"true\">\n            <router-outlet></router-outlet>\n            <app-toast-messages></app-toast-messages>\n        </div>\n      </div>\n  </div>\n\n\n\n</mat-sidenav-container>\n<!-- <router-outlet name=\"printmenu\"></router-outlet> -->\n"

/***/ }),

/***/ "./src/app/dashboard/components/side-nav/side-nav.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/components/side-nav/side-nav.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-sidenav-container {\n  flex: 1;\n  position: fixed;\n  width: 100%;\n  min-width: 100%;\n  height: 100%;\n  min-height: 100%;\n  border-spacing: 20px; }\n\n.app-sidenav-content {\n  display: flex;\n  height: 80%;\n  flex-direction: column;\n  background-image: url(\"/assets/yasn logo.jpeg\");\n  background-size: contain;\n  background-repeat: no-repeat; }\n\n.app-sidenav {\n  width: 240px; }\n\n.mat-list-item {\n  padding-right: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tby9NT0RFVi90dXRvcmlhbHMvcmVzdGF1cmFudC1zZXJ2ZXVyL3Jlc3RhdXJhbnQvc3JjL3Jlc3RhdS1jbGllbnQvc3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50cy9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLE9BQU87RUFDUCxlQUFlO0VBQ2YsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG9CQUFvQixFQUFBOztBQUV0QjtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLCtDQUFnRDtFQUNoRCx3QkFBd0I7RUFDeEIsNEJBQTRCLEVBQUE7O0FBRTlCO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0EsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50cy9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtc2lkZW5hdi1jb250YWluZXJcbntcbiAgZmxleDogMTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1zcGFjaW5nOiAyMHB4O1xufVxuLmFwcC1zaWRlbmF2LWNvbnRlbnR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogODAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMveWFzblxcIGxvZ28uanBlZycpIDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLmFwcC1zaWRlbmF2e1xuICB3aWR0aDogMjQwcHg7XG59XG4ubWF0LWxpc3QtaXRlbXtcbnBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/components/side-nav/side-nav.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/components/side-nav/side-nav.component.ts ***!
  \*********************************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var _shared_messaging_notifer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/messaging/notifer.service */ "./src/app/shared/messaging/notifer.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MAX_WIDTH_BREAKPOINT = 720;
var SideNavComponent = /** @class */ (function () {
    function SideNavComponent(zone, authService, _notifier) {
        var _this = this;
        this.authService = authService;
        this._notifier = _notifier;
        this.mediaMatcher = matchMedia("(max-width : " + MAX_WIDTH_BREAKPOINT + "px)");
        // test for notification
        this.messageText = 'This is a demo notification!';
        this.messageType = '2';
        // create an array of link
        this.links = [
            {
                name: 'Categories',
                url: 'category',
                format: 'fa fa-amazon'
            },
            {
                name: 'Produits',
                url: 'produit',
                format: 'fa fa-user'
            },
            {
                name: 'Clients',
                url: 'client',
                format: 'fa fa-user'
            },
            {
                name: 'Fournisseurs',
                url: 'fournisseur',
                format: 'fa fa-user'
            },
            {
                name: 'Dépenses',
                url: 'spendings',
                format: 'fa fa-user'
            },
            {
                name: 'Entrees Stock',
                url: 'appro',
                format: 'fa fa-user'
            },
            {
                name: 'Rapports',
                url: 'rapport',
                format: 'fa fa-user'
            },
            // {
            //   name:  'Factures',
            //     url: 'invoice-create'
            //   },
            {
                name: 'Utilisateurs',
                url: 'user',
                format: 'fa fa-user'
            },
            {
                name: 'Parametres',
                url: 'company',
                format: 'fa fa-user'
            },
        ];
        this.mediaMatcher.addListener(function (mql) {
            zone.run(function () { return _this.mediaMatcher = matchMedia("(max-width: " + MAX_WIDTH_BREAKPOINT + "px)"); });
        });
    }
    SideNavComponent.prototype.ngOnInit = function () {
    };
    SideNavComponent.prototype.isScreenSmall = function () {
        return this.mediaMatcher.matches;
    };
    SideNavComponent.prototype.submitMessage = function () {
        var messageType = null;
        if (this.messageType.length > 0) {
            // tslint:disable-next-line:radix
            messageType = parseInt(this.messageType);
        }
        this._notifier.notify(this.messageText, messageType);
    };
    SideNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-nav',
            template: __webpack_require__(/*! ./side-nav.component.html */ "./src/app/dashboard/components/side-nav/side-nav.component.html"),
            styles: [__webpack_require__(/*! ./side-nav.component.scss */ "./src/app/dashboard/components/side-nav/side-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_messaging_notifer_service__WEBPACK_IMPORTED_MODULE_0__["NotiferService"]])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/toolbar/toolbar.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/components/toolbar/toolbar.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar #content  class=\"flex justify-content-center\">\n  <button mat-button (click)= \"toggleSidenav.emit()\"\n  class=\"sidenav-toggle\">\n    <mat-icon>\n      menu\n    </mat-icon>\n\n  </button>\n  <span></span>\n  <span>Restaurant Yasin &nbsp;</span>\n  <img  src=\"/assets/yasn logo.jpeg\" height=\"60px\" width=\"60px\" id=\"logo-img\">\n  <span></span>\n\n  <div class=\"btn-group\" mdbDropdown>\n\n      <a mdbDropdownToggle  color=\"primary\" class=\"dropdown-toggle waves-light\"\n        mdbWavesEffect id=\"account-menu\"\n        >\n        <span >\n            <span >\n                <img class=\"profile-image img-circle\" >\n            </span>\n            <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n            <span *ngIf=\"authService.isLoggedIn()\" >\n              Bienvenue  {{ tokenService.getUsername() | titlecase }}\n            </span>\n          </span>\n\n      </a>\n      <div class=\"dropdown-menu dropdown-primary\">\n        <a *ngIf=\"!authService.isLoggedIn()\" class=\"dropdown-item\" (click)=\"login()\" >\n            <i class=\"fa fa-fw fa-sign-in\" aria-hidden=\"true\"></i>\n          <span>Se connecter</span></a>\n        <a *ngIf=\"authService.isLoggedIn() && authService.isAdmin()\" class=\"dropdown-item\" (click)=\"register()\">\n            <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>\n            <span> Utilisateur</span>\n            </a>\n        <a *ngIf=\"authService.isLoggedIn() && authService.isAdmin()\" class=\"dropdown-item\" href=\"#\">\n            <i class=\"fa fa-fw fa-clock-o\" aria-hidden=\"true\"></i>\n            <span small>Mot de Passe</span></a>\n        <div class=\"divider dropdown-divider\"></div>\n        <a *ngIf=\"authService.isLoggedIn()\" class=\"dropdown-item\"  (click)=\"authService.logout()\">\n            <i class=\"fa fa-fw fa-sign-out\" aria-hidden=\"true\"></i>\n            <span >Se deconnecter</span>\n          </a>\n      </div>\n    </div>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/dashboard/components/toolbar/toolbar.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/components/toolbar/toolbar.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar {\n  padding: .2em 1em;\n  border-spacing: 20px;\n  background-color: rgba(37, 151, 226, 0.863); }\n\n/* ==========================================================================\nNavbar\n========================================================================== */\n\n.profile-image {\n  margin: -10px 0px;\n  height: 40px;\n  width: 40px;\n  border-radius: 90%;\n  border-color: #110f0f; }\n\n.dropdown-item.active, .dropdown-item.active:focus, .dropdown-item.active:hover {\n  background-color: #fff; }\n\n.dropdown-toggle::after {\n  margin-left: 0.15em; }\n\nul.navbar-nav {\n  padding: 0.5em; }\n\n.navbar-nav .nav-item {\n  margin-left: 1.5rem; }\n\na.nav-link {\n  font-weight: 200; }\n\n.jh-navbar-toggler {\n  color: #ccc;\n  font-size: 1.5em;\n  padding: 10px; }\n\n.jh-navbar-toggler:hover {\n  color: #fff; }\n\n@media screen and (min-width: 768px) {\n  .jh-navbar-toggler {\n    display: none; } }\n\n@media screen and (max-width: 992px) {\n  .jh-logo-container {\n    width: 100%; } }\n\n.navbar-title {\n  display: inline-block;\n  vertical-align: middle; }\n\n/* ==========================================================================\nLogo styles\n========================================================================== */\n\n.navbar-brand.logo {\n  padding: 5px 15px; }\n\n.logo .logo-img {\n  height: 45px;\n  display: inline-block;\n  vertical-align: middle;\n  width: 70px; }\n\n.logo-img {\n  height: 100%;\n  background: url(\"/assets/yasn logo.jpeg\") no-repeat center center;\n  background-size: contain;\n  width: 100%;\n  border-radius: 90%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tby9NT0RFVi90dXRvcmlhbHMvcmVzdGF1cmFudC1zZXJ2ZXVyL3Jlc3RhdXJhbnQvc3JjL3Jlc3RhdS1jbGllbnQvc3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50cy90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QkE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBR3BCLDJDQUEwQyxFQUFBOztBQUU1Qzs7NEVDekI0RTs7QUQ2QjVFO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHFCQUE2QixFQUFBOztBQUcvQjtFQUNFLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLG1CQUFtQixFQUFBOztBQUdwQjtFQUNDLGNBQWMsRUFBQTs7QUFHZjtFQUNDLG1CQUFtQixFQUFBOztBQUdwQjtFQUNDLGdCQUFnQixFQUFBOztBQUdqQjtFQUNDLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBOztBQUdmO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0U7SUFDSSxhQUFhLEVBQUEsRUFDaEI7O0FBR0g7RUFDRTtJQUNJLFdBQVcsRUFBQSxFQUNkOztBQUdIO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQixFQUFBOztBQUd4Qjs7NEVDdkM0RTs7QUQwQzVFO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsWUFBWTtFQUNYLGlFQUFrRTtFQUNuRSx3QkFBd0I7RUFDeEIsV0FBVztFQUNYLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudHMvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8vIC50b29sYmFyLWNvbnRlbnR7XG4vLyAgJGljb25XaWR0aDogMjBweDtcbi8vIH1cbi8vIC5zaWRlbmF2LXRvZ2dsZXtcbi8vICAgZGlzcGxheTogbm9uZTtcbi8vICAgd2lkdGg6ICRpY29uV2lkdGg7XG5cbi8vIH1cblxuLy8gQG1lZGlhKG1heC13aWR0aDogNzIwcHgpe1xuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vIH1cblxuLy8gbWF0LWljb257XG4vLyAgIGZvbnQtc2l6ZTogMzBweDtcbi8vICAgaGVpZ2h0OiAkaWNvbldpZHRoO1xuLy8gICB3aWR0aDogJGljb25XaWR0aDtcbi8vICAgbGluZS1oZWlnaHQ6ICRpY29uV2lkdGg7XG4vLyAgIGNvbHVtbnM6IHdoaXRlO1xuLy8gfVxuXG4ubWF0LXRvb2xiYXIge1xuICBwYWRkaW5nOiAuMmVtIDFlbTtcbiAgYm9yZGVyLXNwYWNpbmc6IDIwcHg7XG4gIC8vIGJvcmRlci1ibG9jay1lbmQ6ICMzNTNkNDc7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICMzNTNkNDc7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgzNywgMTUxLCAyMjYsIDAuODYzKVxufVxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbk5hdmJhclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLnByb2ZpbGUtaW1hZ2Uge1xuICBtYXJnaW46IC0xMHB4IDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogOTAlO1xuICBib3JkZXItY29sb3I6IHJnYigxNywgMTUsIDE1KTtcbn1cblxuLmRyb3Bkb3duLWl0ZW0uYWN0aXZlLCAgLmRyb3Bkb3duLWl0ZW0uYWN0aXZlOmZvY3VzLC5kcm9wZG93bi1pdGVtLmFjdGl2ZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDAuMTVlbTtcbn1cblxuIHVsLm5hdmJhci1uYXYge1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cblxuIC5uYXZiYXItbmF2IC5uYXYtaXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XG59XG5cbiBhLm5hdi1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxuIC5qaC1uYXZiYXItdG9nZ2xlciB7XG4gIGNvbG9yOiAjY2NjO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uamgtbmF2YmFyLXRvZ2dsZXI6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmpoLW5hdmJhci10b2dnbGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmpoLWxvZ28tY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5uYXZiYXItdGl0bGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5Mb2dvIHN0eWxlc1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5uYXZiYXItYnJhbmQubG9nbyB7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xufVxuXG4ubG9nbyAubG9nby1pbWcge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDcwcHg7XG59XG5cbi5sb2dvLWltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMveWFzblxcIGxvZ28uanBlZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogOTAlO1xufVxuIiwiLm1hdC10b29sYmFyIHtcbiAgcGFkZGluZzogLjJlbSAxZW07XG4gIGJvcmRlci1zcGFjaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCAxNTEsIDIyNiwgMC44NjMpOyB9XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5OYXZiYXJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4ucHJvZmlsZS1pbWFnZSB7XG4gIG1hcmdpbjogLTEwcHggMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA5MCU7XG4gIGJvcmRlci1jb2xvcjogIzExMGYwZjsgfVxuXG4uZHJvcGRvd24taXRlbS5hY3RpdmUsIC5kcm9wZG93bi1pdGVtLmFjdGl2ZTpmb2N1cywgLmRyb3Bkb3duLWl0ZW0uYWN0aXZlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxuXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIG1hcmdpbi1sZWZ0OiAwLjE1ZW07IH1cblxudWwubmF2YmFyLW5hdiB7XG4gIHBhZGRpbmc6IDAuNWVtOyB9XG5cbi5uYXZiYXItbmF2IC5uYXYtaXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07IH1cblxuYS5uYXYtbGluayB7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7IH1cblxuLmpoLW5hdmJhci10b2dnbGVyIHtcbiAgY29sb3I6ICNjY2M7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHBhZGRpbmc6IDEwcHg7IH1cblxuLmpoLW5hdmJhci10b2dnbGVyOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmpoLW5hdmJhci10b2dnbGVyIHtcbiAgICBkaXNwbGF5OiBub25lOyB9IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmpoLWxvZ28tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTsgfSB9XG5cbi5uYXZiYXItdGl0bGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkxvZ28gc3R5bGVzXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLm5hdmJhci1icmFuZC5sb2dvIHtcbiAgcGFkZGluZzogNXB4IDE1cHg7IH1cblxuLmxvZ28gLmxvZ28taW1nIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiA3MHB4OyB9XG5cbi5sb2dvLWltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy95YXNuIGxvZ28uanBlZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogOTAlOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/components/toolbar/toolbar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/components/toolbar/toolbar.component.ts ***!
  \*******************************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _signup_signinup_modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../signup/signinup-modal.service */ "./src/app/signup/signinup-modal.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../login/login-modal.service */ "./src/app/login/login-modal.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(loggingModalService, signupModalService, authService, tokenService) {
        this.loggingModalService = loggingModalService;
        this.signupModalService = signupModalService;
        this.authService = authService;
        this.tokenService = tokenService;
        // tslint:disable-next-line:no-output-rename
        this.toggleSidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent.prototype.login = function () {
        this.loggingModalService.open();
    };
    ToolbarComponent.prototype.register = function () {
        this.signupModalService.open();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "toggleSidenav", void 0);
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/dashboard/components/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/dashboard/components/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_login_login_modal_service__WEBPACK_IMPORTED_MODULE_2__["LoginModalService"],
            _signup_signinup_modal_service__WEBPACK_IMPORTED_MODULE_0__["SignupModalService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: "\n  <app-side-nav></app-side-nav>\n\n  "
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/entities/access-denied/access-denied.component.css":
/*!********************************************************************!*\
  !*** ./src/app/entities/access-denied/access-denied.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2FjY2Vzcy1kZW5pZWQvYWNjZXNzLWRlbmllZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/entities/access-denied/access-denied.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/entities/access-denied/access-denied.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n        <div class=\"alert alert-success\" role=\"alert\">\n            Vous etes deconnecte, essayez de vous connecter a nouveau!\n          </div>\n      <!-- <div class=\"card\">\n        <p> Veuillez vous reconnecter</p>\n      </div> -->\n\n    </div>\n\n  </div>\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/entities/access-denied/access-denied.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/entities/access-denied/access-denied.component.ts ***!
  \*******************************************************************/
/*! exports provided: AccessDeniedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessDeniedComponent", function() { return AccessDeniedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccessDeniedComponent = /** @class */ (function () {
    function AccessDeniedComponent(authService) {
        this.authService = authService;
    }
    AccessDeniedComponent.prototype.ngOnInit = function () {
    };
    AccessDeniedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-access-denied',
            template: __webpack_require__(/*! ./access-denied.component.html */ "./src/app/entities/access-denied/access-denied.component.html"),
            styles: [__webpack_require__(/*! ./access-denied.component.css */ "./src/app/entities/access-denied/access-denied.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AccessDeniedComponent);
    return AccessDeniedComponent;
}());



/***/ }),

/***/ "./src/app/entities/category/category.component.css":
/*!**********************************************************!*\
  !*** ./src/app/entities/category/category.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/entities/category/category.component.html":
/*!***********************************************************!*\
  !*** ./src/app/entities/category/category.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-crud\n  [title]=\"'Categories'\"\n  [data]=\"categories\"\n  [service]=\"categoryService\"\n  [initItem]=\"category\"\n  [initForm]=\"categoryForm\"\n  [dataModelList]=\"categoriesModel\"\n>\n</app-crud>\n"

/***/ }),

/***/ "./src/app/entities/category/category.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/entities/category/category.component.ts ***!
  \*********************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _shared_model_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/model/category */ "./src/app/shared/model/category.ts");
/* harmony import */ var _shared_model_data_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/model/data.model */ "./src/app/shared/model/data.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(categoryService, fb, route) {
        this.categoryService = categoryService;
        this.fb = fb;
        this.route = route;
        this.category = new _shared_model_category__WEBPACK_IMPORTED_MODULE_4__["Category"]();
    }
    CategoryComponent.prototype.ngOnInit = function () {
        // this.categories = this.categoryService.getAll().subscribe(cat => cat)
        //   ;      //._embedded.produits;
        // this.categoryService.getAll().subscribe(
        //   response => {
        //     this.categories = response as Category[];
        //     // console.log(this.categories);
        //   }
        // );
        this.categories = this.route.snapshot.data.categories;
        // console.log(this.categories);
        this.categoryForm = this.fb.group({
            nameCategory: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            createAt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.categoriesModel = [
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_5__["DataModel"]('id', 'ID', 'number', true, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_5__["DataModel"]('nameCategory', 'Nom Categorie', 'string', false, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_5__["DataModel"]('createAt', 'Date Creation', 'date', false, [])
        ];
    };
    CategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/entities/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/entities/category/category.component.css")]
        }),
        __metadata("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/entities/client/client.component.css":
/*!******************************************************!*\
  !*** ./src/app/entities/client/client.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2NsaWVudC9jbGllbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/entities/client/client.component.html":
/*!*******************************************************!*\
  !*** ./src/app/entities/client/client.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-crud\n  [title]=\"'Clients'\"\n  [data]=\"clients\"\n  [service]=\"clientService\"\n  [initItem]=\"client\"\n  [initForm]=\"clientForm\"\n  [dataModelList]=\"clientsModel\"\n>\n</app-crud>"

/***/ }),

/***/ "./src/app/entities/client/client.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/entities/client/client.component.ts ***!
  \*****************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/model/client */ "./src/app/shared/model/client.ts");
/* harmony import */ var _shared_model_data_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/model/data.model */ "./src/app/shared/model/data.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClientComponent = /** @class */ (function () {
    function ClientComponent(clientService, fb, route) {
        this.clientService = clientService;
        this.fb = fb;
        this.route = route;
        this.client = new _shared_model_client__WEBPACK_IMPORTED_MODULE_4__["Client"]();
    }
    ClientComponent.prototype.ngOnInit = function () {
        // this.clientService.getAll().subscribe(
        //   response => {
        //     this.clients = response as Client[];
        //   }
        // );
        this.clients = this.route.snapshot.data.clients;
        this.clientForm = this.fb.group({
            nameClient: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            codeIfuClient: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phoneClient: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.clientsModel = [
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_5__["DataModel"]('id', 'ID', 'number', true, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_5__["DataModel"]('nameClient', 'Nom Client', 'string', false, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_5__["DataModel"]('codeIfuClient', 'Code Ifu', 'string', false, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_5__["DataModel"]('phoneClient', 'Phone', 'string', false, [])
        ];
    };
    ClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client',
            template: __webpack_require__(/*! ./client.component.html */ "./src/app/entities/client/client.component.html"),
            styles: [__webpack_require__(/*! ./client.component.css */ "./src/app/entities/client/client.component.css")]
        }),
        __metadata("design:paramtypes", [_services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ }),

/***/ "./src/app/entities/company/company.component.css":
/*!********************************************************!*\
  !*** ./src/app/entities/company/company.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2NvbXBhbnkvY29tcGFueS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/entities/company/company.component.html":
/*!*********************************************************!*\
  !*** ./src/app/entities/company/company.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card >\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n        <div class=\"card\">\n          <div class=\"card-header bg-info text-white\">\n            {{ operation == 'add' ? 'Parametrer une Societe' : operation == 'edit' ? 'Modifier Societe' : operation == 'remove'  }}\n          </div>\n          <div class=\"card-body\">\n\n            <div *ngIf=\"operation == 'add'|| operation =='edit'\">\n              <form [formGroup]=\"companyForm\">\n\n                <div >\n                  <div class=\"form-group\" >\n                    <label>Nom de la Societe</label>\n                    <input  type=\"text\" formControlName=\"nameCompany\" class=\"form-control\" />\n                    <label>Adresse</label>\n                    <input  type=\"text\" formControlName=\"adressCompany\" class=\"form-control\" />\n                    <label>Telephone</label>\n                    <input  type=\"text\" formControlName=\"phoneCompany\" class=\"form-control\" />\n                    <label>Code IFU</label>\n                    <input  type=\"text\" formControlName=\"codeIfuCompany\" class=\"form-control\" />\n                    <label>Logo</label>\n                    <input  type=\"file\" formControlName=\"logoCompany\" class=\"form-control\" />\n                  </div>\n                </div>\n\n                <button class=\"btn btn-success\" [disabled]=\"companyForm.pristine || companyForm.invalid\" (click)=\"operation == 'add' ? add() : update()\">\n                  {{operation == 'add' ? 'Ajouter' : operation == 'edit' ? 'Modifier' : ''}}\n                </button>\n              </form>\n            </div>\n\n\n          </div>\n          <div class=\"card-footer bg-info\"></div>\n        </div>\n      </div>\n    </div>\n    </mat-card>\n"

/***/ }),

/***/ "./src/app/entities/company/company.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/entities/company/company.component.ts ***!
  \*******************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/company.service */ "./src/app/services/company.service.ts");
/* harmony import */ var _shared_model_company__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/model/company */ "./src/app/shared/model/company.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompanyComponent = /** @class */ (function () {
    function CompanyComponent(companyService, fb, snackBar) {
        this.companyService = companyService;
        this.fb = fb;
        this.snackBar = snackBar;
        this.theCompany = new _shared_model_company__WEBPACK_IMPORTED_MODULE_3__["Company"]();
        this.operation = 'add';
    }
    CompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForm();
        this.companyService.getAll().subscribe(function (data) {
            console.log(data);
            if (!(data.length < 1) && !(data == null)) {
                _this.theCompany = data[0];
                _this.companyForm.patchValue(_this.theCompany);
                _this.operation = 'edit';
            }
            else {
                _this.operation = 'add';
            }
        });
    };
    CompanyComponent.prototype.buildForm = function () {
        this.companyForm = this.fb.group({
            nameCompany: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            codeIfuCompany: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            phoneCompany: '',
            adressCompany: '',
            logoCompany: ''
        });
    };
    CompanyComponent.prototype.add = function () {
        var _this = this;
        var p = this.companyForm.value;
        this.companyService.create(p).subscribe(function (res) {
            console.log(res);
            _this.snackBar.open('Societe parametree', 'Succes', {
                duration: 1000
            });
            _this.companyForm.reset();
            // console.log(this.loadData());
        });
    };
    CompanyComponent.prototype.update = function () {
        this.companyService.update(this.theCompany).subscribe(function (res) {
        });
    };
    CompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! ./company.component.html */ "./src/app/entities/company/company.component.html"),
            styles: [__webpack_require__(/*! ./company.component.css */ "./src/app/entities/company/company.component.css")]
        }),
        __metadata("design:paramtypes", [_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/entities/entities.module.ts":
/*!*********************************************!*\
  !*** ./src/app/entities/entities.module.ts ***!
  \*********************************************/
/*! exports provided: EntitiesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntitiesModule", function() { return EntitiesModule; });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _fournisseur_fournisseur_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fournisseur/fournisseur.component */ "./src/app/entities/fournisseur/fournisseur.component.ts");
/* harmony import */ var _entree_entree_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entree/entree.component */ "./src/app/entities/entree/entree.component.ts");
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client/client.component */ "./src/app/entities/client/client.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category/category.component */ "./src/app/entities/category/category.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _produit_produit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./produit/produit.component */ "./src/app/entities/produit/produit.component.ts");
/* harmony import */ var _sortie_sortie_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sortie/sortie.component */ "./src/app/entities/sortie/sortie.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/user.component */ "./src/app/entities/user/user.component.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./company/company.component */ "./src/app/entities/company/company.component.ts");
/* harmony import */ var _spendings_spendings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./spendings/spendings.component */ "./src/app/entities/spendings/spendings.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./access-denied/access-denied.component */ "./src/app/entities/access-denied/access-denied.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var EntitiesModule = /** @class */ (function () {
    function EntitiesModule() {
    }
    EntitiesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            declarations: [_category_category_component__WEBPACK_IMPORTED_MODULE_4__["CategoryComponent"], _client_client_component__WEBPACK_IMPORTED_MODULE_3__["ClientComponent"], _entree_entree_component__WEBPACK_IMPORTED_MODULE_2__["EntreeComponent"],
                _fournisseur_fournisseur_component__WEBPACK_IMPORTED_MODULE_1__["FournisseurComponent"], _produit_produit_component__WEBPACK_IMPORTED_MODULE_9__["ProduitComponent"], _sortie_sortie_component__WEBPACK_IMPORTED_MODULE_10__["SortieComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_11__["UserComponent"], _company_company_component__WEBPACK_IMPORTED_MODULE_12__["CompanyComponent"], _spendings_spendings_component__WEBPACK_IMPORTED_MODULE_13__["SpendingsComponent"], _access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_15__["AccessDeniedComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            exports: [_category_category_component__WEBPACK_IMPORTED_MODULE_4__["CategoryComponent"], _client_client_component__WEBPACK_IMPORTED_MODULE_3__["ClientComponent"], _entree_entree_component__WEBPACK_IMPORTED_MODULE_2__["EntreeComponent"],
                _fournisseur_fournisseur_component__WEBPACK_IMPORTED_MODULE_1__["FournisseurComponent"], _produit_produit_component__WEBPACK_IMPORTED_MODULE_9__["ProduitComponent"], _sortie_sortie_component__WEBPACK_IMPORTED_MODULE_10__["SortieComponent"], _spendings_spendings_component__WEBPACK_IMPORTED_MODULE_13__["SpendingsComponent"],
            ],
            providers: []
        })
    ], EntitiesModule);
    return EntitiesModule;
}());



/***/ }),

/***/ "./src/app/entities/entree/entree.component.css":
/*!******************************************************!*\
  !*** ./src/app/entities/entree/entree.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2VudHJlZS9lbnRyZWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/entities/entree/entree.component.html":
/*!*******************************************************!*\
  !*** ./src/app/entities/entree/entree.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3>{{title}}</h3>\n</div>\n<div class=\"row\">\n\n  <div class=\"col-lg-8\">\n    <mat-card>\n    <table class=\"table table-hover table-striped table-sm\" >\n      <thead>\n        <tr>\n          <th *ngFor=\"let dataModel of approsModel\">{{dataModel.columnReference}}</th>\n          <th>\n            <button class=\"btn btn-outline-primary btn-sm\"\n            (click)=\"operation = 'add'; initData();\">ADD</button>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let appro of appros; let i = index \">\n          <td >\n            {{appro.id}}\n          </td>\n          <td >\n            {{appro.dateAppro}}\n          </td>\n          <td >\n            {{appro.transactionLines[0].produit.category.nameCategory}}\n          </td>\n          <td >\n            {{appro.transactionLines[0].produit.codeProd}}\n          </td>\n          <td >\n            {{appro.transactionLines[0].quantity}}\n          </td>\n          <td >\n            {{appro.transactionLines[0].unitValue}}\n          </td>\n          <td>\n            <button class=\"btn btn-outline-primary btn-sm\" (click)=\"selectedItem = product; operation = 'edit';getValues()\">Edit\n            </button>\n            <button class=\"btn btn-outline-danger btn-sm\" (click)=\"selectedItem = product;operation = 'remove' \">\n              Remove\n            </button>\n          </td>\n\n        </tr>\n      </tbody>\n    </table>\n  </mat-card>\n  </div>\n  <div class=\"col-lg-4\">\n    <div class=\"card\">\n      <div class=\"card-header bg-info text-white\">\n        {{ operation == 'add' ? 'Approvisionner un Produit' : operation == 'edit' ? 'Modifier un Appro' : operation == 'remove' ? 'Supprimer\n        Un Appro' : '' }}\n      </div>\n      <div class=\"card-body\">\n\n        <div *ngIf=\"operation == 'add' || operation == 'edit'\">\n          <form [formGroup]=\"approForm\" >\n\n            <div>\n              <div class=\"form-group\" >\n                <label>Date Entree:</label>\n                <input type=\"date\" formControlName=\"dateAppro\" class=\"form-control\"/>\n                <label>Categories:</label>\n                <select formControlName=\"category\" class=\"form-control\" >\n                  <option [ngValue]=\"categorie\"\n                  *ngFor=\"let categorie of categories\"\n                >{{categorie.nameCategory}}</option>\n                </select>\n                <label>Code Produit :</label>\n                <select formControlName=\"produit\" class=\"form-control\" >\n                  <option *ngFor=\"\n                  let i = index;\n                  let produit of selectedProduits\"\n                  [ngValue]=\"produit\"\n              >\n                {{produit.codeProd}}</option>\n                </select>\n                <label>Quantite :</label>\n                <input type=\"number\" formControlName=\"quantite\" class=\"form-control\" />\n                <label>Cout Unitaire :</label>\n                <input type=\"number\" formControlName=\"coutUnitaire\" class=\"form-control\"/>\n              </div>\n            </div>\n\n            <button class=\"btn btn-success\" [disabled]=\"approForm.pristine || approForm.invalid\" (click)=\"operation == 'add' ? add() : update()\">\n              {{operation == 'add' ? 'Ajouter' : operation == 'edit' ? 'Modifier' : ''}}\n            </button>\n          </form>\n\n        </div>\n        <div *ngIf=\"operation == 'remove'\">\n          <p class=\"card-title\"> {{selectedItem.codeProd}}</p>\n          <p>Voulez-vous supprimer ce produit Référence: ?</p>\n          <button class=\"btn btn-success\" [disabled]=\"!selectedItem.id\" (click)=\"delete();operation = 'add'; initData()\">Confirmer</button>\n        </div>\n\n      </div>\n      <div class=\"card-footer bg-info\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/entities/entree/entree.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/entities/entree/entree.component.ts ***!
  \*****************************************************/
/*! exports provided: EntreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntreeComponent", function() { return EntreeComponent; });
/* harmony import */ var _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/model/data.model */ "./src/app/shared/model/data.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_entree_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/entree.service */ "./src/app/services/entree.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_model_appro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/model/appro */ "./src/app/shared/model/appro.ts");
/* harmony import */ var _shared_model_transactionLine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/model/transactionLine */ "./src/app/shared/model/transactionLine.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EntreeComponent = /** @class */ (function () {
    function EntreeComponent(entreeService, fb, route) {
        this.entreeService = entreeService;
        this.fb = fb;
        this.route = route;
        this.appro = new _shared_model_appro__WEBPACK_IMPORTED_MODULE_5__["Appro"]();
        this.operation = 'add';
        this.selectedProduits = [];
    }
    EntreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appros = this.route.snapshot.data.entrees;
        console.log(this.appros);
        this.categories = this.route.snapshot.data.categories;
        this.produits = this.route.snapshot.data.produits;
        this.title = 'Approvisonnements effectues';
        this.initData();
        this.categoryValueChange$ = this.approForm.controls['category'].valueChanges;
        this.categoryValueChange$.subscribe(function (category) {
            // console.log(category);
            _this.updateFilteredProduits(category);
        });
        this.approsModel = [
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('id', 'ID', 'number', true, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('dateAppro', 'Date Entree', 'date', false, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('category', 'Categorie', 'Array', false, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('produit', 'Produit', 'Array', false, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('quantite', 'Quantite', 'number', false, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('coutUnitaire', 'Cout Unitaire', 'number', false, [])
        ];
        this.produitsModel = [
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('id', 'ID', 'number', true, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('codeProd', 'Code Prod', 'string', false, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('coutUnitaire', 'Cout Unitaire', 'number', false, [])
        ];
        this.categoriesModel = [
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('id', 'ID', 'number', true, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('nameCategory', 'Nom Categorie', 'string', false, [])
        ];
    };
    EntreeComponent.prototype.initData = function () {
        // this.produit = new Produit();
        this.selectedItem = this.initItem;
        this.createForm();
    };
    EntreeComponent.prototype.createForm = function () {
        this.approForm = this.fb.group({
            dateAppro: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            produit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            quantite: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            coutUnitaire: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    EntreeComponent.prototype.updateFilteredProduits = function (item) {
        if (!(item === undefined) && !(item == null)) {
            this.selectedProduits = this.produits.filter(
            // tslint:disable-next-line:triple-equals
            function (produit) { return produit.category.id === item['id']; });
            // console.log(this.selectedProduits);
        }
    };
    EntreeComponent.prototype.add = function () {
        var _this = this;
        var appro = new _shared_model_appro__WEBPACK_IMPORTED_MODULE_5__["Appro"]();
        var p = this.approForm.value;
        console.log(p);
        appro.approRef = (new Date()).getFullYear() + 'A' + Math.round((new Date()).getTime() / 1000);
        appro.dateAppro = p['dateAppro'];
        appro.transactionLines = [];
        var transax = new _shared_model_transactionLine__WEBPACK_IMPORTED_MODULE_6__["TransactionLine"]();
        transax.produit = p['produit'];
        transax.quantity = p['quantite'];
        transax.unitValue = p['coutUnitaire'];
        transax.debitAmount = transax.quantity * transax.unitValue;
        transax.txDate = appro.dateAppro;
        appro.transactionLines.push(transax);
        console.log(appro);
        this.entreeService.create(appro).subscribe(function (res) {
            _this.loadData();
        });
        this.initData();
    };
    EntreeComponent.prototype.update = function () {
        var _this = this;
        this.entreeService.update(this.selectedItem).subscribe(function (res) {
            _this.initData();
        });
    };
    EntreeComponent.prototype.loadData = function () {
        var _this = this;
        this.entreeService.getAll().subscribe(function (data) {
            _this.appros = data;
        });
    };
    EntreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-entree',
            template: __webpack_require__(/*! ./entree.component.html */ "./src/app/entities/entree/entree.component.html"),
            styles: [__webpack_require__(/*! ./entree.component.css */ "./src/app/entities/entree/entree.component.css")]
        }),
        __metadata("design:paramtypes", [_services_entree_service__WEBPACK_IMPORTED_MODULE_3__["EntreeService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], EntreeComponent);
    return EntreeComponent;
}());



/***/ }),

/***/ "./src/app/entities/fournisseur/fournisseur.component.css":
/*!****************************************************************!*\
  !*** ./src/app/entities/fournisseur/fournisseur.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2ZvdXJuaXNzZXVyL2ZvdXJuaXNzZXVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/entities/fournisseur/fournisseur.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/entities/fournisseur/fournisseur.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-crud\n  [title]=\"'Fournisseurs'\"\n  [data]=\"fournisseurs\"\n  [service]=\"fournisseurService\"\n  [initItem]=\"fournisseur\"\n  [initForm]=\"fournisseurForm\"\n  [dataModelList]=\"fournisseursModel\"\n>\n</app-crud>"

/***/ }),

/***/ "./src/app/entities/fournisseur/fournisseur.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/entities/fournisseur/fournisseur.component.ts ***!
  \***************************************************************/
/*! exports provided: FournisseurComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FournisseurComponent", function() { return FournisseurComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_fournisseur_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/fournisseur.service */ "./src/app/services/fournisseur.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_model_fournisseur__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/model/fournisseur */ "./src/app/shared/model/fournisseur.ts");
/* harmony import */ var _shared_model_data_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/model/data.model */ "./src/app/shared/model/data.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FournisseurComponent = /** @class */ (function () {
    function FournisseurComponent(fournisseurService, fb, route) {
        this.fournisseurService = fournisseurService;
        this.fb = fb;
        this.route = route;
        this.fournisseur = new _shared_model_fournisseur__WEBPACK_IMPORTED_MODULE_4__["Fournisseur"]();
    }
    FournisseurComponent.prototype.ngOnInit = function () {
        this.fournisseurs = this.route.snapshot.data.fournisseurs;
        this.fournisseurForm = this.fb.group({
            nameSupplier: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            codeIfuSupplier: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phoneSupplier: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.fournisseursModel = [
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_5__["DataModel"]('id', 'ID', 'number', true, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_5__["DataModel"]('nameSupplier', 'Name', 'string', false, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_5__["DataModel"]('codeIfuSupplier', 'Code IFU', 'string', false, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_5__["DataModel"]('phoneSupplier', 'Phone', 'string', false, [])
        ];
    };
    FournisseurComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fournisseur',
            template: __webpack_require__(/*! ./fournisseur.component.html */ "./src/app/entities/fournisseur/fournisseur.component.html"),
            styles: [__webpack_require__(/*! ./fournisseur.component.css */ "./src/app/entities/fournisseur/fournisseur.component.css")]
        }),
        __metadata("design:paramtypes", [_services_fournisseur_service__WEBPACK_IMPORTED_MODULE_2__["FournisseurService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], FournisseurComponent);
    return FournisseurComponent;
}());



/***/ }),

/***/ "./src/app/entities/produit/Produit.component.css":
/*!********************************************************!*\
  !*** ./src/app/entities/produit/Produit.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL3Byb2R1aXQvUHJvZHVpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/entities/produit/Produit.component.html":
/*!*********************************************************!*\
  !*** ./src/app/entities/produit/Produit.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-crud\n  [title]=\"'Produits'\"\n  [data]=\"produits\"\n  [service]=\"produitService\"\n  [initItem]=\"produit\"\n  [initForm]=\"produitForm\"\n  [dataModelList]=\"produitsModel\"\n  [arrayData]=\"categories\"\n  [arrayModelList]=\"categoriesModel\"\n>\n</app-crud>\n"

/***/ }),

/***/ "./src/app/entities/produit/produit.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/entities/produit/produit.component.ts ***!
  \*******************************************************/
/*! exports provided: ProduitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProduitComponent", function() { return ProduitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_produit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/produit.service */ "./src/app/services/produit.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _shared_model_data_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/model/data.model */ "./src/app/shared/model/data.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProduitComponent = /** @class */ (function () {
    function ProduitComponent(produitService, categorieService, fb, route) {
        this.produitService = produitService;
        this.categorieService = categorieService;
        this.fb = fb;
        this.route = route;
    }
    ProduitComponent.prototype.ngOnInit = function () {
        this.produitForm = this.fb.group({
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            codeProd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            descProduit: '',
            stockMini: '',
            coutUnitaire: '',
            prixUnitaire: ''
        });
        this.produits = this.route.snapshot.data.produits;
        this.categories = this.route.snapshot.data.categories;
        this.produitsModel = [
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_5__["DataModel"]('id', 'ID', 'number', true, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_5__["DataModel"]('category', 'Categorie', 'Array', false, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_5__["DataModel"]('codeProd', 'Code Prod', 'string', false, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_5__["DataModel"]('descProduit', 'Description', 'string', false, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_5__["DataModel"]('stockMini', 'Stock Alerte', 'number', false, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_5__["DataModel"]('coutUnitaire', 'Cout Unitaire', 'number', false, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_5__["DataModel"]('prixUnitaire', 'Prix Unitaire', 'number', false, [])
        ];
        this.categoriesModel = [
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_5__["DataModel"]('id', 'ID', 'number', true, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_5__["DataModel"]('nameCategory', 'Nom Categorie', 'string', false, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_5__["DataModel"]('createAt', 'Date Creation', 'date', false, [])
        ];
    };
    ProduitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-produit',
            template: __webpack_require__(/*! ./Produit.component.html */ "./src/app/entities/produit/Produit.component.html"),
            styles: [__webpack_require__(/*! ./Produit.component.css */ "./src/app/entities/produit/Produit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_produit_service__WEBPACK_IMPORTED_MODULE_3__["ProduitService"],
            _services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProduitComponent);
    return ProduitComponent;
}());



/***/ }),

/***/ "./src/app/entities/sortie/sortie.component.css":
/*!******************************************************!*\
  !*** ./src/app/entities/sortie/sortie.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL3NvcnRpZS9zb3J0aWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/entities/sortie/sortie.component.html":
/*!*******************************************************!*\
  !*** ./src/app/entities/sortie/sortie.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-crud\n  [title]=\"'Sorties'\"\n  [data]=\"sorties\"\n  [service]=\"sortieService\"\n  [initItem]=\"sortie\"\n  [initForm]=\"sortieForm\"\n  [dataModelList]=\"sortiesModel\"\n  [arrayData]=\"produits\"\n  [arrayModelList]=\"produitsModel\"\n>\n</app-crud>"

/***/ }),

/***/ "./src/app/entities/sortie/sortie.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/entities/sortie/sortie.component.ts ***!
  \*****************************************************/
/*! exports provided: SortieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortieComponent", function() { return SortieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_sortie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sortie.service */ "./src/app/services/sortie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_model_data_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/model/data.model */ "./src/app/shared/model/data.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SortieComponent = /** @class */ (function () {
    function SortieComponent(sortieService, 
    // private categorieService: CategoryService,
    fb, route) {
        this.sortieService = sortieService;
        this.fb = fb;
        this.route = route;
    }
    SortieComponent.prototype.ngOnInit = function () {
        this.sortieForm = this.fb.group({
            produit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            quantite: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            prixvente: '',
            date: ''
        });
        this.sorties = this.route.snapshot.data.sorties;
        this.produits = this.route.snapshot.data.produits;
        this.sortiesModel = [
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_4__["DataModel"]('id', 'ID', 'number', true, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_4__["DataModel"]('produit', 'Code Prod', 'Array', false, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_4__["DataModel"]('quantite', 'Quantite', 'string', false, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_4__["DataModel"]('prixvente', 'Prix', 'string', false, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_4__["DataModel"]('date', 'Date', 'date', false, [])
        ];
        this.produitsModel = [
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_4__["DataModel"]('id', 'ID', 'number', true, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_4__["DataModel"]('codeProd', 'Code Prod', 'string', false, [])
        ];
    };
    SortieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sortie',
            template: __webpack_require__(/*! ./sortie.component.html */ "./src/app/entities/sortie/sortie.component.html"),
            styles: [__webpack_require__(/*! ./sortie.component.css */ "./src/app/entities/sortie/sortie.component.css")]
        }),
        __metadata("design:paramtypes", [_services_sortie_service__WEBPACK_IMPORTED_MODULE_2__["SortieService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SortieComponent);
    return SortieComponent;
}());



/***/ }),

/***/ "./src/app/entities/spendings/spendings.component.css":
/*!************************************************************!*\
  !*** ./src/app/entities/spendings/spendings.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL3NwZW5kaW5ncy9zcGVuZGluZ3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/entities/spendings/spendings.component.html":
/*!*************************************************************!*\
  !*** ./src/app/entities/spendings/spendings.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-crud\n  [title]=\"'Comptabilisation des Depenses '\"\n  [data]=\"spendings\"\n  [service]=\"spendingService\"\n  [initItem]=\"spending\"\n  [initForm]=\"spendingForm\"\n  [dataModelList]=\"spendingModel\"\n  [enumElements]=\"typeSpendings\"\n  [enumType]=\"typeSpending\"\n>\n</app-crud>\n"

/***/ }),

/***/ "./src/app/entities/spendings/spendings.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/entities/spendings/spendings.component.ts ***!
  \***********************************************************/
/*! exports provided: SpendingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpendingsComponent", function() { return SpendingsComponent; });
/* harmony import */ var _shared_model_spendings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/model/spendings */ "./src/app/shared/model/spendings.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_model_data_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/model/data.model */ "./src/app/shared/model/data.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_spendings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/spendings.service */ "./src/app/services/spendings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SpendingsComponent = /** @class */ (function () {
    function SpendingsComponent(spendingService, fb, route) {
        this.spendingService = spendingService;
        this.fb = fb;
        this.route = route;
        this.typeSpending = _shared_model_spendings__WEBPACK_IMPORTED_MODULE_0__["TypeSpending"];
        this.typeSpendings = [];
    }
    SpendingsComponent.prototype.ngOnInit = function () {
        this.spendingModel = [
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_2__["DataModel"]('id', 'ID', 'number', true, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_2__["DataModel"]('dateSpending', 'Date Dep', 'date', false, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_2__["DataModel"]('typeSpending', 'Type Depense', 'enum', false, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_2__["DataModel"]('valueSpending', 'Montant Depense', 'number', false, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_2__["DataModel"]('commentSpending', 'Commentaire', 'string', false, [])
        ];
        this.spendings = this.route.snapshot.data.spendings;
        var numberPatern = '^[0-9.,]+$';
        this.spendingForm = this.fb.group({
            dateSpending: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            typeSpending: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            valueSpending: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(numberPatern)]],
            commentSpending: ''
        });
    };
    SpendingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-spendings',
            template: __webpack_require__(/*! ./spendings.component.html */ "./src/app/entities/spendings/spendings.component.html"),
            styles: [__webpack_require__(/*! ./spendings.component.css */ "./src/app/entities/spendings/spendings.component.css")]
        }),
        __metadata("design:paramtypes", [_services_spendings_service__WEBPACK_IMPORTED_MODULE_5__["SpendingsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], SpendingsComponent);
    return SpendingsComponent;
}());



/***/ }),

/***/ "./src/app/entities/user/user.component.html":
/*!***************************************************!*\
  !*** ./src/app/entities/user/user.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-crud\n  [title]=\"'Utilisateurs'\"\n  [data]=\"users\"\n  [service]=\"userService\"\n  [initItem]=\"user\"\n  [initForm]=\"userForm\"\n  [dataModelList]=\"usersModel\"\n>\n</app-crud>\n"

/***/ }),

/***/ "./src/app/entities/user/user.component.ts":
/*!*************************************************!*\
  !*** ./src/app/entities/user/user.component.ts ***!
  \*************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_model_data_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/model/data.model */ "./src/app/shared/model/data.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserComponent = /** @class */ (function () {
    function UserComponent(fb, route, userService) {
        this.fb = fb;
        this.route = route;
        this.userService = userService;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.userForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.users = this.route.snapshot.data.users;
        this.usersModel = [
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_2__["DataModel"]('id', 'ID', 'number', true, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_2__["DataModel"]('username', 'Nom  Utilisateur', 'string', false, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_2__["DataModel"]('lastname', 'Nom Complet', 'string', false, []),
            new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_2__["DataModel"]('password', 'Mot de Passe', 'password', false, [])
        ];
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/entities/user/user.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/invoice/invoice-create/invoice-create.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/invoice/invoice-create/invoice-create.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-card{\n\n  background-color: #3cb1ff;\n  margin: 5px;\n  border-radius: 5pc;\n}\n\n.form-inline .form-group {\n  margin-right:2px;\n  min-width: 10px;\n  padding: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52b2ljZS9pbnZvaWNlLWNyZWF0ZS9pbnZvaWNlLWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9pbnZvaWNlL2ludm9pY2UtY3JlYXRlL2ludm9pY2UtY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jYXJke1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICMzY2IxZmY7XG4gIG1hcmdpbjogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cGM7XG59XG5cbi5mb3JtLWlubGluZSAuZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1yaWdodDoycHg7XG4gIG1pbi13aWR0aDogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/invoice/invoice-create/invoice-create.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/invoice/invoice-create/invoice-create.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"main-card\">\n  <mat-card-title class=\"content-header \">\n    <div class=\"main-card\">\n      <mdb-breadcrumb customClass=\"cyan lighten-4\">\n        <mdb-breadcrumb-item>Factures</mdb-breadcrumb-item>\n        <mdb-breadcrumb-item class=\"active\">Nouvelle </mdb-breadcrumb-item>\n      </mdb-breadcrumb>\n    </div>\n  </mat-card-title>\n\n  <mat-card-content>\n    <mat-card class=\"container-fluid \">\n      <div class=\"box box-primary\">\n        <div class=\"basic-container\">\n          <mat-card>\n            <form\n              [formGroup]=\"invoiceForm\"\n              novalidate\n              (ngSubmit)=\"save(invoiceForm.value, invoiceForm.valid, $event)\"\n\n            >\n              <!--customer list-->\n              <mat-card>\n                <div class=\"form-group form-inline\">\n                  <label class=\"col-md-1 \">Client: </label>\n                  <select\n                    required\n                    class=\"form-control\"\n                    formControlName=\"client\"\n                  >\n                    <option *ngFor=\"let c of clients\" [value]=\"c.id\">\n                      <strong> {{ c.nameClient }} </strong> -\n                      <em> {{ c.phoneClient }} </em>\n                      <!-- {{c.nameClient}} -->\n                    </option>\n                  </select>\n                  <!-- <div class=\"form-control\" >\n                  <label >REF:</label>\n                    <label >{{invoice.invoiceRef}}</label>\n                </div> -->\n                  <!-- <div class=\"input-group\"> -->\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <button type=\"button\">...</button>\n                      </div>\n                    </div>\n\n                  <label class=\"col-md-1 \">Mode: </label>\n                  <select\n                    required\n                    class=\"form-control\"\n                    formControlName=\"payMode\"\n                  >\n                    <option  *ngFor=\"let mode of modes\" [value]=\"mode\" [label]=\"payMode[mode]\"></option>\n                  </select>\n                      <label type=\"text\">Date</label>\n                      <input required class=\"form-control\" type=\"date\" [value]=\"today | date:'dd-MM-yyyy'\" formControlName=\"dateTrans\" />\n                </div>\n              </mat-card>\n\n              <!-- Start form units array with first row must and dynamically add more -->\n              <mat-card formArrayName=\"items\">\n                <mat-card-title>Produits Vendus</mat-card-title>\n                <mat-divider></mat-divider>\n\n                <!-- loop throught units -->\n                <div\n                  *ngFor=\"\n                    let unit of invoiceForm['controls'].items['controls'];\n                    let i = index\n                  \"\n                >\n                  <!-- row divider show for every nex row exclude if first row -->\n                  <mat-divider\n                    *ngIf=\"\n                      invoiceForm.controls.items.controls.length > 1 && i > 0\n                    \"\n                  ></mat-divider>\n                  <!-- <br /> -->\n\n                  <!-- group name in this case row index -->\n                  <div [formGroupName]=\"i\">\n                    <div\n                      fxLayout=\"row\"\n                      fxLayout.xs=\"column\"\n                      fxLayoutWrap\n                      fxLayoutGap=\"3.5%\"\n                      fxLayoutAlign=\"center\"\n                    >\n                      <!-- unit name input field -->\n\n                      <mat-form-field fxFlex.xs=\"20%\">\n                        <mat-label>Categorie</mat-label>\n                        <select\n                          matNativeControl\n                          required\n                          formControlName=\"category\"\n                        >\n                          <option\n                            *ngFor=\"let category of categories\"\n                            [value]=\"category.nameCategory\"\n                          >\n                            {{ category.nameCategory }}</option\n                          >\n                        </select>\n                      </mat-form-field>\n\n                      <mat-form-field fxFlex.xs=\"20%\">\n                        <mat-label>Code Produit</mat-label>\n                        <select\n                          matNativeControl\n                          required\n                          formControlName=\"codeProd\"\n                        >\n                          <option\n                            *ngFor=\"\n                              let i = index;\n                              let produit;\n                              of: filteredProduits[i]\n                            \"\n                            [value]=\"produit.codeProd\"\n                          >\n                            {{ produit.codeProd }}</option\n                          >\n                        </select>\n                      </mat-form-field>\n                      <!-- unit quantity input field -->\n                      <mat-form-field\n                        fxFlex=\"10%\"\n                        fxFlex.xs=\"20%\"\n                        style=\"text-align: right\"\n                      >\n                        <input\n                          matInput\n                          placeholder=\"Quantity\"\n                          type=\"number\"\n                          formControlName=\"quantite\"\n                          required\n                        />\n                      </mat-form-field>\n\n                      <!-- unit price input field -->\n                      <mat-form-field\n                        fxFlex=\"20%\"\n                        fxFlex.xs=\"20%\"\n                        style=\"text-align: right\"\n                      >\n                        <input\n                          matInput\n                          placeholder=\"Prix Unitaire\"\n                          type=\"number\"\n                          formControlName=\"prixUnit\"\n                          required\n                        />\n                      </mat-form-field>\n\n                      <!-- unit total price input field, calculated and not editable -->\n                      <!-- <div fxLayout.xs=\"row\"> -->\n                      <mat-form-field style=\"text-align: right\">\n                        <input\n                          matInput\n                          placeholder=\"Somme Totale\"\n                          formControlName=\"unitTotalPrice\"\n                        />\n                      </mat-form-field>\n\n                      <!-- row delete button, hidden if there is just one row -->\n                      <button\n                        type=\"button\"\n                        mat-mini-fab\n                        color=\"warn\"\n                        fxFlex=\"nogrow\"\n                        *ngIf=\"invoiceForm.controls.items.controls.length > 1\"\n                        (click)=\"removeUnit(i)\"\n                      >\n                        <mat-icon>delete forever</mat-icon>\n                      </button>\n                      <!-- </div> -->\n                    </div>\n                  </div>\n                </div>\n\n                <!-- New unit button -->\n                <mat-divider></mat-divider>\n                <mat-card-actions>\n                  <button type=\"button\" mat-raised-button (click)=\"addUnit()\">\n                    <mat-icon>add box</mat-icon>\n                    Ajouter Produit\n                  </button>\n                </mat-card-actions>\n              </mat-card>\n              <!-- End form units array -->\n              <br />\n              <!-- Total price calculation formated with angular currency pipe -->\n              <mat-card>\n                Total price is\n                {{ totalSum | currency: \"XOF \":\"symbol-narrow\":\"1.2-2\" }}\n              </mat-card>\n              <!-- Form submit button enabled on if form is valid -->\n              <!-- //*ngIf=\"!isSaved; else askPrint\" -->\n              <mat-card-actions>\n                <button\n                  mdbBtn\n                  [disabled]=\"invoiceForm.invalid\"\n                  mdbWavesEffect\n                  color=\"success\"\n                >\n                  Submit\n                </button>\n\n              </mat-card-actions>\n              <ng-template #askPrint>\n\n                <div class=\"col-md-12\">\n                  <div class=\"alert alert-success\" role=\"alert\">\n                    Facture sauvegardée avec succès !!\n                  </div>\n                  <a class=\"btn btn-lg btn-info\" >OK</a>\n\n                </div>\n              </ng-template>\n\n            </form>\n          </mat-card>\n        </div>\n      </div>\n    </mat-card>\n  </mat-card-content>\n</mat-card>\n\n"

/***/ }),

/***/ "./src/app/invoice/invoice-create/invoice-create.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/invoice/invoice-create/invoice-create.component.ts ***!
  \********************************************************************/
/*! exports provided: InvoiceCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceCreateComponent", function() { return InvoiceCreateComponent; });
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _shared_print_print_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/print/print.service */ "./src/app/shared/print/print.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_produit_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/produit.service */ "./src/app/services/produit.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_invoice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/invoice.service */ "./src/app/services/invoice.service.ts");
/* harmony import */ var _shared_model_invoice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/model/invoice */ "./src/app/shared/model/invoice.ts");
/* harmony import */ var _shared_model_transactionLine__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/model/transactionLine */ "./src/app/shared/model/transactionLine.ts");
/* harmony import */ var _services_transactionLine_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/transactionLine.service */ "./src/app/services/transactionLine.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_HistoricCashBalance_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/HistoricCashBalance.service */ "./src/app/services/HistoricCashBalance.service.ts");
/* harmony import */ var _shared_model_cashBalance__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/model/cashBalance */ "./src/app/shared/model/cashBalance.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { GeneralService } from './../../services/data.service';














var InvoiceCreateComponent = /** @class */ (function () {
    // private  lastCashBalance: CashBalance;
    // @Output()
    // emitInvoice: EventEmitter<Invoice> = new EventEmitter<Invoice>();
    //  @ViewChild(InvoiceHtmlComponent) // referenced the html invoice
    // invoiceHtmlComponent: InvoiceHtmlComponent;
    function InvoiceCreateComponent(clientService, fb, categorieService, produitService, invoiceService, transactionLineService, currencyPipe, datePipe, aRoute, route, snackBar, 
    // private generalService: GeneralService,
    cashService, printService, toastService) {
        this.clientService = clientService;
        this.fb = fb;
        this.categorieService = categorieService;
        this.produitService = produitService;
        this.invoiceService = invoiceService;
        this.transactionLineService = transactionLineService;
        this.currencyPipe = currencyPipe;
        this.datePipe = datePipe;
        this.aRoute = aRoute;
        this.route = route;
        this.snackBar = snackBar;
        this.cashService = cashService;
        this.printService = printService;
        this.toastService = toastService;
        this.totalSum = 0;
        this.isSaved = false;
        this.payMode = _shared_model_invoice__WEBPACK_IMPORTED_MODULE_10__["PaymentMode"];
        this.modes = [];
        this.today = new Date();
        this.accountBalances = [];
    }
    InvoiceCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        // const modes = Object.keys(this.payMode);
        // console.log(modes);
        this.modes = Object.keys(this.payMode).filter(function (f) { return !isNaN(Number(f)); });
        // Get the arrays of clients, products, and categories
        this.clients = this.aRoute.snapshot.data.clients;
        this.categories = this.aRoute.snapshot.data.categories;
        this.produits = this.aRoute.snapshot.data.produits;
        // create the form
        this.initData();
        this.filteredProduits = new Array();
        // initialize stream on units
        this.myFormValueChanges$ = this.invoiceForm.controls['items'].valueChanges;
        // console.log(this.myFormValueChanges$);
        // subscribe to the stream so listen to changes on units
        this.myFormValueChanges$.subscribe(function (units) {
            _this.updateTotalUnitPrice(units),
                _this.updateFilteredProduits(units);
        });
        // Recuperer les changements du client
        this.clientValueChange$ = this.invoiceForm.controls['client'].valueChanges;
        this.clientValueChange$.subscribe(function (id) {
            _this.selectedClient = _this.clients.find(function (n) { return n.id = id; });
        });
        // set the date and the payment mode
        this.invoiceForm.controls['payMode'].patchValue(this.payMode.CASH);
        //  this.invoiceForm.controls['dateTrans'].patchValue( formatDate(new Date(), 'mediumDate', 'en-US'));
    };
    /**
   * unsubscribe listener
   */
    InvoiceCreateComponent.prototype.ngOnDestroy = function () {
        this.myFormValueChanges$.unsubscribe();
        this.clientValueChange$.unsubscribe();
    };
    /**
     * Save form data
     */
    InvoiceCreateComponent.prototype.save = function (model, isValid, e) {
        var _this = this;
        e.preventDefault();
        // Initialize cash data
        // this.initData();
        this.cashService.getAll()
            .subscribe(function (p) {
            _this.accountBalances = p;
            console.log(_this.accountBalances);
        });
        // create a new invoice
        var invoice = new _shared_model_invoice__WEBPACK_IMPORTED_MODULE_10__["Invoice"]();
        // Give a static ref to the invoice that will always be unique
        invoice.invoiceRef = (new Date()).getFullYear() + 'F' + Math.round((new Date()).getTime() / 1000);
        invoice.transactionLines = [];
        this.listTransactions = [];
        this.today = this.invoiceForm.get('dateTrans').value;
        invoice.dateTrans = this.today;
        invoice.statut = 1 /* PAYE */;
        invoice.paymentMode = this.invoiceForm.get('payMode').value;
        invoice.client = this.selectedClient;
        this.getTransactionLines(model['items']);
        invoice.transactionLines = this.listTransactions.slice();
        //  invoice.totalInvoice = this.listTransactions.reduce(((sum, x) => sum + x.transAmount));
        invoice.totalInvoice = this.totalSum;
        this.invoiceService.create(invoice).subscribe(function (data) {
            _this.snackBar.open('Facture generee avec succes', 'Succes', {
                duration: 2000
            });
            _this.toastService.sendMessage('Fait avec succes', 'info');
            _this.isSaved = true;
            var lastCashBalance = _this.accountBalances
                .find(function (s) { return new Date(s['dateHisto']).getTime() === new Date(data['dateTrans']).getTime() &&
                s['payMode'] === data['paymentMode']; });
            // resultat des courses
            if (lastCashBalance === undefined || lastCashBalance === null) {
                var cashEvent = new _shared_model_cashBalance__WEBPACK_IMPORTED_MODULE_15__["CashBalance"]();
                cashEvent.dateHisto = data.dateTrans;
                cashEvent.payMode = data.paymentMode;
                cashEvent.balance = data.totalInvoice;
                _this.cashService.create(cashEvent)
                    .subscribe();
                console.log('caisse initiale du jour :' + cashEvent);
            }
            else {
                console.log(lastCashBalance);
                // then update the balance and save
                lastCashBalance.balance = lastCashBalance.balance + data.totalInvoice;
                _this.cashService.update(lastCashBalance).subscribe();
                console.log('caisse bien mise a jour :' + lastCashBalance.balance);
            }
        }, function (err) {
            _this.snackBar.open('Erreur survenue', 'Error', {
                duration: 2000
            });
        });
    };
    /**
     * Create form unit
     */
    InvoiceCreateComponent.prototype.getUnit = function () {
        var numberPatern = '^[0-9.,]+$';
        return this.fb.group({
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            codeProd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            quantite: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(numberPatern)]],
            prixUnit: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            unitTotalPrice: [{ value: '', disabled: true }]
        });
    };
    // Initialiase the form group
    InvoiceCreateComponent.prototype.initData = function () {
        // this.selectedItem = this.initItem;
        this.createForm();
    };
    // create the form if it does not exist
    InvoiceCreateComponent.prototype.createForm = function () {
        // this.invoiceForm ? this.invoiceForm = this.fb.group({}) :
        this.invoiceForm = this.fb.group({
            client: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dateTrans: [this.today, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            payMode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            items: this.fb.array([this.getUnit()])
        });
        // this.invoiceForm.reset();
    };
    /**
     * Add new unit row into form
     */
    InvoiceCreateComponent.prototype.addUnit = function () {
        var control = this.invoiceForm.controls['items'];
        control.push(this.getUnit());
    };
    /**
     * Remove unit row from form on click delete button
     */
    InvoiceCreateComponent.prototype.removeUnit = function (i) {
        var control = this.invoiceForm.controls['items'];
        control.removeAt(i);
    };
    /**
     * Update prices as soon as something changed on units group
     */
    InvoiceCreateComponent.prototype.updateTotalUnitPrice = function (items) {
        // get our units group controll
        var control = this.invoiceForm.controls['items'];
        // before recount total price need to be reset.
        this.totalSum = 0;
        for (var i in items) {
            if (items.hasOwnProperty(i)) {
                var totalUnitPrice = items[i].quantite * items[i].prixUnit;
                // now format total price with angular currency pipe
                var totalUnitPriceFormatted = this.currencyPipe.transform(totalUnitPrice, 'XOF ', 'symbol-narrow', '1.2-2');
                // update total sum field on unit and do not emit event myFormValueChanges$ in this case on units
                control.at(+i).get('unitTotalPrice').setValue(totalUnitPriceFormatted, { onlySelf: true, emitEvent: false });
                // update total price for all units
                this.totalSum += totalUnitPrice;
            }
        }
    };
    /**
   * Update prices as soon as something changed on units group
   */
    InvoiceCreateComponent.prototype.updateFilteredProduits = function (items) {
        var _loop_1 = function (i) {
            if (items.hasOwnProperty(i)) {
                if (!(items[i].category === undefined) && !(items[i].category == null)) {
                    this_1.filteredProduits[i] = this_1.produits.filter(function (produit) { return produit.category['nameCategory'] === items[i].category; });
                }
            }
        };
        var this_1 = this;
        // get our units group controll
        for (var i in items) {
            _loop_1(i);
        }
    };
    InvoiceCreateComponent.prototype.getTransactionLines = function (items) {
        var _loop_2 = function (i) {
            if (items.hasOwnProperty(i)) {
                var transax = new _shared_model_transactionLine__WEBPACK_IMPORTED_MODULE_11__["TransactionLine"]();
                transax.produit = this_2.produits.find(function (n) { return n['codeProd'] === items[i].codeProd; });
                transax.quantity = items[i].quantite;
                transax.unitValue = items[i].prixUnit;
                transax.creditAmount = Number(items[i].quantite) * Number(items[i].prixUnit);
                transax.txDate = this_2.today;
                this_2.listTransactions.push(transax);
            }
        };
        var this_2 = this;
        // tslint:disable-next-line:forin
        for (var i in items) {
            _loop_2(i);
        }
    };
    InvoiceCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-invoice-create',
            template: __webpack_require__(/*! ./invoice-create.component.html */ "./src/app/invoice/invoice-create/invoice-create.component.html"),
            styles: [__webpack_require__(/*! ./invoice-create.component.css */ "./src/app/invoice/invoice-create/invoice-create.component.css")]
        }),
        __metadata("design:paramtypes", [_services_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"],
            _services_produit_service__WEBPACK_IMPORTED_MODULE_7__["ProduitService"],
            _services_invoice_service__WEBPACK_IMPORTED_MODULE_9__["InvoiceService"],
            _services_transactionLine_service__WEBPACK_IMPORTED_MODULE_12__["TransactionLineService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSnackBar"],
            _services_HistoricCashBalance_service__WEBPACK_IMPORTED_MODULE_14__["HistoricCashBalanceService"],
            _shared_print_print_service__WEBPACK_IMPORTED_MODULE_1__["PrintService"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_0__["ToastService"]])
    ], InvoiceCreateComponent);
    return InvoiceCreateComponent;
}());

/**
* Get online geoIp information to pre-fill form fields country, city and zip
*/
/*  private getCountryByIpOnline(): Observable<any> {
   return this.http.get('https://ipapi.co/json/')
       .map(this.extractData)
       .catch(this.handleError);
 }
*/
/**
 * responce data extraction from http responce
 */
/*  private extractData(res: Response) {
   let body = res.json();
   return body || { };
 } */
/**
 * handle error if geoIp service not available.
 */
// private handleError (error: Response | any) {
// In a real world app, you might use a remote logging infrastructure
/*     let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  } */


/***/ }),

/***/ "./src/app/invoice/invoice.module.ts":
/*!*******************************************!*\
  !*** ./src/app/invoice/invoice.module.ts ***!
  \*******************************************/
/*! exports provided: InvoiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceModule", function() { return InvoiceModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _invoice_create_invoice_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invoice-create/invoice-create.component */ "./src/app/invoice/invoice-create/invoice-create.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _services_invoice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/invoice.service */ "./src/app/services/invoice.service.ts");
/* harmony import */ var _services_transactionLine_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/transactionLine.service */ "./src/app/services/transactionLine.service.ts");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm5/ngx-print.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var InvoiceModule = /** @class */ (function () {
    function InvoiceModule() {
    }
    InvoiceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_invoice_create_invoice_create_component__WEBPACK_IMPORTED_MODULE_5__["InvoiceCreateComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_print__WEBPACK_IMPORTED_MODULE_9__["NgxPrintModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MDBBootstrapModule"].forRoot()
            ],
            providers: [_services_invoice_service__WEBPACK_IMPORTED_MODULE_7__["InvoiceService"], _services_transactionLine_service__WEBPACK_IMPORTED_MODULE_8__["TransactionLineService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]]
        })
    ], InvoiceModule);
    return InvoiceModule;
}());



/***/ }),

/***/ "./src/app/login/login-modal.service.ts":
/*!**********************************************!*\
  !*** ./src/app/login/login-modal.service.ts ***!
  \**********************************************/
/*! exports provided: LoginModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModalService", function() { return LoginModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginModalService = /** @class */ (function () {
    function LoginModalService(modalService) {
        this.modalService = modalService;
        this.isOpen = false;
    }
    LoginModalService.prototype.open = function () {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        var modalRef = this.modalService.open(_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]);
        modalRef.result.then(function (result) {
            _this.isOpen = false;
        }, function (reason) {
            _this.isOpen = false;
        });
        return modalRef;
    };
    LoginModalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], LoginModalService);
    return LoginModalService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.main__container {\n    background-color: white;\n    height: 50px;\n    width: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n  }\n\n  .login-card {\n    display: flex;\n    background-color: #299ce9f5;\n    border-radius: 10px;\n    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.1);\n    width: 50%;\n    height: 50%;\n  }\n\n  .login-welcome-screen {\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex: 4 4;\n    background: linear-gradient(rgb(11, 85, 138), #321e4b);\n  }\n\n  .login-content {\n    flex: 3 3;\n    display: flex;\n    flex-flow: row;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .login-form {\n    display: flex;\n    flex-flow: column;\n    width: 70%;\n  }\n\n  .login__illustration {\n    height: 50%;\n    width: 50%;\n  }\n\n  .login-welcome-text {\n    color: black;\n    letter-spacing: 0.03rem;\n    margin-bottom: 6rem;\n    -webkit-animation-duration: 2s;\n            animation-duration: 2s;\n  }\n\n  .login-input {\n    margin: 0.75rem 0;\n    padding: 1rem;\n    border-radius: 2rem;\n    outline: none;\n    border: none;\n    box-shadow: 0 0 20px rgba(41, 40, 40, 0.05);\n    -webkit-animation-duration: 2s;\n            animation-duration: 2s;\n  }\n\n  .login-btn {\n    background: linear-gradient(#4fffd9, #03285f);\n    padding: 1rem;\n    border-radius: 2rem;\n    outline: none;\n    border: none;\n    color: white;\n    font-size: 1.1rem;\n    cursor: pointer;\n    margin-top: 1rem;\n    -webkit-animation-duration: 2s;\n            animation-duration: 2s;\n  }\n\n  .login-btn:hover {\n    background: linear-gradient(to right, #e21649, #ffb600);\n  }\n\n  .login-input::-webkit-input-placeholder {\n    color: #39437a;\n    font-size: 0.9rem;\n  }\n\n  .login-input::-moz-placeholder {\n    color: #39437a;\n    font-size: 0.9rem;\n  }\n\n  .login-input:-ms-input-placeholder {\n    color: #39437a;\n    font-size: 0.9rem;\n  }\n\n  .login-input::-ms-input-placeholder {\n    color: #39437a;\n    font-size: 0.9rem;\n  }\n\n  .login-input::placeholder {\n    color: #39437a;\n    font-size: 0.9rem;\n  }\n\n  .signup-notice {\n    margin-top: 1rem;\n    display: flex;\n    font-size: 0.2rem;\n  }\n\n  .signup-link {\n    text-decoration: none;\n    color: #ff3a82;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQiwwQ0FBMEM7SUFDMUMsVUFBVTtJQUNWLFdBQVc7RUFDYjs7RUFFQTtJQUNFLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULHNEQUFzRDtFQUN4RDs7RUFFQTtJQUNFLFNBQVM7SUFDVCxhQUFhO0lBQ2IsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiw4QkFBc0I7WUFBdEIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7SUFDWiwyQ0FBMkM7SUFDM0MsOEJBQXNCO1lBQXRCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLDZDQUE2QztJQUM3QyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDhCQUFzQjtZQUF0QixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSx1REFBdUQ7RUFDekQ7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUhBO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtFQUNuQjs7RUFIQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7O0VBSEE7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUhBO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGNBQWM7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubWFpbl9fY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAubG9naW4tY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk5Y2U5ZjU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDIwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgfVxuXG4gIC5sb2dpbi13ZWxjb21lLXNjcmVlbiB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4OiA0IDQ7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYigxMSwgODUsIDEzOCksICMzMjFlNGIpO1xuICB9XG5cbiAgLmxvZ2luLWNvbnRlbnQge1xuICAgIGZsZXg6IDMgMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAubG9naW4tZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgLmxvZ2luX19pbGx1c3RyYXRpb24ge1xuICAgIGhlaWdodDogNTAlO1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cblxuICAubG9naW4td2VsY29tZS10ZXh0IHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogNnJlbTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xuICB9XG5cbiAgLmxvZ2luLWlucHV0IHtcbiAgICBtYXJnaW46IDAuNzVyZW0gMDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSg0MSwgNDAsIDQwLCAwLjA1KTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xuICB9XG5cbiAgLmxvZ2luLWJ0biB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM0ZmZmZDksICMwMzI4NWYpO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgfVxuXG4gIC5sb2dpbi1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2UyMTY0OSwgI2ZmYjYwMCk7XG4gIH1cblxuICAubG9naW4taW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzM5NDM3YTtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgfVxuXG4gIC5zaWdudXAtbm90aWNlIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAwLjJyZW07XG4gIH1cblxuICAuc2lnbnVwLWxpbmsge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogI2ZmM2E4MjtcbiAgfVxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"modal-header\">\n  <h4 class=\"modal-title\" >Sign in</h4>\n  <button aria-label=\"Close\" data-dismiss=\"modal\" class=\"close\" type=\"button\"\n  (click)=\"activeModal.dismiss('closed')\"><span aria-hidden=\"true\">x</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"row justify-content-center\">\n      <div class=\"col-md-8\">\n          <div *ngIf=\"isLoginFailed\" class=\"alert alert-danger\" >\n              <strong>Erreur de connexion!</strong>\n              Vérifier vos paramètres de connexion et reéssayer.\n          </div>\n      </div>\n      <div class=\"col-md-8\">\n          <form class=\"form-signin\"  #f=\"ngForm\" (ngSubmit)=\"signin(f.value)\">\n            <div *ngIf=\"isLoginFailed\" class=\"alert alert-danger\">\n              Invalid username and/or password\n            </div>\n              <div class=\"form-group\">\n                  <label for=\"username\"  >Login</label>\n                  <input type=\"text\" name=\"username\" ngModel placeholder=\"username\" class=\"form-control\"\n                >\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"password\" >Password</label>\n                  <input type=\"password\" name=\"password\"  ngModel placeholder=\"password\" class=\"form-control\"\n                  >\n            </div>\n              <div class=\"form-check\">\n                  <label class=\"form-check-label\" for=\"rememberMe\">\n                      <input class=\"form-check-input\" type=\"checkbox\" name=\"rememberMe\" id=\"rememberMe\" checked>\n                      <span >Remember me</span>\n                  </label>\n              </div>\n              <button type=\"submit\" class=\"btn btn-primary\"  >Sign in</button>\n          </form>\n          <div class=\"alert alert-warning\">\n              <a class=\"alert-link\" (click)=\"requestResetPassword()\" >Mot de passe oublié?</a>\n          </div>\n          <div class=\"alert alert-warning\">\n              <span >Pas encore de compte?</span>\n              <a class=\"alert-link\" (click)=\"register()\" >Creer un nouveau compte</a>\n          </div>\n      </div>\n  </div>\n</div>\n<!-- </ng-template> -->\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_login_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/login-info */ "./src/app/auth/login-info.ts");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, route, tokenStorage, activeModal) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.tokenStorage = tokenStorage;
        this.activeModal = activeModal;
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.signin = function (credentials) {
        var _this = this;
        this.loginInfo = new _auth_login_info__WEBPACK_IMPORTED_MODULE_4__["AuthLoginInfo"](credentials['username'], credentials['password']);
        this.authService.login(this.loginInfo)
            .subscribe(function (result) {
            if (result) {
                _this.tokenStorage.saveToken(result.accessToken);
                _this.tokenStorage.saveUsername(result.username);
                _this.tokenStorage.saveAuthorities(result.authorities);
                _this.isLoginFailed = false;
                var returnUrl = _this.route.snapshot.queryParamMap.get('returnUrl');
                _this.router.navigate([returnUrl || '/dashboard']);
                _this.roles = _this.tokenStorage.getAuthorities();
                _this.activeModal.dismiss('login success');
            }
            // this.reloadPage();
        }, function (error) {
            _this.errorMessage = error.error.message;
            _this.isLoginFailed = true;
        });
    };
    LoginComponent.prototype.cancel = function () {
        this.loginInfo = {
            username: null,
            password: null
        };
        this.activeModal.dismiss('cancel');
    };
    LoginComponent.prototype.register = function () {
        this.activeModal.dismiss('to state register');
        this.router.navigate(['/register']);
    };
    LoginComponent.prototype.requestResetPassword = function () {
        this.activeModal.dismiss('to state requestReset');
        this.router.navigate(['/reset', 'request']);
    };
    LoginComponent.prototype.reloadPage = function () {
        window.location.reload();
    };
    LoginComponent.prototype.logout = function () {
        this.isLoginFailed = true;
        this.authService.logout();
        this.activeModal.dismiss('cancel');
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/services/HistoricCashBalance.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/HistoricCashBalance.service.ts ***!
  \*********************************************************/
/*! exports provided: HistoricCashBalanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoricCashBalanceService", function() { return HistoricCashBalanceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _config_app_url_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/app.url.config */ "./src/app/config/app.url.config.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HistoricCashBalanceService = /** @class */ (function (_super) {
    __extends(HistoricCashBalanceService, _super);
    function HistoricCashBalanceService(_http) {
        return _super.call(this, _config_app_url_config__WEBPACK_IMPORTED_MODULE_3__["API_URLS"].CASHBALANCE_URL, _http) || this;
    }
    HistoricCashBalanceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HistoricCashBalanceService);
    return HistoricCashBalanceService;
}(_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));



/***/ }),

/***/ "./src/app/services/HistoricProdBalance.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/HistoricProdBalance.service.ts ***!
  \*********************************************************/
/*! exports provided: HistoricProdBalanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoricProdBalanceService", function() { return HistoricProdBalanceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _config_app_url_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/app.url.config */ "./src/app/config/app.url.config.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HistoricProdBalanceService = /** @class */ (function (_super) {
    __extends(HistoricProdBalanceService, _super);
    function HistoricProdBalanceService(_http) {
        return _super.call(this, _config_app_url_config__WEBPACK_IMPORTED_MODULE_3__["API_URLS"].PRODBALANCE_URL, _http) || this;
    }
    HistoricProdBalanceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HistoricProdBalanceService);
    return HistoricProdBalanceService;
}(_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));



/***/ }),

/***/ "./src/app/services/admin-auth-guard.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/admin-auth-guard.service.ts ***!
  \******************************************************/
/*! exports provided: AdminAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthGuard", function() { return AdminAuthGuard; });
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminAuthGuard = /** @class */ (function () {
    function AdminAuthGuard(router, tokenService) {
        this.router = router;
        this.tokenService = tokenService;
    }
    AdminAuthGuard.prototype.canActivate = function () {
        var roles = this.tokenService.getAuthorities();
        // tslint:disable-next-line:curly
        if (roles.includes('ROLE_ADMIN'))
            return true;
        this.router.navigate(['']);
        return false;
    };
    AdminAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_0__["TokenStorageService"]])
    ], AdminAuthGuard);
    return AdminAuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivateChild = function (next, state) {
        // const allowedRoles = next.data.allowedRoles;
        var isAuthorized = this.authService.isAdmin();
        if (!isAuthorized) {
            console.log(state.url);
            // this.router.navigate(['/access-denied']);
        }
        return isAuthorized;
    };
    AuthGuard.prototype.canActivate = function (route, state) {
        // tslint:disable-next-line:curly
        if (this.authService.isAdmin())
            return true;
        this.router.navigate(['/dashboard'], {
            queryParams: {
                returnUrl: state.url
            }
        });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _config_app_url_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/app.url.config */ "./src/app/config/app.url.config.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryService = /** @class */ (function (_super) {
    __extends(CategoryService, _super);
    function CategoryService(_http) {
        var _this = _super.call(this, _config_app_url_config__WEBPACK_IMPORTED_MODULE_3__["API_URLS"].CATEGORY_URL, _http) || this;
        _this._http = _http;
        return _this;
    }
    CategoryService.prototype.findProduits = function (nameCategory) {
        return this._http.get(_config_app_url_config__WEBPACK_IMPORTED_MODULE_3__["API_URLS"].CATEGORY_URL + ("/" + nameCategory));
    };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
}(_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));



/***/ }),

/***/ "./src/app/services/client.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/client.service.ts ***!
  \********************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _config_app_url_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/app.url.config */ "./src/app/config/app.url.config.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientService = /** @class */ (function (_super) {
    __extends(ClientService, _super);
    function ClientService(_http) {
        return _super.call(this, _config_app_url_config__WEBPACK_IMPORTED_MODULE_3__["API_URLS"].CLIENTS_URL, _http) || this;
    }
    ClientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ClientService);
    return ClientService;
}(_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));



/***/ }),

/***/ "./src/app/services/company.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/company.service.ts ***!
  \*********************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _config_app_url_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/app.url.config */ "./src/app/config/app.url.config.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyService = /** @class */ (function (_super) {
    __extends(CompanyService, _super);
    function CompanyService(_http) {
        return _super.call(this, _config_app_url_config__WEBPACK_IMPORTED_MODULE_3__["API_URLS"].COMPANY_URL, _http) || this;
    }
    CompanyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CompanyService);
    return CompanyService;
}(_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

// import { Invoice } from '../shared/model/invoice';
var DataService = /** @class */ (function () {
    function DataService(url, http) {
        this.url = url;
        this.http = http;
        //  httpOptions = {
        //   headers: new HttpHeaders({
        //     'Content-Type':  'application/json'
        //   })
        // };
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        // const token = localStorage.getItem('AuthToken');
        // this.headers.append('Authorization', 'Bearer ' + token);
    }
    DataService.prototype.getAll = function () {
        return this.http.get(this.url);
        // .pipe(); //catchError(this.handleError)
    };
    DataService.prototype.find = function (id) {
        return this.http.get(this.url + ("/" + id), { headers: this.headers });
    };
    DataService.prototype.create = function (resource) {
        // console.log(JSON.stringify(resource));
        return this.http.post(this.url, resource, { headers: this.headers });
        // .pipe(catchError(this.handleError));
    };
    DataService.prototype.update = function (resource) {
        return this.http.put(this.url, resource, { headers: this.headers });
        // .pipe(catchError(this.handleError));
    };
    DataService.prototype.delete = function (id) {
        return this.http.delete(this.url + ("/" + id), { headers: this.headers });
        // .pipe(catchError(this.handleError));
    };
    return DataService;
}());

// @Injectable()
// export class GeneralService {
//   private invoiceSource = new BehaviorSubject<Invoice>(new Invoice());
//   currentInvoice = this.invoiceSource.asObservable();
//   changeInvoice(invoice: Invoice) {
//       this.invoiceSource.next (invoice);
//       // console.log(invoice);
//   }
// }


/***/ }),

/***/ "./src/app/services/entree.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/entree.service.ts ***!
  \********************************************/
/*! exports provided: EntreeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntreeService", function() { return EntreeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _config_app_url_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/app.url.config */ "./src/app/config/app.url.config.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EntreeService = /** @class */ (function (_super) {
    __extends(EntreeService, _super);
    function EntreeService(_http) {
        return _super.call(this, _config_app_url_config__WEBPACK_IMPORTED_MODULE_3__["API_URLS"].ENTREE_URL, _http) || this;
    }
    EntreeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EntreeService);
    return EntreeService;
}(_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));



/***/ }),

/***/ "./src/app/services/fournisseur.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/fournisseur.service.ts ***!
  \*************************************************/
/*! exports provided: FournisseurService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FournisseurService", function() { return FournisseurService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _config_app_url_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/app.url.config */ "./src/app/config/app.url.config.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FournisseurService = /** @class */ (function (_super) {
    __extends(FournisseurService, _super);
    function FournisseurService(_http) {
        return _super.call(this, _config_app_url_config__WEBPACK_IMPORTED_MODULE_3__["API_URLS"].FOURNISSEURS_URL, _http) || this;
    }
    FournisseurService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FournisseurService);
    return FournisseurService;
}(_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));



/***/ }),

/***/ "./src/app/services/invoice.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/invoice.service.ts ***!
  \*********************************************/
/*! exports provided: InvoiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceService", function() { return InvoiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _config_app_url_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/app.url.config */ "./src/app/config/app.url.config.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvoiceService = /** @class */ (function (_super) {
    __extends(InvoiceService, _super);
    function InvoiceService(_http) {
        var _this = _super.call(this, _config_app_url_config__WEBPACK_IMPORTED_MODULE_3__["API_URLS"].INVOICE_URL, _http) || this;
        _this._http = _http;
        return _this;
    }
    InvoiceService.prototype.addTransactionLine = function (invoiceId, transax) {
        // JSON.stringify(transax);
        return this._http.post(_config_app_url_config__WEBPACK_IMPORTED_MODULE_3__["API_URLS"].INVOICE_URL + ("/" + invoiceId) + "/transax", transax);
    };
    InvoiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], InvoiceService);
    return InvoiceService;
}(_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));



/***/ }),

/***/ "./src/app/services/produit.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/produit.service.ts ***!
  \*********************************************/
/*! exports provided: ProduitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProduitService", function() { return ProduitService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _config_app_url_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/app.url.config */ "./src/app/config/app.url.config.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProduitService = /** @class */ (function (_super) {
    __extends(ProduitService, _super);
    function ProduitService(_http) {
        var _this = _super.call(this, _config_app_url_config__WEBPACK_IMPORTED_MODULE_3__["API_URLS"].PRODUITS_URL, _http) || this;
        _this._http = _http;
        return _this;
    }
    ProduitService.prototype.getProduitsByCategory = function (nameCategorie) {
        return this._http.get(_config_app_url_config__WEBPACK_IMPORTED_MODULE_3__["API_URLS"].PRODUITS_URL + ("/by/" + nameCategorie));
    };
    ProduitService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProduitService);
    return ProduitService;
}(_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));



/***/ }),

/***/ "./src/app/services/sortie.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/sortie.service.ts ***!
  \********************************************/
/*! exports provided: SortieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortieService", function() { return SortieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _config_app_url_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/app.url.config */ "./src/app/config/app.url.config.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SortieService = /** @class */ (function (_super) {
    __extends(SortieService, _super);
    function SortieService(_http) {
        return _super.call(this, _config_app_url_config__WEBPACK_IMPORTED_MODULE_3__["API_URLS"].SORTIE_URL, _http) || this;
    }
    SortieService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SortieService);
    return SortieService;
}(_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));



/***/ }),

/***/ "./src/app/services/spendings.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/spendings.service.ts ***!
  \***********************************************/
/*! exports provided: SpendingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpendingsService", function() { return SpendingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _config_app_url_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/app.url.config */ "./src/app/config/app.url.config.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpendingsService = /** @class */ (function (_super) {
    __extends(SpendingsService, _super);
    function SpendingsService(_http) {
        var _this = _super.call(this, _config_app_url_config__WEBPACK_IMPORTED_MODULE_3__["API_URLS"].SPENDINGS_URL, _http) || this;
        _this._http = _http;
        return _this;
    }
    SpendingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SpendingsService);
    return SpendingsService;
}(_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));



/***/ }),

/***/ "./src/app/services/toast.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_model_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/model/message */ "./src/app/shared/model/message.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastService = /** @class */ (function () {
    function ToastService() {
        this.messages = [];
    }
    ToastService.prototype.getMessages = function () {
        // console.log(this.messages);
        return this.messages;
    };
    ToastService.prototype.sendMessage = function (content, style) {
        var message = new _shared_model_message__WEBPACK_IMPORTED_MODULE_1__["Message"](content, style);
        this.messages.push(message);
        // this.db.list('/messages').push(message)
    };
    ToastService.prototype.dismissMessage = function (messageKey) {
        // this.db.object(`messages/${messageKey}`).update({'dismissed': true})
    };
    ToastService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ToastService);
    return ToastService;
}());



/***/ }),

/***/ "./src/app/services/transactionLine.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/transactionLine.service.ts ***!
  \*****************************************************/
/*! exports provided: TransactionLineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionLineService", function() { return TransactionLineService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _config_app_url_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/app.url.config */ "./src/app/config/app.url.config.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransactionLineService = /** @class */ (function (_super) {
    __extends(TransactionLineService, _super);
    function TransactionLineService(_http) {
        var _this = _super.call(this, _config_app_url_config__WEBPACK_IMPORTED_MODULE_3__["API_URLS"].TRANSALINE_URL, _http) || this;
        _this._http = _http;
        return _this;
    }
    TransactionLineService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TransactionLineService);
    return TransactionLineService;
}(_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _config_app_url_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/app.url.config */ "./src/app/config/app.url.config.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService(_http) {
        var _this = _super.call(this, _config_app_url_config__WEBPACK_IMPORTED_MODULE_0__["API_URLS"].USER_URL, _http) || this;
        _this._http = _http;
        return _this;
    }
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserService);
    return UserService;
}(_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));



/***/ }),

/***/ "./src/app/shared/app.routing.module.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/app.routing.module.ts ***!
  \**********************************************/
/*! exports provided: appRoutes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../signup/signup.component */ "./src/app/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    { path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"]
    },
    {
        path: 'dashboard',
        loadChildren: '../dashboard/dashboard.module#DashboardModule'
    },
    {
        path: '',
        redirectTo: 'dashboard', pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, { enableTracing: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            entryComponents: [_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/shared/crud/crud.component.css":
/*!************************************************!*\
  !*** ./src/app/shared/crud/crud.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jcnVkL2NydWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/crud/crud.component.html":
/*!*************************************************!*\
  !*** ./src/app/shared/crud/crud.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n<ng-container *ngIf=\"data\">\n\n    <div class=\"container\">\n    <div>\n  <h3>{{title}}</h3>\n\n    <ul class=\"nav nav-pills\">\n      <li class=\"nav-item \" >\n\n        <a class=\" nav-link  fa fa-plus\"  aria-hidden=\"true\" data-toggle=\"collapse\"\n\n        [ngClass]=\"{'active': crudType == 'sample'}\"\n        (click)=\"crudType='sample'\"></a>\n\n      </li>\n      <li  class=\"nav-item \">\n        <a class=\"nav-link fa fa-file-excel-o\" data-toggle=\"collapse\"\n        [ngClass]=\"{'active': crudType == 'upload'}\"\n        (click)=\"crudType='upload'\">&nbsp;Importer un fichier</a>\n      </li>\n    </ul>\n  </div>\n      <div *ngIf=\"crudType == 'sample'\">\n        <app-sample\n          [title]=\"title\"\n          [data]=\"data\"\n          [service]=\"service\"\n          [initItem]=\"initItem\"\n          [initForm]=\"initForm\"\n          [dataModelList]=\"dataModelList\"\n          [arrayData]=\"arrayData\"\n          [arrayModelList]=\"arrayModelList\"\n          [enumElements]=\"enumElements\"\n          [enumType]=\"enumType\">\n\n        </app-sample>\n      </div>\n\n      <div *ngIf=\"crudType == 'upload'\">\n        <app-upload *ngIf=\"crudType == 'upload'\"></app-upload>\n      </div>\n    </div>\n  </ng-container>\n<!--\n  <ng-template #loading>\n    <mat-card>\n      <h1>Pas de donnees a charger</h1>\n    </mat-card>\n  </ng-template> -->\n\n  </mat-card>\n"

/***/ }),

/***/ "./src/app/shared/crud/crud.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/crud/crud.component.ts ***!
  \***********************************************/
/*! exports provided: CrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudComponent", function() { return CrudComponent; });
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CrudComponent = /** @class */ (function () {
    function CrudComponent(fb) {
        this.fb = fb;
        this.crudType = 'sample';
        this.enumElements = [];
        this.operation = 'add';
    }
    CrudComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data'),
        __metadata("design:type", Object)
    ], CrudComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('arrayData'),
        __metadata("design:type", Object)
    ], CrudComponent.prototype, "arrayData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('service'),
        __metadata("design:type", _services_data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"])
    ], CrudComponent.prototype, "service", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('title'),
        __metadata("design:type", String)
    ], CrudComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], CrudComponent.prototype, "initItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array)
    ], CrudComponent.prototype, "dataModelList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array)
    ], CrudComponent.prototype, "arrayModelList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], CrudComponent.prototype, "enumElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], CrudComponent.prototype, "enumType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], CrudComponent.prototype, "initForm", void 0);
    CrudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-crud',
            template: __webpack_require__(/*! ./crud.component.html */ "./src/app/shared/crud/crud.component.html"),
            styles: [__webpack_require__(/*! ./crud.component.css */ "./src/app/shared/crud/crud.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CrudComponent);
    return CrudComponent;
}());



/***/ }),

/***/ "./src/app/shared/crud/sample/sample.component.css":
/*!*********************************************************!*\
  !*** ./src/app/shared/crud/sample/sample.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jcnVkL3NhbXBsZS9zYW1wbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/crud/sample/sample.component.html":
/*!**********************************************************!*\
  !*** ./src/app/shared/crud/sample/sample.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n<div class=\"row\">\n  <div class=\"col-lg-8\">\n    <table class=\"table table-hover table-striped table-sm\">\n      <thead>\n        <tr>\n          <th *ngFor=\"let dataModel of dataModelList\">{{dataModel.columnReference}}</th>\n          <th>\n            <button class=\"btn btn-outline-primary btn-sm\" (click)=\"operation = 'add'; initData();\">ADD</button>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of data\">\n\n          <td *ngFor=\"let dataModel of dataModelList\">\n                {{dataModel.dataType == 'Array' ? item[dataModel.columnName][arrayModelList[1].columnName]: item[dataModel.columnName]}}\n          </td>\n          <td>\n            <button class=\"btn btn-outline-primary btn-sm\" (click)=\"selectedItem = item; operation = 'edit';getValues()\">Edit\n            </button>\n\n            <button class=\"btn btn-outline-danger btn-sm\" (click)=\"selectedItem = item;operation = 'remove' \">Remove</button>\n          </td>\n\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"col-lg-4\">\n    <div class=\"card\">\n      <div class=\"card-header bg-info text-white\">\n        {{ operation == 'add' ? 'Ajouter un Produit' : operation == 'edit' ? 'Modifier Produit' : operation == 'remove' ? 'Supprimer\n        Produit' : '' }}\n      </div>\n      <div class=\"card-body\">\n\n        <div *ngIf=\"operation == 'add' || operation == 'edit'\">\n          <form [formGroup]=\"crudForm\" (change)=\"onChange($event)\">\n\n            <div *ngFor=\"let dataModel of dataModelList\" [ngSwitch]=\"dataModel.dataType\">\n              <div class=\"form-group\" *ngIf=\"!dataModel.readonly\">\n                <label>{{dataModel.columnReference}}:</label>\n                <!-- for string fields -->\n                <input *ngSwitchCase=\"'string'\" type=\"text\" formControlName=\"{{dataModel.columnName}}\" class=\"form-control\" />\n                <!-- for number fields -->\n                <input *ngSwitchCase=\"'number'\" type=\"number\" formControlName=\"{{dataModel.columnName}}\" class=\"form-control\" />\n                <!-- for date fields -->\n                <input *ngSwitchCase=\"'date'\" type=\"date\" formControlName=\"{{dataModel.columnName}}\" class=\"form-control\" />\n                <!-- for password fields -->\n                <input *ngSwitchCase=\"'password'\" type=\"password\" formControlName=\"{{dataModel.columnName}}\" class=\"form-control\" />\n               <!-- for collection data -->\n                <select *ngSwitchCase=\"'Array'\" type=\"Array\"\n               ngModel formControlName=\"{{dataModel.columnName}}\" class=\"form-control\" >\n                <!-- <option>{{array}}</option> -->\n                  <option\n                  [ngValue]=\"array[arrayModelList[0].columnName]=== dataModel.columnName?.id ? dataModel.columnName : array\"\n                  *ngFor=\" let array of arrayData\">\n                   <!-- {{array[arrayModelList[1]].columnName}} -->\n                   {{array[arrayModelList[1].columnName]}}\n                  </option>\n\n                </select>\n                <select *ngSwitchCase=\"'enum'\" type=\"Array\"\n               ngModel formControlName=\"{{dataModel.columnName}}\" class=\"form-control\" >\n                <!-- <option>{{array}}</option> -->\n                <option  *ngFor=\"let el of enumElements\" [value]=\"enumType[el]\" [label]=\"enumType[el]\"></option>\n                </select>\n              </div>\n            </div>\n\n            <button class=\"btn btn-success\" [disabled]=\"crudForm.pristine || crudForm.invalid\" (click)=\"operation == 'add' ? add() : update()\">\n              {{operation == 'add' ? 'Ajouter' : operation == 'edit' ? 'Modifier' : ''}}\n            </button>\n          </form>\n\n        </div>\n        <div *ngIf=\"operation == 'remove'\">\n          <p class=\"card-title\">Référence: {{selectedItem.id}}</p>\n          <p>Voulez-vous supprimer cet élément :{{selectedItem.id}} ?</p>\n          <button class=\"btn btn-success\" [disabled]=\"!selectedItem.id\" (click)=\"delete();operation = 'add'; initData()\">Confirmer</button>\n        </div>\n\n      </div>\n      <div class=\"card-footer bg-info\"></div>\n    </div>\n  </div>\n</div>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/shared/crud/sample/sample.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/crud/sample/sample.component.ts ***!
  \********************************************************/
/*! exports provided: SampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleComponent", function() { return SampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SampleComponent = /** @class */ (function () {
    function SampleComponent(fb) {
        this.fb = fb;
        this.operation = 'add';
        this.enumElements = [];
        this.selectedItemChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.createForm();
    }
    SampleComponent.prototype.ngOnInit = function () {
        this.initData();
        if (this.enumType != null) {
            this.enumElements = Object.keys(this.enumType).filter(function (f) { return !isNaN(Number(f)); });
        }
        // this.onChange();
    };
    SampleComponent.prototype.getValues = function () {
        this.crudForm.patchValue(this.selectedItem);
    };
    SampleComponent.prototype.onChange = function () {
        var _this = this;
        this.crudForm.valueChanges.subscribe(function (val) {
            // this.selectedItem = event.target.value;
            _this.selectedItem = val;
            _this.selectedItemChange.emit(_this.selectedItem);
            // console.log(this.selectedItem);
            //  this.crudForm.patchValue(this.selectedItem);
        });
    };
    SampleComponent.prototype.createForm = function () {
        this.initForm ? this.crudForm = this.initForm : this.crudForm = this.fb.group({});
    };
    SampleComponent.prototype.loadData = function () {
        var _this = this;
        this.service.getAll().subscribe(function (data) {
            _this.data = data;
        });
    };
    SampleComponent.prototype.add = function () {
        var _this = this;
        var p = this.crudForm.value;
        this.service.create(p).subscribe(function (res) {
            _this.loadData();
        });
        this.initData();
    };
    SampleComponent.prototype.update = function () {
        var _this = this;
        this.service.update(this.selectedItem).subscribe(function (res) {
            _this.initData();
            _this.loadData();
        });
    };
    SampleComponent.prototype.initData = function () {
        this.selectedItem = this.initItem;
        this.createForm();
    };
    SampleComponent.prototype.delete = function () {
        var _this = this;
        this.service.delete(this.selectedItem.id).subscribe(function (res) {
            _this.selectedItem = _this.initItem;
            _this.loadData();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SampleComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SampleComponent.prototype, "arrayData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])
    ], SampleComponent.prototype, "service", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SampleComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SampleComponent.prototype, "initItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SampleComponent.prototype, "dataModelList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SampleComponent.prototype, "arrayModelList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], SampleComponent.prototype, "initForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SampleComponent.prototype, "enumElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SampleComponent.prototype, "enumType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SampleComponent.prototype, "selectedItemChange", void 0);
    SampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sample',
            template: __webpack_require__(/*! ./sample.component.html */ "./src/app/shared/crud/sample/sample.component.html"),
            styles: [__webpack_require__(/*! ./sample.component.css */ "./src/app/shared/crud/sample/sample.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], SampleComponent);
    return SampleComponent;
}());



/***/ }),

/***/ "./src/app/shared/crud/upload/upload.component.css":
/*!*********************************************************!*\
  !*** ./src/app/shared/crud/upload/upload.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jcnVkL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/crud/upload/upload.component.html":
/*!**********************************************************!*\
  !*** ./src/app/shared/crud/upload/upload.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"file\" id=\"uploadFile\" name=\"UploadFile\" #fileUploadInput accept=\".csv\" (change)=\"selectFile($event)\" />\n\n<div>{{logObject | json}}</div>\n"

/***/ }),

/***/ "./src/app/shared/crud/upload/upload.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/crud/upload/upload.component.ts ***!
  \********************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UploadComponent = /** @class */ (function () {
    function UploadComponent() {
    }
    UploadComponent.prototype.ngOnInit = function () {
    };
    UploadComponent.prototype.getbindHeadersDataModelListArray = function (headers) {
        return headers;
    };
    UploadComponent.prototype.selectFile = function ($event) {
        var _this = this;
        var fileList = $event.srcElement.files;
        var file = fileList[0];
        if (file && file.name.endsWith('.csv')) {
            var input = $event.target;
            var reader_1 = new FileReader();
            reader_1.readAsText(input.files[0]);
            reader_1.onload = function (data) {
                var csvData = reader_1.result;
                var csvRecordArray = csvData.split(/\r\n|\n/);
                var headers = csvRecordArray && csvRecordArray.length > 0 ? csvRecordArray[0].split(';') : [];
                var bindArray = _this.getbindHeadersDataModelListArray(headers);
                _this.logObject = bindArray;
            };
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileUploadInput'),
        __metadata("design:type", Object)
    ], UploadComponent.prototype, "fileUploadInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], UploadComponent.prototype, "dataModelList", void 0);
    UploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/shared/crud/upload/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.component.css */ "./src/app/shared/crud/upload/upload.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatTableModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["WavesModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatTableModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["WavesModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/messaging/animation.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/messaging/animation.ts ***!
  \***********************************************/
/*! exports provided: notifyAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifyAnimation", function() { return notifyAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var notifyAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('notify', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        height: 0,
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        height: '*',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => show, show => void', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.25s')
    ]),
]);


/***/ }),

/***/ "./src/app/shared/messaging/messaging.module.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/messaging/messaging.module.ts ***!
  \******************************************************/
/*! exports provided: MessagingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingModule", function() { return MessagingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _notifier_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifier.component */ "./src/app/shared/messaging/notifier.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MessagingModule = /** @class */ (function () {
    function MessagingModule() {
    }
    MessagingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_notifier_component__WEBPACK_IMPORTED_MODULE_2__["NotifierComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [_notifier_component__WEBPACK_IMPORTED_MODULE_2__["NotifierComponent"]]
        })
    ], MessagingModule);
    return MessagingModule;
}());



/***/ }),

/***/ "./src/app/shared/messaging/notifer.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/messaging/notifer.service.ts ***!
  \*****************************************************/
/*! exports provided: NotiferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotiferService", function() { return NotiferService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifier */ "./src/app/shared/messaging/notifier.ts");
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification */ "./src/app/shared/messaging/notification.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotiferService = /** @class */ (function () {
    function NotiferService() {
        this.notifier = new _notifier__WEBPACK_IMPORTED_MODULE_1__["Notifier"]();
    }
    NotiferService.prototype.notify = function (message, notificationType, duration) {
        var _this = this;
        if (duration === void 0) { duration = 8000; }
        var notification = new _notification__WEBPACK_IMPORTED_MODULE_2__["Notification"](message, notificationType);
        var dismissWait = function () {
            new Promise(function (resolve) { return setTimeout(resolve, duration); }).then(function () {
                _this.notifier.destroy(notification);
            });
        };
        this.notifier.add(notification);
        dismissWait();
    };
    NotiferService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], NotiferService);
    return NotiferService;
}());



/***/ }),

/***/ "./src/app/shared/messaging/notification.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/messaging/notification.ts ***!
  \**************************************************/
/*! exports provided: NotificationType, Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationType", function() { return NotificationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["Accept"] = 1] = "Accept";
    NotificationType[NotificationType["Fail"] = 2] = "Fail";
})(NotificationType || (NotificationType = {}));
var Notification = /** @class */ (function () {
    function Notification(message, type) {
        this.message = message;
        this.type = type;
    }
    return Notification;
}());



/***/ }),

/***/ "./src/app/shared/messaging/notifier.component.css":
/*!*********************************************************!*\
  !*** ./src/app/shared/messaging/notifier.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " /* :host {\n     font-size: 1.2rem;\n    margin: 5 auto;\n    box-sizing: border-box;\n    z-index: 0;\n    position: relative;\n    right: 100;\n    left: 0;\n    bottom: 200;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n  }\n     div {\n      max-width: 30rem;\n      width: 100%;\n      z-index: 2001;\n      margin: 0 auto;\n      box-sizing: border-box;\n     } * {\n        margin: 0.5rem;\n        padding: 0.5rem;\n        border: 1px solid orange;\n        box-shadow: 0px 0px 4px orange;\n        background: #303030;}\n\n        button {\n          border: 0;\n          padding: 0;\n          margin: 0;\n          background: transparent;\n          color: HSL(0, 0%, 85%);\n        }:disabled {\n            color: HSL(0, 0%, 45%) !important;\n          }\n        :focus :active {\n            color: #7ecfff;\n            cursor: pointer;\n\n          float: right;\n          width: 1.2rem;\n          height: 1.2rem;\n        }\n\n  .level {\n    display: inline-block;\n    padding: 0 .25ch;\n    margin-right: .5ch;\n    height: 1em;\n    width: 1em;\n    vertical-align: text-top;}\n\n    .accept-type {\n      color: #43cd2e;\n    }\n    .fail-type {\n      color: #d2172c;\n    } */\n\n\n.ng-container {\n  background-color: blueviolet\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21lc3NhZ2luZy9ub3RpZmllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQTJETTs7O0FBR1A7RUFDRTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL21lc3NhZ2luZy9ub3RpZmllci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC8qIDpob3N0IHtcbiAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgbWFyZ2luOiA1IGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB6LWluZGV4OiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMTAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAyMDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgfVxuICAgICBkaXYge1xuICAgICAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgei1pbmRleDogMjAwMTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgfSAqIHtcbiAgICAgICAgbWFyZ2luOiAwLjVyZW07XG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCBvcmFuZ2U7XG4gICAgICAgIGJhY2tncm91bmQ6ICMzMDMwMzA7fVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGNvbG9yOiBIU0woMCwgMCUsIDg1JSk7XG4gICAgICAgIH06ZGlzYWJsZWQge1xuICAgICAgICAgICAgY29sb3I6IEhTTCgwLCAwJSwgNDUlKSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgOmZvY3VzIDphY3RpdmUge1xuICAgICAgICAgICAgY29sb3I6ICM3ZWNmZmY7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgd2lkdGg6IDEuMnJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDEuMnJlbTtcbiAgICAgICAgfVxuXG4gIC5sZXZlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDAgLjI1Y2g7XG4gICAgbWFyZ2luLXJpZ2h0OiAuNWNoO1xuICAgIGhlaWdodDogMWVtO1xuICAgIHdpZHRoOiAxZW07XG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO31cblxuICAgIC5hY2NlcHQtdHlwZSB7XG4gICAgICBjb2xvcjogIzQzY2QyZTtcbiAgICB9XG4gICAgLmZhaWwtdHlwZSB7XG4gICAgICBjb2xvcjogI2QyMTcyYztcbiAgICB9ICovXG5cblxuLm5nLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXRcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/messaging/notifier.component.html":
/*!**********************************************************!*\
  !*** ./src/app/shared/messaging/notifier.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"src\">\n    <ng-container class=\"content\" *ngFor=\"let notification of src.notifications.reverse()\" >\n      <div [@notify]=\"'show'\">\n        <div>\n          <button (click)=\"src.destroy(notification)\">\n            <!-- <app-close-x-icon></app-close-x-icon> -->\n          </button>\n          <ng-container [ngSwitch]=\"notification.type\">\n            <ng-container *ngSwitchCase=\"1\" style=\"background-color: skyblue\">\n              <span class=\"level\" [ngClass]=\"{'accept-type': notification.type == 1}\">\n                <!-- <app-accept-icon></app-accept-icon> -->\n\n              </span>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"2\" style=\"background-color: skyblue; width: 120em;\">\n              <span class=\"level\" [ngClass]=\"{'fail-type': notification.type == 2}\">\n                <!-- <app-fail-icon></app-fail-icon> -->\n              </span>\n            </ng-container>\n          </ng-container>\n          <span>{{notification.message}}</span>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/shared/messaging/notifier.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/messaging/notifier.component.ts ***!
  \********************************************************/
/*! exports provided: NotifierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierComponent", function() { return NotifierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notifer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifer.service */ "./src/app/shared/messaging/notifer.service.ts");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation */ "./src/app/shared/messaging/animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotifierComponent = /** @class */ (function () {
    function NotifierComponent(_notifierService) {
        this._notifierService = _notifierService;
    }
    Object.defineProperty(NotifierComponent.prototype, "src", {
        get: function () {
            return this._notifierService.notifier;
        },
        enumerable: true,
        configurable: true
    });
    NotifierComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notifier',
            template: __webpack_require__(/*! ./notifier.component.html */ "./src/app/shared/messaging/notifier.component.html"),
            animations: [_animation__WEBPACK_IMPORTED_MODULE_2__["notifyAnimation"]],
            styles: [__webpack_require__(/*! ./notifier.component.css */ "./src/app/shared/messaging/notifier.component.css")]
        }),
        __metadata("design:paramtypes", [_notifer_service__WEBPACK_IMPORTED_MODULE_1__["NotiferService"]])
    ], NotifierComponent);
    return NotifierComponent;
}());



/***/ }),

/***/ "./src/app/shared/messaging/notifier.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/messaging/notifier.ts ***!
  \**********************************************/
/*! exports provided: Notifier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notifier", function() { return Notifier; });
var Notifier = /** @class */ (function () {
    function Notifier() {
        this.notifications = [];
    }
    Notifier.prototype.destroy = function (notification) {
        this.notifications.splice(this.notifications.indexOf(notification), 1);
    };
    Notifier.prototype.add = function (notification) {
        this.notifications.unshift(notification);
    };
    return Notifier;
}());



/***/ }),

/***/ "./src/app/shared/model/appro.ts":
/*!***************************************!*\
  !*** ./src/app/shared/model/appro.ts ***!
  \***************************************/
/*! exports provided: Appro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Appro", function() { return Appro; });
var Appro = /** @class */ (function () {
    function Appro(id, approRef, transactionLines, user, dateAppro) {
        this.id = id;
        this.approRef = approRef;
        this.transactionLines = transactionLines;
        this.user = user;
        this.dateAppro = dateAppro;
    }
    return Appro;
}());



/***/ }),

/***/ "./src/app/shared/model/cashBalance.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/model/cashBalance.ts ***!
  \*********************************************/
/*! exports provided: CashBalance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashBalance", function() { return CashBalance; });
var CashBalance = /** @class */ (function () {
    function CashBalance(id, dateHisto, payMode, balance) {
        this.id = id;
        this.dateHisto = dateHisto;
        this.payMode = payMode;
        this.balance = balance;
    }
    return CashBalance;
}());



/***/ }),

/***/ "./src/app/shared/model/category.ts":
/*!******************************************!*\
  !*** ./src/app/shared/model/category.ts ***!
  \******************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
var Category = /** @class */ (function () {
    function Category(id, nameCategory, createAt) {
        this.id = id;
        this.nameCategory = nameCategory;
        this.createAt = createAt;
    }
    return Category;
}());



/***/ }),

/***/ "./src/app/shared/model/client.ts":
/*!****************************************!*\
  !*** ./src/app/shared/model/client.ts ***!
  \****************************************/
/*! exports provided: Client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
var Client = /** @class */ (function () {
    function Client(id, nameClient, codeIfuClient, phoneClient) {
        this.id = id;
        this.nameClient = nameClient;
        this.codeIfuClient = codeIfuClient;
        this.phoneClient = phoneClient;
    }
    return Client;
}());



/***/ }),

/***/ "./src/app/shared/model/company.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/model/company.ts ***!
  \*****************************************/
/*! exports provided: Company */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
var Company = /** @class */ (function () {
    function Company(id, nameCompany, codeIfuCompany, phoneCompany, adressCompany, logoCompany) {
        this.id = id;
        this.nameCompany = nameCompany;
        this.codeIfuCompany = codeIfuCompany;
        this.phoneCompany = phoneCompany;
        this.adressCompany = adressCompany;
        this.logoCompany = logoCompany;
    }
    return Company;
}());



/***/ }),

/***/ "./src/app/shared/model/data.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/model/data.model.ts ***!
  \********************************************/
/*! exports provided: DataModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataModel", function() { return DataModel; });
var DataModel = /** @class */ (function () {
    function DataModel(columnName, columnReference, dataType, readonly, messages) {
        this.columnName = columnName;
        this.columnReference = columnReference;
        this.dataType = dataType;
        this.readonly = readonly;
        this.messages = messages;
    }
    return DataModel;
}());



/***/ }),

/***/ "./src/app/shared/model/fournisseur.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/model/fournisseur.ts ***!
  \*********************************************/
/*! exports provided: Fournisseur */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fournisseur", function() { return Fournisseur; });
var Fournisseur = /** @class */ (function () {
    function Fournisseur(id, nameSupplier, codeIfuSupplier, phoneSupplier) {
        this.id = id;
        this.nameSupplier = nameSupplier;
        this.codeIfuSupplier = codeIfuSupplier;
        this.phoneSupplier = phoneSupplier;
    }
    return Fournisseur;
}());



/***/ }),

/***/ "./src/app/shared/model/invoice.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/model/invoice.ts ***!
  \*****************************************/
/*! exports provided: PaymentMode, Invoice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMode", function() { return PaymentMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Invoice", function() { return Invoice; });
var PaymentMode;
(function (PaymentMode) {
    PaymentMode[PaymentMode["CASH"] = 0] = "CASH";
    PaymentMode[PaymentMode["BANK"] = 1] = "BANK";
    PaymentMode[PaymentMode["MOBILE"] = 2] = "MOBILE";
})(PaymentMode || (PaymentMode = {}));
var Invoice = /** @class */ (function () {
    function Invoice(id, invoiceRef, totalInvoice, dateTrans, statut, paymentMode, client, transactionLines, user) {
        this.id = id;
        this.invoiceRef = invoiceRef;
        this.totalInvoice = totalInvoice;
        this.dateTrans = dateTrans;
        this.statut = statut;
        this.paymentMode = paymentMode;
        this.client = client;
        this.transactionLines = transactionLines;
        this.user = user;
    }
    return Invoice;
}());



/***/ }),

/***/ "./src/app/shared/model/message.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/model/message.ts ***!
  \*****************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message(content, style) {
        this.dismissed = false;
        this.content = content;
        this.style = style || 'info';
    }
    return Message;
}());



/***/ }),

/***/ "./src/app/shared/model/spendings.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/model/spendings.ts ***!
  \*******************************************/
/*! exports provided: TypeSpending, Spending */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeSpending", function() { return TypeSpending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spending", function() { return Spending; });
var TypeSpending;
(function (TypeSpending) {
    TypeSpending[TypeSpending["CHARGES_PERSONNEL"] = 0] = "CHARGES_PERSONNEL";
    TypeSpending[TypeSpending["LOYER_LOCATIONS"] = 1] = "LOYER_LOCATIONS";
    TypeSpending[TypeSpending["TRANSPORT"] = 2] = "TRANSPORT";
    TypeSpending[TypeSpending["CHARGES_ELECTRICITE"] = 3] = "CHARGES_ELECTRICITE";
    TypeSpending[TypeSpending["CHARGES_EAU"] = 4] = "CHARGES_EAU";
})(TypeSpending || (TypeSpending = {}));
var Spending = /** @class */ (function () {
    function Spending(id, dateSpending, typeSpending, valueSpending, commentSpending) {
        this.id = id;
        this.dateSpending = dateSpending;
        this.typeSpending = typeSpending;
        this.valueSpending = valueSpending;
        this.commentSpending = commentSpending;
    }
    return Spending;
}());



/***/ }),

/***/ "./src/app/shared/model/transactionLine.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/model/transactionLine.ts ***!
  \*************************************************/
/*! exports provided: TransactionLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionLine", function() { return TransactionLine; });
var TransactionLine = /** @class */ (function () {
    function TransactionLine() {
    }
    return TransactionLine;
}());



/***/ }),

/***/ "./src/app/shared/print/invoice-html/invoice-html.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/shared/print/invoice-html/invoice-html.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#invoice_box {\n  background-color: #fff;\n  font-size: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n#invoice_table {\n  background-color: azure;\n  font-size: 10px;\n}\n\n#company_logo {\n  margin-top: 1px;\n  margin-left: 1px;\n  width: 100px;\n  height: 100px;\n\n}\n\n#box_company{\n  border-color: black;\n  border-radius: 5px;\n  border: 2px solid black;\n\n}\n\n.row-divide {\n  border-bottom: 1px solid black;\n}\n\n#box_client{\n  border-color: black;\n  border-radius: 5px;\n  border: 2px solid black;\n\n}\n\n.mat-card{\n  -webkit-border-after: 1px;\n          border-block-end: 1px;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3ByaW50L2ludm9pY2UtaHRtbC9pbnZvaWNlLWh0bWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTs7QUFFZjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsdUJBQXVCOztBQUV6Qjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsdUJBQXVCOztBQUV6Qjs7QUFDQTtFQUNFLHlCQUFxQjtVQUFyQixxQkFBcUI7O0FBRXZCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3ByaW50L2ludm9pY2UtaHRtbC9pbnZvaWNlLWh0bWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNpbnZvaWNlX2JveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4jaW52b2ljZV90YWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbiNjb21wYW55X2xvZ28ge1xuICBtYXJnaW4tdG9wOiAxcHg7XG4gIG1hcmdpbi1sZWZ0OiAxcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcblxufVxuI2JveF9jb21wYW55e1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuXG59XG5cbi5yb3ctZGl2aWRlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4jYm94X2NsaWVudHtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcblxufVxuLm1hdC1jYXJke1xuICBib3JkZXItYmxvY2stZW5kOiAxcHg7XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/print/invoice-html/invoice-html.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shared/print/invoice-html/invoice-html.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"content-wrapper\" style=\"height: 20px;margin: 5px;\">\n      <section class=\" content-header\">\n        <div  style=\"text-align: center\">\n          <h1>\n            <strong>\n            Facture A Imprimer\n          </strong>\n          </h1>\n          <ol class=\"breadcrumb \"></ol>\n        </div>\n      </section>\n      <section\n        id=\"print-section\"\n        class=\"content \"\n        *ngIf=\"invoice\"\n      >\n        <div  id=\"invoice_main\">\n          <div id=\"invoice_body\">\n            <!--invoice display starts\n              this serve to hold the customer name and company name\n              here-->\n            <div\n              class=\"d-flex justify-content-between col-10\"\n              id=\"invoice_box\"\n              style=\"margin-top:10px\"\n              #invoiceBox\n            >\n              <!--head row-->\n\n                  <mat-card  *ngIf=\"theCompany\" id=\"box_company\">\n                    <div style=\"font-size: 12px;\">\n                      <strong>{{ theCompany.nameCompany }}</strong>\n                      <br />\n                      <span>Adresse:&nbsp;{{ theCompany.adressCompany }}</span>\n                      <br />\n                      <span>Code IFU:&nbsp;{{ theCompany.codeIfuCompany }}</span>\n                      <br />\n                      <span>Tel:&nbsp;{{ theCompany.phoneCompany }}</span>\n                    </div>\n                  </mat-card>\n                  <!-- <div class=\"col-1\"></div> -->\n                  <!--center section serves to hold the logo-->\n                  <div >\n                    <img src=\"/assets/yasn logo.jpeg\" id=\"company_logo\" />\n                    <br />\n                  </div>\n                  <!-- <div class=\"col-1\"></div> -->\n                  <!--right section-->\n                  <mat-card\n                    id=\"box_client\"\n                    style=\"font-size: 12px;\"\n                  >\n                    <strong>FACTURE N :&nbsp;{{ invoice.invoiceRef }}</strong>\n                    <br />\n                    <span> Client:&nbsp;{{ invoice[\"client\"].nameClient }} </span>\n                    <br />\n                    <span>\n                      Contacts:&nbsp;{{ invoice[\"client\"].phoneClient }}\n                    </span>\n                  </mat-card>\n            </div>\n            <br>\n            <!--table section-->\n            <div class=\"col-10\" id=\"invoice_table\" *ngIf=\"invoice\">\n              <table class=\"table\">\n                <thead\n                  style=\"background-color: rgba(0, 183, 219, 0.68);height:20px;padding-left:10px\"\n                >\n                  <th>Produit</th>\n                  <th>Description</th>\n                  <th>Quantite</th>\n                  <th>Prix</th>\n                  <th>Montant</th>\n                </thead>\n                <tbody>\n                  <tr\n                    *ngFor=\"let tx of invoice['transactionLines']; let i = index\"\n                    [ngClass]=\"\n                      i == invoice['transactionLines'].length - 1\n                        ? 'row-divide'\n                        : ''\n                    \"\n                  >\n                    <!-- <td style=\"padding-left:20px\">{{tx['produit'].codeProd}}</td> -->\n                    <td style=\"padding-left:20px\">\n                      {{ tx[\"produit\"].codeProd }}\n                    </td>\n                    <td style=\"padding-left:20px\">\n                      {{ tx[\"produit\"].descProduit }}\n                    </td>\n                    <td style=\"padding-left: 20px;\">{{ tx.quantity }}</td>\n                    <td style=\"padding-left: 20px;\">{{ tx.sellPrice }}</td>\n                    <td style=\"padding-left: 20px;\">\n                      {{\n                        tx.transAmount | number\n                      }}\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            <div class=\"col-10\">\n            <div class=\"d-flex justify-content-end\">\n              <!-- <div class=\"col-1\"></div> -->\n              <div id=\"boxTotal\">\n                <mat-card style=\"border: 2px solid #1a1e25;padding-left: 20px;\">\n                  <div class=\"row\">\n                    <strong>Total Brut: </strong>\n                    <div>\n                      &nbsp;{{\n                        invoice.totalInvoice\n                          | currency: \"XOF \":\"symbol-narrow\":\"1.2-2\"\n                      }}\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    Remise:\n                    <div></div>\n                  </div>\n                  <div class=\"row\">\n                    Total TVA:\n                    <div></div>\n                  </div>\n\n                  <div class=\"row\">\n                    <strong>Total Net: </strong>\n                    <div>\n                      &nbsp;{{\n                        invoice.totalInvoice\n                          | currency: \"XOF \":\"symbol-narrow\":\"1.2-2\"\n                      }}\n                    </div>\n                  </div>\n                </mat-card>\n              </div>\n            </div>\n          </div>\n            <div class=\"d-flex justify-content-end col-10\">\n              <button\n                type=\"button\"\n                class=\"btn btn-success\"\n                printSectionId=\"invoice_body\"\n                [useExistingCss]=\"true\"\n                ngxPrint\n                >\n                Print\n              </button>\n               <!-- (click)=\"printInvoice()\"\n                [routerLink]=\"[{outlets:{printmenu:['product']}}]\" -->\n\n\n\n\n              <button\n                type=\"button\"\n                class=\"btn btn-success\"\n                (click)=\"downloadPDF()\"\n              >\n                <i class=\"fa fa-download\" aria-hidden=\"true\"></i>&nbsp;Download as\n                PDF\n              </button>\n            </div>\n          </div>\n        </div>\n      </section>\n      <ng-template #noInvoice>\n        <mat-card>\n          <div class=\"alert alert-success\" role=\"alert\">\n            Aucune Facture a imprimer\n          </div>\n          <ng-template #boxTotal></ng-template>\n          <a class=\"btn btn-lg btn-info\" routerLink=\"..\">Ok</a>\n        </mat-card>\n      </ng-template>\n    </div>\n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/shared/print/invoice-html/invoice-html.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/print/invoice-html/invoice-html.component.ts ***!
  \*********************************************************************/
/*! exports provided: InvoiceHtmlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceHtmlComponent", function() { return InvoiceHtmlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/company */ "./src/app/shared/model/company.ts");
/* harmony import */ var _services_invoice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/invoice.service */ "./src/app/services/invoice.service.ts");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/company.service */ "./src/app/services/company.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InvoiceHtmlComponent = /** @class */ (function () {
    function InvoiceHtmlComponent(route, router, invoiceService, companyService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.invoiceService = invoiceService;
        this.companyService = companyService;
        this.theCompany = new _model_company__WEBPACK_IMPORTED_MODULE_2__["Company"]();
        this.invoiceId = route.snapshot.params['id'];
        this.invoiceService.find(this.invoiceId)
            .subscribe(function (inv) {
            _this.invoice = inv;
            console.log(_this.invoice);
        });
    }
    InvoiceHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get the company details
        this.companyService.getAll().subscribe(function (comp) {
            _this.theCompany = comp[0];
        });
    };
    // Method to print the invoice which displayed
    InvoiceHtmlComponent.prototype.printInvoice = function () {
        this.router.navigate(['/',
            {
                outlets: { 'print': ['print'] }
            }
        ]);
    };
    InvoiceHtmlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice-html',
            template: __webpack_require__(/*! ./invoice-html.component.html */ "./src/app/shared/print/invoice-html/invoice-html.component.html"),
            styles: [__webpack_require__(/*! ./invoice-html.component.css */ "./src/app/shared/print/invoice-html/invoice-html.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_invoice_service__WEBPACK_IMPORTED_MODULE_3__["InvoiceService"],
            _services_company_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"]])
    ], InvoiceHtmlComponent);
    return InvoiceHtmlComponent;
}());



/***/ }),

/***/ "./src/app/shared/print/print-layout/print-layout.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/shared/print/print-layout/print-layout.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header, .header-space, .footer, .footer-space { height: 100px; }\n.header { position: fixed; top: 0; }\n.footer { position: fixed; bottom: 0; }\n/* @media screen {\n  :host {\n    display: none;\n  } */\n/* } */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3ByaW50L3ByaW50LWxheW91dC9wcmludC1sYXlvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpREFBaUQsYUFBYSxFQUFFO0FBQ2hFLFVBQVUsZUFBZSxFQUFFLE1BQU0sRUFBRTtBQUNuQyxVQUFVLGVBQWUsRUFBRSxTQUFTLEVBQUU7QUFDdEM7OztLQUdLO0FBQ0wsTUFBTSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wcmludC9wcmludC1sYXlvdXQvcHJpbnQtbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLCAuaGVhZGVyLXNwYWNlLCAuZm9vdGVyLCAuZm9vdGVyLXNwYWNlIHsgaGVpZ2h0OiAxMDBweDsgfVxuLmhlYWRlciB7IHBvc2l0aW9uOiBmaXhlZDsgdG9wOiAwOyB9XG4uZm9vdGVyIHsgcG9zaXRpb246IGZpeGVkOyBib3R0b206IDA7IH1cbi8qIEBtZWRpYSBzY3JlZW4ge1xuICA6aG9zdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfSAqL1xuLyogfSAqL1xuIl19 */"

/***/ }),

/***/ "./src/app/shared/print/print-layout/print-layout.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shared/print/print-layout/print-layout.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">COOL HEADER</div>\n<table>\n  <thead><tr><td>\n    <div class=\"header-space\">&nbsp;</div>\n  </td></tr></thead>\n  <tbody><tr><td>\n    <div class=\"content\">\n\n       <router-outlet></router-outlet>\n  \n    </div>\n  </td></tr></tbody>\n  <tfoot><tr><td>\n    <div class=\"footer-space\">&nbsp;</div>\n  </td></tr></tfoot>\n</table>\n\n\n<div class=\"footer\">AWESOME FOOTER</div>\n\n"

/***/ }),

/***/ "./src/app/shared/print/print-layout/print-layout.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/print/print-layout/print-layout.component.ts ***!
  \*********************************************************************/
/*! exports provided: PrintLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintLayoutComponent", function() { return PrintLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrintLayoutComponent = /** @class */ (function () {
    function PrintLayoutComponent() {
    }
    PrintLayoutComponent.prototype.ngOnInit = function () {
    };
    PrintLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-print-layout',
            template: __webpack_require__(/*! ./print-layout.component.html */ "./src/app/shared/print/print-layout/print-layout.component.html"),
            styles: [__webpack_require__(/*! ./print-layout.component.css */ "./src/app/shared/print/print-layout/print-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrintLayoutComponent);
    return PrintLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/print/print.module.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/print/print.module.ts ***!
  \**********************************************/
/*! exports provided: PrintModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintModule", function() { return PrintModule; });
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _invoice_html_invoice_html_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice-html/invoice-html.component */ "./src/app/shared/print/invoice-html/invoice-html.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _print_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./print.service */ "./src/app/shared/print/print.service.ts");
/* harmony import */ var _print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./print-layout/print-layout.component */ "./src/app/shared/print/print-layout/print-layout.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm5/ngx-print.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PrintModule = /** @class */ (function () {
    function PrintModule() {
    }
    PrintModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [_print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_4__["PrintLayoutComponent"], _invoice_html_invoice_html_component__WEBPACK_IMPORTED_MODULE_1__["InvoiceHtmlComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"],
                ngx_print__WEBPACK_IMPORTED_MODULE_7__["NgxPrintModule"]
            ],
            exports: [_print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_4__["PrintLayoutComponent"], _invoice_html_invoice_html_component__WEBPACK_IMPORTED_MODULE_1__["InvoiceHtmlComponent"]],
            providers: [_print_service__WEBPACK_IMPORTED_MODULE_3__["PrintService"]]
        })
    ], PrintModule);
    return PrintModule;
}());



/***/ }),

/***/ "./src/app/shared/print/print.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/print/print.service.ts ***!
  \***********************************************/
/*! exports provided: PrintService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintService", function() { return PrintService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrintService = /** @class */ (function () {
    function PrintService(router) {
        this.router = router;
        this.isPrinting = false;
    }
    PrintService.prototype.printDocument = function (documentName, documentData) {
        this.isPrinting = true;
        this.router
            .navigate(['/',
            {
                outlets: {
                    'print': ['print', documentName, documentData]
                }
            }]);
    };
    PrintService.prototype.onDataReady = function () {
        var _this = this;
        setTimeout(function () {
            window.print();
            _this.isPrinting = false;
            _this.router.navigate([{ outlets: { print: null } }]);
        });
    };
    PrintService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PrintService);
    return PrintService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _signup_signinup_modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../signup/signinup-modal.service */ "./src/app/signup/signinup-modal.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _services_transactionLine_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/transactionLine.service */ "./src/app/services/transactionLine.service.ts");
/* harmony import */ var _services_spendings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/spendings.service */ "./src/app/services/spendings.service.ts");
/* harmony import */ var _print_print_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./print/print.module */ "./src/app/shared/print/print.module.ts");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/company.service */ "./src/app/services/company.service.ts");
/* harmony import */ var _crud_sample_sample_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crud/sample/sample.component */ "./src/app/shared/crud/sample/sample.component.ts");
/* harmony import */ var _crud_crud_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./crud/crud.component */ "./src/app/shared/crud/crud.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _crud_upload_upload_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./crud/upload/upload.component */ "./src/app/shared/crud/upload/upload.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_produit_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/produit.service */ "./src/app/services/produit.service.ts");
/* harmony import */ var _services_entree_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/entree.service */ "./src/app/services/entree.service.ts");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _services_fournisseur_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/fournisseur.service */ "./src/app/services/fournisseur.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_sortie_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/sortie.service */ "./src/app/services/sortie.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _invoice_invoice_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../invoice/invoice.module */ "./src/app/invoice/invoice.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_HistoricCashBalance_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../services/HistoricCashBalance.service */ "./src/app/services/HistoricCashBalance.service.ts");
/* harmony import */ var _services_HistoricProdBalance_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../services/HistoricProdBalance.service */ "./src/app/services/HistoricProdBalance.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _dashboard_components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../dashboard/components/side-nav/side-nav.component */ "./src/app/dashboard/components/side-nav/side-nav.component.ts");
/* harmony import */ var _dashboard_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../dashboard/components/toolbar/toolbar.component */ "./src/app/dashboard/components/toolbar/toolbar.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _dashboard_components_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../dashboard/components/main-content/main-content.component */ "./src/app/dashboard/components/main-content/main-content.component.ts");
/* harmony import */ var _toast_messages_toast_messages_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./toast-messages/toast-messages.component */ "./src/app/shared/toast-messages/toast-messages.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _messaging_messaging_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./messaging/messaging.module */ "./src/app/shared/messaging/messaging.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// import {  DataService } from '../services/data.service';




















var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
            declarations: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
                _dashboard_components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_26__["SideNavComponent"],
                _dashboard_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_27__["ToolbarComponent"],
                _crud_crud_component__WEBPACK_IMPORTED_MODULE_8__["CrudComponent"],
                _crud_upload_upload_component__WEBPACK_IMPORTED_MODULE_11__["UploadComponent"],
                _crud_sample_sample_component__WEBPACK_IMPORTED_MODULE_7__["SampleComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_28__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_32__["SignupComponent"],
                _dashboard_components_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_30__["MainContentComponent"],
                _toast_messages_toast_messages_component__WEBPACK_IMPORTED_MODULE_31__["ToastMessagesComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _invoice_invoice_module__WEBPACK_IMPORTED_MODULE_21__["InvoiceModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"],
                _print_print_module__WEBPACK_IMPORTED_MODULE_5__["PrintModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_29__["MDBBootstrapModule"].forRoot(),
                _messaging_messaging_module__WEBPACK_IMPORTED_MODULE_33__["MessagingModule"],
            ],
            exports: [
                _crud_crud_component__WEBPACK_IMPORTED_MODULE_8__["CrudComponent"],
                _crud_upload_upload_component__WEBPACK_IMPORTED_MODULE_11__["UploadComponent"],
                _crud_sample_sample_component__WEBPACK_IMPORTED_MODULE_7__["SampleComponent"],
                _dashboard_components_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_30__["MainContentComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
                _dashboard_components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_26__["SideNavComponent"],
                _dashboard_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_27__["ToolbarComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_28__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_32__["SignupComponent"],
                _toast_messages_toast_messages_component__WEBPACK_IMPORTED_MODULE_31__["ToastMessagesComponent"]
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CurrencyPipe"],
                _services_company_service__WEBPACK_IMPORTED_MODULE_6__["CompanyService"],
                // DataService,
                _services_produit_service__WEBPACK_IMPORTED_MODULE_14__["ProduitService"],
                _services_client_service__WEBPACK_IMPORTED_MODULE_16__["ClientService"],
                _services_entree_service__WEBPACK_IMPORTED_MODULE_15__["EntreeService"],
                _services_fournisseur_service__WEBPACK_IMPORTED_MODULE_17__["FournisseurService"],
                _services_entree_service__WEBPACK_IMPORTED_MODULE_15__["EntreeService"],
                _services_sortie_service__WEBPACK_IMPORTED_MODULE_19__["SortieService"],
                _services_spendings_service__WEBPACK_IMPORTED_MODULE_4__["SpendingsService"],
                _services_category_service__WEBPACK_IMPORTED_MODULE_18__["CategoryService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_20__["UserService"],
                _services_transactionLine_service__WEBPACK_IMPORTED_MODULE_3__["TransactionLineService"],
                // GeneralService,
                _services_HistoricCashBalance_service__WEBPACK_IMPORTED_MODULE_23__["HistoricCashBalanceService"],
                _services_HistoricProdBalance_service__WEBPACK_IMPORTED_MODULE_24__["HistoricProdBalanceService"],
                _signup_signinup_modal_service__WEBPACK_IMPORTED_MODULE_0__["SignupModalService"],
                _services_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__["NgbActiveModal"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/toast-messages/toast-messages.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shared/toast-messages/toast-messages.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC90b2FzdC1tZXNzYWdlcy90b2FzdC1tZXNzYWdlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/toast-messages/toast-messages.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/toast-messages/toast-messages.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <aside  *ngFor=\"let message of messages\">\n      <div class=\"notification\"\n\n           [ngClass]=\"{'is-info':     message.style=='info',\n                       'is-danger':   message.style=='danger',\n                       'is-success':  message.style=='success'}\">\n\n        <button class=\"delete\" (click)=\"dismiss(message.$key)\"></button>\n        {{message.content}}\n      </div>\n\n    </aside>\n  </div>\n"

/***/ }),

/***/ "./src/app/shared/toast-messages/toast-messages.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/toast-messages/toast-messages.component.ts ***!
  \*******************************************************************/
/*! exports provided: ToastMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastMessagesComponent", function() { return ToastMessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastMessagesComponent = /** @class */ (function () {
    function ToastMessagesComponent(toast) {
        this.toast = toast;
    }
    ToastMessagesComponent.prototype.ngOnInit = function () {
        this.messages = this.toast.getMessages();
    };
    ToastMessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toast-messages',
            template: __webpack_require__(/*! ./toast-messages.component.html */ "./src/app/shared/toast-messages/toast-messages.component.html"),
            styles: [__webpack_require__(/*! ./toast-messages.component.css */ "./src/app/shared/toast-messages/toast-messages.component.css")]
        }),
        __metadata("design:paramtypes", [_services_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"]])
    ], ToastMessagesComponent);
    return ToastMessagesComponent;
}());



/***/ }),

/***/ "./src/app/signup/signinup-modal.service.ts":
/*!**************************************************!*\
  !*** ./src/app/signup/signinup-modal.service.ts ***!
  \**************************************************/
/*! exports provided: SignupModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModalService", function() { return SignupModalService; });
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupModalService = /** @class */ (function () {
    function SignupModalService(modalService) {
        this.modalService = modalService;
        this.isOpen = false;
    }
    SignupModalService.prototype.open = function () {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        var modalRef = this.modalService.open(_signup_component__WEBPACK_IMPORTED_MODULE_0__["SignupComponent"]);
        modalRef.result.then(function (result) {
            _this.isOpen = false;
        }, function (reason) {
            _this.isOpen = false;
        });
        return modalRef;
    };
    SignupModalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], SignupModalService);
    return SignupModalService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"modal-header\">\n    <h4 class=\"modal-title\" >Sign Up</h4>\n    <button aria-label=\"Close\" data-dismiss=\"modal\" class=\"close\" type=\"button\"\n    (click)=\"activeModal.dismiss('closed')\"><span aria-hidden=\"true\">x</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-md-8\">\n            <form class=\"form-signup\"  #f=\"ngForm\" (ngSubmit)=\"signup(f.value)\">\n              <div *ngIf=\"errorMessage\" class=\"alert alert-danger\">\n                {{errorMessage}}\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"name\"  >Nom</label>\n                  <input type=\"text\" name=\"name\" ngModel placeholder=\"name\" class=\"form-control\"\n                >\n              </div>\n                <div class=\"form-group\">\n                    <label for=\"username\"  >Nom Utilisateur</label>\n                    <input type=\"text\" name=\"username\" ngModel placeholder=\"username\" class=\"form-control\"\n                  >\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"role\"  >Role</label>\n                    <select class=\"form-control\" name=\"role\" ngModel placeholder=\"Choose your option\">\n                      <option [ngValue]=\"r\" *ngFor=\"let r of roles\">\n                        {{r}}\n                      </option>\n                    </select>\n                    <!-- <mdb-select type=\"text\" name=\"username\" ngModel placeholder=\"username\" class=\"form-control\" -->\n                  <!-- > -->\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"email\"  >Email</label>\n                    <input type=\"email\" name=\"email\" ngModel placeholder=\"email\" class=\"form-control\"\n                  >\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\" >Password</label>\n                    <input type=\"password\" name=\"password\"  ngModel placeholder=\"password\" class=\"form-control\"\n                    >\n              </div>\n\n                <button type=\"submit\" class=\"btn btn-primary\"  >Créer</button>\n            </form>\n\n        </div>\n    </div>\n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_sigup_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/sigup-info */ "./src/app/auth/sigup-info.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, router, route, activeModal) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.activeModal = activeModal;
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = new Set();
        this.roles.add('admin');
        this.roles.add('user');
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signup = function (credentials) {
        var _this = this;
        console.log(credentials);
        this.signupInfo = new _auth_sigup_info__WEBPACK_IMPORTED_MODULE_3__["SignUpInfo"](credentials['name'], credentials['username'], credentials['email'], credentials['password'], credentials['role']);
        this.authService.signUp(this.signupInfo)
            .subscribe(function (result) {
            if (result) {
                console.log(result);
                _this.activeModal.dismiss('User created with success');
            }
        }, function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    SignupComponent.prototype.cancel = function () {
        this.activeModal.dismiss('cancel');
    };
    SignupComponent.prototype.logout = function () {
        this.activeModal.dismiss('cancel');
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mo/MODEV/tutorials/restaurant-serveur/restaurant/src/restau-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map