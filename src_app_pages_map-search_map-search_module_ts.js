(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_map-search_map-search_module_ts"],{

/***/ 6193:
/*!***************************************************************!*\
  !*** ./src/app/pages/map-search/map-search-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapSearchPageRoutingModule": () => (/* binding */ MapSearchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _map_search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-search.page */ 164);




const routes = [{
  path: '',
  component: _map_search_page__WEBPACK_IMPORTED_MODULE_0__.MapSearchPage
}];
let MapSearchPageRoutingModule = class MapSearchPageRoutingModule {};
MapSearchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], MapSearchPageRoutingModule);


/***/ }),

/***/ 5079:
/*!*******************************************************!*\
  !*** ./src/app/pages/map-search/map-search.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapSearchPageModule": () => (/* binding */ MapSearchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _map_search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-search-routing.module */ 6193);
/* harmony import */ var _map_search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-search.page */ 164);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/base64/ngx */ 9604);
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/modal.page */ 8167);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 7122);
/* harmony import */ var _services_meeting_list_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/meeting-list-provider.service */ 7656);
/* harmony import */ var _components_component_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/component/component.module */ 8671);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/storage.service */ 1188);














const routes = [{
  path: '',
  component: _map_search_page__WEBPACK_IMPORTED_MODULE_1__.MapSearchPage
}];
let MapSearchPageModule = class MapSearchPageModule {};
MapSearchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, _map_search_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapSearchPageRoutingModule, _components_component_component_module__WEBPACK_IMPORTED_MODULE_6__.ComponentModule],
  declarations: [_map_search_page__WEBPACK_IMPORTED_MODULE_1__.MapSearchPage, _modal_modal_page__WEBPACK_IMPORTED_MODULE_3__.ModalPage],
  entryComponents: [_modal_modal_page__WEBPACK_IMPORTED_MODULE_3__.ModalPage],
  providers: [_ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_2__.Base64, _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__.InAppBrowser, _services_meeting_list_provider_service__WEBPACK_IMPORTED_MODULE_5__.MeetingListProviderService, _services_storage_service__WEBPACK_IMPORTED_MODULE_7__.StorageService]
})], MapSearchPageModule);


/***/ }),

/***/ 164:
/*!*****************************************************!*\
  !*** ./src/app/pages/map-search/map-search.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapSearchPage": () => (/* binding */ MapSearchPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _map_search_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-search.page.html?ngResource */ 924);
/* harmony import */ var _map_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-search.page.scss?ngResource */ 312);
/* harmony import */ var _map_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_map_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/storage.service */ 1188);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_meeting_list_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/meeting-list-provider.service */ 7656);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/loading.service */ 4471);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/google-maps/ngx */ 7767);
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/modal.page */ 8167);
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/base64/ngx */ 9604);












let MapSearchPage = class MapSearchPage {
  constructor(meetingListProvider, loadingCtrl, storage, platform, translate, zone, modalCtrl, base64) {
    this.meetingListProvider = meetingListProvider;
    this.loadingCtrl = loadingCtrl;
    this.storage = storage;
    this.platform = platform;
    this.translate = translate;
    this.zone = zone;
    this.modalCtrl = modalCtrl;
    this.base64 = base64;
    this.meetingList = [];
    this.loader = null;
    this.zoom = 14;
    this.mapLatitude = 34.2359855;
    this.mapLongitude = -118.5656689;
    this.origLocation = {
      lat: 51.899,
      lng: -8.474
    };
    this.origZoom = 14;
    this.targLocation = {
      lat: 51.899,
      lng: -8.474
    };
    this.targZoom = 14;
    this.formattedAddress = '';
    this.latitude = 0;
    this.longitude = 0;
    this.autoRadius = 5;
    this.markers = [];
    this.mapDragInProgress = false;
    this.cameraMoveInProgress = false;
    this.formatLanguage = 'en';
    console.log('Map page constructor');
  }
  ngOnInit() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      this.filePathMarkerRed = '../../../assets/markercluster/MarkerRed.png';
      this.base64.encodeFile(this.filePathMarkerRed).then(base64imageR => {
        this.Base64MarkerRed = base64imageR;
      });
      this.filePathMarkerBlue = '../../../assets/markercluster/MarkerBlue.png';
      this.base64.encodeFile(this.filePathMarkerBlue).then(base64imageB => {
        this.Base64MarkerBlue = base64imageB;
      });
      this.filePathMarkerZero = './assets/markercluster/FFFFFF-0.png';
      this.base64.encodeFile(this.filePathMarkerZero).then(base64imageZ => {
        this.Base64MarkerZero = base64imageZ;
      });
      const filePathCusterMarkerM1 = '../../../assets/markercluster/m1.png';
      this.base64.encodeFile(filePathCusterMarkerM1).then(base64imageM1 => {
        this.Base64ClusterMarkerM1 = base64imageM1;
      });
      const filePathCusterMarkerM2 = '../../../assets/markercluster/m2.png';
      this.base64.encodeFile(filePathCusterMarkerM2).then(base64imageM2 => {
        this.Base64ClusterMarkerM2 = base64imageM2;
      });
      const filePathCusterMarkerM3 = '../../../assets/markercluster/m3.png';
      this.base64.encodeFile(filePathCusterMarkerM3).then(base64imageM3 => {
        this.Base64ClusterMarkerM3 = base64imageM3;
      });
      const filePathCusterMarkerM4 = '../../../assets/markercluster/m4.png';
      this.base64.encodeFile(filePathCusterMarkerM4).then(base64imageM4 => {
        this.Base64ClusterMarkerM4 = base64imageM4;
      });
      const filePathCusterMarkerM5 = '../../../assets/markercluster/m5.png';
      this.base64.encodeFile(filePathCusterMarkerM5).then(base64imageM5 => {
        this.Base64ClusterMarkerM5 = base64imageM5;
      });
      this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
      this.autocomplete = {
        input: ''
      };
      this.autocompleteItems = [];
      yield this.platform.ready();
      yield this.loadMap();
    });
  }
  loadMap() {
    _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_5__.Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyAiowBMk_xPfnzaq7wZzcbyuCDpKqzZkyA',
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyAiowBMk_xPfnzaq7wZzcbyuCDpKqzZkyA'
    });
    this.translate.get('LOCATING').subscribe(value => {
      this.presentLoader(value);
    });
    if (_ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_5__.LocationService.hasPermission()) {
      _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_5__.LocationService.getMyLocation().then(myLocation => {
        this.mapLatitude = this.eagerMapLat = myLocation.latLng.lat;
        this.mapLongitude = this.eagerMapLng = myLocation.latLng.lng;
        this.drawMap();
        this.dismissLoader();
      }, reason => {
        this.eagerMapLat = this.mapLatitude;
        this.eagerMapLng = this.mapLongitude;
        this.drawMap();
        this.dismissLoader();
      });
    } else {
      this.eagerMapLat = this.mapLatitude;
      this.eagerMapLng = this.mapLongitude;
      this.drawMap();
      this.dismissLoader();
    }
  }
  drawMap() {
    const options = {
      building: true,
      controls: {
        compass: true,
        myLocationButton: true,
        myLocation: true,
        zoom: true,
        mapToolbar: true // android only
      },

      gestures: {
        scroll: true,
        tilt: true,
        zoom: true,
        rotate: true
      },
      camera: {
        target: {
          lat: this.mapLatitude,
          lng: this.mapLongitude
        },
        zoom: 12
      },
      preferences: {
        zoom: {
          minZoom: 12,
          maxZoom: 22
        }
      }
    };
    this.map = _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_5__.GoogleMaps.create('map_canvas', options);
    this.map.one(_ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_5__.GoogleMapsEvent.MAP_READY).then(this.onMapReady.bind(this));
  }
  onMapReady() {
    this.map.on(_ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_5__.GoogleMapsEvent.MAP_DRAG_START).subscribe(params => {
      this.mapDragInProgress = true;
    });
    this.map.on(_ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_5__.GoogleMapsEvent.MAP_DRAG_END).subscribe(params => {
      this.mapDragInProgress = false;
    });
    this.map.on(_ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_5__.GoogleMapsEvent.CAMERA_MOVE_START).subscribe(params => {
      this.cameraMoveInProgress = true;
    });
    this.map.on(_ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_5__.GoogleMapsEvent.CAMERA_MOVE_END).subscribe(params => {
      if (this.mapDragInProgress === false) {
        this.cameraMoveInProgress = false;
        this.translate.get('FINDING_MTGS').subscribe(value => {
          this.presentLoader(value);
        });
        // if the map has only moved by less than 10%, then we dont get more meetings,
        // those will have been eagerly loaded earlier
        this.origLocation.lat = this.eagerMapLat;
        this.origLocation.lng = this.eagerMapLng;
        this.targLocation.lat = params[0].target.lat;
        this.targLocation.lng = params[0].target.lng;
        this.targZoom = params[0].zoom;
        const mapMovementDistance = _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_5__.Spherical.computeDistanceBetween(this.origLocation, this.targLocation) / 1000;
        const newSearchTriggerDistance = this.autoRadius / 11;
        if (mapMovementDistance > newSearchTriggerDistance || this.targZoom < this.origZoom) {
          this.deleteCluster();
          this.getMeetings(params);
        } else {
          this.dismissLoader();
        }
      }
    });
    this.map.on('trigger_initial_search_changed').subscribe(params => {
      this.translate.get('FINDING_MTGS').subscribe(value => {
        this.presentLoader(value);
      });
      const mapPositionTarget = this.map.getCameraTarget();
      const mapPositionZoom = this.map.getCameraZoom();
      const mapVisiblePosition = this.map.getVisibleRegion();
      params[0] = {
        target: {
          lat: mapPositionTarget.lat,
          lng: mapPositionTarget.lng
        },
        zoom: mapPositionZoom,
        farLeft: {
          lat: mapVisiblePosition.farLeft.lat,
          lng: mapVisiblePosition.farLeft.lng
        }
      };
      this.getMeetings(params);
    });
    if (this.platform.is('ios')) {
      this.map.set('trigger_initial_search', 'go');
    }
  }
  addCluster() {
    const markerLabelOptions = {
      bold: true,
      fontSize: 15,
      color: 'white',
      italic: false
    };
    let markerClusterIconOptions;
    if (this.platform.is('ios')) {
      markerClusterIconOptions = [{
        min: 3,
        max: 10,
        url: this.Base64ClusterMarkerM1,
        anchor: {
          x: 16,
          y: 16
        },
        label: markerLabelOptions
      }, {
        min: 11,
        max: 50,
        url: this.Base64ClusterMarkerM2,
        anchor: {
          x: 16,
          y: 16
        },
        label: markerLabelOptions
      }, {
        min: 51,
        max: 100,
        url: this.Base64ClusterMarkerM3,
        anchor: {
          x: 24,
          y: 24
        },
        label: markerLabelOptions
      }, {
        min: 101,
        max: 500,
        url: this.Base64ClusterMarkerM4,
        anchor: {
          x: 24,
          y: 24
        },
        label: markerLabelOptions
      }, {
        min: 501,
        url: this.Base64ClusterMarkerM5,
        anchor: {
          x: 32,
          y: 32
        },
        label: markerLabelOptions
      }];
    } else {
      markerClusterIconOptions = [{
        min: 3,
        max: 10,
        url: './assets/markercluster/m1.png',
        anchor: {
          x: 16,
          y: 16
        },
        label: markerLabelOptions
      }, {
        min: 11,
        max: 50,
        url: './assets/markercluster/m2.png',
        anchor: {
          x: 16,
          y: 16
        },
        label: markerLabelOptions
      }, {
        min: 51,
        max: 100,
        url: './assets/markercluster/m3.png',
        anchor: {
          x: 24,
          y: 24
        },
        label: markerLabelOptions
      }, {
        min: 101,
        max: 500,
        url: './assets/markercluster/m4.png',
        anchor: {
          x: 24,
          y: 24
        },
        label: markerLabelOptions
      }, {
        min: 501,
        url: './assets/markercluster/m5.png',
        anchor: {
          x: 32,
          y: 32
        },
        label: markerLabelOptions
      }];
    }
    const markerClusterOptions = {
      markers: this.markers,
      icons: markerClusterIconOptions,
      boundsDraw: false
    };
    this.map.addMarkerCluster(markerClusterOptions).then(markerCluster => {
      this.markerCluster = markerCluster;
      this.markerCluster.on(_ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_5__.GoogleMapsEvent.MARKER_CLICK).subscribe(params => {
        const marker = params[1];
        this.openMeetingModal(marker.get('ID'));
      });
      this.dismissLoader();
    });
  }
  deleteCluster() {
    this.markers = [];
    this.markers.length = 0;
    this.meetingList = [];
    this.meetingList.length = 0;
    if (typeof this.markerCluster !== 'undefined') {
      this.markerCluster.remove();
      this.markerCluster.empty();
      this.markerCluster.destroy();
    }
  }
  getMeetings(params) {
    this.mapLatitude = params[0].target.lat;
    this.eagerMapLat = this.mapLatitude;
    this.mapLongitude = params[0].target.lng;
    this.eagerMapLng = this.mapLongitude;
    this.origZoom = params[0].zoom;
    this.autoRadius = _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_5__.Spherical.computeDistanceBetween(params[0].target, params[0].farLeft) / 1000;
    // Eagerly load 10% around screen area
    this.autoRadius = this.autoRadius * 1.1;
    this.meetingListProvider.getRadiusMeetings(this.mapLatitude, this.mapLongitude, this.autoRadius).subscribe(data => {
      if (JSON.stringify(data) === '{}') {
        // empty result set!
        this.meetingList = JSON.parse('[]');
      } else {
        this.meetingList = data;
        this.meetingList = this.meetingList.filter(meeting => meeting.latitude = parseFloat(meeting.latitude));
        this.meetingList = this.meetingList.filter(meeting => meeting.longitude = parseFloat(meeting.longitude));
      }
      this.populateMarkers();
      this.addCluster();
    });
  }
  populateMarkers() {
    this.markers = [];
    let i;
    let areColocated = false;
    this.visibleRegion = this.map.getVisibleRegion();
    for (i = 0; i < this.meetingList.length; i++) {
      const meetingLocation = {
        lat: this.meetingList[i].latitude,
        lng: this.meetingList[i].longitude
      };
      if (this.visibleRegion.contains(meetingLocation)) {
        if (i === this.meetingList.length - 1) {
          // Last meeting on the list
          this.pushStandaloneMeeting(i);
        } else {
          // Not the last meeting in the list
          // Is this meeting in the same location as the next meeting on the list?
          areColocated = this.meetingsAreCoLocated(this.meetingList[i], this.meetingList[i + 1]);
          if (areColocated === false) {
            this.pushStandaloneMeeting(i);
          } else {
            // We have the start of some co-located meetings on the list
            this.ids = this.meetingList[i].id_bigint;
            do {
              this.ids += '&meeting_ids[]=' + this.meetingList[i + 1].id_bigint;
              if (this.platform.is('ios')) {
                this.data = {
                  position: {
                    lat: this.meetingList[i].latitude,
                    lng: this.meetingList[i].longitude
                  },
                  icon: this.Base64MarkerZero
                };
              } else {
                this.data = {
                  position: {
                    lat: this.meetingList[i].latitude,
                    lng: this.meetingList[i].longitude
                  },
                  icon: this.filePathMarkerZero
                };
              }
              this.markers.push(this.data);
              i++;
              // Is this the end of the list?
              if (i === this.meetingList.length - 1) {
                break;
              }
            } while (this.meetingsAreCoLocated(this.meetingList[i], this.meetingList[i + 1]));
            if (this.platform.is('ios')) {
              this.data = {
                position: {
                  lat: this.meetingList[i].latitude,
                  lng: this.meetingList[i].longitude
                },
                ID: this.ids,
                disableAutoPan: true,
                icon: this.Base64MarkerRed
              };
            } else {
              this.data = {
                position: {
                  lat: this.meetingList[i].latitude,
                  lng: this.meetingList[i].longitude
                },
                ID: this.ids,
                disableAutoPan: true,
                icon: this.filePathMarkerRed
              };
            }
            this.markers.push(this.data);
          }
        }
      }
    }
  }
  meetingsAreCoLocated(i, j) {
    let areColocated = false;
    if (Math.round(i.latitude * 1000) / 1000 !== Math.round(j.latitude * 1000) / 1000 || Math.round(i.longitude * 1000) / 1000 !== Math.round(j.longitude * 1000) / 1000) {
      areColocated = false;
    } else {
      areColocated = true;
    }
    return areColocated;
  }
  pushStandaloneMeeting(i) {
    if (this.platform.is('ios')) {
      this.data = {
        position: {
          lat: this.meetingList[i].latitude,
          lng: this.meetingList[i].longitude
        },
        ID: this.meetingList[i].id_bigint,
        disableAutoPan: true,
        icon: this.Base64MarkerBlue
      };
    } else {
      this.data = {
        position: {
          lat: this.meetingList[i].latitude,
          lng: this.meetingList[i].longitude
        },
        ID: this.meetingList[i].id_bigint,
        disableAutoPan: true,
        icon: this.filePathMarkerBlue
      };
    }
    this.markers.push(this.data);
  }
  updateSearchResults() {
    if (this.autocomplete.input === '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({
      input: this.autocomplete.input
    }, (predictions, status) => {
      this.autocompleteItems = [];
      this.zone.run(() => {
        predictions.forEach(prediction => {
          this.autocompleteItems.push(prediction);
        });
      });
    });
  }
  selectSearchResult(item) {
    this.autocompleteItems = [];
    this.autocomplete.input = item.description;
    // Address -> latitude,longitude
    _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_5__.Geocoder.geocode({
      address: item.description
    }).then(results => {
      // Add a marker
      if (this.searchMarker) {
        this.searchMarker.remove();
      }
      this.searchMarker = this.map.addMarkerSync({
        position: results[0].position,
        title: item.description
      });
      this.searchMarker.on(_ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_5__.GoogleMapsEvent.MARKER_CLICK).subscribe(this.onMarkerClick);
      this.searchMarker.on(_ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_5__.GoogleMapsEvent.INFO_CLICK).subscribe(this.onMarkerClick);
      // Move to the position
      this.map.moveCamera({
        target: results[0].position,
        zoom: 10
      }).then(() => {
        this.searchMarker.showInfoWindow();
      });
    });
  }
  onMarkerClick(params) {
    const searchMarkerClicked = params[1];
    const isSearchMarkerClicked = searchMarkerClicked.get('isInfoWindowVisible');
    if (searchMarkerClicked.isInfoWindowShown() === true) {
      searchMarkerClicked.hideInfoWindow();
    } else {
      searchMarkerClicked.showInfoWindow();
    }
  }
  presentLoader(loaderText) {
    if (!this.loader) {
      this.loader = this.loadingCtrl.present(loaderText);
    }
  }
  dismissLoader() {
    if (this.loader) {
      console.log('Dismissing loader..');
      this.loader = this.loadingCtrl.dismiss();
      this.loader = null;
    }
  }
  openMeetingModal(meetingID) {
    console.log('openMeetingModal()');
    this.meetingListProvider.getSingleMeetingByID(meetingID).subscribe(meeting => {
      this.meeting = meeting;
      this.meeting.filter(i => i.start_time_raw = this.convertTo12Hr(i.start_time));
      this.openModal(this.meeting);
    });
  }
  openModal(meeting) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      const modal = yield this.modalCtrl.create({
        component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_6__.ModalPage,
        componentProps: {
          data: this.meeting
        }
      });
      modal.onDidDismiss().then(dataReturned => {});
      return yield modal.present();
    });
  }
  openMapsLink(destLatitude, destLongitude) {
    window.open('https://www.google.com/maps/search/?api=1&query=' + destLatitude + '%2C' + destLongitude + ')', '_system');
  }
  convertTo12Hr(timeString) {
    const H = +timeString.substr(0, 2);
    const h = H % 12 || 12;
    const ampm = H < 12 || H === 24 ? ' am' : ' pm';
    timeString = h + timeString.substr(2, 3) + ampm;
    return timeString;
  }
};
MapSearchPage.ctorParameters = () => [{
  type: _services_meeting_list_provider_service__WEBPACK_IMPORTED_MODULE_3__.MeetingListProviderService
}, {
  type: _services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService
}, {
  type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.NgZone
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
}, {
  type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_7__.Base64
}];
MapSearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-map-search',
  template: _map_search_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_map_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], MapSearchPage);


/***/ }),

/***/ 9604:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic-native/base64/__ivy_ngcc__/ngx/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Base64": () => (/* binding */ Base64)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ 8751);




var Base64 = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Base64, _super);
  function Base64() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Base64.prototype.encodeFile = function (filePath) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "encodeFile", {}, arguments);
  };
  Base64.pluginName = "Base64";
  Base64.plugin = "com-badrit-base64";
  Base64.pluginRef = "plugins.Base64";
  Base64.repo = "https://github.com/hazemhagrass/phonegap-base64";
  Base64.platforms = ["Android", "iOS"];
  Base64.ɵfac = /*@__PURE__*/function () {
    var ɵBase64_BaseFactory;
    return function Base64_Factory(t) {
      return (ɵBase64_BaseFactory || (ɵBase64_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](Base64)))(t || Base64);
    };
  }();
  Base64.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: Base64,
    factory: function (t) {
      return Base64.ɵfac(t);
    }
  });
  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Base64, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null);
  })();
  return Base64;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin);


/***/ }),

/***/ 7767:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic-native/google-maps/ngx/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseArrayClass": () => (/* binding */ BaseArrayClass),
/* harmony export */   "BaseClass": () => (/* binding */ BaseClass),
/* harmony export */   "Circle": () => (/* binding */ Circle),
/* harmony export */   "Encoding": () => (/* binding */ Encoding),
/* harmony export */   "Environment": () => (/* binding */ Environment),
/* harmony export */   "Geocoder": () => (/* binding */ Geocoder),
/* harmony export */   "GoogleMap": () => (/* binding */ GoogleMap),
/* harmony export */   "GoogleMaps": () => (/* binding */ GoogleMaps),
/* harmony export */   "GoogleMapsAnimation": () => (/* binding */ GoogleMapsAnimation),
/* harmony export */   "GoogleMapsEvent": () => (/* binding */ GoogleMapsEvent),
/* harmony export */   "GoogleMapsMapTypeId": () => (/* binding */ GoogleMapsMapTypeId),
/* harmony export */   "GroundOverlay": () => (/* binding */ GroundOverlay),
/* harmony export */   "HtmlInfoWindow": () => (/* binding */ HtmlInfoWindow),
/* harmony export */   "KmlOverlay": () => (/* binding */ KmlOverlay),
/* harmony export */   "LatLng": () => (/* binding */ LatLng),
/* harmony export */   "LatLngBounds": () => (/* binding */ LatLngBounds),
/* harmony export */   "LocationService": () => (/* binding */ LocationService),
/* harmony export */   "Marker": () => (/* binding */ Marker),
/* harmony export */   "MarkerCluster": () => (/* binding */ MarkerCluster),
/* harmony export */   "Poly": () => (/* binding */ Poly),
/* harmony export */   "Polygon": () => (/* binding */ Polygon),
/* harmony export */   "Polyline": () => (/* binding */ Polyline),
/* harmony export */   "Spherical": () => (/* binding */ Spherical),
/* harmony export */   "StreetViewPanorama": () => (/* binding */ StreetViewPanorama),
/* harmony export */   "StreetViewSource": () => (/* binding */ StreetViewSource),
/* harmony export */   "TileOverlay": () => (/* binding */ TileOverlay),
/* harmony export */   "VisibleRegion": () => (/* binding */ VisibleRegion),
/* harmony export */   "ɵ0": () => (/* binding */ ɵ0),
/* harmony export */   "ɵ1": () => (/* binding */ ɵ1)
/* harmony export */ });
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ 8751);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2378);
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return extendStatics(d, b);
  };
  return function (d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _this = undefined;


var TARGET_ELEMENT_FINDING_QUERYS = ['.show-page #', 'ion-router-outlet[main] #', '#'];
var LatLng = /** @class */function () {
  function LatLng(lat, lng) {
    this.lat = lat;
    this.lng = lng;
  }
  LatLng.prototype.equals = function (other) {
    return this.lat === other.lat && this.lng === other.lng;
  };
  LatLng.prototype.toString = function () {
    return this.lat + ',' + this.lng;
  };
  LatLng.prototype.toUrlValue = function (precision) {
    precision = precision || 6;
    return this.lat.toFixed(precision) + ',' + this.lng.toFixed(precision);
  };
  return LatLng;
}();

var LatLngBounds = /** @class */function () {
  function LatLngBounds(points) {
    this._objectInstance = new (GoogleMaps.getPlugin().LatLngBounds)(points);
  }
  LatLngBounds.prototype.toString = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "toString", {
      "sync": true
    }, arguments);
  };
  LatLngBounds.prototype.toUrlValue = function (precision) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "toUrlValue", {
      "sync": true
    }, arguments);
  };
  LatLngBounds.prototype.extend = function (LatLng) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "extend", {
      "sync": true
    }, arguments);
  };
  LatLngBounds.prototype.contains = function (LatLng) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "contains", {
      "sync": true
    }, arguments);
  };
  LatLngBounds.prototype.getCenter = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getCenter", {
      "sync": true
    }, arguments);
  };
  Object.defineProperty(LatLngBounds.prototype, "northeast", {
    get: function () {
      return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertyGet)(this, "northeast");
    },
    set: function (value) {
      (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertySet)(this, "northeast", value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LatLngBounds.prototype, "southwest", {
    get: function () {
      return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertyGet)(this, "southwest");
    },
    set: function (value) {
      (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertySet)(this, "southwest", value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LatLngBounds.prototype, "type", {
    get: function () {
      return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertyGet)(this, "type");
    },
    set: function (value) {
      (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertySet)(this, "type", value);
    },
    enumerable: true,
    configurable: true
  });
  return LatLngBounds;
}();

var VisibleRegion = /** @class */function () {
  function VisibleRegion(southwest, northeast, farLeft, farRight, nearLeft, nearRight) {
    this._objectInstance = new (GoogleMaps.getPlugin().VisibleRegion)(southwest, northeast, farLeft, farRight, nearLeft, nearRight);
  }
  VisibleRegion.prototype.toString = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "toString", {
      "sync": true
    }, arguments);
  };
  VisibleRegion.prototype.toUrlValue = function (precision) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "toUrlValue", {
      "sync": true
    }, arguments);
  };
  VisibleRegion.prototype.contains = function (LatLng) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "contains", {
      "sync": true
    }, arguments);
  };
  Object.defineProperty(VisibleRegion.prototype, "northeast", {
    get: function () {
      return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertyGet)(this, "northeast");
    },
    set: function (value) {
      (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertySet)(this, "northeast", value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisibleRegion.prototype, "southwest", {
    get: function () {
      return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertyGet)(this, "southwest");
    },
    set: function (value) {
      (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertySet)(this, "southwest", value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisibleRegion.prototype, "farLeft", {
    get: function () {
      return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertyGet)(this, "farLeft");
    },
    set: function (value) {
      (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertySet)(this, "farLeft", value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisibleRegion.prototype, "farRight", {
    get: function () {
      return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertyGet)(this, "farRight");
    },
    set: function (value) {
      (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertySet)(this, "farRight", value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisibleRegion.prototype, "nearLeft", {
    get: function () {
      return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertyGet)(this, "nearLeft");
    },
    set: function (value) {
      (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertySet)(this, "nearLeft", value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisibleRegion.prototype, "nearRight", {
    get: function () {
      return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertyGet)(this, "nearRight");
    },
    set: function (value) {
      (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertySet)(this, "nearRight", value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisibleRegion.prototype, "type", {
    get: function () {
      return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertyGet)(this, "type");
    },
    set: function (value) {
      (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertySet)(this, "type", value);
    },
    enumerable: true,
    configurable: true
  });
  return VisibleRegion;
}();

/**
 * @hidden
 */
var StreetViewSource = {
  DEFAULT: 'DEFAULT',
  OUTDOOR: 'OUTDOOR'
};
/**
 * @hidden
 * You can listen to these events where appropriate
 */
var GoogleMapsEvent = {
  MAP_READY: 'map_ready',
  MAP_CLICK: 'map_click',
  MAP_LONG_CLICK: 'map_long_click',
  POI_CLICK: 'poi_click',
  MY_LOCATION_CLICK: 'my_location_click',
  MY_LOCATION_BUTTON_CLICK: 'my_location_button_click',
  INDOOR_BUILDING_FOCUSED: 'indoor_building_focused',
  INDOOR_LEVEL_ACTIVATED: 'indoor_level_activated',
  CAMERA_MOVE_START: 'camera_move_start',
  CAMERA_MOVE: 'camera_move',
  CAMERA_MOVE_END: 'camera_move_end',
  OVERLAY_CLICK: 'overlay_click',
  POLYGON_CLICK: 'polygon_click',
  POLYLINE_CLICK: 'polyline_click',
  CIRCLE_CLICK: 'circle_click',
  GROUND_OVERLAY_CLICK: 'groundoverlay_click',
  INFO_CLICK: 'info_click',
  INFO_LONG_CLICK: 'info_long_click',
  INFO_CLOSE: 'info_close',
  INFO_OPEN: 'info_open',
  MARKER_CLICK: 'marker_click',
  MARKER_DRAG: 'marker_drag',
  MARKER_DRAG_START: 'marker_drag_start',
  MARKER_DRAG_END: 'marker_drag_end',
  MAP_DRAG: 'map_drag',
  MAP_DRAG_START: 'map_drag_start',
  MAP_DRAG_END: 'map_drag_end',
  KML_CLICK: 'kml_click',
  PANORAMA_READY: 'panorama_ready',
  PANORAMA_CAMERA_CHANGE: 'panorama_camera_change',
  PANORAMA_LOCATION_CHANGE: 'panorama_location_change',
  PANORAMA_CLICK: 'panorama_click'
};
/**
 * @hidden
 */
var GoogleMapsAnimation = {
  BOUNCE: 'BOUNCE',
  DROP: 'DROP'
};
/**
 * @hidden
 */
var GoogleMapsMapTypeId = {
  NORMAL: 'MAP_TYPE_NORMAL',
  ROADMAP: 'MAP_TYPE_NORMAL',
  SATELLITE: 'MAP_TYPE_SATELLITE',
  HYBRID: 'MAP_TYPE_HYBRID',
  TERRAIN: 'MAP_TYPE_TERRAIN',
  NONE: 'MAP_TYPE_NONE'
};
var GoogleMaps = /** @class */function (_super) {
  __extends(GoogleMaps, _super);
  function GoogleMaps() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  /**
   * Creates a new GoogleMap instance
   * @param element {string | HTMLElement} Element ID or reference to attach the map to
   * @param options {GoogleMapOptions} [options] Options
   * @return {GoogleMap}
   */
  GoogleMaps.create = function (element, options) {
    if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
      if (element instanceof HTMLElement) {
        if (!element.offsetParent) {
          throw new Error('Element must be under <body>');
        }
        if (element.getAttribute('__pluginMapId')) {
          throw new Error(element.tagName + "[__pluginMapId='" + element.getAttribute('__pluginMapId') + "'] has already map.");
        }
      } else if (typeof element === 'object') {
        options = element;
        element = null;
      }
      var googleMap = new GoogleMap(element, options);
      googleMap.set('_overlays', {});
      return googleMap;
    } else {
      var errorMessage = ['[GoogleMaps]'];
      if (!window.cordova) {
        errorMessage.push('You need to execute "$> ionic cordova run browser".');
        errorMessage.push('"$> ionic serve" is not supported.');
      } else {
        errorMessage.push('cordova-plugin-googlemaps is not installed or not ready yet.');
      }
      if (element instanceof HTMLElement) {
        displayErrorMessage(element, errorMessage.join('<br />'));
      } else if (typeof element === 'string') {
        var targets = Array.from(document.querySelectorAll('#' + element));
        if (targets.length > 0) {
          targets = targets.filter(function (target) {
            return !target.hasAttribute('__pluginmapid');
          });
        }
        if (targets.length === 1 && targets[0]) {
          displayErrorMessage(targets[0], errorMessage.join('<br />'));
        }
      }
      throw new Error(errorMessage.join(''));
    }
  };
  /**
   * @deprecation keep this for backward compatibility.
   * @hidden
   */
  GoogleMaps.prototype.create = function (element, options) {
    console.error('GoogleMaps', '[deprecated] Please use GoogleMaps.create()');
    return GoogleMaps.create(element, options);
  };
  /**
   * Creates a new StreetView instance
   * @param element {string | HTMLElement} Element ID or reference to attach the map to
   * @param options {StreetViewOptions} [options] Options
   * @return {StreetViewPanorama}
   */
  GoogleMaps.createPanorama = function (element, options) {
    if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
      if (element instanceof HTMLElement) {
        if (!element.offsetParent) {
          throw new Error('Element must be under <body>');
        }
        if (element.getAttribute('__pluginMapId')) {
          throw new Error(element.tagName + "[__pluginMapId='" + element.getAttribute('__pluginMapId') + "'] has already map.");
        }
      }
      return new StreetViewPanorama(element, options);
    } else {
      var errorMessage = ['[GoogleMaps]'];
      if (!window.cordova) {
        errorMessage.push('You need to execute "$> ionic cordova run browser".');
        errorMessage.push('"$> ionic serve" is not supported.');
      } else {
        errorMessage.push('cordova-plugin-googlemaps is not installed or not ready yet.');
      }
      if (element instanceof HTMLElement) {
        displayErrorMessage(element, errorMessage.join('<br />'));
      } else if (typeof element === 'string') {
        var targets = Array.from(document.querySelectorAll('#' + element));
        if (targets.length > 0) {
          targets = targets.filter(function (target) {
            return !target.hasAttribute('__pluginmapid');
          });
        }
        if (targets.length === 1 && targets[0]) {
          displayErrorMessage(targets[0], errorMessage.join('<br />'));
        }
      }
      throw new Error(errorMessage.join(''));
    }
  };
  GoogleMaps.pluginName = "GoogleMaps";
  GoogleMaps.pluginRef = "plugin.google.maps";
  GoogleMaps.plugin = "cordova-plugin-googlemaps";
  GoogleMaps.repo = "https://github.com/mapsplugin/cordova-plugin-googlemaps";
  GoogleMaps.document = "https://ionicframework.com/docs/native/google-maps/";
  GoogleMaps.install = "ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID=\"YOUR_ANDROID_API_KEY_IS_HERE\" --variable API_KEY_FOR_IOS=\"YOUR_IOS_API_KEY_IS_HERE\"";
  GoogleMaps.installVariables = ["API_KEY_FOR_ANDROID", "API_KEY_FOR_IOS"];
  GoogleMaps.platforms = ["Android", "iOS", "Browser"];
  GoogleMaps = __decorate([], GoogleMaps);
  return GoogleMaps;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin);

var displayErrorMessage = function (element, message) {
  var errorDiv = document.createElement('div');
  errorDiv.innerHTML = message;
  errorDiv.style.color = 'red';
  errorDiv.style.position = 'absolute';
  errorDiv.style.width = '80%';
  errorDiv.style.height = '50%';
  errorDiv.style.top = '0px';
  errorDiv.style.bottom = '0px';
  errorDiv.style.right = '0px';
  errorDiv.style.left = '0px';
  errorDiv.style.padding = '0px';
  errorDiv.style.margin = 'auto';
  element.style.position = 'relative';
  element.style.backgroundColor = '#ccc7';
  element.appendChild(errorDiv);
};
var ɵ0 = displayErrorMessage;
var normalizeArgumentsOfEventListener = function (_objectInstance, args) {
  if (args[args.length - 1] instanceof GoogleMaps.getPlugin().BaseClass) {
    if (args[args.length - 1].type === 'Map' || args[args.length - 1].type === 'StreetViewPanorama') {
      args[args.length - 1] = _this;
    } else if (_objectInstance.__pgmId.indexOf('markercluster_') !== -1) {
      var _overlays = _objectInstance.getMap().get('_overlays') || {};
      var overlay = _overlays[args[args.length - 1].getId()];
      if (!overlay) {
        var markerJS = args[args.length - 1];
        var markerId_1 = markerJS.getId();
        var markerCluster = _objectInstance;
        overlay = new Marker(markerCluster.getMap(), markerJS);
        _objectInstance.getMap().get('_overlays')[markerId_1] = overlay;
        markerJS.one(markerJS.getId() + '_remove', function () {
          _objectInstance.getMap().get('_overlays')[markerId_1] = null;
          delete _objectInstance.getMap().get('_overlays')[markerId_1];
        });
      }
      args[args.length - 1] = overlay;
    } else {
      args[args.length - 1] = _objectInstance.getMap().get('_overlays')[args[args.length - 1].getId()];
    }
  }
  return args;
};
var ɵ1 = normalizeArgumentsOfEventListener;
var BaseClass = /** @class */function () {
  function BaseClass(objInstance) {
    if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
      if (!objInstance) {
        objInstance = new (GoogleMaps.getPlugin().BaseClass)();
      }
      this._objectInstance = objInstance;
    } else {
      throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before executing any methods.');
    }
  }
  BaseClass.prototype.addEventListener = function (eventName) {
    var _this = this;
    return function () {
      if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instanceAvailability)(_this) === true) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (observer) {
          _this._objectInstance.addEventListener(eventName, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            var newArgs = normalizeArgumentsOfEventListener.call(_this, _this._objectInstance, args);
            observer.next(newArgs);
          });
        });
      }
    }();
  };
  BaseClass.prototype.addEventListenerOnce = function (eventName) {
    var _this = this;
    return function () {
      if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instanceAvailability)(_this) === true) {
        return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve) {
          _this._objectInstance.one(eventName, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            var newArgs = normalizeArgumentsOfEventListener.call(_this, _this._objectInstance, args);
            resolve(newArgs);
          });
        });
      }
    }();
  };
  BaseClass.prototype.addListenerOnce = function (eventName) {
    var _this = this;
    return function () {
      if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instanceAvailability)(_this) === true) {
        console.warn('[GoogleMaps] "addListenerOnce" is deprecated. Please use "addEventListenerOnce".');
        return _this.addEventListenerOnce(eventName);
      }
    }();
  };
  BaseClass.prototype.get = function (key) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "get", {
      "sync": true
    }, arguments);
  };
  BaseClass.prototype.set = function (key, value, noNotify) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "set", {
      "sync": true
    }, arguments);
  };
  BaseClass.prototype.bindTo = function (key, target, targetKey, noNotify) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "bindTo", {
      "sync": true
    }, arguments);
  };
  BaseClass.prototype.on = function (eventName) {
    var _this = this;
    return function () {
      if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instanceAvailability)(_this) === true) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (observer) {
          _this._objectInstance.on(eventName, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            var newArgs = normalizeArgumentsOfEventListener.call(_this, _this._objectInstance, args);
            observer.next(newArgs);
          });
        });
      }
    }();
  };
  BaseClass.prototype.one = function (eventName) {
    var _this = this;
    return function () {
      if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instanceAvailability)(_this) === true) {
        return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve) {
          _this._objectInstance.one(eventName, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            var newArgs = normalizeArgumentsOfEventListener.call(_this, _this._objectInstance, args);
            resolve(newArgs);
          });
        });
      }
    }();
  };
  BaseClass.prototype.hasEventListener = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "hasEventListener", {
      "sync": true
    }, arguments);
  };
  BaseClass.prototype.empty = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "empty", {
      "sync": true
    }, arguments);
  };
  BaseClass.prototype.trigger = function (eventName) {
    var parameters = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      parameters[_i - 1] = arguments[_i];
    }
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "trigger", {
      "sync": true
    }, arguments);
  };
  BaseClass.prototype.destroy = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "destroy", {
      "sync": true
    }, arguments);
  };
  BaseClass.prototype.removeEventListener = function (eventName, listener) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "removeEventListener", {
      "sync": true
    }, arguments);
  };
  BaseClass.prototype.off = function (eventName, listener) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "off", {
      "sync": true
    }, arguments);
  };
  BaseClass.plugin = "cordova-plugin-googlemaps";
  BaseClass.pluginName = "GoogleMaps";
  BaseClass.pluginRef = "plugin.google.maps.BaseClass";
  BaseClass.repo = "";
  BaseClass = __decorate([__metadata("design:paramtypes", [Object])], BaseClass);
  return BaseClass;
}();

var BaseArrayClass = /** @class */function (_super) {
  __extends(BaseArrayClass, _super);
  function BaseArrayClass(initialData) {
    var _this = this;
    if (initialData instanceof GoogleMaps.getPlugin().BaseArrayClass) {
      _this = _super.call(this, initialData) || this;
    } else if (Array.isArray(initialData)) {
      _this = _super.call(this, new (GoogleMaps.getPlugin().BaseArrayClass)(initialData)) || this;
    } else {
      _this = _super.call(this, new (GoogleMaps.getPlugin().BaseArrayClass)([])) || this;
    }
    return _this;
  }
  BaseArrayClass.prototype.empty = function (noNotify) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "empty", {
      "sync": true
    }, arguments);
  };
  BaseArrayClass.prototype.forEach = function (fn) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "forEach", {
      "sync": true
    }, arguments);
  };
  /**
   * Iterate over each element, calling the provided callback.
   * @param fn {Function}
   * @return {Promise<void>}
   */
  BaseArrayClass.prototype.forEachAsync = function (fn) {
    var _this = this;
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve) {
      _this._objectInstance.forEach(fn, resolve);
    });
  };
  BaseArrayClass.prototype.map = function (fn) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "map", {
      "sync": true
    }, arguments);
  };
  /**
   * Iterate over each element, calling the provided callback.
   * Then you can get the results of each callback.
   * @param fn {Function}
   * @param callback {Function}
   * @return {Promise<any>} returns a new array with the results
   */
  BaseArrayClass.prototype.mapAsync = function (fn) {
    var _this = this;
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve) {
      _this._objectInstance.map(fn, resolve);
    });
  };
  /**
   * Same as `mapAsync`, but keep the execution order
   * @param fn {Function}
   * @param callback {Function}
   * @return {Promise<any>} returns a new array with the results
   */
  BaseArrayClass.prototype.mapSeries = function (fn) {
    var _this = this;
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve) {
      _this._objectInstance.mapSeries(fn, resolve);
    });
  };
  BaseArrayClass.prototype.filter = function (fn) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "filter", {
      "sync": true
    }, arguments);
  };
  /**
   * The filterAsync() method creates a new array with all elements that pass the test implemented by the provided function.
   * @param fn {Function}
   * @param callback {Function}
   * @return {Promise<T[]>} returns a new filtered array
   */
  BaseArrayClass.prototype.filterAsync = function (fn) {
    var _this = this;
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve) {
      _this._objectInstance.filter(fn, resolve);
    });
  };
  BaseArrayClass.prototype.getArray = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getArray", {
      "sync": true
    }, arguments);
  };
  BaseArrayClass.prototype.getAt = function (index) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getAt", {
      "sync": true
    }, arguments);
  };
  BaseArrayClass.prototype.getLength = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getLength", {
      "sync": true
    }, arguments);
  };
  BaseArrayClass.prototype.indexOf = function (element) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "indexOf", {
      "sync": true
    }, arguments);
  };
  BaseArrayClass.prototype.reverse = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "reverse", {
      "sync": true
    }, arguments);
  };
  BaseArrayClass.prototype.sort = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "sort", {
      "sync": true
    }, arguments);
  };
  BaseArrayClass.prototype.insertAt = function (index, element, noNotify) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "insertAt", {
      "sync": true
    }, arguments);
  };
  BaseArrayClass.prototype.pop = function (noNotify) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "pop", {
      "sync": true
    }, arguments);
  };
  BaseArrayClass.prototype.push = function (element, noNotify) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "push", {
      "sync": true
    }, arguments);
  };
  BaseArrayClass.prototype.removeAt = function (index, noNotify) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "removeAt", {
      "sync": true
    }, arguments);
  };
  BaseArrayClass.prototype.setAt = function (index, element, noNotify) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setAt", {
      "sync": true
    }, arguments);
  };
  BaseArrayClass.pluginName = "BaseArrayClass";
  BaseArrayClass.plugin = "cordova-plugin-googlemaps";
  BaseArrayClass.pluginRef = "plugin.google.maps.BaseArrayClass";
  BaseArrayClass = __decorate([__metadata("design:paramtypes", [Object])], BaseArrayClass);
  return BaseArrayClass;
}(BaseClass);

var Circle = /** @class */function (_super) {
  __extends(Circle, _super);
  function Circle(_map, _objectInstance) {
    var _this = _super.call(this, _objectInstance) || this;
    _this._map = _map;
    return _this;
  }
  Circle.prototype.getId = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getId", {
      "sync": true
    }, arguments);
  };
  /**
   * Returns the map instance.
   * @return {GoogleMap}
   */
  Circle.prototype.getMap = function () {
    return this._map;
  };
  Circle.prototype.setCenter = function (latLng) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setCenter", {
      "sync": true
    }, arguments);
  };
  Circle.prototype.getCenter = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getCenter", {
      "sync": true
    }, arguments);
  };
  Circle.prototype.getRadius = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getRadius", {
      "sync": true
    }, arguments);
  };
  Circle.prototype.setRadius = function (radius) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setRadius", {
      "sync": true
    }, arguments);
  };
  Circle.prototype.setFillColor = function (color) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setFillColor", {
      "sync": true
    }, arguments);
  };
  Circle.prototype.getFillColor = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getFillColor", {
      "sync": true
    }, arguments);
  };
  Circle.prototype.setStrokeWidth = function (strokeWidth) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setStrokeWidth", {
      "sync": true
    }, arguments);
  };
  Circle.prototype.getStrokeWidth = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getStrokeWidth", {
      "sync": true
    }, arguments);
  };
  Circle.prototype.setStrokeColor = function (strokeColor) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setStrokeColor", {
      "sync": true
    }, arguments);
  };
  Circle.prototype.getStrokeColor = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getStrokeColor", {
      "sync": true
    }, arguments);
  };
  Circle.prototype.setClickable = function (clickable) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setClickable", {
      "sync": true
    }, arguments);
  };
  Circle.prototype.getClickable = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getClickable", {
      "sync": true
    }, arguments);
  };
  Circle.prototype.setZIndex = function (zIndex) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setZIndex", {
      "sync": true
    }, arguments);
  };
  Circle.prototype.getZIndex = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getZIndex", {
      "sync": true
    }, arguments);
  };
  Circle.prototype.remove = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "remove", {}, arguments);
  };
  Circle.prototype.getBounds = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getBounds", {
      "sync": true
    }, arguments);
  };
  Circle.prototype.setVisible = function (visible) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setVisible", {
      "sync": true
    }, arguments);
  };
  Circle.prototype.getVisible = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getVisible", {
      "sync": true
    }, arguments);
  };
  return Circle;
}(BaseClass);

var Environment = /** @class */function () {
  function Environment() {}
  /**
   * Set environment variables.
   */
  Environment.setEnv = function (envOptions) {
    if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
      throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
    }
    GoogleMaps.getPlugin().environment.setEnv(envOptions);
  };
  /**
   * Get the open source software license information for Google Maps SDK for iOS.
   * @return {Promise<any>}
   */
  Environment.getLicenseInfo = function () {
    if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
      throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
    }
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve) {
      GoogleMaps.getPlugin().environment.getLicenseInfo(function (text) {
        return resolve(text);
      });
    });
  };
  /**
   * Specifies the background color of the app.
   * @param color
   */
  Environment.setBackgroundColor = function (color) {
    if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
      throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
    }
    GoogleMaps.getPlugin().environment.setBackgroundColor(color);
  };
  /**
   * @deprecation This method is static. Please use Environment.getLicenseInfo()
   * @hidden
   */
  Environment.prototype.getLicenseInfo = function () {
    console.error('GoogleMaps', '[deprecated] This method is static. Please use Environment.getLicenseInfo()');
    return Environment.getLicenseInfo();
  };
  /**
   * @deprecation This method is static. Please use Environment.setBackgroundColor()
   * @hidden
   */
  Environment.prototype.setBackgroundColor = function (color) {
    console.error('GoogleMaps', '[deprecated] This method is static. Please use Environment.setBackgroundColor()');
    Environment.setBackgroundColor(color);
  };
  Environment.plugin = "cordova-plugin-googlemaps";
  Environment.pluginName = "GoogleMaps";
  Environment.pluginRef = "plugin.google.maps.environment";
  Environment.repo = "";
  Environment = __decorate([], Environment);
  return Environment;
}();

var Geocoder = /** @class */function () {
  function Geocoder() {}
  /**
   * @deprecation This method is static. Please use Geocoder.geocode()
   * @hidden
   */
  Geocoder.prototype.geocode = function (request) {
    console.error('GoogleMaps', '[deprecated] This method is static. Please use Geocoder.geocode()');
    return Geocoder.geocode(request);
  };
  /**
   * Converts position to address and vice versa
   * @param {GeocoderRequest} request Request object with either an address or a position
   * @return {Promise<GeocoderResult[] | BaseArrayClass<GeocoderResult>>}
   */
  Geocoder.geocode = function (request) {
    if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
      throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
    }
    if (request.address instanceof Array || Array.isArray(request.address) || request.position instanceof Array || Array.isArray(request.position)) {
      // -------------------------
      // Geocoder.geocode({
      //   address: [
      //    "Kyoto, Japan",
      //    "Tokyo, Japan"
      //   ]
      // })
      // -------------------------
      return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve, reject) {
        GoogleMaps.getPlugin().Geocoder.geocode(request, function (mvcArray) {
          if (mvcArray) {
            resolve(new BaseArrayClass(mvcArray));
          } else {
            reject();
          }
        });
      });
    } else {
      // -------------------------
      // Geocoder.geocode({
      //   address: "Kyoto, Japan"
      // })
      // -------------------------
      return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve, reject) {
        GoogleMaps.getPlugin().Geocoder.geocode(request, function (results) {
          if (results) {
            resolve(results);
          } else {
            reject();
          }
        });
      });
    }
  };
  Geocoder.pluginName = "GoogleMaps";
  Geocoder.pluginRef = "plugin.google.maps.Geocoder";
  Geocoder.plugin = "cordova-plugin-googlemaps";
  Geocoder.repo = "";
  Geocoder = __decorate([], Geocoder);
  return Geocoder;
}();

var LocationService = /** @class */function () {
  function LocationService() {}
  /**
   * Get the current device location without map
   * @return {Promise<MyLocation>}
   */
  LocationService.getMyLocation = function (options) {
    if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
      throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
    }
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve, reject) {
      GoogleMaps.getPlugin().LocationService.getMyLocation(options, resolve, reject);
    });
  };
  /**
   * Return true if the application has geolocation permission
   * @return {Promise<boolean>}
   */
  LocationService.hasPermission = function () {
    if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
      throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
    }
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve, reject) {
      GoogleMaps.getPlugin().LocationService.hasPermission(resolve, reject);
    });
  };
  LocationService.pluginName = "GoogleMaps";
  LocationService.pluginRef = "plugin.google.maps.LocationService";
  LocationService.plugin = "cordova-plugin-googlemaps";
  LocationService.repo = "";
  LocationService = __decorate([], LocationService);
  return LocationService;
}();

var Encoding = /** @class */function () {
  function Encoding() {}
  /**
   * Decodes an encoded path string into a sequence of LatLngs.
   * @param encoded {string} an encoded path string
   * @param precision? {number} default: 5
   * @return {LatLng}
   */
  Encoding.decodePath = function (encoded, precision) {
    if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
      throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
    }
    return GoogleMaps.getPlugin().encoding.decodePath(encoded, precision);
  };
  /**
   * Encodes a sequence of LatLngs into an encoded path string.
   * @param path {ILatLng[] | BaseArrayClass<ILatLng>} a sequence of LatLngs
   * @return {string}
   */
  Encoding.encodePath = function (path) {
    if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
      throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
    }
    return GoogleMaps.getPlugin().encoding.encodePath(path);
  };
  /**
   * @deprecation This method is static. Please use Encoding.decodePath()
   * @hidden
   */
  Encoding.prototype.decodePath = function (encoded, precision) {
    console.error('GoogleMaps', '[deprecated] This method is static. Please use Encoding.decodePath()');
    return Encoding.decodePath(encoded, precision);
  };
  /**
   * @deprecation This method is static. Please use Encoding.encodePath()
   * @hidden
   */
  Encoding.prototype.encodePath = function (path) {
    console.error('GoogleMaps', '[deprecated] This method is static. Please use Encoding.encodePath()');
    return Encoding.encodePath(path);
  };
  Encoding.pluginName = "GoogleMaps";
  Encoding.pluginRef = "plugin.google.maps.geometry.encoding";
  Encoding.plugin = "cordova-plugin-googlemaps";
  Encoding.repo = "";
  Encoding = __decorate([], Encoding);
  return Encoding;
}();

var Poly = /** @class */function () {
  function Poly() {}
  /**
   * Returns true if the specified location is in the polygon path
   * @param location {ILatLng}
   * @param path {ILatLng[]}
   * @return {boolean}
   */
  Poly.containsLocation = function (location, path) {
    if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
      throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
    }
    return GoogleMaps.getPlugin().geometry.poly.containsLocation(location, path);
  };
  /**
   * Returns true if the specified location is on the polyline path
   * @param location {ILatLng}
   * @param path {ILatLng[]}
   * @return {boolean}
   */
  Poly.isLocationOnEdge = function (location, path) {
    if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
      throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
    }
    return GoogleMaps.getPlugin().geometry.poly.isLocationOnEdge(location, path);
  };
  Poly.pluginName = "GoogleMaps";
  Poly.pluginRef = "plugin.google.maps.geometry.poly";
  Poly.plugin = "cordova-plugin-googlemaps";
  Poly.repo = "";
  Poly = __decorate([], Poly);
  return Poly;
}();

var Spherical = /** @class */function () {
  function Spherical() {}
  /**
   * Returns the distance, in meters, between two LatLngs.
   * @param locationA {ILatLng}
   * @param locationB {ILatLng}
   * @return {number}
   */
  Spherical.computeDistanceBetween = function (from, to) {
    if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
      throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
    }
    return GoogleMaps.getPlugin().geometry.spherical.computeDistanceBetween(from, to);
  };
  /**
   * Returns the LatLng resulting from moving a distance from an origin in the specified heading (expressed in degrees clockwise from north)
   * @param from {ILatLng}
   * @param distance {number}
   * @param heading {number}
   * @return {LatLng}
   */
  Spherical.computeOffset = function (from, distance, heading) {
    if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
      throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
    }
    return GoogleMaps.getPlugin().geometry.spherical.computeOffset(from, distance, heading);
  };
  /**
   * Returns the location of origin when provided with a LatLng destination, meters travelled and original heading. Headings are expressed in degrees clockwise from North. This function returns null when no solution is available.
   * @param to {ILatLng} The destination LatLng.
   * @param distance {number} The distance travelled, in meters.
   * @param heading {number} The heading in degrees clockwise from north.
   * @return {LatLng}
   */
  Spherical.computeOffsetOrigin = function (to, distance, heading) {
    if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
      throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
    }
    return GoogleMaps.getPlugin().geometry.spherical.computeOffsetOrigin(to, distance, heading);
  };
  /**
   * Returns the length of the given path.
   * @param path {ILatLng[] | BaseArrayClass<ILatLng>}
   * @return {number}
   */
  Spherical.computeLength = function (path) {
    if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
      throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
    }
    return GoogleMaps.getPlugin().geometry.spherical.computeLength(path);
  };
  /**
   * Returns the area of a closed path. The computed area uses the same units as the radius.
   * @param path {ILatLng[] | BaseArrayClass<ILatLng>}.
   * @return {number}
   */
  Spherical.computeArea = function (path) {
    if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
      throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
    }
    return GoogleMaps.getPlugin().geometry.spherical.computeLength(path);
  };
  /**
   * Returns the signed area of a closed path. The signed area may be used to determine the orientation of the path.
   * @param path {ILatLng[] | BaseArrayClass<ILatLng>}.
   * @return {number}
   */
  Spherical.computeSignedArea = function (path) {
    if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
      throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
    }
    return GoogleMaps.getPlugin().geometry.spherical.computeSignedArea(path);
  };
  /**
   * Returns the heading from one LatLng to another LatLng. Headings are expressed in degrees clockwise from North within the range (-180,180).
   * @param from {ILatLng}
   * @param to {ILatLng}
   * @return {number}
   */
  Spherical.computeHeading = function (from, to) {
    if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
      throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
    }
    return GoogleMaps.getPlugin().geometry.spherical.computeHeading(from, to);
  };
  /**
   * Returns the LatLng which lies the given fraction of the way between the origin LatLng and the destination LatLng.
   * @param from {ILatLng}     The LatLng from which to start.
   * @param to {ILatLng}       The LatLng toward which to travel.
   * @param fraction {number}  A fraction of the distance to travel from 0.0 to 1.0 .
   * @return {LatLng}
   */
  Spherical.interpolate = function (from, to, fraction) {
    if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
      throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
    }
    return GoogleMaps.getPlugin().geometry.spherical.interpolate(from, to, fraction);
  };
  /**
   * @deprecation This method is static. Please use Spherical.computeDistanceBetween()
   * @hidden
   */
  Spherical.prototype.computeDistanceBetween = function (from, to) {
    console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeDistanceBetween()');
    return Spherical.computeDistanceBetween(from, to);
  };
  /**
   * @deprecation This method is static. Please use Spherical.computeOffset()
   * @hidden
   */
  Spherical.prototype.computeOffset = function (from, distance, heading) {
    console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeOffset()');
    return Spherical.computeOffset(from, distance, heading);
  };
  /**
   * @deprecation This method is static. Please use Spherical.computeOffsetOrigin()
   * @hidden
   */
  Spherical.prototype.computeOffsetOrigin = function (to, distance, heading) {
    console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeOffsetOrigin()');
    return Spherical.computeOffsetOrigin(to, distance, heading);
  };
  /**
   * @deprecation This method is static. Please use Spherical.computeLength()
   * @hidden
   */
  Spherical.prototype.computeLength = function (path) {
    console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeLength()');
    return Spherical.computeLength(path);
  };
  /**
   * @deprecation This method is static. Please use Spherical.computeArea()
   * @hidden
   */
  Spherical.prototype.computeArea = function (path) {
    console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeArea()');
    return Spherical.computeArea(path);
  };
  /**
   * @deprecation This method is static. Please use Spherical.computeSignedArea()
   * @hidden
   */
  Spherical.prototype.computeSignedArea = function (path) {
    console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeSignedArea()');
    return Spherical.computeSignedArea(path);
  };
  /**
   * @deprecation This method is static. Please use Spherical.computeHeading()
   * @hidden
   */
  Spherical.prototype.computeHeading = function (from, to) {
    console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeHeading()');
    return Spherical.computeHeading(from, to);
  };
  /**
   * @deprecation This method is static. Please use Spherical.interpolate()
   * @hidden
   */
  Spherical.prototype.interpolate = function (from, to, fraction) {
    console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.interpolate()');
    return Spherical.interpolate(from, to, fraction);
  };
  Spherical.pluginName = "GoogleMaps";
  Spherical.pluginRef = "plugin.google.maps.geometry.spherical";
  Spherical.plugin = "cordova-plugin-googlemaps";
  Spherical.repo = "";
  Spherical = __decorate([], Spherical);
  return Spherical;
}();

var StreetViewPanorama = /** @class */function (_super) {
  __extends(StreetViewPanorama, _super);
  function StreetViewPanorama(element, options) {
    var _this = this;
    if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
      // -------------------
      // Create a panorama
      // -------------------
      if (element instanceof HTMLElement) {
        if (element.offsetWidth >= 100 && element.offsetHeight >= 100) {
          _this = _super.call(this, GoogleMaps.getPlugin().StreetView.getPanorama(element, options)) || this;
        } else {
          throw new Error(element.tagName + ' is too small. Must be bigger than 100x100.');
        }
      } else if (typeof element === 'string') {
        _this = _super.call(this, GoogleMaps.getPlugin().StreetView.getPanorama((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve, reject) {
          var count;
          var i;
          count = 0;
          var timer = setInterval(function () {
            var targets;
            for (i = 0; i < TARGET_ELEMENT_FINDING_QUERYS.length; i++) {
              targets = Array.from(document.querySelectorAll(TARGET_ELEMENT_FINDING_QUERYS[i] + element));
              if (targets.length > 0) {
                targets = targets.filter(function (target) {
                  return !target.hasAttribute('__pluginmapid');
                });
              }
              if (targets.length === 1 && targets[0] && targets[0].offsetWidth >= 100 && targets[0].offsetHeight >= 100) {
                clearInterval(timer);
                resolve([targets[0], options]);
                return;
              }
            }
            if (count++ < 20) {
              return;
            }
            clearInterval(timer);
            _this._objectInstance.remove();
            if (targets.length > 0 && targets[0] && targets[0].offsetWidth < 100 || targets[0].offsetHeight < 100) {
              reject(new Error(targets[0].tagName + '[#' + element + '] is too small. Must be bigger than 100x100.'));
            } else {
              if (targets.length > 1) {
                reject(new Error('There are multiple "' + element + '" elements. Use different id to prevent error.'));
              } else {
                reject(new Error('Can not find the element [#' + element + ']'));
              }
            }
          }, 100);
        }), options)) || this;
      }
    } else {
      var errorMessage = ['[GoogleMaps]'];
      if (!window.cordova) {
        errorMessage.push('You need to execute "$> ionic cordova run browser".');
        errorMessage.push('"$> ionic serve" is not supported.');
      } else {
        errorMessage.push('cordova-plugin-googlemaps is not installed or not ready yet.');
      }
      if (element instanceof HTMLElement) {
        displayErrorMessage(element, errorMessage.join('<br />'));
      } else if (typeof element === 'string') {
        var targets = Array.from(document.querySelectorAll('#' + element));
        if (targets.length > 0) {
          targets = targets.filter(function (target) {
            return !target.hasAttribute('__pluginmapid');
          });
        }
        if (targets.length === 1 && targets[0]) {
          displayErrorMessage(targets[0], errorMessage.join('<br />'));
        }
      }
      throw new Error(errorMessage.join(''));
    }
    return _this;
  }
  StreetViewPanorama.prototype.setPov = function (pov) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setPov", {}, arguments);
  };
  StreetViewPanorama.prototype.setPosition = function (cameraPosition) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setPosition", {}, arguments);
  };
  StreetViewPanorama.prototype.setPanningGesturesEnabled = function (gestureEnable) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setPanningGesturesEnabled", {
      "sync": true
    }, arguments);
  };
  StreetViewPanorama.prototype.getPanningGesturesEnabled = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getPanningGesturesEnabled", {
      "sync": true
    }, arguments);
  };
  StreetViewPanorama.prototype.setZoomGesturesEnabled = function (gestureEnable) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setZoomGesturesEnabled", {
      "sync": true
    }, arguments);
  };
  StreetViewPanorama.prototype.getZoomGesturesEnabled = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getZoomGesturesEnabled", {
      "sync": true
    }, arguments);
  };
  StreetViewPanorama.prototype.setStreetNamesEnabled = function (gestureEnable) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setStreetNamesEnabled", {
      "sync": true
    }, arguments);
  };
  StreetViewPanorama.prototype.getStreetNamesEnabled = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getStreetNamesEnabled", {
      "sync": true
    }, arguments);
  };
  StreetViewPanorama.prototype.setNavigationEnabled = function (gestureEnable) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setNavigationEnabled", {
      "sync": true
    }, arguments);
  };
  StreetViewPanorama.prototype.getNavigationEnabled = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getNavigationEnabled", {
      "sync": true
    }, arguments);
  };
  StreetViewPanorama.prototype.getLinks = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getLinks", {
      "sync": true
    }, arguments);
  };
  StreetViewPanorama.prototype.getLocation = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getLocation", {
      "sync": true
    }, arguments);
  };
  StreetViewPanorama.prototype.getPanoId = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getPanoId", {
      "sync": true
    }, arguments);
  };
  StreetViewPanorama.prototype.getPosition = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getPosition", {
      "sync": true
    }, arguments);
  };
  StreetViewPanorama.prototype.remove = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "remove", {}, arguments);
  };
  var _a, _b;
  StreetViewPanorama.pluginName = "StreetViewPanorama";
  StreetViewPanorama.plugin = "cordova-plugin-googlemaps";
  StreetViewPanorama = __decorate([__metadata("design:paramtypes", [Object, typeof (_b = typeof StreetViewOptions !== "undefined" && StreetViewOptions) === "function" ? _b : Object])], StreetViewPanorama);
  return StreetViewPanorama;
}(BaseClass);

var GoogleMap = /** @class */function (_super) {
  __extends(GoogleMap, _super);
  function GoogleMap(element, options, __timeout) {
    var _this = this;
    if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
      // ---------------
      // Create a map
      // ---------------
      if (element instanceof HTMLElement) {
        if (!element.offsetParent) {
          throw new Error('Element must be under <body>');
        }
        if (element.offsetWidth >= 100 && element.offsetHeight >= 100) {
          _this = _super.call(this, GoogleMaps.getPlugin().Map.getMap(element, options)) || this;
        } else {
          throw new Error(element.tagName + ' is too small. Must be bigger than 100x100.');
        }
      } else if (typeof element === 'string') {
        _this = _super.call(this, GoogleMaps.getPlugin().Map.getMap((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve, reject) {
          var count;
          var i;
          count = 0;
          var timer = setInterval(function () {
            var targets;
            for (i = 0; i < TARGET_ELEMENT_FINDING_QUERYS.length; i++) {
              targets = Array.from(document.querySelectorAll(TARGET_ELEMENT_FINDING_QUERYS[i] + element));
              if (targets.length > 0) {
                targets = targets.filter(function (target) {
                  return !target.hasAttribute('__pluginmapid');
                });
              }
              if (targets.length === 1 && targets[0] && targets[0].offsetWidth >= 100 && targets[0].offsetHeight >= 100) {
                clearInterval(timer);
                resolve([targets[0], options]);
                return;
              }
            }
            if (count++ < 20) {
              return;
            }
            clearInterval(timer);
            _this._objectInstance.remove();
            if (targets.length > 0 && targets[0] && targets[0].offsetWidth < 100 || targets[0].offsetHeight < 100) {
              reject(new Error(targets[0].tagName + '[#' + element + '] is too small. Must be bigger than 100x100.'));
            } else {
              if (targets.length > 1) {
                reject(new Error('There are multiple "' + element + '" elements. Use different id to prevent error.'));
              } else {
                reject(new Error('Can not find the element [#' + element + ']'));
              }
            }
          }, __timeout == null ? 100 : __timeout);
        }), options)) || this;
      } else if (element === null && options) {
        _this = _super.call(this, GoogleMaps.getPlugin().Map.getMap(null, options)) || this;
      }
    } else {
      var errorMessage = ['[GoogleMaps]'];
      if (!window.cordova) {
        errorMessage.push('You need to execute "$> ionic cordova run browser".');
        errorMessage.push('"$> ionic serve" is not supported.');
      } else {
        errorMessage.push('cordova-plugin-googlemaps is not installed or not ready yet.');
      }
      console.error(errorMessage.join(''));
      if (element instanceof HTMLElement) {
        displayErrorMessage(element, errorMessage.join('<br />'));
      } else if (typeof element === 'string') {
        var targets = Array.from(document.querySelectorAll('#' + element));
        if (targets.length > 0) {
          targets = targets.filter(function (target) {
            return !target.hasAttribute('__pluginmapid');
          });
        }
        if (targets.length === 1 && targets[0]) {
          displayErrorMessage(targets[0], errorMessage.join('<br />'));
        }
      }
    }
    return _this;
  }
  GoogleMap.prototype.setDiv = function (domNode) {
    var _this = this;
    return function () {
      if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instanceAvailability)(_this) === true) {
        if (!domNode) {
          _this._objectInstance.setDiv();
          return;
        }
        if (typeof domNode === 'string') {
          (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve, reject) {
            var i, targets;
            for (i = 0; i < TARGET_ELEMENT_FINDING_QUERYS.length; i++) {
              targets = Array.from(document.querySelectorAll(TARGET_ELEMENT_FINDING_QUERYS[i] + domNode));
              if (targets.length > 0) {
                targets = targets.filter(function (target) {
                  return !target.hasAttribute('__pluginmapid');
                });
              }
              if (targets.length === 1 && targets[0] && targets[0].offsetWidth >= 100 && targets[0].offsetHeight >= 100) {
                resolve(targets[0]);
                return;
              }
            }
            reject('Can not find [#' + domNode + '] element');
          }).then(function (element) {
            _this._objectInstance.setDiv(element);
          });
        } else {
          if (domNode instanceof HTMLElement && !domNode.offsetParent && domNode.offsetWidth >= 100 && domNode.offsetHeight >= 100) {
            _this._objectInstance.setDiv(domNode);
          } else {
            throw new Error(domNode.tagName + ' is too small. Must be bigger than 100x100.');
          }
        }
      }
    }();
  };
  GoogleMap.prototype.getDiv = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getDiv", {
      "sync": true
    }, arguments);
  };
  GoogleMap.prototype.setMapTypeId = function (mapTypeId) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setMapTypeId", {
      "sync": true
    }, arguments);
  };
  GoogleMap.prototype.animateCamera = function (cameraPosition) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "animateCamera", {}, arguments);
  };
  GoogleMap.prototype.animateCameraZoomIn = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "animateCameraZoomIn", {}, arguments);
  };
  GoogleMap.prototype.animateCameraZoomOut = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "animateCameraZoomOut", {}, arguments);
  };
  GoogleMap.prototype.moveCamera = function (cameraPosition) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "moveCamera", {}, arguments);
  };
  GoogleMap.prototype.moveCameraZoomIn = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "moveCameraZoomIn", {}, arguments);
  };
  GoogleMap.prototype.moveCameraZoomOut = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "moveCameraZoomOut", {}, arguments);
  };
  GoogleMap.prototype.getCameraPosition = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getCameraPosition", {
      "sync": true
    }, arguments);
  };
  GoogleMap.prototype.getCameraTarget = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getCameraTarget", {
      "sync": true
    }, arguments);
  };
  GoogleMap.prototype.getCameraZoom = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getCameraZoom", {
      "sync": true
    }, arguments);
  };
  GoogleMap.prototype.getCameraBearing = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getCameraBearing", {
      "sync": true
    }, arguments);
  };
  GoogleMap.prototype.getCameraTilt = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getCameraTilt", {
      "sync": true
    }, arguments);
  };
  GoogleMap.prototype.setCameraTarget = function (latLng) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setCameraTarget", {
      "sync": true
    }, arguments);
  };
  GoogleMap.prototype.setCameraZoom = function (zoomLevel) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setCameraZoom", {
      "sync": true
    }, arguments);
  };
  GoogleMap.prototype.setCameraTilt = function (tiltAngle) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setCameraTilt", {
      "sync": true
    }, arguments);
  };
  GoogleMap.prototype.setCameraBearing = function (bearing) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setCameraBearing", {
      "sync": true
    }, arguments);
  };
  GoogleMap.prototype.panBy = function (x, y) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "panBy", {
      "sync": true
    }, arguments);
  };
  GoogleMap.prototype.getVisibleRegion = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getVisibleRegion", {
      "sync": true
    }, arguments);
  };
  GoogleMap.prototype.getMyLocation = function (options) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getMyLocation", {}, arguments);
  };
  GoogleMap.prototype.setClickable = function (isClickable) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setClickable", {
      "sync": true
    }, arguments);
  };
  GoogleMap.prototype.remove = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "remove", {}, arguments);
  };
  GoogleMap.prototype.clear = function () {
    var _this = this;
    return function () {
      if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instanceAvailability)(_this) === true) {
        if (_this.get('_overlays')) {
          Object.keys(_this.get('_overlays')).forEach(function (overlayId) {
            _this.get('_overlays')[overlayId] = null;
            delete _this.get('_overlays')[overlayId];
          });
        }
        return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve) {
          _this._objectInstance.clear(function () {
            return resolve();
          });
        });
      }
    }();
  };
  GoogleMap.prototype.fromLatLngToPoint = function (latLng) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "fromLatLngToPoint", {}, arguments);
  };
  GoogleMap.prototype.fromPointToLatLng = function (point) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "fromPointToLatLng", {}, arguments);
  };
  GoogleMap.prototype.setMyLocationEnabled = function (enabled) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setMyLocationEnabled", {
      "sync": true
    }, arguments);
  };
  GoogleMap.prototype.setMyLocationButtonEnabled = function (enabled) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setMyLocationButtonEnabled", {
      "sync": true
    }, arguments);
  };
  GoogleMap.prototype.getFocusedBuilding = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getFocusedBuilding", {}, arguments);
  };
  GoogleMap.prototype.setIndoorEnabled = function (enabled) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setIndoorEnabled", {
      "sync": true
    }, arguments);
  };
  GoogleMap.prototype.setTrafficEnabled = function (enabled) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setTrafficEnabled", {
      "sync": true
    }, arguments);
  };
  GoogleMap.prototype.setCompassEnabled = function (enabled) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setCompassEnabled", {
      "sync": true
    }, arguments);
  };
  GoogleMap.prototype.setAllGesturesEnabled = function (enabled) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setAllGesturesEnabled", {
      "sync": true
    }, arguments);
  };
  GoogleMap.prototype.setVisible = function (visible) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setVisible", {
      "sync": true
    }, arguments);
  };
  GoogleMap.prototype.setPadding = function (top, right, bottom, left) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setPadding", {
      "sync": true
    }, arguments);
  };
  GoogleMap.prototype.setOptions = function (options) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setOptions", {
      "sync": true
    }, arguments);
  };
  GoogleMap.prototype.addMarker = function (options) {
    var _this = this;
    return function () {
      if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instanceAvailability)(_this) === true) {
        return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve, reject) {
          _this._objectInstance.addMarker(options, function (marker) {
            if (marker) {
              var overlayId_1 = marker.getId();
              var overlay_1 = new Marker(_this, marker);
              _this.get('_overlays')[overlayId_1] = overlay_1;
              marker.one(overlayId_1 + '_remove', function () {
                if (_this.get('_overlays')) {
                  _this.get('_overlays')[overlayId_1] = null;
                  overlay_1.destroy();
                }
              });
              resolve(overlay_1);
            } else {
              reject();
            }
          });
        });
      }
    }();
  };
  GoogleMap.prototype.addMarkerSync = function (options) {
    var _this = this;
    return function () {
      if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instanceAvailability)(_this) === true) {
        var marker = _this._objectInstance.addMarker(options);
        var overlayId = marker.getId();
        var overlay = new Marker(_this, marker);
        _this.get('_overlays')[overlayId] = overlay;
        marker.one(overlayId + '_remove', function () {
          if (_this.get('_overlays')) {
            _this.get('_overlays')[overlayId] = null;
            overlay.destroy();
          }
        });
        return overlay;
      }
    }();
  };
  GoogleMap.prototype.addMarkerCluster = function (options) {
    var _this = this;
    return function () {
      if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instanceAvailability)(_this) === true) {
        return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve, reject) {
          _this._objectInstance.addMarkerCluster(options, function (markerCluster) {
            if (markerCluster) {
              var overlayId_2 = markerCluster.getId();
              var overlay_2 = new MarkerCluster(_this, markerCluster);
              _this.get('_overlays')[overlayId_2] = overlay_2;
              markerCluster.one('remove', function () {
                if (_this.get('_overlays')) {
                  _this.get('_overlays')[overlayId_2] = null;
                  overlay_2.destroy();
                }
              });
              markerCluster.set('_overlays', new BaseArrayClass());
              resolve(overlay_2);
            } else {
              reject();
            }
          });
        });
      }
    }();
  };
  GoogleMap.prototype.addMarkerClusterSync = function (options) {
    var _this = this;
    return function () {
      if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instanceAvailability)(_this) === true) {
        var markerCluster = _this._objectInstance.addMarkerCluster(options);
        var overlayId = markerCluster.getId();
        var overlay = new MarkerCluster(_this, markerCluster);
        _this.get('_overlays')[overlayId] = overlay;
        markerCluster.one(overlayId + '_remove', function () {
          if (_this.get('_overlays')) {
            _this.get('_overlays')[overlayId] = null;
            overlay.destroy();
          }
        });
        markerCluster.set('_overlays', new BaseArrayClass());
        return overlay;
      }
    }();
  };
  GoogleMap.prototype.addCircle = function (options) {
    var _this = this;
    return function () {
      if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instanceAvailability)(_this) === true) {
        return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve, reject) {
          _this._objectInstance.addCircle(options, function (circle) {
            if (circle) {
              var overlayId_3 = circle.getId();
              var overlay_3 = new Circle(_this, circle);
              _this.get('_overlays')[overlayId_3] = overlay_3;
              circle.one(overlayId_3 + '_remove', function () {
                if (_this.get('_overlays')) {
                  _this.get('_overlays')[overlayId_3] = null;
                  overlay_3.destroy();
                }
              });
              resolve(overlay_3);
            } else {
              reject();
            }
          });
        });
      }
    }();
  };
  GoogleMap.prototype.addCircleSync = function (options) {
    var _this = this;
    return function () {
      if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instanceAvailability)(_this) === true) {
        var circle = _this._objectInstance.addCircle(options);
        var overlayId = circle.getId();
        var overlay = new Circle(_this, circle);
        _this.get('_overlays')[overlayId] = overlay;
        circle.one(overlayId + '_remove', function () {
          if (_this.get('_overlays')) {
            _this.get('_overlays')[overlayId] = null;
            overlay.destroy();
          }
        });
        return overlay;
      }
    }();
  };
  GoogleMap.prototype.addPolygon = function (options) {
    var _this = this;
    return function () {
      if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instanceAvailability)(_this) === true) {
        return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve, reject) {
          _this._objectInstance.addPolygon(options, function (polygon) {
            if (polygon) {
              var overlayId_4 = polygon.getId();
              var overlay_4 = new Polygon(_this, polygon);
              _this.get('_overlays')[overlayId_4] = overlay_4;
              polygon.one(overlayId_4 + '_remove', function () {
                if (_this.get('_overlays')) {
                  _this.get('_overlays')[overlayId_4] = null;
                  overlay_4.destroy();
                }
              });
              resolve(overlay_4);
            } else {
              reject();
            }
          });
        });
      }
    }();
  };
  GoogleMap.prototype.addPolygonSync = function (options) {
    var _this = this;
    return function () {
      if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instanceAvailability)(_this) === true) {
        var polygon = _this._objectInstance.addPolygon(options);
        var overlayId = polygon.getId();
        var overlay = new Polygon(_this, polygon);
        _this.get('_overlays')[overlayId] = overlay;
        polygon.one(overlayId + '_remove', function () {
          if (_this.get('_overlays')) {
            _this.get('_overlays')[overlayId] = null;
            overlay.destroy();
          }
        });
        return overlay;
      }
    }();
  };
  GoogleMap.prototype.addPolyline = function (options) {
    var _this = this;
    return function () {
      if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instanceAvailability)(_this) === true) {
        return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve, reject) {
          _this._objectInstance.addPolyline(options, function (polyline) {
            if (polyline) {
              var overlayId_5 = polyline.getId();
              var overlay_5 = new Polyline(_this, polyline);
              _this.get('_overlays')[overlayId_5] = overlay_5;
              polyline.one(overlayId_5 + '_remove', function () {
                if (_this.get('_overlays')) {
                  _this.get('_overlays')[overlayId_5] = null;
                  overlay_5.destroy();
                }
              });
              resolve(overlay_5);
            } else {
              reject();
            }
          });
        });
      }
    }();
  };
  GoogleMap.prototype.addPolylineSync = function (options) {
    var _this = this;
    return function () {
      if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instanceAvailability)(_this) === true) {
        var polyline = _this._objectInstance.addPolyline(options);
        var overlayId = polyline.getId();
        var overlay = new Polyline(_this, polyline);
        _this.get('_overlays')[overlayId] = overlay;
        polyline.one(overlayId + '_remove', function () {
          if (_this.get('_overlays')) {
            _this.get('_overlays')[overlayId] = null;
            overlay.destroy();
          }
        });
        return overlay;
      }
    }();
  };
  GoogleMap.prototype.addTileOverlay = function (options) {
    var _this = this;
    return function () {
      if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instanceAvailability)(_this) === true) {
        return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve, reject) {
          _this._objectInstance.addTileOverlay(options, function (tileOverlay) {
            if (tileOverlay) {
              var overlayId_6 = tileOverlay.getId();
              var overlay_6 = new TileOverlay(_this, tileOverlay);
              _this.get('_overlays')[overlayId_6] = overlay_6;
              tileOverlay.one(overlayId_6 + '_remove', function () {
                if (_this.get('_overlays')) {
                  _this.get('_overlays')[overlayId_6] = null;
                  overlay_6.destroy();
                }
              });
              resolve(overlay_6);
            } else {
              reject();
            }
          });
        });
      }
    }();
  };
  GoogleMap.prototype.addTileOverlaySync = function (options) {
    var _this = this;
    return function () {
      if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instanceAvailability)(_this) === true) {
        var tileOverlay = _this._objectInstance.addTileOverlay(options);
        var overlayId = tileOverlay.getId();
        var overlay = new TileOverlay(_this, tileOverlay);
        _this.get('_overlays')[overlayId] = overlay;
        tileOverlay.one(overlayId + '_remove', function () {
          if (_this.get('_overlays')) {
            _this.get('_overlays')[overlayId] = null;
            overlay.destroy();
          }
        });
        return overlay;
      }
    }();
  };
  GoogleMap.prototype.addGroundOverlay = function (options) {
    var _this = this;
    return function () {
      if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instanceAvailability)(_this) === true) {
        return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve, reject) {
          _this._objectInstance.addGroundOverlay(options, function (groundOverlay) {
            if (groundOverlay) {
              var overlayId_7 = groundOverlay.getId();
              var overlay_7 = new GroundOverlay(_this, groundOverlay);
              _this.get('_overlays')[overlayId_7] = overlay_7;
              groundOverlay.one(overlayId_7 + '_remove', function () {
                if (_this.get('_overlays')) {
                  _this.get('_overlays')[overlayId_7] = null;
                  overlay_7.destroy();
                }
              });
              resolve(overlay_7);
            } else {
              reject();
            }
          });
        });
      }
    }();
  };
  GoogleMap.prototype.addGroundOverlaySync = function (options) {
    var _this = this;
    return function () {
      if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instanceAvailability)(_this) === true) {
        var groundOverlay = _this._objectInstance.addGroundOverlay(options);
        var overlayId = groundOverlay.getId();
        var overlay = new GroundOverlay(_this, groundOverlay);
        _this.get('_overlays')[overlayId] = overlay;
        groundOverlay.one(overlayId + '_remove', function () {
          if (_this.get('_overlays')) {
            _this.get('_overlays')[overlayId] = null;
            overlay.destroy();
          }
        });
        return overlay;
      }
    }();
  };
  GoogleMap.prototype.addKmlOverlay = function (options) {
    var _this = this;
    return function () {
      if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instanceAvailability)(_this) === true) {
        return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve, reject) {
          _this._objectInstance.addKmlOverlay(options, function (kmlOverlay) {
            if (kmlOverlay) {
              var overlayId_8 = kmlOverlay.getId();
              var overlay_8 = new KmlOverlay(_this, kmlOverlay);
              _this.get('_overlays')[overlayId_8] = overlay_8;
              kmlOverlay.one(overlayId_8 + '_remove', function () {
                if (_this.get('_overlays')) {
                  _this.get('_overlays')[overlayId_8] = null;
                  overlay_8.destroy();
                }
              });
              resolve(overlay_8);
            } else {
              reject();
            }
          });
        });
      }
    }();
  };
  GoogleMap.prototype.toDataURL = function (options) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "toDataURL", {}, arguments);
  };
  var _c, _d;
  GoogleMap.pluginName = "GoogleMaps";
  GoogleMap.plugin = "cordova-plugin-googlemaps";
  GoogleMap = __decorate([__metadata("design:paramtypes", [Object, typeof (_d = typeof GoogleMapOptions !== "undefined" && GoogleMapOptions) === "function" ? _d : Object, Number])], GoogleMap);
  return GoogleMap;
}(BaseClass);

var GroundOverlay = /** @class */function (_super) {
  __extends(GroundOverlay, _super);
  function GroundOverlay(_map, _objectInstance) {
    var _this = _super.call(this, _objectInstance) || this;
    _this._map = _map;
    return _this;
  }
  GroundOverlay.prototype.getId = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getId", {
      "sync": true
    }, arguments);
  };
  /**
   * Returns the map instance.
   * @return {GoogleMap}
   */
  GroundOverlay.prototype.getMap = function () {
    return this._map;
  };
  GroundOverlay.prototype.setBounds = function (bounds) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setBounds", {
      "sync": true
    }, arguments);
  };
  GroundOverlay.prototype.setBearing = function (bearing) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setBearing", {
      "sync": true
    }, arguments);
  };
  GroundOverlay.prototype.getBearing = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getBearing", {
      "sync": true
    }, arguments);
  };
  GroundOverlay.prototype.setImage = function (imageUrl) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setImage", {
      "sync": true
    }, arguments);
  };
  GroundOverlay.prototype.setOpacity = function (opacity) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setOpacity", {
      "sync": true
    }, arguments);
  };
  GroundOverlay.prototype.getOpacity = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getOpacity", {
      "sync": true
    }, arguments);
  };
  GroundOverlay.prototype.setClickable = function (clickable) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setClickable", {
      "sync": true
    }, arguments);
  };
  GroundOverlay.prototype.getClickable = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getClickable", {
      "sync": true
    }, arguments);
  };
  GroundOverlay.prototype.setVisible = function (visible) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setVisible", {
      "sync": true
    }, arguments);
  };
  GroundOverlay.prototype.getVisible = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getVisible", {
      "sync": true
    }, arguments);
  };
  GroundOverlay.prototype.setZIndex = function (index) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setZIndex", {
      "sync": true
    }, arguments);
  };
  GroundOverlay.prototype.getZIndex = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getZIndex", {
      "sync": true
    }, arguments);
  };
  GroundOverlay.prototype.remove = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "remove", {}, arguments);
  };
  return GroundOverlay;
}(BaseClass);

var HtmlInfoWindow = /** @class */function (_super) {
  __extends(HtmlInfoWindow, _super);
  function HtmlInfoWindow() {
    return _super.call(this, new (GoogleMaps.getPlugin().HtmlInfoWindow)()) || this;
  }
  HtmlInfoWindow.prototype.setBackgroundColor = function (color) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setBackgroundColor", {}, arguments);
  };
  HtmlInfoWindow.prototype.setContent = function (content, cssOptions) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setContent", {}, arguments);
  };
  HtmlInfoWindow.prototype.open = function (marker) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "open", {}, arguments);
  };
  HtmlInfoWindow.prototype.close = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "close", {}, arguments);
  };
  HtmlInfoWindow.plugin = "cordova-plugin-googlemaps";
  HtmlInfoWindow.pluginName = "GoogleMaps";
  HtmlInfoWindow.pluginRef = "plugin.google.maps.HtmlInfoWindow";
  HtmlInfoWindow.repo = "";
  HtmlInfoWindow = __decorate([__metadata("design:paramtypes", [])], HtmlInfoWindow);
  return HtmlInfoWindow;
}(BaseClass);

var Marker = /** @class */function (_super) {
  __extends(Marker, _super);
  function Marker(_map, _objectInstance) {
    var _this = _super.call(this, _objectInstance) || this;
    _this._map = _map;
    return _this;
  }
  Marker.prototype.getId = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getId", {
      "sync": true
    }, arguments);
  };
  /**
   * Returns the map instance.
   * @return {GoogleMap}
   */
  Marker.prototype.getMap = function () {
    return this._map;
  };
  Marker.prototype.setPosition = function (latLng) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setPosition", {
      "sync": true
    }, arguments);
  };
  Marker.prototype.getPosition = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getPosition", {
      "sync": true
    }, arguments);
  };
  Marker.prototype.showInfoWindow = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "showInfoWindow", {
      "sync": true
    }, arguments);
  };
  Marker.prototype.hideInfoWindow = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "hideInfoWindow", {
      "sync": true
    }, arguments);
  };
  Marker.prototype.setAnimation = function (animation) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setAnimation", {
      "sync": true
    }, arguments);
  };
  Marker.prototype.setDisableAutoPan = function (disableAutoPan) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setDisableAutoPan", {
      "sync": true
    }, arguments);
  };
  Marker.prototype.setVisible = function (visible) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setVisible", {
      "sync": true
    }, arguments);
  };
  Marker.prototype.isVisible = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "isVisible", {
      "sync": true
    }, arguments);
  };
  Marker.prototype.setTitle = function (title) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setTitle", {
      "sync": true
    }, arguments);
  };
  Marker.prototype.getTitle = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getTitle", {
      "sync": true
    }, arguments);
  };
  Marker.prototype.setSnippet = function (snippet) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setSnippet", {
      "sync": true
    }, arguments);
  };
  Marker.prototype.getSnippet = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getSnippet", {
      "sync": true
    }, arguments);
  };
  Marker.prototype.setOpacity = function (alpha) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setOpacity", {
      "sync": true
    }, arguments);
  };
  Marker.prototype.getOpacity = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getOpacity", {
      "sync": true
    }, arguments);
  };
  Marker.prototype.remove = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "remove", {}, arguments);
  };
  Marker.prototype.setIconAnchor = function (x, y) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setIconAnchor", {
      "sync": true
    }, arguments);
  };
  Marker.prototype.setInfoWindowAnchor = function (x, y) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setInfoWindowAnchor", {
      "sync": true
    }, arguments);
  };
  Marker.prototype.isInfoWindowShown = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "isInfoWindowShown", {
      "sync": true
    }, arguments);
  };
  Marker.prototype.setZIndex = function (zIndex) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setZIndex", {
      "sync": true
    }, arguments);
  };
  Marker.prototype.getZIndex = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getZIndex", {
      "sync": true
    }, arguments);
  };
  Marker.prototype.setDraggable = function (draggable) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setDraggable", {
      "sync": true
    }, arguments);
  };
  Marker.prototype.isDraggable = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "isDraggable", {
      "sync": true
    }, arguments);
  };
  Marker.prototype.setFlat = function (flat) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setFlat", {
      "sync": true
    }, arguments);
  };
  Marker.prototype.setIcon = function (icon) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setIcon", {
      "sync": true
    }, arguments);
  };
  Marker.prototype.setRotation = function (rotation) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setRotation", {
      "sync": true
    }, arguments);
  };
  Marker.prototype.getRotation = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getRotation", {
      "sync": true
    }, arguments);
  };
  return Marker;
}(BaseClass);

var MarkerCluster = /** @class */function (_super) {
  __extends(MarkerCluster, _super);
  function MarkerCluster(_map, _objectInstance) {
    var _this = _super.call(this, _objectInstance) || this;
    _this._map = _map;
    return _this;
  }
  MarkerCluster.prototype.getId = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getId", {
      "sync": true
    }, arguments);
  };
  MarkerCluster.prototype.addMarker = function (marker) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "addMarker", {
      "sync": true
    }, arguments);
  };
  MarkerCluster.prototype.addMarkers = function (markers) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "addMarkers", {
      "sync": true
    }, arguments);
  };
  MarkerCluster.prototype.remove = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "remove", {}, arguments);
  };
  /**
   * Returns the map instance.
   * @return {GoogleMap}
   */
  MarkerCluster.prototype.getMap = function () {
    return this._map;
  };
  return MarkerCluster;
}(BaseClass);

var Polygon = /** @class */function (_super) {
  __extends(Polygon, _super);
  function Polygon(_map, _objectInstance) {
    var _this = _super.call(this, _objectInstance) || this;
    _this._map = _map;
    return _this;
  }
  Polygon.prototype.getId = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getId", {
      "sync": true
    }, arguments);
  };
  /**
   * Returns the map instance.
   * @return {GoogleMap}
   */
  Polygon.prototype.getMap = function () {
    return this._map;
  };
  Polygon.prototype.setPoints = function (points) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setPoints", {
      "sync": true
    }, arguments);
  };
  /**
   * Returns an instance of the BaseArrayClass.
   * You can modify the points.
   * @return {BaseArrayClass<ILatLng>}
   */
  Polygon.prototype.getPoints = function () {
    return new BaseArrayClass(this._objectInstance.getPoints());
  };
  Polygon.prototype.setHoles = function (holes) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setHoles", {
      "sync": true
    }, arguments);
  };
  /**
   * Returns an instance of the BaseArrayClass.
   * You can modify the holes.
   * @return {BaseArrayClass<ILatLng[]>}
   */
  Polygon.prototype.getHoles = function () {
    var holes = this._objectInstance.getPoints();
    var results = new BaseArrayClass();
    holes.forEach(function (hole) {
      results.push(hole);
    });
    return results;
  };
  Polygon.prototype.setFillColor = function (fillColor) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setFillColor", {
      "sync": true
    }, arguments);
  };
  Polygon.prototype.getFillColor = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getFillColor", {
      "sync": true
    }, arguments);
  };
  Polygon.prototype.setStrokeColor = function (strokeColor) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setStrokeColor", {
      "sync": true
    }, arguments);
  };
  Polygon.prototype.getStrokeColor = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getStrokeColor", {
      "sync": true
    }, arguments);
  };
  Polygon.prototype.setClickable = function (clickable) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setClickable", {
      "sync": true
    }, arguments);
  };
  Polygon.prototype.getClickable = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getClickable", {
      "sync": true
    }, arguments);
  };
  Polygon.prototype.setVisible = function (visible) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setVisible", {
      "sync": true
    }, arguments);
  };
  Polygon.prototype.getVisible = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getVisible", {
      "sync": true
    }, arguments);
  };
  Polygon.prototype.setZIndex = function (zIndex) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setZIndex", {
      "sync": true
    }, arguments);
  };
  Polygon.prototype.getZIndex = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getZIndex", {
      "sync": true
    }, arguments);
  };
  Polygon.prototype.remove = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "remove", {}, arguments);
  };
  Polygon.prototype.setStrokeWidth = function (strokeWidth) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setStrokeWidth", {
      "sync": true
    }, arguments);
  };
  Polygon.prototype.getStrokeWidth = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getStrokeWidth", {
      "sync": true
    }, arguments);
  };
  Polygon.prototype.setGeodesic = function (geodesic) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setGeodesic", {
      "sync": true
    }, arguments);
  };
  Polygon.prototype.getGeodesic = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getGeodesic", {
      "sync": true
    }, arguments);
  };
  return Polygon;
}(BaseClass);

var Polyline = /** @class */function (_super) {
  __extends(Polyline, _super);
  function Polyline(_map, _objectInstance) {
    var _this = _super.call(this, _objectInstance) || this;
    _this._map = _map;
    return _this;
  }
  Polyline.prototype.getId = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getId", {
      "sync": true
    }, arguments);
  };
  /**
   * Returns the map instance.
   * @return {GoogleMap}
   */
  Polyline.prototype.getMap = function () {
    return this._map;
  };
  Polyline.prototype.setPoints = function (points) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setPoints", {
      "sync": true
    }, arguments);
  };
  /**
   * Returns an instance of the BaseArrayClass
   * You can modify the points.
   * @return {BaseArrayClass<ILatLng>}
   */
  Polyline.prototype.getPoints = function () {
    return new BaseArrayClass(this._objectInstance.getPoints());
  };
  Polyline.prototype.setGeoDesic = function (geoDesic) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setGeoDesic", {
      "sync": true
    }, arguments);
  };
  Polyline.prototype.getGeodesic = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getGeodesic", {
      "sync": true
    }, arguments);
  };
  Polyline.prototype.setVisible = function (visible) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setVisible", {
      "sync": true
    }, arguments);
  };
  Polyline.prototype.getVisible = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getVisible", {
      "sync": true
    }, arguments);
  };
  Polyline.prototype.setClickable = function (clickable) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setClickable", {
      "sync": true
    }, arguments);
  };
  Polyline.prototype.getClickable = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getClickable", {
      "sync": true
    }, arguments);
  };
  Polyline.prototype.setStrokeColor = function (strokeColor) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setStrokeColor", {
      "sync": true
    }, arguments);
  };
  Polyline.prototype.getStrokeColor = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getStrokeColor", {
      "sync": true
    }, arguments);
  };
  Polyline.prototype.setStrokeWidth = function (strokeWidth) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setStrokeWidth", {
      "sync": true
    }, arguments);
  };
  Polyline.prototype.getStrokeWidth = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getStrokeWidth", {
      "sync": true
    }, arguments);
  };
  Polyline.prototype.setZIndex = function (index) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setZIndex", {
      "sync": true
    }, arguments);
  };
  Polyline.prototype.getZIndex = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getZIndex", {
      "sync": true
    }, arguments);
  };
  Polyline.prototype.remove = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "remove", {}, arguments);
  };
  return Polyline;
}(BaseClass);

var TileOverlay = /** @class */function (_super) {
  __extends(TileOverlay, _super);
  function TileOverlay(_map, _objectInstance) {
    var _this = _super.call(this, _objectInstance) || this;
    _this._map = _map;
    return _this;
  }
  TileOverlay.prototype.getId = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getId", {
      "sync": true
    }, arguments);
  };
  /**
   * Returns the map instance.
   * @return {GoogleMap}
   */
  TileOverlay.prototype.getMap = function () {
    return this._map;
  };
  TileOverlay.prototype.setFadeIn = function (fadeIn) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setFadeIn", {
      "sync": true
    }, arguments);
  };
  TileOverlay.prototype.getFadeIn = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getFadeIn", {
      "sync": true
    }, arguments);
  };
  TileOverlay.prototype.setZIndex = function (zIndex) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setZIndex", {
      "sync": true
    }, arguments);
  };
  TileOverlay.prototype.getZIndex = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getZIndex", {
      "sync": true
    }, arguments);
  };
  TileOverlay.prototype.setOpacity = function (opacity) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setOpacity", {
      "sync": true
    }, arguments);
  };
  TileOverlay.prototype.getOpacity = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getOpacity", {
      "sync": true
    }, arguments);
  };
  TileOverlay.prototype.setVisible = function (visible) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setVisible", {
      "sync": true
    }, arguments);
  };
  TileOverlay.prototype.getVisible = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getVisible", {
      "sync": true
    }, arguments);
  };
  TileOverlay.prototype.getTileSize = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getTileSize", {
      "sync": true
    }, arguments);
  };
  TileOverlay.prototype.remove = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "remove", {}, arguments);
  };
  return TileOverlay;
}(BaseClass);

var KmlOverlay = /** @class */function (_super) {
  __extends(KmlOverlay, _super);
  function KmlOverlay(_map, _objectInstance) {
    var _this = _super.call(this, _objectInstance) || this;
    _this._map = _map;
    Object.defineProperty(self, 'camera', {
      value: _this._objectInstance.camera,
      writable: false
    });
    Object.defineProperty(self, 'kmlData', {
      value: _this._objectInstance.kmlData,
      writable: false
    });
    return _this;
  }
  KmlOverlay.prototype.getDefaultViewport = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getDefaultViewport", {
      "sync": true
    }, arguments);
  };
  KmlOverlay.prototype.getId = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getId", {
      "sync": true
    }, arguments);
  };
  /**
   * Returns the map instance.
   * @return {GoogleMap}
   */
  KmlOverlay.prototype.getMap = function () {
    return this._map;
  };
  KmlOverlay.prototype.setVisible = function (visible) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setVisible", {
      "sync": true
    }, arguments);
  };
  KmlOverlay.prototype.getVisible = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getVisible", {
      "sync": true
    }, arguments);
  };
  KmlOverlay.prototype.setClickable = function (clickable) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setClickable", {
      "sync": true
    }, arguments);
  };
  KmlOverlay.prototype.getClickable = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getClickable", {
      "sync": true
    }, arguments);
  };
  KmlOverlay.prototype.remove = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "remove", {}, arguments);
  };
  return KmlOverlay;
}(BaseClass);



/***/ }),

/***/ 312:
/*!******************************************************************!*\
  !*** ./src/app/pages/map-search/map-search.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#map_canvas {\n  width: 100%;\n  height: 100%;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/map-search/map-search.page.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;AACJ","sourcesContent":["#map_canvas {\n    width: 100%;\n    height: 100%;\n  }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 924:
/*!******************************************************************!*\
  !*** ./src/app/pages/map-search/map-search.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar  color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      {{'GOOGLE_MAPS' | translate}}\n    </ion-title>\n  </ion-toolbar>\n  <ion-searchbar no-padding [(ngModel)]=\"autocomplete.input\" (ionInput)=\"updateSearchResults()\" placeholder=\"search\">\n  </ion-searchbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list [hidden]=\"autocompleteItems.length == 0\">\n    <ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"selectSearchResult(item)\">\n      {{ item.description }}\n    </ion-item>\n  </ion-list>\n\n  <div id=\"map_canvas\"></div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_map-search_map-search_module_ts.js.map