import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsDataComponent } from './covidInfo/usData/usData.component';

const routes: Routes = [
  { path: ' ', redirectTo: 'us', pathMatch: 'full' },
  { path: 'us', component: UsDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
