import { SpacexService } from './../../../services/spacex.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {
  spaceDataRec: any;

  constructor(
    private spaceXService: SpacexService
  ) { }

  ngOnInit() {
    this.spaceXService.SpaceXData.subscribe(spaceData => {
      this.spaceDataRec = spaceData;
    });
  }

}
