(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_list_list_module_ts"],{

/***/ 4290:
/*!***************************************************!*\
  !*** ./src/app/pages/list/list-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListPageRoutingModule": () => (/* binding */ ListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.page */ 519);




const routes = [{
  path: '',
  component: _list_page__WEBPACK_IMPORTED_MODULE_0__.ListPage
}];
let ListPageRoutingModule = class ListPageRoutingModule {};
ListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ListPageRoutingModule);


/***/ }),

/***/ 9388:
/*!*******************************************!*\
  !*** ./src/app/pages/list/list.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListPageModule": () => (/* binding */ ListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-routing.module */ 4290);
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.page */ 519);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 7122);
/* harmony import */ var _services_meeting_list_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/meeting-list-provider.service */ 7656);
/* harmony import */ var _services_service_groups_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/service-groups-provider.service */ 1081);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 5503);
/* harmony import */ var _components_component_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/component/component.module */ 8671);
/* harmony import */ var _awesome_cordova_plugins_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/http/ngx */ 9067);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/storage.service */ 1188);















let ListPageModule = class ListPageModule {};
ListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__.PipesModule, _list_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListPageRoutingModule, _components_component_component_module__WEBPACK_IMPORTED_MODULE_6__.ComponentModule],
  declarations: [_list_page__WEBPACK_IMPORTED_MODULE_1__.ListPage],
  providers: [_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser, _services_meeting_list_provider_service__WEBPACK_IMPORTED_MODULE_3__.MeetingListProviderService, _services_service_groups_provider_service__WEBPACK_IMPORTED_MODULE_4__.ServiceGroupsProviderService, _awesome_cordova_plugins_http_ngx__WEBPACK_IMPORTED_MODULE_7__.HTTP, _services_storage_service__WEBPACK_IMPORTED_MODULE_8__.StorageService]
})], ListPageModule);


/***/ }),

/***/ 519:
/*!*****************************************!*\
  !*** ./src/app/pages/list/list.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListPage": () => (/* binding */ ListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.page.html?ngResource */ 8813);
/* harmony import */ var _list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.page.scss?ngResource */ 3518);
/* harmony import */ var _list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/storage.service */ 1188);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/loading.service */ 4471);
/* harmony import */ var _services_service_groups_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/service-groups-provider.service */ 1081);
/* harmony import */ var _services_meeting_list_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/meeting-list-provider.service */ 7656);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 7122);










let ListPage = class ListPage {
  constructor(meetingListProvider, serviceGroupsProvider, loaderCtrl, translate, storage, iab) {
    this.meetingListProvider = meetingListProvider;
    this.serviceGroupsProvider = serviceGroupsProvider;
    this.loaderCtrl = loaderCtrl;
    this.translate = translate;
    this.storage = storage;
    this.iab = iab;
    this.serviceGroupHierarchy = [];
    this.shownDay = null;
    this.shownGroupL1 = null;
    this.shownGroupL2 = null;
    this.shownGroupL3 = null;
    this.shownGroupL4 = null;
    this.HTMLGrouping = 'counties';
    this.loader = null;
    this.meetingListArea = [];
    this.meetingListCounty = [];
    this.areaName = '';
    this.countyName = '';
    this.isLoaded = false;
    this.translate.get('FINDING_MTGS').subscribe(value => {
      this.presentLoader(value);
    });
    this.meetingListProvider.getCounties().subscribe(data => {
      if (JSON.stringify(data) === '{}') {
        // empty result set!
        this.meetingListArea = JSON.parse('[]');
      } else {
        this.meetingListCounties = data;
        console.log(this.meetingListCounties);
        this.isLoaded = true;
        for (let i = 0; i < this.meetingListCounties.length; i++) {
          if (this.meetingListCounties[i].location_sub_province == "") {
            console.log("Found a virt mtg");
            this.meetingListCounties[i].location_sub_province = "Online";
          }
        }
        this.uniqueCounties = [...new Set(this.meetingListCounties.map(({
          location_sub_province
        }) => location_sub_province))];
      }
      this.dismissLoader();
    });
  }
  getMeetingsByCounty(countyName) {
    this.translate.get('FINDING_MTGS').subscribe(value => {
      this.presentLoader(value);
    });
    this.HTMLGrouping = 'meetings';
    this.countyName = countyName;
    this.meetingListProvider.getAllMeetings().subscribe(data => {
      if (JSON.stringify(data) === '{}') {
        // empty result set!
        this.meetingListCounty = JSON.parse('[]');
      } else {
        this.meetingListCounty = data;
        if (countyName == "Online") {
          this.meetingListCounty = this.meetingListCounty.filter(meeting => meeting.location_sub_province == "");
        } else {
          this.meetingListCounty = this.meetingListCounty.filter(meeting => meeting.location_sub_province == countyName);
        }
        this.isLoaded = true;
      }
      this.dismissLoader();
    });
  }
  presentLoader(loaderText) {
    if (!this.loader) {
      this.loader = this.loaderCtrl.present(loaderText);
    }
  }
  dismissLoader() {
    if (this.loader) {
      this.loader = this.loaderCtrl.dismiss();
      this.loader = null;
    }
  }
  showCountyStructure() {
    this.HTMLGrouping = 'counties';
    this.countyName = '';
    this.shownDay = null;
  }
};
ListPage.ctorParameters = () => [{
  type: _services_meeting_list_provider_service__WEBPACK_IMPORTED_MODULE_5__.MeetingListProviderService
}, {
  type: _services_service_groups_provider_service__WEBPACK_IMPORTED_MODULE_4__.ServiceGroupsProviderService
}, {
  type: _services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService
}, {
  type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService
}, {
  type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__.InAppBrowser
}];
ListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-list',
  template: _list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ListPage);


/***/ }),

/***/ 3518:
/*!******************************************************!*\
  !*** ./src/app/pages/list/list.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ionicon {\n  margin-end: 5px !important;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/list/list.page.scss"],"names":[],"mappings":"AAAA;EACI,0BAAA;AACJ","sourcesContent":[".ionicon {\n    margin-end: 5px !important;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8813:
/*!******************************************************!*\
  !*** ./src/app/pages/list/list.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n\n  <ion-toolbar color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <div *ngIf=\"countyName != ''; else BMLT_List\">\n      <ion-buttons slot=\"end\">\n        <ion-button color=\"secondary\" size=\"small\" (click)=\"showCountyStructure()\">Back</ion-button>\n      </ion-buttons>\n    </div>\n\n    <ng-template #BMLT_List>\n\n      <ion-title>\n        {{'MEETINGLIST' | translate}}\n      </ion-title>\n\n    </ng-template>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content no-padding>\n\n  <div *ngIf=\"HTMLGrouping == 'counties'\">\n    <div *ngFor=\"let L1 of uniqueCounties; let i = index\">\n\n      <ion-item-divider sticky=\"true\" (click)=\"getMeetingsByCounty(L1)\" color=\"primary\">\n        <h3>{{ L1 }}</h3>\n        <ion-icon size=\"large\" color=\"secondary\" slot=\"end\" name=\"play\"></ion-icon>\n      </ion-item-divider>\n    </div>\n  </div>\n\n  <div *ngIf=\"HTMLGrouping == 'meetings'\">\n    <div *ngIf = \"isLoaded\">\n      <app-meeting-list [data]=\"meetingListCounty\" meetingType='regular'></app-meeting-list>\n    </div>\n  </div>\n  \n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div *ngIf=\"countyName != ''\">\n      <ion-title>{{ countyName }}</ion-title>\n    </div>\n  </ion-toolbar>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_list_list_module_ts.js.map