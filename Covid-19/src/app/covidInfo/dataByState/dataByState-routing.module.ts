import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataByStateComponent } from './dataByState.component';

const routes: Routes = [
  {
    path: '',
    component: DataByStateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataByStateRoutingModule {}
