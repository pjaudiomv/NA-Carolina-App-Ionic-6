import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MeetingListProviderService {

  meetings: any;
  crnaBMLT = environment.crnaBMLT;
  tomatoBMLT = environment.tomatoBMLT;
  tomatoCrnaBMLT = environment.tomatoCrnaBMLT;

  constructor(public http: HttpClient) {
    console.log('Hello MeetingListProvider Provider');
  }

  getApiUrlMap: string = this.crnaBMLT + '?switcher=GetSearchResults&sort_keys=longitude,latitude,weekday_tinyint,start_time';
  getApiUrlDay: string = this.crnaBMLT + '?switcher=GetSearchResults&sort_keys=weekday_tinyint,start_time';

  getMeetings() {
    return this.http.get(this.getApiUrlMap);
  }

  getAllMeetings() {
    return this.http.get(this.getApiUrlDay);
  }

  getCircleMeetings(lat: string, long: string, radius: string) {
    const getApiUrlCircleMap: string = this.tomatoBMLT
      + '?switcher=GetSearchResults&geo_width=' + radius
      + '&long_val=' + long
      + '&lat_val=' + lat
      + '&sort_keys=longitude,latitude&callingApp=na-crna-ionic';

    return this.http.get(getApiUrlCircleMap);
  }

  getMeetingsSortedByDay() {
    return this.http.get(this.getApiUrlDay);
  }

  getAutoRadiusMeetings(lat: string, long: string, radius: string) {
    const getAutoRadiusMeetingsURL: string = this.tomatoBMLT
      + '?switcher=GetSearchResults&geo_width='
      + '-'
      + radius
      + '&long_val='
      + long
      + '&lat_val='
      + lat
      + '&sort_keys=longitude,latitude&callingApp=na-crna-ionic';
    return this.http.get(getAutoRadiusMeetingsURL);
  }

  getRadiusMeetings(lat: string, long: string, radius: string | number) {
    const getRadiusMeetingsURL: string = this.tomatoBMLT
      + '?switcher=GetSearchResults'
      + '&data_field_key=longitude,latitude,id_bigint'
      + '&geo_width=' + radius
      + '&long_val=' + long
      + '&lat_val=' + lat
      + '&sort_keys=longitude,latitude&callingApp=na-crna-ionic';
    return this.http.get(getRadiusMeetingsURL);
  }

  getAddressMeetings(lat: string, long: string, radius: string) {
    const getAddressMeetingsURL: string = this.tomatoBMLT
      + '?switcher=GetSearchResults&geo_width='
      + '-'
      + radius
      + '&long_val='
      + long
      + '&lat_val='
      + lat
      + '&sort_keys=longitude,latitude&callingApp=na-crna-ionic';
    return this.http.get(getAddressMeetingsURL);
  }

  getNearestMeeting(lat: string, long: string) {
    const getAddressMeetingsURL: string = this.tomatoBMLT
      + '?switcher=GetSearchResults&geo_width='
      + '-1'
      + '&long_val='
      + long
      + '&lat_val='
      + lat
      + '&sort_keys=longitude,latitude&callingApp=na-crna-ionic';
    return this.http.get(getAddressMeetingsURL);
  }

  getMeetingsByAreaProvider(areaID: string) {
    const getMeetingsByAreaURL: string = this.crnaBMLT
      + '?switcher=GetSearchResults&services='
      + areaID
      + '&sort_keys=weekday_tinyint,start_time&callingApp=na-crna-ionic';
    return this.http.get(getMeetingsByAreaURL);
  }

  getCounties() {
    const getCountiesURL: string = this.crnaBMLT
      + '?switcher=GetSearchResults&services=119&recursive=1&data_field_key=location_sub_province&sort_keys=location_sub_province';
    return this.http.get(getCountiesURL);
  }

  getMeetingsByCountyProvider(countyName: string) {
    const getCountyMeetingsURL: string = this.crnaBMLT
      + '?switcher=GetSearchResults&services=119&recursive=1&data_field_key=location_sub_province&sort_keys=location_sub_province';
    return this.http.get(getCountyMeetingsURL);
  }

  getSingleMeetingByID(id: string) {
    const getSingleMeetingByIDURL: string = this.tomatoBMLT
      + '?switcher=GetSearchResults&meeting_ids[]='
      + id;
    return this.http.get(getSingleMeetingByIDURL);
  }

  getCrnaTomatoMeetings() {
    return this.http.get(this.tomatoCrnaBMLT);
  }
}
