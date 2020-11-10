import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  launchYearList: LaunchYear[] = [
    {
      value: '2006',
      is_Active: false
    },
    {
      value: '2007',
      is_Active: false
    },
    {
      value: '2008',
      is_Active: false
    },
    {
      value: '2009',
      is_Active: false
    },
    {
      value: '2010',
      is_Active: false
    },
    {
      value: '2011',
      is_Active: false
    },
    {
      value: '2012',
      is_Active: false
    },
    {
      value: '2013',
      is_Active: false
    },
    {
      value: '2014',
      is_Active: false
    },
    {
      value: '2015',
      is_Active: false
    },
    {
      value: '2016',
      is_Active: false
    },
    {
      value: '2017',
      is_Active: false
    },
    {
      value: '2018',
      is_Active: false
    },
    {
      value: '2019',
      is_Active: false
    },
    {
      value: '2020',
      is_Active: false
    }
  ];

  launchSuccessList: LaunchSuccess[] = [
    {
      value: 'true',
      is_Active: false
    },
    {
      value: 'false',
      is_Active: false
    }
  ];

  launchLandingList: LaunchLanding[] = [
    {
      value: 'true',
      is_Active: false
    },
    {
      value: 'false',
      is_Active: false
    }
  ];

  @Output() callForData: EventEmitter<any> = new EventEmitter();
  launchYear = '';
  successLaunch = '';
  successLanding = '';
  query = '';
  querylaunchYear = '';
  querysuccessLaunch = '';
  querysuccessLanding = '';
  limit: any;
  querylimit: string;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
  ) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        if (params.launch_year) {
          this.launchYear = params.launch_year;
          this.querylaunchYear = `&launch_year=${this.launchYear}`;
          this.launchYearList.forEach(year => year.value === this.launchYear ? year.is_Active = true : null );
        }
        if (params.launch_success) {
          this.successLaunch = params.launch_success;
          this.querysuccessLaunch = `&launch_success=${this.successLaunch}`;
          this.launchSuccessList.forEach(launch => launch.value === this.successLaunch ? launch.is_Active = true : null );
        }
        if (params.land_success) {
          this.successLanding = params.land_success;
          this.querysuccessLanding = `&land_success=${this.successLanding}`;
          this.launchLandingList.forEach(land => land.value === this.successLanding ? land.is_Active = true : null );

        }
        this.query = this.querylaunchYear + this.querysuccessLanding + this.querysuccessLaunch;
        this.callForData.emit(this.query);
      });
  }

  handleFilter(event) {
    switch (event.filterSection) {
      case 'Launch Year':
        if (event.data.is_Active) {
          this.launchYear = event.data.value;
          this.querylaunchYear = `&launch_year=${this.launchYear}`;
        } else {
          if (event.data.value == this.launchYear) {
            this.launchYear = '';
            this.querylaunchYear = '';
          }
        }
        break;

      case 'Successful Launch':
        if (event.data.is_Active) {
          this.successLaunch = event.data.value;
          this.querysuccessLaunch = `&launch_success=${this.successLaunch}`;
        } else {
          if (event.data.value == this.successLaunch) {
            this.successLaunch = '';
            this.querysuccessLaunch = '';
          }
        }
        break;

      case 'Successful landing':
        if (event.data.is_Active) {
          this.successLanding = event.data.value;
          this.querysuccessLanding = `&land_success=${this.successLanding}`;
        } else {
          if (event.data.value == this.successLanding) {
            this.successLanding = '';
            this.querysuccessLanding = '';
          }
        }
        break;

      default:
        break;
    }
    this.query = this.querylaunchYear + this.querysuccessLanding + this.querysuccessLaunch;
    this.router.navigate([''], { queryParams: {
      launch_year: this.launchYear,
      launch_success:  this.successLaunch,
      land_success: this.successLanding
    } });
    this.callForData.emit(this.query);
  }

}

interface LaunchYear {
  value: string;
  is_Active: boolean
}

interface LaunchSuccess {
  value: string;
  is_Active: boolean
}

interface LaunchLanding {
  value: string;
  is_Active: boolean
}
