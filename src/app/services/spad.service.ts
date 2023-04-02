import { Injectable } from '@angular/core';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';


@Injectable({
  providedIn: 'root'
})

export class SpadService {

  constructor(
    private http: HTTP
  ) { }

  SpadUrlEnglish = 'https://spiritualprinciplea.day/?format=table';

  async getEnglishSPAD() {
    const data = await this.http.get(this.SpadUrlEnglish, {}, {});
    console.log(data.data);
    return data.data;
  }
}
