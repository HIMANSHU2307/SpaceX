import { SpacexService } from './../../services/spacex.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoading = false;

  constructor(
    private spacexDataService: SpacexService
  ) { }

  ngOnInit() {
    // this.getData('');
  }

  getData(query) {
    this.isLoading = true;
    this.spacexDataService.GetSpaceXData(query)
      .subscribe(data => {
        this.spacexDataService.SpaceXData.next(data);
        this.isLoading = false;
      });
  }

}
