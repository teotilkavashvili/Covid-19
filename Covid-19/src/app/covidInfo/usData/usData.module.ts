import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsDataRoutingModule } from './usData-routing.module';
import { UsDataComponent } from './usData.component';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [CommonModule, UsDataRoutingModule, SharedModule],
  declarations: [UsDataComponent],
})
export class UsDataModule {}
