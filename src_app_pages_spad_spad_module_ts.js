(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_spad_spad_module_ts"],{

/***/ 284:
/*!***************************************************!*\
  !*** ./src/app/pages/spad/spad-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpadPageRoutingModule": () => (/* binding */ SpadPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _spad_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spad.page */ 4985);




const routes = [{
  path: '',
  component: _spad_page__WEBPACK_IMPORTED_MODULE_0__.SpadPage
}];
let SpadPageRoutingModule = class SpadPageRoutingModule {};
SpadPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], SpadPageRoutingModule);


/***/ }),

/***/ 1358:
/*!*******************************************!*\
  !*** ./src/app/pages/spad/spad.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpadPageModule": () => (/* binding */ SpadPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _spad_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spad-routing.module */ 284);
/* harmony import */ var _spad_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spad.page */ 4985);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _awesome_cordova_plugins_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/http/ngx */ 9067);
/* harmony import */ var _services_spad_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/spad.service */ 2819);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage.service */ 1188);











let SpadPageModule = class SpadPageModule {};
SpadPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _spad_routing_module__WEBPACK_IMPORTED_MODULE_0__.SpadPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule],
  providers: [_awesome_cordova_plugins_http_ngx__WEBPACK_IMPORTED_MODULE_2__.HTTP, _services_spad_service__WEBPACK_IMPORTED_MODULE_3__.SpadService, _services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService],
  declarations: [_spad_page__WEBPACK_IMPORTED_MODULE_1__.SpadPage]
})], SpadPageModule);


/***/ }),

/***/ 4985:
/*!*****************************************!*\
  !*** ./src/app/pages/spad/spad.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpadPage": () => (/* binding */ SpadPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _spad_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spad.page.html?ngResource */ 5813);
/* harmony import */ var _spad_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spad.page.scss?ngResource */ 2436);
/* harmony import */ var _spad_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_spad_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/loading.service */ 4471);
/* harmony import */ var _services_spad_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/spad.service */ 2819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage.service */ 1188);








let SpadPage = class SpadPage {
  constructor(loadingCtrl, SpadProvider, translate, storage) {
    this.loadingCtrl = loadingCtrl;
    this.SpadProvider = SpadProvider;
    this.translate = translate;
    this.storage = storage;
    this.loader = null;
    this.headers = null;
  }
  ngOnInit() {
    this.loadingCtrl.present('Getting today\'s Spiritual Principle A Day');
    this.spad = this.getSPAD();
  }
  getSPAD() {
    this.SpadProvider.getEnglishSPAD().then(data => {
      this.spad = data;
      this.loadingCtrl.dismiss();
    });
  }
};
SpadPage.ctorParameters = () => [{
  type: _services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService
}, {
  type: _services_spad_service__WEBPACK_IMPORTED_MODULE_3__.SpadService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService
}, {
  type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService
}];
SpadPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-spad',
  template: _spad_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_spad_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SpadPage);


/***/ }),

/***/ 4471:
/*!*********************************************!*\
  !*** ./src/app/services/loading.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);



let LoadingService = class LoadingService {
  constructor(loadingController) {
    this.loadingController = loadingController;
    this.isLoading = false;
  }
  present(text) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
      console.log('loader.present() called');
      this.isLoading = true;
      return yield this.loadingController.create({
        spinner: 'circles',
        message: text
      }).then(a => {
        a.present().then(() => {
          console.log('loader.present() presented');
          if (!this.isLoading) {
            a.dismiss().then(() => console.log('abort presenting'));
          }
        });
      });
    });
  }
  dismiss() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
      console.log('loader.dismiss() called');
      this.isLoading = false;
      return yield this.loadingController.dismiss().then(() => console.log('dismissed'));
    });
  }
};
LoadingService.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController
}];
LoadingService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], LoadingService);


/***/ }),

/***/ 2819:
/*!******************************************!*\
  !*** ./src/app/services/spad.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpadService": () => (/* binding */ SpadService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _awesome_cordova_plugins_http_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/http/ngx */ 9067);



let SpadService = class SpadService {
  constructor(http) {
    this.http = http;
    this.SpadUrlEnglish = 'https://www.spadna.org';
  }
  getEnglishSPAD() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
      const data = yield this.http.get(this.SpadUrlEnglish, {}, {});
      console.log(data.data);
      return data.data;
    });
  }
};
SpadService.ctorParameters = () => [{
  type: _awesome_cordova_plugins_http_ngx__WEBPACK_IMPORTED_MODULE_0__.HTTP
}];
SpadService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], SpadService);


/***/ }),

/***/ 2436:
/*!******************************************************!*\
  !*** ./src/app/pages/spad/spad.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5813:
/*!******************************************************!*\
  !*** ./src/app/pages/spad/spad.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar  color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      {{'SPIRITUALPRINCIPLEADAY' | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n      <ion-card-content>\n        <div  [innerHtml]=\"spad\"></div>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_spad_spad_module_ts.js.map