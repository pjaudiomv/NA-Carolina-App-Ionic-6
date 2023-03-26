import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SpadPageRoutingModule } from './spad-routing.module';
import { SpadPage } from './spad.page';
import { TranslateModule } from '@ngx-translate/core';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { SpadService } from '../../services/spad.service';
import { StorageService } from '../../services/storage.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpadPageRoutingModule,
    TranslateModule
  ],
  providers: [
    HTTP,
    SpadService,
    StorageService
  ],
  declarations: [SpadPage]
})
export class SpadPageModule {}
