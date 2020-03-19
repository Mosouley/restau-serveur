(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _entities_access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../entities/access-denied/access-denied.component */ "./src/app/entities/access-denied/access-denied.component.ts");
/* harmony import */ var _entities_spendings_spendings_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../entities/spendings/spendings.resolver */ "./src/app/entities/spendings/spendings.resolver.ts");
/* harmony import */ var _entities_spendings_spendings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../entities/spendings/spendings.component */ "./src/app/entities/spendings/spendings.component.ts");
/* harmony import */ var _entities_sortie_sortie_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../entities/sortie/sortie.resolver */ "./src/app/entities/sortie/sortie.resolver.ts");
/* harmony import */ var _entities_produit_produit_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../entities/produit/produit.resolver */ "./src/app/entities/produit/produit.resolver.ts");
/* harmony import */ var _entities_entree_entree_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../entities/entree/entree.resolver */ "./src/app/entities/entree/entree.resolver.ts");
/* harmony import */ var _shared_print_invoice_html_invoice_html_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../shared/print/invoice-html/invoice-html.component */ "./src/app/shared/print/invoice-html/invoice-html.component.ts");
/* harmony import */ var _report_report_html_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../report/report-html.component */ "./src/app/report/report-html.component.ts");
/* harmony import */ var _entities_company_company_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../entities/company/company.component */ "./src/app/entities/company/company.component.ts");
/* harmony import */ var _entities_user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../entities/user/user.component */ "./src/app/entities/user/user.component.ts");
/* harmony import */ var _entities_client_client_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../entities/client/client.resolver */ "./src/app/entities/client/client.resolver.ts");
/* harmony import */ var _entities_category_category_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../entities/category/category.resolver */ "./src/app/entities/category/category.resolver.ts");
/* harmony import */ var _components_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/main-content/main-content.component */ "./src/app/dashboard/components/main-content/main-content.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _entities_category_category_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../entities/category/category.component */ "./src/app/entities/category/category.component.ts");
/* harmony import */ var _entities_produit_produit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../entities/produit/produit.component */ "./src/app/entities/produit/produit.component.ts");
/* harmony import */ var _entities_client_client_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../entities/client/client.component */ "./src/app/entities/client/client.component.ts");
/* harmony import */ var _entities_fournisseur_fournisseur_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../entities/fournisseur/fournisseur.component */ "./src/app/entities/fournisseur/fournisseur.component.ts");
/* harmony import */ var _entities_fournisseur_fournisseur_resolver__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../entities/fournisseur/fournisseur.resolver */ "./src/app/entities/fournisseur/fournisseur.resolver.ts");
/* harmony import */ var _entities_entree_entree_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../entities/entree/entree.component */ "./src/app/entities/entree/entree.component.ts");
/* harmony import */ var _invoice_invoice_create_invoice_create_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../invoice/invoice-create/invoice-create.component */ "./src/app/invoice/invoice-create/invoice-create.component.ts");
/* harmony import */ var _entities_user_user_resolver__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../entities/user/user.resolver */ "./src/app/entities/user/user.resolver.ts");
/* harmony import */ var _shared_print_print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../shared/print/print-layout/print-layout.component */ "./src/app/shared/print/print-layout/print-layout.component.ts");
/* harmony import */ var _invoice_invoice_create_invoice_resolver__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../invoice/invoice-create/invoice.resolver */ "./src/app/invoice/invoice-create/invoice.resolver.ts");
/* harmony import */ var _shared_transactionLine_resolver__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../shared/transactionLine.resolver */ "./src/app/shared/transactionLine.resolver.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"],
        //  canActivateChild: [AuthGuard],
        children: [
            {
                path: 'category',
                component: _entities_category_category_component__WEBPACK_IMPORTED_MODULE_16__["CategoryComponent"],
                canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_27__["AuthGuard"]],
                resolve: {
                    categories: _entities_category_category_resolver__WEBPACK_IMPORTED_MODULE_11__["CategoryResolver"]
                }
            },
            {
                path: 'rapport',
                component: _report_report_html_component__WEBPACK_IMPORTED_MODULE_7__["ReportHtmlComponent"],
                canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_27__["AuthGuard"]],
                resolve: {
                    entrees: _entities_entree_entree_resolver__WEBPACK_IMPORTED_MODULE_5__["EntreeResolver"],
                    produits: _entities_produit_produit_resolver__WEBPACK_IMPORTED_MODULE_4__["ProduitResolver"],
                    invoices: _invoice_invoice_create_invoice_resolver__WEBPACK_IMPORTED_MODULE_25__["InvoiceResolver"],
                    spendings: _entities_spendings_spendings_resolver__WEBPACK_IMPORTED_MODULE_1__["SpendingsResolver"],
                    transax: _shared_transactionLine_resolver__WEBPACK_IMPORTED_MODULE_26__["TransactionLineResolver"]
                }
            },
            {
                path: 'print',
                component: _shared_print_print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_24__["PrintLayoutComponent"],
                children: [
                    {
                        path: 'invoice/:id',
                        component: _shared_print_invoice_html_invoice_html_component__WEBPACK_IMPORTED_MODULE_6__["InvoiceHtmlComponent"]
                    }
                ]
            },
            {
                path: 'produit',
                component: _entities_produit_produit_component__WEBPACK_IMPORTED_MODULE_17__["ProduitComponent"],
                canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_27__["AuthGuard"]],
                resolve: {
                    produits: _entities_produit_produit_resolver__WEBPACK_IMPORTED_MODULE_4__["ProduitResolver"],
                    categories: _entities_category_category_resolver__WEBPACK_IMPORTED_MODULE_11__["CategoryResolver"]
                }
            },
            {
                path: 'client',
                component: _entities_client_client_component__WEBPACK_IMPORTED_MODULE_18__["ClientComponent"],
                resolve: {
                    clients: _entities_client_client_resolver__WEBPACK_IMPORTED_MODULE_10__["ClientResolver"]
                }
            },
            {
                path: 'fournisseur',
                component: _entities_fournisseur_fournisseur_component__WEBPACK_IMPORTED_MODULE_19__["FournisseurComponent"],
                canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_27__["AuthGuard"]],
                resolve: {
                    fournisseurs: _entities_fournisseur_fournisseur_resolver__WEBPACK_IMPORTED_MODULE_20__["FournisseurResolver"]
                }
            },
            {
                path: 'appro',
                runGuardsAndResolvers: 'always',
                component: _entities_entree_entree_component__WEBPACK_IMPORTED_MODULE_21__["EntreeComponent"],
                canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_27__["AuthGuard"]],
                resolve: {
                    entrees: _entities_entree_entree_resolver__WEBPACK_IMPORTED_MODULE_5__["EntreeResolver"],
                    produits: _entities_produit_produit_resolver__WEBPACK_IMPORTED_MODULE_4__["ProduitResolver"],
                    categories: _entities_category_category_resolver__WEBPACK_IMPORTED_MODULE_11__["CategoryResolver"]
                }
            },
            {
                path: 'spendings',
                component: _entities_spendings_spendings_component__WEBPACK_IMPORTED_MODULE_2__["SpendingsComponent"],
                resolve: {
                    spendings: _entities_spendings_spendings_resolver__WEBPACK_IMPORTED_MODULE_1__["SpendingsResolver"]
                }
            },
            {
                path: 'invoice-create', component: _invoice_invoice_create_invoice_create_component__WEBPACK_IMPORTED_MODULE_22__["InvoiceCreateComponent"],
                resolve: {
                    categories: _entities_category_category_resolver__WEBPACK_IMPORTED_MODULE_11__["CategoryResolver"],
                    produits: _entities_produit_produit_resolver__WEBPACK_IMPORTED_MODULE_4__["ProduitResolver"],
                    clients: _entities_client_client_resolver__WEBPACK_IMPORTED_MODULE_10__["ClientResolver"]
                }
            },
            {
                path: 'company',
                component: _entities_company_company_component__WEBPACK_IMPORTED_MODULE_8__["CompanyComponent"],
                canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_27__["AuthGuard"]],
            },
            {
                path: 'user',
                component: _entities_user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
                canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_27__["AuthGuard"]],
                resolve: {
                    users: _entities_user_user_resolver__WEBPACK_IMPORTED_MODULE_23__["UserResolver"]
                }
            },
            {
                path: '',
                component: _components_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_12__["MainContentComponent"],
            }
        ]
    },
    {
        path: 'access-denied',
        component: _entities_access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_0__["AccessDeniedComponent"]
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]],
            providers: [
                _entities_produit_produit_resolver__WEBPACK_IMPORTED_MODULE_4__["ProduitResolver"],
                _entities_category_category_resolver__WEBPACK_IMPORTED_MODULE_11__["CategoryResolver"],
                _entities_entree_entree_resolver__WEBPACK_IMPORTED_MODULE_5__["EntreeResolver"],
                _entities_sortie_sortie_resolver__WEBPACK_IMPORTED_MODULE_3__["SortieResolver"],
                _entities_fournisseur_fournisseur_resolver__WEBPACK_IMPORTED_MODULE_20__["FournisseurResolver"],
                _entities_client_client_resolver__WEBPACK_IMPORTED_MODULE_10__["ClientResolver"],
                _invoice_invoice_create_invoice_resolver__WEBPACK_IMPORTED_MODULE_25__["InvoiceResolver"],
                _entities_spendings_spendings_resolver__WEBPACK_IMPORTED_MODULE_1__["SpendingsResolver"],
                _entities_user_user_resolver__WEBPACK_IMPORTED_MODULE_23__["UserResolver"],
                _shared_transactionLine_resolver__WEBPACK_IMPORTED_MODULE_26__["TransactionLineResolver"]
            ]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _report_report_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../report/report.module */ "./src/app/report/report.module.ts");
/* harmony import */ var _invoice_invoice_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../invoice/invoice.module */ "./src/app/invoice/invoice.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _entities_entities_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../entities/entities.module */ "./src/app/entities/entities.module.ts");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _shared_print_print_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/print/print.module */ "./src/app/shared/print/print.module.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
            // DashboardComponent, MainContentComponent,
            // SideNavComponent, ToolbarComponent
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _entities_entities_module__WEBPACK_IMPORTED_MODULE_3__["EntitiesModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__["DashboardRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                _invoice_invoice_module__WEBPACK_IMPORTED_MODULE_1__["InvoiceModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _shared_print_print_module__WEBPACK_IMPORTED_MODULE_8__["PrintModule"],
                _report_report_module__WEBPACK_IMPORTED_MODULE_0__["ReportModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["MDBBootstrapModule"].forRoot()
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/entities/category/category.resolver.ts":
/*!********************************************************!*\
  !*** ./src/app/entities/category/category.resolver.ts ***!
  \********************************************************/
/*! exports provided: CategoryResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryResolver", function() { return CategoryResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryResolver = /** @class */ (function () {
    function CategoryResolver(categoryService) {
        this.categoryService = categoryService;
    }
    CategoryResolver.prototype.resolve = function () {
        return this.categoryService.getAll();
    };
    CategoryResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]])
    ], CategoryResolver);
    return CategoryResolver;
}());



/***/ }),

/***/ "./src/app/entities/client/client.resolver.ts":
/*!****************************************************!*\
  !*** ./src/app/entities/client/client.resolver.ts ***!
  \****************************************************/
/*! exports provided: ClientResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientResolver", function() { return ClientResolver; });
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientResolver = /** @class */ (function () {
    function ClientResolver(clientService) {
        this.clientService = clientService;
    }
    ClientResolver.prototype.resolve = function () {
        return this.clientService.getAll();
    };
    ClientResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_services_client_service__WEBPACK_IMPORTED_MODULE_0__["ClientService"]])
    ], ClientResolver);
    return ClientResolver;
}());



/***/ }),

/***/ "./src/app/entities/entree/entree.resolver.ts":
/*!****************************************************!*\
  !*** ./src/app/entities/entree/entree.resolver.ts ***!
  \****************************************************/
/*! exports provided: EntreeResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntreeResolver", function() { return EntreeResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_entree_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/entree.service */ "./src/app/services/entree.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EntreeResolver = /** @class */ (function () {
    function EntreeResolver(entreeService) {
        this.entreeService = entreeService;
    }
    EntreeResolver.prototype.resolve = function () {
        return this.entreeService.getAll();
    };
    EntreeResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_entree_service__WEBPACK_IMPORTED_MODULE_1__["EntreeService"]])
    ], EntreeResolver);
    return EntreeResolver;
}());



/***/ }),

/***/ "./src/app/entities/fournisseur/fournisseur.resolver.ts":
/*!**************************************************************!*\
  !*** ./src/app/entities/fournisseur/fournisseur.resolver.ts ***!
  \**************************************************************/
/*! exports provided: FournisseurResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FournisseurResolver", function() { return FournisseurResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_fournisseur_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/fournisseur.service */ "./src/app/services/fournisseur.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FournisseurResolver = /** @class */ (function () {
    function FournisseurResolver(fournisseurService) {
        this.fournisseurService = fournisseurService;
    }
    FournisseurResolver.prototype.resolve = function () {
        return this.fournisseurService.getAll();
    };
    FournisseurResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_fournisseur_service__WEBPACK_IMPORTED_MODULE_1__["FournisseurService"]])
    ], FournisseurResolver);
    return FournisseurResolver;
}());



/***/ }),

/***/ "./src/app/entities/produit/produit.resolver.ts":
/*!******************************************************!*\
  !*** ./src/app/entities/produit/produit.resolver.ts ***!
  \******************************************************/
/*! exports provided: ProduitResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProduitResolver", function() { return ProduitResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_produit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/produit.service */ "./src/app/services/produit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProduitResolver = /** @class */ (function () {
    function ProduitResolver(produitService) {
        this.produitService = produitService;
    }
    ProduitResolver.prototype.resolve = function () {
        return this.produitService.getAll();
    };
    ProduitResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_produit_service__WEBPACK_IMPORTED_MODULE_1__["ProduitService"]])
    ], ProduitResolver);
    return ProduitResolver;
}());



/***/ }),

/***/ "./src/app/entities/sortie/sortie.resolver.ts":
/*!****************************************************!*\
  !*** ./src/app/entities/sortie/sortie.resolver.ts ***!
  \****************************************************/
/*! exports provided: SortieResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortieResolver", function() { return SortieResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sortie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/sortie.service */ "./src/app/services/sortie.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SortieResolver = /** @class */ (function () {
    function SortieResolver(sortieService) {
        this.sortieService = sortieService;
    }
    SortieResolver.prototype.resolve = function () {
        return this.sortieService.getAll();
    };
    SortieResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_sortie_service__WEBPACK_IMPORTED_MODULE_1__["SortieService"]])
    ], SortieResolver);
    return SortieResolver;
}());



/***/ }),

/***/ "./src/app/entities/spendings/spendings.resolver.ts":
/*!**********************************************************!*\
  !*** ./src/app/entities/spendings/spendings.resolver.ts ***!
  \**********************************************************/
/*! exports provided: SpendingsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpendingsResolver", function() { return SpendingsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_spendings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/spendings.service */ "./src/app/services/spendings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpendingsResolver = /** @class */ (function () {
    function SpendingsResolver(spendingsService) {
        this.spendingsService = spendingsService;
    }
    SpendingsResolver.prototype.resolve = function () {
        return this.spendingsService.getAll();
    };
    SpendingsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_spendings_service__WEBPACK_IMPORTED_MODULE_1__["SpendingsService"]])
    ], SpendingsResolver);
    return SpendingsResolver;
}());



/***/ }),

/***/ "./src/app/entities/user/user.resolver.ts":
/*!************************************************!*\
  !*** ./src/app/entities/user/user.resolver.ts ***!
  \************************************************/
/*! exports provided: UserResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolver", function() { return UserResolver; });
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserResolver = /** @class */ (function () {
    function UserResolver(userService) {
        this.userService = userService;
    }
    UserResolver.prototype.resolve = function () {
        return this.userService.getAll();
    };
    UserResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]])
    ], UserResolver);
    return UserResolver;
}());



/***/ }),

/***/ "./src/app/invoice/invoice-create/invoice.resolver.ts":
/*!************************************************************!*\
  !*** ./src/app/invoice/invoice-create/invoice.resolver.ts ***!
  \************************************************************/
/*! exports provided: InvoiceResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceResolver", function() { return InvoiceResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_invoice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/invoice.service */ "./src/app/services/invoice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InvoiceResolver = /** @class */ (function () {
    function InvoiceResolver(invoiceService) {
        this.invoiceService = invoiceService;
    }
    InvoiceResolver.prototype.resolve = function () {
        return this.invoiceService.getAll();
    };
    InvoiceResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_invoice_service__WEBPACK_IMPORTED_MODULE_1__["InvoiceService"]])
    ], InvoiceResolver);
    return InvoiceResolver;
}());



/***/ }),

/***/ "./src/app/report/report-html.component.scss":
/*!**************************************************!*\
  !*** ./src/app/report/report-html.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#report_head{\n  background-color: rgb(87, 60, 60);\n  font-size: 12px;\n  padding: 2px;\n  border-spacing: 5px;\n}\n\nreport_body{\n  background-color: #fff;\n  font-size: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3JlcG9ydC1odG1sLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnQvcmVwb3J0LWh0bWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNyZXBvcnRfaGVhZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg3LCA2MCwgNjApO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyLXNwYWNpbmc6IDVweDtcbn1cblxucmVwb3J0X2JvZHl7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/report/report-html.component.html":
/*!***************************************************!*\
  !*** ./src/app/report/report-html.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card\n  class=\"d-flex justify-content-center col-12\"\n  id=\"report_head\"\n  style=\"background-color: rgba(0, 150, 219, 0.68); height: 60px;\n  margin:10px; padding: 5px\"\n  #reportHead\n  >\n    <mat-card  >\n        <div style=\"font-size: 12px;\">\n          <span>Selectionner Rapport: &nbsp;</span>\n          <select style=\"width: 150px\" (change) =\"getReportType($event)\" >\n              <option></option>\n              <option *ngFor=\"let typ of reportType\"\n              value={{typ.id}}>{{typ.name}}</option>\n          </select>\n        </div>\n      </mat-card>\n      <mat-card>\n\n          <div style=\"font-size: 12px;\">\n            <span>Selectionner Periode: &nbsp;</span>\n            <select style=\"min-width: 50px;\" (change) =\"getPeriod($event)\">\n                <option></option>\n              <option *ngFor=\"let period of reportPeriod\"\n              value={{period.id}}>{{period.name}}</option>\n            </select>\n          </div>\n        </mat-card>\n\n        <div class=\"d-flex justify-content-end \">\n          <button  type=\"button\"\n          class=\"btn btn-success\"\n          (click)=\"populateReport()\">\n          Lancer</button>\n          <!-- <button\n          type=\"button\"\n          class=\"btn btn-danger\"\n          >Annuler</button> -->\n        </div>\n      </mat-card>\n    <div\n    class=\"col-lg-10\"\n    style=\"margin: 10px\"\n    >\n    <h1 class=\"col-12\" >{{title}}</h1>\n    <br />\n    <mat-card class=\"col-lg-12\" id=\"report_Body\" *ngIf=\"selectedType > 0 && selectedPeriod >0; noSelect\">\n      <table  mdbTable class=\"table table-hover table-striped table-sm\"  >\n          <thead class=\"black white-text\">\n         <tr>\n           <th *ngFor=\"let c of modelEntity; let i = index\" scope=\"col\" >\n              {{c.columnReference}}\n           </th>\n         </tr>\n        </thead>\n          <tbody>\n              <!--  -->\n            <tr *ngFor=\"let item of dataEntity \">\n                  <td *ngFor=\"let model of modelEntity \">\n                        {{model.dataType == 'Array' ? item[model.columnName][modelArrayEntity[0].columnName]: item[model.columnName]}}\n                  </td>\n            </tr>\n          </tbody>\n        </table>\n  </mat-card>\n<ng-template #noSelect>\n  <p>\n    [title]=\"Vous devez selectonner un type et une periode\"\n  </p>\n</ng-template>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/report/report-html.component.ts":
/*!*************************************************!*\
  !*** ./src/app/report/report-html.component.ts ***!
  \*************************************************/
/*! exports provided: ReportHtmlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportHtmlComponent", function() { return ReportHtmlComponent; });
/* harmony import */ var _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/model/data.model */ "./src/app/shared/model/data.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReportHtmlComponent = /** @class */ (function () {
    function ReportHtmlComponent(route) {
        this.route = route;
        this.reportType = [
            { id: 1, name: 'Ventes', dataEntity: [] },
            { id: 2, name: 'Dépenses', dataEntity: [] },
            { id: 3, name: 'Stock', dataEntity: [] },
            { id: 4, name: 'Caisse', dataEntity: [] },
            { id: 5, name: 'Resultats', dataEntity: [] },
            { id: 6, name: 'Factures', dataEntity: [] },
            { id: 7, name: 'Appro. Stock ', dataEntity: [] }
        ];
        this.reportPeriod = [
            { id: 1, name: 'Periode actuelle',
                timePeriod: { startDay: new Date(), endDay: new Date() } },
            { id: 2, name: 'Ce Mois',
                timePeriod: { startDay: new Date(), endDay: new Date() } },
            { id: 3, name: ' Ce Trimestre ',
                timePeriod: { startDay: new Date(), endDay: new Date() } },
            { id: 4, name: 'Cette année',
                timePeriod: { startDay: new Date(), endDay: new Date() } },
            { id: 5, name: 'Selectionner une plage',
                timePeriod: { startDay: new Date(), endDay: new Date() } }
        ];
        this.dataEntity = [];
        this.modelEntity = [];
        this.modelArrayEntity = [];
        this.selectedType = 0;
        this.selectedPeriod = 0;
        this.dataTx = [];
        this.data = [];
        // desc order pipe to show data in any report
        this.desc = function (a, b) {
            // tslint:disable-next-line:curly
            if (a.key < b.key)
                return b.key;
        };
    }
    ReportHtmlComponent.prototype.ngOnInit = function () {
        this.dataInvoices = this.route.snapshot.data.invoices;
        this.dataEntrees = this.route.snapshot.data.entrees;
        this.dataSpendings = this.route.snapshot.data.spendings;
        this.dataTx = this.route.snapshot.data.transax;
        this.title = 'Selectionnez votre rapport et la période';
    };
    ReportHtmlComponent.prototype.getPeriod = function (event) {
        this.selectedPeriod = event.target.value;
    };
    ReportHtmlComponent.prototype.getReportType = function (event) {
        this.selectedType = event.target.value;
    };
    ReportHtmlComponent.prototype.setPeriodIntervals = function (choix) {
        var today = new Date();
        switch (Number(choix)) {
            case 1:
                this.reportPeriod[0].timePeriod.startDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
                this.reportPeriod[0].timePeriod.endDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
                break;
            case 2:
                this.reportPeriod[1].timePeriod.startDay = new Date(today.getFullYear(), today.getMonth(), 1);
                this.reportPeriod[1].timePeriod.endDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
                break;
            case 3:
                this.reportPeriod[2].timePeriod.startDay = new Date(today.getFullYear(), today.getMonth() - 2, 1);
                this.reportPeriod[2].timePeriod.endDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
                break;
            case 4:
                this.reportPeriod[3].timePeriod.startDay = new Date(today.getFullYear(), 0, 1);
                this.reportPeriod[3].timePeriod.endDay = new Date(today.getFullYear(), 11, 31);
                break;
            case 5:
                this.reportPeriod[4].timePeriod.startDay = new Date(today.getFullYear(), today.getMonth(), today.getDay());
                this.reportPeriod[4].timePeriod.endDay = new Date(today.getFullYear(), today.getMonth(), today.getDay());
                break;
            default:
                this.reportPeriod[0].timePeriod.startDay = new Date(today.getFullYear(), today.getMonth(), today.getDay());
                this.reportPeriod[0].timePeriod.endDay = new Date(today.getFullYear(), today.getMonth(), today.getDay());
                break;
        }
    };
    ReportHtmlComponent.prototype.setReportData = function (type, intervalSelected) {
        var _this = this;
        var start = this.reportPeriod[intervalSelected - 1].timePeriod.startDay;
        var end = this.reportPeriod[intervalSelected - 1].timePeriod.endDay;
        // console.log('Date de Depart ' + start.toDateString());
        // console.log( 'Date fin ' + end);
        switch (Number(type)) {
            // donnees des transctions
            case 1:
                this.data = this.dataTx.filter(function (tx) { return tx.debitAmount === 0; });
                this.dataEntity = this.data.filter(function (transac) {
                    // tslint:disable-next-line:no-unused-expression
                    return new Date(transac.txDate).getTime() >= new Date(start).getTime() &&
                        new Date(transac.txDate).getTime() <= new Date(end).getTime();
                });
                this.title = 'Rapport des Ventes détaillées du ' +
                    ("" + Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(start, 'mediumDate', 'en-US')) + ' au ' + ("" + Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(end, 'mediumDate', 'en-US'));
                this.modelEntity = [
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('txDate', 'Date', 'date', false, []),
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('produit', 'Produit', 'Array', false, []),
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('quantity', 'Quantite', 'number', false, []),
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('unitValue', 'Prix V.', 'number', false, []),
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('creditAmount', 'Montant', 'number', false, [])
                ];
                this.modelArrayEntity = [
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('codeProd', 'Code Produit', 'string', false, []),
                ];
                break;
            case 2:
                // console.log('got it!');
                // this.dataEntity = [...this.dataInvoices];
                this.dataEntity = this.dataSpendings.filter(function (spent) {
                    // console.log(new Date(inv.dateTrans).getTime() );
                    // tslint:disable-next-line:no-unused-expression
                    return new Date(spent.dateSpending).getTime() >= new Date(start).getTime() &&
                        new Date(spent.dateSpending).getTime() <= new Date(end).getTime();
                });
                this.title = 'Rapport des Depenses effectuees du ' +
                    ("" + Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(start, 'mediumDate', 'en-US')) + ' au ' + ("" + Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(end, 'mediumDate', 'en-US'));
                this.modelEntity = [
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('id', 'ID', 'number', true, []),
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('dateSpending', 'Date Dep', 'date', false, []),
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('typeSpending', 'Type Depense', 'enum', false, []),
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('valueSpending', 'Montant Depense', 'number', false, []),
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('commentSpending', 'Commentaire', 'string', false, [])
                ];
                break;
            case 3:
                // initialize the entity data
                this.dataEntity = [];
                // Show the transactions, filter based on the interval sets by the user
                this.data = this.dataTx.filter(function (transac) {
                    return new Date(transac.txDate).getTime() >= new Date(start).getTime() &&
                        new Date(transac.txDate).getTime() <= new Date(end).getTime();
                });
                // console.log(this.data);
                // transform into rxjs observable
                // 1. convert the array to observable
                // 2. groupBy the property value
                // 3. flatMap or mergeMap, to merge all the objects in a single object
                // 4.then on each object make the calculation need
                // 5. subscribe and push back in an array
                Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(this.data)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["groupBy"])(function (tx) { return tx.produit.codeProd; }), 
                // flatMap(group => group.pipe(toArray()))
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (transac) {
                    return transac.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["reduce"])(function (acc, curr) {
                        acc.produit = acc.produit || curr.produit;
                        // acc.produit.descProduit = curr.produit.descProduit ;
                        acc.debitAmount += curr.debitAmount / curr.unitValue;
                        acc.creditAmount += curr.creditAmount / curr.unitValue;
                        acc.solde = acc.debitAmount - acc.creditAmount;
                        return acc;
                    }, { produit: null, unitValue: 0,
                        quantity: 0, debitAmount: 0, creditAmount: 0, solde: 0 }));
                })).subscribe(function (result) { return _this.dataEntity.push(result); });
                this.title = 'Rapport des Mouvements effectues du ' +
                    ("" + Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(start, 'mediumDate', 'en-US')) + ' au ' + ("" + Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(end, 'mediumDate', 'en-US'));
                this.modelEntity = [
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('produit', 'Produit', 'Array', false, []),
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('debitAmount', 'Entrees', 'number', false, []),
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('creditAmount', 'Sorties', 'number', false, []),
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('solde', 'Stock Restant', 'number', false, [])
                ];
                this.modelArrayEntity = [
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('codeProd', 'Code Produit', 'string', false, [])
                ];
                break;
            case 6:
                // this.dataEntity = [...this.dataInvoices];
                this.dataEntity = this.dataInvoices.filter(function (inv) {
                    // console.log(new Date(inv.dateTrans).getTime() );
                    // tslint:disable-next-line:no-unused-expression
                    return new Date(inv.dateTrans).getTime() >= new Date(start).getTime() &&
                        new Date(inv.dateTrans).getTime() <= new Date(end).getTime();
                });
                this.title = 'Rapport des Factures emises du ' +
                    ("" + Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(start, 'mediumDate', 'en-US')) + ' au ' + ("" + Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(end, 'mediumDate', 'en-US'));
                this.modelEntity = [
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('id', 'ID', 'number', true, []),
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('invoiceRef', 'Reference', 'string', false, []),
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('dateTrans', 'Date Op', 'date', false, []),
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('paymentMode', 'Mode', 'string', false, []),
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('statut', 'statut', 'string', false, []),
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('totalInvoice', 'Montant', 'number', false, [])
                ];
                break;
            case 7:
                this.data = this.dataTx.filter(function (tx) { return tx.creditAmount === 0; });
                // this.dataEntity = [...this.dataInvoices];
                this.dataEntity = this.data.filter(function (tx) {
                    // tslint:disable-next-line:no-unused-expression
                    return new Date(tx.txDate).getTime() >= new Date(start).getTime() &&
                        new Date(tx.txDate).getTime() <= new Date(end).getTime();
                });
                this.title = 'Rapport des Appro de stock faits du ' +
                    ("" + Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(start, 'mediumDate', 'en-US')) + ' au ' + ("" + Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(end, 'mediumDate', 'en-US'));
                this.modelEntity = [
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('id', 'ID', 'number', true, []),
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('produit', 'Produit', 'Array', false, []),
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('quantity', 'Quantite', 'number', false, []),
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('txDate', 'Date Entree', 'date', false, []),
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('debitAmount', 'Cout Total', 'number', false, [])
                ];
                this.modelArrayEntity = [
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('codeProd', 'Code Produit', 'string', false, []),
                ];
                break;
            default:
                this.dataEntity = this.dataInvoices.filter(function (inv) {
                    // tslint:disable-next-line:no-unused-expression
                    return new Date(inv.dateTrans).getTime() >= new Date(start).getTime() &&
                        new Date(inv.dateTrans).getTime() <= new Date(end).getTime();
                });
                this.title = 'Rapport des Factures emises  du ' +
                    ("" + Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(start, 'mediumDate', 'en-US')) + ' au ' + ("" + Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(end, 'mediumDate', 'en-US'));
                this.modelEntity = [
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('id', 'ID', 'number', true, []),
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('invoiceRef', 'Reference', 'string', false, []),
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('dateTrans', 'Date Op', 'date', false, []),
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('paymentMode', 'Mode', 'string', false, []),
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('statut', 'statut', 'string', false, []),
                    new _shared_model_data_model__WEBPACK_IMPORTED_MODULE_0__["DataModel"]('totalInvoice', 'Montant', 'number', false, [])
                ];
                break;
        }
    };
    ReportHtmlComponent.prototype.populateReport = function () {
        this.setPeriodIntervals(this.selectedPeriod);
        this.setReportData(this.selectedType, this.selectedPeriod);
    };
    ReportHtmlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-report-html',
            template: __webpack_require__(/*! ./report-html.component.html */ "./src/app/report/report-html.component.html"),
            styles: [__webpack_require__(/*! ./report-html.component.scss */ "./src/app/report/report-html.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ReportHtmlComponent);
    return ReportHtmlComponent;
}());



/***/ }),

/***/ "./src/app/report/report.module.ts":
/*!*****************************************!*\
  !*** ./src/app/report/report.module.ts ***!
  \*****************************************/
/*! exports provided: ReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModule", function() { return ReportModule; });
/* harmony import */ var _report_html_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-html.component */ "./src/app/report/report-html.component.ts");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm5/ngx-print.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ReportModule = /** @class */ (function () {
    function ReportModule() {
    }
    ReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            declarations: [_report_html_component__WEBPACK_IMPORTED_MODULE_0__["ReportHtmlComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_print__WEBPACK_IMPORTED_MODULE_1__["NgxPrintModule"],
            ],
            exports: [],
            providers: []
        })
    ], ReportModule);
    return ReportModule;
}());



/***/ }),

/***/ "./src/app/shared/transactionLine.resolver.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/transactionLine.resolver.ts ***!
  \****************************************************/
/*! exports provided: TransactionLineResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionLineResolver", function() { return TransactionLineResolver; });
/* harmony import */ var _services_transactionLine_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/transactionLine.service */ "./src/app/services/transactionLine.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransactionLineResolver = /** @class */ (function () {
    function TransactionLineResolver(txService) {
        this.txService = txService;
    }
    TransactionLineResolver.prototype.resolve = function () {
        return this.txService.getAll();
    };
    TransactionLineResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_services_transactionLine_service__WEBPACK_IMPORTED_MODULE_0__["TransactionLineService"]])
    ], TransactionLineResolver);
    return TransactionLineResolver;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map