(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_jft_jft_module_ts"],{

/***/ 6806:
/*!*************************************************!*\
  !*** ./src/app/pages/jft/jft-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JftPageRoutingModule": () => (/* binding */ JftPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _jft_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jft.page */ 7789);




const routes = [{
  path: '',
  component: _jft_page__WEBPACK_IMPORTED_MODULE_0__.JftPage
}];
let JftPageRoutingModule = class JftPageRoutingModule {};
JftPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], JftPageRoutingModule);


/***/ }),

/***/ 2842:
/*!*****************************************!*\
  !*** ./src/app/pages/jft/jft.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JftPageModule": () => (/* binding */ JftPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _jft_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jft-routing.module */ 6806);
/* harmony import */ var _jft_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jft.page */ 7789);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _awesome_cordova_plugins_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/http/ngx */ 9067);
/* harmony import */ var _services_jft_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/jft.service */ 8626);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage.service */ 1188);











let JftPageModule = class JftPageModule {};
JftPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _jft_routing_module__WEBPACK_IMPORTED_MODULE_0__.JftPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule],
  providers: [_awesome_cordova_plugins_http_ngx__WEBPACK_IMPORTED_MODULE_2__.HTTP, _services_jft_service__WEBPACK_IMPORTED_MODULE_3__.JftService, _services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService],
  declarations: [_jft_page__WEBPACK_IMPORTED_MODULE_1__.JftPage]
})], JftPageModule);


/***/ }),

/***/ 7789:
/*!***************************************!*\
  !*** ./src/app/pages/jft/jft.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JftPage": () => (/* binding */ JftPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _jft_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jft.page.html?ngResource */ 5696);
/* harmony import */ var _jft_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jft.page.scss?ngResource */ 8427);
/* harmony import */ var _jft_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jft_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/loading.service */ 4471);
/* harmony import */ var _services_jft_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/jft.service */ 8626);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage.service */ 1188);








let JftPage = class JftPage {
  constructor(loadingCtrl, JftProvider, translate, storage) {
    this.loadingCtrl = loadingCtrl;
    this.JftProvider = JftProvider;
    this.translate = translate;
    this.storage = storage;
    this.loader = null;
    this.headers = null;
  }
  ngOnInit() {
    this.loadingCtrl.present('Getting today\'s Just For Today');
    this.jft = this.getJFT();
  }
  getJFT() {
    this.JftProvider.getEnglishJFT().then(data => {
      this.jft = data;
      this.loadingCtrl.dismiss();
    });
  }
};
JftPage.ctorParameters = () => [{
  type: _services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService
}, {
  type: _services_jft_service__WEBPACK_IMPORTED_MODULE_3__.JftService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService
}, {
  type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService
}];
JftPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-jft',
  template: _jft_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_jft_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], JftPage);


/***/ }),

/***/ 8626:
/*!*****************************************!*\
  !*** ./src/app/services/jft.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JftService": () => (/* binding */ JftService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _awesome_cordova_plugins_http_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/http/ngx */ 9067);



let JftService = class JftService {
  constructor(http) {
    this.http = http;
    this.JftUrlEnglish = 'https://www.jftna.org/jft/';
  }
  getEnglishJFT() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
      const data = yield this.http.get(this.JftUrlEnglish, {}, {});
      console.log(data.data);
      return data.data;
    });
  }
};
JftService.ctorParameters = () => [{
  type: _awesome_cordova_plugins_http_ngx__WEBPACK_IMPORTED_MODULE_0__.HTTP
}];
JftService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], JftService);


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

/***/ 8427:
/*!****************************************************!*\
  !*** ./src/app/pages/jft/jft.page.scss?ngResource ***!
  \****************************************************/
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

/***/ 5696:
/*!****************************************************!*\
  !*** ./src/app/pages/jft/jft.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar  color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      {{'JUSTFORTODAY' | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n      <ion-card-content>\n        <div  [innerHtml]=\"jft\"></div>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_jft_jft_module_ts.js.map