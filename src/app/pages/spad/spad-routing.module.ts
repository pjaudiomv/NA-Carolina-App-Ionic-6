import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpadPage } from './spad.page';

const routes: Routes = [
  {
    path: '',
    component: SpadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpadPageRoutingModule {}
