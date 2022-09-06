import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataByStateComponent } from './dataByState.component';
import { DataByStateRoutingModule } from './dataByState-routing.module';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [CommonModule, DataByStateRoutingModule, SharedModule],
  declarations: [DataByStateComponent],
})
export class DataByStateModule {}
