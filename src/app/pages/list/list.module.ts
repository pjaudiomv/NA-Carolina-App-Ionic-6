import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListPageRoutingModule } from './list-routing.module';
import { ListPage } from  './list.page';
import { TranslateModule } from '@ngx-translate/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { MeetingListProviderService } from '../../services/meeting-list-provider.service';
import { ServiceGroupsProviderService } from '../../services/service-groups-provider.service';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ComponentModule } from '../../components/component/component.module';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { StorageService } from '../../services/storage.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PipesModule,
    ListPageRoutingModule,
    ComponentModule
  ],
  declarations: [
    ListPage
  ],
  providers: [
    InAppBrowser,
    MeetingListProviderService,
    ServiceGroupsProviderService,
    HTTP,
    StorageService
  ]
})
export class ListPageModule {}
