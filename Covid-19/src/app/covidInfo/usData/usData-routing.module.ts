import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsDataComponent } from './usData.component';

const routes: Routes = [
  {
    path: '',
    component: UsDataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsDataRoutingModule {}
