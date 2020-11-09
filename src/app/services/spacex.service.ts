import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  constructor(
    private http: HttpClient
  ) { }

  SpaceXData = new Subject();

  GetSpaceXData(query) {
    return this.http.get(
      `https://api.spaceXdata.com/v3/launches?limit=100${query}`
    );
  }

}


