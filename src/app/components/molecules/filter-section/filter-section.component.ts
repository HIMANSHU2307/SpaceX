import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.css']
})
export class FilterSectionComponent implements OnInit {

  @Input() filterHead: any;
  @Input() filterData: any;

  @Output() applyFilter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleFilter(filterData) {
    let currentStatus = filterData.is_Active;
    this.filterData.forEach(spaceData => {
      spaceData.is_Active = false;
    });
    filterData.is_Active = !currentStatus;

    this.applyFilter.emit({
      data: filterData,
      filterSection: this.filterHead
    });
  }

}
