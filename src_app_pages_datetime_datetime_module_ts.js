(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_datetime_datetime_module_ts"],{

/***/ 8130:
/*!***********************************************************!*\
  !*** ./src/app/pages/datetime/datetime-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatetimePageRoutingModule": () => (/* binding */ DatetimePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _datetime_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datetime.page */ 4385);




const routes = [{
  path: '',
  component: _datetime_page__WEBPACK_IMPORTED_MODULE_0__.DatetimePage
}];
let DatetimePageRoutingModule = class DatetimePageRoutingModule {};
DatetimePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], DatetimePageRoutingModule);


/***/ }),

/***/ 4680:
/*!***************************************************!*\
  !*** ./src/app/pages/datetime/datetime.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatetimePageModule": () => (/* binding */ DatetimePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _datetime_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datetime-routing.module */ 8130);
/* harmony import */ var _datetime_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datetime.page */ 4385);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/storage.service */ 1188);









let DatetimePageModule = class DatetimePageModule {};
DatetimePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _datetime_routing_module__WEBPACK_IMPORTED_MODULE_0__.DatetimePageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule],
  declarations: [_datetime_page__WEBPACK_IMPORTED_MODULE_1__.DatetimePage],
  providers: [_services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService]
})], DatetimePageModule);


/***/ }),

/***/ 4385:
/*!*************************************************!*\
  !*** ./src/app/pages/datetime/datetime.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatetimePage": () => (/* binding */ DatetimePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _datetime_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datetime.page.html?ngResource */ 9206);
/* harmony import */ var _datetime_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datetime.page.scss?ngResource */ 774);
/* harmony import */ var _datetime_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_datetime_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/storage.service */ 1188);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment_precise_range_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment-precise-range-plugin */ 4004);
/* harmony import */ var moment_precise_range_plugin__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_precise_range_plugin__WEBPACK_IMPORTED_MODULE_4__);








let DatetimePage = class DatetimePage {
  constructor(storage, translate) {
    this.storage = storage;
    this.translate = translate;
    this.cleanTimeInMilliseconds = 0;
    this.cleanTimeInDays = 0;
    this.cleanTimeInYears = 0;
    this.cleanTimeInWeeks = 0;
    this.wait = true;
    this.monthNames = [];
    this.monthShortNames = [];
  }
  ngOnInit() {
    let cleanDate;
    this.storage.get('cleanDate').then(value => {
      if (value) {
        cleanDate = moment__WEBPACK_IMPORTED_MODULE_3__(value).toISOString();
      } else {
        cleanDate = moment__WEBPACK_IMPORTED_MODULE_3__().toISOString();
      }
      this.maxDisplayDate = moment__WEBPACK_IMPORTED_MODULE_3__().toISOString();
      this.todayDate = moment__WEBPACK_IMPORTED_MODULE_3__();
      this.todayInMilliseconds = this.todayDate.valueOf();
      this.todayDay = this.todayDate.date();
      this.todayMonth = this.todayDate.month();
      this.todayYear = this.todayDate.year();
      this.myDate = cleanDate;
      this.tag = 'none';
      this.wait = false;
      this.getCleanTime();
    });
    // this.translate.get('JANUARY').subscribe(value1 => {
    //   this.monthNames.push(value1);
    //   this.translate.get('FEBRUARY').subscribe(value2 => {
    //     this.monthNames.push(value2);
    //     this.translate.get('MARCH').subscribe(value3 => {
    //       this.monthNames.push(value3);
    //       this.translate.get('APRIL').subscribe(value4 => {
    //         this.monthNames.push(value4);
    //         this.translate.get('MAYL').subscribe(value5 => {
    //           this.monthNames.push(value5);
    //           this.translate.get('JUNE').subscribe(value6 => {
    //             this.monthNames.push(value6);
    //             this.translate.get('JULY').subscribe(value7 => {
    //               this.monthNames.push(value7);
    //               this.translate.get('AUGUST').subscribe(value8 => {
    //                 this.monthNames.push(value8);
    //                 this.translate.get('SPETEMBER').subscribe(value9 => {
    //                   this.monthNames.push(value9);
    //                   this.translate.get('OCTOBER').subscribe(value10 => {
    //                     this.monthNames.push(value10);
    //                     this.translate.get('NOVEMBER').subscribe(value11 => {
    //                       this.monthNames.push(value11);
    //                       this.translate.get('DECEMBER').subscribe(value12 => {
    //                         this.monthNames.push(value12);
    //                       });
    //                     });
    //                   });
    //                 });
    //               });
    //             });
    //           });
    //         });
    //       });
    //     });
    //   });
    // });
    // this.translate.get('JAN').subscribe(value1 => {
    //   this.monthShortNames.push(value1);
    //   this.translate.get('FEB').subscribe(value2 => {
    //     this.monthShortNames.push(value2);
    //     this.translate.get('MAR').subscribe(value3 => {
    //       this.monthShortNames.push(value3);
    //       this.translate.get('APR').subscribe(value4 => {
    //         this.monthShortNames.push(value4);
    //         this.translate.get('MAYS').subscribe(value5 => {
    //           this.monthShortNames.push(value5);
    //           this.translate.get('JUN').subscribe(value6 => {
    //             this.monthShortNames.push(value6);
    //             this.translate.get('JUL').subscribe(value7 => {
    //               this.monthShortNames.push(value7);
    //               this.translate.get('AUG').subscribe(value8 => {
    //                 this.monthShortNames.push(value8);
    //                 this.translate.get('SEP').subscribe(value9 => {
    //                   this.monthShortNames.push(value9);
    //                   this.translate.get('OCT').subscribe(value10 => {
    //                     this.monthShortNames.push(value10);
    //                     this.translate.get('NOV').subscribe(value11 => {
    //                       this.monthShortNames.push(value11);
    //                       this.translate.get('DEC').subscribe(value12 => {
    //                         this.monthShortNames.push(value12);
    //                       });
    //                     });
    //                   });
    //                 });
    //               });
    //             });
    //           });
    //         });
    //       });
    //     });
    //   });
    // });
    this.translate.get('CANCEL').subscribe(value => {
      this.cancelText = value;
    });
    this.translate.get('DONE').subscribe(value => {
      this.doneText = value;
    });
  }
  getCleanTime() {
    if (!this.wait) {
      const oneDay = 86400000; // in  milliseconds
      const oneWeek = oneDay * 7;
      const oneYear = 31556952000; // inmillseconds
      const cleanDateInMilliseconds = Date.parse(this.myDate);
      this.storage.set('cleanDate', cleanDateInMilliseconds);
      this.cleanTimeDate = new Date(cleanDateInMilliseconds);
      this.cleanDay = this.cleanTimeDate.getDate();
      this.cleanMonth = this.cleanTimeDate.getMonth();
      this.cleanYear = this.cleanTimeDate.getFullYear();
      // this.cleanTimeInMilliseconds = (this.todayInMilliseconds - cleanDateInMilliseconds) + oneDay; // ??
      this.cleanTimeInMilliseconds = this.todayInMilliseconds - cleanDateInMilliseconds; // ??
      this.cleanTimeInDays = Math.floor(this.cleanTimeInMilliseconds / oneDay);
      this.cleanTimeInWeeks = Math.floor(this.cleanTimeInMilliseconds / oneWeek);
      this.cleanTimeInYears = Math.floor(this.cleanTimeInMilliseconds / oneYear);
      if (this.cleanTimeInDays !== 0) {
        this.cleanTimeTag();
      }
      const todayMoment = moment__WEBPACK_IMPORTED_MODULE_3__(this.todayInMilliseconds);
      const cleanMoment = moment__WEBPACK_IMPORTED_MODULE_3__(cleanDateInMilliseconds);
      this.cleanHumanized = moment__WEBPACK_IMPORTED_MODULE_3__.preciseDiff(cleanMoment, todayMoment, true);
      console.log('Today : ', todayMoment);
      console.log('Clean : ', cleanMoment);
      console.log('YEARS : ', this.cleanHumanized.years);
      console.log('MONTHS: ', this.cleanHumanized.months);
      console.log('DAYS  : ', this.cleanHumanized.days);
    }
  }
  cleanTimeTag() {
    // One day
    if (this.cleanTimeInDays === 1) {
      this.tagTime = '1';
      this.tag = 'DAYCLEAN';
      this.keytagImage = './assets/keytags/1-day.png';
      // 30 days
    } else if (this.cleanTimeInDays === 30) {
      this.tagTime = '30';
      this.tag = 'DAYSCLEAN';
      this.keytagImage = './assets/keytags/30-days.png';
      // 60 days
    } else if (this.cleanTimeInDays === 60) {
      this.tagTime = '60';
      this.tag = 'DAYSCLEAN';
      this.keytagImage = './assets/keytags/60-days.png';
      // 90 days
    } else if (this.cleanTimeInDays === 90) {
      this.tagTime = '90';
      this.tag = 'DAYSCLEAN';
      this.keytagImage = './assets/keytags/90-days.png';
      // 6 months
      // TODO: FIX THIS
    } else if (this.cleanTimeInDays === 182) {
      this.tagTime = '6';
      this.tag = 'MONTHSCLEAN';
      this.keytagImage = './assets/keytags/6-months.png';
      // 9 months
      // TODO: FIX THIS
    } else if (this.cleanTimeInDays === 274) {
      this.tagTime = '9';
      this.tag = 'MONTHSCLEAN';
      this.keytagImage = './assets/keytags/9-months.png';
      // 1 year
    } else if (this.todayDay === this.cleanDay && this.todayMonth === this.cleanMonth && this.todayYear - 1 === this.cleanYear) {
      this.tagTime = '1';
      this.tag = 'YEARCLEAN';
      this.keytagImage = './assets/keytags/1-year.png';
      // 18 months
      // TODO: Fix this
    } else if (this.cleanTimeInDays === 547) {
      this.tagTime = '18';
      this.tag = 'MONTHSCLEAN';
      this.keytagImage = './assets/keytags/18-months.png';
      // Multiple years
    } else if (this.todayDay === this.cleanDay && this.todayMonth === this.cleanMonth && this.cleanYear !== this.todayYear && this.todayYear - this.cleanYear > 1) {
      this.tagTime = this.cleanTimeInYears;
      this.tag = 'YEARSCLEAN';
      this.keytagImage = './assets/keytags/x-years.png';
    } else {
      // Not a clean time anniversary today
      this.tag = 'none';
    }
    return this.tag;
  }
};
DatetimePage.ctorParameters = () => [{
  type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService
}];
DatetimePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-datetime',
  template: _datetime_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_datetime_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DatetimePage);


/***/ }),

/***/ 4004:
/*!**************************************************************************!*\
  !*** ./node_modules/moment-precise-range-plugin/moment-precise-range.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

if (typeof moment === "undefined" && "function" === 'function') {
  var moment = __webpack_require__(/*! moment */ 6908);
}
(function (moment) {
  var STRINGS = {
    nodiff: '',
    year: 'year',
    years: 'years',
    month: 'month',
    months: 'months',
    day: 'day',
    days: 'days',
    hour: 'hour',
    hours: 'hours',
    minute: 'minute',
    minutes: 'minutes',
    second: 'second',
    seconds: 'seconds',
    delimiter: ' '
  };
  function pluralize(num, word) {
    return num + ' ' + STRINGS[word + (num === 1 ? '' : 's')];
  }
  function buildStringFromValues(yDiff, mDiff, dDiff, hourDiff, minDiff, secDiff) {
    var result = [];
    if (yDiff) {
      result.push(pluralize(yDiff, 'year'));
    }
    if (mDiff) {
      result.push(pluralize(mDiff, 'month'));
    }
    if (dDiff) {
      result.push(pluralize(dDiff, 'day'));
    }
    if (hourDiff) {
      result.push(pluralize(hourDiff, 'hour'));
    }
    if (minDiff) {
      result.push(pluralize(minDiff, 'minute'));
    }
    if (secDiff) {
      result.push(pluralize(secDiff, 'second'));
    }
    return result.join(STRINGS.delimiter);
  }
  function buildValueObject(yDiff, mDiff, dDiff, hourDiff, minDiff, secDiff, firstDateWasLater) {
    return {
      "years": yDiff,
      "months": mDiff,
      "days": dDiff,
      "hours": hourDiff,
      "minutes": minDiff,
      "seconds": secDiff,
      "firstDateWasLater": firstDateWasLater
    };
  }
  moment.fn.preciseDiff = function (d2, returnValueObject) {
    return moment.preciseDiff(this, d2, returnValueObject);
  };
  moment.preciseDiff = function (d1, d2, returnValueObject) {
    var m1 = moment(d1),
      m2 = moment(d2),
      firstDateWasLater;
    m1.add(m2.utcOffset() - m1.utcOffset(), 'minutes'); // shift timezone of m1 to m2

    if (m1.isSame(m2)) {
      if (returnValueObject) {
        return buildValueObject(0, 0, 0, 0, 0, 0, false);
      } else {
        return STRINGS.nodiff;
      }
    }
    if (m1.isAfter(m2)) {
      var tmp = m1;
      m1 = m2;
      m2 = tmp;
      firstDateWasLater = true;
    } else {
      firstDateWasLater = false;
    }
    var yDiff = m2.year() - m1.year();
    var mDiff = m2.month() - m1.month();
    var dDiff = m2.date() - m1.date();
    var hourDiff = m2.hour() - m1.hour();
    var minDiff = m2.minute() - m1.minute();
    var secDiff = m2.second() - m1.second();
    if (secDiff < 0) {
      secDiff = 60 + secDiff;
      minDiff--;
    }
    if (minDiff < 0) {
      minDiff = 60 + minDiff;
      hourDiff--;
    }
    if (hourDiff < 0) {
      hourDiff = 24 + hourDiff;
      dDiff--;
    }
    if (dDiff < 0) {
      var daysInLastFullMonth = moment(m2.year() + '-' + (m2.month() + 1), "YYYY-MM").subtract(1, 'M').daysInMonth();
      if (daysInLastFullMonth < m1.date()) {
        // 31/01 -> 2/03
        dDiff = daysInLastFullMonth + dDiff + (m1.date() - daysInLastFullMonth);
      } else {
        dDiff = daysInLastFullMonth + dDiff;
      }
      mDiff--;
    }
    if (mDiff < 0) {
      mDiff = 12 + mDiff;
      yDiff--;
    }
    if (returnValueObject) {
      return buildValueObject(yDiff, mDiff, dDiff, hourDiff, minDiff, secDiff, firstDateWasLater);
    } else {
      return buildStringFromValues(yDiff, mDiff, dDiff, hourDiff, minDiff, secDiff);
    }
  };
})(moment);

/***/ }),

/***/ 774:
/*!**************************************************************!*\
  !*** ./src/app/pages/datetime/datetime.page.scss?ngResource ***!
  \**************************************************************/
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

/***/ 9206:
/*!**************************************************************!*\
  !*** ./src/app/pages/datetime/datetime.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar  color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      {{'DATETIME' | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item>\n    <ion-label>{{'ENTERCLEANDATE' | translate}} </ion-label>\n    </ion-item>\n    <ion-item>\n    <ion-datetime\n      displayFormat=\"DD MMM YYYY\"\n      display-timezone=\"utc\"\n      max=\"{{maxDisplayDate}}\"\n      presentation=\"date\"\n      [cancelText]=\"cancelText\"\n      [doneText]=\"doneText\"\n      [(ngModel)]=\"myDate\"\n      (ionChange)=getCleanTime()>\n    </ion-datetime>\n  </ion-item>\n\n  <ion-card *ngIf=\"cleanHumanized\">\n    <ion-card-content>\n      <h1>{{ cleanHumanized.years}} {{ 'YEARS' | translate}}, {{ cleanHumanized.months }}  {{'MONTHS' | translate }}, {{ cleanHumanized.days }} {{ 'DAYS' | translate}}</h1>\n    </ion-card-content>\n  </ion-card>\n\n  <div *ngIf=\"tag != 'none'\">\n    <ion-card>\n      <ion-card-header>{{'BIRTHDAY' | translate}}</ion-card-header>\n      <ion-card-content>\n        <h1>{{ tagTime }} {{ tag | translate }}</h1>\n        <ion-img [src]='keytagImage'></ion-img>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_datetime_datetime_module_ts.js.map