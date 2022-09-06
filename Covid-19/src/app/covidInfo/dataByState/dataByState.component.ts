import { Component, OnInit } from '@angular/core';
import { StateByDataService } from 'src/app/_services/stateByData.service';

@Component({
  selector: 'app-dataByState',
  templateUrl: './dataByState.component.html',
  styleUrls: ['./dataByState.component.scss'],
})
export class DataByStateComponent implements OnInit {
  stateList: any;
  dataByState: any;
  selectedStateCode: string = 'al';
  selectedStateName: string = 'Alabama';

  constructor(private stateService: StateByDataService) {}

  ngOnInit() {
    this.fillstateList();
    this.getDataByState(this.selectedStateCode, this.selectedStateName);
  }

  fillstateList() {
    this.stateService.getStateList().subscribe((stateList: any[]) => {
      this.stateList = stateList;
    });
  }

  getDataByState(code: string, name: string) {
    this.selectedStateCode = code;
    this.selectedStateName = name;
    this.stateService
      .getStateData(code.toLocaleLowerCase())
      .subscribe((statedata: any[]) => {
        this.dataByState = statedata;
      });
  }

  ngOnDestroy() {}
}
