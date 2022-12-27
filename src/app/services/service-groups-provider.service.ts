import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ServiceGroupsProviderService {

  getApiUrlServiceGroups = environment.getApiUrlServiceGroups;

  constructor(public http: HttpClient) {
  }

  getAllServiceGroups() {
    return this.http.get(this.getApiUrlServiceGroups);
  }
}
