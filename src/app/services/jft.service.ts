import { Injectable } from '@angular/core';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';


@Injectable({
  providedIn: 'root'
})

export class JftService {

  constructor(
    private http: HTTP
  ) { }

  JftUrlEnglish = 'https://justforto.day/?format=table';

  async getEnglishJFT() {
    const data = await this.http.get(this.JftUrlEnglish, {}, {});
    console.log(data.data);
    return data.data;
  }
}
