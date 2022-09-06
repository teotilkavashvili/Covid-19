import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsDataComponent } from './covidInfo/usData/usData.component';

const routes: Routes = [
  { path: '', redirectTo: 'data', pathMatch: 'full' },
  {
    path: 'data',
    loadChildren: () =>
      import('./covidInfo/dataByState/dataByState.module').then(
        (m) => m.DataByStateModule
      ),
  },
  {
    path: 'us',
    loadChildren: () =>
      import('./covidInfo/usData/usData.module').then((m) => m.UsDataModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
