(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_contact_contact_module_ts-src_environments_environment_prod_ts"],{

/***/ 2388:
/*!*********************************************************!*\
  !*** ./src/app/pages/contact/contact-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPageRoutingModule": () => (/* binding */ ContactPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.page */ 3256);




const routes = [{
  path: '',
  component: _contact_page__WEBPACK_IMPORTED_MODULE_0__.ContactPage
}];
let ContactPageRoutingModule = class ContactPageRoutingModule {};
ContactPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ContactPageRoutingModule);


/***/ }),

/***/ 7213:
/*!*************************************************!*\
  !*** ./src/app/pages/contact/contact.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPageModule": () => (/* binding */ ContactPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-routing.module */ 2388);
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.page */ 3256);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/storage.service */ 1188);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 7122);










let ContactPageModule = class ContactPageModule {};
ContactPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _contact_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule],
  declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_1__.ContactPage],
  providers: [src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService, _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__.InAppBrowser]
})], ContactPageModule);


/***/ }),

/***/ 3256:
/*!***********************************************!*\
  !*** ./src/app/pages/contact/contact.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPage": () => (/* binding */ ContactPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _contact_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.page.html?ngResource */ 6284);
/* harmony import */ var _contact_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.page.scss?ngResource */ 355);
/* harmony import */ var _contact_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_contact_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_service_groups_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/service-groups-provider.service */ 1081);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/loading.service */ 4471);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 7122);








let ContactPage = class ContactPage {
  constructor(ServiceGroupsProvider, iab, loadingCtrl, translate) {
    this.ServiceGroupsProvider = ServiceGroupsProvider;
    this.iab = iab;
    this.loadingCtrl = loadingCtrl;
    this.translate = translate;
    this.loader = null;
    this.sourceCodeLink = 'https://github.com/pjaudiomv/NA-Carolina-App-Ionic-6';
    this.sourceBugs = 'https://github.com/pjaudiomv/NA-Carolina-App-Ionic-6/issues';
    this.bmltLink = 'https://bmlt.app/';
    this.fbGroupLink = 'https://www.facebook.com/groups/149214049107349/';
    this.naMeetingSearchAppIOS = 'https://apps.apple.com/us/app/na-meeting-search/id627643748';
    this.naMeetingSearchAppANDROID = 'https://play.google.com/store/apps/details?id=org.na.naapp&hl=en';
  }
  ngOnInit() {
    this.translate.get('CONTACT.LOADING').subscribe(value => {
      this.loadingText = value;
    });
    this.loadingCtrl.present(this.loadingText);
    this.getServiceGroupContactDetails();
  }
  getServiceGroupContactDetails() {
    this.ServiceGroupsProvider.getAllServiceGroups().subscribe(serviceGroupData => {
      this.serviceGroupNames = serviceGroupData;
      this.loadingCtrl.dismiss();
    });
  }
  openLink(url) {
    let browser = this.iab.create(url, '_system');
  }
};
ContactPage.ctorParameters = () => [{
  type: _services_service_groups_provider_service__WEBPACK_IMPORTED_MODULE_2__.ServiceGroupsProviderService
}, {
  type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__.InAppBrowser
}, {
  type: _services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService
}];
ContactPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-contact',
  template: _contact_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_contact_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ContactPage);


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

/***/ 9019:
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: true,
  crnaBMLT: 'https://bmlt.sezf.org/main_server/client_interface/json/',
  tomatoBMLT: 'https://tomato.bmltenabled.org/main_server/client_interface/json/',
  getApiUrlServiceGroups: 'https://tomato.bmltenabled.org/main_server/client_interface/json/?switcher=GetServiceBodies&services=1215&recursive=1',
  wordpressApiUrl: 'https://crna.org/crna_docs/crna-events-app.php',
  tomatoCrnaBMLT: 'https://tomato.bmltenabled.org/main_server/client_interface/json/?switcher=GetSearchResults&services=1215&recursive=1'
};

/***/ }),

/***/ 7122:
/*!***************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/in-app-browser/ngx/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InAppBrowser": () => (/* binding */ InAppBrowser),
/* harmony export */   "InAppBrowserObject": () => (/* binding */ InAppBrowserObject)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ 9471);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2378);





var InAppBrowserObject = /** @class */function () {
  /**
   * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
   *
   * @param {string} url     The URL to load.
   * @param {string} [target="self"]  The target in which to load the URL, an optional parameter that defaults to _self.
   *                 _self: Opens in the WebView if the URL is in the white list, otherwise it opens in the InAppBrowser.
   *                 _blank: Opens in the InAppBrowser.
   *                 _system: Opens in the system's web browser.
   * @param {string | InAppBrowserOptions} [options] Options for the InAppBrowser. Optional, defaulting to: location=yes.
   *                 The options string must not contain any blank space, and each feature's
   *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
   */
  function InAppBrowserObject(url, target, options) {
    try {
      if (options && typeof options !== 'string') {
        options = Object.keys(options).map(function (key) {
          return key + "=" + options[key];
        }).join(',');
      }
      this._objectInstance = cordova.InAppBrowser.open(url, target, options);
    } catch (e) {
      if (typeof window !== 'undefined') {
        window.open(url, target);
      }
      console.warn('Native: InAppBrowser is not installed or you are running on a browser. Falling back to window.open.');
    }
  }
  InAppBrowserObject.prototype._loadAfterBeforeload = function (strUrl) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "_loadAfterBeforeload", {
      "sync": true
    }, arguments);
  };
  InAppBrowserObject.prototype.show = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "show", {
      "sync": true
    }, arguments);
  };
  InAppBrowserObject.prototype.close = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "close", {
      "sync": true
    }, arguments);
  };
  InAppBrowserObject.prototype.hide = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "hide", {
      "sync": true
    }, arguments);
  };
  InAppBrowserObject.prototype.executeScript = function (script) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "executeScript", {}, arguments);
  };
  InAppBrowserObject.prototype.insertCSS = function (css) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "insertCSS", {}, arguments);
  };
  InAppBrowserObject.prototype.on = function (event) {
    var _this = this;
    return function () {
      if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.instanceAvailability)(_this) === true) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (observer) {
          _this._objectInstance.addEventListener(event, observer.next.bind(observer));
          return function () {
            return _this._objectInstance.removeEventListener(event, observer.next.bind(observer));
          };
        });
      }
    }();
  };
  InAppBrowserObject.prototype.on = function (event) {
    var _this = this;
    return function () {
      if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.instanceAvailability)(_this) === true) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (observer) {
          _this._objectInstance.addEventListener(event, observer.next.bind(observer));
          return function () {
            return _this._objectInstance.removeEventListener(event, observer.next.bind(observer));
          };
        });
      }
    }();
  };
  return InAppBrowserObject;
}();

var InAppBrowser = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(InAppBrowser, _super);
  function InAppBrowser() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  /**
   * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
   *
   * @param  url {string}     The URL to load.
   * @param  target {string}  The target in which to load the URL, an optional parameter that defaults to _self.
   * @param  options {string} Options for the InAppBrowser. Optional, defaulting to: location=yes.
   *                 The options string must not contain any blank space, and each feature's
   *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
   * @returns {InAppBrowserObject}
   */
  InAppBrowser.prototype.create = function (url, target, options) {
    return new InAppBrowserObject(url, target, options);
  };
  InAppBrowser.ɵfac = /* @__PURE__ */function () {
    let ɵInAppBrowser_BaseFactory;
    return function InAppBrowser_Factory(t) {
      return (ɵInAppBrowser_BaseFactory || (ɵInAppBrowser_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](InAppBrowser)))(t || InAppBrowser);
    };
  }();
  InAppBrowser.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: InAppBrowser,
    factory: InAppBrowser.ɵfac
  });
  InAppBrowser.pluginName = "InAppBrowser";
  InAppBrowser.plugin = "cordova-plugin-inappbrowser";
  InAppBrowser.pluginRef = "cordova.InAppBrowser";
  InAppBrowser.repo = "https://github.com/apache/cordova-plugin-inappbrowser";
  InAppBrowser.platforms = ["AmazonFire OS", "Android", "Browser", "iOS", "macOS", "Windows"];
  InAppBrowser = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([], InAppBrowser);
  return InAppBrowser;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](InAppBrowser, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable
  }], null, null);
})();

/***/ }),

/***/ 355:
/*!************************************************************!*\
  !*** ./src/app/pages/contact/contact.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h3 {\n  text-align: center;\n}\n\na {\n  background-color: transparent;\n  color: #fff;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/contact/contact.page.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;AACF;;AAEA;EACE,6BAAA;EACA,WAAA;AACF","sourcesContent":["h3 {\n  text-align: center;\n}\n\na {\n  background-color: transparent;\n  color: #fff;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6284:
/*!************************************************************!*\
  !*** ./src/app/pages/contact/contact.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar   color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      {{'CONTACT' | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1> {{ 'CONTACT.DETAILS' | translate }} </h1>\n\n  <ion-list *ngFor=\"let detail of serviceGroupNames\">\n    <ion-card>\n      <ion-card-content>\n\n        <ion-card-title>{{detail.name}}</ion-card-title>\n\n        <ion-list no-padding>\n          <div *ngIf=\"detail.url\">\n            <ion-item text-wrap>\n              <ion-icon name=\"globe\" slot=\"start\"></ion-icon>\n              <ion-button (click)='openLink(detail.url)'>\n                <ion-ripple-effect></ion-ripple-effect>\n                {{detail.url}}\n              </ion-button>\n            </ion-item>\n          </div>\n\n          <div *ngIf=\"detail.helpline\">\n            <ion-item text-wrap>\n              <ion-ripple-effect></ion-ripple-effect>\n              <ion-icon name=\"call\" slot=\"start\"></ion-icon>\n              <a href=\"tel:{{detail.helpline}}\">{{detail.helpline}} </a>\n            </ion-item>\n          </div>\n\n          <div *ngIf=\"detail.contact_email\">\n            <ion-item text-wrap>\n              <ion-ripple-effect></ion-ripple-effect>\n              <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n              <a href=\"mailto:{{detail.contact_email}}\">{{detail.contact_email}} </a>\n            </ion-item>\n          </div>\n\n          <div *ngIf=\"detail.description\">\n            <ion-item text-wrap>\n              <ion-icon name=\"information-circle\" slot=\"start\"></ion-icon>\n              {{detail.description}}\n            </ion-item>\n          </div>\n\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n\n  <br>\n  <h1> {{ 'CONTACT.APPDETAILS' | translate }} </h1>\n  <br>\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>{{ 'CONTACT.APPSOURCE' | translate }}</ion-card-title>\n      <ion-item text-wrap>\n        <ion-icon name=\"globe\" slot=\"start\"></ion-icon>\n        <ion-button small (click)='openLink(sourceCodeLink)'>https://github.com</ion-button>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>{{ 'CONTACT.REPORTBUG' | translate }}</ion-card-title>\n      <ion-item text-wrap>\n        <ion-icon name=\"globe\" slot=\"start\"></ion-icon>\n        <ion-button small (click)='openLink(sourceBugs)'>https://github.com</ion-button>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>{{ 'CONTACT.MOREBMLT' | translate }}</ion-card-title>\n      <ion-list no-padding>\n        <ion-item text-wrap>\n          <ion-icon name=\"logo-facebook\" slot=\"start\"></ion-icon>\n          <ion-button small (click)=\"openLink(fbGroupLink)\">\n            <ion-icon name=\"logo-facebook\" slot=\"start\"></ion-icon>{{ 'CONTACT.JOINFACE' | translate }}\n          </ion-button>\n        </ion-item>\n        <ion-item text-wrap>\n          <ion-icon name=\"globe\" slot=\"start\"></ion-icon>\n          <ion-button small (click)=\"openLink(bmltLink)\">\n            <ion-icon name=\"globe\" slot=\"start\"></ion-icon>{{ 'CONTACT.VISITWEB' | translate }}\n          </ion-button>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>{{ 'CONTACT.NAWSAPP' | translate }}</ion-card-title>\n      <p> {{ 'CONTACT.NAWSBLURB' | translate }} </p>\n      <ion-list no-padding>\n        <ion-item text-wrap>\n          <ion-icon name=\"logo-apple\" slot=\"start\"></ion-icon>\n          <ion-button small (click)=\"openLink(naMeetingSearchAppIOS)\">\n            <ion-icon name=\"logo-apple\" slot=\"start\"></ion-icon>Apple Store\n          </ion-button>\n        </ion-item>\n        <ion-item text-wrap>\n          <ion-icon name=\"logo-android\" slot=\"start\"></ion-icon>\n          <ion-button small (click)=\"openLink(naMeetingSearchAppANDROID)\">\n            <ion-icon name=\"logo-android\" slot=\"start\"></ion-icon>Google Store\n          </ion-button>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_contact_contact_module_ts-src_environments_environment_prod_ts.js.map