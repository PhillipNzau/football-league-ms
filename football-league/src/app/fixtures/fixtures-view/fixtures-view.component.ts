import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixtures-view',
  templateUrl: './fixtures-view.component.html',
  styleUrls: ['./fixtures-view.component.scss']
})
export class FixturesViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  numSeq(n: number): Array<number> {
    return Array(n);
  }

}
