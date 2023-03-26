import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
import { SpadService } from '../../services/spad.service';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-spad',
  templateUrl: './spad.page.html',
  styleUrls: ['./spad.page.scss'],
})
export class SpadPage implements OnInit {

  spad;
  englishspad;
  loader = null;
  headers = null;
  loadingText;

  constructor(
    public loadingCtrl: LoadingService,
    public SpadProvider: SpadService,
    private translate: TranslateService,
    private storage: StorageService
  ) { }

  ngOnInit() {
    this.loadingCtrl.present('Getting today\'s Spiritual Principle A Day');
    this.spad = this.getSPAD();
  }

  getSPAD() {
    this.SpadProvider.getEnglishSPAD().then((data) => {
      this.spad = data;
      this.loadingCtrl.dismiss();
    });
  }

}
